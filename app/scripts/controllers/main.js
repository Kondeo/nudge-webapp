'use strict';

/**
 * JavaScript for main site page
 * If user doesnt have a session cookie, redirects to welcome page
 */
angular.module('nudgeWebAppApp')
  .controller('MainCtrl', function ($scope, Events, $location, $rootElement) {
    
    //Redirects to desired local url
    $scope.go = function(requrl){
        console.log("url switch for " + requrl);
        $location.path(requrl);
    }

    //Get session token
    $scope.token = getCookie("session_token");
    //If there is no token, redirect to welcome page
    if (!(document.cookie.indexOf("session_token") >= 0)) {
        $scope.go("/welcome");
    }

    $scope.events = Events.query();

  });
