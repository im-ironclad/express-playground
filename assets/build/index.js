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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/src/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/scripts/components/Intro.js":
/*!************************************************!*\
  !*** ./assets/src/scripts/components/Intro.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Intro; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * Intro Component\n *\n * If you need to import anything, do so here\n */\n// import Component from './ExampleComponent';\n\n/**\n * Create selectors for all encapsulated elements to manipulate\n * - Heading\n */\nvar headingSelector = '.intro__heading';\n\nvar Intro =\n/*#__PURE__*/\nfunction () {\n  function Intro(_ref) {\n    var parent = _ref.parent;\n\n    _classCallCheck(this, Intro);\n\n    this.parent = parent;\n    this.heading = parent.querySelector(headingSelector);\n  }\n\n  _createClass(Intro, [{\n    key: \"init\",\n    value: function init() {\n      this.setListeners();\n    }\n  }, {\n    key: \"setListeners\",\n    value: function setListeners() {\n      this.heading.addEventListener('click', function (e) {\n        return console.log(e.target);\n      }); // eslint-disable-line no-console\n    }\n  }]);\n\n  return Intro;\n}();\n\n\n\n//# sourceURL=webpack:///./assets/src/scripts/components/Intro.js?");

/***/ }),

/***/ "./assets/src/scripts/index.js":
/*!*************************************!*\
  !*** ./assets/src/scripts/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.scss */ \"./assets/src/styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polyfills */ \"./assets/src/scripts/polyfills/index.js\");\n/* harmony import */ var _utilities_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities/components */ \"./assets/src/scripts/utilities/components.js\");\n// Import css first thing\n\n // Import components\n\n\n\n(function domReady() {\n  // Loop through each component\n  _utilities_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].forEach(function (component) {\n    // Get all the component elements on the page\n    var componentEls = document.querySelectorAll(component.elsSelector); // For each element make it a new Component and initialize\n\n    componentEls.forEach(function (el) {\n      el = new component.Component({\n        parent: el\n      });\n      el.init();\n    });\n  });\n})();\n\n//# sourceURL=webpack:///./assets/src/scripts/index.js?");

/***/ }),

/***/ "./assets/src/scripts/polyfills/array-find.js":
/*!****************************************************!*\
  !*** ./assets/src/scripts/polyfills/array-find.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Array.prototype.find() polyfill\n * Adapted from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find\n * @author Chris Ferdinandi\n * @license MIT\n */\nif (!Array.prototype.find) {\n  Array.prototype.find = function (callback) {\n    // 1. Let O be ? ToObject(this value).\n    if (this == null) {\n      throw new TypeError('\"this\" is null or not defined');\n    }\n\n    var o = Object(this); // 2. Let len be ? ToLength(? Get(O, \"length\")).\n\n    var len = o.length >>> 0; // 3. If IsCallable(callback) is false, throw a TypeError exception.\n\n    if (typeof callback !== 'function') {\n      throw new TypeError('callback must be a function');\n    } // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.\n\n\n    var thisArg = arguments[1]; // 5. Let k be 0.\n\n    var k = 0; // 6. Repeat, while k < len\n\n    while (k < len) {\n      // a. Let Pk be ! ToString(k).\n      // b. Let kValue be ? Get(O, Pk).\n      // c. Let testResult be ToBoolean(? Call(callback, T, « kValue, k, O »)).\n      // d. If testResult is true, return kValue.\n      var kValue = o[k];\n\n      if (callback.call(thisArg, kValue, k, o)) {\n        return kValue;\n      } // e. Increase k by 1.\n\n\n      k++;\n    } // 7. Return undefined.\n\n\n    return undefined;\n  };\n}\n\n//# sourceURL=webpack:///./assets/src/scripts/polyfills/array-find.js?");

/***/ }),

