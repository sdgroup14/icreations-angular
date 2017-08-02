(function() {
    'use strict';

    angular
        .module('icreations.about', ['ngRoute', 'ngAnimate'])
        .config(['$routeProvider', config])
        .controller('AboutCtrl', AboutCtrl);

    AboutCtrl.$inject = ['$scope', '$rootScope'];

    function AboutCtrl($scope, $rootScope) {
        $rootScope.CurrentPath = 'about';
        $rootScope.title = 'iCreations - About us';
        $rootScope.$on("$routeChangeSuccess", function() {
            $('html, body').stop().animate({ scrollTop: 0 }, 150);
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