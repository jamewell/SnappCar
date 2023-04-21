<?php

namespace App\Domain\Users\Enums;

use Illuminate\Validation\Rules\Enum;

enum UserRole: string
{
    case ADMIN = 'admin';
    case VENDOR = 'vendor';
    case RENTER = 'renter';

    public static function getAll(): array
    {
        return [
            ['id' => self::ADMIN, 'name' => ucfirst(self::ADMIN->value)],
            ['id' => self::VENDOR, 'name' => ucfirst(self::VENDOR->value)],
            ['id' => self::RENTER, 'name' => ucfirst(self::RENTER->value)],
        ];
    }

    public static function getValues(): array
    {
        return array_map(function ($role) {
            return $role['id']->value;
        }, self::getAll());
    }
}
