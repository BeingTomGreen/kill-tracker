<?php

use Illuminate\Database\Migrations\Migration;

class CreateSlayerTaskTable extends Migration {

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
      $table->smallInteger('user_id')->references('id')->on('users');
      $table->smallInteger('assignee_id')->references('id')->on('slayer_masters');
      $table->smallInteger('monster_id')->references('id')->on('users');
      $table->smallInteger('status');
      $table->smallInteger('count');
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