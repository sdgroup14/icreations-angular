(function(){
    'use strict';

    angular
        .module('icreations.partners', ['ngRoute'])
        .config(['$routeProvider', config])
        .controller('PartnersCtrl', PartnersCtrl);

    PartnersCtrl.$inject = ['$scope', '$rootScope'];

    function PartnersCtrl($scope, $rootScope){
      $rootScope.CurrentPath = 'partners';
      $rootScope.title = 'iCreations - Partners';
      $rootScope.$on("$routeChangeSuccess", function () {
        $('html, body').stop().animate({scrollTop: 0},150);
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