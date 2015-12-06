'use strict';

/**
 * @ngdoc function
 * @name trentoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trentoApp
 */
app.controller('MainCtrl', function ($scope, $http, toastr, Auth) {
	$scope.auth=Auth.data.twitter;
	console.log('main', $scope.auth);
});
