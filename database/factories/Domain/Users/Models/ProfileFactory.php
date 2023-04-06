<?php

namespace Database\Factories\Domain\Users\Models;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Domain\Users\Models\Profile>
 * @method \App\Domain\Users\Models\Profile[]|\Illuminate\Database\Eloquent\Collection create(array $attributes = [], ?\Illuminate\Database\Eloquent\Model $parent = null)
 * @method \App\Domain\Users\Models\Profile[]|\Illuminate\Database\Eloquent\Collection createMany(iterable $records)
 * @method \App\Domain\Users\Models\Profile                                            createOne(array $attributes = [])
 */
class ProfileFactory extends Factory
{
    public function definition(): array
    {
        return [
            'first_name' => fake()->firstName(),
            'last_name' => fake()->lastName(),
            'phone' => fake()->phoneNumber(),
            'address' => fake()->address(),
            'city' => fake()->city(),
            'country' => fake()->country(),
            'postal_code' => fake()->postcode(),
        ];
    }
}
