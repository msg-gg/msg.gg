webpackHotUpdate_N_E("pages/ranking/WorldRanking",{

/***/ "./compornents/totalSidebar.js":
/*!*************************************!*\
  !*** ./compornents/totalSidebar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\User\\Desktop\\msg.gg-frontend\\compornents\\totalSidebar.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var sideBar = function sideBar(props) {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var active = kind.indexOf(props.kind);
    console.log();
    document.querySelectorAll(".rankSidebar > li").forEach(function (li, i) {
      if (i == active) li.classList.add("active");else li.classList.add("none");
    });
  });
  var kind = ["World", "Reboot", "guild", "Achievement"];
  return __jsx("ul", {
    className: "rankSidebar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/ranking/".concat(props.title, "Ranking"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "pointer active",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 59
    }
  }, "\uC6D4\uB4DC \uB7AD\uD0B9")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/ranking/".concat(props.title, "Ranking"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "pointer active",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 59
    }
  }, "\uB9AC\uBD80\uD2B8 \uB7AD\uD0B9")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/ranking/".concat(props.title, "Ranking"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "pointer active",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 59
    }
  }, "\uAE38\uB4DC \uB7AD\uD0B9")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/ranking/".concat(props.title, "Ranking"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "pointer active",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 59
    }
  }, "\uC5C5\uC801 \uB7AD\uD0B9")));
};

_s(sideBar, "OD7bBpZva5O2jO+Puf00hKivP7c=");

/* harmony default export */ __webpack_exports__["default"] = (sideBar);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9ybmVudHMvdG90YWxTaWRlYmFyLmpzIl0sIm5hbWVzIjpbInNpZGVCYXIiLCJwcm9wcyIsInVzZUVmZmVjdCIsImFjdGl2ZSIsImtpbmQiLCJpbmRleE9mIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJsaSIsImkiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDdkJDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlDLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxPQUFMLENBQWFKLEtBQUssQ0FBQ0csSUFBbkIsQ0FBYjtBQUNBRSxXQUFPLENBQUNDLEdBQVI7QUFFQUMsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixtQkFBMUIsRUFBK0NDLE9BQS9DLENBQXVELFVBQUNDLEVBQUQsRUFBS0MsQ0FBTCxFQUFXO0FBQzlELFVBQUdBLENBQUMsSUFBSVQsTUFBUixFQUNJUSxFQUFFLENBQUNFLFNBQUgsQ0FBYUMsR0FBYixDQUFpQixRQUFqQixFQURKLEtBR0lILEVBQUUsQ0FBQ0UsU0FBSCxDQUFhQyxHQUFiLENBQWlCLE1BQWpCO0FBQ1AsS0FMRDtBQU1ILEdBVlEsQ0FBVDtBQVlBLE1BQU1WLElBQUksR0FBRyxDQUNULE9BRFMsRUFFVCxRQUZTLEVBR1QsT0FIUyxFQUlULGFBSlMsQ0FBYjtBQU9BLFNBQ0k7QUFBSSxhQUFTLEVBQUMsYUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUkscUJBQWNILEtBQUssQ0FBQ2MsS0FBcEIsWUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQThDO0FBQUksYUFBUyxFQUFDLGdCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBQTlDLENBREosRUFFSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxxQkFBY2QsS0FBSyxDQUFDYyxLQUFwQixZQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBOEM7QUFBSSxhQUFTLEVBQUMsZ0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FBOUMsQ0FGSixFQUdJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLHFCQUFjZCxLQUFLLENBQUNjLEtBQXBCLFlBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE4QztBQUFJLGFBQVMsRUFBQyxnQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUE5QyxDQUhKLEVBSUksTUFBQyxnREFBRDtBQUFNLFFBQUkscUJBQWNkLEtBQUssQ0FBQ2MsS0FBcEIsWUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQThDO0FBQUksYUFBUyxFQUFDLGdCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBQTlDLENBSkosQ0FESjtBQVFILENBNUJEOztHQUFNZixPOztBQThCU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmFua2luZy9Xb3JsZFJhbmtpbmcuZmVhMmMyZjM2ZjE0ZmYyNWM0ZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBzaWRlQmFyID0gKHByb3BzKSA9PiB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBhY3RpdmUgPSBraW5kLmluZGV4T2YocHJvcHMua2luZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coKVxyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJhbmtTaWRlYmFyID4gbGlcIikuZm9yRWFjaCgobGksIGkpID0+IHtcclxuICAgICAgICAgICAgaWYoaSA9PSBhY3RpdmUpIFxyXG4gICAgICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcIm5vbmVcIik7XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGtpbmQgPSBbXHJcbiAgICAgICAgXCJXb3JsZFwiLCBcclxuICAgICAgICBcIlJlYm9vdFwiLFxyXG4gICAgICAgIFwiZ3VpbGRcIixcclxuICAgICAgICBcIkFjaGlldmVtZW50XCJcclxuICAgIF1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwicmFua1NpZGViYXJcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9yYW5raW5nLyR7cHJvcHMudGl0bGV9UmFua2luZ2B9PjxsaSBjbGFzc05hbWU9XCJwb2ludGVyIGFjdGl2ZVwiPuyblOuTnCDrnq3tgrk8L2xpPjwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9yYW5raW5nLyR7cHJvcHMudGl0bGV9UmFua2luZ2B9PjxsaSBjbGFzc05hbWU9XCJwb2ludGVyIGFjdGl2ZVwiPuumrOu2gO2KuCDrnq3tgrk8L2xpPjwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9yYW5raW5nLyR7cHJvcHMudGl0bGV9UmFua2luZ2B9PjxsaSBjbGFzc05hbWU9XCJwb2ludGVyIGFjdGl2ZVwiPuq4uOuTnCDrnq3tgrk8L2xpPjwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9yYW5raW5nLyR7cHJvcHMudGl0bGV9UmFua2luZ2B9PjxsaSBjbGFzc05hbWU9XCJwb2ludGVyIGFjdGl2ZVwiPuyXheyggSDrnq3tgrk8L2xpPjwvTGluaz5cclxuICAgICAgICA8L3VsPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNpZGVCYXI7Il0sInNvdXJjZVJvb3QiOiIifQ==