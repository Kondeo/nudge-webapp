'use strict';

/**
 * JavaScript for friend details
 * Code retrieves details for a specific friend ID
 */
angular.module('nudgeWebAppApp')
  .controller('UserProfileCtrl', function ($scope, User, $location, $rootElement, $routeParams) {
    
    //Redirects to desired local url
    $scope.go = function(requrl){
        console.log("url switch for " + requrl);
        $location.path(requrl);
    }

    //Fetch the session token
    var session_token = getCookie("session_token");
    //Define json to be sent to server
    var submitjson = {};
    //Add session token and url ID parameter to json
    submitjson.session_token = session_token;
    submitjson.Id = $routeParams.userid;
    //Send json to server and store response in scope variable
    $scope.userdetails = User.get(submitjson, catchError);

  });