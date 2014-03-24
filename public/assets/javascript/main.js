function TasksController ($scope, $http) {
  $scope.tasks = [
    {'id': 1, 'assignee_id': 1, 'status': 'Completed', 'monster_name': 'Mithril Dragons', 'number': 76},
    {'id': 2, 'assignee_id': 1, 'status': 'Skipped', 'monster_name': 'Dust Devils', 'number': 180},
    {'id': 3, 'assignee_id': 1, 'status': 'In Progress', 'monster_name': 'Dark Beasts', 'number': 172}
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
    // Store the new Task object
    var task = {
      assignee_id: $scope.newTaskAssignee,
      monster_name: $scope.newTaskMonsterName,
      number: $scope.newTaskNumber,
      status: "In Progress"
    };

    // Push the new Task to the scope
    $scope.tasks.push(task);

    // Push the new task to the API
    // $http.post('/api/v1/kills', task);
  }

}