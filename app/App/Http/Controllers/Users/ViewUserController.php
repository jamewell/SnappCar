<?php

namespace App\App\Http\Controllers\Users;

use App\Domain\Users\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class ViewUserController
{
    public function __invoke(User $user): Response
    {
        return Inertia::render(
            'Users/ViewUser',
            [
                'user' => $user,
                'profile' => $user->profile,
            ]);
    }
}