/***/ "./assets/src/scripts/polyfills/array-findindex.js":
/*!*********************************************************!*\
  !*** ./assets/src/scripts/polyfills/array-findindex.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// https://tc39.github.io/ecma262/#sec-array.prototype.findindex\nif (!Array.prototype.findIndex) {\n  Object.defineProperty(Array.prototype, 'findIndex', {\n    value: function value(predicate) {\n      // 1. Let O be ? ToObject(this value).\n      if (this == null) {\n        throw new TypeError('\"this\" is null or not defined');\n      }\n\n      var o = Object(this); // 2. Let len be ? ToLength(? Get(O, \"length\")).\n\n      var len = o.length >>> 0; // 3. If IsCallable(predicate) is false, throw a TypeError exception.\n\n      if (typeof predicate !== 'function') {\n        throw new TypeError('predicate must be a function');\n      } // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.\n\n\n      var thisArg = arguments[1]; // 5. Let k be 0.\n\n      var k = 0; // 6. Repeat, while k < len\n\n      while (k < len) {\n        // a. Let Pk be ! ToString(k).\n        // b. Let kValue be ? Get(O, Pk).\n        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).\n        // d. If testResult is true, return k.\n        var kValue = o[k];\n\n        if (predicate.call(thisArg, kValue, k, o)) {\n          return k;\n        } // e. Increase k by 1.\n\n\n        k++;\n      } // 7. Return -1.\n\n\n      return -1;\n    },\n    configurable: true,\n    writable: true\n  });\n}\n\n//# sourceURL=webpack:///./assets/src/scripts/polyfills/array-findindex.js?");

/***/ }),

/***/ "./assets/src/scripts/polyfills/array-foreach.js":
/*!*******************************************************!*\
  !*** ./assets/src/scripts/polyfills/array-foreach.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (!Array.prototype.forEach) {\n  Array.prototype.forEach = function (callback\n  /*, thisArg*/\n  ) {\n    var T, k;\n\n    if (this == null) {\n      throw new TypeError('this is null or not defined');\n    } // 1. Let O be the result of calling toObject() passing the\n    // |this| value as the argument.\n\n\n    var O = Object(this); // 2. Let lenValue be the result of calling the Get() internal\n    // method of O with the argument \"length\".\n    // 3. Let len be toUint32(lenValue).\n\n    var len = O.length >>> 0; // 4. If isCallable(callback) is false, throw a TypeError exception. \n    // See: http://es5.github.com/#x9.11\n\n    if (typeof callback !== 'function') {\n      throw new TypeError(callback + ' is not a function');\n    } // 5. If thisArg was supplied, let T be thisArg; else let\n    // T be undefined.\n\n\n    if (arguments.length > 1) {\n      T = arguments[1];\n    } // 6. Let k be 0.\n\n\n    k = 0; // 7. Repeat while k < len.\n\n    while (k < len) {\n      var kValue; // a. Let Pk be ToString(k).\n      //    This is implicit for LHS operands of the in operator.\n      // b. Let kPresent be the result of calling the HasProperty\n      //    internal method of O with argument Pk.\n      //    This step can be combined with c.\n      // c. If kPresent is true, then\n\n      if (k in O) {\n        // i. Let kValue be the result of calling the Get internal\n        // method of O with argument Pk.\n        kValue = O[k]; // ii. Call the Call internal method of callback with T as\n        // the this value and argument list containing kValue, k, and O.\n\n        callback.call(T, kValue, k, O);\n      } // d. Increase k by 1.\n\n\n      k++;\n    } // 8. return undefined.\n\n  };\n}\n\n//# sourceURL=webpack:///./assets/src/scripts/polyfills/array-foreach.js?");

/***/ }),

/***/ "./assets/src/scripts/polyfills/array-from.js":
/*!****************************************************!*\
  !*** ./assets/src/scripts/polyfills/array-from.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (!Array.from) {\n  Array.from = function () {\n    var toStr = Object.prototype.toString;\n\n    var isCallable = function isCallable(fn) {\n      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';\n    };\n\n    var toInteger = function toInteger(value) {\n      var number = Number(value);\n\n      if (isNaN(number)) {\n        return 0;\n      }\n\n      if (number === 0 || !isFinite(number)) {\n        return number;\n      }\n\n      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));\n    };\n\n    var maxSafeInteger = Math.pow(2, 53) - 1;\n\n    var toLength = function toLength(value) {\n      var len = toInteger(value);\n      return Math.min(Math.max(len, 0), maxSafeInteger);\n    }; // The length property of the from method is 1.\n\n\n    return function from(arrayLike\n    /*, mapFn, thisArg */\n    ) {\n      // 1. Let C be the this value.\n      var C = this; // 2. Let items be ToObject(arrayLike).\n\n      var items = Object(arrayLike); // 3. ReturnIfAbrupt(items).\n\n      if (arrayLike == null) {\n        throw new TypeError(\"Array.from requires an array-like object - not null or undefined\");\n      } // 4. If mapfn is undefined, then let mapping be false.\n\n\n      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;\n      var T;\n\n      if (typeof mapFn !== 'undefined') {\n        // 5. else\n        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.\n        if (!isCallable(mapFn)) {\n          throw new TypeError('Array.from: when provided, the second argument must be a function');\n        } // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.\n\n\n        if (arguments.length > 2) {\n          T = arguments[2];\n        }\n      } // 10. Let lenValue be Get(items, \"length\").\n      // 11. Let len be ToLength(lenValue).\n\n\n      var len = toLength(items.length); // 13. If IsConstructor(C) is true, then\n      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.\n      // 14. a. Else, Let A be ArrayCreate(len).\n\n      var A = isCallable(C) ? Object(new C(len)) : new Array(len); // 16. Let k be 0.\n\n      var k = 0; // 17. Repeat, while k < len… (also steps a - h)\n\n      var kValue;\n\n      while (k < len) {\n        kValue = items[k];\n\n        if (mapFn) {\n          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);\n        } else {\n          A[k] = kValue;\n        }\n\n        k += 1;\n      } // 18. Let putStatus be Put(A, \"length\", len, true).\n\n\n      A.length = len; // 20. Return A.\n\n      return A;\n    };\n  }();\n}\n\n//# sourceURL=webpack:///./assets/src/scripts/polyfills/array-from.js?");

/***/ }),

