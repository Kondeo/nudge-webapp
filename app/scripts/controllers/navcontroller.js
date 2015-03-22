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
            setTimeout(function () {
        $scope.$apply(function(){
            //document.getElementById("bs-example-navbar-collapse-1").className="collapse";
    		$('#bs-example-navbar-collapse-1').collapse('hide');
        });
    }, 100);
    });

  });
