require.config({
    baseUrl: 'app',
    // urlArgs: 'v=1.0'
    urlArgs: 'bust=' + (new Date()).getTime() 
});

require(
    [
        'app'
    ],
    function () {
        angular.bootstrap(document, ['homepassApp']);
    });
