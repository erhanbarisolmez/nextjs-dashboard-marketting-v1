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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/navigation */ \"(app-pages-browser)/./src/navigation.ts\");\n/* harmony import */ var _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Brightness5Outlined,LocalMallOutlined,NotificationsNoneOutlined,Person2Outlined,TranslateOutlined,WidgetsOutlined!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/TranslateOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Brightness5Outlined,LocalMallOutlined,NotificationsNoneOutlined,Person2Outlined,TranslateOutlined,WidgetsOutlined!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/Brightness5Outlined.js\");\n/* harmony import */ var _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Brightness5Outlined,LocalMallOutlined,NotificationsNoneOutlined,Person2Outlined,TranslateOutlined,WidgetsOutlined!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/WidgetsOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Brightness5Outlined,LocalMallOutlined,NotificationsNoneOutlined,Person2Outlined,TranslateOutlined,WidgetsOutlined!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/LocalMallOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Brightness5Outlined,LocalMallOutlined,NotificationsNoneOutlined,Person2Outlined,TranslateOutlined,WidgetsOutlined!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/NotificationsNoneOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Brightness5Outlined,LocalMallOutlined,NotificationsNoneOutlined,Person2Outlined,TranslateOutlined,WidgetsOutlined!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/Person2Outlined.js\");\n/* harmony import */ var _barrel_optimize_names_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Grid,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _barrel_optimize_names_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Grid,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst NavLinks = ()=>{\n    _s();\n    const pathname = (0,_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)();\n    const [currentLanguage, setCurrentLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(pathname.startsWith(\"/en\") ? \"en\" : \"tr\");\n    const [isECommerceMenuOpen, setECommerceMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const toggleLanguage = ()=>{\n        setCurrentLanguage((prevLanguage)=>prevLanguage === \"en\" ? \"tr\" : \"en\");\n    };\n    const toggleECommerceMenu = ()=>{\n        setECommerceMenuOpen((prev)=>!prev);\n    };\n    const links = [\n        {\n            Icon: _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            href: pathname,\n            onClick: toggleLanguage\n        },\n        {\n            Icon: _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            href: \"\"\n        },\n        {\n            Icon: _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            href: \"dashboard\"\n        },\n        {\n            Icon: _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            onClick: toggleECommerceMenu,\n            href: pathname,\n            linksMenu: {\n                onClick: toggleECommerceMenu,\n                items: [\n                    \"Products\",\n                    \"Categories\",\n                    \"Add Product\",\n                    \"Edit Product\",\n                    \"Add Category\",\n                    \"Edit Category\"\n                ]\n            }\n        },\n        {\n            Icon: _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n            href: \"notification\"\n        },\n        {\n            Icon: _barrel_optimize_names_Brightness5Outlined_LocalMallOutlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n            href: \"profile\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            container: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                item: true,\n                xs: 12,\n                sx: {\n                    display: \"flex\"\n                },\n                children: links.map((param)=>{\n                    let { Icon, href, onClick, linksMenu } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navigation__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                            href: href,\n                            locale: currentLanguage,\n                            onClick: onClick,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                                    sx: {\n                                        color: \"gray\",\n                                        display: \"flex\",\n                                        alignItems: \"center\",\n                                        justifyContent: \"center\",\n                                        width: \"100%\",\n                                        ml: 1,\n                                        mr: 2\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 17\n                                }, undefined),\n                                linksMenu && isECommerceMenuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        children: linksMenu.items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navigation__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                                    href: \"e-commerce/\".concat(item.toLowerCase()),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                        p: 1,\n                                                        variant: \"subtitle1\",\n                                                        sx: {\n                                                            display: \"flex\",\n                                                            color: \"text.secondary\",\n                                                            fontWeight: \"500\",\n                                                            \":active\": {},\n                                                            \":hover\": {\n                                                                bgcolor: \"GrayText\",\n                                                                opacity: 0.5,\n                                                                overflow: \"hidden\",\n                                                                textOverflow: \"initial\",\n                                                                border: 1,\n                                                                borderRadius: 3,\n                                                                color: \"blue\",\n                                                                fontWeight: \"600\"\n                                                            }\n                                                        },\n                                                        children: item\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n                                                        lineNumber: 66,\n                                                        columnNumber: 29\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 27\n                                                }, undefined)\n                                            }, void 0, false))\n                                    }, void 0, false, {\n                                        fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n                            lineNumber: 58,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false);\n                })\n            }, void 0, false, {\n                fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/dashboard/nav-links.js\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(NavLinks, \"rcPU+51qMDtAKs5vyIEuCMKnVO0=\", false, function() {\n    return [\n        _navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname\n    ];\n});\n_c = NavLinks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavLinks);\nvar _c;\n$RefreshReg$(_c, \"NavLinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9uYXYtbGlua3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ2lEO0FBUXBCO0FBQ29CO0FBQ2hCO0FBRWpDLE1BQU1pQixXQUFXOztJQUNmLE1BQU1DLFdBQVdqQix3REFBV0E7SUFDNUIsTUFBTSxDQUFDa0IsaUJBQWlCQyxtQkFBbUIsR0FBR0osK0NBQVFBLENBQ3BERSxTQUFTRyxVQUFVLENBQUMsU0FBUyxPQUFPO0lBRXRDLE1BQU0sQ0FBQ0MscUJBQXFCQyxxQkFBcUIsR0FBR1AsK0NBQVFBLENBQUM7SUFFN0QsTUFBTVEsaUJBQWlCO1FBQ3JCSixtQkFBbUIsQ0FBQ0ssZUFBa0JBLGlCQUFpQixPQUFPLE9BQU87SUFDdkU7SUFFQSxNQUFNQyxzQkFBc0I7UUFDMUJILHFCQUFxQixDQUFDSSxPQUFTLENBQUNBO0lBQ2xDO0lBRUEsTUFBTUMsUUFBUTtRQUNaO1lBQ0VDLE1BQU1sQixtTUFBYUE7WUFDbkJtQixNQUFNWjtZQUNOYSxTQUFTUDtRQUNYO1FBQ0E7WUFBRUssTUFBTTFCLG1NQUFjQTtZQUFFMkIsTUFBTTtRQUFHO1FBQ2pDO1lBQUVELE1BQU1oQixtTUFBV0E7WUFBRWlCLE1BQU87UUFBVztRQUN2QztZQUNFRCxNQUFNeEIsbU1BQVNBO1lBQ2YwQixTQUFTTDtZQUNUSSxNQUFNWjtZQUNOYyxXQUFXO2dCQUNURCxTQUFTTDtnQkFDVE8sT0FBTztvQkFBQztvQkFBWTtvQkFBYztvQkFBZTtvQkFBZ0I7b0JBQWdCO2lCQUFpQjtZQUNwRztRQUNGO1FBQ0E7WUFBRUosTUFBTXRCLG1NQUFpQkE7WUFBRXVCLE1BQU87UUFBYztRQUNoRDtZQUFFRCxNQUFNcEIsbU1BQVVBO1lBQUVxQixNQUFPO1FBQVM7S0FDckM7SUFFRCxxQkFDRTtrQkFDRSw0RUFBQ2hCLDJGQUFJQTtZQUFDb0IsU0FBUztzQkFDYiw0RUFBQ3BCLDJGQUFJQTtnQkFBQ3FCLElBQUk7Z0JBQUNDLElBQUk7Z0JBQUlDLElBQUk7b0JBQ3JCQyxTQUFTO2dCQUNYOzBCQUNHVixNQUFNVyxHQUFHLENBQUM7d0JBQUMsRUFBRVYsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFO3lDQUM1QztrQ0FDRSw0RUFBQ2hDLDZDQUFJQTs0QkFBQzhCLE1BQU1BOzRCQUFNVSxRQUFRckI7NEJBQWlCWSxTQUFTQTs7OENBQ2xELDhEQUFDRjtvQ0FBS1EsSUFBSTt3Q0FBRUksT0FBTzt3Q0FBUUgsU0FBUzt3Q0FBUUksWUFBWTt3Q0FBVUMsZ0JBQWdCO3dDQUFVQyxPQUFPO3dDQUFRQyxJQUFJO3dDQUFHQyxJQUFJO29DQUFFOzs7Ozs7Z0NBQ3ZIZCxhQUFhVixxQ0FDWiw4REFBQ3lCOzhDQUNDLDRFQUFDQztrREFDRWhCLFVBQVVDLEtBQUssQ0FBQ00sR0FBRyxDQUFDLENBQUNKLHFCQUNwQjswREFDRSw0RUFBQ25DLDZDQUFJQTtvREFBQzhCLE1BQU0sY0FBaUMsT0FBbkJLLEtBQUtjLFdBQVc7OERBQ3hDLDRFQUFDbEMsNEZBQVVBO3dEQUFDbUMsR0FBRzt3REFBR0MsU0FBUTt3REFBWWQsSUFBSTs0REFDeENDLFNBQVE7NERBQ1JHLE9BQU87NERBQ1BXLFlBQVk7NERBQ1osV0FBVyxDQUVYOzREQUNBLFVBQVU7Z0VBQ1JDLFNBQVM7Z0VBQ1RDLFNBQVM7Z0VBQ1RDLFVBQVU7Z0VBQ1ZDLGNBQWM7Z0VBQ2RDLFFBQVE7Z0VBQ1JDLGNBQWM7Z0VBQ2RqQixPQUFPO2dFQUNQVyxZQUFZOzREQUVkO3dEQUNGO2tFQUNHakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0IvQjtHQXZGTWxCOztRQUNhaEIsb0RBQVdBOzs7S0FEeEJnQjtBQXlGTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvbmF2LWxpbmtzLmpzP2M1NzciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyBMaW5rLCB1c2VQYXRobmFtZSB9IGZyb20gXCJAL25hdmlnYXRpb25cIjtcbmltcG9ydCB7XG4gIEJyaWdodG5lc3M1T3V0bGluZWQgYXMgQnJpZ2h0bmVzc0ljb24sXG4gIExvY2FsTWFsbE91dGxpbmVkIGFzIEVDb21tZXJjZSxcbiAgTm90aWZpY2F0aW9uc05vbmVPdXRsaW5lZCBhcyBOb3RpZmljYXRpb25zSWNvbixcbiAgUGVyc29uMk91dGxpbmVkIGFzIFBlcnNvbkljb24sXG4gIFRyYW5zbGF0ZU91dGxpbmVkIGFzIFRyYW5zbGF0ZUljb24sXG4gIFdpZGdldHNPdXRsaW5lZCBhcyBXaWRnZXRzSWNvbixcbn0gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWxcIjtcbmltcG9ydCB7IEdyaWQsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTmF2TGlua3MgPSAoKSA9PiB7XG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcbiAgY29uc3QgW2N1cnJlbnRMYW5ndWFnZSwgc2V0Q3VycmVudExhbmd1YWdlXSA9IHVzZVN0YXRlKFxuICAgIHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvZW5cIikgPyBcImVuXCIgOiBcInRyXCJcbiAgKTtcbiAgY29uc3QgW2lzRUNvbW1lcmNlTWVudU9wZW4sIHNldEVDb21tZXJjZU1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB0b2dnbGVMYW5ndWFnZSA9ICgpID0+IHtcbiAgICBzZXRDdXJyZW50TGFuZ3VhZ2UoKHByZXZMYW5ndWFnZSkgPT4gKHByZXZMYW5ndWFnZSA9PT0gXCJlblwiID8gXCJ0clwiIDogXCJlblwiKSk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlRUNvbW1lcmNlTWVudSA9ICgpID0+IHtcbiAgICBzZXRFQ29tbWVyY2VNZW51T3BlbigocHJldikgPT4gIXByZXYpO1xuICB9O1xuXG4gIGNvbnN0IGxpbmtzID0gW1xuICAgIHtcbiAgICAgIEljb246IFRyYW5zbGF0ZUljb24sXG4gICAgICBocmVmOiBwYXRobmFtZSxcbiAgICAgIG9uQ2xpY2s6IHRvZ2dsZUxhbmd1YWdlLFxuICAgIH0sXG4gICAgeyBJY29uOiBCcmlnaHRuZXNzSWNvbiwgaHJlZjogXCJcIiB9LFxuICAgIHsgSWNvbjogV2lkZ2V0c0ljb24sIGhyZWY6IGBkYXNoYm9hcmRgIH0sXG4gICAge1xuICAgICAgSWNvbjogRUNvbW1lcmNlLFxuICAgICAgb25DbGljazogdG9nZ2xlRUNvbW1lcmNlTWVudSxcbiAgICAgIGhyZWY6IHBhdGhuYW1lLFxuICAgICAgbGlua3NNZW51OiB7XG4gICAgICAgIG9uQ2xpY2s6IHRvZ2dsZUVDb21tZXJjZU1lbnUsXG4gICAgICAgIGl0ZW1zOiBbXCJQcm9kdWN0c1wiLCBcIkNhdGVnb3JpZXNcIiwgXCJBZGQgUHJvZHVjdFwiLCBcIkVkaXQgUHJvZHVjdFwiLCBcIkFkZCBDYXRlZ29yeVwiLCBcIkVkaXQgQ2F0ZWdvcnlcIixdLFxuICAgICAgfVxuICAgIH0sXG4gICAgeyBJY29uOiBOb3RpZmljYXRpb25zSWNvbiwgaHJlZjogYG5vdGlmaWNhdGlvbmAgfSxcbiAgICB7IEljb246IFBlcnNvbkljb24sIGhyZWY6IGBwcm9maWxlYCB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxHcmlkIGNvbnRhaW5lcj5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN4PXt7XG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICB9fT5cbiAgICAgICAgICB7bGlua3MubWFwKCh7IEljb24sIGhyZWYsIG9uQ2xpY2ssIGxpbmtzTWVudSB9KSA9PiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtocmVmfSBsb2NhbGU9e2N1cnJlbnRMYW5ndWFnZX0gb25DbGljaz17b25DbGlja30+XG4gICAgICAgICAgICAgICAgPEljb24gc3g9e3sgY29sb3I6IFwiZ3JheVwiLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHdpZHRoOiAnMTAwJScsIG1sOiAxLCBtcjogMiB9fSAvPlxuICAgICAgICAgICAgICAgIHtsaW5rc01lbnUgJiYgaXNFQ29tbWVyY2VNZW51T3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAge2xpbmtzTWVudS5pdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2BlLWNvbW1lcmNlLyR7aXRlbS50b0xvd2VyQ2FzZSgpfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHA9ezF9IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTonZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3RleHQuc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI6YWN0aXZlXCI6IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjogXCJHcmF5VGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6IFwiaW5pdGlhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibHVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJzYwMCcsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZMaW5rcztcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUGF0aG5hbWUiLCJCcmlnaHRuZXNzNU91dGxpbmVkIiwiQnJpZ2h0bmVzc0ljb24iLCJMb2NhbE1hbGxPdXRsaW5lZCIsIkVDb21tZXJjZSIsIk5vdGlmaWNhdGlvbnNOb25lT3V0bGluZWQiLCJOb3RpZmljYXRpb25zSWNvbiIsIlBlcnNvbjJPdXRsaW5lZCIsIlBlcnNvbkljb24iLCJUcmFuc2xhdGVPdXRsaW5lZCIsIlRyYW5zbGF0ZUljb24iLCJXaWRnZXRzT3V0bGluZWQiLCJXaWRnZXRzSWNvbiIsIkdyaWQiLCJUeXBvZ3JhcGh5IiwidXNlU3RhdGUiLCJOYXZMaW5rcyIsInBhdGhuYW1lIiwiY3VycmVudExhbmd1YWdlIiwic2V0Q3VycmVudExhbmd1YWdlIiwic3RhcnRzV2l0aCIsImlzRUNvbW1lcmNlTWVudU9wZW4iLCJzZXRFQ29tbWVyY2VNZW51T3BlbiIsInRvZ2dsZUxhbmd1YWdlIiwicHJldkxhbmd1YWdlIiwidG9nZ2xlRUNvbW1lcmNlTWVudSIsInByZXYiLCJsaW5rcyIsIkljb24iLCJocmVmIiwib25DbGljayIsImxpbmtzTWVudSIsIml0ZW1zIiwiY29udGFpbmVyIiwiaXRlbSIsInhzIiwic3giLCJkaXNwbGF5IiwibWFwIiwibG9jYWxlIiwiY29sb3IiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ3aWR0aCIsIm1sIiwibXIiLCJkaXYiLCJ1bCIsInRvTG93ZXJDYXNlIiwicCIsInZhcmlhbnQiLCJmb250V2VpZ2h0IiwiYmdjb2xvciIsIm9wYWNpdHkiLCJvdmVyZmxvdyIsInRleHRPdmVyZmxvdyIsImJvcmRlciIsImJvcmRlclJhZGl1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/dashboard/nav-links.js\n"));

/***/ })

});