var scrollHei = 0;

angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'duScroll', 'wu.masonry','infinite-scroll'])
    .value('duScrollDuration', 2000)
    .controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $document, $uibModal) {
        //Used to name the .html file
        console.log("Testing Consoles");

        $("body").addClass("noShow");

        $scope.template = TemplateService.changecontent("home");
        $scope.template.footerShow = "hidden";
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.template.header = "views/header2.html";
        $scope.template.header1 = "";

        $scope.section = {
            one: "views/section/section1.html",
            six: "views/section/section6.html",
            seven: "views/section/section7.html",
            eight: "views/section/section8.html",
            footer: "views/footer.html"
        };

        $scope.mySlides = [];
        NavigationService.getHomeImages(function(data) {
            $scope.mySlides = data;
        });

        // $scope.mySlides = [
        //   'img/editorial/1.png',
        //   'img/editorial/2.png',
        //   'img/editorial/3.png',
        //   'img/editorial/1.png',
        //   'img/editorial/2.png',
        // ];

        $scope.sliderPages = {
            about: "views/section/section6.html",
            contact: "views/section/section8.html"
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
                        .fromTo("section.one", 1, {
                            x: "0%"
                        }, {
                            x: "0%",
                            ease: Linear.easeNone
                        }) // in from left
                        .fromTo("section.three", 1, {
                            x: "-100%"
                        }, {
                            x: "0%",
                            ease: Linear.easeNone
                        }) // in from left
                        .fromTo("section.five", 1, {
                            x: "100%"
                        }, {
                            x: "0%",
                            ease: Linear.easeNone
                        }) // in from right
                        .fromTo("section.two", 1, {
                            y: "-100%"
                        }, {
                            y: "0%",
                            ease: Linear.easeNone
                        })
                        .fromTo("section.four", 1, {
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
                    globalFunc.cont = controller;

                    scrollHei = $(window).height() / 1.5;
                    console.log("Window HEI", $(window).height());
                    console.log("Scroll HEI", scrollHei);
                    console.log("Scroll HEI 5", scrollHei * 5);
                    if ($stateParams.isContact) {
                        // $(window).scrollTop(scrollHei * 6);
                        $document.scrollTopAnimated(scrollHei * 6).then(function() {
                            console.log('Scrolled');
                        });
                    }
                    if ($stateParams.isAbout) {
                        // $(window).scrollTop(scrollHei * 5);
                        $document.scrollTopAnimated(scrollHei * 5).then(function() {
                            console.log('Scrolled');

                        });
                    }

                    $(".menucontact").click(function() {
                        //  e.preventDefault();
                        globalFunc.getnav();
                        $scope.$apply();
                        $document.scrollTopAnimated(scrollHei * 6).then(function() {
                            console.log('Scrolled');
                        });

                        return false;
                    });

                    $(".menuabout").click(function(e) {
                        //    e.preventDefault();
                        globalFunc.getnav();
                        $scope.$apply();
                        $document.scrollTopAnimated(scrollHei * 5).then(function() {
                            console.log('Scrolled');
                        });
                        return false;
                    });

                });
                $("body").addClass("show");
                $(".one").addClass("imageLoad");
            }, 2000);
            // init

        });


        $scope.openThank = function() {
            $scope.formcontact = {};
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/thank.html',
                backdropClass: 'backcolor'
            });
        }

        $scope.formcontact = {};
        $scope.submited = false;
        $scope.sendForm = function() {
            NavigationService.contactSubmit($scope.formcontact, function(data) {
                if (data.value == true) {
                    $scope.submited = true;
                    $scope.openThank();
                }

                console.log(data);
            });
            $timeout(function() {
                $scope.submited = false;
            }, 2000);
        };
    })

