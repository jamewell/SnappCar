<?php

namespace App\Domain\Users\Actions;

use App\Domain\Users\Enums\UserRole;
use App\Domain\Users\Models\User;
use Illuminate\Support\Facades\Hash;

class UpdateUserAction
{
    public function execute(
        User $user,
        string $email,
        ?string $password,
        ?UserRole $role,
    ): User
    {
        $user->update([
            'email' => $email,
            'password' => Hash::make($password),
            'role' => $role,
        ]);

        return $user;
    }
}
