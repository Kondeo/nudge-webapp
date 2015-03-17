'use strict';

var apiBase = 'http://backend.nudgeit.co/';

/**
 * @ngdoc overview
 * @name nudgeWebAppApp
 * @description
 * # nudgeWebAppApp
 *
 * Main module of the application.
 */
angular
  .module('nudgeWebAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/logout', {
        templateUrl: 'views/logout.html',
        controller: 'LogoutCtrl'
      })
      .when('/join', {
        templateUrl: 'views/join.html',
        controller: 'JoinCtrl'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        //controller: 'AboutCtrl'
      })
      .when('/event/:eventid', {
        templateUrl: 'views/eventdetails.html',
        controller: 'EventDetailsCtrl'
      })
      .when('/events/me', {
        templateUrl: 'views/myevents.html',
        controller: 'MyEventsCtrl'
      })
      .when('/people', {
        templateUrl: 'views/people.html',
        controller: 'PeopleCtrl'
      })
      .when('/user/:userid', {
        templateUrl: 'views/peopledetails.html',
        controller: 'PeopleDetailsCtrl'
      })
      .when('/feed', {
        templateUrl: 'views/feed.html',
        //controller: 'AboutCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        /*controller: 'AboutCtrl'*/
      })
      .when('/welcome', {
        templateUrl: 'views/welcome.html',
        /*controller: 'AboutCtrl'*/
      })
      .otherwise({
        redirectTo: '/'
      });
  });
