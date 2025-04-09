(function () {
'use strict';

// Declare the main application module
angular.module('restaurantApp', [
  'public',
  'common'
])
.config(config);

// Config function for fallback routing
config.$inject = ['$urlRouterProvider'];
function config($urlRouterProvider) {
  // Default route
  $urlRouterProvider.otherwise('/');
}

})();
