<?php

namespace App\Domain\Users\Actions;

use App\Domain\Users\Models\User;
use Carbon\Carbon;

class UpdateProfileAction
{
    public function execute(
        User $user,
        string $firstName,
        string $lastName,
        ?Carbon $dateOfBirth,
        ?string $shortBio,
        ?string $phone,
        ?string $address,
        ?string $houseNumber,
        ?string $city,
        ?string $postalCode,
        ?string $country,
    ): void
    {
        $user->profile->update([
            'first_name' => $firstName,
            'last_name' => $lastName,
            'date_of_birth' => $dateOfBirth,
            'short_bio' => $shortBio,
            'phone' => $phone,
            'address' => $address,
            'house_number' => $houseNumber,
            'city' => $city,
            'postal_code' => $postalCode,
            'country' => $country,
        ]);
    }
}
