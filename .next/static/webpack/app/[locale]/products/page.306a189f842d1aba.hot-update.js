"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[locale]/products/page",{

/***/ "(app-pages-browser)/./src/components/e-commerce/TableHeader.js":
/*!**************************************************!*\
  !*** ./src/components/e-commerce/TableHeader.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _style_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/style/color */ \"(app-pages-browser)/./src/style/color.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Grid_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Grid!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Grid_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Grid!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _AutoCompleteCustom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AutoCompleteCustom */ \"(app-pages-browser)/./src/components/AutoCompleteCustom.js\");\n/* harmony import */ var _CustomButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CustomButton */ \"(app-pages-browser)/./src/components/CustomButton.js\");\n/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SearchInput */ \"(app-pages-browser)/./src/components/SearchInput.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst TableHeader = (props)=>{\n    _s();\n    const { autoCompleteLabel, productOptions } = props;\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            container: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                item: true,\n                xs: 12,\n                display: \"flex\",\n                p: 3,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        item: true,\n                        xs: 12,\n                        sx: {\n                            backgroundColor: \"aliceblue\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TableHeader.js\",\n                            lineNumber: 20,\n                            columnNumber: 5\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TableHeader.js\",\n                        lineNumber: 17,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        item: true,\n                        xs: 12,\n                        display: \"flex\",\n                        justifyContent: \"flex-end\",\n                        gap: 2,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AutoCompleteCustom__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    options: productOptions,\n                                    value: status,\n                                    label: autoCompleteLabel,\n                                    size: \"small\",\n                                    onChange: (e, newValue)=>setStatus(newValue),\n                                    sx: {\n                                        bgcolor: _style_color__WEBPACK_IMPORTED_MODULE_1__.palette.grey[100],\n                                        width: 175\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TableHeader.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TableHeader.js\",\n                                lineNumber: 23,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    buttonText: \"Add Product\",\n                                    sx: {\n                                        bgcolor: _style_color__WEBPACK_IMPORTED_MODULE_1__.palette.lightBlue[500],\n                                        \":hover\": {\n                                            bgcolor: _style_color__WEBPACK_IMPORTED_MODULE_1__.palette.lightBlue[700]\n                                        }\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TableHeader.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TableHeader.js\",\n                                lineNumber: 36,\n                                columnNumber: 5\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TableHeader.js\",\n                        lineNumber: 22,\n                        columnNumber: 3\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TableHeader.js\",\n                lineNumber: 15,\n                columnNumber: 4\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TableHeader.js\",\n            lineNumber: 14,\n            columnNumber: 3\n        }, undefined)\n    }, void 0, false);\n};\n_s(TableHeader, \"ha1vMLvAmR3k8LKPwluoR765Kl8=\");\n_c = TableHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TableHeader);\nvar _c;\n$RefreshReg$(_c, \"TableHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2UtY29tbWVyY2UvVGFibGVIZWFkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ3VDO0FBQ0U7QUFDVDtBQUNzQjtBQUNaO0FBQ0Y7QUFDeEMsTUFBTU8sY0FBYyxDQUFDQzs7SUFDbkIsTUFBTSxFQUFDQyxpQkFBaUIsRUFBRUMsY0FBYyxFQUFDLEdBQUdGO0lBQzVDLE1BQU0sQ0FBQ0csUUFBUUMsVUFBVSxHQUFHVCwrQ0FBUUE7SUFFcEMscUJBQ0U7a0JBQ0YsNEVBQUNELG9GQUFJQTtZQUFDVyxTQUFTO3NCQUNkLDRFQUFDWCxvRkFBSUE7Z0JBQUNZLElBQUk7Z0JBQUNDLElBQUk7Z0JBQUlDLFNBQVM7Z0JBQVFDLEdBQUc7O2tDQUV0Qyw4REFBQ2Ysb0ZBQUlBO3dCQUFDWSxJQUFJO3dCQUFDQyxJQUFJO3dCQUFJRyxJQUFJOzRCQUNyQkMsaUJBQWdCO3dCQUNsQjtrQ0FDQSw0RUFBQ2Isb0RBQVdBOzs7Ozs7Ozs7O2tDQUVkLDhEQUFDSixvRkFBSUE7d0JBQUNZLElBQUk7d0JBQUNDLElBQUk7d0JBQUlDLFNBQVM7d0JBQVFJLGdCQUFnQjt3QkFBWUMsS0FBSzs7MENBQ25FLDhEQUFDcEIsb0ZBQUdBOzBDQUNGLDRFQUFDRywyREFBa0JBO29DQUNqQmtCLFNBQVNaO29DQUNUYSxPQUFPWjtvQ0FDUGEsT0FBT2Y7b0NBQ1BnQixNQUFLO29DQUNMQyxVQUFVLENBQUNDLEdBQUdDLFdBQWFoQixVQUFVZ0I7b0NBQ3JDVixJQUFJO3dDQUNGVyxTQUFTN0IsaURBQU9BLENBQUM4QixJQUFJLENBQUMsSUFBSTt3Q0FDMUJDLE9BQU87b0NBQ1Q7Ozs7Ozs7Ozs7OzBDQUdKLDhEQUFDOUIsb0ZBQUdBOzBDQUNGLDRFQUFDSSxxREFBWUE7b0NBQUMyQixZQUFXO29DQUFjZCxJQUFJO3dDQUN6Q1csU0FBUzdCLGlEQUFPQSxDQUFDaUMsU0FBUyxDQUFDLElBQUk7d0NBQy9CLFVBQVU7NENBQ1JKLFNBQVM3QixpREFBT0EsQ0FBQ2lDLFNBQVMsQ0FBQyxJQUFJO3dDQUNqQztvQ0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPTjtHQXpDTTFCO0tBQUFBO0FBMkNOLCtEQUFlQSxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2UtY29tbWVyY2UvVGFibGVIZWFkZXIuanM/YjE2YiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHBhbGV0dGUgfSBmcm9tICdAL3N0eWxlL2NvbG9yJ1xuaW1wb3J0IHsgQm94LCBHcmlkIH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQXV0b0NvbXBsZXRlQ3VzdG9tIGZyb20gJy4uL0F1dG9Db21wbGV0ZUN1c3RvbSdcbmltcG9ydCBDdXN0b21CdXR0b24gZnJvbSAnLi4vQ3VzdG9tQnV0dG9uJ1xuaW1wb3J0IFNlYXJjaElucHV0IGZyb20gJy4uL1NlYXJjaElucHV0J1xuY29uc3QgVGFibGVIZWFkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge2F1dG9Db21wbGV0ZUxhYmVsLCBwcm9kdWN0T3B0aW9uc30gPSBwcm9wcztcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICA8R3JpZCBjb250YWluZXI+XG4gICA8R3JpZCBpdGVtIHhzPXsxMn0gZGlzcGxheT17J2ZsZXgnfSBwPXszfT5cblxuICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzeD17e1xuICAgICAgYmFja2dyb3VuZENvbG9yOidhbGljZWJsdWUnXG4gICAgfX0+XG4gICAgPFNlYXJjaElucHV0IC8+XG4gIDwvR3JpZD5cbiAgPEdyaWQgaXRlbSB4cz17MTJ9IGRpc3BsYXk9eydmbGV4J30ganVzdGlmeUNvbnRlbnQ9eydmbGV4LWVuZCd9IGdhcD17Mn0+XG4gICAgPEJveD5cbiAgICAgIDxBdXRvQ29tcGxldGVDdXN0b21cbiAgICAgICAgb3B0aW9ucz17cHJvZHVjdE9wdGlvbnN9XG4gICAgICAgIHZhbHVlPXtzdGF0dXN9XG4gICAgICAgIGxhYmVsPXthdXRvQ29tcGxldGVMYWJlbH1cbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgb25DaGFuZ2U9eyhlLCBuZXdWYWx1ZSkgPT4gc2V0U3RhdHVzKG5ld1ZhbHVlKX1cbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBiZ2NvbG9yOiBwYWxldHRlLmdyZXlbMTAwXSxcbiAgICAgICAgICB3aWR0aDogMTc1XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvQm94PlxuICAgIDxCb3g+XG4gICAgICA8Q3VzdG9tQnV0dG9uIGJ1dHRvblRleHQ9XCJBZGQgUHJvZHVjdFwiIHN4PXt7XG4gICAgICAgIGJnY29sb3I6IHBhbGV0dGUubGlnaHRCbHVlWzUwMF0sIFxuICAgICAgICAnOmhvdmVyJzoge1xuICAgICAgICAgIGJnY29sb3I6IHBhbGV0dGUubGlnaHRCbHVlWzcwMF1cbiAgICAgICAgfVxuICAgICAgfX0gLz5cbiAgICA8L0JveD5cbiAgPC9HcmlkPlxuICA8L0dyaWQ+XG4gIDwvR3JpZD5cbiAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGVIZWFkZXIiXSwibmFtZXMiOlsicGFsZXR0ZSIsIkJveCIsIkdyaWQiLCJ1c2VTdGF0ZSIsIkF1dG9Db21wbGV0ZUN1c3RvbSIsIkN1c3RvbUJ1dHRvbiIsIlNlYXJjaElucHV0IiwiVGFibGVIZWFkZXIiLCJwcm9wcyIsImF1dG9Db21wbGV0ZUxhYmVsIiwicHJvZHVjdE9wdGlvbnMiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJjb250YWluZXIiLCJpdGVtIiwieHMiLCJkaXNwbGF5IiwicCIsInN4IiwiYmFja2dyb3VuZENvbG9yIiwianVzdGlmeUNvbnRlbnQiLCJnYXAiLCJvcHRpb25zIiwidmFsdWUiLCJsYWJlbCIsInNpemUiLCJvbkNoYW5nZSIsImUiLCJuZXdWYWx1ZSIsImJnY29sb3IiLCJncmV5Iiwid2lkdGgiLCJidXR0b25UZXh0IiwibGlnaHRCbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/e-commerce/TableHeader.js\n"));

/***/ })

});