'use strict';

/**
 * @ngdoc function
 * @name trentoApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the trentoApp
 */
app.controller('LogoutCtrl', function ($scope, $location, toastr, Auth) {    
    toastr.error('You have been logged out');
    Auth.data = '';
    $location.path('/login');
});
