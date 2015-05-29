<!doctype html>
<html lang="en" ng-app="phonecatControllers">
<head>
    <meta charset="utf-8">
    <title>Google Phone Gallery</title>
    <link rel="stylesheet" href="app/css/app.css">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.js"></script>
    <script src="app/js/controllers.js"/>
    <script>

    </script>
</head>
<body ng-controller="PhoneListCtrl">
<h1>{{title}}</h1>

<input type="text" ng-model="query">
<ul>
    <li ng-repeat="phone in ph = (phones  | filter:{name:query})">
        <span>{{phone.name}}</span>

        <p>{{phone.snippet}}</p>
    </li>
    <p>Total number of telephones: {{ph.length}}</p>
    <table>
        <thead>
        <tr>
            <th><a href="" ng-click="sort('name')">Name</a></th>
        </tr>
        </thead>
        <tbody>
        <tr ng-repeat="phone in phones | orderBy:sortField:reverse">
            <td>
                {{phone.name}}
            </td>
        </tr>
        </tbody>
    </table>

    <hr>

    {{today | date:"dd/MM/yyyy"}}


</ul>
</body>
</html>
