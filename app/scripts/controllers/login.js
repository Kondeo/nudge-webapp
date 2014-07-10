'use strict';

/**
 * @ngdoc function
 * @name nudgeWebAppApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the nudgeWebAppApp
 */
angular.module('nudgeWebAppApp')
  .controller('LoginCtrl', function ($scope, Login) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.submit = function(){

        var loginjson = { 
            "username": $scope.login.username,
            "password": $scope.login.password
        }

        $scope.loginfinish = Login.submit(loginjson, function(){

            if (!$scope.loginfinish.result) {
                alert("Sorry, that isn't the correct username and password.");
            } else {                
                
                document.cookie = "session_token=" + $scope.loginfinish.result.session_token + "; expires=Sun, 18 Jan 2037 12:00:00 GMT";

                $scope.go("/#/");

            }

        });
    }

  });

