"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/reselect";
exports.ids = ["vendor-chunks/reselect"];
exports.modules = {

/***/ "(ssr)/./node_modules/reselect/es/defaultMemoize.js":
/*!****************************************************!*\
  !*** ./node_modules/reselect/es/defaultMemoize.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCacheKeyComparator: () => (/* binding */ createCacheKeyComparator),\n/* harmony export */   defaultEqualityCheck: () => (/* binding */ defaultEqualityCheck),\n/* harmony export */   defaultMemoize: () => (/* binding */ defaultMemoize)\n/* harmony export */ });\n// Cache implementation based on Erik Rasmussen's `lru-memoize`:\n// https://github.com/erikras/lru-memoize\nvar NOT_FOUND = \"NOT_FOUND\";\nfunction createSingletonCache(equals) {\n    var entry;\n    return {\n        get: function get(key) {\n            if (entry && equals(entry.key, key)) {\n                return entry.value;\n            }\n            return NOT_FOUND;\n        },\n        put: function put(key, value) {\n            entry = {\n                key: key,\n                value: value\n            };\n        },\n        getEntries: function getEntries() {\n            return entry ? [\n                entry\n            ] : [];\n        },\n        clear: function clear() {\n            entry = undefined;\n        }\n    };\n}\nfunction createLruCache(maxSize, equals) {\n    var entries = [];\n    function get(key) {\n        var cacheIndex = entries.findIndex(function(entry) {\n            return equals(key, entry.key);\n        }); // We found a cached entry\n        if (cacheIndex > -1) {\n            var entry = entries[cacheIndex]; // Cached entry not at top of cache, move it to the top\n            if (cacheIndex > 0) {\n                entries.splice(cacheIndex, 1);\n                entries.unshift(entry);\n            }\n            return entry.value;\n        } // No entry found in cache, return sentinel\n        return NOT_FOUND;\n    }\n    function put(key, value) {\n        if (get(key) === NOT_FOUND) {\n            // TODO Is unshift slow?\n            entries.unshift({\n                key: key,\n                value: value\n            });\n            if (entries.length > maxSize) {\n                entries.pop();\n            }\n        }\n    }\n    function getEntries() {\n        return entries;\n    }\n    function clear() {\n        entries = [];\n    }\n    return {\n        get: get,\n        put: put,\n        getEntries: getEntries,\n        clear: clear\n    };\n}\nvar defaultEqualityCheck = function defaultEqualityCheck(a, b) {\n    return a === b;\n};\nfunction createCacheKeyComparator(equalityCheck) {\n    return function areArgumentsShallowlyEqual(prev, next) {\n        if (prev === null || next === null || prev.length !== next.length) {\n            return false;\n        } // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.\n        var length = prev.length;\n        for(var i = 0; i < length; i++){\n            if (!equalityCheck(prev[i], next[i])) {\n                return false;\n            }\n        }\n        return true;\n    };\n}\n// defaultMemoize now supports a configurable cache size with LRU behavior,\n// and optional comparison of the result value with existing values\nfunction defaultMemoize(func, equalityCheckOrOptions) {\n    var providedOptions = typeof equalityCheckOrOptions === \"object\" ? equalityCheckOrOptions : {\n        equalityCheck: equalityCheckOrOptions\n    };\n    var _providedOptions$equa = providedOptions.equalityCheck, equalityCheck = _providedOptions$equa === void 0 ? defaultEqualityCheck : _providedOptions$equa, _providedOptions$maxS = providedOptions.maxSize, maxSize = _providedOptions$maxS === void 0 ? 1 : _providedOptions$maxS, resultEqualityCheck = providedOptions.resultEqualityCheck;\n    var comparator = createCacheKeyComparator(equalityCheck);\n    var cache = maxSize === 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator); // we reference arguments instead of spreading them for performance reasons\n    function memoized() {\n        var value = cache.get(arguments);\n        if (value === NOT_FOUND) {\n            // @ts-ignore\n            value = func.apply(null, arguments);\n            if (resultEqualityCheck) {\n                var entries = cache.getEntries();\n                var matchingEntry = entries.find(function(entry) {\n                    return resultEqualityCheck(entry.value, value);\n                });\n                if (matchingEntry) {\n                    value = matchingEntry.value;\n                }\n            }\n            cache.put(arguments, value);\n        }\n        return value;\n    }\n    memoized.clearCache = function() {\n        return cache.clear();\n    };\n    return memoized;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVzZWxlY3QvZXMvZGVmYXVsdE1lbW9pemUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsZ0VBQWdFO0FBQ2hFLHlDQUF5QztBQUN6QyxJQUFJQSxZQUFZO0FBRWhCLFNBQVNDLHFCQUFxQkMsTUFBTTtJQUNsQyxJQUFJQztJQUNKLE9BQU87UUFDTEMsS0FBSyxTQUFTQSxJQUFJQyxHQUFHO1lBQ25CLElBQUlGLFNBQVNELE9BQU9DLE1BQU1FLEdBQUcsRUFBRUEsTUFBTTtnQkFDbkMsT0FBT0YsTUFBTUcsS0FBSztZQUNwQjtZQUVBLE9BQU9OO1FBQ1Q7UUFDQU8sS0FBSyxTQUFTQSxJQUFJRixHQUFHLEVBQUVDLEtBQUs7WUFDMUJILFFBQVE7Z0JBQ05FLEtBQUtBO2dCQUNMQyxPQUFPQTtZQUNUO1FBQ0Y7UUFDQUUsWUFBWSxTQUFTQTtZQUNuQixPQUFPTCxRQUFRO2dCQUFDQTthQUFNLEdBQUcsRUFBRTtRQUM3QjtRQUNBTSxPQUFPLFNBQVNBO1lBQ2ROLFFBQVFPO1FBQ1Y7SUFDRjtBQUNGO0FBRUEsU0FBU0MsZUFBZUMsT0FBTyxFQUFFVixNQUFNO0lBQ3JDLElBQUlXLFVBQVUsRUFBRTtJQUVoQixTQUFTVCxJQUFJQyxHQUFHO1FBQ2QsSUFBSVMsYUFBYUQsUUFBUUUsU0FBUyxDQUFDLFNBQVVaLEtBQUs7WUFDaEQsT0FBT0QsT0FBT0csS0FBS0YsTUFBTUUsR0FBRztRQUM5QixJQUFJLDBCQUEwQjtRQUU5QixJQUFJUyxhQUFhLENBQUMsR0FBRztZQUNuQixJQUFJWCxRQUFRVSxPQUFPLENBQUNDLFdBQVcsRUFBRSx1REFBdUQ7WUFFeEYsSUFBSUEsYUFBYSxHQUFHO2dCQUNsQkQsUUFBUUcsTUFBTSxDQUFDRixZQUFZO2dCQUMzQkQsUUFBUUksT0FBTyxDQUFDZDtZQUNsQjtZQUVBLE9BQU9BLE1BQU1HLEtBQUs7UUFDcEIsRUFBRSwyQ0FBMkM7UUFHN0MsT0FBT047SUFDVDtJQUVBLFNBQVNPLElBQUlGLEdBQUcsRUFBRUMsS0FBSztRQUNyQixJQUFJRixJQUFJQyxTQUFTTCxXQUFXO1lBQzFCLHdCQUF3QjtZQUN4QmEsUUFBUUksT0FBTyxDQUFDO2dCQUNkWixLQUFLQTtnQkFDTEMsT0FBT0E7WUFDVDtZQUVBLElBQUlPLFFBQVFLLE1BQU0sR0FBR04sU0FBUztnQkFDNUJDLFFBQVFNLEdBQUc7WUFDYjtRQUNGO0lBQ0Y7SUFFQSxTQUFTWDtRQUNQLE9BQU9LO0lBQ1Q7SUFFQSxTQUFTSjtRQUNQSSxVQUFVLEVBQUU7SUFDZDtJQUVBLE9BQU87UUFDTFQsS0FBS0E7UUFDTEcsS0FBS0E7UUFDTEMsWUFBWUE7UUFDWkMsT0FBT0E7SUFDVDtBQUNGO0FBRU8sSUFBSVcsdUJBQXVCLFNBQVNBLHFCQUFxQkMsQ0FBQyxFQUFFQyxDQUFDO0lBQ2xFLE9BQU9ELE1BQU1DO0FBQ2YsRUFBRTtBQUNLLFNBQVNDLHlCQUF5QkMsYUFBYTtJQUNwRCxPQUFPLFNBQVNDLDJCQUEyQkMsSUFBSSxFQUFFQyxJQUFJO1FBQ25ELElBQUlELFNBQVMsUUFBUUMsU0FBUyxRQUFRRCxLQUFLUixNQUFNLEtBQUtTLEtBQUtULE1BQU0sRUFBRTtZQUNqRSxPQUFPO1FBQ1QsRUFBRSw4R0FBOEc7UUFHaEgsSUFBSUEsU0FBU1EsS0FBS1IsTUFBTTtRQUV4QixJQUFLLElBQUlVLElBQUksR0FBR0EsSUFBSVYsUUFBUVUsSUFBSztZQUMvQixJQUFJLENBQUNKLGNBQWNFLElBQUksQ0FBQ0UsRUFBRSxFQUFFRCxJQUFJLENBQUNDLEVBQUUsR0FBRztnQkFDcEMsT0FBTztZQUNUO1FBQ0Y7UUFFQSxPQUFPO0lBQ1Q7QUFDRjtBQUNBLDJFQUEyRTtBQUMzRSxtRUFBbUU7QUFDNUQsU0FBU0MsZUFBZUMsSUFBSSxFQUFFQyxzQkFBc0I7SUFDekQsSUFBSUMsa0JBQWtCLE9BQU9ELDJCQUEyQixXQUFXQSx5QkFBeUI7UUFDMUZQLGVBQWVPO0lBQ2pCO0lBQ0EsSUFBSUUsd0JBQXdCRCxnQkFBZ0JSLGFBQWEsRUFDckRBLGdCQUFnQlMsMEJBQTBCLEtBQUssSUFBSWIsdUJBQXVCYSx1QkFDMUVDLHdCQUF3QkYsZ0JBQWdCcEIsT0FBTyxFQUMvQ0EsVUFBVXNCLDBCQUEwQixLQUFLLElBQUksSUFBSUEsdUJBQ2pEQyxzQkFBc0JILGdCQUFnQkcsbUJBQW1CO0lBQzdELElBQUlDLGFBQWFiLHlCQUF5QkM7SUFDMUMsSUFBSWEsUUFBUXpCLFlBQVksSUFBSVgscUJBQXFCbUMsY0FBY3pCLGVBQWVDLFNBQVN3QixhQUFhLDJFQUEyRTtJQUUvSyxTQUFTRTtRQUNQLElBQUloQyxRQUFRK0IsTUFBTWpDLEdBQUcsQ0FBQ21DO1FBRXRCLElBQUlqQyxVQUFVTixXQUFXO1lBQ3ZCLGFBQWE7WUFDYk0sUUFBUXdCLEtBQUtVLEtBQUssQ0FBQyxNQUFNRDtZQUV6QixJQUFJSixxQkFBcUI7Z0JBQ3ZCLElBQUl0QixVQUFVd0IsTUFBTTdCLFVBQVU7Z0JBQzlCLElBQUlpQyxnQkFBZ0I1QixRQUFRNkIsSUFBSSxDQUFDLFNBQVV2QyxLQUFLO29CQUM5QyxPQUFPZ0Msb0JBQW9CaEMsTUFBTUcsS0FBSyxFQUFFQTtnQkFDMUM7Z0JBRUEsSUFBSW1DLGVBQWU7b0JBQ2pCbkMsUUFBUW1DLGNBQWNuQyxLQUFLO2dCQUM3QjtZQUNGO1lBRUErQixNQUFNOUIsR0FBRyxDQUFDZ0MsV0FBV2pDO1FBQ3ZCO1FBRUEsT0FBT0E7SUFDVDtJQUVBZ0MsU0FBU0ssVUFBVSxHQUFHO1FBQ3BCLE9BQU9OLE1BQU01QixLQUFLO0lBQ3BCO0lBRUEsT0FBTzZCO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtZGFzaGJvYXJkMi8uL25vZGVfbW9kdWxlcy9yZXNlbGVjdC9lcy9kZWZhdWx0TWVtb2l6ZS5qcz9lYzQ3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIENhY2hlIGltcGxlbWVudGF0aW9uIGJhc2VkIG9uIEVyaWsgUmFzbXVzc2VuJ3MgYGxydS1tZW1vaXplYDpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9lcmlrcmFzL2xydS1tZW1vaXplXG52YXIgTk9UX0ZPVU5EID0gJ05PVF9GT1VORCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpbmdsZXRvbkNhY2hlKGVxdWFscykge1xuICB2YXIgZW50cnk7XG4gIHJldHVybiB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgICBpZiAoZW50cnkgJiYgZXF1YWxzKGVudHJ5LmtleSwga2V5KSkge1xuICAgICAgICByZXR1cm4gZW50cnkudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBOT1RfRk9VTkQ7XG4gICAgfSxcbiAgICBwdXQ6IGZ1bmN0aW9uIHB1dChrZXksIHZhbHVlKSB7XG4gICAgICBlbnRyeSA9IHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfTtcbiAgICB9LFxuICAgIGdldEVudHJpZXM6IGZ1bmN0aW9uIGdldEVudHJpZXMoKSB7XG4gICAgICByZXR1cm4gZW50cnkgPyBbZW50cnldIDogW107XG4gICAgfSxcbiAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICBlbnRyeSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxydUNhY2hlKG1heFNpemUsIGVxdWFscykge1xuICB2YXIgZW50cmllcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICB2YXIgY2FjaGVJbmRleCA9IGVudHJpZXMuZmluZEluZGV4KGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgcmV0dXJuIGVxdWFscyhrZXksIGVudHJ5LmtleSk7XG4gICAgfSk7IC8vIFdlIGZvdW5kIGEgY2FjaGVkIGVudHJ5XG5cbiAgICBpZiAoY2FjaGVJbmRleCA+IC0xKSB7XG4gICAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2NhY2hlSW5kZXhdOyAvLyBDYWNoZWQgZW50cnkgbm90IGF0IHRvcCBvZiBjYWNoZSwgbW92ZSBpdCB0byB0aGUgdG9wXG5cbiAgICAgIGlmIChjYWNoZUluZGV4ID4gMCkge1xuICAgICAgICBlbnRyaWVzLnNwbGljZShjYWNoZUluZGV4LCAxKTtcbiAgICAgICAgZW50cmllcy51bnNoaWZ0KGVudHJ5KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVudHJ5LnZhbHVlO1xuICAgIH0gLy8gTm8gZW50cnkgZm91bmQgaW4gY2FjaGUsIHJldHVybiBzZW50aW5lbFxuXG5cbiAgICByZXR1cm4gTk9UX0ZPVU5EO1xuICB9XG5cbiAgZnVuY3Rpb24gcHV0KGtleSwgdmFsdWUpIHtcbiAgICBpZiAoZ2V0KGtleSkgPT09IE5PVF9GT1VORCkge1xuICAgICAgLy8gVE9ETyBJcyB1bnNoaWZ0IHNsb3c/XG4gICAgICBlbnRyaWVzLnVuc2hpZnQoe1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcblxuICAgICAgaWYgKGVudHJpZXMubGVuZ3RoID4gbWF4U2l6ZSkge1xuICAgICAgICBlbnRyaWVzLnBvcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICBlbnRyaWVzID0gW107XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldDogZ2V0LFxuICAgIHB1dDogcHV0LFxuICAgIGdldEVudHJpZXM6IGdldEVudHJpZXMsXG4gICAgY2xlYXI6IGNsZWFyXG4gIH07XG59XG5cbmV4cG9ydCB2YXIgZGVmYXVsdEVxdWFsaXR5Q2hlY2sgPSBmdW5jdGlvbiBkZWZhdWx0RXF1YWxpdHlDaGVjayhhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYWNoZUtleUNvbXBhcmF0b3IoZXF1YWxpdHlDaGVjaykge1xuICByZXR1cm4gZnVuY3Rpb24gYXJlQXJndW1lbnRzU2hhbGxvd2x5RXF1YWwocHJldiwgbmV4dCkge1xuICAgIGlmIChwcmV2ID09PSBudWxsIHx8IG5leHQgPT09IG51bGwgfHwgcHJldi5sZW5ndGggIT09IG5leHQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBEbyB0aGlzIGluIGEgZm9yIGxvb3AgKGFuZCBub3QgYSBgZm9yRWFjaGAgb3IgYW4gYGV2ZXJ5YCkgc28gd2UgY2FuIGRldGVybWluZSBlcXVhbGl0eSBhcyBmYXN0IGFzIHBvc3NpYmxlLlxuXG5cbiAgICB2YXIgbGVuZ3RoID0gcHJldi5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIWVxdWFsaXR5Q2hlY2socHJldltpXSwgbmV4dFtpXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xufVxuLy8gZGVmYXVsdE1lbW9pemUgbm93IHN1cHBvcnRzIGEgY29uZmlndXJhYmxlIGNhY2hlIHNpemUgd2l0aCBMUlUgYmVoYXZpb3IsXG4vLyBhbmQgb3B0aW9uYWwgY29tcGFyaXNvbiBvZiB0aGUgcmVzdWx0IHZhbHVlIHdpdGggZXhpc3RpbmcgdmFsdWVzXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdE1lbW9pemUoZnVuYywgZXF1YWxpdHlDaGVja09yT3B0aW9ucykge1xuICB2YXIgcHJvdmlkZWRPcHRpb25zID0gdHlwZW9mIGVxdWFsaXR5Q2hlY2tPck9wdGlvbnMgPT09ICdvYmplY3QnID8gZXF1YWxpdHlDaGVja09yT3B0aW9ucyA6IHtcbiAgICBlcXVhbGl0eUNoZWNrOiBlcXVhbGl0eUNoZWNrT3JPcHRpb25zXG4gIH07XG4gIHZhciBfcHJvdmlkZWRPcHRpb25zJGVxdWEgPSBwcm92aWRlZE9wdGlvbnMuZXF1YWxpdHlDaGVjayxcbiAgICAgIGVxdWFsaXR5Q2hlY2sgPSBfcHJvdmlkZWRPcHRpb25zJGVxdWEgPT09IHZvaWQgMCA/IGRlZmF1bHRFcXVhbGl0eUNoZWNrIDogX3Byb3ZpZGVkT3B0aW9ucyRlcXVhLFxuICAgICAgX3Byb3ZpZGVkT3B0aW9ucyRtYXhTID0gcHJvdmlkZWRPcHRpb25zLm1heFNpemUsXG4gICAgICBtYXhTaXplID0gX3Byb3ZpZGVkT3B0aW9ucyRtYXhTID09PSB2b2lkIDAgPyAxIDogX3Byb3ZpZGVkT3B0aW9ucyRtYXhTLFxuICAgICAgcmVzdWx0RXF1YWxpdHlDaGVjayA9IHByb3ZpZGVkT3B0aW9ucy5yZXN1bHRFcXVhbGl0eUNoZWNrO1xuICB2YXIgY29tcGFyYXRvciA9IGNyZWF0ZUNhY2hlS2V5Q29tcGFyYXRvcihlcXVhbGl0eUNoZWNrKTtcbiAgdmFyIGNhY2hlID0gbWF4U2l6ZSA9PT0gMSA/IGNyZWF0ZVNpbmdsZXRvbkNhY2hlKGNvbXBhcmF0b3IpIDogY3JlYXRlTHJ1Q2FjaGUobWF4U2l6ZSwgY29tcGFyYXRvcik7IC8vIHdlIHJlZmVyZW5jZSBhcmd1bWVudHMgaW5zdGVhZCBvZiBzcHJlYWRpbmcgdGhlbSBmb3IgcGVyZm9ybWFuY2UgcmVhc29uc1xuXG4gIGZ1bmN0aW9uIG1lbW9pemVkKCkge1xuICAgIHZhciB2YWx1ZSA9IGNhY2hlLmdldChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHZhbHVlID09PSBOT1RfRk9VTkQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHZhbHVlID0gZnVuYy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuXG4gICAgICBpZiAocmVzdWx0RXF1YWxpdHlDaGVjaykge1xuICAgICAgICB2YXIgZW50cmllcyA9IGNhY2hlLmdldEVudHJpZXMoKTtcbiAgICAgICAgdmFyIG1hdGNoaW5nRW50cnkgPSBlbnRyaWVzLmZpbmQoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdEVxdWFsaXR5Q2hlY2soZW50cnkudmFsdWUsIHZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1hdGNoaW5nRW50cnkpIHtcbiAgICAgICAgICB2YWx1ZSA9IG1hdGNoaW5nRW50cnkudmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2FjaGUucHV0KGFyZ3VtZW50cywgdmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIG1lbW9pemVkLmNsZWFyQ2FjaGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNhY2hlLmNsZWFyKCk7XG4gIH07XG5cbiAgcmV0dXJuIG1lbW9pemVkO1xufSJdLCJuYW1lcyI6WyJOT1RfRk9VTkQiLCJjcmVhdGVTaW5nbGV0b25DYWNoZSIsImVxdWFscyIsImVudHJ5IiwiZ2V0Iiwia2V5IiwidmFsdWUiLCJwdXQiLCJnZXRFbnRyaWVzIiwiY2xlYXIiLCJ1bmRlZmluZWQiLCJjcmVhdGVMcnVDYWNoZSIsIm1heFNpemUiLCJlbnRyaWVzIiwiY2FjaGVJbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsInVuc2hpZnQiLCJsZW5ndGgiLCJwb3AiLCJkZWZhdWx0RXF1YWxpdHlDaGVjayIsImEiLCJiIiwiY3JlYXRlQ2FjaGVLZXlDb21wYXJhdG9yIiwiZXF1YWxpdHlDaGVjayIsImFyZUFyZ3VtZW50c1NoYWxsb3dseUVxdWFsIiwicHJldiIsIm5leHQiLCJpIiwiZGVmYXVsdE1lbW9pemUiLCJmdW5jIiwiZXF1YWxpdHlDaGVja09yT3B0aW9ucyIsInByb3ZpZGVkT3B0aW9ucyIsIl9wcm92aWRlZE9wdGlvbnMkZXF1YSIsIl9wcm92aWRlZE9wdGlvbnMkbWF4UyIsInJlc3VsdEVxdWFsaXR5Q2hlY2siLCJjb21wYXJhdG9yIiwiY2FjaGUiLCJtZW1vaXplZCIsImFyZ3VtZW50cyIsImFwcGx5IiwibWF0Y2hpbmdFbnRyeSIsImZpbmQiLCJjbGVhckNhY2hlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/reselect/es/defaultMemoize.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/reselect/es/index.js":
