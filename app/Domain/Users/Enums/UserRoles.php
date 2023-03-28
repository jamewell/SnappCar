<?php

namespace App\Domain\Users\Enums;

use Exception;
use Illuminate\Validation\Rules\Enum;

enum UserRoles: string
{
    case ADMIN = 'admin';
    case VENDOR = 'vendor';
    case RENTER = 'renter';

    public static function getRoles(): array
    {
        return [
            'ADMIN' => 'Admin',
            'VENDOR' => 'Vendor',
            'RENTER' => 'Renter',
        ];
    }

    /**
     * @throws Exception
     */
    public static function fromValue(mixed $role): UserRoles
    {
        return match ($role) {
            'ADMIN' => UserRoles::ADMIN,
            'VENDOR' => UserRoles::VENDOR,
            'RENTER' => UserRoles::RENTER,
            default => throw new Exception('Invalid role'),
        };
    }
}
