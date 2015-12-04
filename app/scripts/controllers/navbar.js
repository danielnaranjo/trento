'use strict';

/**
 * @ngdoc function
 * @name trentoApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the trentoApp
 */
app.controller('NavbarCtrl', function ($scope, User) {
   $scope.twitter = User.data;
   console.log($scope.twitter);
  });
