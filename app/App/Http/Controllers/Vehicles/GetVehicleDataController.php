<?php

namespace App\App\Http\Controllers\Vehicles;

use App\Domain\Vehicles\Actions\GetVehicleDataByLicensePlateAction;
use Illuminate\Http\Request;

class GetVehicleDataController
{
    public function __invoke(
        Request $request,
        GetVehicleDataByLicensePlateAction $getVehicleDataByLicensePlateAction,
    ): array {
        dump('license-plate');
        throw_if(!$request->has('license_plate'), new \InvalidArgumentException('license_plate is required'));

        $licensePlate = $request->get('license_plate');

        return $getVehicleDataByLicensePlateAction->execute($licensePlate);
    }
}
