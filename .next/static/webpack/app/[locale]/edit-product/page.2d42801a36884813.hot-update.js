"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[locale]/edit-product/page",{

/***/ "(app-pages-browser)/./src/components/e-commerce/TabsBasic.js":
/*!************************************************!*\
  !*** ./src/components/e-commerce/TabsBasic.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TabsBasic; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_joy_Tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/joy/Tab */ \"(app-pages-browser)/./node_modules/@mui/joy/Tab/Tab.js\");\n/* harmony import */ var _mui_joy_TabList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/joy/TabList */ \"(app-pages-browser)/./node_modules/@mui/joy/TabList/TabList.js\");\n/* harmony import */ var _mui_joy_TabPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/joy/TabPanel */ \"(app-pages-browser)/./node_modules/@mui/joy/TabPanel/TabPanel.js\");\n/* harmony import */ var _mui_joy_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/joy/Tabs */ \"(app-pages-browser)/./node_modules/@mui/joy/Tabs/Tabs.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _RadioButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../RadioButton */ \"(app-pages-browser)/./src/components/RadioButton.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction TabsBasic(param) {\n    let { tab1, tab2, tab3, tabPanel1, tabPanel2, tabPanel3, disableUnderline, variant, radioButton, value, value1, value2, value3, ...otherProps } = param;\n    _s();\n    const [selectedValue, setSelectedValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleSelect = (newValue)=>{\n        setSelectedValue(newValue);\n        if (handleSelect) {\n            handleSelect(newValue);\n        }\n        console.log(newValue);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy_Tabs__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        \"aria-label\": \"Basic tabs\",\n        defaultValue: 0,\n        ...otherProps,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy_TabList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                disableUnderline: disableUnderline,\n                variant: variant,\n                radioButton: radioButton,\n                children: radioButton ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy_Tab__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RadioButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    value: value,\n                                    selectedValue: setSelectedValue,\n                                    onSelect: handleSelect\n                                }, void 0, false, {\n                                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TabsBasic.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 14\n                                }, this),\n                                \" \",\n                                tab1\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TabsBasic.js\",\n                            lineNumber: 38,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy_Tab__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RadioButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    value: value1,\n                                    selectedValue: selectedValue,\n                                    onSelect: handleSelect\n                                }, void 0, false, {\n                                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TabsBasic.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 14\n                                }, this),\n                                \" \",\n                                tab2\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TabsBasic.js\",\n                            lineNumber: 39,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy_Tab__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RadioButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    value: value2,\n                                    selectedValue: selectedValue,\n                                    onSelect: handleSelect\n                                }, void 0, false, {\n                                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TabsBasic.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 14\n                                }, this),\n                                \" \",\n                                tab3\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TabsBasic.js\",\n                            lineNumber: 40,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy_Tab__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            children: tab1\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TabsBasic.js\",\n                            lineNumber: 44,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy_Tab__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            children: tab2\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TabsBasic.js\",\n                            lineNumber: 45,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy_Tab__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            children: tab3\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TabsBasic.js\",\n                            lineNumber: 46,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TabsBasic.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy_TabPanel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                value: 0,\n                children: tabPanel1\n            }, void 0, false, {\n                fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TabsBasic.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy_TabPanel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                value: 1,\n                children: tabPanel2\n            }, void 0, false, {\n                fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TabsBasic.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy_TabPanel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                value: 2,\n                children: tabPanel3\n            }, void 0, false, {\n                fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TabsBasic.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TabsBasic.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(TabsBasic, \"WzPIy9NVp/0RKR5DbBwq+smVmKQ=\");\n_c = TabsBasic;\nvar _c;\n$RefreshReg$(_c, \"TabsBasic\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2UtY29tbWVyY2UvVGFic0Jhc2ljLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQytCO0FBQ1E7QUFDRTtBQUNSO0FBQ0E7QUFDUTtBQUUxQixTQUFTTSxVQUFVLEtBYWpDO1FBYmlDLEVBQ2hDQyxJQUFJLEVBQ0pDLElBQUksRUFDSkMsSUFBSSxFQUNKQyxTQUFTLEVBQ1RDLFNBQVMsRUFDVEMsU0FBUyxFQUNUQyxnQkFBZ0IsRUFDaEJDLE9BQU8sRUFDUEMsV0FBVyxFQUNYQyxLQUFLLEVBQ0xDLE1BQU0sRUFBQ0MsTUFBTSxFQUFDQyxNQUFNLEVBQ3BCLEdBQUdDLFlBQ0osR0FiaUM7O0lBY2hDLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUVuRCxNQUFNbUIsZUFBZ0IsQ0FBQ0M7UUFDckJGLGlCQUFpQkU7UUFDakIsSUFBSUQsY0FBYztZQUNoQkEsYUFBYUM7UUFDZjtRQUNBQyxRQUFRQyxHQUFHLENBQUNGO0lBQ2Q7SUFDQSxxQkFFRSw4REFBQ3JCLHFEQUFJQTtRQUFDd0IsY0FBVztRQUFhQyxjQUFjO1FBQUksR0FBR1IsVUFBVTs7MEJBQzNELDhEQUFDbkIsd0RBQU9BO2dCQUFDWSxrQkFBa0JBO2dCQUFrQkMsU0FBU0E7Z0JBQVNDLGFBQWFBOzBCQUN6RUEsNEJBQ0M7O3NDQUNGLDhEQUFDZixvREFBR0E7OzhDQUFDLDhEQUFDSyxvREFBV0E7b0NBQUVXLE9BQU9BO29DQUFPSyxlQUFlQztvQ0FBa0JPLFVBQVVOOzs7Ozs7Z0NBQWdCO2dDQUFFaEI7Ozs7Ozs7c0NBQzlGLDhEQUFDUCxvREFBR0E7OzhDQUFDLDhEQUFDSyxvREFBV0E7b0NBQUVXLE9BQU9DO29DQUFRSSxlQUFlQTtvQ0FBZVEsVUFBVU47Ozs7OztnQ0FBZ0I7Z0NBQUVmOzs7Ozs7O3NDQUM1Riw4REFBQ1Isb0RBQUdBOzs4Q0FBQyw4REFBQ0ssb0RBQVdBO29DQUFFVyxPQUFPRTtvQ0FBUUcsZUFBZUE7b0NBQWVRLFVBQVVOOzs7Ozs7Z0NBQWU7Z0NBQUVkOzs7Ozs7OztpREFHekY7O3NDQUNGLDhEQUFDVCxvREFBR0E7c0NBQUVPOzs7Ozs7c0NBQ04sOERBQUNQLG9EQUFHQTtzQ0FBRVE7Ozs7OztzQ0FDTiw4REFBQ1Isb0RBQUdBO3NDQUFFUzs7Ozs7Ozs7Ozs7OzswQkFJUiw4REFBQ1AseURBQVFBO2dCQUFDYyxPQUFPOzBCQUNkTjs7Ozs7OzBCQUVILDhEQUFDUix5REFBUUE7Z0JBQUNjLE9BQU87MEJBQ2RMOzs7Ozs7MEJBRUgsOERBQUNULHlEQUFRQTtnQkFBQ2MsT0FBTzswQkFDZEo7Ozs7Ozs7Ozs7OztBQUlUO0dBcER3Qk47S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZS1jb21tZXJjZS9UYWJzQmFzaWMuanM/ODY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBUYWIgZnJvbSAnQG11aS9qb3kvVGFiJztcbmltcG9ydCBUYWJMaXN0IGZyb20gJ0BtdWkvam95L1RhYkxpc3QnO1xuaW1wb3J0IFRhYlBhbmVsIGZyb20gJ0BtdWkvam95L1RhYlBhbmVsJztcbmltcG9ydCBUYWJzIGZyb20gJ0BtdWkvam95L1RhYnMnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmFkaW9CdXR0b24gZnJvbSAnLi4vUmFkaW9CdXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJzQmFzaWMoe1xuICB0YWIxLFxuICB0YWIyLFxuICB0YWIzLFxuICB0YWJQYW5lbDEsXG4gIHRhYlBhbmVsMixcbiAgdGFiUGFuZWwzLFxuICBkaXNhYmxlVW5kZXJsaW5lLFxuICB2YXJpYW50LFxuICByYWRpb0J1dHRvbixcbiAgdmFsdWUsXG4gIHZhbHVlMSx2YWx1ZTIsdmFsdWUzLFxuICAuLi5vdGhlclByb3BzXG59KSB7XG4gIGNvbnN0IFtzZWxlY3RlZFZhbHVlLCBzZXRTZWxlY3RlZFZhbHVlXSA9IHVzZVN0YXRlKDApOyAgXG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gIChuZXdWYWx1ZSkgPT4ge1xuICAgIHNldFNlbGVjdGVkVmFsdWUobmV3VmFsdWUpO1xuICAgIGlmIChoYW5kbGVTZWxlY3QpIHtcbiAgICAgIGhhbmRsZVNlbGVjdChuZXdWYWx1ZSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKG5ld1ZhbHVlKVxuICB9XG4gIHJldHVybiAoXG5cbiAgICA8VGFicyBhcmlhLWxhYmVsPVwiQmFzaWMgdGFic1wiIGRlZmF1bHRWYWx1ZT17MH0gey4uLm90aGVyUHJvcHN9PlxuICAgICAgPFRhYkxpc3QgZGlzYWJsZVVuZGVybGluZT17ZGlzYWJsZVVuZGVybGluZX0gdmFyaWFudD17dmFyaWFudH0gcmFkaW9CdXR0b249e3JhZGlvQnV0dG9ufSA+XG4gICAgICAgIHtyYWRpb0J1dHRvbiA/IChcbiAgICAgICAgICA8PlxuICAgICAgICA8VGFiPjxSYWRpb0J1dHRvbiAgdmFsdWU9e3ZhbHVlfSBzZWxlY3RlZFZhbHVlPXtzZXRTZWxlY3RlZFZhbHVlfSBvblNlbGVjdD17aGFuZGxlU2VsZWN0fSAvPiB7dGFiMX08L1RhYj5cbiAgICAgICAgPFRhYj48UmFkaW9CdXR0b24gIHZhbHVlPXt2YWx1ZTF9IHNlbGVjdGVkVmFsdWU9e3NlbGVjdGVkVmFsdWV9IG9uU2VsZWN0PXtoYW5kbGVTZWxlY3R9IC8+IHt0YWIyfTwvVGFiPlxuICAgICAgICA8VGFiPjxSYWRpb0J1dHRvbiAgdmFsdWU9e3ZhbHVlMn0gc2VsZWN0ZWRWYWx1ZT17c2VsZWN0ZWRWYWx1ZX0gb25TZWxlY3Q9e2hhbmRsZVNlbGVjdH0vPiB7dGFiM308L1RhYj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgPFRhYj57dGFiMX08L1RhYj5cbiAgICAgICAgPFRhYj57dGFiMn08L1RhYj5cbiAgICAgICAgPFRhYj57dGFiM308L1RhYj5cbiAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9UYWJMaXN0PlxuICAgICAgPFRhYlBhbmVsIHZhbHVlPXswfT5cbiAgICAgICAge3RhYlBhbmVsMX1cbiAgICAgIDwvVGFiUGFuZWw+XG4gICAgICA8VGFiUGFuZWwgdmFsdWU9ezF9PlxuICAgICAgICB7dGFiUGFuZWwyfVxuICAgICAgPC9UYWJQYW5lbD5cbiAgICAgIDxUYWJQYW5lbCB2YWx1ZT17Mn0+XG4gICAgICAgIHt0YWJQYW5lbDN9XG4gICAgICA8L1RhYlBhbmVsPlxuICAgIDwvVGFicz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJUYWIiLCJUYWJMaXN0IiwiVGFiUGFuZWwiLCJUYWJzIiwidXNlU3RhdGUiLCJSYWRpb0J1dHRvbiIsIlRhYnNCYXNpYyIsInRhYjEiLCJ0YWIyIiwidGFiMyIsInRhYlBhbmVsMSIsInRhYlBhbmVsMiIsInRhYlBhbmVsMyIsImRpc2FibGVVbmRlcmxpbmUiLCJ2YXJpYW50IiwicmFkaW9CdXR0b24iLCJ2YWx1ZSIsInZhbHVlMSIsInZhbHVlMiIsInZhbHVlMyIsIm90aGVyUHJvcHMiLCJzZWxlY3RlZFZhbHVlIiwic2V0U2VsZWN0ZWRWYWx1ZSIsImhhbmRsZVNlbGVjdCIsIm5ld1ZhbHVlIiwiY29uc29sZSIsImxvZyIsImFyaWEtbGFiZWwiLCJkZWZhdWx0VmFsdWUiLCJvblNlbGVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/e-commerce/TabsBasic.js\n"));

/***/ })

});