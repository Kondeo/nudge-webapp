'use strict';

/**
 * JavaScript for the event creation page
 * Checks event form validity
 * Submits new event data to the server
 * Sends the user to the new event page
 */
angular.module('nudgeWebAppApp')
  .controller('EventEditCtrl', function ($scope, Events, $location, $rootElement, $routeParams) {

    //Redirects to desired local url
    $scope.go = function(requrl){
        console.log("url switch for " + requrl);
        $location.path(requrl);
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

    //Form submission function
    $scope.submit = function(){

      //get our session token so we can submit it to the backend
      $scope.eventdetails.session_token = session_token;

        //Submit json, and store the server response in scope variable
        $scope.serverResponse = Events.update($scope.eventdetails, function(){
            //If, after the submission is complete
            if ($scope.serverResponse.error) {
                alert("There was an error!");
            }
            //If the server responded with an ID, that is the event ID
            else if ($scope.serverResponse.id) {
                //Take the user to the page for the event that was just created
                $scope.go("/event/" + $scope.serverResponse.id);

            }

        });
    }

  });
