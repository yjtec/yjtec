'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = require('antd/es/button');

var _button2 = _interopRequireDefault(_button);

var _form = require('antd/es/form');

var _form2 = _interopRequireDefault(_form);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/es/button/style/css');

require('antd/es/form/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _items = require('./items');

var _items2 = _interopRequireDefault(_items);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _form2.default.Item;

var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.handleSubmit = function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          validateFieldsAndScroll = _this$props.form.validateFieldsAndScroll,
          onSubmit = _this$props.onSubmit;

      validateFieldsAndScroll(function (err, values) {
        if (!err) {
          if (onSubmit) {
            onSubmit(values);
          }
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$form = _props.form,
          getFieldDecorator = _props$form.getFieldDecorator,
          getFieldValue = _props$form.getFieldValue,
          fields = _props.fields,
          submitting = _props.submitting;


      var formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 7 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 12 },
          md: { span: 10 }
        }
      };

      var submitFormLayout = {
        wrapperCol: {
          xs: { span: 24, offset: 0 },
          sm: { span: 10, offset: 7 }
        }
      };
      return _react2.default.createElement(
        _form2.default,
        { onSubmit: this.handleSubmit, hideRequiredMark: true, style: { marginTop: 8 } },
        Object.keys(fields).map(function (item, i) {
          var FieldProps = {};
          if (fields[item].rules) {
            var rules = fields[item].rules;

            FieldProps.rules = fields[item].rules;
          }
          return _react2.default.createElement(
            FormItem,
            _extends({ key: item }, formItemLayout, { label: fields[item].label }),
            getFieldDecorator(item, _extends({}, FieldProps))(_react2.default.createElement(_items2.default, fields[item]))
          );
        }),
        _react2.default.createElement(
          FormItem,
          _extends({}, submitFormLayout, { style: { marginTop: 32 } }),
          _react2.default.createElement(
            _button2.default,
            { type: 'primary', htmlType: 'submit', loading: submitting },
            '\u63D0\u4EA4'
          )
        )
      );
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = _form2.default.create({
  name: 'form',
  mapPropsToFields: function mapPropsToFields(props) {
    var value = props.value;

    var obj = {};
    if (value) {
      Object.keys(value).map(function (item, index) {
        obj[item] = _form2.default.createFormField({
          value: value[item]
        });
      });
    }
    return _extends({}, obj);
  }
})(Index);