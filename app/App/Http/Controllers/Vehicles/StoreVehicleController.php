<?php

namespace App\App\Http\Controllers\Vehicles;

use App\Domain\Users\Models\User;
use App\Domain\Vehicles\Actions\StoreVehicleAction;
use App\Domain\Vehicles\Enums\Transmission;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Http\Request;

class StoreVehicleController
{
    /**
     * @param User $user
     */
    public function __invoke(
        Authenticatable $user,
        Request $request,
        StoreVehicleAction $storeVehicleAction,
    )
        : \Illuminate\Http\RedirectResponse
    {
        $request->validate([
            'license_plate' => ['required', 'string'],
            'make' => ['required', 'string'],
            'model' => ['required', 'string'],
            'type' => ['required', 'string'],
            'year' => ['required', 'int'],
            'fuel_type' => ['required', 'string'],
            'seats' => ['required', 'int'],
            'transmission' => ['required', Transmission::ruleIn()],
            'color' => ['nullable', 'string'],
        ]);

        $storeVehicleAction->execute(
            user: $user,
            licensePlate: $request->input('license_plate'),
            make: $request->input('make'),
            model: $request->input('model'),
            type: $request->input('type'),
            year: $request->input('year'),
            fuelType: $request->input('fuel_type'),
            seats: $request->input('seats'),
            transmission: Transmission::tryfrom($request->input('transmission')),
            color: $request->input('color'),
        );

        return to_route('vehicles.index');
    }
}
