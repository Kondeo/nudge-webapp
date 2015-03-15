'use strict';

/**
 * JavaScript for friends page.
 * Code retrieves all friends for the logged in user.
 */
angular.module('nudgeWebAppApp')
  .controller('FriendsCtrl', function ($scope, Friends, $location, $rootElement, StringSearch) {
    
    //Redirects to desired local url
    $scope.go = function(requrl){
        console.log("url switch for " + requrl);
        $location.path(requrl);
    }

    $scope.search = {};

    $scope.searchSubmit = function(){
        $scope.search = StringSearch.search({"query":$scope.searchField})
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
