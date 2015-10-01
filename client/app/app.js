'use strict';

define([], function () {

    var app = angular.module('homepassApp', ['ngRoute', 'ngMaterial', 'ngMessages']);

    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
            .when('/login', {
                templateUrl: '/app/login/views/login.html',
                controller: 'loginCtrl',
                controllerAs: 'vm'
            })
            .when('/verify', {
                templateUrl: '/app/verify/views/verify.html'
            })
            .otherwise({ redirectTo: '/login' });

        }]);

    app.run(['$rootScope', '$location', 
        function ($rootScope, $location) {


        }]);

    return app;

});





