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

/***/ "./src/styles/scss/style.scss":
/*!************************************!*\
  !*** ./src/styles/scss/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://jwt-site-2.0/./src/styles/scss/style.scss?");

/***/ }),

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/scss/style.scss */ \"./src/styles/scss/style.scss\");\n\n\n\nlet isDark = false;\nlet isModalVisible = false;\nlet toggleDropDown = false;\nlet storedTheme = localStorage.getItem('theme') || (window.matchMedia(\"(prefers-color-scheme: dark)\").matches ? \"dark\" : \"light\");\n\ndocument.querySelector('.contact-button').addEventListener('click', (event) => {\n    toggleModal(event);\n});\n\ndocument.querySelector('.modal-btn').addEventListener('click', (event) => {\n    toggleModal(event);\n});\n\n\ndocument.querySelector('.dropdown-icon').addEventListener('click', (event) => {\n    toggleDropdownMenu(event);\n});\n\n\n\nif (storedTheme) {\n    document.documentElement.setAttribute('data-theme', storedTheme)\n    if (storedTheme === 'light') {\n        document.getElementById('github-icon').src = './shared/icons/github-mark.svg';\n        document.querySelector('.dropdown-icon').src = './shared/icons/menu.svg';\n    }\n    if (storedTheme === 'dark') {\n        document.getElementById('github-icon').src = './shared/icons/github-mark-white.svg';\n        document.querySelector('.dropdown-icon').src = './shared/icons/menu_light.svg';\n    }\n}\n\nconst darkModeToggle = () => {\n    var currentTheme = document.documentElement.getAttribute(\"data-theme\");\n    var targetTheme = \"light\";\n    document.getElementById('github-icon').src = './shared/icons/github-mark.svg';\n    document.querySelector('.dropdown-icon').src = './shared/icons/menu.svg';\n\n    if (currentTheme === \"light\") {\n        targetTheme = \"dark\";\n        document.getElementById('github-icon').src = './shared/icons/github-mark-white.svg';\n        document.querySelector('.dropdown-icon').src = './shared/icons/menu_light.svg';\n    }\n    document.documentElement.setAttribute('data-theme', targetTheme)\n    localStorage.setItem('theme', targetTheme);\n\n}\n\nfunction addObserver(el, options) {\n    let observer = new IntersectionObserver((entries, observer) => {\n        entries.forEach(entry => {\n            if (entry.isIntersecting) {\n                entry.target.classList.add('p-io-animation__show')\n                observer.unobserve(entry.target)\n            }\n        })\n    }, options) // Passing the options object to the observer\n    observer.observe(el)\n}\n\nfunction scrollTrigger(selector, options = {}) {\n    let element = document.querySelector(selector);\n    addObserver(element, options);\n}\n\n\nconst getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)\n\nlet myAge = getAge('1996-08-29');\n\nconst toggleModal = (event) => {\n    undefined.isModalVisible = !undefined.isModalVisible;\n    if (undefined.isModalVisible) {\n\n        document.body.classList.add(\"dialogIsOpen\")\n\n    }\n    else {\n\n        document.body.classList.remove(\"dialogIsOpen\");\n    }\n\n    event.preventDefault();\n}\n\n\nconst toggleDropdownMenu = (event) => {\n\n    undefined.toggleDropDown = !undefined.toggleDropDown;\n    const dropDownElement = document.querySelector('.dropdown-menu');\n\n    if (undefined.toggleDropDown) {\n\n        dropDownElement.style.opacity = 1;\n    }\n    else\n        dropDownElement.style.opacity = 0;\n\n\n    event.preventDefault();\n\n}\nscrollTrigger('.skills-inner');\n\n//# sourceURL=webpack://jwt-site-2.0/./src/javascript/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/javascript/index.js");
/******/ 	
/******/ })()
;