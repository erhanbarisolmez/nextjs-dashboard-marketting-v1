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

/***/ "(app-pages-browser)/./src/components/e-commerce/TextArea.js":
/*!***********************************************!*\
  !*** ./src/components/e-commerce/TextArea.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ExampleTextareaComment; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_icons_material_BackupOutlined__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/BackupOutlined */ \"(app-pages-browser)/./node_modules/@mui/icons-material/BackupOutlined.js\");\n/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Check */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Check.js\");\n/* harmony import */ var _mui_icons_material_FormatBold__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/FormatBold */ \"(app-pages-browser)/./node_modules/@mui/icons-material/FormatBold.js\");\n/* harmony import */ var _mui_icons_material_FormatItalic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/FormatItalic */ \"(app-pages-browser)/./node_modules/@mui/icons-material/FormatItalic.js\");\n/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowDown */ \"(app-pages-browser)/./node_modules/@mui/icons-material/KeyboardArrowDown.js\");\n/* harmony import */ var _mui_joy_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/joy/Box */ \"(app-pages-browser)/./node_modules/@mui/joy/Box/Box.js\");\n/* harmony import */ var _mui_joy_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/joy/Button */ \"(app-pages-browser)/./node_modules/@mui/joy/Button/Button.js\");\n/* harmony import */ var _mui_joy_FormControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/joy/FormControl */ \"(app-pages-browser)/./node_modules/@mui/joy/FormControl/FormControl.js\");\n/* harmony import */ var _mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/joy/IconButton */ \"(app-pages-browser)/./node_modules/@mui/joy/IconButton/IconButton.js\");\n/* harmony import */ var _mui_joy_ListItemDecorator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/joy/ListItemDecorator */ \"(app-pages-browser)/./node_modules/@mui/joy/ListItemDecorator/ListItemDecorator.js\");\n/* harmony import */ var _mui_joy_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/joy/Menu */ \"(app-pages-browser)/./node_modules/@mui/joy/Menu/Menu.js\");\n/* harmony import */ var _mui_joy_MenuItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/joy/MenuItem */ \"(app-pages-browser)/./node_modules/@mui/joy/MenuItem/MenuItem.js\");\n/* harmony import */ var _mui_joy_Textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/joy/Textarea */ \"(app-pages-browser)/./node_modules/@mui/joy/Textarea/Textarea.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction ExampleTextareaComment() {\n    _s();\n    const [italic, setItalic] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const [fontWeight, setFontWeight] = react__WEBPACK_IMPORTED_MODULE_1__.useState(\"normal\");\n    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);\n    const fileInputRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);\n    const handleOpen = (param)=>{\n        let { showFileIcon: showFileIcon1 = true } = param;\n        fileInputRef.current.click();\n    };\n    const handleFileChange = (event)=>{\n        const file = event.target.files[0];\n        if (file) {\n            console.log(\"y\\xfcklenen dosya: \", file);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy_FormControl__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ref: fileInputRef,\n                type: \"file\",\n                style: {\n                    display: \"none\"\n                },\n                onChange: handleFileChange\n            }, void 0, false, {\n                fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TextArea.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy_Textarea__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                placeholder: \"Type something here…\",\n                minRows: 3,\n                endDecorator: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    sx: {\n                        display: \"flex\",\n                        gap: \"var(--Textarea-paddingBlock)\",\n                        pt: \"var(--Textarea-paddingBlock)\",\n                        borderTop: \"1px solid\",\n                        borderColor: \"divider\",\n                        flex: \"auto\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            variant: \"plain\",\n                            color: \"neutral\",\n                            onClick: (event)=>setAnchorEl(event.currentTarget),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_FormatBold__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TextArea.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, void 0),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    fontSize: \"md\"\n                                }, void 0, false, {\n                                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TextArea.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                }, void 0)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TextArea.js\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, void 0),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy_Menu__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            anchorEl: anchorEl,\n                            open: Boolean(anchorEl),\n                            onClose: ()=>setAnchorEl(null),\n                            size: \"sm\",\n                            placement: \"bottom-start\",\n                            sx: {\n                                \"--ListItemDecorator-size\": \"24px\"\n                            },\n                            children: [\n                                \"200\",\n                                \"normal\",\n                                \"bold\"\n                            ].map((weight)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy_MenuItem__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    selected: fontWeight === weight,\n                                    onClick: ()=>{\n                                        setFontWeight(weight);\n                                        setAnchorEl(null);\n                                    },\n                                    sx: {\n                                        fontWeight: weight\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy_ListItemDecorator__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                            children: fontWeight === weight && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                                fontSize: \"sm\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TextArea.js\",\n                                                lineNumber: 85,\n                                                columnNumber: 47\n                                            }, void 0)\n                                        }, void 0, false, {\n                                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TextArea.js\",\n                                            lineNumber: 84,\n                                            columnNumber: 19\n                                        }, void 0),\n                                        weight === \"200\" ? \"lighter\" : weight\n                                    ]\n                                }, weight, true, {\n                                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TextArea.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 17\n                                }, void 0))\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TextArea.js\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, void 0),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            variant: italic ? \"soft\" : \"plain\",\n                            color: italic ? \"primary\" : \"neutral\",\n                            \"aria-pressed\": italic,\n                            onClick: ()=>setItalic((bool)=>!bool),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_FormatItalic__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                                fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TextArea.js\",\n                                lineNumber: 97,\n                                columnNumber: 15\n                            }, void 0)\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TextArea.js\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, void 0),\n                        showFileIcon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_BackupOutlined__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                            onClick: handleOpen\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TextArea.js\",\n                            lineNumber: 100,\n                            columnNumber: 13\n                        }, void 0),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy_Button__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                            sx: {\n                                ml: \"auto\"\n                            },\n                            children: \"Send\"\n                        }, void 0, false, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TextArea.js\",\n                            lineNumber: 105,\n                            columnNumber: 13\n                        }, void 0)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TextArea.js\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, void 0),\n                sx: {\n                    minWidth: 300,\n                    fontWeight,\n                    fontStyle: italic ? \"italic\" : \"initial\"\n                }\n            }, void 0, false, {\n                fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TextArea.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/e-commerce/TextArea.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(ExampleTextareaComment, \"pvM8cRGmhR6CBALJkaH0P/r8i2w=\");\n_c = ExampleTextareaComment;\nvar _c;\n$RefreshReg$(_c, \"ExampleTextareaComment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2UtY29tbWVyY2UvVGV4dEFyZWEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNvRTtBQUN0QjtBQUNVO0FBQ0k7QUFDVTtBQUN2QztBQUNNO0FBQ1U7QUFDRjtBQUNjO0FBQzFCO0FBQ1E7QUFDQTtBQUNWO0FBRWhCLFNBQVNjOztJQUV0QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0gsMkNBQWMsQ0FBQztJQUMzQyxNQUFNLENBQUNLLFlBQVlDLGNBQWMsR0FBR04sMkNBQWMsQ0FBQztJQUNuRCxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1IsMkNBQWMsQ0FBQztJQUMvQyxNQUFNUyxlQUFlVCx5Q0FBWSxDQUFDO0lBRWxDLE1BQU1XLGFBQWE7WUFBQyxFQUFDQyxjQUFBQSxnQkFBZSxJQUFJLEVBQUM7UUFDckNILGFBQWFJLE9BQU8sQ0FBQ0MsS0FBSztJQUM5QjtJQUVBLE1BQU1DLG1CQUFtQixDQUFDQztRQUN4QixNQUFNQyxPQUFPRCxNQUFNRSxNQUFNLENBQUNDLEtBQUssQ0FBQyxFQUFFO1FBQ2xDLElBQUdGLE1BQUs7WUFDTkcsUUFBUUMsR0FBRyxDQUFDLHVCQUFvQko7UUFDbEM7SUFDRjtJQUNBLHFCQUNFLDhEQUFDdkIsNERBQVdBOzswQkFHViw4REFBQzRCO2dCQUNDQyxLQUFLZDtnQkFDTGUsTUFBSztnQkFDTEMsT0FBTztvQkFBQ0MsU0FBUTtnQkFBTTtnQkFDdEJDLFVBQVVaOzs7Ozs7MEJBRVosOERBQUNoQix5REFBUUE7Z0JBQ1A2QixhQUFZO2dCQUNaQyxTQUFTO2dCQUNUQyw0QkFDRSw4REFBQ3RDLG9EQUFHQTtvQkFDRnVDLElBQUk7d0JBQ0ZMLFNBQVM7d0JBQ1RNLEtBQUs7d0JBQ0xDLElBQUk7d0JBQ0pDLFdBQVc7d0JBQ1hDLGFBQWE7d0JBQ2JDLE1BQU07b0JBQ1I7O3NDQUVBLDhEQUFDekMsMkRBQVVBOzRCQUNUMEMsU0FBUTs0QkFDUkMsT0FBTTs0QkFDTkMsU0FBUyxDQUFDdkIsUUFBVVIsWUFBWVEsTUFBTXdCLGFBQWE7OzhDQUVuRCw4REFBQ25ELHNFQUFVQTs7Ozs7OENBQ1gsOERBQUNFLDZFQUFpQkE7b0NBQUNrRCxVQUFTOzs7Ozs7Ozs7Ozs7c0NBRTlCLDhEQUFDNUMscURBQUlBOzRCQUNIVSxVQUFVQTs0QkFDVm1DLE1BQU1DLFFBQVFwQzs0QkFDZHFDLFNBQVMsSUFBTXBDLFlBQVk7NEJBQzNCcUMsTUFBSzs0QkFDTEMsV0FBVTs0QkFDVmYsSUFBSTtnQ0FBRSw0QkFBNEI7NEJBQU87c0NBRXhDO2dDQUFDO2dDQUFPO2dDQUFVOzZCQUFPLENBQUNnQixHQUFHLENBQUMsQ0FBQ0MsdUJBQzlCLDhEQUFDbEQseURBQVFBO29DQUVQbUQsVUFBVTVDLGVBQWUyQztvQ0FDekJULFNBQVM7d0NBQ1BqQyxjQUFjMEM7d0NBQ2R4QyxZQUFZO29DQUNkO29DQUNBdUIsSUFBSTt3Q0FBRTFCLFlBQVkyQztvQ0FBTzs7c0RBRXpCLDhEQUFDcEQsbUVBQWlCQTtzREFDZlMsZUFBZTJDLHdCQUFVLDhEQUFDNUQsa0VBQUtBO2dEQUFDcUQsVUFBUzs7Ozs7Ozs7Ozs7d0NBRTNDTyxXQUFXLFFBQVEsWUFBWUE7O21DQVgzQkE7Ozs7Ozs7Ozs7c0NBZVgsOERBQUNyRCwyREFBVUE7NEJBQ1QwQyxTQUFTbkMsU0FBUyxTQUFTOzRCQUMzQm9DLE9BQU9wQyxTQUFTLFlBQVk7NEJBQzVCZ0QsZ0JBQWNoRDs0QkFDZHFDLFNBQVMsSUFBTXBDLFVBQVUsQ0FBQ2dELE9BQVMsQ0FBQ0E7c0NBRXBDLDRFQUFDN0QseUVBQVlBOzs7Ozs7Ozs7O3dCQUVkc0IsOEJBQ0QsOERBQUN6QiwyRUFBa0JBOzRCQUNuQm9ELFNBQVM1Qjs7Ozs7O3NDQUlULDhEQUFDbEIsd0RBQU1BOzRCQUFDc0MsSUFBSTtnQ0FBRXFCLElBQUk7NEJBQU87c0NBQUc7Ozs7Ozs7Ozs7OztnQkFHaENyQixJQUFJO29CQUNGc0IsVUFBVTtvQkFDVmhEO29CQUNBaUQsV0FBV3BELFNBQVMsV0FBVztnQkFDakM7Ozs7Ozs7Ozs7OztBQUlSO0dBbkd3QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZS1jb21tZXJjZS9UZXh0QXJlYS5qcz81ZjFkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IEJhY2t1cE91dGxpbmVkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0JhY2t1cE91dGxpbmVkJztcbmltcG9ydCBDaGVjayBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZWNrJztcbmltcG9ydCBGb3JtYXRCb2xkIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRm9ybWF0Qm9sZCc7XG5pbXBvcnQgRm9ybWF0SXRhbGljIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRm9ybWF0SXRhbGljJztcbmltcG9ydCBLZXlib2FyZEFycm93RG93biBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dEb3duJztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9qb3kvQm94JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9qb3kvQnV0dG9uJztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbXVpL2pveS9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbXVpL2pveS9JY29uQnV0dG9uJztcbmltcG9ydCBMaXN0SXRlbURlY29yYXRvciBmcm9tICdAbXVpL2pveS9MaXN0SXRlbURlY29yYXRvcic7XG5pbXBvcnQgTWVudSBmcm9tICdAbXVpL2pveS9NZW51JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbXVpL2pveS9NZW51SXRlbSc7XG5pbXBvcnQgVGV4dGFyZWEgZnJvbSAnQG11aS9qb3kvVGV4dGFyZWEnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeGFtcGxlVGV4dGFyZWFDb21tZW50KCkge1xuXG4gIGNvbnN0IFtpdGFsaWMsIHNldEl0YWxpY10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmb250V2VpZ2h0LCBzZXRGb250V2VpZ2h0XSA9IFJlYWN0LnVzZVN0YXRlKCdub3JtYWwnKTtcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgZmlsZUlucHV0UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoe3Nob3dGaWxlSWNvbiA9IHRydWV9KSA9PiB7XG4gICAgICBmaWxlSW5wdXRSZWYuY3VycmVudC5jbGljaygpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgaWYoZmlsZSl7XG4gICAgICBjb25zb2xlLmxvZygnecO8a2xlbmVuIGRvc3lhOiAnLCBmaWxlKVxuICAgIH1cbiAgfVxuICByZXR1cm4gKFxuICAgIDxGb3JtQ29udHJvbD5cbiAgICAgIHsvKiA8Rm9ybUxhYmVsPllvdXIgY29tbWVudDwvRm9ybUxhYmVsPiAqL31cblxuICAgICAgPGlucHV0XG4gICAgICAgIHJlZj17ZmlsZUlucHV0UmVmfVxuICAgICAgICB0eXBlPSdmaWxlJ1xuICAgICAgICBzdHlsZT17e2Rpc3BsYXk6J25vbmUnfX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbGVDaGFuZ2V9XG4gICAgICAvPlxuICAgICAgPFRleHRhcmVhXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBzb21ldGhpbmcgaGVyZeKAplwiXG4gICAgICAgIG1pblJvd3M9ezN9XG4gICAgICAgIGVuZERlY29yYXRvcj17XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICBnYXA6ICd2YXIoLS1UZXh0YXJlYS1wYWRkaW5nQmxvY2spJyxcbiAgICAgICAgICAgICAgcHQ6ICd2YXIoLS1UZXh0YXJlYS1wYWRkaW5nQmxvY2spJyxcbiAgICAgICAgICAgICAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkJyxcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdkaXZpZGVyJyxcbiAgICAgICAgICAgICAgZmxleDogJ2F1dG8nLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICB2YXJpYW50PVwicGxhaW5cIlxuICAgICAgICAgICAgICBjb2xvcj1cIm5ldXRyYWxcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Rm9ybWF0Qm9sZCAvPlxuICAgICAgICAgICAgICA8S2V5Ym9hcmRBcnJvd0Rvd24gZm9udFNpemU9XCJtZFwiIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XG4gICAgICAgICAgICAgIG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfVxuICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRBbmNob3JFbChudWxsKX1cbiAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tLXN0YXJ0XCJcbiAgICAgICAgICAgICAgc3g9e3sgJy0tTGlzdEl0ZW1EZWNvcmF0b3Itc2l6ZSc6ICcyNHB4JyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7WycyMDAnLCAnbm9ybWFsJywgJ2JvbGQnXS5tYXAoKHdlaWdodCkgPT4gKFxuICAgICAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICAgICAga2V5PXt3ZWlnaHR9XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17Zm9udFdlaWdodCA9PT0gd2VpZ2h0fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRGb250V2VpZ2h0KHdlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIHNldEFuY2hvckVsKG51bGwpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHN4PXt7IGZvbnRXZWlnaHQ6IHdlaWdodCB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbURlY29yYXRvcj5cbiAgICAgICAgICAgICAgICAgICAge2ZvbnRXZWlnaHQgPT09IHdlaWdodCAmJiA8Q2hlY2sgZm9udFNpemU9XCJzbVwiIC8+fVxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbURlY29yYXRvcj5cbiAgICAgICAgICAgICAgICAgIHt3ZWlnaHQgPT09ICcyMDAnID8gJ2xpZ2h0ZXInIDogd2VpZ2h0fVxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgdmFyaWFudD17aXRhbGljID8gJ3NvZnQnIDogJ3BsYWluJ31cbiAgICAgICAgICAgICAgY29sb3I9e2l0YWxpYyA/ICdwcmltYXJ5JyA6ICduZXV0cmFsJ31cbiAgICAgICAgICAgICAgYXJpYS1wcmVzc2VkPXtpdGFsaWN9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEl0YWxpYygoYm9vbCkgPT4gIWJvb2wpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Rm9ybWF0SXRhbGljIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICB7c2hvd0ZpbGVJY29uICYmKCBcbiAgICAgICAgICAgIDxCYWNrdXBPdXRsaW5lZEljb25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9wZW59XG4gICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIFxuICAgICAgICAgICAgPEJ1dHRvbiBzeD17eyBtbDogJ2F1dG8nIH19PlNlbmQ8L0J1dHRvbj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgfVxuICAgICAgICBzeD17e1xuICAgICAgICAgIG1pbldpZHRoOiAzMDAsXG4gICAgICAgICAgZm9udFdlaWdodCxcbiAgICAgICAgICBmb250U3R5bGU6IGl0YWxpYyA/ICdpdGFsaWMnIDogJ2luaXRpYWwnLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L0Zvcm1Db250cm9sPlxuICApO1xufSJdLCJuYW1lcyI6WyJCYWNrdXBPdXRsaW5lZEljb24iLCJDaGVjayIsIkZvcm1hdEJvbGQiLCJGb3JtYXRJdGFsaWMiLCJLZXlib2FyZEFycm93RG93biIsIkJveCIsIkJ1dHRvbiIsIkZvcm1Db250cm9sIiwiSWNvbkJ1dHRvbiIsIkxpc3RJdGVtRGVjb3JhdG9yIiwiTWVudSIsIk1lbnVJdGVtIiwiVGV4dGFyZWEiLCJSZWFjdCIsIkV4YW1wbGVUZXh0YXJlYUNvbW1lbnQiLCJpdGFsaWMiLCJzZXRJdGFsaWMiLCJ1c2VTdGF0ZSIsImZvbnRXZWlnaHQiLCJzZXRGb250V2VpZ2h0IiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsImZpbGVJbnB1dFJlZiIsInVzZVJlZiIsImhhbmRsZU9wZW4iLCJzaG93RmlsZUljb24iLCJjdXJyZW50IiwiY2xpY2siLCJoYW5kbGVGaWxlQ2hhbmdlIiwiZXZlbnQiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJjb25zb2xlIiwibG9nIiwiaW5wdXQiLCJyZWYiLCJ0eXBlIiwic3R5bGUiLCJkaXNwbGF5Iiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsIm1pblJvd3MiLCJlbmREZWNvcmF0b3IiLCJzeCIsImdhcCIsInB0IiwiYm9yZGVyVG9wIiwiYm9yZGVyQ29sb3IiLCJmbGV4IiwidmFyaWFudCIsImNvbG9yIiwib25DbGljayIsImN1cnJlbnRUYXJnZXQiLCJmb250U2l6ZSIsIm9wZW4iLCJCb29sZWFuIiwib25DbG9zZSIsInNpemUiLCJwbGFjZW1lbnQiLCJtYXAiLCJ3ZWlnaHQiLCJzZWxlY3RlZCIsImFyaWEtcHJlc3NlZCIsImJvb2wiLCJtbCIsIm1pbldpZHRoIiwiZm9udFN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/e-commerce/TextArea.js\n"));

/***/ })

});