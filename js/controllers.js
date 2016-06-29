angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("home");
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
      'img/celebrities/1.png',
      'img/celebrities/2.png',
      'img/celebrities/3.png',
      'img/celebrities/4.png',
      'img/celebrities/5.png',
      'img/celebrities/6.png',
      'img/celebrities/7.png',
      'img/celebrities/8.png',
      'img/celebrities/9.png',
      'img/celebrities/10.png',
      'img/celebrities/11.png',
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
      'img/designers/11.png',
      'img/designers/12.png',
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
      'BGtgIchcGEM'
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
    }
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
