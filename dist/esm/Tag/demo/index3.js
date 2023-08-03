import React from "react";
import Tag from "../index";
export default function TagDom1() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: "space-around"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    type: "success",
    text: "\u6807\u7B7E1",
    effect: true
  }), /*#__PURE__*/React.createElement(Tag, {
    type: "info",
    text: "\u6807\u7B7E2",
    effect: true
  }), /*#__PURE__*/React.createElement(Tag, {
    type: "warning",
    text: "\u6807\u7B7E3",
    effect: true
  }), /*#__PURE__*/React.createElement(Tag, {
    type: "danger",
    text: "\u6807\u7B7E4",
    effect: true
  }), /*#__PURE__*/React.createElement(Tag, {
    type: "tap",
    text: "\u6807\u7B7E5",
    effect: true
  })));
}