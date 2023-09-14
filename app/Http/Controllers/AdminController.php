<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdatePlanRequest;
use App\Models\Plan;
use Inertia\Inertia;


class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $is_admin = auth()->user()->role == 'admin';
        $user = auth()->user();
        if (!$is_admin) {
            return redirect('/');
        }

        $allCustomers = [
            "totalCustomers" => 550,  // Replace with actual from database
            "activeCustomers" => 350,
            "individualCustomers" => 150,
            "organizationCustomers" => 50,
        ];

        $customersList = [
            "individualCustomers" => [
                [
                    "username" => "User1",
                    "vepost_address" => "123 Fake St",
                    "displayname" => "Individual User 1",
                    "status" => "active",
                    "type" => "individual"
                ],
                [
                    "username" => "User2",
                    "vepost_address" => "123 Fake St",
                    "displayname" => "Individual User 2",
                    "status" => "unsubscribed",
                    "type" => "individual"
                ],
                [
                    "username" => "User3",
                    "vepost_address" => "123 Fake St",
                    "displayname" => "Individual User 3",
                    "status" => "expired",
                    "type" => "individual"
                ],
            ],
            "organizationCustomers" => [
                [
                    "username" => "orgUser1",
                    "post_address" => "456 Fake Ave",
                    "displayname" => "Organization User 1",
                    "status" => "active",
                    "type" => "organization"
                ],
                [
                    "username" => "orgUser2",
                    "post_address" => "456 Fake Ave",
                    "displayname" => "Organization User 2",
                    "status" => "expired",
                    "type" => "organization"
                ],
                [
                    "username" => "orgUser3",
                    "post_address" => "456 Fake Ave",
                    "displayname" => "Organization User 3",
                    "status" => "cancelled",
                    "type" => "organization"
                ],
            ]
        ];


        return Inertia::render('Admin/AdminDashboard', [
            'user' => $user,
            'allCustomers' => $allCustomers,
            'customers' => $customersList,
        ]);
    }

    public function showPlans()
    {
        $is_admin = auth()->user()->role == 'admin';
        $user = auth()->user();
        $plans = Plan::all();
//        dd($plans);
        if (!$is_admin) {
            return redirect('/');
        }

        return Inertia::render('Admin/ChangePrices', [
            'user' => $user,
            'initialPlans' => $plans,
        ]);
    }

    public function updatePlan(UpdatePlanRequest $request, $id)
    {

        $validatedData = $request->validated();
        $plan = Plan::findOrFail($id);
        $plan->update($validatedData);

        return response()->json(['status' => 'success', 'message' => 'Plan updated successfully']);
    }
}
