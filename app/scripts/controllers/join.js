'use strict';

/**
 * @ngdoc function
 * @name nudgeWebAppApp.controller:JoinCtrl
 * @description
 * # JoinCtrl
 * Controller of the nudgeWebAppApp
 */
angular.module('nudgeWebAppApp')
  .controller('JoinCtrl', function ($scope, Join) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.submit = function(){

        var joinjson = { 
            "username": $scope.join.username,
            "password": $scope.join.password,
            "name": $scope.join.fullname,
            "phone": $scope.join.phone,
            "address1": $scope.join.add1,
            "address2": $scope.join.add2,
            "city": $scope.join.city,
            "state": $scope.join.state,
            "zip": $scope.join.zip,
            "profile": ""
        }

        $scope.joinfinish = Join.submit(joinjson, function(){

            if (!$scope.joinfinish.result) {
                alert("Sorry, please fill in all the required fields.");
            } else {                
                
                document.cookie = "session_token=" + $scope.joinfinish.result.session_token + "; expires=Sun, 18 Jan 2037 12:00:00 GMT";

                $scope.go("/#/");

            }

        });
    }

  });
