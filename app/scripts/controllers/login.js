'use strict';

/**
 * JavaScript for the login page
 * Code checks input for login form with account info from server
 * Stores session cookie for user
 * Redirects to main site
 */
angular.module('nudgeWebAppApp')
  .controller('LoginCtrl', function ($scope, Login, $location, $rootElement) {
    
    $scope.go = function(requrl){
        console.log("url switch for " + requrl);
        $location.path(requrl);
    }

    $scope.submit = function(){

        if(!$scope.login.username || !$scope.login.password){
          alert("Please fill out all fields");
          return;
        }

        var loginjson = { 
            "username": $scope.login.username,
            "password": $scope.login.password
        }

        $scope.loginfinish = Login.submit(loginjson, function(){

            if (!$scope.loginfinish.result) {
                alert("Sorry, that isn't the correct username and password.");
            } else {                
                
                document.cookie = "session_token=" + $scope.loginfinish.result.session_token + "; expires=Sun, 18 Jan 2037 12:00:00 GMT";

                $scope.go("/");

            }

        });
    }

  });

