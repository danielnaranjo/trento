'use strict';

/**
 * @ngdoc function
 * @name trentoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trentoApp
 */
app.controller('MainCtrl', function ($scope, $http, User, toastr) {

	// var ref = new Firebase("https://trento.firebaseio.com/users");
	// ref.child('registered').orderByChild('id').equalTo('110495478').on("child_added", function(snapshot) {
	// 	console.log('id: ',snapshot.val());
	// }, function (errorObject) {
	// 	toastr.error("Cant connect to real-time service");
	// });

	
	if(User.data!=='') {
		$scope.twitter = User.data;
	} else {
		$location.path('/main?message=You+must+log+in');
	}



	$scope.getMore = function() {
		$http({
			method: 'GET',
			url: 'scripts/real-sample.json'
		})
		.success(function(data){
			$scope.tweets=data;
			$('footer').addClass('animated bounceOutDown');
		})
		.error(function(){
			toastr.error('Cant access to API server');
			console.log('Error API');
		});
	};

});
