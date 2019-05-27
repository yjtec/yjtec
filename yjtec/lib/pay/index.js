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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/es/input/style/css');

require('antd/es/form/style/css');

require('antd/es/radio/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      type: '1'
    }, _this.typeData = {
      1: '支付宝',
      2: '微信'
    }, _this.typeChange = function (e) {
      _this.setState({
        type: e.target.value
      });
    }, _this.handleChange = function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value), function () {
        var onChange = _this.props.onChange;
        var _this$state = _this.state,
            type = _this$state.type,
            appid = _this$state.appid;

        var values = {
          type: type,
          appid: appid
        };

        if (type == 1) {
          var _this$state2 = _this.state,
              public_key = _this$state2.public_key,
              private_key = _this$state2.private_key;

          values.public_key = public_key;
          values.private_key = private_key;
        } else {
          var _this$state3 = _this.state,
              mch_id = _this$state3.mch_id,
              partner_key = _this$state3.partner_key,
              cert = _this$state3.cert,
              key = _this$state3.key;

          values.mch_id = mch_id;
          values.partner_key = partner_key;
          values.cert = cert;
          values.key = key;
        }
        if (onChange) onChange(values);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var value = this.props.value;

      if (value) {
        this.setState(_extends({}, value));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var typeData = this.typeData;
      var type = this.state.type;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          RadioGroup,
          { onChange: this.typeChange, value: type },
          Object.keys(typeData).map(function (key) {
            return _react2.default.createElement(
              _radio2.default,
              { key: key, value: key },
              typeData[key]
            );
          })
        ),
        _react2.default.createElement(
          FormItem,
          { style: { marginBottom: 0 } },
          _react2.default.createElement(_input2.default, { placeholder: 'appid', name: 'appid', value: this.state.appid, onChange: this.handleChange })
        ),
        type == 2 && _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(
            FormItem,
            { style: { marginBottom: 0 } },
            _react2.default.createElement(_input2.default, { placeholder: 'mch_id', name: 'mch_id', value: this.state.mch_id, onChange: this.handleChange })
          ),
          _react2.default.createElement(
            FormItem,
            { style: { marginBottom: 0 } },
            _react2.default.createElement(_input2.default, { placeholder: 'partner_key', name: 'partner_key', value: this.state.partner_key, onChange: this.handleChange })
          ),
          _react2.default.createElement(
            FormItem,
            { style: { marginBottom: 0 } },
            _react2.default.createElement(TextArea, { rows: 3, placeholder: 'cert', name: 'cert', value: this.state.cert, onChange: this.handleChange })
          ),
          _react2.default.createElement(
            FormItem,
            { style: { marginBottom: 0 } },
            _react2.default.createElement(TextArea, { rows: 3, placeholder: 'key', name: 'key', value: this.state.key, onChange: this.handleChange })
          )
        ),
        type == 1 && _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(
            FormItem,
            { style: { marginBottom: 0 } },
            _react2.default.createElement(TextArea, { rows: 3, placeholder: 'public_key', value: this.state.public_key, name: 'public_key', onChange: this.handleChange })
          ),
          _react2.default.createElement(
            FormItem,
            { style: { marginBottom: 0 } },
            _react2.default.createElement(TextArea, { rows: 3, placeholder: 'private_key', value: this.state.private_key, name: 'private_key', onChange: this.handleChange })
          )
        )
      );
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;