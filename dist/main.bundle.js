/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpokemon"] = self["webpackChunkpokemon"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! image/pokemon-logo.png */ \"./src/image/pokemon-logo.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Lato:wght@300&family=Ubuntu:ital@1&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ` * {\r\n    list-style: none;\r\n    margin: 0;\r\n    font-size: 24px;\r\n    box-sizing: border-box;\r\n    font-family: Lato, Caveat;\r\n}\r\n\r\n\r\nbody{\r\n    background-color: #C8E9FC;\r\n}\r\n\r\nimg{\r\n    height: 200px;\r\n    width: 200px;\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    height: 10vh;\r\n    background-color: #00A0FF;\r\n    position: sticky;\r\n    top: 0;\r\n    color: #fff;\r\n    box-shadow: 10px 10px 10px #C0C0C0;\r\n}\r\n\r\n.logo-container {\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n    background-size: contain;\r\n    height: 60px;\r\n    width:60px;\r\n    cursor: pointer;\r\n}\r\n\r\nheader ul {\r\n    display: flex;\r\n    gap: 45px;\r\n    cursor: pointer;\r\n}\r\n\r\n.container {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 300px);\r\n  align-items: center;\r\n  justify-content: center;\r\n  grid-gap: 70px;\r\n  margin: 50px;\r\n}\r\n\r\n.card{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 10px;\r\n    padding: 20px 0;\r\n    border-radius: 35px;\r\n    background-image: linear-gradient(to right, #B1EFFC, #6FDED7);\r\n    border: 1px solid #C0C0C0;\r\n    box-shadow: 10px 10px 10px #C0C0C0;\r\n}\r\n\r\n.name-content {\r\n    display: flex;\r\n    gap: 10px;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    border: 1px solid #D4AF37;\r\n    background-color: #fff;\r\n}\r\n\r\n.like-btn {\r\n    cursor: pointer;\r\n    background-color: transparent;\r\n    border: none;\r\n}\r\n\r\ni:hover {\r\n    opacity: 0.3;\r\n}\r\n\r\ni:active  {\r\n   color: red;\r\n}\r\n\r\n\r\n.comment-btn,\r\n.add-comment-btn  {\r\n    cursor: pointer;\r\n    padding: 15px;\r\n    border: none;\r\n    border-radius:25px;\r\n    background-color: #1DC9B4;\r\n    color: #fff;\r\n}\r\n\r\n.comment-btn:hover,\r\n.add-comment-btn:hover  {\r\n    background-color:#C8E9FC;\r\n    color: #000;\r\n}\r\n\r\n.comment-btn:active,\r\n.add-comment-btn:active {\r\n    background-color: #8cc0dd;\r\n}\r\n\r\nfooter {\r\n     display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 10vh;\r\n    background-color: #00A0FF;\r\n    color: #fff;\r\n}\r\n\r\n/* Comment section */\r\n.comment-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 10% 30%;\r\n  gap: 10px;\r\n  padding: 20px;\r\n  width: 40%;\r\n  border: 1px solid #C0C0C0;\r\n  box-shadow: 10px 10px 10px #C0C0C0;\r\n  background-image: linear-gradient(to right, #B1EFFC, #6FDED7);\r\n}\r\n\r\n.image-x{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.image-x button{\r\n    position: absolute;\r\n    right: 31%;\r\n    align-self: flex-start;\r\n    justify-self: flex-end;\r\n    font-size: 33px;\r\n    color: #252425;\r\n    border: none;\r\n}\r\n\r\n.add-comment {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\n\r\n.add-comment-btn {\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.name,\r\n.comment {\r\n    padding: 10px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    resize: none;\r\n}\r\n\r\n.name:focus,\r\n.comment:focus{\r\n    outline: none;\r\n}\r\n\r\n\r\n.character {\r\n    display: flex;\r\n    gap: 123px;\r\n    border: 1px solid #C0C0C0;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.comment-item {\r\n    background-color: #C0C0C0;\r\n    border-radius: 5px;\r\n    margin: 5px;\r\n    padding: 10px;\r\n}\r\n\r\n.close {\r\n    background-color: transparent;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://pokemon/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://pokemon/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://pokemon/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://pokemon/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://pokemon/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://pokemon/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://pokemon/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://pokemon/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://pokemon/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://pokemon/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://pokemon/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/display */ \"./src/modules/display.js\");\n/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_display__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_getPokemon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getPokemon */ \"./src/modules/getPokemon.js\");\n/* harmony import */ var _modules_like__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/like */ \"./src/modules/like.js\");\n/* harmony import */ var _modules_like__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_like__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\nconst pokemonId = [1,4, 7, 10,13,16,19,21,25,28,31,34,37,41,47,49,52,55,59,62,65,68,71,74,79,82,85];\n\nasync function fetchPokemons() {\n  const pokemons = await Promise.all(\n    pokemonId.map(pokemon => (0,_modules_getPokemon__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(pokemon)),\n  );\n  const count = document.getElementById('count');\n  count.innerHTML= (0,_modules_display__WEBPACK_IMPORTED_MODULE_0__.totalPokemon)(pokemons);\n  const likes = JSON.parse(await (0,_modules_like__WEBPACK_IMPORTED_MODULE_2__.getLikes)())\n  ;(0,_modules_display__WEBPACK_IMPORTED_MODULE_0__.display)(pokemons,likes);\n}\n \nfetchPokemons();\n\n\n//# sourceURL=webpack://pokemon/./src/index.js?");

