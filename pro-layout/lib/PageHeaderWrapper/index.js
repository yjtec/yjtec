"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixedClassName = 'ant-pro-page-header-wrap';

var PageHeaderWrapper = function PageHeaderWrapper(props) {
  var children = props.children;
  return _react.default.createElement("div", {
    style: {
      margin: '-24px -24px 0'
    }
  }, _react.default.createElement("div", {
    className: "".concat(prefixedClassName, "-page-header-warp")
  }, children));
};

var _default = PageHeaderWrapper;
exports.default = _default;