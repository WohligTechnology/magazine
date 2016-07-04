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
          /*!
           * classie v1.0.1
           * class helper functions
           * from bonzo https://github.com/ded/bonzo
           * MIT license
           *
           * classie.has( elem, 'my-class' ) -> true/false
           * classie.add( elem, 'my-new-class' )
           * classie.remove( elem, 'my-unwanted-class' )
           * classie.toggle( elem, 'my-class' )
           */

          /*jshint browser: true, strict: true, undef: true, unused: true */
          /*global define: false, module: false */

          ( function( window ) {

          'use strict';

          // class helper functions from bonzo https://github.com/ded/bonzo

          function classReg( className ) {
            return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
          }

          // classList support for class management
          // altho to be fair, the api sucks because it won't accept multiple classes at once
          var hasClass, addClass, removeClass;

          if ( 'classList' in document.documentElement ) {
            hasClass = function( elem, c ) {
              return elem.classList.contains( c );
            };
            addClass = function( elem, c ) {
              elem.classList.add( c );
            };
            removeClass = function( elem, c ) {
              elem.classList.remove( c );
            };
          }
          else {
            hasClass = function( elem, c ) {
              return classReg( c ).test( elem.className );
            };
            addClass = function( elem, c ) {
              if ( !hasClass( elem, c ) ) {
                elem.className = elem.className + ' ' + c;
              }
            };
            removeClass = function( elem, c ) {
              elem.className = elem.className.replace( classReg( c ), ' ' );
            };
          }

          function toggleClass( elem, c ) {
            var fn = hasClass( elem, c ) ? removeClass : addClass;
            fn( elem, c );
          }

          var classie = {
            // full names
            hasClass: hasClass,
            addClass: addClass,
            removeClass: removeClass,
            toggleClass: toggleClass,
            // short names
            has: hasClass,
            add: addClass,
            remove: removeClass,
            toggle: toggleClass
          };

          // transport
          if ( typeof define === 'function' && define.amd ) {
            // AMD
            define( classie );
          } else if ( typeof exports === 'object' ) {
            // CommonJS
            module.exports = classie;
          } else {
            // browser global
            window.classie = classie;
          }

          })( window );



          /**
           * main.js
           * http://www.codrops.com
           *
           * Licensed under the MIT license.
           * http://www.opensource.org/licenses/mit-license.php
           *
           * Copyright 2016, Codrops
           * http://www.codrops.com
           */
          ;(function(window) {

          	'use strict';

          	// some helper functions
          	/**
          	 * from https://davidwalsh.name/javascript-debounce-function
          	 */
          	function debounce(func, wait, immediate) {
          		var timeout;
          		return function() {
          			var context = this, args = arguments;
          			var later = function() {
          				timeout = null;
          				if (!immediate) func.apply(context, args);
          			};
          			var callNow = immediate && !timeout;
          			clearTimeout(timeout);
          			timeout = setTimeout(later, wait);
          			if (callNow) func.apply(context, args);
          		};
          	}
          	function extend( a, b ) {
          		for( var key in b ) {
          			if( b.hasOwnProperty( key ) ) {
          				a[key] = b[key];
          			}
          		}
          		return a;
          	}

          	// some vars
          	var bodyEl = document.body,
          		// window sizes
          		winsize = { width : window.innerWidth, height : window.innerHeight },
          		// support for animations
          		support = { animations : Modernizr.cssanimations },
          		// animationend event function
          		animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
          		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
          		onEndAnimation = function( el, callback ) {
          			var onEndCallbackFn = function( ev ) {
          				if( support.animations ) {
          					if( ev.target != this ) return;
          					this.removeEventListener( animEndEventName, onEndCallbackFn );
          				}
          				if( callback && typeof callback === 'function' ) { callback.call(); }
          			};
          			if( support.animations ) {
          				el.addEventListener( animEndEventName, onEndCallbackFn );
          			}
          			else {
          				onEndCallbackFn();
          			}
          		};

          	/**
          	 * Revealer obj
          	 */
          	function Revealer(options) {
          		this.options = extend( {}, this.options );
          		extend( this.options, options );
          		this._init();
          	}

          	/**
          	 * Revealer default options
          	 */
          	Revealer.prototype.options = {
          		// total number of revealing layers (min is 1)
          		nmbLayers : 1,
          		// bg color for the revealing layers
          		bgcolor : '#fff',
          		// effect classname
          		effect : 'anim--effect-1',
          		// callback
          		onStart : function(direction) { return false; },
          		// callback
          		onEnd : function(direction) { return false; }
          	};

          	/**
          	 * build layer structure
          	 * add effect class
          	 * init/bind events
          	 */
          	Revealer.prototype._init = function() {
          		// add revealer layers
          		this._addLayers();
          		// now we have access to the layers
          		this.layers = [].slice.call(this.revealerWrapper.children);
          		// init/bind events
          		this._initEvents();
          	};

          	/**
          	 * init/bind events
          	 */
          	Revealer.prototype._initEvents = function() {
          		// window resize: recalculate window sizes
          		this.debounceResize = debounce(function(ev) {
          			winsize = {width: window.innerWidth, height: window.innerHeight};
          		}, 10);
          		window.addEventListener('resize', this.debounceResize);
          	};

          	/**
          	 * build layer structure and append it to the body
          	 * add effect class
          	 */
          	Revealer.prototype._addLayers = function() {
          		this.revealerWrapper = document.createElement('div');
          		this.revealerWrapper.className = 'revealer';
          		classie.add(bodyEl, this.options.effect);
          		var  strHTML = '';
          		for(var i = 0; i < this.options.nmbLayers; ++i) {
          			var bgcolor = typeof this.options.bgcolor === 'string' ? this.options.bgcolor : (this.options.bgcolor instanceof Array && this.options.bgcolor[i] ? this.options.bgcolor[i] : '#fff');
          			strHTML += '<div style="background:' + bgcolor + '" class="revealer__layer"></div>';
          		}
          		this.revealerWrapper.innerHTML = strHTML;
          		bodyEl.appendChild(this.revealerWrapper);
          	};

          	/**
          	 * reveal the layers
          	 * direction: right || left || top || bottom || cornertopleft || cornertopright || cornerbottomleft || cornerbottomright
          	 */
          	Revealer.prototype.reveal = function(direction, callbacktime, callback) {
          		// if animating return
          		if( this.isAnimating ) {
          			return false;
          		}
          		this.isAnimating = true;
          		// current direction
          		this.direction = direction;
          		// onStart callback
          		this.options.onStart(this.direction);

          		// set the initial position for the layers´ parent
          		var widthVal, heightVal, transform;
          		if( direction === 'cornertopleft' || direction === 'cornertopright' || direction === 'cornerbottomleft' || direction === 'cornerbottomright' ) {
          			var pageDiagonal = Math.sqrt(Math.pow(winsize.width, 2) + Math.pow(winsize.height, 2));
          			widthVal = heightVal = pageDiagonal + 'px';

          			if( direction === 'cornertopleft' ) {
          				transform = 'translate3d(-50%,-50%,0) rotate3d(0,0,1,135deg) translate3d(0,' + pageDiagonal + 'px,0)';
          			}
          			else if( direction === 'cornertopright' ) {
          				transform = 'translate3d(-50%,-50%,0) rotate3d(0,0,1,-135deg) translate3d(0,' + pageDiagonal + 'px,0)';
          			}
          			else if( direction === 'cornerbottomleft' ) {
          				transform = 'translate3d(-50%,-50%,0) rotate3d(0,0,1,45deg) translate3d(0,' + pageDiagonal + 'px,0)';
          			}
          			else if( direction === 'cornerbottomright' ) {
          				transform = 'translate3d(-50%,-50%,0) rotate3d(0,0,1,-45deg) translate3d(0,' + pageDiagonal + 'px,0)';
          			}
          		}
          		else if( direction === 'left' || direction === 'right' ) {
          			widthVal = '100vh';
          			heightVal = '100vw';
          			transform = 'translate3d(-50%,-50%,0) rotate3d(0,0,1,' + (direction === 'left' ? 90 : -90) + 'deg) translate3d(0,100%,0)';
          		}
          		else if( direction === 'top' || direction === 'bottom' ) {
          			widthVal = '100vw';
          			heightVal = '100vh';
          			transform = direction === 'top' ? 'rotate3d(0,0,1,180deg)' : 'none';
          		}

          		this.revealerWrapper.style.width = widthVal;
          		this.revealerWrapper.style.height = heightVal;
          		this.revealerWrapper.style.WebkitTransform = this.revealerWrapper.style.transform = transform;
          		this.revealerWrapper.style.opacity = 1;

          		// add direction and animate classes to parent
          		classie.add(this.revealerWrapper, 'revealer--' + direction || 'revealer--right');
          		classie.add(this.revealerWrapper, 'revealer--animate');

          		// track the end of the animation for all layers
          		var self = this, layerscomplete = 0;
          		this.layers.forEach(function(layer) {
          			onEndAnimation(layer, function() {
          				++layerscomplete;
          				if( layerscomplete === self.options.nmbLayers ) {
          					classie.remove(self.revealerWrapper, 'revealer--' + direction || 'revealer--right');
          					classie.remove(self.revealerWrapper, 'revealer--animate');

          					self.revealerWrapper.style.opacity = 0;
          					self.isAnimating = false;

          					// callback
          					self.options.onEnd(self.direction);
          				}
          			});
          		});

          		// reveal fn callback
          		if( typeof callback === 'function') {
          			if( this.callbacktimeout ) {
          				clearTimeout(this.callbacktimeout);
          			}
          			this.callbacktimeout = setTimeout(callback, callbacktime);
          		}
          	};

          	/**
          	 * destroy method
          	 */
          	Revealer.prototype.destroy = function() {
          		classie.remove(bodyEl, this.options.effect);
          		window.removeEventListener('resize', this.debounceResize);
          		bodyEl.removeChild(this.revealerWrapper);
          	};

          	window.Revealer = Revealer;

          })(window);




          var pages = [].slice.call(document.querySelectorAll('.pages > .page')),
          		currentPage = 0,
          		oldPage = 0,

          		revealerOpts = {
          				// the layers are the elements that move from the sides
          				nmbLayers: 1,
          				// bg color of each layer
          				bgcolor: ['#161616'],
          				// effect classname
          				effect: 'anim--effect-3',
          				onStart: function(direction) {},
          				onEnd: function(direction) {}
          		};
          revealer = new Revealer(revealerOpts);

          // triggers the effect by calling instance.reveal(direction, callbackTime, callbackFn)
          function reveal(goUp) {
          		var direction = "cornerbottomright";
          		if (goUp) {
          				direction = "cornertopleft";
          		}

          		if (goUp && currentPage == 0) {
          				direction = "bottom";
          		}
          		if (!goUp && currentPage == (pages.length - 2)) {
          				direction = "top";
          		}

          		var callbackTime = 750,
          				callbackFn = function() {
          						currentPage = $(".page").index($(".page--current"));

          						$(".page--current").removeClass("page--current");

          						if (goUp) {
          								direction = "cornertopleft";
          								var nextPage = --currentPage;
          								if (nextPage < 0) {
          										nextPage = pages.length - 1;

          								}
          						} else {
          								var nextPage = ++currentPage;
          								if (nextPage >= pages.length) {
          										nextPage = 0;
          								}
          						}

          						$(".page").eq(nextPage).addClass("page--current");
          				};

          		revealer.reveal(direction, callbackTime, callbackFn);
          }

          $('body').on('mousewheel', function(event) {
          		if (event.deltaY<0) {
          			reveal();
          		}
          		else
          		{
          			reveal(true);
          		}
          });

        });

        $scope.oneClass = "";
        $scope.twoClass = "";
        $scope.threeClass = "";
        $scope.fourClass = "";
        $scope.fiveClass = "";
        $scope.sixClass = "";
        $scope.eightClass = "";

        $scope.scrollUpOne = function() {
            if ($scope.oneClass === "") $scope.oneClass = "leftUp";
            else $scope.oneClass = "";
        };
        $scope.scrollUpTwo = function() {
            if ($scope.twoClass === "") $scope.twoClass = "leftUp";
            else $scope.twoClass = "";
        };
        $scope.scrollUpThree = function() {
            if ($scope.threeClass === "") $scope.threeClass = "leftUp";
            else $scope.threeClass = "";
        };
        $scope.scrollUpFour = function() {
            if ($scope.fourClass === "") $scope.fourClass = "leftUp";
            else $scope.fourClass = "";
        };
        $scope.scrollUpFive = function() {
            if ($scope.fiveClass === "") $scope.fiveClass = "leftUp";
            else $scope.fiveClass = "";
        };
        $scope.scrollUpSix = function() {
            if ($scope.sixClass === "") $scope.sixClass = "leftUp";
            else $scope.sixClass = "";
        };
        $scope.scrollUpEight = function() {
            if ($scope.eightClass === "") $scope.eightClass = "leftUp";
            else $scope.eightClass = "";
        };

        $scope.scrollDownOne = function() {
            if ($scope.oneClass === "") $scope.oneClass = "rightDown";
            else $scope.oneClass = "";
        };
        $scope.scrollDownTwo = function() {
            if ($scope.twoClass === "") $scope.twoClass = "rightDown";
            else $scope.twoClass = "";
        };
        $scope.scrollDownThree = function() {
            if ($scope.threeClass === "") $scope.threeClass = "rightDown";
            else $scope.threeClass = "";
        };
        $scope.scrollDownFour = function() {
            if ($scope.fourClass === "") $scope.fourClass = "rightDown";
            else $scope.fourClass = "";
        };
        $scope.scrollDownFive = function() {
            if ($scope.fiveClass === "") $scope.fiveClass = "rightDown";
            else $scope.fiveClass = "";
        };
        $scope.scrollDownSix = function() {
            if ($scope.sixClass === "") $scope.sixClass = "rightDown";
            else $scope.sixClass = "";
        };
        $scope.scrollDownEight = function() {
            if ($scope.eightClass === "") $scope.eightClass = "rightDown";
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
