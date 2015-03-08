'use strict';

/**
 * JavaScript for personal events page
 * Gets all events for the current user from server
 */
angular.module('nudgeWebAppApp')
  .controller('MyEventsCtrl', function ($scope, MyEvents, $location, $rootElement) {
    
    $scope.go = function(requrl){
        console.log("url switch for " + requrl);
        $location.path(requrl);
    }

    var session_token = getCookie("session_token");

    var submitjson = {};

    submitjson.session_token = session_token;

    $scope.events = MyEvents.get(submitjson);

  });
