<?php

namespace Database\Factories\Domain\Users\Models;

use App\Domain\Users\Models\Profile;
use App\Domain\Users\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Domain\Users\Models\User>
 * @method \App\Domain\Users\Models\User[]|\Illuminate\Database\Eloquent\Collection create(array $attributes = [], ?\Illuminate\Database\Eloquent\Model $parent = null)
 * @method \App\Domain\Users\Models\User[]|\Illuminate\Database\Eloquent\Collection createMany(iterable $records)
 * @method \App\Domain\Users\Models\User                                            createOne(array $attributes = [])
 */
class UserFactory extends Factory
{
    public function configure(): self
    {
        return $this->afterCreating(function (User $user) {
            if ($this->shouldCreateProfile()) {
                Profile::withoutEvents(function () use ($user) {
                    Profile::factory()->createOne(['user_id' => $user->id]);
                });
            }
        });
    }

    public function withProfile(array $profileFields = []): self
    {
        return $this->afterCreating(function (User $user) use ($profileFields) {
            Profile::withoutEvents(function () use ($user, $profileFields) {
                Profile::factory()->createOne(array_merge(['user_id' => $user->id], $profileFields));
            });
        });
    }

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
        ];
    }

    private function shouldCreateProfile(): bool
    {
        $profileCreated = Arr::first(debug_backtrace(DEBUG_BACKTRACE_PROVIDE_OBJECT, 10), function ($trace) {
            return $trace['class'] === 'Illuminate\Database\Eloquent\Factories\Factory' && $trace['function'] === 'Illuminate\Database\Eloquent\Factories\{closure}';
        });

        if ($profileCreated) {
            return ! $profileCreated['object']->afterCreating->contains(function (\Closure $closure) {
                $reflectionClosure = new \ReflectionFunction($closure);

                return array_keys($reflectionClosure->getClosureUsedVariables()) == ['profileFields'];
            });
        }

        return true;
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return static
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
