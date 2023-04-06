<?php

namespace App\Domain\Users\Models;

use App\Infrastructure\Models\BaseUserModel;
use App\Infrastructure\Models\HasObscuredId;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Carbon;
use Laravel\Sanctum\HasApiTokens;

/**
 * @property int    $id
 * @property string $obscured_id
 * @property string $role
 * @property string $email
 * @property string $password
 * @property string $remember_token
 * @property int    $login_count
 * @property Carbon $last_login_at
 * @property Carbon $email_verified_at
 * @property string $email_verification_token
 * @property Carbon $deleted_at
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @property-read Profile $profile
 *
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Database\Factories\Domain\Users\Models\UserFactory factory()
 */
class User extends BaseUserModel
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes, HasObscuredId;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'role',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function profile(): HasOne
    {
        return $this->hasOne(Profile::class);
    }
}
