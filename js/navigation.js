var adminURL = "";
if (isproduction) {
  adminURL = "http://www.wohlig.co.in/demo/index.php";
} else {
  adminURL = "http://localhost/demo/index.php";
}

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
  var navigation = [{
    name: "TVC'S",
    classis: "active",
    anchor: "tvc",
  }, {
    name: "Designers",
    classis: "active",
    anchor: "designers",
  }, {
    name: "Editorials",
    classis: "active",
    anchor: "editorial",
  }, {
    name: "Celebrities",
    classis: "active",
    anchor: "celebrities",
  }, {
    name: "About",
    classis: "active",
    anchor: "about",
  }, {
    name: "Contact",
    classis: "active",
    anchor: "contact",
  }];

  return {
    getnav: function() {
      return navigation;
    },
    makeactive: function(menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },

  };
});
