<?php

namespace App\Domain\Users\Models\Enums;

use Illuminate\Validation\Rules\Enum;

/**
 * @method static self ADMIN()
 * @method static self VENDOR()
 * @method static self RENTER()
 */
class UserRoles extends Enum
{

}
