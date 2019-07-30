import "antd/es/button/style";
import _Button from "antd/es/button";

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

import React, { createElement } from 'react';
import classNames from 'classnames';
import config from './typeConfig';
import styles from './index.less';

var Exception =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Exception, _React$PureComponent);

  function Exception() {
    _classCallCheck(this, Exception);

    return _possibleConstructorReturn(this, _getPrototypeOf(Exception).apply(this, arguments));
  }

  _createClass(Exception, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          backText = _this$props.backText,
          _this$props$linkEleme = _this$props.linkElement,
          linkElement = _this$props$linkEleme === void 0 ? "a" : _this$props$linkEleme,
          type = _this$props.type,
          title = _this$props.title,
          desc = _this$props.desc,
          img = _this$props.img,
          actions = _this$props.actions,
          _this$props$redirect = _this$props.redirect,
          redirect = _this$props$redirect === void 0 ? "/" : _this$props$redirect,
          rest = _objectWithoutProperties(_this$props, ["className", "backText", "linkElement", "type", "title", "desc", "img", "actions", "redirect"]);

      var pageType = type in config ? type : '404';
      var clsString = classNames(styles.exception, className);
      return React.createElement("div", _extends({
        className: clsString
      }, rest), React.createElement("div", {
        className: styles.imgBlock
      }, React.createElement("div", {
        className: styles.imgEle,
        style: {
          backgroundImage: "url(".concat(img || config[pageType].img, ")")
        }
      })), React.createElement("div", {
        className: styles.content
      }, React.createElement("h1", null, title || config[pageType].title), React.createElement("div", {
        className: styles.desc
      }, desc || config[pageType].desc), React.createElement("div", {
        className: styles.actions
      }, actions || createElement(linkElement, {
        to: redirect,
        href: redirect
      }, React.createElement(_Button, {
        type: "primary"
      }, backText)))));
    }
  }]);

  return Exception;
}(React.PureComponent);

export default Exception;