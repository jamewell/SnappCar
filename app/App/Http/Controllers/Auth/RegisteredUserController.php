<?php

namespace App\App\Http\Controllers\Auth;

use App\App\Http\Controllers\Controller;
use App\Domain\Users\Enums\UserRole;
use App\Domain\Users\Models\Profile;
use App\Domain\Users\Models\User;
use App\Infrastructure\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function create(): \Inertia\Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): \Illuminate\Http\RedirectResponse
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        /** @var Authenticatable $user */
        $user = User::query()->create([
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password')),
            'role' => UserRole::RENTER,
        ]);

        Profile::query()->create([
            'user_id' => $user->getAuthIdentifier(),
            'first_name' => $request->get('first_name'),
            'last_name' => $request->get('last_name'),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
