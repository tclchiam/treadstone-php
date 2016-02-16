'use strict';

angular.module('treadstoneApp')
    .controller('MainCtrl', function ($scope, Auth, Principal) {
        $scope.isAuthenticated = Principal.isAuthenticated;

        $scope.submitLogin = function () {
            Auth.login({
                login: $scope.login,
                password: $scope.password
            }).then(function () {
                $scope.authenticationError = false;
            }).catch(function () {
                $scope.authenticationError = true;
            });
        };
    });
