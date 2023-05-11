<?php

use App\App\Http\Controllers\Vehicles\GetVehicleDataController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/vehicles/license-plate', [GetVehicleDataController::class, '__invoke']);
//Route::get('test', dump('test'));

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
