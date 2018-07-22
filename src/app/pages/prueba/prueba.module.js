(function () {
  'use strict';

  angular.module('BlurAdmin.pages.prueba', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('prueba', {
          url: '/prueba',
          templateUrl: 'app/pages/prueba/prueba.html',
          title: 'Prueba',
          sidebarMeta: {
            order: 800,
          },
        });
  }

})();