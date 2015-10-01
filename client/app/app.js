'use strict';

define([], function () {

    var app = angular.module('homepassApp', ['ngRoute', 'ngMaterial', 'ngMessages']);

    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
            .when('/login/:countryDialCode?/:mobile?', {
                templateUrl: '/app/login/views/login.html',
                controller: 'loginCtrl',
                controllerAs: 'vm'
            })
            .when('/verify/:countryDialCode/:mobile', {
                templateUrl: '/app/verify/views/verify.html',
                controller: 'verifyCtrl',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/login' });

        }]);

    app.run(['$rootScope', '$location', 
        function ($rootScope, $location) {


        }]);

    return app;

});





