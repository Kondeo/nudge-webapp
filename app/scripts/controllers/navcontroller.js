'use strict';

/**
 * JavaScript for main site page
 * If user doesnt have a session cookie, redirects to welcome page
 */
angular.module('nudgeWebAppApp')
  .controller('navController', function ($scope, Events, $location, $rootElement) {
  	//Function to determine if user is logged in
    $scope.isLoggedIn = isLoggedIn();

    //Function to catch whenever we change our url, works fine
    $scope.$on('$routeChangeSuccess', function () 
    {
    	console.log("changed");
            setTimeout(function () {
        $scope.$apply(function(){
            $scope.toggled = false;
        });
    }, 100);
             console.log($scope.toggled);
    });

    //Function to change our scope.toggled to true, it works
    $scope.toggleNav = function()
    {
    	console.log("clicked");
    	 setTimeout(function () {
        $scope.$apply(function(){
            $scope.toggled = true;
        });
    }, 100);

    	 console.log($scope.toggled);
    }

  });
