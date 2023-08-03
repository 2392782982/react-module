import React from "react";
import Divider from "../index";
export default function DividerDom3() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around'
    }
  }, /*#__PURE__*/React.createElement(Divider, {
    text: "\u9752\u6625\u662F\u4E00\u4E2A\u77ED\u6682\u7684\u7F8E\u68A6",
    contentPosition: true
  }), /*#__PURE__*/React.createElement(Divider, {
    text: "\u5F53\u4F60\u9192\u6765\u65F6",
    contentPosition: true
  }), /*#__PURE__*/React.createElement(Divider, {
    text: "\u5B83\u65E9\u5DF2\u6D88\u5931\u65E0\u8E2A",
    contentPosition: true
  }), /*#__PURE__*/React.createElement(Divider, {
    text: "\u5BB3\u5F97\u4EBA\u58F0\u540D\u72FC\u85C9",
    contentPosition: true
  }));
}
;