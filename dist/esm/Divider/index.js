import React from "react";
import "./Divider.module.less";
// interface DividerProps {
//     text?: any,
//     SetCopy?: Boolean,
//     contentPosition?: Boolean
// }
var Divider = function Divider(_ref) {
  var text = _ref.text,
    SetCopy = _ref.SetCopy,
    contentPosition = _ref.contentPosition;
  var className = SetCopy ? 'hrDivider' : '';
  // contentPosition = contentPosition ? contentPosition : ''
  console.log(contentPosition);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "Divider"
  }, text && /*#__PURE__*/React.createElement("span", null, text), contentPosition ? /*#__PURE__*/React.createElement("div", {
    className: "verticalDivider"
  }) : /*#__PURE__*/React.createElement("hr", {
    className: className
  })));
};
export default Divider;