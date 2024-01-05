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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/navigation */ \"(app-pages-browser)/./src/navigation.ts\");\n/* harmony import */ var _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Brightness5Outlined,LocalMallOutlined,NotificationsNoneOutlined,Person2Outlined,TranslateOutlined,WidgetsOutlined!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/TranslateOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Brightness5Outlined,LocalMallOutlined,NotificationsNoneOutlined,Person2Outlined,TranslateOutlined,WidgetsOutlined!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/Brightness5Outlined.js\");\n/* harmony import */ var _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Brightness5Outlined,LocalMallOutlined,NotificationsNoneOutlined,Person2Outlined,TranslateOutlined,WidgetsOutlined!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/WidgetsOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Brightness5Outlined,LocalMallOutlined,NotificationsNoneOutlined,Person2Outlined,TranslateOutlined,WidgetsOutlined!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/LocalMallOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Brightness5Outlined,LocalMallOutlined,NotificationsNoneOutlined,Person2Outlined,TranslateOutlined,WidgetsOutlined!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/NotificationsNoneOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Brightness5Outlined,LocalMallOutlined,NotificationsNoneOutlined,Person2Outlined,TranslateOutlined,WidgetsOutlined!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/Person2Outlined.js\");\n/* harmony import */ var _barrel_optimize_names_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Grid,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _barrel_optimize_names_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Grid,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst NavLinks = ()=>{\n    _s();\n    const pathname = (0,_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)();\n    const [currentLanguage, setCurrentLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(pathname.startsWith(\"/en\") ? \"en\" : \"tr\");\n    const [isECommerceMenuOpen, setECommerceMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const toggleLanguage = ()=>{\n        setCurrentLanguage((prevLanguage)=>prevLanguage === \"en\" ? \"tr\" : \"en\");\n    };\n    const toggleECommerceMenu = ()=>{\n        setECommerceMenuOpen((prev)=>!prev);\n    };\n    const links = [\n        {\n            Icon: _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            href: pathname,\n            onClick: toggleLanguage\n        },\n        {\n            Icon: _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            href: pathname\n        },\n        {\n            Icon: _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            href: \"dashboard\"\n        },\n        {\n            Icon: _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            onClick: toggleECommerceMenu,\n            href: pathname,\n            linksMenu: {\n                onClick: toggleECommerceMenu,\n                items: [\n                    {\n                        label: \"Products\",\n                        href: \"e-commerce/products\"\n                    },\n                    {\n                        label: \"Categories\",\n                        href: \"e-commerce/categories\"\n                    },\n                    {\n                        label: \"Add Product\",\n                        href: \"e-commerce/add-product\"\n                    },\n                    {\n                        label: \"Edit Product\",\n                        href: \"e-commerce/edit-product\"\n                    },\n                    {\n                        label: \"Add Category\",\n                        href: \"e-commerce/add-category\"\n                    },\n                    {\n                        label: \"Edit Category\",\n                        href: \"e-commerce/edit-category\"\n                    }\n                ]\n            }\n        },\n        {\n            Icon: _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n            href: \"notification\"\n        },\n        {\n            Icon: _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n            href: \"profile\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            container: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                item: true,\n                xs: 12,\n                sx: {\n                    display: \"flex\"\n                },\n                children: links.map((param)=>{\n                    let { Icon, href, onClick, linksMenu, label } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navigation__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                            href: href,\n                            locale: currentLanguage,\n                            onClick: onClick,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                                    sx: {\n                                        color: \"gray\",\n                                        display: \"flex\",\n                                        alignItems: \"center\",\n                                        justifyContent: \"center\",\n                                        width: \"100%\",\n                                        ml: 1,\n                                        mr: 2\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 17\n                                }, undefined),\n                                linksMenu && isECommerceMenuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        children: linksMenu.items.map((label)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navigation__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                                    href: \"\".concat(label.href || label.toLowerCase()),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                        p: 1,\n                                                        variant: \"subtitle1\",\n                                                        sx: {\n                                                            display: \"flex\",\n                                                            color: \"text.secondary\",\n                                                            fontWeight: \"500\",\n                                                            \":active\": {},\n                                                            \":hover\": {\n                                                                bgcolor: \"GrayText\",\n                                                                opacity: 0.5,\n                                                                overflow: \"hidden\",\n                                                                textOverflow: \"initial\",\n                                                                border: 1,\n                                                                borderRadius: 3,\n                                                                color: \"blue\",\n                                                                fontWeight: \"600\"\n                                                            }\n                                                        },\n                                                        children: label\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n                                                        lineNumber: 73,\n                                                        columnNumber: 29\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 27\n                                                }, undefined)\n                                            }, void 0, false))\n                                    }, void 0, false, {\n                                        fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n                            lineNumber: 65,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false);\n                })\n            }, void 0, false, {\n                fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(NavLinks, \"rcPU+51qMDtAKs5vyIEuCMKnVO0=\", false, function() {\n    return [\n        _navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname\n    ];\n});\n_c = NavLinks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavLinks);\nvar _c;\n$RefreshReg$(_c, \"NavLinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9uYXYtbGlua3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ2lEO0FBUXBCO0FBQ29CO0FBQ2hCO0FBRWpDLE1BQU1pQixXQUFXOztJQUNmLE1BQU1DLFdBQVdqQix3REFBV0E7SUFDNUIsTUFBTSxDQUFDa0IsaUJBQWlCQyxtQkFBbUIsR0FBR0osK0NBQVFBLENBQ3BERSxTQUFTRyxVQUFVLENBQUMsU0FBUyxPQUFPO0lBRXRDLE1BQU0sQ0FBQ0MscUJBQXFCQyxxQkFBcUIsR0FBR1AsK0NBQVFBLENBQUM7SUFFN0QsTUFBTVEsaUJBQWlCO1FBQ3JCSixtQkFBbUIsQ0FBQ0ssZUFBa0JBLGlCQUFpQixPQUFPLE9BQU87SUFDdkU7SUFFQSxNQUFNQyxzQkFBc0I7UUFDMUJILHFCQUFxQixDQUFDSSxPQUFTLENBQUNBO0lBQ2xDO0lBRUEsTUFBTUMsUUFBUTtRQUNaO1lBQ0VDLE1BQU1sQixtTUFBYUE7WUFDbkJtQixNQUFNWjtZQUNOYSxTQUFTUDtRQUNYO1FBQ0E7WUFBRUssTUFBTTFCLG1NQUFjQTtZQUFFMkIsTUFBTVo7UUFBUztRQUN2QztZQUFFVyxNQUFNaEIsbU1BQVdBO1lBQUVpQixNQUFPO1FBQVc7UUFDdkM7WUFDRUQsTUFBTXhCLG1NQUFTQTtZQUNmMEIsU0FBU0w7WUFDVEksTUFBTVo7WUFDTmMsV0FBVztnQkFDVEQsU0FBU0w7Z0JBQ1RPLE9BQU87b0JBQ0w7d0JBQUVDLE9BQU87d0JBQVlKLE1BQU07b0JBQXNCO29CQUNqRDt3QkFBRUksT0FBTzt3QkFBY0osTUFBTTtvQkFBd0I7b0JBQ3JEO3dCQUFFSSxPQUFPO3dCQUFlSixNQUFNO29CQUF5QjtvQkFDdkQ7d0JBQUVJLE9BQU87d0JBQWdCSixNQUFNO29CQUEwQjtvQkFDekQ7d0JBQUVJLE9BQU87d0JBQWdCSixNQUFNO29CQUEwQjtvQkFDekQ7d0JBQUVJLE9BQU87d0JBQWlCSixNQUFNO29CQUEyQjtpQkFDNUQ7WUFDSDtRQUNGO1FBQ0E7WUFBRUQsTUFBTXRCLG1NQUFpQkE7WUFBRXVCLE1BQU87UUFBYztRQUNoRDtZQUFFRCxNQUFNcEIsbU1BQVVBO1lBQUVxQixNQUFPO1FBQVM7S0FDckM7SUFFRCxxQkFDRTtrQkFDRSw0RUFBQ2hCLDJGQUFJQTtZQUFDcUIsU0FBUztzQkFDYiw0RUFBQ3JCLDJGQUFJQTtnQkFBQ3NCLElBQUk7Z0JBQUNDLElBQUk7Z0JBQUlDLElBQUk7b0JBQ3JCQyxTQUFTO2dCQUNYOzBCQUNHWCxNQUFNWSxHQUFHLENBQUM7d0JBQUMsRUFBRVgsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFDRSxLQUFLLEVBQUU7eUNBQ2xEO2tDQUNFLDRFQUFDbEMsNkNBQUlBOzRCQUFDOEIsTUFBTUE7NEJBQU1XLFFBQVF0Qjs0QkFBaUJZLFNBQVNBOzs4Q0FDbEQsOERBQUNGO29DQUFLUyxJQUFJO3dDQUFFSSxPQUFPO3dDQUFRSCxTQUFTO3dDQUFRSSxZQUFZO3dDQUFVQyxnQkFBZ0I7d0NBQVVDLE9BQU87d0NBQVFDLElBQUk7d0NBQUdDLElBQUk7b0NBQUU7Ozs7OztnQ0FDdkhmLGFBQWFWLHFDQUNaLDhEQUFDMEI7OENBQ0MsNEVBQUNDO2tEQUNFakIsVUFBVUMsS0FBSyxDQUFDTyxHQUFHLENBQUMsQ0FBQ04sc0JBQ3BCOzBEQUNFLDRFQUFDbEMsNkNBQUlBO29EQUFDOEIsTUFBTSxHQUFxQyxPQUFsQ0ksTUFBTUosSUFBSSxJQUFJSSxNQUFNZ0IsV0FBVzs4REFDNUMsNEVBQUNuQyw0RkFBVUE7d0RBQUNvQyxHQUFHO3dEQUFHQyxTQUFRO3dEQUFZZCxJQUFJOzREQUN4Q0MsU0FBUTs0REFDUkcsT0FBTzs0REFDUFcsWUFBWTs0REFDWixXQUFXLENBRVg7NERBQ0EsVUFBVTtnRUFDUkMsU0FBUztnRUFDVEMsU0FBUztnRUFDVEMsVUFBVTtnRUFDVkMsY0FBYztnRUFDZEMsUUFBUTtnRUFDUkMsY0FBYztnRUFDZGpCLE9BQU87Z0VBQ1BXLFlBQVk7NERBRWQ7d0RBQ0Y7a0VBQ0duQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQi9CO0dBOUZNakI7O1FBQ2FoQixvREFBV0E7OztLQUR4QmdCO0FBZ0dOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9uYXYtbGlua3MuanM/YzU3NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IExpbmssIHVzZVBhdGhuYW1lIH0gZnJvbSBcIkAvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHtcbiAgQnJpZ2h0bmVzczVPdXRsaW5lZCBhcyBCcmlnaHRuZXNzSWNvbixcbiAgTG9jYWxNYWxsT3V0bGluZWQgYXMgRUNvbW1lcmNlLFxuICBOb3RpZmljYXRpb25zTm9uZU91dGxpbmVkIGFzIE5vdGlmaWNhdGlvbnNJY29uLFxuICBQZXJzb24yT3V0bGluZWQgYXMgUGVyc29uSWNvbixcbiAgVHJhbnNsYXRlT3V0bGluZWQgYXMgVHJhbnNsYXRlSWNvbixcbiAgV2lkZ2V0c091dGxpbmVkIGFzIFdpZGdldHNJY29uLFxufSBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbFwiO1xuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBOYXZMaW5rcyA9ICgpID0+IHtcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuICBjb25zdCBbY3VycmVudExhbmd1YWdlLCBzZXRDdXJyZW50TGFuZ3VhZ2VdID0gdXNlU3RhdGUoXG4gICAgcGF0aG5hbWUuc3RhcnRzV2l0aChcIi9lblwiKSA/IFwiZW5cIiA6IFwidHJcIlxuICApO1xuICBjb25zdCBbaXNFQ29tbWVyY2VNZW51T3Blbiwgc2V0RUNvbW1lcmNlTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHRvZ2dsZUxhbmd1YWdlID0gKCkgPT4ge1xuICAgIHNldEN1cnJlbnRMYW5ndWFnZSgocHJldkxhbmd1YWdlKSA9PiAocHJldkxhbmd1YWdlID09PSBcImVuXCIgPyBcInRyXCIgOiBcImVuXCIpKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVFQ29tbWVyY2VNZW51ID0gKCkgPT4ge1xuICAgIHNldEVDb21tZXJjZU1lbnVPcGVuKChwcmV2KSA9PiAhcHJldik7XG4gIH07XG5cbiAgY29uc3QgbGlua3MgPSBbXG4gICAge1xuICAgICAgSWNvbjogVHJhbnNsYXRlSWNvbixcbiAgICAgIGhyZWY6IHBhdGhuYW1lLFxuICAgICAgb25DbGljazogdG9nZ2xlTGFuZ3VhZ2UsXG4gICAgfSxcbiAgICB7IEljb246IEJyaWdodG5lc3NJY29uLCBocmVmOiBwYXRobmFtZSB9LFxuICAgIHsgSWNvbjogV2lkZ2V0c0ljb24sIGhyZWY6IGBkYXNoYm9hcmRgIH0sXG4gICAge1xuICAgICAgSWNvbjogRUNvbW1lcmNlLFxuICAgICAgb25DbGljazogdG9nZ2xlRUNvbW1lcmNlTWVudSxcbiAgICAgIGhyZWY6IHBhdGhuYW1lLFxuICAgICAgbGlua3NNZW51OiB7XG4gICAgICAgIG9uQ2xpY2s6IHRvZ2dsZUVDb21tZXJjZU1lbnUsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyBsYWJlbDogXCJQcm9kdWN0c1wiLCBocmVmOiBcImUtY29tbWVyY2UvcHJvZHVjdHNcIiB9LFxuICAgICAgICAgIHsgbGFiZWw6IFwiQ2F0ZWdvcmllc1wiLCBocmVmOiBcImUtY29tbWVyY2UvY2F0ZWdvcmllc1wiIH0sXG4gICAgICAgICAgeyBsYWJlbDogXCJBZGQgUHJvZHVjdFwiLCBocmVmOiBcImUtY29tbWVyY2UvYWRkLXByb2R1Y3RcIiB9LFxuICAgICAgICAgIHsgbGFiZWw6IFwiRWRpdCBQcm9kdWN0XCIsIGhyZWY6IFwiZS1jb21tZXJjZS9lZGl0LXByb2R1Y3RcIiB9LFxuICAgICAgICAgIHsgbGFiZWw6IFwiQWRkIENhdGVnb3J5XCIsIGhyZWY6IFwiZS1jb21tZXJjZS9hZGQtY2F0ZWdvcnlcIiB9LFxuICAgICAgICAgIHsgbGFiZWw6IFwiRWRpdCBDYXRlZ29yeVwiLCBocmVmOiBcImUtY29tbWVyY2UvZWRpdC1jYXRlZ29yeVwiIH0sXG4gICAgICAgIF0sXG4gICAgICB9XG4gICAgfSxcbiAgICB7IEljb246IE5vdGlmaWNhdGlvbnNJY29uLCBocmVmOiBgbm90aWZpY2F0aW9uYCB9LFxuICAgIHsgSWNvbjogUGVyc29uSWNvbiwgaHJlZjogYHByb2ZpbGVgIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3g9e3tcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIH19PlxuICAgICAgICAgIHtsaW5rcy5tYXAoKHsgSWNvbiwgaHJlZiwgb25DbGljaywgbGlua3NNZW51LGxhYmVsIH0pID0+IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9IGxvY2FsZT17Y3VycmVudExhbmd1YWdlfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgICAgICAgICA8SWNvbiBzeD17eyBjb2xvcjogXCJncmF5XCIsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgd2lkdGg6ICcxMDAlJywgbWw6IDEsIG1yOiAyIH19IC8+XG4gICAgICAgICAgICAgICAge2xpbmtzTWVudSAmJiBpc0VDb21tZXJjZU1lbnVPcGVuICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICB7bGlua3NNZW51Lml0ZW1zLm1hcCgobGFiZWwpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake2xhYmVsLmhyZWYgfHwgbGFiZWwudG9Mb3dlckNhc2UoKX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBwPXsxfSB2YXJpYW50PVwic3VidGl0bGUxXCIgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6J2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd0ZXh0LnNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnNTAwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOmFjdGl2ZVwiOiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6IFwiR3JheVRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dE92ZXJmbG93OiBcImluaXRpYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmx1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICc2MDAnLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkxpbmtzO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VQYXRobmFtZSIsIkJyaWdodG5lc3M1T3V0bGluZWQiLCJCcmlnaHRuZXNzSWNvbiIsIkxvY2FsTWFsbE91dGxpbmVkIiwiRUNvbW1lcmNlIiwiTm90aWZpY2F0aW9uc05vbmVPdXRsaW5lZCIsIk5vdGlmaWNhdGlvbnNJY29uIiwiUGVyc29uMk91dGxpbmVkIiwiUGVyc29uSWNvbiIsIlRyYW5zbGF0ZU91dGxpbmVkIiwiVHJhbnNsYXRlSWNvbiIsIldpZGdldHNPdXRsaW5lZCIsIldpZGdldHNJY29uIiwiR3JpZCIsIlR5cG9ncmFwaHkiLCJ1c2VTdGF0ZSIsIk5hdkxpbmtzIiwicGF0aG5hbWUiLCJjdXJyZW50TGFuZ3VhZ2UiLCJzZXRDdXJyZW50TGFuZ3VhZ2UiLCJzdGFydHNXaXRoIiwiaXNFQ29tbWVyY2VNZW51T3BlbiIsInNldEVDb21tZXJjZU1lbnVPcGVuIiwidG9nZ2xlTGFuZ3VhZ2UiLCJwcmV2TGFuZ3VhZ2UiLCJ0b2dnbGVFQ29tbWVyY2VNZW51IiwicHJldiIsImxpbmtzIiwiSWNvbiIsImhyZWYiLCJvbkNsaWNrIiwibGlua3NNZW51IiwiaXRlbXMiLCJsYWJlbCIsImNvbnRhaW5lciIsIml0ZW0iLCJ4cyIsInN4IiwiZGlzcGxheSIsIm1hcCIsImxvY2FsZSIsImNvbG9yIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwid2lkdGgiLCJtbCIsIm1yIiwiZGl2IiwidWwiLCJ0b0xvd2VyQ2FzZSIsInAiLCJ2YXJpYW50IiwiZm9udFdlaWdodCIsImJnY29sb3IiLCJvcGFjaXR5Iiwib3ZlcmZsb3ciLCJ0ZXh0T3ZlcmZsb3ciLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/dashboard/nav-links.js\n"));

/***/ })

});