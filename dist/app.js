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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/scss/style.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/scss/style.scss ***!
  \*****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@use \\\"variables\\\" as *;\\n@use \\\"root\\\" as *;\\n@use \\\"fonts\\\" as *;\\n@use \\\"grid\\\" as *;\\n@use \\\"media-queries\\\" as *;\\nbody {\\n  background-color: var(--background-color);\\n  color: var(--text-color);\\n  transition: background var(--transition-duration) ease-in-out;\\n  font-family: \\\"Quicksand Medium\\\", sans-serif;\\n  z-index: 0 !important;\\n  scroll-behavior: smooth;\\n  scrollbar-color: var(--text-color) var(--secondary-color);\\n  margin: 0;\\n  padding: 0; }\\n  body::-webkit-scrollbar {\\n    width: 0.75rem;\\n    height: 0.75rem; }\\n  body::-webkit-scrollbar-thumb {\\n    background: var(--text-color);\\n    border-radius: 0.75rem;\\n    box-shadow: 1rem solid black; }\\n  body::-webkit-scrollbar-track {\\n    background: var(--secondary-color); }\\n\\na {\\n  color: var(--link-color); }\\n\\nbutton {\\n  background: transparent;\\n  border: none !important;\\n  font-size: 0; }\\n\\nnav {\\n  position: fixed;\\n  left: 0;\\n  width: 100%;\\n  border-radius: 0.3rem;\\n  background-color: white;\\n  height: 4rem;\\n  top: 0;\\n  background-color: rgba(255, 255, 255, 0.116);\\n  z-index: 3 !important; }\\n  nav a {\\n    text-decoration: none;\\n    color: var(--text-color); }\\n  nav ul {\\n    gap: 2.5rem; }\\n\\n.link_hover {\\n  box-shadow: inset 0 0 0 0 var(--text-color);\\n  margin: 0 -0.25rem;\\n  height: 2rem;\\n  padding: 0 0.25rem;\\n  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out; }\\n\\n.link_hover:hover {\\n  box-shadow: inset 10rem 0 0 0 var(--text-color);\\n  color: var(--background-color); }\\n\\nhtml[data-theme=\\\"light\\\"] {\\n  --background-color: #fff;\\n  --secondary-color: rgb(255, 255, 255);\\n  --text-color: #121416d8;\\n  --link-color: #2f1f86; }\\n\\nhtml[data-theme=\\\"dark\\\"] {\\n  --background-color: #212a2e;\\n  --secondary-color: rgb(37, 37, 46);\\n  --text-color: #f7f8f8;\\n  --link-color: #828fff; }\\n\\n.__icon {\\n  height: 2.5rem;\\n  width: 2.5rem; }\\n\\n.submit-btn {\\n  text-align: center;\\n  background: var(--text-color);\\n  border: none;\\n  color: var(--background-color);\\n  padding: 12px 30px;\\n  cursor: pointer;\\n  font-size: 20px; }\\n\\n.intro {\\n  justify-content: center;\\n  background-color: var(--secondary-color); }\\n  .intro__image {\\n    align-items: center;\\n    object-fit: contain;\\n    max-height: 25rem;\\n    border-radius: 99px; }\\n    @media (max-width: 533px) {\\n      .intro__image {\\n        height: 70%;\\n        border-radius: 20rem; } }\\n\\n.modal_message {\\n  border: 2px solid transparent;\\n  display: none;\\n  padding: 1rem; }\\n\\n.bounce {\\n  outline: 0;\\n  border-color: red;\\n  animation-name: bounce;\\n  animation-duration: 0.5s;\\n  animation-delay: 0.25s; }\\n\\n@keyframes bounce {\\n  0% {\\n    transform: translateX(0px);\\n    timing-function: ease-in; }\\n  37% {\\n    transform: translateX(5px);\\n    timing-function: ease-out; }\\n  55% {\\n    transform: translateX(-5px);\\n    timing-function: ease-in; }\\n  73% {\\n    transform: translateX(4px);\\n    timing-function: ease-out; }\\n  82% {\\n    transform: translateX(-4px);\\n    timing-function: ease-in; }\\n  91% {\\n    transform: translateX(2px);\\n    timing-function: ease-out; }\\n  96% {\\n    transform: translateX(-2px);\\n    timing-function: ease-in; }\\n  100% {\\n    transform: translateX(0px);\\n    timing-function: ease-in; } }\\n\\n.modal_message--succes {\\n  display: block;\\n  transform: 1s display;\\n  border-color: var(--succes-color); }\\n\\n.modal_message--danger {\\n  display: block;\\n  border-color: var(--danger-color); }\\n\\n.skills {\\n  display: row; }\\n\\n.reference-links {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  align-items: center; }\\n  @media (max-width: 533px) {\\n    .reference-links {\\n      display: flex;\\n      flex-direction: column;\\n      gap: 4rem;\\n      justify-content: space-between; } }\\n  @media (max-width: 702px) {\\n    .reference-links {\\n      margin: 2rem; } }\\n\\n.skills-align {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center; }\\n\\n.story_text {\\n  padding: 1rem;\\n  margin-top: 5rem; }\\n\\n.portfolio {\\n  text-align: center; }\\n  .portfolio__inner {\\n    display: flex;\\n    justify-content: center;\\n    gap: 2rem; }\\n  .portfolio img {\\n    height: 4rem;\\n    margin-bottom: 2rem; }\\n  .portfolio--card {\\n    padding: 1.5rem;\\n    border-radius: 16px;\\n    background: rgba(119, 102, 102, 0.116);\\n    color: var(--text-color);\\n    display: flex;\\n    flex-direction: column;\\n    transition: 0.2s;\\n    margin: 0;\\n    width: 10rem;\\n    height: 10rem;\\n    margin-bottom: 4rem; }\\n    .portfolio--card p {\\n      text-decoration: none;\\n      text-align: center;\\n      display: contents; }\\n  .portfolio--card:hover {\\n    margin-top: -1rem; }\\n  .portfolio--link {\\n    text-decoration: none;\\n    color: black;\\n    text-decoration-line: none; }\\n  .portfolio--link:hover {\\n    text-decoration: underline; }\\n  @media (max-width: 533px) {\\n    .portfolio {\\n      width: 100%; }\\n      .portfolio--card {\\n        flex: 0 0 100%;\\n        margin: 2rem; }\\n      .portfolio__inner {\\n        align-items: center; } }\\n\\nh1,\\nh2 {\\n  text-align: center; }\\n\\nli {\\n  display: flex;\\n  list-style: none; }\\n\\n.icon {\\n  height: 5rem;\\n  width: 5rem; }\\n\\np,\\nli {\\n  font-size: 2.9vmin;\\n  text-size-adjust: auto; }\\n\\n.align-image {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center; }\\n\\n.icon {\\n  padding: 2rem; }\\n\\n.dwnldbtn {\\n  text-align: center;\\n  background: var(--text-color);\\n  border: none;\\n  color: var(--background-color);\\n  padding: 12px 30px;\\n  cursor: pointer;\\n  font-size: 20px; }\\n\\n.dwnldbtn:hover {\\n  background: var(--background-color);\\n  color: var(--text-color);\\n  transition: background 0.2s ease-in; }\\n\\ntextarea::placeholder {\\n  margin-left: 2rem; }\\n  textarea::placeholder ::-webkit-input-placeholder {\\n    /* WebKit browsers */\\n    margin-left: 2rem; }\\n  textarea::placeholder :-moz-placeholder {\\n    /* Mozilla Firefox 4 to 18 */\\n    margin-left: 2rem; }\\n  textarea::placeholder ::-moz-placeholder {\\n    /* Mozilla Firefox 19+ */\\n    margin-left: 2rem; }\\n  textarea::placeholder :-ms-input-placeholder {\\n    /* Internet Explorer 10+ */ }\\n\\n#modal {\\n  background: var(--background-color);\\n  position: absolute;\\n  left: 25%;\\n  top: 10%;\\n  transform: translate(-50%, -50%);\\n  width: 50%;\\n  text-align: center;\\n  transform: scale(1.5);\\n  /* prefix me */\\n  opacity: 0;\\n  pointer-events: none;\\n  align-items: center;\\n  color: var(--text-color);\\n  display: flex;\\n  flex-direction: column;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 2rem; }\\n  #modal_form {\\n    display: flex;\\n    flex-direction: column;\\n    width: 80%;\\n    gap: 1rem;\\n    padding: 2rem; }\\n  #modal_message {\\n    height: 200px;\\n    font-size: 2vh;\\n    margin-bottom: 3rem; }\\n  #modal input {\\n    font-size: 2vh;\\n    background-image: linear-gradient(grey);\\n    padding: 1rem;\\n    margin-bottom: 1rem; }\\n  #modal input:focus {\\n    border-color: var(--text-color);\\n    box-shadow: 5px 3px 5px var(--text-color);\\n    transition: box-shadow 0.4s ease-in; }\\n\\ntextarea:hover {\\n  border-color: var(--text-color);\\n  box-shadow: 5px 3px 5px var(--text-color);\\n  transition: box-shadow 0.4s ease-in; }\\n\\ntextarea:focus {\\n  border-color: var(--text-color);\\n  box-shadow: 5px 3px 5px var(--text-color);\\n  transition: box-shadow 0.4s ease-in; }\\n\\n.submit-btn {\\n  text-align: center;\\n  background: var(--text-color);\\n  border: none;\\n  color: var(--background-color);\\n  padding: 12px 30px;\\n  cursor: pointer;\\n  font-size: 20px; }\\n\\n.submit-btn:hover {\\n  background: var(--background-color);\\n  color: var(--text-color);\\n  transition: background 0.2s ease-in; }\\n\\ntextarea::placeholder {\\n  padding-left: 1rem; }\\n\\ntextarea {\\n  padding: 1rem; }\\n\\n.dialogIsOpen #page-wrap {\\n  -webkit-filter: blur(5px) grayscale(50%);\\n  -webkit-transform: scale(0.9); }\\n\\n.dialogIsOpen #modal {\\n  transform: scale(1);\\n  /* prefix me */\\n  opacity: 1;\\n  pointer-events: auto; }\\n\\n#page-wrap,\\n#modal {\\n  transition: all 0.4s ease;\\n  /* prefix me */ }\\n\\n#contact :hover {\\n  cursor: pointer; }\\n\\n.contact-button {\\n  cursor: pointer; }\\n\\n.close_button {\\n  cursor: pointer;\\n  color: var(--text-color); }\\n\\n.red {\\n  color: red; }\\n\\n.li-dark-mode {\\n  display: inline;\\n  bottom: 1.5rem;\\n  right: 1.5rem;\\n  position: relative; }\\n\\n.body.modal-open {\\n  overflow: hidden;\\n  position: fixed; }\\n\\n[data-animation-type=\\\"show\\\"].is-ready {\\n  opacity: 0; }\\n\\n.p-io-animation__show {\\n  animation: show 0.5s;\\n  animation-delay: 0.25s;\\n  animation-fill-mode: both; }\\n\\n@keyframes show {\\n  0% {\\n    opacity: 0;\\n    transform: scale(0.3); }\\n  75% {\\n    transform: scale(1.1); }\\n  100% {\\n    opacity: 1;\\n    transform: scale(1); } }\\n\\n/* Add Animation */\\n@-webkit-keyframes animatetop {\\n  from {\\n    top: -300px;\\n    opacity: 0; }\\n  to {\\n    top: 0;\\n    opacity: 1; } }\\n\\n@keyframes animatetop {\\n  from {\\n    top: -300px;\\n    opacity: 0; }\\n  to {\\n    top: 0;\\n    opacity: 1; } }\\n\\n.h-100 {\\n  height: 100%; }\\n\\n.bg-color {\\n  background-color: var(--background-color); }\\n\\n.toggle-button-label {\\n  width: 4rem;\\n  height: 2rem;\\n  position: relative;\\n  display: block;\\n  background: #ebebeb;\\n  border-radius: 2rem;\\n  top: -0.4rem;\\n  box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4), inset 0px -5px 15px rgba(255, 255, 255, 0.4);\\n  cursor: pointer; }\\n\\ninput {\\n  font-family: \\\"Quicksand Medium\\\", sans-serif;\\n  font-size: 1.5vh; }\\n\\n.toggle-button-label:after {\\n  content: \\\"\\\";\\n  width: 1.8rem;\\n  height: 1.8rem;\\n  position: absolute;\\n  top: 0.1rem;\\n  left: 0.2rem;\\n  background: linear-gradient(180deg, #ffcc89, #d8860b);\\n  border-radius: 180px;\\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2); }\\n\\n.hide-input {\\n  width: 0;\\n  height: 0;\\n  visibility: hidden; }\\n\\ninput:checked + label {\\n  background: #242424; }\\n\\ninput:checked + label:after {\\n  left: 4rem;\\n  transform: translateX(-100%);\\n  background: linear-gradient(180deg, #777, #3a3a3a); }\\n\\n.toggle-button-label,\\n.toggle-button-label:after {\\n  transition: 0.3s; }\\n\\n.toggle-button-label:active:after {\\n  width: 2rem; }\\n\\n.toggle-button-label svg {\\n  position: absolute;\\n  width: 120px;\\n  top: 40px;\\n  z-index: 100; }\\n\\n.toggle-button-label svg.sun {\\n  left: 40px;\\n  fill: #fff;\\n  transition: 0.3s; }\\n\\n.toggle-button-label svg.moon {\\n  left: 340px;\\n  fill: #7e7e7e;\\n  transition: 0.3s; }\\n\\ninput:checked + .toggle-button-label svg.sun {\\n  fill: #7e7e7e; }\\n\\ninput:checked + .toggle-button-label svg.moon {\\n  fill: #fff; }\\n\\n.toggle-button-label svg {\\n  position: absolute;\\n  width: 1.5rem;\\n  top: 0;\\n  z-index: 100; }\\n\\n.toggle-button-label svg.sun {\\n  left: 0.35rem;\\n  fill: #fff;\\n  transition: 0.3s; }\\n\\n.toggle-button-label svg.moon {\\n  left: 2.35rem;\\n  fill: #ffff;\\n  transition: 0.3s; }\\n\\ninput:checked + .toggle-button-label svg.sun {\\n  fill: #7e7e7e; }\\n\\ninput:checked + .toggle-button-label svg.moon {\\n  fill: #fff; }\\n\\n.dropdown_mobile {\\n  display: flex;\\n  justify-content: space-between;\\n  width: 100%;\\n  gap: 2rem; }\\n\\n.dropdown-icon {\\n  height: 100%;\\n  height: 2rem;\\n  width: 2rem;\\n  justify-content: center;\\n  cursor: pointer; }\\n\\n.dropdown span {\\n  display: block;\\n  width: 33px;\\n  height: 4px;\\n  margin-bottom: 5px;\\n  position: relative;\\n  background: #cdcdcd;\\n  border-radius: 3px;\\n  z-index: 1; }\\n\\n.dropdown-menu {\\n  position: absolute;\\n  top: calc(100% + 0.25rem);\\n  background-color: var(--background-color);\\n  padding: 0.75rem;\\n  border-radius: 1.25rem;\\n  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);\\n  opacity: 0;\\n  transition: opacity 0.2s ease-in; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://jwt-site-2.0/./src/styles/scss/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://jwt-site-2.0/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://jwt-site-2.0/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/scss/style.scss":
/*!************************************!*\
  !*** ./src/styles/scss/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/scss/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://jwt-site-2.0/./src/styles/scss/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://jwt-site-2.0/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://jwt-site-2.0/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://jwt-site-2.0/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://jwt-site-2.0/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://jwt-site-2.0/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://jwt-site-2.0/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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