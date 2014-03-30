<?php

class SlayerTasksTableSeeder extends Seeder {

  public function run()
  {
    $items =
    [
      [
      'id' => 1,
      'user_id' => 1,
      'assignee_id' => 6,
      'monster_id' => 1,
      'status' => 3,
      'count' => 76
      ],
      [
      'id' => 2,
      'user_id' => 1,
      'assignee_id' => 6,
      'monster_id' => 2,
      'status' => 2,
      'count' => 180
      ],
      [
      'id' => 3,
      'user_id' => 1,
      'assignee_id' => 6,
      'monster_id' => 3,
      'status' => 1,
      'count' => 172
      ]
    ];

    DB::table('slayer_tasks')->insert($items);
  }

}