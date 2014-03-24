<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSlayerMasterTable extends Migration {

  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('slayer_masters', function($table)
    {
      $table->increments('id');
      $table->string('name');
      $table->smallInteger('slayer_points');
      $table->smallInteger('slayer_points_10th');
      $table->smallInteger('slayer_points_50th');
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
    Schema::drop('slayer_masters');
  }

}