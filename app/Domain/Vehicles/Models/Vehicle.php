<?php

namespace App\Domain\Vehicles\Models;

use App\Domain\Users\Models\User;
use App\Domain\Vehicles\Enums\Transmission;
use App\Infrastructure\Models\BaseModel;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $user_id
 * @property string $license_plate
 * @property string $make
 * @property string $model
 * @property string $type
 * @property int $year
 * @property string $fuel_type
 * @property int $seats
 * @property Transmission $transmission
 * @property string|null $color
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property-read User $user
 */
class Vehicle extends BaseModel
{
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
