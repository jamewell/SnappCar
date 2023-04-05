<?php

namespace App\Infrastructure\Models;

trait HasEloquentBuilder
{
    /** @var class-string<\Illuminate\Database\Eloquent\Builder */
    protected ?string $eloquentBuilder;

    public function newEloquentBuilder($builder)
    {
        if (isset($this->eloquentBuilder)) {
            return new $this->eloquentBuilder($builder);
        }

        return parent::newEloquentBuilder($builder);
    }
}