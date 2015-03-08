'use strict';

/**
 * @ngdoc function
 * @name nudgeWebAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nudgeWebAppApp
 */
angular.module('nudgeWebAppApp')
  .controller('MainCtrl', function ($scope, Events, $location, $rootElement) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.go = function(requrl){
        console.log("url switch for " + requrl);
        $location.path(requrl);
    }

    $scope.token = getCookie("session_token");

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        //alert("You device are mobile is");
        $('.switch1').delay(1000).animate({ color: '#ffffff' }, 'slow');
        $('.switch2').delay(1000).animate({ color: '#ffffff' }, 'slow');
        $('.switch3').delay(1000).animate({ color: '#ffffff' }, 'slow');
    } else {

        $('.switch1').hover(function() {
            $('.switch1').animate({ color: '#ffffff' }, 'fast');
        }, function() {
            $('.switch1').stop().animate({ color: "#56799c" }, 'fast');
        });

        $('.switch2').hover(function() {
            $('.switch2').animate({ color: '#ffffff' }, 'fast');
        }, function() {
            $('.switch2').stop().animate({ color: "#56799c" }, 'fast');
        });

        $('.switch3').hover(function() {
            $('.switch3').animate({ color: '#ffffff' }, 'fast');
        }, function() {
            $('.switch3').stop().animate({ color: "#56799c" }, 'fast');
        });

    };

    if (!(document.cookie.indexOf("session_token") >= 0)) {
        $scope.go("/welcome");
    }

    $scope.events = Events.query();

  });

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
