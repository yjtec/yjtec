import "antd/es/layout/style";
import _Layout from "antd/es/layout";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Suspense } from 'react';
import DocumentTitle from 'react-document-title';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import defaultSettings from './defaultSettings';
import Context from './RouteContext';
import SiderMenu from './SiderMenu/';
import Header from './Header';
import Footer from './Footer';
import { getBreadcrumbProps } from './utils/getBreadcrumbProps';
import getMenuData from './utils/getMenuData';
import { isBrowser } from './utils/utils';
var Content = _Layout.Content;
var query = {
  'screen-xs': {
    maxWidth: 575
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199
  },
  'screen-xl': {
    minWidth: 1200,
    maxWidth: 1599
  },
  'screen-xxl': {
    minWidth: 1600
  }
};

var renderSiderMenu = function renderSiderMenu(props) {
  return React.createElement(SiderMenu, props);
};

var headerRender = function headerRender(props) {
  if (props.headerRender === false) {
    return null;
  }

  return React.createElement(Header, props);
};

var footerRender = function footerRender(props) {
  if (props.footerRender === false) {
    return null;
  }

  if (props.footerRender) {
    return props.footerRender(_objectSpread({}, props), React.createElement(Footer, null));
  }

  return React.createElement(Footer, null);
};

var BasicLayout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BasicLayout, _React$Component);

  function BasicLayout() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BasicLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BasicLayout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.getContext = function () {
      return {};
    };

    return _this;
  }

  _createClass(BasicLayout, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          _this$props$location = _this$props.location,
          location = _this$props$location === void 0 ? {
        pathname: '/'
      } : _this$props$location,
          _this$props$siderWidt = _this$props.siderWidth,
          siderWidth = _this$props$siderWidt === void 0 ? 256 : _this$props$siderWidt,
          menu = _this$props.menu,
          navTheme = _this$props.navTheme,
          menuDataRender = _this$props.menuDataRender,
          _this$props$route = _this$props.route,
          route = _this$props$route === void 0 ? {
        routes: []
      } : _this$props$route;
      var routes = route.routes,
          path = route.path;

      var formatMessage = function formatMessage(_ref) {
        var id = _ref.id,
            defaultMessage = _ref.defaultMessage,
            rest = _objectWithoutProperties(_ref, ["id", "defaultMessage"]);

        if (props.formatMessage) {
          return props.formatMessage(_objectSpread({
            id: id,
            defaultMessage: defaultMessage
          }, rest));
        }

        var locales = getLocales();

        if (locales[id]) {
          return locales[id];
        }

        if (defaultMessage) {
          return defaultMessage;
        }

        return id;
      };

      var _getMenuData = getMenuData(routes, menu, formatMessage, menuDataRender),
          menuData = _getMenuData.menuData,
          breadcrumb = _getMenuData.breadcrumb;

      console.log(menuData, breadcrumb);
      var breadcrumbProps = getBreadcrumbProps(_objectSpread({}, this.props, {
        breadcrumb: breadcrumb
      }));

      var defaultProps = _objectSpread({}, this.props, {
        formatMessage: formatMessage,
        breadcrumb: breadcrumb
      });

      return React.createElement(React.Fragment, null, React.createElement(DocumentTitle, {
        title: "adsf"
      }, React.createElement(ContainerQuery, {
        query: query
      }, function (params) {
        return React.createElement(Context.Provider, {
          value: _this2.getContext()
        }, React.createElement("div", {
          className: classNames(params, 'ant-design-pro', 'basicLayout')
        }, React.createElement(_Layout, null, renderSiderMenu(_objectSpread({}, defaultProps, {
          menuData: menuData,
          theme: navTheme
        })), React.createElement(_Layout, {
          style: {
            minHeight: '100vh'
          }
        }, headerRender(_objectSpread({}, _this2.props)), React.createElement(Content, {
          className: "ant-pro-basicLayout-content"
        }, children), footerRender({})))));
      })));
    }
  }]);

  return BasicLayout;
}(React.Component);

BasicLayout.defaultProps = _objectSpread({
  logo: ''
}, defaultSettings, {
  location: isBrowser() ? window.location : undefined
});
export default BasicLayout;