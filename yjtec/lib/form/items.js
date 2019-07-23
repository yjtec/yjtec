'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = require('antd/es/input');

var _input2 = _interopRequireDefault(_input);

var _select = require('antd/es/select');

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/es/input/style/css');

require('antd/es/select/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _yjtec = require('yjtec');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;

var FI = function (_Component) {
  _inherits(FI, _Component);

  function FI() {
    _classCallCheck(this, FI);

    return _possibleConstructorReturn(this, (FI.__proto__ || Object.getPrototypeOf(FI)).apply(this, arguments));
  }

  _createClass(FI, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          onChange = _props.onChange,
          value = _props.value;

      if (type == 'text') {
        return _react2.default.createElement(_input2.default, this.props);
      }
      if (type == 'select') {
        var options = this.props.options;

        return _react2.default.createElement(
          _select2.default,
          { onChange: onChange },
          options.map(function (item) {
            return _react2.default.createElement(
              Option,
              { key: item.value, value: item.value },
              item.label
            );
          })
        );
      }

      if (type == 'payconfig') {
        return _react2.default.createElement(_yjtec.PayItem, { onChange: onChange, value: value });
      }

      return _react2.default.createElement(
        'div',
        null,
        'uns'
      );
    }
  }]);

  return FI;
}(_react.Component);

exports.default = FI;