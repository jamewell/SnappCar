<?php

use App\App\Http\Controllers\Users;
use App\App\Http\Controllers\Vehicles;
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

//Route::get('/ww', fn () => \Illuminate\Support\Facades\Hash::make('testpass'));
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::group(['middleware' => ['auth', 'verified']], function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::prefix('users')->group(function () {
        Route::get('/', Users\ViewAllUsersController::class)->name('users.index');
        Route::get('/create', Users\CreateUserPageController::class)->name('users.create');
        Route::get('/edit/{user}', Users\EditUserPageController::class)->name('users.edit');
        Route::get('/view/{user}', Users\ViewUserController::class)->name('users.view');
        Route::post('/store', Users\StoreUserController::class)->name('users.store');
        Route::post('/update/{user}', Users\UpdateUserController::class)->name('users.update');
    });

    Route::prefix('vehicles')->group(function () {
        Route::get('/', Vehicles\ViewAllVehiclesController::class)->name('vehicles.index');
        Route::get('/create', Vehicles\CreateVehiclePageController::class)->name('vehicles.create');
        Route::post('/store', Vehicles\StoreVehicleController::class)->name('vehicles.store');
    });
});

require __DIR__.'/auth.php';
