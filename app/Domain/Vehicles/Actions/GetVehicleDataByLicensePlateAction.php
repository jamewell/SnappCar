<?php

namespace App\Domain\Vehicles\Actions;

use App\Domain\Vehicles\Data\VehicleData;
use App\Infrastructure\Actions\BaseAction;
use App\Infrastructure\Services\Vehicle\VehicleClient;

class GetVehicleDataByLicensePlateAction extends BaseAction
{
    public function __construct(private readonly VehicleClient $vehicleClient)
    {
    }

    public function execute(string $licensePlate): VehicleData
    {
        return $this->vehicleClient->getVehicleByLicensePlate($licensePlate);
    }
}
