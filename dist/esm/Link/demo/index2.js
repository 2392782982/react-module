import React from 'react';
import Link from "../index";
export default function LinkDom1() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-around"
    }
  }, /*#__PURE__*/React.createElement(Link, {
    disabled: true,
    href: "#",
    className: "custom-disabled"
  }, "\u9ED8\u8BA4\u94FE\u63A5"), /*#__PURE__*/React.createElement(Link, {
    disabled: true,
    href: "#",
    className: "primary-disabled"
  }, "\u4E3B\u8981\u94FE\u63A5"), /*#__PURE__*/React.createElement(Link, {
    disabled: true,
    href: "#",
    className: "success-disabled"
  }, "\u6210\u529F\u94FE\u63A5"), /*#__PURE__*/React.createElement(Link, {
    disabled: true,
    href: "#",
    className: "warning-disabled"
  }, "\u5371\u9669\u94FE\u63A5"), /*#__PURE__*/React.createElement(Link, {
    disabled: true,
    href: "#",
    className: "info-disabled"
  }, "\u4FE1\u606F\u94FE\u63A5"));
}
;