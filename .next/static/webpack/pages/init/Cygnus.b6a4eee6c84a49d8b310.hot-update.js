webpackHotUpdate_N_E("pages/init/Cygnus",{

/***/ "./pages/init/Cygnus.js":
/*!******************************!*\
  !*** ./pages/init/Cygnus.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _compornents_Header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../compornents/Header/header */ "./compornents/Header/header.js");
/* harmony import */ var _compornents_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../compornents/Sidebar */ "./compornents/Sidebar.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\User\\Desktop\\msg.gg-frontend\\pages\\init\\Cygnus.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var onMouseOver = function onMouseOver(e) {
  var jobImage = e.target.parentNode;
  jobImage.style.transition = ".8s";
  jobImage.style.width = "390px";
  jobImage.style.height = "410px";
};

var onMouseLeave = function onMouseLeave(e) {
  var jobImage = e.target.parentNode;
  jobImage.style.transition = ".8s";
  jobImage.style.width = "14vw";
  jobImage.style.height = "28vh";
};

var Index = function Index(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      num = _useState[0],
      setNum = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(num);
    document.querySelector("#__next").style.backgroundImage = "url(../../images/background/cygnus.png)";
    var cygnus = document.querySelectorAll(".job__group");
    cygnus.forEach(function (data) {
      var group = document.querySelectorAll(".".concat(data.classList[1], " > div"));
      group.forEach(function (job, i) {
        if (i == 0) {
          job.style.transform = "translateX(17vw)";
        } else if (i == 1) {
          job.style.transform = "translate(11vw, 180px)";
        } else if (i == 2) {
          job.style.transform = "translateX(4.5vw)";
        } else if (i == 3) {
          job.style.transform = "translate(-2vw, 180px)";
        } else if (i == 4) {
          job.style.transform = "translateX(-9.5vw)";
        } else if (i == 5) {
          job.style.transform = "translate(-16vw, 180px)";
        }
      });
    });
    var initJobGroup = document.querySelector(".init__job__group");
    var width = cygnus[0].offsetWidth;
    initJobGroup.style.transition = ".5s";
    initJobGroup.style.transform = "translateX(-".concat(width * num, "px)");
  });
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, "msg.gg"), __jsx("link", {
    rel: "stylesheet",
    href: "/style/header.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/style/init.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  })), __jsx(_compornents_Header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx(_compornents_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "init",
    group: "cygnus",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "init__job",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "init__job__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "../../images/init/cygnus.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "init__job__group d-flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "job__group flex-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "soulMaster pointer",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Cygnus",
      query: {
        num: 0
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 95
    }
  }))), __jsx("div", {
    className: "mikhail pointer",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Cygnus",
      query: {
        num: 1
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 95
    }
  }))), __jsx("div", {
    className: "flameWizard pointer",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Cygnus",
      query: {
        num: 2
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 95
    }
  }))), __jsx("div", {
    className: "windBreaker pointer",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Cygnus",
      query: {
        num: 3
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 95
    }
  }))), __jsx("div", {
    className: "nightWalker pointer",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Cygnus",
      query: {
        num: 4
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 95
    }
  }))), __jsx("div", {
    className: "striker pointer",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Cygnus",
      query: {
        num: 5
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 95
    }
  }))))))));
};

