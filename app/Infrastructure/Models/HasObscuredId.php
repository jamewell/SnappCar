<?php

namespace App\Infrastructure\Models;

use App\Infrastructure\Services\ObscuredId;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Concerns\HasEvents;
trait HasObscuredId
{
    use HasEvents;
    public static function bootHasObscuredId(): void
    {
        static::creating(function ($model) {
            $model->obscured_id = (string) Str::uuid();
        });

        static::created(function ($model) {
            $model::unguarded(function () use ($model) {
                $model->updateQuietly(['obscured_id' => $model->obscured_id]);
            });
        });
    }

    public static function generateObscuredIdUsing(?callable $method = null): void
    {
        ObscuredId::generateObscuredIdUsing(static::class, $method);
    }

    public static function generateObscuredIdUsingSequence(array $sequence, ?callable $whenMissing = null): void
    {
        ObscuredId::generateObscuredIdUsingSequence(static::class, $sequence, $whenMissing);
    }
}