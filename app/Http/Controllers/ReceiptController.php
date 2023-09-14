<?php

namespace App\Http\Controllers;

use App\Models\Vepost_tracking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\Receipt;

class ReceiptController extends Controller
{
    public function index()
    {
//        What about time_post_opened ?? all are null
//        packages should be fetched by mpID
        $packages = Vepost_tracking::whereNotNull(['time_send_start', 'time_recv_end'])->get();
//        dd($packages);
        return Inertia::render('Admin/Receipts', ['packages' => $packages]);
    }

    public function generateReceipt(Request $request)
    {
        $validatedData = $request->validate([
            'fileIds' => 'required|array',
        ]);
        $fileIds = $validatedData['fileIds'];
//        fetch all packages with the given ids
        $packages = Vepost_tracking::findMany($fileIds);
//        dd($packages);
//        implement later the receipt
        // Create new receipt
        $receiptId = mt_rand(1000000000, 9999999999);
        $receipt = new Receipt();
        $receipt->id = $receiptId;
        $receipt->file_ids = implode(',', $fileIds); // Convert array to comma-separated string
        $receipt->save();

//
//        return response()->json([
//            'status' => 'success',
//            'receiptId' => $receiptId,
//            'files' => $packages
//        ]);
        return Redirect::route('admin.receipt.show', ['id' => $receipt->id]);

    }

    public function showReceipt($id)
    {
        // Find the receipt
        $receipt = Receipt::find($id);

        // Check if the receipt exists
        if (!$receipt) {
            // If the receipt doesn't exist, return a 404 response
            return response()->json(['message' => 'Receipt not found'], 404);
        }
        $fileIds = explode(",", $receipt->file_ids);
//        dd($fileIds);

        // Get the associated files - > use Receipt model
        $files = $receipt->getFilesAttribute($fileIds);
//        dd($files);

        // Return the receipt and associated files
        return Inertia::render('Admin/Receipt', ['receipt' => $receipt, 'files' => $files]);
    }
}
