// JavaScript Document
var ZoomValue = 1;
var HeightChange = 1;
var controller = new ScrollMagic.Controller();
var Section8Height = 800;
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

// firstapp.directive('ngScrollDuration', function($compile, $parse) {
//   return {
//     restrict: 'EA',
//     replace: false,
//     link: function($scope, element, attrs) {
//       var $element = $(element);
//       var animation = {};
//       console.log("NGSCROLL", attrs);
//       var animationSceneFrom = eval("(" + attrs.ngScrollAnimationFrom + ")");
//       var animationSceneTo = eval("(" + attrs.ngScrollAnimationTo + ")");
//       var id = attrs.id;
//       var pin = attrs.pin;
//       var toggleClass = attrs.toggleClass;
//       if (attrs.ngScrollTrigger) {
//         animation.triggerElement = attrs.pin;
//       }
//       animation.duration = attrs.ngScrollDuration * ZoomValue;
//       animation.offset = attrs.ngScrollOffset * ZoomValue;
//       // build twee
//       var wipeAnimation = TweenMax.fromTo($element, 1, animationSceneFrom, animationSceneTo);
//
//       // build scene
//       if (pin) {
//         var scene = new ScrollMagic.Scene(animation)
//           .setTween(wipeAnimation )
//           .setPin(pin, {
//             pushFollowers: false
//           })
//           .addIndicators() // add indicators (requires plugin)
//           .addTo(controller);
//       } else {
//         var scene = new ScrollMagic.Scene(animation)
//           .setTween(wipeAnimation)
//           .addIndicators() // add indicators (requires plugin)
//           .addTo(controller);
//       }
//     }
//   };
// });

// var wipeAnimation = new TimelineMax().fromTo("section.two", 1, {x: "-100%"}, {x: "0%",ease: Linear.easeNone}) // in from left
// .fromTo("section.three", 1, {x: "100%"}, {x: "0%",ease: Linear.easeNone}) // in from right
// .fromTo("section.four", 1, {y: "-100%"}, {y: "0%",ease: Linear.easeNone}); // in from
//
// firstapp.directive('markanimation', function($compile, $parse) {
//   return {
//     restrict: 'EA',
//     replace: false,
//     link: function($scope, element, attrs) {
//       new ScrollMagic.Scene({
//           triggerElement: "#pinContainer",
//           triggerHook: "onLeave",
//           duration: "300%"
//         })
//         .setPin("#pinContainer")
//         .setTween(wipeAnimation)
//         .addIndicators() // add indicators (requires plugin)
//         .addTo(controller)
//     }
//   };
// });

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


firstapp.config(function($translateProvider) {
  $translateProvider.translations('en', LanguageEnglish);
  $translateProvider.translations('hi', LanguageHindi);
  $translateProvider.preferredLanguage('en');
});
