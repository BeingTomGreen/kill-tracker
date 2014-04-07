<?php

class SlayerTaskRepository {

  /**
   * Returns all Slayer tasks belonging to a specific user
   *
   * @param  int $user_id The user's ID
   * @return Illuminate\Database\Eloquent\Collection The tasks Collection
   */
  public function getUsersTasks($user_id)
  {
    return SlayerTask::where('user_id', '=', $user_id)->get();
  }

  /**
   * Stores a new Slayer task
   *
   * @param  int $ input
   * @return Illuminate\Database\Eloquent\Collection The tasks Collection
   */
  public function storeTask($user_id)
  {
    return SlayerTask::where('user_id', '=', $user_id)->get();
  }

}