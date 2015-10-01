'use strict';

define(['app'], function (app) {

    var injectParams = ['$scope'];

    var loginCtrl = function ($scope) {
    	var vm = this;

    	vm.login = {};
    	vm.login.userName = "test user";
    	vm.test = "test";

        vm.userState = '';
        vm.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
            'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
            'WY').split(' ').map(function (state) { return { abbrev: state }; });
        console.log(vm.states);
    };

    loginCtrl.$inject = injectParams;

    app.controller('loginCtrl', loginCtrl);

});