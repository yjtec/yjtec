import React from "react";
import './index.less';
var prefixedClassName = 'ant-pro-page-header-wrap';

var PageHeaderWrapper = function PageHeaderWrapper(props) {
  var children = props.children;
  return React.createElement("div", {
    style: {
      margin: '-24px -24px 0'
    }
  }, React.createElement("div", {
    className: "".concat(prefixedClassName, "-page-header-warp")
  }, children));
};

export default PageHeaderWrapper;