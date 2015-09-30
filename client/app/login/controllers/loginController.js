'use strict';

define(['app'], function (app) {

    var injectParams = ['$scope'];

    var loginCtrl = function ($scope) {
    	var vm = this;
    	vm.test = "test";
    };

    loginCtrl.$inject = injectParams;

    app.controller('loginCtrl', loginCtrl);

});