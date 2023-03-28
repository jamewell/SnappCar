<?php

namespace App\App\Http\Controllers\Users;

use App\App\Models\User;
use App\Domain\Users\Enums\UserRoles;
use Illuminate\Contracts\Auth\Authenticatable;
use Inertia\Inertia;
use Inertia\Response;

class CreateUserPageController
{
    /**
     * @param User $user
     * @return Response
     */
    public function __invoke(Authenticatable $user): Response
    {
        return Inertia::render('Users/CreateUserForm', [
            'auth' => $user,
            'roles' => collect(UserRoles::getRoles())
                ->map(function ($value, $key) {
                    return [
                        'id' => strtolower($key),
                        'name' => $value,
                    ];
                })
                ->values(),
        ]);
    }
}
