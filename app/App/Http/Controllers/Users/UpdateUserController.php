<?php

namespace App\App\Http\Controllers\Users;

use App\App\Http\Controllers\Controller;
use App\Domain\Users\Actions\UpdateProfileAction;
use App\Domain\Users\Actions\UpdateUserAction;
use App\Domain\Users\Enums\UserRole;
use App\Domain\Users\Models\User;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;

class UpdateUserController extends Controller
{
    public function __invoke(
        Request $request,
        User $user,
        UpdateUserAction $updateUserAction,
        UpdateProfileAction $updateProfileAction,
    ): RedirectResponse
    {
        $request->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'date_of_birth' => 'nullable|date',
            'short_bio' => 'nullable|string',
            'phone' => 'nullable|string|regex:/^([0-9\s\-\+\(\)]*)$/|min:10',
            'address' => 'nullable|string',
            'house_number' => 'nullable|string',
            'city' => 'nullable|string',
            'postal_code' => 'nullable|string',
            'country' => 'nullable|string',
            'email' => 'required|email',
            'role' => 'nullable|in:' . implode(',', UserRole::getValues()),
            'password' => ['nullable', 'confirmed', Rules\Password::defaults()],
        ]);

        $updateUserAction->execute(
            $user,
            $request->get('email'),
            $request->get('password'),
            UserRole::from($request->get('role')),
        );

        $updateProfileAction->execute(
            $user,
            $request->get('first_name'),
            $request->get('last_name'),
            Carbon::parse($request->get('date_of_birth')),
            $request->get('short_bio'),
            $request->get('phone'),
            $request->get('address'),
            $request->get('house_number'),
            $request->get('city'),
            $request->get('postal_code'),
            $request->get('country'),
        );

        return to_route('users.index');
    }
}
