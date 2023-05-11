<?php

namespace App\Infrastructure\Providers;

use App\Infrastructure\Services\Vehicle\VehicleClient;
use Illuminate\Support\ServiceProvider;

class VehicleCheckServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(
            VehicleClient::class, function () {
            return new VehicleClient(
                config('services.vehicle.url', 'https://api.overheid.io/voertuiggegevens/'),
                config('services.vehicle.api_key', 'foo-bar'),
            );
        });
    }
}
