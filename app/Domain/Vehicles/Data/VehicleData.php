<?php

namespace App\Domain\Vehicles\Data;

use App\Domain\Vehicles\Enums\CarType;
use App\Domain\Vehicles\Enums\FuelType;
use App\Domain\Vehicles\Enums\Transmission;
use Spatie\LaravelData\Data;

class VehicleData extends Data
{
    public function __construct(
        public string $licensePlate,
        public string $make,
        public string $model,
        public string $type,
        public int $year,
        public string $fuelType,
        public int $seats,
        public ?string $color,
    ) {
    }
}
