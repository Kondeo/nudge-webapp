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

    if (document.documentElement.clientWidth > 768) {

        $('.switch1').hover(function() {
            $('#switch1-1').stop().fadeOut('fast', function() {
                $('#switch1-2').stop().fadeIn('fast');
            });        
        }, function() {
            $('#switch1-2').stop().fadeOut('fast', function() {
                $('#switch1-1').stop().fadeIn('fast');
            });
        });

        $('.switch2').hover(function() {
            $('#switch2-1').stop().fadeOut('fast', function() {
                $('#switch2-2').stop().fadeIn('fast');
            });        
        }, function() {
            $('#switch2-2').stop().fadeOut('fast', function() {
                $('#switch2-1').stop().fadeIn('fast');
            });
        });

        $('.switch3').hover(function() {
            $('#switch3-1').stop().fadeOut('fast', function() {
                $('#switch3-2').stop().fadeIn('fast');
            });        
        }, function() {
            $('#switch3-2').stop().fadeOut('fast', function() {
                $('#switch3-1').stop().fadeIn('fast');
            });
        });

    }

    $scope.events = Events.query();

  });
