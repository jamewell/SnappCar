<?php

namespace App\Infrastructure\Enums;

use Illuminate\Support\Collection;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\In;

trait DomainEnum
{
    public static function ruleIn(self ...$exceptions): In
    {
        $values = self::values();

        if (! $exceptions) {
            return Rule::in($values);
        }

        $exceptionValues = collect($exceptions)->pluck('value')->toArray();

        return new In(array_diff($values, $exceptionValues));
    }

    /**
     * @return string[]|int[]
     */
    public static function names(): array
    {
        return array_column(static::cases(), 'name');
    }

    /**
     * @return string[]|int[]
     */
    public static function values(): array
    {
        return array_column(static::cases(), 'value');
    }

    public static function collection(): Collection
    {
        return collect(static::cases());
    }

    public static function cases(): array
    {
        return [];
    }
}
