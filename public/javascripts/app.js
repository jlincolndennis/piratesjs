angular.module('pirates', ['ngRoute'])
.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: "/views/pirates.html"
    })
})
