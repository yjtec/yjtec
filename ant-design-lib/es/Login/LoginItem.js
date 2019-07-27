import "antd/es/row/style";
import _Row from "antd/es/row";
import "antd/es/button/style";
import _Button from "antd/es/button";
import "antd/es/col/style";
import _Col from "antd/es/col";
import "antd/es/input/style";
import _Input from "antd/es/input";
import "antd/es/form/style";
import _Form from "antd/es/form";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { Component } from 'react';
import omit from 'omit.js';
import styles from './index.less';
import ItemMap from './map';
import LoginContext from './LoginContext';
var FormItem = _Form.Item;

var WrapFormItem =
/*#__PURE__*/
function (_Component) {
  _inherits(WrapFormItem, _Component);

  function WrapFormItem(props) {
    var _this;

    _classCallCheck(this, WrapFormItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WrapFormItem).call(this, props));

    _this.onGetCaptcha = function () {
      var onGetCaptcha = _this.props.onGetCaptcha;
      var result = onGetCaptcha ? onGetCaptcha() : null;

      if (result instanceof Promise) {
        result.then(_this.runGetCaptchaCountDown);
      } else {
        _this.runGetCaptchaCountDown();
      }
    };

    _this.runGetCaptchaCountDown = function () {
      var countDown = _this.props.countDown;
      var count = countDown || 59;

      _this.setState({
        count: count
      });

      _this.interval = setInterval(function () {
        count -= 1;

        _this.setState({
          count: count
        });

        if (count === 0) {
          clearInterval(_this.interval);
        }
      }, 1000);
    };

    _this.getFormItemOptions = function (_ref) {
      var onChange = _ref.onChange,
          defaultValue = _ref.defaultValue,
          customprops = _ref.customprops,
          rules = _ref.rules;
      var options = {
        rules: rules || customprops.rules
      };

      if (onChange) {
        options.onChange = onChange;
      }

      if (defaultValue) {
        options.initialValue = defaultValue;
      }

      return options;
    };

    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(WrapFormItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          updateActive = _this$props.updateActive,
          name = _this$props.name;

      if (updateActive) {
        updateActive(name);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "render",
    value: function render() {
      var count = this.state.count;

      var _this$props2 = this.props,
          onChange = _this$props2.onChange,
          customprops = _this$props2.customprops,
          defaultValue = _this$props2.defaultValue,
          rules = _this$props2.rules,
          name = _this$props2.name,
          getCaptchaButtonText = _this$props2.getCaptchaButtonText,
          getCaptchaSecondText = _this$props2.getCaptchaSecondText,
          updateActive = _this$props2.updateActive,
          type = _this$props2.type,
          restProps = _objectWithoutProperties(_this$props2, ["onChange", "customprops", "defaultValue", "rules", "name", "getCaptchaButtonText", "getCaptchaSecondText", "updateActive", "type"]);

      var getFieldDecorator = this.props.form.getFieldDecorator;
      var otherProps = restProps || {};
      var options = this.getFormItemOptions(this.props);

      if (type === 'Captcha') {
        var inputProps = omit(otherProps, ['onGetCaptcha', 'countDown']);
        return React.createElement(FormItem, null, React.createElement(_Row, {
          gutter: 8
        }, React.createElement(_Col, {
          span: 16
        }, getFieldDecorator(name, options)(React.createElement(_Input, _extends({}, customprops, inputProps)))), React.createElement(_Col, {
          span: 8
        }, React.createElement(_Button, {
          disabled: count,
          className: styles.getCaptcha,
          size: "large",
          onClick: this.onGetCaptcha
        }, count ? "".concat(count, " ").concat(getCaptchaSecondText) : getCaptchaButtonText))));
      }

      return React.createElement(FormItem, null, getFieldDecorator(name, options)(React.createElement(_Input, _extends({}, customprops, otherProps))));
    }
  }]);

  return WrapFormItem;
}(Component);

WrapFormItem.defaultProps = {
  getCaptchaButtonText: 'captcha',
  getCaptchaSecondText: 'second'
};
var LoginItem = {};
Object.keys(ItemMap).forEach(function (key) {
  var item = ItemMap[key];

  LoginItem[key] = function (props) {
    return React.createElement(LoginContext.Consumer, null, function (context) {
      return React.createElement(WrapFormItem, _extends({
        customprops: item.props,
        rules: item.rules
      }, props, {
        type: key,
        updateActive: context.updateActive,
        form: context.form
      }));
    });
  };
});
export default LoginItem;