/***/ "./assets/src/scripts/polyfills/element-classlist.js":
/*!***********************************************************!*\
  !*** ./assets/src/scripts/polyfills/element-classlist.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Source: https://gist.github.com/k-gun/c2ea7c49edf7b757fe9561ba37cb19ca\n;\n\n(function () {\n  // helpers\n  var regExp = function regExp(name) {\n    return new RegExp('(^| )' + name + '( |$)');\n  };\n\n  var forEach = function forEach(list, fn, scope) {\n    for (var i = 0; i < list.length; i++) {\n      fn.call(scope, list[i]);\n    }\n  }; // class list object with basic methods\n\n\n  function ClassList(element) {\n    this.element = element;\n  }\n\n  ClassList.prototype = {\n    add: function add() {\n      forEach(arguments, function (name) {\n        if (!this.contains(name)) {\n          this.element.className += this.element.className.length > 0 ? ' ' + name : name;\n        }\n      }, this);\n    },\n    remove: function remove() {\n      forEach(arguments, function (name) {\n        this.element.className = this.element.className.replace(regExp(name), '');\n      }, this);\n    },\n    toggle: function toggle(name) {\n      return this.contains(name) ? (this.remove(name), false) : (this.add(name), true);\n    },\n    contains: function contains(name) {\n      return regExp(name).test(this.element.className);\n    },\n    // bonus..\n    replace: function replace(oldName, newName) {\n      this.remove(oldName), this.add(newName);\n    }\n  }; // IE8/9, Safari\n\n  if (!('classList' in Element.prototype)) {\n    Object.defineProperty(Element.prototype, 'classList', {\n      get: function get() {\n        return new ClassList(this);\n      }\n    });\n  } // replace() support for others\n\n\n  if (window.DOMTokenList && DOMTokenList.prototype.replace == null) {\n    DOMTokenList.prototype.replace = ClassList.prototype.replace;\n  }\n})();\n\n//# sourceURL=webpack:///./assets/src/scripts/polyfills/element-classlist.js?");

/***/ }),

/***/ "./assets/src/scripts/polyfills/index.js":
/*!***********************************************!*\
  !*** ./assets/src/scripts/polyfills/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array-find */ \"./assets/src/scripts/polyfills/array-find.js\");\n/* harmony import */ var _array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_array_find__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _array_findindex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array-findindex */ \"./assets/src/scripts/polyfills/array-findindex.js\");\n/* harmony import */ var _array_findindex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_array_findindex__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _array_foreach__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array-foreach */ \"./assets/src/scripts/polyfills/array-foreach.js\");\n/* harmony import */ var _array_foreach__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_array_foreach__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array-from */ \"./assets/src/scripts/polyfills/array-from.js\");\n/* harmony import */ var _array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_array_from__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _element_classlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./element-classlist */ \"./assets/src/scripts/polyfills/element-classlist.js\");\n/* harmony import */ var _element_classlist__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_element_classlist__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _object_assign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./object-assign */ \"./assets/src/scripts/polyfills/object-assign.js\");\n/* harmony import */ var _object_assign__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_object_assign__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _string_includes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./string-includes */ \"./assets/src/scripts/polyfills/string-includes.js\");\n/* harmony import */ var _string_includes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_string_includes__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _window_customevent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./window-customevent */ \"./assets/src/scripts/polyfills/window-customevent.js\");\n/* harmony import */ var _window_customevent__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_window_customevent__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _window_requestanimationframe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./window-requestanimationframe */ \"./assets/src/scripts/polyfills/window-requestanimationframe.js\");\n/* harmony import */ var _window_requestanimationframe__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_window_requestanimationframe__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./assets/src/scripts/polyfills/index.js?");

/***/ }),

/***/ "./assets/src/scripts/polyfills/object-assign.js":
/*!*******************************************************!*\
  !*** ./assets/src/scripts/polyfills/object-assign.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (typeof Object.assign != 'function') {\n  // Must be writable: true, enumerable: false, configurable: true\n  Object.defineProperty(Object, \"assign\", {\n    value: function assign(target, varArgs) {\n      // .length of function is 2\n      'use strict';\n\n      if (target == null) {\n        // TypeError if undefined or null\n        throw new TypeError('Cannot convert undefined or null to object');\n      }\n\n      var to = Object(target);\n\n      for (var index = 1; index < arguments.length; index++) {\n        var nextSource = arguments[index];\n\n        if (nextSource != null) {\n          // Skip over if undefined or null\n          for (var nextKey in nextSource) {\n            // Avoid bugs when hasOwnProperty is shadowed\n            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {\n              to[nextKey] = nextSource[nextKey];\n            }\n          }\n        }\n      }\n\n      return to;\n    },\n    writable: true,\n    configurable: true\n  });\n}\n\n//# sourceURL=webpack:///./assets/src/scripts/polyfills/object-assign.js?");

/***/ }),

/***/ "./assets/src/scripts/polyfills/string-includes.js":
/*!*********************************************************!*\
  !*** ./assets/src/scripts/polyfills/string-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (!String.prototype.includes) {\n  String.prototype.includes = function (search, start) {\n    'use strict';\n\n    if (typeof start !== 'number') {\n      start = 0;\n    }\n\n    if (start + search.length > this.length) {\n      return false;\n    } else {\n      return this.indexOf(search, start) !== -1;\n    }\n  };\n}\n\n//# sourceURL=webpack:///./assets/src/scripts/polyfills/string-includes.js?");

/***/ }),

/***/ "./assets/src/scripts/polyfills/window-customevent.js":
/*!************************************************************!*\
  !*** ./assets/src/scripts/polyfills/window-customevent.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * CustomEvent() polyfill\n * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill\n */\n(function () {\n  if (typeof window.CustomEvent === \"function\") return false;\n\n  function CustomEvent(event, params) {\n    params = params || {\n      bubbles: false,\n      cancelable: false,\n      detail: undefined\n    };\n    var evt = document.createEvent('CustomEvent');\n    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);\n    return evt;\n  }\n\n  CustomEvent.prototype = window.Event.prototype;\n  window.CustomEvent = CustomEvent;\n})();\n\n//# sourceURL=webpack:///./assets/src/scripts/polyfills/window-customevent.js?");

/***/ }),

/***/ "./assets/src/scripts/polyfills/window-requestanimationframe.js":
/*!**********************************************************************!*\
  !*** ./assets/src/scripts/polyfills/window-requestanimationframe.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// http://paulirish.com/2011/requestanimationframe-for-smart-animating/\n// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating\n// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel\n// MIT license\n(function () {\n  var lastTime = 0;\n  var vendors = ['ms', 'moz', 'webkit', 'o'];\n\n  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {\n    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];\n    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];\n  }\n\n  if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {\n    var currTime = new Date().getTime();\n    var timeToCall = Math.max(0, 16 - (currTime - lastTime));\n    var id = window.setTimeout(function () {\n      callback(currTime + timeToCall);\n    }, timeToCall);\n    lastTime = currTime + timeToCall;\n    return id;\n  };\n  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {\n    clearTimeout(id);\n  };\n})();\n\n//# sourceURL=webpack:///./assets/src/scripts/polyfills/window-requestanimationframe.js?");

/***/ }),

/***/ "./assets/src/scripts/utilities/components.js":
/*!****************************************************!*\
  !*** ./assets/src/scripts/utilities/components.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Intro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Intro */ \"./assets/src/scripts/components/Intro.js\");\n\nvar components = [{\n  Component: _components_Intro__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  elsSelector: '.intro'\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (components);\n\n//# sourceURL=webpack:///./assets/src/scripts/utilities/components.js?");

/***/ }),

/***/ "./assets/src/styles/index.scss":
/*!**************************************!*\
  !*** ./assets/src/styles/index.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./assets/src/styles/index.scss?");

/***/ })

/******/ });