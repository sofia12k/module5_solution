(function () {
'use strict';

angular.module('public')
.config(routeConfig);

routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  $stateProvider
    .state('public', {
      abstract: true,
      template: '<ui-view></ui-view>'
    })

    .state('public.menu', {
      url: '/menu',
      templateUrl: 'menu.html',
      controller: 'MenuController as menuCtrl'
    })

    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'menu-items.template.html',
      controller: 'MenuItemsController as menuItemsCtrl',
      resolve: {
        menuItems: ['MenuService', '$stateParams', function (MenuService, $stateParams) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    });
}
})();
