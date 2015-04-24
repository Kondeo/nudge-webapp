'use strict';

/**
 * JavaScript for friend details
 * Code retrieves details for a specific friend ID
 */
angular.module('nudgeWebAppApp')
  .controller('DialogCtrl', function ($scope, User, Friends, ngDialog, $location, $rootElement, $routeParams) {

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
      $scope.addResult = Friends.remove(submitjson);
      //Set friend status to zero (Not friends and can re-add them)
      $scope.userdetails.friend_status = "0";
    }
    //function if they choose no to remove
    $scope.cancelFriend = function()
    {

    }

  });
