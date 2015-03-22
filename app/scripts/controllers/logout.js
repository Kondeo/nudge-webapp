'use strict';

/**
 * JavaScript for main site page
 * If user doesnt have a session cookie, redirects to welcome page
 */
 angular.module('nudgeWebAppApp')
 .controller('LogoutCtrl', function ($scope, Events, $location, $rootElement) {

    //Redirects to desired local url
    $scope.go = function(requrl){
        console.log("url switch for " + requrl);
        $location.path(requrl);
    }

    //Delete the cookie in order to logout
    delete_cookie();

    //Redirect to main site
    $scope.go("/");

});