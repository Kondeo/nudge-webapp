'use strict';

/**
 * JavaScript for friend details
 * Code retrieves details for a specific friend ID
 */
angular.module('nudgeWebAppApp')
  .controller('FriendDetailsCtrl', function ($scope, User, $location, $rootElement, $routeParams) {
    
    $scope.go = function(requrl){
        console.log("url switch for " + requrl);
        $location.path(requrl);
    }

    var session_token = getCookie("session_token");

    var submitjson = {};

    submitjson.session_token = session_token;
    submitjson.Id = $routeParams.friendid;

    $scope.frienddetails = User.get(submitjson);

  });
