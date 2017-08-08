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
        when('/contacts', {
            templateUrl: '../views/content/contacts.html',
            controller: 'ContactsCtrl'
        });

    };
})();