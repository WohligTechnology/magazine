var globalFunc = {};
// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice',
  'pascalprecht.translate',
  'angulartics',
  'angulartics.google.analytics'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
  // for http request with session
  $httpProvider.defaults.withCredentials = true;
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/template.html",
      controller: 'HomeCtrl'
    })
    .state('editorial', {
      url: "/editorial",
      templateUrl: "views/template.html",
      controller: 'EditorialCtrl'
    })
    .state('celebrities', {
      url: "/celebrities",
      templateUrl: "views/template.html",
      controller: 'CelebritiesCtrl'
    })
    .state('designers', {
      url: "/designers",
      templateUrl: "views/template.html",
      controller: 'DesignersCtrl'
    })
    .state('tvc', {
      url: "/tvc",
      templateUrl: "views/template.html",
      controller: 'TvcCtrl'
    });
  $urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode(isproduction);
});


firstapp.directive('img', function($compile, $parse) {
  return {
    restrict: 'E',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      if (!attrs.noloading) {
        $element.after("<img src='img/loading.gif' class='loading' />");
        var $loading = $element.next(".loading");
        $element.load(function() {
          $loading.remove();
          $(this).addClass("doneLoading");
        });
      } else {
        $($element).addClass("doneLoading");
      }
    }
  };
});

firstapp.directive('fancyboxBox', function($document) {
  return {
    restrict: 'EA',
    replace: false,
    link: function(scope, element, attr) {
      var $element = $(element);
      var target;
      if (attr.rel) {
        target = $("[rel='" + attr.rel + "']");
      } else {
        target = element;
      }

      target.fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        closeBtn: true,
        helpers: {
          media: {}
        }
      });
    }
  };
});

firstapp.directive("scroll", function ($window) {
  return function(scope, element, attrs) {
    angular.element($window).bind("scroll", function() {
      scope.$apply();
    });
  };
});

firstapp.directive('ngMouseWheelUp', function() {
  return function(scope, element, attrs) {
    element.bind("DOMMouseScroll mousewheel onmousewheel", function(event) {
      // cross-browser wheel delta
      event = window.event || event; // old IE support
      var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));

      if(delta > 0) {
        scope.$apply(function(){
          scope.$eval(attrs.ngMouseWheelUp);
        });

        // for IE
        event.returnValue = false;
        // for Chrome and Firefox
        if(event.preventDefault) {
          event.preventDefault();
        }
      }
    });
  };
});

firstapp.directive('ngMouseWheelDown', function() {
  return function(scope, element, attrs) {
    element.bind("DOMMouseScroll mousewheel onmousewheel", function(event) {
      // cross-browser wheel delta
      event = window.event || event; // old IE support
      var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));

      if(delta < 0) {
        scope.$apply(function(){
          scope.$eval(attrs.ngMouseWheelDown);
        });

        // for IE
        event.returnValue = false;
        // for Chrome and Firefox
        if(event.preventDefault)  {
          event.preventDefault();
        }
      }
    });
  };
});

firstapp.config(function($translateProvider) {
  $translateProvider.translations('en', LanguageEnglish);
  $translateProvider.translations('hi', LanguageHindi);
  $translateProvider.preferredLanguage('en');
});
