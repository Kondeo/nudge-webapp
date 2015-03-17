'use strict';

/**
 * JavaScript for people page.
 * Code retrieves all friends for the logged in user.
 */
angular.module('nudgeWebAppApp')
  .controller('PeopleCtrl', function ($scope, Friends, $location, $rootElement, StringSearch) {
    
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
    //Add session token to json
    submitjson.session_token = session_token;
    //Submit json to server and store result in scope variable
    $scope.friends = Friends.query(submitjson, catchError);

  });
