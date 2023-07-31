<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PricingController extends Controller
{
//    get all plans from database

    public function index()
    {
        $plans = Plan::all();
        return Inertia::render('Guest/Pricing', [
            'auth' => Auth::user(),
            'plans' => $plans,
            "csrf" => csrf_token()
        ]);
    }

}
