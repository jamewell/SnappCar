<?php

namespace App\Infrastructure\Models;

use App\Infrastructure\Models\HasEloquentBuilder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

abstract class BaseModel extends Model
{
    use HasFactory;
    use HasCacheKey;
    use HasEloquentBuilder;

    protected $guarded = [];

    public static function table(): string
    {
        return (new static())->getTable();
    }
}