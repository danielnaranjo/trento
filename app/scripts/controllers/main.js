'use strict';

/**
 * @ngdoc function
 * @name trentoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trentoApp
 */
app.controller('MainCtrl', function ($scope, $http, toastr, Auth, $location) {
	$scope.auth=Auth.data.twitter;
	
	// if(!$scope.storage) {
	// 	console.log('localStorage',$localStorage);
	// } else {
	// 	$scope.storage = $localStorage;
	// 	$location.path('/profile');
	// }

//var authData = $scope.authObj.$getAuth();
// if (authData) {
// 	toastr.success("Logged in as:", authData.uid);
//   console.log("Logged in as:", authData.uid);
// } else {
// 	toastr.success("Logged out");
//   console.log("Logged out");
// }

});
