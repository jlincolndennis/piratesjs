angular.module('pirates')
  .factory('PirateService', ['$http', '$log', function($http, $log){
    return {
      all: function() {
        return $http.get('/api/pirates')
      },
      addPirate: function(newPirateData) {
        $log.log('bud is always right, in service', newPirateData)
        return $http.post('/api/pirates/add', newPirateData)
      }
    }

  }])
