(function () {
  'use strict';

  angular.module('public')
  .component('myInfo', {
    templateUrl: 'src/public/my-info/my-info.template.html',
    controller: MyInfoController
  });

  MyInfoController.$inject = ['UserInfoService'];
  function MyInfoController(UserInfoService) {
    var $ctrl = this;
    $ctrl.user = UserInfoService.getUser();
  }
})();
