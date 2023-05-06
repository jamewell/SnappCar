<?php

namespace App\Domain\Users\Actions;

use App\Domain\Users\Enums\UserRole;
use App\Domain\Users\Models\User;
use Illuminate\Support\Facades\Hash;

class CreateUserAction
{
    public function execute(
        string $email,
        string $password,
        UserRole $role,
    ): User
    {
        /** @var User $user */
        $user = User::query()->create([
            'email' => $email,
            'password' => Hash::make($password),
            'role' => $role,
        ]);

        return $user;
    }
}
