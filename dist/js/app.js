/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ \"./src/scss/app.scss\");\n/* harmony import */ var _classes_dog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/dog */ \"./src/js/classes/dog.js\");\n\n\n/* Your JS Code goes here *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NpY2Vrc2VwZXRpLWh3Mi1vZ3VuYWthci8uL3NyYy9qcy9hcHAuanM/OTBlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3Njc3MvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJy4vY2xhc3Nlcy9kb2cnO1xyXG5cclxuLyogWW91ciBKUyBDb2RlIGdvZXMgaGVyZSAqL1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ }),

/***/ "./src/js/classes/animal.js":
/*!**********************************!*\
  !*** ./src/js/classes/animal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Animal = function Animal(name, image, numberOfLegs) {\n  _classCallCheck(this, Animal);\n\n  this.name = name;\n  this.image = image;\n  this.numberOfLegs = numberOfLegs;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Animal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY2xhc3Nlcy9hbmltYWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU1BLFNBQ0osZ0JBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxZQUF6QixFQUF1QztBQUFBOztBQUNyQyxPQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxPQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNEOztBQUdILGlFQUFlSCxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2ljZWtzZXBldGktaHcyLW9ndW5ha2FyLy4vc3JjL2pzL2NsYXNzZXMvYW5pbWFsLmpzPzFmZmIiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQW5pbWFsIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBpbWFnZSwgbnVtYmVyT2ZMZWdzKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgdGhpcy5udW1iZXJPZkxlZ3MgPSBudW1iZXJPZkxlZ3M7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbmltYWw7XHJcbiJdLCJuYW1lcyI6WyJBbmltYWwiLCJuYW1lIiwiaW1hZ2UiLCJudW1iZXJPZkxlZ3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/classes/animal.js\n");

/***/ }),

/***/ "./src/js/classes/dog.js":
/*!*******************************!*\
  !*** ./src/js/classes/dog.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dogArr\": () => (/* binding */ dogArr)\n/* harmony export */ });\n/* harmony import */ var _animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animal */ \"./src/js/classes/animal.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n // eslint-disable-next-line no-unused-vars\n\nvar Dog = /*#__PURE__*/function (_Animal) {\n  _inherits(Dog, _Animal);\n\n  var _super = _createSuper(Dog);\n\n  function Dog(name, image, numberOfLegs, age) {\n    var _this;\n\n    _classCallCheck(this, Dog);\n\n    _this = _super.call(this, name, image, numberOfLegs);\n    _this.age = age;\n    return _this;\n  }\n\n  return Dog;\n}(_animal__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); // eslint-disable-next-line import/prefer-default-export\n\n\nvar dogArr = [];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY2xhc3Nlcy9kb2cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7SUFDTUM7Ozs7O0FBQ0osZUFBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLFlBQXpCLEVBQXVDQyxHQUF2QyxFQUE0QztBQUFBOztBQUFBOztBQUMxQyw4QkFBTUgsSUFBTixFQUFZQyxLQUFaLEVBQW1CQyxZQUFuQjtBQUNBLFVBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUYwQztBQUczQzs7O0VBSmVMLGtEQU9sQjs7O0FBQ08sSUFBTU0sTUFBTSxHQUFHLEVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaWNla3NlcGV0aS1odzItb2d1bmFrYXIvLi9zcmMvanMvY2xhc3Nlcy9kb2cuanM/MGNjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQW5pbWFsIGZyb20gJy4vYW5pbWFsJztcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG5jbGFzcyBEb2cgZXh0ZW5kcyBBbmltYWwge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGltYWdlLCBudW1iZXJPZkxlZ3MsIGFnZSkge1xyXG4gICAgc3VwZXIobmFtZSwgaW1hZ2UsIG51bWJlck9mTGVncyk7XHJcbiAgICB0aGlzLmFnZSA9IGFnZTtcclxuICB9XHJcbn1cclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XHJcbmV4cG9ydCBjb25zdCBkb2dBcnIgPSBbXTtcclxuIl0sIm5hbWVzIjpbIkFuaW1hbCIsIkRvZyIsIm5hbWUiLCJpbWFnZSIsIm51bWJlck9mTGVncyIsImFnZSIsImRvZ0FyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/classes/dog.js\n");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9hcHAuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaWNla3NlcGV0aS1odzItb2d1bmFrYXIvLi9zcmMvc2Nzcy9hcHAuc2Nzcz82MjllIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/app.scss\n");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;