'use strict';

/**
 * JavaScript for friend details
 * Code retrieves details for a specific friend ID
 */
angular.module('nudgeWebAppApp')
  .controller('DialogCtrl', function ($scope, User, Friends, ngDialog, $location, $rootElement, $routeParams, $route) {

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

    //function if they choose yes to remove
    $scope.removeFriend = function()
    {
      //get our json
      var submitjson = {};
      submitjson.Id = "remove";
      submitjson.session_token = session_token;
      submitjson.friend_id = $routeParams.userid;
      $scope.addResult = Friends.remove(submitjson, function()
      {
        //Close the dialog
        ngDialog.closeAll(1);

        //Refresh the page to show you are no longer friends
        $route.reload();
      });
    }

    //Function to cancel is in the html

  });
