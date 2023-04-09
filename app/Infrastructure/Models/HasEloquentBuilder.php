<?php

namespace App\Infrastructure\Models;

use Illuminate\Database\Eloquent\Builder;

trait HasEloquentBuilder
{
    /** @var class-string<Builder>|null */
    protected ?string $eloquentBuilder;

    /**
     * @param \Illuminate\Database\Query\Builder $builder
     *
     * @return \Illuminate\Database\Eloquent\Builder|static
     */
    public function newEloquentBuilder($builder)
    {
        if (isset($this->eloquentBuilder)) {
            return new $this->eloquentBuilder($builder);
        }

        return parent::newEloquentBuilder($builder);
    }
}
