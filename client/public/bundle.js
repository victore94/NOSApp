/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/victor/Desktop/code/NatureOfSound/client/src/index.js: Support for the experimental syntax 'jsx' isn't currently enabled (7:3):\\n\\n\\u001b[0m \\u001b[90m  5 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  6 | \\u001b[39m\\u001b[33mReactDOM\\u001b[39m\\u001b[33m.\\u001b[39mrender(\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m  7 | \\u001b[39m  \\u001b[33m<\\u001b[39m\\u001b[33mReact\\u001b[39m\\u001b[33m.\\u001b[39m\\u001b[33mStrictMode\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m  \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  8 | \\u001b[39m    \\u001b[33m<\\u001b[39m\\u001b[33mBrowserRouter\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  9 | \\u001b[39m      \\u001b[33m<\\u001b[39m\\u001b[33mApp\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m    \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mBrowserRouter\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\nAdd @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.\\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.\\n    at Parser._raise (/Users/victor/Desktop/code/NatureOfSound/client/node_modules/@babel/parser/lib/index.js:757:17)\\n    at Parser.raiseWithData (/Users/victor/Desktop/code/NatureOfSound/client/node_modules/@babel/parser/lib/index.js:750:17)\\n    at Parser.expectOnePlugin (/Users/victor/Desktop/code/NatureOfSound/client/node_modules/@babel/parser/lib/index.js:8849:18)\\n    at Parser.parseExprAtom (/Users/victor/Desktop/code/NatureOfSound/client/node_modules/@babel/parser/lib/index.js:10170:22)\\n    at Parser.parseExprSubscripts (/Users/victor/Desktop/code/NatureOfSound/client/node_modules/@babel/parser/lib/index.js:9688:23)\\n    at Parser.parseMaybeUnary (/Users/victor/Desktop/code/NatureOfSound/client/node_modules/@babel/parser/lib/index.js:9668:21)\\n    at Parser.parseExprOps (/Users/victor/Desktop/code/NatureOfSound/client/node_modules/@babel/parser/lib/index.js:9538:23)\\n    at Parser.parseMaybeConditional (/Users/victor/Desktop/code/NatureOfSound/client/node_modules/@babel/parser/lib/index.js:9511:23)\\n    at Parser.parseMaybeAssign (/Users/victor/Desktop/code/NatureOfSound/client/node_modules/@babel/parser/lib/index.js:9466:21)\\n    at Parser.parseExprListItem (/Users/victor/Desktop/code/NatureOfSound/client/node_modules/@babel/parser/lib/index.js:10846:18)\\n    at Parser.parseCallExpressionArguments (/Users/victor/Desktop/code/NatureOfSound/client/node_modules/@babel/parser/lib/index.js:9885:22)\\n    at Parser.parseSubscript (/Users/victor/Desktop/code/NatureOfSound/client/node_modules/@babel/parser/lib/index.js:9785:31)\\n    at Parser.parseSubscripts (/Users/victor/Desktop/code/NatureOfSound/client/node_modules/@babel/parser/lib/index.js:9711:19)\\n    at Parser.parseExprSubscripts (/Users/victor/Desktop/code/NatureOfSound/client/node_modules/@babel/parser/lib/index.js:9694:17)\\n    at Parser.parseMaybeUnary (/Users/victor/Desktop/code/NatureOfSound/client/node_modules/@babel/parser/lib/index.js:9668:21)\\n    at Parser.parseExprOps (/Users/victor/Desktop/code/NatureOfSound/client/node_modules/@babel/parser/lib/index.js:9538:23)\\n    at Parser.parseMaybeConditional (/Users/victor/Desktop/code/NatureOfSound/client/node_modules/@babel/parser/lib/index.js:9511:23)\\n    at Parser.parseMaybeAssign (/Users/victor/Desktop/code/NatureOfSound/client/node_modules/@babel/parser/lib/index.js:9466:21)\\n    at Parser.parseExpression (/Users/victor/Desktop/code/NatureOfSound/client/node_modules/@babel/parser/lib/index.js:9418:23)\\n    at Parser.parseStatementContent (/Users/victor/Desktop/code/NatureOfSound/client/node_modules/@babel/parser/lib/index.js:11339:23)\\n    at Parser.parseStatement (/Users/victor/Desktop/code/NatureOfSound/client/node_modules/@babel/parser/lib/index.js:11210:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/victor/Desktop/code/NatureOfSound/client/node_modules/@babel/parser/lib/index.js:11785:25)\\n    at Parser.parseBlockBody (/Users/victor/Desktop/code/NatureOfSound/client/node_modules/@babel/parser/lib/index.js:11771:10)\\n    at Parser.parseTopLevel (/Users/victor/Desktop/code/NatureOfSound/client/node_modules/@babel/parser/lib/index.js:11141:10)\\n    at Parser.parse (/Users/victor/Desktop/code/NatureOfSound/client/node_modules/@babel/parser/lib/index.js:12843:10)\\n    at parse (/Users/victor/Desktop/code/NatureOfSound/client/node_modules/@babel/parser/lib/index.js:12896:38)\\n    at parser (/Users/victor/Desktop/code/NatureOfSound/client/node_modules/@babel/core/lib/parser/index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/Users/victor/Desktop/code/NatureOfSound/client/node_modules/@babel/core/lib/transformation/normalize-file.js:93:38)\\n    at normalizeFile.next (<anonymous>)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });