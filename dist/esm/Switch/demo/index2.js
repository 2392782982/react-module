import React from 'react';
import Switch from "../index";
export default function SwitchDom2() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-around"
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    disabled: true
  }));
}