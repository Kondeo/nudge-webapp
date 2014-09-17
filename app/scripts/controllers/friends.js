'use strict';

/**
 * @ngdoc function
 * @name nudgeWebAppApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the nudgeWebAppApp
 */
angular.module('nudgeWebAppApp')
  .controller('FriendsCtrl', function ($scope, Login, $location, $rootElement) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.go = function(requrl){
        console.log("url switch for " + requrl);
        $location.url(requrl);
    }

  });