.controller('HomesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("homes");
    $scope.menutitle = NavigationService.makeactive("Homes");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.template.header = "";
    $scope.template.header1 = "views/header1.html";
    $scope.bricks = [{
        img: 'img/homenew/green-lady.jpg',
        link:'https://www.youtube.com/embed/bHe28LklPoM?rel=0&amp;controls=0&amp;showinfo=0',
    }, {
        img: 'img/homenew/athiya.jpg',
    }, {
        img: 'img/homenew/nargis.jpg',
    }, {
        img: 'img/homenew/red-lady.jpg',
        link:'https://www.youtube.com/embed/sjYInRDVUvI?rel=0&amp;controls=0&amp;showinfo=0',
    }, {
        img: 'img/homenew/blue-lady.jpg',
    }, {
        img: 'img/homenew/caffe.jpg',
        link:'https://player.vimeo.com/video/159591813',
    }];
    $scope.items = [];
    $scope.brickss = [];
    $scope.celebrities = [];
    $scope.editorials = [];
    $scope.tvcs = [];
    $scope.designers = [];
    $scope.flattenDesigners = [];

    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    NavigationService.getTvc(function(data) {
        $scope.tvcs = _.cloneDeep(data);
    });
    NavigationService.getCelebrities(function(data) {
        $scope.celebrities = _.cloneDeep(data);
    });
    NavigationService.getEditorials(function(data) {
        console.log(data);
        $scope.editorials = _.cloneDeep(data);
    });
    $scope.getDesigner = function(id) {
        NavigationService.getDesigners(id, function(data) {
            // console.log("data",data);
            $scope.designers.push(data);
            $scope.flattenDesigners = _.flattenDeep($scope.designers);
            $scope.brickss = $scope.flattenDesigners.concat($scope.celebrities, $scope.editorials, $scope.tvcs);
            $scope.brickss = shuffle($scope.brickss);
            console.log(  $scope.brickss );
        });

    }

    NavigationService.getAllDesigners(function(data) {
        $scope.allDesigners = data;
        _.each($scope.allDesigners, function(key) {
            console.log("key", key.id);
            $scope.getDesigner(key.id);
        });
    });





})



