describe('unit: loginCtrl', function () {
    var scope;

    beforeEach(module('homepassApp'));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
    }));

    it('should have all country codes and default country to be Australia', function () {
        inject(function($rootScope, $controller) {
          var ctrl = $controller('loginCtrl', {$scope: scope});
            expect(ctrl.countryDialCodes).toBeDefined();
            expect(ctrl.countryDialCode).toEqual("Australia:+61");
        });
    });

    it('should have country code pre-selected if it appears in url', function () {
        inject(function($rootScope, $controller) {
          var mockRouteParams = {
            countryDialCode: 'Israel:+972'
          };

          var ctrl = $controller('loginCtrl', {$scope: scope, $routeParams: mockRouteParams});
          expect(ctrl.countryDialCode).toEqual("Israel:+972");
        });
    });

    it('should only have mobile number prefilled if it is valid and appears in url', function () {
        inject(function($rootScope, $controller) {
          var mockRouteParams = {
            mobile: '0411789776'
          };

          var ctrl = $controller('loginCtrl', {$scope: scope, $routeParams: mockRouteParams});
          expect(ctrl.mobile).toEqual("0411789776");

          mockRouteParams = {
            mobile: '0412345678' // invalid mobile
          };

          ctrl = $controller('loginCtrl', {$scope: scope, $routeParams: mockRouteParams});
          expect(ctrl.mobile).toEqual(undefined);

        });
    });

});
