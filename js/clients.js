(function() {
    'use strict';

    angular
        .module('icreations.clients', ['ngRoute'])
        .config(['$routeProvider', config])
        .controller('ClientsCtrl', ClientsCtrl);

    ClientsCtrl.$inject = ['$scope', '$rootScope', '$timeout'];

    function ClientsCtrl($scope, $rootScope, $timeout) {
        $rootScope.CurrentPath = 'clients';
        $rootScope.title = 'iCreations - Clients';
        $rootScope.$on("$routeChangeSuccess", function() {
            $('html, body').stop().animate({ scrollTop: 0 }, 150);
        });
        $rootScope.$on('$routeChangeStart',
            function(event, toState, toParams, fromState, fromParams) {
                $rootScope.loadder = true;
            });

        $rootScope.$on('$routeChangeSuccess',
            function(event, toState, toParams, fromState, fromParams) {
                $timeout(function() {
                    $rootScope.loadder = false;
                }, 500);
            });
    };


    function config($routeProvider) {
        $routeProvider.
        when('/clients', {
            templateUrl: '../views/content/clients.html',
            controller: 'ClientsCtrl'
        });

    };
})();