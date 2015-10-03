(function() {
  'use strict';

  var injectParams = ['$scope', '$routeParams', '$mdDialog'];

  var verifyCtrl = function ($scope, $routeParams, $mdDialog) {
  	var vm = this,
         _VERIFICATION_CODE_PATTERN = /^[0-9]+$/,
         _DEFAULT_VALID_VERIFICATION_CODE = '5502';

      vm.vcode_pattern = _VERIFICATION_CODE_PATTERN,
      vm.countryDialCode = $routeParams.countryDialCode,
      vm.dialCode = $routeParams.countryDialCode.split(":")[1],
      vm.mobile = $routeParams.mobile;

      vm.submitVerifyForm = function(isValid) {
          vm.submitted = true;
          if(isValid) {
              if(vm.vcode !== _DEFAULT_VALID_VERIFICATION_CODE) {
                  _showDialog(vm.vcode);
              }
              else {
                  // proceed to next page
              }
              
          }
      };

      var _showDialog = function(vcode) {
          $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('#verification-container')))
            .clickOutsideToClose(true)
            .title('Invalid verification code: ' + vcode)
            .content('The verification code is invalid. (dev only: ' + _DEFAULT_VALID_VERIFICATION_CODE + ')')
            .ariaLabel('invalid verification code')
            .ok('Close')
          );
      };
  };

  verifyCtrl.$inject = injectParams;

  angular.module('homepass.login')
    .controller('verifyCtrl', verifyCtrl);

})();
