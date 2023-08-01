<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DownloadController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\PackagesController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\PricingController;
use App\Http\Controllers\ReceiptController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/download', [DownloadController::class, 'index'])->name('download');
Route::get('/pricing', [PricingController::class, 'index'])->name('pricing');
Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::get('/about', [AboutController::class, 'index'])->name('about');

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'getPackagesCount'])->name('dashboard');
    Route::get('/packages/{type}', [PackagesController::class, 'getAllPackages']);
    Route::get('/generate-receipt', [ReceiptController::class, 'index'])->name('generate-receipt');

//    Stripe / Subscription
    Route::post('/checkout', [SubscriptionController::class, 'checkout'])->name('checkout');
    Route::get('/success', [SubscriptionController::class, 'success'])->name('checkout.success');
    Route::get('/cancelled', [SubscriptionController::class, 'cancelled'])->name('checkout.cancelled');

});

//    disabled csrf for webhook and this needs  to be outside of auth middleware
Route::post('/webhook', [SubscriptionController::class, 'webhook'])->name('webhook');
Route::post('/customer-portal', [SubscriptionController::class, 'customerPortal'])->name('customer-portal');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'is.admin'])->group(function () {
    Route::get('/admin', [\App\Http\Controllers\AdminController::class, 'index'])->name('admin.dashboard');
    // Add more admin routes here
    Route::get('/admin/change-plans', [AdminController::class, 'showPlans'])->name('admin.change-plans');
    Route::put('/admin/plan/{id}', [AdminController::class, 'updatePlan'])->name('admin.update-plan');

});


require __DIR__ . '/auth.php';
