<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use App\Models\Subscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Stripe\Customer;
use Stripe\Stripe;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;


class SubscriptionController extends Controller
{
    public function checkout(Request $request)
    {
        $selected_plan = Plan::where('stripe_plan', $request->input('plan'))->first();
//        dd($selected_plan);
        Stripe::setApiKey(env('STRIPE_SECRET'));
        $checkout_session = \Stripe\Checkout\Session::create([
            'line_items' => [[
                'price' => $selected_plan->stripe_plan,
                'quantity' => 1,
            ]],
            'mode' => 'subscription',
//            Custom success from DOCS
            'success_url' => route('checkout.success', [], true) . "?session_id={CHECKOUT_SESSION_ID}",
            'cancel_url' => route('checkout.cancelled', [], true),
        ]);

        $order = new Subscription();
        $order->user_id = auth()->user()->id;
        $order->name = $selected_plan->name;
        $order->stripe_id = $checkout_session->id;
        $order->stripe_status = 'unpaid';
        $order->stripe_price = $selected_plan->stripe_plan;
        $order->quantity = 1;
        $order->save();

        return redirect($checkout_session->url);
    }

    public function success(Request $request)
    {
        Stripe::setApiKey(env('STRIPE_SECRET'));
        $session_id = $request->get('session_id');

        try {
            $session = \Stripe\Checkout\Session::retrieve($session_id);
//        If someone tries to access the success page without a valid or malicious session id then it will throw an error
            if (!$session) {
                throw new NotFoundHttpException('Session not found');
            }

            $customer = \Stripe\Customer::retrieve($session->customer);
//            confirm the order and update the status
            $order = Subscription::where('stripe_id', $session->id)->where("stripe_status", '=', 'unpaid')->first();
//            dd($order);
            if (!$order) {
                throw new NotFoundHttpException('Order not found');
            }
            $order->stripe_status = 'paid';
            $order->save();
//            update the user with the stripe id save it to the database
            $user = auth()->user();
            $user->stripe_id = $customer->id;
            $user->save();
            return Inertia::render('Success', [
                'customer' => $customer,
            ]);
//            if the user refreshes the page then it will redirect to cancelled because the sessionId was consumed and order updated
        } catch (\Exception $e) {
//            Or show a generic error
            Log::error($e->getMessage());
            return redirect()->route('checkout.cancelled');
        }
//        if the button is clicked and turns green and then the user refreshes or the link is closed the order will stay unpaid.
//        here we need to implement webhooks to update the order status
    }

    public function cancelled()
    {
        return Inertia::render('Cancel');
    }

    public function webhook()
    {
//        in the cli run
//        stripe listen --forward-to localhost:8000/webhook
        $endpoint_secret = env('STRIPE_WEBHOOK_SECRET');

        $payload = @file_get_contents('php://input');
        $event = null;

        try {
            $event = \Stripe\Event::constructFrom(
                json_decode($payload, true)
            );
        } catch (\UnexpectedValueException $e) {
            // Invalid payload
            return response()->json(['error' => $e->getMessage()], 400);
        }
        if ($endpoint_secret) {
            // Only verify the event if there is an endpoint secret defined
            // Otherwise use the basic decoded event
            $sig_header = $_SERVER['HTTP_STRIPE_SIGNATURE'];
            try {
                $event = \Stripe\Webhook::constructEvent(
                    $payload, $sig_header, $endpoint_secret
                );
            } catch (\Stripe\Exception\SignatureVerificationException $e) {
                // Invalid signature
//                echo '⚠️  Webhook error while validating signature.';
                http_response_code(400);
                exit();
            }
        }

        // Handle the event
        switch ($event->type) {
            case 'payment_intent.succeeded':
                $paymentIntent = $event->data->object; // contains a \Stripe\PaymentIntent
                // Then define and call a method to handle the successful payment intent.
                // handlePaymentIntentSucceeded($paymentIntent);
                break;
            case 'payment_method.attached':
                $paymentMethod = $event->data->object; // contains a \Stripe\PaymentMethod
                // Then define and call a method to handle the successful attachment of a PaymentMethod.
                // handlePaymentMethodAttached($paymentMethod);
                break;
            case 'checkout.session.completed':
//                do the same as in the success method but here we are using webhooks
                $session = $event->data->object;
                $order = Subscription::where('stripe_id', $session->id)->first();
                $customer = \Stripe\Customer::retrieve($session->customer);
                if ($order && $order->stripe_status === 'unpaid') {
                    $order->stripe_status = 'paid';
                    $order->save();
//                      do something else here
                    return Inertia::render('Success', [
                        'customer' => $customer,
                    ]);
                }
            default:
                // Unexpected event type
                error_log('Received unknown event type');
        }
    }

    public function customerPortal()
    {
        Stripe::setApiKey(env('STRIPE_SECRET'));

        $customerID = auth()->user()->stripe_id;
//        dd(Customer::all());
        $customer = \Stripe\Customer::retrieve($customerID);

// Authenticate your user.
        $session = \Stripe\BillingPortal\Session::create([
            'customer' => $customer,
            'return_url' => route('dashboard'),
        ]);

// Redirect to the customer portal.
        header("Location: " . $session->url);
        exit();
    }
}
