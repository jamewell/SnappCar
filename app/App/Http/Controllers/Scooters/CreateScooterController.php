<?php

namespace App\App\Http\Controllers\Scooters;

use Inertia\Inertia;
use Inertia\Response;

class CreateScooterController
{
    public function __invoke(): Response
    {
        return Inertia::render('Scooters/CreateScooter');
    }
}
