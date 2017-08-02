(function() {
    'use strict';

    angular
        .module('icreations.capabilities', ['ngRoute', 'ngAnimate'])
        .config(['$routeProvider', config])
        .controller('CapabilitiesCtrl', CapabilitiesCtrl);

    CapabilitiesCtrl.$inject = ['$scope', '$rootScope'];

    function CapabilitiesCtrl($scope, $rootScope) {
        $rootScope.CurrentPath = 'capabilities';
        $rootScope.title = 'iCreations - Capabilities';
        $rootScope.$on("$routeChangeSuccess", function() {
            $('html, body').stop().animate({ scrollTop: 0 }, 150);
        });
    };


    function config($routeProvider) {
        $routeProvider.
        when('/capabilities', {
            templateUrl: '../views/content/capabilities.html',
            controller: 'CapabilitiesCtrl'
        });

    };
})();