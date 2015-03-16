'use strict';

/**
 * JavaScript for events page
 * Code simply a placeholder for now
 */
angular.module('nudgeWebAppApp')
  .controller('EventsCtrl', function ($scope, $location, $rootElement, $routeParams) {
    
    //Redirects to desired local url
    $scope.go = function(requrl){
        console.log("url switch for " + requrl);
        $location.path(requrl);
    }

  });
