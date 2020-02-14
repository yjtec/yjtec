'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _umiRequest = require('umi-request');

var _umiRequest2 = _interopRequireDefault(_umiRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Token = function () {
  function Token(key) {
    _classCallCheck(this, Token);

    this.inputKey = key;
  }

  _createClass(Token, [{
    key: 'set',
    value: function set(value) {
      localStorage.setItem(this.inputKey, value);
    }
  }, {
    key: 'get',
    value: function get(value) {
      return localStorage.getItem(this.inputKey);
    }
  }, {
    key: 'remove',
    value: function remove() {
      localStorage.removeItem(this.inputKey);
    }
  }, {
    key: 'setHeader',
    value: function setHeader(token) {
      _umiRequest2.default.interceptors.request.use(function (url, options) {
        return {
          url: url,
          options: _extends({}, options, {
            headers: _extends({}, options.headers, {
              token: token,
              ticket: token
            })
          })
        };
      });
    }
  }]);

  return Token;
}();

exports.default = Token;