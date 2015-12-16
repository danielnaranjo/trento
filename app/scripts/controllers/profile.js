'use strict';

/**
 * @ngdoc function
 * @name trentoApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the trentoApp
 */
app.controller('ProfileCtrl', function ($scope, $http, toastr, $location, Auth, CONFIG) {

	$scope.data = {};

	if(Auth.data.twitter===undefined) {
		$scope.logged=false;
		$location.path('/login');
	} else {
		$scope.auth=Auth.data.twitter;
		$scope.logged=$scope.auth;
		$scope.URL='/gettingbyuser?u=naranjodaniel&t='+$scope.auth.accessToken+'&s='+$scope.auth.accessTokenSecret

		//console.log('Auth', $scope.URL);//Auth.data.twitter
	}

	// $scope.URL='scripts/real-sample.json';
	$scope.getMore = function() {
		$scope.data.t= $scope.auth.accessToken;
		$scope.data.s= $scope.auth.accessTokenSecret;

		$http({
			method: 'GET',
			url: CONFIG.aURL+$scope.URL
		})
		.success(function(data){
			$scope.tweets=data;
			$('footer').addClass('animated bounceOutDown');
		})
		.error(function(){
			toastr.error('Cant access to Twitter API, try again.');
			console.log('Error API');
		});
	};
    
    $scope.processForm = function() {
        console.log('fire contact');
		$http({
			method:'POST',
			url:CONFIG.aURL+'/send',
			data:$.param($scope.data),
			headers:{ 'Content-Type': 'application/x-www-form-urlencoded' }
		})        
		.success(function(data) {
            $scope.sent=data;
            toastr.success('Tweet was sent!');
            $scope.data.message='';
            $scope.getMore();
        });
	};


  });
