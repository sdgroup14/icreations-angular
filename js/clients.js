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
                $('#loader').attr('src', '../img/loader.svg');
            });

        $rootScope.$on('$routeChangeSuccess',
            function(event, toState, toParams, fromState, fromParams) {
                    $rootScope.loadder = false;
                    $('#loader').attr('src', '');
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