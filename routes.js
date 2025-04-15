(function () {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'public.html'
    })

    .state('public.menu', {
      url: '/menu',
      templateUrl: 'menu.html',
      controller: 'MenuController as menuCtrl'
    })

    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'menu-items..html',
      controller: 'MenuItemsController as menuItemsCtrl',
      resolve: {
        menuItems: ['MenuService', '$stateParams', function (MenuService, $stateParams) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    });
}

})();

