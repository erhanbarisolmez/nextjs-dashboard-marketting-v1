"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[locale]/layout",{

/***/ "(app-pages-browser)/./src/components/dashboard/nav-links.js":
/*!***********************************************!*\
  !*** ./src/components/dashboard/nav-links.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/navigation */ \"(app-pages-browser)/./src/navigation.ts\");\n/* harmony import */ var _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Brightness5Outlined,LocalMallOutlined,NotificationsNoneOutlined,Person2Outlined,TranslateOutlined,WidgetsOutlined!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/TranslateOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Brightness5Outlined,LocalMallOutlined,NotificationsNoneOutlined,Person2Outlined,TranslateOutlined,WidgetsOutlined!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/Brightness5Outlined.js\");\n/* harmony import */ var _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Brightness5Outlined,LocalMallOutlined,NotificationsNoneOutlined,Person2Outlined,TranslateOutlined,WidgetsOutlined!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/WidgetsOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Brightness5Outlined,LocalMallOutlined,NotificationsNoneOutlined,Person2Outlined,TranslateOutlined,WidgetsOutlined!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/LocalMallOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Brightness5Outlined,LocalMallOutlined,NotificationsNoneOutlined,Person2Outlined,TranslateOutlined,WidgetsOutlined!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/NotificationsNoneOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Brightness5Outlined,LocalMallOutlined,NotificationsNoneOutlined,Person2Outlined,TranslateOutlined,WidgetsOutlined!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/Person2Outlined.js\");\n/* harmony import */ var _barrel_optimize_names_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Grid,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _barrel_optimize_names_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Grid,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst NavLinks = ()=>{\n    _s();\n    const pathname = (0,_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)();\n    const [currentLanguage, setCurrentLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(pathname.startsWith(\"/en\") ? \"en\" : \"tr\");\n    const [isECommerceMenuOpen, setECommerceMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const toggleLanguage = ()=>{\n        setCurrentLanguage((prevLanguage)=>prevLanguage === \"en\" ? \"tr\" : \"en\");\n    };\n    const toggleECommerceMenu = ()=>{\n        setECommerceMenuOpen((prev)=>!prev);\n    };\n    const links = [\n        {\n            Icon: _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            href: pathname,\n            onClick: toggleLanguage\n        },\n        {\n            Icon: _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            href: \"\"\n        },\n        {\n            Icon: _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            href: \"dashboard\"\n        },\n        {\n            Icon: _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            onClick: toggleECommerceMenu,\n            href: \"\",\n            linksMenu: {\n                onClick: toggleECommerceMenu,\n                items: [\n                    \"Products\",\n                    \"Categories\",\n                    \"Add Product\",\n                    \"Edit Product\",\n                    \"Add Category\",\n                    \"Edit Category\"\n                ]\n            }\n        },\n        {\n            Icon: _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n            href: \"notification\"\n        },\n        {\n            Icon: _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n            href: \"profile\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            container: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                item: true,\n                xs: 12,\n                sx: {\n                    display: \"flex\"\n                },\n                children: links.map((param, index)=>{\n                    let { Icon, href, onClick, linksMenu } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navigation__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                            href: href,\n                            locale: currentLanguage,\n                            onClick: onClick,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                                    sx: {\n                                        color: \"gray\",\n                                        display: \"flex\",\n                                        alignItems: \"center\",\n                                        justifyContent: \"center\",\n                                        width: \"100%\",\n                                        ml: 1,\n                                        mr: 2\n                                    }\n                                }, \"icon-\".concat(index), false, {\n                                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 17\n                                }, undefined),\n                                linksMenu && isECommerceMenuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        children: linksMenu.items.map((item, subIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navigation__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                                        onClick: toggleECommerceMenu,\n                                                        href: \"\".concat(item.toLowerCase().replace(\" \", \"-\")),\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                            p: 1,\n                                                            variant: \"subtitle1\",\n                                                            sx: {\n                                                                color: \"text.secondary\",\n                                                                fontWeight: \"500\",\n                                                                \":hover\": {\n                                                                    bgcolor: \"GrayText\",\n                                                                    opacity: 0.5,\n                                                                    overflow: \"hidden\",\n                                                                    textOverflow: \"initial\",\n                                                                    border: 1,\n                                                                    borderRadius: 3,\n                                                                    color: \"blue\",\n                                                                    fontWeight: \"600\"\n                                                                }\n                                                            },\n                                                            children: item\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n                                                            lineNumber: 70,\n                                                            columnNumber: 29\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 27\n                                                    }, undefined)\n                                                }, \"menu-item-\".concat(index, \"-\").concat(subIndex), false, {\n                                                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            }, void 0, false))\n                                    }, void 0, false, {\n                                        fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, \"link-\".concat(index), true, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n                            lineNumber: 60,\n                            columnNumber: 15\n                        }, undefined)\n                    }, \"link-\".concat(index), false, {\n                        fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(NavLinks, \"rcPU+51qMDtAKs5vyIEuCMKnVO0=\", false, function() {\n    return [\n        _navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname\n    ];\n});\n_c = NavLinks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavLinks);\nvar _c;\n$RefreshReg$(_c, \"NavLinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9uYXYtbGlua3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ2lEO0FBUXBCO0FBQ29CO0FBQ047QUFFM0MsTUFBTWtCLFdBQVc7O0lBQ2YsTUFBTUMsV0FBV2xCLHdEQUFXQTtJQUM1QixNQUFNLENBQUNtQixpQkFBaUJDLG1CQUFtQixHQUFHSiwrQ0FBUUEsQ0FDcERFLFNBQVNHLFVBQVUsQ0FBQyxTQUFTLE9BQU87SUFFdEMsTUFBTSxDQUFDQyxxQkFBcUJDLHFCQUFxQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUU3RCxNQUFNUSxpQkFBaUI7UUFDckJKLG1CQUFtQixDQUFDSyxlQUFrQkEsaUJBQWlCLE9BQU8sT0FBTztJQUN2RTtJQUVBLE1BQU1DLHNCQUFzQjtRQUMxQkgscUJBQXFCLENBQUNJLE9BQVMsQ0FBQ0E7SUFFbEM7SUFFQSxNQUFNQyxRQUFRO1FBQ1o7WUFDRUMsTUFBTW5CLG1NQUFhQTtZQUNuQm9CLE1BQU1aO1lBQ05hLFNBQVNQO1FBQ1g7UUFDQTtZQUFFSyxNQUFNM0IsbU1BQWNBO1lBQUU0QixNQUFNO1FBQUc7UUFDakM7WUFBRUQsTUFBTWpCLG1NQUFXQTtZQUFFa0IsTUFBTztRQUFXO1FBQ3ZDO1lBQ0VELE1BQU16QixtTUFBU0E7WUFDZjJCLFNBQVNMO1lBQ1RJLE1BQU07WUFDTkUsV0FBVztnQkFDVEQsU0FBU0w7Z0JBQ1RPLE9BQU87b0JBQUM7b0JBQVk7b0JBQWM7b0JBQWU7b0JBQWdCO29CQUFnQjtpQkFBZ0I7WUFDbkc7UUFDRjtRQUNBO1lBQUVKLE1BQU12QixtTUFBaUJBO1lBQUV3QixNQUFPO1FBQWM7UUFDaEQ7WUFBRUQsTUFBTXJCLG1NQUFVQTtZQUFFc0IsTUFBTztRQUFTO0tBQ3JDO0lBRUQscUJBQ0U7a0JBQ0UsNEVBQUNqQiwyRkFBSUE7WUFBQ3FCLFNBQVM7c0JBQ2IsNEVBQUNyQiwyRkFBSUE7Z0JBQUNzQixJQUFJO2dCQUFDQyxJQUFJO2dCQUFJQyxJQUFJO29CQUNyQkMsU0FBUztnQkFDWDswQkFDR1YsTUFBTVcsR0FBRyxDQUFDLFFBQW9DQzt3QkFBbkMsRUFBRVgsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFDO3lDQUMzQyw4REFBQ2pCLDJDQUFRQTtrQ0FFUCw0RUFBQ2hCLDZDQUFJQTs0QkFBQytCLE1BQU1BOzRCQUFNVyxRQUFRdEI7NEJBQWlCWSxTQUFTQTs7OENBQ2xELDhEQUFDRjtvQ0FBNEJRLElBQUk7d0NBQUVLLE9BQU87d0NBQVFKLFNBQVM7d0NBQVFLLFlBQVk7d0NBQVVDLGdCQUFnQjt3Q0FBVUMsT0FBTzt3Q0FBUUMsSUFBSTt3Q0FBR0MsSUFBSTtvQ0FBRTttQ0FBcEksUUFBYyxPQUFOUDs7Ozs7Z0NBRWxCUixhQUFhVixxQ0FDWiw4REFBQzBCOzhDQUNDLDRFQUFDQztrREFDRWpCLFVBQVVDLEtBQUssQ0FBQ00sR0FBRyxDQUFDLENBQUNKLE1BQU1lLHlCQUMxQjswREFDQSw0RUFBQ0M7OERBQ0MsNEVBQUNwRCw2Q0FBSUE7d0RBQUNnQyxTQUFTTDt3REFBcUJJLE1BQU0sR0FBd0MsT0FBckNLLEtBQUtpQixXQUFXLEdBQUdDLE9BQU8sQ0FBQyxLQUFLO2tFQUMzRSw0RUFBQ3ZDLDRGQUFVQTs0REFBQ3dDLEdBQUc7NERBQUdDLFNBQVE7NERBQVlsQixJQUFJO2dFQUN4Q0ssT0FBTztnRUFDUGMsWUFBWTtnRUFDWixVQUFVO29FQUNSQyxTQUFTO29FQUNUQyxTQUFTO29FQUNUQyxVQUFVO29FQUNWQyxjQUFjO29FQUNkQyxRQUFRO29FQUNSQyxjQUFjO29FQUNkcEIsT0FBTztvRUFDUGMsWUFBWTtnRUFFZDs0REFFRjtzRUFDR3JCOzs7Ozs7Ozs7OzttREFsQkUsYUFBc0JlLE9BQVRWLE9BQU0sS0FBWSxPQUFUVTs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBUnlCLFFBQWMsT0FBTlY7Ozs7O3VCQUY3RCxRQUFjLE9BQU5BOzs7Ozs7Ozs7Ozs7Ozs7OztBQThDbkM7R0ExRk12Qjs7UUFDYWpCLG9EQUFXQTs7O0tBRHhCaUI7QUE0Rk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL25hdi1saW5rcy5qcz9jNTc3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgTGluaywgdXNlUGF0aG5hbWUgfSBmcm9tIFwiQC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQge1xuICBCcmlnaHRuZXNzNU91dGxpbmVkIGFzIEJyaWdodG5lc3NJY29uLFxuICBMb2NhbE1hbGxPdXRsaW5lZCBhcyBFQ29tbWVyY2UsXG4gIE5vdGlmaWNhdGlvbnNOb25lT3V0bGluZWQgYXMgTm90aWZpY2F0aW9uc0ljb24sXG4gIFBlcnNvbjJPdXRsaW5lZCBhcyBQZXJzb25JY29uLFxuICBUcmFuc2xhdGVPdXRsaW5lZCBhcyBUcmFuc2xhdGVJY29uLFxuICBXaWRnZXRzT3V0bGluZWQgYXMgV2lkZ2V0c0ljb24sXG59IGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsXCI7XG5pbXBvcnQgeyBHcmlkLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBOYXZMaW5rcyA9ICgpID0+IHtcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuICBjb25zdCBbY3VycmVudExhbmd1YWdlLCBzZXRDdXJyZW50TGFuZ3VhZ2VdID0gdXNlU3RhdGUoXG4gICAgcGF0aG5hbWUuc3RhcnRzV2l0aChcIi9lblwiKSA/IFwiZW5cIiA6IFwidHJcIlxuICApO1xuICBjb25zdCBbaXNFQ29tbWVyY2VNZW51T3Blbiwgc2V0RUNvbW1lcmNlTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHRvZ2dsZUxhbmd1YWdlID0gKCkgPT4ge1xuICAgIHNldEN1cnJlbnRMYW5ndWFnZSgocHJldkxhbmd1YWdlKSA9PiAocHJldkxhbmd1YWdlID09PSBcImVuXCIgPyBcInRyXCIgOiBcImVuXCIpKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVFQ29tbWVyY2VNZW51ID0gKCkgPT4ge1xuICAgIHNldEVDb21tZXJjZU1lbnVPcGVuKChwcmV2KSA9PiAhcHJldik7XG4gICAgXG4gIH07XG5cbiAgY29uc3QgbGlua3MgPSBbXG4gICAge1xuICAgICAgSWNvbjogVHJhbnNsYXRlSWNvbixcbiAgICAgIGhyZWY6IHBhdGhuYW1lLFxuICAgICAgb25DbGljazogdG9nZ2xlTGFuZ3VhZ2UsXG4gICAgfSxcbiAgICB7IEljb246IEJyaWdodG5lc3NJY29uLCBocmVmOiBcIlwiIH0sXG4gICAgeyBJY29uOiBXaWRnZXRzSWNvbiwgaHJlZjogYGRhc2hib2FyZGAgfSxcbiAgICB7XG4gICAgICBJY29uOiBFQ29tbWVyY2UsXG4gICAgICBvbkNsaWNrOiB0b2dnbGVFQ29tbWVyY2VNZW51LFxuICAgICAgaHJlZjogXCJcIixcbiAgICAgIGxpbmtzTWVudToge1xuICAgICAgICBvbkNsaWNrOiB0b2dnbGVFQ29tbWVyY2VNZW51LFxuICAgICAgICBpdGVtczogW1wiUHJvZHVjdHNcIiwgXCJDYXRlZ29yaWVzXCIsIFwiQWRkIFByb2R1Y3RcIiwgXCJFZGl0IFByb2R1Y3RcIiwgXCJBZGQgQ2F0ZWdvcnlcIiwgXCJFZGl0IENhdGVnb3J5XCJdLFxuICAgICAgfVxuICAgIH0sXG4gICAgeyBJY29uOiBOb3RpZmljYXRpb25zSWNvbiwgaHJlZjogYG5vdGlmaWNhdGlvbmAgfSxcbiAgICB7IEljb246IFBlcnNvbkljb24sIGhyZWY6IGBwcm9maWxlYCB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxHcmlkIGNvbnRhaW5lcj5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN4PXt7XG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICB9fT5cbiAgICAgICAgICB7bGlua3MubWFwKCh7IEljb24sIGhyZWYsIG9uQ2xpY2ssIGxpbmtzTWVudX0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtgbGluay0ke2luZGV4fWB9PlxuXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9IGxvY2FsZT17Y3VycmVudExhbmd1YWdlfSBvbkNsaWNrPXtvbkNsaWNrfSBrZXk9e2BsaW5rLSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgICAgPEljb24ga2V5PXtgaWNvbi0ke2luZGV4fWB9ICBzeD17eyBjb2xvcjogXCJncmF5XCIsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgd2lkdGg6ICcxMDAlJywgbWw6IDEsIG1yOiAyIH19IC8+XG5cbiAgICAgICAgICAgICAgICB7bGlua3NNZW51ICYmIGlzRUNvbW1lcmNlTWVudU9wZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgIHtsaW5rc01lbnUuaXRlbXMubWFwKChpdGVtLCBzdWJJbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2BtZW51LWl0ZW0tJHtpbmRleH0tJHtzdWJJbmRleH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgb25DbGljaz17dG9nZ2xlRUNvbW1lcmNlTWVudX0gaHJlZj17YCR7aXRlbS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoXCIgXCIsIFwiLVwiKX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBwPXsxfSB2YXJpYW50PVwic3VidGl0bGUxXCIgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAndGV4dC5zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJzUwMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6IFwiR3JheVRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dE92ZXJmbG93OiBcImluaXRpYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmx1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICc2MDAnLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkxpbmtzO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VQYXRobmFtZSIsIkJyaWdodG5lc3M1T3V0bGluZWQiLCJCcmlnaHRuZXNzSWNvbiIsIkxvY2FsTWFsbE91dGxpbmVkIiwiRUNvbW1lcmNlIiwiTm90aWZpY2F0aW9uc05vbmVPdXRsaW5lZCIsIk5vdGlmaWNhdGlvbnNJY29uIiwiUGVyc29uMk91dGxpbmVkIiwiUGVyc29uSWNvbiIsIlRyYW5zbGF0ZU91dGxpbmVkIiwiVHJhbnNsYXRlSWNvbiIsIldpZGdldHNPdXRsaW5lZCIsIldpZGdldHNJY29uIiwiR3JpZCIsIlR5cG9ncmFwaHkiLCJGcmFnbWVudCIsInVzZVN0YXRlIiwiTmF2TGlua3MiLCJwYXRobmFtZSIsImN1cnJlbnRMYW5ndWFnZSIsInNldEN1cnJlbnRMYW5ndWFnZSIsInN0YXJ0c1dpdGgiLCJpc0VDb21tZXJjZU1lbnVPcGVuIiwic2V0RUNvbW1lcmNlTWVudU9wZW4iLCJ0b2dnbGVMYW5ndWFnZSIsInByZXZMYW5ndWFnZSIsInRvZ2dsZUVDb21tZXJjZU1lbnUiLCJwcmV2IiwibGlua3MiLCJJY29uIiwiaHJlZiIsIm9uQ2xpY2siLCJsaW5rc01lbnUiLCJpdGVtcyIsImNvbnRhaW5lciIsIml0ZW0iLCJ4cyIsInN4IiwiZGlzcGxheSIsIm1hcCIsImluZGV4IiwibG9jYWxlIiwiY29sb3IiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ3aWR0aCIsIm1sIiwibXIiLCJkaXYiLCJ1bCIsInN1YkluZGV4IiwibGkiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJwIiwidmFyaWFudCIsImZvbnRXZWlnaHQiLCJiZ2NvbG9yIiwib3BhY2l0eSIsIm92ZXJmbG93IiwidGV4dE92ZXJmbG93IiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/dashboard/nav-links.js\n"));

/***/ })

});