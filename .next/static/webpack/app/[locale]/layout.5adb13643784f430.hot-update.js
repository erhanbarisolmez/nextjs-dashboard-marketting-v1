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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/navigation */ \"(app-pages-browser)/./src/navigation.ts\");\n/* harmony import */ var _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Brightness5Outlined,LocalMallOutlined,NotificationsNoneOutlined,Person2Outlined,TranslateOutlined,WidgetsOutlined!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/TranslateOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Brightness5Outlined,LocalMallOutlined,NotificationsNoneOutlined,Person2Outlined,TranslateOutlined,WidgetsOutlined!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/Brightness5Outlined.js\");\n/* harmony import */ var _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Brightness5Outlined,LocalMallOutlined,NotificationsNoneOutlined,Person2Outlined,TranslateOutlined,WidgetsOutlined!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/WidgetsOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Brightness5Outlined,LocalMallOutlined,NotificationsNoneOutlined,Person2Outlined,TranslateOutlined,WidgetsOutlined!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/LocalMallOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Brightness5Outlined,LocalMallOutlined,NotificationsNoneOutlined,Person2Outlined,TranslateOutlined,WidgetsOutlined!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/NotificationsNoneOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Brightness5Outlined,LocalMallOutlined,NotificationsNoneOutlined,Person2Outlined,TranslateOutlined,WidgetsOutlined!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/Person2Outlined.js\");\n/* harmony import */ var _barrel_optimize_names_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Grid,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _barrel_optimize_names_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Grid,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst NavLinks = ()=>{\n    _s();\n    const pathname = (0,_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)(\"\");\n    const [currentLanguage, setCurrentLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(pathname.startsWith(\"/en\") ? \"en\" : \"tr\");\n    const [isECommerceMenuOpen, setECommerceMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const toggleLanguage = ()=>{\n        setCurrentLanguage((prevLanguage)=>prevLanguage === \"en\" ? \"tr\" : \"en\");\n    };\n    const toggleECommerceMenu = ()=>{\n        setECommerceMenuOpen((prev)=>!prev);\n    };\n    const links = [\n        {\n            Icon: _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            href: pathname,\n            onClick: toggleLanguage\n        },\n        {\n            Icon: _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            href: pathname\n        },\n        {\n            Icon: _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            href: \"dashboard\"\n        },\n        {\n            Icon: _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            onClick: toggleECommerceMenu,\n            href: pathname,\n            linksMenu: {\n                onClick: toggleECommerceMenu,\n                items: [\n                    \"Products\",\n                    \"Categories\",\n                    \"Add Product\",\n                    \"Edit Product\",\n                    \"Add Category\",\n                    \"Edit\"\n                ]\n            }\n        },\n        {\n            Icon: _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n            href: \"notification\"\n        },\n        {\n            Icon: _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n            href: \"profile\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            container: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                item: true,\n                xs: 12,\n                sx: {\n                    display: \"flex\"\n                },\n                children: links.map((param)=>{\n                    let { Icon, href, onClick, linksMenu } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navigation__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                            href: href,\n                            locale: currentLanguage,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                                    sx: {\n                                        color: \"gray\",\n                                        display: \"flex\",\n                                        alignItems: \"center\",\n                                        justifyContent: \"center\",\n                                        width: \"100%\",\n                                        ml: 1,\n                                        mr: 2\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 17\n                                }, undefined),\n                                linksMenu && isECommerceMenuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        children: linksMenu.items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navigation__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                                    onClick: toggleECommerceMenu,\n                                                    href: \"e-commerce/\".concat(item.toLowerCase()),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                        p: 1,\n                                                        variant: \"subtitle1\",\n                                                        sx: {\n                                                            color: \"text.secondary\",\n                                                            fontWeight: \"500\",\n                                                            \":active\": {},\n                                                            \":hover\": {\n                                                                bgcolor: \"GrayText\",\n                                                                opacity: 0.5,\n                                                                overflow: \"hidden\",\n                                                                textOverflow: \"initial\",\n                                                                border: 1,\n                                                                borderRadius: 3,\n                                                                color: \"blue\",\n                                                                fontWeight: \"600\"\n                                                            }\n                                                        },\n                                                        children: item\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n                                                        lineNumber: 67,\n                                                        columnNumber: 27\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 27\n                                                }, undefined)\n                                            }, void 0, false))\n                                    }, void 0, false, {\n                                        fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n                            lineNumber: 58,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false);\n                })\n            }, void 0, false, {\n                fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(NavLinks, \"rcPU+51qMDtAKs5vyIEuCMKnVO0=\", false, function() {\n    return [\n        _navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname\n    ];\n});\n_c = NavLinks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavLinks);\nvar _c;\n$RefreshReg$(_c, \"NavLinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9uYXYtbGlua3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ2lEO0FBUXBCO0FBQ29CO0FBQ2hCO0FBRWpDLE1BQU1pQixXQUFXOztJQUNmLE1BQU1DLFdBQVdqQix3REFBV0EsQ0FBQztJQUM3QixNQUFNLENBQUNrQixpQkFBaUJDLG1CQUFtQixHQUFHSiwrQ0FBUUEsQ0FDcERFLFNBQVNHLFVBQVUsQ0FBQyxTQUFTLE9BQU87SUFFdEMsTUFBTSxDQUFDQyxxQkFBcUJDLHFCQUFxQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUU3RCxNQUFNUSxpQkFBaUI7UUFDckJKLG1CQUFtQixDQUFDSyxlQUFrQkEsaUJBQWlCLE9BQU8sT0FBTztJQUN2RTtJQUVBLE1BQU1DLHNCQUFzQjtRQUMxQkgscUJBQXFCLENBQUNJLE9BQVMsQ0FBQ0E7SUFDbEM7SUFFQSxNQUFNQyxRQUFRO1FBQ1o7WUFDRUMsTUFBTWxCLG1NQUFhQTtZQUNuQm1CLE1BQU1aO1lBQ05hLFNBQVNQO1FBQ1g7UUFDQTtZQUFFSyxNQUFNMUIsbU1BQWNBO1lBQUUyQixNQUFNWjtRQUFTO1FBQ3ZDO1lBQUVXLE1BQU1oQixtTUFBV0E7WUFBRWlCLE1BQU87UUFBVztRQUN2QztZQUNFRCxNQUFNeEIsbU1BQVNBO1lBQ2YwQixTQUFTTDtZQUNUSSxNQUFNWjtZQUNOYyxXQUFXO2dCQUNURCxTQUFTTDtnQkFDVE8sT0FBTztvQkFBQztvQkFBWTtvQkFBYztvQkFBZTtvQkFBZ0I7b0JBQWdCO2lCQUFPO1lBQzFGO1FBQ0Y7UUFDQTtZQUFFSixNQUFNdEIsbU1BQWlCQTtZQUFFdUIsTUFBTztRQUFjO1FBQ2hEO1lBQUVELE1BQU1wQixtTUFBVUE7WUFBRXFCLE1BQU87UUFBUztLQUNyQztJQUVELHFCQUNFO2tCQUNFLDRFQUFDaEIsMkZBQUlBO1lBQUNvQixTQUFTO3NCQUNiLDRFQUFDcEIsMkZBQUlBO2dCQUFDcUIsSUFBSTtnQkFBQ0MsSUFBSTtnQkFBSUMsSUFBSTtvQkFDckJDLFNBQVM7Z0JBQ1g7MEJBQ0dWLE1BQU1XLEdBQUcsQ0FBQzt3QkFBQyxFQUFFVixJQUFJLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxTQUFTLEVBQUU7eUNBQzVDO2tDQUNFLDRFQUFDaEMsNkNBQUlBOzRCQUFDOEIsTUFBTUE7NEJBQU1VLFFBQVFyQjs7OENBQ3hCLDhEQUFDVTtvQ0FBS1EsSUFBSTt3Q0FBRUksT0FBTzt3Q0FBUUgsU0FBUzt3Q0FBUUksWUFBWTt3Q0FBVUMsZ0JBQWdCO3dDQUFVQyxPQUFPO3dDQUFRQyxJQUFJO3dDQUFHQyxJQUFJO29DQUFFOzs7Ozs7Z0NBRXZIZCxhQUFhVixxQ0FDWiw4REFBQ3lCOzhDQUNDLDRFQUFDQztrREFDRWhCLFVBQVVDLEtBQUssQ0FBQ00sR0FBRyxDQUFDLENBQUNKLHFCQUNwQjswREFDRSw0RUFBQ25DLDZDQUFJQTtvREFBRStCLFNBQVNMO29EQUFxQkksTUFBTSxjQUFpQyxPQUFuQkssS0FBS2MsV0FBVzs4REFDekUsNEVBQUNsQyw0RkFBVUE7d0RBQUNtQyxHQUFHO3dEQUFHQyxTQUFRO3dEQUFZZCxJQUFJOzREQUN0Q0ksT0FBTzs0REFDUFcsWUFBWTs0REFDWixXQUFXLENBRVg7NERBQ0EsVUFBVTtnRUFDUkMsU0FBUztnRUFDVEMsU0FBUztnRUFDVEMsVUFBVTtnRUFDVkMsY0FBYztnRUFDZEMsUUFBUTtnRUFDUkMsY0FBYztnRUFDZGpCLE9BQU87Z0VBQ1BXLFlBQVk7NERBRWQ7d0RBQ0Y7a0VBQ0dqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQi9CO0dBdkZNbEI7O1FBQ2FoQixvREFBV0E7OztLQUR4QmdCO0FBeUZOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9uYXYtbGlua3MuanM/YzU3NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IExpbmssIHVzZVBhdGhuYW1lIH0gZnJvbSBcIkAvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHtcbiAgQnJpZ2h0bmVzczVPdXRsaW5lZCBhcyBCcmlnaHRuZXNzSWNvbixcbiAgTG9jYWxNYWxsT3V0bGluZWQgYXMgRUNvbW1lcmNlLFxuICBOb3RpZmljYXRpb25zTm9uZU91dGxpbmVkIGFzIE5vdGlmaWNhdGlvbnNJY29uLFxuICBQZXJzb24yT3V0bGluZWQgYXMgUGVyc29uSWNvbixcbiAgVHJhbnNsYXRlT3V0bGluZWQgYXMgVHJhbnNsYXRlSWNvbixcbiAgV2lkZ2V0c091dGxpbmVkIGFzIFdpZGdldHNJY29uLFxufSBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbFwiO1xuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBOYXZMaW5rcyA9ICgpID0+IHtcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZShcIlwiKTtcbiAgY29uc3QgW2N1cnJlbnRMYW5ndWFnZSwgc2V0Q3VycmVudExhbmd1YWdlXSA9IHVzZVN0YXRlKFxuICAgIHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvZW5cIikgPyBcImVuXCIgOiBcInRyXCJcbiAgKTtcbiAgY29uc3QgW2lzRUNvbW1lcmNlTWVudU9wZW4sIHNldEVDb21tZXJjZU1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB0b2dnbGVMYW5ndWFnZSA9ICgpID0+IHtcbiAgICBzZXRDdXJyZW50TGFuZ3VhZ2UoKHByZXZMYW5ndWFnZSkgPT4gKHByZXZMYW5ndWFnZSA9PT0gXCJlblwiID8gXCJ0clwiIDogXCJlblwiKSk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlRUNvbW1lcmNlTWVudSA9ICgpID0+IHtcbiAgICBzZXRFQ29tbWVyY2VNZW51T3BlbigocHJldikgPT4gIXByZXYpO1xuICB9O1xuXG4gIGNvbnN0IGxpbmtzID0gW1xuICAgIHtcbiAgICAgIEljb246IFRyYW5zbGF0ZUljb24sXG4gICAgICBocmVmOiBwYXRobmFtZSxcbiAgICAgIG9uQ2xpY2s6IHRvZ2dsZUxhbmd1YWdlLFxuICAgIH0sXG4gICAgeyBJY29uOiBCcmlnaHRuZXNzSWNvbiwgaHJlZjogcGF0aG5hbWUgfSxcbiAgICB7IEljb246IFdpZGdldHNJY29uLCBocmVmOiBgZGFzaGJvYXJkYCB9LFxuICAgIHtcbiAgICAgIEljb246IEVDb21tZXJjZSxcbiAgICAgIG9uQ2xpY2s6IHRvZ2dsZUVDb21tZXJjZU1lbnUsXG4gICAgICBocmVmOiBwYXRobmFtZSxcbiAgICAgIGxpbmtzTWVudToge1xuICAgICAgICBvbkNsaWNrOiB0b2dnbGVFQ29tbWVyY2VNZW51LFxuICAgICAgICBpdGVtczogW1wiUHJvZHVjdHNcIiwgXCJDYXRlZ29yaWVzXCIsIFwiQWRkIFByb2R1Y3RcIiwgXCJFZGl0IFByb2R1Y3RcIiwgXCJBZGQgQ2F0ZWdvcnlcIiwgXCJFZGl0XCJdLFxuICAgICAgfVxuICAgIH0sXG4gICAgeyBJY29uOiBOb3RpZmljYXRpb25zSWNvbiwgaHJlZjogYG5vdGlmaWNhdGlvbmAgfSxcbiAgICB7IEljb246IFBlcnNvbkljb24sIGhyZWY6IGBwcm9maWxlYCB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxHcmlkIGNvbnRhaW5lcj5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN4PXt7XG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICB9fT5cbiAgICAgICAgICB7bGlua3MubWFwKCh7IEljb24sIGhyZWYsIG9uQ2xpY2ssIGxpbmtzTWVudSB9KSA9PiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtocmVmfSBsb2NhbGU9e2N1cnJlbnRMYW5ndWFnZX0gPlxuICAgICAgICAgICAgICAgIDxJY29uIHN4PXt7IGNvbG9yOiBcImdyYXlcIiwgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB3aWR0aDogJzEwMCUnLCBtbDogMSwgbXI6IDIgfX0gLz5cbiAgICAgICAgIFxuICAgICAgICAgICAgICAgIHtsaW5rc01lbnUgJiYgaXNFQ29tbWVyY2VNZW51T3BlbiAmJiAgKFxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgIHtsaW5rc01lbnUuaXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayAgb25DbGljaz17dG9nZ2xlRUNvbW1lcmNlTWVudX0gaHJlZj17YGUtY29tbWVyY2UvJHtpdGVtLnRvTG93ZXJDYXNlKCl9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHA9ezF9IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd0ZXh0LnNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnNTAwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOmFjdGl2ZVwiOiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6IFwiR3JheVRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dE92ZXJmbG93OiBcImluaXRpYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmx1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICc2MDAnLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2TGlua3M7XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVBhdGhuYW1lIiwiQnJpZ2h0bmVzczVPdXRsaW5lZCIsIkJyaWdodG5lc3NJY29uIiwiTG9jYWxNYWxsT3V0bGluZWQiLCJFQ29tbWVyY2UiLCJOb3RpZmljYXRpb25zTm9uZU91dGxpbmVkIiwiTm90aWZpY2F0aW9uc0ljb24iLCJQZXJzb24yT3V0bGluZWQiLCJQZXJzb25JY29uIiwiVHJhbnNsYXRlT3V0bGluZWQiLCJUcmFuc2xhdGVJY29uIiwiV2lkZ2V0c091dGxpbmVkIiwiV2lkZ2V0c0ljb24iLCJHcmlkIiwiVHlwb2dyYXBoeSIsInVzZVN0YXRlIiwiTmF2TGlua3MiLCJwYXRobmFtZSIsImN1cnJlbnRMYW5ndWFnZSIsInNldEN1cnJlbnRMYW5ndWFnZSIsInN0YXJ0c1dpdGgiLCJpc0VDb21tZXJjZU1lbnVPcGVuIiwic2V0RUNvbW1lcmNlTWVudU9wZW4iLCJ0b2dnbGVMYW5ndWFnZSIsInByZXZMYW5ndWFnZSIsInRvZ2dsZUVDb21tZXJjZU1lbnUiLCJwcmV2IiwibGlua3MiLCJJY29uIiwiaHJlZiIsIm9uQ2xpY2siLCJsaW5rc01lbnUiLCJpdGVtcyIsImNvbnRhaW5lciIsIml0ZW0iLCJ4cyIsInN4IiwiZGlzcGxheSIsIm1hcCIsImxvY2FsZSIsImNvbG9yIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwid2lkdGgiLCJtbCIsIm1yIiwiZGl2IiwidWwiLCJ0b0xvd2VyQ2FzZSIsInAiLCJ2YXJpYW50IiwiZm9udFdlaWdodCIsImJnY29sb3IiLCJvcGFjaXR5Iiwib3ZlcmZsb3ciLCJ0ZXh0T3ZlcmZsb3ciLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/dashboard/nav-links.js\n"));

/***/ })

});