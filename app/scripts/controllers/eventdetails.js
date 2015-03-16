'use strict';

/**
 * JavaScript for event details.
 * Gets the details for a provided event ID
 */
angular.module('nudgeWebAppApp')
  .controller('EventDetailsCtrl', function ($scope, Events, $location, $rootElement, $routeParams) {
    
    //Fetch the session token
    var session_token = getCookie("session_token");
    //Define json to be sent to server
    var submitjson = {};
    //Get url parameter for ID, and add it to the json
    submitjson.Id = $routeParams.eventid;
    //Send the json data to the server and store the result in scope variable
    $scope.eventdetails = Events.get(submitjson, catchError);

  });
