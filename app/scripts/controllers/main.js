'use strict';

/**
 * @ngdoc function
 * @name nudgeWebAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nudgeWebAppApp
 */
angular.module('nudgeWebAppApp')
  .controller('MainCtrl', function ($scope, Events) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

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

    $scope.events = Events.query();

  });
