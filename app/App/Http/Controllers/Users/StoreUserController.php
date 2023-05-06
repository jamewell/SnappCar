<?php

namespace App\App\Http\Controllers\Users;

use App\App\Http\Controllers\Controller;
use App\Domain\Users\Actions\CreateProfileAction;
use App\Domain\Users\Actions\CreateUserAction;
use App\Domain\Users\Enums\UserRole;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;

class StoreUserController extends Controller
{
    public function __invoke(
        Request $request,
        CreateUserAction $createUserAction,
        CreateProfileAction $createProfileAction
    ): RedirectResponse
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'role' => 'required|string|in:admin,vendor,renter',
            'password' => ['required', Rules\Password::defaults()],
        ]);

        $user = $createUserAction->execute(
            $request->get('email'),
            $request->get('password'),
            UserRole::from($request->get('role')),
        );

       $createProfileAction->execute(
            $user,
            $request->get('first_name'),
            $request->get('last_name'),
       );

       return to_route('users.index');
    }
}
