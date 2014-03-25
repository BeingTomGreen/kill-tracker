<!doctype html>
<html lang="en" ng-app>
<head>
  <meta charset="UTF-8">
  <title>Angular Todo Demo</title>
</head>

<body ng-controller="TasksController">

  <h1>Tasks</h1>

  <input type="text" placeholder="Sort Tasks" ng-model="searchBox">

  <ul>
    <li ng-repeat="task in tasks | filter:searchBox">
      <input type="checkbox" ng-model="task.status">
      {{ task.assignee_id }} assigned you {{ task.number }} {{ task.monster_name }} - {{ task.status }}
    </li>
  </ul>

  <form ng-submit="addTask()">
    <select ng-model="newTaskAssignee" ng-options="master.name for master in masters"></select>
    <input type="text" placeholder="Monster" ng-model="newTaskMonsterName">
    <input type="text" placeholder="Number" ng-model="newTaskNumber">
    <button type="submit">Add new Task</button>
  </form>

  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.7/angular.min.js"></script>
  <script src="assets/javascript/main.js"></script>
</body>
</html>