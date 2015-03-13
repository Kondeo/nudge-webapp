'use strict';

/**
 * JavaScript for main site page
 * If user doesnt have a session cookie, redirects to welcome page
 */
angular.module('nudgeWebAppApp')
  .controller('navController', function ($scope, Events, $location, $rootElement) {
    $scope.isLoggedIn = isLoggedIn();
  });
