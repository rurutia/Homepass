'use strict';

define(['app'], function (app) {

    var injectParams = ['$scope', '$location', '$routeParams', '$mdDialog', 'countryPhoneCodes'];

    var loginCtrl = function ($scope, $location, $routeParams, $mdDialog, countryPhoneCodes) {
    	var vm = this,
           _MOBILE_PATTERN = /^[0-9]{3,14}$/,
           _DEFAULT_COUNTRY_CODE = 'Australia:+61',
           _DEFAULT_VALID_MOBILE = '0411789776';

        vm.mobile_pattern = _MOBILE_PATTERN;
        vm.countryPhoneCodes = countryPhoneCodes,
        vm.countryDialCode = $routeParams.countryDialCode ? $routeParams.countryDialCode : _DEFAULT_COUNTRY_CODE,
        vm.mobile = $routeParams.mobile;

        vm.submitLoginForm = function(isValid) {
            vm.submitted = true;
            if(isValid) {
                console.log(vm.countryDialCode);
                console.log(vm.mobile);
                if(vm.mobile !== _DEFAULT_VALID_MOBILE) {
                    _showAlertInvalidMobile(vm.mobile);
                }
                else {
                    $location.path('/verify/' + vm.countryDialCode + "/" + vm.mobile);
                }
                
            }
        };

        var _showAlertInvalidMobile = function(mobile) {
            $mdDialog.show(
              $mdDialog.alert()
              .parent(angular.element(document.querySelector('#login-panel')))
              .clickOutsideToClose(true)
              .title('Invalid mobile: ' + mobile)
              .content('The number is invalid because there is no account. (dev only: ' + _DEFAULT_VALID_MOBILE + ')')
              .ariaLabel('invalid mobile')
              .ok('Close')
            );
        };
    };

    loginCtrl.$inject = injectParams;

    app.controller('loginCtrl', loginCtrl);

});