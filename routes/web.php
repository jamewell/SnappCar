<?php

use App\App\Http\Controllers\Users\CreateUserPageController;
use App\App\Http\Controllers\Users\StoreUserController;
use App\App\Http\Controllers\Users\ViewAllUsersController;
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
});

Route::prefix('users')->group(function () {
    Route::get('/', ViewAllUsersController::class)->name('users.index');
    Route::get('/create', CreateUserPageController::class)->name('users.create');
    Route::post('/store', StoreUserController::class)->name('users.store');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
