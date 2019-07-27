"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/row/style");

var _row = _interopRequireDefault(require("antd/es/row"));

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/col/style");

var _col = _interopRequireDefault(require("antd/es/col"));

require("antd/es/input/style");

var _input = _interopRequireDefault(require("antd/es/input"));

require("antd/es/form/style");

var _form = _interopRequireDefault(require("antd/es/form"));

var _react = _interopRequireWildcard(require("react"));

var _omit = _interopRequireDefault(require("omit.js"));

var _index = _interopRequireDefault(require("./index.less"));

var _map = _interopRequireDefault(require("./map"));

var _LoginContext = _interopRequireDefault(require("./LoginContext"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var FormItem = _form.default.Item;

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
        var inputProps = (0, _omit.default)(otherProps, ['onGetCaptcha', 'countDown']);
        return _react.default.createElement(FormItem, null, _react.default.createElement(_row.default, {
          gutter: 8
        }, _react.default.createElement(_col.default, {
          span: 16
        }, getFieldDecorator(name, options)(_react.default.createElement(_input.default, _extends({}, customprops, inputProps)))), _react.default.createElement(_col.default, {
          span: 8
        }, _react.default.createElement(_button.default, {
          disabled: count,
          className: _index.default.getCaptcha,
          size: "large",
          onClick: this.onGetCaptcha
        }, count ? "".concat(count, " ").concat(getCaptchaSecondText) : getCaptchaButtonText))));
      }

      return _react.default.createElement(FormItem, null, getFieldDecorator(name, options)(_react.default.createElement(_input.default, _extends({}, customprops, otherProps))));
    }
  }]);

  return WrapFormItem;
}(_react.Component);

WrapFormItem.defaultProps = {
  getCaptchaButtonText: 'captcha',
  getCaptchaSecondText: 'second'
};
var LoginItem = {};
Object.keys(_map.default).forEach(function (key) {
  var item = _map.default[key];

  LoginItem[key] = function (props) {
    return _react.default.createElement(_LoginContext.default.Consumer, null, function (context) {
      return _react.default.createElement(WrapFormItem, _extends({
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
var _default = LoginItem;
exports.default = _default;