(function() {
    'use strict';

    angular
        .module('icreations.contacts', ['ngRoute'])
        .config(['$routeProvider', config])
        .controller('ContactsCtrl', ContactsCtrl);

    ContactsCtrl.$inject = ['$scope', '$rootScope', '$timeout'];

    function ContactsCtrl($scope, $rootScope, $timeout) {
        $rootScope.CurrentPath = 'contacts';
        $rootScope.title = 'iCreations - Contacts';
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
        when('/contacts', {
            templateUrl: '../views/content/contacts.html',
            controller: 'ContactsCtrl'
        });

    };
})();