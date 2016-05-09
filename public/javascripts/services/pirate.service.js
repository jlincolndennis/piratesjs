angular.module('pirates')
  .factory('PiratesService', ['$http', '$log', function($http, $log){
    return {
      all: function() {
        return $http.get('/api/pirates')
      }
    }

  }])
