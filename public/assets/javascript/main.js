function TasksController ($scope, $http) {
  // Grab out Task list from the API and assign it to the scope
  $http.get('/api/task').success(function (tasks) {
    $scope.tasks = tasks;
  });

  $scope.slayer_monsters = [
    {'id': 1, 'name': 'Iron Dragons'},
    {'id': 2, 'name': 'Dark Beasts'},
    {'id': 3, 'name': 'Blue Dragons'},
    {'id': 4, 'name': 'Dust Devils'},
    {'id': 5, 'name': 'Steel Dragons'},
    {'id': 6, 'name': 'Hell Hounds'}
  ];

  $scope.masters = [
    {'id': 0, 'name': 'Mazchna'},
    {'id': 1, 'name': 'Vannaka'},
    {'id': 2, 'name': 'Chaeldar'},
    {'id': 3, 'name': 'Sumona'},
    {'id': 4, 'name': 'Duradel/Lapalok'},
    {'id': 5, 'name': 'Kuradal'}
  ];

  $scope.task_statuses = [
    {'id': 0, 'name': 'In Progress'},
    {'id': 1, 'name': 'Skipped'},
    {'id': 2, 'name': 'Blocked'},
    {'id': 3, 'name': 'Completed'}
  ];

  /**
   * Add a new Task.
   *
   * @return void
   */
  $scope.addTask = function addTask () {
    // Mark the previous Task as complete
    $scope.completePreviousTask();


    // Setup the new Task
    var task = {
      user_id: 1,
      assignee_id: $scope.newTaskAssignee.id,
      monster_id: $scope.newTaskMonster.id,
      count: $scope.newTaskCount,
      status: $scope.newTaskStatus.id
    };

    // Push the new Task to the scope
    $scope.tasks.push(task);

    // Push the new task to the API
    $http.post('/api/task', task);
  }

  /**
   * Marks the previous Task as completed.
   *
   * @todo Get this posting to the API!
   *
   * @return void
   */
  $scope.completePreviousTask = function addTask () {
    // Grab the previous Task
    var previousTask = $scope.tasks.pop();

    // Mark the previous Task as completed
    previousTask.status = $scope.task_statuses[3].id;

    // Push the updated Task back to the scope
    $scope.tasks.push(previousTask);
  }

}