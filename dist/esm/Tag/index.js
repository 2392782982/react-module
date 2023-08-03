import React from "react";
import "./Tag.module.less";
// interface TagProps {
//     text?: string,
//     type?: string,
//     width?: Number,
//     height?: Number,
//     effect?: Boolean
// }
var Tag = function Tag(_ref) {
  var text = _ref.text,
    type = _ref.type,
    width = _ref.width,
    height = _ref.height,
    effect = _ref.effect;
  var handleRemoveClick = function handleRemoveClick(e) {
    console.log(e.target.parentNode.style.display);
    e.target.parentNode.style.display = 'none';
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: type ? type : '',
    style: {
      width: width ? Number(width) : '',
      height: height ? Number(height) : ''
    }
  }, text, effect ? /*#__PURE__*/React.createElement("span", {
    className: "remove",
    onClick: function onClick(e) {
      return handleRemoveClick(e);
    }
  }, "X") : ''));
};
export default Tag;