<?php

namespace App\Infrastructure\Providers;

use App\Infrastructure\Services\Vehicle\VehicleClient;
use Illuminate\Foundation\Application;
use Illuminate\Support\ServiceProvider;

class VehicleCheckServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(
            VehicleClient::class, function () {
            return new VehicleClient(
                config('services.vehicle.url'),
                config('services.vehicle.api_key', 'foo-bar'),
            );
        });
    }
}
