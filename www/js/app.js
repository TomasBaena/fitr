// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controllers','starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    // if(typeof analytics !== undefined) {
    //   analytics.startTrackerWithId("UA-XXXXXXXX-XX");
    // } else {
    //   console.log("Google Analytics Unavailable");
    // }
  });
})
.directive('ngClick', function() {
    return {
        restrict: 'A',
        compile: function($element, attr) {
            return function(scope, element, attr) {
                element.on('click', function(event) {
                    event.stopPropagation();
                });
            };
        }
    }
})
.config(function($ionicConfigProvider,$stateProvider,$urlRouterProvider) {
  $ionicConfigProvider.navBar.alignTitle("center");
  $ionicConfigProvider.backButton.text('Back').icon('ion-chevron-left');
  $urlRouterProvider.otherwise('/splash')
  $stateProvider
  .state('splash', {
    url: '/splash',
    templateUrl: 'templates/splash.html',
    controller: 'SplashCtrl'
  })
  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  })
  .state('farm', {
    url: '/farms',
    templateUrl: 'templates/farms.html',
    controller: 'FarmCtrl'
  })
  .state('cart', {
    url: '/cart',
    templateUrl: 'templates/cart.html',
    controller: 'CartCtrl'
  })
  .state('genre', {
    url: '/home/:genre',
    templateUrl: 'templates/genre.html',
    controller: 'GenreCtrl'
  })
})
