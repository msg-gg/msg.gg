webpackHotUpdate_N_E("pages/init/Grandis",{

/***/ "./pages/init/Grandis.js":
/*!*******************************!*\
  !*** ./pages/init/Grandis.js ***!
  \*******************************/
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
    _jsxFileName = "C:\\Users\\User\\Desktop\\msg.gg-frontend\\pages\\init\\Grandis.js",
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
    document.querySelector("#__next").style.backgroundImage = "url(../../images/background/grandis.png)";
    var grandis = document.querySelectorAll(".job__group");
    grandis.forEach(function (data) {
      var group = document.querySelectorAll(".".concat(data.classList[1], " > div"));
      group.forEach(function (job, i) {
        if (i == 0) {
          job.style.transform = "translateX(170px)";
        } else if (i == 1) {
          job.style.transform = "translateY(170px)";
        } else if (i % 2 != 0 && i != 1) {
          job.style.transform = "translate(-".concat(170 * (i - 1), "px, 170px)");
        } else {
          job.style.transform = "translateX(-".concat(170 * (i - 1), "px)");
        }
      });
    });
    var initJobGroup = document.querySelector(".init__job__group");
    var width = grandis[0].offsetWidth;
    initJobGroup.style.transition = ".5s";
    initJobGroup.style.transform = "translateX(-".concat(width * num, "px)");
  });
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, "msg.gg"), __jsx("link", {
    rel: "stylesheet",
    href: "/style/header.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/style/init.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  })), __jsx(_compornents_Header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx(_compornents_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "init",
    group: "grandis",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "init__job",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "init__job__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "../../images/init/grandis.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "init__job__group d-flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "job__group nova flex-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "kaiser pointer",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Grandis",
      query: {
        num: 0
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 96
    }
  }))), __jsx("div", {
    className: "cadena pointer",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Grandis",
      query: {
        num: 1
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 96
    }
  }))), __jsx("div", {
    className: "angelicbuster pointer",
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
      pathname: "/group/Grandis",
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
      columnNumber: 96
    }
  })))), __jsx("div", {
    className: "job__group lef flex-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "adele pointer",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Grandis",
      query: {
        num: 3
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 96
    }
  }))), __jsx("div", {
    className: "illium pointer",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Grandis",
      query: {
        num: 4
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 96
    }
  }))), __jsx("div", {
    className: "ark pointer",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Grandis",
      query: {
        num: 5
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 96
    }
  })))), __jsx("div", {
    className: "job__group anima flex-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "hoyoung pointer",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Grandis",
      query: {
        num: 6
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 96
    }
  }))))))), __jsx("img", {
    id: "prev-btn",
    src: "../../images/left-button.png",
    onClick: function onClick() {
      return setNum(num - 1 < 0 ? 0 : num - 1);
    },
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }), __jsx("img", {
    id: "next-btn",
    src: "../../images/right-button.png",
    onClick: function onClick() {
      return setNum(num + 1 > 2 ? 2 : num + 1);
    },
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5pdC9HcmFuZGlzLmpzIl0sIm5hbWVzIjpbIm9uTW91c2VPdmVyIiwiZSIsImpvYkltYWdlIiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsInN0eWxlIiwidHJhbnNpdGlvbiIsIndpZHRoIiwiaGVpZ2h0Iiwib25Nb3VzZUxlYXZlIiwiSW5kZXgiLCJwcm9wcyIsInVzZVN0YXRlIiwibnVtIiwic2V0TnVtIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYmFja2dyb3VuZEltYWdlIiwiZ3JhbmRpcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZGF0YSIsImdyb3VwIiwiY2xhc3NMaXN0Iiwiam9iIiwiaSIsInRyYW5zZm9ybSIsImluaXRKb2JHcm91cCIsIm9mZnNldFdpZHRoIiwicGF0aG5hbWUiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBQyxDQUFDLEVBQUk7QUFDckIsTUFBSUMsUUFBUSxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsVUFBeEI7QUFDQUYsVUFBUSxDQUFDRyxLQUFULENBQWVDLFVBQWYsR0FBNEIsS0FBNUI7QUFDQUosVUFBUSxDQUFDRyxLQUFULENBQWVFLEtBQWYsR0FBdUIsT0FBdkI7QUFDQUwsVUFBUSxDQUFDRyxLQUFULENBQWVHLE1BQWYsR0FBd0IsT0FBeEI7QUFDSCxDQUxEOztBQU9BLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFSLENBQUMsRUFBSTtBQUN0QixNQUFJQyxRQUFRLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxVQUF4QjtBQUNBRixVQUFRLENBQUNHLEtBQVQsQ0FBZUMsVUFBZixHQUE0QixLQUE1QjtBQUNBSixVQUFRLENBQUNHLEtBQVQsQ0FBZUUsS0FBZixH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TUFBRSxFQUFDLFVBQVI7QUFBbUIsT0FBRyxFQUFDLDhCQUF2QjtBQUFzRCxXQUFPLEVBQUU7QUFBQSxhQUFJQyxNQUFNLENBQUNELEdBQUcsR0FBRyxDQUFOLEdBQVUsQ0FBVixHQUFjLENBQWQsR0FBa0JBLEdBQUcsR0FBRyxDQUF6QixDQUFWO0FBQUEsS0FBL0Q7QUFBc0csT0FBRyxFQUFDLEVBQTFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsRFosRUFtRFk7QUFBSyxNQUFFLEVBQUMsVUFBUjtBQUFtQixPQUFHLEVBQUMsK0JBQXZCO0FBQXVELFdBQU8sRUFBRTtBQUFBLGFBQUlDLE1BQU0sQ0FBQ0QsR0FBRyxHQUFHLENBQU4sR0FBVSxDQUFWLEdBQWMsQ0FBZCxHQUFrQkEsR0FBRyxHQUFHLENBQXpCLENBQVY7QUFBQSxLQUFoRTtBQUF1RyxPQUFHLEVBQUMsRUFBM0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5EWixDQURKO0FBdURILENBdEZEOztHQUFNSCxLOztLQUFBQSxLO0FBd0ZTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbml0L0dyYW5kaXMuYWQwNzc3MDk5NDVkNDY2NWQ1MDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb3JuZW50cy9IZWFkZXIvaGVhZGVyXCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi8uLi9jb21wb3JuZW50cy9TaWRlYmFyXCI7XHJcblxyXG5jb25zdCBvbk1vdXNlT3ZlciA9IGUgPT4ge1xyXG4gICAgbGV0IGpvYkltYWdlID0gZS50YXJnZXQucGFyZW50Tm9kZTtcclxuICAgIGpvYkltYWdlLnN0eWxlLnRyYW5zaXRpb24gPSBcIi44c1wiO1xyXG4gICAgam9iSW1hZ2Uuc3R5bGUud2lkdGggPSBcIjM5MHB4XCI7XHJcbiAgICBqb2JJbWFnZS5zdHlsZS5oZWlnaHQgPSBcIjQxMHB4XCI7XHJcbn1cclxuXHJcbmNvbnN0IG9uTW91c2VMZWF2ZSA9IGUgPT4ge1xyXG4gICAgbGV0IGpvYkltYWdlID0gZS50YXJnZXQucGFyZW50Tm9kZTtcclxuICAgIGpvYkltYWdlLnN0eWxlLnRyYW5zaXRpb24gPSBcIi44c1wiO1xyXG4gICAgam9iSW1hZ2Uuc3R5bGUud2lkdGggPSBcIjE0dndcIjtcclxuICAgIGpvYkltYWdlLnN0eWxlLmhlaWdodCA9IFwiMjh2aFwiO1xyXG59XHJcblxyXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW251bSwgc2V0TnVtXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNfX25leHRcIikuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCguLi8uLi9pbWFnZXMvYmFja2dyb3VuZC9ncmFuZGlzLnBuZylgXHJcblxyXG4gICAgICAgIGxldCBncmFuZGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qb2JfX2dyb3VwXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGdyYW5kaXMuZm9yRWFjaChkYXRhID0+IHtcclxuICAgICAgICAgICAgbGV0IGdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7ZGF0YS5jbGFzc0xpc3RbMV19ID4gZGl2YCk7XHJcbiAgICAgICAgICAgIGdyb3VwLmZvckVhY2goKGpvYiwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgam9iLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKDE3MHB4KWA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoaSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgam9iLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKDE3MHB4KWA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoaSAlIDIgIT0gMCAmJiBpICE9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBqb2Iuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgtJHsxNzAgKiAoaSAtIDEpfXB4LCAxNzBweClgO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBqb2Iuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7MTcwICogKGkgLSAxKX1weClgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCBpbml0Sm9iR3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluaXRfX2pvYl9fZ3JvdXBcIik7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gZ3JhbmRpc1swXS5vZmZzZXRXaWR0aDsgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgaW5pdEpvYkdyb3VwLnN0eWxlLnRyYW5zaXRpb24gPSBcIi41c1wiO1xyXG5cclxuICAgICAgICBpbml0Sm9iR3JvdXAuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7d2lkdGggKiBudW19cHgpYDtcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5tc2cuZ2c8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3R5bGUvaGVhZGVyLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdHlsZS9pbml0LmNzc1wiLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0tSOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgICAgID48L2xpbms+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwXCI+XHJcbiAgICAgICAgICAgICAgICA8U2lkZWJhciB0aXRsZT1cImluaXRcIiBncm91cD1cImdyYW5kaXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbml0X19qb2JcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluaXRfX2pvYl9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi9pbWFnZXMvaW5pdC9ncmFuZGlzLnBuZ1wiIGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluaXRfX2pvYl9fZ3JvdXAgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iX19ncm91cCBub3ZhIGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImthaXNlciBwb2ludGVyXCIgb25Nb3VzZU92ZXI9e29uTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogYC9ncm91cC9HcmFuZGlzYCwgcXVlcnk6IHsgbnVtOiAwIH0gfX0+PGRpdiBjbGFzc05hbWU9XCJjbGlja0FyZWFcIj48L2Rpdj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FkZW5hIHBvaW50ZXJcIiBvbk1vdXNlT3Zlcj17b25Nb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBgL2dyb3VwL0dyYW5kaXNgLCBxdWVyeTogeyBudW06IDEgfSB9fT48ZGl2IGNsYXNzTmFtZT1cImNsaWNrQXJlYVwiPjwvZGl2PjwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5nZWxpY2J1c3RlciBwb2ludGVyXCIgb25Nb3VzZU92ZXI9e29uTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogYC9ncm91cC9HcmFuZGlzYCwgcXVlcnk6IHsgbnVtOiAyIH0gfX0+PGRpdiBjbGFzc05hbWU9XCJjbGlja0FyZWFcIj48L2Rpdj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iX19ncm91cCBsZWYgZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRlbGUgcG9pbnRlclwiIG9uTW91c2VPdmVyPXtvbk1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IGAvZ3JvdXAvR3JhbmRpc2AsIHF1ZXJ5OiB7IG51bTogMyB9IH19PjxkaXYgY2xhc3NOYW1lPVwiY2xpY2tBcmVhXCI+PC9kaXY+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlsbGl1bSBwb2ludGVyXCIgb25Nb3VzZU92ZXI9e29uTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogYC9ncm91cC9HcmFuZGlzYCwgcXVlcnk6IHsgbnVtOiA0IH0gfX0+PGRpdiBjbGFzc05hbWU9XCJjbGlja0FyZWFcIj48L2Rpdj48L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFyayBwb2ludGVyXCIgb25Nb3VzZU92ZXI9e29uTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogYC9ncm91cC9HcmFuZGlzYCwgcXVlcnk6IHsgbnVtOiA1IH0gfX0+PGRpdiBjbGFzc05hbWU9XCJjbGlja0FyZWFcIj48L2Rpdj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iX19ncm91cCBhbmltYSBmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3lvdW5nIHBvaW50ZXJcIiBvbk1vdXNlT3Zlcj17b25Nb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBgL2dyb3VwL0dyYW5kaXNgLCBxdWVyeTogeyBudW06IDYgfSB9fT48ZGl2IGNsYXNzTmFtZT1cImNsaWNrQXJlYVwiPjwvZGl2PjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwicHJldi1idG5cIiBzcmM9XCIuLi8uLi9pbWFnZXMvbGVmdC1idXR0b24ucG5nXCIgb25DbGljaz17KCk9PnNldE51bShudW0gLSAxIDwgMCA/IDAgOiBudW0gLSAxKX0gYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJuZXh0LWJ0blwiIHNyYz1cIi4uLy4uL2ltYWdlcy9yaWdodC1idXR0b24ucG5nXCIgb25DbGljaz17KCk9PnNldE51bShudW0gKyAxID4gMiA/IDIgOiBudW0gKyAxKX0gYWx0PVwiXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9