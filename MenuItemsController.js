(function () {
  angular.module('MenuApp')
    .controller('MenuController', MenuController);

  MenuController.$inject = ['MenuService'];
  function MenuController(MenuService) {
    var menuCtrl = this;
    menuCtrl.menuItems = [];

    MenuService.getMenuItems().then(function (response) {
      menuCtrl.menuItems = response.data;
    });
  }
})();
