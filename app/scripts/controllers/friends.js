'use strict';

/**
 * @ngdoc function
 * @name nudgeWebAppApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the nudgeWebAppApp
 */
angular.module('nudgeWebAppApp')
  .controller('FriendsCtrl', function ($scope, Friends, $location, $rootElement) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.go = function(requrl){
        console.log("url switch for " + requrl);
        $location.url(requrl);

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
        }
    }

    var session_token = getCookie("session_token");

    var submitjson = {};

    submitjson.session_token = session_token;

    $scope.friends = Friends.query(submitjson);

    function getCookie(cname) {
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0; i<ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1);
	        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
	    }
	    return "";
	}


  });

