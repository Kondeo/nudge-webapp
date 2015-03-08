'use strict';

/**
 * JavaScript for main site page
 * If user doesnt have a session cookie, redirects to welcome page
 */
angular.module('nudgeWebAppApp')
  .controller('MainCtrl', function ($scope, Events, $location, $rootElement) {
    
    $scope.go = function(requrl){
        console.log("url switch for " + requrl);
        $location.path(requrl);
    }

    $scope.token = getCookie("session_token");

    if (!(document.cookie.indexOf("session_token") >= 0)) {
        $scope.go("/welcome");
    }

    $scope.events = Events.query();

  });
