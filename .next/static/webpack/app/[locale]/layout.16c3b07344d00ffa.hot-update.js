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

/***/ "(app-pages-browser)/./src/components/home/nav-links.js":
/*!******************************************!*\
  !*** ./src/components/home/nav-links.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/navigation */ \"(app-pages-browser)/./src/navigation.ts\");\n/* harmony import */ var _barrel_optimize_names_Brightness5Outlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Brightness5Outlined,NotificationsNoneOutlined,Person2Outlined,TranslateOutlined,WidgetsOutlined!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/TranslateOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_Brightness5Outlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Brightness5Outlined,NotificationsNoneOutlined,Person2Outlined,TranslateOutlined,WidgetsOutlined!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/Brightness5Outlined.js\");\n/* harmony import */ var _barrel_optimize_names_Brightness5Outlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Brightness5Outlined,NotificationsNoneOutlined,Person2Outlined,TranslateOutlined,WidgetsOutlined!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/WidgetsOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_Brightness5Outlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Brightness5Outlined,NotificationsNoneOutlined,Person2Outlined,TranslateOutlined,WidgetsOutlined!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/NotificationsNoneOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_Brightness5Outlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Brightness5Outlined,NotificationsNoneOutlined,Person2Outlined,TranslateOutlined,WidgetsOutlined!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/Person2Outlined.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst NavLinks = ()=>{\n    _s();\n    const pathname = (0,_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)();\n    const [currentLanguage, setCurrentLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(pathname.startsWith(\"/en\") ? \"en\" : \"tr\");\n    const toggleLanguage = ()=>{\n        setCurrentLanguage((prevLanguage)=>prevLanguage === \"en\" ? \"tr\" :  true ? \"en\" : 0);\n    };\n    const links = [\n        {\n            Icon: _barrel_optimize_names_Brightness5Outlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            href: {\n                pathname\n            },\n            onClick: toggleLanguage\n        },\n        {\n            Icon: _barrel_optimize_names_Brightness5Outlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            href: \"test\"\n        },\n        {\n            Icon: _barrel_optimize_names_Brightness5Outlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            href: \"dashboard\"\n        },\n        {\n            Icon: _barrel_optimize_names_Brightness5Outlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            href: \"notification\"\n        },\n        {\n            Icon: _barrel_optimize_names_Brightness5Outlined_NotificationsNoneOutlined_Person2Outlined_TranslateOutlined_WidgetsOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n            href: \"profile\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: links.map((param, index)=>{\n            let { Icon, href, onClick } = param;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navigation__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                href: href,\n                locale: currentLanguage,\n                onClick: onClick,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                    sx: {\n                        color: \"gray\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/home/nav-links.js\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, undefined)\n            }, index, false, {\n                fileName: \"/home/erhanbarisolmez/react/nextjs-dashboard2/src/components/home/nav-links.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, undefined);\n        })\n    }, void 0, false);\n};\n_s(NavLinks, \"QTAE0Gb3v+iilhYltierZp1g/ek=\", false, function() {\n    return [\n        _navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname\n    ];\n});\n_c = NavLinks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavLinks);\nvar _c;\n$RefreshReg$(_c, \"NavLinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2hvbWUvbmF2LWxpbmtzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNpRDtBQU9wQjtBQUNJO0FBRWpDLE1BQU1hLFdBQVc7O0lBQ2YsTUFBTUMsV0FBV2Isd0RBQVdBO0lBQzVCLE1BQU0sQ0FBQ2MsaUJBQWlCQyxtQkFBbUIsR0FBR0osK0NBQVFBLENBQ3BERSxTQUFTRyxVQUFVLENBQUMsU0FBUyxPQUFPO0lBR3RDLE1BQU1DLGlCQUFpQjtRQUNyQkYsbUJBQW1CLENBQUNHLGVBQWtCQSxpQkFBaUIsT0FBTyxPQUFPLEtBQTZCLEdBQUcsT0FBTyxDQUFJO0lBQ2xIO0lBRUEsTUFBTUMsUUFBUTtRQUNaO1lBQ0VDLE1BQU1aLGlMQUFhQTtZQUNuQmEsTUFBTTtnQkFBRVI7WUFBUztZQUNqQlMsU0FBU0w7UUFDWDtRQUNBO1lBQUVHLE1BQU1sQixpTEFBY0E7WUFBRW1CLE1BQU87UUFBTTtRQUNyQztZQUFFRCxNQUFNVixpTEFBV0E7WUFBRVcsTUFBTztRQUFXO1FBQ3ZDO1lBQUVELE1BQU1oQixpTEFBaUJBO1lBQUVpQixNQUFPO1FBQWM7UUFDaEQ7WUFBRUQsTUFBTWQsaUxBQVVBO1lBQUVlLE1BQU87UUFBUztLQUNyQztJQUVELHFCQUNFO2tCQUNHRixNQUFNSSxHQUFHLENBQUMsUUFBMEJDO2dCQUF6QixFQUFFSixJQUFJLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFO2lDQUNqQyw4REFBQ3ZCLDZDQUFJQTtnQkFBYXNCLE1BQU1BO2dCQUFNSSxRQUFRWDtnQkFBaUJRLFNBQVNBOzBCQUM5RCw0RUFBQ0Y7b0JBQUtNLElBQUk7d0JBQUVDLE9BQU87b0JBQU87Ozs7OztlQURqQkg7Ozs7Ozs7QUFNbkI7R0EvQk1aOztRQUNhWixvREFBV0E7OztLQUR4Qlk7QUFpQ04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9uYXYtbGlua3MuanM/NzE1MyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IExpbmssIHVzZVBhdGhuYW1lIH0gZnJvbSBcIkAvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHtcbiAgQnJpZ2h0bmVzczVPdXRsaW5lZCBhcyBCcmlnaHRuZXNzSWNvbixcbiAgTm90aWZpY2F0aW9uc05vbmVPdXRsaW5lZCBhcyBOb3RpZmljYXRpb25zSWNvbixcbiAgUGVyc29uMk91dGxpbmVkIGFzIFBlcnNvbkljb24sXG4gIFRyYW5zbGF0ZU91dGxpbmVkIGFzIFRyYW5zbGF0ZUljb24sXG4gIFdpZGdldHNPdXRsaW5lZCBhcyBXaWRnZXRzSWNvbixcbn0gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWxcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IE5hdkxpbmtzID0gKCkgPT4ge1xuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XG4gIGNvbnN0IFtjdXJyZW50TGFuZ3VhZ2UsIHNldEN1cnJlbnRMYW5ndWFnZV0gPSB1c2VTdGF0ZShcbiAgICBwYXRobmFtZS5zdGFydHNXaXRoKFwiL2VuXCIpID8gXCJlblwiIDogXCJ0clwiXG4gICk7XG5cbiAgY29uc3QgdG9nZ2xlTGFuZ3VhZ2UgPSAoKSA9PiB7XG4gICAgc2V0Q3VycmVudExhbmd1YWdlKChwcmV2TGFuZ3VhZ2UpID0+IChwcmV2TGFuZ3VhZ2UgPT09IFwiZW5cIiA/IFwidHJcIiA6IFwiZW5cIiB8fCBwcmV2TGFuZ3VhZ2UgPT09IFwidHJcIiA/IFwiZW5cIiA6IFwidHJcIiApKTtcbiAgfTtcblxuICBjb25zdCBsaW5rcyA9IFtcbiAgICB7XG4gICAgICBJY29uOiBUcmFuc2xhdGVJY29uLFxuICAgICAgaHJlZjogeyBwYXRobmFtZSB9LFxuICAgICAgb25DbGljazogdG9nZ2xlTGFuZ3VhZ2UsIFxuICAgIH0sXG4gICAgeyBJY29uOiBCcmlnaHRuZXNzSWNvbiwgaHJlZjogYHRlc3RgIH0sXG4gICAgeyBJY29uOiBXaWRnZXRzSWNvbiwgaHJlZjogYGRhc2hib2FyZGAgfSxcbiAgICB7IEljb246IE5vdGlmaWNhdGlvbnNJY29uLCBocmVmOiBgbm90aWZpY2F0aW9uYCB9LFxuICAgIHsgSWNvbjogUGVyc29uSWNvbiwgaHJlZjogYHByb2ZpbGVgIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2xpbmtzLm1hcCgoeyBJY29uLCBocmVmLCBvbkNsaWNrIH0sIGluZGV4KSA9PiAoXG4gICAgICAgIDxMaW5rIGtleT17aW5kZXh9IGhyZWY9e2hyZWZ9IGxvY2FsZT17Y3VycmVudExhbmd1YWdlfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgICA8SWNvbiBzeD17eyBjb2xvcjogXCJncmF5XCIgfX0gLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZMaW5rcztcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUGF0aG5hbWUiLCJCcmlnaHRuZXNzNU91dGxpbmVkIiwiQnJpZ2h0bmVzc0ljb24iLCJOb3RpZmljYXRpb25zTm9uZU91dGxpbmVkIiwiTm90aWZpY2F0aW9uc0ljb24iLCJQZXJzb24yT3V0bGluZWQiLCJQZXJzb25JY29uIiwiVHJhbnNsYXRlT3V0bGluZWQiLCJUcmFuc2xhdGVJY29uIiwiV2lkZ2V0c091dGxpbmVkIiwiV2lkZ2V0c0ljb24iLCJ1c2VTdGF0ZSIsIk5hdkxpbmtzIiwicGF0aG5hbWUiLCJjdXJyZW50TGFuZ3VhZ2UiLCJzZXRDdXJyZW50TGFuZ3VhZ2UiLCJzdGFydHNXaXRoIiwidG9nZ2xlTGFuZ3VhZ2UiLCJwcmV2TGFuZ3VhZ2UiLCJsaW5rcyIsIkljb24iLCJocmVmIiwib25DbGljayIsIm1hcCIsImluZGV4IiwibG9jYWxlIiwic3giLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/home/nav-links.js\n"));

/***/ })

});