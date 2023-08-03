import React from 'react';
import "./Link.module.less";

// interface LinkProps {
//     /**
//    * @description 原生 href 属性
//    */
//     href: string;

//     target?: string;
//     className?: string;
//     children: React.ReactNode;
// }
var Link = function Link(_ref) {
  var href = _ref.href,
    className = _ref.className,
    children = _ref.children,
    disabled = _ref.disabled,
    underline = _ref.underline;
  if (disabled) {
    disabled = true;
  } else {
    disabled = false;
  }
  if (!href) {
    href = "/";
  }
  href = disabled ? 'javascript:void(0)' : href;
  if (underline) {
    underline = true;
  } else {
    underline = false;
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "Link"
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    className: className,
    style: {
      cursor: disabled ? 'not-allowed' : 'pointer',
      textDecoration: underline ? 'underline' : ''
    }
  }, children)));
};
export default Link;