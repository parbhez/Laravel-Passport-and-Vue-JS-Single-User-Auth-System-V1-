<?php

namespace Database\Seeders;

use Carbon\Factory;
use App\Models\Blog;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach (range(1, 20) as $index) {

            DB::table('blogs')->insert([
                'title' => Str::random(10) .'-'.$index,
                'description' => Str::random(100) . 'test'. '-'. $index,
            ]);
        }
    }
}
