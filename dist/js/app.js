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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ \"./src/scss/app.scss\");\n/* harmony import */ var _classes_duck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/duck */ \"./src/js/classes/duck.js\");\n/* harmony import */ var _classes_dog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/dog */ \"./src/js/classes/dog.js\");\n/* eslint-disable quotes */\n\n\n\nvar animalArr = []; // create dog instances\n\nanimalArr.push(new _classes_dog__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Big Boy\", \"../images/content/dog1.jpg\", 4, 2));\nanimalArr.push(new _classes_dog__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Ketchup\", \"../images/content/dog2.jpg\", 4, 4));\nanimalArr.push(new _classes_dog__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Mayo\", \"../images/content/dog3.jpg\", 4, 6));\nanimalArr.push(new _classes_dog__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Olive\", \"../images/content/dog4.jpg\", 4, 1));\nanimalArr.push(new _classes_dog__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Darky\", \"../images/content/dog5.jpg\", 4, 3));\nanimalArr.push(new _classes_dog__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Snoopy\", \"../images/content/dog6.jpg\", 4, 3)); // create duck instances\n\nanimalArr.push(new _classes_duck__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Smelly\", \"../images/content/d1.jpg\", 2, 2));\nanimalArr.push(new _classes_duck__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Bigmouth\", \"../images/content/d2.jpg\", 2, 4));\nanimalArr.push(new _classes_duck__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Dipsy\", \"../images/content/d3.jpg\", 2, 6));\nanimalArr.push(new _classes_duck__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Flippy\", \"../images/content/d4.jpg\", 2, 1));\nanimalArr.push(new _classes_duck__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Pepper\", \"../images/content/d5.jpg\", 2, 3));\nanimalArr.push(new _classes_duck__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Slim\", \"../images/content/d6.jpg\", 2, 3));\nanimalArr.push(new _classes_duck__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Jibby\", \"../images/content/d7.jpg\", 2, 3));\nanimalArr.push(new _classes_duck__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Snuggles\", \"../images/content/d8.jpg\", 2, 3));\nvar cardContainer = document.querySelector(\".card-container\"); // create cards\n\nanimalArr.forEach(function (animal) {\n  var card = document.createElement(\"div\");\n  card.innerHTML += \"\\n    <div class=\\\"card\\\">\\n        <div class=\\\"card-image\\\">\\n            <img src=\".concat(animal.image, \" alt=\\\"animal-image\\\"/>\\n        </div>\\n        <div class=\\\"card-text\\\">\\n            <div class=\\\"card-text-name\\\">\\n                <p>Hi I'm \").concat(animal.name, \"</p>\\n            </div>\\n            <div class=\\\"card-text-nums\\\">\\n                <p>I'm \").concat(animal.age, \" years old</p>\\n                <p>I have \").concat(animal.numberOfLegs, \" legs</p>\\n            </div>\\n        </div>\\n    </div>\\n    \");\n  cardContainer.appendChild(card);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZTkiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcXVvdGVzICovXHJcbmltcG9ydCBcIi4uL3Njc3MvYXBwLnNjc3NcIjtcclxuaW1wb3J0IER1Y2sgZnJvbSBcIi4vY2xhc3Nlcy9kdWNrXCI7XHJcbmltcG9ydCBEb2cgZnJvbSBcIi4vY2xhc3Nlcy9kb2dcIjtcclxuXHJcbmNvbnN0IGFuaW1hbEFyciA9IFtdO1xyXG5cclxuLy8gY3JlYXRlIGRvZyBpbnN0YW5jZXNcclxuYW5pbWFsQXJyLnB1c2gobmV3IERvZyhcIkJpZyBCb3lcIiwgXCIuLi9pbWFnZXMvY29udGVudC9kb2cxLmpwZ1wiLCA0LCAyKSk7XHJcbmFuaW1hbEFyci5wdXNoKG5ldyBEb2coXCJLZXRjaHVwXCIsIFwiLi4vaW1hZ2VzL2NvbnRlbnQvZG9nMi5qcGdcIiwgNCwgNCkpO1xyXG5hbmltYWxBcnIucHVzaChuZXcgRG9nKFwiTWF5b1wiLCBcIi4uL2ltYWdlcy9jb250ZW50L2RvZzMuanBnXCIsIDQsIDYpKTtcclxuYW5pbWFsQXJyLnB1c2gobmV3IERvZyhcIk9saXZlXCIsIFwiLi4vaW1hZ2VzL2NvbnRlbnQvZG9nNC5qcGdcIiwgNCwgMSkpO1xyXG5hbmltYWxBcnIucHVzaChuZXcgRG9nKFwiRGFya3lcIiwgXCIuLi9pbWFnZXMvY29udGVudC9kb2c1LmpwZ1wiLCA0LCAzKSk7XHJcbmFuaW1hbEFyci5wdXNoKG5ldyBEb2coXCJTbm9vcHlcIiwgXCIuLi9pbWFnZXMvY29udGVudC9kb2c2LmpwZ1wiLCA0LCAzKSk7XHJcblxyXG4vLyBjcmVhdGUgZHVjayBpbnN0YW5jZXNcclxuYW5pbWFsQXJyLnB1c2gobmV3IER1Y2soXCJTbWVsbHlcIiwgXCIuLi9pbWFnZXMvY29udGVudC9kMS5qcGdcIiwgMiwgMikpO1xyXG5hbmltYWxBcnIucHVzaChuZXcgRHVjayhcIkJpZ21vdXRoXCIsIFwiLi4vaW1hZ2VzL2NvbnRlbnQvZDIuanBnXCIsIDIsIDQpKTtcclxuYW5pbWFsQXJyLnB1c2gobmV3IER1Y2soXCJEaXBzeVwiLCBcIi4uL2ltYWdlcy9jb250ZW50L2QzLmpwZ1wiLCAyLCA2KSk7XHJcbmFuaW1hbEFyci5wdXNoKG5ldyBEdWNrKFwiRmxpcHB5XCIsIFwiLi4vaW1hZ2VzL2NvbnRlbnQvZDQuanBnXCIsIDIsIDEpKTtcclxuYW5pbWFsQXJyLnB1c2gobmV3IER1Y2soXCJQZXBwZXJcIiwgXCIuLi9pbWFnZXMvY29udGVudC9kNS5qcGdcIiwgMiwgMykpO1xyXG5hbmltYWxBcnIucHVzaChuZXcgRHVjayhcIlNsaW1cIiwgXCIuLi9pbWFnZXMvY29udGVudC9kNi5qcGdcIiwgMiwgMykpO1xyXG5hbmltYWxBcnIucHVzaChuZXcgRHVjayhcIkppYmJ5XCIsIFwiLi4vaW1hZ2VzL2NvbnRlbnQvZDcuanBnXCIsIDIsIDMpKTtcclxuYW5pbWFsQXJyLnB1c2gobmV3IER1Y2soXCJTbnVnZ2xlc1wiLCBcIi4uL2ltYWdlcy9jb250ZW50L2Q4LmpwZ1wiLCAyLCAzKSk7XHJcblxyXG5jb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkLWNvbnRhaW5lclwiKTtcclxuXHJcbi8vIGNyZWF0ZSBjYXJkc1xyXG5hbmltYWxBcnIuZm9yRWFjaCgoYW5pbWFsKSA9PiB7XHJcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2FyZC5pbm5lckhUTUwgKz0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1pbWFnZVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz0ke2FuaW1hbC5pbWFnZX0gYWx0PVwiYW5pbWFsLWltYWdlXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRleHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGV4dC1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5IaSBJJ20gJHthbmltYWwubmFtZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10ZXh0LW51bXNcIj5cclxuICAgICAgICAgICAgICAgIDxwPkknbSAke2FuaW1hbC5hZ2V9IHllYXJzIG9sZDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPkkgaGF2ZSAke2FuaW1hbC5udW1iZXJPZkxlZ3N9IGxlZ3M8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiRHVjayIsIkRvZyIsImFuaW1hbEFyciIsInB1c2giLCJjYXJkQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZm9yRWFjaCIsImFuaW1hbCIsImNhcmQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiaW1hZ2UiLCJuYW1lIiwiYWdlIiwibnVtYmVyT2ZMZWdzIiwiYXBwZW5kQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animal */ \"./src/js/classes/animal.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n // eslint-disable-next-line no-unused-vars\n\nvar Dog = /*#__PURE__*/function (_Animal) {\n  _inherits(Dog, _Animal);\n\n  var _super = _createSuper(Dog);\n\n  function Dog(name, image, numberOfLegs, age) {\n    var _this;\n\n    _classCallCheck(this, Dog);\n\n    _this = _super.call(this, name, image, numberOfLegs);\n    _this.age = age;\n    return _this;\n  }\n\n  return Dog;\n}(_animal__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dog);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY2xhc3Nlcy9kb2cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7SUFDTUM7Ozs7O0FBQ0osZUFBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLFlBQXpCLEVBQXVDQyxHQUF2QyxFQUE0QztBQUFBOztBQUFBOztBQUMxQyw4QkFBTUgsSUFBTixFQUFZQyxLQUFaLEVBQW1CQyxZQUFuQjtBQUNBLFVBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUYwQztBQUczQzs7O0VBSmVMOztBQU9sQixpRUFBZUMsR0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2NpY2Vrc2VwZXRpLWh3Mi1vZ3VuYWthci8uL3NyYy9qcy9jbGFzc2VzL2RvZy5qcz8wY2MzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltYWwgZnJvbSAnLi9hbmltYWwnO1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbmNsYXNzIERvZyBleHRlbmRzIEFuaW1hbCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgaW1hZ2UsIG51bWJlck9mTGVncywgYWdlKSB7XHJcbiAgICBzdXBlcihuYW1lLCBpbWFnZSwgbnVtYmVyT2ZMZWdzKTtcclxuICAgIHRoaXMuYWdlID0gYWdlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG9nO1xyXG4iXSwibmFtZXMiOlsiQW5pbWFsIiwiRG9nIiwibmFtZSIsImltYWdlIiwibnVtYmVyT2ZMZWdzIiwiYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/classes/dog.js\n");

