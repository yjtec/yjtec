"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNull = isNull;
exports.sum = sum;
function isNull(arr) {
  if (arr == undefined) {
    return true;
  }
  if (arr.length == 0) {
    return true;
  }
  return false;
}

function sum(a, b) {
  return a + b;
}