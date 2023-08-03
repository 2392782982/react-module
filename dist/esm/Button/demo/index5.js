import React from 'react';
import Button from '..';
export default function ButtonDemo3() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "text",
    loading: true,
    width: 150,
    height: 50
  }, "\u52A0\u8F7D\u6309\u94AE"));
}