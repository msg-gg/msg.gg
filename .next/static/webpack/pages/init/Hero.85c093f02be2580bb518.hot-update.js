webpackHotUpdate_N_E("pages/init/Hero",{

/***/ "./pages/init/Hero.js":
/*!****************************!*\
  !*** ./pages/init/Hero.js ***!
  \****************************/
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
    _jsxFileName = "C:\\Users\\User\\Desktop\\msg.gg-frontend\\pages\\init\\Hero.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var onMouseOver = function onMouseOver(e) {
  var jobImage = e.target.parentNode;
  jobImage.style.transition = ".8s";
  jobImage.style.width = "410px";
  jobImage.style.height = "450px";
};

var onMouseLeave = function onMouseLeave(e) {
  var jobImage = e.target.parentNode;
  jobImage.style.transition = ".8s";
  jobImage.style.width = "350px";
  jobImage.style.height = "370px";
};

var Index = function Index(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      num = _useState[0],
      setNum = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(num);
    document.querySelector("#__next").style.backgroundImage = "url(../../images/background/heroBackground.png)";
    var hero = document.querySelectorAll(".job__group");
    hero.forEach(function (data) {
      var group = document.querySelectorAll(".".concat(data.classList[1], " > div"));
      group.forEach(function (job, i) {
        if (i == 0) {
          job.style.transform = "translateX(100px)";
        } else if (i == 1) {
          job.style.transform = "translateY(190px)";
        } else if (i % 2 != 0 && i != 1) {
          job.style.transform = "translate(-".concat(100 * (i - 1), "px, 190px)");
        } else {
          job.style.transform = "translateX(-".concat(100 * (i - 1), "px)");
        }
      });
    });
    var initJobGroup = document.querySelector(".init__job__group");
    var width = hero[0].offsetWidth;
    initJobGroup.style.transition = ".5s";
    initJobGroup.style.transform = "translateX(-".concat(width * num, "px)");
  });
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, "msg.gg"), __jsx("link", {
    rel: "stylesheet",
    href: "/style/header.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/style/init.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  })), __jsx(_compornents_Header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx(_compornents_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "init",
    group: "hero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "init__job",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "init__job__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "../../images/init/heroTitle.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "init__job__group d-flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "job__group flex-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "aran pointer",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Hero",
      query: {
        num: 0
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 93
    }
  }))), __jsx("div", {
    className: "evan pointer",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Hero",
      query: {
        num: 1
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 93
    }
  }))), __jsx("div", {
    className: "luminous pointer",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Hero",
      query: {
        num: 2
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 93
    }
  }))), __jsx("div", {
    className: "mercedes pointer",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Hero",
      query: {
        num: 0
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 93
    }
  }))), __jsx("div", {
    className: "phantom pointer",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Hero",
      query: {
        num: 1
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 93
    }
  }))), __jsx("div", {
    className: "shade pointer",
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
      pathname: "/group/Hero",
      query: {
        num: 2
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
      columnNumber: 93
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5pdC9IZXJvLmpzIl0sIm5hbWVzIjpbIm9uTW91c2VPdmVyIiwiZSIsImpvYkltYWdlIiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsInN0eWxlIiwidHJhbnNpdGlvbiIsIndpZHRoIiwiaGVpZ2h0Iiwib25Nb3VzZUxlYXZlIiwiSW5kZXgiLCJwcm9wcyIsInVzZVN0YXRlIiwibnVtIiwic2V0TnVtIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJhY2tncm91bmRJbWFnZSIsImhlcm8iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImRhdGEiLCJncm91cCIsImNsYXNzTGlzdCIsImpvYiIsImkiLCJ0cmFuc2Zvcm0iLCJpbml0Sm9iR3JvdXAiLCJvZmZzZXRXaWR0aCIsInBhdGhuYW1lIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUMsQ0FBQyxFQUFJO0FBQ3JCLE1BQUlDLFFBQVEsR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLFVBQXhCO0FBQ0FGLFVBQVEsQ0FBQ0csS0FBVCxDQUFlQyxVQUFmLEdBQTRCLEtBQTVCO0FBQ0FKLFVBQVEsQ0FBQ0csS0FBVCxDQUFlRSxLQUFmLEdBQXVCLE9BQXZCO0FBQ0FMLFVBQVEsQ0FBQ0csS0FBVCxDQUFlRyxNQUFmLEdBQXdCLE9BQXhCO0FBQ0gsQ0FMRDs7QUFPQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBUixDQUFDLEVBQUk7QUFDdEIsTUFBSUMsUUFBUSxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsVUFBeEI7QUFDQUYsVUFBUSxDQUFDRyxLQUFULENBQWVDLFVBQWYsR0FBNEIsS0FBNUI7QUFDQUosVUFBUSxDQUFDRyxLQUFULENB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LEVBQUU7QUFBUDtBQUFsQyxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNEQ7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTVELENBREosQ0FiSixFQWlCSTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQStCLGVBQVcsRUFBRWIsV0FBNUM7QUFBeUQsZ0JBQVksRUFBRVMsWUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUU7QUFBRXVCLGNBQVEsZUFBVjtBQUEyQkMsV0FBSyxFQUFFO0FBQUVwQixXQUFHLEVBQUU7QUFBUDtBQUFsQyxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNEQ7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTVELENBREosQ0FqQkosQ0FESixDQUpKLENBRkosQ0FYSixDQURKO0FBNkNILENBN0VEOztHQUFNSCxLOztLQUFBQSxLO0FBK0VTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbml0L0hlcm8uODVjMDkzZjAyYmUyNTgwYmI1MTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb3JuZW50cy9IZWFkZXIvaGVhZGVyXCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi8uLi9jb21wb3JuZW50cy9TaWRlYmFyXCI7XHJcblxyXG5jb25zdCBvbk1vdXNlT3ZlciA9IGUgPT4ge1xyXG4gICAgbGV0IGpvYkltYWdlID0gZS50YXJnZXQucGFyZW50Tm9kZTtcclxuICAgIGpvYkltYWdlLnN0eWxlLnRyYW5zaXRpb24gPSBcIi44c1wiO1xyXG4gICAgam9iSW1hZ2Uuc3R5bGUud2lkdGggPSBcIjQxMHB4XCI7XHJcbiAgICBqb2JJbWFnZS5zdHlsZS5oZWlnaHQgPSBcIjQ1MHB4XCI7XHJcbn1cclxuXHJcbmNvbnN0IG9uTW91c2VMZWF2ZSA9IGUgPT4ge1xyXG4gICAgbGV0IGpvYkltYWdlID0gZS50YXJnZXQucGFyZW50Tm9kZTtcclxuICAgIGpvYkltYWdlLnN0eWxlLnRyYW5zaXRpb24gPSBcIi44c1wiO1xyXG4gICAgam9iSW1hZ2Uuc3R5bGUud2lkdGggPSBcIjM1MHB4XCI7XHJcbiAgICBqb2JJbWFnZS5zdHlsZS5oZWlnaHQgPSBcIjM3MHB4XCI7XHJcbn1cclxuXHJcbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbbnVtLCBzZXROdW1dID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhudW0pXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNfX25leHRcIikuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCguLi8uLi9pbWFnZXMvYmFja2dyb3VuZC9oZXJvQmFja2dyb3VuZC5wbmcpYFxyXG5cclxuICAgICAgICBsZXQgaGVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuam9iX19ncm91cFwiKTtcclxuICAgICAgICBcclxuICAgICAgICBoZXJvLmZvckVhY2goZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBncm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2RhdGEuY2xhc3NMaXN0WzFdfSA+IGRpdmApO1xyXG4gICAgICAgICAgICBncm91cC5mb3JFYWNoKChqb2IsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGpvYi5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgxMDBweClgO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGkgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGpvYi5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgxOTBweClgO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGkgJSAyICE9IDAgJiYgaSAhPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgam9iLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoLSR7MTAwICogKGkgLSAxKX1weCwgMTkwcHgpYDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgam9iLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0kezEwMCAqIChpIC0gMSl9cHgpYDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgaW5pdEpvYkdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbml0X19qb2JfX2dyb3VwXCIpO1xyXG4gICAgICAgIGxldCB3aWR0aCA9IGhlcm9bMF0ub2Zmc2V0V2lkdGg7ICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGluaXRKb2JHcm91cC5zdHlsZS50cmFuc2l0aW9uID0gXCIuNXNcIjtcclxuXHJcbiAgICAgICAgaW5pdEpvYkdyb3VwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke3dpZHRoICogbnVtfXB4KWA7XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+bXNnLmdnPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0eWxlL2hlYWRlci5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3R5bGUvaW5pdC5jc3NcIi8+XHJcbiAgICAgICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUjp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICA+PC9saW5rPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgPFNpZGViYXIgdGl0bGU9XCJpbml0XCIgZ3JvdXA9XCJoZXJvXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5pdF9fam9iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbml0X19qb2JfX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vaW1hZ2VzL2luaXQvaGVyb1RpdGxlLnBuZ1wiIGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluaXRfX2pvYl9fZ3JvdXAgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iX19ncm91cCBmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcmFuIHBvaW50ZXJcIiBvbk1vdXNlT3Zlcj17b25Nb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBgL2dyb3VwL0hlcm9gLCBxdWVyeTogeyBudW06IDAgfSB9fT48ZGl2IGNsYXNzTmFtZT1cImNsaWNrQXJlYVwiPjwvZGl2PjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmFuIHBvaW50ZXJcIiBvbk1vdXNlT3Zlcj17b25Nb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBgL2dyb3VwL0hlcm9gLCBxdWVyeTogeyBudW06IDEgfSB9fT48ZGl2IGNsYXNzTmFtZT1cImNsaWNrQXJlYVwiPjwvZGl2PjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsdW1pbm91cyBwb2ludGVyXCIgb25Nb3VzZU92ZXI9e29uTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogYC9ncm91cC9IZXJvYCwgcXVlcnk6IHsgbnVtOiAyIH0gfX0+PGRpdiBjbGFzc05hbWU9XCJjbGlja0FyZWFcIj48L2Rpdj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVyY2VkZXMgcG9pbnRlclwiIG9uTW91c2VPdmVyPXtvbk1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IGAvZ3JvdXAvSGVyb2AsIHF1ZXJ5OiB7IG51bTogMCB9IH19PjxkaXYgY2xhc3NOYW1lPVwiY2xpY2tBcmVhXCI+PC9kaXY+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBoYW50b20gcG9pbnRlclwiIG9uTW91c2VPdmVyPXtvbk1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IGAvZ3JvdXAvSGVyb2AsIHF1ZXJ5OiB7IG51bTogMSB9IH19PjxkaXYgY2xhc3NOYW1lPVwiY2xpY2tBcmVhXCI+PC9kaXY+PC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkZSBwb2ludGVyXCIgb25Nb3VzZU92ZXI9e29uTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogYC9ncm91cC9IZXJvYCwgcXVlcnk6IHsgbnVtOiAyIH0gfX0+PGRpdiBjbGFzc05hbWU9XCJjbGlja0FyZWFcIj48L2Rpdj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=