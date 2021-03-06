/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n\nvar token = \"8c2bde14e18cbf44c81a02258f061159bd67abb0\";\nvar urlData = [];\nvar input = document.querySelector(\".url\");\nvar errMsg = document.querySelector(\".errMsg\");\n\nfunction fetchData(url) {\n  var data = {\n    long_url: url,\n    domain: \"bit.ly\"\n  };\n  fetch(\"https://api-ssl.bitly.com/v4/shorten\", {\n    method: \"POST\",\n    headers: {\n      Authorization: \"Bearer \".concat(token),\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify(data)\n  }).then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    if (data.message) {\n      addInputErrStyle();\n    } else {\n      if (urlData.length === 3) {\n        urlData.shift();\n      }\n\n      urlData.push({\n        long_url: url,\n        short_url: data.link\n      });\n      renderUrl();\n    }\n  });\n}\n\ndocument.getElementById(\"getLink\").addEventListener(\"click\", function (e) {\n  var inputValue = input.value;\n\n  if (!inputValue.trim()) {\n    addInputErrStyle();\n    return;\n  } else {\n    fetchData(inputValue);\n    removeInputErrStyle();\n    input.value = \"\";\n  }\n});\n\nfunction renderUrl() {\n  document.querySelector(\".urlBlock\").innerHTML = \"\";\n  urlData.map(function (_ref) {\n    var long_url = _ref.long_url,\n        short_url = _ref.short_url;\n    var data = \"<p title=\\\"\".concat(long_url, \"\\\">\").concat(long_url, \"</p>\\n    <div>\\n      <span>\").concat(short_url, \"</span>\\n      <button data-id=\\\"\").concat(short_url, \"\\\" class=\\\"copyUrl\\\">Copy</button>\\n    </div>\");\n    var div = document.createElement(\"div\");\n    div.className = \"urlBlock__child\";\n    div.innerHTML = data;\n    document.querySelector(\".urlBlock\").appendChild(div);\n  });\n}\n\ndocument.addEventListener(\"click\", function (e) {\n  if (e.target.className === \"copyUrl\") {\n    var btn = e.target;\n    var url = e.target.dataset.id;\n    navigator.clipboard.writeText(url);\n    btn.innerHTML = \"Copied!\";\n    btn.style.backgroundColor = \"hsl(260, 8%, 14%)\";\n    setTimeout(function () {\n      btn.innerHTML = \"Copy\";\n      btn.style.backgroundColor = \"hsl(180, 66%, 49%)\";\n    }, 1000);\n  }\n});\n\nfunction addInputErrStyle() {\n  input.style.border = \"2px solid red\";\n  errMsg.style.display = \"block\";\n}\n\nfunction removeInputErrStyle() {\n  input.style.border = \"none\";\n  errMsg.style.display = \"none\";\n}\n\n//# sourceURL=webpack://webpack-boilerplate/./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;