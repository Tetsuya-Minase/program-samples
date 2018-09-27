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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/typetest.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/typetest.ts":
/*!*************************!*\
  !*** ./src/typetest.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const string = '';\nconst number = 0;\nconst boolean = true;\nconst nul = null;\nconst object = {};\nconst symbol = Symbol('hoge');\nlet a;\nconsole.log(`string: ${typeof string}`); // string\nconsole.log(`number: ${typeof number}`); // number\nconsole.log(`boolean: ${typeof boolean}`); // boolean\nconsole.log(`nul: ${typeof nul}`); // object\nconsole.log(`symbol: ${typeof symbol}`); // symbol\nconsole.log(`a: ${typeof a}`); // undefined\nconsole.log(`object: ${typeof object}`); // object\nconsole.log(`string: ${Object.prototype.toString.call(string)}`); // [object String]\nconsole.log(`number: ${Object.prototype.toString.call(number)}`); // [object Number]\nconsole.log(`boolean: ${Object.prototype.toString.call(boolean)}`); // [object Boolean]\nconsole.log(`nul: ${Object.prototype.toString.call(nul)}`); // [object Null]\nconsole.log(`symbol: ${Object.prototype.toString.call(symbol)}`); // [object Symbol]\nconsole.log(`a: ${Object.prototype.toString.call(undefined)}`); // [object Undefined]\nconsole.log(`object: ${Object.prototype.toString.call(object)}`); // [object Object]\nconst arrayString = new Array();\nconst arrayNumber = new Array();\nconst arrayObject = new Array();\nconsole.log(`arrayString:${typeof arrayString}`); // object\nconsole.log(`arrayNumber:${typeof arrayNumber}`); // object\nconsole.log(`arrayObject:${typeof arrayObject}`); // object\nconsole.log(`arrayString:${Object.prototype.toString.call(arrayString)}`); // [object Array]\nconsole.log(`arrayNumber:${Object.prototype.toString.call(arrayNumber)}`); // [object Array]\nconsole.log(`arrayObject:${Object.prototype.toString.call(arrayObject)}`); // [object Array]\nconst array = [1, 3, 5];\nconsole.log(`array has 3 ? ${array.includes(3)}`); // true\nconsole.log(`array has 4 ? ${array.includes(4)}`); // false\n// 見つかればindex.見つからなければ-1を返す。\nif (array.indexOf(3) != 0) {\n    console.log('array has 3');\n}\n/**\n * Array.includes()の代替\n * @param array 検索される配列\n * @param target 検索対象\n */\nconst arrayIncludes = (array, target) => {\n    // 配列無いならリターン\n    if (array == null) {\n        return false;\n    }\n    // 配列をループし、一致するものがあれば終了\n    // ※someはforeachとほぼ同じだが、trueが返却された時点でループを終了する\n    return array.some(item => {\n        return item === target;\n    });\n};\nconsole.log(`array has 3 ? ${arrayIncludes(array, 3)}`); // true\nconsole.log(`array has 4 ? ${arrayIncludes(array, 4)}`); // false\n\n\n//# sourceURL=webpack:///./src/typetest.ts?");

/***/ })

/******/ });