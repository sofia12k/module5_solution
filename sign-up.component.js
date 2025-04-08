(function () {
  'use strict';

  angular.module('public')
  .component('signUp', {
    templateUrl: 'src/public/sign-up/sign-up.template.html',
    controller: SignUpController
  });

  SignUpController.$inject = ['UserInfoService', 'MenuService'];
  function SignUpController(UserInfoService, MenuService) {
    var $ctrl = this;
    $ctrl.user = {};
    $ctrl.submit = function () {
      MenuService.getMenuItem($ctrl.user.favoriteDish).then(function (response) {
        $ctrl.user.favoriteDishDetails = response.data;
        UserInfoService.saveUser($ctrl.user);
        $ctrl.success = true;
      }).catch(function (error) {
        $ctrl.error = true;
      });
    };
  }
})();
