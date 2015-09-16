// Generated by CoffeeScript 1.9.3
define(function(require, exports, module) {
  var $, cookieName;
  $ = require('jquery');
  require('cookie');
  cookieName = 'userinfo';
  return exports = {
    getUser: function() {
      var user;
      user = Cookies.get(cookieName);
      if (!user) {
        return null;
      }
      if (typeof user === 'string') {
        return JSON.parse(user);
      } else {
        return user;
      }
      return null;
    },
    setUser: function(user) {
      return Cookies.set(cookieName, user);
    },
    checkLogin: function() {
      var user;
      user = this.getUser();
      if (user !== null && user.hasOwnProperty('id')) {
        return true;
      }
      return false;
    }
  };
});

//# sourceMappingURL=auth.js.map
