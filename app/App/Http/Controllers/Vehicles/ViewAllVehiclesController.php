<?php

namespace App\App\Http\Controllers\Vehicles;

use App\Domain\Vehicles\Models\Vehicle;
use Inertia\Inertia;
use Inertia\Response;

class ViewAllVehiclesController
{
    public function __invoke(): Response
    {
        $vehicles = Vehicle::query()
            ->with('user')
            ->get();

        return Inertia::render('Vehicles/ViewVehicles', [
            'vehicles' => $vehicles->map(function (Vehicle $vehicle) {
                return [
                    'id' => $vehicle->id,
                    'license_plate' => $vehicle->license_plate,
                    'make' => $vehicle->make,
                    'model' => $vehicle->model,
                    'type' => $vehicle->type,
                    'year' => $vehicle->year,
                    'color' => $vehicle->color,
                    'owner' => $vehicle->user->profile->first_name . ' ' . $vehicle->user->profile->last_name,
                ];
            }),
        ]);
    }
}
