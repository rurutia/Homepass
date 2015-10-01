'use strict';

define(['app'], function (app) {

    var injectParams = ['$scope', '$location', '$routeParams', 'countryPhoneCodes'];

    var loginCtrl = function ($scope, $location, $routeParams, countryPhoneCodes) {
    	var vm = this;

        vm.countryPhoneCodes = countryPhoneCodes;
        vm.countryDialCode = $routeParams.countryDialCode;
        vm.mobile = $routeParams.mobile;

        vm.submitLoginForm = function(isValid) {
            vm.submitted = true;
            if(isValid) {
                console.log(vm.countryDialCode);
                console.log(vm.mobile);
                $location.path('/verify/' + vm.countryDialCode + "/" + vm.mobile);
            }
        };
    };

    loginCtrl.$inject = injectParams;

    app.controller('loginCtrl', loginCtrl);

});