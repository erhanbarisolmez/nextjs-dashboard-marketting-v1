"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[locale]/edit-product/[...inbox]/page",{

/***/ "(app-pages-browser)/./src/components/e-commerce/edit-product/inbox/menuItems/inboxContent/message/Send.js":
/*!*********************************************************************************************!*\
  !*** ./src/components/e-commerce/edit-product/inbox/menuItems/inboxContent/message/Send.js ***!
  \*********************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Send: function() { return /* binding */ Send; },\n/* harmony export */   useStyles: function() { return /* binding */ useStyles; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_AutoCompleteAdvanced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AutoCompleteAdvanced */ \"(app-pages-browser)/./src/components/AutoCompleteAdvanced.js\");\n/* harmony import */ var _components_TypographyCustom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/TypographyCustom */ \"(app-pages-browser)/./src/components/TypographyCustom.js\");\n/* harmony import */ var _components_e_commerce_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/e-commerce/Card */ \"(app-pages-browser)/./src/components/e-commerce/Card.js\");\n/* harmony import */ var _components_e_commerce_TextArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/e-commerce/TextArea */ \"(app-pages-browser)/./src/components/e-commerce/TextArea.js\");\n/* harmony import */ var _mui_joy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/joy */ \"(app-pages-browser)/./node_modules/@mui/joy/Avatar/Avatar.js\");\n/* harmony import */ var _mui_joy_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/joy/Input */ \"(app-pages-browser)/./node_modules/@mui/joy/Input/Input.js\");\n/* harmony import */ var _barrel_optimize_names_Container_Divider_Grid_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Container,Divider,Grid!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _barrel_optimize_names_Container_Divider_Grid_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Container,Divider,Grid!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _barrel_optimize_names_Container_Divider_Grid_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Container,Divider,Grid!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Divider/Divider.js\");\n/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/styles */ \"(app-pages-browser)/./node_modules/@mui/styles/makeStyles/makeStyles.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst users = [\n    {\n        name: \"Brian Cox\",\n        image: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/inbox/menuItems/inboxContent/message/Send.js\",\n            lineNumber: 11,\n            columnNumber: 31\n        }, undefined)\n    },\n    {\n        name: \"Emma Smith\",\n        image: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/inbox/menuItems/inboxContent/message/Send.js\",\n            lineNumber: 12,\n            columnNumber: 32\n        }, undefined)\n    },\n    {\n        name: \"Max Smith\",\n        image: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/inbox/menuItems/inboxContent/message/Send.js\",\n            lineNumber: 13,\n            columnNumber: 31\n        }, undefined)\n    },\n    {\n        name: \"Sean Bean\",\n        image: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/inbox/menuItems/inboxContent/message/Send.js\",\n            lineNumber: 14,\n            columnNumber: 31\n        }, undefined)\n    },\n    {\n        name: \"John Miller\",\n        image: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/inbox/menuItems/inboxContent/message/Send.js\",\n            lineNumber: 15,\n            columnNumber: 33\n        }, undefined)\n    },\n    {\n        name: \"Ana Crown\",\n        image: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/inbox/menuItems/inboxContent/message/Send.js\",\n            lineNumber: 16,\n            columnNumber: 31\n        }, undefined)\n    },\n    {\n        name: \"Dan Wilson\",\n        image: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/inbox/menuItems/inboxContent/message/Send.js\",\n            lineNumber: 17,\n            columnNumber: 32\n        }, undefined)\n    },\n    {\n        name: \"Francis Mitcham\",\n        image: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/inbox/menuItems/inboxContent/message/Send.js\",\n            lineNumber: 18,\n            columnNumber: 37\n        }, undefined)\n    }\n];\nconst heading = [\n    {\n        \"heading1\": \"\"\n    }\n];\nconst Send = ()=>{\n    _s();\n    const classes = useStyles();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_e_commerce_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Divider_Grid_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Divider_Grid_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        spacing: 1,\n                        container: true,\n                        sx: {\n                            display: \"flex\",\n                            justifyContent: \"space-between\",\n                            alignItems: \"center\",\n                            mt: 1\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Divider_Grid_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                item: true,\n                                xs: 1,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TypographyCustom__WEBPACK_IMPORTED_MODULE_2__.TypographyCustom, {\n                                    text: \"TO:\",\n                                    sx: {\n                                        mt: 1,\n                                        ml: 1,\n                                        fontWeight: 700\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/inbox/menuItems/inboxContent/message/Send.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 9\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/inbox/menuItems/inboxContent/message/Send.js\",\n                                lineNumber: 34,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Divider_Grid_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                item: true,\n                                xs: 10,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AutoCompleteAdvanced__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    fullWidth: true,\n                                    placeholder: \"Select to users\",\n                                    options: users,\n                                    getOptionLabel: (option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: classes.users,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: option.image\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/inbox/menuItems/inboxContent/message/Send.js\",\n                                                        lineNumber: 53,\n                                                        columnNumber: 13\n                                                    }, void 0),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        children: option.name\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/inbox/menuItems/inboxContent/message/Send.js\",\n                                                        lineNumber: 56,\n                                                        columnNumber: 13\n                                                    }, void 0)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/inbox/menuItems/inboxContent/message/Send.js\",\n                                                lineNumber: 52,\n                                                columnNumber: 13\n                                            }, void 0)\n                                        }, void 0, false),\n                                    defaultValue: [\n                                        users[0]\n                                    ]\n                                }, void 0, false, {\n                                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/inbox/menuItems/inboxContent/message/Send.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 9\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/inbox/menuItems/inboxContent/message/Send.js\",\n                                lineNumber: 45,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/inbox/menuItems/inboxContent/message/Send.js\",\n                        lineNumber: 32,\n                        columnNumber: 8\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/inbox/menuItems/inboxContent/message/Send.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Divider_Grid_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    sx: {\n                        mt: 1\n                    }\n                }, void 0, false, {\n                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/inbox/menuItems/inboxContent/message/Send.js\",\n                    lineNumber: 67,\n                    columnNumber: 8\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Divider_Grid_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    item: true,\n                    sx: {\n                        mt: 1\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AutoCompleteAdvanced__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/inbox/menuItems/inboxContent/message/Send.js\",\n                        lineNumber: 69,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/inbox/menuItems/inboxContent/message/Send.js\",\n                    lineNumber: 68,\n                    columnNumber: 8\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Divider_Grid_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    item: true,\n                    sx: {\n                        mt: 1\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy_Input__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        placeholder: \"Subject\",\n                        variant: \"plain\"\n                    }, void 0, false, {\n                        fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/inbox/menuItems/inboxContent/message/Send.js\",\n                        lineNumber: 74,\n                        columnNumber: 8\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/inbox/menuItems/inboxContent/message/Send.js\",\n                    lineNumber: 73,\n                    columnNumber: 8\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Divider_Grid_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    sx: {\n                        mt: 1\n                    }\n                }, void 0, false, {\n                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/inbox/menuItems/inboxContent/message/Send.js\",\n                    lineNumber: 76,\n                    columnNumber: 8\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_e_commerce_TextArea__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    showFileIcon: true\n                }, void 0, false, {\n                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/inbox/menuItems/inboxContent/message/Send.js\",\n                    lineNumber: 78,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/inbox/menuItems/inboxContent/message/Send.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Send, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function() {\n    return [\n        useStyles\n    ];\n});\n_c = Send;\nconst useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_10__[\"default\"])({\n    users: {\n        display: \"flex\"\n    }\n});\nvar _c;\n$RefreshReg$(_c, \"Send\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2UtY29tbWVyY2UvZWRpdC1wcm9kdWN0L2luYm94L21lbnVJdGVtcy9pbmJveENvbnRlbnQvbWVzc2FnZS9TZW5kLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRTtBQUNKO0FBQ2pCO0FBQ3NCO0FBQ3BDO0FBQ0M7QUFDc0I7QUFDaEI7QUFFekMsTUFBTVUsUUFBUTtJQUNaO1FBQUVDLE1BQU07UUFBYUMscUJBQU8sOERBQUNSLGdEQUFNQTs7Ozs7SUFBSTtJQUN2QztRQUFFTyxNQUFNO1FBQWNDLHFCQUFPLDhEQUFDUixnREFBTUE7Ozs7O0lBQUk7SUFDeEM7UUFBRU8sTUFBTTtRQUFhQyxxQkFBTyw4REFBQ1IsZ0RBQU1BOzs7OztJQUFHO0lBQ3RDO1FBQUVPLE1BQU07UUFBYUMscUJBQU8sOERBQUNSLGdEQUFNQTs7Ozs7SUFBRztJQUN0QztRQUFFTyxNQUFNO1FBQWVDLHFCQUFPLDhEQUFDUixnREFBTUE7Ozs7O0lBQUc7SUFDeEM7UUFBRU8sTUFBTTtRQUFhQyxxQkFBTyw4REFBQ1IsZ0RBQU1BOzs7OztJQUFHO0lBQ3RDO1FBQUVPLE1BQU07UUFBY0MscUJBQU8sOERBQUNSLGdEQUFNQTs7Ozs7SUFBRztJQUN2QztRQUFFTyxNQUFNO1FBQW1CQyxxQkFBTyw4REFBQ1IsZ0RBQU1BOzs7OztJQUFHO0NBQzdDO0FBRUQsTUFBTVMsVUFBVTtJQUNkO1FBQ0UsWUFBWTtJQUNkO0NBQ0Q7QUFDTSxNQUFNQyxPQUFPOztJQUNsQixNQUFNQyxVQUFVQztJQUNoQixxQkFDRTtrQkFDRSw0RUFBQ2QsbUVBQUlBOzs4QkFDSCw4REFBQ0ksa0dBQVNBOzhCQUNYLDRFQUFDRSxrR0FBSUE7d0JBQUNTLFNBQVM7d0JBQUdDLFNBQVM7d0JBQUNDLElBQUk7NEJBQUNDLFNBQVE7NEJBQVFDLGdCQUFlOzRCQUFpQkMsWUFBVzs0QkFBVUMsSUFBRzt3QkFBQzs7MENBRXpHLDhEQUFDZixrR0FBSUE7Z0NBQUNnQixJQUFJO2dDQUFDQyxJQUFJOzBDQUNmLDRFQUFDeEIsMEVBQWdCQTtvQ0FDZnlCLE1BQUs7b0NBQ0xQLElBQUk7d0NBQ0ZJLElBQUc7d0NBQ0hJLElBQUc7d0NBQ0hDLFlBQVc7b0NBQ2I7Ozs7Ozs7Ozs7OzBDQUlGLDhEQUFDcEIsa0dBQUlBO2dDQUFDZ0IsSUFBSTtnQ0FBQ0MsSUFBSTswQ0FDZiw0RUFBQ3pCLHdFQUFvQkE7b0NBQ25CNkIsU0FBUztvQ0FDVEMsYUFBYTtvQ0FDYkMsU0FBU3JCO29DQUNUc0IsZ0JBQWdCQyxDQUFBQSx1QkFDZDtzREFDQSw0RUFBQ0M7Z0RBQUlDLFdBQVdwQixRQUFRTCxLQUFLOztrRUFDN0IsOERBQUN3QjtrRUFDRUQsT0FBT3JCLEtBQUs7Ozs7OztrRUFFZiw4REFBQ3dCO2tFQUNFSCxPQUFPdEIsSUFBSTs7Ozs7Ozs7Ozs7OztvQ0FLaEIwQixjQUFjO3dDQUFDM0IsS0FBSyxDQUFDLEVBQUU7cUNBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSzNCLDhEQUFDSCxrR0FBT0E7b0JBQUVZLElBQUk7d0JBQUNJLElBQUc7b0JBQUM7Ozs7Ozs4QkFDbkIsOERBQUNmLGtHQUFJQTtvQkFBQ2dCLElBQUk7b0JBQUNMLElBQUk7d0JBQUNJLElBQUc7b0JBQUM7OEJBQ2YsNEVBQUN2Qix3RUFBb0JBOzs7Ozs7Ozs7OzhCQUkxQiw4REFBQ1Esa0dBQUlBO29CQUFDZ0IsSUFBSTtvQkFBQ0wsSUFBSTt3QkFBQ0ksSUFBRztvQkFBQzs4QkFDcEIsNEVBQUNsQixzREFBS0E7d0JBQUN5QixhQUFZO3dCQUFVUSxTQUFROzs7Ozs7Ozs7Ozs4QkFFckMsOERBQUMvQixrR0FBT0E7b0JBQUVZLElBQUk7d0JBQUNJLElBQUc7b0JBQUM7Ozs7Ozs4QkFFcEIsOERBQUNwQix1RUFBc0JBO29CQUNuQm9DLGNBQWM7Ozs7Ozs7Ozs7Ozs7QUFLeEIsRUFBQztHQTFEWXpCOztRQUNLRTs7O0tBRExGO0FBNEROLE1BQU1FLFlBQVlQLHdEQUFVQSxDQUFDO0lBQ2xDQyxPQUFPO1FBQ0xVLFNBQVM7SUFDWDtBQUNGLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZS1jb21tZXJjZS9lZGl0LXByb2R1Y3QvaW5ib3gvbWVudUl0ZW1zL2luYm94Q29udGVudC9tZXNzYWdlL1NlbmQuanM/MmM4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXV0b0NvbXBsZXRlQWR2YW5jZWQgZnJvbSBcIkAvY29tcG9uZW50cy9BdXRvQ29tcGxldGVBZHZhbmNlZFwiO1xuaW1wb3J0IHsgVHlwb2dyYXBoeUN1c3RvbSB9IGZyb20gXCJAL2NvbXBvbmVudHMvVHlwb2dyYXBoeUN1c3RvbVwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9lLWNvbW1lcmNlL0NhcmRcIjtcbmltcG9ydCBFeGFtcGxlVGV4dGFyZWFDb21tZW50IGZyb20gXCJAL2NvbXBvbmVudHMvZS1jb21tZXJjZS9UZXh0QXJlYVwiO1xuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnQG11aS9qb3knO1xuaW1wb3J0IElucHV0IGZyb20gJ0BtdWkvam95L0lucHV0JztcbmltcG9ydCB7IENvbnRhaW5lciwgRGl2aWRlciwgR3JpZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtdWkvc3R5bGVzXCI7XG5cbmNvbnN0IHVzZXJzID0gW1xuICB7IG5hbWU6IFwiQnJpYW4gQ294XCIsIGltYWdlOiA8QXZhdGFyIC8+IH0sXG4gIHsgbmFtZTogXCJFbW1hIFNtaXRoXCIsIGltYWdlOiA8QXZhdGFyIC8+IH0sXG4gIHsgbmFtZTogXCJNYXggU21pdGhcIiwgaW1hZ2U6IDxBdmF0YXIvPiB9LFxuICB7IG5hbWU6IFwiU2VhbiBCZWFuXCIsIGltYWdlOiA8QXZhdGFyLz4gfSxcbiAgeyBuYW1lOiBcIkpvaG4gTWlsbGVyXCIsIGltYWdlOiA8QXZhdGFyLz4gfSxcbiAgeyBuYW1lOiBcIkFuYSBDcm93blwiLCBpbWFnZTogPEF2YXRhci8+IH0sXG4gIHsgbmFtZTogXCJEYW4gV2lsc29uXCIsIGltYWdlOiA8QXZhdGFyLz4gfSxcbiAgeyBuYW1lOiBcIkZyYW5jaXMgTWl0Y2hhbVwiLCBpbWFnZTogPEF2YXRhci8+IH1cbl07XG5cbmNvbnN0IGhlYWRpbmcgPSBbXG4gIHtcbiAgICBcImhlYWRpbmcxXCI6IFwiXCJcbiAgfVxuXVxuZXhwb3J0IGNvbnN0IFNlbmQgPSAoKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENhcmQ+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgPEdyaWQgc3BhY2luZz17MX0gY29udGFpbmVyIHN4PXt7ZGlzcGxheTonZmxleCcsIGp1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczonY2VudGVyJywgbXQ6MX19PlxuXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PlxuICAgICAgICA8VHlwb2dyYXBoeUN1c3RvbSBcbiAgICAgICAgICB0ZXh0PVwiVE86XCJcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgbXQ6MSxcbiAgICAgICAgICAgIG1sOjEsXG4gICAgICAgICAgICBmb250V2VpZ2h0OjcwMFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgICAgIFxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0+XG4gICAgICAgIDxBdXRvQ29tcGxldGVBZHZhbmNlZFxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIlNlbGVjdCB0byB1c2Vyc1wifSBcbiAgICAgICAgICBvcHRpb25zPXt1c2Vyc30gLy9cbiAgICAgICAgICBnZXRPcHRpb25MYWJlbD17b3B0aW9uID0+IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy51c2Vyc30+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7b3B0aW9uLmltYWdlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAge29wdGlvbi5uYW1lfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfSBcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e1t1c2Vyc1swXV19IFxuICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICA8RGl2aWRlciAgc3g9e3ttdDoxfX0vPlxuICAgICAgIDxHcmlkIGl0ZW0gc3g9e3ttdDoxfX0+XG4gICAgICAgICAgICA8QXV0b0NvbXBsZXRlQWR2YW5jZWQgXG5cbiAgICAgICAgICAgIC8+XG4gICAgICAgPC9HcmlkPlxuICAgICAgIDxHcmlkIGl0ZW0gc3g9e3ttdDoxfX0+XG4gICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiU3ViamVjdFwiIHZhcmlhbnQ9XCJwbGFpblwiIC8+XG4gICAgICAgPC9HcmlkPlxuICAgICAgIDxEaXZpZGVyICBzeD17e210OjF9fS8+XG4gICAgIFxuICAgICAgPEV4YW1wbGVUZXh0YXJlYUNvbW1lbnRcbiAgICAgICAgICBzaG93RmlsZUljb249e3RydWV9XG4gICAgICAvPlxuICAgICAgPC9DYXJkPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgdXNlcnM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCdcbiAgfVxufSkiXSwibmFtZXMiOlsiQXV0b0NvbXBsZXRlQWR2YW5jZWQiLCJUeXBvZ3JhcGh5Q3VzdG9tIiwiQ2FyZCIsIkV4YW1wbGVUZXh0YXJlYUNvbW1lbnQiLCJBdmF0YXIiLCJJbnB1dCIsIkNvbnRhaW5lciIsIkRpdmlkZXIiLCJHcmlkIiwibWFrZVN0eWxlcyIsInVzZXJzIiwibmFtZSIsImltYWdlIiwiaGVhZGluZyIsIlNlbmQiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwic3BhY2luZyIsImNvbnRhaW5lciIsInN4IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm10IiwiaXRlbSIsInhzIiwidGV4dCIsIm1sIiwiZm9udFdlaWdodCIsImZ1bGxXaWR0aCIsInBsYWNlaG9sZGVyIiwib3B0aW9ucyIsImdldE9wdGlvbkxhYmVsIiwib3B0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsImRlZmF1bHRWYWx1ZSIsInZhcmlhbnQiLCJzaG93RmlsZUljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/e-commerce/edit-product/inbox/menuItems/inboxContent/message/Send.js\n"));

/***/ })

});