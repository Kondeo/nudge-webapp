'use strict';

/**
 * JavaScript for main site page
 * If user doesnt have a session cookie, redirects to welcome page
 */
 angular.module('nudgeWebAppApp')
 .controller('LogoutCtrl', function ($scope, Events, $location, $rootElement) {

    //Redirects to desired local url
    $scope.go = go;

    //Delete the cookie in order to logout
    delete_cookie();


    //Redirect to main site
    //Do not use scope.go since we need a full reload of angular
    //Use location.replace so they cannot use back button to get to original page
    window.location.replace("/");

});