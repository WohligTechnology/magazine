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

            $scope.$on('$viewContentLoaded', function(event) {
              $timeout(function() {
                $(function() { // wait for document ready
                  var controller = new ScrollMagic.Controller();
                  controller.scrollTo(function(newpos) {
                    TweenMax.to(window, 0.5, {
                      scrollTo: {
                        y: newpos
                      }
                    });
                  });
                  // define movement of panels
                  var wipeAnimation = new TimelineMax()
                    .fromTo("section.two", 1, {
                      x: "-100%"
                    }, {
                      x: "0%",
                      ease: Linear.easeNone
                    }) // in from left
                    .fromTo("section.three", 1, {
                      x: "100%"
                    }, {
                      x: "0%",
                      ease: Linear.easeNone
                    }) // in from right
                    .fromTo("section.four", 1, {
                      y: "-100%"
                    }, {
                      y: "0%",
                      ease: Linear.easeNone
                    })
                    .fromTo("section.five", 1, {
                      x: "-100%"
                    }, {
                      x: "0%",
                      ease: Linear.easeNone
                    }) // in from left
                    .fromTo("section.six", 1, {
                      x: "100%"
                    }, {
                      x: "0%",
                      ease: Linear.easeNone
                    }) // in from right
                    .fromTo("section.eight", 1, {
                      y: "-100%"
                    }, {
                      y: "0%",
                      ease: Linear.easeNone
                    })
                    .fromTo("section.nine", 1, {
                      x: "-100%"
                    }, {
                      x: "0%",
                      ease: Linear.easeNone
                    }) // in from left
                    .fromTo("section.ten", 1, {
                      x: "100%"
                    }, {
                      x: "0%",
                      ease: Linear.easeNone
                    }); // in from top

                  // create scene to pin and link animation
                  new ScrollMagic.Scene({
                      triggerElement: "#pinContainer",
                      triggerHook: "onLeave",
                      duration: "500%"
                    })
                    .setPin("#pinContainer")
                    .setTween(wipeAnimation)
                    // .addIndicators()
                    .addTo(controller);
                  cont = controller;


                  controller.scrollTo("#about");
                  controller.scrollTo("about");
                });


              }, 100);
              // init

            });

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
            //'img/editorial/3.png',
            //'img/editorial/4.png',
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
        $scope.select = {};
        $scope.des={};
        $scope.des.designs = [];
        $scope.navigation = NavigationService.getnav();
        $scope.designers = [{
          name: "gavin",
          "images": [
            'img/designers/1.png',
            'img/designers/2.png',
            'img/designers/3.png',
            'img/designers/4.png',
            'img/designers/5.png',
            'img/designers/6.png',
            'img/designers/7.png',
            'img/designers/8.png',
            'img/designers/9.png',
            'img/designers/10.png'
          ]},
        {
          name: "angeinx",
          images: [
            'img/celebrities/1.png',
            'img/celebrities/2.png',
            'img/celebrities/9.png',
            'img/celebrities/10.png',
            'img/celebrities/11.png'
          ]
        }];

        _.each($scope.designers, function (key) {
          $scope.des.designs =$scope.des.designs.concat(key.images);
        });

        $scope.getDesigns = function (designer) {
          $scope.des.designs = [];
          setTimeout(function () {
            if(designer == "all") {
              _.each($scope.designers, function (key) {
                $scope.des.designs =$scope.des.designs.concat(key.images);
              });
            } else {
              $scope.des.designs= _.find($scope.designers,function (key) {
                return key.name == designer;
              }).images;
            }
            $scope.$apply();
          }, 10);

        };

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
