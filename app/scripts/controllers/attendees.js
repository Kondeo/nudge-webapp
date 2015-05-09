'use strict';

/**
 * JavaScript for event attendees page.
 * Code retrieves all attendees for the host.
 */
angular.module('nudgeWebAppApp')
  .controller('FriendsCtrl', function ($scope, Friends, $location, $rootElement, StringSearch) {

    //Redirects to desired local url
    $scope.go = function(requrl){
        console.log("url switch for " + requrl);
        $location.path(requrl);
    }

    //Set search results to be empty for html elements
    $scope.search = {"empty":"true"};

    //For html "No results"
    $scope.searchSubmitted = false;

    $scope.searchSubmit = function(){
        //Reset
        $scope.searchSubmitted = false;
        //Get results from query
        $scope.search = StringSearch.search({"query":$scope.searchField}, function(){
            //For html "No Results"
            $scope.searchSubmitted = true;
        });
    }

    //Fetch the session token
    var session_token = getCookie("session_token");
    //Define json to be sent to server
    var submitjson = {};
    //Get url parameter for ID, and add it to the json
    submitjson.Id = $routeParams.eventid;
    submitjson.session_token = session_token;
    //Send the json data to the server and store the result in scope variable
    $scope.attendees = Events.hosted(submitjson, catchError);

  });
