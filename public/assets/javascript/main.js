function TasksController ($scope, $http) {
  $scope.tasks = [
    {'id': 1, 'assignee_id': 1, 'status': 3, 'monster_name': 'Mithril Dragons', 'number': 76},
    {'id': 2, 'assignee_id': 1, 'status': 2, 'monster_name': 'Dust Devils', 'number': 180},
    {'id': 3, 'assignee_id': 1, 'status': 1, 'monster_name': 'Dark Beasts', 'number': 172}
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
    {'id': 0, 'name': 'In Progress'},
    {'id': 1, 'name': 'Skipped'},
    {'id': 2, 'name': 'Blocked'},
    {'id': 3, 'name': 'Completed'}
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
    // Grab the previous task
    var previousTask = $scope.tasks.pop();

    // Mark the previous task as completed
    previousTask.status = $scope.task_statuses[3].name;

    // Push the updated task back to the scope
    $scope.tasks.push(previousTask);

    // Setup the new task
    var task = {
      assignee_id: $scope.newTaskAssignee.name,
      monster_name: $scope.newTaskMonsterName,
      number: $scope.newTaskNumber,
      status: 1
    };

    // Push the new Task to the scope
    $scope.tasks.push(task);

    // Push the new task to the API
    // $http.post('/api/v1/kills', task);
  }

}