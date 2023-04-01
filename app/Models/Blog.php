<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description'];

    protected $casts = [
        'birthday' => 'date:Y-m-d',
        'created_at' => 'date:Y-m-d',
    ];
}