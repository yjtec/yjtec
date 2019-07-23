'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = require('antd/es/form');

var _form2 = _interopRequireDefault(_form);

var _tabs = require('antd/es/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/es/form/style/css');

require('antd/es/tabs/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index.less');

var _index2 = _interopRequireDefault(_index);

var _LoginTab = require('./LoginTab');

var _LoginTab2 = _interopRequireDefault(_LoginTab);

var _LoginItem = require('./LoginItem');

var _LoginItem2 = _interopRequireDefault(_LoginItem);

var _LoginSubmit = require('./LoginSubmit');

var _LoginSubmit2 = _interopRequireDefault(_LoginSubmit);

var _loginContext = require('./loginContext');

var _loginContext2 = _interopRequireDefault(_loginContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.onSwitch = function (type) {
      _this.setState({
        type: type
      });
      var onTabChange = _this.props.onTabChange;

      onTabChange(type);
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
          var _this$state = _this.state,
              type = _this$state.type,
              active = _this$state.active;

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

    _this.handleSubmit = function (e) {
      e.preventDefault();
      var _this$state2 = _this.state,
          type = _this$state2.type,
          active = _this$state2.active;
      var _this$props = _this.props,
          form = _this$props.form,
          onSubmit = _this$props.onSubmit;

      var activeFileds = active[type];
      form.validateFields(activeFileds, { force: true }, function (err, values) {
        onSubmit(err, values);
      });
    };

    _this.state = {
      type: props.defaultActiveKey,
      tabs: [],
      active: {}
    };
    return _this;
  }

  _createClass(Login, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var _state = this.state,
          type = _state.type,
          tabs = _state.tabs;

      var TabChildren = [];
      var otherChildren = [];
      _react2.default.Children.forEach(children, function (item) {
        if (!item) {
          return;
        }
        //console.log(item);
        if (item.type.typeName === 'LoginTab') {
          TabChildren.push(item);
        } else {
          otherChildren.push(item);
        }
      });
      return _react2.default.createElement(
        _loginContext2.default.Provider,
        { value: this.getContext() },
        _react2.default.createElement(
          'div',
          { className: _index2.default.login },
          _react2.default.createElement(
            _form2.default,
            { onSubmit: this.handleSubmit },
            _react2.default.createElement(
              _react2.default.Fragment,
              null,
              _react2.default.createElement(
                _tabs2.default,
                {
                  animated: false,
                  className: _index2.default.tabs,
                  activeKey: type,
                  onChange: this.onSwitch
                },
                TabChildren
              ),
              otherChildren
            )
          )
        )
      );
    }
  }]);

  return Login;
}(_react.Component);

Login.Tab = _LoginTab2.default;
Login.Submit = _LoginSubmit2.default;
Object.keys(_LoginItem2.default).forEach(function (item) {
  Login[item] = _LoginItem2.default[item];
});
exports.default = _form2.default.create()(Login);