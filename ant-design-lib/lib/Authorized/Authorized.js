"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _CheckPermissions = _interopRequireDefault(require("./CheckPermissions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Authorized = function Authorized(_ref) {
  var children = _ref.children,
      authority = _ref.authority,
      _ref$noMatch = _ref.noMatch,
      noMatch = _ref$noMatch === void 0 ? null : _ref$noMatch;
  var childrenRender = typeof children === 'undefined' ? null : children;
  var dom = (0, _CheckPermissions.default)(authority, childrenRender, noMatch);
  return _react.default.createElement(_react.default.Fragment, null, dom);
};

var _default = Authorized;
exports.default = _default;