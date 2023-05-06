<?php

namespace App\App\Http\Controllers\Users;

use App\App\Http\Controllers\Controller;
use App\Domain\Users\Enums\UserRole;
use App\Domain\Users\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class EditUserPageController extends Controller
{
    public function __invoke(User $user): Response
    {
        return Inertia::render(
            'Users/EditUser',
            [
                'user' => $user,
                'profile' => $user->profile,
                'roles' => UserRole::getAll(),
            ]
        );
    }
}
