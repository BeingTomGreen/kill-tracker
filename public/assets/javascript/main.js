function TasksController ($scope, $http) {
  $scope.tasks = [
    {'id': 1, 'assignee_id': 1, 'status': 'Completed', 'monster_name': 'Mithril Dragons', 'number': 76},
    {'id': 2, 'assignee_id': 1, 'status': 'Skipped', 'monster_name': 'Dust Devils', 'number': 180},
    {'id': 3, 'assignee_id': 1, 'status': 'In Progress', 'monster_name': 'Dark Beasts', 'number': 172}
  ];

  $scope.masters = [
    {'id': 1, 'name': 'Mazchna'},
    {'id': 2, 'name': 'Vannaka'},
    {'id': 3, 'name': 'Chaeldar'},
    {'id': 4, 'name': 'Sumona'},
    {'id': 5, 'name': 'Duradel/Lapalok'},
    {'id': 6, 'name': 'Kuradal'}
  ];

  $scope.task_statuses = [
    {'id': 1, 'name': 'In Progress'},
    {'id': 2, 'name': 'Completed'},
    {'id': 3, 'name': 'Skipped'},
    {'id': 4, 'name': 'Blocked'}
  ];

  /*
  // Grab out Task list from the API and assign it to the scope
  $http.get('/api/v1/tasks').success(function (tasks) {
    $scope.tasks = tasks;
  });
  */

  /**
   * Add a new Task
   *
   * @return void
   */
  $scope.addTask = function function_name () {
    // Grab the old task
    var previousTask = $scope.tasks.pop();

    // Mark the previous task as completed
    previousTask.status = $scope.task_statuses[2].name;

    // Push the new Task to the scope
    $scope.tasks.push(previousTask);

    // Store the new Task object
    var task = {
      assignee_id: $scope.newTaskAssignee.name,
      monster_name: $scope.newTaskMonsterName,
      number: $scope.newTaskNumber,
      status: "In Progress"
    };

    // Push the new Task to the scope
    $scope.tasks.push(task);

    //$scope.tasks.pop(previousTask);



    // Push the new task to the API
    // $http.post('/api/v1/kills', task);
  }

}