.controller('EditorialCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        console.log("Testing Consoles");
        $scope.template = TemplateService.changecontent("editorial");
        $scope.menutitle = NavigationService.makeactive("Editorial");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        // $scope.editorials = [
        //   'img/editorial/13.png',
        //   'img/editorial/8.png',
        //   'img/editorial/9.png',
        //   'img/editorial/10.png',
        //   'img/editorial/11.png',
        //   'img/editorial/12.png',
        //   'img/editorial/1.png',
        //   'img/editorial/2.png',
        //   //'img/editorial/3.png',
        //   //'img/editorial/4.png',
        //   'img/editorial/5.png',
        //   'img/editorial/6.png',
        //   'img/editorial/7.png'
        //
        // ];
        NavigationService.getEditorials(function(data) {
            console.log(data);
            $scope.editorials = data;
            console.log('editorials', $scope.editorials);
        });
    })
    .controller('ContactCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        //Used to name the .html file
        console.log("Testing Consoles");
        $scope.template = TemplateService.changecontent("contactus");
        $scope.menutitle = NavigationService.makeactive("Contact");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();


        $scope.openThank = function() {
            $scope.formcontact = {};
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/thank.html',
                backdropClass: 'backcolor'
            });
        }

        $scope.formcontact = {};
        $scope.submited = false;
        $scope.sendForm = function() {
            NavigationService.contactSubmit($scope.formcontact, function(data) {
                if (data.value == true) {
                    $scope.submited = true;
                    $scope.openThank();
                }

                console.log(data);
            });
            $timeout(function() {
                $scope.submited = false;
            }, 2000);
        };



    })
    .controller('AboutusCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        //Used to name the .html file
        console.log("Testing Consoles");
        $scope.template = TemplateService.changecontent("aboutus");
        $scope.menutitle = NavigationService.makeactive("About");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();


        // $scope.openThank = function() {
        //     $scope.formcontact = {};
        //     var modalInstance = $uibModal.open({
        //         animation: true,
        //         templateUrl: 'views/modal/thank.html',
        //         backdropClass: 'backcolor'
        //     });
        // }
        //
        // $scope.formcontact = {};
        // $scope.submited = false;
        // $scope.sendForm = function() {
        //     NavigationService.contactSubmit($scope.formcontact, function(data) {
        //         if (data.value == true) {
        //             $scope.submited = true;
        //             $scope.openThank();
        //         }
        //
        //         console.log(data);
        //     });
        //     $timeout(function() {
        //         $scope.submited = false;
        //     }, 2000);
        // };



    })
    .controller('CelebritiesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        console.log("Testing Consoles");

        $scope.template = TemplateService.changecontent("celebrities");
        $scope.menutitle = NavigationService.makeactive("Celebrities");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        // $scope.celebrities = [
        //'img/celebrities/1.png',
        //'img/celebrities/2.png',
        // 'img/celebrities/3.png',
        // 'img/celebrities/4.png',
        // 'img/celebrities/5.png',
        // 'img/celebrities/6.png',
        // 'img/celebrities/7.png',
        // 'img/celebrities/8.png',
        // 'img/celebrities/12.png',
        // 'img/celebrities/13.png',
        // 'img/celebrities/14.png',
        // 'img/celebrities/15.png',
        // 'img/celebrities/16.png',
        // 'img/celebrities/17.png',
        // 'img/celebrities/18.png'
        //'img/celebrities/9.png',
        //'img/celebrities/10.png'
        // ];


        NavigationService.getCelebrities(function(data) {
            $scope.celebrities = data;
            console.log('celebrities', $scope.celebrities);
        });
    })
    .controller('DesignersCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        console.log("Testing Consoles");

        $scope.template = TemplateService.changecontent("designers");
        $scope.menutitle = NavigationService.makeactive("Designers");
        TemplateService.title = $scope.menutitle;
        $scope.select = {};
        $scope.des = {};
        $scope.des.designs = [];
        // $scope.des.des
        $scope.navigation = NavigationService.getnav();
        // $scope.designers = [{
        //   name: "gavin",
        //   "images": [
        //     'img/designers/1.png',
        //     'img/designers/2.png',
        //     'img/designers/3.png',
        //     'img/designers/4.png',
        //     'img/designers/5.png',
        //     'img/designers/6.png',
        //     'img/designers/7.png',
        //     'img/designers/8.png',
        //     'img/designers/9.png',
        //     'img/designers/10.png'
        //   ]
        // }, {
        //   name: "angeinx",
        //   images: [
        //     'img/celebrities/1.png',
        //     'img/celebrities/2.png',
        //     'img/celebrities/9.png',
        //     'img/celebrities/10.png',
        //     'img/celebrities/11.png'
        //   ]
        // }];

        _.each($scope.designers, function(key) {
            $scope.des.designs = $scope.des.designs.concat(key.images);
        });

        $scope.getDesigns = function(designer) {
            console.log("in click", designer);
            var id = _.find($scope.allDesigners, function(key) {
                return key.name == designer;
            }).id;
            $scope.getDesigner(id);
        };
        // $scope.getDesigns = function(designer) {
        //   $scope.des.designs = [];
        //   setTimeout(function() {
        //     if (designer == "all") {
        //       _.each($scope.designers, function(key) {
        //         $scope.des.designs = $scope.des.designs.concat(key.images);
        //       });
        //     } else {
        //       $scope.des.designs = _.find($scope.designers, function(key) {
        //         return key.name == designer;
        //       }).images;
        //     }
        //     $scope.$apply();
        //   }, 10);
        //
        // };

        $scope.getDesigner = function(id) {
            $scope.des.designs = [];
            NavigationService.getDesigners(id, function(data) {
                //
                // setTimeout(function() {
                $scope.des.designs = data;
                // $scope.$apply();
                //   }, 10);
                console.log('designers', $scope.des.designs);
            });
        }


        NavigationService.getAllDesigners(function(data) {
            $scope.allDesigners = data;
            console.log("  $scope.allDesigners", $scope.allDesigners);
            $scope.designName = $scope.allDesigners[0].name;
            $scope.getDesigner($scope.allDesigners[0].id);

            console.log('allDesigners', $scope.allDesigners);
        });



    })
    .controller('TvcCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        console.log("Testing Consoles");

        $scope.template = TemplateService.changecontent("tvc");
        $scope.menutitle = NavigationService.makeactive("TVC'S");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        // $scope.tvcs = [
        //   'SyGHUKQqlZ8',
        //   'gY_eOL_xwa0',
        //   'iTIpWlZeHdg',
        //   'PrOHbjhSLOE',
        //   'jM7nQCX9joE',
        //   '2m-Iy79cL-E',
        //   'nR0-029uB4E',
        //   'kgIs8B173KY',
        //   'BGtgIchcGEM',
        //   'eMlK1eBQTzI'
        // ];
        NavigationService.getTvc(function(data) {
            $scope.tvcs = data;
            console.log('tvcs', $scope.tvcs);
        });
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
        globalFunc.getnav = $scope.getnav;



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
