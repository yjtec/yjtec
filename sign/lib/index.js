'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _md = require('md5');

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApiSign = function () {
  function ApiSign(appId, secret) {
    var extra = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, ApiSign);

    this.appId = appId, this.secret = secret;
    this.debug = false;
    if (extra.debug) {
      this.debug = extra.debug;
    }
  }

  _createClass(ApiSign, [{
    key: 'sign',
    value: function sign(uri, options) {
      var urlParams = _qs2.default.parse(_url2.default.parse(uri).query);

      var postParams = {};
      var isPost = options.method == 'post' || options.method == 'put';
      if (isPost) {
        postParams = options.data;
      }

      var signParam = {};
      signParam.appId = this.appId;
      signParam.timeStamp = this.timeStamp();
      var signStr = this.makeSign(_extends({}, urlParams, postParams, signParam));
      signParam.sign = signStr;
      var defaultOptions = _extends({}, options);

      if (isPost) {
        defaultOptions.data = _extends({}, options.data, signParam);
      } else {
        defaultOptions.params = _extends({}, signParam);
      }
      return _extends({}, options, defaultOptions);
    }
  }, {
    key: 'timeStamp',
    value: function timeStamp() {
      return Math.floor(Date.parse(new Date()) / 1000);
    }
  }, {
    key: 'makeSign',
    value: function makeSign(params) {
      var tmpParams = {};
      var timeStamp = params.timeStamp;

      Object.keys(params).sort().map(function (key) {
        return tmpParams[key] = params[key];
      });
      var paramStr = '';
      for (var i in tmpParams) {
        if (typeof tmpParams[i] !== 'undefined' && tmpParams[i]) {
          paramStr += '' + i + tmpParams[i];
        } else if (typeof tmpParams[i] === 0) {
          paramStr += i + '0';
        } else if (typeof tmpParams[i] === false) {
          paramStr += i + 'false';
        } else {
          paramStr += '' + i;
        }
      }
      var secret = this.secret;
      if (this.debug) {
        console.log(paramStr);
        console.log(secret + '-' + paramStr + '-' + timeStamp);
      }
      return (0, _md2.default)(secret + '-' + paramStr + '-' + timeStamp);
    }
  }]);

  return ApiSign;
}();

exports.default = ApiSign;