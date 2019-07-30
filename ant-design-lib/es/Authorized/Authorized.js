import React from 'react';
import check from './CheckPermissions';

var Authorized = function Authorized(_ref) {
  var children = _ref.children,
      authority = _ref.authority,
      _ref$noMatch = _ref.noMatch,
      noMatch = _ref$noMatch === void 0 ? null : _ref$noMatch;
  var childrenRender = typeof children === 'undefined' ? null : children;
  var dom = check(authority, childrenRender, noMatch);
  return React.createElement(React.Fragment, null, dom);
};

export default Authorized;