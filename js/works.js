(function(){
    'use strict';

    angular
        .module('icreations.works', ['ngRoute'])
        .config(['$routeProvider', config])
        .controller('WorksCtrl', WorksCtrl);

    WorksCtrl.$inject = ['$scope', '$rootScope'];

    function WorksCtrl($scope, $rootScope){
      $rootScope.CurrentPath = 'works';
      $rootScope.title = 'iCreations - Works';
      $rootScope.$on("$routeChangeSuccess", function () {
        $('html, body').stop().animate({scrollTop: 0},150);
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