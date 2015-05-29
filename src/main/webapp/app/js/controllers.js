'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', function ($scope, $http) {

    $http.get("/app/phones/phones.json").success(function (data, status, headers, config) {
        $scope.phones = data;
    }).error(function (data) {
        alert(data);
    });

    $scope.title = "Telephonus";
    $scope.phones = [
        {
            name: "Nexus S",
            snippet: "Tra-la-la",
            status: true
        },
        {
            name: "Motorola XOOM",
            snippet: "The next, next Generation Tablet",
            status: false
        }
    ];

    var date = new Date();
    $scope.today = date;

    $scope.sortField = undefined;
    $scope.reverse = false;

    $scope.sort = function (fieldName) {
        if ($scope.sortField === fieldName) {
            $scope.reverse = !scope.reverse;
        } else {
            $scope.sortField = fieldName;
            Sscope.reverse = false;
        }
    }

});

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
    function ($scope, $routeParams, Phone) {
        $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function (phone) {
            $scope.mainImageUrl = phone.images[0];
        });

        $scope.setImage = function (imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }
    }]);
