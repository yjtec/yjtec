'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  'tableList': 'index__tableList___1-aUc',
  'tableListOperator': 'index__tableListOperator___1BbXW',
  'tableListForm': 'index__tableListForm___24tP_',
  'ant-form-item': 'index__ant-form-item___2iO7k',
  'ant-form-item-label': 'index__ant-form-item-label___pNRD4',
  'ant-form-item-control': 'index__ant-form-item-control___2Zgwl',
  'ant-form-item-control-wrapper': 'index__ant-form-item-control-wrapper___bwOYi',
  'submitButtons': 'index__submitButtons___20IeB'
};
// export default function(props){
//   console.log(props);
//   return(
//     <div className={styles.tableListOperator}>
//       {props.render()}
//     </div>    
//   );
// }

var Operator = function (_React$Component) {
  _inherits(Operator, _React$Component);

  function Operator() {
    _classCallCheck(this, Operator);

    return _possibleConstructorReturn(this, (Operator.__proto__ || Object.getPrototypeOf(Operator)).apply(this, arguments));
  }

  _createClass(Operator, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: styles.tableListOperator },
        this.props.children
      );
    }
  }]);

  return Operator;
}(_react2.default.Component);

exports.default = Operator;