'use strict';

/**
 * @ngdoc function
 * @name trentoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the trentoApp
 */
app.controller('LoginCtrl', function ($scope, $location, $http, toastr, Auth, $firebaseAuth) {

    $scope.login = function() {
      var ref = new Firebase("https://trento.firebaseio.com");

      $scope.authObj = $firebaseAuth(ref);

      // ref.authWithOAuthPopup("twitter", function(error, authData) {
      //   $scope.authObj = $firebaseAuth(ref);
      //   if (error) {
      //     toastr.error("Login Failed!");
      //   } else {
      //     $scope.auth = authData;
      //     Auth.data = authData;

      //     toastr.success("Authenticated successfully");
      //     $location.path('/profile');

      //     // $scope.$apply(function () {
      //     //   $scope.auth = authData;
      //     //   toastr.success("Authenticated successfully");
      //     //   $location.path('/profile');
      //     //   
      //     // });
      //   }
      // });

      $scope.authObj.$authWithOAuthPopup("twitter")
      .then(function(authData) {
        toastr.success("Authenticated successfully");
        Auth.data = authData;
        $location.path('/profile');
        console.log("Logged in as:", authData.uid);
      })
      .catch(function(error) {
        toastr.error("Login Failed!");
        console.error("Authentication failed");
      });

    };
  });