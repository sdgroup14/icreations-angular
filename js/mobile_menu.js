(function() {
    'use strict';

    angular
        .module('icreations.mob_menu', ['ngAnimate'])
        .config([config])
        .controller('MmenuboutCtrl', MmenuboutCtrl);

    MmenuboutCtrl.$inject = ['$scope', '$rootScope', '$timeout'];

    function MmenuboutCtrl($scope, $rootScope, $timeout) {
        // $rootScope.$on("$routeChangeSuccess", function() {
        //     $('html, body').stop().animate({ scrollTop: 0 }, 150);
        // });
        // $rootScope.$on('$routeChangeStart',
        //     function(event, toState, toParams, fromState, fromParams) {
        //         $rootScope.loadder = true;
        //     });

        // $rootScope.$on('$routeChangeSuccess',
        //     function(event, toState, toParams, fromState, fromParams) {
        //         $timeout(function() {
        //             $rootScope.loadder = false;;
        //         }, 500);
        //     });
        console.log($scope);

          $rootScope.isActive = false;
          $scope.activeButton = function() {
          $rootScope.isActive = !$scope.isActive;
  }  

    };


    function config($routeProvider) {
    };
})();