<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $now = now();

        $products = [
            [
                'img' => '/assets/pic1.jpg',
                'brand' => 'Nike',
                'title' => 'Nike Air Zoom Runner',
                'rating' => 4.8,
                'reviews' => 128,
                'sellPrice' => 4999,
                'orders' => '240',
                'mrp' => '6999',
                'discount' => 29,
                'category' => 'men',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'img' => '/assets/pic2.jpg',
                'brand' => 'Adidas',
                'title' => 'Adidas Cloud Comfort',
                'rating' => 4.6,
                'reviews' => 94,
                'sellPrice' => 4299,
                'orders' => '180',
                'mrp' => '5999',
                'discount' => 28,
                'category' => 'women',
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ];

        foreach ($products as $product) {
            DB::table('products')->updateOrInsert(
                ['title' => $product['title']],
                $product
            );
        }
    }
}
