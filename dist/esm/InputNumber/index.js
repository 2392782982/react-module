import React from "react";
import "./InputNumber.module.less";
// interface InputNumberProps {
//     value: number;
//     onChange: (value: number) => void;
//     disabled?: Boolean,
//     step?: number
// }
var InputNumber = function InputNumber(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    disabled = _ref.disabled,
    step = _ref.step;
  console.log(Number(step));
  var handleIncrement = function handleIncrement() {
    if (step) {
      onChange(value + Number(step));
    } else {
      onChange(value + 1);
    }
  };
  var handleDecrement = function handleDecrement() {
    if (step) {
      onChange(value - Number(step));
    } else {
      onChange(value - 1);
    }
  };
  var cursor = {
    cursor: disabled ? 'not-allowed' : 'pointer'
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "InputNumber"
  }, /*#__PURE__*/React.createElement("button", {
    className: "plus",
    onClick: handleDecrement,
    disabled: disabled ? true : false,
    style: cursor
  }, "-"), /*#__PURE__*/React.createElement("input", {
    className: "inp",
    type: "text",
    value: value,
    disabled: disabled ? true : false,
    style: cursor
  }), /*#__PURE__*/React.createElement("button", {
    className: "subtract",
    onClick: handleIncrement,
    disabled: disabled ? true : false,
    style: cursor
  }, "+")));
};
export default InputNumber;