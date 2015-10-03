describe('unit: verifyCtrl', function () {
    var scope;

    beforeEach(module('homepassApp'));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
    }));

    it('should have country code and mobile', function () {
        inject(function($rootScope, $controller) {
            var mockRouteParams = {
              countryDialCode: 'Australia:+61',
              mobile: '0411789776'
            };

            var ctrl = $controller('verifyCtrl', {$scope: scope, $routeParams: mockRouteParams});
            expect(ctrl.countryDialCode).toBeDefined();
            expect(ctrl.mobile).toBeDefined();
        });
    });

    it('should get dial code from country code in url', function () {
        inject(function($rootScope, $controller) {
            var mockRouteParams = {
              countryDialCode: 'Australia:+61'
            };

            var ctrl = $controller('verifyCtrl', {$scope: scope, $routeParams: mockRouteParams});
            expect(ctrl.dialCode).toEqual('+61');
        });
    });

    
});
