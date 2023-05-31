<?php

namespace App\Domain\Vehicles\Models;

use App\Domain\Vehicles\Enums\Transmission;
use App\Infrastructure\Models\BaseModel;

/**
 * @property int $user_id
 * @property string $license_plate
 * @property string $make
 * @property string $model
 * @property string $type
 * @property int $year
 * @property string $fuel_type
 * @property int $seats
 * @property Transmission $transmission
 * @property string|null $color
 */
class Vehicle extends BaseModel
{

}
