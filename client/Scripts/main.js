require.config({
    baseUrl: 'app',
    // urlArgs: 'v=1.0'
    urlArgs: 'bust=' + (new Date()).getTime() 
});

require(
    [
        'app',
        'util/countryDialCodes',
        'login/controllers/loginController',
        'verify/controllers/verifyController'
    ],
    function () {
        angular.bootstrap(document, ['homepassApp']);
    });
