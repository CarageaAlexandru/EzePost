<?php

namespace App\Http\Controllers;

use App\Models\Vepost_tracking;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReceiptController extends Controller
{
    public function index()
    {
//        What about time_post_opened ?? all are null
        $packages = Vepost_tracking::whereNotNull(['time_send_start', 'time_recv_end'])->get();
//        dd($packages);
        return Inertia::render('Receipt', ['packages' => $packages]);
    }
}
