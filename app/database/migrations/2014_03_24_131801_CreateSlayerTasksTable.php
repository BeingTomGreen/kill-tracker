<?php

use Illuminate\Database\Migrations\Migration;

class CreateSlayerTasksTable extends Migration {

  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('slayer_tasks', function($table)
    {
      $table->increments('id');
      $table->smallInteger('task_number');
      $table->smallInteger('user_id')->references('id')->on('users');
      $table->smallInteger('monster_id')->references('id')->on('users');
      $table->smallInteger('assignee')->references('id')->on('slayer_masters');
      $table->smallInteger('count');
      $table->smallInteger('completed');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::drop('slayer_tasks');
  }

}