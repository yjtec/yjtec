'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = require('antd/es/input');

var _input2 = _interopRequireDefault(_input);

var _form = require('antd/es/form');

var _form2 = _interopRequireDefault(_form);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/es/input/style/css');

require('antd/es/form/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

var _loginContext = require('./loginContext');

var _loginContext2 = _interopRequireDefault(_loginContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _form2.default.Item;

var WrapFormItem = function (_Component) {
  _inherits(WrapFormItem, _Component);

  function WrapFormItem() {
    _classCallCheck(this, WrapFormItem);

    return _possibleConstructorReturn(this, (WrapFormItem.__proto__ || Object.getPrototypeOf(WrapFormItem)).apply(this, arguments));
  }

  _createClass(WrapFormItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          updateActive = _props.updateActive,
          name = _props.name;

      if (updateActive) {
        updateActive(name);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          getFieldDecorator = _props2.form.getFieldDecorator,
          name = _props2.name,
          customprops = _props2.customprops,
          updateActive = _props2.updateActive;
      //console.log(this.props);

      return _react2.default.createElement(
        FormItem,
        null,
        getFieldDecorator(name)(_react2.default.createElement(_input2.default, customprops))
      );
    }
  }]);

  return WrapFormItem;
}(_react.Component);

var LoginItem = {};
Object.keys(_map2.default).forEach(function (key) {
  var item = _map2.default[key];
  LoginItem[key] = function (props) {
    return _react2.default.createElement(
      _loginContext2.default.Consumer,
      null,
      function (context) {
        return _react2.default.createElement(WrapFormItem, _extends({
          customprops: item.props,
          rules: item.rules
        }, props, {
          type: key,
          updateActive: context.updateActive,
          form: context.form
        }));
      }
    );
  };
});

exports.default = LoginItem;