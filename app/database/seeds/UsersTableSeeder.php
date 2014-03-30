<?php

class UsersTableSeeder extends Seeder {

  public function run()
  {
    $items =
    [
      [
      'id' => 1,
      'email' => 'kingofcuddles@gmail.com',
      'password' => Hash::make('password'),
      'runescape_name' => 'mr__cuddles7'
      ]
    ];

    DB::table('users')->insert($items);
  }

}