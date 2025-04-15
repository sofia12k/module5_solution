// app.js
(function () {
  'use strict';

  angular.module('RestaurantApp', ['ui.router'])

  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('public', {
        abstract: true,
        templateUrl: 'src/public/public.html'
      })

      .state('public.menu', {
        url: '/menu',
        templateUrl: 'src/public/menu/menu.html',
        controller: 'MenuController as menuCtrl'
      })

      .state('public.myinfo', {
        url: '/myinfo',
        templateUrl: 'src/public/myinfo/myinfo.html',
        controller: 'MyInfoController as infoCtrl'
      })

      .state('public.signup', {
        url: '/signup',
        templateUrl: 'src/public/signup/signup.html',
        controller: 'SignUpController as signCtrl'
      });
  }]);
})();
