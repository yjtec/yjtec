"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/form/style");

var _form = _interopRequireDefault(require("antd/es/form"));

require("antd/es/tabs/style");

var _tabs = _interopRequireDefault(require("antd/es/tabs"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _index = _interopRequireDefault(require("./index.less"));

var _LoginTab = _interopRequireDefault(require("./LoginTab"));

var _LoginItem = _interopRequireDefault(require("./LoginItem"));

var _LoginSubmit = _interopRequireDefault(require("./LoginSubmit"));

var _LoginContext = _interopRequireDefault(require("./LoginContext"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

      _react.default.Children.forEach(children, function (item) {
        if (!item) {
          return;
        }

        if (item.type.typeName == 'LoginTab') {
          TabChildren.push(item);
        } else {
          OtherChildren.push(item);
        }
      });

      return _react.default.createElement(_LoginContext.default.Provider, {
        value: this.getContext()
      }, _react.default.createElement("div", {
        className: (0, _classnames.default)(className, _index.default.login)
      }, _react.default.createElement(_form.default, {
        onSubmit: this.handleSubmit
      }, tabs.length ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_tabs.default, {
        animated: false,
        className: _index.default.tab,
        activeKey: type,
        onChange: this.onSwitch
      }, TabChildren), OtherChildren) : children)));
    }
  }]);

  return Login;
}(_react.Component);

Login.propTypes = {
  className: _propTypes.default.string,
  defaultActiveKey: _propTypes.default.string,
  onTabChange: _propTypes.default.func,
  onSubmit: _propTypes.default.func
};
Login.defaultProps = {
  className: '',
  defaultActiveKey: '',
  onTabChange: function onTabChange() {},
  onSubmit: function onSubmit() {}
};
Login.Tab = _LoginTab.default;
Login.Submit = _LoginSubmit.default;
Object.keys(_LoginItem.default).forEach(function (item) {
  Login[item] = _LoginItem.default[item];
});

var _default = _form.default.create()(Login);

exports.default = _default;