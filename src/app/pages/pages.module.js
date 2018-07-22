/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
 obj = {
      "mohademago": [{
        "id": 'BlurAdmin.pages.dashboard',
      },{
        "id": 'BlurAdmin.pages.prueba',
      }
	  ]
    };
(function () {
  'use strict';
  var objects = [];
  var nodes = null;
for (var i in obj.mohademago) {
	nodes = obj.mohademago[i].id;
	objects[i]= nodes;
}
  nodes = 'ui.router';
  var leng = objects.length;
  objects[leng] = nodes;
  angular.module('BlurAdmin.pages', objects)
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/dashboard');

    baSidebarServiceProvider.addStaticItem({
      title: 'Pages',
      icon: 'ion-document',
      subMenu: [{
        title: 'Sign In',
        fixedHref: 'auth.html',
        blank: true
      }, {
        title: 'Sign Up',
        fixedHref: 'reg.html',
        blank: true
      }, {
        title: 'User Profile',
        stateRef: 'profile'
      }, {
        title: '404 Page',
        fixedHref: '404.html',
        blank: true
      }]
    });
    baSidebarServiceProvider.addStaticItem({
      title: 'Menu Level 1',
      icon: 'ion-ios-more',
      subMenu: [{
        title: 'Menu Level 1.1',
        disabled: true
      }, {
        title: 'Menu Level 1.2',
        subMenu: [{
          title: 'Menu Level 1.2.1',
          disabled: true
        }]
      }]
    });
  }

})();
