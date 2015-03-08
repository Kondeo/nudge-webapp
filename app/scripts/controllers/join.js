'use strict';

/**
 * JavaScript for the join page
 * Checks join form validity
 * Submits new user data to the server
 * Stores session cookie for the user
 */
angular.module('nudgeWebAppApp')
  .controller('JoinCtrl', function ($scope, Join, $location, $rootElement) {

    $scope.go = function(requrl){
        console.log("url switch for " + requrl);
        $location.path(requrl);
    }

    $scope.submit = function(){

        if(!$scope.join.username || !$scope.join.password || !$scope.join.fullname){
            alert("Please fill out required fields.");
            return;
        }

        if($scope.join.password != $scope.join.confirmpassword)
        {
            alert('"Password" and "Confrim Password" do not match! Please enter the Password in both fields.');
            return;
        }

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

            if ($scope.joinfinish.error) {
                alert("Sorry, that username is taken.");
            } else if ($scope.joinfinish.result.session_token) {                

                document.cookie = "session_token=" + $scope.joinfinish.result.session_token + "; expires=Sun, 18 Jan 2037 12:00:00 GMT";

                $scope.go("/");

            }

        });
    }

  });
