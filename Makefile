analyse:
	./vendor/bin/phpstan analyse --memory-limit=2G

migrate:
	php artisan migrate

seed:
	php artisan db:seed

start:
	composer install
	php artisan key:generate
	npm install
	npm run dev

docs:
	php artisan scribe:generate