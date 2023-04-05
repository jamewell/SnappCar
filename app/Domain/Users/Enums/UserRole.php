<?php

namespace App\Domain\Users\Enums;

use Illuminate\Validation\Rules\Enum;

enum UserRole: string
{
    case ADMIN = 'admin';
    case VENDOR = 'vendor';
    case RENTER = 'renter';
}
