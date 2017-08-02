(function(){
    'use strict';

    angular
        .module('icreations.clients', ['ngRoute'])
        .config(['$routeProvider', config])
        .controller('ClientsCtrl', ClientsCtrl);

    ClientsCtrl.$inject = ['$scope', '$rootScope'];

    function ClientsCtrl($scope, $rootScope){
      $rootScope.CurrentPath = 'clients';
      $rootScope.title = 'iCreations - Clients';
      $rootScope.$on("$routeChangeSuccess", function () {
        $('html, body').stop().animate({scrollTop: 0},150);
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