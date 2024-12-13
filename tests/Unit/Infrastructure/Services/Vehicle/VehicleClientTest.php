<?php

namespace Tests\Unit\Infrastructure\Services\Vehicle;

use App\Domain\Vehicles\Data\VehicleData;
use App\Infrastructure\Services\Vehicle\VehicleClient;
use Mockery;
use Tests\TestCase;

class VehicleClientTest extends TestCase
{
    private VehicleClient $vehicleClient;

    protected function setUp(): void
    {
        parent::setUp();

        $this->vehicleClient = Mockery::mock(VehicleClient::class);
    }

    public function testGetVehicleByLicensePlate(): void
    {
        $vehicleData = new VehicleData(
            licensePlate: 'T832DT',
            make: 'KIA',
            model: 'CEED',
            type: 'Stationwagen',
            year: '2023',
            fuelType: 'Benzine',
            seats: 5,
            color: 'GRIJS',
        );

        /** @var VehicleData $result */
        $result = $this->vehicleClient
            ->shouldReceive('getVehicleByLicensePlate')
            ->with('T832DT')
            ->andReturn($vehicleData)
            ->getMock();

        $this->assertEquals('T832DT', $result['licensePlate']);
        $this->assertEquals('KIA', $result->make);
        $this->assertEquals('CEED', $result->model);
        $this->assertEquals('Stationwagen', $result->type);
        $this->assertEquals('2023', $result->year);
        $this->assertEquals('Benzine', $result->fuelType);
        $this->assertEquals(5, $result->seats);
        $this->assertEquals('GRIJS', $result->color);
    }

    public function testGetVehicleByLicensePlateThrowsException(): void
    {
        $this->vehicleClient
            ->shouldReceive('getVehicleByLicensePlate')
            ->with('ABC-123')
            ->andThrow(new \Exception('Vehicle not found'));

        $this->expectException(\Exception::class);
        $this->expectExceptionMessage('Vehicle not found');

        $this->vehicleClient->getVehicleByLicensePlate('ABC-123');
    }

    protected function tearDown(): void
    {
        parent::tearDown();

        Mockery::close();
    }
}
