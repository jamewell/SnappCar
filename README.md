
# SnappCarClone
This is a clone of the SnappCar app. It is a car sharing app where users can rent cars from other users. This app is built using Laravel backend.

## Installation
1. Clone the repository
2. Run `make install`
3. Run `make up`
4. Run `./vendor/bin/sail exec mysql bash` and run `mysql -u root -p` to enter the MySQL CLI. Create a database with the name `snappcarclone` and exit the MySQL CLI.
5. Run `make bash` to enter the workspace container. and run `cp .env.example .env` to create a `.env` file.
6. Run `php artisan key:generate` to generate a new application key.
7. Run `php artisan migrate` to migrate the database.

if run into any issues, try changing DB_HOST to `mysql` in the `.env` file and run `php artisan config:clear` and `php artisan config:cache`.
This might be necessary because the Laravel Sail environment uses the service name as the host name.

