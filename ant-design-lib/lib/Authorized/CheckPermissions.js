"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.checkPermissions = void 0;

var _react = _interopRequireDefault(require("react"));

var _renderAuthorize = require("./renderAuthorize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkPermissions = function checkPermissions(authority, currentAuthority, target, Exception) {
  if (!authority) {
    return target;
  } //console.log(currentAuthority,currentAuthority);


  if (Array.isArray(authority)) {
    if (Array.isArray(currentAuthority)) {
      if (currentAuthority.some(function (item) {
        return authority.includes(item);
      })) {
        return target;
      }
    } else if (authority.includes(currentAuthority)) {
      return target;
    }

    return Exception;
  }

  if (typeof authority === 'string') {
    if (Array.isArray(currentAuthority)) {
      if (currentAuthority.some(function (item) {
        return authority === item;
      })) {
        return target;
      }
    } else if (authority === currentAuthority) {
      return target;
    }

    return Exception;
  }

  throw new Error('unsupported parameters');
};

exports.checkPermissions = checkPermissions;

function check(authority, target, Exception) {
  return checkPermissions(authority, _renderAuthorize.CURRENT, target, Exception);
}

var _default = check;
exports.default = _default;