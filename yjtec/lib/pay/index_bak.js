'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = require('antd/es/input');

var _input2 = _interopRequireDefault(_input);

var _form = require('antd/es/form');

var _form2 = _interopRequireDefault(_form);

var _radio = require('antd/es/radio');

var _radio2 = _interopRequireDefault(_radio);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/es/input/style/css');

require('antd/es/form/style/css');

require('antd/es/radio/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioGroup = _radio2.default.Group;
var FormItem = _form2.default.Item;
var TextArea = _input2.default.TextArea;

var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      type: 1
    }, _this.typeChange = function (e) {
      _this.setState({
        type: e.target.value
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      console.log(this.props);
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var type = this.state.type;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          RadioGroup,
          { onChange: this.typeChange, value: this.state.type },
          _react2.default.createElement(
            _radio2.default,
            { value: 1 },
            '\u5FAE\u4FE1'
          ),
          _react2.default.createElement(
            _radio2.default,
            { value: 2 },
            '\u652F\u4ED8\u5B9D'
          )
        ),
        _react2.default.createElement(
          FormItem,
          { style: { marginBottom: 0 } },
          getFieldDecorator('appid')(_react2.default.createElement(_input2.default, { placeholder: 'appId' }))
        ),
        type == 1 && _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(
            FormItem,
            { style: { marginBottom: 0 } },
            getFieldDecorator('mch_id')(_react2.default.createElement(_input2.default, { placeholder: 'mch_id' }))
          ),
          _react2.default.createElement(
            FormItem,
            { style: { marginBottom: 0 } },
            getFieldDecorator('partner_key')(_react2.default.createElement(_input2.default, { placeholder: 'partner_key' }))
          ),
          _react2.default.createElement(
            FormItem,
            { style: { marginBottom: 0 } },
            getFieldDecorator('cert')(_react2.default.createElement(TextArea, { rows: 3, placeholder: 'cert' }))
          ),
          _react2.default.createElement(
            FormItem,
            { style: { marginBottom: 0 } },
            getFieldDecorator('key')(_react2.default.createElement(TextArea, { rows: 3, placeholder: 'key' }))
          )
        ),
        type == 2 && _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(
            FormItem,
            { style: { marginBottom: 0 } },
            getFieldDecorator('public_key')(_react2.default.createElement(TextArea, { rows: 3, placeholder: 'public_key' }))
          ),
          _react2.default.createElement(
            FormItem,
            { style: { marginBottom: 0 } },
            getFieldDecorator('private_key')(_react2.default.createElement(TextArea, { rows: 3, placeholder: 'private_key' }))
          )
        )
      );
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = _form2.default.create({
  name: 'payconfig_form',
  onFieldsChange: function onFieldsChange(props, changedFields) {
    //props.onChange(changedFields);
    console.log(changedFields, 'onFieldsChange');
  },
  mapPropsToFields: function mapPropsToFields(props) {
    // console.log(props,'mapPropsToFields');
    // const {value} = props;
    // let obj = {}
    // if(value){
    //   Object.keys(value).map((item,index) => { 
    //     obj[item] = Form.createFormField({
    //       value:value[item]
    //     })
    //   })
    // }
    // return {
    //   ...obj
    // };
  },
  onValuesChange: function onValuesChange(_ref2, values) {
    var form = _ref2.form,
        onChange = _ref2.onChange;

    console.log(values, 'onValuesChange');
    onChange(form.getFieldsValue());
  }
})(Index);