(function() {
  'use strict';

    var injectParams = ['$scope', '$location', '$routeParams', '$mdDialog', 'COUNTRY_DIAL_CODES'];

    var loginCtrl = function ($scope, $location, $routeParams, $mdDialog, COUNTRY_DIAL_CODES) {
    	var vm = this,
           _MOBILE_PATTERN = /^[0-9]{3,14}$/,
           _DEFAULT_COUNTRY_CODE = 'Australia:+61',
           _DEFAULT_VALID_MOBILE = '0411789776';

        vm.mobile_pattern = _MOBILE_PATTERN;
        vm.countryDialCodes = COUNTRY_DIAL_CODES,
        vm.countryDialCode = $routeParams.countryDialCode ? $routeParams.countryDialCode : _DEFAULT_COUNTRY_CODE,
        vm.mobile = $routeParams.mobile === _DEFAULT_VALID_MOBILE ? $routeParams.mobile : undefined;

        vm.submitLoginForm = function(isValid) {
            vm.submitted = true;
            if(isValid) {
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
              .parent(angular.element(document.querySelector('#login-container')))
              .clickOutsideToClose(true)
              .title('Invalid mobile: ' + mobile)
              .content('The number is invalid because there is no account. (dev only: ' + _DEFAULT_VALID_MOBILE + ')')
              .ariaLabel('invalid mobile')
              .ok('Close')
            );
        };
    };

    loginCtrl.$inject = injectParams;

    angular.module('homepass.login', ['homepass.util'])
      .controller('loginCtrl', loginCtrl);

})();