/***/ }),

/***/ "./src/modules/Comment.js":
/*!********************************!*\
  !*** ./src/modules/Comment.js ***!
  \********************************/
/***/ ((module) => {

eval("const sendComment = async (id,name,comment) => {\r\n    const options = {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({\r\n    \"item_id\": `${id}`,\r\n    \"username\": `${name}`,\r\n    \"comment\": `${comment}`\r\n    }),\r\n  };\r\n\r\n await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pxjXMDdTfkYfPjZhCl94/comments`, options);\r\n \r\n}\r\n\r\nconst getComment = async(id) => {\r\n  const options = {\r\n    method: 'GET',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n  };\r\n\r\n  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pxjXMDdTfkYfPjZhCl94/comments?item_id=${id}`, options);\r\n   if(!response.ok) return [];\r\n  const data = await response.json();\r\n  return data;\r\n}\r\n\r\nmodule.exports = { sendComment, getComment }\n\n//# sourceURL=webpack://pokemon/./src/modules/Comment.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setLikes, getLikes } = __webpack_require__(/*! ./like */ \"./src/modules/like.js\");\nconst { default: showComment } = __webpack_require__(/*! ./showComment */ \"./src/modules/showComment.js\");\n\nconst totalPokemon = (pokemons) => {\n  return pokemons.length;\n}\n\nconst display = (pokemons,likes) =>  {\n  const container = document.getElementById('container');\n\n  pokemons.forEach((item,index) => {\n    const card = document.createElement('div');\n    const name = document.createElement('div');\n    const commentBtn = document.createElement('button');\n    const likeBtn = document.createElement('button');\n    const showLike = document.createElement('p');\n   \n    let likeCount = 0;\n    likes.forEach((like) => {\n      if(JSON.parse(like.item_id) === item.id){\n        likeCount = like.likes\n      }\n    })\n    card.className = 'card';\n    name.className = 'name-content';\n    commentBtn.className = 'comment-btn';\n    likeBtn.className = 'like-btn';\n\n    card.innerHTML = `<img src=\"${item.sprites.other.dream_world.front_default}\"/>`\n    name.innerHTML = `<h2> ${item.name}</h2> `\n        \n    showLike.innerHTML = `${likeCount}`\n    likeBtn.innerHTML =  `<i class=\"fa-regular fa-heart\"></i>`\n    commentBtn.innerHTML = `comment`\n\n    likeBtn.addEventListener('click', async ()=> {\n      await setLikes(item.id);\n      const newLikes = JSON.parse(await getLikes())\n      newLikes.forEach((like) => {\n      if(JSON.parse(like.item_id) === item.id){\n        showLike.innerHTML = like.likes;\n      }\n    })\n    })\n\n    commentBtn.addEventListener('click',async()=>{\n      await showComment(item.id);\n    })\n    \n    card.appendChild(name);\n    name.appendChild(showLike)\n    name.appendChild(likeBtn)\n    card.appendChild(commentBtn);\n    container.appendChild(card);\n  });\n};\n\nmodule.exports = {display, totalPokemon};\n\n\n//# sourceURL=webpack://pokemon/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/getPokemon.js":
/*!***********************************!*\
  !*** ./src/modules/getPokemon.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getPokemon = async (id) => {\n  const options = {\n    method: 'GET',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  };\n\n  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, options);\n  const data = await response.json();\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPokemon);\n\n//# sourceURL=webpack://pokemon/./src/modules/getPokemon.js?");

/***/ }),

/***/ "./src/modules/like.js":
/*!*****************************!*\
  !*** ./src/modules/like.js ***!
  \*****************************/
/***/ ((module) => {

eval("const getLikes = async () => {\r\n  const options = {\r\n    method: 'GET',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n  };\r\n\r\n  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8fqARNVkoqtapAj5nHFg/likes/`, options);\r\n  const data = await response.text();\r\n  return data;\r\n};\r\n\r\nconst setLikes = async (id) => {\r\n  const options = {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({\r\n        \"item_id\": `${id}`\r\n    }),\r\n  };\r\n\r\n  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8fqARNVkoqtapAj5nHFg/likes/`, options);\r\n \r\n};\r\n\r\nmodule.exports = {getLikes,setLikes};\n\n//# sourceURL=webpack://pokemon/./src/modules/like.js?");

/***/ }),

/***/ "./src/modules/showComment.js":
/*!************************************!*\
  !*** ./src/modules/showComment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getPokemon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPokemon */ \"./src/modules/getPokemon.js\");\n/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comment */ \"./src/modules/Comment.js\");\n/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Comment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _totalCount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./totalCount */ \"./src/modules/totalCount.js\");\n\r\n\r\n\r\n\r\nconst showComment = async (id) => {\r\n    const header = document.querySelector('header')\r\n    const mainContainer = document.getElementById('container');\r\n    const footer = document.querySelector('footer');\r\n    header.style.display = 'none';\r\n    mainContainer.style.display = 'none';\r\n    footer.style.display = 'none';\r\n\r\n    const pokemon = await (0,_getPokemon__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id);\r\n\r\n    const container = document.createElement(\"div\");\r\n    const addComment = document.createElement('div');\r\n    const name = document.createElement('input');\r\n    const comment = document.createElement('textarea');\r\n    const addCommentBtn = document.createElement('button');\r\n\r\n    container.className = \"comment-container\";\r\n    addComment.className = \"add-comment\";\r\n    name.className = \"name\";\r\n    comment.className = \"comment\"\r\n    addCommentBtn.className = \"add-comment-btn\";\r\n\r\n    name.type = \"text\";\r\n    name.placeholder = \"Your name\"\r\n    comment.placeholder = \"Your comment\"\r\n    addCommentBtn.innerHTML = 'Comment'\r\n  \r\n    container.innerHTML = `<div class=\"image-x\"><img src=\"${pokemon.sprites.other.dream_world.front_default}\" alt=\"img\"/>\r\n                            <button class=\"close\">X</button>\r\n                            </div>\r\n                            <h2>${pokemon.name}</h2>  \r\n                            <div class=\"character\">\r\n                                <span class=\"first-span\">Move:${pokemon.moves[0].move.name}</span>\r\n                                <span class=\"second-span\">Type: ${pokemon.types[0].type.name}</span>\r\n                            </div>\r\n                            <div class=\"character\">\r\n                                <span class=\"first-span\">Base-Experience: ${pokemon.base_experience}</span> \r\n                                <span class=\"second-span\">Height: ${pokemon.height}</span>\r\n                            </div>\r\n                            <p>Comments(<span id=\"comment-count\"></span>)</p>\r\n                            <ul id=\"comment-list\"></ul>\r\n                             <p>Add a comment </p>\r\n                          `\r\n    addComment.appendChild(name);\r\n    addComment.appendChild(comment);\r\n    addComment.appendChild(addCommentBtn);\r\n    container.appendChild(addComment);\r\n    document.body.appendChild(container);\r\n\r\n  const commentList = document.getElementById('comment-list');\r\n  const commentCountBox = document.getElementById('comment-count');\r\n  const comments = await (0,_Comment__WEBPACK_IMPORTED_MODULE_1__.getComment)(id);\r\n  commentCountBox.innerHTML = (0,_totalCount__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(comments)\r\n  comments.forEach((comment) => {\r\n    const commentItem = document.createElement('li');\r\n    commentItem.className = \"comment-item\"\r\n    commentItem.innerHTML = `<p>\r\n                                   <i class=\"fa-regular fa-comments\"></i> ${comment.creation_date}: ${comment.username} by ${comment.comment}\r\n                                </p>`;\r\n\r\n    commentList.appendChild(commentItem);\r\n  });\r\n\r\n  addCommentBtn.addEventListener('click', async () => {\r\n    if (name.value !== '' && comment.value !== '') {\r\n      await (0,_Comment__WEBPACK_IMPORTED_MODULE_1__.sendComment)(id, name.value, comment.value);\r\n      const commentCountBox = document.getElementById('comment-count');\r\n      const comments = await (0,_Comment__WEBPACK_IMPORTED_MODULE_1__.getComment)(id);\r\n      commentCountBox.innerHTML = (0,_totalCount__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(comments)\r\n      const newComment = comments[comments.length - 1];\r\n      const commentList = document.getElementById('comment-list');\r\n      const commentItem = document.createElement('li');\r\n      commentItem.innerHTML = `<p>\r\n                                  ${newComment.creation_date} ${newComment.username}:${newComment.comment}\r\n                                </p>`;\r\n\r\n      commentList.appendChild(commentItem);\r\n    }\r\n    name.value = '';\r\n    comment.value = '';\r\n  });\r\n\r\n    const close = document.querySelector('.close');\r\n      close.addEventListener(\"click\",() =>{\r\n        document.body.removeChild(container);\r\n        header.style.display = 'flex';\r\n        footer.style.display = 'flex'\r\n        mainContainer.style.display = 'grid';\r\n    })\r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showComment); \n\n//# sourceURL=webpack://pokemon/./src/modules/showComment.js?");

/***/ }),

/***/ "./src/modules/totalCount.js":
/*!***********************************!*\
  !*** ./src/modules/totalCount.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst totalComment = (comments) => {\r\n  return comments.length;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (totalComment);\n\n//# sourceURL=webpack://pokemon/./src/modules/totalCount.js?");

/***/ }),

/***/ "./src/image/pokemon-logo.png":
/*!************************************!*\
  !*** ./src/image/pokemon-logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a4a49d7a315b725de60c.png\";\n\n//# sourceURL=webpack://pokemon/./src/image/pokemon-logo.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);