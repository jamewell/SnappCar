<?php

namespace App\Domain\Vehicles\Actions;

use App\Infrastructure\Actions\BaseAction;
use App\Infrastructure\Services\Vehicle\VehicleClient;

class GetVehicleDataByLicensePlateAction extends BaseAction
{
    public function __construct(private readonly VehicleClient $vehicleClient)
    {
    }

    public function execute(string $licensePlate): array
    {
        return $this->vehicleClient->getVehicleByLicensePlate($licensePlate);
    }
}
