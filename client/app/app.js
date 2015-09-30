'use strict';

define([], function () {

    var app = angular.module('homepassApp', ['ngRoute']);

    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
            .when('/login', {
                templateUrl: '/app/login/views/login.html',
                controller: 'loginCtrl',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/login' });

        }]);

    app.run(['$rootScope', '$location', 
        function ($rootScope, $location) {


        }]);

    return app;

});





