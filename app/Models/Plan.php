<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Schema;

class Plan extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
        'name',
        'code',
        'price',
        'icon',
        'slug',
        'stripe_plan',
        'description',
        'message',
        'options',
    ];
    

}
