(function() {
    'use strict';

    angular
        .module('icreations.works', ['ngRoute'])
        .config(['$routeProvider', config])
        .controller('WorksCtrl', WorksCtrl);

    WorksCtrl.$inject = ['$scope', '$rootScope', '$timeout'];

    function WorksCtrl($scope, $rootScope, $timeout) {
        $rootScope.CurrentPath = 'works';
        $rootScope.title = 'iCreations - Works';
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
        when('/works', {
            templateUrl: '../views/content/works.html',
            controller: 'WorksCtrl'
        });

    };
})();