"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set = set;
exports.get = get;
exports.remove = remove;
function set(key, value) {
  localStorage.setItem(key, value);
}
function get(key) {
  return localStorage.getItem(key);
}
function remove(key) {
  localStorage.removeItem(key);
}