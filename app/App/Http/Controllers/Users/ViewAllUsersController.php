<?php

namespace App\App\Http\Controllers\Users;

use App\App\Http\Controllers\Controller;
use App\Domain\Users\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class ViewAllUsersController extends Controller
{
    public function __invoke(): Response
    {
        $users = User::query()
            ->with('profile')
            ->get();


        return Inertia::render('Users/ViewUsers', [
            'users' => $users->map(function ($user) {
                return [
                    'id' => $user->id,
                    'email' => $user->email,
                    'role' => $user->role,
                    'profile' => $user->profile,
                    'edit_url' => route('users.edit', compact('user')),
                    'view_url' => route('users.view', compact('user')),
                ];
            })
        ]);
    }
}
