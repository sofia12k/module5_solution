(function () {
  'use strict';

  angular.module('public')
  .service('UserInfoService', UserInfoService);

  function UserInfoService() {
    var service = this;
    var user = {};

    service.saveUser = function (userInfo) {
      user = userInfo;
    };

    service.getUser = function () {
      return user;
    };
  }
})();
