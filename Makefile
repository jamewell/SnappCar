analyse:
	./vendor/bin/phpstan analyse --memory-limit=2G

install:
	docker run --rm \
        -u "$(id -u):$(id -g)" \
        -v "$(pwd):/var/www/html" \
        -w /var/www/html \
        laravelsail/php82-composer:latest \
        composer update --ignore-platform-reqs

bash:
	./vendor/bin/sail bash

up:
	./vendor/bin/sail up -d

down:
	./vendor/bin/sail down

docs:
	php artisan scribe:generate
