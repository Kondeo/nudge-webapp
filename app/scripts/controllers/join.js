'use strict';

/**
 * JavaScript for the join page
 * Checks join form validity
 * Submits new user data to the server
 * Stores session cookie for the user
 */
angular.module('nudgeWebAppApp')
  .controller('JoinCtrl', function ($scope, Join, $location, $rootElement) {

    //Redirects to desired local url
    $scope.go = function(requrl){
        console.log("url switch for " + requrl);
        $location.path(requrl);
    }

    //Form submission function
    $scope.submit = function(){

        //Check if required fields have been filled
        if(!$scope.join.username || !$scope.join.password || !$scope.join.fullname){
            alert("Please fill out required fields.");
            return;
        }

        //Check if passwords match
        if($scope.join.password != $scope.join.confirmpassword)
        {
            alert('"Password" and "Confrim Password" do not match! Please enter the Password in both fields.');
            return;
        }

        //Create json from form data
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

        //Submit json, and store the server response in scope variable
        $scope.joinfinish = Join.submit(joinjson, function(){
            //If, after the submission is complete
            if ($scope.joinfinish.error) {
                alert("Sorry, that username is taken.");
            } 
            //If a token exists in the response, the registration was successful!
            else if ($scope.joinfinish.result.session_token) {                
                //Store session token in cookies for future use
                document.cookie = "session_token=" + $scope.joinfinish.result.session_token + "; expires=Sun, 18 Jan 2037 12:00:00 GMT";
                //Redirect to main site
                $scope.go("/");

            }


        },
        //To catch Errors when trying to join while the server
        //Or backend is down
        catchError);
    }

  });
