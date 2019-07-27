import "antd/es/tabs/style";
import _Tabs from "antd/es/tabs";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { Component } from 'react';
import LoginContext from './LoginContext';
var TabPane = _Tabs.TabPane;

var generateId = function () {
  var i = 0;
  return function () {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    i += 1;
    return "".concat(prefix).concat(i);
  };
}();

var LoginTab =
/*#__PURE__*/
function (_Component) {
  _inherits(LoginTab, _Component);

  function LoginTab(props) {
    var _this;

    _classCallCheck(this, LoginTab);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoginTab).call(this, props));
    _this.uniqueId = generateId('login-tab-');
    return _this;
  }

  _createClass(LoginTab, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var tabUtil = this.props.tabUtil;
      tabUtil.addTab(this.uniqueId);
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return React.createElement(TabPane, this.props, children);
    }
  }]);

  return LoginTab;
}(Component);

var wrapContext = function wrapContext(props) {
  return React.createElement(LoginContext.Consumer, null, function (value) {
    return React.createElement(LoginTab, _extends({
      tabUtil: value.tabUtil
    }, props));
  });
}; // 标志位 用来判断是不是自定义组件


wrapContext.typeName = 'LoginTab';
export default wrapContext;