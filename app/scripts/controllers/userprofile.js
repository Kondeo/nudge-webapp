'use strict';

/**
 * JavaScript for friend details
 * Code retrieves details for a specific friend ID
 */
angular.module('nudgeWebAppApp')
  .controller('UserProfileCtrl', function ($scope, User, Friends, ngDialog, $location, $rootElement, $routeParams) {

    //Redirects to desired local url
    $scope.go = function(requrl){
        console.log("url switch for " + requrl);
        $location.path(requrl);
    }

    $scope.addFriend = function(){
        var submitjson = {};
        submitjson.Id = "add";
        submitjson.session_token = session_token;
        submitjson.friend_id = $routeParams.userid;
        $scope.addResult = Friends.add(submitjson);
        $scope.userdetails.friend_status = "1";
    }

    //Function to unfriend a user
    $scope.unFriend = function(){

      var dialog = ngDialog.open({
        template: '../views/dialogs/unfriend.html'
        });
      /* without ng dialog
        //get our json
        var submitjson = {};
        submitjson.Id = "remove";
        submitjson.session_token = session_token;
        submitjson.friend_id = $routeParams.userid;
        $scope.addResult = Friends.remove(submitjson);
        //Set friend status to zero (Not friends and can re-add them)
        $scope.userdetails.friend_status = "0";
        */
    }

    $scope.acceptFriend = function(){
        var sumbitjson = {};
        submitjson.Id = "accept";
        submitjson.session_token = session_token;
        submitjson.friend_id = $routeParams.userid;
        $scope.acceptResult = Friends.accept(submitjson);
        $scope.userdetails.friend_status = "5";
    }

    $scope.declineFriend = function(){
        var sumbitjson = {};
        submitjson.Id = "decline";
        submitjson.session_token = session_token;
        submitjson.friend_id = $routeParams.userid;
        $scope.declineResult = Friends.decline(submitjson);
        $scope.userdetails.friend_status = "0";
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
