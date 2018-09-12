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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub */ \"./src/sub.ts\");\n\nvar Main = /** @class */ (function () {\n    function Main() {\n        var _this = this;\n        this.sub = new _sub__WEBPACK_IMPORTED_MODULE_0__[\"Sub\"]();\n        var body = document.getElementsByTagName('body');\n        var element = body.item(0);\n        var div = document.createElement('div');\n        div.innerHTML = '「こんにちは」を他言語に変換します。<br>好きな言語を入れてください。<br>※ちなみに対応しているのは日本語、英語、スペイン語、ドイツ語です。<br>';\n        var input = document.createElement('input');\n        input.id = 'country';\n        var button = document.createElement('button');\n        button.textContent = '変換';\n        button.addEventListener('click', function () {\n            _this.transtrationGreeting(document.getElementById('country')['value']);\n        });\n        div.appendChild(input);\n        div.appendChild(button);\n        element.appendChild(div);\n    }\n    Main.prototype.transtrationGreeting = function (country) {\n        var addDiv = document.createElement('div');\n        addDiv.innerHTML = \"\\u3053\\u3093\\u306B\\u3061\\u306F\\u3092\" + country + \"\\u3067\\u8A00\\u3046\\u3068\" + this.sub.hello(country);\n        document.getElementsByTagName('body').item(0).appendChild(addDiv);\n        console.log(\"\\u3053\\u3093\\u306B\\u3061\\u306F\\u3092\" + country + \"\\u3067\\u8A00\\u3046\\u3068\" + this.sub.hello(country));\n    };\n    return Main;\n}());\nvar main = new Main();\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/sub.ts":
/*!********************!*\
  !*** ./src/sub.ts ***!
  \********************/
/*! exports provided: Sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Sub\", function() { return Sub; });\nvar Sub = /** @class */ (function () {\n    function Sub() {\n        this.greeting = {\n            '日本語': 'こんにちは',\n            '英語': 'Hello',\n            'スペイン語': 'Hola',\n            'ドイツ語': 'Hallo'\n        };\n    }\n    Sub.prototype.hello = function (country) {\n        return this.greeting[country];\n    };\n    return Sub;\n}());\n\n\n\n//# sourceURL=webpack:///./src/sub.ts?");

/***/ })

/******/ });