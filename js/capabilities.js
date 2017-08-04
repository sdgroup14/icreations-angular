(function() {
    'use strict';

    angular
        .module('icreations.capabilities', ['ngRoute', 'ngAnimate'])
        .config(['$routeProvider', config])
        .controller('CapabilitiesCtrl', CapabilitiesCtrl);

    CapabilitiesCtrl.$inject = ['$scope', '$rootScope', '$timeout'];

    function CapabilitiesCtrl($scope, $rootScope, $timeout) {
        $rootScope.CurrentPath = 'capabilities';
        $rootScope.title = 'iCreations - Capabilities';
        $rootScope.$on("$routeChangeSuccess", function() {
            $('html, body').stop().animate({ scrollTop: 0 }, 150);
        });
        $rootScope.$on('$routeChangeStart',
            function(event, toState, toParams, fromState, fromParams) {
                $rootScope.loadder = true;
                $('#loader').attr('src', '../img/loader.svg');
            });

        $rootScope.$on('$routeChangeSuccess',
            function(event, toState, toParams, fromState, fromParams) {
                $timeout(function() {
                    $rootScope.loadder = false;
                    $('#loader').attr('src', '');
                }, 500);
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