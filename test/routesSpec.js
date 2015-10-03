describe('unit: routes', function () {

beforeEach(module('homepassApp'));

    it('should map routes to controllers and template urls', function() {
      inject(function($route, $location, $rootScope) {
        expect($route.routes['/login/:countryDialCode?/:mobile?'].controller).toBe('loginCtrl');
        expect($route.routes['/login/:countryDialCode?/:mobile?'].templateUrl).toEqual('app/login/views/login.html');

        expect($route.routes['/verify/:countryDialCode/:mobile'].controller).toBe('verifyCtrl');
        expect($route.routes['/verify/:countryDialCode/:mobile'].templateUrl).toEqual('app/verify/views/verify.html');

        expect($route.routes[null].redirectTo).toEqual('/login');
      });
    });

});