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
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "views/template.html",
      params: {
        isContact: true,
      },
      controller: 'HomeCtrl'
    })
    .state('about', {
      url: "/about",
      templateUrl: "views/template.html",
      params: {
        isAbout: true,
      },
      controller: 'HomeCtrl'
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

firstapp.directive("scroll", function($window) {
  return function(scope, element, attrs) {
    angular.element($window).bind("scroll", function() {
      var windowHeight = $(window).height();
      if (this.pageYOffset >= windowHeight) {
        // console.log(windowHeight);
        element.addClass('affix');
      } else {
        element.removeClass('affix');
      }
    });
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

firstapp.directive('autoHeight', function($compile, $parse) {
  return {
    restrict: 'EA',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      var windowHeight = $(window).height();
      $element.css("min-height", windowHeight);
    }
  };
});

firstapp.config(function($translateProvider) {
  $translateProvider.translations('en', LanguageEnglish);
  $translateProvider.translations('hi', LanguageHindi);
  $translateProvider.preferredLanguage('en');
});
firstapp.filter('uploadpath', function() {
    return function(input, width, height, style) {
        var other = "";
        if (width && width !== "") {
            other += "&width=" + width;
        }
        if (height && height !== "") {
            other += "&height=" + height;
        }
        if (style && style !== "") {
            other += "&style=" + style;
        }
        if (input) {
            return imgpath + input + other;
        }
    };
});

firstapp.filter('youtubethumb', function() {
    return function(input, onlyid) {
        if (input) {
            var videoid = input.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
            if (videoid != null) {
                if (onlyid == false) {
                    return "http://img.youtube.com/vi/" + videoid[1] + "/hqdefault.jpg";
                } else if (onlyid == true) {
                    return videoid[1];
                }
            } else {
                return input;
            }
        } else {
            return input;
        }
    };
});