/***/ }),

/***/ "./src/js/classes/duck.js":
/*!********************************!*\
  !*** ./src/js/classes/duck.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animal */ \"./src/js/classes/animal.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n // eslint-disable-next-line no-unused-vars\n\nvar Duck = /*#__PURE__*/function (_Animal) {\n  _inherits(Duck, _Animal);\n\n  var _super = _createSuper(Duck);\n\n  function Duck(name, image, numberOfLegs, age) {\n    var _this;\n\n    _classCallCheck(this, Duck);\n\n    _this = _super.call(this, name, image, numberOfLegs);\n    _this.age = age;\n    return _this;\n  }\n\n  return Duck;\n}(_animal__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Duck);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY2xhc3Nlcy9kdWNrLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0lBQ01DOzs7OztBQUNKLGdCQUFZQyxJQUFaLEVBQWtCQyxLQUFsQixFQUF5QkMsWUFBekIsRUFBdUNDLEdBQXZDLEVBQTRDO0FBQUE7O0FBQUE7O0FBQzFDLDhCQUFNSCxJQUFOLEVBQVlDLEtBQVosRUFBbUJDLFlBQW5CO0FBQ0EsVUFBS0MsR0FBTCxHQUFXQSxHQUFYO0FBRjBDO0FBRzNDOzs7RUFKZ0JMOztBQU9uQixpRUFBZUMsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2NpY2Vrc2VwZXRpLWh3Mi1vZ3VuYWthci8uL3NyYy9qcy9jbGFzc2VzL2R1Y2suanM/OWJlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQW5pbWFsIGZyb20gJy4vYW5pbWFsJztcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG5jbGFzcyBEdWNrIGV4dGVuZHMgQW5pbWFsIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBpbWFnZSwgbnVtYmVyT2ZMZWdzLCBhZ2UpIHtcclxuICAgIHN1cGVyKG5hbWUsIGltYWdlLCBudW1iZXJPZkxlZ3MpO1xyXG4gICAgdGhpcy5hZ2UgPSBhZ2U7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEdWNrO1xyXG4iXSwibmFtZXMiOlsiQW5pbWFsIiwiRHVjayIsIm5hbWUiLCJpbWFnZSIsIm51bWJlck9mTGVncyIsImFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/classes/duck.js\n");

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