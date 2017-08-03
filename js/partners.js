(function() {
    'use strict';

    angular
        .module('icreations.partners', ['ngRoute'])
        .config(['$routeProvider', config])
        .controller('PartnersCtrl', PartnersCtrl);

    PartnersCtrl.$inject = ['$scope', '$rootScope', '$timeout'];

    function PartnersCtrl($scope, $rootScope, $timeout) {
        $rootScope.CurrentPath = 'partners';
        $rootScope.title = 'iCreations - Partners';
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
                    $rootScope.loadder = false;;
                }, 500);
            });
    };


    function config($routeProvider) {
        $routeProvider.
        when('/partners', {
            templateUrl: '../views/content/partners.html',
            controller: 'PartnersCtrl'
        });

    };
})();