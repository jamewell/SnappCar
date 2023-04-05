<?php

namespace App\Domain\Users\Models;

use App\Infrastructure\Models\BaseModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;

/**
 * @property int    $id
 * @property int    $user_id
 * @property string $first_name
 * @property string $last_name
 * @property string $gender
 * @property Carbon|null $date_of_birth
 * @property string|null $short_bio
 * @property string|null $phone
 * @property string|null $address
 * @property string|null $house_number
 * @property string|null $city
 * @property string|null $postal_code
 * @property string|null $country
 * @property Carbon|null $deleted_at
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @property-read User $user
 */
class Profile extends BaseModel
{
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