_s(Index, "Zi44ycKtge5fGC+PlhDAtGhhgVE=");

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5pdC9DeWdudXMuanMiXSwibmFtZXMiOlsib25Nb3VzZU92ZXIiLCJlIiwiam9iSW1hZ2UiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJvbk1vdXNlTGVhdmUiLCJJbmRleCIsInByb3BzIiwidXNlU3RhdGUiLCJudW0iLCJzZXROdW0iLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYmFja2dyb3VuZEltYWdlIiwiY3lnbnVzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJkYXRhIiwiZ3JvdXAiLCJjbGFzc0xpc3QiLCJqb2IiLCJpIiwidHJhbnNmb3JtIiwiaW5pdEpvYkdyb3VwIiwib2Zmc2V0V2lkdGgiLCJwYXRobmFtZSIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLENBQUMsRUFBSTtBQUNyQixNQUFJQyxRQUFRLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxVQUF4QjtBQUNBRixVQUFRLENBQUNHLEtBQVQsQ0FBZUMsVUFBZixHQUE0QixLQUE1QjtBQUNBSixVQUFRLENBQUNHLEtBQVQsQ0FBZUUsS0FBZixHQUF1QixPQUF2QjtBQUNBTCxVQUFRLENBQUNHLEtBQVQsQ0FBZUcsTUFBZixHQUF3QixPQUF4QjtBQUNILENBTEQ7O0FBT0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQVIsQ0FBQyxFQUFJO0FBQ3RCLE1BQUlDLFFBQVEsR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLFVBQXhCO0FBQ0FGLFVBQVEsQ0FBQ0csS0FBVCxDQUFlQyxVQUFmLEdBQTRCLEtBQTVCO0FBQ0FKLFVBQVEsQ0FBQ0csS0FB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QTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFO0FBQUV1QixjQUFRLGlCQUFWO0FBQTZCQyxXQUFLLEVBQUU7QUFBRXBCLFdBQUcsRUFBRTtBQUFQO0FBQXBDLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE4RDtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBOUQsQ0FESixDQWJKLEVBZ0JJO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQWlDLGVBQVcsRUFBRWIsV0FBOUM7QUFBMkQsZ0JBQVksRUFBRVMsWUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUU7QUFBRXVCLGNBQVEsaUJBQVY7QUFBNkJDLFdBQUssRUFBRTtBQUFFcEIsV0FBRyxFQUFFO0FBQVA7QUFBcEMsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQThEO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUE5RCxDQURKLENBaEJKLENBREosQ0FKSixDQUZKLENBWEosQ0FESjtBQTRDSCxDQWhGRDs7R0FBTUgsSzs7S0FBQUEsSztBQWtGU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5pdC9DeWdudXMuYjZhNGVlZTZjODRhNDlkOGIzMTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb3JuZW50cy9IZWFkZXIvaGVhZGVyXCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi8uLi9jb21wb3JuZW50cy9TaWRlYmFyXCI7XHJcblxyXG5jb25zdCBvbk1vdXNlT3ZlciA9IGUgPT4ge1xyXG4gICAgbGV0IGpvYkltYWdlID0gZS50YXJnZXQucGFyZW50Tm9kZTtcclxuICAgIGpvYkltYWdlLnN0eWxlLnRyYW5zaXRpb24gPSBcIi44c1wiO1xyXG4gICAgam9iSW1hZ2Uuc3R5bGUud2lkdGggPSBcIjM5MHB4XCI7XHJcbiAgICBqb2JJbWFnZS5zdHlsZS5oZWlnaHQgPSBcIjQxMHB4XCI7XHJcbn1cclxuXHJcbmNvbnN0IG9uTW91c2VMZWF2ZSA9IGUgPT4ge1xyXG4gICAgbGV0IGpvYkltYWdlID0gZS50YXJnZXQucGFyZW50Tm9kZTtcclxuICAgIGpvYkltYWdlLnN0eWxlLnRyYW5zaXRpb24gPSBcIi44c1wiO1xyXG4gICAgam9iSW1hZ2Uuc3R5bGUud2lkdGggPSBcIjE0dndcIjtcclxuICAgIGpvYkltYWdlLnN0eWxlLmhlaWdodCA9IFwiMjh2aFwiO1xyXG59XHJcblxyXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW251bSwgc2V0TnVtXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobnVtKVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjX19uZXh0XCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoLi4vLi4vaW1hZ2VzL2JhY2tncm91bmQvY3lnbnVzLnBuZylgXHJcblxyXG4gICAgICAgIGxldCBjeWdudXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpvYl9fZ3JvdXBcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY3lnbnVzLmZvckVhY2goZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBncm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2RhdGEuY2xhc3NMaXN0WzFdfSA+IGRpdmApO1xyXG4gICAgICAgICAgICBncm91cC5mb3JFYWNoKChqb2IsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGpvYi5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgxN3Z3KWA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoaSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgam9iLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoMTF2dywgMTgwcHgpYDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihpID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBqb2Iuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoNC41dncpYDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihpID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBqb2Iuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgtMnZ3LCAxODBweClgO1xyXG4gICAgICAgICAgICAgICAgfSAgZWxzZSBpZihpID09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBqb2Iuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLTkuNXZ3KWA7XHJcbiAgICAgICAgICAgICAgICB9ICBlbHNlIGlmKGkgPT0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGpvYi5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKC0xNnZ3LCAxODBweClgO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgaW5pdEpvYkdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbml0X19qb2JfX2dyb3VwXCIpO1xyXG4gICAgICAgIGxldCB3aWR0aCA9IGN5Z251c1swXS5vZmZzZXRXaWR0aDsgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgaW5pdEpvYkdyb3VwLnN0eWxlLnRyYW5zaXRpb24gPSBcIi41c1wiO1xyXG5cclxuICAgICAgICBpbml0Sm9iR3JvdXAuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7d2lkdGggKiBudW19cHgpYDtcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5tc2cuZ2c8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3R5bGUvaGVhZGVyLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdHlsZS9pbml0LmNzc1wiLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0tSOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgICAgID48L2xpbms+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwXCI+XHJcbiAgICAgICAgICAgICAgICA8U2lkZWJhciB0aXRsZT1cImluaXRcIiBncm91cD1cImN5Z251c1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluaXRfX2pvYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5pdF9fam9iX190aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uL2ltYWdlcy9pbml0L2N5Z251cy5wbmdcIiBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbml0X19qb2JfX2dyb3VwIGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpvYl9fZ3JvdXAgZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic291bE1hc3RlciBwb2ludGVyXCIgb25Nb3VzZU92ZXI9e29uTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogYC9ncm91cC9DeWdudXNgLCBxdWVyeTogeyBudW06IDAgfSB9fT48ZGl2IGNsYXNzTmFtZT1cImNsaWNrQXJlYVwiPjwvZGl2PjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaWtoYWlsIHBvaW50ZXJcIiBvbk1vdXNlT3Zlcj17b25Nb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBgL2dyb3VwL0N5Z251c2AsIHF1ZXJ5OiB7IG51bTogMSB9IH19PjxkaXYgY2xhc3NOYW1lPVwiY2xpY2tBcmVhXCI+PC9kaXY+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsYW1lV2l6YXJkIHBvaW50ZXJcIiBvbk1vdXNlT3Zlcj17b25Nb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBgL2dyb3VwL0N5Z251c2AsIHF1ZXJ5OiB7IG51bTogMiB9IH19PjxkaXYgY2xhc3NOYW1lPVwiY2xpY2tBcmVhXCI+PC9kaXY+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpbmRCcmVha2VyIHBvaW50ZXJcIiBvbk1vdXNlT3Zlcj17b25Nb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBgL2dyb3VwL0N5Z251c2AsIHF1ZXJ5OiB7IG51bTogMyB9IH19PjxkaXYgY2xhc3NOYW1lPVwiY2xpY2tBcmVhXCI+PC9kaXY+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5pZ2h0V2Fsa2VyIHBvaW50ZXJcIiBvbk1vdXNlT3Zlcj17b25Nb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBgL2dyb3VwL0N5Z251c2AsIHF1ZXJ5OiB7IG51bTogNCB9IH19PjxkaXYgY2xhc3NOYW1lPVwiY2xpY2tBcmVhXCI+PC9kaXY+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0cmlrZXIgcG9pbnRlclwiIG9uTW91c2VPdmVyPXtvbk1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IGAvZ3JvdXAvQ3lnbnVzYCwgcXVlcnk6IHsgbnVtOiA1IH0gfX0+PGRpdiBjbGFzc05hbWU9XCJjbGlja0FyZWFcIj48L2Rpdj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=