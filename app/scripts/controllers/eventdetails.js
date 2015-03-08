'use strict';

/**
 * JavaScript for event details.
 * Gets the details for a provided event ID
 */
angular.module('nudgeWebAppApp')
  .controller('EventDetailsCtrl', function ($scope, Events, $location, $rootElement, $routeParams) {
    
    $scope.go = function(requrl){
        console.log("url switch for " + requrl);
        $location.path(requrl);
    }

    var session_token = getCookie("session_token");

    var submitjson = {};

    submitjson.Id = $routeParams.eventid;

    $scope.eventdetails = Events.get(submitjson);

  });
