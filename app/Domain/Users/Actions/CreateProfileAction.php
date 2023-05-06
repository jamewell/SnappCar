<?php

namespace App\Domain\Users\Actions;

use App\Domain\Users\Models\Profile;
use App\Domain\Users\Models\User;

class CreateProfileAction
{
    public function execute(
        User $user,
        string $firstName,
        string $lastName,
    ): void
    {
        Profile::query()->create([
            'user_id' => $user->id,
            'first_name' => $firstName,
            'last_name' => $lastName,
        ]);
    }
}
