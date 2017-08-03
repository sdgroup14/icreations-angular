(function() {
    'use strict';

    angular
    .module('icreations', [
        'ngRoute',
        'ngAnimate',
        'icreations.about',
        'icreations.capabilities',
        'icreations.clients',
        'icreations.contacts',
        'icreations.partners',
        'icreations.works',
        'icreations.mob_menu'
    ])
    .config(Config);

    Config.$inject = ['$routeProvider', '$locationProvider'];

    function Config($routeProvider, $locationProvider) {
        $routeProvider.
        otherwise({ redirectTo: '/about' });

        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
    };

})();