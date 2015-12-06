'use strict';

/**
 * @ngdoc function
 * @name trentoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the trentoApp
 */
app.controller('LoginCtrl', function ($scope, $location, $http, toastr, Auth) {

    $scope.login = function() {
      var ref = new Firebase("https://trento.firebaseio.com");
      ref.authWithOAuthPopup("twitter", function(error, authData) {
        if (error) {
          toastr.error("Login Failed!");
        } else {
          $scope.auth = authData;
          Auth.data = $scope.auth;

          $scope.$apply(function () {
            $scope.auth = authData;
            toastr.success("Authenticated successfully");
            $location.path('/profile');
            console.log('Auth->', Auth.data);
          });
        }
      });
    };
  });