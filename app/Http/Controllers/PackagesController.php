<?php

namespace App\Http\Controllers;

use App\Models\Vepost_tracking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PackagesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function getAllPackages($type)
    {
        $receiver_vepost_addr = '2334407987654321';
        $sender_vepost_addr = '2334407123456789';
        $perPage = 10;

        switch ($type) {
            case 'all':
//                CHECK WHICH column to use for descending order
                $packages = Vepost_tracking::orderBy('time_send_start', 'desc')->paginate($perPage);
                break;
            case 'sent':
                $packages = Vepost_tracking::where('sender_vepost_addr', $sender_vepost_addr)->paginate($perPage);
                break;
            case 'received':
                $packages = Vepost_tracking::where('receiver_vepost_addr', $receiver_vepost_addr)->paginate($perPage);
                break;
            case 'viewed':
                $packages = Vepost_tracking::where('view_once', '>=', 1)->paginate($perPage);
                break;
            default:
//                DO SOMETHING HERE
                return redirect()->route('home');
        }
//        dd($packages);
        return Inertia::render('Packages', [
            'user' => Auth::user(),
            'packages' => $packages,
        ]);
    }


}
