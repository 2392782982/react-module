import React from 'react';
import Link from "../index";
export default function LinkDom1() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-around"
    }
  }, /*#__PURE__*/React.createElement(Link, {
    href: "https://example.com",
    className: "custom-link"
  }, "\u9ED8\u8BA4\u94FE\u63A5"), /*#__PURE__*/React.createElement(Link, {
    href: "#",
    className: "primary-link"
  }, "\u4E3B\u8981\u94FE\u63A5"), /*#__PURE__*/React.createElement(Link, {
    href: "#",
    className: "success-link"
  }, "\u6210\u529F\u94FE\u63A5"), /*#__PURE__*/React.createElement(Link, {
    href: "#",
    className: "warning-link"
  }, "\u5371\u9669\u94FE\u63A5"), /*#__PURE__*/React.createElement(Link, {
    href: "#",
    className: "info-link"
  }, "\u4FE1\u606F\u94FE\u63A5"));
}
;