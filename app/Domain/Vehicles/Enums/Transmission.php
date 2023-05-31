<?php

namespace App\Domain\Vehicles\Enums;

use App\Infrastructure\Enums\DomainEnum;

enum Transmission: string
{
    use DomainEnum;

    public static function getValues(): array
    {
        return [
           ['id' =>  self::MANUAL->value, 'value' => 'Manual'],
            ['id' => self::AUTOMATIC->value, 'value' => 'Automatic'],
        ];
    }

    case MANUAL = 'manual';
    case AUTOMATIC = 'automatic';
}
