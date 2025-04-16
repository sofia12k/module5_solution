(function () {
  'use strict';

  angular.module('restaurant')
    .controller('MenuController', MenuController);

  MenuController.$inject = ['MenuService'];
  function MenuController(MenuService) {
    var menu = this;
    menu.categories = [];

    MenuService.getMenuCategories()
      .then(function (response) {
        menu.categories = response.data;
      })
      .catch(function (error) {
        console.error('Error fetching menu categories:', error);
      });
  }
})();
