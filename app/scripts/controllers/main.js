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

    $scope.events = Events.query();

  });
