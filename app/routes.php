<?php

Route::get('/', function()
{
	return View::make('hello');
});

// API routes
Route::group(['prefix' => 'api'], function()
{
  // Task API
  Route::resource('task', 'SlayerTaskAPIController');
});