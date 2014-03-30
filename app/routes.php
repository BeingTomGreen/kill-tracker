<?php

Route::get('/', function()
{
	return View::make('hello');
});

// API routes
Route::group(['prefix' => 'api'], function()
{
  // Events
  Route::resource('task', 'SlayerTaskAPIController');
});