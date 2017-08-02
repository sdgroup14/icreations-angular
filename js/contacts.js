(function(){
    'use strict';

    angular
        .module('icreations.contacts', ['ngRoute'])
        .config(['$routeProvider', config])
        .controller('ContactsCtrl', ContactsCtrl);

    ContactsCtrl.$inject = ['$scope', '$rootScope'];

    function ContactsCtrl($scope, $rootScope){
      $rootScope.CurrentPath = 'contacts';
      $rootScope.title = 'iCreations - Contacts';
      $rootScope.$on("$routeChangeSuccess", function () {
        $('html, body').stop().animate({scrollTop: 0},150);
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