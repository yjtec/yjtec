'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = require('antd/es/icon');

var _icon2 = _interopRequireDefault(_icon);

require('antd/es/icon/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};
exports.default = {
  UserName: {
    props: {
      size: 'large',
      id: 'userName',
      prefix: _react2.default.createElement(_icon2.default, { type: 'user', className: styles.prefixIcon }),
      placeholder: '请输入用户名'
    },
    rules: [{
      required: true,
      message: '请输入用户名'
    }]
  },
  Password: {
    props: {
      size: 'large',
      id: 'password',
      prefix: _react2.default.createElement(_icon2.default, { type: 'lock', className: styles.prefixIcon }),
      type: "password",
      placeholder: '请输入密码'
    },
    rules: [{
      required: true,
      message: '请输入没密码'
    }]
  }
};