<?php

namespace App\Domain\Vehicles\Enums;

enum FuelType
{
    case PETROL;
    case DIESEL;
    case ELECTRIC;
    case HYBRID;
    case OTHER;
}
