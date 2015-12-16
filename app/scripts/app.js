'use strict';

/**
 * @ngdoc overview
 * @name trentoApp
 * @description
 * # trentoApp
 *
 * Main module of the application.
 */
var app = angular
  .module('trentoApp', [
    'ngAnimate',
    'toastr',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize', 
    'ngTouch',
    'angularMoment',
    'firebase'
  ]);

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/logout', {
        templateUrl: 'views/main.html',
        controller: 'LogoutCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });

  app.constant('CONFIG', {
    'aURL':'https://guarded-journey-1782.herokuapp.com'
  });
