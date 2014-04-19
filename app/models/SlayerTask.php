<?php

class SlayerTask extends Eloquent {

  /**
   * The database table used by the model.
   *
   * @var string
   */
  protected $table = 'slayer_tasks';

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = ['user_id', 'assignee_id', 'monster_id', 'status', 'count'];
}