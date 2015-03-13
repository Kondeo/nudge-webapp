'use strict';

/**
 * JavaScript for the event creation page
 * Checks event form validity
 * Submits new event data to the server
 * Sends the user to the new event page
 */
angular.module('nudgeWebAppApp')
  .controller('EventCreateCtrl', function ($scope, Events, $location, $rootElement) {

    //Redirects to desired local url
    $scope.go = function(requrl){
        console.log("url switch for " + requrl);
        $location.path(requrl);
    }
    
    //Set default for form radio button concerning
    //privacy. Defaults to private (false)
    $scope.newEvent = {
        publicity: 'false'
      };

    //Form submission function
    $scope.submit = function(){

        //Create json from form data
        var serverJson = { 
            "name": $scope.newEvent.name,
            "start_time": $scope.newEvent.start,
            "end_time": $scope.newEvent.end,
            "public": $scope.newEvent.publicity,
            "category": $scope.newEvent.category
        }

        //Submit json, and store the server response in scope variable
        $scope.serverResponse = Events.save(serverJson, function(){
            //If, after the submission is complete
            if ($scope.serverResponse.error) {
                alert("There was an error!");
            } 
            //If the server responded with an ID, that is the event ID
            else if ($scope.serverResponse.result.id) {                
                //Take the user to the page for the event that was just created
                $scope.go("/event/" + $scope.serverResponse.result.id);

            }

        });
    }

  });
