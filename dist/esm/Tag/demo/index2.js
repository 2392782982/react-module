import React from "react";
import Tag from "../index";
export default function TagDom2() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-around"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    type: "success",
    text: "\u6807\u7B7E1",
    width: 120,
    height: 70
  }), /*#__PURE__*/React.createElement(Tag, {
    type: "info",
    text: "\u6807\u7B7E1",
    width: 100,
    height: 60
  }), /*#__PURE__*/React.createElement(Tag, {
    type: "warning",
    text: "\u6807\u7B7E1",
    width: 80,
    height: 50
  }), /*#__PURE__*/React.createElement(Tag, {
    type: "danger",
    text: "\u6807\u7B7E1",
    width: 60,
    height: 40
  }));
}