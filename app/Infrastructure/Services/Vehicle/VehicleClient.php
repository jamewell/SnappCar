<?php

namespace App\Infrastructure\Services\Vehicle;

use Illuminate\Support\Facades\Http;

class VehicleClient
{
    private string $url;
    private string $apiKey;

    public function __construct(
        string $url,
        string $apiKey,
    )
    {
    }

    public function getVehicleByLicensePlate(string $licensePlate): array
    {
        $response = Http::withHeaders(['ovio-api-key' => $this->apiKey])->get($this->url . $licensePlate);
        $vechileData = json_decode($response->body(), true);

        return [
            'license_plate' => $vechileData['kenteken'],
            'make' => $vechileData['merk'],
            'model' => trans($vechileData['handelsbenaming'], [], 'nl'),
            'type' => $vechileData['inrichting'],
            'color' => $vechileData['eerste_kleur'],
            'fuel_type' => $vechileData['brandstof_omschrijving'],
            'transmission' => $vechileData['versnellingsbak'],
            'seats' => $vechileData['aantal_zitplaatsen'],
        ];

        return json_decode($response->body(), true);
    }
}
