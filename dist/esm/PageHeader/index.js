import React from 'react';
import style from "./pageHeader.less";
var PageHeadr = function PageHeadr(_ref) {
  var content = _ref.content,
    title = _ref.title,
    back = _ref.back;
  var handleBack = function handleBack() {
    // 根据back的值执行相应的操作
    if (back === 'goBack') {
      // 执行返回操作
      window.history.back();
    }
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: style.header
  }, /*#__PURE__*/React.createElement("div", {
    className: style.headleft
  }, /*#__PURE__*/React.createElement("div", {
    onClick: handleBack,
    className: style.title
  }, /*#__PURE__*/React.createElement("div", {
    className: style.headtitle
  }, " \u300A ", title))), /*#__PURE__*/React.createElement("div", {
    className: style.headcontent
  }, content)));
};
export default PageHeadr;