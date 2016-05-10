angular.module('pirates')
.controller('PiratesController', ['$scope', 'PirateService', '$log', function($scope, PirateService, $log){

PirateService.all().then(function(pirates){
  $scope.pirates = pirates.data;
  $log.log($scope.pirates)
})


}])
