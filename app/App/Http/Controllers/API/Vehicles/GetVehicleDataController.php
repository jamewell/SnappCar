<?php

namespace App\App\Http\Controllers\API\Vehicles;

use App\Domain\Vehicles\Actions\GetVehicleDataByLicensePlateAction;
use App\Domain\Vehicles\Data\VehicleData;
use Illuminate\Http\Request;

class GetVehicleDataController
{
    public function __invoke(
        Request $request,
        GetVehicleDataByLicensePlateAction $getVehicleDataByLicensePlateAction,
    ): VehicleData {
        throw_if(!$request->has('license_plate'), new \InvalidArgumentException('license_plate is required'));

        $licensePlate = $request->get('license_plate');

        return $getVehicleDataByLicensePlateAction->execute($licensePlate);
    }
}
