<?php

use App\App\Http\Controllers\Users\CreateUserPageController;
use App\App\Http\Controllers\Users\EditUserPageController;
use App\App\Http\Controllers\Users\StoreUserController;
use App\App\Http\Controllers\Users\UpdateUserController;
use App\App\Http\Controllers\Users\ViewAllUsersController;
use App\App\Http\Controllers\Users\ViewUserController;
use App\App\Http\Controllers\Vehicles\CreateVehiclePageController;
use App\App\Http\Controllers\Vehicles\StoreVehicleController;
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

//Route::get('/ww', fn () => \Illuminate\Support\Facades\Hash::make('password'));
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
        Route::get('/', ViewAllUsersController::class)->name('users.index');
        Route::get('/create', CreateUserPageController::class)->name('users.create');
        Route::get('/edit/{user}', EditUserPageController::class)->name('users.edit');
        Route::get('/view/{user}', ViewUserController::class)->name('users.view');
        Route::post('/store', StoreUserController::class)->name('users.store');
        Route::post('/update/{user}', UpdateUserController::class)->name('users.update');
    });

    Route::prefix('vehicles')->group(function () {
//        Route::get('/', ViewAllVehiclesController::class)->name('vehicles.index');
        Route::get('/create', CreateVehiclePageController::class)->name('vehicles.create');
        Route::post('/store', StoreVehicleController::class)->name('vehicles.store');
    });
});

require __DIR__.'/auth.php';
