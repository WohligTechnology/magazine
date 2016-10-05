var adminURL = "http://florianhurel.com/admin/";
var apiUrl = adminURL + "index.php/json/";
var imgpath = adminURL + "uploads/";
if (isproduction) {
  adminURL = "http://www.wohlig.co.in/demo/index.php";
} else {
  adminURL = "http://localhost/demo/index.php";
}

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
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
    getHomeImages: function(callback) {
        $http.get(apiUrl + 'getSlider').success(callback);
    },
    getEditorials: function(callback) {
        $http.get(apiUrl + 'getEditorials').success(callback);
    },
    getCelebrities: function(callback) {
        $http.get(apiUrl + 'getCelebrities').success(callback);
    },
    getDesigners: function(id,callback) {
        $http.get(apiUrl + 'getDesigners?id='+id).success(callback);
    },
    getTvc: function(callback) {
        $http.get(apiUrl + 'getTvc').success(callback);
    },
    getAllDesigners: function(callback) {
        $http.get(apiUrl + 'getDesigners').success(callback);
    },
    contactSubmit: function(obj, callback) {
        $http.post(apiUrl + 'contactSubmit',obj).success(callback);
    },
    // contactSubmit: function(data,callback) {
    //     $http.get(apiUrl + 'contactSubmit').success(callback);
    // },

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
