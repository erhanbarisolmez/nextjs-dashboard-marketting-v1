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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TabPanelContent: function() { return /* binding */ TabPanelContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_TextFieldCustom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/TextFieldCustom */ \"(app-pages-browser)/./src/components/TextFieldCustom.js\");\n/* harmony import */ var _components_e_commerce_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/e-commerce/Card */ \"(app-pages-browser)/./src/components/e-commerce/Card.js\");\n/* harmony import */ var _barrel_optimize_names_Container_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Container!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _InputFileUpload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../InputFileUpload */ \"(app-pages-browser)/./src/components/e-commerce/InputFileUpload.js\");\n/* harmony import */ var _TabHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TabHeader */ \"(app-pages-browser)/./src/components/e-commerce/TabHeader.js\");\n/* harmony import */ var _TextArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../TextArea */ \"(app-pages-browser)/./src/components/e-commerce/TextArea.js\");\n/* __next_internal_client_entry_do_not_use__ TabPanelContent auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst TabPanelContent = ()=>{\n    _s();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"199.99\");\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    const [isFormValid, setIsFormValid] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        validateForm();\n    }, [\n        name,\n        email,\n        password\n    ]);\n    const validateForm = ()=>{\n        let errors = {};\n        if (!value) {\n            errors.value = \"Product base price is required\";\n        }\n        setErrors(errors);\n        setIsFormValid(Object.keys(errors).length === 0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_e_commerce_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {\n                            text: \"General\",\n                            sx: {\n                                mt: 6\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {\n                            level: \"title-md\",\n                            colorText: \" *\",\n                            sx: {\n                                mt: 3\n                            },\n                            headerTextFieldLevel: \"body-sm\",\n                            headerTextField: \"Product Name\",\n                            headerTextFieldFontWeight: \"100\",\n                            sxHeaderTextField: {\n                                fontWeight: 600\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TextFieldCustom__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            label: \"Sample product\"\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {\n                            level: \"body-xs\",\n                            titleTextField: \"A product name is required and recommended to be unique.\",\n                            sxTitleTextField: {\n                                opacity: 0.6\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {\n                            headerTextFieldLevel: \"body-sm\",\n                            headerTextField: \"Description\",\n                            headerTextFieldFontWeight: \"100\",\n                            sxHeaderTextField: {\n                                fontWeight: 600\n                            },\n                            sx: {\n                                mt: 6\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TextArea__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {\n                            level: \"body-xs\",\n                            titleTextField: \"Set a description to the product for better visibility.\",\n                            sxTitleTextField: {\n                                opacity: 0.6\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {\n                            sx: {\n                                mt: 6\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {\n                sx: {\n                    mt: 6\n                }\n            }, void 0, false, {\n                fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_e_commerce_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                maxHeight: 100,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {\n                            text: \"Media\",\n                            sx: {\n                                mt: 6\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputFileUpload__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            sx: {\n                                mt: 3\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {\n                            level: \"body-xs\",\n                            titleTextField: \"Set the product media gallery.\",\n                            sxTitleTextField: {\n                                opacity: 0.6\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {\n                sx: {\n                    mt: 18\n                }\n            }, void 0, false, {\n                fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_e_commerce_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                maxHeight: 100,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {\n                            text: \"Pricing\",\n                            sx: {\n                                mt: 6\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {\n                            level: \"title-md\",\n                            colorText: \" *\",\n                            sx: {\n                                mt: 3\n                            },\n                            headerTextFieldLevel: \"body-sm\",\n                            headerTextField: \"Base Price\",\n                            headerTextFieldFontWeight: \"100\",\n                            sxHeaderTextField: {\n                                fontWeight: 600\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TextFieldCustom__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            placeholder: \"Product Price\",\n                            value: value,\n                            onChange: (event)=>setValue(event.target.value)\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                            lineNumber: 121,\n                            columnNumber: 13\n                        }, undefined),\n                        errors.value && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: errors.value\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                            lineNumber: 126,\n                            columnNumber: 28\n                        }, undefined),\n                        !value && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabHeader__WEBPACK_IMPORTED_MODULE_5__.TabHeader, {\n                            children: \"Price must be a number.\"\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                            lineNumber: 128,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/edit-product/tabPanelContent.js\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(TabPanelContent, \"r7o3SMDBoGOXutQATFCR4hM7rb4=\");\n_c = TabPanelContent;\nvar _c;\n$RefreshReg$(_c, \"TabPanelContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2UtY29tbWVyY2UvZWRpdC1wcm9kdWN0L3RhYlBhbmVsQ29udGVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDMEQ7QUFDWDtBQUNOO0FBQ0U7QUFDSztBQUNSO0FBQ1E7QUFDekMsTUFBTVEsa0JBQWtCOztJQUM3QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQSxDQUFDLENBQUM7SUFDdEMsTUFBTSxDQUFDUyxhQUFhQyxlQUFlLEdBQUdWLCtDQUFRQSxDQUFDO0lBRS9DRCxnREFBU0EsQ0FBQztRQUNSWTtJQUNKLEdBQUc7UUFBQ0M7UUFBTUM7UUFBT0M7S0FBUztJQUN4QixNQUFNSCxlQUFlO1FBQ25CLElBQUlKLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQ0YsT0FBTztZQUNWRSxPQUFPRixLQUFLLEdBQUU7UUFDaEI7UUFDQUcsVUFBVUQ7UUFDVkcsZUFBZUssT0FBT0MsSUFBSSxDQUFDVCxRQUFRVSxNQUFNLEtBQUs7SUFDaEQ7SUFDQSxxQkFDRTs7MEJBQ0UsOERBQUNwQixtRUFBSUE7MEJBQ0gsNEVBQUNDLHFGQUFTQTs7c0NBR1IsOERBQUNJLGlEQUFTQTs0QkFDUmdCLE1BQUs7NEJBQ0xDLElBQUk7Z0NBQUVDLElBQUk7NEJBQUc7Ozs7OztzQ0FHZiw4REFBQ2xCLGlEQUFTQTs0QkFDUm1CLE9BQU07NEJBQ05DLFdBQVU7NEJBQ1ZILElBQUk7Z0NBQUVDLElBQUk7NEJBQUU7NEJBRVpHLHNCQUFxQjs0QkFDckJDLGlCQUFnQjs0QkFDaEJDLDJCQUEwQjs0QkFDMUJDLG1CQUFtQjtnQ0FBRUMsWUFBWTs0QkFBSTs7Ozs7O3NDQUd2Qyw4REFBQy9CLG1FQUFlQTs0QkFDZGdDLE9BQU07Ozs7OztzQ0FFUiw4REFBQzFCLGlEQUFTQTs0QkFDUm1CLE9BQU07NEJBQ05RLGdCQUFlOzRCQUNmQyxrQkFBa0I7Z0NBQUVDLFNBQVM7NEJBQUk7Ozs7OztzQ0FHbkMsOERBQUM3QixpREFBU0E7NEJBQ1JxQixzQkFBcUI7NEJBQ3JCQyxpQkFBZ0I7NEJBQ2hCQywyQkFBMEI7NEJBQzFCQyxtQkFBbUI7Z0NBQUVDLFlBQVk7NEJBQUk7NEJBQ3JDUixJQUFJO2dDQUFFQyxJQUFJOzRCQUFFOzs7Ozs7c0NBR2QsOERBQUNqQixpREFBc0JBOzs7OztzQ0FFdkIsOERBQUNELGlEQUFTQTs0QkFDUm1CLE9BQU07NEJBQ05RLGdCQUFlOzRCQUNmQyxrQkFBa0I7Z0NBQUVDLFNBQVM7NEJBQUs7Ozs7OztzQ0FFcEMsOERBQUM3QixpREFBU0E7NEJBQUNpQixJQUFJO2dDQUFFQyxJQUFJOzRCQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFNM0IsOERBQUNsQixpREFBU0E7Z0JBQUNpQixJQUFJO29CQUFFQyxJQUFJO2dCQUFFOzs7Ozs7MEJBSXZCLDhEQUFDdkIsbUVBQUlBO2dCQUFDbUMsV0FBVzswQkFDZiw0RUFBQ2xDLHFGQUFTQTs7c0NBQ1IsOERBQUNJLGlEQUFTQTs0QkFDUmdCLE1BQUs7NEJBQ0xDLElBQUk7Z0NBQUVDLElBQUk7NEJBQUU7Ozs7OztzQ0FFZCw4REFBQ25CLHdEQUFlQTs0QkFBQ2tCLElBQUk7Z0NBQ25CQyxJQUFJOzRCQUVOOzs7Ozs7c0NBQ0EsOERBQUNsQixpREFBU0E7NEJBQ1JtQixPQUFNOzRCQUNOUSxnQkFBZTs0QkFDZkMsa0JBQWtCO2dDQUFFQyxTQUFTOzRCQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLdkMsOERBQUM3QixpREFBU0E7Z0JBQUNpQixJQUFJO29CQUFFQyxJQUFJO2dCQUFHOzs7Ozs7MEJBSXhCLDhEQUFDdkIsbUVBQUlBO2dCQUFDbUMsV0FBVzswQkFDZiw0RUFBQ2xDLHFGQUFTQTs7c0NBQ1IsOERBQUNJLGlEQUFTQTs0QkFDUmdCLE1BQUs7NEJBQ0xDLElBQUk7Z0NBQUVDLElBQUk7NEJBQUU7Ozs7OztzQ0FHZCw4REFBQ2xCLGlEQUFTQTs0QkFDUm1CLE9BQU07NEJBQ05DLFdBQVU7NEJBQ1ZILElBQUk7Z0NBQUVDLElBQUk7NEJBQUU7NEJBRVpHLHNCQUFxQjs0QkFDckJDLGlCQUFnQjs0QkFDaEJDLDJCQUEwQjs0QkFDMUJDLG1CQUFtQjtnQ0FBRUMsWUFBWTs0QkFBSTs7Ozs7O3NDQUdyQyw4REFBQy9CLG1FQUFlQTs0QkFDaEJxQyxhQUFZOzRCQUNaNUIsT0FBT0E7NEJBQ1A2QixVQUFZLENBQUNDLFFBQVU3QixTQUFTNkIsTUFBTUMsTUFBTSxDQUFDL0IsS0FBSzs7Ozs7O3dCQUVuREUsT0FBT0YsS0FBSyxrQkFBSSw4REFBQ2dDO3NDQUFHOUIsT0FBT0YsS0FBSzs7Ozs7O3dCQUMvQixDQUFDQSx1QkFDRCw4REFBQ0gsaURBQVNBO3NDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhCLEVBQUM7R0E3SFlFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2UtY29tbWVyY2UvZWRpdC1wcm9kdWN0L3RhYlBhbmVsQ29udGVudC5qcz85OTc4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFRleHRGaWVsZEN1c3RvbSBmcm9tIFwiQC9jb21wb25lbnRzL1RleHRGaWVsZEN1c3RvbVwiXG5pbXBvcnQgQ2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL2UtY29tbWVyY2UvQ2FyZFwiXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBJbnB1dEZpbGVVcGxvYWQgZnJvbSBcIi4uL0lucHV0RmlsZVVwbG9hZFwiXG5pbXBvcnQgeyBUYWJIZWFkZXIgfSBmcm9tIFwiLi4vVGFiSGVhZGVyXCJcbmltcG9ydCBFeGFtcGxlVGV4dGFyZWFDb21tZW50IGZyb20gXCIuLi9UZXh0QXJlYVwiXG5leHBvcnQgY29uc3QgVGFiUGFuZWxDb250ZW50ID0gKCkgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiMTk5Ljk5XCIpXG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtpc0Zvcm1WYWxpZCwgc2V0SXNGb3JtVmFsaWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuIFxuICB1c2VFZmZlY3QoKCkgPT4geyBcbiAgICB2YWxpZGF0ZUZvcm0oKTsgXG59LCBbbmFtZSwgZW1haWwsIHBhc3N3b3JkXSk7IFxuICBjb25zdCB2YWxpZGF0ZUZvcm0gPSAoKSA9PiB7XG4gICAgbGV0IGVycm9ycyA9IHt9XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgZXJyb3JzLnZhbHVlPSBcIlByb2R1Y3QgYmFzZSBwcmljZSBpcyByZXF1aXJlZFwiXG4gICAgfVxuICAgIHNldEVycm9ycyhlcnJvcnMpO1xuICAgIHNldElzRm9ybVZhbGlkKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID09PSAwKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q2FyZD5cbiAgICAgICAgPENvbnRhaW5lciA+XG5cbiAgICAgICAgICB7LyogR0VORVJBTCAqL31cbiAgICAgICAgICA8VGFiSGVhZGVyXG4gICAgICAgICAgICB0ZXh0PVwiR2VuZXJhbFwiXG4gICAgICAgICAgICBzeD17eyBtdDogNiwgfX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPFRhYkhlYWRlclxuICAgICAgICAgICAgbGV2ZWw9XCJ0aXRsZS1tZFwiXG4gICAgICAgICAgICBjb2xvclRleHQ9XCIgKlwiXG4gICAgICAgICAgICBzeD17eyBtdDogMyB9fVxuXG4gICAgICAgICAgICBoZWFkZXJUZXh0RmllbGRMZXZlbD1cImJvZHktc21cIlxuICAgICAgICAgICAgaGVhZGVyVGV4dEZpZWxkPVwiUHJvZHVjdCBOYW1lXCJcbiAgICAgICAgICAgIGhlYWRlclRleHRGaWVsZEZvbnRXZWlnaHQ9XCIxMDBcIlxuICAgICAgICAgICAgc3hIZWFkZXJUZXh0RmllbGQ9e3sgZm9udFdlaWdodDogNjAwIH19XG5cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUZXh0RmllbGRDdXN0b21cbiAgICAgICAgICAgIGxhYmVsPVwiU2FtcGxlIHByb2R1Y3RcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFRhYkhlYWRlclxuICAgICAgICAgICAgbGV2ZWw9XCJib2R5LXhzXCJcbiAgICAgICAgICAgIHRpdGxlVGV4dEZpZWxkPVwiQSBwcm9kdWN0IG5hbWUgaXMgcmVxdWlyZWQgYW5kIHJlY29tbWVuZGVkIHRvIGJlIHVuaXF1ZS5cIlxuICAgICAgICAgICAgc3hUaXRsZVRleHRGaWVsZD17eyBvcGFjaXR5OiAwLjYgfX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPFRhYkhlYWRlclxuICAgICAgICAgICAgaGVhZGVyVGV4dEZpZWxkTGV2ZWw9XCJib2R5LXNtXCJcbiAgICAgICAgICAgIGhlYWRlclRleHRGaWVsZD1cIkRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGhlYWRlclRleHRGaWVsZEZvbnRXZWlnaHQ9XCIxMDBcIlxuICAgICAgICAgICAgc3hIZWFkZXJUZXh0RmllbGQ9e3sgZm9udFdlaWdodDogNjAwIH19XG4gICAgICAgICAgICBzeD17eyBtdDogNiB9fVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8RXhhbXBsZVRleHRhcmVhQ29tbWVudCAvPlxuXG4gICAgICAgICAgPFRhYkhlYWRlclxuICAgICAgICAgICAgbGV2ZWw9XCJib2R5LXhzXCJcbiAgICAgICAgICAgIHRpdGxlVGV4dEZpZWxkPVwiU2V0IGEgZGVzY3JpcHRpb24gdG8gdGhlIHByb2R1Y3QgZm9yIGJldHRlciB2aXNpYmlsaXR5LlwiXG4gICAgICAgICAgICBzeFRpdGxlVGV4dEZpZWxkPXt7IG9wYWNpdHk6IDAuNiwgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUYWJIZWFkZXIgc3g9e3sgbXQ6IDYgfX0gLz5cblxuXG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9DYXJkPlxuXG4gICAgICA8VGFiSGVhZGVyIHN4PXt7IG10OiA2IH19IC8+XG5cblxuICAgICAgey8qIE1FRElBICAqL31cbiAgICAgIDxDYXJkIG1heEhlaWdodD17MTAwfSA+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPFRhYkhlYWRlclxuICAgICAgICAgICAgdGV4dD1cIk1lZGlhXCJcbiAgICAgICAgICAgIHN4PXt7IG10OiA2IH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8SW5wdXRGaWxlVXBsb2FkIHN4PXt7XG4gICAgICAgICAgICBtdDogMyxcblxuICAgICAgICAgIH19IC8+XG4gICAgICAgICAgPFRhYkhlYWRlclxuICAgICAgICAgICAgbGV2ZWw9XCJib2R5LXhzXCJcbiAgICAgICAgICAgIHRpdGxlVGV4dEZpZWxkPVwiU2V0IHRoZSBwcm9kdWN0IG1lZGlhIGdhbGxlcnkuXCJcbiAgICAgICAgICAgIHN4VGl0bGVUZXh0RmllbGQ9e3sgb3BhY2l0eTogMC42IH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0NhcmQ+XG5cbiAgICAgIDxUYWJIZWFkZXIgc3g9e3sgbXQ6IDE4IH19IC8+XG5cblxuICAgICAgey8qIFBSSUNJTkcgICovfVxuICAgICAgPENhcmQgbWF4SGVpZ2h0PXsxMDB9ID5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8VGFiSGVhZGVyXG4gICAgICAgICAgICB0ZXh0PVwiUHJpY2luZ1wiXG4gICAgICAgICAgICBzeD17eyBtdDogNiB9fVxuICAgICAgICAgIC8+XG4gICAgICBcbiAgICAgICAgICA8VGFiSGVhZGVyXG4gICAgICAgICAgICBsZXZlbD1cInRpdGxlLW1kXCJcbiAgICAgICAgICAgIGNvbG9yVGV4dD1cIiAqXCJcbiAgICAgICAgICAgIHN4PXt7IG10OiAzIH19XG5cbiAgICAgICAgICAgIGhlYWRlclRleHRGaWVsZExldmVsPVwiYm9keS1zbVwiXG4gICAgICAgICAgICBoZWFkZXJUZXh0RmllbGQ9XCJCYXNlIFByaWNlXCJcbiAgICAgICAgICAgIGhlYWRlclRleHRGaWVsZEZvbnRXZWlnaHQ9XCIxMDBcIlxuICAgICAgICAgICAgc3hIZWFkZXJUZXh0RmllbGQ9e3sgZm9udFdlaWdodDogNjAwIH19XG5cbiAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZEN1c3RvbVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcm9kdWN0IFByaWNlXCJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlID0geyhldmVudCkgPT4gc2V0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtlcnJvcnMudmFsdWUgJiYgPHA+e2Vycm9ycy52YWx1ZX08L3A+fSBcbiAgICAgICAgICB7ICF2YWx1ZSAmJiAoXG4gICAgICAgICAgICA8VGFiSGVhZGVyID5QcmljZSBtdXN0IGJlIGEgbnVtYmVyLjwvVGFiSGVhZGVyPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9DYXJkPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiVGV4dEZpZWxkQ3VzdG9tIiwiQ2FyZCIsIkNvbnRhaW5lciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW5wdXRGaWxlVXBsb2FkIiwiVGFiSGVhZGVyIiwiRXhhbXBsZVRleHRhcmVhQ29tbWVudCIsIlRhYlBhbmVsQ29udGVudCIsInZhbHVlIiwic2V0VmFsdWUiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJpc0Zvcm1WYWxpZCIsInNldElzRm9ybVZhbGlkIiwidmFsaWRhdGVGb3JtIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidGV4dCIsInN4IiwibXQiLCJsZXZlbCIsImNvbG9yVGV4dCIsImhlYWRlclRleHRGaWVsZExldmVsIiwiaGVhZGVyVGV4dEZpZWxkIiwiaGVhZGVyVGV4dEZpZWxkRm9udFdlaWdodCIsInN4SGVhZGVyVGV4dEZpZWxkIiwiZm9udFdlaWdodCIsImxhYmVsIiwidGl0bGVUZXh0RmllbGQiLCJzeFRpdGxlVGV4dEZpZWxkIiwib3BhY2l0eSIsIm1heEhlaWdodCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/e-commerce/edit-product/tabPanelContent.js\n"));

/***/ })

});