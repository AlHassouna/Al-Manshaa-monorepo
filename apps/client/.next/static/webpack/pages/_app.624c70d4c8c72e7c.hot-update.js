"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CustomApp\": function() { return /* binding */ CustomApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./pages/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"../../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ \"../../node_modules/react-intl/lib/index.js\");\n/* harmony import */ var _lang_ar_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lang/ar.json */ \"./pages/lang/ar.json\");\n/* harmony import */ var _lang_en_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lang/en.json */ \"./pages/lang/en.json\");\n/* harmony import */ var _lang_he_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lang/he.json */ \"./pages/lang/he.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst messages = {\n    ar: _lang_ar_json__WEBPACK_IMPORTED_MODULE_3__,\n    en: _lang_en_json__WEBPACK_IMPORTED_MODULE_4__,\n    he: _lang_he_json__WEBPACK_IMPORTED_MODULE_5__\n};\nfunction getDirection(locale) {\n    if (locale === \"ar\" || locale === \"he\") {\n        return \"rtl\";\n    }\n    return \"ltr\";\n}\nconst CustomApp = (Component, pageProps)=>{\n    _s();\n    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_6__.IntlProvider, {\n        locale: locale,\n        messages: messages[locale],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"app\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                dir: getDirection(locale)\n            }, void 0, false, {\n                fileName: \"/Users/hassanhassouna/Desktop/fullstack/EliasRoadMap/Almanshaa/almanshaa/myworkspace/apps/client/pages/_app.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/hassanhassouna/Desktop/fullstack/EliasRoadMap/Almanshaa/almanshaa/myworkspace/apps/client/pages/_app.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/hassanhassouna/Desktop/fullstack/EliasRoadMap/Almanshaa/almanshaa/myworkspace/apps/client/pages/_app.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CustomApp, \"8NqG7Oj4xICngQpoOytAK34hitI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CustomApp;\nvar _c;\n$RefreshReg$(_c, \"CustomApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVzQjtBQUNrQjtBQUNFO0FBQ1Y7QUFDQTtBQUNBO0FBRWhDLE1BQU1LLFdBQVc7SUFDZkgsRUFBRUEsNENBQUFBO0lBQ0ZDLEVBQUVBLDRDQUFBQTtJQUNGQyxFQUFFQSw0Q0FBQUE7QUFDSjtBQUVBLFNBQVNFLGFBQWFDLE1BQU0sRUFBRTtJQUM1QixJQUFJQSxXQUFXLFFBQVFBLFdBQVcsTUFBTTtRQUN0QyxPQUFPO0lBQ1QsQ0FBQztJQUVELE9BQU87QUFDVDtBQUVPLE1BQU1DLFlBQXNCLENBQUNDLFdBQVdDLFlBQWM7O0lBQzNELE1BQU0sRUFBRUgsT0FBTSxFQUFFLEdBQUdQLHNEQUFTQTtJQUM1QixxQkFDRSw4REFBQ0Msb0RBQVlBO1FBQUNNLFFBQVFBO1FBQVFGLFVBQVVBLFFBQVEsQ0FBQ0UsT0FBTztrQkFDdEQsNEVBQUNJO1lBQUtDLFdBQVU7c0JBQ2QsNEVBQUNIO2dCQUFXLEdBQUdDLFNBQVM7Z0JBQUVHLEtBQUtQLGFBQWFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBSXBELEVBQUU7R0FUV0M7O1FBQ1FSLGtEQUFTQTs7O0tBRGpCUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0JztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IEludGxQcm92aWRlciB9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IGFyIGZyb20gJy4vbGFuZy9hci5qc29uJztcbmltcG9ydCBlbiBmcm9tICcuL2xhbmcvZW4uanNvbic7XG5pbXBvcnQgaGUgZnJvbSAnLi9sYW5nL2hlLmpzb24nO1xuXG5jb25zdCBtZXNzYWdlcyA9IHtcbiAgYXIsXG4gIGVuLFxuICBoZSxcbn07XG5cbmZ1bmN0aW9uIGdldERpcmVjdGlvbihsb2NhbGUpIHtcbiAgaWYgKGxvY2FsZSA9PT0gJ2FyJyB8fCBsb2NhbGUgPT09ICdoZScpIHtcbiAgICByZXR1cm4gJ3J0bCc7XG4gIH1cblxuICByZXR1cm4gJ2x0cic7XG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21BcHA6IEFwcFByb3BzID0gKENvbXBvbmVudCwgcGFnZVByb3BzKSA9PiB7XG4gIGNvbnN0IHsgbG9jYWxlIH0gPSB1c2VSb3V0ZXIoKTtcbiAgcmV0dXJuIChcbiAgICA8SW50bFByb3ZpZGVyIGxvY2FsZT17bG9jYWxlfSBtZXNzYWdlcz17bWVzc2FnZXNbbG9jYWxlXX0+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBkaXI9e2dldERpcmVjdGlvbihsb2NhbGUpfSAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvSW50bFByb3ZpZGVyPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJJbnRsUHJvdmlkZXIiLCJhciIsImVuIiwiaGUiLCJtZXNzYWdlcyIsImdldERpcmVjdGlvbiIsImxvY2FsZSIsIkN1c3RvbUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});