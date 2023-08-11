<?php

namespace App\Infrastructure\Services\Vehicle;

use App\Domain\Vehicles\Data\VehicleData;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Http;

class VehicleClient
{
    public function __construct(
        private readonly string $url,
        private readonly string $apiKey,
    )
    {
    }

    public function getVehicleByLicensePlate(string $licensePlate): VehicleData
    {
        $response = Http::withHeaders(['ovio-api-key' => $this->apiKey])->get($this->url . $licensePlate);
        $vehicleData = json_decode($response->body(), true);

        throw_if(array_key_exists('error', $vehicleData), new \Exception($licensePlate . ' was not found.'));

        return new VehicleData(
            licensePlate: $vehicleData['kenteken'],
            make: $vehicleData['merk'],
            model: $vehicleData['handelsbenaming'],
            type: $vehicleData['carrosserie'][0]['type_carrosserie_europese_omschrijving'],
            year: Carbon::parse($vehicleData['datum_eerste_toelating'])->year,
            fuelType: $vehicleData['brandstof'][0]['brandstof_omschrijving'],
            seats: $vehicleData['aantal_zitplaatsen'],
            color: array_key_exists('eerste_kleur', $vehicleData) ? $vehicleData['eerste_kleur'] : null,
        );
    }
}
