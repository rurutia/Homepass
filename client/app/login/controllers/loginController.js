'use strict';

define(['app'], function (app) {

    var injectParams = ['$scope', '$location', 'countryPhoneCodes'];

    var loginCtrl = function ($scope, $location, countryPhoneCodes) {
    	var vm = this;

        vm.countryPhoneCodes = countryPhoneCodes;

        vm.submitLoginForm = function(isValid) {
            vm.submitted = true;
            if(isValid) {
                $location.path('/verify');
            }
        };
    };

    loginCtrl.$inject = injectParams;

    app.controller('loginCtrl', loginCtrl);

});