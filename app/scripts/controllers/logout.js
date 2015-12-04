'use strict';

/**
 * @ngdoc function
 * @name trentoApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the trentoApp
 */
app.controller('LogoutCtrl', function ($location, toastr, User) {    
    toastr.info('You have been logged out');
    User.data = '';
    $location.path('/');
});
