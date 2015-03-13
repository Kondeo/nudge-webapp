'use strict';

/**
 * JavaScript for the login page
 * Code checks input for login form with account info from server
 * Stores session cookie for user
 * Redirects to main site
 */
angular.module('nudgeWebAppApp')
  .controller('LoginCtrl', function ($scope, Login, $location, $rootElement) {
    
    //Redirects to desired local url
    $scope.go = function(requrl){
        console.log("url switch for " + requrl);
        $location.path(requrl);
    }

    //Form submission function
    $scope.submit = function(){

        //Check if required fields have been filled
        if(!$scope.login.username || !$scope.login.password){
          alert("Please fill out all fields");
          return;
        }

        //Assemble login json from form fields
        var loginjson = { 
            "username": $scope.login.username,
            "password": $scope.login.password
        }

        //Send login json, and store the response
        $scope.loginfinish = Login.submit(loginjson, function(){
            //Determine response from server
            if (!$scope.loginfinish.result) {
                alert("Sorry, that isn't the correct username and password.");
            } else {                
                //Store the token from the server for future use
                document.cookie = "session_token=" + $scope.loginfinish.result.session_token + "; expires=Sun, 18 Jan 2037 12:00:00 GMT";
                //Redirect to main site
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
            else
            {
                //Show the error to the user
                 //Create a string with Response
                var responseString = "Response is: " + response.status;
                //Log our response status
                console.log(responseString);
                //Now alert it(Under master julian's request)
                alert("There was an error! Error code: " + responseString);
            }
        });
    }

  });
