'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isArray = isArray;
exports.isObj = isObj;
exports.isNullArray = isNullArray;
exports.inArray = inArray;
exports.strRandom = strRandom;
exports.isStr = isStr;
var random = require('string-random');
function isArray(arr) {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(arr);
  } else {
    return Object.prototype.toString.call(arr) === "[object Array]";
  }
}
function isObj(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
function isNullArray(arr) {
  return (typeof thing === 'undefined' ? 'undefined' : _typeof(thing)) === 'object' && arr != null && arr.length === 0;
}
function inArray(arr, key, value) {
  return arr.filter(function (item) {
    return item && item[key] == value;
  }).length > 0;
}

function strRandom(len) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return random(len, opts);
}
function isStr(str) {
  return typeof str == 'string';
}