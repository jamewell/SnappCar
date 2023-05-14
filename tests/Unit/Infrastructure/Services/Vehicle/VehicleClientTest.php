<?php

namespace Unit\Infrastructure\Services\Vehicle;

use App\Infrastructure\Services\Vehicle\VehicleClient;
use Tests\TestCase;

class VehicleClientTest extends TestCase
{
    private VehicleClient $vehicleClient;

    protected function setUp(): void
    {
        parent::setUp();

        $this->vehicleClient = $this->app->make(VehicleClient::class);
    }

    public function testGetVehicleByLicensePlate(): void
    {
        $vehicleData = $this->vehicleClient->getVehicleByLicensePlate('G-001-BB');

        $this->assertEquals('G001BB', $vehicleData->licensePlate);
        $this->assertEquals('BMW I', $vehicleData->make);
        $this->assertEquals('I3', $vehicleData->model);
        $this->assertEquals('Sedan', $vehicleData->type);
        $this->assertEquals('2019', $vehicleData->year);
        $this->assertEquals('Elektriciteit', $vehicleData->fuelType);
        $this->assertEquals(4, $vehicleData->seats);
        $this->assertEquals('ZWART', $vehicleData->color);
    }

    public function testGetVehicleByLicensePlateThrowsException(): void
    {
        try {
            $this->vehicleClient->getVehicleByLicensePlate('ABC-123');
        } catch (\Exception $e) {
            $this->assertEquals('ABC-123 was not found.', $e->getMessage());
        }
    }
}
