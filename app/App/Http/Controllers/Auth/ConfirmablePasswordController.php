<?php

namespace App\App\Http\Controllers\Auth;

use App\App\Http\Controllers\Controller;
use App\Infrastructure\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class ConfirmablePasswordController extends Controller
{
    /**
     * Show the confirm password view.
     *
     * @return \Inertia\Response
     */
    public function show(): \Inertia\Response
    {
        return Inertia::render('Auth/ConfirmPassword');
    }

    /**
     * Confirm the user's password.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return RedirectResponse
     */
    public function store(Request $request): RedirectResponse
    {
        if (! Auth::guard('web')->validate([
            'email' => $request->user()->email,
            'password' => $request->password,
        ])) {
            throw ValidationException::withMessages([
                'password' => __('auth.password'),
            ]);
        }

        $request->session()->put('auth.password_confirmed_at', time());

        return redirect()->intended(RouteServiceProvider::HOME);
    }
}
