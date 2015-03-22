'use strict';

/**
 * JavaScript for event details.
 * Gets the details for a provided event ID
 */
angular.module('nudgeWebAppApp')
  .controller('EventDetailsCtrl', function ($scope, Events, RSVP, $location, $rootElement, $routeParams) {
    
    //Redirects to desired local url
    $scope.go = function(requrl){
        console.log("url switch for " + requrl);
        $location.path(requrl);
    }

    $scope.requestEvent = function(){
        var submitjson = {};
        submitjson.Id = "add";
        submitjson.session_token = session_token;
        submitjson.event_id = $routeParams.eventid;
        $scope.addResult = RSVP.add(submitjson);
        $scope.eventdetails.status = "1";
    }

    $scope.acceptEvent = function(){
        var sumbitjson = {};
        submitjson.Id = "accept";
        submitjson.session_token = session_token;
        submitjson.event_id = $routeParams.eventid;
        $scope.acceptResult = RSVP.accept(submitjson);
        $scope.eventdetails.status = "5";
    }

    $scope.declineEvent = function(){
        var sumbitjson = {};
        submitjson.Id = "decline";
        submitjson.session_token = session_token;
        submitjson.event_id = $routeParams.eventid;
        $scope.declineResult = RSVP.decline(submitjson);
        $scope.eventdetails.status = "0";
    }

    //Fetch the session token
    var session_token = getCookie("session_token");
    //Define json to be sent to server
    var submitjson = {};
    //Get url parameter for ID, and add it to the json
    submitjson.Id = $routeParams.eventid;
    //Send the json data to the server and store the result in scope variable
    $scope.eventdetails = Events.get(submitjson, catchError);

  });
