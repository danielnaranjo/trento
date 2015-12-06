'use strict';

/**
 * @ngdoc function
 * @name trentoApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the trentoApp
 */
app.controller('LogoutCtrl', function ($location, toastr, Auth) {    
    toastr.info('You have been logged out');
    User.data = '';
    $location.path('/');
});
