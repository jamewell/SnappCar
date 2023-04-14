<?php

namespace App\App\Http\Controllers\Users;

use App\Domain\Users\Enums\UserRole;
use Inertia\Inertia;
use Inertia\Response;

class CreateUserPageController extends \App\App\Http\Controllers\Controller
{
    public function __invoke(): Response
    {
        return Inertia::render(
            'Users/CreateUser',
            [
                'roles' => UserRole::getAll(),
            ]
        );
    }
}
