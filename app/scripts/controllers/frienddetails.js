'use strict';

/**
 * @ngdoc function
 * @name nudgeWebAppApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the nudgeWebAppApp
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

    function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i=0; i<ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1);
          if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
      }
      return "";
  }


  });

