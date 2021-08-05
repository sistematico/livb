<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Index')->name('welcome');

Route::inertia('/sobre', 'About');

Route::inertia('/contato', 'Contact');

Route::middleware('auth:sanctum')->group(function() {
    Route::get('/dashboard', function() {
        return Inertia::render('Admin/Dashboard');
    })->name('dashboard');
});
