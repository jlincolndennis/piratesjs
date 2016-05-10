angular.module('pirates')
  .factory('PirateService', ['$http', '$log', function($http, $log){
    return {
      all: function() {
        return $http.get('/api/pirates')
      }
    }

  }])
