'use strict';

/**
 * @ngdoc function
 * @name nudgeWebAppApp.controller:AttendeesCtrl
 * @description
 * # AttendeesCtrl
 * Controller of the nudgeWebAppApp
 */
angular.module('nudgeWebAppApp')
  .controller('AttendeesCtrl', function ($scope, $routeParams, Events) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karmaa'];





    //Fetch the session token
    var session_token = getCookie("session_token");
    //Define json to be sent to server
    var submitjson = {};
    //Get url parameter for ID, and add it to the json
    submitjson.event_id = $routeParams.eventid;
    submitjson.session_token = session_token;
    //Send the json data to the server and store the result in scope variable
    $scope.attendees = Events.hosted(submitjson, catchError);
  });
