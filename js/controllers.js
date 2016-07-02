angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("home");
    $scope.template.footerShow = "hidden";
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.section = {
      one: "views/section/section1.html",
      six: "views/section/section6.html",
      seven: "views/section/section7.html",
      eight: "views/section/section8.html",
      footer: "views/footer.html"
    };

    $scope.oneClass = "";
    $scope.twoClass = "";
    $scope.threeClass = "";
    $scope.fourClass = "";
    $scope.fiveClass = "";
    $scope.sixClass = "";
    $scope.eightClass = "";

    $scope.scrollUpOne = function() {
      if($scope.oneClass === "") $scope.oneClass = "leftUp";
      else $scope.oneClass = "";
    };
    $scope.scrollUpTwo = function() {
      if($scope.twoClass === "") $scope.twoClass = "leftUp";
      else $scope.twoClass = "";
    };
    $scope.scrollUpThree = function() {
      if($scope.threeClass === "") $scope.threeClass = "leftUp";
      else $scope.threeClass = "";
    };
    $scope.scrollUpFour = function() {
      if($scope.fourClass === "") $scope.fourClass = "leftUp";
      else $scope.fourClass = "";
    };
    $scope.scrollUpFive = function() {
      if($scope.fiveClass === "") $scope.fiveClass = "leftUp";
      else $scope.fiveClass = "";
    };
    $scope.scrollUpSix = function() {
      if($scope.sixClass === "") $scope.sixClass = "leftUp";
      else $scope.sixClass = "";
    };
    $scope.scrollUpEight = function() {
      if($scope.eightClass === "") $scope.eightClass = "leftUp";
      else $scope.eightClass = "";
    };

    $scope.scrollDownOne = function() {
      if($scope.oneClass === "") $scope.oneClass = "rightDown";
      else $scope.oneClass = "";
    };
    $scope.scrollDownTwo = function() {
      if($scope.twoClass === "") $scope.twoClass = "rightDown";
      else $scope.twoClass = "";
    };
    $scope.scrollDownThree = function() {
      if($scope.threeClass === "") $scope.threeClass = "rightDown";
      else $scope.threeClass = "";
    };
    $scope.scrollDownFour = function() {
      if($scope.fourClass === "") $scope.fourClass = "rightDown";
      else $scope.fourClass = "";
    };
    $scope.scrollDownFive = function() {
      if($scope.fiveClass === "") $scope.fiveClass = "rightDown";
      else $scope.fiveClass = "";
    };
    $scope.scrollDownSix = function() {
      if($scope.sixClass === "") $scope.sixClass = "rightDown";
      else $scope.sixClass = "";
    };
    $scope.scrollDownEight = function() {
      if($scope.eightClass === "") $scope.eightClass = "rightDown";
      else $scope.eightClass = "";
    };

    $scope.reveal = globalFunc.reveal;

  })
  .controller('EditorialCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    console.log("Testing Consoles");
    $scope.template = TemplateService.changecontent("editorial");
    $scope.menutitle = NavigationService.makeactive("Editorial");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.editorials = [
      'img/editorial/1.png',
      'img/editorial/2.png',
      'img/editorial/3.png',
      'img/editorial/4.png',
      'img/editorial/5.png',
      'img/editorial/6.png',
      'img/editorial/7.png',
      'img/editorial/8.png',
      'img/editorial/9.png',
      'img/editorial/10.png',
      'img/editorial/11.png',
      'img/editorial/12.png'
    ];
  })
  .controller('CelebritiesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("celebrities");
    $scope.menutitle = NavigationService.makeactive("Celebrities");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.celebrities = [
      //'img/celebrities/1.png',
      //'img/celebrities/2.png',
      'img/celebrities/3.png',
      'img/celebrities/4.png',
      'img/celebrities/5.png',
      'img/celebrities/6.png',
      'img/celebrities/7.png',
      'img/celebrities/8.png',
      'img/celebrities/12.png',
      'img/celebrities/13.png',
      'img/celebrities/14.png',
      'img/celebrities/15.png',
      'img/celebrities/16.png',
      'img/celebrities/17.png',
      'img/celebrities/18.png'
      //'img/celebrities/9.png',
      //'img/celebrities/10.png'
    ];
  })
  .controller('DesignersCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("designers");
    $scope.menutitle = NavigationService.makeactive("Designers");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.designers = [
      'img/designers/1.png',
      'img/designers/2.png',
      'img/designers/3.png',
      'img/designers/4.png',
      'img/designers/5.png',
      'img/designers/6.png',
      'img/designers/7.png',
      'img/designers/8.png',
      'img/designers/9.png',
      'img/designers/10.png',
      'img/celebrities/1.png',
      'img/celebrities/2.png',
      'img/celebrities/9.png',
      'img/celebrities/10.png',
      'img/celebrities/11.png'
    ];
  })
  .controller('TvcCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("tvc");
    $scope.menutitle = NavigationService.makeactive("TVC'S");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.tvcs = [
      'jM7nQCX9joE',
      '2m-Iy79cL-E',
      'nR0-029uB4E',
      'kgIs8B173KY',
      'BGtgIchcGEM',
      'eMlK1eBQTzI'
    ];
  })

.controller('headerctrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
    var get = false;
    $scope.getslide = "menu-out";
    $scope.getnav = function() {
      if ($scope.getslide == "menu-in") {
        $scope.getslide = "menu-out";
        $scope.hideclick = "";
      } else {
        $scope.getslide = "menu-in";
        $scope.hideclick = "hideclick";
      }
    };



  })
  .controller('languageCtrl', function($scope, TemplateService, $translate, $rootScope) {

    $scope.changeLanguage = function() {
      console.log("Language CLicked");

      if (!$.jStorage.get("language")) {
        $translate.use("hi");
        $.jStorage.set("language", "hi");
      } else {
        if ($.jStorage.get("language") == "en") {
          $translate.use("hi");
          $.jStorage.set("language", "hi");
        } else {
          $translate.use("en");
          $.jStorage.set("language", "en");
        }
      }
      //  $rootScope.$apply();
    };


  })

;
