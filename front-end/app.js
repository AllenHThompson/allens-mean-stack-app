var app = angular.module('my-app', ['ngRoute']);

app.config(function($routeProvider) {
     $routeProvider
     .when('/', {
          templateUrl: 'main.html',
          controller: 'mainController'
     });
});

var API = 'http://localhost:8000';

app.controller('mainController', function($scope, $http, $location) {
     console.log("IN HTTP FUNCTION");
     $http.get(API + '/options')
     .success(function(options) {
          $scope.colorOptions = options;
     });
});
