<?php

namespace App\Infrastructure\Models;

use Illuminate\Database\Eloquent\Builder;

trait HasEloquentBuilder
{
    /** @var class-string<Builder> */
    protected string $eloquentBuilder;

    public function newEloquentBuilder($builder): Builder|App\Infrastructure\Models\BaseModel
    {
        if (isset($this->eloquentBuilder)) {
            return new $this->eloquentBuilder($builder);
        }

        return parent::newEloquentBuilder($builder);
    }
}
