<?php

namespace App\App\Http\Controllers\Users;

use App\App\Http\Controllers\Controller;
use App\Domain\Users\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class CreateUserController extends Controller
{
    public function __invoke(): Response
    {
        $users = User::query()
            ->with('profile')
            ->get();
        return Inertia::render('Users/ViewUsers', [
            'users' => $users,
        ]);
    }
}
