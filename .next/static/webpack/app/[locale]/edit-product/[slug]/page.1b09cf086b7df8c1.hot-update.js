"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[locale]/edit-product/[slug]/page",{

/***/ "(app-pages-browser)/./src/components/e-commerce/edit-product/tabPanelContent.js":
/*!*******************************************************************!*\
  !*** ./src/components/e-commerce/edit-product/tabPanelContent.js ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TabPanelContent: function() { return /* binding */ TabPanelContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_TextFieldCustom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/TextFieldCustom */ \"(app-pages-browser)/./src/components/TextFieldCustom.js\");\n/* harmony import */ var _components_e_commerce_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/e-commerce/Card */ \"(app-pages-browser)/./src/components/e-commerce/Card.js\");\n/* harmony import */ var _barrel_optimize_names_Container_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Container!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _InputFileUpload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../InputFileUpload */ \"(app-pages-browser)/./src/components/e-commerce/InputFileUpload.js\");\n/* harmony import */ var _TabHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TabHeader */ \"(app-pages-browser)/./src/components/e-commerce/TabHeader.js\");\n/* harmony import */ var _TextArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../TextArea */ \"(app-pages-browser)/./src/components/e-commerce/TextArea.js\");\n/* __next_internal_client_entry_do_not_use__ TabPanelContent auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst TabPanelContent = ()=>{\n    _s();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"199.99\");\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    const [isFormValid, setIsFormValid] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const validateForm = ()=>{\n        let errors = {};\n        if (!value) {\n            errors.value = \"Product base price is required\";\n        }\n        setErrors(errors);\n        setIsFormValid(Object.keys(errors).length === 0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_e_commerce_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {\n                            text: \"General\",\n                            sx: {\n                                mt: 6\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {\n                            level: \"title-md\",\n                            colorText: \" *\",\n                            sx: {\n                                mt: 3\n                            },\n                            headerTextFieldLevel: \"body-sm\",\n                            headerTextField: \"Product Name\",\n                            headerTextFieldFontWeight: \"100\",\n                            sxHeaderTextField: {\n                                fontWeight: 600\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TextFieldCustom__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            label: \"Sample product\"\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {\n                            level: \"body-xs\",\n                            titleTextField: \"A product name is required and recommended to be unique.\",\n                            sxTitleTextField: {\n                                opacity: 0.6\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {\n                            headerTextFieldLevel: \"body-sm\",\n                            headerTextField: \"Description\",\n                            headerTextFieldFontWeight: \"100\",\n                            sxHeaderTextField: {\n                                fontWeight: 600\n                            },\n                            sx: {\n                                mt: 6\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TextArea__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {\n                            level: \"body-xs\",\n                            titleTextField: \"Set a description to the product for better visibility.\",\n                            sxTitleTextField: {\n                                opacity: 0.6\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {\n                            sx: {\n                                mt: 6\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {\n                sx: {\n                    mt: 6\n                }\n            }, void 0, false, {\n                fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_e_commerce_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                maxHeight: 100,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {\n                            text: \"Media\",\n                            sx: {\n                                mt: 6\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputFileUpload__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            sx: {\n                                mt: 3\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {\n                            level: \"body-xs\",\n                            titleTextField: \"Set the product media gallery.\",\n                            sxTitleTextField: {\n                                opacity: 0.6\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {\n                sx: {\n                    mt: 18\n                }\n            }, void 0, false, {\n                fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_e_commerce_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                maxHeight: 100,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {\n                            text: \"Pricing\",\n                            sx: {\n                                mt: 6\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {\n                            level: \"title-md\",\n                            colorText: \" *\",\n                            sx: {\n                                mt: 3\n                            },\n                            headerTextFieldLevel: \"body-sm\",\n                            headerTextField: \"Base Price\",\n                            headerTextFieldFontWeight: \"100\",\n                            sxHeaderTextField: {\n                                fontWeight: 600\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TextFieldCustom__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            placeholder: \"Product Price\",\n                            value: value,\n                            onChange: (event)=>setValue(event.target.value)\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                            lineNumber: 117,\n                            columnNumber: 13\n                        }, undefined),\n                        errors.value && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: errors.value\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                            lineNumber: 122,\n                            columnNumber: 28\n                        }, undefined),\n                        !value && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {\n                            children: \"Price must be a number.\"\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                            lineNumber: 124,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(TabPanelContent, \"MI9wcQYnrOGpEuU5OLixiSGE2x4=\");\n_c = TabPanelContent;\nvar _c;\n$RefreshReg$(_c, \"TabPanelContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2UtY29tbWVyY2UvZWRpdC1wcm9kdWN0L3RhYlBhbmVsQ29udGVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDMEQ7QUFDWDtBQUNOO0FBQ1Q7QUFDZ0I7QUFDUjtBQUNRO0FBQ3pDLE1BQU1PLGtCQUFrQjs7SUFDN0IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ08sUUFBUUMsVUFBVSxHQUFHUiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQ3RDLE1BQU0sQ0FBQ1MsYUFBYUMsZUFBZSxHQUFHViwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNVyxlQUFlO1FBQ25CLElBQUlKLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQ0YsT0FBTztZQUNWRSxPQUFPRixLQUFLLEdBQUU7UUFDaEI7UUFDQUcsVUFBVUQ7UUFDVkcsZUFBZUUsT0FBT0MsSUFBSSxDQUFDTixRQUFRTyxNQUFNLEtBQUs7SUFDaEQ7SUFDQSxxQkFDRTs7MEJBQ0UsOERBQUNoQixtRUFBSUE7MEJBQ0gsNEVBQUNDLHFGQUFTQTs7c0NBR1IsOERBQUNHLGlEQUFTQTs0QkFDUmEsTUFBSzs0QkFDTEMsSUFBSTtnQ0FBRUMsSUFBSTs0QkFBRzs7Ozs7O3NDQUdmLDhEQUFDZixpREFBU0E7NEJBQ1JnQixPQUFNOzRCQUNOQyxXQUFVOzRCQUNWSCxJQUFJO2dDQUFFQyxJQUFJOzRCQUFFOzRCQUVaRyxzQkFBcUI7NEJBQ3JCQyxpQkFBZ0I7NEJBQ2hCQywyQkFBMEI7NEJBQzFCQyxtQkFBbUI7Z0NBQUVDLFlBQVk7NEJBQUk7Ozs7OztzQ0FHdkMsOERBQUMzQixtRUFBZUE7NEJBQ2Q0QixPQUFNOzs7Ozs7c0NBRVIsOERBQUN2QixpREFBU0E7NEJBQ1JnQixPQUFNOzRCQUNOUSxnQkFBZTs0QkFDZkMsa0JBQWtCO2dDQUFFQyxTQUFTOzRCQUFJOzs7Ozs7c0NBR25DLDhEQUFDMUIsaURBQVNBOzRCQUNSa0Isc0JBQXFCOzRCQUNyQkMsaUJBQWdCOzRCQUNoQkMsMkJBQTBCOzRCQUMxQkMsbUJBQW1CO2dDQUFFQyxZQUFZOzRCQUFJOzRCQUNyQ1IsSUFBSTtnQ0FBRUMsSUFBSTs0QkFBRTs7Ozs7O3NDQUdkLDhEQUFDZCxpREFBc0JBOzs7OztzQ0FFdkIsOERBQUNELGlEQUFTQTs0QkFDUmdCLE9BQU07NEJBQ05RLGdCQUFlOzRCQUNmQyxrQkFBa0I7Z0NBQUVDLFNBQVM7NEJBQUs7Ozs7OztzQ0FFcEMsOERBQUMxQixpREFBU0E7NEJBQUNjLElBQUk7Z0NBQUVDLElBQUk7NEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU0zQiw4REFBQ2YsaURBQVNBO2dCQUFDYyxJQUFJO29CQUFFQyxJQUFJO2dCQUFFOzs7Ozs7MEJBSXZCLDhEQUFDbkIsbUVBQUlBO2dCQUFDK0IsV0FBVzswQkFDZiw0RUFBQzlCLHFGQUFTQTs7c0NBQ1IsOERBQUNHLGlEQUFTQTs0QkFDUmEsTUFBSzs0QkFDTEMsSUFBSTtnQ0FBRUMsSUFBSTs0QkFBRTs7Ozs7O3NDQUVkLDhEQUFDaEIsd0RBQWVBOzRCQUFDZSxJQUFJO2dDQUNuQkMsSUFBSTs0QkFFTjs7Ozs7O3NDQUNBLDhEQUFDZixpREFBU0E7NEJBQ1JnQixPQUFNOzRCQUNOUSxnQkFBZTs0QkFDZkMsa0JBQWtCO2dDQUFFQyxTQUFTOzRCQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLdkMsOERBQUMxQixpREFBU0E7Z0JBQUNjLElBQUk7b0JBQUVDLElBQUk7Z0JBQUc7Ozs7OzswQkFJeEIsOERBQUNuQixtRUFBSUE7Z0JBQUMrQixXQUFXOzBCQUNmLDRFQUFDOUIscUZBQVNBOztzQ0FDUiw4REFBQ0csaURBQVNBOzRCQUNSYSxNQUFLOzRCQUNMQyxJQUFJO2dDQUFFQyxJQUFJOzRCQUFFOzs7Ozs7c0NBR2QsOERBQUNmLGlEQUFTQTs0QkFDUmdCLE9BQU07NEJBQ05DLFdBQVU7NEJBQ1ZILElBQUk7Z0NBQUVDLElBQUk7NEJBQUU7NEJBRVpHLHNCQUFxQjs0QkFDckJDLGlCQUFnQjs0QkFDaEJDLDJCQUEwQjs0QkFDMUJDLG1CQUFtQjtnQ0FBRUMsWUFBWTs0QkFBSTs7Ozs7O3NDQUdyQyw4REFBQzNCLG1FQUFlQTs0QkFDaEJpQyxhQUFZOzRCQUNaekIsT0FBT0E7NEJBQ1AwQixVQUFZLENBQUNDLFFBQVUxQixTQUFTMEIsTUFBTUMsTUFBTSxDQUFDNUIsS0FBSzs7Ozs7O3dCQUVuREUsT0FBT0YsS0FBSyxrQkFBSSw4REFBQzZCO3NDQUFHM0IsT0FBT0YsS0FBSzs7Ozs7O3dCQUMvQixDQUFDQSx1QkFDRCw4REFBQ0gsaURBQVNBO3NDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhCLEVBQUM7R0F6SFlFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2UtY29tbWVyY2UvZWRpdC1wcm9kdWN0L3RhYlBhbmVsQ29udGVudC5qcz85OTc4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFRleHRGaWVsZEN1c3RvbSBmcm9tIFwiQC9jb21wb25lbnRzL1RleHRGaWVsZEN1c3RvbVwiXG5pbXBvcnQgQ2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL2UtY29tbWVyY2UvQ2FyZFwiXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgSW5wdXRGaWxlVXBsb2FkIGZyb20gXCIuLi9JbnB1dEZpbGVVcGxvYWRcIlxuaW1wb3J0IHsgVGFiSGVhZGVyIH0gZnJvbSBcIi4uL1RhYkhlYWRlclwiXG5pbXBvcnQgRXhhbXBsZVRleHRhcmVhQ29tbWVudCBmcm9tIFwiLi4vVGV4dEFyZWFcIlxuZXhwb3J0IGNvbnN0IFRhYlBhbmVsQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIjE5OS45OVwiKVxuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbaXNGb3JtVmFsaWQsIHNldElzRm9ybVZhbGlkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdmFsaWRhdGVGb3JtID0gKCkgPT4ge1xuICAgIGxldCBlcnJvcnMgPSB7fVxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIGVycm9ycy52YWx1ZT0gXCJQcm9kdWN0IGJhc2UgcHJpY2UgaXMgcmVxdWlyZWRcIlxuICAgIH1cbiAgICBzZXRFcnJvcnMoZXJyb3JzKTtcbiAgICBzZXRJc0Zvcm1WYWxpZChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0gMCk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENhcmQ+XG4gICAgICAgIDxDb250YWluZXIgPlxuXG4gICAgICAgICAgey8qIEdFTkVSQUwgKi99XG4gICAgICAgICAgPFRhYkhlYWRlclxuICAgICAgICAgICAgdGV4dD1cIkdlbmVyYWxcIlxuICAgICAgICAgICAgc3g9e3sgbXQ6IDYsIH19XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxUYWJIZWFkZXJcbiAgICAgICAgICAgIGxldmVsPVwidGl0bGUtbWRcIlxuICAgICAgICAgICAgY29sb3JUZXh0PVwiICpcIlxuICAgICAgICAgICAgc3g9e3sgbXQ6IDMgfX1cblxuICAgICAgICAgICAgaGVhZGVyVGV4dEZpZWxkTGV2ZWw9XCJib2R5LXNtXCJcbiAgICAgICAgICAgIGhlYWRlclRleHRGaWVsZD1cIlByb2R1Y3QgTmFtZVwiXG4gICAgICAgICAgICBoZWFkZXJUZXh0RmllbGRGb250V2VpZ2h0PVwiMTAwXCJcbiAgICAgICAgICAgIHN4SGVhZGVyVGV4dEZpZWxkPXt7IGZvbnRXZWlnaHQ6IDYwMCB9fVxuXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VGV4dEZpZWxkQ3VzdG9tXG4gICAgICAgICAgICBsYWJlbD1cIlNhbXBsZSBwcm9kdWN0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUYWJIZWFkZXJcbiAgICAgICAgICAgIGxldmVsPVwiYm9keS14c1wiXG4gICAgICAgICAgICB0aXRsZVRleHRGaWVsZD1cIkEgcHJvZHVjdCBuYW1lIGlzIHJlcXVpcmVkIGFuZCByZWNvbW1lbmRlZCB0byBiZSB1bmlxdWUuXCJcbiAgICAgICAgICAgIHN4VGl0bGVUZXh0RmllbGQ9e3sgb3BhY2l0eTogMC42IH19XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxUYWJIZWFkZXJcbiAgICAgICAgICAgIGhlYWRlclRleHRGaWVsZExldmVsPVwiYm9keS1zbVwiXG4gICAgICAgICAgICBoZWFkZXJUZXh0RmllbGQ9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICBoZWFkZXJUZXh0RmllbGRGb250V2VpZ2h0PVwiMTAwXCJcbiAgICAgICAgICAgIHN4SGVhZGVyVGV4dEZpZWxkPXt7IGZvbnRXZWlnaHQ6IDYwMCB9fVxuICAgICAgICAgICAgc3g9e3sgbXQ6IDYgfX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPEV4YW1wbGVUZXh0YXJlYUNvbW1lbnQgLz5cblxuICAgICAgICAgIDxUYWJIZWFkZXJcbiAgICAgICAgICAgIGxldmVsPVwiYm9keS14c1wiXG4gICAgICAgICAgICB0aXRsZVRleHRGaWVsZD1cIlNldCBhIGRlc2NyaXB0aW9uIHRvIHRoZSBwcm9kdWN0IGZvciBiZXR0ZXIgdmlzaWJpbGl0eS5cIlxuICAgICAgICAgICAgc3hUaXRsZVRleHRGaWVsZD17eyBvcGFjaXR5OiAwLjYsIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VGFiSGVhZGVyIHN4PXt7IG10OiA2IH19IC8+XG5cblxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQ2FyZD5cblxuICAgICAgPFRhYkhlYWRlciBzeD17eyBtdDogNiB9fSAvPlxuXG5cbiAgICAgIHsvKiBNRURJQSAgKi99XG4gICAgICA8Q2FyZCBtYXhIZWlnaHQ9ezEwMH0gPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxUYWJIZWFkZXJcbiAgICAgICAgICAgIHRleHQ9XCJNZWRpYVwiXG4gICAgICAgICAgICBzeD17eyBtdDogNiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPElucHV0RmlsZVVwbG9hZCBzeD17e1xuICAgICAgICAgICAgbXQ6IDMsXG5cbiAgICAgICAgICB9fSAvPlxuICAgICAgICAgIDxUYWJIZWFkZXJcbiAgICAgICAgICAgIGxldmVsPVwiYm9keS14c1wiXG4gICAgICAgICAgICB0aXRsZVRleHRGaWVsZD1cIlNldCB0aGUgcHJvZHVjdCBtZWRpYSBnYWxsZXJ5LlwiXG4gICAgICAgICAgICBzeFRpdGxlVGV4dEZpZWxkPXt7IG9wYWNpdHk6IDAuNiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9DYXJkPlxuXG4gICAgICA8VGFiSGVhZGVyIHN4PXt7IG10OiAxOCB9fSAvPlxuXG5cbiAgICAgIHsvKiBQUklDSU5HICAqL31cbiAgICAgIDxDYXJkIG1heEhlaWdodD17MTAwfSA+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPFRhYkhlYWRlclxuICAgICAgICAgICAgdGV4dD1cIlByaWNpbmdcIlxuICAgICAgICAgICAgc3g9e3sgbXQ6IDYgfX1cbiAgICAgICAgICAvPlxuICAgICAgXG4gICAgICAgICAgPFRhYkhlYWRlclxuICAgICAgICAgICAgbGV2ZWw9XCJ0aXRsZS1tZFwiXG4gICAgICAgICAgICBjb2xvclRleHQ9XCIgKlwiXG4gICAgICAgICAgICBzeD17eyBtdDogMyB9fVxuXG4gICAgICAgICAgICBoZWFkZXJUZXh0RmllbGRMZXZlbD1cImJvZHktc21cIlxuICAgICAgICAgICAgaGVhZGVyVGV4dEZpZWxkPVwiQmFzZSBQcmljZVwiXG4gICAgICAgICAgICBoZWFkZXJUZXh0RmllbGRGb250V2VpZ2h0PVwiMTAwXCJcbiAgICAgICAgICAgIHN4SGVhZGVyVGV4dEZpZWxkPXt7IGZvbnRXZWlnaHQ6IDYwMCB9fVxuXG4gICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGRDdXN0b21cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJvZHVjdCBQcmljZVwiXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZSA9IHsoZXZlbnQpID0+IHNldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7ZXJyb3JzLnZhbHVlICYmIDxwPntlcnJvcnMudmFsdWV9PC9wPn0gXG4gICAgICAgICAgeyAhdmFsdWUgJiYgKFxuICAgICAgICAgICAgPFRhYkhlYWRlciA+UHJpY2UgbXVzdCBiZSBhIG51bWJlci48L1RhYkhlYWRlcj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQ2FyZD5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlRleHRGaWVsZEN1c3RvbSIsIkNhcmQiLCJDb250YWluZXIiLCJ1c2VTdGF0ZSIsIklucHV0RmlsZVVwbG9hZCIsIlRhYkhlYWRlciIsIkV4YW1wbGVUZXh0YXJlYUNvbW1lbnQiLCJUYWJQYW5lbENvbnRlbnQiLCJ2YWx1ZSIsInNldFZhbHVlIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwiaXNGb3JtVmFsaWQiLCJzZXRJc0Zvcm1WYWxpZCIsInZhbGlkYXRlRm9ybSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJ0ZXh0Iiwic3giLCJtdCIsImxldmVsIiwiY29sb3JUZXh0IiwiaGVhZGVyVGV4dEZpZWxkTGV2ZWwiLCJoZWFkZXJUZXh0RmllbGQiLCJoZWFkZXJUZXh0RmllbGRGb250V2VpZ2h0Iiwic3hIZWFkZXJUZXh0RmllbGQiLCJmb250V2VpZ2h0IiwibGFiZWwiLCJ0aXRsZVRleHRGaWVsZCIsInN4VGl0bGVUZXh0RmllbGQiLCJvcGFjaXR5IiwibWF4SGVpZ2h0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/e-commerce/edit-product/tabPanelContent.js\n"));

/***/ })

});