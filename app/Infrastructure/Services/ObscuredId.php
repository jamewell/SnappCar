<?php

namespace App\Infrastructure\Services;

use Hashids\Hashids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Support\Stringable;

class ObscuredId
{
    protected static ?array $generatedObscuredIds = null;

    public static function getObscuredId(Model $model): string
    {
        if (isset(self::$generatedObscuredIds[$model::class])) {
            return (self::$generatedObscuredIds[$model::class])($model);
        }

        return (string) Str::of(class_basename($model::class))
            ->snake()
            ->whenContains('_', function (Stringable $string) {
                return Str::of($string)
                    ->explode('_')
                    ->reduce(function (string $first, string $second) {
                        return $first . substr($second, 0, 2);
                    }, '');
            })
            ->limit(4, '')
            ->append('_', app(Hashids::class)->encode($model->getKey()));
    }

    public static function generateObscuredIdNormally(): void
    {
        self::$generatedObscuredIds = null;
    }

    public static function generateObscuredIdUsing(string $model, ?callable $method = null): void
    {
        self::$generatedObscuredIds[$model] = $method;
    }

    public static function generateObscuredIdUsingSequence(string $model, array $sequence, ?callable $whenMissing = null): void
    {
        $next = 0;

        static::generateObscuredIdUsing($model, function (Model $model) use (&$next, &$sequence, $whenMissing) {
            if (array_key_exists($next, $sequence)) {
                return $sequence[$next++];
            }

            return $whenMissing ? $whenMissing($model) : null;
        });
    }
}
