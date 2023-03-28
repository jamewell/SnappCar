<?php

namespace App\App\Http\Controllers\Users;

use App\App\Models\User;
use Illuminate\Contracts\Auth\Authenticatable;
use Inertia\Inertia;
use Inertia\Response;

class ViewUsersController
{
    /**
     *@param User $user
     */
    public function __invoke(Authenticatable $user): Response
    {
        $users = User::all();
        return Inertia::render('Users/Index', [
            'users' => $users->map(function ($user) {
                return [
                    'id' => $user->id,
                    'name' => $user->first_name.' '.$user->last_name ,
                    'role' => $user->role,
                    'email' => $user->email,
//                    'edit_url' => URL::route('/admin/users/edit', $user),
                ];
            }),
            'auth' => $user,
            'headers' => User::tableHeader(),
//            'create_url' => URL::route('admin/users/create'),
        ]);
    }
}
