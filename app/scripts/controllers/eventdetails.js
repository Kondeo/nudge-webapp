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

    $scope.requestRSVP = function(){
        var submitjson = {};
        submitjson.Id = "request";
        submitjson.attendee_id = "me";
        submitjson.session_token = session_token;
        submitjson.event_id = $routeParams.eventid;
        $scope.addResult = RSVP.request(submitjson);
        $scope.eventdetails.status = "1";
    }

    $scope.acceptRSVP = function(){
        var sumbitjson = {};
        submitjson.Id = "accept";
        submitjson.session_token = session_token;
        submitjson.event_id = $routeParams.eventid;
        $scope.acceptResult = RSVP.attend(submitjson);
        $scope.eventdetails.status = "5";
    }

    $scope.cancelRSVP = function(){
        var sumbitjson = {};
        submitjson.Id = "cancel";
        submitjson.attendee_id = "me";
        submitjson.session_token = session_token;
        submitjson.event_id = $routeParams.eventid;
        $scope.declineResult = RSVP.cancel(submitjson);
        $scope.eventdetails.status = "0";
    }

    //Supposed to redirect to event edit page
    $scope.editEvent = function(){
        $scope.go("");
    }

    //Redirects to Attendees page
    $scope.editAttendees = function(){
        $scope.go("event/" + $routeParams.eventid + "/attendees");
    }

    //Fetch the session token
    var session_token = getCookie("session_token");
    //Define json to be sent to server
    var submitjson = {};
    //Get url parameter for ID, and add it to the json
    submitjson.Id = $routeParams.eventid;
    submitjson.session_token = session_token;
    //Send the json data to the server and store the result in scope variable
    $scope.eventdetails = Events.get(submitjson, catchError);

  });
