<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

         \App\Domain\Users\Models\User::factory()->create([
             'first_name' => 'Jamie',
             'last_name' => 'Wilson',
             'role' => 'admin',
             'email' => 'test@admin.com',
             'password' => bcrypt('password'),
         ]);
    }
}
