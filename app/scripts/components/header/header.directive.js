'use strict';

angular.module('treadstoneApp')
    .directive('tsHeader', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'scripts/components/header/header.html',
            scope: {},
            controller: ['$scope', 'Auth', 'Principal', function ($scope, Auth, Principal) {
                $scope.$on('$routeChangeSuccess', function (event, current) {
                    $scope.title = current.$$route.data.pageTitle;
                });

                $scope.isAuthenticated = Principal.isAuthenticated;

                $scope.logout = function () {
                    Auth.logout();
                };
            }]
        };
    });