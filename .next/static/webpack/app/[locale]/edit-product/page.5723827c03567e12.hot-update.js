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

/***/ "(app-pages-browser)/./src/components/AutoCompleteCustom.js":
/*!**********************************************!*\
  !*** ./src/components/AutoCompleteCustom.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AutoCompleteCustom; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Autocomplete_TextField_mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=Autocomplete,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Autocomplete/Autocomplete.js\");\n/* harmony import */ var _barrel_optimize_names_Autocomplete_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Autocomplete,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nfunction AutoCompleteCustom(props) {\n    const { options, sx, label, value, onChange, rows, ...otherProps } = props;\n    const handleChange = (event, selectedValue, selectedRowId)=>{\n        // Find the corresponding row object based on the selected value\n        // Call the parent component's onChange handler with the selected value and row object\n        onChange(selectedValue, selectedRowId);\n        console.log(\"selected value: \", selectedValue);\n        console.log(\"selected row: \", selectedRowId);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Autocomplete_TextField_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        disablePortal: true,\n        id: \"combo-box-demo\",\n        options: options,\n        value: value,\n        onChange: handleChange,\n        sx: sx,\n        ...otherProps,\n        renderInput: (params)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Autocomplete_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                ...params,\n                label: label\n            }, void 0, false, {\n                fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/AutoCompleteCustom.js\",\n                lineNumber: 25,\n                columnNumber: 32\n            }, void 0)\n    }, void 0, false, {\n        fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/AutoCompleteCustom.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_c = AutoCompleteCustom;\nvar _c;\n$RefreshReg$(_c, \"AutoCompleteCustom\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0F1dG9Db21wbGV0ZUN1c3RvbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUN3RDtBQUV6QyxTQUFTRSxtQkFBbUJDLEtBQUs7SUFDOUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLEVBQUUsRUFBQ0MsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBQ0MsSUFBSSxFQUFFLEdBQUdDLFlBQVcsR0FBR1A7SUFFbEUsTUFBTVEsZUFBZSxDQUFDQyxPQUFPQyxlQUFlQztRQUMxQyxnRUFBZ0U7UUFFaEUsc0ZBQXNGO1FBQ3RGTixTQUFTSyxlQUFlQztRQUN4QkMsUUFBUUMsR0FBRyxDQUFDLG9CQUFxQkg7UUFDakNFLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JGO0lBQ2hDO0lBRUEscUJBQ0UsOERBQUNkLGtHQUFZQTtRQUNYaUIsYUFBYTtRQUNiQyxJQUFHO1FBQ0hkLFNBQVNBO1FBQ1RHLE9BQU9BO1FBQ1BDLFVBQVVHO1FBQ1ZOLElBQUlBO1FBQ0gsR0FBR0ssVUFBVTtRQUNkUyxhQUFhLENBQUNDLHVCQUFXLDhEQUFDbkIsa0dBQVNBO2dCQUFFLEdBQUdtQixNQUFNO2dCQUFFZCxPQUFPQTs7Ozs7Ozs7Ozs7QUFHN0Q7S0F4QndCSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BdXRvQ29tcGxldGVDdXN0b20uanM/OTdlMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IEF1dG9jb21wbGV0ZSwgVGV4dEZpZWxkIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dG9Db21wbGV0ZUN1c3RvbShwcm9wcykge1xuICBjb25zdCB7IG9wdGlvbnMsIHN4LGxhYmVsLCB2YWx1ZSwgb25DaGFuZ2Uscm93cywgLi4ub3RoZXJQcm9wc30gPSBwcm9wcztcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIHNlbGVjdGVkVmFsdWUsIHNlbGVjdGVkUm93SWQpID0+IHtcbiAgICAvLyBGaW5kIHRoZSBjb3JyZXNwb25kaW5nIHJvdyBvYmplY3QgYmFzZWQgb24gdGhlIHNlbGVjdGVkIHZhbHVlXG5cbiAgICAvLyBDYWxsIHRoZSBwYXJlbnQgY29tcG9uZW50J3Mgb25DaGFuZ2UgaGFuZGxlciB3aXRoIHRoZSBzZWxlY3RlZCB2YWx1ZSBhbmQgcm93IG9iamVjdFxuICAgIG9uQ2hhbmdlKHNlbGVjdGVkVmFsdWUsIHNlbGVjdGVkUm93SWQpO1xuICAgIGNvbnNvbGUubG9nKCdzZWxlY3RlZCB2YWx1ZTogJyAsIHNlbGVjdGVkVmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKCdzZWxlY3RlZCByb3c6ICcsIHNlbGVjdGVkUm93SWQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEF1dG9jb21wbGV0ZVxuICAgICAgZGlzYWJsZVBvcnRhbFxuICAgICAgaWQ9XCJjb21iby1ib3gtZGVtb1wiXG4gICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgIHN4PXtzeH1cbiAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IDxUZXh0RmllbGQgey4uLnBhcmFtc30gbGFiZWw9e2xhYmVsfS8+fVxuICAgIC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQXV0b2NvbXBsZXRlIiwiVGV4dEZpZWxkIiwiQXV0b0NvbXBsZXRlQ3VzdG9tIiwicHJvcHMiLCJvcHRpb25zIiwic3giLCJsYWJlbCIsInZhbHVlIiwib25DaGFuZ2UiLCJyb3dzIiwib3RoZXJQcm9wcyIsImhhbmRsZUNoYW5nZSIsImV2ZW50Iiwic2VsZWN0ZWRWYWx1ZSIsInNlbGVjdGVkUm93SWQiLCJjb25zb2xlIiwibG9nIiwiZGlzYWJsZVBvcnRhbCIsImlkIiwicmVuZGVySW5wdXQiLCJwYXJhbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AutoCompleteCustom.js\n"));

/***/ })

});