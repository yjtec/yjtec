"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/icon/style");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index.less"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  UserName: {
    props: {
      size: 'large',
      id: 'userName',
      prefix: _react.default.createElement(_icon.default, {
        type: "user",
        className: _index.default.prefixIcon
      }),
      placeholder: 'admin'
    },
    rules: [{
      required: true,
      message: 'Please enter username!'
    }]
  },
  Password: {
    props: {
      size: 'large',
      prefix: _react.default.createElement(_icon.default, {
        type: "lock",
        className: _index.default.prefixIcon
      }),
      type: 'password',
      id: 'password',
      placeholder: '888888'
    },
    rules: [{
      required: true,
      message: 'Please enter password!'
    }]
  },
  Mobile: {
    props: {
      size: 'large',
      prefix: _react.default.createElement(_icon.default, {
        type: "mobile",
        className: _index.default.prefixIcon
      }),
      placeholder: 'mobile number'
    },
    rules: [{
      required: true,
      message: 'Please enter mobile number!'
    }, {
      pattern: /^1\d{10}$/,
      message: 'Wrong mobile number format!'
    }]
  },
  Captcha: {
    props: {
      size: 'large',
      prefix: _react.default.createElement(_icon.default, {
        type: "mail",
        className: _index.default.prefixIcon
      }),
      placeholder: 'captcha'
    },
    rules: [{
      required: true,
      message: 'Please enter Captcha!'
    }]
  }
};
exports.default = _default;