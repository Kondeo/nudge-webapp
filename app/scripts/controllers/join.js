'use strict';

/**
 * @ngdoc function
 * @name nudgeWebAppApp.controller:JoinCtrl
 * @description
 * # JoinCtrl
 * Controller of the nudgeWebAppApp
 */
angular.module('nudgeWebAppApp')
  .controller('JoinCtrl', function ($scope, Join, $location, $rootElement) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.go = function(requrl){
        console.log("url switch for " + requrl);
        $location.url(requrl);
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


        },
        //To catch Errors when trying to join while the server
        //Or backend is down
        function(response){
            //Status 0 is when the server is not found
            if(response.status === 0){
                //Create a string with Response
                var responseString = "Response is: " + response.status;
                //Log our response status
                console.log(responseString);
                //Now alert it(Under master julian's request)
                alert("Server is not up! " + responseString);
            }
        });
    }

  });
