<?php

namespace App\App\Http\Controllers\Vehicles;

use App\App\Http\Controllers\Controller;
use App\Domain\Vehicles\Enums\Transmission;
use Inertia\Inertia;
use Inertia\Response;

class CreateVehiclePageController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('Vehicles/AddVehicle', [
            'transmissions' => Transmission::getValues()
        ]);
    }
}
