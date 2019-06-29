"use strict";

(function () {
  exports.Local = function () {
    function Local(key) {
      this.key = key;
    }
    Local.prototype.set = function (data) {
      localStorage.setItem(this.key, JSON.stringify(data));
    };
    Local.prototype.get = function () {
      var localData = localStorage.getItem(this.key);
      if (localData) {
        return JSON.parse(localData);
      }
      return {};
    };
    Local.prototype.remove = function () {
      localStorage.removeItem(this.key);
    };
    return Local;
  }();
}).call(undefined);