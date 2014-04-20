<!doctype html>
<html lang="en" ng-app>
<head>
  <meta charset="UTF-8">
  <title>Angular Todo Demo</title>
</head>

<body ng-controller="TasksController">

  <h1>Tasks</h1>

  <ul>
    <li ng-repeat="task in tasks | filter:searchBox">
      {{ masters[task.assignee_id].name }} assigned you {{ task.count }} {{ slayer_monsters[task.monster_id].name }} - {{ task_statuses[task.status].name }}
    </li>
  </ul>

  <form ng-submit="addTask()">
    <select ng-model="newTaskAssignee" ng-options="master.name for master in masters"></select>
    <select ng-model="newTaskMonster" ng-options="monster.name for monster in slayer_monsters"></select>
    <input type="text" placeholder="Count" ng-model="newTaskCount">
    <select ng-model="newTaskStatus" ng-options="status.name for status in task_statuses"></select>
    <button type="submit">Add new Task</button>
  </form>

  <script src="assets/javascript/angular.min.js"></script>
  <script src="assets/javascript/main.js"></script>
</body>
</html>