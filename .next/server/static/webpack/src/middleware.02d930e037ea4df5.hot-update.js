"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/navigation.ts":
/*!***************************!*\
  !*** ./src/navigation.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Link: () => (/* binding */ Link),\n/* harmony export */   defaultLocale: () => (/* binding */ defaultLocale),\n/* harmony export */   getPathname: () => (/* binding */ getPathname),\n/* harmony export */   localePrefix: () => (/* binding */ localePrefix),\n/* harmony export */   locales: () => (/* binding */ locales),\n/* harmony export */   pathnames: () => (/* binding */ pathnames),\n/* harmony export */   redirect: () => (/* binding */ redirect),\n/* harmony export */   usePathname: () => (/* binding */ usePathname),\n/* harmony export */   useRouter: () => (/* binding */ useRouter)\n/* harmony export */ });\n/* harmony import */ var next_intl_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-intl/navigation */ \"(middleware)/./node_modules/next-intl/dist/development/navigation.react-client.js\");\n\nconst locales = [\n    \"en\",\n    \"tr\"\n];\nconst defaultLocale = \"en\";\nconst localePrefix = \"always\"; // Default\nconst pathnames = {\n    \"/dashboard\": {\n        en: \"/dashboard\",\n        tr: \"/gosterge-paneli\"\n    },\n    \"/notification\": {\n        en: \"/notification\",\n        tr: \"/bildirim\"\n    },\n    \"/profile\": {\n        en: \"/profile\",\n        tr: \"/profil\"\n    },\n    \"/e-commerce\": {\n        en: \"/e-commerce\",\n        tr: \"/e-ticaret\"\n    }\n};\nconst { Link, redirect, usePathname, useRouter, getPathname } = (0,next_intl_navigation__WEBPACK_IMPORTED_MODULE_0__.createLocalizedPathnamesNavigation)({\n    locales,\n    localePrefix,\n    pathnames\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL25hdmlnYXRpb24udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUc4QjtBQUV2QixNQUFNQyxVQUFVO0lBQUM7SUFBTTtDQUFLLENBQUM7QUFDN0IsTUFBTUMsZ0JBQWUsS0FBSztBQUMxQixNQUFNQyxlQUFlLFNBQVMsQ0FBQyxVQUFVO0FBRXpDLE1BQU1DLFlBQVk7SUFDdkIsY0FBYTtRQUNYQyxJQUFHO1FBQ0hDLElBQUc7SUFFTDtJQUNBLGlCQUFnQjtRQUNkRCxJQUFHO1FBQ0hDLElBQUc7SUFDTDtJQUNBLFlBQVc7UUFDVEQsSUFBRztRQUNIQyxJQUFHO0lBQ0w7SUFDQSxlQUFjO1FBQ1pELElBQUc7UUFDSEMsSUFBRztJQUNMO0FBRUYsRUFBc0M7QUFHL0IsTUFBTSxFQUFDQyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBQyxHQUNoRVgsd0ZBQWtDQSxDQUFDO0lBQUNDO0lBQVNFO0lBQWNDO0FBQVMsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbmF2aWdhdGlvbi50cz85Y2M2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFBhdGhuYW1lcyxcbiAgY3JlYXRlTG9jYWxpemVkUGF0aG5hbWVzTmF2aWdhdGlvblxufSBmcm9tICduZXh0LWludGwvbmF2aWdhdGlvbic7XG4gXG5leHBvcnQgY29uc3QgbG9jYWxlcyA9IFsnZW4nLCAndHInXTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9jYWxlPSBcImVuXCI7XG5leHBvcnQgY29uc3QgbG9jYWxlUHJlZml4ID0gJ2Fsd2F5cyc7IC8vIERlZmF1bHRcbiBcbmV4cG9ydCBjb25zdCBwYXRobmFtZXMgPSB7XG4gICcvZGFzaGJvYXJkJzp7XG4gICAgZW46Jy9kYXNoYm9hcmQnLFxuICAgIHRyOicvZ29zdGVyZ2UtcGFuZWxpJyxcbiAgICBcbiAgfSxcbiAgJy9ub3RpZmljYXRpb24nOntcbiAgICBlbjonL25vdGlmaWNhdGlvbicsXG4gICAgdHI6Jy9iaWxkaXJpbSdcbiAgfSxcbiAgJy9wcm9maWxlJzp7XG4gICAgZW46Jy9wcm9maWxlJyxcbiAgICB0cjonL3Byb2ZpbCdcbiAgfSxcbiAgJy9lLWNvbW1lcmNlJzp7XG4gICAgZW46Jy9lLWNvbW1lcmNlJyxcbiAgICB0cjonL2UtdGljYXJldCdcbiAgfVxuXG59IHNhdGlzZmllcyBQYXRobmFtZXM8dHlwZW9mIGxvY2FsZXM+O1xuXG4gXG5leHBvcnQgY29uc3Qge0xpbmssIHJlZGlyZWN0LCB1c2VQYXRobmFtZSwgdXNlUm91dGVyLCBnZXRQYXRobmFtZX0gPVxuICBjcmVhdGVMb2NhbGl6ZWRQYXRobmFtZXNOYXZpZ2F0aW9uKHtsb2NhbGVzLCBsb2NhbGVQcmVmaXgsIHBhdGhuYW1lc30pOyJdLCJuYW1lcyI6WyJjcmVhdGVMb2NhbGl6ZWRQYXRobmFtZXNOYXZpZ2F0aW9uIiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJsb2NhbGVQcmVmaXgiLCJwYXRobmFtZXMiLCJlbiIsInRyIiwiTGluayIsInJlZGlyZWN0IiwidXNlUGF0aG5hbWUiLCJ1c2VSb3V0ZXIiLCJnZXRQYXRobmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/navigation.ts\n");

/***/ })

});