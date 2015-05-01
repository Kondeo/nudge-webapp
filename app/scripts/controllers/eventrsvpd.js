'use strict';

/**
 * JavaScript for rsvpd events page
 * Gets all rsvpd events for the current user from server
 */
angular.module('nudgeWebAppApp')
  .controller('EventRsvpdCtrl', function ($scope, Events, RSVP, $location, $rootElement) {

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
    $scope.events = RSVP.get(submitjson, catchError);
  });