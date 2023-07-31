<?php

namespace App\Http\Controllers;

use App\Models\Vepost_tracking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{

    public function getPackagesCount()
    {
        $receiver_vepost_addr = '2334407987654321';
        $sender_vepost_addr = '2334407123456789';
        $packagesCount = [
            'all' => Vepost_tracking::count(),
            'sent' => Vepost_tracking::where('sender_vepost_addr', $sender_vepost_addr)->count(),
            'received' => Vepost_tracking::where('receiver_vepost_addr', $receiver_vepost_addr)->count(),
            'viewed' => Vepost_tracking::where('view_once', '>=', 1)->count(),
        ];

        return Inertia::render('Dashboard', [
            'user' => Auth::user(),
            'counts' => $packagesCount,
        ]);
    }
}

