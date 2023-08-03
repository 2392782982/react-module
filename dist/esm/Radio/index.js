import React from "react";
import "./Radio.module.less";
var Radio = function Radio(_ref) {
  var options = _ref.options,
    selectedValue = _ref.selectedValue,
    onValueChange = _ref.onValueChange,
    disabled = _ref.disabled;
  var handleChange = function handleChange(event) {
    var value = event.target.value;
    onValueChange(value);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, options.map(function (option) {
    return /*#__PURE__*/React.createElement("label", {
      key: option.value,
      className: "radio-container"
    }, /*#__PURE__*/React.createElement("span", {
      className: disabled ? 'radioaa' : 'radio-label'
    }, option.label), /*#__PURE__*/React.createElement("input", {
      type: "radio",
      value: option.value,
      checked: selectedValue === option.value,
      onChange: handleChange,
      className: "radioInput",
      disabled: disabled ? true : false,
      style: {
        cursor: disabled ? 'not-allowed' : 'pointer'
      }
    }));
  })));
};
export default Radio;