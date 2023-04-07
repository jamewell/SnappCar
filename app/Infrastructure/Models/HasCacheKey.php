<?php

namespace App\Infrastructure\Models;

trait HasCacheKey
{
    public function cacheKey(string ...$keyNames): string
    {
        $date = property_exists($this, 'updated_at') ? $this->updated_at : now();

        return sprintf(
            '%s/%s-%s:%s',
            $this->getTable(),
            $this->getKey(),
            $date->timestamp,
            explode('_', $keyNames) /* @phpstan-ignore-line */
        );
    }
}
