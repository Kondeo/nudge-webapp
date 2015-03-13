'use strict';

/**
 * JavaScript for personal events page
 * Gets all events for the current user from server
 */
angular.module('nudgeWebAppApp')
  .controller('MyEventsCtrl', function ($scope, MyEvents, $location, $rootElement) {
    
    //Redirects to desired local url
    $scope.go = function(requrl){
        console.log("url switch for " + requrl);
        $location.path(requrl);
    }

    //Get session token
    var session_token = getCookie("session_token");
    //Initialize submission json
    var submitjson = {};
    //Add session token to json
    submitjson.session_token = session_token;
    //Submit json to server and store result in scope variable
    $scope.events = MyEvents.get(submitjson, catchError);

  });
