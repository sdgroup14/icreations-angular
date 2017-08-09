(function() {
    'use strict';

    angular
        .module('icreations.about', ['ngRoute', 'ngAnimate'])
        .config(['$routeProvider', config])
        .controller('AboutCtrl', AboutCtrl);

    AboutCtrl.$inject = ['$scope', '$rootScope', '$timeout'];

    function AboutCtrl($scope, $rootScope, $timeout) {
        $rootScope.CurrentPath = 'about';
        $rootScope.title = 'iCreations - About us';
        $rootScope.$on("$routeChangeSuccess", function() {
            $('html, body').stop().animate({ scrollTop: 0 }, 150);
        });
        $rootScope.$on('$routeChangeStart',
            function(event, toState, toParams, fromState, fromParams) {
                $rootScope.loadder = true;
                $('#loader').attr('src', '../img/loader.svg');
                var result = document.getElementsByClassName("menu-item");
                var wrappedResult = angular.element(result);
                console.log(wrappedResult);
                console.log(wrappedResult.length);
            });

        $rootScope.$on('$routeChangeSuccess',
            function(event, toState, toParams, fromState, fromParams) {
                    $rootScope.loadder = false;
                    $('#loader').attr('src', '');
            });
    };

    function config($routeProvider) {
        $routeProvider.
        when('/about', {
            templateUrl: '../views/content/about.html',
            controller: 'AboutCtrl'
        });

    };
})();