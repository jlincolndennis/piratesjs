angular.module('pirates')
.controller('PiratesController', ['$scope', 'PirateService', '$log', function($scope, PirateService, $log){

$scope.formData = {};

PirateService.all().then(function(pirates){
  $scope.pirates = pirates.data;
})

$scope.formSubmit = function () {
  var newPirate = angular.copy($scope.formData);
  $scope.formData = {};

PirateService.addPirate(newPirate)
  .then(function(newlyAddedPirate){
    $scope.addToView(newlyAddedPirate.data[0])
  })
}

$scope.addToView = function(pirate) {
  $scope.pirates.push(pirate);

}


}])
