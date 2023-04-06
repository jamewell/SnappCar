<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Domain\Users\Enums\UserRole;
use App\Domain\Users\Models\Profile;
use App\Domain\Users\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        $user = User::factory()
            ->withProfile([
                'first_name' => 'Jamie',
                'last_name' => 'Wilson',
            ])
            ->create([
            'role' => UserRole::ADMIN,
            'email' => 'test@admin.com',
            'password' => bcrypt('password'),
        ]);
    }
}
