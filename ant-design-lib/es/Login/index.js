import "antd/es/form/style";
import _Form from "antd/es/form";
import "antd/es/tabs/style";
import _Tabs from "antd/es/tabs";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './index.less';
import LoginTab from './LoginTab';
import LoginItem from './LoginItem';
import LoginSubmit from './LoginSubmit';
import LoginContext from './LoginContext';

var Login =
/*#__PURE__*/
function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    var _this;

    _classCallCheck(this, Login);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Login).call(this, props));

    _this.onSwitch = function (type) {
      _this.setState({
        type: type
      });

      var onTabChange = _this.props.onTabChange;
      onTabChange(type);
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          active = _this$state.active,
          type = _this$state.type;
      var _this$props = _this.props,
          form = _this$props.form,
          onSubmit = _this$props.onSubmit;
      var activeFileds = active[type];
      form.validateFields(activeFileds, {
        force: true
      }, function (err, values) {
        onSubmit(err, values);
      });
    };

    _this.getContext = function () {
      var tabs = _this.state.tabs;
      var form = _this.props.form;
      return {
        tabUtil: {
          addTab: function addTab(id) {
            _this.setState({
              tabs: [].concat(_toConsumableArray(tabs), [id])
            });
          },
          removeTab: function removeTab(id) {
            _this.setState({
              tabs: tabs.filter(function (currentId) {
                return currentId !== id;
              })
            });
          }
        },
        form: form,
        updateActive: function updateActive(activeItem) {
          var _this$state2 = _this.state,
              type = _this$state2.type,
              active = _this$state2.active;

          if (active[type]) {
            active[type].push(activeItem);
          } else {
            active[type] = [activeItem];
          }

          _this.setState({
            active: active
          });
        }
      };
    };

    _this.state = {
      type: props.defaultActiveKey,
      tabs: [],
      active: {}
    };
    return _this;
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          children = _this$props2.children;
      var _this$state3 = this.state,
          type = _this$state3.type,
          tabs = _this$state3.tabs;
      var TabChildren = [];
      var OtherChildren = [];
      React.Children.forEach(children, function (item) {
        if (!item) {
          return;
        }

        if (item.type.typeName == 'LoginTab') {
          TabChildren.push(item);
        } else {
          OtherChildren.push(item);
        }
      });
      return React.createElement(LoginContext.Provider, {
        value: this.getContext()
      }, React.createElement("div", {
        className: classNames(className, styles.login)
      }, React.createElement(_Form, {
        onSubmit: this.handleSubmit
      }, tabs.length ? React.createElement(React.Fragment, null, React.createElement(_Tabs, {
        animated: false,
        className: styles.tab,
        activeKey: type,
        onChange: this.onSwitch
      }, TabChildren), OtherChildren) : children)));
    }
  }]);

  return Login;
}(Component);

Login.propTypes = {
  className: PropTypes.string,
  defaultActiveKey: PropTypes.string,
  onTabChange: PropTypes.func,
  onSubmit: PropTypes.func
};
Login.defaultProps = {
  className: '',
  defaultActiveKey: '',
  onTabChange: function onTabChange() {},
  onSubmit: function onSubmit() {}
};
Login.Tab = LoginTab;
Login.Submit = LoginSubmit;
Object.keys(LoginItem).forEach(function (item) {
  Login[item] = LoginItem[item];
});
export default _Form.create()(Login);