<?php

namespace App\Domain\Vehicles\Actions;

use App\Domain\Users\Models\User;
use App\Domain\Vehicles\Enums\Transmission;
use App\Domain\Vehicles\Models\Vehicle;
use App\Infrastructure\Actions\BaseAction;

class StoreVehicleAction extends BaseAction
{
    public function execute(
        User $user,
        string $licensePlate,
        string $make,
        string $model,
        string $type,
        int $year,
        string $fuelType,
        int $seats,
        Transmission $transmission,
        ?string $color,
    ): void
    {
        Vehicle::query()->create([
            'user_id' => $user->id,
            'license_plate' => $licensePlate,
            'make' => $make,
            'model' => $model,
            'type' => $type,
            'year' => $year,
            'fuel_type' => $fuelType,
            'seats' => $seats,
            'transmission' => $transmission->value,
            'color' => $color,
        ]);
    }
}
