<?php

namespace App\App\Http\Controllers\Users;

use App\App\Models\User;
use App\Domain\Users\Enums\UserRoles;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use JetBrains\PhpStorm\NoReturn;

class CreateUserController
{
    /**
     * @throws Exception
     */
    #[NoReturn] public function __invoke(Request $request): ?RedirectResponse
    {
        $validatedData = $request->validate([
            'firstName' => 'required',
            'lastName' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'password_confirmation' => 'required|same:password',
            'role' => 'required',
        ]);

        User::query()->create([
            'first_name' => $validatedData['firstName'],
            'last_name' => $validatedData['lastName'],
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password']),
            'role' => UserRoles::fromValue($validatedData['role']),
        ]);

        return to_route('admin.users.index');
    }
}