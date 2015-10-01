'use strict';

define(['app'], function (app) {

    var injectParams = ['$scope', '$routeParams'];

    var verifyCtrl = function ($scope, $routeParams) {
    	var vm = this;

        console.log($routeParams.countryDialCode);
        vm.countryDialCode = $routeParams.countryDialCode;
        vm.dialCode = $routeParams.countryDialCode.split(":")[1];
        vm.mobile = $routeParams.mobile;
    };

    verifyCtrl.$inject = injectParams;

    app.controller('verifyCtrl', verifyCtrl);

});