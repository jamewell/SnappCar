<?php

namespace App\App\Http\Middleware;

use App\App\Models\User;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            // Synchronously
            'appName' => config('app.name'),

            // Lazily
            /**
             * @phpstan-param User $request->user
             */
            'auth.user' => fn () => $request->user()
                ? $request->user()->only('id', 'first_name', 'last_name', 'email', 'role')
                : null,
//            'auth' => [
//                'user' => $request->user(),
//            ],
//            'ziggy' => function () use ($request) {
//                return array_merge((new Ziggy)->toArray(), [
//                    'location' => $request->url(),
//                ]);
//            },
        ]);
    }
}
