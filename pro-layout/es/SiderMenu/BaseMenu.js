import "antd/es/icon/style";
import _Icon from "antd/es/icon";
import "antd/es/menu/style";
import _Menu from "antd/es/menu";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import './index.less';
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import Link from 'umi/link';
import { isUrl } from '../utils/utils';
var SubMenu = _Menu.SubMenu;

var getIcon = function getIcon(icon) {
  if (typeof icon === 'string') {
    if (isUrl(icon)) {
      return React.createElement(_Icon, {
        component: function component() {
          return React.createElement("img", {
            src: icon,
            alt: "icon",
            className: styles.icon
          });
        }
      });
    }

    if (icon.startsWith('icon-')) {
      return React.createElement(IconFont, {
        type: icon
      });
    }

    return React.createElement(_Icon, {
      type: icon
    });
  }

  return icon;
};

var BaseMenu =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(BaseMenu, _PureComponent);

  function BaseMenu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BaseMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BaseMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.conversionPath = function (path) {
      if (path && path.indexOf('http') === 0) {
        return path;
      }

      return "/".concat(path || '').replace(/\/+/g, '/');
    };

    _this.getNavMenuItems = function (menusData) {
      if (!menusData) {
        return [];
      }

      return menusData.filter(function (item) {
        return item.name && !item.hideInMenu;
      }).map(function (item) {
        return _this.getSubMenuOrItem(item);
      }).filter(function (item) {
        return item;
      });
    };

    _this.getSubMenuOrItem = function (item) {
      if (item.children && !item.hideChildrenInMenu && item.children.some(function (child) {
        return child.name;
      })) {
        var name = item.name;
        return React.createElement(SubMenu, {
          title: item.icon ? React.createElement("span", null, getIcon(item.icon), React.createElement("span", null, name)) : name,
          key: item.path
        }, _this.getNavMenuItems(item.children));
      }

      return React.createElement(_Menu.Item, {
        key: item.path
      }, _this.getMenuItemPath(item));
    };

    _this.getMenuItemPath = function (item) {
      var name = item.name;

      var itemPath = _this.conversionPath(item.path);

      var icon = getIcon(item.icon);
      var target = item.target; // Is it a http link

      if (/^https?:\/\//.test(itemPath)) {
        return React.createElement("a", {
          href: itemPath,
          target: target
        }, icon, React.createElement("span", null, name));
      }

      var location = _this.props.location;
      return React.createElement(Link, {
        to: itemPath,
        target: target,
        replace: itemPath === location.pathname
      }, icon, React.createElement("span", null, name));
    };

    return _this;
  }

  _createClass(BaseMenu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          mode = _this$props.mode,
          style = _this$props.style,
          menuData = _this$props.menuData,
          theme = _this$props.theme;
      return React.createElement(_Menu, {
        key: "Menu",
        mode: mode,
        theme: theme,
        style: style
      }, this.getNavMenuItems(menuData));
    }
  }]);

  return BaseMenu;
}(PureComponent);

export { BaseMenu as default };