/*!*******************************************!*\
  !*** ./node_modules/reselect/es/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createSelector: () => (/* binding */ createSelector),\n/* harmony export */   createSelectorCreator: () => (/* binding */ createSelectorCreator),\n/* harmony export */   createStructuredSelector: () => (/* binding */ createStructuredSelector),\n/* harmony export */   defaultEqualityCheck: () => (/* reexport safe */ _defaultMemoize__WEBPACK_IMPORTED_MODULE_0__.defaultEqualityCheck),\n/* harmony export */   defaultMemoize: () => (/* reexport safe */ _defaultMemoize__WEBPACK_IMPORTED_MODULE_0__.defaultMemoize)\n/* harmony export */ });\n/* harmony import */ var _defaultMemoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultMemoize */ \"(ssr)/./node_modules/reselect/es/defaultMemoize.js\");\n\n\nfunction getDependencies(funcs) {\n    var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;\n    if (!dependencies.every(function(dep) {\n        return typeof dep === \"function\";\n    })) {\n        var dependencyTypes = dependencies.map(function(dep) {\n            return typeof dep === \"function\" ? \"function \" + (dep.name || \"unnamed\") + \"()\" : typeof dep;\n        }).join(\", \");\n        throw new Error(\"createSelector expects all input-selectors to be functions, but received the following types: [\" + dependencyTypes + \"]\");\n    }\n    return dependencies;\n}\nfunction createSelectorCreator(memoize) {\n    for(var _len = arguments.length, memoizeOptionsFromArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){\n        memoizeOptionsFromArgs[_key - 1] = arguments[_key];\n    }\n    var createSelector = function createSelector() {\n        for(var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++){\n            funcs[_key2] = arguments[_key2];\n        }\n        var _recomputations = 0;\n        var _lastResult; // Due to the intricacies of rest params, we can't do an optional arg after `...funcs`.\n        // So, start by declaring the default value here.\n        // (And yes, the words 'memoize' and 'options' appear too many times in this next sequence.)\n        var directlyPassedOptions = {\n            memoizeOptions: undefined\n        }; // Normally, the result func or \"output selector\" is the last arg\n        var resultFunc = funcs.pop(); // If the result func is actually an _object_, assume it's our options object\n        if (typeof resultFunc === \"object\") {\n            directlyPassedOptions = resultFunc; // and pop the real result func off\n            resultFunc = funcs.pop();\n        }\n        if (typeof resultFunc !== \"function\") {\n            throw new Error(\"createSelector expects an output function after the inputs, but received: [\" + typeof resultFunc + \"]\");\n        } // Determine which set of options we're using. Prefer options passed directly,\n        // but fall back to options given to createSelectorCreator.\n        var _directlyPassedOption = directlyPassedOptions, _directlyPassedOption2 = _directlyPassedOption.memoizeOptions, memoizeOptions = _directlyPassedOption2 === void 0 ? memoizeOptionsFromArgs : _directlyPassedOption2; // Simplifying assumption: it's unlikely that the first options arg of the provided memoizer\n        // is an array. In most libs I've looked at, it's an equality function or options object.\n        // Based on that, if `memoizeOptions` _is_ an array, we assume it's a full\n        // user-provided array of options. Otherwise, it must be just the _first_ arg, and so\n        // we wrap it in an array so we can apply it.\n        var finalMemoizeOptions = Array.isArray(memoizeOptions) ? memoizeOptions : [\n            memoizeOptions\n        ];\n        var dependencies = getDependencies(funcs);\n        var memoizedResultFunc = memoize.apply(void 0, [\n            function recomputationWrapper() {\n                _recomputations++; // apply arguments instead of spreading for performance.\n                return resultFunc.apply(null, arguments);\n            }\n        ].concat(finalMemoizeOptions)); // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.\n        var selector = memoize(function dependenciesChecker() {\n            var params = [];\n            var length = dependencies.length;\n            for(var i = 0; i < length; i++){\n                // apply arguments instead of spreading and mutate a local list of params for performance.\n                // @ts-ignore\n                params.push(dependencies[i].apply(null, arguments));\n            } // apply arguments instead of spreading for performance.\n            _lastResult = memoizedResultFunc.apply(null, params);\n            return _lastResult;\n        });\n        Object.assign(selector, {\n            resultFunc: resultFunc,\n            memoizedResultFunc: memoizedResultFunc,\n            dependencies: dependencies,\n            lastResult: function lastResult() {\n                return _lastResult;\n            },\n            recomputations: function recomputations() {\n                return _recomputations;\n            },\n            resetRecomputations: function resetRecomputations() {\n                return _recomputations = 0;\n            }\n        });\n        return selector;\n    }; // @ts-ignore\n    return createSelector;\n}\nvar createSelector = /* #__PURE__ */ createSelectorCreator(_defaultMemoize__WEBPACK_IMPORTED_MODULE_0__.defaultMemoize);\n// Manual definition of state and output arguments\nvar createStructuredSelector = function createStructuredSelector(selectors, selectorCreator) {\n    if (selectorCreator === void 0) {\n        selectorCreator = createSelector;\n    }\n    if (typeof selectors !== \"object\") {\n        throw new Error(\"createStructuredSelector expects first argument to be an object \" + (\"where each property is a selector, instead received a \" + typeof selectors));\n    }\n    var objectKeys = Object.keys(selectors);\n    var resultSelector = selectorCreator(objectKeys.map(function(key) {\n        return selectors[key];\n    }), function() {\n        for(var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++){\n            values[_key3] = arguments[_key3];\n        }\n        return values.reduce(function(composition, value, index) {\n            composition[objectKeys[index]] = value;\n            return composition;\n        }, {});\n    });\n    return resultSelector;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVzZWxlY3QvZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdFO0FBQ3hCO0FBRWhELFNBQVNFLGdCQUFnQkMsS0FBSztJQUM1QixJQUFJQyxlQUFlQyxNQUFNQyxPQUFPLENBQUNILEtBQUssQ0FBQyxFQUFFLElBQUlBLEtBQUssQ0FBQyxFQUFFLEdBQUdBO0lBRXhELElBQUksQ0FBQ0MsYUFBYUcsS0FBSyxDQUFDLFNBQVVDLEdBQUc7UUFDbkMsT0FBTyxPQUFPQSxRQUFRO0lBQ3hCLElBQUk7UUFDRixJQUFJQyxrQkFBa0JMLGFBQWFNLEdBQUcsQ0FBQyxTQUFVRixHQUFHO1lBQ2xELE9BQU8sT0FBT0EsUUFBUSxhQUFhLGNBQWVBLENBQUFBLElBQUlHLElBQUksSUFBSSxTQUFRLElBQUssT0FBTyxPQUFPSDtRQUMzRixHQUFHSSxJQUFJLENBQUM7UUFDUixNQUFNLElBQUlDLE1BQU0sb0dBQW9HSixrQkFBa0I7SUFDeEk7SUFFQSxPQUFPTDtBQUNUO0FBRU8sU0FBU1Usc0JBQXNCQyxPQUFPO0lBQzNDLElBQUssSUFBSUMsT0FBT0MsVUFBVUMsTUFBTSxFQUFFQyx5QkFBeUIsSUFBSWQsTUFBTVcsT0FBTyxJQUFJQSxPQUFPLElBQUksSUFBSUksT0FBTyxHQUFHQSxPQUFPSixNQUFNSSxPQUFRO1FBQzVIRCxzQkFBc0IsQ0FBQ0MsT0FBTyxFQUFFLEdBQUdILFNBQVMsQ0FBQ0csS0FBSztJQUNwRDtJQUVBLElBQUlDLGlCQUFpQixTQUFTQTtRQUM1QixJQUFLLElBQUlDLFFBQVFMLFVBQVVDLE1BQU0sRUFBRWYsUUFBUSxJQUFJRSxNQUFNaUIsUUFBUUMsUUFBUSxHQUFHQSxRQUFRRCxPQUFPQyxRQUFTO1lBQzlGcEIsS0FBSyxDQUFDb0IsTUFBTSxHQUFHTixTQUFTLENBQUNNLE1BQU07UUFDakM7UUFFQSxJQUFJQyxrQkFBa0I7UUFFdEIsSUFBSUMsYUFBYSx1RkFBdUY7UUFDeEcsaURBQWlEO1FB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LEtBQUssRUFBRUMsS0FBSztZQUN0REYsV0FBVyxDQUFDUixVQUFVLENBQUNVLE1BQU0sQ0FBQyxHQUFHRDtZQUNqQyxPQUFPRDtRQUNULEdBQUcsQ0FBQztJQUNOO0lBQ0EsT0FBT047QUFDVCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWRhc2hib2FyZDIvLi9ub2RlX21vZHVsZXMvcmVzZWxlY3QvZXMvaW5kZXguanM/NWQ2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZhdWx0TWVtb2l6ZSwgZGVmYXVsdEVxdWFsaXR5Q2hlY2sgfSBmcm9tICcuL2RlZmF1bHRNZW1vaXplJztcbmV4cG9ydCB7IGRlZmF1bHRNZW1vaXplLCBkZWZhdWx0RXF1YWxpdHlDaGVjayB9O1xuXG5mdW5jdGlvbiBnZXREZXBlbmRlbmNpZXMoZnVuY3MpIHtcbiAgdmFyIGRlcGVuZGVuY2llcyA9IEFycmF5LmlzQXJyYXkoZnVuY3NbMF0pID8gZnVuY3NbMF0gOiBmdW5jcztcblxuICBpZiAoIWRlcGVuZGVuY2llcy5ldmVyeShmdW5jdGlvbiAoZGVwKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBkZXAgPT09ICdmdW5jdGlvbic7XG4gIH0pKSB7XG4gICAgdmFyIGRlcGVuZGVuY3lUeXBlcyA9IGRlcGVuZGVuY2llcy5tYXAoZnVuY3Rpb24gKGRlcCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBkZXAgPT09ICdmdW5jdGlvbicgPyBcImZ1bmN0aW9uIFwiICsgKGRlcC5uYW1lIHx8ICd1bm5hbWVkJykgKyBcIigpXCIgOiB0eXBlb2YgZGVwO1xuICAgIH0pLmpvaW4oJywgJyk7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiY3JlYXRlU2VsZWN0b3IgZXhwZWN0cyBhbGwgaW5wdXQtc2VsZWN0b3JzIHRvIGJlIGZ1bmN0aW9ucywgYnV0IHJlY2VpdmVkIHRoZSBmb2xsb3dpbmcgdHlwZXM6IFtcIiArIGRlcGVuZGVuY3lUeXBlcyArIFwiXVwiKTtcbiAgfVxuXG4gIHJldHVybiBkZXBlbmRlbmNpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZWxlY3RvckNyZWF0b3IobWVtb2l6ZSkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWVtb2l6ZU9wdGlvbnNGcm9tQXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgbWVtb2l6ZU9wdGlvbnNGcm9tQXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgY3JlYXRlU2VsZWN0b3IgPSBmdW5jdGlvbiBjcmVhdGVTZWxlY3RvcigpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBmdW5jc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHZhciBfcmVjb21wdXRhdGlvbnMgPSAwO1xuXG4gICAgdmFyIF9sYXN0UmVzdWx0OyAvLyBEdWUgdG8gdGhlIGludHJpY2FjaWVzIG9mIHJlc3QgcGFyYW1zLCB3ZSBjYW4ndCBkbyBhbiBvcHRpb25hbCBhcmcgYWZ0ZXIgYC4uLmZ1bmNzYC5cbiAgICAvLyBTbywgc3RhcnQgYnkgZGVjbGFyaW5nIHRoZSBkZWZhdWx0IHZhbHVlIGhlcmUuXG4gICAgLy8gKEFuZCB5ZXMsIHRoZSB3b3JkcyAnbWVtb2l6ZScgYW5kICdvcHRpb25zJyBhcHBlYXIgdG9vIG1hbnkgdGltZXMgaW4gdGhpcyBuZXh0IHNlcXVlbmNlLilcblxuXG4gICAgdmFyIGRpcmVjdGx5UGFzc2VkT3B0aW9ucyA9IHtcbiAgICAgIG1lbW9pemVPcHRpb25zOiB1bmRlZmluZWRcbiAgICB9OyAvLyBOb3JtYWxseSwgdGhlIHJlc3VsdCBmdW5jIG9yIFwib3V0cHV0IHNlbGVjdG9yXCIgaXMgdGhlIGxhc3QgYXJnXG5cbiAgICB2YXIgcmVzdWx0RnVuYyA9IGZ1bmNzLnBvcCgpOyAvLyBJZiB0aGUgcmVzdWx0IGZ1bmMgaXMgYWN0dWFsbHkgYW4gX29iamVjdF8sIGFzc3VtZSBpdCdzIG91ciBvcHRpb25zIG9iamVjdFxuXG4gICAgaWYgKHR5cGVvZiByZXN1bHRGdW5jID09PSAnb2JqZWN0Jykge1xuICAgICAgZGlyZWN0bHlQYXNzZWRPcHRpb25zID0gcmVzdWx0RnVuYzsgLy8gYW5kIHBvcCB0aGUgcmVhbCByZXN1bHQgZnVuYyBvZmZcblxuICAgICAgcmVzdWx0RnVuYyA9IGZ1bmNzLnBvcCgpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVzdWx0RnVuYyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY3JlYXRlU2VsZWN0b3IgZXhwZWN0cyBhbiBvdXRwdXQgZnVuY3Rpb24gYWZ0ZXIgdGhlIGlucHV0cywgYnV0IHJlY2VpdmVkOiBbXCIgKyB0eXBlb2YgcmVzdWx0RnVuYyArIFwiXVwiKTtcbiAgICB9IC8vIERldGVybWluZSB3aGljaCBzZXQgb2Ygb3B0aW9ucyB3ZSdyZSB1c2luZy4gUHJlZmVyIG9wdGlvbnMgcGFzc2VkIGRpcmVjdGx5LFxuICAgIC8vIGJ1dCBmYWxsIGJhY2sgdG8gb3B0aW9ucyBnaXZlbiB0byBjcmVhdGVTZWxlY3RvckNyZWF0b3IuXG5cblxuICAgIHZhciBfZGlyZWN0bHlQYXNzZWRPcHRpb24gPSBkaXJlY3RseVBhc3NlZE9wdGlvbnMsXG4gICAgICAgIF9kaXJlY3RseVBhc3NlZE9wdGlvbjIgPSBfZGlyZWN0bHlQYXNzZWRPcHRpb24ubWVtb2l6ZU9wdGlvbnMsXG4gICAgICAgIG1lbW9pemVPcHRpb25zID0gX2RpcmVjdGx5UGFzc2VkT3B0aW9uMiA9PT0gdm9pZCAwID8gbWVtb2l6ZU9wdGlvbnNGcm9tQXJncyA6IF9kaXJlY3RseVBhc3NlZE9wdGlvbjI7IC8vIFNpbXBsaWZ5aW5nIGFzc3VtcHRpb246IGl0J3MgdW5saWtlbHkgdGhhdCB0aGUgZmlyc3Qgb3B0aW9ucyBhcmcgb2YgdGhlIHByb3ZpZGVkIG1lbW9pemVyXG4gICAgLy8gaXMgYW4gYXJyYXkuIEluIG1vc3QgbGlicyBJJ3ZlIGxvb2tlZCBhdCwgaXQncyBhbiBlcXVhbGl0eSBmdW5jdGlvbiBvciBvcHRpb25zIG9iamVjdC5cbiAgICAvLyBCYXNlZCBvbiB0aGF0LCBpZiBgbWVtb2l6ZU9wdGlvbnNgIF9pc18gYW4gYXJyYXksIHdlIGFzc3VtZSBpdCdzIGEgZnVsbFxuICAgIC8vIHVzZXItcHJvdmlkZWQgYXJyYXkgb2Ygb3B0aW9ucy4gT3RoZXJ3aXNlLCBpdCBtdXN0IGJlIGp1c3QgdGhlIF9maXJzdF8gYXJnLCBhbmQgc29cbiAgICAvLyB3ZSB3cmFwIGl0IGluIGFuIGFycmF5IHNvIHdlIGNhbiBhcHBseSBpdC5cblxuICAgIHZhciBmaW5hbE1lbW9pemVPcHRpb25zID0gQXJyYXkuaXNBcnJheShtZW1vaXplT3B0aW9ucykgPyBtZW1vaXplT3B0aW9ucyA6IFttZW1vaXplT3B0aW9uc107XG4gICAgdmFyIGRlcGVuZGVuY2llcyA9IGdldERlcGVuZGVuY2llcyhmdW5jcyk7XG4gICAgdmFyIG1lbW9pemVkUmVzdWx0RnVuYyA9IG1lbW9pemUuYXBwbHkodm9pZCAwLCBbZnVuY3Rpb24gcmVjb21wdXRhdGlvbldyYXBwZXIoKSB7XG4gICAgICBfcmVjb21wdXRhdGlvbnMrKzsgLy8gYXBwbHkgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIGZvciBwZXJmb3JtYW5jZS5cblxuICAgICAgcmV0dXJuIHJlc3VsdEZ1bmMuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XS5jb25jYXQoZmluYWxNZW1vaXplT3B0aW9ucykpOyAvLyBJZiBhIHNlbGVjdG9yIGlzIGNhbGxlZCB3aXRoIHRoZSBleGFjdCBzYW1lIGFyZ3VtZW50cyB3ZSBkb24ndCBuZWVkIHRvIHRyYXZlcnNlIG91ciBkZXBlbmRlbmNpZXMgYWdhaW4uXG5cbiAgICB2YXIgc2VsZWN0b3IgPSBtZW1vaXplKGZ1bmN0aW9uIGRlcGVuZGVuY2llc0NoZWNrZXIoKSB7XG4gICAgICB2YXIgcGFyYW1zID0gW107XG4gICAgICB2YXIgbGVuZ3RoID0gZGVwZW5kZW5jaWVzLmxlbmd0aDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBhcHBseSBhcmd1bWVudHMgaW5zdGVhZCBvZiBzcHJlYWRpbmcgYW5kIG11dGF0ZSBhIGxvY2FsIGxpc3Qgb2YgcGFyYW1zIGZvciBwZXJmb3JtYW5jZS5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBwYXJhbXMucHVzaChkZXBlbmRlbmNpZXNbaV0uYXBwbHkobnVsbCwgYXJndW1lbnRzKSk7XG4gICAgICB9IC8vIGFwcGx5IGFyZ3VtZW50cyBpbnN0ZWFkIG9mIHNwcmVhZGluZyBmb3IgcGVyZm9ybWFuY2UuXG5cblxuICAgICAgX2xhc3RSZXN1bHQgPSBtZW1vaXplZFJlc3VsdEZ1bmMuYXBwbHkobnVsbCwgcGFyYW1zKTtcbiAgICAgIHJldHVybiBfbGFzdFJlc3VsdDtcbiAgICB9KTtcbiAgICBPYmplY3QuYXNzaWduKHNlbGVjdG9yLCB7XG4gICAgICByZXN1bHRGdW5jOiByZXN1bHRGdW5jLFxuICAgICAgbWVtb2l6ZWRSZXN1bHRGdW5jOiBtZW1vaXplZFJlc3VsdEZ1bmMsXG4gICAgICBkZXBlbmRlbmNpZXM6IGRlcGVuZGVuY2llcyxcbiAgICAgIGxhc3RSZXN1bHQ6IGZ1bmN0aW9uIGxhc3RSZXN1bHQoKSB7XG4gICAgICAgIHJldHVybiBfbGFzdFJlc3VsdDtcbiAgICAgIH0sXG4gICAgICByZWNvbXB1dGF0aW9uczogZnVuY3Rpb24gcmVjb21wdXRhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBfcmVjb21wdXRhdGlvbnM7XG4gICAgICB9LFxuICAgICAgcmVzZXRSZWNvbXB1dGF0aW9uczogZnVuY3Rpb24gcmVzZXRSZWNvbXB1dGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIF9yZWNvbXB1dGF0aW9ucyA9IDA7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9OyAvLyBAdHMtaWdub3JlXG5cblxuICByZXR1cm4gY3JlYXRlU2VsZWN0b3I7XG59XG5leHBvcnQgdmFyIGNyZWF0ZVNlbGVjdG9yID0gLyogI19fUFVSRV9fICovY3JlYXRlU2VsZWN0b3JDcmVhdG9yKGRlZmF1bHRNZW1vaXplKTtcbi8vIE1hbnVhbCBkZWZpbml0aW9uIG9mIHN0YXRlIGFuZCBvdXRwdXQgYXJndW1lbnRzXG5leHBvcnQgdmFyIGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvciA9IGZ1bmN0aW9uIGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvcihzZWxlY3RvcnMsIHNlbGVjdG9yQ3JlYXRvcikge1xuICBpZiAoc2VsZWN0b3JDcmVhdG9yID09PSB2b2lkIDApIHtcbiAgICBzZWxlY3RvckNyZWF0b3IgPSBjcmVhdGVTZWxlY3RvcjtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc2VsZWN0b3JzICE9PSAnb2JqZWN0Jykge1xuICAgIHRocm93IG5ldyBFcnJvcignY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yIGV4cGVjdHMgZmlyc3QgYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0ICcgKyAoXCJ3aGVyZSBlYWNoIHByb3BlcnR5IGlzIGEgc2VsZWN0b3IsIGluc3RlYWQgcmVjZWl2ZWQgYSBcIiArIHR5cGVvZiBzZWxlY3RvcnMpKTtcbiAgfVxuXG4gIHZhciBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMoc2VsZWN0b3JzKTtcbiAgdmFyIHJlc3VsdFNlbGVjdG9yID0gc2VsZWN0b3JDcmVhdG9yKCAvLyBAdHMtaWdub3JlXG4gIG9iamVjdEtleXMubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gc2VsZWN0b3JzW2tleV07XG4gIH0pLCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCB2YWx1ZXMgPSBuZXcgQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgIHZhbHVlc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXMucmVkdWNlKGZ1bmN0aW9uIChjb21wb3NpdGlvbiwgdmFsdWUsIGluZGV4KSB7XG4gICAgICBjb21wb3NpdGlvbltvYmplY3RLZXlzW2luZGV4XV0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiBjb21wb3NpdGlvbjtcbiAgICB9LCB7fSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0U2VsZWN0b3I7XG59OyJdLCJuYW1lcyI6WyJkZWZhdWx0TWVtb2l6ZSIsImRlZmF1bHRFcXVhbGl0eUNoZWNrIiwiZ2V0RGVwZW5kZW5jaWVzIiwiZnVuY3MiLCJkZXBlbmRlbmNpZXMiLCJBcnJheSIsImlzQXJyYXkiLCJldmVyeSIsImRlcCIsImRlcGVuZGVuY3lUeXBlcyIsIm1hcCIsIm5hbWUiLCJqb2luIiwiRXJyb3IiLCJjcmVhdGVTZWxlY3RvckNyZWF0b3IiLCJtZW1vaXplIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsIm1lbW9pemVPcHRpb25zRnJvbUFyZ3MiLCJfa2V5IiwiY3JlYXRlU2VsZWN0b3IiLCJfbGVuMiIsIl9rZXkyIiwiX3JlY29tcHV0YXRpb25zIiwiX2xhc3RSZXN1bHQiLCJkaXJlY3RseVBhc3NlZE9wdGlvbnMiLCJtZW1vaXplT3B0aW9ucyIsInVuZGVmaW5lZCIsInJlc3VsdEZ1bmMiLCJwb3AiLCJfZGlyZWN0bHlQYXNzZWRPcHRpb24iLCJfZGlyZWN0bHlQYXNzZWRPcHRpb24yIiwiZmluYWxNZW1vaXplT3B0aW9ucyIsIm1lbW9pemVkUmVzdWx0RnVuYyIsImFwcGx5IiwicmVjb21wdXRhdGlvbldyYXBwZXIiLCJjb25jYXQiLCJzZWxlY3RvciIsImRlcGVuZGVuY2llc0NoZWNrZXIiLCJwYXJhbXMiLCJpIiwicHVzaCIsIk9iamVjdCIsImFzc2lnbiIsImxhc3RSZXN1bHQiLCJyZWNvbXB1dGF0aW9ucyIsInJlc2V0UmVjb21wdXRhdGlvbnMiLCJjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IiLCJzZWxlY3RvcnMiLCJzZWxlY3RvckNyZWF0b3IiLCJvYmplY3RLZXlzIiwia2V5cyIsInJlc3VsdFNlbGVjdG9yIiwia2V5IiwiX2xlbjMiLCJ2YWx1ZXMiLCJfa2V5MyIsInJlZHVjZSIsImNvbXBvc2l0aW9uIiwidmFsdWUiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/reselect/es/index.js\n");

/***/ })

};
;