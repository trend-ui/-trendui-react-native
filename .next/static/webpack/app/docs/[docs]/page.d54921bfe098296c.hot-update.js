"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/docs/[docs]/page",{

/***/ "(app-pages-browser)/./components/Markdown.tsx":
/*!*********************************!*\
  !*** ./components/Markdown.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Markdown: () => (/* binding */ Markdown)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Clipboard_ClipboardCheck_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Clipboard,ClipboardCheck!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/clipboard.js\");\n/* harmony import */ var _barrel_optimize_names_Clipboard_ClipboardCheck_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Clipboard,ClipboardCheck!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/clipboard-check.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-markdown */ \"(app-pages-browser)/./node_modules/react-markdown/lib/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! remark-gfm */ \"(app-pages-browser)/./node_modules/remark-gfm/lib/index.js\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* __next_internal_client_entry_do_not_use__ Markdown auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst NonMemoizedMarkdown = (param)=>{\n    let { children } = param;\n    _s();\n    const [isCopied, setIsCopied] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const copyToClipboard = (text)=>{\n        navigator.clipboard.writeText(text).then(()=>{\n            setIsCopied(true);\n        });\n        setTimeout(()=>{\n            setIsCopied(false);\n        }, 2500);\n    };\n    const components = {\n        h1: (param)=>{\n            let { children, ...props } = param;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"md:text-3xl font-bold mb-4 mt-6 text-neutral-800 dark:text-neutral-100 border-b border-neutral-300 dark:border-neutral-700 pb-2\",\n                ...props,\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/Markdown.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined);\n        },\n        h2: (param)=>{\n            let { children, ...props } = param;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"md:text-2xl font-semibold mb-3 mt-5 text-neutral-800 dark:text-neutral-200\",\n                ...props,\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/Markdown.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined);\n        },\n        h3: (param)=>{\n            let { children, ...props } = param;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-sm md:text-xl font-medium mb-2 mt-4 text-neutral-800 dark:text-neutral-200\",\n                ...props,\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/Markdown.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined);\n        },\n        p: (param)=>{\n            let { children, ...props } = param;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-[9px] md:text-base max-w-prose leading-6 mb-4 text-neutral-700 dark:text-neutral-300\",\n                ...props,\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/Markdown.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined);\n        },\n        code: (param)=>{\n            let { inline, className, children, ...props } = param;\n            const match = /language-(\\w+)/.exec(className || \"\");\n            const codeContent = String(children).trim();\n            return !inline && match ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                        ...props,\n                        className: \"\".concat(className, \" text-[9px] max-w-prose md:text-sm w-[90%] md:max-w-full overflow-x-auto bg-zinc-100 p-4 rounded-lg mt-3 dark:bg-[#18181B]\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                            className: match[1],\n                            children: children\n                        }, void 0, false, {\n                            fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/Markdown.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/Markdown.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        onClick: ()=>copyToClipboard(codeContent),\n                        className: \"absolute top-2 right-2 dark:bg-neutral-800 dark:text-white text-xs md:text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity\",\n                        children: !isCopied ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Clipboard_ClipboardCheck_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/Markdown.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 27\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Clipboard_ClipboardCheck_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/Markdown.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 43\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/Markdown.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/Markdown.tsx\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                className: \"\".concat(className, \" text-xs md:text-sm bg-zinc-100 dark:bg-zinc-800 py-0.5 px-1 rounded-md\"),\n                ...props,\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/Markdown.tsx\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, undefined);\n        },\n        ol: (param)=>{\n            let { children, ...props } = param;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                className: \"text-xs md:text-base list-decimal list-outside ml-6 mb-4 text-neutral-700 dark:text-neutral-300\",\n                ...props,\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/Markdown.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined);\n        },\n        ul: (param)=>{\n            let { children, ...props } = param;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"list-disc list-outside ml-6 mb-4 text-neutral-700 dark:text-neutral-300\",\n                ...props,\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/Markdown.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, undefined);\n        },\n        li: (param)=>{\n            let { children, ...props } = param;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"py-1\",\n                ...props,\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/Markdown.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, undefined);\n        },\n        blockquote: (param)=>{\n            let { children, ...props } = param;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"blockquote\", {\n                className: \"border-l-4 border-neutral-300 dark:border-neutral-700 pl-4 italic text-neutral-600 dark:text-neutral-400 mb-4\",\n                ...props,\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/Markdown.tsx\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, undefined);\n        },\n        strong: (param)=>{\n            let { children, ...props } = param;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"font-semibold\",\n                ...props,\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/Markdown.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, undefined);\n        },\n        a: (param)=>{\n            let { children, ...props } = param;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                className: \"text-green-500 hover:underline\",\n                target: \"_blank\",\n                rel: \"noreferrer\",\n                ...props,\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/Markdown.tsx\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, undefined);\n        },\n        hr: (param)=>{\n            let { ...props } = param;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"border-t border-neutral-300 dark:border-neutral-700 my-6\",\n                ...props\n            }, void 0, false, {\n                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/Markdown.tsx\",\n                lineNumber: 128,\n                columnNumber: 7\n            }, undefined);\n        },\n        table: (param)=>{\n            let { children, ...props } = param;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"table-auto border-collapse border border-neutral-300 dark:border-neutral-700 w-full text-left mb-4\",\n                ...props,\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/Markdown.tsx\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, undefined);\n        },\n        th: (param)=>{\n            let { children, ...props } = param;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                className: \"border border-neutral-300 dark:border-neutral-700 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 font-semibold\",\n                ...props,\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/Markdown.tsx\",\n                lineNumber: 142,\n                columnNumber: 7\n            }, undefined);\n        },\n        td: (param)=>{\n            let { children, ...props } = param;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"border border-neutral-300 dark:border-neutral-700 px-4 py-2\",\n                ...props,\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/Markdown.tsx\",\n                lineNumber: 150,\n                columnNumber: 7\n            }, undefined);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_6__.Markdown, {\n        remarkPlugins: [\n            remark_gfm__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n        ],\n        components: components,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/Markdown.tsx\",\n        lineNumber: 160,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NonMemoizedMarkdown, \"UWzQxnkvRCH/iKdHrabxfCoFifs=\");\n_c = NonMemoizedMarkdown;\nconst Markdown = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(NonMemoizedMarkdown, (prevProps, nextProps)=>prevProps.children === nextProps.children);\n_c1 = Markdown;\nvar _c, _c1;\n$RefreshReg$(_c, \"NonMemoizedMarkdown\");\n$RefreshReg$(_c1, \"Markdown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTWFya2Rvd24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUV5RDtBQUM1QjtBQUNVO0FBQ0k7QUFDUjtBQUNFO0FBRXJDLE1BQU1RLHNCQUFzQjtRQUFDLEVBQUVDLFFBQVEsRUFBd0I7O0lBQzdELE1BQU0sQ0FBQ0MsVUFBU0MsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN4QyxNQUFNUSxrQkFBa0IsQ0FBQ0M7UUFDdkJDLFVBQVVDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDSCxNQUFNSSxJQUFJLENBQUM7WUFDdkNOLFlBQVk7UUFDZDtRQUVBTyxXQUFXO1lBQ1RQLFlBQVk7UUFDZCxHQUFFO0lBQ0o7SUFFQSxNQUFNUSxhQUFhO1FBQ2pCQyxJQUFJO2dCQUFDLEVBQUVYLFFBQVEsRUFBRSxHQUFHWSxPQUFZO2lDQUM5Qiw4REFBQ0Q7Z0JBQ0NFLFdBQVU7Z0JBQ1QsR0FBR0QsS0FBSzswQkFFUlo7Ozs7Ozs7UUFHTGMsSUFBSTtnQkFBQyxFQUFFZCxRQUFRLEVBQUUsR0FBR1ksT0FBWTtpQ0FDOUIsOERBQUNFO2dCQUNDRCxXQUFVO2dCQUNULEdBQUdELEtBQUs7MEJBRVJaOzs7Ozs7O1FBR0xlLElBQUk7Z0JBQUMsRUFBRWYsUUFBUSxFQUFFLEdBQUdZLE9BQVk7aUNBQzlCLDhEQUFDRztnQkFDQ0YsV0FBVTtnQkFDVCxHQUFHRCxLQUFLOzBCQUVSWjs7Ozs7OztRQUdMZ0IsR0FBRztnQkFBQyxFQUFFaEIsUUFBUSxFQUFFLEdBQUdZLE9BQVk7aUNBQzdCLDhEQUFDSTtnQkFDQ0gsV0FBVTtnQkFDVCxHQUFHRCxLQUFLOzBCQUVSWjs7Ozs7OztRQUdMaUIsTUFBTTtnQkFBQyxFQUFFQyxNQUFNLEVBQUVMLFNBQVMsRUFBRWIsUUFBUSxFQUFFLEdBQUdZLE9BQVk7WUFDbkQsTUFBTU8sUUFBUSxpQkFBaUJDLElBQUksQ0FBQ1AsYUFBYTtZQUNqRCxNQUFNUSxjQUFjQyxPQUFPdEIsVUFBVXVCLElBQUk7WUFFekMsT0FBTyxDQUFDTCxVQUFVQyxzQkFDaEIsOERBQUNLO2dCQUFJWCxXQUFVOztrQ0FDYiw4REFBQ1k7d0JBQ0UsR0FBR2IsS0FBSzt3QkFDVEMsV0FBVyxHQUFhLE9BQVZBLFdBQVU7a0NBRXhCLDRFQUFDSTs0QkFBS0osV0FBV00sS0FBSyxDQUFDLEVBQUU7c0NBQUduQjs7Ozs7Ozs7Ozs7a0NBRTlCLDhEQUFDRiw4Q0FBTUE7d0JBQ0w0QixTQUFTLElBQU12QixnQkFBZ0JrQjt3QkFDL0JSLFdBQVU7a0NBRVQsQ0FBQ1oseUJBQVksOERBQUNWLG9HQUFTQTs7OztzREFBTSw4REFBQ0Msb0dBQWNBOzs7Ozs7Ozs7Ozs7Ozs7MENBSWpELDhEQUFDeUI7Z0JBQ0NKLFdBQVcsR0FBYSxPQUFWQSxXQUFVO2dCQUN2QixHQUFHRCxLQUFLOzBCQUVSWjs7Ozs7O1FBR1A7UUFDQTJCLElBQUk7Z0JBQUMsRUFBRTNCLFFBQVEsRUFBRSxHQUFHWSxPQUFZO2lDQUM5Qiw4REFBQ2U7Z0JBQ0NkLFdBQVU7Z0JBQ1QsR0FBR0QsS0FBSzswQkFFUlo7Ozs7Ozs7UUFHTDRCLElBQUk7Z0JBQUMsRUFBRTVCLFFBQVEsRUFBRSxHQUFHWSxPQUFZO2lDQUM5Qiw4REFBQ2dCO2dCQUNDZixXQUFVO2dCQUNULEdBQUdELEtBQUs7MEJBRVJaOzs7Ozs7O1FBR0w2QixJQUFJO2dCQUFDLEVBQUU3QixRQUFRLEVBQUUsR0FBR1ksT0FBWTtpQ0FDOUIsOERBQUNpQjtnQkFBR2hCLFdBQVU7Z0JBQVEsR0FBR0QsS0FBSzswQkFDM0JaOzs7Ozs7O1FBR0w4QixZQUFZO2dCQUFDLEVBQUU5QixRQUFRLEVBQUUsR0FBR1ksT0FBWTtpQ0FDdEMsOERBQUNrQjtnQkFDQ2pCLFdBQVU7Z0JBQ1QsR0FBR0QsS0FBSzswQkFFUlo7Ozs7Ozs7UUFHTCtCLFFBQVE7Z0JBQUMsRUFBRS9CLFFBQVEsRUFBRSxHQUFHWSxPQUFZO2lDQUNsQyw4REFBQ29CO2dCQUFLbkIsV0FBVTtnQkFBaUIsR0FBR0QsS0FBSzswQkFDdENaOzs7Ozs7O1FBR0xpQyxHQUFHO2dCQUFDLEVBQUVqQyxRQUFRLEVBQUUsR0FBR1ksT0FBWTtpQ0FDN0IsOERBQUNuQixpREFBSUE7Z0JBQ0hvQixXQUFVO2dCQUNWcUIsUUFBTztnQkFDUEMsS0FBSTtnQkFDSCxHQUFHdkIsS0FBSzswQkFFUlo7Ozs7Ozs7UUFHTG9DLElBQUk7Z0JBQUMsRUFBRSxHQUFHeEIsT0FBWTtpQ0FDcEIsOERBQUN3QjtnQkFDQ3ZCLFdBQVU7Z0JBQ1QsR0FBR0QsS0FBSzs7Ozs7OztRQUdieUIsT0FBTztnQkFBQyxFQUFFckMsUUFBUSxFQUFFLEdBQUdZLE9BQVk7aUNBQ2pDLDhEQUFDeUI7Z0JBQ0N4QixXQUFVO2dCQUNULEdBQUdELEtBQUs7MEJBRVJaOzs7Ozs7O1FBR0xzQyxJQUFJO2dCQUFDLEVBQUV0QyxRQUFRLEVBQUUsR0FBR1ksT0FBWTtpQ0FDOUIsOERBQUMwQjtnQkFDQ3pCLFdBQVU7Z0JBQ1QsR0FBR0QsS0FBSzswQkFFUlo7Ozs7Ozs7UUFHTHVDLElBQUk7Z0JBQUMsRUFBRXZDLFFBQVEsRUFBRSxHQUFHWSxPQUFZO2lDQUM5Qiw4REFBQzJCO2dCQUNDMUIsV0FBVTtnQkFDVCxHQUFHRCxLQUFLOzBCQUVSWjs7Ozs7OztJQUdQO0lBRUEscUJBQ0UsOERBQUNKLG9EQUFhQTtRQUFDNEMsZUFBZTtZQUFDM0Msa0RBQVNBO1NBQUM7UUFBRWEsWUFBWUE7a0JBQ3BEVjs7Ozs7O0FBR1A7R0ExSk1EO0tBQUFBO0FBNEpDLE1BQU0wQyx5QkFBVy9DLDJDQUFJQSxDQUMxQksscUJBQ0EsQ0FBQzJDLFdBQVdDLFlBQWNELFVBQVUxQyxRQUFRLEtBQUsyQyxVQUFVM0MsUUFBUSxFQUNuRSIsInNvdXJjZXMiOlsiL1VzZXJzL3NoYWhyaWFyc2FqZWViL0Rlc2t0b3AvQmV0YWZpZXIvdHJlbmR1aS9jb21wb25lbnRzL01hcmtkb3duLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgQ2xpcGJvYXJkLCBDbGlwYm9hcmRDaGVjayB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IG1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCByZW1hcmtHZm0gZnJvbSBcInJlbWFyay1nZm1cIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuL3VpL2J1dHRvblwiO1xuXG5jb25zdCBOb25NZW1vaXplZE1hcmtkb3duID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogc3RyaW5nIH0pID0+IHtcbiAgY29uc3QgW2lzQ29waWVkLHNldElzQ29waWVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBjb3B5VG9DbGlwYm9hcmQgPSAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCkudGhlbigoKSA9PiB7XG4gICAgICBzZXRJc0NvcGllZCh0cnVlKVxuICAgIH0pO1xuXG4gICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgc2V0SXNDb3BpZWQoZmFsc2UpXG4gICAgfSwyNTAwKVxuICB9O1xuXG4gIGNvbnN0IGNvbXBvbmVudHMgPSB7XG4gICAgaDE6ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9OiBhbnkpID0+IChcbiAgICAgIDxoMVxuICAgICAgICBjbGFzc05hbWU9XCJtZDp0ZXh0LTN4bCBmb250LWJvbGQgbWItNCBtdC02IHRleHQtbmV1dHJhbC04MDAgZGFyazp0ZXh0LW5ldXRyYWwtMTAwIGJvcmRlci1iIGJvcmRlci1uZXV0cmFsLTMwMCBkYXJrOmJvcmRlci1uZXV0cmFsLTcwMCBwYi0yXCJcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2gxPlxuICAgICksXG4gICAgaDI6ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9OiBhbnkpID0+IChcbiAgICAgIDxoMlxuICAgICAgICBjbGFzc05hbWU9XCJtZDp0ZXh0LTJ4bCBmb250LXNlbWlib2xkIG1iLTMgbXQtNSB0ZXh0LW5ldXRyYWwtODAwIGRhcms6dGV4dC1uZXV0cmFsLTIwMFwiXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9oMj5cbiAgICApLFxuICAgIGgzOiAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfTogYW55KSA9PiAoXG4gICAgICA8aDNcbiAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBtZDp0ZXh0LXhsIGZvbnQtbWVkaXVtIG1iLTIgbXQtNCB0ZXh0LW5ldXRyYWwtODAwIGRhcms6dGV4dC1uZXV0cmFsLTIwMFwiXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9oMz5cbiAgICApLFxuICAgIHA6ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9OiBhbnkpID0+IChcbiAgICAgIDxwXG4gICAgICAgIGNsYXNzTmFtZT1cInRleHQtWzlweF0gbWQ6dGV4dC1iYXNlIG1heC13LXByb3NlIGxlYWRpbmctNiBtYi00IHRleHQtbmV1dHJhbC03MDAgZGFyazp0ZXh0LW5ldXRyYWwtMzAwXCJcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L3A+XG4gICAgKSxcbiAgICBjb2RlOiAoeyBpbmxpbmUsIGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH06IGFueSkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2ggPSAvbGFuZ3VhZ2UtKFxcdyspLy5leGVjKGNsYXNzTmFtZSB8fCBcIlwiKTtcbiAgICAgIGNvbnN0IGNvZGVDb250ZW50ID0gU3RyaW5nKGNoaWxkcmVuKS50cmltKCk7XG5cbiAgICAgIHJldHVybiAhaW5saW5lICYmIG1hdGNoID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGdyb3VwXCI+XG4gICAgICAgICAgPHByZVxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IHRleHQtWzlweF0gbWF4LXctcHJvc2UgbWQ6dGV4dC1zbSB3LVs5MCVdIG1kOm1heC13LWZ1bGwgb3ZlcmZsb3cteC1hdXRvIGJnLXppbmMtMTAwIHAtNCByb3VuZGVkLWxnIG10LTMgZGFyazpiZy1bIzE4MTgxQl1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT17bWF0Y2hbMV19PntjaGlsZHJlbn08L2NvZGU+XG4gICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29weVRvQ2xpcGJvYXJkKGNvZGVDb250ZW50KX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yIHJpZ2h0LTIgZGFyazpiZy1uZXV0cmFsLTgwMCBkYXJrOnRleHQtd2hpdGUgdGV4dC14cyBtZDp0ZXh0LXNtIHB4LTIgcHktMSByb3VuZGVkIG9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uLW9wYWNpdHlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHshaXNDb3BpZWQgPyAoPENsaXBib2FyZCAvPik6KDxDbGlwYm9hcmRDaGVjayAvPil9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGNvZGVcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gdGV4dC14cyBtZDp0ZXh0LXNtIGJnLXppbmMtMTAwIGRhcms6YmctemluYy04MDAgcHktMC41IHB4LTEgcm91bmRlZC1tZGB9XG4gICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2NvZGU+XG4gICAgICApO1xuICAgIH0sXG4gICAgb2w6ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9OiBhbnkpID0+IChcbiAgICAgIDxvbFxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhzIG1kOnRleHQtYmFzZSBsaXN0LWRlY2ltYWwgbGlzdC1vdXRzaWRlIG1sLTYgbWItNCB0ZXh0LW5ldXRyYWwtNzAwIGRhcms6dGV4dC1uZXV0cmFsLTMwMFwiXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9vbD5cbiAgICApLFxuICAgIHVsOiAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfTogYW55KSA9PiAoXG4gICAgICA8dWxcbiAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1kaXNjIGxpc3Qtb3V0c2lkZSBtbC02IG1iLTQgdGV4dC1uZXV0cmFsLTcwMCBkYXJrOnRleHQtbmV1dHJhbC0zMDBcIlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvdWw+XG4gICAgKSxcbiAgICBsaTogKHsgY2hpbGRyZW4sIC4uLnByb3BzIH06IGFueSkgPT4gKFxuICAgICAgPGxpIGNsYXNzTmFtZT1cInB5LTFcIiB7Li4ucHJvcHN9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2xpPlxuICAgICksXG4gICAgYmxvY2txdW90ZTogKHsgY2hpbGRyZW4sIC4uLnByb3BzIH06IGFueSkgPT4gKFxuICAgICAgPGJsb2NrcXVvdGVcbiAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLWwtNCBib3JkZXItbmV1dHJhbC0zMDAgZGFyazpib3JkZXItbmV1dHJhbC03MDAgcGwtNCBpdGFsaWMgdGV4dC1uZXV0cmFsLTYwMCBkYXJrOnRleHQtbmV1dHJhbC00MDAgbWItNFwiXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9ibG9ja3F1b3RlPlxuICAgICksXG4gICAgc3Ryb25nOiAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfTogYW55KSA9PiAoXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCIgey4uLnByb3BzfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9zcGFuPlxuICAgICksXG4gICAgYTogKHsgY2hpbGRyZW4sIC4uLnByb3BzIH06IGFueSkgPT4gKFxuICAgICAgPExpbmtcbiAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmVlbi01MDAgaG92ZXI6dW5kZXJsaW5lXCJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9MaW5rPlxuICAgICksXG4gICAgaHI6ICh7IC4uLnByb3BzIH06IGFueSkgPT4gKFxuICAgICAgPGhyXG4gICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci10IGJvcmRlci1uZXV0cmFsLTMwMCBkYXJrOmJvcmRlci1uZXV0cmFsLTcwMCBteS02XCJcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApLFxuICAgIHRhYmxlOiAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfTogYW55KSA9PiAoXG4gICAgICA8dGFibGVcbiAgICAgICAgY2xhc3NOYW1lPVwidGFibGUtYXV0byBib3JkZXItY29sbGFwc2UgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTMwMCBkYXJrOmJvcmRlci1uZXV0cmFsLTcwMCB3LWZ1bGwgdGV4dC1sZWZ0IG1iLTRcIlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvdGFibGU+XG4gICAgKSxcbiAgICB0aDogKHsgY2hpbGRyZW4sIC4uLnByb3BzIH06IGFueSkgPT4gKFxuICAgICAgPHRoXG4gICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItbmV1dHJhbC0zMDAgZGFyazpib3JkZXItbmV1dHJhbC03MDAgcHgtNCBweS0yIGJnLW5ldXRyYWwtMTAwIGRhcms6YmctbmV1dHJhbC04MDAgZm9udC1zZW1pYm9sZFwiXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC90aD5cbiAgICApLFxuICAgIHRkOiAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfTogYW55KSA9PiAoXG4gICAgICA8dGRcbiAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1uZXV0cmFsLTMwMCBkYXJrOmJvcmRlci1uZXV0cmFsLTcwMCBweC00IHB5LTJcIlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvdGQ+XG4gICAgKSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdE1hcmtkb3duIHJlbWFya1BsdWdpbnM9e1tyZW1hcmtHZm1dfSBjb21wb25lbnRzPXtjb21wb25lbnRzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1JlYWN0TWFya2Rvd24+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgTWFya2Rvd24gPSBtZW1vKFxuICBOb25NZW1vaXplZE1hcmtkb3duLFxuICAocHJldlByb3BzLCBuZXh0UHJvcHMpID0+IHByZXZQcm9wcy5jaGlsZHJlbiA9PT0gbmV4dFByb3BzLmNoaWxkcmVuXG4pO1xuIl0sIm5hbWVzIjpbIkNsaXBib2FyZCIsIkNsaXBib2FyZENoZWNrIiwiTGluayIsIm1lbW8iLCJ1c2VTdGF0ZSIsIlJlYWN0TWFya2Rvd24iLCJyZW1hcmtHZm0iLCJCdXR0b24iLCJOb25NZW1vaXplZE1hcmtkb3duIiwiY2hpbGRyZW4iLCJpc0NvcGllZCIsInNldElzQ29waWVkIiwiY29weVRvQ2xpcGJvYXJkIiwidGV4dCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRoZW4iLCJzZXRUaW1lb3V0IiwiY29tcG9uZW50cyIsImgxIiwicHJvcHMiLCJjbGFzc05hbWUiLCJoMiIsImgzIiwicCIsImNvZGUiLCJpbmxpbmUiLCJtYXRjaCIsImV4ZWMiLCJjb2RlQ29udGVudCIsIlN0cmluZyIsInRyaW0iLCJkaXYiLCJwcmUiLCJvbkNsaWNrIiwib2wiLCJ1bCIsImxpIiwiYmxvY2txdW90ZSIsInN0cm9uZyIsInNwYW4iLCJhIiwidGFyZ2V0IiwicmVsIiwiaHIiLCJ0YWJsZSIsInRoIiwidGQiLCJyZW1hcmtQbHVnaW5zIiwiTWFya2Rvd24iLCJwcmV2UHJvcHMiLCJuZXh0UHJvcHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Markdown.tsx\n"));

/***/ })

});