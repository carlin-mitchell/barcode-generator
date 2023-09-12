/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/BarcodeGenerator/Barcode.js":
/*!****************************************************!*\
  !*** ./src/components/BarcodeGenerator/Barcode.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
// COMPONENT IMPORTS


// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const Barcode = () => {
  //

  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    innerText: ``,
    className: ``
  },
  // add child elements to the array below
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Img)({
    id: "barcode"
  })]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Barcode);

/***/ }),

/***/ "./src/components/BarcodeGenerator/BarcodeForm.js":
/*!********************************************************!*\
  !*** ./src/components/BarcodeGenerator/BarcodeForm.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _GenerateButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GenerateButton */ "./src/components/BarcodeGenerator/GenerateButton.js");
/* harmony import */ var _BarcodeTextInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BarcodeTextInput */ "./src/components/BarcodeGenerator/BarcodeTextInput.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logic */ "./src/components/BarcodeGenerator/logic.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_logic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _BarcodeWIdthInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BarcodeWIdthInput */ "./src/components/BarcodeGenerator/BarcodeWIdthInput.js");
// COMPONENT IMPORTS







// LOGIC IMPORTS
//

// COMPONENT METHODS
function handleSubmit(e) {
  e.preventDefault();
  const width = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getInputValue)((0,_logic__WEBPACK_IMPORTED_MODULE_4__.getBarcodeWidthInput)());
  (0,_logic__WEBPACK_IMPORTED_MODULE_4__.generateBarcode)({
    width
  });
}
const BarcodeForm = () => {
  //

  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Form)({
    innerText: ``,
    className: ``,
    onsubmit(e) {
      handleSubmit(e);
    }
  },
  // add child elements to the array below
  [(0,_BarcodeTextInput__WEBPACK_IMPORTED_MODULE_2__["default"])({
    value: "Hello World"
  }), (0,_BarcodeWIdthInput__WEBPACK_IMPORTED_MODULE_5__["default"])()]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BarcodeForm);

/***/ }),

/***/ "./src/components/BarcodeGenerator/BarcodeGenerator.js":
/*!*************************************************************!*\
  !*** ./src/components/BarcodeGenerator/BarcodeGenerator.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _Barcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Barcode */ "./src/components/BarcodeGenerator/Barcode.js");
/* harmony import */ var _BarcodeTextInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BarcodeTextInput */ "./src/components/BarcodeGenerator/BarcodeTextInput.js");
/* harmony import */ var _BarcodeForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BarcodeForm */ "./src/components/BarcodeGenerator/BarcodeForm.js");
/* harmony import */ var _GenerateButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GenerateButton */ "./src/components/BarcodeGenerator/GenerateButton.js");
// COMPONENT IMPORTS





// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const BarcodeGenerator = () => {
  //

  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    innerText: ``,
    className: ``
  },
  // add child elements to the array below
  [(0,_BarcodeForm__WEBPACK_IMPORTED_MODULE_3__["default"])(), (0,_Barcode__WEBPACK_IMPORTED_MODULE_1__["default"])()]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BarcodeGenerator);

/***/ }),

/***/ "./src/components/BarcodeGenerator/BarcodeTextInput.js":
/*!*************************************************************!*\
  !*** ./src/components/BarcodeGenerator/BarcodeTextInput.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   barcodeTextInputId: () => (/* binding */ barcodeTextInputId),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ "./src/components/BarcodeGenerator/logic.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_logic__WEBPACK_IMPORTED_MODULE_1__);
// COMPONENT IMPORTS




// LOGIC IMPORTS
//

// COMPONENT METHODS
function handleChange() {
  (0,_logic__WEBPACK_IMPORTED_MODULE_1__.generateBarcode)();
}
const barcodeTextInputId = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
const BarcodeTextInput = props => {
  const {
    value
  } = props;
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    innerText: ``,
    className: ``
  },
  // add child elements to the array below
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Input)({
    id: `${barcodeTextInputId}`,
    value,
    oninput() {
      handleChange();
    }
  })]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BarcodeTextInput);

/***/ }),

/***/ "./src/components/BarcodeGenerator/BarcodeWIdthInput.js":
/*!**************************************************************!*\
  !*** ./src/components/BarcodeGenerator/BarcodeWIdthInput.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   barcodeWidthInputId: () => (/* binding */ barcodeWidthInputId),
/* harmony export */   barcodeWidthLabelSpanId: () => (/* binding */ barcodeWidthLabelSpanId),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/components/BarcodeGenerator/ui.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logic */ "./src/components/BarcodeGenerator/logic.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_logic__WEBPACK_IMPORTED_MODULE_3__);
// COMPONENT IMPORTS






// LOGIC IMPORTS
//

// COMPONENT METHODS

const barcodeWidthInputId = (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])();
const barcodeWidthLabelSpanId = `barcode-width-display-${barcodeWidthInputId}`;
function handleInput() {
  const width = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getInputValue)((0,_logic__WEBPACK_IMPORTED_MODULE_3__.getBarcodeWidthInput)());
  (0,_ui__WEBPACK_IMPORTED_MODULE_1__.updateBarcodeWidthDisplay)(width);
  (0,_logic__WEBPACK_IMPORTED_MODULE_3__.generateBarcode)();
}
const BarcodeWidthInput = () => {
  //

  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({}, [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Label)({
    innerHTML: `Width: ${(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Span)({
      id: barcodeWidthLabelSpanId
    }).outerHTML}`
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Input)({
    id: barcodeWidthInputId,
    type: "range",
    innerText: ``,
    className: ``,
    min: 1,
    max: 10,
    step: 1,
    value: 1,
    oninput() {
      handleInput();
    }
  },
  // add child elements to the array below
  [])]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BarcodeWidthInput);

/***/ }),

/***/ "./src/components/BarcodeGenerator/GenerateButton.js":
/*!***********************************************************!*\
  !*** ./src/components/BarcodeGenerator/GenerateButton.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _BarcodeTextInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BarcodeTextInput */ "./src/components/BarcodeGenerator/BarcodeTextInput.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logic */ "./src/components/BarcodeGenerator/logic.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_logic__WEBPACK_IMPORTED_MODULE_3__);
// COMPONENT IMPORTS





// LOGIC IMPORTS
//

// COMPONENT METHODS

const GenerateButton = () => {
  //

  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_1__.Button)({
    innerText: `Generate`,
    className: ``
  },
  // add child elements to the array below
  []);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GenerateButton);

/***/ }),

/***/ "./src/components/BarcodeGenerator/logic.js":
/*!**************************************************!*\
  !*** ./src/components/BarcodeGenerator/logic.js ***!
  \**************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/carlinmi/Desktop/webdev/barcode-generator/src/components/BarcodeGenerator/logic.js: Identifier 'getBarcodeWidthSpan' has already been declared. (37:16)\n\n\u001b[0m \u001b[90m 35 |\u001b[39m }\u001b[0m\n\u001b[0m \u001b[90m 36 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 37 |\u001b[39m \u001b[36mexport\u001b[39m \u001b[36mfunction\u001b[39m getBarcodeWidthSpan() {}\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                 \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 38 |\u001b[39m\u001b[0m\n    at constructor (/Users/carlinmi/Desktop/webdev/barcode-generator/node_modules/@babel/parser/lib/index.js:345:19)\n    at Parser.raise (/Users/carlinmi/Desktop/webdev/barcode-generator/node_modules/@babel/parser/lib/index.js:3199:19)\n    at ScopeHandler.checkRedeclarationInScope (/Users/carlinmi/Desktop/webdev/barcode-generator/node_modules/@babel/parser/lib/index.js:1472:19)\n    at ScopeHandler.declareName (/Users/carlinmi/Desktop/webdev/barcode-generator/node_modules/@babel/parser/lib/index.js:1443:12)\n    at Parser.registerFunctionStatementId (/Users/carlinmi/Desktop/webdev/barcode-generator/node_modules/@babel/parser/lib/index.js:13281:16)\n    at Parser.parseFunction (/Users/carlinmi/Desktop/webdev/barcode-generator/node_modules/@babel/parser/lib/index.js:13265:12)\n    at Parser.parseFunctionStatement (/Users/carlinmi/Desktop/webdev/barcode-generator/node_modules/@babel/parser/lib/index.js:12926:17)\n    at Parser.parseStatementContent (/Users/carlinmi/Desktop/webdev/barcode-generator/node_modules/@babel/parser/lib/index.js:12556:21)\n    at Parser.parseStatementLike (/Users/carlinmi/Desktop/webdev/barcode-generator/node_modules/@babel/parser/lib/index.js:12530:17)\n    at Parser.parseStatementListItem (/Users/carlinmi/Desktop/webdev/barcode-generator/node_modules/@babel/parser/lib/index.js:12510:17)\n    at Parser.parseExportDeclaration (/Users/carlinmi/Desktop/webdev/barcode-generator/node_modules/@babel/parser/lib/index.js:13777:17)\n    at Parser.maybeParseExportDeclaration (/Users/carlinmi/Desktop/webdev/barcode-generator/node_modules/@babel/parser/lib/index.js:13732:31)\n    at Parser.parseExport (/Users/carlinmi/Desktop/webdev/barcode-generator/node_modules/@babel/parser/lib/index.js:13655:29)\n    at Parser.parseStatementContent (/Users/carlinmi/Desktop/webdev/barcode-generator/node_modules/@babel/parser/lib/index.js:12657:27)\n    at Parser.parseStatementLike (/Users/carlinmi/Desktop/webdev/barcode-generator/node_modules/@babel/parser/lib/index.js:12530:17)\n    at Parser.parseModuleItem (/Users/carlinmi/Desktop/webdev/barcode-generator/node_modules/@babel/parser/lib/index.js:12507:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/carlinmi/Desktop/webdev/barcode-generator/node_modules/@babel/parser/lib/index.js:13131:36)\n    at Parser.parseBlockBody (/Users/carlinmi/Desktop/webdev/barcode-generator/node_modules/@babel/parser/lib/index.js:13124:10)\n    at Parser.parseProgram (/Users/carlinmi/Desktop/webdev/barcode-generator/node_modules/@babel/parser/lib/index.js:12406:10)\n    at Parser.parseTopLevel (/Users/carlinmi/Desktop/webdev/barcode-generator/node_modules/@babel/parser/lib/index.js:12396:25)\n    at Parser.parse (/Users/carlinmi/Desktop/webdev/barcode-generator/node_modules/@babel/parser/lib/index.js:14292:10)\n    at parse (/Users/carlinmi/Desktop/webdev/barcode-generator/node_modules/@babel/parser/lib/index.js:14333:38)\n    at parser (/Users/carlinmi/Desktop/webdev/barcode-generator/node_modules/@babel/core/lib/parser/index.js:41:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Users/carlinmi/Desktop/webdev/barcode-generator/node_modules/@babel/core/lib/transformation/normalize-file.js:64:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/Users/carlinmi/Desktop/webdev/barcode-generator/node_modules/@babel/core/lib/transformation/index.js:21:50)\n    at run.next (<anonymous>)\n    at transform (/Users/carlinmi/Desktop/webdev/barcode-generator/node_modules/@babel/core/lib/transform.js:22:41)\n    at transform.next (<anonymous>)\n    at step (/Users/carlinmi/Desktop/webdev/barcode-generator/node_modules/gensync/index.js:261:32)\n    at /Users/carlinmi/Desktop/webdev/barcode-generator/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/carlinmi/Desktop/webdev/barcode-generator/node_modules/gensync/index.js:223:11)");

/***/ }),

/***/ "./src/components/BarcodeGenerator/ui.js":
/*!***********************************************!*\
  !*** ./src/components/BarcodeGenerator/ui.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateBarcodeWidthDisplay: () => (/* binding */ updateBarcodeWidthDisplay)
/* harmony export */ });
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/components/BarcodeGenerator/logic.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_logic__WEBPACK_IMPORTED_MODULE_0__);

function updateBarcodeWidthDisplay(value) {
  const barcodeWidthDisplay = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.getBarcodeWidthSpan)();
  barcodeWidthDisplay.innerText = value;
}

/***/ }),

/***/ "./src/components/Content/Content.js":
/*!*******************************************!*\
  !*** ./src/components/Content/Content.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header/Header */ "./src/components/Header/Header.js");
/* harmony import */ var _DynamicFooter_DynamicFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DynamicFooter/DynamicFooter */ "./src/components/DynamicFooter/DynamicFooter.js");
/* harmony import */ var _MainSection_MainSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MainSection/MainSection */ "./src/components/MainSection/MainSection.js");





// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const Content = () => {
  const content = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("div", {
    id: "content"
  }, [(0,_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"])(), (0,_MainSection_MainSection__WEBPACK_IMPORTED_MODULE_3__["default"])(), (0,_DynamicFooter_DynamicFooter__WEBPACK_IMPORTED_MODULE_2__["default"])()]);
  return content;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);

/***/ }),

/***/ "./src/components/DynamicFooter/CopyrightContainer.js":
/*!************************************************************!*\
  !*** ./src/components/DynamicFooter/CopyrightContainer.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _custom_components_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_custom-components/Icon */ "./src/components/_custom-components/Icon.js");
/* harmony import */ var _page_logic_data_data_page_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../page-logic/data/data-page-config */ "./src/page-logic/data/data-page-config.js");
// COMPONENT IMPORTS



// LOGIC IMPORTS


// COMPONENT METHODS
// function someMethod() {
//   //
// }

// TEMPLATE VARIABLES
const dynamicYear = new Date().getFullYear();
const CopyrightContainer = () => {
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: `copyright-container`
  },
  // add child elements to the array below
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "copyright-info display-i-b",
    innerText: `© Carlin Mitchell ${dynamicYear}`
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.A)({
    href: `https://github.com/carlin-mitchell/${_page_logic_data_data_page_config__WEBPACK_IMPORTED_MODULE_2__.githubInfo.repoName}`
  }, [(0,_custom_components_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-github-cat")])]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CopyrightContainer);

/***/ }),

/***/ "./src/components/DynamicFooter/DynamicFooter.js":
/*!*******************************************************!*\
  !*** ./src/components/DynamicFooter/DynamicFooter.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _CopyrightContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CopyrightContainer */ "./src/components/DynamicFooter/CopyrightContainer.js");
/* harmony import */ var _SiteAttributions_AttributionsContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SiteAttributions/AttributionsContainer */ "./src/components/DynamicFooter/SiteAttributions/AttributionsContainer.js");
/* harmony import */ var _TOPLinkContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TOPLinkContainer */ "./src/components/DynamicFooter/TOPLinkContainer.js");
// COMPONENT IMPORTS





// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const DynamicFooter = () => {
  // prettier-ignore
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Footer)({
    id: `footer`,
    className: `bg-gray-dark-3 text-white`
  }, [(0,_CopyrightContainer__WEBPACK_IMPORTED_MODULE_1__["default"])(), (0,_SiteAttributions_AttributionsContainer__WEBPACK_IMPORTED_MODULE_2__["default"])()]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicFooter);

/***/ }),

/***/ "./src/components/DynamicFooter/SiteAttributions/AttributionsContainer.js":
/*!********************************************************************************!*\
  !*** ./src/components/DynamicFooter/SiteAttributions/AttributionsContainer.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _custom_components_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_custom-components/Icon */ "./src/components/_custom-components/Icon.js");
/* harmony import */ var _custom_components_ExpandablePanel_ExpandablePanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_custom-components/ExpandablePanel/ExpandablePanel */ "./src/components/_custom-components/ExpandablePanel/ExpandablePanel.js");
/* harmony import */ var _custom_components_ExpandablePanel_NonExpandablePanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_custom-components/ExpandablePanel/NonExpandablePanel */ "./src/components/_custom-components/ExpandablePanel/NonExpandablePanel.js");
/* harmony import */ var _IconsExplanation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IconsExplanation */ "./src/components/DynamicFooter/SiteAttributions/IconsExplanation.js");
// COMPONENT IMPORTS






// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const AttributionsContainer = () => {
  const container = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("div", {
    className: `attributions-container`
  },
  // add child elements to the array below
  [(0,_custom_components_ExpandablePanel_ExpandablePanel__WEBPACK_IMPORTED_MODULE_2__["default"])({
    title: "Site Attributions",
    children: [(0,_custom_components_ExpandablePanel_ExpandablePanel__WEBPACK_IMPORTED_MODULE_2__["default"])({
      title: "Icons",
      children: [(0,_custom_components_ExpandablePanel_NonExpandablePanel__WEBPACK_IMPORTED_MODULE_3__["default"])({
        title: "Github",
        href: "https://github.com/logos",
        children: [(0,_custom_components_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-github-cat")]
      }), (0,_custom_components_ExpandablePanel_ExpandablePanel__WEBPACK_IMPORTED_MODULE_2__["default"])({
        title: "All other Icons",
        children: [(0,_IconsExplanation__WEBPACK_IMPORTED_MODULE_4__["default"])()]
      })]
    })]
  })]);
  return container;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AttributionsContainer);

/***/ }),

/***/ "./src/components/DynamicFooter/SiteAttributions/IconsExplanation.js":
/*!***************************************************************************!*\
  !*** ./src/components/DynamicFooter/SiteAttributions/IconsExplanation.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_elements/Elements */ "./src/components/_elements/Elements.js");
// COMPONENT IMPORTS


// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const IconsExplanation = () => {
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: `icons-explanation`,
    innerHTML: ``
  },
  // add child elements to the array below
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    innerHTML: `All other icons were created by me using ${(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.A)({
      href: "https://inkscape.org/",
      innerText: "Inkscape"
    }).outerHTML} and converting them to a font with ${(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.A)({
      href: "https://icomoon.io/",
      innerText: "IcoMoon"
    }).outerHTML}`
  })]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconsExplanation);

/***/ }),

/***/ "./src/components/DynamicFooter/TOPLinkContainer.js":
/*!**********************************************************!*\
  !*** ./src/components/DynamicFooter/TOPLinkContainer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
// COMPONENT IMPORTS


// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const TOPContainer = () => {
  const parentContainer = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: `top-container`,
    innerText: "Inspired By:"
  },
  // add child elements to the array below
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.A)({
    href: "https://www.theodinproject.com/",
    className: "top-link",
    innerText: "The Odin Project"
  })]);
  return parentContainer;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TOPContainer);

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
// COMPONENT IMPORTS


// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const Header = () => {
  const h1 = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("h1", {
    innerText: "Barcode Generator"
  });
  const otherClasses = "bg-gray-dark-3 text-white p-2";
  const header = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("header", {
    id: "header",
    className: "header" + " " + otherClasses
  }, [h1]);
  return header;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/MainSection/MainSection.js":
/*!***************************************************!*\
  !*** ./src/components/MainSection/MainSection.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _BarcodeGenerator_BarcodeGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BarcodeGenerator/BarcodeGenerator */ "./src/components/BarcodeGenerator/BarcodeGenerator.js");
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
// COMPONENT IMPORTS




// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const MainSection = () => {
  const otherClasses = "";
  const main = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_2__.Main)({
    id: "main-section",
    className: "" + " " + otherClasses
  },
  // add child elements to the array below
  [(0,_BarcodeGenerator_BarcodeGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])()]);
  return main;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainSection);

/***/ }),

/***/ "./src/components/_custom-components/ExpandablePanel/ExpandablePanel.js":
/*!******************************************************************************!*\
  !*** ./src/components/_custom-components/ExpandablePanel/ExpandablePanel.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _ExpandablePanelTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpandablePanelTitle */ "./src/components/_custom-components/ExpandablePanel/ExpandablePanelTitle.js");
/* harmony import */ var _ExpandablePanelContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExpandablePanelContent */ "./src/components/_custom-components/ExpandablePanel/ExpandablePanelContent.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
// COMPONENT IMPORTS





// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const ExpandablePanel = props => {
  const componentId = (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const {
    title,
    children
  } = props;
  const panel = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.A)({
    className: `expandable-panel`
  },
  // add child elements to the array below
  [(0,_ExpandablePanelTitle__WEBPACK_IMPORTED_MODULE_1__["default"])({
    title,
    componentId
  }), (0,_ExpandablePanelContent__WEBPACK_IMPORTED_MODULE_2__["default"])({
    children,
    componentId
  })]);
  return panel;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpandablePanel);

/***/ }),

/***/ "./src/components/_custom-components/ExpandablePanel/ExpandablePanelContent.js":
/*!*************************************************************************************!*\
  !*** ./src/components/_custom-components/ExpandablePanel/ExpandablePanelContent.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_elements/Elements */ "./src/components/_elements/Elements.js");
// COMPONENT IMPORTS



// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const ExpandablePanelContent = props => {
  let {
    children,
    componentId
  } = props;
  children = children ? children : [];
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    id: `expandable-content-${componentId}`,
    className: `expandable-panel-content`
  },
  // add child elements to the array below
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "content"
  }, [...children])]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpandablePanelContent);

/***/ }),

/***/ "./src/components/_custom-components/ExpandablePanel/ExpandablePanelTitle.js":
/*!***********************************************************************************!*\
  !*** ./src/components/_custom-components/ExpandablePanel/ExpandablePanelTitle.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icon */ "./src/components/_custom-components/Icon.js");
// COMPONENT IMPORTS



// LOGIC IMPORTS
//

// COMPONENT METHODS
function toggleExpansion(componentId) {
  const expansionContent = document.getElementById(`expandable-content-${componentId}`);
  const toggleExpansionButton = document.getElementById(`expandable-content-button-${componentId}`);
  expansionContent.classList.toggle("expanded");
  toggleExpansionButton.classList.toggle("expanded");
}
const ExpandablePanelTitle = props => {
  const {
    title,
    componentId
  } = props;
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("div", {
    className: `expandable-panel-title`
  }, [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "display-i-b",
    innerText: title,
    onclick() {
      toggleExpansion(componentId);
    }
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Button)({
    id: `expandable-content-button-${componentId}`,
    onclick() {
      toggleExpansion(componentId);
    }
  }, [(0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-up-down")])]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpandablePanelTitle);

/***/ }),

/***/ "./src/components/_custom-components/ExpandablePanel/NonExpandablePanel.js":
/*!*********************************************************************************!*\
  !*** ./src/components/_custom-components/ExpandablePanel/NonExpandablePanel.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_elements/Elements */ "./src/components/_elements/Elements.js");
// COMPONENT IMPORTS


// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const NonExpandablePanel = props => {
  let {
    title,
    href,
    children
  } = props;
  children = children ? children : [];
  const otherClasses = "";
  const panel = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.A)({
    className: `${otherClasses} non-expandable-panel ${href ? "is-link" : ""}`,
    innerText: title
  },
  // add child elements to the array below
  [...children]);
  if (href) {
    panel.href = href;
  }
  return panel;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NonExpandablePanel);

/***/ }),

/***/ "./src/components/_custom-components/Icon.js":
/*!***************************************************!*\
  !*** ./src/components/_custom-components/Icon.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
// COMPONENT IMPORTS


// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const Icon = iconClass => {
  const icon = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("i", {
    className: `icon ${iconClass} display-i-b`
  });
  return icon;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./src/components/_custom-components/ImageCarousel/ui/carousel-ui.js":
/*!***************************************************************************!*\
  !*** ./src/components/_custom-components/ImageCarousel/ui/carousel-ui.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clickCarouselLeft: () => (/* binding */ clickCarouselLeft),
/* harmony export */   clickCarouselNav: () => (/* binding */ clickCarouselNav),
/* harmony export */   clickCarouselPause: () => (/* binding */ clickCarouselPause),
/* harmony export */   clickCarouselPlay: () => (/* binding */ clickCarouselPlay),
/* harmony export */   clickCarouselRight: () => (/* binding */ clickCarouselRight),
/* harmony export */   gotoSpecificSlide: () => (/* binding */ gotoSpecificSlide),
/* harmony export */   handleAutoAdvance: () => (/* binding */ handleAutoAdvance)
/* harmony export */ });
// ########################## UTILITIES #########################

function getAllCarouselSlides() {
  return [...document.querySelector(".carousel-track").childNodes];
}
function getAllCarouselSlideIds() {
  return getAllCarouselSlides().map(elem => elem.id);
}
function getAllCarouselNavButtons() {
  return [...document.querySelectorAll(".carousel-indicator")];
}
function getCurrentSlideIndex() {
  const allSlideIds = getAllCarouselSlideIds();
  const currentSlideId = document.querySelector(".carousel-slide.active").id;
  const currentSlideIndex = allSlideIds.indexOf(currentSlideId);
  return currentSlideIndex;
}
function getPreviousSlideIndex() {
  let previousSlideIndex = getCurrentSlideIndex() - 1;

  // if the calculated index is outside the list, set it to the index of the last item in the list
  const correctedIndex = previousSlideIndex < 0 ? getAllCarouselSlideIds().length - 1 : previousSlideIndex;
  return correctedIndex;
}
function getNextSlideIndex() {
  let nextSlideIndex = getCurrentSlideIndex() + 1;

  // if the calculated index is outside the list, set it to the index of the first item in the list
  const correctedIndex = nextSlideIndex > getAllCarouselSlideIds().length - 1 ? 0 : nextSlideIndex;
  return correctedIndex;
}

// move to the selected slide
function gotoSpecificSlide(id) {
  const allNavButtons = getAllCarouselNavButtons();
  const selectedNavButton = document.getElementById(`carousel-nav-${id}`);
  const selectedSlide = document.getElementById(`carousel-slide-${id}`);
  const allSlides = getAllCarouselSlides();
  allSlides.forEach(slide => slide.classList.remove("active"));
  selectedSlide.classList.add("active");
  allNavButtons.forEach(slide => slide.classList.remove("active"));
  selectedNavButton.classList.add("active");
}

// ######################### EVENT HANDLERS #########################
// move to the selected slide when clicking on the associated nav button
function clickCarouselNav(id) {
  gotoSpecificSlide(id);
}

// move right when clicking on the right button
function clickCarouselRight() {
  const id = getAllCarouselSlideIds()[getNextSlideIndex()].replace("carousel-slide-", "");
  gotoSpecificSlide(id);
}

// move left when clicking on the right button
function clickCarouselLeft() {
  const id = getAllCarouselSlideIds()[getPreviousSlideIndex()].replace("carousel-slide-", "");
  gotoSpecificSlide(id);
}

// ######################## AUTO PROGRESSION ########################
function clickCarouselPlay() {
  handleAutoAdvance("play");
  const playButton = document.querySelector(".carousel .play-button");
  playButton.classList.toggle("visible");
  const pauseButton = document.querySelector(".carousel .pause-button");
  pauseButton.classList.toggle("visible");
}
function clickCarouselPause() {
  handleAutoAdvance("pause");
  const playButton = document.querySelector(".carousel .play-button");
  playButton.classList.toggle("visible");
  const pauseButton = document.querySelector(".carousel .pause-button");
  pauseButton.classList.toggle("visible");
}
let interval;
/**
 * A function to create or cancel the auto advance timer
 * you will neet to declare interval (let interval) before
 * this function to allow the interval to be created / refenenced
 * @param {string} mode a string containing 'play' or 'pause' to indicate the mode
 */
function handleAutoAdvance(mode) {
  const playing = mode === "play" ? true : false;
  if (playing) {
    // start an interval timer and capture its reference
    interval = window.setInterval(clickCarouselRight, 5000);
  } else {
    // cancel the reference you captured
    window.clearInterval(interval);
  }
}

/***/ }),

/***/ "./src/components/_elements/Elements.js":
/*!**********************************************!*\
  !*** ./src/components/_elements/Elements.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ A),
/* harmony export */   Article: () => (/* binding */ Article),
/* harmony export */   B: () => (/* binding */ B),
/* harmony export */   Body: () => (/* binding */ Body),
/* harmony export */   Br: () => (/* binding */ Br),
/* harmony export */   Button: () => (/* binding */ Button),
/* harmony export */   Datalist: () => (/* binding */ Datalist),
/* harmony export */   Div: () => (/* binding */ Div),
/* harmony export */   Element: () => (/* binding */ Element),
/* harmony export */   Fieldset: () => (/* binding */ Fieldset),
/* harmony export */   Footer: () => (/* binding */ Footer),
/* harmony export */   Form: () => (/* binding */ Form),
/* harmony export */   H1: () => (/* binding */ H1),
/* harmony export */   H2: () => (/* binding */ H2),
/* harmony export */   H3: () => (/* binding */ H3),
/* harmony export */   Header: () => (/* binding */ Header),
/* harmony export */   Hr: () => (/* binding */ Hr),
/* harmony export */   I: () => (/* binding */ I),
/* harmony export */   Img: () => (/* binding */ Img),
/* harmony export */   Input: () => (/* binding */ Input),
/* harmony export */   Label: () => (/* binding */ Label),
/* harmony export */   Legend: () => (/* binding */ Legend),
/* harmony export */   Li: () => (/* binding */ Li),
/* harmony export */   Main: () => (/* binding */ Main),
/* harmony export */   Ol: () => (/* binding */ Ol),
/* harmony export */   Option: () => (/* binding */ Option),
/* harmony export */   P: () => (/* binding */ P),
/* harmony export */   Select: () => (/* binding */ Select),
/* harmony export */   Span: () => (/* binding */ Span),
/* harmony export */   Strong: () => (/* binding */ Strong),
/* harmony export */   Textarea: () => (/* binding */ Textarea),
/* harmony export */   Ul: () => (/* binding */ Ul)
/* harmony export */ });
/**
 * This Function allows you to create a dom element with its initial attributes and child elements defined by a passed-in object and array of child elements
 * @param {string} typeStr the tag name of the element to be returned you would use in document.createElement()
 * @param {object} propsObj (optional) an object containing the initial properties/attributes you want the element to have
 * @param {array} childArr (optional) an of element objects to be appended as children to this element
 * @returns {Element} the a reference to the element created in memory
 */
const Element = function (typeStr, propsObj) {
  let childArr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  // Some attributes can only be set using the Element.setAttribute() method.
  // If it is in the propsObj Object.assign will fail. We'll remove it from the
  // props object here and assign them to the parent element before it is returned.
  // These attributes should be added to the setAttributeProperties list for processing.
  let setAttributeProperties = ["list"];
  let properties = [];
  setAttributeProperties.forEach(property => {
    if (property in propsObj) {
      const value = propsObj[property];
      properties.push({
        name: property,
        value: value
      });
      delete propsObj[property];
    }
  });

  // Create an element based on the type string provided
  const parentElement = Object.assign(document.createElement(typeStr), propsObj);

  // Add passed in child to array if it is not already
  if (childArr && !Array.isArray(childArr)) {
    childArr = [childArr];
  }

  // Append children to the element
  if (childArr) {
    childArr.forEach(child => parentElement.appendChild(child));
  }

  // Apply properties with setAttribute if needed
  if (properties.length) {
    properties.forEach(property => {
      parentElement.setAttribute(property.name, property.value);
    });
  }
  return parentElement;
};

//  COMMON ELEMENTS
const A = (props, children) => Element("a", props ? {
  ...props
} : {}, children ? [...children] : []);
const Article = (props, children) => Element("article", props ? {
  ...props
} : {}, children ? [...children] : []);
const B = (props, children) => Element("b", props ? {
  ...props
} : {}, children ? [...children] : []);
const Body = (props, children) => Element("body", props ? {
  ...props
} : {}, children ? [...children] : []);
const Button = (props, children) => Element("button", props ? {
  ...props
} : {}, children ? [...children] : []);
const Br = (props, children) => Element("br", props ? {
  ...props
} : {}, children ? [...children] : []);
const Div = (props, children) => Element("div", props ? {
  ...props
} : {}, children ? [...children] : []);
const Datalist = (props, children) => Element("datalist", props ? {
  ...props
} : {}, children ? [...children] : []);
const Fieldset = (props, children) => Element("fieldset", props ? {
  ...props
} : {}, children ? [...children] : []);
const Footer = (props, children) => Element("footer", props ? {
  ...props
} : {}, children ? [...children] : []);
const Form = (props, children) => Element("form", props ? {
  ...props
} : {}, children ? [...children] : []);
const H1 = (props, children) => Element("h1", props ? {
  ...props
} : {}, children ? [...children] : []);
const H2 = (props, children) => Element("h2", props ? {
  ...props
} : {}, children ? [...children] : []);
const H3 = (props, children) => Element("h3", props ? {
  ...props
} : {}, children ? [...children] : []);
const Header = (props, children) => Element("header", props ? {
  ...props
} : {}, children ? [...children] : []);
const Hr = (props, children) => Element("hr", props ? {
  ...props
} : {}, children ? [...children] : []);
const I = (props, children) => Element("i", props ? {
  ...props
} : {}, children ? [...children] : []);
const Img = (props, children) => Element("img", props ? {
  ...props
} : {}, children ? [...children] : []);
const Input = (props, children) => Element("input", props ? {
  ...props
} : {}, children ? [...children] : []);
const Label = (props, children) => Element("label", props ? {
  ...props
} : {}, children ? [...children] : []);
const Legend = (props, children) => Element("legend", props ? {
  ...props
} : {}, children ? [...children] : []);
const Li = (props, children) => Element("li", props ? {
  ...props
} : {}, children ? [...children] : []);
const Main = (props, children) => Element("main", props ? {
  ...props
} : {}, children ? [...children] : []);
const Ol = (props, children) => Element("ol", props ? {
  ...props
} : {}, children ? [...children] : []);
const Option = (props, children) => Element("option", props ? {
  ...props
} : {}, children ? [...children] : []);
const P = (props, children) => Element("p", props ? {
  ...props
} : {}, children ? [...children] : []);
const Select = (props, children) => Element("select", props ? {
  ...props
} : {}, children ? [...children] : []);
const Strong = (props, children) => Element("strong", props ? {
  ...props
} : {}, children ? [...children] : []);
const Span = (props, children) => Element("span", props ? {
  ...props
} : {}, children ? [...children] : []);
const Textarea = (props, children) => Element("textarea", props ? {
  ...props
} : {}, children ? [...children] : []);
const Ul = (props, children) => Element("ul", props ? {
  ...props
} : {}, children ? [...children] : []);

/***/ }),

/***/ "./src/page-logic/data/data-page-config.js":
/*!*************************************************!*\
  !*** ./src/page-logic/data/data-page-config.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   githubInfo: () => (/* binding */ githubInfo)
/* harmony export */ });
const githubInfo = {
  repoName: "barcode-generator"
};

/***/ }),

/***/ "./src/page-logic/ui/ui-initial-state.js":
/*!***********************************************!*\
  !*** ./src/page-logic/ui/ui-initial-state.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyInitialState: () => (/* binding */ applyInitialState)
/* harmony export */ });
/* harmony import */ var _ui_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-window */ "./src/page-logic/ui/ui-window.js");
/* harmony import */ var _components_custom_components_ImageCarousel_ui_carousel_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/_custom-components/ImageCarousel/ui/carousel-ui */ "./src/components/_custom-components/ImageCarousel/ui/carousel-ui.js");


function applyInitialState() {
  (0,_ui_window__WEBPACK_IMPORTED_MODULE_0__.applyWindowListeners)();
  if (document.querySelector(".carousel")) {
    (0,_components_custom_components_ImageCarousel_ui_carousel_ui__WEBPACK_IMPORTED_MODULE_1__.clickCarouselPlay)();
  }
}

/***/ }),

/***/ "./src/page-logic/ui/ui-window.js":
/*!****************************************!*\
  !*** ./src/page-logic/ui/ui-window.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyWindowListeners: () => (/* binding */ applyWindowListeners)
/* harmony export */ });
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsbarcode */ "./node_modules/jsbarcode/bin/JsBarcode.js");
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsbarcode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _components_BarcodeGenerator_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/BarcodeGenerator/logic */ "./src/components/BarcodeGenerator/logic.js");
/* harmony import */ var _components_BarcodeGenerator_logic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_BarcodeGenerator_logic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_BarcodeGenerator_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/BarcodeGenerator/ui */ "./src/components/BarcodeGenerator/ui.js");




const breakPoints = {
  xs: 0,
  sm: 480,
  md: 720,
  lg: 960,
  xl: 1200
};
function applyWindowListeners() {
  window.onresize = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.debounce)(function (e) {
    //
  });
  window.onload = () => {
    (0,_components_BarcodeGenerator_ui__WEBPACK_IMPORTED_MODULE_3__.updateBarcodeWidthDisplay)((0,_utils__WEBPACK_IMPORTED_MODULE_1__.getInputValue)((0,_components_BarcodeGenerator_logic__WEBPACK_IMPORTED_MODULE_2__.getBarcodeWidthInput)()));
    (0,_components_BarcodeGenerator_logic__WEBPACK_IMPORTED_MODULE_2__.generateBarcode)();
  };
}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   capitalize: () => (/* binding */ capitalize),
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   generateTestContentArr: () => (/* binding */ generateTestContentArr),
/* harmony export */   getInputValue: () => (/* binding */ getInputValue),
/* harmony export */   getRandomInt: () => (/* binding */ getRandomInt),
/* harmony export */   truncateAndAddEllipse: () => (/* binding */ truncateAndAddEllipse)
/* harmony export */ });
/* harmony import */ var _components_elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/_elements/Elements */ "./src/components/_elements/Elements.js");

const truncateAndAddEllipse = (string, numCharsToKeep) => {
  return string.slice(0, numCharsToKeep).trimEnd() + "...";
};
const debounce = function (fn) {
  // setup a timer
  let timeout;

  // return a function to run debounced
  return function () {
    //setup args

    let context = this;
    let args = arguments;

    // if there is a timer cancel it
    if (timeout) {
      window.cancelAnimationFrame(timeout);
    }

    // setup the new requestAnimationFrame()
    timeout = window.requestAnimationFrame(function () {
      fn.apply(context, args);
    });
  };
};
function capitalize(string) {
  if (string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }
  return string;
}
function generateTestContentArr(numChildren) {
  return Array(numChildren).fill(0).map(elem => (0,_components_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("p", {
    className: "display-b mb-1",
    innerText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ullam ad, maxime enim sequi sunt quo facilis illo eveniet laudantium quae repellendus dolorum omnis minima ducimus architecto! Beatae, vel assumenda."
  }));
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function getInputValue(inputElement) {
  return inputElement.value;
}

/***/ }),

/***/ "./node_modules/jsbarcode/bin/JsBarcode.js":
/*!*************************************************!*\
  !*** ./node_modules/jsbarcode/bin/JsBarcode.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _barcodes = __webpack_require__(/*! ./barcodes/ */ "./node_modules/jsbarcode/bin/barcodes/index.js");

var _barcodes2 = _interopRequireDefault(_barcodes);

var _merge = __webpack_require__(/*! ./help/merge.js */ "./node_modules/jsbarcode/bin/help/merge.js");

var _merge2 = _interopRequireDefault(_merge);

var _linearizeEncodings = __webpack_require__(/*! ./help/linearizeEncodings.js */ "./node_modules/jsbarcode/bin/help/linearizeEncodings.js");

var _linearizeEncodings2 = _interopRequireDefault(_linearizeEncodings);

var _fixOptions = __webpack_require__(/*! ./help/fixOptions.js */ "./node_modules/jsbarcode/bin/help/fixOptions.js");

var _fixOptions2 = _interopRequireDefault(_fixOptions);

var _getRenderProperties = __webpack_require__(/*! ./help/getRenderProperties.js */ "./node_modules/jsbarcode/bin/help/getRenderProperties.js");

var _getRenderProperties2 = _interopRequireDefault(_getRenderProperties);

var _optionsFromStrings = __webpack_require__(/*! ./help/optionsFromStrings.js */ "./node_modules/jsbarcode/bin/help/optionsFromStrings.js");

var _optionsFromStrings2 = _interopRequireDefault(_optionsFromStrings);

var _ErrorHandler = __webpack_require__(/*! ./exceptions/ErrorHandler.js */ "./node_modules/jsbarcode/bin/exceptions/ErrorHandler.js");

var _ErrorHandler2 = _interopRequireDefault(_ErrorHandler);

var _exceptions = __webpack_require__(/*! ./exceptions/exceptions.js */ "./node_modules/jsbarcode/bin/exceptions/exceptions.js");

var _defaults = __webpack_require__(/*! ./options/defaults.js */ "./node_modules/jsbarcode/bin/options/defaults.js");

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The protype of the object returned from the JsBarcode() call


// Help functions
var API = function API() {};

// The first call of the library API
// Will return an object with all barcodes calls and the data that is used
// by the renderers


// Default values


// Exceptions
// Import all the barcodes
var JsBarcode = function JsBarcode(element, text, options) {
	var api = new API();

	if (typeof element === "undefined") {
		throw Error("No element to render on was provided.");
	}

	// Variables that will be pased through the API calls
	api._renderProperties = (0, _getRenderProperties2.default)(element);
	api._encodings = [];
	api._options = _defaults2.default;
	api._errorHandler = new _ErrorHandler2.default(api);

	// If text is set, use the simple syntax (render the barcode directly)
	if (typeof text !== "undefined") {
		options = options || {};

		if (!options.format) {
			options.format = autoSelectBarcode();
		}

		api.options(options)[options.format](text, options).render();
	}

	return api;
};

// To make tests work TODO: remove
JsBarcode.getModule = function (name) {
	return _barcodes2.default[name];
};

// Register all barcodes
for (var name in _barcodes2.default) {
	if (_barcodes2.default.hasOwnProperty(name)) {
		// Security check if the propery is a prototype property
		registerBarcode(_barcodes2.default, name);
	}
}
function registerBarcode(barcodes, name) {
	API.prototype[name] = API.prototype[name.toUpperCase()] = API.prototype[name.toLowerCase()] = function (text, options) {
		var api = this;
		return api._errorHandler.wrapBarcodeCall(function () {
			// Ensure text is options.text
			options.text = typeof options.text === 'undefined' ? undefined : '' + options.text;

			var newOptions = (0, _merge2.default)(api._options, options);
			newOptions = (0, _optionsFromStrings2.default)(newOptions);
			var Encoder = barcodes[name];
			var encoded = encode(text, Encoder, newOptions);
			api._encodings.push(encoded);

			return api;
		});
	};
}

// encode() handles the Encoder call and builds the binary string to be rendered
function encode(text, Encoder, options) {
	// Ensure that text is a string
	text = "" + text;

	var encoder = new Encoder(text, options);

	// If the input is not valid for the encoder, throw error.
	// If the valid callback option is set, call it instead of throwing error
	if (!encoder.valid()) {
		throw new _exceptions.InvalidInputException(encoder.constructor.name, text);
	}

	// Make a request for the binary data (and other infromation) that should be rendered
	var encoded = encoder.encode();

	// Encodings can be nestled like [[1-1, 1-2], 2, [3-1, 3-2]
	// Convert to [1-1, 1-2, 2, 3-1, 3-2]
	encoded = (0, _linearizeEncodings2.default)(encoded);

	// Merge
	for (var i = 0; i < encoded.length; i++) {
		encoded[i].options = (0, _merge2.default)(options, encoded[i].options);
	}

	return encoded;
}

function autoSelectBarcode() {
	// If CODE128 exists. Use it
	if (_barcodes2.default["CODE128"]) {
		return "CODE128";
	}

	// Else, take the first (probably only) barcode
	return Object.keys(_barcodes2.default)[0];
}

// Sets global encoder options
// Added to the api by the JsBarcode function
API.prototype.options = function (options) {
	this._options = (0, _merge2.default)(this._options, options);
	return this;
};

// Will create a blank space (usually in between barcodes)
API.prototype.blank = function (size) {
	var zeroes = new Array(size + 1).join("0");
	this._encodings.push({ data: zeroes });
	return this;
};

// Initialize JsBarcode on all HTML elements defined.
API.prototype.init = function () {
	// Should do nothing if no elements where found
	if (!this._renderProperties) {
		return;
	}

	// Make sure renderProperies is an array
	if (!Array.isArray(this._renderProperties)) {
		this._renderProperties = [this._renderProperties];
	}

	var renderProperty;
	for (var i in this._renderProperties) {
		renderProperty = this._renderProperties[i];
		var options = (0, _merge2.default)(this._options, renderProperty.options);

		if (options.format == "auto") {
			options.format = autoSelectBarcode();
		}

		this._errorHandler.wrapBarcodeCall(function () {
			var text = options.value;
			var Encoder = _barcodes2.default[options.format.toUpperCase()];
			var encoded = encode(text, Encoder, options);

			render(renderProperty, encoded, options);
		});
	}
};

// The render API call. Calls the real render function.
API.prototype.render = function () {
	if (!this._renderProperties) {
		throw new _exceptions.NoElementException();
	}

	if (Array.isArray(this._renderProperties)) {
		for (var i = 0; i < this._renderProperties.length; i++) {
			render(this._renderProperties[i], this._encodings, this._options);
		}
	} else {
		render(this._renderProperties, this._encodings, this._options);
	}

	return this;
};

API.prototype._defaults = _defaults2.default;

// Prepares the encodings and calls the renderer
function render(renderProperties, encodings, options) {
	encodings = (0, _linearizeEncodings2.default)(encodings);

	for (var i = 0; i < encodings.length; i++) {
		encodings[i].options = (0, _merge2.default)(options, encodings[i].options);
		(0, _fixOptions2.default)(encodings[i].options);
	}

	(0, _fixOptions2.default)(options);

	var Renderer = renderProperties.renderer;
	var renderer = new Renderer(renderProperties.element, encodings, options);
	renderer.render();

	if (renderProperties.afterRender) {
		renderProperties.afterRender();
	}
}

// Export to browser
if (typeof window !== "undefined") {
	window.JsBarcode = JsBarcode;
}

// Export to jQuery
/*global jQuery */
if (typeof jQuery !== 'undefined') {
	jQuery.fn.JsBarcode = function (content, options) {
		var elementArray = [];
		jQuery(this).each(function () {
			elementArray.push(this);
		});
		return JsBarcode(elementArray, content, options);
	};
}

// Export to commonJS
module.exports = JsBarcode;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/Barcode.js":
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/Barcode.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Barcode = function Barcode(data, options) {
	_classCallCheck(this, Barcode);

	this.data = data;
	this.text = options.text || data;
	this.options = options;
};

exports["default"] = Barcode;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js":
/*!****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is the master class,
// it does require the start code to be included in the string
var CODE128 = function (_Barcode) {
	_inherits(CODE128, _Barcode);

	function CODE128(data, options) {
		_classCallCheck(this, CODE128);

		// Get array of ascii codes from data
		var _this = _possibleConstructorReturn(this, (CODE128.__proto__ || Object.getPrototypeOf(CODE128)).call(this, data.substring(1), options));

		_this.bytes = data.split('').map(function (char) {
			return char.charCodeAt(0);
		});
		return _this;
	}

	_createClass(CODE128, [{
		key: 'valid',
		value: function valid() {
			// ASCII value ranges 0-127, 200-211
			return (/^[\x00-\x7F\xC8-\xD3]+$/.test(this.data)
			);
		}

		// The public encoding function

	}, {
		key: 'encode',
		value: function encode() {
			var bytes = this.bytes;
			// Remove the start code from the bytes and set its index
			var startIndex = bytes.shift() - 105;
			// Get start set by index
			var startSet = _constants.SET_BY_CODE[startIndex];

			if (startSet === undefined) {
				throw new RangeError('The encoding does not start with a start character.');
			}

			if (this.shouldEncodeAsEan128() === true) {
				bytes.unshift(_constants.FNC1);
			}

			// Start encode with the right type
			var encodingResult = CODE128.next(bytes, 1, startSet);

			return {
				text: this.text === this.data ? this.text.replace(/[^\x20-\x7E]/g, '') : this.text,
				data:
				// Add the start bits
				CODE128.getBar(startIndex) +
				// Add the encoded bits
				encodingResult.result +
				// Add the checksum
				CODE128.getBar((encodingResult.checksum + startIndex) % _constants.MODULO) +
				// Add the end bits
				CODE128.getBar(_constants.STOP)
			};
		}

		// GS1-128/EAN-128

	}, {
		key: 'shouldEncodeAsEan128',
		value: function shouldEncodeAsEan128() {
			var isEAN128 = this.options.ean128 || false;
			if (typeof isEAN128 === 'string') {
				isEAN128 = isEAN128.toLowerCase() === 'true';
			}
			return isEAN128;
		}

		// Get a bar symbol by index

	}], [{
		key: 'getBar',
		value: function getBar(index) {
			return _constants.BARS[index] ? _constants.BARS[index].toString() : '';
		}

		// Correct an index by a set and shift it from the bytes array

	}, {
		key: 'correctIndex',
		value: function correctIndex(bytes, set) {
			if (set === _constants.SET_A) {
				var charCode = bytes.shift();
				return charCode < 32 ? charCode + 64 : charCode - 32;
			} else if (set === _constants.SET_B) {
				return bytes.shift() - 32;
			} else {
				return (bytes.shift() - 48) * 10 + bytes.shift() - 48;
			}
		}
	}, {
		key: 'next',
		value: function next(bytes, pos, set) {
			if (!bytes.length) {
				return { result: '', checksum: 0 };
			}

			var nextCode = void 0,
			    index = void 0;

			// Special characters
			if (bytes[0] >= 200) {
				index = bytes.shift() - 105;
				var nextSet = _constants.SWAP[index];

				// Swap to other set
				if (nextSet !== undefined) {
					nextCode = CODE128.next(bytes, pos + 1, nextSet);
				}
				// Continue on current set but encode a special character
				else {
						// Shift
						if ((set === _constants.SET_A || set === _constants.SET_B) && index === _constants.SHIFT) {
							// Convert the next character so that is encoded correctly
							bytes[0] = set === _constants.SET_A ? bytes[0] > 95 ? bytes[0] - 96 : bytes[0] : bytes[0] < 32 ? bytes[0] + 96 : bytes[0];
						}
						nextCode = CODE128.next(bytes, pos + 1, set);
					}
			}
			// Continue encoding
			else {
					index = CODE128.correctIndex(bytes, set);
					nextCode = CODE128.next(bytes, pos + 1, set);
				}

			// Get the correct binary encoding and calculate the weight
			var enc = CODE128.getBar(index);
			var weight = index * pos;

			return {
				result: enc + nextCode.result,
				checksum: weight + nextCode.checksum
			};
		}
	}]);

	return CODE128;
}(_Barcode3.default);

exports["default"] = CODE128;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128A.js":
/*!*****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128A.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CODE2 = __webpack_require__(/*! ./CODE128.js */ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js");

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128A = function (_CODE) {
	_inherits(CODE128A, _CODE);

	function CODE128A(string, options) {
		_classCallCheck(this, CODE128A);

		return _possibleConstructorReturn(this, (CODE128A.__proto__ || Object.getPrototypeOf(CODE128A)).call(this, _constants.A_START_CHAR + string, options));
	}

	_createClass(CODE128A, [{
		key: 'valid',
		value: function valid() {
			return new RegExp('^' + _constants.A_CHARS + '+$').test(this.data);
		}
	}]);

	return CODE128A;
}(_CODE3.default);

exports["default"] = CODE128A;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128B.js":
/*!*****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128B.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CODE2 = __webpack_require__(/*! ./CODE128.js */ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js");

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128B = function (_CODE) {
	_inherits(CODE128B, _CODE);

	function CODE128B(string, options) {
		_classCallCheck(this, CODE128B);

		return _possibleConstructorReturn(this, (CODE128B.__proto__ || Object.getPrototypeOf(CODE128B)).call(this, _constants.B_START_CHAR + string, options));
	}

	_createClass(CODE128B, [{
		key: 'valid',
		value: function valid() {
			return new RegExp('^' + _constants.B_CHARS + '+$').test(this.data);
		}
	}]);

	return CODE128B;
}(_CODE3.default);

exports["default"] = CODE128B;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128C.js":
/*!*****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128C.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CODE2 = __webpack_require__(/*! ./CODE128.js */ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js");

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128C = function (_CODE) {
	_inherits(CODE128C, _CODE);

	function CODE128C(string, options) {
		_classCallCheck(this, CODE128C);

		return _possibleConstructorReturn(this, (CODE128C.__proto__ || Object.getPrototypeOf(CODE128C)).call(this, _constants.C_START_CHAR + string, options));
	}

	_createClass(CODE128C, [{
		key: 'valid',
		value: function valid() {
			return new RegExp('^' + _constants.C_CHARS + '+$').test(this.data);
		}
	}]);

	return CODE128C;
}(_CODE3.default);

exports["default"] = CODE128C;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128_AUTO.js":
/*!*********************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128_AUTO.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _CODE2 = __webpack_require__(/*! ./CODE128 */ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js");

var _CODE3 = _interopRequireDefault(_CODE2);

var _auto = __webpack_require__(/*! ./auto */ "./node_modules/jsbarcode/bin/barcodes/CODE128/auto.js");

var _auto2 = _interopRequireDefault(_auto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128AUTO = function (_CODE) {
	_inherits(CODE128AUTO, _CODE);

	function CODE128AUTO(data, options) {
		_classCallCheck(this, CODE128AUTO);

		// ASCII value ranges 0-127, 200-211
		if (/^[\x00-\x7F\xC8-\xD3]+$/.test(data)) {
			var _this = _possibleConstructorReturn(this, (CODE128AUTO.__proto__ || Object.getPrototypeOf(CODE128AUTO)).call(this, (0, _auto2.default)(data), options));
		} else {
			var _this = _possibleConstructorReturn(this, (CODE128AUTO.__proto__ || Object.getPrototypeOf(CODE128AUTO)).call(this, data, options));
		}
		return _possibleConstructorReturn(_this);
	}

	return CODE128AUTO;
}(_CODE3.default);

exports["default"] = CODE128AUTO;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE128/auto.js":
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/auto.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js");

// Match Set functions
var matchSetALength = function matchSetALength(string) {
	return string.match(new RegExp('^' + _constants.A_CHARS + '*'))[0].length;
};
var matchSetBLength = function matchSetBLength(string) {
	return string.match(new RegExp('^' + _constants.B_CHARS + '*'))[0].length;
};
var matchSetC = function matchSetC(string) {
	return string.match(new RegExp('^' + _constants.C_CHARS + '*'))[0];
};

// CODE128A or CODE128B
function autoSelectFromAB(string, isA) {
	var ranges = isA ? _constants.A_CHARS : _constants.B_CHARS;
	var untilC = string.match(new RegExp('^(' + ranges + '+?)(([0-9]{2}){2,})([^0-9]|$)'));

	if (untilC) {
		return untilC[1] + String.fromCharCode(204) + autoSelectFromC(string.substring(untilC[1].length));
	}

	var chars = string.match(new RegExp('^' + ranges + '+'))[0];

	if (chars.length === string.length) {
		return string;
	}

	return chars + String.fromCharCode(isA ? 205 : 206) + autoSelectFromAB(string.substring(chars.length), !isA);
}

// CODE128C
function autoSelectFromC(string) {
	var cMatch = matchSetC(string);
	var length = cMatch.length;

	if (length === string.length) {
		return string;
	}

	string = string.substring(length);

	// Select A/B depending on the longest match
	var isA = matchSetALength(string) >= matchSetBLength(string);
	return cMatch + String.fromCharCode(isA ? 206 : 205) + autoSelectFromAB(string, isA);
}

// Detect Code Set (A, B or C) and format the string

exports["default"] = function (string) {
	var newString = void 0;
	var cLength = matchSetC(string).length;

	// Select 128C if the string start with enough digits
	if (cLength >= 2) {
		newString = _constants.C_START_CHAR + autoSelectFromC(string);
	} else {
		// Select A/B depending on the longest match
		var isA = matchSetALength(string) > matchSetBLength(string);
		newString = (isA ? _constants.A_START_CHAR : _constants.B_START_CHAR) + autoSelectFromAB(string, isA);
	}

	return newString.replace(/[\xCD\xCE]([^])[\xCD\xCE]/, // Any sequence between 205 and 206 characters
	function (match, char) {
		return String.fromCharCode(203) + char;
	});
};

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js":
/*!******************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _SET_BY_CODE;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// constants for internal usage
var SET_A = exports.SET_A = 0;
var SET_B = exports.SET_B = 1;
var SET_C = exports.SET_C = 2;

// Special characters
var SHIFT = exports.SHIFT = 98;
var START_A = exports.START_A = 103;
var START_B = exports.START_B = 104;
var START_C = exports.START_C = 105;
var MODULO = exports.MODULO = 103;
var STOP = exports.STOP = 106;
var FNC1 = exports.FNC1 = 207;

// Get set by start code
var SET_BY_CODE = exports.SET_BY_CODE = (_SET_BY_CODE = {}, _defineProperty(_SET_BY_CODE, START_A, SET_A), _defineProperty(_SET_BY_CODE, START_B, SET_B), _defineProperty(_SET_BY_CODE, START_C, SET_C), _SET_BY_CODE);

// Get next set by code
var SWAP = exports.SWAP = {
	101: SET_A,
	100: SET_B,
	99: SET_C
};

var A_START_CHAR = exports.A_START_CHAR = String.fromCharCode(208); // START_A + 105
var B_START_CHAR = exports.B_START_CHAR = String.fromCharCode(209); // START_B + 105
var C_START_CHAR = exports.C_START_CHAR = String.fromCharCode(210); // START_C + 105

// 128A (Code Set A)
// ASCII characters 00 to 95 (0–9, A–Z and control codes), special characters, and FNC 1–4
var A_CHARS = exports.A_CHARS = "[\x00-\x5F\xC8-\xCF]";

// 128B (Code Set B)
// ASCII characters 32 to 127 (0–9, A–Z, a–z), special characters, and FNC 1–4
var B_CHARS = exports.B_CHARS = "[\x20-\x7F\xC8-\xCF]";

// 128C (Code Set C)
// 00–99 (encodes two digits with a single code point) and FNC1
var C_CHARS = exports.C_CHARS = "(\xCF*[0-9]{2}\xCF*)";

// CODE128 includes 107 symbols:
// 103 data symbols, 3 start symbols (A, B and C), and 1 stop symbol (the last one)
// Each symbol consist of three black bars (1) and three white spaces (0).
var BARS = exports.BARS = [11011001100, 11001101100, 11001100110, 10010011000, 10010001100, 10001001100, 10011001000, 10011000100, 10001100100, 11001001000, 11001000100, 11000100100, 10110011100, 10011011100, 10011001110, 10111001100, 10011101100, 10011100110, 11001110010, 11001011100, 11001001110, 11011100100, 11001110100, 11101101110, 11101001100, 11100101100, 11100100110, 11101100100, 11100110100, 11100110010, 11011011000, 11011000110, 11000110110, 10100011000, 10001011000, 10001000110, 10110001000, 10001101000, 10001100010, 11010001000, 11000101000, 11000100010, 10110111000, 10110001110, 10001101110, 10111011000, 10111000110, 10001110110, 11101110110, 11010001110, 11000101110, 11011101000, 11011100010, 11011101110, 11101011000, 11101000110, 11100010110, 11101101000, 11101100010, 11100011010, 11101111010, 11001000010, 11110001010, 10100110000, 10100001100, 10010110000, 10010000110, 10000101100, 10000100110, 10110010000, 10110000100, 10011010000, 10011000010, 10000110100, 10000110010, 11000010010, 11001010000, 11110111010, 11000010100, 10001111010, 10100111100, 10010111100, 10010011110, 10111100100, 10011110100, 10011110010, 11110100100, 11110010100, 11110010010, 11011011110, 11011110110, 11110110110, 10101111000, 10100011110, 10001011110, 10111101000, 10111100010, 11110101000, 11110100010, 10111011110, 10111101110, 11101011110, 11110101110, 11010000100, 11010010000, 11010011100, 1100011101011];

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE128/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CODE128C = exports.CODE128B = exports.CODE128A = exports.CODE128 = undefined;

var _CODE128_AUTO = __webpack_require__(/*! ./CODE128_AUTO.js */ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128_AUTO.js");

var _CODE128_AUTO2 = _interopRequireDefault(_CODE128_AUTO);

var _CODE128A = __webpack_require__(/*! ./CODE128A.js */ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128A.js");

var _CODE128A2 = _interopRequireDefault(_CODE128A);

var _CODE128B = __webpack_require__(/*! ./CODE128B.js */ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128B.js");

var _CODE128B2 = _interopRequireDefault(_CODE128B);

var _CODE128C = __webpack_require__(/*! ./CODE128C.js */ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128C.js");

var _CODE128C2 = _interopRequireDefault(_CODE128C);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CODE128 = _CODE128_AUTO2.default;
exports.CODE128A = _CODE128A2.default;
exports.CODE128B = _CODE128B2.default;
exports.CODE128C = _CODE128C2.default;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE39/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE39/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports.CODE39 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/Code_39#Encoding

var CODE39 = function (_Barcode) {
	_inherits(CODE39, _Barcode);

	function CODE39(data, options) {
		_classCallCheck(this, CODE39);

		data = data.toUpperCase();

		// Calculate mod43 checksum if enabled
		if (options.mod43) {
			data += getCharacter(mod43checksum(data));
		}

		return _possibleConstructorReturn(this, (CODE39.__proto__ || Object.getPrototypeOf(CODE39)).call(this, data, options));
	}

	_createClass(CODE39, [{
		key: "encode",
		value: function encode() {
			// First character is always a *
			var result = getEncoding("*");

			// Take every character and add the binary representation to the result
			for (var i = 0; i < this.data.length; i++) {
				result += getEncoding(this.data[i]) + "0";
			}

			// Last character is always a *
			result += getEncoding("*");

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: "valid",
		value: function valid() {
			return this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/) !== -1;
		}
	}]);

	return CODE39;
}(_Barcode3.default);

// All characters. The position in the array is the (checksum) value


var characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", ".", " ", "$", "/", "+", "%", "*"];

// The decimal representation of the characters, is converted to the
// corresponding binary with the getEncoding function
var encodings = [20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645, 29975, 23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301, 30023, 23879, 30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385, 29015, 18263, 29141, 17879, 29045, 18293, 17783, 29021, 18269, 17477, 17489, 17681, 20753, 35770];

// Get the binary representation of a character by converting the encodings
// from decimal to binary
function getEncoding(character) {
	return getBinary(characterValue(character));
}

function getBinary(characterValue) {
	return encodings[characterValue].toString(2);
}

function getCharacter(characterValue) {
	return characters[characterValue];
}

function characterValue(character) {
	return characters.indexOf(character);
}

function mod43checksum(data) {
	var checksum = 0;
	for (var i = 0; i < data.length; i++) {
		checksum += characterValue(data[i]);
	}

	checksum = checksum % 43;
	return checksum;
}

exports.CODE39 = CODE39;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN.js":
/*!************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js");

var _encoder = __webpack_require__(/*! ./encoder */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js");

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Base class for EAN8 & EAN13
var EAN = function (_Barcode) {
	_inherits(EAN, _Barcode);

	function EAN(data, options) {
		_classCallCheck(this, EAN);

		// Make sure the font is not bigger than the space between the guard bars
		var _this = _possibleConstructorReturn(this, (EAN.__proto__ || Object.getPrototypeOf(EAN)).call(this, data, options));

		_this.fontSize = !options.flat && options.fontSize > options.width * 10 ? options.width * 10 : options.fontSize;

		// Make the guard bars go down half the way of the text
		_this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
		return _this;
	}

	_createClass(EAN, [{
		key: 'encode',
		value: function encode() {
			return this.options.flat ? this.encodeFlat() : this.encodeGuarded();
		}
	}, {
		key: 'leftText',
		value: function leftText(from, to) {
			return this.text.substr(from, to);
		}
	}, {
		key: 'leftEncode',
		value: function leftEncode(data, structure) {
			return (0, _encoder2.default)(data, structure);
		}
	}, {
		key: 'rightText',
		value: function rightText(from, to) {
			return this.text.substr(from, to);
		}
	}, {
		key: 'rightEncode',
		value: function rightEncode(data, structure) {
			return (0, _encoder2.default)(data, structure);
		}
	}, {
		key: 'encodeGuarded',
		value: function encodeGuarded() {
			var textOptions = { fontSize: this.fontSize };
			var guardOptions = { height: this.guardHeight };

			return [{ data: _constants.SIDE_BIN, options: guardOptions }, { data: this.leftEncode(), text: this.leftText(), options: textOptions }, { data: _constants.MIDDLE_BIN, options: guardOptions }, { data: this.rightEncode(), text: this.rightText(), options: textOptions }, { data: _constants.SIDE_BIN, options: guardOptions }];
		}
	}, {
		key: 'encodeFlat',
		value: function encodeFlat() {
			var data = [_constants.SIDE_BIN, this.leftEncode(), _constants.MIDDLE_BIN, this.rightEncode(), _constants.SIDE_BIN];

			return {
				data: data.join(''),
				text: this.text
			};
		}
	}]);

	return EAN;
}(_Barcode3.default);

exports["default"] = EAN;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN13.js":
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN13.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js");

var _EAN2 = __webpack_require__(/*! ./EAN */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN.js");

var _EAN3 = _interopRequireDefault(_EAN2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Binary_encoding_of_data_digits_into_EAN-13_barcode

// Calculate the checksum digit
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Calculation_of_checksum_digit
var checksum = function checksum(number) {
	var res = number.substr(0, 12).split('').map(function (n) {
		return +n;
	}).reduce(function (sum, a, idx) {
		return idx % 2 ? sum + a * 3 : sum + a;
	}, 0);

	return (10 - res % 10) % 10;
};

var EAN13 = function (_EAN) {
	_inherits(EAN13, _EAN);

	function EAN13(data, options) {
		_classCallCheck(this, EAN13);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{12}$/) !== -1) {
			data += checksum(data);
		}

		// Adds a last character to the end of the barcode
		var _this = _possibleConstructorReturn(this, (EAN13.__proto__ || Object.getPrototypeOf(EAN13)).call(this, data, options));

		_this.lastChar = options.lastChar;
		return _this;
	}

	_createClass(EAN13, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{13}$/) !== -1 && +this.data[12] === checksum(this.data);
		}
	}, {
		key: 'leftText',
		value: function leftText() {
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'leftText', this).call(this, 1, 6);
		}
	}, {
		key: 'leftEncode',
		value: function leftEncode() {
			var data = this.data.substr(1, 6);
			var structure = _constants.EAN13_STRUCTURE[this.data[0]];
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'leftEncode', this).call(this, data, structure);
		}
	}, {
		key: 'rightText',
		value: function rightText() {
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'rightText', this).call(this, 7, 6);
		}
	}, {
		key: 'rightEncode',
		value: function rightEncode() {
			var data = this.data.substr(7, 6);
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'rightEncode', this).call(this, data, 'RRRRRR');
		}

		// The "standard" way of printing EAN13 barcodes with guard bars

	}, {
		key: 'encodeGuarded',
		value: function encodeGuarded() {
			var data = _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'encodeGuarded', this).call(this);

			// Extend data with left digit & last character
			if (this.options.displayValue) {
				data.unshift({
					data: '000000000000',
					text: this.text.substr(0, 1),
					options: { textAlign: 'left', fontSize: this.fontSize }
				});

				if (this.options.lastChar) {
					data.push({
						data: '00'
					});
					data.push({
						data: '00000',
						text: this.options.lastChar,
						options: { fontSize: this.fontSize }
					});
				}
			}

			return data;
		}
	}]);

	return EAN13;
}(_EAN3.default);

exports["default"] = EAN13;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN2.js":
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN2.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js");

var _encoder = __webpack_require__(/*! ./encoder */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js");

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/EAN_2#Encoding

var EAN2 = function (_Barcode) {
	_inherits(EAN2, _Barcode);

	function EAN2(data, options) {
		_classCallCheck(this, EAN2);

		return _possibleConstructorReturn(this, (EAN2.__proto__ || Object.getPrototypeOf(EAN2)).call(this, data, options));
	}

	_createClass(EAN2, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{2}$/) !== -1;
		}
	}, {
		key: 'encode',
		value: function encode() {
			// Choose the structure based on the number mod 4
			var structure = _constants.EAN2_STRUCTURE[parseInt(this.data) % 4];
			return {
				// Start bits + Encode the two digits with 01 in between
				data: '1011' + (0, _encoder2.default)(this.data, structure, '01'),
				text: this.text
			};
		}
	}]);

	return EAN2;
}(_Barcode3.default);

exports["default"] = EAN2;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN5.js":
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN5.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js");

var _encoder = __webpack_require__(/*! ./encoder */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js");

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/EAN_5#Encoding

var checksum = function checksum(data) {
	var result = data.split('').map(function (n) {
		return +n;
	}).reduce(function (sum, a, idx) {
		return idx % 2 ? sum + a * 9 : sum + a * 3;
	}, 0);
	return result % 10;
};

var EAN5 = function (_Barcode) {
	_inherits(EAN5, _Barcode);

	function EAN5(data, options) {
		_classCallCheck(this, EAN5);

		return _possibleConstructorReturn(this, (EAN5.__proto__ || Object.getPrototypeOf(EAN5)).call(this, data, options));
	}

	_createClass(EAN5, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{5}$/) !== -1;
		}
	}, {
		key: 'encode',
		value: function encode() {
			var structure = _constants.EAN5_STRUCTURE[checksum(this.data)];
			return {
				data: '1011' + (0, _encoder2.default)(this.data, structure, '01'),
				text: this.text
			};
		}
	}]);

	return EAN5;
}(_Barcode3.default);

exports["default"] = EAN5;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN8.js":
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN8.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _EAN2 = __webpack_require__(/*! ./EAN */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN.js");

var _EAN3 = _interopRequireDefault(_EAN2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// http://www.barcodeisland.com/ean8.phtml

// Calculate the checksum digit
var checksum = function checksum(number) {
	var res = number.substr(0, 7).split('').map(function (n) {
		return +n;
	}).reduce(function (sum, a, idx) {
		return idx % 2 ? sum + a : sum + a * 3;
	}, 0);

	return (10 - res % 10) % 10;
};

var EAN8 = function (_EAN) {
	_inherits(EAN8, _EAN);

	function EAN8(data, options) {
		_classCallCheck(this, EAN8);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{7}$/) !== -1) {
			data += checksum(data);
		}

		return _possibleConstructorReturn(this, (EAN8.__proto__ || Object.getPrototypeOf(EAN8)).call(this, data, options));
	}

	_createClass(EAN8, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{8}$/) !== -1 && +this.data[7] === checksum(this.data);
		}
	}, {
		key: 'leftText',
		value: function leftText() {
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'leftText', this).call(this, 0, 4);
		}
	}, {
		key: 'leftEncode',
		value: function leftEncode() {
			var data = this.data.substr(0, 4);
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'leftEncode', this).call(this, data, 'LLLL');
		}
	}, {
		key: 'rightText',
		value: function rightText() {
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'rightText', this).call(this, 4, 4);
		}
	}, {
		key: 'rightEncode',
		value: function rightEncode() {
			var data = this.data.substr(4, 4);
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'rightEncode', this).call(this, data, 'RRRR');
		}
	}]);

	return EAN8;
}(_EAN3.default);

exports["default"] = EAN8;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC.js":
/*!************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.checksum = checksum;

var _encoder = __webpack_require__(/*! ./encoder */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js");

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#Encoding

var UPC = function (_Barcode) {
	_inherits(UPC, _Barcode);

	function UPC(data, options) {
		_classCallCheck(this, UPC);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{11}$/) !== -1) {
			data += checksum(data);
		}

		var _this = _possibleConstructorReturn(this, (UPC.__proto__ || Object.getPrototypeOf(UPC)).call(this, data, options));

		_this.displayValue = options.displayValue;

		// Make sure the font is not bigger than the space between the guard bars
		if (options.fontSize > options.width * 10) {
			_this.fontSize = options.width * 10;
		} else {
			_this.fontSize = options.fontSize;
		}

		// Make the guard bars go down half the way of the text
		_this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
		return _this;
	}

	_createClass(UPC, [{
		key: "valid",
		value: function valid() {
			return this.data.search(/^[0-9]{12}$/) !== -1 && this.data[11] == checksum(this.data);
		}
	}, {
		key: "encode",
		value: function encode() {
			if (this.options.flat) {
				return this.flatEncoding();
			} else {
				return this.guardedEncoding();
			}
		}
	}, {
		key: "flatEncoding",
		value: function flatEncoding() {
			var result = "";

			result += "101";
			result += (0, _encoder2.default)(this.data.substr(0, 6), "LLLLLL");
			result += "01010";
			result += (0, _encoder2.default)(this.data.substr(6, 6), "RRRRRR");
			result += "101";

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: "guardedEncoding",
		value: function guardedEncoding() {
			var result = [];

			// Add the first digit
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text.substr(0, 1),
					options: { textAlign: "left", fontSize: this.fontSize }
				});
			}

			// Add the guard bars
			result.push({
				data: "101" + (0, _encoder2.default)(this.data[0], "L"),
				options: { height: this.guardHeight }
			});

			// Add the left side
			result.push({
				data: (0, _encoder2.default)(this.data.substr(1, 5), "LLLLL"),
				text: this.text.substr(1, 5),
				options: { fontSize: this.fontSize }
			});

			// Add the middle bits
			result.push({
				data: "01010",
				options: { height: this.guardHeight }
			});

			// Add the right side
			result.push({
				data: (0, _encoder2.default)(this.data.substr(6, 5), "RRRRR"),
				text: this.text.substr(6, 5),
				options: { fontSize: this.fontSize }
			});

			// Add the end bits
			result.push({
				data: (0, _encoder2.default)(this.data[11], "R") + "101",
				options: { height: this.guardHeight }
			});

			// Add the last digit
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text.substr(11, 1),
					options: { textAlign: "right", fontSize: this.fontSize }
				});
			}

			return result;
		}
	}]);

	return UPC;
}(_Barcode3.default);

// Calulate the checksum digit
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Calculation_of_checksum_digit


function checksum(number) {
	var result = 0;

	var i;
	for (i = 1; i < 11; i += 2) {
		result += parseInt(number[i]);
	}
	for (i = 0; i < 11; i += 2) {
		result += parseInt(number[i]) * 3;
	}

	return (10 - result % 10) % 10;
}

exports["default"] = UPC;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPCE.js":
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPCE.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _encoder = __webpack_require__(/*! ./encoder */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js");

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

var _UPC = __webpack_require__(/*! ./UPC.js */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#Encoding
//
// UPC-E documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#UPC-E

var EXPANSIONS = ["XX00000XXX", "XX10000XXX", "XX20000XXX", "XXX00000XX", "XXXX00000X", "XXXXX00005", "XXXXX00006", "XXXXX00007", "XXXXX00008", "XXXXX00009"];

var PARITIES = [["EEEOOO", "OOOEEE"], ["EEOEOO", "OOEOEE"], ["EEOOEO", "OOEEOE"], ["EEOOOE", "OOEEEO"], ["EOEEOO", "OEOOEE"], ["EOOEEO", "OEEOOE"], ["EOOOEE", "OEEEOO"], ["EOEOEO", "OEOEOE"], ["EOEOOE", "OEOEEO"], ["EOOEOE", "OEEOEO"]];

var UPCE = function (_Barcode) {
	_inherits(UPCE, _Barcode);

	function UPCE(data, options) {
		_classCallCheck(this, UPCE);

		var _this = _possibleConstructorReturn(this, (UPCE.__proto__ || Object.getPrototypeOf(UPCE)).call(this, data, options));
		// Code may be 6 or 8 digits;
		// A 7 digit code is ambiguous as to whether the extra digit
		// is a UPC-A check or number system digit.


		_this.isValid = false;
		if (data.search(/^[0-9]{6}$/) !== -1) {
			_this.middleDigits = data;
			_this.upcA = expandToUPCA(data, "0");
			_this.text = options.text || '' + _this.upcA[0] + data + _this.upcA[_this.upcA.length - 1];
			_this.isValid = true;
		} else if (data.search(/^[01][0-9]{7}$/) !== -1) {
			_this.middleDigits = data.substring(1, data.length - 1);
			_this.upcA = expandToUPCA(_this.middleDigits, data[0]);

			if (_this.upcA[_this.upcA.length - 1] === data[data.length - 1]) {
				_this.isValid = true;
			} else {
				// checksum mismatch
				return _possibleConstructorReturn(_this);
			}
		} else {
			return _possibleConstructorReturn(_this);
		}

		_this.displayValue = options.displayValue;

		// Make sure the font is not bigger than the space between the guard bars
		if (options.fontSize > options.width * 10) {
			_this.fontSize = options.width * 10;
		} else {
			_this.fontSize = options.fontSize;
		}

		// Make the guard bars go down half the way of the text
		_this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
		return _this;
	}

	_createClass(UPCE, [{
		key: 'valid',
		value: function valid() {
			return this.isValid;
		}
	}, {
		key: 'encode',
		value: function encode() {
			if (this.options.flat) {
				return this.flatEncoding();
			} else {
				return this.guardedEncoding();
			}
		}
	}, {
		key: 'flatEncoding',
		value: function flatEncoding() {
			var result = "";

			result += "101";
			result += this.encodeMiddleDigits();
			result += "010101";

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: 'guardedEncoding',
		value: function guardedEncoding() {
			var result = [];

			// Add the UPC-A number system digit beneath the quiet zone
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text[0],
					options: { textAlign: "left", fontSize: this.fontSize }
				});
			}

			// Add the guard bars
			result.push({
				data: "101",
				options: { height: this.guardHeight }
			});

			// Add the 6 UPC-E digits
			result.push({
				data: this.encodeMiddleDigits(),
				text: this.text.substring(1, 7),
				options: { fontSize: this.fontSize }
			});

			// Add the end bits
			result.push({
				data: "010101",
				options: { height: this.guardHeight }
			});

			// Add the UPC-A check digit beneath the quiet zone
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text[7],
					options: { textAlign: "right", fontSize: this.fontSize }
				});
			}

			return result;
		}
	}, {
		key: 'encodeMiddleDigits',
		value: function encodeMiddleDigits() {
			var numberSystem = this.upcA[0];
			var checkDigit = this.upcA[this.upcA.length - 1];
			var parity = PARITIES[parseInt(checkDigit)][parseInt(numberSystem)];
			return (0, _encoder2.default)(this.middleDigits, parity);
		}
	}]);

	return UPCE;
}(_Barcode3.default);

function expandToUPCA(middleDigits, numberSystem) {
	var lastUpcE = parseInt(middleDigits[middleDigits.length - 1]);
	var expansion = EXPANSIONS[lastUpcE];

	var result = "";
	var digitIndex = 0;
	for (var i = 0; i < expansion.length; i++) {
		var c = expansion[i];
		if (c === 'X') {
			result += middleDigits[digitIndex++];
		} else {
			result += c;
		}
	}

	result = '' + numberSystem + result;
	return '' + result + (0, _UPC.checksum)(result);
}

exports["default"] = UPCE;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js":
/*!******************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
// Standard start end and middle bits
var SIDE_BIN = exports.SIDE_BIN = '101';
var MIDDLE_BIN = exports.MIDDLE_BIN = '01010';

var BINARIES = exports.BINARIES = {
	'L': [// The L (left) type of encoding
	'0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'],
	'G': [// The G type of encoding
	'0100111', '0110011', '0011011', '0100001', '0011101', '0111001', '0000101', '0010001', '0001001', '0010111'],
	'R': [// The R (right) type of encoding
	'1110010', '1100110', '1101100', '1000010', '1011100', '1001110', '1010000', '1000100', '1001000', '1110100'],
	'O': [// The O (odd) encoding for UPC-E
	'0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'],
	'E': [// The E (even) encoding for UPC-E
	'0100111', '0110011', '0011011', '0100001', '0011101', '0111001', '0000101', '0010001', '0001001', '0010111']
};

// Define the EAN-2 structure
var EAN2_STRUCTURE = exports.EAN2_STRUCTURE = ['LL', 'LG', 'GL', 'GG'];

// Define the EAN-5 structure
var EAN5_STRUCTURE = exports.EAN5_STRUCTURE = ['GGLLL', 'GLGLL', 'GLLGL', 'GLLLG', 'LGGLL', 'LLGGL', 'LLLGG', 'LGLGL', 'LGLLG', 'LLGLG'];

// Define the EAN-13 structure
var EAN13_STRUCTURE = exports.EAN13_STRUCTURE = ['LLLLLL', 'LLGLGG', 'LLGGLG', 'LLGGGL', 'LGLLGG', 'LGGLLG', 'LGGGLL', 'LGLGLG', 'LGLGGL', 'LGGLGL'];

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js":
/*!****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js");

// Encode data string
var encode = function encode(data, structure, separator) {
	var encoded = data.split('').map(function (val, idx) {
		return _constants.BINARIES[structure[idx]];
	}).map(function (val, idx) {
		return val ? val[data[idx]] : '';
	});

	if (separator) {
		var last = data.length - 1;
		encoded = encoded.map(function (val, idx) {
			return idx < last ? val + separator : val;
		});
	}

	return encoded.join('');
};

exports["default"] = encode;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UPCE = exports.UPC = exports.EAN2 = exports.EAN5 = exports.EAN8 = exports.EAN13 = undefined;

var _EAN = __webpack_require__(/*! ./EAN13.js */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN13.js");

var _EAN2 = _interopRequireDefault(_EAN);

var _EAN3 = __webpack_require__(/*! ./EAN8.js */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN8.js");

var _EAN4 = _interopRequireDefault(_EAN3);

var _EAN5 = __webpack_require__(/*! ./EAN5.js */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN5.js");

var _EAN6 = _interopRequireDefault(_EAN5);

var _EAN7 = __webpack_require__(/*! ./EAN2.js */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN2.js");

var _EAN8 = _interopRequireDefault(_EAN7);

var _UPC = __webpack_require__(/*! ./UPC.js */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC.js");

var _UPC2 = _interopRequireDefault(_UPC);

var _UPCE = __webpack_require__(/*! ./UPCE.js */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPCE.js");

var _UPCE2 = _interopRequireDefault(_UPCE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.EAN13 = _EAN2.default;
exports.EAN8 = _EAN4.default;
exports.EAN5 = _EAN6.default;
exports.EAN2 = _EAN8.default;
exports.UPC = _UPC2.default;
exports.UPCE = _UPCE2.default;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/GenericBarcode/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/GenericBarcode/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports.GenericBarcode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GenericBarcode = function (_Barcode) {
	_inherits(GenericBarcode, _Barcode);

	function GenericBarcode(data, options) {
		_classCallCheck(this, GenericBarcode);

		return _possibleConstructorReturn(this, (GenericBarcode.__proto__ || Object.getPrototypeOf(GenericBarcode)).call(this, data, options)); // Sets this.data and this.text
	}

	// Return the corresponding binary numbers for the data provided


	_createClass(GenericBarcode, [{
		key: "encode",
		value: function encode() {
			return {
				data: "10101010101010101010101010101010101010101",
				text: this.text
			};
		}

		// Resturn true/false if the string provided is valid for this encoder

	}, {
		key: "valid",
		value: function valid() {
			return true;
		}
	}]);

	return GenericBarcode;
}(_Barcode3.default);

exports.GenericBarcode = GenericBarcode;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/ITF/ITF.js":
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/ITF/ITF.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/ITF/constants.js");

var _Barcode2 = __webpack_require__(/*! ../Barcode */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ITF = function (_Barcode) {
	_inherits(ITF, _Barcode);

	function ITF() {
		_classCallCheck(this, ITF);

		return _possibleConstructorReturn(this, (ITF.__proto__ || Object.getPrototypeOf(ITF)).apply(this, arguments));
	}

	_createClass(ITF, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^([0-9]{2})+$/) !== -1;
		}
	}, {
		key: 'encode',
		value: function encode() {
			var _this2 = this;

			// Calculate all the digit pairs
			var encoded = this.data.match(/.{2}/g).map(function (pair) {
				return _this2.encodePair(pair);
			}).join('');

			return {
				data: _constants.START_BIN + encoded + _constants.END_BIN,
				text: this.text
			};
		}

		// Calculate the data of a number pair

	}, {
		key: 'encodePair',
		value: function encodePair(pair) {
			var second = _constants.BINARIES[pair[1]];

			return _constants.BINARIES[pair[0]].split('').map(function (first, idx) {
				return (first === '1' ? '111' : '1') + (second[idx] === '1' ? '000' : '0');
			}).join('');
		}
	}]);

	return ITF;
}(_Barcode3.default);

exports["default"] = ITF;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/ITF/ITF14.js":
/*!**********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/ITF/ITF14.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ITF2 = __webpack_require__(/*! ./ITF */ "./node_modules/jsbarcode/bin/barcodes/ITF/ITF.js");

var _ITF3 = _interopRequireDefault(_ITF2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Calculate the checksum digit
var checksum = function checksum(data) {
	var res = data.substr(0, 13).split('').map(function (num) {
		return parseInt(num, 10);
	}).reduce(function (sum, n, idx) {
		return sum + n * (3 - idx % 2 * 2);
	}, 0);

	return Math.ceil(res / 10) * 10 - res;
};

var ITF14 = function (_ITF) {
	_inherits(ITF14, _ITF);

	function ITF14(data, options) {
		_classCallCheck(this, ITF14);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{13}$/) !== -1) {
			data += checksum(data);
		}
		return _possibleConstructorReturn(this, (ITF14.__proto__ || Object.getPrototypeOf(ITF14)).call(this, data, options));
	}

	_createClass(ITF14, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{14}$/) !== -1 && +this.data[13] === checksum(this.data);
		}
	}]);

	return ITF14;
}(_ITF3.default);

exports["default"] = ITF14;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/ITF/constants.js":
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/ITF/constants.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
var START_BIN = exports.START_BIN = '1010';
var END_BIN = exports.END_BIN = '11101';

var BINARIES = exports.BINARIES = ['00110', '10001', '01001', '11000', '00101', '10100', '01100', '00011', '10010', '01010'];

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/ITF/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/ITF/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ITF14 = exports.ITF = undefined;

var _ITF = __webpack_require__(/*! ./ITF */ "./node_modules/jsbarcode/bin/barcodes/ITF/ITF.js");

var _ITF2 = _interopRequireDefault(_ITF);

var _ITF3 = __webpack_require__(/*! ./ITF14 */ "./node_modules/jsbarcode/bin/barcodes/ITF/ITF14.js");

var _ITF4 = _interopRequireDefault(_ITF3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ITF = _ITF2.default;
exports.ITF14 = _ITF4.default;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js":
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation
// https://en.wikipedia.org/wiki/MSI_Barcode#Character_set_and_binary_lookup

var MSI = function (_Barcode) {
	_inherits(MSI, _Barcode);

	function MSI(data, options) {
		_classCallCheck(this, MSI);

		return _possibleConstructorReturn(this, (MSI.__proto__ || Object.getPrototypeOf(MSI)).call(this, data, options));
	}

	_createClass(MSI, [{
		key: "encode",
		value: function encode() {
			// Start bits
			var ret = "110";

			for (var i = 0; i < this.data.length; i++) {
				// Convert the character to binary (always 4 binary digits)
				var digit = parseInt(this.data[i]);
				var bin = digit.toString(2);
				bin = addZeroes(bin, 4 - bin.length);

				// Add 100 for every zero and 110 for every 1
				for (var b = 0; b < bin.length; b++) {
					ret += bin[b] == "0" ? "100" : "110";
				}
			}

			// End bits
			ret += "1001";

			return {
				data: ret,
				text: this.text
			};
		}
	}, {
		key: "valid",
		value: function valid() {
			return this.data.search(/^[0-9]+$/) !== -1;
		}
	}]);

	return MSI;
}(_Barcode3.default);

function addZeroes(number, n) {
	for (var i = 0; i < n; i++) {
		number = "0" + number;
	}
	return number;
}

exports["default"] = MSI;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI10.js":
/*!**********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI10.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _MSI2 = __webpack_require__(/*! ./MSI.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js");

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(/*! ./checksums.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/checksums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI10 = function (_MSI) {
	_inherits(MSI10, _MSI);

	function MSI10(data, options) {
		_classCallCheck(this, MSI10);

		return _possibleConstructorReturn(this, (MSI10.__proto__ || Object.getPrototypeOf(MSI10)).call(this, data + (0, _checksums.mod10)(data), options));
	}

	return MSI10;
}(_MSI3.default);

exports["default"] = MSI10;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI1010.js":
/*!************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI1010.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _MSI2 = __webpack_require__(/*! ./MSI.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js");

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(/*! ./checksums.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/checksums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI1010 = function (_MSI) {
	_inherits(MSI1010, _MSI);

	function MSI1010(data, options) {
		_classCallCheck(this, MSI1010);

		data += (0, _checksums.mod10)(data);
		data += (0, _checksums.mod10)(data);
		return _possibleConstructorReturn(this, (MSI1010.__proto__ || Object.getPrototypeOf(MSI1010)).call(this, data, options));
	}

	return MSI1010;
}(_MSI3.default);

exports["default"] = MSI1010;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI11.js":
/*!**********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI11.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _MSI2 = __webpack_require__(/*! ./MSI.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js");

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(/*! ./checksums.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/checksums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI11 = function (_MSI) {
	_inherits(MSI11, _MSI);

	function MSI11(data, options) {
		_classCallCheck(this, MSI11);

		return _possibleConstructorReturn(this, (MSI11.__proto__ || Object.getPrototypeOf(MSI11)).call(this, data + (0, _checksums.mod11)(data), options));
	}

	return MSI11;
}(_MSI3.default);

exports["default"] = MSI11;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI1110.js":
/*!************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI1110.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _MSI2 = __webpack_require__(/*! ./MSI.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js");

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(/*! ./checksums.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/checksums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI1110 = function (_MSI) {
	_inherits(MSI1110, _MSI);

	function MSI1110(data, options) {
		_classCallCheck(this, MSI1110);

		data += (0, _checksums.mod11)(data);
		data += (0, _checksums.mod10)(data);
		return _possibleConstructorReturn(this, (MSI1110.__proto__ || Object.getPrototypeOf(MSI1110)).call(this, data, options));
	}

	return MSI1110;
}(_MSI3.default);

exports["default"] = MSI1110;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/MSI/checksums.js":
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/checksums.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports.mod10 = mod10;
exports.mod11 = mod11;
function mod10(number) {
	var sum = 0;
	for (var i = 0; i < number.length; i++) {
		var n = parseInt(number[i]);
		if ((i + number.length) % 2 === 0) {
			sum += n;
		} else {
			sum += n * 2 % 10 + Math.floor(n * 2 / 10);
		}
	}
	return (10 - sum % 10) % 10;
}

function mod11(number) {
	var sum = 0;
	var weights = [2, 3, 4, 5, 6, 7];
	for (var i = 0; i < number.length; i++) {
		var n = parseInt(number[number.length - 1 - i]);
		sum += weights[i % weights.length] * n;
	}
	return (11 - sum % 11) % 11;
}

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/MSI/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MSI1110 = exports.MSI1010 = exports.MSI11 = exports.MSI10 = exports.MSI = undefined;

var _MSI = __webpack_require__(/*! ./MSI.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js");

var _MSI2 = _interopRequireDefault(_MSI);

var _MSI3 = __webpack_require__(/*! ./MSI10.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI10.js");

var _MSI4 = _interopRequireDefault(_MSI3);

var _MSI5 = __webpack_require__(/*! ./MSI11.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI11.js");

var _MSI6 = _interopRequireDefault(_MSI5);

var _MSI7 = __webpack_require__(/*! ./MSI1010.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI1010.js");

var _MSI8 = _interopRequireDefault(_MSI7);

var _MSI9 = __webpack_require__(/*! ./MSI1110.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI1110.js");

var _MSI10 = _interopRequireDefault(_MSI9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.MSI = _MSI2.default;
exports.MSI10 = _MSI4.default;
exports.MSI11 = _MSI6.default;
exports.MSI1010 = _MSI8.default;
exports.MSI1110 = _MSI10.default;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/codabar/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/codabar/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports.codabar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding specification:
// http://www.barcodeisland.com/codabar.phtml

var codabar = function (_Barcode) {
	_inherits(codabar, _Barcode);

	function codabar(data, options) {
		_classCallCheck(this, codabar);

		if (data.search(/^[0-9\-\$\:\.\+\/]+$/) === 0) {
			data = "A" + data + "A";
		}

		var _this = _possibleConstructorReturn(this, (codabar.__proto__ || Object.getPrototypeOf(codabar)).call(this, data.toUpperCase(), options));

		_this.text = _this.options.text || _this.text.replace(/[A-D]/g, '');
		return _this;
	}

	_createClass(codabar, [{
		key: "valid",
		value: function valid() {
			return this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/) !== -1;
		}
	}, {
		key: "encode",
		value: function encode() {
			var result = [];
			var encodings = this.getEncodings();
			for (var i = 0; i < this.data.length; i++) {
				result.push(encodings[this.data.charAt(i)]);
				// for all characters except the last, append a narrow-space ("0")
				if (i !== this.data.length - 1) {
					result.push("0");
				}
			}
			return {
				text: this.text,
				data: result.join('')
			};
		}
	}, {
		key: "getEncodings",
		value: function getEncodings() {
			return {
				"0": "101010011",
				"1": "101011001",
				"2": "101001011",
				"3": "110010101",
				"4": "101101001",
				"5": "110101001",
				"6": "100101011",
				"7": "100101101",
				"8": "100110101",
				"9": "110100101",
				"-": "101001101",
				"$": "101100101",
				":": "1101011011",
				"/": "1101101011",
				".": "1101101101",
				"+": "1011011011",
				"A": "1011001001",
				"B": "1001001011",
				"C": "1010010011",
				"D": "1010011001"
			};
		}
	}]);

	return codabar;
}(_Barcode3.default);

exports.codabar = codabar;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/index.js":
/*!******************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _CODE = __webpack_require__(/*! ./CODE39/ */ "./node_modules/jsbarcode/bin/barcodes/CODE39/index.js");

var _CODE2 = __webpack_require__(/*! ./CODE128/ */ "./node_modules/jsbarcode/bin/barcodes/CODE128/index.js");

var _EAN_UPC = __webpack_require__(/*! ./EAN_UPC/ */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/index.js");

var _ITF = __webpack_require__(/*! ./ITF/ */ "./node_modules/jsbarcode/bin/barcodes/ITF/index.js");

var _MSI = __webpack_require__(/*! ./MSI/ */ "./node_modules/jsbarcode/bin/barcodes/MSI/index.js");

var _pharmacode = __webpack_require__(/*! ./pharmacode/ */ "./node_modules/jsbarcode/bin/barcodes/pharmacode/index.js");

var _codabar = __webpack_require__(/*! ./codabar */ "./node_modules/jsbarcode/bin/barcodes/codabar/index.js");

var _GenericBarcode = __webpack_require__(/*! ./GenericBarcode/ */ "./node_modules/jsbarcode/bin/barcodes/GenericBarcode/index.js");

exports["default"] = {
	CODE39: _CODE.CODE39,
	CODE128: _CODE2.CODE128, CODE128A: _CODE2.CODE128A, CODE128B: _CODE2.CODE128B, CODE128C: _CODE2.CODE128C,
	EAN13: _EAN_UPC.EAN13, EAN8: _EAN_UPC.EAN8, EAN5: _EAN_UPC.EAN5, EAN2: _EAN_UPC.EAN2, UPC: _EAN_UPC.UPC, UPCE: _EAN_UPC.UPCE,
	ITF14: _ITF.ITF14,
	ITF: _ITF.ITF,
	MSI: _MSI.MSI, MSI10: _MSI.MSI10, MSI11: _MSI.MSI11, MSI1010: _MSI.MSI1010, MSI1110: _MSI.MSI1110,
	pharmacode: _pharmacode.pharmacode,
	codabar: _codabar.codabar,
	GenericBarcode: _GenericBarcode.GenericBarcode
};

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/pharmacode/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/pharmacode/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports.pharmacode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation
// http://www.gomaro.ch/ftproot/Laetus_PHARMA-CODE.pdf

var pharmacode = function (_Barcode) {
	_inherits(pharmacode, _Barcode);

	function pharmacode(data, options) {
		_classCallCheck(this, pharmacode);

		var _this = _possibleConstructorReturn(this, (pharmacode.__proto__ || Object.getPrototypeOf(pharmacode)).call(this, data, options));

		_this.number = parseInt(data, 10);
		return _this;
	}

	_createClass(pharmacode, [{
		key: "encode",
		value: function encode() {
			var z = this.number;
			var result = "";

			// http://i.imgur.com/RMm4UDJ.png
			// (source: http://www.gomaro.ch/ftproot/Laetus_PHARMA-CODE.pdf, page: 34)
			while (!isNaN(z) && z != 0) {
				if (z % 2 === 0) {
					// Even
					result = "11100" + result;
					z = (z - 2) / 2;
				} else {
					// Odd
					result = "100" + result;
					z = (z - 1) / 2;
				}
			}

			// Remove the two last zeroes
			result = result.slice(0, -2);

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: "valid",
		value: function valid() {
			return this.number >= 3 && this.number <= 131070;
		}
	}]);

	return pharmacode;
}(_Barcode3.default);

exports.pharmacode = pharmacode;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/exceptions/ErrorHandler.js":
/*!***************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/exceptions/ErrorHandler.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*eslint no-console: 0 */

var ErrorHandler = function () {
	function ErrorHandler(api) {
		_classCallCheck(this, ErrorHandler);

		this.api = api;
	}

	_createClass(ErrorHandler, [{
		key: "handleCatch",
		value: function handleCatch(e) {
			// If babel supported extending of Error in a correct way instanceof would be used here
			if (e.name === "InvalidInputException") {
				if (this.api._options.valid !== this.api._defaults.valid) {
					this.api._options.valid(false);
				} else {
					throw e.message;
				}
			} else {
				throw e;
			}

			this.api.render = function () {};
		}
	}, {
		key: "wrapBarcodeCall",
		value: function wrapBarcodeCall(func) {
			try {
				var result = func.apply(undefined, arguments);
				this.api._options.valid(true);
				return result;
			} catch (e) {
				this.handleCatch(e);

				return this.api;
			}
		}
	}]);

	return ErrorHandler;
}();

exports["default"] = ErrorHandler;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/exceptions/exceptions.js":
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/exceptions/exceptions.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InvalidInputException = function (_Error) {
	_inherits(InvalidInputException, _Error);

	function InvalidInputException(symbology, input) {
		_classCallCheck(this, InvalidInputException);

		var _this = _possibleConstructorReturn(this, (InvalidInputException.__proto__ || Object.getPrototypeOf(InvalidInputException)).call(this));

		_this.name = "InvalidInputException";

		_this.symbology = symbology;
		_this.input = input;

		_this.message = '"' + _this.input + '" is not a valid input for ' + _this.symbology;
		return _this;
	}

	return InvalidInputException;
}(Error);

var InvalidElementException = function (_Error2) {
	_inherits(InvalidElementException, _Error2);

	function InvalidElementException() {
		_classCallCheck(this, InvalidElementException);

		var _this2 = _possibleConstructorReturn(this, (InvalidElementException.__proto__ || Object.getPrototypeOf(InvalidElementException)).call(this));

		_this2.name = "InvalidElementException";
		_this2.message = "Not supported type to render on";
		return _this2;
	}

	return InvalidElementException;
}(Error);

var NoElementException = function (_Error3) {
	_inherits(NoElementException, _Error3);

	function NoElementException() {
		_classCallCheck(this, NoElementException);

		var _this3 = _possibleConstructorReturn(this, (NoElementException.__proto__ || Object.getPrototypeOf(NoElementException)).call(this));

		_this3.name = "NoElementException";
		_this3.message = "No element to render on.";
		return _this3;
	}

	return NoElementException;
}(Error);

exports.InvalidInputException = InvalidInputException;
exports.InvalidElementException = InvalidElementException;
exports.NoElementException = NoElementException;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/help/fixOptions.js":
/*!*******************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/fixOptions.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports["default"] = fixOptions;


function fixOptions(options) {
	// Fix the margins
	options.marginTop = options.marginTop || options.margin;
	options.marginBottom = options.marginBottom || options.margin;
	options.marginRight = options.marginRight || options.margin;
	options.marginLeft = options.marginLeft || options.margin;

	return options;
}

/***/ }),

/***/ "./node_modules/jsbarcode/bin/help/getOptionsFromElement.js":
/*!******************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/getOptionsFromElement.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _optionsFromStrings = __webpack_require__(/*! ./optionsFromStrings.js */ "./node_modules/jsbarcode/bin/help/optionsFromStrings.js");

var _optionsFromStrings2 = _interopRequireDefault(_optionsFromStrings);

var _defaults = __webpack_require__(/*! ../options/defaults.js */ "./node_modules/jsbarcode/bin/options/defaults.js");

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getOptionsFromElement(element) {
	var options = {};
	for (var property in _defaults2.default) {
		if (_defaults2.default.hasOwnProperty(property)) {
			// jsbarcode-*
			if (element.hasAttribute("jsbarcode-" + property.toLowerCase())) {
				options[property] = element.getAttribute("jsbarcode-" + property.toLowerCase());
			}

			// data-*
			if (element.hasAttribute("data-" + property.toLowerCase())) {
				options[property] = element.getAttribute("data-" + property.toLowerCase());
			}
		}
	}

	options["value"] = element.getAttribute("jsbarcode-value") || element.getAttribute("data-value");

	// Since all atributes are string they need to be converted to integers
	options = (0, _optionsFromStrings2.default)(options);

	return options;
}

exports["default"] = getOptionsFromElement;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/help/getRenderProperties.js":
/*!****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/getRenderProperties.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* global HTMLImageElement */
/* global HTMLCanvasElement */
/* global SVGElement */

var _getOptionsFromElement = __webpack_require__(/*! ./getOptionsFromElement.js */ "./node_modules/jsbarcode/bin/help/getOptionsFromElement.js");

var _getOptionsFromElement2 = _interopRequireDefault(_getOptionsFromElement);

var _renderers = __webpack_require__(/*! ../renderers */ "./node_modules/jsbarcode/bin/renderers/index.js");

var _renderers2 = _interopRequireDefault(_renderers);

var _exceptions = __webpack_require__(/*! ../exceptions/exceptions.js */ "./node_modules/jsbarcode/bin/exceptions/exceptions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Takes an element and returns an object with information about how
// it should be rendered
// This could also return an array with these objects
// {
//   element: The element that the renderer should draw on
//   renderer: The name of the renderer
//   afterRender (optional): If something has to done after the renderer
//     completed, calls afterRender (function)
//   options (optional): Options that can be defined in the element
// }

function getRenderProperties(element) {
	// If the element is a string, query select call again
	if (typeof element === "string") {
		return querySelectedRenderProperties(element);
	}
	// If element is array. Recursivly call with every object in the array
	else if (Array.isArray(element)) {
			var returnArray = [];
			for (var i = 0; i < element.length; i++) {
				returnArray.push(getRenderProperties(element[i]));
			}
			return returnArray;
		}
		// If element, render on canvas and set the uri as src
		else if (typeof HTMLCanvasElement !== 'undefined' && element instanceof HTMLImageElement) {
				return newCanvasRenderProperties(element);
			}
			// If SVG
			else if (element && element.nodeName && element.nodeName.toLowerCase() === 'svg' || typeof SVGElement !== 'undefined' && element instanceof SVGElement) {
					return {
						element: element,
						options: (0, _getOptionsFromElement2.default)(element),
						renderer: _renderers2.default.SVGRenderer
					};
				}
				// If canvas (in browser)
				else if (typeof HTMLCanvasElement !== 'undefined' && element instanceof HTMLCanvasElement) {
						return {
							element: element,
							options: (0, _getOptionsFromElement2.default)(element),
							renderer: _renderers2.default.CanvasRenderer
						};
					}
					// If canvas (in node)
					else if (element && element.getContext) {
							return {
								element: element,
								renderer: _renderers2.default.CanvasRenderer
							};
						} else if (element && (typeof element === "undefined" ? "undefined" : _typeof(element)) === 'object' && !element.nodeName) {
							return {
								element: element,
								renderer: _renderers2.default.ObjectRenderer
							};
						} else {
							throw new _exceptions.InvalidElementException();
						}
}

function querySelectedRenderProperties(string) {
	var selector = document.querySelectorAll(string);
	if (selector.length === 0) {
		return undefined;
	} else {
		var returnArray = [];
		for (var i = 0; i < selector.length; i++) {
			returnArray.push(getRenderProperties(selector[i]));
		}
		return returnArray;
	}
}

function newCanvasRenderProperties(imgElement) {
	var canvas = document.createElement('canvas');
	return {
		element: canvas,
		options: (0, _getOptionsFromElement2.default)(imgElement),
		renderer: _renderers2.default.CanvasRenderer,
		afterRender: function afterRender() {
			imgElement.setAttribute("src", canvas.toDataURL());
		}
	};
}

exports["default"] = getRenderProperties;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/help/linearizeEncodings.js":
/*!***************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/linearizeEncodings.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports["default"] = linearizeEncodings;

// Encodings can be nestled like [[1-1, 1-2], 2, [3-1, 3-2]
// Convert to [1-1, 1-2, 2, 3-1, 3-2]

function linearizeEncodings(encodings) {
	var linearEncodings = [];
	function nextLevel(encoded) {
		if (Array.isArray(encoded)) {
			for (var i = 0; i < encoded.length; i++) {
				nextLevel(encoded[i]);
			}
		} else {
			encoded.text = encoded.text || "";
			encoded.data = encoded.data || "";
			linearEncodings.push(encoded);
		}
	}
	nextLevel(encodings);

	return linearEncodings;
}

/***/ }),

/***/ "./node_modules/jsbarcode/bin/help/merge.js":
/*!**************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/merge.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = function (old, replaceObj) {
  return _extends({}, old, replaceObj);
};

/***/ }),

/***/ "./node_modules/jsbarcode/bin/help/optionsFromStrings.js":
/*!***************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/optionsFromStrings.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports["default"] = optionsFromStrings;

// Convert string to integers/booleans where it should be

function optionsFromStrings(options) {
	var intOptions = ["width", "height", "textMargin", "fontSize", "margin", "marginTop", "marginBottom", "marginLeft", "marginRight"];

	for (var intOption in intOptions) {
		if (intOptions.hasOwnProperty(intOption)) {
			intOption = intOptions[intOption];
			if (typeof options[intOption] === "string") {
				options[intOption] = parseInt(options[intOption], 10);
			}
		}
	}

	if (typeof options["displayValue"] === "string") {
		options["displayValue"] = options["displayValue"] != "false";
	}

	return options;
}

/***/ }),

/***/ "./node_modules/jsbarcode/bin/options/defaults.js":
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/options/defaults.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
var defaults = {
	width: 2,
	height: 100,
	format: "auto",
	displayValue: true,
	fontOptions: "",
	font: "monospace",
	text: undefined,
	textAlign: "center",
	textPosition: "bottom",
	textMargin: 2,
	fontSize: 20,
	background: "#ffffff",
	lineColor: "#000000",
	margin: 10,
	marginTop: undefined,
	marginBottom: undefined,
	marginLeft: undefined,
	marginRight: undefined,
	valid: function valid() {}
};

exports["default"] = defaults;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/renderers/canvas.js":
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/renderers/canvas.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _merge = __webpack_require__(/*! ../help/merge.js */ "./node_modules/jsbarcode/bin/help/merge.js");

var _merge2 = _interopRequireDefault(_merge);

var _shared = __webpack_require__(/*! ./shared.js */ "./node_modules/jsbarcode/bin/renderers/shared.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasRenderer = function () {
	function CanvasRenderer(canvas, encodings, options) {
		_classCallCheck(this, CanvasRenderer);

		this.canvas = canvas;
		this.encodings = encodings;
		this.options = options;
	}

	_createClass(CanvasRenderer, [{
		key: "render",
		value: function render() {
			// Abort if the browser does not support HTML5 canvas
			if (!this.canvas.getContext) {
				throw new Error('The browser does not support canvas.');
			}

			this.prepareCanvas();
			for (var i = 0; i < this.encodings.length; i++) {
				var encodingOptions = (0, _merge2.default)(this.options, this.encodings[i].options);

				this.drawCanvasBarcode(encodingOptions, this.encodings[i]);
				this.drawCanvasText(encodingOptions, this.encodings[i]);

				this.moveCanvasDrawing(this.encodings[i]);
			}

			this.restoreCanvas();
		}
	}, {
		key: "prepareCanvas",
		value: function prepareCanvas() {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			ctx.save();

			(0, _shared.calculateEncodingAttributes)(this.encodings, this.options, ctx);
			var totalWidth = (0, _shared.getTotalWidthOfEncodings)(this.encodings);
			var maxHeight = (0, _shared.getMaximumHeightOfEncodings)(this.encodings);

			this.canvas.width = totalWidth + this.options.marginLeft + this.options.marginRight;

			this.canvas.height = maxHeight;

			// Paint the canvas
			ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			if (this.options.background) {
				ctx.fillStyle = this.options.background;
				ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
			}

			ctx.translate(this.options.marginLeft, 0);
		}
	}, {
		key: "drawCanvasBarcode",
		value: function drawCanvasBarcode(options, encoding) {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			var binary = encoding.data;

			// Creates the barcode out of the encoded binary
			var yFrom;
			if (options.textPosition == "top") {
				yFrom = options.marginTop + options.fontSize + options.textMargin;
			} else {
				yFrom = options.marginTop;
			}

			ctx.fillStyle = options.lineColor;

			for (var b = 0; b < binary.length; b++) {
				var x = b * options.width + encoding.barcodePadding;

				if (binary[b] === "1") {
					ctx.fillRect(x, yFrom, options.width, options.height);
				} else if (binary[b]) {
					ctx.fillRect(x, yFrom, options.width, options.height * binary[b]);
				}
			}
		}
	}, {
		key: "drawCanvasText",
		value: function drawCanvasText(options, encoding) {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			var font = options.fontOptions + " " + options.fontSize + "px " + options.font;

			// Draw the text if displayValue is set
			if (options.displayValue) {
				var x, y;

				if (options.textPosition == "top") {
					y = options.marginTop + options.fontSize - options.textMargin;
				} else {
					y = options.height + options.textMargin + options.marginTop + options.fontSize;
				}

				ctx.font = font;

				// Draw the text in the correct X depending on the textAlign option
				if (options.textAlign == "left" || encoding.barcodePadding > 0) {
					x = 0;
					ctx.textAlign = 'left';
				} else if (options.textAlign == "right") {
					x = encoding.width - 1;
					ctx.textAlign = 'right';
				}
				// In all other cases, center the text
				else {
						x = encoding.width / 2;
						ctx.textAlign = 'center';
					}

				ctx.fillText(encoding.text, x, y);
			}
		}
	}, {
		key: "moveCanvasDrawing",
		value: function moveCanvasDrawing(encoding) {
			var ctx = this.canvas.getContext("2d");

			ctx.translate(encoding.width, 0);
		}
	}, {
		key: "restoreCanvas",
		value: function restoreCanvas() {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			ctx.restore();
		}
	}]);

	return CanvasRenderer;
}();

exports["default"] = CanvasRenderer;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/renderers/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/jsbarcode/bin/renderers/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _canvas = __webpack_require__(/*! ./canvas.js */ "./node_modules/jsbarcode/bin/renderers/canvas.js");

var _canvas2 = _interopRequireDefault(_canvas);

var _svg = __webpack_require__(/*! ./svg.js */ "./node_modules/jsbarcode/bin/renderers/svg.js");

var _svg2 = _interopRequireDefault(_svg);

var _object = __webpack_require__(/*! ./object.js */ "./node_modules/jsbarcode/bin/renderers/object.js");

var _object2 = _interopRequireDefault(_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports["default"] = { CanvasRenderer: _canvas2.default, SVGRenderer: _svg2.default, ObjectRenderer: _object2.default };

/***/ }),

/***/ "./node_modules/jsbarcode/bin/renderers/object.js":
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/renderers/object.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectRenderer = function () {
	function ObjectRenderer(object, encodings, options) {
		_classCallCheck(this, ObjectRenderer);

		this.object = object;
		this.encodings = encodings;
		this.options = options;
	}

	_createClass(ObjectRenderer, [{
		key: "render",
		value: function render() {
			this.object.encodings = this.encodings;
		}
	}]);

	return ObjectRenderer;
}();

exports["default"] = ObjectRenderer;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/renderers/shared.js":
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/renderers/shared.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports.getTotalWidthOfEncodings = exports.calculateEncodingAttributes = exports.getBarcodePadding = exports.getEncodingHeight = exports.getMaximumHeightOfEncodings = undefined;

var _merge = __webpack_require__(/*! ../help/merge.js */ "./node_modules/jsbarcode/bin/help/merge.js");

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getEncodingHeight(encoding, options) {
	return options.height + (options.displayValue && encoding.text.length > 0 ? options.fontSize + options.textMargin : 0) + options.marginTop + options.marginBottom;
}

function getBarcodePadding(textWidth, barcodeWidth, options) {
	if (options.displayValue && barcodeWidth < textWidth) {
		if (options.textAlign == "center") {
			return Math.floor((textWidth - barcodeWidth) / 2);
		} else if (options.textAlign == "left") {
			return 0;
		} else if (options.textAlign == "right") {
			return Math.floor(textWidth - barcodeWidth);
		}
	}
	return 0;
}

function calculateEncodingAttributes(encodings, barcodeOptions, context) {
	for (var i = 0; i < encodings.length; i++) {
		var encoding = encodings[i];
		var options = (0, _merge2.default)(barcodeOptions, encoding.options);

		// Calculate the width of the encoding
		var textWidth;
		if (options.displayValue) {
			textWidth = messureText(encoding.text, options, context);
		} else {
			textWidth = 0;
		}

		var barcodeWidth = encoding.data.length * options.width;
		encoding.width = Math.ceil(Math.max(textWidth, barcodeWidth));

		encoding.height = getEncodingHeight(encoding, options);

		encoding.barcodePadding = getBarcodePadding(textWidth, barcodeWidth, options);
	}
}

function getTotalWidthOfEncodings(encodings) {
	var totalWidth = 0;
	for (var i = 0; i < encodings.length; i++) {
		totalWidth += encodings[i].width;
	}
	return totalWidth;
}

function getMaximumHeightOfEncodings(encodings) {
	var maxHeight = 0;
	for (var i = 0; i < encodings.length; i++) {
		if (encodings[i].height > maxHeight) {
			maxHeight = encodings[i].height;
		}
	}
	return maxHeight;
}

function messureText(string, options, context) {
	var ctx;

	if (context) {
		ctx = context;
	} else if (typeof document !== "undefined") {
		ctx = document.createElement("canvas").getContext("2d");
	} else {
		// If the text cannot be messured we will return 0.
		// This will make some barcode with big text render incorrectly
		return 0;
	}
	ctx.font = options.fontOptions + " " + options.fontSize + "px " + options.font;

	// Calculate the width of the encoding
	var measureTextResult = ctx.measureText(string);
	if (!measureTextResult) {
		// Some implementations don't implement measureText and return undefined.
		// If the text cannot be measured we will return 0.
		// This will make some barcode with big text render incorrectly
		return 0;
	}
	var size = measureTextResult.width;
	return size;
}

exports.getMaximumHeightOfEncodings = getMaximumHeightOfEncodings;
exports.getEncodingHeight = getEncodingHeight;
exports.getBarcodePadding = getBarcodePadding;
exports.calculateEncodingAttributes = calculateEncodingAttributes;
exports.getTotalWidthOfEncodings = getTotalWidthOfEncodings;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/renderers/svg.js":
/*!*****************************************************!*\
  !*** ./node_modules/jsbarcode/bin/renderers/svg.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _merge = __webpack_require__(/*! ../help/merge.js */ "./node_modules/jsbarcode/bin/help/merge.js");

var _merge2 = _interopRequireDefault(_merge);

var _shared = __webpack_require__(/*! ./shared.js */ "./node_modules/jsbarcode/bin/renderers/shared.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var svgns = "http://www.w3.org/2000/svg";

var SVGRenderer = function () {
	function SVGRenderer(svg, encodings, options) {
		_classCallCheck(this, SVGRenderer);

		this.svg = svg;
		this.encodings = encodings;
		this.options = options;
		this.document = options.xmlDocument || document;
	}

	_createClass(SVGRenderer, [{
		key: "render",
		value: function render() {
			var currentX = this.options.marginLeft;

			this.prepareSVG();
			for (var i = 0; i < this.encodings.length; i++) {
				var encoding = this.encodings[i];
				var encodingOptions = (0, _merge2.default)(this.options, encoding.options);

				var group = this.createGroup(currentX, encodingOptions.marginTop, this.svg);

				this.setGroupOptions(group, encodingOptions);

				this.drawSvgBarcode(group, encodingOptions, encoding);
				this.drawSVGText(group, encodingOptions, encoding);

				currentX += encoding.width;
			}
		}
	}, {
		key: "prepareSVG",
		value: function prepareSVG() {
			// Clear the SVG
			while (this.svg.firstChild) {
				this.svg.removeChild(this.svg.firstChild);
			}

			(0, _shared.calculateEncodingAttributes)(this.encodings, this.options);
			var totalWidth = (0, _shared.getTotalWidthOfEncodings)(this.encodings);
			var maxHeight = (0, _shared.getMaximumHeightOfEncodings)(this.encodings);

			var width = totalWidth + this.options.marginLeft + this.options.marginRight;
			this.setSvgAttributes(width, maxHeight);

			if (this.options.background) {
				this.drawRect(0, 0, width, maxHeight, this.svg).setAttribute("style", "fill:" + this.options.background + ";");
			}
		}
	}, {
		key: "drawSvgBarcode",
		value: function drawSvgBarcode(parent, options, encoding) {
			var binary = encoding.data;

			// Creates the barcode out of the encoded binary
			var yFrom;
			if (options.textPosition == "top") {
				yFrom = options.fontSize + options.textMargin;
			} else {
				yFrom = 0;
			}

			var barWidth = 0;
			var x = 0;
			for (var b = 0; b < binary.length; b++) {
				x = b * options.width + encoding.barcodePadding;

				if (binary[b] === "1") {
					barWidth++;
				} else if (barWidth > 0) {
					this.drawRect(x - options.width * barWidth, yFrom, options.width * barWidth, options.height, parent);
					barWidth = 0;
				}
			}

			// Last draw is needed since the barcode ends with 1
			if (barWidth > 0) {
				this.drawRect(x - options.width * (barWidth - 1), yFrom, options.width * barWidth, options.height, parent);
			}
		}
	}, {
		key: "drawSVGText",
		value: function drawSVGText(parent, options, encoding) {
			var textElem = this.document.createElementNS(svgns, 'text');

			// Draw the text if displayValue is set
			if (options.displayValue) {
				var x, y;

				textElem.setAttribute("style", "font:" + options.fontOptions + " " + options.fontSize + "px " + options.font);

				if (options.textPosition == "top") {
					y = options.fontSize - options.textMargin;
				} else {
					y = options.height + options.textMargin + options.fontSize;
				}

				// Draw the text in the correct X depending on the textAlign option
				if (options.textAlign == "left" || encoding.barcodePadding > 0) {
					x = 0;
					textElem.setAttribute("text-anchor", "start");
				} else if (options.textAlign == "right") {
					x = encoding.width - 1;
					textElem.setAttribute("text-anchor", "end");
				}
				// In all other cases, center the text
				else {
						x = encoding.width / 2;
						textElem.setAttribute("text-anchor", "middle");
					}

				textElem.setAttribute("x", x);
				textElem.setAttribute("y", y);

				textElem.appendChild(this.document.createTextNode(encoding.text));

				parent.appendChild(textElem);
			}
		}
	}, {
		key: "setSvgAttributes",
		value: function setSvgAttributes(width, height) {
			var svg = this.svg;
			svg.setAttribute("width", width + "px");
			svg.setAttribute("height", height + "px");
			svg.setAttribute("x", "0px");
			svg.setAttribute("y", "0px");
			svg.setAttribute("viewBox", "0 0 " + width + " " + height);

			svg.setAttribute("xmlns", svgns);
			svg.setAttribute("version", "1.1");

			svg.setAttribute("style", "transform: translate(0,0)");
		}
	}, {
		key: "createGroup",
		value: function createGroup(x, y, parent) {
			var group = this.document.createElementNS(svgns, 'g');
			group.setAttribute("transform", "translate(" + x + ", " + y + ")");

			parent.appendChild(group);

			return group;
		}
	}, {
		key: "setGroupOptions",
		value: function setGroupOptions(group, options) {
			group.setAttribute("style", "fill:" + options.lineColor + ";");
		}
	}, {
		key: "drawRect",
		value: function drawRect(x, y, width, height, parent) {
			var rect = this.document.createElementNS(svgns, 'rect');

			rect.setAttribute("x", x);
			rect.setAttribute("y", y);
			rect.setAttribute("width", width);
			rect.setAttribute("height", height);

			parent.appendChild(rect);

			return rect;
		}
	}]);

	return SVGRenderer;
}();

exports["default"] = SVGRenderer;

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _components_Content_Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Content/Content */ "./src/components/Content/Content.js");
/* harmony import */ var _page_logic_ui_ui_initial_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-logic/ui/ui-initial-state */ "./src/page-logic/ui/ui-initial-state.js");



document.body.appendChild((0,_components_Content_Content__WEBPACK_IMPORTED_MODULE_1__["default"])());
(0,_page_logic_ui_ui_initial_state__WEBPACK_IMPORTED_MODULE_2__.applyInitialState)();

// debugging
const debugging = true;
if (debugging) {
  //
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L3NyYy9jb21wb25lbnRzL0JhcmNvZGVHZW5lcmF0b3IvQmFyY29kZS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0JhcmNvZGVHZW5lcmF0b3IvQmFyY29kZUZvcm0uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9CYXJjb2RlR2VuZXJhdG9yL0JhcmNvZGVHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9CYXJjb2RlR2VuZXJhdG9yL0JhcmNvZGVUZXh0SW5wdXQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9CYXJjb2RlR2VuZXJhdG9yL0JhcmNvZGVXSWR0aElucHV0LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQmFyY29kZUdlbmVyYXRvci9HZW5lcmF0ZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0JhcmNvZGVHZW5lcmF0b3IvdWkuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9Db250ZW50L0NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9EeW5hbWljRm9vdGVyL0NvcHlyaWdodENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0R5bmFtaWNGb290ZXIvRHluYW1pY0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0R5bmFtaWNGb290ZXIvU2l0ZUF0dHJpYnV0aW9ucy9BdHRyaWJ1dGlvbnNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9EeW5hbWljRm9vdGVyL1NpdGVBdHRyaWJ1dGlvbnMvSWNvbnNFeHBsYW5hdGlvbi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0R5bmFtaWNGb290ZXIvVE9QTGlua0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9NYWluU2VjdGlvbi9NYWluU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9FeHBhbmRhYmxlUGFuZWwvRXhwYW5kYWJsZVBhbmVsLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0V4cGFuZGFibGVQYW5lbC9FeHBhbmRhYmxlUGFuZWxDb250ZW50LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0V4cGFuZGFibGVQYW5lbC9FeHBhbmRhYmxlUGFuZWxUaXRsZS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9FeHBhbmRhYmxlUGFuZWwvTm9uRXhwYW5kYWJsZVBhbmVsLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0ljb24uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvSW1hZ2VDYXJvdXNlbC91aS9jYXJvdXNlbC11aS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19lbGVtZW50cy9FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9wYWdlLWxvZ2ljL2RhdGEvZGF0YS1wYWdlLWNvbmZpZy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9wYWdlLWxvZ2ljL3VpL3VpLWluaXRpYWwtc3RhdGUuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvcGFnZS1sb2dpYy91aS91aS13aW5kb3cuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9Kc0JhcmNvZGUuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9CYXJjb2RlLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvQ09ERTEyOC9DT0RFMTI4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvQ09ERTEyOC9DT0RFMTI4QS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL0NPREUxMjgvQ09ERTEyOEIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9DT0RFMTI4L0NPREUxMjhDLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvQ09ERTEyOC9DT0RFMTI4X0FVVE8uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9DT0RFMTI4L2F1dG8uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9DT0RFMTI4L2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL0NPREUxMjgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9DT0RFMzkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9FQU5fVVBDL0VBTi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL0VBTl9VUEMvRUFOMTMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9FQU5fVVBDL0VBTjIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9FQU5fVVBDL0VBTjUuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9FQU5fVVBDL0VBTjguanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9FQU5fVVBDL1VQQy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL0VBTl9VUEMvVVBDRS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL0VBTl9VUEMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvRUFOX1VQQy9lbmNvZGVyLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvRUFOX1VQQy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL0dlbmVyaWNCYXJjb2RlL2luZGV4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvSVRGL0lURi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL0lURi9JVEYxNC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL0lURi9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9JVEYvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9NU0kvTVNJLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvTVNJL01TSTEwLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvTVNJL01TSTEwMTAuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9NU0kvTVNJMTEuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9NU0kvTVNJMTExMC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL01TSS9jaGVja3N1bXMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9NU0kvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9jb2RhYmFyL2luZGV4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9waGFybWFjb2RlL2luZGV4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vZXhjZXB0aW9ucy9FcnJvckhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9leGNlcHRpb25zL2V4Y2VwdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9oZWxwL2ZpeE9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9oZWxwL2dldE9wdGlvbnNGcm9tRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2hlbHAvZ2V0UmVuZGVyUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2hlbHAvbGluZWFyaXplRW5jb2RpbmdzLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vaGVscC9tZXJnZS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2hlbHAvb3B0aW9uc0Zyb21TdHJpbmdzLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vb3B0aW9ucy9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL3JlbmRlcmVycy9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9yZW5kZXJlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9yZW5kZXJlcnMvb2JqZWN0LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vcmVuZGVyZXJzL3NoYXJlZC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL3JlbmRlcmVycy9zdmcuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYsIEltZyB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEJhcmNvZGUgPSAoKSA9PiB7XG4gIC8vXG5cbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdihcbiAgICB7IGlubmVyVGV4dDogYGAsIGNsYXNzTmFtZTogYGAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW0ltZyh7IGlkOiBcImJhcmNvZGVcIiB9KV1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXJjb2RlO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgR2VuZXJhdGVCdXR0b24gZnJvbSBcIi4vR2VuZXJhdGVCdXR0b25cIjtcbmltcG9ydCBCYXJjb2RlVGV4dElucHV0IGZyb20gXCIuL0JhcmNvZGVUZXh0SW5wdXRcIjtcbmltcG9ydCB7IGdldElucHV0VmFsdWUgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7XG4gIGdldEJhcmNvZGVUZXh0SW5wdXQsXG4gIGdlbmVyYXRlQmFyY29kZSxcbiAgZ2V0QmFyY29kZVdpZHRoSW5wdXQsXG59IGZyb20gXCIuL2xvZ2ljXCI7XG5pbXBvcnQgQmFyY29kZVdpZHRoSW5wdXQgZnJvbSBcIi4vQmFyY29kZVdJZHRoSW5wdXRcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbmZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3Qgd2lkdGggPSBnZXRJbnB1dFZhbHVlKGdldEJhcmNvZGVXaWR0aElucHV0KCkpO1xuXG4gIGdlbmVyYXRlQmFyY29kZSh7IHdpZHRoIH0pO1xufVxuXG5jb25zdCBCYXJjb2RlRm9ybSA9ICgpID0+IHtcbiAgLy9cblxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRm9ybShcbiAgICB7XG4gICAgICBpbm5lclRleHQ6IGBgLFxuICAgICAgY2xhc3NOYW1lOiBgYCxcbiAgICAgIG9uc3VibWl0KGUpIHtcbiAgICAgICAgaGFuZGxlU3VibWl0KGUpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbQmFyY29kZVRleHRJbnB1dCh7IHZhbHVlOiBcIkhlbGxvIFdvcmxkXCIgfSksIEJhcmNvZGVXaWR0aElucHV0KCldXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFyY29kZUZvcm07XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRGl2LCBJbnB1dCB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBCYXJjb2RlIGZyb20gXCIuL0JhcmNvZGVcIjtcbmltcG9ydCBCYXJjb2RlVGV4dElucHV0LCB7IGJhcmNvZGVUZXh0SW5wdXRJZCB9IGZyb20gXCIuL0JhcmNvZGVUZXh0SW5wdXRcIjtcbmltcG9ydCBCYXJjb2RlRm9ybSBmcm9tIFwiLi9CYXJjb2RlRm9ybVwiO1xuXG5pbXBvcnQgR2VuZXJhdGVCdXR0b24gZnJvbSBcIi4vR2VuZXJhdGVCdXR0b25cIjtcbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBCYXJjb2RlR2VuZXJhdG9yID0gKCkgPT4ge1xuICAvL1xuXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAgeyBpbm5lclRleHQ6IGBgLCBjbGFzc05hbWU6IGBgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtCYXJjb2RlRm9ybSgpLCBCYXJjb2RlKCldXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFyY29kZUdlbmVyYXRvcjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYsIElucHV0IH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCB7IGdlbmVyYXRlQmFyY29kZSB9IGZyb20gXCIuL2xvZ2ljXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG5mdW5jdGlvbiBoYW5kbGVDaGFuZ2UoKSB7XG4gIGdlbmVyYXRlQmFyY29kZSgpO1xufVxuZXhwb3J0IGNvbnN0IGJhcmNvZGVUZXh0SW5wdXRJZCA9IHV1aWR2NCgpO1xuXG5jb25zdCBCYXJjb2RlVGV4dElucHV0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdmFsdWUgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAge1xuICAgICAgaW5uZXJUZXh0OiBgYCxcbiAgICAgIGNsYXNzTmFtZTogYGAsXG4gICAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgSW5wdXQoe1xuICAgICAgICBpZDogYCR7YmFyY29kZVRleHRJbnB1dElkfWAsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBvbmlucHV0KCkge1xuICAgICAgICAgIGhhbmRsZUNoYW5nZSgpO1xuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhcmNvZGVUZXh0SW5wdXQ7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRGl2LCBJbnB1dCwgTGFiZWwsIFNwYW4gfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyB1cGRhdGVCYXJjb2RlV2lkdGhEaXNwbGF5IH0gZnJvbSBcIi4vdWlcIjtcbmltcG9ydCB7IGdldElucHV0VmFsdWUgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IGdlbmVyYXRlQmFyY29kZSwgZ2V0QmFyY29kZVdpZHRoSW5wdXQgfSBmcm9tIFwiLi9sb2dpY1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuXG5leHBvcnQgY29uc3QgYmFyY29kZVdpZHRoSW5wdXRJZCA9IHV1aWR2NCgpO1xuZXhwb3J0IGNvbnN0IGJhcmNvZGVXaWR0aExhYmVsU3BhbklkID0gYGJhcmNvZGUtd2lkdGgtZGlzcGxheS0ke2JhcmNvZGVXaWR0aElucHV0SWR9YDtcblxuZnVuY3Rpb24gaGFuZGxlSW5wdXQoKSB7XG4gIGNvbnN0IHdpZHRoID0gZ2V0SW5wdXRWYWx1ZShnZXRCYXJjb2RlV2lkdGhJbnB1dCgpKTtcbiAgdXBkYXRlQmFyY29kZVdpZHRoRGlzcGxheSh3aWR0aCk7XG4gIGdlbmVyYXRlQmFyY29kZSgpO1xufVxuXG5jb25zdCBCYXJjb2RlV2lkdGhJbnB1dCA9ICgpID0+IHtcbiAgLy9cblxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRGl2KHt9LCBbXG4gICAgTGFiZWwoe1xuICAgICAgaW5uZXJIVE1MOiBgV2lkdGg6ICR7U3Bhbih7IGlkOiBiYXJjb2RlV2lkdGhMYWJlbFNwYW5JZCB9KS5vdXRlckhUTUx9YCxcbiAgICB9KSxcbiAgICBJbnB1dChcbiAgICAgIHtcbiAgICAgICAgaWQ6IGJhcmNvZGVXaWR0aElucHV0SWQsXG4gICAgICAgIHR5cGU6IFwicmFuZ2VcIixcbiAgICAgICAgaW5uZXJUZXh0OiBgYCxcbiAgICAgICAgY2xhc3NOYW1lOiBgYCxcbiAgICAgICAgbWluOiAxLFxuICAgICAgICBtYXg6IDEwLFxuICAgICAgICBzdGVwOiAxLFxuICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgb25pbnB1dCgpIHtcbiAgICAgICAgICBoYW5kbGVJbnB1dCgpO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICAgIFtdXG4gICAgKSxcbiAgXSk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFyY29kZVdpZHRoSW5wdXQ7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgZ2V0SW5wdXRWYWx1ZSB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IHsgYmFyY29kZVRleHRJbnB1dElkIH0gZnJvbSBcIi4vQmFyY29kZVRleHRJbnB1dFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVCYXJjb2RlLCBnZXRCYXJjb2RlVGV4dElucHV0IH0gZnJvbSBcIi4vbG9naWNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcblxuY29uc3QgR2VuZXJhdGVCdXR0b24gPSAoKSA9PiB7XG4gIC8vXG5cbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IEJ1dHRvbihcbiAgICB7XG4gICAgICBpbm5lclRleHQ6IGBHZW5lcmF0ZWAsXG4gICAgICBjbGFzc05hbWU6IGBgLFxuICAgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2VuZXJhdGVCdXR0b247XG4iLCJpbXBvcnQgeyBnZXRCYXJjb2RlV2lkdGhTcGFuIH0gZnJvbSBcIi4vbG9naWNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUJhcmNvZGVXaWR0aERpc3BsYXkodmFsdWUpIHtcbiAgY29uc3QgYmFyY29kZVdpZHRoRGlzcGxheSA9IGdldEJhcmNvZGVXaWR0aFNwYW4oKTtcbiAgYmFyY29kZVdpZHRoRGlzcGxheS5pbm5lclRleHQgPSB2YWx1ZTtcbn1cbiIsImltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9IZWFkZXIvSGVhZGVyXCI7XG5pbXBvcnQgRHluYW1pY0Zvb3RlciBmcm9tIFwiLi4vRHluYW1pY0Zvb3Rlci9EeW5hbWljRm9vdGVyXCI7XG5pbXBvcnQgTWFpblNlY3Rpb24gZnJvbSBcIi4uL01haW5TZWN0aW9uL01haW5TZWN0aW9uXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBDb250ZW50ID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gRWxlbWVudChcImRpdlwiLCB7IGlkOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgSGVhZGVyKCksXG4gICAgTWFpblNlY3Rpb24oKSxcbiAgICBEeW5hbWljRm9vdGVyKCksXG4gIF0pO1xuXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudDtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBBLCBEaXYgfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vX2N1c3RvbS1jb21wb25lbnRzL0ljb25cIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuaW1wb3J0IHsgZ2l0aHViSW5mbyB9IGZyb20gXCIuLi8uLi9wYWdlLWxvZ2ljL2RhdGEvZGF0YS1wYWdlLWNvbmZpZ1wiO1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuLy8gVEVNUExBVEUgVkFSSUFCTEVTXG5jb25zdCBkeW5hbWljWWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcblxuY29uc3QgQ29weXJpZ2h0Q29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRGl2KFxuICAgIHsgY2xhc3NOYW1lOiBgY29weXJpZ2h0LWNvbnRhaW5lcmAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgRGl2KHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImNvcHlyaWdodC1pbmZvIGRpc3BsYXktaS1iXCIsXG4gICAgICAgIGlubmVyVGV4dDogYMKpIENhcmxpbiBNaXRjaGVsbCAke2R5bmFtaWNZZWFyfWAsXG4gICAgICB9KSxcbiAgICAgIEEoeyBocmVmOiBgaHR0cHM6Ly9naXRodWIuY29tL2Nhcmxpbi1taXRjaGVsbC8ke2dpdGh1YkluZm8ucmVwb05hbWV9YCB9LCBbXG4gICAgICAgIEljb24oXCJpY29uLWdpdGh1Yi1jYXRcIiksXG4gICAgICBdKSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29weXJpZ2h0Q29udGFpbmVyO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBDb3B5cmlnaHRDb250YWluZXIgZnJvbSBcIi4vQ29weXJpZ2h0Q29udGFpbmVyXCI7XG5pbXBvcnQgQXR0cmlidXRpb25zQ29udGFpbmVyIGZyb20gXCIuL1NpdGVBdHRyaWJ1dGlvbnMvQXR0cmlidXRpb25zQ29udGFpbmVyXCI7XG5pbXBvcnQgVE9QQ29udGFpbmVyIGZyb20gXCIuL1RPUExpbmtDb250YWluZXJcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IER5bmFtaWNGb290ZXIgPSAoKSA9PiB7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gXG4gIEZvb3RlcihcbiAgICB7IFxuICAgICAgaWQ6IGBmb290ZXJgLCBcbiAgICAgIGNsYXNzTmFtZTogYGJnLWdyYXktZGFyay0zIHRleHQtd2hpdGVgIFxuICAgIH0sXG4gICAgW1xuICAgICBDb3B5cmlnaHRDb250YWluZXIoKSwgXG5cbiAgICAgQXR0cmlidXRpb25zQ29udGFpbmVyKClcbiAgICBdXG4gICk7XG5cbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljRm9vdGVyO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vLi4vX2N1c3RvbS1jb21wb25lbnRzL0ljb25cIjtcblxuaW1wb3J0IEV4cGFuZGFibGVQYW5lbCBmcm9tIFwiLi4vLi4vX2N1c3RvbS1jb21wb25lbnRzL0V4cGFuZGFibGVQYW5lbC9FeHBhbmRhYmxlUGFuZWxcIjtcbmltcG9ydCBOb25FeHBhbmRhYmxlUGFuZWwgZnJvbSBcIi4uLy4uL19jdXN0b20tY29tcG9uZW50cy9FeHBhbmRhYmxlUGFuZWwvTm9uRXhwYW5kYWJsZVBhbmVsXCI7XG5cbmltcG9ydCBJY29uc0V4cGxhbmF0aW9uIGZyb20gXCIuL0ljb25zRXhwbGFuYXRpb25cIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEF0dHJpYnV0aW9uc0NvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIHsgY2xhc3NOYW1lOiBgYXR0cmlidXRpb25zLWNvbnRhaW5lcmAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgRXhwYW5kYWJsZVBhbmVsKHtcbiAgICAgICAgdGl0bGU6IFwiU2l0ZSBBdHRyaWJ1dGlvbnNcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBFeHBhbmRhYmxlUGFuZWwoe1xuICAgICAgICAgICAgdGl0bGU6IFwiSWNvbnNcIixcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIE5vbkV4cGFuZGFibGVQYW5lbCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiR2l0aHViXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vbG9nb3NcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW0ljb24oXCJpY29uLWdpdGh1Yi1jYXRcIildLFxuICAgICAgICAgICAgICB9KSxcblxuICAgICAgICAgICAgICBFeHBhbmRhYmxlUGFuZWwoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFsbCBvdGhlciBJY29uc1wiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbSWNvbnNFeHBsYW5hdGlvbigpXSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgXVxuICApO1xuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXR0cmlidXRpb25zQ29udGFpbmVyO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IERpdiwgQSB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEljb25zRXhwbGFuYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAgeyBjbGFzc05hbWU6IGBpY29ucy1leHBsYW5hdGlvbmAsIGlubmVySFRNTDogYGAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgRGl2KHtcbiAgICAgICAgaW5uZXJIVE1MOiBgQWxsIG90aGVyIGljb25zIHdlcmUgY3JlYXRlZCBieSBtZSB1c2luZyAke1xuICAgICAgICAgIEEoe1xuICAgICAgICAgICAgaHJlZjogXCJodHRwczovL2lua3NjYXBlLm9yZy9cIixcbiAgICAgICAgICAgIGlubmVyVGV4dDogXCJJbmtzY2FwZVwiLFxuICAgICAgICAgIH0pLm91dGVySFRNTFxuICAgICAgICB9IGFuZCBjb252ZXJ0aW5nIHRoZW0gdG8gYSBmb250IHdpdGggJHtcbiAgICAgICAgICBBKHtcbiAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9pY29tb29uLmlvL1wiLFxuICAgICAgICAgICAgaW5uZXJUZXh0OiBcIkljb01vb25cIixcbiAgICAgICAgICB9KS5vdXRlckhUTUxcbiAgICAgICAgfWAsXG4gICAgICB9KSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbnNFeHBsYW5hdGlvbjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBBLCBEaXYgfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBUT1BDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHBhcmVudENvbnRhaW5lciA9IERpdihcbiAgICB7XG4gICAgICBjbGFzc05hbWU6IGB0b3AtY29udGFpbmVyYCxcbiAgICAgIGlubmVyVGV4dDogXCJJbnNwaXJlZCBCeTpcIixcbiAgICB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBBKHtcbiAgICAgICAgaHJlZjogXCJodHRwczovL3d3dy50aGVvZGlucHJvamVjdC5jb20vXCIsXG4gICAgICAgIGNsYXNzTmFtZTogXCJ0b3AtbGlua1wiLFxuICAgICAgICBpbm5lclRleHQ6IFwiVGhlIE9kaW4gUHJvamVjdFwiLFxuICAgICAgfSksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFyZW50Q29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVE9QQ29udGFpbmVyO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGgxID0gRWxlbWVudChcImgxXCIsIHsgaW5uZXJUZXh0OiBcIkJhcmNvZGUgR2VuZXJhdG9yXCIgfSk7XG5cbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJiZy1ncmF5LWRhcmstMyB0ZXh0LXdoaXRlIHAtMlwiO1xuICBjb25zdCBoZWFkZXIgPSBFbGVtZW50KFxuICAgIFwiaGVhZGVyXCIsXG4gICAge1xuICAgICAgaWQ6IFwiaGVhZGVyXCIsXG4gICAgICBjbGFzc05hbWU6IFwiaGVhZGVyXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcyxcbiAgICB9LFxuICAgIFtoMV1cbiAgKTtcbiAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBnZW5lcmF0ZVRlc3RDb250ZW50QXJyIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgQmFyY29kZUdlbmVyYXRvciBmcm9tIFwiLi4vQmFyY29kZUdlbmVyYXRvci9CYXJjb2RlR2VuZXJhdG9yXCI7XG5pbXBvcnQgeyBNYWluLCBEaXYgfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBNYWluU2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcbiAgY29uc3QgbWFpbiA9IE1haW4oXG4gICAge1xuICAgICAgaWQ6IFwibWFpbi1zZWN0aW9uXCIsXG4gICAgICBjbGFzc05hbWU6IFwiXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcyxcbiAgICB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbQmFyY29kZUdlbmVyYXRvcigpXVxuICApO1xuICByZXR1cm4gbWFpbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5TZWN0aW9uO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEEgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbmltcG9ydCBFeHBhbmRhYmxlUGFuZWxUaXRsZSBmcm9tIFwiLi9FeHBhbmRhYmxlUGFuZWxUaXRsZVwiO1xuaW1wb3J0IEV4cGFuZGFibGVQYW5lbENvbnRlbnQgZnJvbSBcIi4vRXhwYW5kYWJsZVBhbmVsQ29udGVudFwiO1xuXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgRXhwYW5kYWJsZVBhbmVsID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGNvbXBvbmVudElkID0gdXVpZHY0KCk7XG4gIGNvbnN0IHsgdGl0bGUsIGNoaWxkcmVuIH0gPSBwcm9wcztcblxuICBjb25zdCBwYW5lbCA9IEEoXG4gICAgeyBjbGFzc05hbWU6IGBleHBhbmRhYmxlLXBhbmVsYCB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBFeHBhbmRhYmxlUGFuZWxUaXRsZSh7IHRpdGxlLCBjb21wb25lbnRJZCB9KSxcbiAgICAgIEV4cGFuZGFibGVQYW5lbENvbnRlbnQoeyBjaGlsZHJlbiwgY29tcG9uZW50SWQgfSksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFuZWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeHBhbmRhYmxlUGFuZWw7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCB7IERpdiB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEV4cGFuZGFibGVQYW5lbENvbnRlbnQgPSAocHJvcHMpID0+IHtcbiAgbGV0IHsgY2hpbGRyZW4sIGNvbXBvbmVudElkIH0gPSBwcm9wcztcbiAgY2hpbGRyZW4gPSBjaGlsZHJlbiA/IGNoaWxkcmVuIDogW107XG5cbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdihcbiAgICB7XG4gICAgICBpZDogYGV4cGFuZGFibGUtY29udGVudC0ke2NvbXBvbmVudElkfWAsXG4gICAgICBjbGFzc05hbWU6IGBleHBhbmRhYmxlLXBhbmVsLWNvbnRlbnRgLFxuICAgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtEaXYoeyBjbGFzc05hbWU6IFwiY29udGVudFwiIH0sIFsuLi5jaGlsZHJlbl0pXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGFuZGFibGVQYW5lbENvbnRlbnQ7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRWxlbWVudCwgQnV0dG9uLCBEaXYgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvblwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuZnVuY3Rpb24gdG9nZ2xlRXhwYW5zaW9uKGNvbXBvbmVudElkKSB7XG4gIGNvbnN0IGV4cGFuc2lvbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBgZXhwYW5kYWJsZS1jb250ZW50LSR7Y29tcG9uZW50SWR9YFxuICApO1xuICBjb25zdCB0b2dnbGVFeHBhbnNpb25CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBgZXhwYW5kYWJsZS1jb250ZW50LWJ1dHRvbi0ke2NvbXBvbmVudElkfWBcbiAgKTtcbiAgZXhwYW5zaW9uQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKFwiZXhwYW5kZWRcIik7XG4gIHRvZ2dsZUV4cGFuc2lvbkJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiZXhwYW5kZWRcIik7XG59XG5cbmNvbnN0IEV4cGFuZGFibGVQYW5lbFRpdGxlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdGl0bGUsIGNvbXBvbmVudElkIH0gPSBwcm9wcztcblxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIHsgY2xhc3NOYW1lOiBgZXhwYW5kYWJsZS1wYW5lbC10aXRsZWAgfSxcbiAgICBbXG4gICAgICBEaXYoe1xuICAgICAgICBjbGFzc05hbWU6IFwiZGlzcGxheS1pLWJcIixcbiAgICAgICAgaW5uZXJUZXh0OiB0aXRsZSxcbiAgICAgICAgb25jbGljaygpIHtcbiAgICAgICAgICB0b2dnbGVFeHBhbnNpb24oY29tcG9uZW50SWQpO1xuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBCdXR0b24oXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogYGV4cGFuZGFibGUtY29udGVudC1idXR0b24tJHtjb21wb25lbnRJZH1gLFxuICAgICAgICAgIG9uY2xpY2soKSB7XG4gICAgICAgICAgICB0b2dnbGVFeHBhbnNpb24oY29tcG9uZW50SWQpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtJY29uKFwiaWNvbi11cC1kb3duXCIpXVxuICAgICAgKSxcbiAgICBdXG4gICk7XG5cbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeHBhbmRhYmxlUGFuZWxUaXRsZTtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBBIH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgTm9uRXhwYW5kYWJsZVBhbmVsID0gKHByb3BzKSA9PiB7XG4gIGxldCB7IHRpdGxlLCBocmVmLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG4gIGNoaWxkcmVuID0gY2hpbGRyZW4gPyBjaGlsZHJlbiA6IFtdO1xuXG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG5cbiAgY29uc3QgcGFuZWwgPSBBKFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogYCR7b3RoZXJDbGFzc2VzfSBub24tZXhwYW5kYWJsZS1wYW5lbCAke1xuICAgICAgICBocmVmID8gXCJpcy1saW5rXCIgOiBcIlwiXG4gICAgICB9YCxcbiAgICAgIGlubmVyVGV4dDogdGl0bGUsXG4gICAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgWy4uLmNoaWxkcmVuXVxuICApO1xuICBpZiAoaHJlZikge1xuICAgIHBhbmVsLmhyZWYgPSBocmVmO1xuICB9XG4gIHJldHVybiBwYW5lbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vbkV4cGFuZGFibGVQYW5lbDtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgSWNvbiA9IChpY29uQ2xhc3MpID0+IHtcbiAgY29uc3QgaWNvbiA9IEVsZW1lbnQoXCJpXCIsIHsgY2xhc3NOYW1lOiBgaWNvbiAke2ljb25DbGFzc30gZGlzcGxheS1pLWJgIH0pO1xuICByZXR1cm4gaWNvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb247XG4iLCIvLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBVVElMSVRJRVMgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuXG5mdW5jdGlvbiBnZXRBbGxDYXJvdXNlbFNsaWRlcygpIHtcbiAgcmV0dXJuIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsLXRyYWNrXCIpLmNoaWxkTm9kZXNdO1xufVxuXG5mdW5jdGlvbiBnZXRBbGxDYXJvdXNlbFNsaWRlSWRzKCkge1xuICByZXR1cm4gZ2V0QWxsQ2Fyb3VzZWxTbGlkZXMoKS5tYXAoKGVsZW0pID0+IGVsZW0uaWQpO1xufVxuXG5mdW5jdGlvbiBnZXRBbGxDYXJvdXNlbE5hdkJ1dHRvbnMoKSB7XG4gIHJldHVybiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJvdXNlbC1pbmRpY2F0b3JcIildO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50U2xpZGVJbmRleCgpIHtcbiAgY29uc3QgYWxsU2xpZGVJZHMgPSBnZXRBbGxDYXJvdXNlbFNsaWRlSWRzKCk7XG4gIGNvbnN0IGN1cnJlbnRTbGlkZUlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbC1zbGlkZS5hY3RpdmVcIikuaWQ7XG4gIGNvbnN0IGN1cnJlbnRTbGlkZUluZGV4ID0gYWxsU2xpZGVJZHMuaW5kZXhPZihjdXJyZW50U2xpZGVJZCk7XG5cbiAgcmV0dXJuIGN1cnJlbnRTbGlkZUluZGV4O1xufVxuXG5mdW5jdGlvbiBnZXRQcmV2aW91c1NsaWRlSW5kZXgoKSB7XG4gIGxldCBwcmV2aW91c1NsaWRlSW5kZXggPSBnZXRDdXJyZW50U2xpZGVJbmRleCgpIC0gMTtcblxuICAvLyBpZiB0aGUgY2FsY3VsYXRlZCBpbmRleCBpcyBvdXRzaWRlIHRoZSBsaXN0LCBzZXQgaXQgdG8gdGhlIGluZGV4IG9mIHRoZSBsYXN0IGl0ZW0gaW4gdGhlIGxpc3RcbiAgY29uc3QgY29ycmVjdGVkSW5kZXggPVxuICAgIHByZXZpb3VzU2xpZGVJbmRleCA8IDBcbiAgICAgID8gZ2V0QWxsQ2Fyb3VzZWxTbGlkZUlkcygpLmxlbmd0aCAtIDFcbiAgICAgIDogcHJldmlvdXNTbGlkZUluZGV4O1xuXG4gIHJldHVybiBjb3JyZWN0ZWRJbmRleDtcbn1cblxuZnVuY3Rpb24gZ2V0TmV4dFNsaWRlSW5kZXgoKSB7XG4gIGxldCBuZXh0U2xpZGVJbmRleCA9IGdldEN1cnJlbnRTbGlkZUluZGV4KCkgKyAxO1xuXG4gIC8vIGlmIHRoZSBjYWxjdWxhdGVkIGluZGV4IGlzIG91dHNpZGUgdGhlIGxpc3QsIHNldCBpdCB0byB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIGxpc3RcbiAgY29uc3QgY29ycmVjdGVkSW5kZXggPVxuICAgIG5leHRTbGlkZUluZGV4ID4gZ2V0QWxsQ2Fyb3VzZWxTbGlkZUlkcygpLmxlbmd0aCAtIDEgPyAwIDogbmV4dFNsaWRlSW5kZXg7XG5cbiAgcmV0dXJuIGNvcnJlY3RlZEluZGV4O1xufVxuXG4vLyBtb3ZlIHRvIHRoZSBzZWxlY3RlZCBzbGlkZVxuZXhwb3J0IGZ1bmN0aW9uIGdvdG9TcGVjaWZpY1NsaWRlKGlkKSB7XG4gIGNvbnN0IGFsbE5hdkJ1dHRvbnMgPSBnZXRBbGxDYXJvdXNlbE5hdkJ1dHRvbnMoKTtcbiAgY29uc3Qgc2VsZWN0ZWROYXZCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2Fyb3VzZWwtbmF2LSR7aWR9YCk7XG4gIGNvbnN0IHNlbGVjdGVkU2xpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2Fyb3VzZWwtc2xpZGUtJHtpZH1gKTtcbiAgY29uc3QgYWxsU2xpZGVzID0gZ2V0QWxsQ2Fyb3VzZWxTbGlkZXMoKTtcblxuICBhbGxTbGlkZXMuZm9yRWFjaCgoc2xpZGUpID0+IHNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuICBzZWxlY3RlZFNsaWRlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgYWxsTmF2QnV0dG9ucy5mb3JFYWNoKChzbGlkZSkgPT4gc2xpZGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG4gIHNlbGVjdGVkTmF2QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgRVZFTlQgSEFORExFUlMgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuLy8gbW92ZSB0byB0aGUgc2VsZWN0ZWQgc2xpZGUgd2hlbiBjbGlja2luZyBvbiB0aGUgYXNzb2NpYXRlZCBuYXYgYnV0dG9uXG5leHBvcnQgZnVuY3Rpb24gY2xpY2tDYXJvdXNlbE5hdihpZCkge1xuICBnb3RvU3BlY2lmaWNTbGlkZShpZCk7XG59XG5cbi8vIG1vdmUgcmlnaHQgd2hlbiBjbGlja2luZyBvbiB0aGUgcmlnaHQgYnV0dG9uXG5leHBvcnQgZnVuY3Rpb24gY2xpY2tDYXJvdXNlbFJpZ2h0KCkge1xuICBjb25zdCBpZCA9IGdldEFsbENhcm91c2VsU2xpZGVJZHMoKVtnZXROZXh0U2xpZGVJbmRleCgpXS5yZXBsYWNlKFxuICAgIFwiY2Fyb3VzZWwtc2xpZGUtXCIsXG4gICAgXCJcIlxuICApO1xuICBnb3RvU3BlY2lmaWNTbGlkZShpZCk7XG59XG5cbi8vIG1vdmUgbGVmdCB3aGVuIGNsaWNraW5nIG9uIHRoZSByaWdodCBidXR0b25cbmV4cG9ydCBmdW5jdGlvbiBjbGlja0Nhcm91c2VsTGVmdCgpIHtcbiAgY29uc3QgaWQgPSBnZXRBbGxDYXJvdXNlbFNsaWRlSWRzKClbZ2V0UHJldmlvdXNTbGlkZUluZGV4KCldLnJlcGxhY2UoXG4gICAgXCJjYXJvdXNlbC1zbGlkZS1cIixcbiAgICBcIlwiXG4gICk7XG4gIGdvdG9TcGVjaWZpY1NsaWRlKGlkKTtcbn1cblxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIEFVVE8gUFJPR1JFU1NJT04gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5leHBvcnQgZnVuY3Rpb24gY2xpY2tDYXJvdXNlbFBsYXkoKSB7XG4gIGhhbmRsZUF1dG9BZHZhbmNlKFwicGxheVwiKTtcbiAgY29uc3QgcGxheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwgLnBsYXktYnV0dG9uXCIpO1xuICBwbGF5QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xuXG4gIGNvbnN0IHBhdXNlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbCAucGF1c2UtYnV0dG9uXCIpO1xuICBwYXVzZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsaWNrQ2Fyb3VzZWxQYXVzZSgpIHtcbiAgaGFuZGxlQXV0b0FkdmFuY2UoXCJwYXVzZVwiKTtcbiAgY29uc3QgcGxheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwgLnBsYXktYnV0dG9uXCIpO1xuICBwbGF5QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xuXG4gIGNvbnN0IHBhdXNlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbCAucGF1c2UtYnV0dG9uXCIpO1xuICBwYXVzZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcbn1cblxubGV0IGludGVydmFsO1xuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIGNyZWF0ZSBvciBjYW5jZWwgdGhlIGF1dG8gYWR2YW5jZSB0aW1lclxuICogeW91IHdpbGwgbmVldCB0byBkZWNsYXJlIGludGVydmFsIChsZXQgaW50ZXJ2YWwpIGJlZm9yZVxuICogdGhpcyBmdW5jdGlvbiB0byBhbGxvdyB0aGUgaW50ZXJ2YWwgdG8gYmUgY3JlYXRlZCAvIHJlZmVuZW5jZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlIGEgc3RyaW5nIGNvbnRhaW5pbmcgJ3BsYXknIG9yICdwYXVzZScgdG8gaW5kaWNhdGUgdGhlIG1vZGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUF1dG9BZHZhbmNlKG1vZGUpIHtcbiAgY29uc3QgcGxheWluZyA9IG1vZGUgPT09IFwicGxheVwiID8gdHJ1ZSA6IGZhbHNlO1xuICBpZiAocGxheWluZykge1xuICAgIC8vIHN0YXJ0IGFuIGludGVydmFsIHRpbWVyIGFuZCBjYXB0dXJlIGl0cyByZWZlcmVuY2VcbiAgICBpbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbChjbGlja0Nhcm91c2VsUmlnaHQsIDUwMDApO1xuICB9IGVsc2Uge1xuICAgIC8vIGNhbmNlbCB0aGUgcmVmZXJlbmNlIHlvdSBjYXB0dXJlZFxuICAgIHdpbmRvdy5jbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBUaGlzIEZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gY3JlYXRlIGEgZG9tIGVsZW1lbnQgd2l0aCBpdHMgaW5pdGlhbCBhdHRyaWJ1dGVzIGFuZCBjaGlsZCBlbGVtZW50cyBkZWZpbmVkIGJ5IGEgcGFzc2VkLWluIG9iamVjdCBhbmQgYXJyYXkgb2YgY2hpbGQgZWxlbWVudHNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlU3RyIHRoZSB0YWcgbmFtZSBvZiB0aGUgZWxlbWVudCB0byBiZSByZXR1cm5lZCB5b3Ugd291bGQgdXNlIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoKVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzT2JqIChvcHRpb25hbCkgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGluaXRpYWwgcHJvcGVydGllcy9hdHRyaWJ1dGVzIHlvdSB3YW50IHRoZSBlbGVtZW50IHRvIGhhdmVcbiAqIEBwYXJhbSB7YXJyYXl9IGNoaWxkQXJyIChvcHRpb25hbCkgYW4gb2YgZWxlbWVudCBvYmplY3RzIHRvIGJlIGFwcGVuZGVkIGFzIGNoaWxkcmVuIHRvIHRoaXMgZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IHRoZSBhIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCBjcmVhdGVkIGluIG1lbW9yeVxuICovXG5leHBvcnQgY29uc3QgRWxlbWVudCA9ICh0eXBlU3RyLCBwcm9wc09iaiwgY2hpbGRBcnIgPSBudWxsKSA9PiB7XG4gIC8vIFNvbWUgYXR0cmlidXRlcyBjYW4gb25seSBiZSBzZXQgdXNpbmcgdGhlIEVsZW1lbnQuc2V0QXR0cmlidXRlKCkgbWV0aG9kLlxuICAvLyBJZiBpdCBpcyBpbiB0aGUgcHJvcHNPYmogT2JqZWN0LmFzc2lnbiB3aWxsIGZhaWwuIFdlJ2xsIHJlbW92ZSBpdCBmcm9tIHRoZVxuICAvLyBwcm9wcyBvYmplY3QgaGVyZSBhbmQgYXNzaWduIHRoZW0gdG8gdGhlIHBhcmVudCBlbGVtZW50IGJlZm9yZSBpdCBpcyByZXR1cm5lZC5cbiAgLy8gVGhlc2UgYXR0cmlidXRlcyBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIHNldEF0dHJpYnV0ZVByb3BlcnRpZXMgbGlzdCBmb3IgcHJvY2Vzc2luZy5cbiAgbGV0IHNldEF0dHJpYnV0ZVByb3BlcnRpZXMgPSBbXCJsaXN0XCJdO1xuICBsZXQgcHJvcGVydGllcyA9IFtdO1xuICBzZXRBdHRyaWJ1dGVQcm9wZXJ0aWVzLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgaWYgKHByb3BlcnR5IGluIHByb3BzT2JqKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHByb3BzT2JqW3Byb3BlcnR5XTtcbiAgICAgIHByb3BlcnRpZXMucHVzaCh7IG5hbWU6IHByb3BlcnR5LCB2YWx1ZTogdmFsdWUgfSk7XG4gICAgICBkZWxldGUgcHJvcHNPYmpbcHJvcGVydHldO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gQ3JlYXRlIGFuIGVsZW1lbnQgYmFzZWQgb24gdGhlIHR5cGUgc3RyaW5nIHByb3ZpZGVkXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBPYmplY3QuYXNzaWduKFxuICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZVN0ciksXG4gICAgcHJvcHNPYmpcbiAgKTtcblxuICAvLyBBZGQgcGFzc2VkIGluIGNoaWxkIHRvIGFycmF5IGlmIGl0IGlzIG5vdCBhbHJlYWR5XG4gIGlmIChjaGlsZEFyciAmJiAhQXJyYXkuaXNBcnJheShjaGlsZEFycikpIHtcbiAgICBjaGlsZEFyciA9IFtjaGlsZEFycl07XG4gIH1cblxuICAvLyBBcHBlbmQgY2hpbGRyZW4gdG8gdGhlIGVsZW1lbnRcbiAgaWYgKGNoaWxkQXJyKSB7XG4gICAgY2hpbGRBcnIuZm9yRWFjaCgoY2hpbGQpID0+IHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpKTtcbiAgfVxuXG4gIC8vIEFwcGx5IHByb3BlcnRpZXMgd2l0aCBzZXRBdHRyaWJ1dGUgaWYgbmVlZGVkXG4gIGlmIChwcm9wZXJ0aWVzLmxlbmd0aCkge1xuICAgIHByb3BlcnRpZXMuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICAgIHBhcmVudEVsZW1lbnQuc2V0QXR0cmlidXRlKHByb3BlcnR5Lm5hbWUsIHByb3BlcnR5LnZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuLy8gIENPTU1PTiBFTEVNRU5UU1xuZXhwb3J0IGNvbnN0IEEgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiYVwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBBcnRpY2xlID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImFydGljbGVcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgQiA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJiXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEJvZHkgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiYm9keVwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiYnV0dG9uXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEJyID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImJyXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IERpdiA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJkaXZcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgRGF0YWxpc3QgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiZGF0YWxpc3RcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgRmllbGRzZXQgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiZmllbGRzZXRcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImZvb3RlclwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBGb3JtID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImZvcm1cIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSDEgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaDFcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSDIgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaDJcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSDMgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaDNcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImhlYWRlclwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBIciA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJoclwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBJID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImlcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSW1nID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImltZ1wiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBJbnB1dCA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJpbnB1dFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBMYWJlbCA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJsYWJlbFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBMZWdlbmQgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwibGVnZW5kXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IExpID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImxpXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IE1haW4gPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwibWFpblwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBPbCA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJvbFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBPcHRpb24gPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwib3B0aW9uXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IFAgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwicFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBTZWxlY3QgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwic2VsZWN0XCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IFN0cm9uZyA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJzdHJvbmdcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgU3BhbiA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJzcGFuXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IFRleHRhcmVhID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcInRleHRhcmVhXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IFVsID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcInVsXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcbiIsImV4cG9ydCBjb25zdCBnaXRodWJJbmZvID0ge1xuICByZXBvTmFtZTogXCJiYXJjb2RlLWdlbmVyYXRvclwiLFxufTtcbiIsImltcG9ydCB7IGFwcGx5V2luZG93TGlzdGVuZXJzIH0gZnJvbSBcIi4vdWktd2luZG93XCI7XG5pbXBvcnQgeyBjbGlja0Nhcm91c2VsUGxheSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9JbWFnZUNhcm91c2VsL3VpL2Nhcm91c2VsLXVpXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUluaXRpYWxTdGF0ZSgpIHtcbiAgYXBwbHlXaW5kb3dMaXN0ZW5lcnMoKTtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWxcIikpIHtcbiAgICBjbGlja0Nhcm91c2VsUGxheSgpO1xuICB9XG59XG4iLCJpbXBvcnQgSnNCYXJjb2RlIGZyb20gXCJqc2JhcmNvZGVcIjtcblxuaW1wb3J0IHsgZGVib3VuY2UsIGdldElucHV0VmFsdWUgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7XG4gIGdlbmVyYXRlQmFyY29kZSxcbiAgZ2V0QmFyY29kZVRleHRJbnB1dCxcbiAgZ2V0QmFyY29kZVdpZHRoU3BhbixcbiAgZ2V0QmFyY29kZVdpZHRoSW5wdXQsXG59IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0JhcmNvZGVHZW5lcmF0b3IvbG9naWNcIjtcbmltcG9ydCB7IHVwZGF0ZUJhcmNvZGVXaWR0aERpc3BsYXkgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CYXJjb2RlR2VuZXJhdG9yL3VpXCI7XG5cbmNvbnN0IGJyZWFrUG9pbnRzID0ge1xuICB4czogMCxcbiAgc206IDQ4MCxcbiAgbWQ6IDcyMCxcbiAgbGc6IDk2MCxcbiAgeGw6IDEyMDAsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlXaW5kb3dMaXN0ZW5lcnMoKSB7XG4gIHdpbmRvdy5vbnJlc2l6ZSA9IGRlYm91bmNlKGZ1bmN0aW9uIChlKSB7XG4gICAgLy9cbiAgfSk7XG4gIHdpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgdXBkYXRlQmFyY29kZVdpZHRoRGlzcGxheShnZXRJbnB1dFZhbHVlKGdldEJhcmNvZGVXaWR0aElucHV0KCkpKTtcbiAgICBnZW5lcmF0ZUJhcmNvZGUoKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG5leHBvcnQgY29uc3QgdHJ1bmNhdGVBbmRBZGRFbGxpcHNlID0gKHN0cmluZywgbnVtQ2hhcnNUb0tlZXApID0+IHtcbiAgcmV0dXJuIHN0cmluZy5zbGljZSgwLCBudW1DaGFyc1RvS2VlcCkudHJpbUVuZCgpICsgXCIuLi5cIjtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IGZ1bmN0aW9uIChmbikge1xuICAvLyBzZXR1cCBhIHRpbWVyXG4gIGxldCB0aW1lb3V0O1xuXG4gIC8vIHJldHVybiBhIGZ1bmN0aW9uIHRvIHJ1biBkZWJvdW5jZWRcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAvL3NldHVwIGFyZ3NcblxuICAgIGxldCBjb250ZXh0ID0gdGhpcztcbiAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcblxuICAgIC8vIGlmIHRoZXJlIGlzIGEgdGltZXIgY2FuY2VsIGl0XG4gICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aW1lb3V0KTtcbiAgICB9XG5cbiAgICAvLyBzZXR1cCB0aGUgbmV3IHJlcXVlc3RBbmltYXRpb25GcmFtZSgpXG4gICAgdGltZW91dCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfSk7XG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgaWYgKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmdbMF0udG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xuICB9XG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRlc3RDb250ZW50QXJyKG51bUNoaWxkcmVuKSB7XG4gIHJldHVybiBBcnJheShudW1DaGlsZHJlbilcbiAgICAuZmlsbCgwKVxuICAgIC5tYXAoKGVsZW0pID0+XG4gICAgICBFbGVtZW50KFwicFwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJkaXNwbGF5LWIgbWItMVwiLFxuICAgICAgICBpbm5lclRleHQ6XG4gICAgICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEb2xvciwgdWxsYW0gYWQsIG1heGltZSBlbmltIHNlcXVpIHN1bnQgcXVvIGZhY2lsaXMgaWxsbyBldmVuaWV0IGxhdWRhbnRpdW0gcXVhZSByZXBlbGxlbmR1cyBkb2xvcnVtIG9tbmlzIG1pbmltYSBkdWNpbXVzIGFyY2hpdGVjdG8hIEJlYXRhZSwgdmVsIGFzc3VtZW5kYS5cIixcbiAgICAgIH0pXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pOyAvLyBUaGUgbWF4aW11bSBpcyBleGNsdXNpdmUgYW5kIHRoZSBtaW5pbXVtIGlzIGluY2x1c2l2ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZShpbnB1dEVsZW1lbnQpIHtcbiAgcmV0dXJuIGlucHV0RWxlbWVudC52YWx1ZTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9iYXJjb2RlcyA9IHJlcXVpcmUoJy4vYmFyY29kZXMvJyk7XG5cbnZhciBfYmFyY29kZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmFyY29kZXMpO1xuXG52YXIgX21lcmdlID0gcmVxdWlyZSgnLi9oZWxwL21lcmdlLmpzJyk7XG5cbnZhciBfbWVyZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWVyZ2UpO1xuXG52YXIgX2xpbmVhcml6ZUVuY29kaW5ncyA9IHJlcXVpcmUoJy4vaGVscC9saW5lYXJpemVFbmNvZGluZ3MuanMnKTtcblxudmFyIF9saW5lYXJpemVFbmNvZGluZ3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZWFyaXplRW5jb2RpbmdzKTtcblxudmFyIF9maXhPcHRpb25zID0gcmVxdWlyZSgnLi9oZWxwL2ZpeE9wdGlvbnMuanMnKTtcblxudmFyIF9maXhPcHRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZpeE9wdGlvbnMpO1xuXG52YXIgX2dldFJlbmRlclByb3BlcnRpZXMgPSByZXF1aXJlKCcuL2hlbHAvZ2V0UmVuZGVyUHJvcGVydGllcy5qcycpO1xuXG52YXIgX2dldFJlbmRlclByb3BlcnRpZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UmVuZGVyUHJvcGVydGllcyk7XG5cbnZhciBfb3B0aW9uc0Zyb21TdHJpbmdzID0gcmVxdWlyZSgnLi9oZWxwL29wdGlvbnNGcm9tU3RyaW5ncy5qcycpO1xuXG52YXIgX29wdGlvbnNGcm9tU3RyaW5nczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vcHRpb25zRnJvbVN0cmluZ3MpO1xuXG52YXIgX0Vycm9ySGFuZGxlciA9IHJlcXVpcmUoJy4vZXhjZXB0aW9ucy9FcnJvckhhbmRsZXIuanMnKTtcblxudmFyIF9FcnJvckhhbmRsZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRXJyb3JIYW5kbGVyKTtcblxudmFyIF9leGNlcHRpb25zID0gcmVxdWlyZSgnLi9leGNlcHRpb25zL2V4Y2VwdGlvbnMuanMnKTtcblxudmFyIF9kZWZhdWx0cyA9IHJlcXVpcmUoJy4vb3B0aW9ucy9kZWZhdWx0cy5qcycpO1xuXG52YXIgX2RlZmF1bHRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmF1bHRzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gVGhlIHByb3R5cGUgb2YgdGhlIG9iamVjdCByZXR1cm5lZCBmcm9tIHRoZSBKc0JhcmNvZGUoKSBjYWxsXG5cblxuLy8gSGVscCBmdW5jdGlvbnNcbnZhciBBUEkgPSBmdW5jdGlvbiBBUEkoKSB7fTtcblxuLy8gVGhlIGZpcnN0IGNhbGwgb2YgdGhlIGxpYnJhcnkgQVBJXG4vLyBXaWxsIHJldHVybiBhbiBvYmplY3Qgd2l0aCBhbGwgYmFyY29kZXMgY2FsbHMgYW5kIHRoZSBkYXRhIHRoYXQgaXMgdXNlZFxuLy8gYnkgdGhlIHJlbmRlcmVyc1xuXG5cbi8vIERlZmF1bHQgdmFsdWVzXG5cblxuLy8gRXhjZXB0aW9uc1xuLy8gSW1wb3J0IGFsbCB0aGUgYmFyY29kZXNcbnZhciBKc0JhcmNvZGUgPSBmdW5jdGlvbiBKc0JhcmNvZGUoZWxlbWVudCwgdGV4dCwgb3B0aW9ucykge1xuXHR2YXIgYXBpID0gbmV3IEFQSSgpO1xuXG5cdGlmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdHRocm93IEVycm9yKFwiTm8gZWxlbWVudCB0byByZW5kZXIgb24gd2FzIHByb3ZpZGVkLlwiKTtcblx0fVxuXG5cdC8vIFZhcmlhYmxlcyB0aGF0IHdpbGwgYmUgcGFzZWQgdGhyb3VnaCB0aGUgQVBJIGNhbGxzXG5cdGFwaS5fcmVuZGVyUHJvcGVydGllcyA9ICgwLCBfZ2V0UmVuZGVyUHJvcGVydGllczIuZGVmYXVsdCkoZWxlbWVudCk7XG5cdGFwaS5fZW5jb2RpbmdzID0gW107XG5cdGFwaS5fb3B0aW9ucyA9IF9kZWZhdWx0czIuZGVmYXVsdDtcblx0YXBpLl9lcnJvckhhbmRsZXIgPSBuZXcgX0Vycm9ySGFuZGxlcjIuZGVmYXVsdChhcGkpO1xuXG5cdC8vIElmIHRleHQgaXMgc2V0LCB1c2UgdGhlIHNpbXBsZSBzeW50YXggKHJlbmRlciB0aGUgYmFyY29kZSBkaXJlY3RseSlcblx0aWYgKHR5cGVvZiB0ZXh0ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0XHRpZiAoIW9wdGlvbnMuZm9ybWF0KSB7XG5cdFx0XHRvcHRpb25zLmZvcm1hdCA9IGF1dG9TZWxlY3RCYXJjb2RlKCk7XG5cdFx0fVxuXG5cdFx0YXBpLm9wdGlvbnMob3B0aW9ucylbb3B0aW9ucy5mb3JtYXRdKHRleHQsIG9wdGlvbnMpLnJlbmRlcigpO1xuXHR9XG5cblx0cmV0dXJuIGFwaTtcbn07XG5cbi8vIFRvIG1ha2UgdGVzdHMgd29yayBUT0RPOiByZW1vdmVcbkpzQmFyY29kZS5nZXRNb2R1bGUgPSBmdW5jdGlvbiAobmFtZSkge1xuXHRyZXR1cm4gX2JhcmNvZGVzMi5kZWZhdWx0W25hbWVdO1xufTtcblxuLy8gUmVnaXN0ZXIgYWxsIGJhcmNvZGVzXG5mb3IgKHZhciBuYW1lIGluIF9iYXJjb2RlczIuZGVmYXVsdCkge1xuXHRpZiAoX2JhcmNvZGVzMi5kZWZhdWx0Lmhhc093blByb3BlcnR5KG5hbWUpKSB7XG5cdFx0Ly8gU2VjdXJpdHkgY2hlY2sgaWYgdGhlIHByb3BlcnkgaXMgYSBwcm90b3R5cGUgcHJvcGVydHlcblx0XHRyZWdpc3RlckJhcmNvZGUoX2JhcmNvZGVzMi5kZWZhdWx0LCBuYW1lKTtcblx0fVxufVxuZnVuY3Rpb24gcmVnaXN0ZXJCYXJjb2RlKGJhcmNvZGVzLCBuYW1lKSB7XG5cdEFQSS5wcm90b3R5cGVbbmFtZV0gPSBBUEkucHJvdG90eXBlW25hbWUudG9VcHBlckNhc2UoKV0gPSBBUEkucHJvdG90eXBlW25hbWUudG9Mb3dlckNhc2UoKV0gPSBmdW5jdGlvbiAodGV4dCwgb3B0aW9ucykge1xuXHRcdHZhciBhcGkgPSB0aGlzO1xuXHRcdHJldHVybiBhcGkuX2Vycm9ySGFuZGxlci53cmFwQmFyY29kZUNhbGwoZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly8gRW5zdXJlIHRleHQgaXMgb3B0aW9ucy50ZXh0XG5cdFx0XHRvcHRpb25zLnRleHQgPSB0eXBlb2Ygb3B0aW9ucy50ZXh0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6ICcnICsgb3B0aW9ucy50ZXh0O1xuXG5cdFx0XHR2YXIgbmV3T3B0aW9ucyA9ICgwLCBfbWVyZ2UyLmRlZmF1bHQpKGFwaS5fb3B0aW9ucywgb3B0aW9ucyk7XG5cdFx0XHRuZXdPcHRpb25zID0gKDAsIF9vcHRpb25zRnJvbVN0cmluZ3MyLmRlZmF1bHQpKG5ld09wdGlvbnMpO1xuXHRcdFx0dmFyIEVuY29kZXIgPSBiYXJjb2Rlc1tuYW1lXTtcblx0XHRcdHZhciBlbmNvZGVkID0gZW5jb2RlKHRleHQsIEVuY29kZXIsIG5ld09wdGlvbnMpO1xuXHRcdFx0YXBpLl9lbmNvZGluZ3MucHVzaChlbmNvZGVkKTtcblxuXHRcdFx0cmV0dXJuIGFwaTtcblx0XHR9KTtcblx0fTtcbn1cblxuLy8gZW5jb2RlKCkgaGFuZGxlcyB0aGUgRW5jb2RlciBjYWxsIGFuZCBidWlsZHMgdGhlIGJpbmFyeSBzdHJpbmcgdG8gYmUgcmVuZGVyZWRcbmZ1bmN0aW9uIGVuY29kZSh0ZXh0LCBFbmNvZGVyLCBvcHRpb25zKSB7XG5cdC8vIEVuc3VyZSB0aGF0IHRleHQgaXMgYSBzdHJpbmdcblx0dGV4dCA9IFwiXCIgKyB0ZXh0O1xuXG5cdHZhciBlbmNvZGVyID0gbmV3IEVuY29kZXIodGV4dCwgb3B0aW9ucyk7XG5cblx0Ly8gSWYgdGhlIGlucHV0IGlzIG5vdCB2YWxpZCBmb3IgdGhlIGVuY29kZXIsIHRocm93IGVycm9yLlxuXHQvLyBJZiB0aGUgdmFsaWQgY2FsbGJhY2sgb3B0aW9uIGlzIHNldCwgY2FsbCBpdCBpbnN0ZWFkIG9mIHRocm93aW5nIGVycm9yXG5cdGlmICghZW5jb2Rlci52YWxpZCgpKSB7XG5cdFx0dGhyb3cgbmV3IF9leGNlcHRpb25zLkludmFsaWRJbnB1dEV4Y2VwdGlvbihlbmNvZGVyLmNvbnN0cnVjdG9yLm5hbWUsIHRleHQpO1xuXHR9XG5cblx0Ly8gTWFrZSBhIHJlcXVlc3QgZm9yIHRoZSBiaW5hcnkgZGF0YSAoYW5kIG90aGVyIGluZnJvbWF0aW9uKSB0aGF0IHNob3VsZCBiZSByZW5kZXJlZFxuXHR2YXIgZW5jb2RlZCA9IGVuY29kZXIuZW5jb2RlKCk7XG5cblx0Ly8gRW5jb2RpbmdzIGNhbiBiZSBuZXN0bGVkIGxpa2UgW1sxLTEsIDEtMl0sIDIsIFszLTEsIDMtMl1cblx0Ly8gQ29udmVydCB0byBbMS0xLCAxLTIsIDIsIDMtMSwgMy0yXVxuXHRlbmNvZGVkID0gKDAsIF9saW5lYXJpemVFbmNvZGluZ3MyLmRlZmF1bHQpKGVuY29kZWQpO1xuXG5cdC8vIE1lcmdlXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZW5jb2RlZC5sZW5ndGg7IGkrKykge1xuXHRcdGVuY29kZWRbaV0ub3B0aW9ucyA9ICgwLCBfbWVyZ2UyLmRlZmF1bHQpKG9wdGlvbnMsIGVuY29kZWRbaV0ub3B0aW9ucyk7XG5cdH1cblxuXHRyZXR1cm4gZW5jb2RlZDtcbn1cblxuZnVuY3Rpb24gYXV0b1NlbGVjdEJhcmNvZGUoKSB7XG5cdC8vIElmIENPREUxMjggZXhpc3RzLiBVc2UgaXRcblx0aWYgKF9iYXJjb2RlczIuZGVmYXVsdFtcIkNPREUxMjhcIl0pIHtcblx0XHRyZXR1cm4gXCJDT0RFMTI4XCI7XG5cdH1cblxuXHQvLyBFbHNlLCB0YWtlIHRoZSBmaXJzdCAocHJvYmFibHkgb25seSkgYmFyY29kZVxuXHRyZXR1cm4gT2JqZWN0LmtleXMoX2JhcmNvZGVzMi5kZWZhdWx0KVswXTtcbn1cblxuLy8gU2V0cyBnbG9iYWwgZW5jb2RlciBvcHRpb25zXG4vLyBBZGRlZCB0byB0aGUgYXBpIGJ5IHRoZSBKc0JhcmNvZGUgZnVuY3Rpb25cbkFQSS5wcm90b3R5cGUub3B0aW9ucyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdHRoaXMuX29wdGlvbnMgPSAoMCwgX21lcmdlMi5kZWZhdWx0KSh0aGlzLl9vcHRpb25zLCBvcHRpb25zKTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vLyBXaWxsIGNyZWF0ZSBhIGJsYW5rIHNwYWNlICh1c3VhbGx5IGluIGJldHdlZW4gYmFyY29kZXMpXG5BUEkucHJvdG90eXBlLmJsYW5rID0gZnVuY3Rpb24gKHNpemUpIHtcblx0dmFyIHplcm9lcyA9IG5ldyBBcnJheShzaXplICsgMSkuam9pbihcIjBcIik7XG5cdHRoaXMuX2VuY29kaW5ncy5wdXNoKHsgZGF0YTogemVyb2VzIH0pO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8vIEluaXRpYWxpemUgSnNCYXJjb2RlIG9uIGFsbCBIVE1MIGVsZW1lbnRzIGRlZmluZWQuXG5BUEkucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG5cdC8vIFNob3VsZCBkbyBub3RoaW5nIGlmIG5vIGVsZW1lbnRzIHdoZXJlIGZvdW5kXG5cdGlmICghdGhpcy5fcmVuZGVyUHJvcGVydGllcykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIE1ha2Ugc3VyZSByZW5kZXJQcm9wZXJpZXMgaXMgYW4gYXJyYXlcblx0aWYgKCFBcnJheS5pc0FycmF5KHRoaXMuX3JlbmRlclByb3BlcnRpZXMpKSB7XG5cdFx0dGhpcy5fcmVuZGVyUHJvcGVydGllcyA9IFt0aGlzLl9yZW5kZXJQcm9wZXJ0aWVzXTtcblx0fVxuXG5cdHZhciByZW5kZXJQcm9wZXJ0eTtcblx0Zm9yICh2YXIgaSBpbiB0aGlzLl9yZW5kZXJQcm9wZXJ0aWVzKSB7XG5cdFx0cmVuZGVyUHJvcGVydHkgPSB0aGlzLl9yZW5kZXJQcm9wZXJ0aWVzW2ldO1xuXHRcdHZhciBvcHRpb25zID0gKDAsIF9tZXJnZTIuZGVmYXVsdCkodGhpcy5fb3B0aW9ucywgcmVuZGVyUHJvcGVydHkub3B0aW9ucyk7XG5cblx0XHRpZiAob3B0aW9ucy5mb3JtYXQgPT0gXCJhdXRvXCIpIHtcblx0XHRcdG9wdGlvbnMuZm9ybWF0ID0gYXV0b1NlbGVjdEJhcmNvZGUoKTtcblx0XHR9XG5cblx0XHR0aGlzLl9lcnJvckhhbmRsZXIud3JhcEJhcmNvZGVDYWxsKGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciB0ZXh0ID0gb3B0aW9ucy52YWx1ZTtcblx0XHRcdHZhciBFbmNvZGVyID0gX2JhcmNvZGVzMi5kZWZhdWx0W29wdGlvbnMuZm9ybWF0LnRvVXBwZXJDYXNlKCldO1xuXHRcdFx0dmFyIGVuY29kZWQgPSBlbmNvZGUodGV4dCwgRW5jb2Rlciwgb3B0aW9ucyk7XG5cblx0XHRcdHJlbmRlcihyZW5kZXJQcm9wZXJ0eSwgZW5jb2RlZCwgb3B0aW9ucyk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbi8vIFRoZSByZW5kZXIgQVBJIGNhbGwuIENhbGxzIHRoZSByZWFsIHJlbmRlciBmdW5jdGlvbi5cbkFQSS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuXHRpZiAoIXRoaXMuX3JlbmRlclByb3BlcnRpZXMpIHtcblx0XHR0aHJvdyBuZXcgX2V4Y2VwdGlvbnMuTm9FbGVtZW50RXhjZXB0aW9uKCk7XG5cdH1cblxuXHRpZiAoQXJyYXkuaXNBcnJheSh0aGlzLl9yZW5kZXJQcm9wZXJ0aWVzKSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fcmVuZGVyUHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0cmVuZGVyKHRoaXMuX3JlbmRlclByb3BlcnRpZXNbaV0sIHRoaXMuX2VuY29kaW5ncywgdGhpcy5fb3B0aW9ucyk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJlbmRlcih0aGlzLl9yZW5kZXJQcm9wZXJ0aWVzLCB0aGlzLl9lbmNvZGluZ3MsIHRoaXMuX29wdGlvbnMpO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5BUEkucHJvdG90eXBlLl9kZWZhdWx0cyA9IF9kZWZhdWx0czIuZGVmYXVsdDtcblxuLy8gUHJlcGFyZXMgdGhlIGVuY29kaW5ncyBhbmQgY2FsbHMgdGhlIHJlbmRlcmVyXG5mdW5jdGlvbiByZW5kZXIocmVuZGVyUHJvcGVydGllcywgZW5jb2RpbmdzLCBvcHRpb25zKSB7XG5cdGVuY29kaW5ncyA9ICgwLCBfbGluZWFyaXplRW5jb2RpbmdzMi5kZWZhdWx0KShlbmNvZGluZ3MpO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZW5jb2RpbmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0ZW5jb2RpbmdzW2ldLm9wdGlvbnMgPSAoMCwgX21lcmdlMi5kZWZhdWx0KShvcHRpb25zLCBlbmNvZGluZ3NbaV0ub3B0aW9ucyk7XG5cdFx0KDAsIF9maXhPcHRpb25zMi5kZWZhdWx0KShlbmNvZGluZ3NbaV0ub3B0aW9ucyk7XG5cdH1cblxuXHQoMCwgX2ZpeE9wdGlvbnMyLmRlZmF1bHQpKG9wdGlvbnMpO1xuXG5cdHZhciBSZW5kZXJlciA9IHJlbmRlclByb3BlcnRpZXMucmVuZGVyZXI7XG5cdHZhciByZW5kZXJlciA9IG5ldyBSZW5kZXJlcihyZW5kZXJQcm9wZXJ0aWVzLmVsZW1lbnQsIGVuY29kaW5ncywgb3B0aW9ucyk7XG5cdHJlbmRlcmVyLnJlbmRlcigpO1xuXG5cdGlmIChyZW5kZXJQcm9wZXJ0aWVzLmFmdGVyUmVuZGVyKSB7XG5cdFx0cmVuZGVyUHJvcGVydGllcy5hZnRlclJlbmRlcigpO1xuXHR9XG59XG5cbi8vIEV4cG9ydCB0byBicm93c2VyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHR3aW5kb3cuSnNCYXJjb2RlID0gSnNCYXJjb2RlO1xufVxuXG4vLyBFeHBvcnQgdG8galF1ZXJ5XG4vKmdsb2JhbCBqUXVlcnkgKi9cbmlmICh0eXBlb2YgalF1ZXJ5ICE9PSAndW5kZWZpbmVkJykge1xuXHRqUXVlcnkuZm4uSnNCYXJjb2RlID0gZnVuY3Rpb24gKGNvbnRlbnQsIG9wdGlvbnMpIHtcblx0XHR2YXIgZWxlbWVudEFycmF5ID0gW107XG5cdFx0alF1ZXJ5KHRoaXMpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0ZWxlbWVudEFycmF5LnB1c2godGhpcyk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIEpzQmFyY29kZShlbGVtZW50QXJyYXksIGNvbnRlbnQsIG9wdGlvbnMpO1xuXHR9O1xufVxuXG4vLyBFeHBvcnQgdG8gY29tbW9uSlNcbm1vZHVsZS5leHBvcnRzID0gSnNCYXJjb2RlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQmFyY29kZSA9IGZ1bmN0aW9uIEJhcmNvZGUoZGF0YSwgb3B0aW9ucykge1xuXHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgQmFyY29kZSk7XG5cblx0dGhpcy5kYXRhID0gZGF0YTtcblx0dGhpcy50ZXh0ID0gb3B0aW9ucy50ZXh0IHx8IGRhdGE7XG5cdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBCYXJjb2RlOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9CYXJjb2RlMiA9IHJlcXVpcmUoJy4uL0JhcmNvZGUuanMnKTtcblxudmFyIF9CYXJjb2RlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0JhcmNvZGUyKTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8vIFRoaXMgaXMgdGhlIG1hc3RlciBjbGFzcyxcbi8vIGl0IGRvZXMgcmVxdWlyZSB0aGUgc3RhcnQgY29kZSB0byBiZSBpbmNsdWRlZCBpbiB0aGUgc3RyaW5nXG52YXIgQ09ERTEyOCA9IGZ1bmN0aW9uIChfQmFyY29kZSkge1xuXHRfaW5oZXJpdHMoQ09ERTEyOCwgX0JhcmNvZGUpO1xuXG5cdGZ1bmN0aW9uIENPREUxMjgoZGF0YSwgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDT0RFMTI4KTtcblxuXHRcdC8vIEdldCBhcnJheSBvZiBhc2NpaSBjb2RlcyBmcm9tIGRhdGFcblx0XHR2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ09ERTEyOC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENPREUxMjgpKS5jYWxsKHRoaXMsIGRhdGEuc3Vic3RyaW5nKDEpLCBvcHRpb25zKSk7XG5cblx0XHRfdGhpcy5ieXRlcyA9IGRhdGEuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoY2hhcikge1xuXHRcdFx0cmV0dXJuIGNoYXIuY2hhckNvZGVBdCgwKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoQ09ERTEyOCwgW3tcblx0XHRrZXk6ICd2YWxpZCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHZhbGlkKCkge1xuXHRcdFx0Ly8gQVNDSUkgdmFsdWUgcmFuZ2VzIDAtMTI3LCAyMDAtMjExXG5cdFx0XHRyZXR1cm4gKC9eW1xceDAwLVxceDdGXFx4QzgtXFx4RDNdKyQvLnRlc3QodGhpcy5kYXRhKVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBUaGUgcHVibGljIGVuY29kaW5nIGZ1bmN0aW9uXG5cblx0fSwge1xuXHRcdGtleTogJ2VuY29kZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGVuY29kZSgpIHtcblx0XHRcdHZhciBieXRlcyA9IHRoaXMuYnl0ZXM7XG5cdFx0XHQvLyBSZW1vdmUgdGhlIHN0YXJ0IGNvZGUgZnJvbSB0aGUgYnl0ZXMgYW5kIHNldCBpdHMgaW5kZXhcblx0XHRcdHZhciBzdGFydEluZGV4ID0gYnl0ZXMuc2hpZnQoKSAtIDEwNTtcblx0XHRcdC8vIEdldCBzdGFydCBzZXQgYnkgaW5kZXhcblx0XHRcdHZhciBzdGFydFNldCA9IF9jb25zdGFudHMuU0VUX0JZX0NPREVbc3RhcnRJbmRleF07XG5cblx0XHRcdGlmIChzdGFydFNldCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgZW5jb2RpbmcgZG9lcyBub3Qgc3RhcnQgd2l0aCBhIHN0YXJ0IGNoYXJhY3Rlci4nKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuc2hvdWxkRW5jb2RlQXNFYW4xMjgoKSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRieXRlcy51bnNoaWZ0KF9jb25zdGFudHMuRk5DMSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFN0YXJ0IGVuY29kZSB3aXRoIHRoZSByaWdodCB0eXBlXG5cdFx0XHR2YXIgZW5jb2RpbmdSZXN1bHQgPSBDT0RFMTI4Lm5leHQoYnl0ZXMsIDEsIHN0YXJ0U2V0KTtcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dGV4dDogdGhpcy50ZXh0ID09PSB0aGlzLmRhdGEgPyB0aGlzLnRleHQucmVwbGFjZSgvW15cXHgyMC1cXHg3RV0vZywgJycpIDogdGhpcy50ZXh0LFxuXHRcdFx0XHRkYXRhOlxuXHRcdFx0XHQvLyBBZGQgdGhlIHN0YXJ0IGJpdHNcblx0XHRcdFx0Q09ERTEyOC5nZXRCYXIoc3RhcnRJbmRleCkgK1xuXHRcdFx0XHQvLyBBZGQgdGhlIGVuY29kZWQgYml0c1xuXHRcdFx0XHRlbmNvZGluZ1Jlc3VsdC5yZXN1bHQgK1xuXHRcdFx0XHQvLyBBZGQgdGhlIGNoZWNrc3VtXG5cdFx0XHRcdENPREUxMjguZ2V0QmFyKChlbmNvZGluZ1Jlc3VsdC5jaGVja3N1bSArIHN0YXJ0SW5kZXgpICUgX2NvbnN0YW50cy5NT0RVTE8pICtcblx0XHRcdFx0Ly8gQWRkIHRoZSBlbmQgYml0c1xuXHRcdFx0XHRDT0RFMTI4LmdldEJhcihfY29uc3RhbnRzLlNUT1ApXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdC8vIEdTMS0xMjgvRUFOLTEyOFxuXG5cdH0sIHtcblx0XHRrZXk6ICdzaG91bGRFbmNvZGVBc0VhbjEyOCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHNob3VsZEVuY29kZUFzRWFuMTI4KCkge1xuXHRcdFx0dmFyIGlzRUFOMTI4ID0gdGhpcy5vcHRpb25zLmVhbjEyOCB8fCBmYWxzZTtcblx0XHRcdGlmICh0eXBlb2YgaXNFQU4xMjggPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGlzRUFOMTI4ID0gaXNFQU4xMjgudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGlzRUFOMTI4O1xuXHRcdH1cblxuXHRcdC8vIEdldCBhIGJhciBzeW1ib2wgYnkgaW5kZXhcblxuXHR9XSwgW3tcblx0XHRrZXk6ICdnZXRCYXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRCYXIoaW5kZXgpIHtcblx0XHRcdHJldHVybiBfY29uc3RhbnRzLkJBUlNbaW5kZXhdID8gX2NvbnN0YW50cy5CQVJTW2luZGV4XS50b1N0cmluZygpIDogJyc7XG5cdFx0fVxuXG5cdFx0Ly8gQ29ycmVjdCBhbiBpbmRleCBieSBhIHNldCBhbmQgc2hpZnQgaXQgZnJvbSB0aGUgYnl0ZXMgYXJyYXlcblxuXHR9LCB7XG5cdFx0a2V5OiAnY29ycmVjdEluZGV4Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29ycmVjdEluZGV4KGJ5dGVzLCBzZXQpIHtcblx0XHRcdGlmIChzZXQgPT09IF9jb25zdGFudHMuU0VUX0EpIHtcblx0XHRcdFx0dmFyIGNoYXJDb2RlID0gYnl0ZXMuc2hpZnQoKTtcblx0XHRcdFx0cmV0dXJuIGNoYXJDb2RlIDwgMzIgPyBjaGFyQ29kZSArIDY0IDogY2hhckNvZGUgLSAzMjtcblx0XHRcdH0gZWxzZSBpZiAoc2V0ID09PSBfY29uc3RhbnRzLlNFVF9CKSB7XG5cdFx0XHRcdHJldHVybiBieXRlcy5zaGlmdCgpIC0gMzI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gKGJ5dGVzLnNoaWZ0KCkgLSA0OCkgKiAxMCArIGJ5dGVzLnNoaWZ0KCkgLSA0ODtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICduZXh0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gbmV4dChieXRlcywgcG9zLCBzZXQpIHtcblx0XHRcdGlmICghYnl0ZXMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiB7IHJlc3VsdDogJycsIGNoZWNrc3VtOiAwIH07XG5cdFx0XHR9XG5cblx0XHRcdHZhciBuZXh0Q29kZSA9IHZvaWQgMCxcblx0XHRcdCAgICBpbmRleCA9IHZvaWQgMDtcblxuXHRcdFx0Ly8gU3BlY2lhbCBjaGFyYWN0ZXJzXG5cdFx0XHRpZiAoYnl0ZXNbMF0gPj0gMjAwKSB7XG5cdFx0XHRcdGluZGV4ID0gYnl0ZXMuc2hpZnQoKSAtIDEwNTtcblx0XHRcdFx0dmFyIG5leHRTZXQgPSBfY29uc3RhbnRzLlNXQVBbaW5kZXhdO1xuXG5cdFx0XHRcdC8vIFN3YXAgdG8gb3RoZXIgc2V0XG5cdFx0XHRcdGlmIChuZXh0U2V0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRuZXh0Q29kZSA9IENPREUxMjgubmV4dChieXRlcywgcG9zICsgMSwgbmV4dFNldCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gQ29udGludWUgb24gY3VycmVudCBzZXQgYnV0IGVuY29kZSBhIHNwZWNpYWwgY2hhcmFjdGVyXG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gU2hpZnRcblx0XHRcdFx0XHRcdGlmICgoc2V0ID09PSBfY29uc3RhbnRzLlNFVF9BIHx8IHNldCA9PT0gX2NvbnN0YW50cy5TRVRfQikgJiYgaW5kZXggPT09IF9jb25zdGFudHMuU0hJRlQpIHtcblx0XHRcdFx0XHRcdFx0Ly8gQ29udmVydCB0aGUgbmV4dCBjaGFyYWN0ZXIgc28gdGhhdCBpcyBlbmNvZGVkIGNvcnJlY3RseVxuXHRcdFx0XHRcdFx0XHRieXRlc1swXSA9IHNldCA9PT0gX2NvbnN0YW50cy5TRVRfQSA/IGJ5dGVzWzBdID4gOTUgPyBieXRlc1swXSAtIDk2IDogYnl0ZXNbMF0gOiBieXRlc1swXSA8IDMyID8gYnl0ZXNbMF0gKyA5NiA6IGJ5dGVzWzBdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bmV4dENvZGUgPSBDT0RFMTI4Lm5leHQoYnl0ZXMsIHBvcyArIDEsIHNldCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gQ29udGludWUgZW5jb2Rpbmdcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGluZGV4ID0gQ09ERTEyOC5jb3JyZWN0SW5kZXgoYnl0ZXMsIHNldCk7XG5cdFx0XHRcdFx0bmV4dENvZGUgPSBDT0RFMTI4Lm5leHQoYnl0ZXMsIHBvcyArIDEsIHNldCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0Ly8gR2V0IHRoZSBjb3JyZWN0IGJpbmFyeSBlbmNvZGluZyBhbmQgY2FsY3VsYXRlIHRoZSB3ZWlnaHRcblx0XHRcdHZhciBlbmMgPSBDT0RFMTI4LmdldEJhcihpbmRleCk7XG5cdFx0XHR2YXIgd2VpZ2h0ID0gaW5kZXggKiBwb3M7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHJlc3VsdDogZW5jICsgbmV4dENvZGUucmVzdWx0LFxuXHRcdFx0XHRjaGVja3N1bTogd2VpZ2h0ICsgbmV4dENvZGUuY2hlY2tzdW1cblx0XHRcdH07XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIENPREUxMjg7XG59KF9CYXJjb2RlMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ09ERTEyODsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfQ09ERTIgPSByZXF1aXJlKCcuL0NPREUxMjguanMnKTtcblxudmFyIF9DT0RFMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NPREUyKTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDT0RFMTI4QSA9IGZ1bmN0aW9uIChfQ09ERSkge1xuXHRfaW5oZXJpdHMoQ09ERTEyOEEsIF9DT0RFKTtcblxuXHRmdW5jdGlvbiBDT0RFMTI4QShzdHJpbmcsIG9wdGlvbnMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ09ERTEyOEEpO1xuXG5cdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDT0RFMTI4QS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENPREUxMjhBKSkuY2FsbCh0aGlzLCBfY29uc3RhbnRzLkFfU1RBUlRfQ0hBUiArIHN0cmluZywgb3B0aW9ucykpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKENPREUxMjhBLCBbe1xuXHRcdGtleTogJ3ZhbGlkJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gdmFsaWQoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFJlZ0V4cCgnXicgKyBfY29uc3RhbnRzLkFfQ0hBUlMgKyAnKyQnKS50ZXN0KHRoaXMuZGF0YSk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIENPREUxMjhBO1xufShfQ09ERTMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENPREUxMjhBOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9DT0RFMiA9IHJlcXVpcmUoJy4vQ09ERTEyOC5qcycpO1xuXG52YXIgX0NPREUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ09ERTIpO1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENPREUxMjhCID0gZnVuY3Rpb24gKF9DT0RFKSB7XG5cdF9pbmhlcml0cyhDT0RFMTI4QiwgX0NPREUpO1xuXG5cdGZ1bmN0aW9uIENPREUxMjhCKHN0cmluZywgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDT0RFMTI4Qik7XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENPREUxMjhCLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ09ERTEyOEIpKS5jYWxsKHRoaXMsIF9jb25zdGFudHMuQl9TVEFSVF9DSEFSICsgc3RyaW5nLCBvcHRpb25zKSk7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoQ09ERTEyOEIsIFt7XG5cdFx0a2V5OiAndmFsaWQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB2YWxpZCgpIHtcblx0XHRcdHJldHVybiBuZXcgUmVnRXhwKCdeJyArIF9jb25zdGFudHMuQl9DSEFSUyArICcrJCcpLnRlc3QodGhpcy5kYXRhKTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gQ09ERTEyOEI7XG59KF9DT0RFMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ09ERTEyOEI7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX0NPREUyID0gcmVxdWlyZSgnLi9DT0RFMTI4LmpzJyk7XG5cbnZhciBfQ09ERTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DT0RFMik7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ09ERTEyOEMgPSBmdW5jdGlvbiAoX0NPREUpIHtcblx0X2luaGVyaXRzKENPREUxMjhDLCBfQ09ERSk7XG5cblx0ZnVuY3Rpb24gQ09ERTEyOEMoc3RyaW5nLCBvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIENPREUxMjhDKTtcblxuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ09ERTEyOEMuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDT0RFMTI4QykpLmNhbGwodGhpcywgX2NvbnN0YW50cy5DX1NUQVJUX0NIQVIgKyBzdHJpbmcsIG9wdGlvbnMpKTtcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhDT0RFMTI4QywgW3tcblx0XHRrZXk6ICd2YWxpZCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHZhbGlkKCkge1xuXHRcdFx0cmV0dXJuIG5ldyBSZWdFeHAoJ14nICsgX2NvbnN0YW50cy5DX0NIQVJTICsgJyskJykudGVzdCh0aGlzLmRhdGEpO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBDT0RFMTI4Qztcbn0oX0NPREUzLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDT0RFMTI4QzsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfQ09ERTIgPSByZXF1aXJlKCcuL0NPREUxMjgnKTtcblxudmFyIF9DT0RFMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NPREUyKTtcblxudmFyIF9hdXRvID0gcmVxdWlyZSgnLi9hdXRvJyk7XG5cbnZhciBfYXV0bzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hdXRvKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ09ERTEyOEFVVE8gPSBmdW5jdGlvbiAoX0NPREUpIHtcblx0X2luaGVyaXRzKENPREUxMjhBVVRPLCBfQ09ERSk7XG5cblx0ZnVuY3Rpb24gQ09ERTEyOEFVVE8oZGF0YSwgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDT0RFMTI4QVVUTyk7XG5cblx0XHQvLyBBU0NJSSB2YWx1ZSByYW5nZXMgMC0xMjcsIDIwMC0yMTFcblx0XHRpZiAoL15bXFx4MDAtXFx4N0ZcXHhDOC1cXHhEM10rJC8udGVzdChkYXRhKSkge1xuXHRcdFx0dmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENPREUxMjhBVVRPLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ09ERTEyOEFVVE8pKS5jYWxsKHRoaXMsICgwLCBfYXV0bzIuZGVmYXVsdCkoZGF0YSksIG9wdGlvbnMpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENPREUxMjhBVVRPLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ09ERTEyOEFVVE8pKS5jYWxsKHRoaXMsIGRhdGEsIG9wdGlvbnMpKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzKTtcblx0fVxuXG5cdHJldHVybiBDT0RFMTI4QVVUTztcbn0oX0NPREUzLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDT0RFMTI4QVVUTzsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcblxuLy8gTWF0Y2ggU2V0IGZ1bmN0aW9uc1xudmFyIG1hdGNoU2V0QUxlbmd0aCA9IGZ1bmN0aW9uIG1hdGNoU2V0QUxlbmd0aChzdHJpbmcpIHtcblx0cmV0dXJuIHN0cmluZy5tYXRjaChuZXcgUmVnRXhwKCdeJyArIF9jb25zdGFudHMuQV9DSEFSUyArICcqJykpWzBdLmxlbmd0aDtcbn07XG52YXIgbWF0Y2hTZXRCTGVuZ3RoID0gZnVuY3Rpb24gbWF0Y2hTZXRCTGVuZ3RoKHN0cmluZykge1xuXHRyZXR1cm4gc3RyaW5nLm1hdGNoKG5ldyBSZWdFeHAoJ14nICsgX2NvbnN0YW50cy5CX0NIQVJTICsgJyonKSlbMF0ubGVuZ3RoO1xufTtcbnZhciBtYXRjaFNldEMgPSBmdW5jdGlvbiBtYXRjaFNldEMoc3RyaW5nKSB7XG5cdHJldHVybiBzdHJpbmcubWF0Y2gobmV3IFJlZ0V4cCgnXicgKyBfY29uc3RhbnRzLkNfQ0hBUlMgKyAnKicpKVswXTtcbn07XG5cbi8vIENPREUxMjhBIG9yIENPREUxMjhCXG5mdW5jdGlvbiBhdXRvU2VsZWN0RnJvbUFCKHN0cmluZywgaXNBKSB7XG5cdHZhciByYW5nZXMgPSBpc0EgPyBfY29uc3RhbnRzLkFfQ0hBUlMgOiBfY29uc3RhbnRzLkJfQ0hBUlM7XG5cdHZhciB1bnRpbEMgPSBzdHJpbmcubWF0Y2gobmV3IFJlZ0V4cCgnXignICsgcmFuZ2VzICsgJys/KSgoWzAtOV17Mn0pezIsfSkoW14wLTldfCQpJykpO1xuXG5cdGlmICh1bnRpbEMpIHtcblx0XHRyZXR1cm4gdW50aWxDWzFdICsgU3RyaW5nLmZyb21DaGFyQ29kZSgyMDQpICsgYXV0b1NlbGVjdEZyb21DKHN0cmluZy5zdWJzdHJpbmcodW50aWxDWzFdLmxlbmd0aCkpO1xuXHR9XG5cblx0dmFyIGNoYXJzID0gc3RyaW5nLm1hdGNoKG5ldyBSZWdFeHAoJ14nICsgcmFuZ2VzICsgJysnKSlbMF07XG5cblx0aWYgKGNoYXJzLmxlbmd0aCA9PT0gc3RyaW5nLmxlbmd0aCkge1xuXHRcdHJldHVybiBzdHJpbmc7XG5cdH1cblxuXHRyZXR1cm4gY2hhcnMgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGlzQSA/IDIwNSA6IDIwNikgKyBhdXRvU2VsZWN0RnJvbUFCKHN0cmluZy5zdWJzdHJpbmcoY2hhcnMubGVuZ3RoKSwgIWlzQSk7XG59XG5cbi8vIENPREUxMjhDXG5mdW5jdGlvbiBhdXRvU2VsZWN0RnJvbUMoc3RyaW5nKSB7XG5cdHZhciBjTWF0Y2ggPSBtYXRjaFNldEMoc3RyaW5nKTtcblx0dmFyIGxlbmd0aCA9IGNNYXRjaC5sZW5ndGg7XG5cblx0aWYgKGxlbmd0aCA9PT0gc3RyaW5nLmxlbmd0aCkge1xuXHRcdHJldHVybiBzdHJpbmc7XG5cdH1cblxuXHRzdHJpbmcgPSBzdHJpbmcuc3Vic3RyaW5nKGxlbmd0aCk7XG5cblx0Ly8gU2VsZWN0IEEvQiBkZXBlbmRpbmcgb24gdGhlIGxvbmdlc3QgbWF0Y2hcblx0dmFyIGlzQSA9IG1hdGNoU2V0QUxlbmd0aChzdHJpbmcpID49IG1hdGNoU2V0Qkxlbmd0aChzdHJpbmcpO1xuXHRyZXR1cm4gY01hdGNoICsgU3RyaW5nLmZyb21DaGFyQ29kZShpc0EgPyAyMDYgOiAyMDUpICsgYXV0b1NlbGVjdEZyb21BQihzdHJpbmcsIGlzQSk7XG59XG5cbi8vIERldGVjdCBDb2RlIFNldCAoQSwgQiBvciBDKSBhbmQgZm9ybWF0IHRoZSBzdHJpbmdcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHR2YXIgbmV3U3RyaW5nID0gdm9pZCAwO1xuXHR2YXIgY0xlbmd0aCA9IG1hdGNoU2V0QyhzdHJpbmcpLmxlbmd0aDtcblxuXHQvLyBTZWxlY3QgMTI4QyBpZiB0aGUgc3RyaW5nIHN0YXJ0IHdpdGggZW5vdWdoIGRpZ2l0c1xuXHRpZiAoY0xlbmd0aCA+PSAyKSB7XG5cdFx0bmV3U3RyaW5nID0gX2NvbnN0YW50cy5DX1NUQVJUX0NIQVIgKyBhdXRvU2VsZWN0RnJvbUMoc3RyaW5nKTtcblx0fSBlbHNlIHtcblx0XHQvLyBTZWxlY3QgQS9CIGRlcGVuZGluZyBvbiB0aGUgbG9uZ2VzdCBtYXRjaFxuXHRcdHZhciBpc0EgPSBtYXRjaFNldEFMZW5ndGgoc3RyaW5nKSA+IG1hdGNoU2V0Qkxlbmd0aChzdHJpbmcpO1xuXHRcdG5ld1N0cmluZyA9IChpc0EgPyBfY29uc3RhbnRzLkFfU1RBUlRfQ0hBUiA6IF9jb25zdGFudHMuQl9TVEFSVF9DSEFSKSArIGF1dG9TZWxlY3RGcm9tQUIoc3RyaW5nLCBpc0EpO1xuXHR9XG5cblx0cmV0dXJuIG5ld1N0cmluZy5yZXBsYWNlKC9bXFx4Q0RcXHhDRV0oW15dKVtcXHhDRFxceENFXS8sIC8vIEFueSBzZXF1ZW5jZSBiZXR3ZWVuIDIwNSBhbmQgMjA2IGNoYXJhY3RlcnNcblx0ZnVuY3Rpb24gKG1hdGNoLCBjaGFyKSB7XG5cdFx0cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMjAzKSArIGNoYXI7XG5cdH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9TRVRfQllfQ09ERTtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuLy8gY29uc3RhbnRzIGZvciBpbnRlcm5hbCB1c2FnZVxudmFyIFNFVF9BID0gZXhwb3J0cy5TRVRfQSA9IDA7XG52YXIgU0VUX0IgPSBleHBvcnRzLlNFVF9CID0gMTtcbnZhciBTRVRfQyA9IGV4cG9ydHMuU0VUX0MgPSAyO1xuXG4vLyBTcGVjaWFsIGNoYXJhY3RlcnNcbnZhciBTSElGVCA9IGV4cG9ydHMuU0hJRlQgPSA5ODtcbnZhciBTVEFSVF9BID0gZXhwb3J0cy5TVEFSVF9BID0gMTAzO1xudmFyIFNUQVJUX0IgPSBleHBvcnRzLlNUQVJUX0IgPSAxMDQ7XG52YXIgU1RBUlRfQyA9IGV4cG9ydHMuU1RBUlRfQyA9IDEwNTtcbnZhciBNT0RVTE8gPSBleHBvcnRzLk1PRFVMTyA9IDEwMztcbnZhciBTVE9QID0gZXhwb3J0cy5TVE9QID0gMTA2O1xudmFyIEZOQzEgPSBleHBvcnRzLkZOQzEgPSAyMDc7XG5cbi8vIEdldCBzZXQgYnkgc3RhcnQgY29kZVxudmFyIFNFVF9CWV9DT0RFID0gZXhwb3J0cy5TRVRfQllfQ09ERSA9IChfU0VUX0JZX0NPREUgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9TRVRfQllfQ09ERSwgU1RBUlRfQSwgU0VUX0EpLCBfZGVmaW5lUHJvcGVydHkoX1NFVF9CWV9DT0RFLCBTVEFSVF9CLCBTRVRfQiksIF9kZWZpbmVQcm9wZXJ0eShfU0VUX0JZX0NPREUsIFNUQVJUX0MsIFNFVF9DKSwgX1NFVF9CWV9DT0RFKTtcblxuLy8gR2V0IG5leHQgc2V0IGJ5IGNvZGVcbnZhciBTV0FQID0gZXhwb3J0cy5TV0FQID0ge1xuXHQxMDE6IFNFVF9BLFxuXHQxMDA6IFNFVF9CLFxuXHQ5OTogU0VUX0Ncbn07XG5cbnZhciBBX1NUQVJUX0NIQVIgPSBleHBvcnRzLkFfU1RBUlRfQ0hBUiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMjA4KTsgLy8gU1RBUlRfQSArIDEwNVxudmFyIEJfU1RBUlRfQ0hBUiA9IGV4cG9ydHMuQl9TVEFSVF9DSEFSID0gU3RyaW5nLmZyb21DaGFyQ29kZSgyMDkpOyAvLyBTVEFSVF9CICsgMTA1XG52YXIgQ19TVEFSVF9DSEFSID0gZXhwb3J0cy5DX1NUQVJUX0NIQVIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDIxMCk7IC8vIFNUQVJUX0MgKyAxMDVcblxuLy8gMTI4QSAoQ29kZSBTZXQgQSlcbi8vIEFTQ0lJIGNoYXJhY3RlcnMgMDAgdG8gOTUgKDDigJM5LCBB4oCTWiBhbmQgY29udHJvbCBjb2RlcyksIHNwZWNpYWwgY2hhcmFjdGVycywgYW5kIEZOQyAx4oCTNFxudmFyIEFfQ0hBUlMgPSBleHBvcnRzLkFfQ0hBUlMgPSBcIltcXHgwMC1cXHg1RlxceEM4LVxceENGXVwiO1xuXG4vLyAxMjhCIChDb2RlIFNldCBCKVxuLy8gQVNDSUkgY2hhcmFjdGVycyAzMiB0byAxMjcgKDDigJM5LCBB4oCTWiwgYeKAk3opLCBzcGVjaWFsIGNoYXJhY3RlcnMsIGFuZCBGTkMgMeKAkzRcbnZhciBCX0NIQVJTID0gZXhwb3J0cy5CX0NIQVJTID0gXCJbXFx4MjAtXFx4N0ZcXHhDOC1cXHhDRl1cIjtcblxuLy8gMTI4QyAoQ29kZSBTZXQgQylcbi8vIDAw4oCTOTkgKGVuY29kZXMgdHdvIGRpZ2l0cyB3aXRoIGEgc2luZ2xlIGNvZGUgcG9pbnQpIGFuZCBGTkMxXG52YXIgQ19DSEFSUyA9IGV4cG9ydHMuQ19DSEFSUyA9IFwiKFxceENGKlswLTldezJ9XFx4Q0YqKVwiO1xuXG4vLyBDT0RFMTI4IGluY2x1ZGVzIDEwNyBzeW1ib2xzOlxuLy8gMTAzIGRhdGEgc3ltYm9scywgMyBzdGFydCBzeW1ib2xzIChBLCBCIGFuZCBDKSwgYW5kIDEgc3RvcCBzeW1ib2wgKHRoZSBsYXN0IG9uZSlcbi8vIEVhY2ggc3ltYm9sIGNvbnNpc3Qgb2YgdGhyZWUgYmxhY2sgYmFycyAoMSkgYW5kIHRocmVlIHdoaXRlIHNwYWNlcyAoMCkuXG52YXIgQkFSUyA9IGV4cG9ydHMuQkFSUyA9IFsxMTAxMTAwMTEwMCwgMTEwMDExMDExMDAsIDExMDAxMTAwMTEwLCAxMDAxMDAxMTAwMCwgMTAwMTAwMDExMDAsIDEwMDAxMDAxMTAwLCAxMDAxMTAwMTAwMCwgMTAwMTEwMDAxMDAsIDEwMDAxMTAwMTAwLCAxMTAwMTAwMTAwMCwgMTEwMDEwMDAxMDAsIDExMDAwMTAwMTAwLCAxMDExMDAxMTEwMCwgMTAwMTEwMTExMDAsIDEwMDExMDAxMTEwLCAxMDExMTAwMTEwMCwgMTAwMTExMDExMDAsIDEwMDExMTAwMTEwLCAxMTAwMTExMDAxMCwgMTEwMDEwMTExMDAsIDExMDAxMDAxMTEwLCAxMTAxMTEwMDEwMCwgMTEwMDExMTAxMDAsIDExMTAxMTAxMTEwLCAxMTEwMTAwMTEwMCwgMTExMDAxMDExMDAsIDExMTAwMTAwMTEwLCAxMTEwMTEwMDEwMCwgMTExMDAxMTAxMDAsIDExMTAwMTEwMDEwLCAxMTAxMTAxMTAwMCwgMTEwMTEwMDAxMTAsIDExMDAwMTEwMTEwLCAxMDEwMDAxMTAwMCwgMTAwMDEwMTEwMDAsIDEwMDAxMDAwMTEwLCAxMDExMDAwMTAwMCwgMTAwMDExMDEwMDAsIDEwMDAxMTAwMDEwLCAxMTAxMDAwMTAwMCwgMTEwMDAxMDEwMDAsIDExMDAwMTAwMDEwLCAxMDExMDExMTAwMCwgMTAxMTAwMDExMTAsIDEwMDAxMTAxMTEwLCAxMDExMTAxMTAwMCwgMTAxMTEwMDAxMTAsIDEwMDAxMTEwMTEwLCAxMTEwMTExMDExMCwgMTEwMTAwMDExMTAsIDExMDAwMTAxMTEwLCAxMTAxMTEwMTAwMCwgMTEwMTExMDAwMTAsIDExMDExMTAxMTEwLCAxMTEwMTAxMTAwMCwgMTExMDEwMDAxMTAsIDExMTAwMDEwMTEwLCAxMTEwMTEwMTAwMCwgMTExMDExMDAwMTAsIDExMTAwMDExMDEwLCAxMTEwMTExMTAxMCwgMTEwMDEwMDAwMTAsIDExMTEwMDAxMDEwLCAxMDEwMDExMDAwMCwgMTAxMDAwMDExMDAsIDEwMDEwMTEwMDAwLCAxMDAxMDAwMDExMCwgMTAwMDAxMDExMDAsIDEwMDAwMTAwMTEwLCAxMDExMDAxMDAwMCwgMTAxMTAwMDAxMDAsIDEwMDExMDEwMDAwLCAxMDAxMTAwMDAxMCwgMTAwMDAxMTAxMDAsIDEwMDAwMTEwMDEwLCAxMTAwMDAxMDAxMCwgMTEwMDEwMTAwMDAsIDExMTEwMTExMDEwLCAxMTAwMDAxMDEwMCwgMTAwMDExMTEwMTAsIDEwMTAwMTExMTAwLCAxMDAxMDExMTEwMCwgMTAwMTAwMTExMTAsIDEwMTExMTAwMTAwLCAxMDAxMTExMDEwMCwgMTAwMTExMTAwMTAsIDExMTEwMTAwMTAwLCAxMTExMDAxMDEwMCwgMTExMTAwMTAwMTAsIDExMDExMDExMTEwLCAxMTAxMTExMDExMCwgMTExMTAxMTAxMTAsIDEwMTAxMTExMDAwLCAxMDEwMDAxMTExMCwgMTAwMDEwMTExMTAsIDEwMTExMTAxMDAwLCAxMDExMTEwMDAxMCwgMTExMTAxMDEwMDAsIDExMTEwMTAwMDEwLCAxMDExMTAxMTExMCwgMTAxMTExMDExMTAsIDExMTAxMDExMTEwLCAxMTExMDEwMTExMCwgMTEwMTAwMDAxMDAsIDExMDEwMDEwMDAwLCAxMTAxMDAxMTEwMCwgMTEwMDAxMTEwMTAxMV07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5DT0RFMTI4QyA9IGV4cG9ydHMuQ09ERTEyOEIgPSBleHBvcnRzLkNPREUxMjhBID0gZXhwb3J0cy5DT0RFMTI4ID0gdW5kZWZpbmVkO1xuXG52YXIgX0NPREUxMjhfQVVUTyA9IHJlcXVpcmUoJy4vQ09ERTEyOF9BVVRPLmpzJyk7XG5cbnZhciBfQ09ERTEyOF9BVVRPMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NPREUxMjhfQVVUTyk7XG5cbnZhciBfQ09ERTEyOEEgPSByZXF1aXJlKCcuL0NPREUxMjhBLmpzJyk7XG5cbnZhciBfQ09ERTEyOEEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ09ERTEyOEEpO1xuXG52YXIgX0NPREUxMjhCID0gcmVxdWlyZSgnLi9DT0RFMTI4Qi5qcycpO1xuXG52YXIgX0NPREUxMjhCMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NPREUxMjhCKTtcblxudmFyIF9DT0RFMTI4QyA9IHJlcXVpcmUoJy4vQ09ERTEyOEMuanMnKTtcblxudmFyIF9DT0RFMTI4QzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DT0RFMTI4Qyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuQ09ERTEyOCA9IF9DT0RFMTI4X0FVVE8yLmRlZmF1bHQ7XG5leHBvcnRzLkNPREUxMjhBID0gX0NPREUxMjhBMi5kZWZhdWx0O1xuZXhwb3J0cy5DT0RFMTI4QiA9IF9DT0RFMTI4QjIuZGVmYXVsdDtcbmV4cG9ydHMuQ09ERTEyOEMgPSBfQ09ERTEyOEMyLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkNPREUzOSA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9CYXJjb2RlMiA9IHJlcXVpcmUoXCIuLi9CYXJjb2RlLmpzXCIpO1xuXG52YXIgX0JhcmNvZGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQmFyY29kZTIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9IC8vIEVuY29kaW5nIGRvY3VtZW50YXRpb246XG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db2RlXzM5I0VuY29kaW5nXG5cbnZhciBDT0RFMzkgPSBmdW5jdGlvbiAoX0JhcmNvZGUpIHtcblx0X2luaGVyaXRzKENPREUzOSwgX0JhcmNvZGUpO1xuXG5cdGZ1bmN0aW9uIENPREUzOShkYXRhLCBvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIENPREUzOSk7XG5cblx0XHRkYXRhID0gZGF0YS50b1VwcGVyQ2FzZSgpO1xuXG5cdFx0Ly8gQ2FsY3VsYXRlIG1vZDQzIGNoZWNrc3VtIGlmIGVuYWJsZWRcblx0XHRpZiAob3B0aW9ucy5tb2Q0Mykge1xuXHRcdFx0ZGF0YSArPSBnZXRDaGFyYWN0ZXIobW9kNDNjaGVja3N1bShkYXRhKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDT0RFMzkuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDT0RFMzkpKS5jYWxsKHRoaXMsIGRhdGEsIG9wdGlvbnMpKTtcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhDT0RFMzksIFt7XG5cdFx0a2V5OiBcImVuY29kZVwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBlbmNvZGUoKSB7XG5cdFx0XHQvLyBGaXJzdCBjaGFyYWN0ZXIgaXMgYWx3YXlzIGEgKlxuXHRcdFx0dmFyIHJlc3VsdCA9IGdldEVuY29kaW5nKFwiKlwiKTtcblxuXHRcdFx0Ly8gVGFrZSBldmVyeSBjaGFyYWN0ZXIgYW5kIGFkZCB0aGUgYmluYXJ5IHJlcHJlc2VudGF0aW9uIHRvIHRoZSByZXN1bHRcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHJlc3VsdCArPSBnZXRFbmNvZGluZyh0aGlzLmRhdGFbaV0pICsgXCIwXCI7XG5cdFx0XHR9XG5cblx0XHRcdC8vIExhc3QgY2hhcmFjdGVyIGlzIGFsd2F5cyBhICpcblx0XHRcdHJlc3VsdCArPSBnZXRFbmNvZGluZyhcIipcIik7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IHJlc3VsdCxcblx0XHRcdFx0dGV4dDogdGhpcy50ZXh0XG5cdFx0XHR9O1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJ2YWxpZFwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB2YWxpZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmRhdGEuc2VhcmNoKC9eWzAtOUEtWlxcLVxcLlxcIFxcJFxcL1xcK1xcJV0rJC8pICE9PSAtMTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gQ09ERTM5O1xufShfQmFyY29kZTMuZGVmYXVsdCk7XG5cbi8vIEFsbCBjaGFyYWN0ZXJzLiBUaGUgcG9zaXRpb24gaW4gdGhlIGFycmF5IGlzIHRoZSAoY2hlY2tzdW0pIHZhbHVlXG5cblxudmFyIGNoYXJhY3RlcnMgPSBbXCIwXCIsIFwiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIiwgXCJJXCIsIFwiSlwiLCBcIktcIiwgXCJMXCIsIFwiTVwiLCBcIk5cIiwgXCJPXCIsIFwiUFwiLCBcIlFcIiwgXCJSXCIsIFwiU1wiLCBcIlRcIiwgXCJVXCIsIFwiVlwiLCBcIldcIiwgXCJYXCIsIFwiWVwiLCBcIlpcIiwgXCItXCIsIFwiLlwiLCBcIiBcIiwgXCIkXCIsIFwiL1wiLCBcIitcIiwgXCIlXCIsIFwiKlwiXTtcblxuLy8gVGhlIGRlY2ltYWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGNoYXJhY3RlcnMsIGlzIGNvbnZlcnRlZCB0byB0aGVcbi8vIGNvcnJlc3BvbmRpbmcgYmluYXJ5IHdpdGggdGhlIGdldEVuY29kaW5nIGZ1bmN0aW9uXG52YXIgZW5jb2RpbmdzID0gWzIwOTU3LCAyOTc4MywgMjM2MzksIDMwNDg1LCAyMDk1MSwgMjk4MTMsIDIzNjY5LCAyMDg1NSwgMjk3ODksIDIzNjQ1LCAyOTk3NSwgMjM4MzEsIDMwNTMzLCAyMjI5NSwgMzAxNDksIDI0MDA1LCAyMTYyMywgMjk5ODEsIDIzODM3LCAyMjMwMSwgMzAwMjMsIDIzODc5LCAzMDU0NSwgMjIzNDMsIDMwMTYxLCAyNDAxNywgMjE5NTksIDMwMDY1LCAyMzkyMSwgMjIzODUsIDI5MDE1LCAxODI2MywgMjkxNDEsIDE3ODc5LCAyOTA0NSwgMTgyOTMsIDE3NzgzLCAyOTAyMSwgMTgyNjksIDE3NDc3LCAxNzQ4OSwgMTc2ODEsIDIwNzUzLCAzNTc3MF07XG5cbi8vIEdldCB0aGUgYmluYXJ5IHJlcHJlc2VudGF0aW9uIG9mIGEgY2hhcmFjdGVyIGJ5IGNvbnZlcnRpbmcgdGhlIGVuY29kaW5nc1xuLy8gZnJvbSBkZWNpbWFsIHRvIGJpbmFyeVxuZnVuY3Rpb24gZ2V0RW5jb2RpbmcoY2hhcmFjdGVyKSB7XG5cdHJldHVybiBnZXRCaW5hcnkoY2hhcmFjdGVyVmFsdWUoY2hhcmFjdGVyKSk7XG59XG5cbmZ1bmN0aW9uIGdldEJpbmFyeShjaGFyYWN0ZXJWYWx1ZSkge1xuXHRyZXR1cm4gZW5jb2RpbmdzW2NoYXJhY3RlclZhbHVlXS50b1N0cmluZygyKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2hhcmFjdGVyKGNoYXJhY3RlclZhbHVlKSB7XG5cdHJldHVybiBjaGFyYWN0ZXJzW2NoYXJhY3RlclZhbHVlXTtcbn1cblxuZnVuY3Rpb24gY2hhcmFjdGVyVmFsdWUoY2hhcmFjdGVyKSB7XG5cdHJldHVybiBjaGFyYWN0ZXJzLmluZGV4T2YoY2hhcmFjdGVyKTtcbn1cblxuZnVuY3Rpb24gbW9kNDNjaGVja3N1bShkYXRhKSB7XG5cdHZhciBjaGVja3N1bSA9IDA7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdGNoZWNrc3VtICs9IGNoYXJhY3RlclZhbHVlKGRhdGFbaV0pO1xuXHR9XG5cblx0Y2hlY2tzdW0gPSBjaGVja3N1bSAlIDQzO1xuXHRyZXR1cm4gY2hlY2tzdW07XG59XG5cbmV4cG9ydHMuQ09ERTM5ID0gQ09ERTM5OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG52YXIgX2VuY29kZXIgPSByZXF1aXJlKCcuL2VuY29kZXInKTtcblxudmFyIF9lbmNvZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2VuY29kZXIpO1xuXG52YXIgX0JhcmNvZGUyID0gcmVxdWlyZSgnLi4vQmFyY29kZScpO1xuXG52YXIgX0JhcmNvZGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQmFyY29kZTIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8vIEJhc2UgY2xhc3MgZm9yIEVBTjggJiBFQU4xM1xudmFyIEVBTiA9IGZ1bmN0aW9uIChfQmFyY29kZSkge1xuXHRfaW5oZXJpdHMoRUFOLCBfQmFyY29kZSk7XG5cblx0ZnVuY3Rpb24gRUFOKGRhdGEsIG9wdGlvbnMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgRUFOKTtcblxuXHRcdC8vIE1ha2Ugc3VyZSB0aGUgZm9udCBpcyBub3QgYmlnZ2VyIHRoYW4gdGhlIHNwYWNlIGJldHdlZW4gdGhlIGd1YXJkIGJhcnNcblx0XHR2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRUFOLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRUFOKSkuY2FsbCh0aGlzLCBkYXRhLCBvcHRpb25zKSk7XG5cblx0XHRfdGhpcy5mb250U2l6ZSA9ICFvcHRpb25zLmZsYXQgJiYgb3B0aW9ucy5mb250U2l6ZSA+IG9wdGlvbnMud2lkdGggKiAxMCA/IG9wdGlvbnMud2lkdGggKiAxMCA6IG9wdGlvbnMuZm9udFNpemU7XG5cblx0XHQvLyBNYWtlIHRoZSBndWFyZCBiYXJzIGdvIGRvd24gaGFsZiB0aGUgd2F5IG9mIHRoZSB0ZXh0XG5cdFx0X3RoaXMuZ3VhcmRIZWlnaHQgPSBvcHRpb25zLmhlaWdodCArIF90aGlzLmZvbnRTaXplIC8gMiArIG9wdGlvbnMudGV4dE1hcmdpbjtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoRUFOLCBbe1xuXHRcdGtleTogJ2VuY29kZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGVuY29kZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbnMuZmxhdCA/IHRoaXMuZW5jb2RlRmxhdCgpIDogdGhpcy5lbmNvZGVHdWFyZGVkKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnbGVmdFRleHQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBsZWZ0VGV4dChmcm9tLCB0bykge1xuXHRcdFx0cmV0dXJuIHRoaXMudGV4dC5zdWJzdHIoZnJvbSwgdG8pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2xlZnRFbmNvZGUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBsZWZ0RW5jb2RlKGRhdGEsIHN0cnVjdHVyZSkge1xuXHRcdFx0cmV0dXJuICgwLCBfZW5jb2RlcjIuZGVmYXVsdCkoZGF0YSwgc3RydWN0dXJlKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyaWdodFRleHQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByaWdodFRleHQoZnJvbSwgdG8pIHtcblx0XHRcdHJldHVybiB0aGlzLnRleHQuc3Vic3RyKGZyb20sIHRvKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyaWdodEVuY29kZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJpZ2h0RW5jb2RlKGRhdGEsIHN0cnVjdHVyZSkge1xuXHRcdFx0cmV0dXJuICgwLCBfZW5jb2RlcjIuZGVmYXVsdCkoZGF0YSwgc3RydWN0dXJlKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdlbmNvZGVHdWFyZGVkJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZW5jb2RlR3VhcmRlZCgpIHtcblx0XHRcdHZhciB0ZXh0T3B0aW9ucyA9IHsgZm9udFNpemU6IHRoaXMuZm9udFNpemUgfTtcblx0XHRcdHZhciBndWFyZE9wdGlvbnMgPSB7IGhlaWdodDogdGhpcy5ndWFyZEhlaWdodCB9O1xuXG5cdFx0XHRyZXR1cm4gW3sgZGF0YTogX2NvbnN0YW50cy5TSURFX0JJTiwgb3B0aW9uczogZ3VhcmRPcHRpb25zIH0sIHsgZGF0YTogdGhpcy5sZWZ0RW5jb2RlKCksIHRleHQ6IHRoaXMubGVmdFRleHQoKSwgb3B0aW9uczogdGV4dE9wdGlvbnMgfSwgeyBkYXRhOiBfY29uc3RhbnRzLk1JRERMRV9CSU4sIG9wdGlvbnM6IGd1YXJkT3B0aW9ucyB9LCB7IGRhdGE6IHRoaXMucmlnaHRFbmNvZGUoKSwgdGV4dDogdGhpcy5yaWdodFRleHQoKSwgb3B0aW9uczogdGV4dE9wdGlvbnMgfSwgeyBkYXRhOiBfY29uc3RhbnRzLlNJREVfQklOLCBvcHRpb25zOiBndWFyZE9wdGlvbnMgfV07XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZW5jb2RlRmxhdCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGVuY29kZUZsYXQoKSB7XG5cdFx0XHR2YXIgZGF0YSA9IFtfY29uc3RhbnRzLlNJREVfQklOLCB0aGlzLmxlZnRFbmNvZGUoKSwgX2NvbnN0YW50cy5NSURETEVfQklOLCB0aGlzLnJpZ2h0RW5jb2RlKCksIF9jb25zdGFudHMuU0lERV9CSU5dO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhOiBkYXRhLmpvaW4oJycpLFxuXHRcdFx0XHR0ZXh0OiB0aGlzLnRleHRcblx0XHRcdH07XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIEVBTjtcbn0oX0JhcmNvZGUzLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBFQU47IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikgeyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7IH0gfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH07XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcblxudmFyIF9FQU4yID0gcmVxdWlyZSgnLi9FQU4nKTtcblxudmFyIF9FQU4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRUFOMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH0gLy8gRW5jb2RpbmcgZG9jdW1lbnRhdGlvbjpcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0ludGVybmF0aW9uYWxfQXJ0aWNsZV9OdW1iZXJfKEVBTikjQmluYXJ5X2VuY29kaW5nX29mX2RhdGFfZGlnaXRzX2ludG9fRUFOLTEzX2JhcmNvZGVcblxuLy8gQ2FsY3VsYXRlIHRoZSBjaGVja3N1bSBkaWdpdFxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSW50ZXJuYXRpb25hbF9BcnRpY2xlX051bWJlcl8oRUFOKSNDYWxjdWxhdGlvbl9vZl9jaGVja3N1bV9kaWdpdFxudmFyIGNoZWNrc3VtID0gZnVuY3Rpb24gY2hlY2tzdW0obnVtYmVyKSB7XG5cdHZhciByZXMgPSBudW1iZXIuc3Vic3RyKDAsIDEyKS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0cmV0dXJuICtuO1xuXHR9KS5yZWR1Y2UoZnVuY3Rpb24gKHN1bSwgYSwgaWR4KSB7XG5cdFx0cmV0dXJuIGlkeCAlIDIgPyBzdW0gKyBhICogMyA6IHN1bSArIGE7XG5cdH0sIDApO1xuXG5cdHJldHVybiAoMTAgLSByZXMgJSAxMCkgJSAxMDtcbn07XG5cbnZhciBFQU4xMyA9IGZ1bmN0aW9uIChfRUFOKSB7XG5cdF9pbmhlcml0cyhFQU4xMywgX0VBTik7XG5cblx0ZnVuY3Rpb24gRUFOMTMoZGF0YSwgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFQU4xMyk7XG5cblx0XHQvLyBBZGQgY2hlY2tzdW0gaWYgaXQgZG9lcyBub3QgZXhpc3Rcblx0XHRpZiAoZGF0YS5zZWFyY2goL15bMC05XXsxMn0kLykgIT09IC0xKSB7XG5cdFx0XHRkYXRhICs9IGNoZWNrc3VtKGRhdGEpO1xuXHRcdH1cblxuXHRcdC8vIEFkZHMgYSBsYXN0IGNoYXJhY3RlciB0byB0aGUgZW5kIG9mIHRoZSBiYXJjb2RlXG5cdFx0dmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEVBTjEzLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRUFOMTMpKS5jYWxsKHRoaXMsIGRhdGEsIG9wdGlvbnMpKTtcblxuXHRcdF90aGlzLmxhc3RDaGFyID0gb3B0aW9ucy5sYXN0Q2hhcjtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoRUFOMTMsIFt7XG5cdFx0a2V5OiAndmFsaWQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB2YWxpZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmRhdGEuc2VhcmNoKC9eWzAtOV17MTN9JC8pICE9PSAtMSAmJiArdGhpcy5kYXRhWzEyXSA9PT0gY2hlY2tzdW0odGhpcy5kYXRhKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdsZWZ0VGV4dCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGxlZnRUZXh0KCkge1xuXHRcdFx0cmV0dXJuIF9nZXQoRUFOMTMucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRUFOMTMucHJvdG90eXBlKSwgJ2xlZnRUZXh0JywgdGhpcykuY2FsbCh0aGlzLCAxLCA2KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdsZWZ0RW5jb2RlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gbGVmdEVuY29kZSgpIHtcblx0XHRcdHZhciBkYXRhID0gdGhpcy5kYXRhLnN1YnN0cigxLCA2KTtcblx0XHRcdHZhciBzdHJ1Y3R1cmUgPSBfY29uc3RhbnRzLkVBTjEzX1NUUlVDVFVSRVt0aGlzLmRhdGFbMF1dO1xuXHRcdFx0cmV0dXJuIF9nZXQoRUFOMTMucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRUFOMTMucHJvdG90eXBlKSwgJ2xlZnRFbmNvZGUnLCB0aGlzKS5jYWxsKHRoaXMsIGRhdGEsIHN0cnVjdHVyZSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmlnaHRUZXh0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmlnaHRUZXh0KCkge1xuXHRcdFx0cmV0dXJuIF9nZXQoRUFOMTMucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRUFOMTMucHJvdG90eXBlKSwgJ3JpZ2h0VGV4dCcsIHRoaXMpLmNhbGwodGhpcywgNywgNik7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmlnaHRFbmNvZGUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByaWdodEVuY29kZSgpIHtcblx0XHRcdHZhciBkYXRhID0gdGhpcy5kYXRhLnN1YnN0cig3LCA2KTtcblx0XHRcdHJldHVybiBfZ2V0KEVBTjEzLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEVBTjEzLnByb3RvdHlwZSksICdyaWdodEVuY29kZScsIHRoaXMpLmNhbGwodGhpcywgZGF0YSwgJ1JSUlJSUicpO1xuXHRcdH1cblxuXHRcdC8vIFRoZSBcInN0YW5kYXJkXCIgd2F5IG9mIHByaW50aW5nIEVBTjEzIGJhcmNvZGVzIHdpdGggZ3VhcmQgYmFyc1xuXG5cdH0sIHtcblx0XHRrZXk6ICdlbmNvZGVHdWFyZGVkJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZW5jb2RlR3VhcmRlZCgpIHtcblx0XHRcdHZhciBkYXRhID0gX2dldChFQU4xMy5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihFQU4xMy5wcm90b3R5cGUpLCAnZW5jb2RlR3VhcmRlZCcsIHRoaXMpLmNhbGwodGhpcyk7XG5cblx0XHRcdC8vIEV4dGVuZCBkYXRhIHdpdGggbGVmdCBkaWdpdCAmIGxhc3QgY2hhcmFjdGVyXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLmRpc3BsYXlWYWx1ZSkge1xuXHRcdFx0XHRkYXRhLnVuc2hpZnQoe1xuXHRcdFx0XHRcdGRhdGE6ICcwMDAwMDAwMDAwMDAnLFxuXHRcdFx0XHRcdHRleHQ6IHRoaXMudGV4dC5zdWJzdHIoMCwgMSksXG5cdFx0XHRcdFx0b3B0aW9uczogeyB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6IHRoaXMuZm9udFNpemUgfVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLmxhc3RDaGFyKSB7XG5cdFx0XHRcdFx0ZGF0YS5wdXNoKHtcblx0XHRcdFx0XHRcdGRhdGE6ICcwMCdcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRkYXRhLnB1c2goe1xuXHRcdFx0XHRcdFx0ZGF0YTogJzAwMDAwJyxcblx0XHRcdFx0XHRcdHRleHQ6IHRoaXMub3B0aW9ucy5sYXN0Q2hhcixcblx0XHRcdFx0XHRcdG9wdGlvbnM6IHsgZm9udFNpemU6IHRoaXMuZm9udFNpemUgfVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBkYXRhO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBFQU4xMztcbn0oX0VBTjMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEVBTjEzOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG52YXIgX2VuY29kZXIgPSByZXF1aXJlKCcuL2VuY29kZXInKTtcblxudmFyIF9lbmNvZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2VuY29kZXIpO1xuXG52YXIgX0JhcmNvZGUyID0gcmVxdWlyZSgnLi4vQmFyY29kZScpO1xuXG52YXIgX0JhcmNvZGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQmFyY29kZTIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9IC8vIEVuY29kaW5nIGRvY3VtZW50YXRpb246XG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9FQU5fMiNFbmNvZGluZ1xuXG52YXIgRUFOMiA9IGZ1bmN0aW9uIChfQmFyY29kZSkge1xuXHRfaW5oZXJpdHMoRUFOMiwgX0JhcmNvZGUpO1xuXG5cdGZ1bmN0aW9uIEVBTjIoZGF0YSwgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFQU4yKTtcblxuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRUFOMi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEVBTjIpKS5jYWxsKHRoaXMsIGRhdGEsIG9wdGlvbnMpKTtcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhFQU4yLCBbe1xuXHRcdGtleTogJ3ZhbGlkJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gdmFsaWQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kYXRhLnNlYXJjaCgvXlswLTldezJ9JC8pICE9PSAtMTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdlbmNvZGUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBlbmNvZGUoKSB7XG5cdFx0XHQvLyBDaG9vc2UgdGhlIHN0cnVjdHVyZSBiYXNlZCBvbiB0aGUgbnVtYmVyIG1vZCA0XG5cdFx0XHR2YXIgc3RydWN0dXJlID0gX2NvbnN0YW50cy5FQU4yX1NUUlVDVFVSRVtwYXJzZUludCh0aGlzLmRhdGEpICUgNF07XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQvLyBTdGFydCBiaXRzICsgRW5jb2RlIHRoZSB0d28gZGlnaXRzIHdpdGggMDEgaW4gYmV0d2VlblxuXHRcdFx0XHRkYXRhOiAnMTAxMScgKyAoMCwgX2VuY29kZXIyLmRlZmF1bHQpKHRoaXMuZGF0YSwgc3RydWN0dXJlLCAnMDEnKSxcblx0XHRcdFx0dGV4dDogdGhpcy50ZXh0XG5cdFx0XHR9O1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBFQU4yO1xufShfQmFyY29kZTMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEVBTjI7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbnZhciBfZW5jb2RlciA9IHJlcXVpcmUoJy4vZW5jb2RlcicpO1xuXG52YXIgX2VuY29kZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZW5jb2Rlcik7XG5cbnZhciBfQmFyY29kZTIgPSByZXF1aXJlKCcuLi9CYXJjb2RlJyk7XG5cbnZhciBfQmFyY29kZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CYXJjb2RlMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH0gLy8gRW5jb2RpbmcgZG9jdW1lbnRhdGlvbjpcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0VBTl81I0VuY29kaW5nXG5cbnZhciBjaGVja3N1bSA9IGZ1bmN0aW9uIGNoZWNrc3VtKGRhdGEpIHtcblx0dmFyIHJlc3VsdCA9IGRhdGEuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdHJldHVybiArbjtcblx0fSkucmVkdWNlKGZ1bmN0aW9uIChzdW0sIGEsIGlkeCkge1xuXHRcdHJldHVybiBpZHggJSAyID8gc3VtICsgYSAqIDkgOiBzdW0gKyBhICogMztcblx0fSwgMCk7XG5cdHJldHVybiByZXN1bHQgJSAxMDtcbn07XG5cbnZhciBFQU41ID0gZnVuY3Rpb24gKF9CYXJjb2RlKSB7XG5cdF9pbmhlcml0cyhFQU41LCBfQmFyY29kZSk7XG5cblx0ZnVuY3Rpb24gRUFONShkYXRhLCBvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIEVBTjUpO1xuXG5cdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChFQU41Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRUFONSkpLmNhbGwodGhpcywgZGF0YSwgb3B0aW9ucykpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKEVBTjUsIFt7XG5cdFx0a2V5OiAndmFsaWQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB2YWxpZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmRhdGEuc2VhcmNoKC9eWzAtOV17NX0kLykgIT09IC0xO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2VuY29kZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGVuY29kZSgpIHtcblx0XHRcdHZhciBzdHJ1Y3R1cmUgPSBfY29uc3RhbnRzLkVBTjVfU1RSVUNUVVJFW2NoZWNrc3VtKHRoaXMuZGF0YSldO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YTogJzEwMTEnICsgKDAsIF9lbmNvZGVyMi5kZWZhdWx0KSh0aGlzLmRhdGEsIHN0cnVjdHVyZSwgJzAxJyksXG5cdFx0XHRcdHRleHQ6IHRoaXMudGV4dFxuXHRcdFx0fTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gRUFONTtcbn0oX0JhcmNvZGUzLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBFQU41OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQob2JqZWN0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpOyB9IH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9O1xuXG52YXIgX0VBTjIgPSByZXF1aXJlKCcuL0VBTicpO1xuXG52YXIgX0VBTjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FQU4yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvLyBFbmNvZGluZyBkb2N1bWVudGF0aW9uOlxuLy8gaHR0cDovL3d3dy5iYXJjb2RlaXNsYW5kLmNvbS9lYW44LnBodG1sXG5cbi8vIENhbGN1bGF0ZSB0aGUgY2hlY2tzdW0gZGlnaXRcbnZhciBjaGVja3N1bSA9IGZ1bmN0aW9uIGNoZWNrc3VtKG51bWJlcikge1xuXHR2YXIgcmVzID0gbnVtYmVyLnN1YnN0cigwLCA3KS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0cmV0dXJuICtuO1xuXHR9KS5yZWR1Y2UoZnVuY3Rpb24gKHN1bSwgYSwgaWR4KSB7XG5cdFx0cmV0dXJuIGlkeCAlIDIgPyBzdW0gKyBhIDogc3VtICsgYSAqIDM7XG5cdH0sIDApO1xuXG5cdHJldHVybiAoMTAgLSByZXMgJSAxMCkgJSAxMDtcbn07XG5cbnZhciBFQU44ID0gZnVuY3Rpb24gKF9FQU4pIHtcblx0X2luaGVyaXRzKEVBTjgsIF9FQU4pO1xuXG5cdGZ1bmN0aW9uIEVBTjgoZGF0YSwgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFQU44KTtcblxuXHRcdC8vIEFkZCBjaGVja3N1bSBpZiBpdCBkb2VzIG5vdCBleGlzdFxuXHRcdGlmIChkYXRhLnNlYXJjaCgvXlswLTldezd9JC8pICE9PSAtMSkge1xuXHRcdFx0ZGF0YSArPSBjaGVja3N1bShkYXRhKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEVBTjguX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihFQU44KSkuY2FsbCh0aGlzLCBkYXRhLCBvcHRpb25zKSk7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoRUFOOCwgW3tcblx0XHRrZXk6ICd2YWxpZCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHZhbGlkKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGF0YS5zZWFyY2goL15bMC05XXs4fSQvKSAhPT0gLTEgJiYgK3RoaXMuZGF0YVs3XSA9PT0gY2hlY2tzdW0odGhpcy5kYXRhKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdsZWZ0VGV4dCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGxlZnRUZXh0KCkge1xuXHRcdFx0cmV0dXJuIF9nZXQoRUFOOC5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihFQU44LnByb3RvdHlwZSksICdsZWZ0VGV4dCcsIHRoaXMpLmNhbGwodGhpcywgMCwgNCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnbGVmdEVuY29kZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGxlZnRFbmNvZGUoKSB7XG5cdFx0XHR2YXIgZGF0YSA9IHRoaXMuZGF0YS5zdWJzdHIoMCwgNCk7XG5cdFx0XHRyZXR1cm4gX2dldChFQU44LnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEVBTjgucHJvdG90eXBlKSwgJ2xlZnRFbmNvZGUnLCB0aGlzKS5jYWxsKHRoaXMsIGRhdGEsICdMTExMJyk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmlnaHRUZXh0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmlnaHRUZXh0KCkge1xuXHRcdFx0cmV0dXJuIF9nZXQoRUFOOC5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihFQU44LnByb3RvdHlwZSksICdyaWdodFRleHQnLCB0aGlzKS5jYWxsKHRoaXMsIDQsIDQpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JpZ2h0RW5jb2RlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmlnaHRFbmNvZGUoKSB7XG5cdFx0XHR2YXIgZGF0YSA9IHRoaXMuZGF0YS5zdWJzdHIoNCwgNCk7XG5cdFx0XHRyZXR1cm4gX2dldChFQU44LnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEVBTjgucHJvdG90eXBlKSwgJ3JpZ2h0RW5jb2RlJywgdGhpcykuY2FsbCh0aGlzLCBkYXRhLCAnUlJSUicpO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBFQU44O1xufShfRUFOMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRUFOODsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZXhwb3J0cy5jaGVja3N1bSA9IGNoZWNrc3VtO1xuXG52YXIgX2VuY29kZXIgPSByZXF1aXJlKFwiLi9lbmNvZGVyXCIpO1xuXG52YXIgX2VuY29kZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZW5jb2Rlcik7XG5cbnZhciBfQmFyY29kZTIgPSByZXF1aXJlKFwiLi4vQmFyY29kZS5qc1wiKTtcblxudmFyIF9CYXJjb2RlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0JhcmNvZGUyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvLyBFbmNvZGluZyBkb2N1bWVudGF0aW9uOlxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW5pdmVyc2FsX1Byb2R1Y3RfQ29kZSNFbmNvZGluZ1xuXG52YXIgVVBDID0gZnVuY3Rpb24gKF9CYXJjb2RlKSB7XG5cdF9pbmhlcml0cyhVUEMsIF9CYXJjb2RlKTtcblxuXHRmdW5jdGlvbiBVUEMoZGF0YSwgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBVUEMpO1xuXG5cdFx0Ly8gQWRkIGNoZWNrc3VtIGlmIGl0IGRvZXMgbm90IGV4aXN0XG5cdFx0aWYgKGRhdGEuc2VhcmNoKC9eWzAtOV17MTF9JC8pICE9PSAtMSkge1xuXHRcdFx0ZGF0YSArPSBjaGVja3N1bShkYXRhKTtcblx0XHR9XG5cblx0XHR2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoVVBDLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVVBDKSkuY2FsbCh0aGlzLCBkYXRhLCBvcHRpb25zKSk7XG5cblx0XHRfdGhpcy5kaXNwbGF5VmFsdWUgPSBvcHRpb25zLmRpc3BsYXlWYWx1ZTtcblxuXHRcdC8vIE1ha2Ugc3VyZSB0aGUgZm9udCBpcyBub3QgYmlnZ2VyIHRoYW4gdGhlIHNwYWNlIGJldHdlZW4gdGhlIGd1YXJkIGJhcnNcblx0XHRpZiAob3B0aW9ucy5mb250U2l6ZSA+IG9wdGlvbnMud2lkdGggKiAxMCkge1xuXHRcdFx0X3RoaXMuZm9udFNpemUgPSBvcHRpb25zLndpZHRoICogMTA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF90aGlzLmZvbnRTaXplID0gb3B0aW9ucy5mb250U2l6ZTtcblx0XHR9XG5cblx0XHQvLyBNYWtlIHRoZSBndWFyZCBiYXJzIGdvIGRvd24gaGFsZiB0aGUgd2F5IG9mIHRoZSB0ZXh0XG5cdFx0X3RoaXMuZ3VhcmRIZWlnaHQgPSBvcHRpb25zLmhlaWdodCArIF90aGlzLmZvbnRTaXplIC8gMiArIG9wdGlvbnMudGV4dE1hcmdpbjtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoVVBDLCBbe1xuXHRcdGtleTogXCJ2YWxpZFwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB2YWxpZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmRhdGEuc2VhcmNoKC9eWzAtOV17MTJ9JC8pICE9PSAtMSAmJiB0aGlzLmRhdGFbMTFdID09IGNoZWNrc3VtKHRoaXMuZGF0YSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcImVuY29kZVwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBlbmNvZGUoKSB7XG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLmZsYXQpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZmxhdEVuY29kaW5nKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5ndWFyZGVkRW5jb2RpbmcoKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwiZmxhdEVuY29kaW5nXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZsYXRFbmNvZGluZygpIHtcblx0XHRcdHZhciByZXN1bHQgPSBcIlwiO1xuXG5cdFx0XHRyZXN1bHQgKz0gXCIxMDFcIjtcblx0XHRcdHJlc3VsdCArPSAoMCwgX2VuY29kZXIyLmRlZmF1bHQpKHRoaXMuZGF0YS5zdWJzdHIoMCwgNiksIFwiTExMTExMXCIpO1xuXHRcdFx0cmVzdWx0ICs9IFwiMDEwMTBcIjtcblx0XHRcdHJlc3VsdCArPSAoMCwgX2VuY29kZXIyLmRlZmF1bHQpKHRoaXMuZGF0YS5zdWJzdHIoNiwgNiksIFwiUlJSUlJSXCIpO1xuXHRcdFx0cmVzdWx0ICs9IFwiMTAxXCI7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IHJlc3VsdCxcblx0XHRcdFx0dGV4dDogdGhpcy50ZXh0XG5cdFx0XHR9O1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJndWFyZGVkRW5jb2RpbmdcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ3VhcmRlZEVuY29kaW5nKCkge1xuXHRcdFx0dmFyIHJlc3VsdCA9IFtdO1xuXG5cdFx0XHQvLyBBZGQgdGhlIGZpcnN0IGRpZ2l0XG5cdFx0XHRpZiAodGhpcy5kaXNwbGF5VmFsdWUpIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goe1xuXHRcdFx0XHRcdGRhdGE6IFwiMDAwMDAwMDBcIixcblx0XHRcdFx0XHR0ZXh0OiB0aGlzLnRleHQuc3Vic3RyKDAsIDEpLFxuXHRcdFx0XHRcdG9wdGlvbnM6IHsgdGV4dEFsaWduOiBcImxlZnRcIiwgZm9udFNpemU6IHRoaXMuZm9udFNpemUgfVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWRkIHRoZSBndWFyZCBiYXJzXG5cdFx0XHRyZXN1bHQucHVzaCh7XG5cdFx0XHRcdGRhdGE6IFwiMTAxXCIgKyAoMCwgX2VuY29kZXIyLmRlZmF1bHQpKHRoaXMuZGF0YVswXSwgXCJMXCIpLFxuXHRcdFx0XHRvcHRpb25zOiB7IGhlaWdodDogdGhpcy5ndWFyZEhlaWdodCB9XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQWRkIHRoZSBsZWZ0IHNpZGVcblx0XHRcdHJlc3VsdC5wdXNoKHtcblx0XHRcdFx0ZGF0YTogKDAsIF9lbmNvZGVyMi5kZWZhdWx0KSh0aGlzLmRhdGEuc3Vic3RyKDEsIDUpLCBcIkxMTExMXCIpLFxuXHRcdFx0XHR0ZXh0OiB0aGlzLnRleHQuc3Vic3RyKDEsIDUpLFxuXHRcdFx0XHRvcHRpb25zOiB7IGZvbnRTaXplOiB0aGlzLmZvbnRTaXplIH1cblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBBZGQgdGhlIG1pZGRsZSBiaXRzXG5cdFx0XHRyZXN1bHQucHVzaCh7XG5cdFx0XHRcdGRhdGE6IFwiMDEwMTBcIixcblx0XHRcdFx0b3B0aW9uczogeyBoZWlnaHQ6IHRoaXMuZ3VhcmRIZWlnaHQgfVxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEFkZCB0aGUgcmlnaHQgc2lkZVxuXHRcdFx0cmVzdWx0LnB1c2goe1xuXHRcdFx0XHRkYXRhOiAoMCwgX2VuY29kZXIyLmRlZmF1bHQpKHRoaXMuZGF0YS5zdWJzdHIoNiwgNSksIFwiUlJSUlJcIiksXG5cdFx0XHRcdHRleHQ6IHRoaXMudGV4dC5zdWJzdHIoNiwgNSksXG5cdFx0XHRcdG9wdGlvbnM6IHsgZm9udFNpemU6IHRoaXMuZm9udFNpemUgfVxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEFkZCB0aGUgZW5kIGJpdHNcblx0XHRcdHJlc3VsdC5wdXNoKHtcblx0XHRcdFx0ZGF0YTogKDAsIF9lbmNvZGVyMi5kZWZhdWx0KSh0aGlzLmRhdGFbMTFdLCBcIlJcIikgKyBcIjEwMVwiLFxuXHRcdFx0XHRvcHRpb25zOiB7IGhlaWdodDogdGhpcy5ndWFyZEhlaWdodCB9XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQWRkIHRoZSBsYXN0IGRpZ2l0XG5cdFx0XHRpZiAodGhpcy5kaXNwbGF5VmFsdWUpIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goe1xuXHRcdFx0XHRcdGRhdGE6IFwiMDAwMDAwMDBcIixcblx0XHRcdFx0XHR0ZXh0OiB0aGlzLnRleHQuc3Vic3RyKDExLCAxKSxcblx0XHRcdFx0XHRvcHRpb25zOiB7IHRleHRBbGlnbjogXCJyaWdodFwiLCBmb250U2l6ZTogdGhpcy5mb250U2l6ZSB9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBVUEM7XG59KF9CYXJjb2RlMy5kZWZhdWx0KTtcblxuLy8gQ2FsdWxhdGUgdGhlIGNoZWNrc3VtIGRpZ2l0XG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JbnRlcm5hdGlvbmFsX0FydGljbGVfTnVtYmVyXyhFQU4pI0NhbGN1bGF0aW9uX29mX2NoZWNrc3VtX2RpZ2l0XG5cblxuZnVuY3Rpb24gY2hlY2tzdW0obnVtYmVyKSB7XG5cdHZhciByZXN1bHQgPSAwO1xuXG5cdHZhciBpO1xuXHRmb3IgKGkgPSAxOyBpIDwgMTE7IGkgKz0gMikge1xuXHRcdHJlc3VsdCArPSBwYXJzZUludChudW1iZXJbaV0pO1xuXHR9XG5cdGZvciAoaSA9IDA7IGkgPCAxMTsgaSArPSAyKSB7XG5cdFx0cmVzdWx0ICs9IHBhcnNlSW50KG51bWJlcltpXSkgKiAzO1xuXHR9XG5cblx0cmV0dXJuICgxMCAtIHJlc3VsdCAlIDEwKSAlIDEwO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBVUEM7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2VuY29kZXIgPSByZXF1aXJlKCcuL2VuY29kZXInKTtcblxudmFyIF9lbmNvZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2VuY29kZXIpO1xuXG52YXIgX0JhcmNvZGUyID0gcmVxdWlyZSgnLi4vQmFyY29kZS5qcycpO1xuXG52YXIgX0JhcmNvZGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQmFyY29kZTIpO1xuXG52YXIgX1VQQyA9IHJlcXVpcmUoJy4vVVBDLmpzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH0gLy8gRW5jb2RpbmcgZG9jdW1lbnRhdGlvbjpcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VuaXZlcnNhbF9Qcm9kdWN0X0NvZGUjRW5jb2Rpbmdcbi8vXG4vLyBVUEMtRSBkb2N1bWVudGF0aW9uOlxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW5pdmVyc2FsX1Byb2R1Y3RfQ29kZSNVUEMtRVxuXG52YXIgRVhQQU5TSU9OUyA9IFtcIlhYMDAwMDBYWFhcIiwgXCJYWDEwMDAwWFhYXCIsIFwiWFgyMDAwMFhYWFwiLCBcIlhYWDAwMDAwWFhcIiwgXCJYWFhYMDAwMDBYXCIsIFwiWFhYWFgwMDAwNVwiLCBcIlhYWFhYMDAwMDZcIiwgXCJYWFhYWDAwMDA3XCIsIFwiWFhYWFgwMDAwOFwiLCBcIlhYWFhYMDAwMDlcIl07XG5cbnZhciBQQVJJVElFUyA9IFtbXCJFRUVPT09cIiwgXCJPT09FRUVcIl0sIFtcIkVFT0VPT1wiLCBcIk9PRU9FRVwiXSwgW1wiRUVPT0VPXCIsIFwiT09FRU9FXCJdLCBbXCJFRU9PT0VcIiwgXCJPT0VFRU9cIl0sIFtcIkVPRUVPT1wiLCBcIk9FT09FRVwiXSwgW1wiRU9PRUVPXCIsIFwiT0VFT09FXCJdLCBbXCJFT09PRUVcIiwgXCJPRUVFT09cIl0sIFtcIkVPRU9FT1wiLCBcIk9FT0VPRVwiXSwgW1wiRU9FT09FXCIsIFwiT0VPRUVPXCJdLCBbXCJFT09FT0VcIiwgXCJPRUVPRU9cIl1dO1xuXG52YXIgVVBDRSA9IGZ1bmN0aW9uIChfQmFyY29kZSkge1xuXHRfaW5oZXJpdHMoVVBDRSwgX0JhcmNvZGUpO1xuXG5cdGZ1bmN0aW9uIFVQQ0UoZGF0YSwgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBVUENFKTtcblxuXHRcdHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChVUENFLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVVBDRSkpLmNhbGwodGhpcywgZGF0YSwgb3B0aW9ucykpO1xuXHRcdC8vIENvZGUgbWF5IGJlIDYgb3IgOCBkaWdpdHM7XG5cdFx0Ly8gQSA3IGRpZ2l0IGNvZGUgaXMgYW1iaWd1b3VzIGFzIHRvIHdoZXRoZXIgdGhlIGV4dHJhIGRpZ2l0XG5cdFx0Ly8gaXMgYSBVUEMtQSBjaGVjayBvciBudW1iZXIgc3lzdGVtIGRpZ2l0LlxuXG5cblx0XHRfdGhpcy5pc1ZhbGlkID0gZmFsc2U7XG5cdFx0aWYgKGRhdGEuc2VhcmNoKC9eWzAtOV17Nn0kLykgIT09IC0xKSB7XG5cdFx0XHRfdGhpcy5taWRkbGVEaWdpdHMgPSBkYXRhO1xuXHRcdFx0X3RoaXMudXBjQSA9IGV4cGFuZFRvVVBDQShkYXRhLCBcIjBcIik7XG5cdFx0XHRfdGhpcy50ZXh0ID0gb3B0aW9ucy50ZXh0IHx8ICcnICsgX3RoaXMudXBjQVswXSArIGRhdGEgKyBfdGhpcy51cGNBW190aGlzLnVwY0EubGVuZ3RoIC0gMV07XG5cdFx0XHRfdGhpcy5pc1ZhbGlkID0gdHJ1ZTtcblx0XHR9IGVsc2UgaWYgKGRhdGEuc2VhcmNoKC9eWzAxXVswLTldezd9JC8pICE9PSAtMSkge1xuXHRcdFx0X3RoaXMubWlkZGxlRGlnaXRzID0gZGF0YS5zdWJzdHJpbmcoMSwgZGF0YS5sZW5ndGggLSAxKTtcblx0XHRcdF90aGlzLnVwY0EgPSBleHBhbmRUb1VQQ0EoX3RoaXMubWlkZGxlRGlnaXRzLCBkYXRhWzBdKTtcblxuXHRcdFx0aWYgKF90aGlzLnVwY0FbX3RoaXMudXBjQS5sZW5ndGggLSAxXSA9PT0gZGF0YVtkYXRhLmxlbmd0aCAtIDFdKSB7XG5cdFx0XHRcdF90aGlzLmlzVmFsaWQgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gY2hlY2tzdW0gbWlzbWF0Y2hcblx0XHRcdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzKTtcblx0XHR9XG5cblx0XHRfdGhpcy5kaXNwbGF5VmFsdWUgPSBvcHRpb25zLmRpc3BsYXlWYWx1ZTtcblxuXHRcdC8vIE1ha2Ugc3VyZSB0aGUgZm9udCBpcyBub3QgYmlnZ2VyIHRoYW4gdGhlIHNwYWNlIGJldHdlZW4gdGhlIGd1YXJkIGJhcnNcblx0XHRpZiAob3B0aW9ucy5mb250U2l6ZSA+IG9wdGlvbnMud2lkdGggKiAxMCkge1xuXHRcdFx0X3RoaXMuZm9udFNpemUgPSBvcHRpb25zLndpZHRoICogMTA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF90aGlzLmZvbnRTaXplID0gb3B0aW9ucy5mb250U2l6ZTtcblx0XHR9XG5cblx0XHQvLyBNYWtlIHRoZSBndWFyZCBiYXJzIGdvIGRvd24gaGFsZiB0aGUgd2F5IG9mIHRoZSB0ZXh0XG5cdFx0X3RoaXMuZ3VhcmRIZWlnaHQgPSBvcHRpb25zLmhlaWdodCArIF90aGlzLmZvbnRTaXplIC8gMiArIG9wdGlvbnMudGV4dE1hcmdpbjtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoVVBDRSwgW3tcblx0XHRrZXk6ICd2YWxpZCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHZhbGlkKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuaXNWYWxpZDtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdlbmNvZGUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBlbmNvZGUoKSB7XG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLmZsYXQpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZmxhdEVuY29kaW5nKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5ndWFyZGVkRW5jb2RpbmcoKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdmbGF0RW5jb2RpbmcnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmbGF0RW5jb2RpbmcoKSB7XG5cdFx0XHR2YXIgcmVzdWx0ID0gXCJcIjtcblxuXHRcdFx0cmVzdWx0ICs9IFwiMTAxXCI7XG5cdFx0XHRyZXN1bHQgKz0gdGhpcy5lbmNvZGVNaWRkbGVEaWdpdHMoKTtcblx0XHRcdHJlc3VsdCArPSBcIjAxMDEwMVwiO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhOiByZXN1bHQsXG5cdFx0XHRcdHRleHQ6IHRoaXMudGV4dFxuXHRcdFx0fTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdndWFyZGVkRW5jb2RpbmcnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBndWFyZGVkRW5jb2RpbmcoKSB7XG5cdFx0XHR2YXIgcmVzdWx0ID0gW107XG5cblx0XHRcdC8vIEFkZCB0aGUgVVBDLUEgbnVtYmVyIHN5c3RlbSBkaWdpdCBiZW5lYXRoIHRoZSBxdWlldCB6b25lXG5cdFx0XHRpZiAodGhpcy5kaXNwbGF5VmFsdWUpIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goe1xuXHRcdFx0XHRcdGRhdGE6IFwiMDAwMDAwMDBcIixcblx0XHRcdFx0XHR0ZXh0OiB0aGlzLnRleHRbMF0sXG5cdFx0XHRcdFx0b3B0aW9uczogeyB0ZXh0QWxpZ246IFwibGVmdFwiLCBmb250U2l6ZTogdGhpcy5mb250U2l6ZSB9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgdGhlIGd1YXJkIGJhcnNcblx0XHRcdHJlc3VsdC5wdXNoKHtcblx0XHRcdFx0ZGF0YTogXCIxMDFcIixcblx0XHRcdFx0b3B0aW9uczogeyBoZWlnaHQ6IHRoaXMuZ3VhcmRIZWlnaHQgfVxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEFkZCB0aGUgNiBVUEMtRSBkaWdpdHNcblx0XHRcdHJlc3VsdC5wdXNoKHtcblx0XHRcdFx0ZGF0YTogdGhpcy5lbmNvZGVNaWRkbGVEaWdpdHMoKSxcblx0XHRcdFx0dGV4dDogdGhpcy50ZXh0LnN1YnN0cmluZygxLCA3KSxcblx0XHRcdFx0b3B0aW9uczogeyBmb250U2l6ZTogdGhpcy5mb250U2l6ZSB9XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQWRkIHRoZSBlbmQgYml0c1xuXHRcdFx0cmVzdWx0LnB1c2goe1xuXHRcdFx0XHRkYXRhOiBcIjAxMDEwMVwiLFxuXHRcdFx0XHRvcHRpb25zOiB7IGhlaWdodDogdGhpcy5ndWFyZEhlaWdodCB9XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQWRkIHRoZSBVUEMtQSBjaGVjayBkaWdpdCBiZW5lYXRoIHRoZSBxdWlldCB6b25lXG5cdFx0XHRpZiAodGhpcy5kaXNwbGF5VmFsdWUpIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goe1xuXHRcdFx0XHRcdGRhdGE6IFwiMDAwMDAwMDBcIixcblx0XHRcdFx0XHR0ZXh0OiB0aGlzLnRleHRbN10sXG5cdFx0XHRcdFx0b3B0aW9uczogeyB0ZXh0QWxpZ246IFwicmlnaHRcIiwgZm9udFNpemU6IHRoaXMuZm9udFNpemUgfVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdlbmNvZGVNaWRkbGVEaWdpdHMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBlbmNvZGVNaWRkbGVEaWdpdHMoKSB7XG5cdFx0XHR2YXIgbnVtYmVyU3lzdGVtID0gdGhpcy51cGNBWzBdO1xuXHRcdFx0dmFyIGNoZWNrRGlnaXQgPSB0aGlzLnVwY0FbdGhpcy51cGNBLmxlbmd0aCAtIDFdO1xuXHRcdFx0dmFyIHBhcml0eSA9IFBBUklUSUVTW3BhcnNlSW50KGNoZWNrRGlnaXQpXVtwYXJzZUludChudW1iZXJTeXN0ZW0pXTtcblx0XHRcdHJldHVybiAoMCwgX2VuY29kZXIyLmRlZmF1bHQpKHRoaXMubWlkZGxlRGlnaXRzLCBwYXJpdHkpO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBVUENFO1xufShfQmFyY29kZTMuZGVmYXVsdCk7XG5cbmZ1bmN0aW9uIGV4cGFuZFRvVVBDQShtaWRkbGVEaWdpdHMsIG51bWJlclN5c3RlbSkge1xuXHR2YXIgbGFzdFVwY0UgPSBwYXJzZUludChtaWRkbGVEaWdpdHNbbWlkZGxlRGlnaXRzLmxlbmd0aCAtIDFdKTtcblx0dmFyIGV4cGFuc2lvbiA9IEVYUEFOU0lPTlNbbGFzdFVwY0VdO1xuXG5cdHZhciByZXN1bHQgPSBcIlwiO1xuXHR2YXIgZGlnaXRJbmRleCA9IDA7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZXhwYW5zaW9uLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGMgPSBleHBhbnNpb25baV07XG5cdFx0aWYgKGMgPT09ICdYJykge1xuXHRcdFx0cmVzdWx0ICs9IG1pZGRsZURpZ2l0c1tkaWdpdEluZGV4KytdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHQgKz0gYztcblx0XHR9XG5cdH1cblxuXHRyZXN1bHQgPSAnJyArIG51bWJlclN5c3RlbSArIHJlc3VsdDtcblx0cmV0dXJuICcnICsgcmVzdWx0ICsgKDAsIF9VUEMuY2hlY2tzdW0pKHJlc3VsdCk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFVQQ0U7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuLy8gU3RhbmRhcmQgc3RhcnQgZW5kIGFuZCBtaWRkbGUgYml0c1xudmFyIFNJREVfQklOID0gZXhwb3J0cy5TSURFX0JJTiA9ICcxMDEnO1xudmFyIE1JRERMRV9CSU4gPSBleHBvcnRzLk1JRERMRV9CSU4gPSAnMDEwMTAnO1xuXG52YXIgQklOQVJJRVMgPSBleHBvcnRzLkJJTkFSSUVTID0ge1xuXHQnTCc6IFsvLyBUaGUgTCAobGVmdCkgdHlwZSBvZiBlbmNvZGluZ1xuXHQnMDAwMTEwMScsICcwMDExMDAxJywgJzAwMTAwMTEnLCAnMDExMTEwMScsICcwMTAwMDExJywgJzAxMTAwMDEnLCAnMDEwMTExMScsICcwMTExMDExJywgJzAxMTAxMTEnLCAnMDAwMTAxMSddLFxuXHQnRyc6IFsvLyBUaGUgRyB0eXBlIG9mIGVuY29kaW5nXG5cdCcwMTAwMTExJywgJzAxMTAwMTEnLCAnMDAxMTAxMScsICcwMTAwMDAxJywgJzAwMTExMDEnLCAnMDExMTAwMScsICcwMDAwMTAxJywgJzAwMTAwMDEnLCAnMDAwMTAwMScsICcwMDEwMTExJ10sXG5cdCdSJzogWy8vIFRoZSBSIChyaWdodCkgdHlwZSBvZiBlbmNvZGluZ1xuXHQnMTExMDAxMCcsICcxMTAwMTEwJywgJzExMDExMDAnLCAnMTAwMDAxMCcsICcxMDExMTAwJywgJzEwMDExMTAnLCAnMTAxMDAwMCcsICcxMDAwMTAwJywgJzEwMDEwMDAnLCAnMTExMDEwMCddLFxuXHQnTyc6IFsvLyBUaGUgTyAob2RkKSBlbmNvZGluZyBmb3IgVVBDLUVcblx0JzAwMDExMDEnLCAnMDAxMTAwMScsICcwMDEwMDExJywgJzAxMTExMDEnLCAnMDEwMDAxMScsICcwMTEwMDAxJywgJzAxMDExMTEnLCAnMDExMTAxMScsICcwMTEwMTExJywgJzAwMDEwMTEnXSxcblx0J0UnOiBbLy8gVGhlIEUgKGV2ZW4pIGVuY29kaW5nIGZvciBVUEMtRVxuXHQnMDEwMDExMScsICcwMTEwMDExJywgJzAwMTEwMTEnLCAnMDEwMDAwMScsICcwMDExMTAxJywgJzAxMTEwMDEnLCAnMDAwMDEwMScsICcwMDEwMDAxJywgJzAwMDEwMDEnLCAnMDAxMDExMSddXG59O1xuXG4vLyBEZWZpbmUgdGhlIEVBTi0yIHN0cnVjdHVyZVxudmFyIEVBTjJfU1RSVUNUVVJFID0gZXhwb3J0cy5FQU4yX1NUUlVDVFVSRSA9IFsnTEwnLCAnTEcnLCAnR0wnLCAnR0cnXTtcblxuLy8gRGVmaW5lIHRoZSBFQU4tNSBzdHJ1Y3R1cmVcbnZhciBFQU41X1NUUlVDVFVSRSA9IGV4cG9ydHMuRUFONV9TVFJVQ1RVUkUgPSBbJ0dHTExMJywgJ0dMR0xMJywgJ0dMTEdMJywgJ0dMTExHJywgJ0xHR0xMJywgJ0xMR0dMJywgJ0xMTEdHJywgJ0xHTEdMJywgJ0xHTExHJywgJ0xMR0xHJ107XG5cbi8vIERlZmluZSB0aGUgRUFOLTEzIHN0cnVjdHVyZVxudmFyIEVBTjEzX1NUUlVDVFVSRSA9IGV4cG9ydHMuRUFOMTNfU1RSVUNUVVJFID0gWydMTExMTEwnLCAnTExHTEdHJywgJ0xMR0dMRycsICdMTEdHR0wnLCAnTEdMTEdHJywgJ0xHR0xMRycsICdMR0dHTEwnLCAnTEdMR0xHJywgJ0xHTEdHTCcsICdMR0dMR0wnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcblxuLy8gRW5jb2RlIGRhdGEgc3RyaW5nXG52YXIgZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKGRhdGEsIHN0cnVjdHVyZSwgc2VwYXJhdG9yKSB7XG5cdHZhciBlbmNvZGVkID0gZGF0YS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uICh2YWwsIGlkeCkge1xuXHRcdHJldHVybiBfY29uc3RhbnRzLkJJTkFSSUVTW3N0cnVjdHVyZVtpZHhdXTtcblx0fSkubWFwKGZ1bmN0aW9uICh2YWwsIGlkeCkge1xuXHRcdHJldHVybiB2YWwgPyB2YWxbZGF0YVtpZHhdXSA6ICcnO1xuXHR9KTtcblxuXHRpZiAoc2VwYXJhdG9yKSB7XG5cdFx0dmFyIGxhc3QgPSBkYXRhLmxlbmd0aCAtIDE7XG5cdFx0ZW5jb2RlZCA9IGVuY29kZWQubWFwKGZ1bmN0aW9uICh2YWwsIGlkeCkge1xuXHRcdFx0cmV0dXJuIGlkeCA8IGxhc3QgPyB2YWwgKyBzZXBhcmF0b3IgOiB2YWw7XG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gZW5jb2RlZC5qb2luKCcnKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGVuY29kZTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlVQQ0UgPSBleHBvcnRzLlVQQyA9IGV4cG9ydHMuRUFOMiA9IGV4cG9ydHMuRUFONSA9IGV4cG9ydHMuRUFOOCA9IGV4cG9ydHMuRUFOMTMgPSB1bmRlZmluZWQ7XG5cbnZhciBfRUFOID0gcmVxdWlyZSgnLi9FQU4xMy5qcycpO1xuXG52YXIgX0VBTjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FQU4pO1xuXG52YXIgX0VBTjMgPSByZXF1aXJlKCcuL0VBTjguanMnKTtcblxudmFyIF9FQU40ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRUFOMyk7XG5cbnZhciBfRUFONSA9IHJlcXVpcmUoJy4vRUFONS5qcycpO1xuXG52YXIgX0VBTjYgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FQU41KTtcblxudmFyIF9FQU43ID0gcmVxdWlyZSgnLi9FQU4yLmpzJyk7XG5cbnZhciBfRUFOOCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0VBTjcpO1xuXG52YXIgX1VQQyA9IHJlcXVpcmUoJy4vVVBDLmpzJyk7XG5cbnZhciBfVVBDMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1VQQyk7XG5cbnZhciBfVVBDRSA9IHJlcXVpcmUoJy4vVVBDRS5qcycpO1xuXG52YXIgX1VQQ0UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVVBDRSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuRUFOMTMgPSBfRUFOMi5kZWZhdWx0O1xuZXhwb3J0cy5FQU44ID0gX0VBTjQuZGVmYXVsdDtcbmV4cG9ydHMuRUFONSA9IF9FQU42LmRlZmF1bHQ7XG5leHBvcnRzLkVBTjIgPSBfRUFOOC5kZWZhdWx0O1xuZXhwb3J0cy5VUEMgPSBfVVBDMi5kZWZhdWx0O1xuZXhwb3J0cy5VUENFID0gX1VQQ0UyLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkdlbmVyaWNCYXJjb2RlID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX0JhcmNvZGUyID0gcmVxdWlyZShcIi4uL0JhcmNvZGUuanNcIik7XG5cbnZhciBfQmFyY29kZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CYXJjb2RlMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIEdlbmVyaWNCYXJjb2RlID0gZnVuY3Rpb24gKF9CYXJjb2RlKSB7XG5cdF9pbmhlcml0cyhHZW5lcmljQmFyY29kZSwgX0JhcmNvZGUpO1xuXG5cdGZ1bmN0aW9uIEdlbmVyaWNCYXJjb2RlKGRhdGEsIG9wdGlvbnMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgR2VuZXJpY0JhcmNvZGUpO1xuXG5cdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChHZW5lcmljQmFyY29kZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEdlbmVyaWNCYXJjb2RlKSkuY2FsbCh0aGlzLCBkYXRhLCBvcHRpb25zKSk7IC8vIFNldHMgdGhpcy5kYXRhIGFuZCB0aGlzLnRleHRcblx0fVxuXG5cdC8vIFJldHVybiB0aGUgY29ycmVzcG9uZGluZyBiaW5hcnkgbnVtYmVycyBmb3IgdGhlIGRhdGEgcHJvdmlkZWRcblxuXG5cdF9jcmVhdGVDbGFzcyhHZW5lcmljQmFyY29kZSwgW3tcblx0XHRrZXk6IFwiZW5jb2RlXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGVuY29kZSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IFwiMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDFcIixcblx0XHRcdFx0dGV4dDogdGhpcy50ZXh0XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdC8vIFJlc3R1cm4gdHJ1ZS9mYWxzZSBpZiB0aGUgc3RyaW5nIHByb3ZpZGVkIGlzIHZhbGlkIGZvciB0aGlzIGVuY29kZXJcblxuXHR9LCB7XG5cdFx0a2V5OiBcInZhbGlkXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHZhbGlkKCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIEdlbmVyaWNCYXJjb2RlO1xufShfQmFyY29kZTMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuR2VuZXJpY0JhcmNvZGUgPSBHZW5lcmljQmFyY29kZTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcblxudmFyIF9CYXJjb2RlMiA9IHJlcXVpcmUoJy4uL0JhcmNvZGUnKTtcblxudmFyIF9CYXJjb2RlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0JhcmNvZGUyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgSVRGID0gZnVuY3Rpb24gKF9CYXJjb2RlKSB7XG5cdF9pbmhlcml0cyhJVEYsIF9CYXJjb2RlKTtcblxuXHRmdW5jdGlvbiBJVEYoKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIElURik7XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKElURi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKElURikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKElURiwgW3tcblx0XHRrZXk6ICd2YWxpZCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHZhbGlkKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGF0YS5zZWFyY2goL14oWzAtOV17Mn0pKyQvKSAhPT0gLTE7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZW5jb2RlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZW5jb2RlKCkge1xuXHRcdFx0dmFyIF90aGlzMiA9IHRoaXM7XG5cblx0XHRcdC8vIENhbGN1bGF0ZSBhbGwgdGhlIGRpZ2l0IHBhaXJzXG5cdFx0XHR2YXIgZW5jb2RlZCA9IHRoaXMuZGF0YS5tYXRjaCgvLnsyfS9nKS5tYXAoZnVuY3Rpb24gKHBhaXIpIHtcblx0XHRcdFx0cmV0dXJuIF90aGlzMi5lbmNvZGVQYWlyKHBhaXIpO1xuXHRcdFx0fSkuam9pbignJyk7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IF9jb25zdGFudHMuU1RBUlRfQklOICsgZW5jb2RlZCArIF9jb25zdGFudHMuRU5EX0JJTixcblx0XHRcdFx0dGV4dDogdGhpcy50ZXh0XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdC8vIENhbGN1bGF0ZSB0aGUgZGF0YSBvZiBhIG51bWJlciBwYWlyXG5cblx0fSwge1xuXHRcdGtleTogJ2VuY29kZVBhaXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBlbmNvZGVQYWlyKHBhaXIpIHtcblx0XHRcdHZhciBzZWNvbmQgPSBfY29uc3RhbnRzLkJJTkFSSUVTW3BhaXJbMV1dO1xuXG5cdFx0XHRyZXR1cm4gX2NvbnN0YW50cy5CSU5BUklFU1twYWlyWzBdXS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChmaXJzdCwgaWR4KSB7XG5cdFx0XHRcdHJldHVybiAoZmlyc3QgPT09ICcxJyA/ICcxMTEnIDogJzEnKSArIChzZWNvbmRbaWR4XSA9PT0gJzEnID8gJzAwMCcgOiAnMCcpO1xuXHRcdFx0fSkuam9pbignJyk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIElURjtcbn0oX0JhcmNvZGUzLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBJVEY7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX0lURjIgPSByZXF1aXJlKCcuL0lURicpO1xuXG52YXIgX0lURjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JVEYyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vLyBDYWxjdWxhdGUgdGhlIGNoZWNrc3VtIGRpZ2l0XG52YXIgY2hlY2tzdW0gPSBmdW5jdGlvbiBjaGVja3N1bShkYXRhKSB7XG5cdHZhciByZXMgPSBkYXRhLnN1YnN0cigwLCAxMykuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAobnVtKSB7XG5cdFx0cmV0dXJuIHBhcnNlSW50KG51bSwgMTApO1xuXHR9KS5yZWR1Y2UoZnVuY3Rpb24gKHN1bSwgbiwgaWR4KSB7XG5cdFx0cmV0dXJuIHN1bSArIG4gKiAoMyAtIGlkeCAlIDIgKiAyKTtcblx0fSwgMCk7XG5cblx0cmV0dXJuIE1hdGguY2VpbChyZXMgLyAxMCkgKiAxMCAtIHJlcztcbn07XG5cbnZhciBJVEYxNCA9IGZ1bmN0aW9uIChfSVRGKSB7XG5cdF9pbmhlcml0cyhJVEYxNCwgX0lURik7XG5cblx0ZnVuY3Rpb24gSVRGMTQoZGF0YSwgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJVEYxNCk7XG5cblx0XHQvLyBBZGQgY2hlY2tzdW0gaWYgaXQgZG9lcyBub3QgZXhpc3Rcblx0XHRpZiAoZGF0YS5zZWFyY2goL15bMC05XXsxM30kLykgIT09IC0xKSB7XG5cdFx0XHRkYXRhICs9IGNoZWNrc3VtKGRhdGEpO1xuXHRcdH1cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKElURjE0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoSVRGMTQpKS5jYWxsKHRoaXMsIGRhdGEsIG9wdGlvbnMpKTtcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhJVEYxNCwgW3tcblx0XHRrZXk6ICd2YWxpZCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHZhbGlkKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGF0YS5zZWFyY2goL15bMC05XXsxNH0kLykgIT09IC0xICYmICt0aGlzLmRhdGFbMTNdID09PSBjaGVja3N1bSh0aGlzLmRhdGEpO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBJVEYxNDtcbn0oX0lURjMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IElURjE0OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbnZhciBTVEFSVF9CSU4gPSBleHBvcnRzLlNUQVJUX0JJTiA9ICcxMDEwJztcbnZhciBFTkRfQklOID0gZXhwb3J0cy5FTkRfQklOID0gJzExMTAxJztcblxudmFyIEJJTkFSSUVTID0gZXhwb3J0cy5CSU5BUklFUyA9IFsnMDAxMTAnLCAnMTAwMDEnLCAnMDEwMDEnLCAnMTEwMDAnLCAnMDAxMDEnLCAnMTAxMDAnLCAnMDExMDAnLCAnMDAwMTEnLCAnMTAwMTAnLCAnMDEwMTAnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLklURjE0ID0gZXhwb3J0cy5JVEYgPSB1bmRlZmluZWQ7XG5cbnZhciBfSVRGID0gcmVxdWlyZSgnLi9JVEYnKTtcblxudmFyIF9JVEYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSVRGKTtcblxudmFyIF9JVEYzID0gcmVxdWlyZSgnLi9JVEYxNCcpO1xuXG52YXIgX0lURjQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JVEYzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5JVEYgPSBfSVRGMi5kZWZhdWx0O1xuZXhwb3J0cy5JVEYxNCA9IF9JVEY0LmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfQmFyY29kZTIgPSByZXF1aXJlKFwiLi4vQmFyY29kZS5qc1wiKTtcblxudmFyIF9CYXJjb2RlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0JhcmNvZGUyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvLyBFbmNvZGluZyBkb2N1bWVudGF0aW9uXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9NU0lfQmFyY29kZSNDaGFyYWN0ZXJfc2V0X2FuZF9iaW5hcnlfbG9va3VwXG5cbnZhciBNU0kgPSBmdW5jdGlvbiAoX0JhcmNvZGUpIHtcblx0X2luaGVyaXRzKE1TSSwgX0JhcmNvZGUpO1xuXG5cdGZ1bmN0aW9uIE1TSShkYXRhLCBvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1TSSk7XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE1TSS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE1TSSkpLmNhbGwodGhpcywgZGF0YSwgb3B0aW9ucykpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKE1TSSwgW3tcblx0XHRrZXk6IFwiZW5jb2RlXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGVuY29kZSgpIHtcblx0XHRcdC8vIFN0YXJ0IGJpdHNcblx0XHRcdHZhciByZXQgPSBcIjExMFwiO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHQvLyBDb252ZXJ0IHRoZSBjaGFyYWN0ZXIgdG8gYmluYXJ5IChhbHdheXMgNCBiaW5hcnkgZGlnaXRzKVxuXHRcdFx0XHR2YXIgZGlnaXQgPSBwYXJzZUludCh0aGlzLmRhdGFbaV0pO1xuXHRcdFx0XHR2YXIgYmluID0gZGlnaXQudG9TdHJpbmcoMik7XG5cdFx0XHRcdGJpbiA9IGFkZFplcm9lcyhiaW4sIDQgLSBiaW4ubGVuZ3RoKTtcblxuXHRcdFx0XHQvLyBBZGQgMTAwIGZvciBldmVyeSB6ZXJvIGFuZCAxMTAgZm9yIGV2ZXJ5IDFcblx0XHRcdFx0Zm9yICh2YXIgYiA9IDA7IGIgPCBiaW4ubGVuZ3RoOyBiKyspIHtcblx0XHRcdFx0XHRyZXQgKz0gYmluW2JdID09IFwiMFwiID8gXCIxMDBcIiA6IFwiMTEwXCI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gRW5kIGJpdHNcblx0XHRcdHJldCArPSBcIjEwMDFcIjtcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YTogcmV0LFxuXHRcdFx0XHR0ZXh0OiB0aGlzLnRleHRcblx0XHRcdH07XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcInZhbGlkXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHZhbGlkKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGF0YS5zZWFyY2goL15bMC05XSskLykgIT09IC0xO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBNU0k7XG59KF9CYXJjb2RlMy5kZWZhdWx0KTtcblxuZnVuY3Rpb24gYWRkWmVyb2VzKG51bWJlciwgbikge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IG47IGkrKykge1xuXHRcdG51bWJlciA9IFwiMFwiICsgbnVtYmVyO1xuXHR9XG5cdHJldHVybiBudW1iZXI7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1TSTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfTVNJMiA9IHJlcXVpcmUoJy4vTVNJLmpzJyk7XG5cbnZhciBfTVNJMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01TSTIpO1xuXG52YXIgX2NoZWNrc3VtcyA9IHJlcXVpcmUoJy4vY2hlY2tzdW1zLmpzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIE1TSTEwID0gZnVuY3Rpb24gKF9NU0kpIHtcblx0X2luaGVyaXRzKE1TSTEwLCBfTVNJKTtcblxuXHRmdW5jdGlvbiBNU0kxMChkYXRhLCBvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1TSTEwKTtcblxuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTVNJMTAuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihNU0kxMCkpLmNhbGwodGhpcywgZGF0YSArICgwLCBfY2hlY2tzdW1zLm1vZDEwKShkYXRhKSwgb3B0aW9ucykpO1xuXHR9XG5cblx0cmV0dXJuIE1TSTEwO1xufShfTVNJMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTVNJMTA7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX01TSTIgPSByZXF1aXJlKCcuL01TSS5qcycpO1xuXG52YXIgX01TSTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NU0kyKTtcblxudmFyIF9jaGVja3N1bXMgPSByZXF1aXJlKCcuL2NoZWNrc3Vtcy5qcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBNU0kxMDEwID0gZnVuY3Rpb24gKF9NU0kpIHtcblx0X2luaGVyaXRzKE1TSTEwMTAsIF9NU0kpO1xuXG5cdGZ1bmN0aW9uIE1TSTEwMTAoZGF0YSwgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNU0kxMDEwKTtcblxuXHRcdGRhdGEgKz0gKDAsIF9jaGVja3N1bXMubW9kMTApKGRhdGEpO1xuXHRcdGRhdGEgKz0gKDAsIF9jaGVja3N1bXMubW9kMTApKGRhdGEpO1xuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTVNJMTAxMC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE1TSTEwMTApKS5jYWxsKHRoaXMsIGRhdGEsIG9wdGlvbnMpKTtcblx0fVxuXG5cdHJldHVybiBNU0kxMDEwO1xufShfTVNJMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTVNJMTAxMDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfTVNJMiA9IHJlcXVpcmUoJy4vTVNJLmpzJyk7XG5cbnZhciBfTVNJMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01TSTIpO1xuXG52YXIgX2NoZWNrc3VtcyA9IHJlcXVpcmUoJy4vY2hlY2tzdW1zLmpzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIE1TSTExID0gZnVuY3Rpb24gKF9NU0kpIHtcblx0X2luaGVyaXRzKE1TSTExLCBfTVNJKTtcblxuXHRmdW5jdGlvbiBNU0kxMShkYXRhLCBvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1TSTExKTtcblxuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTVNJMTEuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihNU0kxMSkpLmNhbGwodGhpcywgZGF0YSArICgwLCBfY2hlY2tzdW1zLm1vZDExKShkYXRhKSwgb3B0aW9ucykpO1xuXHR9XG5cblx0cmV0dXJuIE1TSTExO1xufShfTVNJMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTVNJMTE7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX01TSTIgPSByZXF1aXJlKCcuL01TSS5qcycpO1xuXG52YXIgX01TSTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NU0kyKTtcblxudmFyIF9jaGVja3N1bXMgPSByZXF1aXJlKCcuL2NoZWNrc3Vtcy5qcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBNU0kxMTEwID0gZnVuY3Rpb24gKF9NU0kpIHtcblx0X2luaGVyaXRzKE1TSTExMTAsIF9NU0kpO1xuXG5cdGZ1bmN0aW9uIE1TSTExMTAoZGF0YSwgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNU0kxMTEwKTtcblxuXHRcdGRhdGEgKz0gKDAsIF9jaGVja3N1bXMubW9kMTEpKGRhdGEpO1xuXHRcdGRhdGEgKz0gKDAsIF9jaGVja3N1bXMubW9kMTApKGRhdGEpO1xuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTVNJMTExMC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE1TSTExMTApKS5jYWxsKHRoaXMsIGRhdGEsIG9wdGlvbnMpKTtcblx0fVxuXG5cdHJldHVybiBNU0kxMTEwO1xufShfTVNJMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTVNJMTExMDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubW9kMTAgPSBtb2QxMDtcbmV4cG9ydHMubW9kMTEgPSBtb2QxMTtcbmZ1bmN0aW9uIG1vZDEwKG51bWJlcikge1xuXHR2YXIgc3VtID0gMDtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXIubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgbiA9IHBhcnNlSW50KG51bWJlcltpXSk7XG5cdFx0aWYgKChpICsgbnVtYmVyLmxlbmd0aCkgJSAyID09PSAwKSB7XG5cdFx0XHRzdW0gKz0gbjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3VtICs9IG4gKiAyICUgMTAgKyBNYXRoLmZsb29yKG4gKiAyIC8gMTApO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gKDEwIC0gc3VtICUgMTApICUgMTA7XG59XG5cbmZ1bmN0aW9uIG1vZDExKG51bWJlcikge1xuXHR2YXIgc3VtID0gMDtcblx0dmFyIHdlaWdodHMgPSBbMiwgMywgNCwgNSwgNiwgN107XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIG4gPSBwYXJzZUludChudW1iZXJbbnVtYmVyLmxlbmd0aCAtIDEgLSBpXSk7XG5cdFx0c3VtICs9IHdlaWdodHNbaSAlIHdlaWdodHMubGVuZ3RoXSAqIG47XG5cdH1cblx0cmV0dXJuICgxMSAtIHN1bSAlIDExKSAlIDExO1xufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuTVNJMTExMCA9IGV4cG9ydHMuTVNJMTAxMCA9IGV4cG9ydHMuTVNJMTEgPSBleHBvcnRzLk1TSTEwID0gZXhwb3J0cy5NU0kgPSB1bmRlZmluZWQ7XG5cbnZhciBfTVNJID0gcmVxdWlyZSgnLi9NU0kuanMnKTtcblxudmFyIF9NU0kyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTVNJKTtcblxudmFyIF9NU0kzID0gcmVxdWlyZSgnLi9NU0kxMC5qcycpO1xuXG52YXIgX01TSTQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NU0kzKTtcblxudmFyIF9NU0k1ID0gcmVxdWlyZSgnLi9NU0kxMS5qcycpO1xuXG52YXIgX01TSTYgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NU0k1KTtcblxudmFyIF9NU0k3ID0gcmVxdWlyZSgnLi9NU0kxMDEwLmpzJyk7XG5cbnZhciBfTVNJOCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01TSTcpO1xuXG52YXIgX01TSTkgPSByZXF1aXJlKCcuL01TSTExMTAuanMnKTtcblxudmFyIF9NU0kxMCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01TSTkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLk1TSSA9IF9NU0kyLmRlZmF1bHQ7XG5leHBvcnRzLk1TSTEwID0gX01TSTQuZGVmYXVsdDtcbmV4cG9ydHMuTVNJMTEgPSBfTVNJNi5kZWZhdWx0O1xuZXhwb3J0cy5NU0kxMDEwID0gX01TSTguZGVmYXVsdDtcbmV4cG9ydHMuTVNJMTExMCA9IF9NU0kxMC5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jb2RhYmFyID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX0JhcmNvZGUyID0gcmVxdWlyZShcIi4uL0JhcmNvZGUuanNcIik7XG5cbnZhciBfQmFyY29kZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CYXJjb2RlMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH0gLy8gRW5jb2Rpbmcgc3BlY2lmaWNhdGlvbjpcbi8vIGh0dHA6Ly93d3cuYmFyY29kZWlzbGFuZC5jb20vY29kYWJhci5waHRtbFxuXG52YXIgY29kYWJhciA9IGZ1bmN0aW9uIChfQmFyY29kZSkge1xuXHRfaW5oZXJpdHMoY29kYWJhciwgX0JhcmNvZGUpO1xuXG5cdGZ1bmN0aW9uIGNvZGFiYXIoZGF0YSwgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBjb2RhYmFyKTtcblxuXHRcdGlmIChkYXRhLnNlYXJjaCgvXlswLTlcXC1cXCRcXDpcXC5cXCtcXC9dKyQvKSA9PT0gMCkge1xuXHRcdFx0ZGF0YSA9IFwiQVwiICsgZGF0YSArIFwiQVwiO1xuXHRcdH1cblxuXHRcdHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChjb2RhYmFyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoY29kYWJhcikpLmNhbGwodGhpcywgZGF0YS50b1VwcGVyQ2FzZSgpLCBvcHRpb25zKSk7XG5cblx0XHRfdGhpcy50ZXh0ID0gX3RoaXMub3B0aW9ucy50ZXh0IHx8IF90aGlzLnRleHQucmVwbGFjZSgvW0EtRF0vZywgJycpO1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhjb2RhYmFyLCBbe1xuXHRcdGtleTogXCJ2YWxpZFwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB2YWxpZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmRhdGEuc2VhcmNoKC9eW0EtRF1bMC05XFwtXFwkXFw6XFwuXFwrXFwvXStbQS1EXSQvKSAhPT0gLTE7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcImVuY29kZVwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBlbmNvZGUoKSB7XG5cdFx0XHR2YXIgcmVzdWx0ID0gW107XG5cdFx0XHR2YXIgZW5jb2RpbmdzID0gdGhpcy5nZXRFbmNvZGluZ3MoKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKGVuY29kaW5nc1t0aGlzLmRhdGEuY2hhckF0KGkpXSk7XG5cdFx0XHRcdC8vIGZvciBhbGwgY2hhcmFjdGVycyBleGNlcHQgdGhlIGxhc3QsIGFwcGVuZCBhIG5hcnJvdy1zcGFjZSAoXCIwXCIpXG5cdFx0XHRcdGlmIChpICE9PSB0aGlzLmRhdGEubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKFwiMFwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dGV4dDogdGhpcy50ZXh0LFxuXHRcdFx0XHRkYXRhOiByZXN1bHQuam9pbignJylcblx0XHRcdH07XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcImdldEVuY29kaW5nc1wiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRFbmNvZGluZ3MoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcIjBcIjogXCIxMDEwMTAwMTFcIixcblx0XHRcdFx0XCIxXCI6IFwiMTAxMDExMDAxXCIsXG5cdFx0XHRcdFwiMlwiOiBcIjEwMTAwMTAxMVwiLFxuXHRcdFx0XHRcIjNcIjogXCIxMTAwMTAxMDFcIixcblx0XHRcdFx0XCI0XCI6IFwiMTAxMTAxMDAxXCIsXG5cdFx0XHRcdFwiNVwiOiBcIjExMDEwMTAwMVwiLFxuXHRcdFx0XHRcIjZcIjogXCIxMDAxMDEwMTFcIixcblx0XHRcdFx0XCI3XCI6IFwiMTAwMTAxMTAxXCIsXG5cdFx0XHRcdFwiOFwiOiBcIjEwMDExMDEwMVwiLFxuXHRcdFx0XHRcIjlcIjogXCIxMTAxMDAxMDFcIixcblx0XHRcdFx0XCItXCI6IFwiMTAxMDAxMTAxXCIsXG5cdFx0XHRcdFwiJFwiOiBcIjEwMTEwMDEwMVwiLFxuXHRcdFx0XHRcIjpcIjogXCIxMTAxMDExMDExXCIsXG5cdFx0XHRcdFwiL1wiOiBcIjExMDExMDEwMTFcIixcblx0XHRcdFx0XCIuXCI6IFwiMTEwMTEwMTEwMVwiLFxuXHRcdFx0XHRcIitcIjogXCIxMDExMDExMDExXCIsXG5cdFx0XHRcdFwiQVwiOiBcIjEwMTEwMDEwMDFcIixcblx0XHRcdFx0XCJCXCI6IFwiMTAwMTAwMTAxMVwiLFxuXHRcdFx0XHRcIkNcIjogXCIxMDEwMDEwMDExXCIsXG5cdFx0XHRcdFwiRFwiOiBcIjEwMTAwMTEwMDFcIlxuXHRcdFx0fTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gY29kYWJhcjtcbn0oX0JhcmNvZGUzLmRlZmF1bHQpO1xuXG5leHBvcnRzLmNvZGFiYXIgPSBjb2RhYmFyOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9DT0RFID0gcmVxdWlyZSgnLi9DT0RFMzkvJyk7XG5cbnZhciBfQ09ERTIgPSByZXF1aXJlKCcuL0NPREUxMjgvJyk7XG5cbnZhciBfRUFOX1VQQyA9IHJlcXVpcmUoJy4vRUFOX1VQQy8nKTtcblxudmFyIF9JVEYgPSByZXF1aXJlKCcuL0lURi8nKTtcblxudmFyIF9NU0kgPSByZXF1aXJlKCcuL01TSS8nKTtcblxudmFyIF9waGFybWFjb2RlID0gcmVxdWlyZSgnLi9waGFybWFjb2RlLycpO1xuXG52YXIgX2NvZGFiYXIgPSByZXF1aXJlKCcuL2NvZGFiYXInKTtcblxudmFyIF9HZW5lcmljQmFyY29kZSA9IHJlcXVpcmUoJy4vR2VuZXJpY0JhcmNvZGUvJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcblx0Q09ERTM5OiBfQ09ERS5DT0RFMzksXG5cdENPREUxMjg6IF9DT0RFMi5DT0RFMTI4LCBDT0RFMTI4QTogX0NPREUyLkNPREUxMjhBLCBDT0RFMTI4QjogX0NPREUyLkNPREUxMjhCLCBDT0RFMTI4QzogX0NPREUyLkNPREUxMjhDLFxuXHRFQU4xMzogX0VBTl9VUEMuRUFOMTMsIEVBTjg6IF9FQU5fVVBDLkVBTjgsIEVBTjU6IF9FQU5fVVBDLkVBTjUsIEVBTjI6IF9FQU5fVVBDLkVBTjIsIFVQQzogX0VBTl9VUEMuVVBDLCBVUENFOiBfRUFOX1VQQy5VUENFLFxuXHRJVEYxNDogX0lURi5JVEYxNCxcblx0SVRGOiBfSVRGLklURixcblx0TVNJOiBfTVNJLk1TSSwgTVNJMTA6IF9NU0kuTVNJMTAsIE1TSTExOiBfTVNJLk1TSTExLCBNU0kxMDEwOiBfTVNJLk1TSTEwMTAsIE1TSTExMTA6IF9NU0kuTVNJMTExMCxcblx0cGhhcm1hY29kZTogX3BoYXJtYWNvZGUucGhhcm1hY29kZSxcblx0Y29kYWJhcjogX2NvZGFiYXIuY29kYWJhcixcblx0R2VuZXJpY0JhcmNvZGU6IF9HZW5lcmljQmFyY29kZS5HZW5lcmljQmFyY29kZVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucGhhcm1hY29kZSA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9CYXJjb2RlMiA9IHJlcXVpcmUoXCIuLi9CYXJjb2RlLmpzXCIpO1xuXG52YXIgX0JhcmNvZGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQmFyY29kZTIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9IC8vIEVuY29kaW5nIGRvY3VtZW50YXRpb25cbi8vIGh0dHA6Ly93d3cuZ29tYXJvLmNoL2Z0cHJvb3QvTGFldHVzX1BIQVJNQS1DT0RFLnBkZlxuXG52YXIgcGhhcm1hY29kZSA9IGZ1bmN0aW9uIChfQmFyY29kZSkge1xuXHRfaW5oZXJpdHMocGhhcm1hY29kZSwgX0JhcmNvZGUpO1xuXG5cdGZ1bmN0aW9uIHBoYXJtYWNvZGUoZGF0YSwgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBwaGFybWFjb2RlKTtcblxuXHRcdHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChwaGFybWFjb2RlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YocGhhcm1hY29kZSkpLmNhbGwodGhpcywgZGF0YSwgb3B0aW9ucykpO1xuXG5cdFx0X3RoaXMubnVtYmVyID0gcGFyc2VJbnQoZGF0YSwgMTApO1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhwaGFybWFjb2RlLCBbe1xuXHRcdGtleTogXCJlbmNvZGVcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZW5jb2RlKCkge1xuXHRcdFx0dmFyIHogPSB0aGlzLm51bWJlcjtcblx0XHRcdHZhciByZXN1bHQgPSBcIlwiO1xuXG5cdFx0XHQvLyBodHRwOi8vaS5pbWd1ci5jb20vUk1tNFVESi5wbmdcblx0XHRcdC8vIChzb3VyY2U6IGh0dHA6Ly93d3cuZ29tYXJvLmNoL2Z0cHJvb3QvTGFldHVzX1BIQVJNQS1DT0RFLnBkZiwgcGFnZTogMzQpXG5cdFx0XHR3aGlsZSAoIWlzTmFOKHopICYmIHogIT0gMCkge1xuXHRcdFx0XHRpZiAoeiAlIDIgPT09IDApIHtcblx0XHRcdFx0XHQvLyBFdmVuXG5cdFx0XHRcdFx0cmVzdWx0ID0gXCIxMTEwMFwiICsgcmVzdWx0O1xuXHRcdFx0XHRcdHogPSAoeiAtIDIpIC8gMjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBPZGRcblx0XHRcdFx0XHRyZXN1bHQgPSBcIjEwMFwiICsgcmVzdWx0O1xuXHRcdFx0XHRcdHogPSAoeiAtIDEpIC8gMjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZW1vdmUgdGhlIHR3byBsYXN0IHplcm9lc1xuXHRcdFx0cmVzdWx0ID0gcmVzdWx0LnNsaWNlKDAsIC0yKTtcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YTogcmVzdWx0LFxuXHRcdFx0XHR0ZXh0OiB0aGlzLnRleHRcblx0XHRcdH07XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcInZhbGlkXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHZhbGlkKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMubnVtYmVyID49IDMgJiYgdGhpcy5udW1iZXIgPD0gMTMxMDcwO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBwaGFybWFjb2RlO1xufShfQmFyY29kZTMuZGVmYXVsdCk7XG5cbmV4cG9ydHMucGhhcm1hY29kZSA9IHBoYXJtYWNvZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qZXNsaW50IG5vLWNvbnNvbGU6IDAgKi9cblxudmFyIEVycm9ySGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcblx0ZnVuY3Rpb24gRXJyb3JIYW5kbGVyKGFwaSkge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFcnJvckhhbmRsZXIpO1xuXG5cdFx0dGhpcy5hcGkgPSBhcGk7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoRXJyb3JIYW5kbGVyLCBbe1xuXHRcdGtleTogXCJoYW5kbGVDYXRjaFwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVDYXRjaChlKSB7XG5cdFx0XHQvLyBJZiBiYWJlbCBzdXBwb3J0ZWQgZXh0ZW5kaW5nIG9mIEVycm9yIGluIGEgY29ycmVjdCB3YXkgaW5zdGFuY2VvZiB3b3VsZCBiZSB1c2VkIGhlcmVcblx0XHRcdGlmIChlLm5hbWUgPT09IFwiSW52YWxpZElucHV0RXhjZXB0aW9uXCIpIHtcblx0XHRcdFx0aWYgKHRoaXMuYXBpLl9vcHRpb25zLnZhbGlkICE9PSB0aGlzLmFwaS5fZGVmYXVsdHMudmFsaWQpIHtcblx0XHRcdFx0XHR0aGlzLmFwaS5fb3B0aW9ucy52YWxpZChmYWxzZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhyb3cgZS5tZXNzYWdlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyBlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmFwaS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7fTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwid3JhcEJhcmNvZGVDYWxsXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHdyYXBCYXJjb2RlQ2FsbChmdW5jKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR2YXIgcmVzdWx0ID0gZnVuYy5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG5cdFx0XHRcdHRoaXMuYXBpLl9vcHRpb25zLnZhbGlkKHRydWUpO1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHR0aGlzLmhhbmRsZUNhdGNoKGUpO1xuXG5cdFx0XHRcdHJldHVybiB0aGlzLmFwaTtcblx0XHRcdH1cblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gRXJyb3JIYW5kbGVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBFcnJvckhhbmRsZXI7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBJbnZhbGlkSW5wdXRFeGNlcHRpb24gPSBmdW5jdGlvbiAoX0Vycm9yKSB7XG5cdF9pbmhlcml0cyhJbnZhbGlkSW5wdXRFeGNlcHRpb24sIF9FcnJvcik7XG5cblx0ZnVuY3Rpb24gSW52YWxpZElucHV0RXhjZXB0aW9uKHN5bWJvbG9neSwgaW5wdXQpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW52YWxpZElucHV0RXhjZXB0aW9uKTtcblxuXHRcdHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChJbnZhbGlkSW5wdXRFeGNlcHRpb24uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihJbnZhbGlkSW5wdXRFeGNlcHRpb24pKS5jYWxsKHRoaXMpKTtcblxuXHRcdF90aGlzLm5hbWUgPSBcIkludmFsaWRJbnB1dEV4Y2VwdGlvblwiO1xuXG5cdFx0X3RoaXMuc3ltYm9sb2d5ID0gc3ltYm9sb2d5O1xuXHRcdF90aGlzLmlucHV0ID0gaW5wdXQ7XG5cblx0XHRfdGhpcy5tZXNzYWdlID0gJ1wiJyArIF90aGlzLmlucHV0ICsgJ1wiIGlzIG5vdCBhIHZhbGlkIGlucHV0IGZvciAnICsgX3RoaXMuc3ltYm9sb2d5O1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdHJldHVybiBJbnZhbGlkSW5wdXRFeGNlcHRpb247XG59KEVycm9yKTtcblxudmFyIEludmFsaWRFbGVtZW50RXhjZXB0aW9uID0gZnVuY3Rpb24gKF9FcnJvcjIpIHtcblx0X2luaGVyaXRzKEludmFsaWRFbGVtZW50RXhjZXB0aW9uLCBfRXJyb3IyKTtcblxuXHRmdW5jdGlvbiBJbnZhbGlkRWxlbWVudEV4Y2VwdGlvbigpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW52YWxpZEVsZW1lbnRFeGNlcHRpb24pO1xuXG5cdFx0dmFyIF90aGlzMiA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChJbnZhbGlkRWxlbWVudEV4Y2VwdGlvbi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEludmFsaWRFbGVtZW50RXhjZXB0aW9uKSkuY2FsbCh0aGlzKSk7XG5cblx0XHRfdGhpczIubmFtZSA9IFwiSW52YWxpZEVsZW1lbnRFeGNlcHRpb25cIjtcblx0XHRfdGhpczIubWVzc2FnZSA9IFwiTm90IHN1cHBvcnRlZCB0eXBlIHRvIHJlbmRlciBvblwiO1xuXHRcdHJldHVybiBfdGhpczI7XG5cdH1cblxuXHRyZXR1cm4gSW52YWxpZEVsZW1lbnRFeGNlcHRpb247XG59KEVycm9yKTtcblxudmFyIE5vRWxlbWVudEV4Y2VwdGlvbiA9IGZ1bmN0aW9uIChfRXJyb3IzKSB7XG5cdF9pbmhlcml0cyhOb0VsZW1lbnRFeGNlcHRpb24sIF9FcnJvcjMpO1xuXG5cdGZ1bmN0aW9uIE5vRWxlbWVudEV4Y2VwdGlvbigpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm9FbGVtZW50RXhjZXB0aW9uKTtcblxuXHRcdHZhciBfdGhpczMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTm9FbGVtZW50RXhjZXB0aW9uLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTm9FbGVtZW50RXhjZXB0aW9uKSkuY2FsbCh0aGlzKSk7XG5cblx0XHRfdGhpczMubmFtZSA9IFwiTm9FbGVtZW50RXhjZXB0aW9uXCI7XG5cdFx0X3RoaXMzLm1lc3NhZ2UgPSBcIk5vIGVsZW1lbnQgdG8gcmVuZGVyIG9uLlwiO1xuXHRcdHJldHVybiBfdGhpczM7XG5cdH1cblxuXHRyZXR1cm4gTm9FbGVtZW50RXhjZXB0aW9uO1xufShFcnJvcik7XG5cbmV4cG9ydHMuSW52YWxpZElucHV0RXhjZXB0aW9uID0gSW52YWxpZElucHV0RXhjZXB0aW9uO1xuZXhwb3J0cy5JbnZhbGlkRWxlbWVudEV4Y2VwdGlvbiA9IEludmFsaWRFbGVtZW50RXhjZXB0aW9uO1xuZXhwb3J0cy5Ob0VsZW1lbnRFeGNlcHRpb24gPSBOb0VsZW1lbnRFeGNlcHRpb247IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmaXhPcHRpb25zO1xuXG5cbmZ1bmN0aW9uIGZpeE9wdGlvbnMob3B0aW9ucykge1xuXHQvLyBGaXggdGhlIG1hcmdpbnNcblx0b3B0aW9ucy5tYXJnaW5Ub3AgPSBvcHRpb25zLm1hcmdpblRvcCB8fCBvcHRpb25zLm1hcmdpbjtcblx0b3B0aW9ucy5tYXJnaW5Cb3R0b20gPSBvcHRpb25zLm1hcmdpbkJvdHRvbSB8fCBvcHRpb25zLm1hcmdpbjtcblx0b3B0aW9ucy5tYXJnaW5SaWdodCA9IG9wdGlvbnMubWFyZ2luUmlnaHQgfHwgb3B0aW9ucy5tYXJnaW47XG5cdG9wdGlvbnMubWFyZ2luTGVmdCA9IG9wdGlvbnMubWFyZ2luTGVmdCB8fCBvcHRpb25zLm1hcmdpbjtcblxuXHRyZXR1cm4gb3B0aW9ucztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9vcHRpb25zRnJvbVN0cmluZ3MgPSByZXF1aXJlKFwiLi9vcHRpb25zRnJvbVN0cmluZ3MuanNcIik7XG5cbnZhciBfb3B0aW9uc0Zyb21TdHJpbmdzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29wdGlvbnNGcm9tU3RyaW5ncyk7XG5cbnZhciBfZGVmYXVsdHMgPSByZXF1aXJlKFwiLi4vb3B0aW9ucy9kZWZhdWx0cy5qc1wiKTtcblxudmFyIF9kZWZhdWx0czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZhdWx0cyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldE9wdGlvbnNGcm9tRWxlbWVudChlbGVtZW50KSB7XG5cdHZhciBvcHRpb25zID0ge307XG5cdGZvciAodmFyIHByb3BlcnR5IGluIF9kZWZhdWx0czIuZGVmYXVsdCkge1xuXHRcdGlmIChfZGVmYXVsdHMyLmRlZmF1bHQuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG5cdFx0XHQvLyBqc2JhcmNvZGUtKlxuXHRcdFx0aWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwianNiYXJjb2RlLVwiICsgcHJvcGVydHkudG9Mb3dlckNhc2UoKSkpIHtcblx0XHRcdFx0b3B0aW9uc1twcm9wZXJ0eV0gPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImpzYmFyY29kZS1cIiArIHByb3BlcnR5LnRvTG93ZXJDYXNlKCkpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBkYXRhLSpcblx0XHRcdGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShcImRhdGEtXCIgKyBwcm9wZXJ0eS50b0xvd2VyQ2FzZSgpKSkge1xuXHRcdFx0XHRvcHRpb25zW3Byb3BlcnR5XSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1cIiArIHByb3BlcnR5LnRvTG93ZXJDYXNlKCkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG9wdGlvbnNbXCJ2YWx1ZVwiXSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwianNiYXJjb2RlLXZhbHVlXCIpIHx8IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiKTtcblxuXHQvLyBTaW5jZSBhbGwgYXRyaWJ1dGVzIGFyZSBzdHJpbmcgdGhleSBuZWVkIHRvIGJlIGNvbnZlcnRlZCB0byBpbnRlZ2Vyc1xuXHRvcHRpb25zID0gKDAsIF9vcHRpb25zRnJvbVN0cmluZ3MyLmRlZmF1bHQpKG9wdGlvbnMpO1xuXG5cdHJldHVybiBvcHRpb25zO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBnZXRPcHRpb25zRnJvbUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgLyogZ2xvYmFsIEhUTUxJbWFnZUVsZW1lbnQgKi9cbi8qIGdsb2JhbCBIVE1MQ2FudmFzRWxlbWVudCAqL1xuLyogZ2xvYmFsIFNWR0VsZW1lbnQgKi9cblxudmFyIF9nZXRPcHRpb25zRnJvbUVsZW1lbnQgPSByZXF1aXJlKFwiLi9nZXRPcHRpb25zRnJvbUVsZW1lbnQuanNcIik7XG5cbnZhciBfZ2V0T3B0aW9uc0Zyb21FbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldE9wdGlvbnNGcm9tRWxlbWVudCk7XG5cbnZhciBfcmVuZGVyZXJzID0gcmVxdWlyZShcIi4uL3JlbmRlcmVyc1wiKTtcblxudmFyIF9yZW5kZXJlcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVuZGVyZXJzKTtcblxudmFyIF9leGNlcHRpb25zID0gcmVxdWlyZShcIi4uL2V4Y2VwdGlvbnMvZXhjZXB0aW9ucy5qc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gVGFrZXMgYW4gZWxlbWVudCBhbmQgcmV0dXJucyBhbiBvYmplY3Qgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCBob3dcbi8vIGl0IHNob3VsZCBiZSByZW5kZXJlZFxuLy8gVGhpcyBjb3VsZCBhbHNvIHJldHVybiBhbiBhcnJheSB3aXRoIHRoZXNlIG9iamVjdHNcbi8vIHtcbi8vICAgZWxlbWVudDogVGhlIGVsZW1lbnQgdGhhdCB0aGUgcmVuZGVyZXIgc2hvdWxkIGRyYXcgb25cbi8vICAgcmVuZGVyZXI6IFRoZSBuYW1lIG9mIHRoZSByZW5kZXJlclxuLy8gICBhZnRlclJlbmRlciAob3B0aW9uYWwpOiBJZiBzb21ldGhpbmcgaGFzIHRvIGRvbmUgYWZ0ZXIgdGhlIHJlbmRlcmVyXG4vLyAgICAgY29tcGxldGVkLCBjYWxscyBhZnRlclJlbmRlciAoZnVuY3Rpb24pXG4vLyAgIG9wdGlvbnMgKG9wdGlvbmFsKTogT3B0aW9ucyB0aGF0IGNhbiBiZSBkZWZpbmVkIGluIHRoZSBlbGVtZW50XG4vLyB9XG5cbmZ1bmN0aW9uIGdldFJlbmRlclByb3BlcnRpZXMoZWxlbWVudCkge1xuXHQvLyBJZiB0aGUgZWxlbWVudCBpcyBhIHN0cmluZywgcXVlcnkgc2VsZWN0IGNhbGwgYWdhaW5cblx0aWYgKHR5cGVvZiBlbGVtZW50ID09PSBcInN0cmluZ1wiKSB7XG5cdFx0cmV0dXJuIHF1ZXJ5U2VsZWN0ZWRSZW5kZXJQcm9wZXJ0aWVzKGVsZW1lbnQpO1xuXHR9XG5cdC8vIElmIGVsZW1lbnQgaXMgYXJyYXkuIFJlY3Vyc2l2bHkgY2FsbCB3aXRoIGV2ZXJ5IG9iamVjdCBpbiB0aGUgYXJyYXlcblx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShlbGVtZW50KSkge1xuXHRcdFx0dmFyIHJldHVybkFycmF5ID0gW107XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaChnZXRSZW5kZXJQcm9wZXJ0aWVzKGVsZW1lbnRbaV0pKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXR1cm5BcnJheTtcblx0XHR9XG5cdFx0Ly8gSWYgZWxlbWVudCwgcmVuZGVyIG9uIGNhbnZhcyBhbmQgc2V0IHRoZSB1cmkgYXMgc3JjXG5cdFx0ZWxzZSBpZiAodHlwZW9mIEhUTUxDYW52YXNFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBlbGVtZW50IGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xuXHRcdFx0XHRyZXR1cm4gbmV3Q2FudmFzUmVuZGVyUHJvcGVydGllcyhlbGVtZW50KTtcblx0XHRcdH1cblx0XHRcdC8vIElmIFNWR1xuXHRcdFx0ZWxzZSBpZiAoZWxlbWVudCAmJiBlbGVtZW50Lm5vZGVOYW1lICYmIGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3N2ZycgfHwgdHlwZW9mIFNWR0VsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdGVsZW1lbnQ6IGVsZW1lbnQsXG5cdFx0XHRcdFx0XHRvcHRpb25zOiAoMCwgX2dldE9wdGlvbnNGcm9tRWxlbWVudDIuZGVmYXVsdCkoZWxlbWVudCksXG5cdFx0XHRcdFx0XHRyZW5kZXJlcjogX3JlbmRlcmVyczIuZGVmYXVsdC5TVkdSZW5kZXJlclxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gSWYgY2FudmFzIChpbiBicm93c2VyKVxuXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgSFRNTENhbnZhc0VsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0ZWxlbWVudDogZWxlbWVudCxcblx0XHRcdFx0XHRcdFx0b3B0aW9uczogKDAsIF9nZXRPcHRpb25zRnJvbUVsZW1lbnQyLmRlZmF1bHQpKGVsZW1lbnQpLFxuXHRcdFx0XHRcdFx0XHRyZW5kZXJlcjogX3JlbmRlcmVyczIuZGVmYXVsdC5DYW52YXNSZW5kZXJlclxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gSWYgY2FudmFzIChpbiBub2RlKVxuXHRcdFx0XHRcdGVsc2UgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5nZXRDb250ZXh0KSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdFx0ZWxlbWVudDogZWxlbWVudCxcblx0XHRcdFx0XHRcdFx0XHRyZW5kZXJlcjogX3JlbmRlcmVyczIuZGVmYXVsdC5DYW52YXNSZW5kZXJlclxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChlbGVtZW50ICYmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGVsZW1lbnQpKSA9PT0gJ29iamVjdCcgJiYgIWVsZW1lbnQubm9kZU5hbWUpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRlbGVtZW50OiBlbGVtZW50LFxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcmVyOiBfcmVuZGVyZXJzMi5kZWZhdWx0Lk9iamVjdFJlbmRlcmVyXG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgX2V4Y2VwdGlvbnMuSW52YWxpZEVsZW1lbnRFeGNlcHRpb24oKTtcblx0XHRcdFx0XHRcdH1cbn1cblxuZnVuY3Rpb24gcXVlcnlTZWxlY3RlZFJlbmRlclByb3BlcnRpZXMoc3RyaW5nKSB7XG5cdHZhciBzZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc3RyaW5nKTtcblx0aWYgKHNlbGVjdG9yLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIHJldHVybkFycmF5ID0gW107XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3Rvci5sZW5ndGg7IGkrKykge1xuXHRcdFx0cmV0dXJuQXJyYXkucHVzaChnZXRSZW5kZXJQcm9wZXJ0aWVzKHNlbGVjdG9yW2ldKSk7XG5cdFx0fVxuXHRcdHJldHVybiByZXR1cm5BcnJheTtcblx0fVxufVxuXG5mdW5jdGlvbiBuZXdDYW52YXNSZW5kZXJQcm9wZXJ0aWVzKGltZ0VsZW1lbnQpIHtcblx0dmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXHRyZXR1cm4ge1xuXHRcdGVsZW1lbnQ6IGNhbnZhcyxcblx0XHRvcHRpb25zOiAoMCwgX2dldE9wdGlvbnNGcm9tRWxlbWVudDIuZGVmYXVsdCkoaW1nRWxlbWVudCksXG5cdFx0cmVuZGVyZXI6IF9yZW5kZXJlcnMyLmRlZmF1bHQuQ2FudmFzUmVuZGVyZXIsXG5cdFx0YWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uIGFmdGVyUmVuZGVyKCkge1xuXHRcdFx0aW1nRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgY2FudmFzLnRvRGF0YVVSTCgpKTtcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGdldFJlbmRlclByb3BlcnRpZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBsaW5lYXJpemVFbmNvZGluZ3M7XG5cbi8vIEVuY29kaW5ncyBjYW4gYmUgbmVzdGxlZCBsaWtlIFtbMS0xLCAxLTJdLCAyLCBbMy0xLCAzLTJdXG4vLyBDb252ZXJ0IHRvIFsxLTEsIDEtMiwgMiwgMy0xLCAzLTJdXG5cbmZ1bmN0aW9uIGxpbmVhcml6ZUVuY29kaW5ncyhlbmNvZGluZ3MpIHtcblx0dmFyIGxpbmVhckVuY29kaW5ncyA9IFtdO1xuXHRmdW5jdGlvbiBuZXh0TGV2ZWwoZW5jb2RlZCkge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KGVuY29kZWQpKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGVuY29kZWQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bmV4dExldmVsKGVuY29kZWRbaV0pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbmNvZGVkLnRleHQgPSBlbmNvZGVkLnRleHQgfHwgXCJcIjtcblx0XHRcdGVuY29kZWQuZGF0YSA9IGVuY29kZWQuZGF0YSB8fCBcIlwiO1xuXHRcdFx0bGluZWFyRW5jb2RpbmdzLnB1c2goZW5jb2RlZCk7XG5cdFx0fVxuXHR9XG5cdG5leHRMZXZlbChlbmNvZGluZ3MpO1xuXG5cdHJldHVybiBsaW5lYXJFbmNvZGluZ3M7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvbGQsIHJlcGxhY2VPYmopIHtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBvbGQsIHJlcGxhY2VPYmopO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IG9wdGlvbnNGcm9tU3RyaW5ncztcblxuLy8gQ29udmVydCBzdHJpbmcgdG8gaW50ZWdlcnMvYm9vbGVhbnMgd2hlcmUgaXQgc2hvdWxkIGJlXG5cbmZ1bmN0aW9uIG9wdGlvbnNGcm9tU3RyaW5ncyhvcHRpb25zKSB7XG5cdHZhciBpbnRPcHRpb25zID0gW1wid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJ0ZXh0TWFyZ2luXCIsIFwiZm9udFNpemVcIiwgXCJtYXJnaW5cIiwgXCJtYXJnaW5Ub3BcIiwgXCJtYXJnaW5Cb3R0b21cIiwgXCJtYXJnaW5MZWZ0XCIsIFwibWFyZ2luUmlnaHRcIl07XG5cblx0Zm9yICh2YXIgaW50T3B0aW9uIGluIGludE9wdGlvbnMpIHtcblx0XHRpZiAoaW50T3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShpbnRPcHRpb24pKSB7XG5cdFx0XHRpbnRPcHRpb24gPSBpbnRPcHRpb25zW2ludE9wdGlvbl07XG5cdFx0XHRpZiAodHlwZW9mIG9wdGlvbnNbaW50T3B0aW9uXSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRvcHRpb25zW2ludE9wdGlvbl0gPSBwYXJzZUludChvcHRpb25zW2ludE9wdGlvbl0sIDEwKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAodHlwZW9mIG9wdGlvbnNbXCJkaXNwbGF5VmFsdWVcIl0gPT09IFwic3RyaW5nXCIpIHtcblx0XHRvcHRpb25zW1wiZGlzcGxheVZhbHVlXCJdID0gb3B0aW9uc1tcImRpc3BsYXlWYWx1ZVwiXSAhPSBcImZhbHNlXCI7XG5cdH1cblxuXHRyZXR1cm4gb3B0aW9ucztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbnZhciBkZWZhdWx0cyA9IHtcblx0d2lkdGg6IDIsXG5cdGhlaWdodDogMTAwLFxuXHRmb3JtYXQ6IFwiYXV0b1wiLFxuXHRkaXNwbGF5VmFsdWU6IHRydWUsXG5cdGZvbnRPcHRpb25zOiBcIlwiLFxuXHRmb250OiBcIm1vbm9zcGFjZVwiLFxuXHR0ZXh0OiB1bmRlZmluZWQsXG5cdHRleHRBbGlnbjogXCJjZW50ZXJcIixcblx0dGV4dFBvc2l0aW9uOiBcImJvdHRvbVwiLFxuXHR0ZXh0TWFyZ2luOiAyLFxuXHRmb250U2l6ZTogMjAsXG5cdGJhY2tncm91bmQ6IFwiI2ZmZmZmZlwiLFxuXHRsaW5lQ29sb3I6IFwiIzAwMDAwMFwiLFxuXHRtYXJnaW46IDEwLFxuXHRtYXJnaW5Ub3A6IHVuZGVmaW5lZCxcblx0bWFyZ2luQm90dG9tOiB1bmRlZmluZWQsXG5cdG1hcmdpbkxlZnQ6IHVuZGVmaW5lZCxcblx0bWFyZ2luUmlnaHQ6IHVuZGVmaW5lZCxcblx0dmFsaWQ6IGZ1bmN0aW9uIHZhbGlkKCkge31cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmF1bHRzOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX21lcmdlID0gcmVxdWlyZShcIi4uL2hlbHAvbWVyZ2UuanNcIik7XG5cbnZhciBfbWVyZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWVyZ2UpO1xuXG52YXIgX3NoYXJlZCA9IHJlcXVpcmUoXCIuL3NoYXJlZC5qc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIENhbnZhc1JlbmRlcmVyID0gZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiBDYW52YXNSZW5kZXJlcihjYW52YXMsIGVuY29kaW5ncywgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDYW52YXNSZW5kZXJlcik7XG5cblx0XHR0aGlzLmNhbnZhcyA9IGNhbnZhcztcblx0XHR0aGlzLmVuY29kaW5ncyA9IGVuY29kaW5ncztcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKENhbnZhc1JlbmRlcmVyLCBbe1xuXHRcdGtleTogXCJyZW5kZXJcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0Ly8gQWJvcnQgaWYgdGhlIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBIVE1MNSBjYW52YXNcblx0XHRcdGlmICghdGhpcy5jYW52YXMuZ2V0Q29udGV4dCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RoZSBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgY2FudmFzLicpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnByZXBhcmVDYW52YXMoKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5lbmNvZGluZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIGVuY29kaW5nT3B0aW9ucyA9ICgwLCBfbWVyZ2UyLmRlZmF1bHQpKHRoaXMub3B0aW9ucywgdGhpcy5lbmNvZGluZ3NbaV0ub3B0aW9ucyk7XG5cblx0XHRcdFx0dGhpcy5kcmF3Q2FudmFzQmFyY29kZShlbmNvZGluZ09wdGlvbnMsIHRoaXMuZW5jb2RpbmdzW2ldKTtcblx0XHRcdFx0dGhpcy5kcmF3Q2FudmFzVGV4dChlbmNvZGluZ09wdGlvbnMsIHRoaXMuZW5jb2RpbmdzW2ldKTtcblxuXHRcdFx0XHR0aGlzLm1vdmVDYW52YXNEcmF3aW5nKHRoaXMuZW5jb2RpbmdzW2ldKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5yZXN0b3JlQ2FudmFzKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcInByZXBhcmVDYW52YXNcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gcHJlcGFyZUNhbnZhcygpIHtcblx0XHRcdC8vIEdldCB0aGUgY2FudmFzIGNvbnRleHRcblx0XHRcdHZhciBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cblx0XHRcdGN0eC5zYXZlKCk7XG5cblx0XHRcdCgwLCBfc2hhcmVkLmNhbGN1bGF0ZUVuY29kaW5nQXR0cmlidXRlcykodGhpcy5lbmNvZGluZ3MsIHRoaXMub3B0aW9ucywgY3R4KTtcblx0XHRcdHZhciB0b3RhbFdpZHRoID0gKDAsIF9zaGFyZWQuZ2V0VG90YWxXaWR0aE9mRW5jb2RpbmdzKSh0aGlzLmVuY29kaW5ncyk7XG5cdFx0XHR2YXIgbWF4SGVpZ2h0ID0gKDAsIF9zaGFyZWQuZ2V0TWF4aW11bUhlaWdodE9mRW5jb2RpbmdzKSh0aGlzLmVuY29kaW5ncyk7XG5cblx0XHRcdHRoaXMuY2FudmFzLndpZHRoID0gdG90YWxXaWR0aCArIHRoaXMub3B0aW9ucy5tYXJnaW5MZWZ0ICsgdGhpcy5vcHRpb25zLm1hcmdpblJpZ2h0O1xuXG5cdFx0XHR0aGlzLmNhbnZhcy5oZWlnaHQgPSBtYXhIZWlnaHQ7XG5cblx0XHRcdC8vIFBhaW50IHRoZSBjYW52YXNcblx0XHRcdGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLmJhY2tncm91bmQpIHtcblx0XHRcdFx0Y3R4LmZpbGxTdHlsZSA9IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kO1xuXHRcdFx0XHRjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cdFx0XHR9XG5cblx0XHRcdGN0eC50cmFuc2xhdGUodGhpcy5vcHRpb25zLm1hcmdpbkxlZnQsIDApO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJkcmF3Q2FudmFzQmFyY29kZVwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBkcmF3Q2FudmFzQmFyY29kZShvcHRpb25zLCBlbmNvZGluZykge1xuXHRcdFx0Ly8gR2V0IHRoZSBjYW52YXMgY29udGV4dFxuXHRcdFx0dmFyIGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuXHRcdFx0dmFyIGJpbmFyeSA9IGVuY29kaW5nLmRhdGE7XG5cblx0XHRcdC8vIENyZWF0ZXMgdGhlIGJhcmNvZGUgb3V0IG9mIHRoZSBlbmNvZGVkIGJpbmFyeVxuXHRcdFx0dmFyIHlGcm9tO1xuXHRcdFx0aWYgKG9wdGlvbnMudGV4dFBvc2l0aW9uID09IFwidG9wXCIpIHtcblx0XHRcdFx0eUZyb20gPSBvcHRpb25zLm1hcmdpblRvcCArIG9wdGlvbnMuZm9udFNpemUgKyBvcHRpb25zLnRleHRNYXJnaW47XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR5RnJvbSA9IG9wdGlvbnMubWFyZ2luVG9wO1xuXHRcdFx0fVxuXG5cdFx0XHRjdHguZmlsbFN0eWxlID0gb3B0aW9ucy5saW5lQ29sb3I7XG5cblx0XHRcdGZvciAodmFyIGIgPSAwOyBiIDwgYmluYXJ5Lmxlbmd0aDsgYisrKSB7XG5cdFx0XHRcdHZhciB4ID0gYiAqIG9wdGlvbnMud2lkdGggKyBlbmNvZGluZy5iYXJjb2RlUGFkZGluZztcblxuXHRcdFx0XHRpZiAoYmluYXJ5W2JdID09PSBcIjFcIikge1xuXHRcdFx0XHRcdGN0eC5maWxsUmVjdCh4LCB5RnJvbSwgb3B0aW9ucy53aWR0aCwgb3B0aW9ucy5oZWlnaHQpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGJpbmFyeVtiXSkge1xuXHRcdFx0XHRcdGN0eC5maWxsUmVjdCh4LCB5RnJvbSwgb3B0aW9ucy53aWR0aCwgb3B0aW9ucy5oZWlnaHQgKiBiaW5hcnlbYl0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcImRyYXdDYW52YXNUZXh0XCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGRyYXdDYW52YXNUZXh0KG9wdGlvbnMsIGVuY29kaW5nKSB7XG5cdFx0XHQvLyBHZXQgdGhlIGNhbnZhcyBjb250ZXh0XG5cdFx0XHR2YXIgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5cdFx0XHR2YXIgZm9udCA9IG9wdGlvbnMuZm9udE9wdGlvbnMgKyBcIiBcIiArIG9wdGlvbnMuZm9udFNpemUgKyBcInB4IFwiICsgb3B0aW9ucy5mb250O1xuXG5cdFx0XHQvLyBEcmF3IHRoZSB0ZXh0IGlmIGRpc3BsYXlWYWx1ZSBpcyBzZXRcblx0XHRcdGlmIChvcHRpb25zLmRpc3BsYXlWYWx1ZSkge1xuXHRcdFx0XHR2YXIgeCwgeTtcblxuXHRcdFx0XHRpZiAob3B0aW9ucy50ZXh0UG9zaXRpb24gPT0gXCJ0b3BcIikge1xuXHRcdFx0XHRcdHkgPSBvcHRpb25zLm1hcmdpblRvcCArIG9wdGlvbnMuZm9udFNpemUgLSBvcHRpb25zLnRleHRNYXJnaW47XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0eSA9IG9wdGlvbnMuaGVpZ2h0ICsgb3B0aW9ucy50ZXh0TWFyZ2luICsgb3B0aW9ucy5tYXJnaW5Ub3AgKyBvcHRpb25zLmZvbnRTaXplO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y3R4LmZvbnQgPSBmb250O1xuXG5cdFx0XHRcdC8vIERyYXcgdGhlIHRleHQgaW4gdGhlIGNvcnJlY3QgWCBkZXBlbmRpbmcgb24gdGhlIHRleHRBbGlnbiBvcHRpb25cblx0XHRcdFx0aWYgKG9wdGlvbnMudGV4dEFsaWduID09IFwibGVmdFwiIHx8IGVuY29kaW5nLmJhcmNvZGVQYWRkaW5nID4gMCkge1xuXHRcdFx0XHRcdHggPSAwO1xuXHRcdFx0XHRcdGN0eC50ZXh0QWxpZ24gPSAnbGVmdCc7XG5cdFx0XHRcdH0gZWxzZSBpZiAob3B0aW9ucy50ZXh0QWxpZ24gPT0gXCJyaWdodFwiKSB7XG5cdFx0XHRcdFx0eCA9IGVuY29kaW5nLndpZHRoIC0gMTtcblx0XHRcdFx0XHRjdHgudGV4dEFsaWduID0gJ3JpZ2h0Jztcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBJbiBhbGwgb3RoZXIgY2FzZXMsIGNlbnRlciB0aGUgdGV4dFxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdHggPSBlbmNvZGluZy53aWR0aCAvIDI7XG5cdFx0XHRcdFx0XHRjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdGN0eC5maWxsVGV4dChlbmNvZGluZy50ZXh0LCB4LCB5KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwibW92ZUNhbnZhc0RyYXdpbmdcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gbW92ZUNhbnZhc0RyYXdpbmcoZW5jb2RpbmcpIHtcblx0XHRcdHZhciBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cblx0XHRcdGN0eC50cmFuc2xhdGUoZW5jb2Rpbmcud2lkdGgsIDApO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJyZXN0b3JlQ2FudmFzXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlc3RvcmVDYW52YXMoKSB7XG5cdFx0XHQvLyBHZXQgdGhlIGNhbnZhcyBjb250ZXh0XG5cdFx0XHR2YXIgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5cdFx0XHRjdHgucmVzdG9yZSgpO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBDYW52YXNSZW5kZXJlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ2FudmFzUmVuZGVyZXI7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NhbnZhcyA9IHJlcXVpcmUoJy4vY2FudmFzLmpzJyk7XG5cbnZhciBfY2FudmFzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhbnZhcyk7XG5cbnZhciBfc3ZnID0gcmVxdWlyZSgnLi9zdmcuanMnKTtcblxudmFyIF9zdmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnKTtcblxudmFyIF9vYmplY3QgPSByZXF1aXJlKCcuL29iamVjdC5qcycpO1xuXG52YXIgX29iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7IENhbnZhc1JlbmRlcmVyOiBfY2FudmFzMi5kZWZhdWx0LCBTVkdSZW5kZXJlcjogX3N2ZzIuZGVmYXVsdCwgT2JqZWN0UmVuZGVyZXI6IF9vYmplY3QyLmRlZmF1bHQgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIE9iamVjdFJlbmRlcmVyID0gZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiBPYmplY3RSZW5kZXJlcihvYmplY3QsIGVuY29kaW5ncywgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBPYmplY3RSZW5kZXJlcik7XG5cblx0XHR0aGlzLm9iamVjdCA9IG9iamVjdDtcblx0XHR0aGlzLmVuY29kaW5ncyA9IGVuY29kaW5ncztcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKE9iamVjdFJlbmRlcmVyLCBbe1xuXHRcdGtleTogXCJyZW5kZXJcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0dGhpcy5vYmplY3QuZW5jb2RpbmdzID0gdGhpcy5lbmNvZGluZ3M7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIE9iamVjdFJlbmRlcmVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBPYmplY3RSZW5kZXJlcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0VG90YWxXaWR0aE9mRW5jb2RpbmdzID0gZXhwb3J0cy5jYWxjdWxhdGVFbmNvZGluZ0F0dHJpYnV0ZXMgPSBleHBvcnRzLmdldEJhcmNvZGVQYWRkaW5nID0gZXhwb3J0cy5nZXRFbmNvZGluZ0hlaWdodCA9IGV4cG9ydHMuZ2V0TWF4aW11bUhlaWdodE9mRW5jb2RpbmdzID0gdW5kZWZpbmVkO1xuXG52YXIgX21lcmdlID0gcmVxdWlyZShcIi4uL2hlbHAvbWVyZ2UuanNcIik7XG5cbnZhciBfbWVyZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWVyZ2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRFbmNvZGluZ0hlaWdodChlbmNvZGluZywgb3B0aW9ucykge1xuXHRyZXR1cm4gb3B0aW9ucy5oZWlnaHQgKyAob3B0aW9ucy5kaXNwbGF5VmFsdWUgJiYgZW5jb2RpbmcudGV4dC5sZW5ndGggPiAwID8gb3B0aW9ucy5mb250U2l6ZSArIG9wdGlvbnMudGV4dE1hcmdpbiA6IDApICsgb3B0aW9ucy5tYXJnaW5Ub3AgKyBvcHRpb25zLm1hcmdpbkJvdHRvbTtcbn1cblxuZnVuY3Rpb24gZ2V0QmFyY29kZVBhZGRpbmcodGV4dFdpZHRoLCBiYXJjb2RlV2lkdGgsIG9wdGlvbnMpIHtcblx0aWYgKG9wdGlvbnMuZGlzcGxheVZhbHVlICYmIGJhcmNvZGVXaWR0aCA8IHRleHRXaWR0aCkge1xuXHRcdGlmIChvcHRpb25zLnRleHRBbGlnbiA9PSBcImNlbnRlclwiKSB7XG5cdFx0XHRyZXR1cm4gTWF0aC5mbG9vcigodGV4dFdpZHRoIC0gYmFyY29kZVdpZHRoKSAvIDIpO1xuXHRcdH0gZWxzZSBpZiAob3B0aW9ucy50ZXh0QWxpZ24gPT0gXCJsZWZ0XCIpIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH0gZWxzZSBpZiAob3B0aW9ucy50ZXh0QWxpZ24gPT0gXCJyaWdodFwiKSB7XG5cdFx0XHRyZXR1cm4gTWF0aC5mbG9vcih0ZXh0V2lkdGggLSBiYXJjb2RlV2lkdGgpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gMDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlRW5jb2RpbmdBdHRyaWJ1dGVzKGVuY29kaW5ncywgYmFyY29kZU9wdGlvbnMsIGNvbnRleHQpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbmNvZGluZ3MubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZW5jb2RpbmcgPSBlbmNvZGluZ3NbaV07XG5cdFx0dmFyIG9wdGlvbnMgPSAoMCwgX21lcmdlMi5kZWZhdWx0KShiYXJjb2RlT3B0aW9ucywgZW5jb2Rpbmcub3B0aW9ucyk7XG5cblx0XHQvLyBDYWxjdWxhdGUgdGhlIHdpZHRoIG9mIHRoZSBlbmNvZGluZ1xuXHRcdHZhciB0ZXh0V2lkdGg7XG5cdFx0aWYgKG9wdGlvbnMuZGlzcGxheVZhbHVlKSB7XG5cdFx0XHR0ZXh0V2lkdGggPSBtZXNzdXJlVGV4dChlbmNvZGluZy50ZXh0LCBvcHRpb25zLCBjb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGV4dFdpZHRoID0gMDtcblx0XHR9XG5cblx0XHR2YXIgYmFyY29kZVdpZHRoID0gZW5jb2RpbmcuZGF0YS5sZW5ndGggKiBvcHRpb25zLndpZHRoO1xuXHRcdGVuY29kaW5nLndpZHRoID0gTWF0aC5jZWlsKE1hdGgubWF4KHRleHRXaWR0aCwgYmFyY29kZVdpZHRoKSk7XG5cblx0XHRlbmNvZGluZy5oZWlnaHQgPSBnZXRFbmNvZGluZ0hlaWdodChlbmNvZGluZywgb3B0aW9ucyk7XG5cblx0XHRlbmNvZGluZy5iYXJjb2RlUGFkZGluZyA9IGdldEJhcmNvZGVQYWRkaW5nKHRleHRXaWR0aCwgYmFyY29kZVdpZHRoLCBvcHRpb25zKTtcblx0fVxufVxuXG5mdW5jdGlvbiBnZXRUb3RhbFdpZHRoT2ZFbmNvZGluZ3MoZW5jb2RpbmdzKSB7XG5cdHZhciB0b3RhbFdpZHRoID0gMDtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbmNvZGluZ3MubGVuZ3RoOyBpKyspIHtcblx0XHR0b3RhbFdpZHRoICs9IGVuY29kaW5nc1tpXS53aWR0aDtcblx0fVxuXHRyZXR1cm4gdG90YWxXaWR0aDtcbn1cblxuZnVuY3Rpb24gZ2V0TWF4aW11bUhlaWdodE9mRW5jb2RpbmdzKGVuY29kaW5ncykge1xuXHR2YXIgbWF4SGVpZ2h0ID0gMDtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbmNvZGluZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAoZW5jb2RpbmdzW2ldLmhlaWdodCA+IG1heEhlaWdodCkge1xuXHRcdFx0bWF4SGVpZ2h0ID0gZW5jb2RpbmdzW2ldLmhlaWdodDtcblx0XHR9XG5cdH1cblx0cmV0dXJuIG1heEhlaWdodDtcbn1cblxuZnVuY3Rpb24gbWVzc3VyZVRleHQoc3RyaW5nLCBvcHRpb25zLCBjb250ZXh0KSB7XG5cdHZhciBjdHg7XG5cblx0aWYgKGNvbnRleHQpIHtcblx0XHRjdHggPSBjb250ZXh0O1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdGN0eCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIElmIHRoZSB0ZXh0IGNhbm5vdCBiZSBtZXNzdXJlZCB3ZSB3aWxsIHJldHVybiAwLlxuXHRcdC8vIFRoaXMgd2lsbCBtYWtlIHNvbWUgYmFyY29kZSB3aXRoIGJpZyB0ZXh0IHJlbmRlciBpbmNvcnJlY3RseVxuXHRcdHJldHVybiAwO1xuXHR9XG5cdGN0eC5mb250ID0gb3B0aW9ucy5mb250T3B0aW9ucyArIFwiIFwiICsgb3B0aW9ucy5mb250U2l6ZSArIFwicHggXCIgKyBvcHRpb25zLmZvbnQ7XG5cblx0Ly8gQ2FsY3VsYXRlIHRoZSB3aWR0aCBvZiB0aGUgZW5jb2Rpbmdcblx0dmFyIG1lYXN1cmVUZXh0UmVzdWx0ID0gY3R4Lm1lYXN1cmVUZXh0KHN0cmluZyk7XG5cdGlmICghbWVhc3VyZVRleHRSZXN1bHQpIHtcblx0XHQvLyBTb21lIGltcGxlbWVudGF0aW9ucyBkb24ndCBpbXBsZW1lbnQgbWVhc3VyZVRleHQgYW5kIHJldHVybiB1bmRlZmluZWQuXG5cdFx0Ly8gSWYgdGhlIHRleHQgY2Fubm90IGJlIG1lYXN1cmVkIHdlIHdpbGwgcmV0dXJuIDAuXG5cdFx0Ly8gVGhpcyB3aWxsIG1ha2Ugc29tZSBiYXJjb2RlIHdpdGggYmlnIHRleHQgcmVuZGVyIGluY29ycmVjdGx5XG5cdFx0cmV0dXJuIDA7XG5cdH1cblx0dmFyIHNpemUgPSBtZWFzdXJlVGV4dFJlc3VsdC53aWR0aDtcblx0cmV0dXJuIHNpemU7XG59XG5cbmV4cG9ydHMuZ2V0TWF4aW11bUhlaWdodE9mRW5jb2RpbmdzID0gZ2V0TWF4aW11bUhlaWdodE9mRW5jb2RpbmdzO1xuZXhwb3J0cy5nZXRFbmNvZGluZ0hlaWdodCA9IGdldEVuY29kaW5nSGVpZ2h0O1xuZXhwb3J0cy5nZXRCYXJjb2RlUGFkZGluZyA9IGdldEJhcmNvZGVQYWRkaW5nO1xuZXhwb3J0cy5jYWxjdWxhdGVFbmNvZGluZ0F0dHJpYnV0ZXMgPSBjYWxjdWxhdGVFbmNvZGluZ0F0dHJpYnV0ZXM7XG5leHBvcnRzLmdldFRvdGFsV2lkdGhPZkVuY29kaW5ncyA9IGdldFRvdGFsV2lkdGhPZkVuY29kaW5nczsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9tZXJnZSA9IHJlcXVpcmUoXCIuLi9oZWxwL21lcmdlLmpzXCIpO1xuXG52YXIgX21lcmdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21lcmdlKTtcblxudmFyIF9zaGFyZWQgPSByZXF1aXJlKFwiLi9zaGFyZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBzdmducyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcblxudmFyIFNWR1JlbmRlcmVyID0gZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiBTVkdSZW5kZXJlcihzdmcsIGVuY29kaW5ncywgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTVkdSZW5kZXJlcik7XG5cblx0XHR0aGlzLnN2ZyA9IHN2Zztcblx0XHR0aGlzLmVuY29kaW5ncyA9IGVuY29kaW5ncztcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdHRoaXMuZG9jdW1lbnQgPSBvcHRpb25zLnhtbERvY3VtZW50IHx8IGRvY3VtZW50O1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKFNWR1JlbmRlcmVyLCBbe1xuXHRcdGtleTogXCJyZW5kZXJcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0dmFyIGN1cnJlbnRYID0gdGhpcy5vcHRpb25zLm1hcmdpbkxlZnQ7XG5cblx0XHRcdHRoaXMucHJlcGFyZVNWRygpO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmVuY29kaW5ncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgZW5jb2RpbmcgPSB0aGlzLmVuY29kaW5nc1tpXTtcblx0XHRcdFx0dmFyIGVuY29kaW5nT3B0aW9ucyA9ICgwLCBfbWVyZ2UyLmRlZmF1bHQpKHRoaXMub3B0aW9ucywgZW5jb2Rpbmcub3B0aW9ucyk7XG5cblx0XHRcdFx0dmFyIGdyb3VwID0gdGhpcy5jcmVhdGVHcm91cChjdXJyZW50WCwgZW5jb2RpbmdPcHRpb25zLm1hcmdpblRvcCwgdGhpcy5zdmcpO1xuXG5cdFx0XHRcdHRoaXMuc2V0R3JvdXBPcHRpb25zKGdyb3VwLCBlbmNvZGluZ09wdGlvbnMpO1xuXG5cdFx0XHRcdHRoaXMuZHJhd1N2Z0JhcmNvZGUoZ3JvdXAsIGVuY29kaW5nT3B0aW9ucywgZW5jb2RpbmcpO1xuXHRcdFx0XHR0aGlzLmRyYXdTVkdUZXh0KGdyb3VwLCBlbmNvZGluZ09wdGlvbnMsIGVuY29kaW5nKTtcblxuXHRcdFx0XHRjdXJyZW50WCArPSBlbmNvZGluZy53aWR0aDtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwicHJlcGFyZVNWR1wiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBwcmVwYXJlU1ZHKCkge1xuXHRcdFx0Ly8gQ2xlYXIgdGhlIFNWR1xuXHRcdFx0d2hpbGUgKHRoaXMuc3ZnLmZpcnN0Q2hpbGQpIHtcblx0XHRcdFx0dGhpcy5zdmcucmVtb3ZlQ2hpbGQodGhpcy5zdmcuZmlyc3RDaGlsZCk7XG5cdFx0XHR9XG5cblx0XHRcdCgwLCBfc2hhcmVkLmNhbGN1bGF0ZUVuY29kaW5nQXR0cmlidXRlcykodGhpcy5lbmNvZGluZ3MsIHRoaXMub3B0aW9ucyk7XG5cdFx0XHR2YXIgdG90YWxXaWR0aCA9ICgwLCBfc2hhcmVkLmdldFRvdGFsV2lkdGhPZkVuY29kaW5ncykodGhpcy5lbmNvZGluZ3MpO1xuXHRcdFx0dmFyIG1heEhlaWdodCA9ICgwLCBfc2hhcmVkLmdldE1heGltdW1IZWlnaHRPZkVuY29kaW5ncykodGhpcy5lbmNvZGluZ3MpO1xuXG5cdFx0XHR2YXIgd2lkdGggPSB0b3RhbFdpZHRoICsgdGhpcy5vcHRpb25zLm1hcmdpbkxlZnQgKyB0aGlzLm9wdGlvbnMubWFyZ2luUmlnaHQ7XG5cdFx0XHR0aGlzLnNldFN2Z0F0dHJpYnV0ZXMod2lkdGgsIG1heEhlaWdodCk7XG5cblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuYmFja2dyb3VuZCkge1xuXHRcdFx0XHR0aGlzLmRyYXdSZWN0KDAsIDAsIHdpZHRoLCBtYXhIZWlnaHQsIHRoaXMuc3ZnKS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImZpbGw6XCIgKyB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZCArIFwiO1wiKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwiZHJhd1N2Z0JhcmNvZGVcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZHJhd1N2Z0JhcmNvZGUocGFyZW50LCBvcHRpb25zLCBlbmNvZGluZykge1xuXHRcdFx0dmFyIGJpbmFyeSA9IGVuY29kaW5nLmRhdGE7XG5cblx0XHRcdC8vIENyZWF0ZXMgdGhlIGJhcmNvZGUgb3V0IG9mIHRoZSBlbmNvZGVkIGJpbmFyeVxuXHRcdFx0dmFyIHlGcm9tO1xuXHRcdFx0aWYgKG9wdGlvbnMudGV4dFBvc2l0aW9uID09IFwidG9wXCIpIHtcblx0XHRcdFx0eUZyb20gPSBvcHRpb25zLmZvbnRTaXplICsgb3B0aW9ucy50ZXh0TWFyZ2luO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0eUZyb20gPSAwO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgYmFyV2lkdGggPSAwO1xuXHRcdFx0dmFyIHggPSAwO1xuXHRcdFx0Zm9yICh2YXIgYiA9IDA7IGIgPCBiaW5hcnkubGVuZ3RoOyBiKyspIHtcblx0XHRcdFx0eCA9IGIgKiBvcHRpb25zLndpZHRoICsgZW5jb2RpbmcuYmFyY29kZVBhZGRpbmc7XG5cblx0XHRcdFx0aWYgKGJpbmFyeVtiXSA9PT0gXCIxXCIpIHtcblx0XHRcdFx0XHRiYXJXaWR0aCsrO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGJhcldpZHRoID4gMCkge1xuXHRcdFx0XHRcdHRoaXMuZHJhd1JlY3QoeCAtIG9wdGlvbnMud2lkdGggKiBiYXJXaWR0aCwgeUZyb20sIG9wdGlvbnMud2lkdGggKiBiYXJXaWR0aCwgb3B0aW9ucy5oZWlnaHQsIHBhcmVudCk7XG5cdFx0XHRcdFx0YmFyV2lkdGggPSAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIExhc3QgZHJhdyBpcyBuZWVkZWQgc2luY2UgdGhlIGJhcmNvZGUgZW5kcyB3aXRoIDFcblx0XHRcdGlmIChiYXJXaWR0aCA+IDApIHtcblx0XHRcdFx0dGhpcy5kcmF3UmVjdCh4IC0gb3B0aW9ucy53aWR0aCAqIChiYXJXaWR0aCAtIDEpLCB5RnJvbSwgb3B0aW9ucy53aWR0aCAqIGJhcldpZHRoLCBvcHRpb25zLmhlaWdodCwgcGFyZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwiZHJhd1NWR1RleHRcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZHJhd1NWR1RleHQocGFyZW50LCBvcHRpb25zLCBlbmNvZGluZykge1xuXHRcdFx0dmFyIHRleHRFbGVtID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnbnMsICd0ZXh0Jyk7XG5cblx0XHRcdC8vIERyYXcgdGhlIHRleHQgaWYgZGlzcGxheVZhbHVlIGlzIHNldFxuXHRcdFx0aWYgKG9wdGlvbnMuZGlzcGxheVZhbHVlKSB7XG5cdFx0XHRcdHZhciB4LCB5O1xuXG5cdFx0XHRcdHRleHRFbGVtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZm9udDpcIiArIG9wdGlvbnMuZm9udE9wdGlvbnMgKyBcIiBcIiArIG9wdGlvbnMuZm9udFNpemUgKyBcInB4IFwiICsgb3B0aW9ucy5mb250KTtcblxuXHRcdFx0XHRpZiAob3B0aW9ucy50ZXh0UG9zaXRpb24gPT0gXCJ0b3BcIikge1xuXHRcdFx0XHRcdHkgPSBvcHRpb25zLmZvbnRTaXplIC0gb3B0aW9ucy50ZXh0TWFyZ2luO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHkgPSBvcHRpb25zLmhlaWdodCArIG9wdGlvbnMudGV4dE1hcmdpbiArIG9wdGlvbnMuZm9udFNpemU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBEcmF3IHRoZSB0ZXh0IGluIHRoZSBjb3JyZWN0IFggZGVwZW5kaW5nIG9uIHRoZSB0ZXh0QWxpZ24gb3B0aW9uXG5cdFx0XHRcdGlmIChvcHRpb25zLnRleHRBbGlnbiA9PSBcImxlZnRcIiB8fCBlbmNvZGluZy5iYXJjb2RlUGFkZGluZyA+IDApIHtcblx0XHRcdFx0XHR4ID0gMDtcblx0XHRcdFx0XHR0ZXh0RWxlbS5zZXRBdHRyaWJ1dGUoXCJ0ZXh0LWFuY2hvclwiLCBcInN0YXJ0XCIpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG9wdGlvbnMudGV4dEFsaWduID09IFwicmlnaHRcIikge1xuXHRcdFx0XHRcdHggPSBlbmNvZGluZy53aWR0aCAtIDE7XG5cdFx0XHRcdFx0dGV4dEVsZW0uc2V0QXR0cmlidXRlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gSW4gYWxsIG90aGVyIGNhc2VzLCBjZW50ZXIgdGhlIHRleHRcblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHR4ID0gZW5jb2Rpbmcud2lkdGggLyAyO1xuXHRcdFx0XHRcdFx0dGV4dEVsZW0uc2V0QXR0cmlidXRlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdHRleHRFbGVtLnNldEF0dHJpYnV0ZShcInhcIiwgeCk7XG5cdFx0XHRcdHRleHRFbGVtLnNldEF0dHJpYnV0ZShcInlcIiwgeSk7XG5cblx0XHRcdFx0dGV4dEVsZW0uYXBwZW5kQ2hpbGQodGhpcy5kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlbmNvZGluZy50ZXh0KSk7XG5cblx0XHRcdFx0cGFyZW50LmFwcGVuZENoaWxkKHRleHRFbGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwic2V0U3ZnQXR0cmlidXRlc1wiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBzZXRTdmdBdHRyaWJ1dGVzKHdpZHRoLCBoZWlnaHQpIHtcblx0XHRcdHZhciBzdmcgPSB0aGlzLnN2Zztcblx0XHRcdHN2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCB3aWR0aCArIFwicHhcIik7XG5cdFx0XHRzdmcuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGhlaWdodCArIFwicHhcIik7XG5cdFx0XHRzdmcuc2V0QXR0cmlidXRlKFwieFwiLCBcIjBweFwiKTtcblx0XHRcdHN2Zy5zZXRBdHRyaWJ1dGUoXCJ5XCIsIFwiMHB4XCIpO1xuXHRcdFx0c3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgXCIgKyB3aWR0aCArIFwiIFwiICsgaGVpZ2h0KTtcblxuXHRcdFx0c3ZnLnNldEF0dHJpYnV0ZShcInhtbG5zXCIsIHN2Z25zKTtcblx0XHRcdHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2ZXJzaW9uXCIsIFwiMS4xXCIpO1xuXG5cdFx0XHRzdmcuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApXCIpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJjcmVhdGVHcm91cFwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVHcm91cCh4LCB5LCBwYXJlbnQpIHtcblx0XHRcdHZhciBncm91cCA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z25zLCAnZycpO1xuXHRcdFx0Z3JvdXAuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgeCArIFwiLCBcIiArIHkgKyBcIilcIik7XG5cblx0XHRcdHBhcmVudC5hcHBlbmRDaGlsZChncm91cCk7XG5cblx0XHRcdHJldHVybiBncm91cDtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwic2V0R3JvdXBPcHRpb25zXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHNldEdyb3VwT3B0aW9ucyhncm91cCwgb3B0aW9ucykge1xuXHRcdFx0Z3JvdXAuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJmaWxsOlwiICsgb3B0aW9ucy5saW5lQ29sb3IgKyBcIjtcIik7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcImRyYXdSZWN0XCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGRyYXdSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQsIHBhcmVudCkge1xuXHRcdFx0dmFyIHJlY3QgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmducywgJ3JlY3QnKTtcblxuXHRcdFx0cmVjdC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIHgpO1xuXHRcdFx0cmVjdC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIHkpO1xuXHRcdFx0cmVjdC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCB3aWR0aCk7XG5cdFx0XHRyZWN0LnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBoZWlnaHQpO1xuXG5cdFx0XHRwYXJlbnQuYXBwZW5kQ2hpbGQocmVjdCk7XG5cblx0XHRcdHJldHVybiByZWN0O1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBTVkdSZW5kZXJlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU1ZHUmVuZGVyZXI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxudmFyIGdldFJhbmRvbVZhbHVlcztcbnZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLiBBbHNvLFxuICAgIC8vIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byAobXNDcnlwdG8pIG9uIElFMTEuXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSB8fCB0eXBlb2YgbXNDcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxudmFyIGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSkpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyKSB7XG4gIHZhciBvZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICB2YXIgdXVpZCA9IChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCBzdHJpbmdpZnkgZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gc3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Db250ZW50L0NvbnRlbnRcIjtcbmltcG9ydCB7IGFwcGx5SW5pdGlhbFN0YXRlIH0gZnJvbSBcIi4vcGFnZS1sb2dpYy91aS91aS1pbml0aWFsLXN0YXRlXCI7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoQ29udGVudCgpKTtcblxuYXBwbHlJbml0aWFsU3RhdGUoKTtcblxuLy8gZGVidWdnaW5nXG5jb25zdCBkZWJ1Z2dpbmcgPSB0cnVlO1xuaWYgKGRlYnVnZ2luZykge1xuICAvL1xufVxuIl0sIm5hbWVzIjpbIkRpdiIsIkltZyIsIkJhcmNvZGUiLCJwYXJlbnRFbGVtZW50IiwiaW5uZXJUZXh0IiwiY2xhc3NOYW1lIiwiaWQiLCJGb3JtIiwiR2VuZXJhdGVCdXR0b24iLCJCYXJjb2RlVGV4dElucHV0IiwiZ2V0SW5wdXRWYWx1ZSIsImdldEJhcmNvZGVUZXh0SW5wdXQiLCJnZW5lcmF0ZUJhcmNvZGUiLCJnZXRCYXJjb2RlV2lkdGhJbnB1dCIsIkJhcmNvZGVXaWR0aElucHV0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwid2lkdGgiLCJCYXJjb2RlRm9ybSIsIm9uc3VibWl0IiwidmFsdWUiLCJJbnB1dCIsImJhcmNvZGVUZXh0SW5wdXRJZCIsIkJhcmNvZGVHZW5lcmF0b3IiLCJ2NCIsInV1aWR2NCIsImhhbmRsZUNoYW5nZSIsInByb3BzIiwib25pbnB1dCIsIkxhYmVsIiwiU3BhbiIsInVwZGF0ZUJhcmNvZGVXaWR0aERpc3BsYXkiLCJiYXJjb2RlV2lkdGhJbnB1dElkIiwiYmFyY29kZVdpZHRoTGFiZWxTcGFuSWQiLCJoYW5kbGVJbnB1dCIsImlubmVySFRNTCIsIm91dGVySFRNTCIsInR5cGUiLCJtaW4iLCJtYXgiLCJzdGVwIiwiQnV0dG9uIiwiZ2V0QmFyY29kZVdpZHRoU3BhbiIsImJhcmNvZGVXaWR0aERpc3BsYXkiLCJFbGVtZW50IiwiSGVhZGVyIiwiRHluYW1pY0Zvb3RlciIsIk1haW5TZWN0aW9uIiwiQ29udGVudCIsImNvbnRlbnQiLCJBIiwiSWNvbiIsImdpdGh1YkluZm8iLCJkeW5hbWljWWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIkNvcHlyaWdodENvbnRhaW5lciIsImhyZWYiLCJyZXBvTmFtZSIsIkZvb3RlciIsIkF0dHJpYnV0aW9uc0NvbnRhaW5lciIsIlRPUENvbnRhaW5lciIsIkV4cGFuZGFibGVQYW5lbCIsIk5vbkV4cGFuZGFibGVQYW5lbCIsIkljb25zRXhwbGFuYXRpb24iLCJjb250YWluZXIiLCJ0aXRsZSIsImNoaWxkcmVuIiwicGFyZW50Q29udGFpbmVyIiwiaDEiLCJvdGhlckNsYXNzZXMiLCJoZWFkZXIiLCJnZW5lcmF0ZVRlc3RDb250ZW50QXJyIiwiTWFpbiIsIm1haW4iLCJFeHBhbmRhYmxlUGFuZWxUaXRsZSIsIkV4cGFuZGFibGVQYW5lbENvbnRlbnQiLCJjb21wb25lbnRJZCIsInBhbmVsIiwidG9nZ2xlRXhwYW5zaW9uIiwiZXhwYW5zaW9uQ29udGVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b2dnbGVFeHBhbnNpb25CdXR0b24iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJvbmNsaWNrIiwiaWNvbkNsYXNzIiwiaWNvbiIsImdldEFsbENhcm91c2VsU2xpZGVzIiwicXVlcnlTZWxlY3RvciIsImNoaWxkTm9kZXMiLCJnZXRBbGxDYXJvdXNlbFNsaWRlSWRzIiwibWFwIiwiZWxlbSIsImdldEFsbENhcm91c2VsTmF2QnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnZXRDdXJyZW50U2xpZGVJbmRleCIsImFsbFNsaWRlSWRzIiwiY3VycmVudFNsaWRlSWQiLCJjdXJyZW50U2xpZGVJbmRleCIsImluZGV4T2YiLCJnZXRQcmV2aW91c1NsaWRlSW5kZXgiLCJwcmV2aW91c1NsaWRlSW5kZXgiLCJjb3JyZWN0ZWRJbmRleCIsImxlbmd0aCIsImdldE5leHRTbGlkZUluZGV4IiwibmV4dFNsaWRlSW5kZXgiLCJnb3RvU3BlY2lmaWNTbGlkZSIsImFsbE5hdkJ1dHRvbnMiLCJzZWxlY3RlZE5hdkJ1dHRvbiIsInNlbGVjdGVkU2xpZGUiLCJhbGxTbGlkZXMiLCJmb3JFYWNoIiwic2xpZGUiLCJyZW1vdmUiLCJhZGQiLCJjbGlja0Nhcm91c2VsTmF2IiwiY2xpY2tDYXJvdXNlbFJpZ2h0IiwicmVwbGFjZSIsImNsaWNrQ2Fyb3VzZWxMZWZ0IiwiY2xpY2tDYXJvdXNlbFBsYXkiLCJoYW5kbGVBdXRvQWR2YW5jZSIsInBsYXlCdXR0b24iLCJwYXVzZUJ1dHRvbiIsImNsaWNrQ2Fyb3VzZWxQYXVzZSIsImludGVydmFsIiwibW9kZSIsInBsYXlpbmciLCJ3aW5kb3ciLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJ0eXBlU3RyIiwicHJvcHNPYmoiLCJjaGlsZEFyciIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsInNldEF0dHJpYnV0ZVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwicHJvcGVydHkiLCJwdXNoIiwibmFtZSIsIk9iamVjdCIsImFzc2lnbiIsImNyZWF0ZUVsZW1lbnQiLCJBcnJheSIsImlzQXJyYXkiLCJjaGlsZCIsImFwcGVuZENoaWxkIiwic2V0QXR0cmlidXRlIiwiQXJ0aWNsZSIsIkIiLCJCb2R5IiwiQnIiLCJEYXRhbGlzdCIsIkZpZWxkc2V0IiwiSDEiLCJIMiIsIkgzIiwiSHIiLCJJIiwiTGVnZW5kIiwiTGkiLCJPbCIsIk9wdGlvbiIsIlAiLCJTZWxlY3QiLCJTdHJvbmciLCJUZXh0YXJlYSIsIlVsIiwiYXBwbHlXaW5kb3dMaXN0ZW5lcnMiLCJhcHBseUluaXRpYWxTdGF0ZSIsIkpzQmFyY29kZSIsImRlYm91bmNlIiwiYnJlYWtQb2ludHMiLCJ4cyIsInNtIiwibWQiLCJsZyIsInhsIiwib25yZXNpemUiLCJvbmxvYWQiLCJ0cnVuY2F0ZUFuZEFkZEVsbGlwc2UiLCJzdHJpbmciLCJudW1DaGFyc1RvS2VlcCIsInNsaWNlIiwidHJpbUVuZCIsImZuIiwidGltZW91dCIsImNvbnRleHQiLCJhcmdzIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhcHBseSIsImNhcGl0YWxpemUiLCJ0b1VwcGVyQ2FzZSIsInRvTG93ZXJDYXNlIiwibnVtQ2hpbGRyZW4iLCJmaWxsIiwiZ2V0UmFuZG9tSW50IiwiTWF0aCIsImNlaWwiLCJmbG9vciIsInJhbmRvbSIsImlucHV0RWxlbWVudCIsImJvZHkiLCJkZWJ1Z2dpbmciXSwic291cmNlUm9vdCI6IiJ9