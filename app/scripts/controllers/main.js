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
