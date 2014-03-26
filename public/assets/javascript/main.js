function TasksController ($scope, $http) {
  $scope.tasks = [
    {'id': 1, 'user_id': 1, 'assignee_id': 1, 'status': 3, 'task_number': 1, 'monster_id': 1, 'number': 76},
    {'id': 2, 'user_id': 1, 'assignee_id': 1, 'status': 2, 'task_number': 2, 'monster_id': 2, 'number': 180},
    {'id': 3, 'user_id': 1, 'assignee_id': 1, 'status': 1, 'task_number': 3, 'monster_id': 3, 'number': 172}
  ];

  $scope.slayer_monsters = [
    {'id': 1, 'name': 'Iron Dragons'},
    {'id': 2, 'name': 'Dark Beasts'},
    {'id': 3, 'name': 'Blue Dragons'},
    {'id': 4, 'name': 'Dust Devils'},
    {'id': 5, 'name': 'Steel Dragons'},
    {'id': 6, 'name': 'Hell Hounds'}
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
  $scope.addTask = function addTask () {
    // Grab the previous Task
    var previousTask = $scope.tasks.pop();

    // Mark the previous Task as completed
    previousTask.status = $scope.task_statuses[3].id;

    // console.log(previousTask);

    // Push the updated Task back to the scope
    $scope.tasks.push(previousTask);

    // Setup the new Task
    var task = {
      assignee_id: $scope.newTaskAssignee.name,
      monster_id: $scope.newTaskMonsterName,
      number: $scope.newTaskNumber,
      status: 0
    };

    // Push the new Task to the scope
    $scope.tasks.push(task);

    // Push the new task to the API
    // $http.post('/api/v1/kills', task);
  }

}