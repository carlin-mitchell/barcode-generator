/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/BarcodeGenerator/Barcode.js":
/*!****************************************************!*\
  !*** ./src/components/BarcodeGenerator/Barcode.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ "./src/components/BarcodeGenerator/logic.js");
// COMPONENT IMPORTS



// LOGIC IMPORTS
//

// COMPONENT METHODS
function handleClick() {
  (0,_logic__WEBPACK_IMPORTED_MODULE_1__.copyBarcode)();
}
const Barcode = () => {
  //

  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    innerText: ``,
    className: `barcode-container`
  },
  // add child elements to the array below
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "copy-message-container",
    onclick() {
      handleClick();
    }
  }, [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    innerText: "copy to clipboard"
  })]), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Img)({
    id: "barcode",
    className: "barcode-image"
  })]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Barcode);

/***/ }),

/***/ "./src/components/BarcodeGenerator/BarcodeColorInputs.js":
/*!***************************************************************!*\
  !*** ./src/components/BarcodeGenerator/BarcodeColorInputs.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarcodePrimaryColorInput: () => (/* binding */ BarcodePrimaryColorInput),
/* harmony export */   BarcodeSecondaryColorInput: () => (/* binding */ BarcodeSecondaryColorInput),
/* harmony export */   barcodePrimaryColorInputId: () => (/* binding */ barcodePrimaryColorInputId),
/* harmony export */   barcodeSecondaryColorInputId: () => (/* binding */ barcodeSecondaryColorInputId)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic */ "./src/components/BarcodeGenerator/logic.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/components/BarcodeGenerator/config.js");
// COMPONENT IMPORTS





// LOGIC IMPORTS
//

// COMPONENT METHODS

function handlePrimaryColorInput() {
  const preset = (0,_logic__WEBPACK_IMPORTED_MODULE_2__.getBarcodePrimaryColorPreset)();
  preset.selected = true;
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.debounce)((0,_logic__WEBPACK_IMPORTED_MODULE_2__.generateBarcode)());
}
function handleSecondaryColorInput() {
  const preset = (0,_logic__WEBPACK_IMPORTED_MODULE_2__.getBarcodeSecondaryColorPreset)();
  preset.selected = true;
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.debounce)((0,_logic__WEBPACK_IMPORTED_MODULE_2__.generateBarcode)());
}
function handlePrimaryColorPreset(e) {
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setInputValue)((0,_logic__WEBPACK_IMPORTED_MODULE_2__.getBarcodePrimaryColorInput)(), e.target.value);
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.debounce)((0,_logic__WEBPACK_IMPORTED_MODULE_2__.generateBarcode)());
}
function handleSecondaryColorPreset(e) {
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setInputValue)((0,_logic__WEBPACK_IMPORTED_MODULE_2__.getBarcodeSecondaryColorInput)(), e.target.value);
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.debounce)((0,_logic__WEBPACK_IMPORTED_MODULE_2__.generateBarcode)());
}
const barcodePrimaryColorInputId = (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])();
const barcodeSecondaryColorInputId = uuid__WEBPACK_IMPORTED_MODULE_4__["default"];
const presetOptions = [{
  name: "UMN Gold",
  value: "#FFCC33"
}, {
  name: "UMN Maroon",
  value: "#7A0019"
}];
const BarcodePrimaryColorInput = () => {
  //

  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_1__.Div)({
    innerText: ``,
    className: `vertical-stack`
  },
  // add child elements to the array below
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_1__.Label)({
    innerHTML: `Primary color <em>(must be lighter)</em>: `,
    for: barcodePrimaryColorInputId
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_1__.Input)({
    type: "color",
    id: barcodePrimaryColorInputId,
    value: _config__WEBPACK_IMPORTED_MODULE_3__.barcodeConfig.primaryColor.starting,
    oninput() {
      handlePrimaryColorInput();
    }
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_1__.Div)({}, [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_1__.Select)({
    oninput(e) {
      handlePrimaryColorPreset(e);
    }
  }, [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_1__.Option)({
    innerText: "Default",
    value: _config__WEBPACK_IMPORTED_MODULE_3__.barcodeConfig.primaryColor.starting
  }), ...presetOptions.map(o => (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_1__.Option)({
    innerText: o.name,
    value: o.value
  })), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_1__.Option)({
    innerText: "Custom",
    value: undefined,
    id: `custom-preset-${barcodePrimaryColorInputId}`
  })])])]);
  return parentElement;
};
const BarcodeSecondaryColorInput = () => {
  //

  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_1__.Div)({
    innerText: ``,
    className: `vertical-stack`
  },
  // add child elements to the array below
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_1__.Label)({
    innerHTML: `Secondary color <em>(must be darker)</em>: `,
    for: barcodeSecondaryColorInputId
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_1__.Input)({
    type: "color",
    id: barcodeSecondaryColorInputId,
    value: _config__WEBPACK_IMPORTED_MODULE_3__.barcodeConfig.secondaryColor.starting,
    oninput() {
      handleSecondaryColorInput();
    }
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_1__.Div)({}, [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_1__.Select)({
    oninput(e) {
      handleSecondaryColorPreset(e);
    }
  }, [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_1__.Option)({
    innerText: "Default",
    value: _config__WEBPACK_IMPORTED_MODULE_3__.barcodeConfig.secondaryColor.starting
  }), ...presetOptions.map(o => (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_1__.Option)({
    innerText: o.name,
    value: o.value
  })), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_1__.Option)({
    innerText: "Custom",
    value: undefined,
    id: `custom-preset-${barcodeSecondaryColorInputId}`
  })])])]);
  return parentElement;
};

/***/ }),

/***/ "./src/components/BarcodeGenerator/BarcodeEnableClickToCopy.js":
/*!*********************************************************************!*\
  !*** ./src/components/BarcodeGenerator/BarcodeEnableClickToCopy.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clickToCopyId: () => (/* binding */ clickToCopyId),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
// COMPONENT IMPORTS


// LOGIC IMPORTS
//

// COMPONENT METHODS
function handleInput(e) {
  const isChecked = e.target.checked;
  console.log(isChecked);
  const copyMessage = document.querySelector(".copy-message-container");
  console.log(copyMessage);
  isChecked ? copyMessage.classList.remove("display-none") : copyMessage.classList.add("display-none");
}
const clickToCopyId = (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])();
const BarcodeEnableClickToCopy = () => {
  //

  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    innerText: ``,
    className: `barcode-enable-click-to-copy`
  },
  // add child elements to the array below
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Label)({
    for: clickToCopyId,
    innerText: `Enable click to copy`
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Input)({
    id: clickToCopyId,
    type: "checkbox",
    checked: true,
    oninput(e) {
      handleInput(e);
    }
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "small-font",
    innerText: "(Feature only works in Google Chrome)"
  })]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BarcodeEnableClickToCopy);

/***/ }),

/***/ "./src/components/BarcodeGenerator/BarcodeFontDisplayInput.js":
/*!********************************************************************!*\
  !*** ./src/components/BarcodeGenerator/BarcodeFontDisplayInput.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   barcodeFontDisplayInputId: () => (/* binding */ barcodeFontDisplayInputId),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic */ "./src/components/BarcodeGenerator/logic.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/components/BarcodeGenerator/config.js");
// COMPONENT IMPORTS






// LOGIC IMPORTS
//

// COMPONENT METHODS

const barcodeFontDisplayInputId = (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])();
function handleInput() {
  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.debounce)((0,_logic__WEBPACK_IMPORTED_MODULE_2__.generateBarcode)());
}
const BarcodeFontDisplayInput = () => {
  //

  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({}, [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Label)({
    for: barcodeFontDisplayInputId,
    innerHTML: `Show text: `
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Input)({
    id: barcodeFontDisplayInputId,
    type: "checkbox",
    innerText: ``,
    className: ``,
    checked: _config__WEBPACK_IMPORTED_MODULE_3__.barcodeConfig.fontDisplay.starting,
    oninput() {
      handleInput();
    }
  },
  // add child elements to the array below
  [])]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BarcodeFontDisplayInput);

/***/ }),

/***/ "./src/components/BarcodeGenerator/BarcodeFontSizeInput.js":
/*!*****************************************************************!*\
  !*** ./src/components/BarcodeGenerator/BarcodeFontSizeInput.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   barcodeFontSizeInputId: () => (/* binding */ barcodeFontSizeInputId),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic */ "./src/components/BarcodeGenerator/logic.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/components/BarcodeGenerator/config.js");
// COMPONENT IMPORTS






// LOGIC IMPORTS
//

// COMPONENT METHODS

const barcodeFontSizeInputId = (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])();
function handleInput() {
  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.debounce)((0,_logic__WEBPACK_IMPORTED_MODULE_2__.generateBarcode)());
}
const BarcodeFontSizeInput = () => {
  //

  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: `vertical-stack`
  }, [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Label)({
    for: barcodeFontSizeInputId,
    innerHTML: `Font size: `
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Input)({
    id: barcodeFontSizeInputId,
    type: "number",
    innerText: ``,
    className: ``,
    min: _config__WEBPACK_IMPORTED_MODULE_3__.barcodeConfig.fontSize.min,
    max: _config__WEBPACK_IMPORTED_MODULE_3__.barcodeConfig.fontSize.max,
    step: _config__WEBPACK_IMPORTED_MODULE_3__.barcodeConfig.fontSize.step,
    value: _config__WEBPACK_IMPORTED_MODULE_3__.barcodeConfig.fontSize.starting,
    oninput() {
      handleInput();
    }
  },
  // add child elements to the array below
  [])]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BarcodeFontSizeInput);

/***/ }),

/***/ "./src/components/BarcodeGenerator/BarcodeForm.js":
/*!********************************************************!*\
  !*** ./src/components/BarcodeGenerator/BarcodeForm.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _BarcodeTextInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BarcodeTextInput */ "./src/components/BarcodeGenerator/BarcodeTextInput.js");
/* harmony import */ var _BarcodeWIdthInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BarcodeWIdthInput */ "./src/components/BarcodeGenerator/BarcodeWIdthInput.js");
/* harmony import */ var _BarcodeHeightInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BarcodeHeightInput */ "./src/components/BarcodeGenerator/BarcodeHeightInput.js");
/* harmony import */ var _BarcodeFontSizeInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BarcodeFontSizeInput */ "./src/components/BarcodeGenerator/BarcodeFontSizeInput.js");
/* harmony import */ var _BarcodeFontDisplayInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BarcodeFontDisplayInput */ "./src/components/BarcodeGenerator/BarcodeFontDisplayInput.js");
/* harmony import */ var _BarcodeColorInputs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BarcodeColorInputs */ "./src/components/BarcodeGenerator/BarcodeColorInputs.js");
// COMPONENT IMPORTS








// LOGIC IMPORTS
//

// COMPONENT METHODS

const BarcodeForm = () => {
  //

  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Form)({
    innerText: ``,
    className: `barcode-form `
  },
  // add child elements to the array below
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "form-row-2-auto"
  }, [(0,_BarcodeTextInput__WEBPACK_IMPORTED_MODULE_1__["default"])(), (0,_BarcodeFontDisplayInput__WEBPACK_IMPORTED_MODULE_5__["default"])()]), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "form-row-3"
  }, [(0,_BarcodeWIdthInput__WEBPACK_IMPORTED_MODULE_2__["default"])(), (0,_BarcodeHeightInput__WEBPACK_IMPORTED_MODULE_3__["default"])(), (0,_BarcodeFontSizeInput__WEBPACK_IMPORTED_MODULE_4__["default"])()]), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "form-row-2"
  }, [(0,_BarcodeColorInputs__WEBPACK_IMPORTED_MODULE_6__.BarcodePrimaryColorInput)(), (0,_BarcodeColorInputs__WEBPACK_IMPORTED_MODULE_6__.BarcodeSecondaryColorInput)()])]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BarcodeForm);

/***/ }),

/***/ "./src/components/BarcodeGenerator/BarcodeGenerator.js":
/*!*************************************************************!*\
  !*** ./src/components/BarcodeGenerator/BarcodeGenerator.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _Barcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Barcode */ "./src/components/BarcodeGenerator/Barcode.js");
/* harmony import */ var _BarcodeEnableClickToCopy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BarcodeEnableClickToCopy */ "./src/components/BarcodeGenerator/BarcodeEnableClickToCopy.js");
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
    className: `barcode-generator`
  },
  // add child elements to the array below
  [(0,_BarcodeForm__WEBPACK_IMPORTED_MODULE_3__["default"])(), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "barcode-section"
  }, [(0,_Barcode__WEBPACK_IMPORTED_MODULE_1__["default"])(), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({}, [(0,_BarcodeEnableClickToCopy__WEBPACK_IMPORTED_MODULE_2__["default"])()])])]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BarcodeGenerator);

/***/ }),

/***/ "./src/components/BarcodeGenerator/BarcodeHeightInput.js":
/*!***************************************************************!*\
  !*** ./src/components/BarcodeGenerator/BarcodeHeightInput.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   barcodeHeightDisplayId: () => (/* binding */ barcodeHeightDisplayId),
/* harmony export */   barcodeHeightInputId: () => (/* binding */ barcodeHeightInputId),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic */ "./src/components/BarcodeGenerator/logic.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/components/BarcodeGenerator/config.js");
// COMPONENT IMPORTS






// LOGIC IMPORTS
//

// COMPONENT METHODS

const barcodeHeightInputId = (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])();
const barcodeHeightDisplayId = `barcode-height-display-${barcodeHeightInputId}`;
function handleInput() {
  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.debounce)((0,_logic__WEBPACK_IMPORTED_MODULE_2__.generateBarcode)());
}
const BarcodeHeightInput = () => {
  //

  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: `vertical-stack`
  }, [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Label)({
    for: barcodeHeightInputId,
    innerHTML: `Height: `
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Input)({
    id: barcodeHeightInputId,
    type: "number",
    innerText: ``,
    className: ``,
    min: _config__WEBPACK_IMPORTED_MODULE_3__.barcodeConfig.height.min,
    max: _config__WEBPACK_IMPORTED_MODULE_3__.barcodeConfig.height.max,
    step: _config__WEBPACK_IMPORTED_MODULE_3__.barcodeConfig.height.step,
    value: _config__WEBPACK_IMPORTED_MODULE_3__.barcodeConfig.height.starting,
    oninput() {
      handleInput();
    }
  },
  // add child elements to the array below
  [])]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BarcodeHeightInput);

/***/ }),

/***/ "./src/components/BarcodeGenerator/BarcodeTextInput.js":
/*!*************************************************************!*\
  !*** ./src/components/BarcodeGenerator/BarcodeTextInput.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   barcodeTextInputId: () => (/* binding */ barcodeTextInputId),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ "./src/components/BarcodeGenerator/logic.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/components/BarcodeGenerator/config.js");
// COMPONENT IMPORTS





// LOGIC IMPORTS
//

// COMPONENT METHODS
function handleChange() {
  (0,_logic__WEBPACK_IMPORTED_MODULE_1__.generateBarcode)();
}
const barcodeTextInputId = (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])();
const BarcodeTextInput = () => {
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    innerText: ``,
    className: ``
  },
  // add child elements to the array below
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Input)({
    id: `${barcodeTextInputId}`,
    value: _config__WEBPACK_IMPORTED_MODULE_2__.barcodeConfig.textInput.starting,
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   barcodeWidthInputId: () => (/* binding */ barcodeWidthInputId),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic */ "./src/components/BarcodeGenerator/logic.js");
// COMPONENT IMPORTS





// LOGIC IMPORTS
//

// COMPONENT METHODS

const barcodeWidthInputId = (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])();
function handleInput() {
  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.debounce)((0,_logic__WEBPACK_IMPORTED_MODULE_2__.generateBarcode)());
}
const options = [{
  name: "Normal",
  value: 1
}, {
  name: "Wide",
  value: 2
}];
const BarcodeWidthInput = () => {
  //

  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: `vertical-stack`
  }, [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Label)({
    for: barcodeWidthInputId,
    innerHTML: `Width: `
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Select)({
    id: barcodeWidthInputId,
    oninput() {
      handleInput();
    }
  }, [...options.map(o => (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Option)({
    innerText: o.name,
    value: o.value
  }))])]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BarcodeWidthInput);

/***/ }),

/***/ "./src/components/BarcodeGenerator/GenerateButton.js":
/*!***********************************************************!*\
  !*** ./src/components/BarcodeGenerator/GenerateButton.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _BarcodeTextInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BarcodeTextInput */ "./src/components/BarcodeGenerator/BarcodeTextInput.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logic */ "./src/components/BarcodeGenerator/logic.js");
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

/***/ "./src/components/BarcodeGenerator/config.js":
/*!***************************************************!*\
  !*** ./src/components/BarcodeGenerator/config.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   barcodeConfig: () => (/* binding */ barcodeConfig)
/* harmony export */ });
const barcodeConfig = {
  width: {
    starting: 1,
    min: 1,
    max: 10,
    step: 0.1
  },
  height: {
    starting: 50,
    min: 10,
    max: 250,
    step: 2
  },
  fontSize: {
    starting: 14,
    min: 5,
    max: 100,
    step: 1
  },
  fontDisplay: {
    starting: true
  },
  margin: {
    starting: {
      margin: 8,
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
  },
  textInput: {
    starting: "This is only a test"
  },
  secondaryColor: {
    starting: "#000000"
  },
  primaryColor: {
    starting: "#ffffff"
  }
};

/***/ }),

/***/ "./src/components/BarcodeGenerator/logic.js":
/*!**************************************************!*\
  !*** ./src/components/BarcodeGenerator/logic.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyBarcode: () => (/* binding */ copyBarcode),
/* harmony export */   generateBarcode: () => (/* binding */ generateBarcode),
/* harmony export */   getBarcodeFontDisplayInput: () => (/* binding */ getBarcodeFontDisplayInput),
/* harmony export */   getBarcodeFontSizeInput: () => (/* binding */ getBarcodeFontSizeInput),
/* harmony export */   getBarcodeHeightInput: () => (/* binding */ getBarcodeHeightInput),
/* harmony export */   getBarcodePrimaryColorInput: () => (/* binding */ getBarcodePrimaryColorInput),
/* harmony export */   getBarcodePrimaryColorPreset: () => (/* binding */ getBarcodePrimaryColorPreset),
/* harmony export */   getBarcodeSecondaryColorInput: () => (/* binding */ getBarcodeSecondaryColorInput),
/* harmony export */   getBarcodeSecondaryColorPreset: () => (/* binding */ getBarcodeSecondaryColorPreset),
/* harmony export */   getBarcodeTextInput: () => (/* binding */ getBarcodeTextInput),
/* harmony export */   getBarcodeWidthInput: () => (/* binding */ getBarcodeWidthInput),
/* harmony export */   getCopyBarcodeMessage: () => (/* binding */ getCopyBarcodeMessage)
/* harmony export */ });
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsbarcode */ "./node_modules/jsbarcode/bin/JsBarcode.js");
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsbarcode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BarcodeTextInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BarcodeTextInput */ "./src/components/BarcodeGenerator/BarcodeTextInput.js");
/* harmony import */ var _BarcodeWIdthInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BarcodeWIdthInput */ "./src/components/BarcodeGenerator/BarcodeWIdthInput.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _BarcodeHeightInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BarcodeHeightInput */ "./src/components/BarcodeGenerator/BarcodeHeightInput.js");
/* harmony import */ var _BarcodeFontSizeInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BarcodeFontSizeInput */ "./src/components/BarcodeGenerator/BarcodeFontSizeInput.js");
/* harmony import */ var _BarcodeFontDisplayInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BarcodeFontDisplayInput */ "./src/components/BarcodeGenerator/BarcodeFontDisplayInput.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config */ "./src/components/BarcodeGenerator/config.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui */ "./src/components/BarcodeGenerator/ui.js");
/* harmony import */ var _BarcodeColorInputs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BarcodeColorInputs */ "./src/components/BarcodeGenerator/BarcodeColorInputs.js");










function generateBarcode(options) {
  options = options ? options : {};
  const content = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getInputValue)(getBarcodeTextInput()) ? (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getInputValue)(getBarcodeTextInput()) : "<NONE>";
  const width = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getInputValue)(getBarcodeWidthInput());
  const height = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getInputValue)(getBarcodeHeightInput());
  const fontSize = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getInputValue)(getBarcodeFontSizeInput());
  const displayValue = getBarcodeFontDisplayInput().checked;
  const {
    bottom,
    margin
  } = _config__WEBPACK_IMPORTED_MODULE_7__.barcodeConfig.margin.starting;
  const lineColor = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getInputValue)(getBarcodeSecondaryColorInput());
  const background = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getInputValue)(getBarcodePrimaryColorInput());
  jsbarcode__WEBPACK_IMPORTED_MODULE_0___default()("#barcode", content, {
    ...options,
    font: "sans-serif",
    width,
    height,
    fontSize,
    displayValue,
    margin,
    marginBottom: displayValue ? bottom : 0,
    lineColor,
    background
  });
}
async function copyBarcode(src) {
  const barcode = document.querySelector("#barcode");
  const data = await fetch(barcode.src);
  const blob = await data.blob();
  try {
    await navigator.clipboard.write([new ClipboardItem({
      "image/png": blob
    })]);
    (0,_ui__WEBPACK_IMPORTED_MODULE_8__.updateCopyMessage)("copied!");
  } catch (e) {
    (0,_ui__WEBPACK_IMPORTED_MODULE_8__.updateCopyMessage)("there was an issue, try again.");
  }
}

// ################# TEXT INPUT #################
function getBarcodeTextInput() {
  return document.getElementById(_BarcodeTextInput__WEBPACK_IMPORTED_MODULE_1__.barcodeTextInputId);
}

// ################# WIDTH INPUT ################

function getBarcodeWidthInput() {
  return document.getElementById(_BarcodeWIdthInput__WEBPACK_IMPORTED_MODULE_2__.barcodeWidthInputId);
}

// ################# HEIGHT INPUT ################
function getBarcodeHeightInput() {
  return document.getElementById(_BarcodeHeightInput__WEBPACK_IMPORTED_MODULE_4__.barcodeHeightInputId);
}

// ################ FONT SIZE INPUT ###############
function getBarcodeFontSizeInput() {
  return document.getElementById(_BarcodeFontSizeInput__WEBPACK_IMPORTED_MODULE_5__.barcodeFontSizeInputId);
}

// ############## FONT DISPLAY INPUT #############
function getBarcodeFontDisplayInput() {
  return document.getElementById(_BarcodeFontDisplayInput__WEBPACK_IMPORTED_MODULE_6__.barcodeFontDisplayInputId);
}

// ############# COPY BARCODE MESSAGE ############
function getCopyBarcodeMessage() {
  return document.querySelector(".copy-message-container > div");
}

// #############  SECONDARY COLOR INPUT ###########
function getBarcodePrimaryColorInput() {
  return document.getElementById(_BarcodeColorInputs__WEBPACK_IMPORTED_MODULE_9__.barcodePrimaryColorInputId);
}
function getBarcodePrimaryColorPreset() {
  return document.getElementById(`custom-preset-${_BarcodeColorInputs__WEBPACK_IMPORTED_MODULE_9__.barcodePrimaryColorInputId}`);
}

// ################ PRIMARY COLOR INPUT ##############
function getBarcodeSecondaryColorInput() {
  return document.getElementById(_BarcodeColorInputs__WEBPACK_IMPORTED_MODULE_9__.barcodeSecondaryColorInputId);
}
function getBarcodeSecondaryColorPreset() {
  return document.getElementById(`custom-preset-${_BarcodeColorInputs__WEBPACK_IMPORTED_MODULE_9__.barcodeSecondaryColorInputId}`);
}

/***/ }),

/***/ "./src/components/BarcodeGenerator/ui.js":
/*!***********************************************!*\
  !*** ./src/components/BarcodeGenerator/ui.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateCopyMessage: () => (/* binding */ updateCopyMessage)
/* harmony export */ });
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/components/BarcodeGenerator/logic.js");

function updateCopyMessage(message) {
  const copyMessage = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.getCopyBarcodeMessage)();
  copyMessage.innerText = message;
  setTimeout(() => {
    copyMessage.innerText = "copy to clipboard";
  }, 1500);
}

/***/ }),

/***/ "./src/components/Content/Content.js":
/*!*******************************************!*\
  !*** ./src/components/Content/Content.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony export */   Svg: () => (/* binding */ Svg),
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
const Svg = (props, children) => Element("svg", props ? {
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyWindowListeners: () => (/* binding */ applyWindowListeners)
/* harmony export */ });
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsbarcode */ "./node_modules/jsbarcode/bin/JsBarcode.js");
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsbarcode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _components_BarcodeGenerator_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/BarcodeGenerator/logic */ "./src/components/BarcodeGenerator/logic.js");
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
    // updateBarcodeWidthDisplay(getInputValue(getBarcodeWidthInput()));
    (0,_components_BarcodeGenerator_logic__WEBPACK_IMPORTED_MODULE_2__.generateBarcode)();
  };
}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   capitalize: () => (/* binding */ capitalize),
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   generateTestContentArr: () => (/* binding */ generateTestContentArr),
/* harmony export */   getInputValue: () => (/* binding */ getInputValue),
/* harmony export */   getRandomInt: () => (/* binding */ getRandomInt),
/* harmony export */   setInputValue: () => (/* binding */ setInputValue),
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
function setInputValue(inputElement, value) {
  inputElement.value = value;
}

/***/ }),

/***/ "./node_modules/jsbarcode/bin/JsBarcode.js":
/*!*************************************************!*\
  !*** ./node_modules/jsbarcode/bin/JsBarcode.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



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

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztVQ052QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNONkI7QUFDc0I7QUFDa0I7QUFFckV3QixRQUFRLENBQUN1TixJQUFJLENBQUN0RCxXQUFXLENBQUMzRix1RUFBTyxDQUFDLENBQUMsQ0FBQztBQUVwQ2dILGtGQUFpQixDQUFDLENBQUM7O0FBRW5CO0FBQ0EsTUFBTWtDLFNBQVMsR0FBRyxJQUFJO0FBQ3RCLElBQUlBLFNBQVMsRUFBRTtFQUNiO0FBQUEsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQmFyY29kZUdlbmVyYXRvci9CYXJjb2RlLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQmFyY29kZUdlbmVyYXRvci9CYXJjb2RlQ29sb3JJbnB1dHMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9CYXJjb2RlR2VuZXJhdG9yL0JhcmNvZGVFbmFibGVDbGlja1RvQ29weS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0JhcmNvZGVHZW5lcmF0b3IvQmFyY29kZUZvbnREaXNwbGF5SW5wdXQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9CYXJjb2RlR2VuZXJhdG9yL0JhcmNvZGVGb250U2l6ZUlucHV0LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQmFyY29kZUdlbmVyYXRvci9CYXJjb2RlRm9ybS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0JhcmNvZGVHZW5lcmF0b3IvQmFyY29kZUdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0JhcmNvZGVHZW5lcmF0b3IvQmFyY29kZUhlaWdodElucHV0LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQmFyY29kZUdlbmVyYXRvci9CYXJjb2RlVGV4dElucHV0LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQmFyY29kZUdlbmVyYXRvci9CYXJjb2RlV0lkdGhJbnB1dC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0JhcmNvZGVHZW5lcmF0b3IvR2VuZXJhdGVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9CYXJjb2RlR2VuZXJhdG9yL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0JhcmNvZGVHZW5lcmF0b3IvbG9naWMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9CYXJjb2RlR2VuZXJhdG9yL3VpLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQ29udGVudC9Db250ZW50LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRHluYW1pY0Zvb3Rlci9Db3B5cmlnaHRDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9EeW5hbWljRm9vdGVyL0R5bmFtaWNGb290ZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9EeW5hbWljRm9vdGVyL1NpdGVBdHRyaWJ1dGlvbnMvQXR0cmlidXRpb25zQ29udGFpbmVyLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRHluYW1pY0Zvb3Rlci9TaXRlQXR0cmlidXRpb25zL0ljb25zRXhwbGFuYXRpb24uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9EeW5hbWljRm9vdGVyL1RPUExpbmtDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvTWFpblNlY3Rpb24vTWFpblNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvRXhwYW5kYWJsZVBhbmVsL0V4cGFuZGFibGVQYW5lbC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9FeHBhbmRhYmxlUGFuZWwvRXhwYW5kYWJsZVBhbmVsQ29udGVudC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9FeHBhbmRhYmxlUGFuZWwvRXhwYW5kYWJsZVBhbmVsVGl0bGUuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvRXhwYW5kYWJsZVBhbmVsL05vbkV4cGFuZGFibGVQYW5lbC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9JY29uLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0ltYWdlQ2Fyb3VzZWwvdWkvY2Fyb3VzZWwtdWkuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fZWxlbWVudHMvRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvcGFnZS1sb2dpYy9kYXRhL2RhdGEtcGFnZS1jb25maWcuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvcGFnZS1sb2dpYy91aS91aS1pbml0aWFsLXN0YXRlLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL3BhZ2UtbG9naWMvdWkvdWktd2luZG93LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vSnNCYXJjb2RlLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvQmFyY29kZS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL0NPREUxMjgvQ09ERTEyOC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL0NPREUxMjgvQ09ERTEyOEEuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9DT0RFMTI4L0NPREUxMjhCLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvQ09ERTEyOC9DT0RFMTI4Qy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL0NPREUxMjgvQ09ERTEyOF9BVVRPLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvQ09ERTEyOC9hdXRvLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvQ09ERTEyOC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9DT0RFMTI4L2luZGV4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvQ09ERTM5L2luZGV4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvRUFOX1VQQy9FQU4uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9FQU5fVVBDL0VBTjEzLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvRUFOX1VQQy9FQU4yLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvRUFOX1VQQy9FQU41LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvRUFOX1VQQy9FQU44LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvRUFOX1VQQy9VUEMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9FQU5fVVBDL1VQQ0UuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9FQU5fVVBDL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL0VBTl9VUEMvZW5jb2Rlci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL0VBTl9VUEMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9HZW5lcmljQmFyY29kZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL0lURi9JVEYuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9JVEYvSVRGMTQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9JVEYvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvSVRGL2luZGV4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvTVNJL01TSS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL01TSS9NU0kxMC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL01TSS9NU0kxMDEwLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvTVNJL01TSTExLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvTVNJL01TSTExMTAuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9NU0kvY2hlY2tzdW1zLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvTVNJL2luZGV4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvY29kYWJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL2luZGV4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvcGhhcm1hY29kZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2V4Y2VwdGlvbnMvRXJyb3JIYW5kbGVyLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vZXhjZXB0aW9ucy9leGNlcHRpb25zLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vaGVscC9maXhPcHRpb25zLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vaGVscC9nZXRPcHRpb25zRnJvbUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9oZWxwL2dldFJlbmRlclByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9oZWxwL2xpbmVhcml6ZUVuY29kaW5ncy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2hlbHAvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9oZWxwL29wdGlvbnNGcm9tU3RyaW5ncy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL29wdGlvbnMvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9yZW5kZXJlcnMvY2FudmFzLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vcmVuZGVyZXJzL2luZGV4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vcmVuZGVyZXJzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL3JlbmRlcmVycy9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9yZW5kZXJlcnMvc3ZnLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRGl2LCBJbWcsIFN2ZyB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCB7IGNvcHlCYXJjb2RlIH0gZnJvbSBcIi4vbG9naWNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbmZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICBjb3B5QmFyY29kZSgpO1xufVxuXG5jb25zdCBCYXJjb2RlID0gKCkgPT4ge1xuICAvL1xuXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAge1xuICAgICAgaW5uZXJUZXh0OiBgYCxcbiAgICAgIGNsYXNzTmFtZTogYGJhcmNvZGUtY29udGFpbmVyYCxcbiAgICB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBEaXYoXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiY29weS1tZXNzYWdlLWNvbnRhaW5lclwiLFxuICAgICAgICAgIG9uY2xpY2soKSB7XG4gICAgICAgICAgICBoYW5kbGVDbGljaygpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtEaXYoeyBpbm5lclRleHQ6IFwiY29weSB0byBjbGlwYm9hcmRcIiB9KV1cbiAgICAgICksXG4gICAgICBJbWcoeyBpZDogXCJiYXJjb2RlXCIsIGNsYXNzTmFtZTogXCJiYXJjb2RlLWltYWdlXCIgfSksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhcmNvZGU7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgZGVib3VuY2UsIHNldElucHV0VmFsdWUgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IERpdiwgTGFiZWwsIElucHV0LCBTZWxlY3QsIE9wdGlvbiB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCB7XG4gIGdlbmVyYXRlQmFyY29kZSxcbiAgZ2V0QmFyY29kZVByaW1hcnlDb2xvcklucHV0LFxuICBnZXRCYXJjb2RlUHJpbWFyeUNvbG9yUHJlc2V0LFxuICBnZXRCYXJjb2RlU2Vjb25kYXJ5Q29sb3JJbnB1dCxcbiAgZ2V0QmFyY29kZVNlY29uZGFyeUNvbG9yUHJlc2V0LFxufSBmcm9tIFwiLi9sb2dpY1wiO1xuaW1wb3J0IHsgYmFyY29kZUNvbmZpZyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcblxuZnVuY3Rpb24gaGFuZGxlUHJpbWFyeUNvbG9ySW5wdXQoKSB7XG4gIGNvbnN0IHByZXNldCA9IGdldEJhcmNvZGVQcmltYXJ5Q29sb3JQcmVzZXQoKTtcbiAgcHJlc2V0LnNlbGVjdGVkID0gdHJ1ZTtcbiAgZGVib3VuY2UoZ2VuZXJhdGVCYXJjb2RlKCkpO1xufVxuZnVuY3Rpb24gaGFuZGxlU2Vjb25kYXJ5Q29sb3JJbnB1dCgpIHtcbiAgY29uc3QgcHJlc2V0ID0gZ2V0QmFyY29kZVNlY29uZGFyeUNvbG9yUHJlc2V0KCk7XG4gIHByZXNldC5zZWxlY3RlZCA9IHRydWU7XG4gIGRlYm91bmNlKGdlbmVyYXRlQmFyY29kZSgpKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUHJpbWFyeUNvbG9yUHJlc2V0KGUpIHtcbiAgc2V0SW5wdXRWYWx1ZShnZXRCYXJjb2RlUHJpbWFyeUNvbG9ySW5wdXQoKSwgZS50YXJnZXQudmFsdWUpO1xuICBkZWJvdW5jZShnZW5lcmF0ZUJhcmNvZGUoKSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVNlY29uZGFyeUNvbG9yUHJlc2V0KGUpIHtcbiAgc2V0SW5wdXRWYWx1ZShnZXRCYXJjb2RlU2Vjb25kYXJ5Q29sb3JJbnB1dCgpLCBlLnRhcmdldC52YWx1ZSk7XG4gIGRlYm91bmNlKGdlbmVyYXRlQmFyY29kZSgpKTtcbn1cblxuZXhwb3J0IGNvbnN0IGJhcmNvZGVQcmltYXJ5Q29sb3JJbnB1dElkID0gdXVpZHY0KCk7XG5leHBvcnQgY29uc3QgYmFyY29kZVNlY29uZGFyeUNvbG9ySW5wdXRJZCA9IHV1aWR2NDtcblxuY29uc3QgcHJlc2V0T3B0aW9ucyA9IFtcbiAgeyBuYW1lOiBcIlVNTiBHb2xkXCIsIHZhbHVlOiBcIiNGRkNDMzNcIiB9LFxuICB7IG5hbWU6IFwiVU1OIE1hcm9vblwiLCB2YWx1ZTogXCIjN0EwMDE5XCIgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBCYXJjb2RlUHJpbWFyeUNvbG9ySW5wdXQgPSAoKSA9PiB7XG4gIC8vXG5cbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdihcbiAgICB7IGlubmVyVGV4dDogYGAsIGNsYXNzTmFtZTogYHZlcnRpY2FsLXN0YWNrYCB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBMYWJlbCh7XG4gICAgICAgIGlubmVySFRNTDogYFByaW1hcnkgY29sb3IgPGVtPihtdXN0IGJlIGxpZ2h0ZXIpPC9lbT46IGAsXG4gICAgICAgIGZvcjogYmFyY29kZVByaW1hcnlDb2xvcklucHV0SWQsXG4gICAgICB9KSxcbiAgICAgIElucHV0KHtcbiAgICAgICAgdHlwZTogXCJjb2xvclwiLFxuICAgICAgICBpZDogYmFyY29kZVByaW1hcnlDb2xvcklucHV0SWQsXG4gICAgICAgIHZhbHVlOiBiYXJjb2RlQ29uZmlnLnByaW1hcnlDb2xvci5zdGFydGluZyxcbiAgICAgICAgb25pbnB1dCgpIHtcbiAgICAgICAgICBoYW5kbGVQcmltYXJ5Q29sb3JJbnB1dCgpO1xuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBEaXYoe30sIFtcbiAgICAgICAgU2VsZWN0KFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG9uaW5wdXQoZSkge1xuICAgICAgICAgICAgICBoYW5kbGVQcmltYXJ5Q29sb3JQcmVzZXQoZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgT3B0aW9uKHtcbiAgICAgICAgICAgICAgaW5uZXJUZXh0OiBcIkRlZmF1bHRcIixcbiAgICAgICAgICAgICAgdmFsdWU6IGJhcmNvZGVDb25maWcucHJpbWFyeUNvbG9yLnN0YXJ0aW5nLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAuLi5wcmVzZXRPcHRpb25zLm1hcCgobykgPT5cbiAgICAgICAgICAgICAgT3B0aW9uKHsgaW5uZXJUZXh0OiBvLm5hbWUsIHZhbHVlOiBvLnZhbHVlIH0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgT3B0aW9uKHtcbiAgICAgICAgICAgICAgaW5uZXJUZXh0OiBcIkN1c3RvbVwiLFxuICAgICAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBpZDogYGN1c3RvbS1wcmVzZXQtJHtiYXJjb2RlUHJpbWFyeUNvbG9ySW5wdXRJZH1gLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBjb25zdCBCYXJjb2RlU2Vjb25kYXJ5Q29sb3JJbnB1dCA9ICgpID0+IHtcbiAgLy9cblxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRGl2KFxuICAgIHsgaW5uZXJUZXh0OiBgYCwgY2xhc3NOYW1lOiBgdmVydGljYWwtc3RhY2tgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIExhYmVsKHtcbiAgICAgICAgaW5uZXJIVE1MOiBgU2Vjb25kYXJ5IGNvbG9yIDxlbT4obXVzdCBiZSBkYXJrZXIpPC9lbT46IGAsXG4gICAgICAgIGZvcjogYmFyY29kZVNlY29uZGFyeUNvbG9ySW5wdXRJZCxcbiAgICAgIH0pLFxuICAgICAgSW5wdXQoe1xuICAgICAgICB0eXBlOiBcImNvbG9yXCIsXG4gICAgICAgIGlkOiBiYXJjb2RlU2Vjb25kYXJ5Q29sb3JJbnB1dElkLFxuICAgICAgICB2YWx1ZTogYmFyY29kZUNvbmZpZy5zZWNvbmRhcnlDb2xvci5zdGFydGluZyxcbiAgICAgICAgb25pbnB1dCgpIHtcbiAgICAgICAgICBoYW5kbGVTZWNvbmRhcnlDb2xvcklucHV0KCk7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIERpdih7fSwgW1xuICAgICAgICBTZWxlY3QoXG4gICAgICAgICAge1xuICAgICAgICAgICAgb25pbnB1dChlKSB7XG4gICAgICAgICAgICAgIGhhbmRsZVNlY29uZGFyeUNvbG9yUHJlc2V0KGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIE9wdGlvbih7XG4gICAgICAgICAgICAgIGlubmVyVGV4dDogXCJEZWZhdWx0XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBiYXJjb2RlQ29uZmlnLnNlY29uZGFyeUNvbG9yLnN0YXJ0aW5nLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAuLi5wcmVzZXRPcHRpb25zLm1hcCgobykgPT5cbiAgICAgICAgICAgICAgT3B0aW9uKHsgaW5uZXJUZXh0OiBvLm5hbWUsIHZhbHVlOiBvLnZhbHVlIH0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgT3B0aW9uKHtcbiAgICAgICAgICAgICAgaW5uZXJUZXh0OiBcIkN1c3RvbVwiLFxuICAgICAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBpZDogYGN1c3RvbS1wcmVzZXQtJHtiYXJjb2RlU2Vjb25kYXJ5Q29sb3JJbnB1dElkfWAsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICBdKSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYsIExhYmVsLCBJbnB1dCB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuZnVuY3Rpb24gaGFuZGxlSW5wdXQoZSkge1xuICBjb25zdCBpc0NoZWNrZWQgPSBlLnRhcmdldC5jaGVja2VkO1xuICBjb25zb2xlLmxvZyhpc0NoZWNrZWQpO1xuICBjb25zdCBjb3B5TWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29weS1tZXNzYWdlLWNvbnRhaW5lclwiKTtcbiAgY29uc29sZS5sb2coY29weU1lc3NhZ2UpO1xuXG4gIGlzQ2hlY2tlZFxuICAgID8gY29weU1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXktbm9uZVwiKVxuICAgIDogY29weU1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktbm9uZVwiKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNsaWNrVG9Db3B5SWQgPSB1dWlkdjQoKTtcbmNvbnN0IEJhcmNvZGVFbmFibGVDbGlja1RvQ29weSA9ICgpID0+IHtcbiAgLy9cblxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRGl2KFxuICAgIHsgaW5uZXJUZXh0OiBgYCwgY2xhc3NOYW1lOiBgYmFyY29kZS1lbmFibGUtY2xpY2stdG8tY29weWAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgTGFiZWwoeyBmb3I6IGNsaWNrVG9Db3B5SWQsIGlubmVyVGV4dDogYEVuYWJsZSBjbGljayB0byBjb3B5YCB9KSxcbiAgICAgIElucHV0KHtcbiAgICAgICAgaWQ6IGNsaWNrVG9Db3B5SWQsXG4gICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICAgICAgb25pbnB1dChlKSB7XG4gICAgICAgICAgaGFuZGxlSW5wdXQoZSk7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIERpdih7XG4gICAgICAgIGNsYXNzTmFtZTogXCJzbWFsbC1mb250XCIsXG4gICAgICAgIGlubmVyVGV4dDogXCIoRmVhdHVyZSBvbmx5IHdvcmtzIGluIEdvb2dsZSBDaHJvbWUpXCIsXG4gICAgICB9KSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFyY29kZUVuYWJsZUNsaWNrVG9Db3B5O1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IERpdiwgSW5wdXQsIExhYmVsIH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVCYXJjb2RlIH0gZnJvbSBcIi4vbG9naWNcIjtcbmltcG9ydCB7IGJhcmNvZGVDb25maWcgfSBmcm9tIFwiLi9jb25maWdcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcblxuZXhwb3J0IGNvbnN0IGJhcmNvZGVGb250RGlzcGxheUlucHV0SWQgPSB1dWlkdjQoKTtcblxuZnVuY3Rpb24gaGFuZGxlSW5wdXQoKSB7XG4gIGRlYm91bmNlKGdlbmVyYXRlQmFyY29kZSgpKTtcbn1cblxuY29uc3QgQmFyY29kZUZvbnREaXNwbGF5SW5wdXQgPSAoKSA9PiB7XG4gIC8vXG5cbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdih7fSwgW1xuICAgIExhYmVsKHtcbiAgICAgIGZvcjogYmFyY29kZUZvbnREaXNwbGF5SW5wdXRJZCxcbiAgICAgIGlubmVySFRNTDogYFNob3cgdGV4dDogYCxcbiAgICB9KSxcbiAgICBJbnB1dChcbiAgICAgIHtcbiAgICAgICAgaWQ6IGJhcmNvZGVGb250RGlzcGxheUlucHV0SWQsXG4gICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgaW5uZXJUZXh0OiBgYCxcbiAgICAgICAgY2xhc3NOYW1lOiBgYCxcblxuICAgICAgICBjaGVja2VkOiBiYXJjb2RlQ29uZmlnLmZvbnREaXNwbGF5LnN0YXJ0aW5nLFxuICAgICAgICBvbmlucHV0KCkge1xuICAgICAgICAgIGhhbmRsZUlucHV0KCk7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgICAgW11cbiAgICApLFxuICBdKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXJjb2RlRm9udERpc3BsYXlJbnB1dDtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYsIElucHV0LCBMYWJlbCB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IGdlbmVyYXRlQmFyY29kZSB9IGZyb20gXCIuL2xvZ2ljXCI7XG5pbXBvcnQgeyBiYXJjb2RlQ29uZmlnIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG5cbmV4cG9ydCBjb25zdCBiYXJjb2RlRm9udFNpemVJbnB1dElkID0gdXVpZHY0KCk7XG5cbmZ1bmN0aW9uIGhhbmRsZUlucHV0KCkge1xuICBkZWJvdW5jZShnZW5lcmF0ZUJhcmNvZGUoKSk7XG59XG5cbmNvbnN0IEJhcmNvZGVGb250U2l6ZUlucHV0ID0gKCkgPT4ge1xuICAvL1xuXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoeyBjbGFzc05hbWU6IGB2ZXJ0aWNhbC1zdGFja2AgfSwgW1xuICAgIExhYmVsKHtcbiAgICAgIGZvcjogYmFyY29kZUZvbnRTaXplSW5wdXRJZCxcbiAgICAgIGlubmVySFRNTDogYEZvbnQgc2l6ZTogYCxcbiAgICB9KSxcbiAgICBJbnB1dChcbiAgICAgIHtcbiAgICAgICAgaWQ6IGJhcmNvZGVGb250U2l6ZUlucHV0SWQsXG4gICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgIGlubmVyVGV4dDogYGAsXG4gICAgICAgIGNsYXNzTmFtZTogYGAsXG4gICAgICAgIG1pbjogYmFyY29kZUNvbmZpZy5mb250U2l6ZS5taW4sXG4gICAgICAgIG1heDogYmFyY29kZUNvbmZpZy5mb250U2l6ZS5tYXgsXG4gICAgICAgIHN0ZXA6IGJhcmNvZGVDb25maWcuZm9udFNpemUuc3RlcCxcbiAgICAgICAgdmFsdWU6IGJhcmNvZGVDb25maWcuZm9udFNpemUuc3RhcnRpbmcsXG4gICAgICAgIG9uaW5wdXQoKSB7XG4gICAgICAgICAgaGFuZGxlSW5wdXQoKTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgICBbXVxuICAgICksXG4gIF0pO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhcmNvZGVGb250U2l6ZUlucHV0O1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEZvcm0sIERpdiB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuaW1wb3J0IEJhcmNvZGVUZXh0SW5wdXQgZnJvbSBcIi4vQmFyY29kZVRleHRJbnB1dFwiO1xuaW1wb3J0IEJhcmNvZGVXaWR0aElucHV0IGZyb20gXCIuL0JhcmNvZGVXSWR0aElucHV0XCI7XG5pbXBvcnQgQmFyY29kZUhlaWdodElucHV0IGZyb20gXCIuL0JhcmNvZGVIZWlnaHRJbnB1dFwiO1xuaW1wb3J0IEJhcmNvZGVGb250U2l6ZUlucHV0IGZyb20gXCIuL0JhcmNvZGVGb250U2l6ZUlucHV0XCI7XG5pbXBvcnQgQmFyY29kZUZvbnREaXNwbGF5SW5wdXQgZnJvbSBcIi4vQmFyY29kZUZvbnREaXNwbGF5SW5wdXRcIjtcbmltcG9ydCB7XG4gIEJhcmNvZGVQcmltYXJ5Q29sb3JJbnB1dCxcbiAgQmFyY29kZVNlY29uZGFyeUNvbG9ySW5wdXQsXG59IGZyb20gXCIuL0JhcmNvZGVDb2xvcklucHV0c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuXG5jb25zdCBCYXJjb2RlRm9ybSA9ICgpID0+IHtcbiAgLy9cblxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRm9ybShcbiAgICB7XG4gICAgICBpbm5lclRleHQ6IGBgLFxuICAgICAgY2xhc3NOYW1lOiBgYmFyY29kZS1mb3JtIGAsXG4gICAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgRGl2KHsgY2xhc3NOYW1lOiBcImZvcm0tcm93LTItYXV0b1wiIH0sIFtcbiAgICAgICAgQmFyY29kZVRleHRJbnB1dCgpLFxuICAgICAgICBCYXJjb2RlRm9udERpc3BsYXlJbnB1dCgpLFxuICAgICAgXSksXG4gICAgICBEaXYoeyBjbGFzc05hbWU6IFwiZm9ybS1yb3ctM1wiIH0sIFtcbiAgICAgICAgQmFyY29kZVdpZHRoSW5wdXQoKSxcbiAgICAgICAgQmFyY29kZUhlaWdodElucHV0KCksXG4gICAgICAgIEJhcmNvZGVGb250U2l6ZUlucHV0KCksXG4gICAgICBdKSxcbiAgICAgIERpdih7IGNsYXNzTmFtZTogXCJmb3JtLXJvdy0yXCIgfSwgW1xuICAgICAgICBCYXJjb2RlUHJpbWFyeUNvbG9ySW5wdXQoKSxcbiAgICAgICAgQmFyY29kZVNlY29uZGFyeUNvbG9ySW5wdXQoKSxcbiAgICAgIF0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXJjb2RlRm9ybTtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYgfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgQmFyY29kZSBmcm9tIFwiLi9CYXJjb2RlXCI7XG5pbXBvcnQgQmFyY29kZUVuYWJsZUNsaWNrVG9Db3B5IGZyb20gXCIuL0JhcmNvZGVFbmFibGVDbGlja1RvQ29weVwiO1xuaW1wb3J0IEJhcmNvZGVGb3JtIGZyb20gXCIuL0JhcmNvZGVGb3JtXCI7XG5cbmltcG9ydCBHZW5lcmF0ZUJ1dHRvbiBmcm9tIFwiLi9HZW5lcmF0ZUJ1dHRvblwiO1xuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEJhcmNvZGVHZW5lcmF0b3IgPSAoKSA9PiB7XG4gIC8vXG5cbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdihcbiAgICB7IGlubmVyVGV4dDogYGAsIGNsYXNzTmFtZTogYGJhcmNvZGUtZ2VuZXJhdG9yYCB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBCYXJjb2RlRm9ybSgpLFxuICAgICAgRGl2KHsgY2xhc3NOYW1lOiBcImJhcmNvZGUtc2VjdGlvblwiIH0sIFtcbiAgICAgICAgQmFyY29kZSgpLFxuICAgICAgICBEaXYoe30sIFtCYXJjb2RlRW5hYmxlQ2xpY2tUb0NvcHkoKV0pLFxuICAgICAgXSksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhcmNvZGVHZW5lcmF0b3I7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRGl2LCBJbnB1dCwgTGFiZWwsIFNwYW4gfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZUJhcmNvZGUgfSBmcm9tIFwiLi9sb2dpY1wiO1xuaW1wb3J0IHsgYmFyY29kZUNvbmZpZyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuXG5leHBvcnQgY29uc3QgYmFyY29kZUhlaWdodElucHV0SWQgPSB1dWlkdjQoKTtcbmV4cG9ydCBjb25zdCBiYXJjb2RlSGVpZ2h0RGlzcGxheUlkID0gYGJhcmNvZGUtaGVpZ2h0LWRpc3BsYXktJHtiYXJjb2RlSGVpZ2h0SW5wdXRJZH1gO1xuXG5mdW5jdGlvbiBoYW5kbGVJbnB1dCgpIHtcbiAgZGVib3VuY2UoZ2VuZXJhdGVCYXJjb2RlKCkpO1xufVxuXG5jb25zdCBCYXJjb2RlSGVpZ2h0SW5wdXQgPSAoKSA9PiB7XG4gIC8vXG5cbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdih7IGNsYXNzTmFtZTogYHZlcnRpY2FsLXN0YWNrYCB9LCBbXG4gICAgTGFiZWwoe1xuICAgICAgZm9yOiBiYXJjb2RlSGVpZ2h0SW5wdXRJZCxcbiAgICAgIGlubmVySFRNTDogYEhlaWdodDogYCxcbiAgICB9KSxcbiAgICBJbnB1dChcbiAgICAgIHtcbiAgICAgICAgaWQ6IGJhcmNvZGVIZWlnaHRJbnB1dElkLFxuICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICBpbm5lclRleHQ6IGBgLFxuICAgICAgICBjbGFzc05hbWU6IGBgLFxuICAgICAgICBtaW46IGJhcmNvZGVDb25maWcuaGVpZ2h0Lm1pbixcbiAgICAgICAgbWF4OiBiYXJjb2RlQ29uZmlnLmhlaWdodC5tYXgsXG4gICAgICAgIHN0ZXA6IGJhcmNvZGVDb25maWcuaGVpZ2h0LnN0ZXAsXG4gICAgICAgIHZhbHVlOiBiYXJjb2RlQ29uZmlnLmhlaWdodC5zdGFydGluZyxcbiAgICAgICAgb25pbnB1dCgpIHtcbiAgICAgICAgICBoYW5kbGVJbnB1dCgpO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICAgIFtdXG4gICAgKSxcbiAgXSk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFyY29kZUhlaWdodElucHV0O1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IERpdiwgSW5wdXQgfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVCYXJjb2RlIH0gZnJvbSBcIi4vbG9naWNcIjtcbmltcG9ydCB7IGJhcmNvZGVDb25maWcgfSBmcm9tIFwiLi9jb25maWdcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbmZ1bmN0aW9uIGhhbmRsZUNoYW5nZSgpIHtcbiAgZ2VuZXJhdGVCYXJjb2RlKCk7XG59XG5leHBvcnQgY29uc3QgYmFyY29kZVRleHRJbnB1dElkID0gdXVpZHY0KCk7XG5cbmNvbnN0IEJhcmNvZGVUZXh0SW5wdXQgPSAoKSA9PiB7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAge1xuICAgICAgaW5uZXJUZXh0OiBgYCxcbiAgICAgIGNsYXNzTmFtZTogYGAsXG4gICAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgSW5wdXQoe1xuICAgICAgICBpZDogYCR7YmFyY29kZVRleHRJbnB1dElkfWAsXG4gICAgICAgIHZhbHVlOiBiYXJjb2RlQ29uZmlnLnRleHRJbnB1dC5zdGFydGluZyxcbiAgICAgICAgb25pbnB1dCgpIHtcbiAgICAgICAgICBoYW5kbGVDaGFuZ2UoKTtcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXJjb2RlVGV4dElucHV0O1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IERpdiwgTGFiZWwsIE9wdGlvbiwgU2VsZWN0IH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVCYXJjb2RlIH0gZnJvbSBcIi4vbG9naWNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcblxuZXhwb3J0IGNvbnN0IGJhcmNvZGVXaWR0aElucHV0SWQgPSB1dWlkdjQoKTtcblxuZnVuY3Rpb24gaGFuZGxlSW5wdXQoKSB7XG4gIGRlYm91bmNlKGdlbmVyYXRlQmFyY29kZSgpKTtcbn1cblxuY29uc3Qgb3B0aW9ucyA9IFtcbiAgeyBuYW1lOiBcIk5vcm1hbFwiLCB2YWx1ZTogMSB9LFxuICB7IG5hbWU6IFwiV2lkZVwiLCB2YWx1ZTogMiB9LFxuXTtcblxuY29uc3QgQmFyY29kZVdpZHRoSW5wdXQgPSAoKSA9PiB7XG4gIC8vXG5cbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdih7IGNsYXNzTmFtZTogYHZlcnRpY2FsLXN0YWNrYCB9LCBbXG4gICAgTGFiZWwoe1xuICAgICAgZm9yOiBiYXJjb2RlV2lkdGhJbnB1dElkLFxuICAgICAgaW5uZXJIVE1MOiBgV2lkdGg6IGAsXG4gICAgfSksXG4gICAgU2VsZWN0KFxuICAgICAge1xuICAgICAgICBpZDogYmFyY29kZVdpZHRoSW5wdXRJZCxcbiAgICAgICAgb25pbnB1dCgpIHtcbiAgICAgICAgICBoYW5kbGVJbnB1dCgpO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFsuLi5vcHRpb25zLm1hcCgobykgPT4gT3B0aW9uKHsgaW5uZXJUZXh0OiBvLm5hbWUsIHZhbHVlOiBvLnZhbHVlIH0pKV1cbiAgICApLFxuICBdKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXJjb2RlV2lkdGhJbnB1dDtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBnZXRJbnB1dFZhbHVlIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgeyBiYXJjb2RlVGV4dElucHV0SWQgfSBmcm9tIFwiLi9CYXJjb2RlVGV4dElucHV0XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZUJhcmNvZGUsIGdldEJhcmNvZGVUZXh0SW5wdXQgfSBmcm9tIFwiLi9sb2dpY1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuXG5jb25zdCBHZW5lcmF0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgLy9cblxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gQnV0dG9uKFxuICAgIHtcbiAgICAgIGlubmVyVGV4dDogYEdlbmVyYXRlYCxcbiAgICAgIGNsYXNzTmFtZTogYGAsXG4gICAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW11cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHZW5lcmF0ZUJ1dHRvbjtcbiIsImV4cG9ydCBjb25zdCBiYXJjb2RlQ29uZmlnID0ge1xuICB3aWR0aDoge1xuICAgIHN0YXJ0aW5nOiAxLFxuICAgIG1pbjogMSxcbiAgICBtYXg6IDEwLFxuICAgIHN0ZXA6IDAuMSxcbiAgfSxcbiAgaGVpZ2h0OiB7XG4gICAgc3RhcnRpbmc6IDUwLFxuICAgIG1pbjogMTAsXG4gICAgbWF4OiAyNTAsXG4gICAgc3RlcDogMixcbiAgfSxcbiAgZm9udFNpemU6IHtcbiAgICBzdGFydGluZzogMTQsXG4gICAgbWluOiA1LFxuICAgIG1heDogMTAwLFxuICAgIHN0ZXA6IDEsXG4gIH0sXG4gIGZvbnREaXNwbGF5OiB7XG4gICAgc3RhcnRpbmc6IHRydWUsXG4gIH0sXG4gIG1hcmdpbjoge1xuICAgIHN0YXJ0aW5nOiB7XG4gICAgICBtYXJnaW46IDgsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgfSxcbiAgfSxcbiAgdGV4dElucHV0OiB7XG4gICAgc3RhcnRpbmc6IFwiVGhpcyBpcyBvbmx5IGEgdGVzdFwiLFxuICB9LFxuICBzZWNvbmRhcnlDb2xvcjoge1xuICAgIHN0YXJ0aW5nOiBcIiMwMDAwMDBcIixcbiAgfSxcbiAgcHJpbWFyeUNvbG9yOiB7XG4gICAgc3RhcnRpbmc6IFwiI2ZmZmZmZlwiLFxuICB9LFxufTtcbiIsImltcG9ydCBKc0JhcmNvZGUgZnJvbSBcImpzYmFyY29kZVwiO1xuXG5pbXBvcnQgeyBiYXJjb2RlVGV4dElucHV0SWQgfSBmcm9tIFwiLi9CYXJjb2RlVGV4dElucHV0XCI7XG5pbXBvcnQgeyBiYXJjb2RlV2lkdGhJbnB1dElkIH0gZnJvbSBcIi4vQmFyY29kZVdJZHRoSW5wdXRcIjtcbmltcG9ydCB7IGdldElucHV0VmFsdWUgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IGJhcmNvZGVIZWlnaHRJbnB1dElkIH0gZnJvbSBcIi4vQmFyY29kZUhlaWdodElucHV0XCI7XG5pbXBvcnQgeyBiYXJjb2RlRm9udFNpemVJbnB1dElkIH0gZnJvbSBcIi4vQmFyY29kZUZvbnRTaXplSW5wdXRcIjtcbmltcG9ydCB7IGJhcmNvZGVGb250RGlzcGxheUlucHV0SWQgfSBmcm9tIFwiLi9CYXJjb2RlRm9udERpc3BsYXlJbnB1dFwiO1xuXG5pbXBvcnQgeyBiYXJjb2RlQ29uZmlnIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgeyB1cGRhdGVDb3B5TWVzc2FnZSB9IGZyb20gXCIuL3VpXCI7XG5pbXBvcnQge1xuICBiYXJjb2RlUHJpbWFyeUNvbG9ySW5wdXRJZCxcbiAgYmFyY29kZVNlY29uZGFyeUNvbG9ySW5wdXRJZCxcbn0gZnJvbSBcIi4vQmFyY29kZUNvbG9ySW5wdXRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUJhcmNvZGUob3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyA/IG9wdGlvbnMgOiB7fTtcbiAgY29uc3QgY29udGVudCA9IGdldElucHV0VmFsdWUoZ2V0QmFyY29kZVRleHRJbnB1dCgpKVxuICAgID8gZ2V0SW5wdXRWYWx1ZShnZXRCYXJjb2RlVGV4dElucHV0KCkpXG4gICAgOiBcIjxOT05FPlwiO1xuXG4gIGNvbnN0IHdpZHRoID0gZ2V0SW5wdXRWYWx1ZShnZXRCYXJjb2RlV2lkdGhJbnB1dCgpKTtcbiAgY29uc3QgaGVpZ2h0ID0gZ2V0SW5wdXRWYWx1ZShnZXRCYXJjb2RlSGVpZ2h0SW5wdXQoKSk7XG4gIGNvbnN0IGZvbnRTaXplID0gZ2V0SW5wdXRWYWx1ZShnZXRCYXJjb2RlRm9udFNpemVJbnB1dCgpKTtcbiAgY29uc3QgZGlzcGxheVZhbHVlID0gZ2V0QmFyY29kZUZvbnREaXNwbGF5SW5wdXQoKS5jaGVja2VkO1xuICBjb25zdCB7IGJvdHRvbSwgbWFyZ2luIH0gPSBiYXJjb2RlQ29uZmlnLm1hcmdpbi5zdGFydGluZztcbiAgY29uc3QgbGluZUNvbG9yID0gZ2V0SW5wdXRWYWx1ZShnZXRCYXJjb2RlU2Vjb25kYXJ5Q29sb3JJbnB1dCgpKTtcbiAgY29uc3QgYmFja2dyb3VuZCA9IGdldElucHV0VmFsdWUoZ2V0QmFyY29kZVByaW1hcnlDb2xvcklucHV0KCkpO1xuXG4gIEpzQmFyY29kZShcIiNiYXJjb2RlXCIsIGNvbnRlbnQsIHtcbiAgICAuLi5vcHRpb25zLFxuICAgIGZvbnQ6IFwic2Fucy1zZXJpZlwiLFxuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBmb250U2l6ZSxcbiAgICBkaXNwbGF5VmFsdWUsXG4gICAgbWFyZ2luLFxuICAgIG1hcmdpbkJvdHRvbTogZGlzcGxheVZhbHVlID8gYm90dG9tIDogMCxcbiAgICBsaW5lQ29sb3IsXG4gICAgYmFja2dyb3VuZCxcbiAgfSk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29weUJhcmNvZGUoc3JjKSB7XG4gIGNvbnN0IGJhcmNvZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhcmNvZGVcIik7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChiYXJjb2RlLnNyYyk7XG4gIGNvbnN0IGJsb2IgPSBhd2FpdCBkYXRhLmJsb2IoKTtcbiAgdHJ5IHtcbiAgICBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlKFtuZXcgQ2xpcGJvYXJkSXRlbSh7IFwiaW1hZ2UvcG5nXCI6IGJsb2IgfSldKTtcbiAgICB1cGRhdGVDb3B5TWVzc2FnZShcImNvcGllZCFcIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB1cGRhdGVDb3B5TWVzc2FnZShcInRoZXJlIHdhcyBhbiBpc3N1ZSwgdHJ5IGFnYWluLlwiKTtcbiAgfVxufVxuXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyBURVhUIElOUFVUICMjIyMjIyMjIyMjIyMjIyMjXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmFyY29kZVRleHRJbnB1dCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJhcmNvZGVUZXh0SW5wdXRJZCk7XG59XG5cbi8vICMjIyMjIyMjIyMjIyMjIyMjIFdJRFRIIElOUFVUICMjIyMjIyMjIyMjIyMjIyNcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJhcmNvZGVXaWR0aElucHV0KCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYmFyY29kZVdpZHRoSW5wdXRJZCk7XG59XG5cbi8vICMjIyMjIyMjIyMjIyMjIyMjIEhFSUdIVCBJTlBVVCAjIyMjIyMjIyMjIyMjIyMjXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmFyY29kZUhlaWdodElucHV0KCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYmFyY29kZUhlaWdodElucHV0SWQpO1xufVxuXG4vLyAjIyMjIyMjIyMjIyMjIyMjIEZPTlQgU0laRSBJTlBVVCAjIyMjIyMjIyMjIyMjIyNcbmV4cG9ydCBmdW5jdGlvbiBnZXRCYXJjb2RlRm9udFNpemVJbnB1dCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJhcmNvZGVGb250U2l6ZUlucHV0SWQpO1xufVxuXG4vLyAjIyMjIyMjIyMjIyMjIyBGT05UIERJU1BMQVkgSU5QVVQgIyMjIyMjIyMjIyMjI1xuZXhwb3J0IGZ1bmN0aW9uIGdldEJhcmNvZGVGb250RGlzcGxheUlucHV0KCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYmFyY29kZUZvbnREaXNwbGF5SW5wdXRJZCk7XG59XG5cbi8vICMjIyMjIyMjIyMjIyMgQ09QWSBCQVJDT0RFIE1FU1NBR0UgIyMjIyMjIyMjIyMjXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29weUJhcmNvZGVNZXNzYWdlKCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3B5LW1lc3NhZ2UtY29udGFpbmVyID4gZGl2XCIpO1xufVxuXG4vLyAjIyMjIyMjIyMjIyMjICBTRUNPTkRBUlkgQ09MT1IgSU5QVVQgIyMjIyMjIyMjIyNcbmV4cG9ydCBmdW5jdGlvbiBnZXRCYXJjb2RlUHJpbWFyeUNvbG9ySW5wdXQoKSB7XG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChiYXJjb2RlUHJpbWFyeUNvbG9ySW5wdXRJZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCYXJjb2RlUHJpbWFyeUNvbG9yUHJlc2V0KCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGN1c3RvbS1wcmVzZXQtJHtiYXJjb2RlUHJpbWFyeUNvbG9ySW5wdXRJZH1gKTtcbn1cblxuLy8gIyMjIyMjIyMjIyMjIyMjIyBQUklNQVJZIENPTE9SIElOUFVUICMjIyMjIyMjIyMjIyMjXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmFyY29kZVNlY29uZGFyeUNvbG9ySW5wdXQoKSB7XG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChiYXJjb2RlU2Vjb25kYXJ5Q29sb3JJbnB1dElkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJhcmNvZGVTZWNvbmRhcnlDb2xvclByZXNldCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIGBjdXN0b20tcHJlc2V0LSR7YmFyY29kZVNlY29uZGFyeUNvbG9ySW5wdXRJZH1gXG4gICk7XG59XG4iLCJpbXBvcnQgeyBnZXRDb3B5QmFyY29kZU1lc3NhZ2UgfSBmcm9tIFwiLi9sb2dpY1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ29weU1lc3NhZ2UobWVzc2FnZSkge1xuICBjb25zdCBjb3B5TWVzc2FnZSA9IGdldENvcHlCYXJjb2RlTWVzc2FnZSgpO1xuICBjb3B5TWVzc2FnZS5pbm5lclRleHQgPSBtZXNzYWdlO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb3B5TWVzc2FnZS5pbm5lclRleHQgPSBcImNvcHkgdG8gY2xpcGJvYXJkXCI7XG4gIH0sIDE1MDApO1xufVxuIiwiaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL0hlYWRlci9IZWFkZXJcIjtcbmltcG9ydCBEeW5hbWljRm9vdGVyIGZyb20gXCIuLi9EeW5hbWljRm9vdGVyL0R5bmFtaWNGb290ZXJcIjtcbmltcG9ydCBNYWluU2VjdGlvbiBmcm9tIFwiLi4vTWFpblNlY3Rpb24vTWFpblNlY3Rpb25cIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IENvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBFbGVtZW50KFwiZGl2XCIsIHsgaWQ6IFwiY29udGVudFwiIH0sIFtcbiAgICBIZWFkZXIoKSxcbiAgICBNYWluU2VjdGlvbigpLFxuICAgIER5bmFtaWNGb290ZXIoKSxcbiAgXSk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEEsIERpdiB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9fY3VzdG9tLWNvbXBvbmVudHMvSWNvblwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG5pbXBvcnQgeyBnaXRodWJJbmZvIH0gZnJvbSBcIi4uLy4uL3BhZ2UtbG9naWMvZGF0YS9kYXRhLXBhZ2UtY29uZmlnXCI7XG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG4vLyBURU1QTEFURSBWQVJJQUJMRVNcbmNvbnN0IGR5bmFtaWNZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuXG5jb25zdCBDb3B5cmlnaHRDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAgeyBjbGFzc05hbWU6IGBjb3B5cmlnaHQtY29udGFpbmVyYCB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBEaXYoe1xuICAgICAgICBjbGFzc05hbWU6IFwiY29weXJpZ2h0LWluZm8gZGlzcGxheS1pLWJcIixcbiAgICAgICAgaW5uZXJUZXh0OiBgwqkgQ2FybGluIE1pdGNoZWxsICR7ZHluYW1pY1llYXJ9YCxcbiAgICAgIH0pLFxuICAgICAgQSh7IGhyZWY6IGBodHRwczovL2dpdGh1Yi5jb20vY2FybGluLW1pdGNoZWxsLyR7Z2l0aHViSW5mby5yZXBvTmFtZX1gIH0sIFtcbiAgICAgICAgSWNvbihcImljb24tZ2l0aHViLWNhdFwiKSxcbiAgICAgIF0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3B5cmlnaHRDb250YWluZXI7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IENvcHlyaWdodENvbnRhaW5lciBmcm9tIFwiLi9Db3B5cmlnaHRDb250YWluZXJcIjtcbmltcG9ydCBBdHRyaWJ1dGlvbnNDb250YWluZXIgZnJvbSBcIi4vU2l0ZUF0dHJpYnV0aW9ucy9BdHRyaWJ1dGlvbnNDb250YWluZXJcIjtcbmltcG9ydCBUT1BDb250YWluZXIgZnJvbSBcIi4vVE9QTGlua0NvbnRhaW5lclwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgRHluYW1pY0Zvb3RlciA9ICgpID0+IHtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBcbiAgRm9vdGVyKFxuICAgIHsgXG4gICAgICBpZDogYGZvb3RlcmAsIFxuICAgICAgY2xhc3NOYW1lOiBgYmctZ3JheS1kYXJrLTMgdGV4dC13aGl0ZWAgXG4gICAgfSxcbiAgICBbXG4gICAgIENvcHlyaWdodENvbnRhaW5lcigpLCBcblxuICAgICBBdHRyaWJ1dGlvbnNDb250YWluZXIoKVxuICAgIF1cbiAgKTtcblxuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNGb290ZXI7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi8uLi9fY3VzdG9tLWNvbXBvbmVudHMvSWNvblwiO1xuXG5pbXBvcnQgRXhwYW5kYWJsZVBhbmVsIGZyb20gXCIuLi8uLi9fY3VzdG9tLWNvbXBvbmVudHMvRXhwYW5kYWJsZVBhbmVsL0V4cGFuZGFibGVQYW5lbFwiO1xuaW1wb3J0IE5vbkV4cGFuZGFibGVQYW5lbCBmcm9tIFwiLi4vLi4vX2N1c3RvbS1jb21wb25lbnRzL0V4cGFuZGFibGVQYW5lbC9Ob25FeHBhbmRhYmxlUGFuZWxcIjtcblxuaW1wb3J0IEljb25zRXhwbGFuYXRpb24gZnJvbSBcIi4vSWNvbnNFeHBsYW5hdGlvblwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgQXR0cmlidXRpb25zQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgeyBjbGFzc05hbWU6IGBhdHRyaWJ1dGlvbnMtY29udGFpbmVyYCB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBFeHBhbmRhYmxlUGFuZWwoe1xuICAgICAgICB0aXRsZTogXCJTaXRlIEF0dHJpYnV0aW9uc1wiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIEV4cGFuZGFibGVQYW5lbCh7XG4gICAgICAgICAgICB0aXRsZTogXCJJY29uc1wiLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgTm9uRXhwYW5kYWJsZVBhbmVsKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJHaXRodWJcIixcbiAgICAgICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9sb2dvc1wiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbSWNvbihcImljb24tZ2l0aHViLWNhdFwiKV0sXG4gICAgICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgICAgIEV4cGFuZGFibGVQYW5lbCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQWxsIG90aGVyIEljb25zXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtJY29uc0V4cGxhbmF0aW9uKCldLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdHRyaWJ1dGlvbnNDb250YWluZXI7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRGl2LCBBIH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgSWNvbnNFeHBsYW5hdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdihcbiAgICB7IGNsYXNzTmFtZTogYGljb25zLWV4cGxhbmF0aW9uYCwgaW5uZXJIVE1MOiBgYCB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBEaXYoe1xuICAgICAgICBpbm5lckhUTUw6IGBBbGwgb3RoZXIgaWNvbnMgd2VyZSBjcmVhdGVkIGJ5IG1lIHVzaW5nICR7XG4gICAgICAgICAgQSh7XG4gICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vaW5rc2NhcGUub3JnL1wiLFxuICAgICAgICAgICAgaW5uZXJUZXh0OiBcIklua3NjYXBlXCIsXG4gICAgICAgICAgfSkub3V0ZXJIVE1MXG4gICAgICAgIH0gYW5kIGNvbnZlcnRpbmcgdGhlbSB0byBhIGZvbnQgd2l0aCAke1xuICAgICAgICAgIEEoe1xuICAgICAgICAgICAgaHJlZjogXCJodHRwczovL2ljb21vb24uaW8vXCIsXG4gICAgICAgICAgICBpbm5lclRleHQ6IFwiSWNvTW9vblwiLFxuICAgICAgICAgIH0pLm91dGVySFRNTFxuICAgICAgICB9YCxcbiAgICAgIH0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJY29uc0V4cGxhbmF0aW9uO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEEsIERpdiB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IFRPUENvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgcGFyZW50Q29udGFpbmVyID0gRGl2KFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogYHRvcC1jb250YWluZXJgLFxuICAgICAgaW5uZXJUZXh0OiBcIkluc3BpcmVkIEJ5OlwiLFxuICAgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIEEoe1xuICAgICAgICBocmVmOiBcImh0dHBzOi8vd3d3LnRoZW9kaW5wcm9qZWN0LmNvbS9cIixcbiAgICAgICAgY2xhc3NOYW1lOiBcInRvcC1saW5rXCIsXG4gICAgICAgIGlubmVyVGV4dDogXCJUaGUgT2RpbiBQcm9qZWN0XCIsXG4gICAgICB9KSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYXJlbnRDb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUT1BDb250YWluZXI7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaDEgPSBFbGVtZW50KFwiaDFcIiwgeyBpbm5lclRleHQ6IFwiQmFyY29kZSBHZW5lcmF0b3JcIiB9KTtcblxuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcImJnLWdyYXktZGFyay0zIHRleHQtd2hpdGUgcC0yXCI7XG4gIGNvbnN0IGhlYWRlciA9IEVsZW1lbnQoXG4gICAgXCJoZWFkZXJcIixcbiAgICB7XG4gICAgICBpZDogXCJoZWFkZXJcIixcbiAgICAgIGNsYXNzTmFtZTogXCJoZWFkZXJcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzLFxuICAgIH0sXG4gICAgW2gxXVxuICApO1xuICByZXR1cm4gaGVhZGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IGdlbmVyYXRlVGVzdENvbnRlbnRBcnIgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCBCYXJjb2RlR2VuZXJhdG9yIGZyb20gXCIuLi9CYXJjb2RlR2VuZXJhdG9yL0JhcmNvZGVHZW5lcmF0b3JcIjtcbmltcG9ydCB7IE1haW4sIERpdiB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IE1haW5TZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcIlwiO1xuICBjb25zdCBtYWluID0gTWFpbihcbiAgICB7XG4gICAgICBpZDogXCJtYWluLXNlY3Rpb25cIixcbiAgICAgIGNsYXNzTmFtZTogXCJcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzLFxuICAgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtCYXJjb2RlR2VuZXJhdG9yKCldXG4gICk7XG4gIHJldHVybiBtYWluO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpblNlY3Rpb247XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgQSB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuaW1wb3J0IEV4cGFuZGFibGVQYW5lbFRpdGxlIGZyb20gXCIuL0V4cGFuZGFibGVQYW5lbFRpdGxlXCI7XG5pbXBvcnQgRXhwYW5kYWJsZVBhbmVsQ29udGVudCBmcm9tIFwiLi9FeHBhbmRhYmxlUGFuZWxDb250ZW50XCI7XG5cbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBFeHBhbmRhYmxlUGFuZWwgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgY29tcG9uZW50SWQgPSB1dWlkdjQoKTtcbiAgY29uc3QgeyB0aXRsZSwgY2hpbGRyZW4gfSA9IHByb3BzO1xuXG4gIGNvbnN0IHBhbmVsID0gQShcbiAgICB7IGNsYXNzTmFtZTogYGV4cGFuZGFibGUtcGFuZWxgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIEV4cGFuZGFibGVQYW5lbFRpdGxlKHsgdGl0bGUsIGNvbXBvbmVudElkIH0pLFxuICAgICAgRXhwYW5kYWJsZVBhbmVsQ29udGVudCh7IGNoaWxkcmVuLCBjb21wb25lbnRJZCB9KSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYW5lbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGFuZGFibGVQYW5lbDtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IHsgRGl2IH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgRXhwYW5kYWJsZVBhbmVsQ29udGVudCA9IChwcm9wcykgPT4ge1xuICBsZXQgeyBjaGlsZHJlbiwgY29tcG9uZW50SWQgfSA9IHByb3BzO1xuICBjaGlsZHJlbiA9IGNoaWxkcmVuID8gY2hpbGRyZW4gOiBbXTtcblxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRGl2KFxuICAgIHtcbiAgICAgIGlkOiBgZXhwYW5kYWJsZS1jb250ZW50LSR7Y29tcG9uZW50SWR9YCxcbiAgICAgIGNsYXNzTmFtZTogYGV4cGFuZGFibGUtcGFuZWwtY29udGVudGAsXG4gICAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW0Rpdih7IGNsYXNzTmFtZTogXCJjb250ZW50XCIgfSwgWy4uLmNoaWxkcmVuXSldXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kYWJsZVBhbmVsQ29udGVudDtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBFbGVtZW50LCBCdXR0b24sIERpdiB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG5mdW5jdGlvbiB0b2dnbGVFeHBhbnNpb24oY29tcG9uZW50SWQpIHtcbiAgY29uc3QgZXhwYW5zaW9uQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIGBleHBhbmRhYmxlLWNvbnRlbnQtJHtjb21wb25lbnRJZH1gXG4gICk7XG4gIGNvbnN0IHRvZ2dsZUV4cGFuc2lvbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIGBleHBhbmRhYmxlLWNvbnRlbnQtYnV0dG9uLSR7Y29tcG9uZW50SWR9YFxuICApO1xuICBleHBhbnNpb25Db250ZW50LmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRlZFwiKTtcbiAgdG9nZ2xlRXhwYW5zaW9uQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRlZFwiKTtcbn1cblxuY29uc3QgRXhwYW5kYWJsZVBhbmVsVGl0bGUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB0aXRsZSwgY29tcG9uZW50SWQgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgeyBjbGFzc05hbWU6IGBleHBhbmRhYmxlLXBhbmVsLXRpdGxlYCB9LFxuICAgIFtcbiAgICAgIERpdih7XG4gICAgICAgIGNsYXNzTmFtZTogXCJkaXNwbGF5LWktYlwiLFxuICAgICAgICBpbm5lclRleHQ6IHRpdGxlLFxuICAgICAgICBvbmNsaWNrKCkge1xuICAgICAgICAgIHRvZ2dsZUV4cGFuc2lvbihjb21wb25lbnRJZCk7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIEJ1dHRvbihcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBgZXhwYW5kYWJsZS1jb250ZW50LWJ1dHRvbi0ke2NvbXBvbmVudElkfWAsXG4gICAgICAgICAgb25jbGljaygpIHtcbiAgICAgICAgICAgIHRvZ2dsZUV4cGFuc2lvbihjb21wb25lbnRJZCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW0ljb24oXCJpY29uLXVwLWRvd25cIildXG4gICAgICApLFxuICAgIF1cbiAgKTtcblxuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGFuZGFibGVQYW5lbFRpdGxlO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEEgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBOb25FeHBhbmRhYmxlUGFuZWwgPSAocHJvcHMpID0+IHtcbiAgbGV0IHsgdGl0bGUsIGhyZWYsIGNoaWxkcmVuIH0gPSBwcm9wcztcbiAgY2hpbGRyZW4gPSBjaGlsZHJlbiA/IGNoaWxkcmVuIDogW107XG5cbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcblxuICBjb25zdCBwYW5lbCA9IEEoXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiBgJHtvdGhlckNsYXNzZXN9IG5vbi1leHBhbmRhYmxlLXBhbmVsICR7XG4gICAgICAgIGhyZWYgPyBcImlzLWxpbmtcIiA6IFwiXCJcbiAgICAgIH1gLFxuICAgICAgaW5uZXJUZXh0OiB0aXRsZSxcbiAgICB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbLi4uY2hpbGRyZW5dXG4gICk7XG4gIGlmIChocmVmKSB7XG4gICAgcGFuZWwuaHJlZiA9IGhyZWY7XG4gIH1cbiAgcmV0dXJuIHBhbmVsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTm9uRXhwYW5kYWJsZVBhbmVsO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBJY29uID0gKGljb25DbGFzcykgPT4ge1xuICBjb25zdCBpY29uID0gRWxlbWVudChcImlcIiwgeyBjbGFzc05hbWU6IGBpY29uICR7aWNvbkNsYXNzfSBkaXNwbGF5LWktYmAgfSk7XG4gIHJldHVybiBpY29uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcbiIsIi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIFVUSUxJVElFUyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cbmZ1bmN0aW9uIGdldEFsbENhcm91c2VsU2xpZGVzKCkge1xuICByZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwtdHJhY2tcIikuY2hpbGROb2Rlc107XG59XG5cbmZ1bmN0aW9uIGdldEFsbENhcm91c2VsU2xpZGVJZHMoKSB7XG4gIHJldHVybiBnZXRBbGxDYXJvdXNlbFNsaWRlcygpLm1hcCgoZWxlbSkgPT4gZWxlbS5pZCk7XG59XG5cbmZ1bmN0aW9uIGdldEFsbENhcm91c2VsTmF2QnV0dG9ucygpIHtcbiAgcmV0dXJuIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcm91c2VsLWluZGljYXRvclwiKV07XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRTbGlkZUluZGV4KCkge1xuICBjb25zdCBhbGxTbGlkZUlkcyA9IGdldEFsbENhcm91c2VsU2xpZGVJZHMoKTtcbiAgY29uc3QgY3VycmVudFNsaWRlSWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsLXNsaWRlLmFjdGl2ZVwiKS5pZDtcbiAgY29uc3QgY3VycmVudFNsaWRlSW5kZXggPSBhbGxTbGlkZUlkcy5pbmRleE9mKGN1cnJlbnRTbGlkZUlkKTtcblxuICByZXR1cm4gY3VycmVudFNsaWRlSW5kZXg7XG59XG5cbmZ1bmN0aW9uIGdldFByZXZpb3VzU2xpZGVJbmRleCgpIHtcbiAgbGV0IHByZXZpb3VzU2xpZGVJbmRleCA9IGdldEN1cnJlbnRTbGlkZUluZGV4KCkgLSAxO1xuXG4gIC8vIGlmIHRoZSBjYWxjdWxhdGVkIGluZGV4IGlzIG91dHNpZGUgdGhlIGxpc3QsIHNldCBpdCB0byB0aGUgaW5kZXggb2YgdGhlIGxhc3QgaXRlbSBpbiB0aGUgbGlzdFxuICBjb25zdCBjb3JyZWN0ZWRJbmRleCA9XG4gICAgcHJldmlvdXNTbGlkZUluZGV4IDwgMFxuICAgICAgPyBnZXRBbGxDYXJvdXNlbFNsaWRlSWRzKCkubGVuZ3RoIC0gMVxuICAgICAgOiBwcmV2aW91c1NsaWRlSW5kZXg7XG5cbiAgcmV0dXJuIGNvcnJlY3RlZEluZGV4O1xufVxuXG5mdW5jdGlvbiBnZXROZXh0U2xpZGVJbmRleCgpIHtcbiAgbGV0IG5leHRTbGlkZUluZGV4ID0gZ2V0Q3VycmVudFNsaWRlSW5kZXgoKSArIDE7XG5cbiAgLy8gaWYgdGhlIGNhbGN1bGF0ZWQgaW5kZXggaXMgb3V0c2lkZSB0aGUgbGlzdCwgc2V0IGl0IHRvIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgbGlzdFxuICBjb25zdCBjb3JyZWN0ZWRJbmRleCA9XG4gICAgbmV4dFNsaWRlSW5kZXggPiBnZXRBbGxDYXJvdXNlbFNsaWRlSWRzKCkubGVuZ3RoIC0gMSA/IDAgOiBuZXh0U2xpZGVJbmRleDtcblxuICByZXR1cm4gY29ycmVjdGVkSW5kZXg7XG59XG5cbi8vIG1vdmUgdG8gdGhlIHNlbGVjdGVkIHNsaWRlXG5leHBvcnQgZnVuY3Rpb24gZ290b1NwZWNpZmljU2xpZGUoaWQpIHtcbiAgY29uc3QgYWxsTmF2QnV0dG9ucyA9IGdldEFsbENhcm91c2VsTmF2QnV0dG9ucygpO1xuICBjb25zdCBzZWxlY3RlZE5hdkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjYXJvdXNlbC1uYXYtJHtpZH1gKTtcbiAgY29uc3Qgc2VsZWN0ZWRTbGlkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjYXJvdXNlbC1zbGlkZS0ke2lkfWApO1xuICBjb25zdCBhbGxTbGlkZXMgPSBnZXRBbGxDYXJvdXNlbFNsaWRlcygpO1xuXG4gIGFsbFNsaWRlcy5mb3JFYWNoKChzbGlkZSkgPT4gc2xpZGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG4gIHNlbGVjdGVkU2xpZGUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICBhbGxOYXZCdXR0b25zLmZvckVhY2goKHNsaWRlKSA9PiBzbGlkZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgc2VsZWN0ZWROYXZCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBFVkVOVCBIQU5ETEVSUyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4vLyBtb3ZlIHRvIHRoZSBzZWxlY3RlZCBzbGlkZSB3aGVuIGNsaWNraW5nIG9uIHRoZSBhc3NvY2lhdGVkIG5hdiBidXR0b25cbmV4cG9ydCBmdW5jdGlvbiBjbGlja0Nhcm91c2VsTmF2KGlkKSB7XG4gIGdvdG9TcGVjaWZpY1NsaWRlKGlkKTtcbn1cblxuLy8gbW92ZSByaWdodCB3aGVuIGNsaWNraW5nIG9uIHRoZSByaWdodCBidXR0b25cbmV4cG9ydCBmdW5jdGlvbiBjbGlja0Nhcm91c2VsUmlnaHQoKSB7XG4gIGNvbnN0IGlkID0gZ2V0QWxsQ2Fyb3VzZWxTbGlkZUlkcygpW2dldE5leHRTbGlkZUluZGV4KCldLnJlcGxhY2UoXG4gICAgXCJjYXJvdXNlbC1zbGlkZS1cIixcbiAgICBcIlwiXG4gICk7XG4gIGdvdG9TcGVjaWZpY1NsaWRlKGlkKTtcbn1cblxuLy8gbW92ZSBsZWZ0IHdoZW4gY2xpY2tpbmcgb24gdGhlIHJpZ2h0IGJ1dHRvblxuZXhwb3J0IGZ1bmN0aW9uIGNsaWNrQ2Fyb3VzZWxMZWZ0KCkge1xuICBjb25zdCBpZCA9IGdldEFsbENhcm91c2VsU2xpZGVJZHMoKVtnZXRQcmV2aW91c1NsaWRlSW5kZXgoKV0ucmVwbGFjZShcbiAgICBcImNhcm91c2VsLXNsaWRlLVwiLFxuICAgIFwiXCJcbiAgKTtcbiAgZ290b1NwZWNpZmljU2xpZGUoaWQpO1xufVxuXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgQVVUTyBQUk9HUkVTU0lPTiAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbmV4cG9ydCBmdW5jdGlvbiBjbGlja0Nhcm91c2VsUGxheSgpIHtcbiAgaGFuZGxlQXV0b0FkdmFuY2UoXCJwbGF5XCIpO1xuICBjb25zdCBwbGF5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbCAucGxheS1idXR0b25cIik7XG4gIHBsYXlCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XG5cbiAgY29uc3QgcGF1c2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsIC5wYXVzZS1idXR0b25cIik7XG4gIHBhdXNlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xpY2tDYXJvdXNlbFBhdXNlKCkge1xuICBoYW5kbGVBdXRvQWR2YW5jZShcInBhdXNlXCIpO1xuICBjb25zdCBwbGF5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbCAucGxheS1idXR0b25cIik7XG4gIHBsYXlCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XG5cbiAgY29uc3QgcGF1c2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsIC5wYXVzZS1idXR0b25cIik7XG4gIHBhdXNlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xufVxuXG5sZXQgaW50ZXJ2YWw7XG4vKipcbiAqIEEgZnVuY3Rpb24gdG8gY3JlYXRlIG9yIGNhbmNlbCB0aGUgYXV0byBhZHZhbmNlIHRpbWVyXG4gKiB5b3Ugd2lsbCBuZWV0IHRvIGRlY2xhcmUgaW50ZXJ2YWwgKGxldCBpbnRlcnZhbCkgYmVmb3JlXG4gKiB0aGlzIGZ1bmN0aW9uIHRvIGFsbG93IHRoZSBpbnRlcnZhbCB0byBiZSBjcmVhdGVkIC8gcmVmZW5lbmNlZFxuICogQHBhcmFtIHtzdHJpbmd9IG1vZGUgYSBzdHJpbmcgY29udGFpbmluZyAncGxheScgb3IgJ3BhdXNlJyB0byBpbmRpY2F0ZSB0aGUgbW9kZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQXV0b0FkdmFuY2UobW9kZSkge1xuICBjb25zdCBwbGF5aW5nID0gbW9kZSA9PT0gXCJwbGF5XCIgPyB0cnVlIDogZmFsc2U7XG4gIGlmIChwbGF5aW5nKSB7XG4gICAgLy8gc3RhcnQgYW4gaW50ZXJ2YWwgdGltZXIgYW5kIGNhcHR1cmUgaXRzIHJlZmVyZW5jZVxuICAgIGludGVydmFsID0gd2luZG93LnNldEludGVydmFsKGNsaWNrQ2Fyb3VzZWxSaWdodCwgNTAwMCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gY2FuY2VsIHRoZSByZWZlcmVuY2UgeW91IGNhcHR1cmVkXG4gICAgd2luZG93LmNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9XG59XG4iLCIvKipcbiAqIFRoaXMgRnVuY3Rpb24gYWxsb3dzIHlvdSB0byBjcmVhdGUgYSBkb20gZWxlbWVudCB3aXRoIGl0cyBpbml0aWFsIGF0dHJpYnV0ZXMgYW5kIGNoaWxkIGVsZW1lbnRzIGRlZmluZWQgYnkgYSBwYXNzZWQtaW4gb2JqZWN0IGFuZCBhcnJheSBvZiBjaGlsZCBlbGVtZW50c1xuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVTdHIgdGhlIHRhZyBuYW1lIG9mIHRoZSBlbGVtZW50IHRvIGJlIHJldHVybmVkIHlvdSB3b3VsZCB1c2UgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgpXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNPYmogKG9wdGlvbmFsKSBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgaW5pdGlhbCBwcm9wZXJ0aWVzL2F0dHJpYnV0ZXMgeW91IHdhbnQgdGhlIGVsZW1lbnQgdG8gaGF2ZVxuICogQHBhcmFtIHthcnJheX0gY2hpbGRBcnIgKG9wdGlvbmFsKSBhbiBvZiBlbGVtZW50IG9iamVjdHMgdG8gYmUgYXBwZW5kZWQgYXMgY2hpbGRyZW4gdG8gdGhpcyBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gdGhlIGEgcmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IGNyZWF0ZWQgaW4gbWVtb3J5XG4gKi9cbmV4cG9ydCBjb25zdCBFbGVtZW50ID0gKHR5cGVTdHIsIHByb3BzT2JqLCBjaGlsZEFyciA9IG51bGwpID0+IHtcbiAgLy8gU29tZSBhdHRyaWJ1dGVzIGNhbiBvbmx5IGJlIHNldCB1c2luZyB0aGUgRWxlbWVudC5zZXRBdHRyaWJ1dGUoKSBtZXRob2QuXG4gIC8vIElmIGl0IGlzIGluIHRoZSBwcm9wc09iaiBPYmplY3QuYXNzaWduIHdpbGwgZmFpbC4gV2UnbGwgcmVtb3ZlIGl0IGZyb20gdGhlXG4gIC8vIHByb3BzIG9iamVjdCBoZXJlIGFuZCBhc3NpZ24gdGhlbSB0byB0aGUgcGFyZW50IGVsZW1lbnQgYmVmb3JlIGl0IGlzIHJldHVybmVkLlxuICAvLyBUaGVzZSBhdHRyaWJ1dGVzIHNob3VsZCBiZSBhZGRlZCB0byB0aGUgc2V0QXR0cmlidXRlUHJvcGVydGllcyBsaXN0IGZvciBwcm9jZXNzaW5nLlxuICBsZXQgc2V0QXR0cmlidXRlUHJvcGVydGllcyA9IFtcImxpc3RcIl07XG4gIGxldCBwcm9wZXJ0aWVzID0gW107XG4gIHNldEF0dHJpYnV0ZVByb3BlcnRpZXMuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICBpZiAocHJvcGVydHkgaW4gcHJvcHNPYmopIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNPYmpbcHJvcGVydHldO1xuICAgICAgcHJvcGVydGllcy5wdXNoKHsgbmFtZTogcHJvcGVydHksIHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgIGRlbGV0ZSBwcm9wc09ialtwcm9wZXJ0eV07XG4gICAgfVxuICB9KTtcblxuICAvLyBDcmVhdGUgYW4gZWxlbWVudCBiYXNlZCBvbiB0aGUgdHlwZSBzdHJpbmcgcHJvdmlkZWRcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IE9iamVjdC5hc3NpZ24oXG4gICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlU3RyKSxcbiAgICBwcm9wc09ialxuICApO1xuXG4gIC8vIEFkZCBwYXNzZWQgaW4gY2hpbGQgdG8gYXJyYXkgaWYgaXQgaXMgbm90IGFscmVhZHlcbiAgaWYgKGNoaWxkQXJyICYmICFBcnJheS5pc0FycmF5KGNoaWxkQXJyKSkge1xuICAgIGNoaWxkQXJyID0gW2NoaWxkQXJyXTtcbiAgfVxuXG4gIC8vIEFwcGVuZCBjaGlsZHJlbiB0byB0aGUgZWxlbWVudFxuICBpZiAoY2hpbGRBcnIpIHtcbiAgICBjaGlsZEFyci5mb3JFYWNoKChjaGlsZCkgPT4gcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCkpO1xuICB9XG5cbiAgLy8gQXBwbHkgcHJvcGVydGllcyB3aXRoIHNldEF0dHJpYnV0ZSBpZiBuZWVkZWRcbiAgaWYgKHByb3BlcnRpZXMubGVuZ3RoKSB7XG4gICAgcHJvcGVydGllcy5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgcGFyZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcGVydHkubmFtZSwgcHJvcGVydHkudmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG4vLyAgQ09NTU9OIEVMRU1FTlRTXG5leHBvcnQgY29uc3QgQSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJhXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEFydGljbGUgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiYXJ0aWNsZVwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBCID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImJcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgQm9keSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJib2R5XCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJidXR0b25cIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgQnIgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiYnJcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgRGl2ID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImRpdlwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBEYXRhbGlzdCA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJkYXRhbGlzdFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBGaWVsZHNldCA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJmaWVsZHNldFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBGb290ZXIgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiZm9vdGVyXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEZvcm0gPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiZm9ybVwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBIMSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJoMVwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBIMiA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJoMlwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBIMyA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJoM1wiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaGVhZGVyXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEhyID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImhyXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEkgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaVwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBJbWcgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaW1nXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IElucHV0ID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImlucHV0XCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IExhYmVsID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImxhYmVsXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IExlZ2VuZCA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJsZWdlbmRcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgTGkgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwibGlcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgTWFpbiA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJtYWluXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IE9sID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcIm9sXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IE9wdGlvbiA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJvcHRpb25cIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgUCA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJwXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IFNlbGVjdCA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJzZWxlY3RcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgU3Ryb25nID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcInN0cm9uZ1wiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBTcGFuID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcInNwYW5cIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgU3ZnID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcInN2Z1wiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBUZXh0YXJlYSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBVbCA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJ1bFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG4iLCJleHBvcnQgY29uc3QgZ2l0aHViSW5mbyA9IHtcbiAgcmVwb05hbWU6IFwiYmFyY29kZS1nZW5lcmF0b3JcIixcbn07XG4iLCJpbXBvcnQgeyBhcHBseVdpbmRvd0xpc3RlbmVycyB9IGZyb20gXCIuL3VpLXdpbmRvd1wiO1xuaW1wb3J0IHsgY2xpY2tDYXJvdXNlbFBsYXkgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvSW1hZ2VDYXJvdXNlbC91aS9jYXJvdXNlbC11aVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlJbml0aWFsU3RhdGUoKSB7XG4gIGFwcGx5V2luZG93TGlzdGVuZXJzKCk7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsXCIpKSB7XG4gICAgY2xpY2tDYXJvdXNlbFBsYXkoKTtcbiAgfVxufVxuIiwiaW1wb3J0IEpzQmFyY29kZSBmcm9tIFwianNiYXJjb2RlXCI7XG5cbmltcG9ydCB7IGRlYm91bmNlLCBnZXRJbnB1dFZhbHVlIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQge1xuICBnZW5lcmF0ZUJhcmNvZGUsXG4gIGdldEJhcmNvZGVXaWR0aElucHV0LFxuICBnZXRCYXJjb2RlSGVpZ2h0SW5wdXQsXG59IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0JhcmNvZGVHZW5lcmF0b3IvbG9naWNcIjtcbmltcG9ydCB7IHVwZGF0ZUJhcmNvZGVXaWR0aERpc3BsYXkgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CYXJjb2RlR2VuZXJhdG9yL3VpXCI7XG5cbmNvbnN0IGJyZWFrUG9pbnRzID0ge1xuICB4czogMCxcbiAgc206IDQ4MCxcbiAgbWQ6IDcyMCxcbiAgbGc6IDk2MCxcbiAgeGw6IDEyMDAsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlXaW5kb3dMaXN0ZW5lcnMoKSB7XG4gIHdpbmRvdy5vbnJlc2l6ZSA9IGRlYm91bmNlKGZ1bmN0aW9uIChlKSB7XG4gICAgLy9cbiAgfSk7XG4gIHdpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgLy8gdXBkYXRlQmFyY29kZVdpZHRoRGlzcGxheShnZXRJbnB1dFZhbHVlKGdldEJhcmNvZGVXaWR0aElucHV0KCkpKTtcbiAgICBnZW5lcmF0ZUJhcmNvZGUoKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG5leHBvcnQgY29uc3QgdHJ1bmNhdGVBbmRBZGRFbGxpcHNlID0gKHN0cmluZywgbnVtQ2hhcnNUb0tlZXApID0+IHtcbiAgcmV0dXJuIHN0cmluZy5zbGljZSgwLCBudW1DaGFyc1RvS2VlcCkudHJpbUVuZCgpICsgXCIuLi5cIjtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IGZ1bmN0aW9uIChmbikge1xuICAvLyBzZXR1cCBhIHRpbWVyXG4gIGxldCB0aW1lb3V0O1xuXG4gIC8vIHJldHVybiBhIGZ1bmN0aW9uIHRvIHJ1biBkZWJvdW5jZWRcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAvL3NldHVwIGFyZ3NcblxuICAgIGxldCBjb250ZXh0ID0gdGhpcztcbiAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcblxuICAgIC8vIGlmIHRoZXJlIGlzIGEgdGltZXIgY2FuY2VsIGl0XG4gICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aW1lb3V0KTtcbiAgICB9XG5cbiAgICAvLyBzZXR1cCB0aGUgbmV3IHJlcXVlc3RBbmltYXRpb25GcmFtZSgpXG4gICAgdGltZW91dCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfSk7XG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgaWYgKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmdbMF0udG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xuICB9XG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRlc3RDb250ZW50QXJyKG51bUNoaWxkcmVuKSB7XG4gIHJldHVybiBBcnJheShudW1DaGlsZHJlbilcbiAgICAuZmlsbCgwKVxuICAgIC5tYXAoKGVsZW0pID0+XG4gICAgICBFbGVtZW50KFwicFwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJkaXNwbGF5LWIgbWItMVwiLFxuICAgICAgICBpbm5lclRleHQ6XG4gICAgICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEb2xvciwgdWxsYW0gYWQsIG1heGltZSBlbmltIHNlcXVpIHN1bnQgcXVvIGZhY2lsaXMgaWxsbyBldmVuaWV0IGxhdWRhbnRpdW0gcXVhZSByZXBlbGxlbmR1cyBkb2xvcnVtIG9tbmlzIG1pbmltYSBkdWNpbXVzIGFyY2hpdGVjdG8hIEJlYXRhZSwgdmVsIGFzc3VtZW5kYS5cIixcbiAgICAgIH0pXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pOyAvLyBUaGUgbWF4aW11bSBpcyBleGNsdXNpdmUgYW5kIHRoZSBtaW5pbXVtIGlzIGluY2x1c2l2ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZShpbnB1dEVsZW1lbnQpIHtcbiAgcmV0dXJuIGlucHV0RWxlbWVudC52YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldElucHV0VmFsdWUoaW5wdXRFbGVtZW50LCB2YWx1ZSkge1xuICBpbnB1dEVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9iYXJjb2RlcyA9IHJlcXVpcmUoJy4vYmFyY29kZXMvJyk7XG5cbnZhciBfYmFyY29kZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmFyY29kZXMpO1xuXG52YXIgX21lcmdlID0gcmVxdWlyZSgnLi9oZWxwL21lcmdlLmpzJyk7XG5cbnZhciBfbWVyZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWVyZ2UpO1xuXG52YXIgX2xpbmVhcml6ZUVuY29kaW5ncyA9IHJlcXVpcmUoJy4vaGVscC9saW5lYXJpemVFbmNvZGluZ3MuanMnKTtcblxudmFyIF9saW5lYXJpemVFbmNvZGluZ3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZWFyaXplRW5jb2RpbmdzKTtcblxudmFyIF9maXhPcHRpb25zID0gcmVxdWlyZSgnLi9oZWxwL2ZpeE9wdGlvbnMuanMnKTtcblxudmFyIF9maXhPcHRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZpeE9wdGlvbnMpO1xuXG52YXIgX2dldFJlbmRlclByb3BlcnRpZXMgPSByZXF1aXJlKCcuL2hlbHAvZ2V0UmVuZGVyUHJvcGVydGllcy5qcycpO1xuXG52YXIgX2dldFJlbmRlclByb3BlcnRpZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UmVuZGVyUHJvcGVydGllcyk7XG5cbnZhciBfb3B0aW9uc0Zyb21TdHJpbmdzID0gcmVxdWlyZSgnLi9oZWxwL29wdGlvbnNGcm9tU3RyaW5ncy5qcycpO1xuXG52YXIgX29wdGlvbnNGcm9tU3RyaW5nczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vcHRpb25zRnJvbVN0cmluZ3MpO1xuXG52YXIgX0Vycm9ySGFuZGxlciA9IHJlcXVpcmUoJy4vZXhjZXB0aW9ucy9FcnJvckhhbmRsZXIuanMnKTtcblxudmFyIF9FcnJvckhhbmRsZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRXJyb3JIYW5kbGVyKTtcblxudmFyIF9leGNlcHRpb25zID0gcmVxdWlyZSgnLi9leGNlcHRpb25zL2V4Y2VwdGlvbnMuanMnKTtcblxudmFyIF9kZWZhdWx0cyA9IHJlcXVpcmUoJy4vb3B0aW9ucy9kZWZhdWx0cy5qcycpO1xuXG52YXIgX2RlZmF1bHRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmF1bHRzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gVGhlIHByb3R5cGUgb2YgdGhlIG9iamVjdCByZXR1cm5lZCBmcm9tIHRoZSBKc0JhcmNvZGUoKSBjYWxsXG5cblxuLy8gSGVscCBmdW5jdGlvbnNcbnZhciBBUEkgPSBmdW5jdGlvbiBBUEkoKSB7fTtcblxuLy8gVGhlIGZpcnN0IGNhbGwgb2YgdGhlIGxpYnJhcnkgQVBJXG4vLyBXaWxsIHJldHVybiBhbiBvYmplY3Qgd2l0aCBhbGwgYmFyY29kZXMgY2FsbHMgYW5kIHRoZSBkYXRhIHRoYXQgaXMgdXNlZFxuLy8gYnkgdGhlIHJlbmRlcmVyc1xuXG5cbi8vIERlZmF1bHQgdmFsdWVzXG5cblxuLy8gRXhjZXB0aW9uc1xuLy8gSW1wb3J0IGFsbCB0aGUgYmFyY29kZXNcbnZhciBKc0JhcmNvZGUgPSBmdW5jdGlvbiBKc0JhcmNvZGUoZWxlbWVudCwgdGV4dCwgb3B0aW9ucykge1xuXHR2YXIgYXBpID0gbmV3IEFQSSgpO1xuXG5cdGlmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdHRocm93IEVycm9yKFwiTm8gZWxlbWVudCB0byByZW5kZXIgb24gd2FzIHByb3ZpZGVkLlwiKTtcblx0fVxuXG5cdC8vIFZhcmlhYmxlcyB0aGF0IHdpbGwgYmUgcGFzZWQgdGhyb3VnaCB0aGUgQVBJIGNhbGxzXG5cdGFwaS5fcmVuZGVyUHJvcGVydGllcyA9ICgwLCBfZ2V0UmVuZGVyUHJvcGVydGllczIuZGVmYXVsdCkoZWxlbWVudCk7XG5cdGFwaS5fZW5jb2RpbmdzID0gW107XG5cdGFwaS5fb3B0aW9ucyA9IF9kZWZhdWx0czIuZGVmYXVsdDtcblx0YXBpLl9lcnJvckhhbmRsZXIgPSBuZXcgX0Vycm9ySGFuZGxlcjIuZGVmYXVsdChhcGkpO1xuXG5cdC8vIElmIHRleHQgaXMgc2V0LCB1c2UgdGhlIHNpbXBsZSBzeW50YXggKHJlbmRlciB0aGUgYmFyY29kZSBkaXJlY3RseSlcblx0aWYgKHR5cGVvZiB0ZXh0ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0XHRpZiAoIW9wdGlvbnMuZm9ybWF0KSB7XG5cdFx0XHRvcHRpb25zLmZvcm1hdCA9IGF1dG9TZWxlY3RCYXJjb2RlKCk7XG5cdFx0fVxuXG5cdFx0YXBpLm9wdGlvbnMob3B0aW9ucylbb3B0aW9ucy5mb3JtYXRdKHRleHQsIG9wdGlvbnMpLnJlbmRlcigpO1xuXHR9XG5cblx0cmV0dXJuIGFwaTtcbn07XG5cbi8vIFRvIG1ha2UgdGVzdHMgd29yayBUT0RPOiByZW1vdmVcbkpzQmFyY29kZS5nZXRNb2R1bGUgPSBmdW5jdGlvbiAobmFtZSkge1xuXHRyZXR1cm4gX2JhcmNvZGVzMi5kZWZhdWx0W25hbWVdO1xufTtcblxuLy8gUmVnaXN0ZXIgYWxsIGJhcmNvZGVzXG5mb3IgKHZhciBuYW1lIGluIF9iYXJjb2RlczIuZGVmYXVsdCkge1xuXHRpZiAoX2JhcmNvZGVzMi5kZWZhdWx0Lmhhc093blByb3BlcnR5KG5hbWUpKSB7XG5cdFx0Ly8gU2VjdXJpdHkgY2hlY2sgaWYgdGhlIHByb3BlcnkgaXMgYSBwcm90b3R5cGUgcHJvcGVydHlcblx0XHRyZWdpc3RlckJhcmNvZGUoX2JhcmNvZGVzMi5kZWZhdWx0LCBuYW1lKTtcblx0fVxufVxuZnVuY3Rpb24gcmVnaXN0ZXJCYXJjb2RlKGJhcmNvZGVzLCBuYW1lKSB7XG5cdEFQSS5wcm90b3R5cGVbbmFtZV0gPSBBUEkucHJvdG90eXBlW25hbWUudG9VcHBlckNhc2UoKV0gPSBBUEkucHJvdG90eXBlW25hbWUudG9Mb3dlckNhc2UoKV0gPSBmdW5jdGlvbiAodGV4dCwgb3B0aW9ucykge1xuXHRcdHZhciBhcGkgPSB0aGlzO1xuXHRcdHJldHVybiBhcGkuX2Vycm9ySGFuZGxlci53cmFwQmFyY29kZUNhbGwoZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly8gRW5zdXJlIHRleHQgaXMgb3B0aW9ucy50ZXh0XG5cdFx0XHRvcHRpb25zLnRleHQgPSB0eXBlb2Ygb3B0aW9ucy50ZXh0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6ICcnICsgb3B0aW9ucy50ZXh0O1xuXG5cdFx0XHR2YXIgbmV3T3B0aW9ucyA9ICgwLCBfbWVyZ2UyLmRlZmF1bHQpKGFwaS5fb3B0aW9ucywgb3B0aW9ucyk7XG5cdFx0XHRuZXdPcHRpb25zID0gKDAsIF9vcHRpb25zRnJvbVN0cmluZ3MyLmRlZmF1bHQpKG5ld09wdGlvbnMpO1xuXHRcdFx0dmFyIEVuY29kZXIgPSBiYXJjb2Rlc1tuYW1lXTtcblx0XHRcdHZhciBlbmNvZGVkID0gZW5jb2RlKHRleHQsIEVuY29kZXIsIG5ld09wdGlvbnMpO1xuXHRcdFx0YXBpLl9lbmNvZGluZ3MucHVzaChlbmNvZGVkKTtcblxuXHRcdFx0cmV0dXJuIGFwaTtcblx0XHR9KTtcblx0fTtcbn1cblxuLy8gZW5jb2RlKCkgaGFuZGxlcyB0aGUgRW5jb2RlciBjYWxsIGFuZCBidWlsZHMgdGhlIGJpbmFyeSBzdHJpbmcgdG8gYmUgcmVuZGVyZWRcbmZ1bmN0aW9uIGVuY29kZSh0ZXh0LCBFbmNvZGVyLCBvcHRpb25zKSB7XG5cdC8vIEVuc3VyZSB0aGF0IHRleHQgaXMgYSBzdHJpbmdcblx0dGV4dCA9IFwiXCIgKyB0ZXh0O1xuXG5cdHZhciBlbmNvZGVyID0gbmV3IEVuY29kZXIodGV4dCwgb3B0aW9ucyk7XG5cblx0Ly8gSWYgdGhlIGlucHV0IGlzIG5vdCB2YWxpZCBmb3IgdGhlIGVuY29kZXIsIHRocm93IGVycm9yLlxuXHQvLyBJZiB0aGUgdmFsaWQgY2FsbGJhY2sgb3B0aW9uIGlzIHNldCwgY2FsbCBpdCBpbnN0ZWFkIG9mIHRocm93aW5nIGVycm9yXG5cdGlmICghZW5jb2Rlci52YWxpZCgpKSB7XG5cdFx0dGhyb3cgbmV3IF9leGNlcHRpb25zLkludmFsaWRJbnB1dEV4Y2VwdGlvbihlbmNvZGVyLmNvbnN0cnVjdG9yLm5hbWUsIHRleHQpO1xuXHR9XG5cblx0Ly8gTWFrZSBhIHJlcXVlc3QgZm9yIHRoZSBiaW5hcnkgZGF0YSAoYW5kIG90aGVyIGluZnJvbWF0aW9uKSB0aGF0IHNob3VsZCBiZSByZW5kZXJlZFxuXHR2YXIgZW5jb2RlZCA9IGVuY29kZXIuZW5jb2RlKCk7XG5cblx0Ly8gRW5jb2RpbmdzIGNhbiBiZSBuZXN0bGVkIGxpa2UgW1sxLTEsIDEtMl0sIDIsIFszLTEsIDMtMl1cblx0Ly8gQ29udmVydCB0byBbMS0xLCAxLTIsIDIsIDMtMSwgMy0yXVxuXHRlbmNvZGVkID0gKDAsIF9saW5lYXJpemVFbmNvZGluZ3MyLmRlZmF1bHQpKGVuY29kZWQpO1xuXG5cdC8vIE1lcmdlXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZW5jb2RlZC5sZW5ndGg7IGkrKykge1xuXHRcdGVuY29kZWRbaV0ub3B0aW9ucyA9ICgwLCBfbWVyZ2UyLmRlZmF1bHQpKG9wdGlvbnMsIGVuY29kZWRbaV0ub3B0aW9ucyk7XG5cdH1cblxuXHRyZXR1cm4gZW5jb2RlZDtcbn1cblxuZnVuY3Rpb24gYXV0b1NlbGVjdEJhcmNvZGUoKSB7XG5cdC8vIElmIENPREUxMjggZXhpc3RzLiBVc2UgaXRcblx0aWYgKF9iYXJjb2RlczIuZGVmYXVsdFtcIkNPREUxMjhcIl0pIHtcblx0XHRyZXR1cm4gXCJDT0RFMTI4XCI7XG5cdH1cblxuXHQvLyBFbHNlLCB0YWtlIHRoZSBmaXJzdCAocHJvYmFibHkgb25seSkgYmFyY29kZVxuXHRyZXR1cm4gT2JqZWN0LmtleXMoX2JhcmNvZGVzMi5kZWZhdWx0KVswXTtcbn1cblxuLy8gU2V0cyBnbG9iYWwgZW5jb2RlciBvcHRpb25zXG4vLyBBZGRlZCB0byB0aGUgYXBpIGJ5IHRoZSBKc0JhcmNvZGUgZnVuY3Rpb25cbkFQSS5wcm90b3R5cGUub3B0aW9ucyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdHRoaXMuX29wdGlvbnMgPSAoMCwgX21lcmdlMi5kZWZhdWx0KSh0aGlzLl9vcHRpb25zLCBvcHRpb25zKTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vLyBXaWxsIGNyZWF0ZSBhIGJsYW5rIHNwYWNlICh1c3VhbGx5IGluIGJldHdlZW4gYmFyY29kZXMpXG5BUEkucHJvdG90eXBlLmJsYW5rID0gZnVuY3Rpb24gKHNpemUpIHtcblx0dmFyIHplcm9lcyA9IG5ldyBBcnJheShzaXplICsgMSkuam9pbihcIjBcIik7XG5cdHRoaXMuX2VuY29kaW5ncy5wdXNoKHsgZGF0YTogemVyb2VzIH0pO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8vIEluaXRpYWxpemUgSnNCYXJjb2RlIG9uIGFsbCBIVE1MIGVsZW1lbnRzIGRlZmluZWQuXG5BUEkucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG5cdC8vIFNob3VsZCBkbyBub3RoaW5nIGlmIG5vIGVsZW1lbnRzIHdoZXJlIGZvdW5kXG5cdGlmICghdGhpcy5fcmVuZGVyUHJvcGVydGllcykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIE1ha2Ugc3VyZSByZW5kZXJQcm9wZXJpZXMgaXMgYW4gYXJyYXlcblx0aWYgKCFBcnJheS5pc0FycmF5KHRoaXMuX3JlbmRlclByb3BlcnRpZXMpKSB7XG5cdFx0dGhpcy5fcmVuZGVyUHJvcGVydGllcyA9IFt0aGlzLl9yZW5kZXJQcm9wZXJ0aWVzXTtcblx0fVxuXG5cdHZhciByZW5kZXJQcm9wZXJ0eTtcblx0Zm9yICh2YXIgaSBpbiB0aGlzLl9yZW5kZXJQcm9wZXJ0aWVzKSB7XG5cdFx0cmVuZGVyUHJvcGVydHkgPSB0aGlzLl9yZW5kZXJQcm9wZXJ0aWVzW2ldO1xuXHRcdHZhciBvcHRpb25zID0gKDAsIF9tZXJnZTIuZGVmYXVsdCkodGhpcy5fb3B0aW9ucywgcmVuZGVyUHJvcGVydHkub3B0aW9ucyk7XG5cblx0XHRpZiAob3B0aW9ucy5mb3JtYXQgPT0gXCJhdXRvXCIpIHtcblx0XHRcdG9wdGlvbnMuZm9ybWF0ID0gYXV0b1NlbGVjdEJhcmNvZGUoKTtcblx0XHR9XG5cblx0XHR0aGlzLl9lcnJvckhhbmRsZXIud3JhcEJhcmNvZGVDYWxsKGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciB0ZXh0ID0gb3B0aW9ucy52YWx1ZTtcblx0XHRcdHZhciBFbmNvZGVyID0gX2JhcmNvZGVzMi5kZWZhdWx0W29wdGlvbnMuZm9ybWF0LnRvVXBwZXJDYXNlKCldO1xuXHRcdFx0dmFyIGVuY29kZWQgPSBlbmNvZGUodGV4dCwgRW5jb2Rlciwgb3B0aW9ucyk7XG5cblx0XHRcdHJlbmRlcihyZW5kZXJQcm9wZXJ0eSwgZW5jb2RlZCwgb3B0aW9ucyk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbi8vIFRoZSByZW5kZXIgQVBJIGNhbGwuIENhbGxzIHRoZSByZWFsIHJlbmRlciBmdW5jdGlvbi5cbkFQSS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuXHRpZiAoIXRoaXMuX3JlbmRlclByb3BlcnRpZXMpIHtcblx0XHR0aHJvdyBuZXcgX2V4Y2VwdGlvbnMuTm9FbGVtZW50RXhjZXB0aW9uKCk7XG5cdH1cblxuXHRpZiAoQXJyYXkuaXNBcnJheSh0aGlzLl9yZW5kZXJQcm9wZXJ0aWVzKSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fcmVuZGVyUHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0cmVuZGVyKHRoaXMuX3JlbmRlclByb3BlcnRpZXNbaV0sIHRoaXMuX2VuY29kaW5ncywgdGhpcy5fb3B0aW9ucyk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJlbmRlcih0aGlzLl9yZW5kZXJQcm9wZXJ0aWVzLCB0aGlzLl9lbmNvZGluZ3MsIHRoaXMuX29wdGlvbnMpO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5BUEkucHJvdG90eXBlLl9kZWZhdWx0cyA9IF9kZWZhdWx0czIuZGVmYXVsdDtcblxuLy8gUHJlcGFyZXMgdGhlIGVuY29kaW5ncyBhbmQgY2FsbHMgdGhlIHJlbmRlcmVyXG5mdW5jdGlvbiByZW5kZXIocmVuZGVyUHJvcGVydGllcywgZW5jb2RpbmdzLCBvcHRpb25zKSB7XG5cdGVuY29kaW5ncyA9ICgwLCBfbGluZWFyaXplRW5jb2RpbmdzMi5kZWZhdWx0KShlbmNvZGluZ3MpO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZW5jb2RpbmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0ZW5jb2RpbmdzW2ldLm9wdGlvbnMgPSAoMCwgX21lcmdlMi5kZWZhdWx0KShvcHRpb25zLCBlbmNvZGluZ3NbaV0ub3B0aW9ucyk7XG5cdFx0KDAsIF9maXhPcHRpb25zMi5kZWZhdWx0KShlbmNvZGluZ3NbaV0ub3B0aW9ucyk7XG5cdH1cblxuXHQoMCwgX2ZpeE9wdGlvbnMyLmRlZmF1bHQpKG9wdGlvbnMpO1xuXG5cdHZhciBSZW5kZXJlciA9IHJlbmRlclByb3BlcnRpZXMucmVuZGVyZXI7XG5cdHZhciByZW5kZXJlciA9IG5ldyBSZW5kZXJlcihyZW5kZXJQcm9wZXJ0aWVzLmVsZW1lbnQsIGVuY29kaW5ncywgb3B0aW9ucyk7XG5cdHJlbmRlcmVyLnJlbmRlcigpO1xuXG5cdGlmIChyZW5kZXJQcm9wZXJ0aWVzLmFmdGVyUmVuZGVyKSB7XG5cdFx0cmVuZGVyUHJvcGVydGllcy5hZnRlclJlbmRlcigpO1xuXHR9XG59XG5cbi8vIEV4cG9ydCB0byBicm93c2VyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHR3aW5kb3cuSnNCYXJjb2RlID0gSnNCYXJjb2RlO1xufVxuXG4vLyBFeHBvcnQgdG8galF1ZXJ5XG4vKmdsb2JhbCBqUXVlcnkgKi9cbmlmICh0eXBlb2YgalF1ZXJ5ICE9PSAndW5kZWZpbmVkJykge1xuXHRqUXVlcnkuZm4uSnNCYXJjb2RlID0gZnVuY3Rpb24gKGNvbnRlbnQsIG9wdGlvbnMpIHtcblx0XHR2YXIgZWxlbWVudEFycmF5ID0gW107XG5cdFx0alF1ZXJ5KHRoaXMpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0ZWxlbWVudEFycmF5LnB1c2godGhpcyk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIEpzQmFyY29kZShlbGVtZW50QXJyYXksIGNvbnRlbnQsIG9wdGlvbnMpO1xuXHR9O1xufVxuXG4vLyBFeHBvcnQgdG8gY29tbW9uSlNcbm1vZHVsZS5leHBvcnRzID0gSnNCYXJjb2RlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQmFyY29kZSA9IGZ1bmN0aW9uIEJhcmNvZGUoZGF0YSwgb3B0aW9ucykge1xuXHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgQmFyY29kZSk7XG5cblx0dGhpcy5kYXRhID0gZGF0YTtcblx0dGhpcy50ZXh0ID0gb3B0aW9ucy50ZXh0IHx8IGRhdGE7XG5cdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBCYXJjb2RlOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9CYXJjb2RlMiA9IHJlcXVpcmUoJy4uL0JhcmNvZGUuanMnKTtcblxudmFyIF9CYXJjb2RlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0JhcmNvZGUyKTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8vIFRoaXMgaXMgdGhlIG1hc3RlciBjbGFzcyxcbi8vIGl0IGRvZXMgcmVxdWlyZSB0aGUgc3RhcnQgY29kZSB0byBiZSBpbmNsdWRlZCBpbiB0aGUgc3RyaW5nXG52YXIgQ09ERTEyOCA9IGZ1bmN0aW9uIChfQmFyY29kZSkge1xuXHRfaW5oZXJpdHMoQ09ERTEyOCwgX0JhcmNvZGUpO1xuXG5cdGZ1bmN0aW9uIENPREUxMjgoZGF0YSwgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDT0RFMTI4KTtcblxuXHRcdC8vIEdldCBhcnJheSBvZiBhc2NpaSBjb2RlcyBmcm9tIGRhdGFcblx0XHR2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ09ERTEyOC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENPREUxMjgpKS5jYWxsKHRoaXMsIGRhdGEuc3Vic3RyaW5nKDEpLCBvcHRpb25zKSk7XG5cblx0XHRfdGhpcy5ieXRlcyA9IGRhdGEuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoY2hhcikge1xuXHRcdFx0cmV0dXJuIGNoYXIuY2hhckNvZGVBdCgwKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoQ09ERTEyOCwgW3tcblx0XHRrZXk6ICd2YWxpZCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHZhbGlkKCkge1xuXHRcdFx0Ly8gQVNDSUkgdmFsdWUgcmFuZ2VzIDAtMTI3LCAyMDAtMjExXG5cdFx0XHRyZXR1cm4gKC9eW1xceDAwLVxceDdGXFx4QzgtXFx4RDNdKyQvLnRlc3QodGhpcy5kYXRhKVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBUaGUgcHVibGljIGVuY29kaW5nIGZ1bmN0aW9uXG5cblx0fSwge1xuXHRcdGtleTogJ2VuY29kZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGVuY29kZSgpIHtcblx0XHRcdHZhciBieXRlcyA9IHRoaXMuYnl0ZXM7XG5cdFx0XHQvLyBSZW1vdmUgdGhlIHN0YXJ0IGNvZGUgZnJvbSB0aGUgYnl0ZXMgYW5kIHNldCBpdHMgaW5kZXhcblx0XHRcdHZhciBzdGFydEluZGV4ID0gYnl0ZXMuc2hpZnQoKSAtIDEwNTtcblx0XHRcdC8vIEdldCBzdGFydCBzZXQgYnkgaW5kZXhcblx0XHRcdHZhciBzdGFydFNldCA9IF9jb25zdGFudHMuU0VUX0JZX0NPREVbc3RhcnRJbmRleF07XG5cblx0XHRcdGlmIChzdGFydFNldCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgZW5jb2RpbmcgZG9lcyBub3Qgc3RhcnQgd2l0aCBhIHN0YXJ0IGNoYXJhY3Rlci4nKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuc2hvdWxkRW5jb2RlQXNFYW4xMjgoKSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRieXRlcy51bnNoaWZ0KF9jb25zdGFudHMuRk5DMSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFN0YXJ0IGVuY29kZSB3aXRoIHRoZSByaWdodCB0eXBlXG5cdFx0XHR2YXIgZW5jb2RpbmdSZXN1bHQgPSBDT0RFMTI4Lm5leHQoYnl0ZXMsIDEsIHN0YXJ0U2V0KTtcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dGV4dDogdGhpcy50ZXh0ID09PSB0aGlzLmRhdGEgPyB0aGlzLnRleHQucmVwbGFjZSgvW15cXHgyMC1cXHg3RV0vZywgJycpIDogdGhpcy50ZXh0LFxuXHRcdFx0XHRkYXRhOlxuXHRcdFx0XHQvLyBBZGQgdGhlIHN0YXJ0IGJpdHNcblx0XHRcdFx0Q09ERTEyOC5nZXRCYXIoc3RhcnRJbmRleCkgK1xuXHRcdFx0XHQvLyBBZGQgdGhlIGVuY29kZWQgYml0c1xuXHRcdFx0XHRlbmNvZGluZ1Jlc3VsdC5yZXN1bHQgK1xuXHRcdFx0XHQvLyBBZGQgdGhlIGNoZWNrc3VtXG5cdFx0XHRcdENPREUxMjguZ2V0QmFyKChlbmNvZGluZ1Jlc3VsdC5jaGVja3N1bSArIHN0YXJ0SW5kZXgpICUgX2NvbnN0YW50cy5NT0RVTE8pICtcblx0XHRcdFx0Ly8gQWRkIHRoZSBlbmQgYml0c1xuXHRcdFx0XHRDT0RFMTI4LmdldEJhcihfY29uc3RhbnRzLlNUT1ApXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdC8vIEdTMS0xMjgvRUFOLTEyOFxuXG5cdH0sIHtcblx0XHRrZXk6ICdzaG91bGRFbmNvZGVBc0VhbjEyOCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHNob3VsZEVuY29kZUFzRWFuMTI4KCkge1xuXHRcdFx0dmFyIGlzRUFOMTI4ID0gdGhpcy5vcHRpb25zLmVhbjEyOCB8fCBmYWxzZTtcblx0XHRcdGlmICh0eXBlb2YgaXNFQU4xMjggPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGlzRUFOMTI4ID0gaXNFQU4xMjgudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGlzRUFOMTI4O1xuXHRcdH1cblxuXHRcdC8vIEdldCBhIGJhciBzeW1ib2wgYnkgaW5kZXhcblxuXHR9XSwgW3tcblx0XHRrZXk6ICdnZXRCYXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRCYXIoaW5kZXgpIHtcblx0XHRcdHJldHVybiBfY29uc3RhbnRzLkJBUlNbaW5kZXhdID8gX2NvbnN0YW50cy5CQVJTW2luZGV4XS50b1N0cmluZygpIDogJyc7XG5cdFx0fVxuXG5cdFx0Ly8gQ29ycmVjdCBhbiBpbmRleCBieSBhIHNldCBhbmQgc2hpZnQgaXQgZnJvbSB0aGUgYnl0ZXMgYXJyYXlcblxuXHR9LCB7XG5cdFx0a2V5OiAnY29ycmVjdEluZGV4Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29ycmVjdEluZGV4KGJ5dGVzLCBzZXQpIHtcblx0XHRcdGlmIChzZXQgPT09IF9jb25zdGFudHMuU0VUX0EpIHtcblx0XHRcdFx0dmFyIGNoYXJDb2RlID0gYnl0ZXMuc2hpZnQoKTtcblx0XHRcdFx0cmV0dXJuIGNoYXJDb2RlIDwgMzIgPyBjaGFyQ29kZSArIDY0IDogY2hhckNvZGUgLSAzMjtcblx0XHRcdH0gZWxzZSBpZiAoc2V0ID09PSBfY29uc3RhbnRzLlNFVF9CKSB7XG5cdFx0XHRcdHJldHVybiBieXRlcy5zaGlmdCgpIC0gMzI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gKGJ5dGVzLnNoaWZ0KCkgLSA0OCkgKiAxMCArIGJ5dGVzLnNoaWZ0KCkgLSA0ODtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICduZXh0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gbmV4dChieXRlcywgcG9zLCBzZXQpIHtcblx0XHRcdGlmICghYnl0ZXMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiB7IHJlc3VsdDogJycsIGNoZWNrc3VtOiAwIH07XG5cdFx0XHR9XG5cblx0XHRcdHZhciBuZXh0Q29kZSA9IHZvaWQgMCxcblx0XHRcdCAgICBpbmRleCA9IHZvaWQgMDtcblxuXHRcdFx0Ly8gU3BlY2lhbCBjaGFyYWN0ZXJzXG5cdFx0XHRpZiAoYnl0ZXNbMF0gPj0gMjAwKSB7XG5cdFx0XHRcdGluZGV4ID0gYnl0ZXMuc2hpZnQoKSAtIDEwNTtcblx0XHRcdFx0dmFyIG5leHRTZXQgPSBfY29uc3RhbnRzLlNXQVBbaW5kZXhdO1xuXG5cdFx0XHRcdC8vIFN3YXAgdG8gb3RoZXIgc2V0XG5cdFx0XHRcdGlmIChuZXh0U2V0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRuZXh0Q29kZSA9IENPREUxMjgubmV4dChieXRlcywgcG9zICsgMSwgbmV4dFNldCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gQ29udGludWUgb24gY3VycmVudCBzZXQgYnV0IGVuY29kZSBhIHNwZWNpYWwgY2hhcmFjdGVyXG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gU2hpZnRcblx0XHRcdFx0XHRcdGlmICgoc2V0ID09PSBfY29uc3RhbnRzLlNFVF9BIHx8IHNldCA9PT0gX2NvbnN0YW50cy5TRVRfQikgJiYgaW5kZXggPT09IF9jb25zdGFudHMuU0hJRlQpIHtcblx0XHRcdFx0XHRcdFx0Ly8gQ29udmVydCB0aGUgbmV4dCBjaGFyYWN0ZXIgc28gdGhhdCBpcyBlbmNvZGVkIGNvcnJlY3RseVxuXHRcdFx0XHRcdFx0XHRieXRlc1swXSA9IHNldCA9PT0gX2NvbnN0YW50cy5TRVRfQSA/IGJ5dGVzWzBdID4gOTUgPyBieXRlc1swXSAtIDk2IDogYnl0ZXNbMF0gOiBieXRlc1swXSA8IDMyID8gYnl0ZXNbMF0gKyA5NiA6IGJ5dGVzWzBdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bmV4dENvZGUgPSBDT0RFMTI4Lm5leHQoYnl0ZXMsIHBvcyArIDEsIHNldCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gQ29udGludWUgZW5jb2Rpbmdcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGluZGV4ID0gQ09ERTEyOC5jb3JyZWN0SW5kZXgoYnl0ZXMsIHNldCk7XG5cdFx0XHRcdFx0bmV4dENvZGUgPSBDT0RFMTI4Lm5leHQoYnl0ZXMsIHBvcyArIDEsIHNldCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0Ly8gR2V0IHRoZSBjb3JyZWN0IGJpbmFyeSBlbmNvZGluZyBhbmQgY2FsY3VsYXRlIHRoZSB3ZWlnaHRcblx0XHRcdHZhciBlbmMgPSBDT0RFMTI4LmdldEJhcihpbmRleCk7XG5cdFx0XHR2YXIgd2VpZ2h0ID0gaW5kZXggKiBwb3M7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHJlc3VsdDogZW5jICsgbmV4dENvZGUucmVzdWx0LFxuXHRcdFx0XHRjaGVja3N1bTogd2VpZ2h0ICsgbmV4dENvZGUuY2hlY2tzdW1cblx0XHRcdH07XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIENPREUxMjg7XG59KF9CYXJjb2RlMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ09ERTEyODsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfQ09ERTIgPSByZXF1aXJlKCcuL0NPREUxMjguanMnKTtcblxudmFyIF9DT0RFMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NPREUyKTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDT0RFMTI4QSA9IGZ1bmN0aW9uIChfQ09ERSkge1xuXHRfaW5oZXJpdHMoQ09ERTEyOEEsIF9DT0RFKTtcblxuXHRmdW5jdGlvbiBDT0RFMTI4QShzdHJpbmcsIG9wdGlvbnMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ09ERTEyOEEpO1xuXG5cdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDT0RFMTI4QS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENPREUxMjhBKSkuY2FsbCh0aGlzLCBfY29uc3RhbnRzLkFfU1RBUlRfQ0hBUiArIHN0cmluZywgb3B0aW9ucykpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKENPREUxMjhBLCBbe1xuXHRcdGtleTogJ3ZhbGlkJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gdmFsaWQoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFJlZ0V4cCgnXicgKyBfY29uc3RhbnRzLkFfQ0hBUlMgKyAnKyQnKS50ZXN0KHRoaXMuZGF0YSk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIENPREUxMjhBO1xufShfQ09ERTMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENPREUxMjhBOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9DT0RFMiA9IHJlcXVpcmUoJy4vQ09ERTEyOC5qcycpO1xuXG52YXIgX0NPREUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ09ERTIpO1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENPREUxMjhCID0gZnVuY3Rpb24gKF9DT0RFKSB7XG5cdF9pbmhlcml0cyhDT0RFMTI4QiwgX0NPREUpO1xuXG5cdGZ1bmN0aW9uIENPREUxMjhCKHN0cmluZywgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDT0RFMTI4Qik7XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENPREUxMjhCLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ09ERTEyOEIpKS5jYWxsKHRoaXMsIF9jb25zdGFudHMuQl9TVEFSVF9DSEFSICsgc3RyaW5nLCBvcHRpb25zKSk7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoQ09ERTEyOEIsIFt7XG5cdFx0a2V5OiAndmFsaWQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB2YWxpZCgpIHtcblx0XHRcdHJldHVybiBuZXcgUmVnRXhwKCdeJyArIF9jb25zdGFudHMuQl9DSEFSUyArICcrJCcpLnRlc3QodGhpcy5kYXRhKTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gQ09ERTEyOEI7XG59KF9DT0RFMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ09ERTEyOEI7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX0NPREUyID0gcmVxdWlyZSgnLi9DT0RFMTI4LmpzJyk7XG5cbnZhciBfQ09ERTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DT0RFMik7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ09ERTEyOEMgPSBmdW5jdGlvbiAoX0NPREUpIHtcblx0X2luaGVyaXRzKENPREUxMjhDLCBfQ09ERSk7XG5cblx0ZnVuY3Rpb24gQ09ERTEyOEMoc3RyaW5nLCBvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIENPREUxMjhDKTtcblxuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ09ERTEyOEMuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDT0RFMTI4QykpLmNhbGwodGhpcywgX2NvbnN0YW50cy5DX1NUQVJUX0NIQVIgKyBzdHJpbmcsIG9wdGlvbnMpKTtcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhDT0RFMTI4QywgW3tcblx0XHRrZXk6ICd2YWxpZCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHZhbGlkKCkge1xuXHRcdFx0cmV0dXJuIG5ldyBSZWdFeHAoJ14nICsgX2NvbnN0YW50cy5DX0NIQVJTICsgJyskJykudGVzdCh0aGlzLmRhdGEpO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBDT0RFMTI4Qztcbn0oX0NPREUzLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDT0RFMTI4QzsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfQ09ERTIgPSByZXF1aXJlKCcuL0NPREUxMjgnKTtcblxudmFyIF9DT0RFMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NPREUyKTtcblxudmFyIF9hdXRvID0gcmVxdWlyZSgnLi9hdXRvJyk7XG5cbnZhciBfYXV0bzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hdXRvKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ09ERTEyOEFVVE8gPSBmdW5jdGlvbiAoX0NPREUpIHtcblx0X2luaGVyaXRzKENPREUxMjhBVVRPLCBfQ09ERSk7XG5cblx0ZnVuY3Rpb24gQ09ERTEyOEFVVE8oZGF0YSwgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDT0RFMTI4QVVUTyk7XG5cblx0XHQvLyBBU0NJSSB2YWx1ZSByYW5nZXMgMC0xMjcsIDIwMC0yMTFcblx0XHRpZiAoL15bXFx4MDAtXFx4N0ZcXHhDOC1cXHhEM10rJC8udGVzdChkYXRhKSkge1xuXHRcdFx0dmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENPREUxMjhBVVRPLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ09ERTEyOEFVVE8pKS5jYWxsKHRoaXMsICgwLCBfYXV0bzIuZGVmYXVsdCkoZGF0YSksIG9wdGlvbnMpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENPREUxMjhBVVRPLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ09ERTEyOEFVVE8pKS5jYWxsKHRoaXMsIGRhdGEsIG9wdGlvbnMpKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzKTtcblx0fVxuXG5cdHJldHVybiBDT0RFMTI4QVVUTztcbn0oX0NPREUzLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDT0RFMTI4QVVUTzsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcblxuLy8gTWF0Y2ggU2V0IGZ1bmN0aW9uc1xudmFyIG1hdGNoU2V0QUxlbmd0aCA9IGZ1bmN0aW9uIG1hdGNoU2V0QUxlbmd0aChzdHJpbmcpIHtcblx0cmV0dXJuIHN0cmluZy5tYXRjaChuZXcgUmVnRXhwKCdeJyArIF9jb25zdGFudHMuQV9DSEFSUyArICcqJykpWzBdLmxlbmd0aDtcbn07XG52YXIgbWF0Y2hTZXRCTGVuZ3RoID0gZnVuY3Rpb24gbWF0Y2hTZXRCTGVuZ3RoKHN0cmluZykge1xuXHRyZXR1cm4gc3RyaW5nLm1hdGNoKG5ldyBSZWdFeHAoJ14nICsgX2NvbnN0YW50cy5CX0NIQVJTICsgJyonKSlbMF0ubGVuZ3RoO1xufTtcbnZhciBtYXRjaFNldEMgPSBmdW5jdGlvbiBtYXRjaFNldEMoc3RyaW5nKSB7XG5cdHJldHVybiBzdHJpbmcubWF0Y2gobmV3IFJlZ0V4cCgnXicgKyBfY29uc3RhbnRzLkNfQ0hBUlMgKyAnKicpKVswXTtcbn07XG5cbi8vIENPREUxMjhBIG9yIENPREUxMjhCXG5mdW5jdGlvbiBhdXRvU2VsZWN0RnJvbUFCKHN0cmluZywgaXNBKSB7XG5cdHZhciByYW5nZXMgPSBpc0EgPyBfY29uc3RhbnRzLkFfQ0hBUlMgOiBfY29uc3RhbnRzLkJfQ0hBUlM7XG5cdHZhciB1bnRpbEMgPSBzdHJpbmcubWF0Y2gobmV3IFJlZ0V4cCgnXignICsgcmFuZ2VzICsgJys/KSgoWzAtOV17Mn0pezIsfSkoW14wLTldfCQpJykpO1xuXG5cdGlmICh1bnRpbEMpIHtcblx0XHRyZXR1cm4gdW50aWxDWzFdICsgU3RyaW5nLmZyb21DaGFyQ29kZSgyMDQpICsgYXV0b1NlbGVjdEZyb21DKHN0cmluZy5zdWJzdHJpbmcodW50aWxDWzFdLmxlbmd0aCkpO1xuXHR9XG5cblx0dmFyIGNoYXJzID0gc3RyaW5nLm1hdGNoKG5ldyBSZWdFeHAoJ14nICsgcmFuZ2VzICsgJysnKSlbMF07XG5cblx0aWYgKGNoYXJzLmxlbmd0aCA9PT0gc3RyaW5nLmxlbmd0aCkge1xuXHRcdHJldHVybiBzdHJpbmc7XG5cdH1cblxuXHRyZXR1cm4gY2hhcnMgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGlzQSA/IDIwNSA6IDIwNikgKyBhdXRvU2VsZWN0RnJvbUFCKHN0cmluZy5zdWJzdHJpbmcoY2hhcnMubGVuZ3RoKSwgIWlzQSk7XG59XG5cbi8vIENPREUxMjhDXG5mdW5jdGlvbiBhdXRvU2VsZWN0RnJvbUMoc3RyaW5nKSB7XG5cdHZhciBjTWF0Y2ggPSBtYXRjaFNldEMoc3RyaW5nKTtcblx0dmFyIGxlbmd0aCA9IGNNYXRjaC5sZW5ndGg7XG5cblx0aWYgKGxlbmd0aCA9PT0gc3RyaW5nLmxlbmd0aCkge1xuXHRcdHJldHVybiBzdHJpbmc7XG5cdH1cblxuXHRzdHJpbmcgPSBzdHJpbmcuc3Vic3RyaW5nKGxlbmd0aCk7XG5cblx0Ly8gU2VsZWN0IEEvQiBkZXBlbmRpbmcgb24gdGhlIGxvbmdlc3QgbWF0Y2hcblx0dmFyIGlzQSA9IG1hdGNoU2V0QUxlbmd0aChzdHJpbmcpID49IG1hdGNoU2V0Qkxlbmd0aChzdHJpbmcpO1xuXHRyZXR1cm4gY01hdGNoICsgU3RyaW5nLmZyb21DaGFyQ29kZShpc0EgPyAyMDYgOiAyMDUpICsgYXV0b1NlbGVjdEZyb21BQihzdHJpbmcsIGlzQSk7XG59XG5cbi8vIERldGVjdCBDb2RlIFNldCAoQSwgQiBvciBDKSBhbmQgZm9ybWF0IHRoZSBzdHJpbmdcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHR2YXIgbmV3U3RyaW5nID0gdm9pZCAwO1xuXHR2YXIgY0xlbmd0aCA9IG1hdGNoU2V0QyhzdHJpbmcpLmxlbmd0aDtcblxuXHQvLyBTZWxlY3QgMTI4QyBpZiB0aGUgc3RyaW5nIHN0YXJ0IHdpdGggZW5vdWdoIGRpZ2l0c1xuXHRpZiAoY0xlbmd0aCA+PSAyKSB7XG5cdFx0bmV3U3RyaW5nID0gX2NvbnN0YW50cy5DX1NUQVJUX0NIQVIgKyBhdXRvU2VsZWN0RnJvbUMoc3RyaW5nKTtcblx0fSBlbHNlIHtcblx0XHQvLyBTZWxlY3QgQS9CIGRlcGVuZGluZyBvbiB0aGUgbG9uZ2VzdCBtYXRjaFxuXHRcdHZhciBpc0EgPSBtYXRjaFNldEFMZW5ndGgoc3RyaW5nKSA+IG1hdGNoU2V0Qkxlbmd0aChzdHJpbmcpO1xuXHRcdG5ld1N0cmluZyA9IChpc0EgPyBfY29uc3RhbnRzLkFfU1RBUlRfQ0hBUiA6IF9jb25zdGFudHMuQl9TVEFSVF9DSEFSKSArIGF1dG9TZWxlY3RGcm9tQUIoc3RyaW5nLCBpc0EpO1xuXHR9XG5cblx0cmV0dXJuIG5ld1N0cmluZy5yZXBsYWNlKC9bXFx4Q0RcXHhDRV0oW15dKVtcXHhDRFxceENFXS8sIC8vIEFueSBzZXF1ZW5jZSBiZXR3ZWVuIDIwNSBhbmQgMjA2IGNoYXJhY3RlcnNcblx0ZnVuY3Rpb24gKG1hdGNoLCBjaGFyKSB7XG5cdFx0cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMjAzKSArIGNoYXI7XG5cdH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9TRVRfQllfQ09ERTtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuLy8gY29uc3RhbnRzIGZvciBpbnRlcm5hbCB1c2FnZVxudmFyIFNFVF9BID0gZXhwb3J0cy5TRVRfQSA9IDA7XG52YXIgU0VUX0IgPSBleHBvcnRzLlNFVF9CID0gMTtcbnZhciBTRVRfQyA9IGV4cG9ydHMuU0VUX0MgPSAyO1xuXG4vLyBTcGVjaWFsIGNoYXJhY3RlcnNcbnZhciBTSElGVCA9IGV4cG9ydHMuU0hJRlQgPSA5ODtcbnZhciBTVEFSVF9BID0gZXhwb3J0cy5TVEFSVF9BID0gMTAzO1xudmFyIFNUQVJUX0IgPSBleHBvcnRzLlNUQVJUX0IgPSAxMDQ7XG52YXIgU1RBUlRfQyA9IGV4cG9ydHMuU1RBUlRfQyA9IDEwNTtcbnZhciBNT0RVTE8gPSBleHBvcnRzLk1PRFVMTyA9IDEwMztcbnZhciBTVE9QID0gZXhwb3J0cy5TVE9QID0gMTA2O1xudmFyIEZOQzEgPSBleHBvcnRzLkZOQzEgPSAyMDc7XG5cbi8vIEdldCBzZXQgYnkgc3RhcnQgY29kZVxudmFyIFNFVF9CWV9DT0RFID0gZXhwb3J0cy5TRVRfQllfQ09ERSA9IChfU0VUX0JZX0NPREUgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9TRVRfQllfQ09ERSwgU1RBUlRfQSwgU0VUX0EpLCBfZGVmaW5lUHJvcGVydHkoX1NFVF9CWV9DT0RFLCBTVEFSVF9CLCBTRVRfQiksIF9kZWZpbmVQcm9wZXJ0eShfU0VUX0JZX0NPREUsIFNUQVJUX0MsIFNFVF9DKSwgX1NFVF9CWV9DT0RFKTtcblxuLy8gR2V0IG5leHQgc2V0IGJ5IGNvZGVcbnZhciBTV0FQID0gZXhwb3J0cy5TV0FQID0ge1xuXHQxMDE6IFNFVF9BLFxuXHQxMDA6IFNFVF9CLFxuXHQ5OTogU0VUX0Ncbn07XG5cbnZhciBBX1NUQVJUX0NIQVIgPSBleHBvcnRzLkFfU1RBUlRfQ0hBUiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMjA4KTsgLy8gU1RBUlRfQSArIDEwNVxudmFyIEJfU1RBUlRfQ0hBUiA9IGV4cG9ydHMuQl9TVEFSVF9DSEFSID0gU3RyaW5nLmZyb21DaGFyQ29kZSgyMDkpOyAvLyBTVEFSVF9CICsgMTA1XG52YXIgQ19TVEFSVF9DSEFSID0gZXhwb3J0cy5DX1NUQVJUX0NIQVIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDIxMCk7IC8vIFNUQVJUX0MgKyAxMDVcblxuLy8gMTI4QSAoQ29kZSBTZXQgQSlcbi8vIEFTQ0lJIGNoYXJhY3RlcnMgMDAgdG8gOTUgKDDigJM5LCBB4oCTWiBhbmQgY29udHJvbCBjb2RlcyksIHNwZWNpYWwgY2hhcmFjdGVycywgYW5kIEZOQyAx4oCTNFxudmFyIEFfQ0hBUlMgPSBleHBvcnRzLkFfQ0hBUlMgPSBcIltcXHgwMC1cXHg1RlxceEM4LVxceENGXVwiO1xuXG4vLyAxMjhCIChDb2RlIFNldCBCKVxuLy8gQVNDSUkgY2hhcmFjdGVycyAzMiB0byAxMjcgKDDigJM5LCBB4oCTWiwgYeKAk3opLCBzcGVjaWFsIGNoYXJhY3RlcnMsIGFuZCBGTkMgMeKAkzRcbnZhciBCX0NIQVJTID0gZXhwb3J0cy5CX0NIQVJTID0gXCJbXFx4MjAtXFx4N0ZcXHhDOC1cXHhDRl1cIjtcblxuLy8gMTI4QyAoQ29kZSBTZXQgQylcbi8vIDAw4oCTOTkgKGVuY29kZXMgdHdvIGRpZ2l0cyB3aXRoIGEgc2luZ2xlIGNvZGUgcG9pbnQpIGFuZCBGTkMxXG52YXIgQ19DSEFSUyA9IGV4cG9ydHMuQ19DSEFSUyA9IFwiKFxceENGKlswLTldezJ9XFx4Q0YqKVwiO1xuXG4vLyBDT0RFMTI4IGluY2x1ZGVzIDEwNyBzeW1ib2xzOlxuLy8gMTAzIGRhdGEgc3ltYm9scywgMyBzdGFydCBzeW1ib2xzIChBLCBCIGFuZCBDKSwgYW5kIDEgc3RvcCBzeW1ib2wgKHRoZSBsYXN0IG9uZSlcbi8vIEVhY2ggc3ltYm9sIGNvbnNpc3Qgb2YgdGhyZWUgYmxhY2sgYmFycyAoMSkgYW5kIHRocmVlIHdoaXRlIHNwYWNlcyAoMCkuXG52YXIgQkFSUyA9IGV4cG9ydHMuQkFSUyA9IFsxMTAxMTAwMTEwMCwgMTEwMDExMDExMDAsIDExMDAxMTAwMTEwLCAxMDAxMDAxMTAwMCwgMTAwMTAwMDExMDAsIDEwMDAxMDAxMTAwLCAxMDAxMTAwMTAwMCwgMTAwMTEwMDAxMDAsIDEwMDAxMTAwMTAwLCAxMTAwMTAwMTAwMCwgMTEwMDEwMDAxMDAsIDExMDAwMTAwMTAwLCAxMDExMDAxMTEwMCwgMTAwMTEwMTExMDAsIDEwMDExMDAxMTEwLCAxMDExMTAwMTEwMCwgMTAwMTExMDExMDAsIDEwMDExMTAwMTEwLCAxMTAwMTExMDAxMCwgMTEwMDEwMTExMDAsIDExMDAxMDAxMTEwLCAxMTAxMTEwMDEwMCwgMTEwMDExMTAxMDAsIDExMTAxMTAxMTEwLCAxMTEwMTAwMTEwMCwgMTExMDAxMDExMDAsIDExMTAwMTAwMTEwLCAxMTEwMTEwMDEwMCwgMTExMDAxMTAxMDAsIDExMTAwMTEwMDEwLCAxMTAxMTAxMTAwMCwgMTEwMTEwMDAxMTAsIDExMDAwMTEwMTEwLCAxMDEwMDAxMTAwMCwgMTAwMDEwMTEwMDAsIDEwMDAxMDAwMTEwLCAxMDExMDAwMTAwMCwgMTAwMDExMDEwMDAsIDEwMDAxMTAwMDEwLCAxMTAxMDAwMTAwMCwgMTEwMDAxMDEwMDAsIDExMDAwMTAwMDEwLCAxMDExMDExMTAwMCwgMTAxMTAwMDExMTAsIDEwMDAxMTAxMTEwLCAxMDExMTAxMTAwMCwgMTAxMTEwMDAxMTAsIDEwMDAxMTEwMTEwLCAxMTEwMTExMDExMCwgMTEwMTAwMDExMTAsIDExMDAwMTAxMTEwLCAxMTAxMTEwMTAwMCwgMTEwMTExMDAwMTAsIDExMDExMTAxMTEwLCAxMTEwMTAxMTAwMCwgMTExMDEwMDAxMTAsIDExMTAwMDEwMTEwLCAxMTEwMTEwMTAwMCwgMTExMDExMDAwMTAsIDExMTAwMDExMDEwLCAxMTEwMTExMTAxMCwgMTEwMDEwMDAwMTAsIDExMTEwMDAxMDEwLCAxMDEwMDExMDAwMCwgMTAxMDAwMDExMDAsIDEwMDEwMTEwMDAwLCAxMDAxMDAwMDExMCwgMTAwMDAxMDExMDAsIDEwMDAwMTAwMTEwLCAxMDExMDAxMDAwMCwgMTAxMTAwMDAxMDAsIDEwMDExMDEwMDAwLCAxMDAxMTAwMDAxMCwgMTAwMDAxMTAxMDAsIDEwMDAwMTEwMDEwLCAxMTAwMDAxMDAxMCwgMTEwMDEwMTAwMDAsIDExMTEwMTExMDEwLCAxMTAwMDAxMDEwMCwgMTAwMDExMTEwMTAsIDEwMTAwMTExMTAwLCAxMDAxMDExMTEwMCwgMTAwMTAwMTExMTAsIDEwMTExMTAwMTAwLCAxMDAxMTExMDEwMCwgMTAwMTExMTAwMTAsIDExMTEwMTAwMTAwLCAxMTExMDAxMDEwMCwgMTExMTAwMTAwMTAsIDExMDExMDExMTEwLCAxMTAxMTExMDExMCwgMTExMTAxMTAxMTAsIDEwMTAxMTExMDAwLCAxMDEwMDAxMTExMCwgMTAwMDEwMTExMTAsIDEwMTExMTAxMDAwLCAxMDExMTEwMDAxMCwgMTExMTAxMDEwMDAsIDExMTEwMTAwMDEwLCAxMDExMTAxMTExMCwgMTAxMTExMDExMTAsIDExMTAxMDExMTEwLCAxMTExMDEwMTExMCwgMTEwMTAwMDAxMDAsIDExMDEwMDEwMDAwLCAxMTAxMDAxMTEwMCwgMTEwMDAxMTEwMTAxMV07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5DT0RFMTI4QyA9IGV4cG9ydHMuQ09ERTEyOEIgPSBleHBvcnRzLkNPREUxMjhBID0gZXhwb3J0cy5DT0RFMTI4ID0gdW5kZWZpbmVkO1xuXG52YXIgX0NPREUxMjhfQVVUTyA9IHJlcXVpcmUoJy4vQ09ERTEyOF9BVVRPLmpzJyk7XG5cbnZhciBfQ09ERTEyOF9BVVRPMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NPREUxMjhfQVVUTyk7XG5cbnZhciBfQ09ERTEyOEEgPSByZXF1aXJlKCcuL0NPREUxMjhBLmpzJyk7XG5cbnZhciBfQ09ERTEyOEEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ09ERTEyOEEpO1xuXG52YXIgX0NPREUxMjhCID0gcmVxdWlyZSgnLi9DT0RFMTI4Qi5qcycpO1xuXG52YXIgX0NPREUxMjhCMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NPREUxMjhCKTtcblxudmFyIF9DT0RFMTI4QyA9IHJlcXVpcmUoJy4vQ09ERTEyOEMuanMnKTtcblxudmFyIF9DT0RFMTI4QzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DT0RFMTI4Qyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuQ09ERTEyOCA9IF9DT0RFMTI4X0FVVE8yLmRlZmF1bHQ7XG5leHBvcnRzLkNPREUxMjhBID0gX0NPREUxMjhBMi5kZWZhdWx0O1xuZXhwb3J0cy5DT0RFMTI4QiA9IF9DT0RFMTI4QjIuZGVmYXVsdDtcbmV4cG9ydHMuQ09ERTEyOEMgPSBfQ09ERTEyOEMyLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkNPREUzOSA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9CYXJjb2RlMiA9IHJlcXVpcmUoXCIuLi9CYXJjb2RlLmpzXCIpO1xuXG52YXIgX0JhcmNvZGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQmFyY29kZTIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9IC8vIEVuY29kaW5nIGRvY3VtZW50YXRpb246XG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db2RlXzM5I0VuY29kaW5nXG5cbnZhciBDT0RFMzkgPSBmdW5jdGlvbiAoX0JhcmNvZGUpIHtcblx0X2luaGVyaXRzKENPREUzOSwgX0JhcmNvZGUpO1xuXG5cdGZ1bmN0aW9uIENPREUzOShkYXRhLCBvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIENPREUzOSk7XG5cblx0XHRkYXRhID0gZGF0YS50b1VwcGVyQ2FzZSgpO1xuXG5cdFx0Ly8gQ2FsY3VsYXRlIG1vZDQzIGNoZWNrc3VtIGlmIGVuYWJsZWRcblx0XHRpZiAob3B0aW9ucy5tb2Q0Mykge1xuXHRcdFx0ZGF0YSArPSBnZXRDaGFyYWN0ZXIobW9kNDNjaGVja3N1bShkYXRhKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDT0RFMzkuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDT0RFMzkpKS5jYWxsKHRoaXMsIGRhdGEsIG9wdGlvbnMpKTtcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhDT0RFMzksIFt7XG5cdFx0a2V5OiBcImVuY29kZVwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBlbmNvZGUoKSB7XG5cdFx0XHQvLyBGaXJzdCBjaGFyYWN0ZXIgaXMgYWx3YXlzIGEgKlxuXHRcdFx0dmFyIHJlc3VsdCA9IGdldEVuY29kaW5nKFwiKlwiKTtcblxuXHRcdFx0Ly8gVGFrZSBldmVyeSBjaGFyYWN0ZXIgYW5kIGFkZCB0aGUgYmluYXJ5IHJlcHJlc2VudGF0aW9uIHRvIHRoZSByZXN1bHRcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHJlc3VsdCArPSBnZXRFbmNvZGluZyh0aGlzLmRhdGFbaV0pICsgXCIwXCI7XG5cdFx0XHR9XG5cblx0XHRcdC8vIExhc3QgY2hhcmFjdGVyIGlzIGFsd2F5cyBhICpcblx0XHRcdHJlc3VsdCArPSBnZXRFbmNvZGluZyhcIipcIik7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IHJlc3VsdCxcblx0XHRcdFx0dGV4dDogdGhpcy50ZXh0XG5cdFx0XHR9O1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJ2YWxpZFwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB2YWxpZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmRhdGEuc2VhcmNoKC9eWzAtOUEtWlxcLVxcLlxcIFxcJFxcL1xcK1xcJV0rJC8pICE9PSAtMTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gQ09ERTM5O1xufShfQmFyY29kZTMuZGVmYXVsdCk7XG5cbi8vIEFsbCBjaGFyYWN0ZXJzLiBUaGUgcG9zaXRpb24gaW4gdGhlIGFycmF5IGlzIHRoZSAoY2hlY2tzdW0pIHZhbHVlXG5cblxudmFyIGNoYXJhY3RlcnMgPSBbXCIwXCIsIFwiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIiwgXCJJXCIsIFwiSlwiLCBcIktcIiwgXCJMXCIsIFwiTVwiLCBcIk5cIiwgXCJPXCIsIFwiUFwiLCBcIlFcIiwgXCJSXCIsIFwiU1wiLCBcIlRcIiwgXCJVXCIsIFwiVlwiLCBcIldcIiwgXCJYXCIsIFwiWVwiLCBcIlpcIiwgXCItXCIsIFwiLlwiLCBcIiBcIiwgXCIkXCIsIFwiL1wiLCBcIitcIiwgXCIlXCIsIFwiKlwiXTtcblxuLy8gVGhlIGRlY2ltYWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGNoYXJhY3RlcnMsIGlzIGNvbnZlcnRlZCB0byB0aGVcbi8vIGNvcnJlc3BvbmRpbmcgYmluYXJ5IHdpdGggdGhlIGdldEVuY29kaW5nIGZ1bmN0aW9uXG52YXIgZW5jb2RpbmdzID0gWzIwOTU3LCAyOTc4MywgMjM2MzksIDMwNDg1LCAyMDk1MSwgMjk4MTMsIDIzNjY5LCAyMDg1NSwgMjk3ODksIDIzNjQ1LCAyOTk3NSwgMjM4MzEsIDMwNTMzLCAyMjI5NSwgMzAxNDksIDI0MDA1LCAyMTYyMywgMjk5ODEsIDIzODM3LCAyMjMwMSwgMzAwMjMsIDIzODc5LCAzMDU0NSwgMjIzNDMsIDMwMTYxLCAyNDAxNywgMjE5NTksIDMwMDY1LCAyMzkyMSwgMjIzODUsIDI5MDE1LCAxODI2MywgMjkxNDEsIDE3ODc5LCAyOTA0NSwgMTgyOTMsIDE3NzgzLCAyOTAyMSwgMTgyNjksIDE3NDc3LCAxNzQ4OSwgMTc2ODEsIDIwNzUzLCAzNTc3MF07XG5cbi8vIEdldCB0aGUgYmluYXJ5IHJlcHJlc2VudGF0aW9uIG9mIGEgY2hhcmFjdGVyIGJ5IGNvbnZlcnRpbmcgdGhlIGVuY29kaW5nc1xuLy8gZnJvbSBkZWNpbWFsIHRvIGJpbmFyeVxuZnVuY3Rpb24gZ2V0RW5jb2RpbmcoY2hhcmFjdGVyKSB7XG5cdHJldHVybiBnZXRCaW5hcnkoY2hhcmFjdGVyVmFsdWUoY2hhcmFjdGVyKSk7XG59XG5cbmZ1bmN0aW9uIGdldEJpbmFyeShjaGFyYWN0ZXJWYWx1ZSkge1xuXHRyZXR1cm4gZW5jb2RpbmdzW2NoYXJhY3RlclZhbHVlXS50b1N0cmluZygyKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2hhcmFjdGVyKGNoYXJhY3RlclZhbHVlKSB7XG5cdHJldHVybiBjaGFyYWN0ZXJzW2NoYXJhY3RlclZhbHVlXTtcbn1cblxuZnVuY3Rpb24gY2hhcmFjdGVyVmFsdWUoY2hhcmFjdGVyKSB7XG5cdHJldHVybiBjaGFyYWN0ZXJzLmluZGV4T2YoY2hhcmFjdGVyKTtcbn1cblxuZnVuY3Rpb24gbW9kNDNjaGVja3N1bShkYXRhKSB7XG5cdHZhciBjaGVja3N1bSA9IDA7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdGNoZWNrc3VtICs9IGNoYXJhY3RlclZhbHVlKGRhdGFbaV0pO1xuXHR9XG5cblx0Y2hlY2tzdW0gPSBjaGVja3N1bSAlIDQzO1xuXHRyZXR1cm4gY2hlY2tzdW07XG59XG5cbmV4cG9ydHMuQ09ERTM5ID0gQ09ERTM5OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG52YXIgX2VuY29kZXIgPSByZXF1aXJlKCcuL2VuY29kZXInKTtcblxudmFyIF9lbmNvZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2VuY29kZXIpO1xuXG52YXIgX0JhcmNvZGUyID0gcmVxdWlyZSgnLi4vQmFyY29kZScpO1xuXG52YXIgX0JhcmNvZGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQmFyY29kZTIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8vIEJhc2UgY2xhc3MgZm9yIEVBTjggJiBFQU4xM1xudmFyIEVBTiA9IGZ1bmN0aW9uIChfQmFyY29kZSkge1xuXHRfaW5oZXJpdHMoRUFOLCBfQmFyY29kZSk7XG5cblx0ZnVuY3Rpb24gRUFOKGRhdGEsIG9wdGlvbnMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgRUFOKTtcblxuXHRcdC8vIE1ha2Ugc3VyZSB0aGUgZm9udCBpcyBub3QgYmlnZ2VyIHRoYW4gdGhlIHNwYWNlIGJldHdlZW4gdGhlIGd1YXJkIGJhcnNcblx0XHR2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRUFOLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRUFOKSkuY2FsbCh0aGlzLCBkYXRhLCBvcHRpb25zKSk7XG5cblx0XHRfdGhpcy5mb250U2l6ZSA9ICFvcHRpb25zLmZsYXQgJiYgb3B0aW9ucy5mb250U2l6ZSA+IG9wdGlvbnMud2lkdGggKiAxMCA/IG9wdGlvbnMud2lkdGggKiAxMCA6IG9wdGlvbnMuZm9udFNpemU7XG5cblx0XHQvLyBNYWtlIHRoZSBndWFyZCBiYXJzIGdvIGRvd24gaGFsZiB0aGUgd2F5IG9mIHRoZSB0ZXh0XG5cdFx0X3RoaXMuZ3VhcmRIZWlnaHQgPSBvcHRpb25zLmhlaWdodCArIF90aGlzLmZvbnRTaXplIC8gMiArIG9wdGlvbnMudGV4dE1hcmdpbjtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoRUFOLCBbe1xuXHRcdGtleTogJ2VuY29kZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGVuY29kZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbnMuZmxhdCA/IHRoaXMuZW5jb2RlRmxhdCgpIDogdGhpcy5lbmNvZGVHdWFyZGVkKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnbGVmdFRleHQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBsZWZ0VGV4dChmcm9tLCB0bykge1xuXHRcdFx0cmV0dXJuIHRoaXMudGV4dC5zdWJzdHIoZnJvbSwgdG8pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2xlZnRFbmNvZGUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBsZWZ0RW5jb2RlKGRhdGEsIHN0cnVjdHVyZSkge1xuXHRcdFx0cmV0dXJuICgwLCBfZW5jb2RlcjIuZGVmYXVsdCkoZGF0YSwgc3RydWN0dXJlKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyaWdodFRleHQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByaWdodFRleHQoZnJvbSwgdG8pIHtcblx0XHRcdHJldHVybiB0aGlzLnRleHQuc3Vic3RyKGZyb20sIHRvKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyaWdodEVuY29kZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJpZ2h0RW5jb2RlKGRhdGEsIHN0cnVjdHVyZSkge1xuXHRcdFx0cmV0dXJuICgwLCBfZW5jb2RlcjIuZGVmYXVsdCkoZGF0YSwgc3RydWN0dXJlKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdlbmNvZGVHdWFyZGVkJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZW5jb2RlR3VhcmRlZCgpIHtcblx0XHRcdHZhciB0ZXh0T3B0aW9ucyA9IHsgZm9udFNpemU6IHRoaXMuZm9udFNpemUgfTtcblx0XHRcdHZhciBndWFyZE9wdGlvbnMgPSB7IGhlaWdodDogdGhpcy5ndWFyZEhlaWdodCB9O1xuXG5cdFx0XHRyZXR1cm4gW3sgZGF0YTogX2NvbnN0YW50cy5TSURFX0JJTiwgb3B0aW9uczogZ3VhcmRPcHRpb25zIH0sIHsgZGF0YTogdGhpcy5sZWZ0RW5jb2RlKCksIHRleHQ6IHRoaXMubGVmdFRleHQoKSwgb3B0aW9uczogdGV4dE9wdGlvbnMgfSwgeyBkYXRhOiBfY29uc3RhbnRzLk1JRERMRV9CSU4sIG9wdGlvbnM6IGd1YXJkT3B0aW9ucyB9LCB7IGRhdGE6IHRoaXMucmlnaHRFbmNvZGUoKSwgdGV4dDogdGhpcy5yaWdodFRleHQoKSwgb3B0aW9uczogdGV4dE9wdGlvbnMgfSwgeyBkYXRhOiBfY29uc3RhbnRzLlNJREVfQklOLCBvcHRpb25zOiBndWFyZE9wdGlvbnMgfV07XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZW5jb2RlRmxhdCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGVuY29kZUZsYXQoKSB7XG5cdFx0XHR2YXIgZGF0YSA9IFtfY29uc3RhbnRzLlNJREVfQklOLCB0aGlzLmxlZnRFbmNvZGUoKSwgX2NvbnN0YW50cy5NSURETEVfQklOLCB0aGlzLnJpZ2h0RW5jb2RlKCksIF9jb25zdGFudHMuU0lERV9CSU5dO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhOiBkYXRhLmpvaW4oJycpLFxuXHRcdFx0XHR0ZXh0OiB0aGlzLnRleHRcblx0XHRcdH07XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIEVBTjtcbn0oX0JhcmNvZGUzLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBFQU47IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikgeyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7IH0gfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH07XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcblxudmFyIF9FQU4yID0gcmVxdWlyZSgnLi9FQU4nKTtcblxudmFyIF9FQU4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRUFOMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH0gLy8gRW5jb2RpbmcgZG9jdW1lbnRhdGlvbjpcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0ludGVybmF0aW9uYWxfQXJ0aWNsZV9OdW1iZXJfKEVBTikjQmluYXJ5X2VuY29kaW5nX29mX2RhdGFfZGlnaXRzX2ludG9fRUFOLTEzX2JhcmNvZGVcblxuLy8gQ2FsY3VsYXRlIHRoZSBjaGVja3N1bSBkaWdpdFxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSW50ZXJuYXRpb25hbF9BcnRpY2xlX051bWJlcl8oRUFOKSNDYWxjdWxhdGlvbl9vZl9jaGVja3N1bV9kaWdpdFxudmFyIGNoZWNrc3VtID0gZnVuY3Rpb24gY2hlY2tzdW0obnVtYmVyKSB7XG5cdHZhciByZXMgPSBudW1iZXIuc3Vic3RyKDAsIDEyKS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0cmV0dXJuICtuO1xuXHR9KS5yZWR1Y2UoZnVuY3Rpb24gKHN1bSwgYSwgaWR4KSB7XG5cdFx0cmV0dXJuIGlkeCAlIDIgPyBzdW0gKyBhICogMyA6IHN1bSArIGE7XG5cdH0sIDApO1xuXG5cdHJldHVybiAoMTAgLSByZXMgJSAxMCkgJSAxMDtcbn07XG5cbnZhciBFQU4xMyA9IGZ1bmN0aW9uIChfRUFOKSB7XG5cdF9pbmhlcml0cyhFQU4xMywgX0VBTik7XG5cblx0ZnVuY3Rpb24gRUFOMTMoZGF0YSwgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFQU4xMyk7XG5cblx0XHQvLyBBZGQgY2hlY2tzdW0gaWYgaXQgZG9lcyBub3QgZXhpc3Rcblx0XHRpZiAoZGF0YS5zZWFyY2goL15bMC05XXsxMn0kLykgIT09IC0xKSB7XG5cdFx0XHRkYXRhICs9IGNoZWNrc3VtKGRhdGEpO1xuXHRcdH1cblxuXHRcdC8vIEFkZHMgYSBsYXN0IGNoYXJhY3RlciB0byB0aGUgZW5kIG9mIHRoZSBiYXJjb2RlXG5cdFx0dmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEVBTjEzLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRUFOMTMpKS5jYWxsKHRoaXMsIGRhdGEsIG9wdGlvbnMpKTtcblxuXHRcdF90aGlzLmxhc3RDaGFyID0gb3B0aW9ucy5sYXN0Q2hhcjtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoRUFOMTMsIFt7XG5cdFx0a2V5OiAndmFsaWQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB2YWxpZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmRhdGEuc2VhcmNoKC9eWzAtOV17MTN9JC8pICE9PSAtMSAmJiArdGhpcy5kYXRhWzEyXSA9PT0gY2hlY2tzdW0odGhpcy5kYXRhKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdsZWZ0VGV4dCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGxlZnRUZXh0KCkge1xuXHRcdFx0cmV0dXJuIF9nZXQoRUFOMTMucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRUFOMTMucHJvdG90eXBlKSwgJ2xlZnRUZXh0JywgdGhpcykuY2FsbCh0aGlzLCAxLCA2KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdsZWZ0RW5jb2RlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gbGVmdEVuY29kZSgpIHtcblx0XHRcdHZhciBkYXRhID0gdGhpcy5kYXRhLnN1YnN0cigxLCA2KTtcblx0XHRcdHZhciBzdHJ1Y3R1cmUgPSBfY29uc3RhbnRzLkVBTjEzX1NUUlVDVFVSRVt0aGlzLmRhdGFbMF1dO1xuXHRcdFx0cmV0dXJuIF9nZXQoRUFOMTMucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRUFOMTMucHJvdG90eXBlKSwgJ2xlZnRFbmNvZGUnLCB0aGlzKS5jYWxsKHRoaXMsIGRhdGEsIHN0cnVjdHVyZSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmlnaHRUZXh0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmlnaHRUZXh0KCkge1xuXHRcdFx0cmV0dXJuIF9nZXQoRUFOMTMucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRUFOMTMucHJvdG90eXBlKSwgJ3JpZ2h0VGV4dCcsIHRoaXMpLmNhbGwodGhpcywgNywgNik7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmlnaHRFbmNvZGUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByaWdodEVuY29kZSgpIHtcblx0XHRcdHZhciBkYXRhID0gdGhpcy5kYXRhLnN1YnN0cig3LCA2KTtcblx0XHRcdHJldHVybiBfZ2V0KEVBTjEzLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEVBTjEzLnByb3RvdHlwZSksICdyaWdodEVuY29kZScsIHRoaXMpLmNhbGwodGhpcywgZGF0YSwgJ1JSUlJSUicpO1xuXHRcdH1cblxuXHRcdC8vIFRoZSBcInN0YW5kYXJkXCIgd2F5IG9mIHByaW50aW5nIEVBTjEzIGJhcmNvZGVzIHdpdGggZ3VhcmQgYmFyc1xuXG5cdH0sIHtcblx0XHRrZXk6ICdlbmNvZGVHdWFyZGVkJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZW5jb2RlR3VhcmRlZCgpIHtcblx0XHRcdHZhciBkYXRhID0gX2dldChFQU4xMy5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihFQU4xMy5wcm90b3R5cGUpLCAnZW5jb2RlR3VhcmRlZCcsIHRoaXMpLmNhbGwodGhpcyk7XG5cblx0XHRcdC8vIEV4dGVuZCBkYXRhIHdpdGggbGVmdCBkaWdpdCAmIGxhc3QgY2hhcmFjdGVyXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLmRpc3BsYXlWYWx1ZSkge1xuXHRcdFx0XHRkYXRhLnVuc2hpZnQoe1xuXHRcdFx0XHRcdGRhdGE6ICcwMDAwMDAwMDAwMDAnLFxuXHRcdFx0XHRcdHRleHQ6IHRoaXMudGV4dC5zdWJzdHIoMCwgMSksXG5cdFx0XHRcdFx0b3B0aW9uczogeyB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6IHRoaXMuZm9udFNpemUgfVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLmxhc3RDaGFyKSB7XG5cdFx0XHRcdFx0ZGF0YS5wdXNoKHtcblx0XHRcdFx0XHRcdGRhdGE6ICcwMCdcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRkYXRhLnB1c2goe1xuXHRcdFx0XHRcdFx0ZGF0YTogJzAwMDAwJyxcblx0XHRcdFx0XHRcdHRleHQ6IHRoaXMub3B0aW9ucy5sYXN0Q2hhcixcblx0XHRcdFx0XHRcdG9wdGlvbnM6IHsgZm9udFNpemU6IHRoaXMuZm9udFNpemUgfVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBkYXRhO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBFQU4xMztcbn0oX0VBTjMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEVBTjEzOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG52YXIgX2VuY29kZXIgPSByZXF1aXJlKCcuL2VuY29kZXInKTtcblxudmFyIF9lbmNvZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2VuY29kZXIpO1xuXG52YXIgX0JhcmNvZGUyID0gcmVxdWlyZSgnLi4vQmFyY29kZScpO1xuXG52YXIgX0JhcmNvZGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQmFyY29kZTIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9IC8vIEVuY29kaW5nIGRvY3VtZW50YXRpb246XG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9FQU5fMiNFbmNvZGluZ1xuXG52YXIgRUFOMiA9IGZ1bmN0aW9uIChfQmFyY29kZSkge1xuXHRfaW5oZXJpdHMoRUFOMiwgX0JhcmNvZGUpO1xuXG5cdGZ1bmN0aW9uIEVBTjIoZGF0YSwgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFQU4yKTtcblxuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRUFOMi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEVBTjIpKS5jYWxsKHRoaXMsIGRhdGEsIG9wdGlvbnMpKTtcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhFQU4yLCBbe1xuXHRcdGtleTogJ3ZhbGlkJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gdmFsaWQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kYXRhLnNlYXJjaCgvXlswLTldezJ9JC8pICE9PSAtMTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdlbmNvZGUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBlbmNvZGUoKSB7XG5cdFx0XHQvLyBDaG9vc2UgdGhlIHN0cnVjdHVyZSBiYXNlZCBvbiB0aGUgbnVtYmVyIG1vZCA0XG5cdFx0XHR2YXIgc3RydWN0dXJlID0gX2NvbnN0YW50cy5FQU4yX1NUUlVDVFVSRVtwYXJzZUludCh0aGlzLmRhdGEpICUgNF07XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQvLyBTdGFydCBiaXRzICsgRW5jb2RlIHRoZSB0d28gZGlnaXRzIHdpdGggMDEgaW4gYmV0d2VlblxuXHRcdFx0XHRkYXRhOiAnMTAxMScgKyAoMCwgX2VuY29kZXIyLmRlZmF1bHQpKHRoaXMuZGF0YSwgc3RydWN0dXJlLCAnMDEnKSxcblx0XHRcdFx0dGV4dDogdGhpcy50ZXh0XG5cdFx0XHR9O1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBFQU4yO1xufShfQmFyY29kZTMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEVBTjI7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbnZhciBfZW5jb2RlciA9IHJlcXVpcmUoJy4vZW5jb2RlcicpO1xuXG52YXIgX2VuY29kZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZW5jb2Rlcik7XG5cbnZhciBfQmFyY29kZTIgPSByZXF1aXJlKCcuLi9CYXJjb2RlJyk7XG5cbnZhciBfQmFyY29kZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CYXJjb2RlMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH0gLy8gRW5jb2RpbmcgZG9jdW1lbnRhdGlvbjpcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0VBTl81I0VuY29kaW5nXG5cbnZhciBjaGVja3N1bSA9IGZ1bmN0aW9uIGNoZWNrc3VtKGRhdGEpIHtcblx0dmFyIHJlc3VsdCA9IGRhdGEuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdHJldHVybiArbjtcblx0fSkucmVkdWNlKGZ1bmN0aW9uIChzdW0sIGEsIGlkeCkge1xuXHRcdHJldHVybiBpZHggJSAyID8gc3VtICsgYSAqIDkgOiBzdW0gKyBhICogMztcblx0fSwgMCk7XG5cdHJldHVybiByZXN1bHQgJSAxMDtcbn07XG5cbnZhciBFQU41ID0gZnVuY3Rpb24gKF9CYXJjb2RlKSB7XG5cdF9pbmhlcml0cyhFQU41LCBfQmFyY29kZSk7XG5cblx0ZnVuY3Rpb24gRUFONShkYXRhLCBvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIEVBTjUpO1xuXG5cdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChFQU41Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRUFONSkpLmNhbGwodGhpcywgZGF0YSwgb3B0aW9ucykpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKEVBTjUsIFt7XG5cdFx0a2V5OiAndmFsaWQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB2YWxpZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmRhdGEuc2VhcmNoKC9eWzAtOV17NX0kLykgIT09IC0xO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2VuY29kZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGVuY29kZSgpIHtcblx0XHRcdHZhciBzdHJ1Y3R1cmUgPSBfY29uc3RhbnRzLkVBTjVfU1RSVUNUVVJFW2NoZWNrc3VtKHRoaXMuZGF0YSldO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YTogJzEwMTEnICsgKDAsIF9lbmNvZGVyMi5kZWZhdWx0KSh0aGlzLmRhdGEsIHN0cnVjdHVyZSwgJzAxJyksXG5cdFx0XHRcdHRleHQ6IHRoaXMudGV4dFxuXHRcdFx0fTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gRUFONTtcbn0oX0JhcmNvZGUzLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBFQU41OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQob2JqZWN0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpOyB9IH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9O1xuXG52YXIgX0VBTjIgPSByZXF1aXJlKCcuL0VBTicpO1xuXG52YXIgX0VBTjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FQU4yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvLyBFbmNvZGluZyBkb2N1bWVudGF0aW9uOlxuLy8gaHR0cDovL3d3dy5iYXJjb2RlaXNsYW5kLmNvbS9lYW44LnBodG1sXG5cbi8vIENhbGN1bGF0ZSB0aGUgY2hlY2tzdW0gZGlnaXRcbnZhciBjaGVja3N1bSA9IGZ1bmN0aW9uIGNoZWNrc3VtKG51bWJlcikge1xuXHR2YXIgcmVzID0gbnVtYmVyLnN1YnN0cigwLCA3KS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0cmV0dXJuICtuO1xuXHR9KS5yZWR1Y2UoZnVuY3Rpb24gKHN1bSwgYSwgaWR4KSB7XG5cdFx0cmV0dXJuIGlkeCAlIDIgPyBzdW0gKyBhIDogc3VtICsgYSAqIDM7XG5cdH0sIDApO1xuXG5cdHJldHVybiAoMTAgLSByZXMgJSAxMCkgJSAxMDtcbn07XG5cbnZhciBFQU44ID0gZnVuY3Rpb24gKF9FQU4pIHtcblx0X2luaGVyaXRzKEVBTjgsIF9FQU4pO1xuXG5cdGZ1bmN0aW9uIEVBTjgoZGF0YSwgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFQU44KTtcblxuXHRcdC8vIEFkZCBjaGVja3N1bSBpZiBpdCBkb2VzIG5vdCBleGlzdFxuXHRcdGlmIChkYXRhLnNlYXJjaCgvXlswLTldezd9JC8pICE9PSAtMSkge1xuXHRcdFx0ZGF0YSArPSBjaGVja3N1bShkYXRhKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEVBTjguX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihFQU44KSkuY2FsbCh0aGlzLCBkYXRhLCBvcHRpb25zKSk7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoRUFOOCwgW3tcblx0XHRrZXk6ICd2YWxpZCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHZhbGlkKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGF0YS5zZWFyY2goL15bMC05XXs4fSQvKSAhPT0gLTEgJiYgK3RoaXMuZGF0YVs3XSA9PT0gY2hlY2tzdW0odGhpcy5kYXRhKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdsZWZ0VGV4dCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGxlZnRUZXh0KCkge1xuXHRcdFx0cmV0dXJuIF9nZXQoRUFOOC5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihFQU44LnByb3RvdHlwZSksICdsZWZ0VGV4dCcsIHRoaXMpLmNhbGwodGhpcywgMCwgNCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnbGVmdEVuY29kZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGxlZnRFbmNvZGUoKSB7XG5cdFx0XHR2YXIgZGF0YSA9IHRoaXMuZGF0YS5zdWJzdHIoMCwgNCk7XG5cdFx0XHRyZXR1cm4gX2dldChFQU44LnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEVBTjgucHJvdG90eXBlKSwgJ2xlZnRFbmNvZGUnLCB0aGlzKS5jYWxsKHRoaXMsIGRhdGEsICdMTExMJyk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmlnaHRUZXh0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmlnaHRUZXh0KCkge1xuXHRcdFx0cmV0dXJuIF9nZXQoRUFOOC5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihFQU44LnByb3RvdHlwZSksICdyaWdodFRleHQnLCB0aGlzKS5jYWxsKHRoaXMsIDQsIDQpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JpZ2h0RW5jb2RlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmlnaHRFbmNvZGUoKSB7XG5cdFx0XHR2YXIgZGF0YSA9IHRoaXMuZGF0YS5zdWJzdHIoNCwgNCk7XG5cdFx0XHRyZXR1cm4gX2dldChFQU44LnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEVBTjgucHJvdG90eXBlKSwgJ3JpZ2h0RW5jb2RlJywgdGhpcykuY2FsbCh0aGlzLCBkYXRhLCAnUlJSUicpO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBFQU44O1xufShfRUFOMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRUFOODsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZXhwb3J0cy5jaGVja3N1bSA9IGNoZWNrc3VtO1xuXG52YXIgX2VuY29kZXIgPSByZXF1aXJlKFwiLi9lbmNvZGVyXCIpO1xuXG52YXIgX2VuY29kZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZW5jb2Rlcik7XG5cbnZhciBfQmFyY29kZTIgPSByZXF1aXJlKFwiLi4vQmFyY29kZS5qc1wiKTtcblxudmFyIF9CYXJjb2RlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0JhcmNvZGUyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvLyBFbmNvZGluZyBkb2N1bWVudGF0aW9uOlxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW5pdmVyc2FsX1Byb2R1Y3RfQ29kZSNFbmNvZGluZ1xuXG52YXIgVVBDID0gZnVuY3Rpb24gKF9CYXJjb2RlKSB7XG5cdF9pbmhlcml0cyhVUEMsIF9CYXJjb2RlKTtcblxuXHRmdW5jdGlvbiBVUEMoZGF0YSwgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBVUEMpO1xuXG5cdFx0Ly8gQWRkIGNoZWNrc3VtIGlmIGl0IGRvZXMgbm90IGV4aXN0XG5cdFx0aWYgKGRhdGEuc2VhcmNoKC9eWzAtOV17MTF9JC8pICE9PSAtMSkge1xuXHRcdFx0ZGF0YSArPSBjaGVja3N1bShkYXRhKTtcblx0XHR9XG5cblx0XHR2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoVVBDLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVVBDKSkuY2FsbCh0aGlzLCBkYXRhLCBvcHRpb25zKSk7XG5cblx0XHRfdGhpcy5kaXNwbGF5VmFsdWUgPSBvcHRpb25zLmRpc3BsYXlWYWx1ZTtcblxuXHRcdC8vIE1ha2Ugc3VyZSB0aGUgZm9udCBpcyBub3QgYmlnZ2VyIHRoYW4gdGhlIHNwYWNlIGJldHdlZW4gdGhlIGd1YXJkIGJhcnNcblx0XHRpZiAob3B0aW9ucy5mb250U2l6ZSA+IG9wdGlvbnMud2lkdGggKiAxMCkge1xuXHRcdFx0X3RoaXMuZm9udFNpemUgPSBvcHRpb25zLndpZHRoICogMTA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF90aGlzLmZvbnRTaXplID0gb3B0aW9ucy5mb250U2l6ZTtcblx0XHR9XG5cblx0XHQvLyBNYWtlIHRoZSBndWFyZCBiYXJzIGdvIGRvd24gaGFsZiB0aGUgd2F5IG9mIHRoZSB0ZXh0XG5cdFx0X3RoaXMuZ3VhcmRIZWlnaHQgPSBvcHRpb25zLmhlaWdodCArIF90aGlzLmZvbnRTaXplIC8gMiArIG9wdGlvbnMudGV4dE1hcmdpbjtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoVVBDLCBbe1xuXHRcdGtleTogXCJ2YWxpZFwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB2YWxpZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmRhdGEuc2VhcmNoKC9eWzAtOV17MTJ9JC8pICE9PSAtMSAmJiB0aGlzLmRhdGFbMTFdID09IGNoZWNrc3VtKHRoaXMuZGF0YSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcImVuY29kZVwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBlbmNvZGUoKSB7XG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLmZsYXQpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZmxhdEVuY29kaW5nKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5ndWFyZGVkRW5jb2RpbmcoKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwiZmxhdEVuY29kaW5nXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZsYXRFbmNvZGluZygpIHtcblx0XHRcdHZhciByZXN1bHQgPSBcIlwiO1xuXG5cdFx0XHRyZXN1bHQgKz0gXCIxMDFcIjtcblx0XHRcdHJlc3VsdCArPSAoMCwgX2VuY29kZXIyLmRlZmF1bHQpKHRoaXMuZGF0YS5zdWJzdHIoMCwgNiksIFwiTExMTExMXCIpO1xuXHRcdFx0cmVzdWx0ICs9IFwiMDEwMTBcIjtcblx0XHRcdHJlc3VsdCArPSAoMCwgX2VuY29kZXIyLmRlZmF1bHQpKHRoaXMuZGF0YS5zdWJzdHIoNiwgNiksIFwiUlJSUlJSXCIpO1xuXHRcdFx0cmVzdWx0ICs9IFwiMTAxXCI7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IHJlc3VsdCxcblx0XHRcdFx0dGV4dDogdGhpcy50ZXh0XG5cdFx0XHR9O1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJndWFyZGVkRW5jb2RpbmdcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ3VhcmRlZEVuY29kaW5nKCkge1xuXHRcdFx0dmFyIHJlc3VsdCA9IFtdO1xuXG5cdFx0XHQvLyBBZGQgdGhlIGZpcnN0IGRpZ2l0XG5cdFx0XHRpZiAodGhpcy5kaXNwbGF5VmFsdWUpIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goe1xuXHRcdFx0XHRcdGRhdGE6IFwiMDAwMDAwMDBcIixcblx0XHRcdFx0XHR0ZXh0OiB0aGlzLnRleHQuc3Vic3RyKDAsIDEpLFxuXHRcdFx0XHRcdG9wdGlvbnM6IHsgdGV4dEFsaWduOiBcImxlZnRcIiwgZm9udFNpemU6IHRoaXMuZm9udFNpemUgfVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWRkIHRoZSBndWFyZCBiYXJzXG5cdFx0XHRyZXN1bHQucHVzaCh7XG5cdFx0XHRcdGRhdGE6IFwiMTAxXCIgKyAoMCwgX2VuY29kZXIyLmRlZmF1bHQpKHRoaXMuZGF0YVswXSwgXCJMXCIpLFxuXHRcdFx0XHRvcHRpb25zOiB7IGhlaWdodDogdGhpcy5ndWFyZEhlaWdodCB9XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQWRkIHRoZSBsZWZ0IHNpZGVcblx0XHRcdHJlc3VsdC5wdXNoKHtcblx0XHRcdFx0ZGF0YTogKDAsIF9lbmNvZGVyMi5kZWZhdWx0KSh0aGlzLmRhdGEuc3Vic3RyKDEsIDUpLCBcIkxMTExMXCIpLFxuXHRcdFx0XHR0ZXh0OiB0aGlzLnRleHQuc3Vic3RyKDEsIDUpLFxuXHRcdFx0XHRvcHRpb25zOiB7IGZvbnRTaXplOiB0aGlzLmZvbnRTaXplIH1cblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBBZGQgdGhlIG1pZGRsZSBiaXRzXG5cdFx0XHRyZXN1bHQucHVzaCh7XG5cdFx0XHRcdGRhdGE6IFwiMDEwMTBcIixcblx0XHRcdFx0b3B0aW9uczogeyBoZWlnaHQ6IHRoaXMuZ3VhcmRIZWlnaHQgfVxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEFkZCB0aGUgcmlnaHQgc2lkZVxuXHRcdFx0cmVzdWx0LnB1c2goe1xuXHRcdFx0XHRkYXRhOiAoMCwgX2VuY29kZXIyLmRlZmF1bHQpKHRoaXMuZGF0YS5zdWJzdHIoNiwgNSksIFwiUlJSUlJcIiksXG5cdFx0XHRcdHRleHQ6IHRoaXMudGV4dC5zdWJzdHIoNiwgNSksXG5cdFx0XHRcdG9wdGlvbnM6IHsgZm9udFNpemU6IHRoaXMuZm9udFNpemUgfVxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEFkZCB0aGUgZW5kIGJpdHNcblx0XHRcdHJlc3VsdC5wdXNoKHtcblx0XHRcdFx0ZGF0YTogKDAsIF9lbmNvZGVyMi5kZWZhdWx0KSh0aGlzLmRhdGFbMTFdLCBcIlJcIikgKyBcIjEwMVwiLFxuXHRcdFx0XHRvcHRpb25zOiB7IGhlaWdodDogdGhpcy5ndWFyZEhlaWdodCB9XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQWRkIHRoZSBsYXN0IGRpZ2l0XG5cdFx0XHRpZiAodGhpcy5kaXNwbGF5VmFsdWUpIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goe1xuXHRcdFx0XHRcdGRhdGE6IFwiMDAwMDAwMDBcIixcblx0XHRcdFx0XHR0ZXh0OiB0aGlzLnRleHQuc3Vic3RyKDExLCAxKSxcblx0XHRcdFx0XHRvcHRpb25zOiB7IHRleHRBbGlnbjogXCJyaWdodFwiLCBmb250U2l6ZTogdGhpcy5mb250U2l6ZSB9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBVUEM7XG59KF9CYXJjb2RlMy5kZWZhdWx0KTtcblxuLy8gQ2FsdWxhdGUgdGhlIGNoZWNrc3VtIGRpZ2l0XG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JbnRlcm5hdGlvbmFsX0FydGljbGVfTnVtYmVyXyhFQU4pI0NhbGN1bGF0aW9uX29mX2NoZWNrc3VtX2RpZ2l0XG5cblxuZnVuY3Rpb24gY2hlY2tzdW0obnVtYmVyKSB7XG5cdHZhciByZXN1bHQgPSAwO1xuXG5cdHZhciBpO1xuXHRmb3IgKGkgPSAxOyBpIDwgMTE7IGkgKz0gMikge1xuXHRcdHJlc3VsdCArPSBwYXJzZUludChudW1iZXJbaV0pO1xuXHR9XG5cdGZvciAoaSA9IDA7IGkgPCAxMTsgaSArPSAyKSB7XG5cdFx0cmVzdWx0ICs9IHBhcnNlSW50KG51bWJlcltpXSkgKiAzO1xuXHR9XG5cblx0cmV0dXJuICgxMCAtIHJlc3VsdCAlIDEwKSAlIDEwO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBVUEM7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2VuY29kZXIgPSByZXF1aXJlKCcuL2VuY29kZXInKTtcblxudmFyIF9lbmNvZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2VuY29kZXIpO1xuXG52YXIgX0JhcmNvZGUyID0gcmVxdWlyZSgnLi4vQmFyY29kZS5qcycpO1xuXG52YXIgX0JhcmNvZGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQmFyY29kZTIpO1xuXG52YXIgX1VQQyA9IHJlcXVpcmUoJy4vVVBDLmpzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH0gLy8gRW5jb2RpbmcgZG9jdW1lbnRhdGlvbjpcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VuaXZlcnNhbF9Qcm9kdWN0X0NvZGUjRW5jb2Rpbmdcbi8vXG4vLyBVUEMtRSBkb2N1bWVudGF0aW9uOlxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW5pdmVyc2FsX1Byb2R1Y3RfQ29kZSNVUEMtRVxuXG52YXIgRVhQQU5TSU9OUyA9IFtcIlhYMDAwMDBYWFhcIiwgXCJYWDEwMDAwWFhYXCIsIFwiWFgyMDAwMFhYWFwiLCBcIlhYWDAwMDAwWFhcIiwgXCJYWFhYMDAwMDBYXCIsIFwiWFhYWFgwMDAwNVwiLCBcIlhYWFhYMDAwMDZcIiwgXCJYWFhYWDAwMDA3XCIsIFwiWFhYWFgwMDAwOFwiLCBcIlhYWFhYMDAwMDlcIl07XG5cbnZhciBQQVJJVElFUyA9IFtbXCJFRUVPT09cIiwgXCJPT09FRUVcIl0sIFtcIkVFT0VPT1wiLCBcIk9PRU9FRVwiXSwgW1wiRUVPT0VPXCIsIFwiT09FRU9FXCJdLCBbXCJFRU9PT0VcIiwgXCJPT0VFRU9cIl0sIFtcIkVPRUVPT1wiLCBcIk9FT09FRVwiXSwgW1wiRU9PRUVPXCIsIFwiT0VFT09FXCJdLCBbXCJFT09PRUVcIiwgXCJPRUVFT09cIl0sIFtcIkVPRU9FT1wiLCBcIk9FT0VPRVwiXSwgW1wiRU9FT09FXCIsIFwiT0VPRUVPXCJdLCBbXCJFT09FT0VcIiwgXCJPRUVPRU9cIl1dO1xuXG52YXIgVVBDRSA9IGZ1bmN0aW9uIChfQmFyY29kZSkge1xuXHRfaW5oZXJpdHMoVVBDRSwgX0JhcmNvZGUpO1xuXG5cdGZ1bmN0aW9uIFVQQ0UoZGF0YSwgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBVUENFKTtcblxuXHRcdHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChVUENFLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVVBDRSkpLmNhbGwodGhpcywgZGF0YSwgb3B0aW9ucykpO1xuXHRcdC8vIENvZGUgbWF5IGJlIDYgb3IgOCBkaWdpdHM7XG5cdFx0Ly8gQSA3IGRpZ2l0IGNvZGUgaXMgYW1iaWd1b3VzIGFzIHRvIHdoZXRoZXIgdGhlIGV4dHJhIGRpZ2l0XG5cdFx0Ly8gaXMgYSBVUEMtQSBjaGVjayBvciBudW1iZXIgc3lzdGVtIGRpZ2l0LlxuXG5cblx0XHRfdGhpcy5pc1ZhbGlkID0gZmFsc2U7XG5cdFx0aWYgKGRhdGEuc2VhcmNoKC9eWzAtOV17Nn0kLykgIT09IC0xKSB7XG5cdFx0XHRfdGhpcy5taWRkbGVEaWdpdHMgPSBkYXRhO1xuXHRcdFx0X3RoaXMudXBjQSA9IGV4cGFuZFRvVVBDQShkYXRhLCBcIjBcIik7XG5cdFx0XHRfdGhpcy50ZXh0ID0gb3B0aW9ucy50ZXh0IHx8ICcnICsgX3RoaXMudXBjQVswXSArIGRhdGEgKyBfdGhpcy51cGNBW190aGlzLnVwY0EubGVuZ3RoIC0gMV07XG5cdFx0XHRfdGhpcy5pc1ZhbGlkID0gdHJ1ZTtcblx0XHR9IGVsc2UgaWYgKGRhdGEuc2VhcmNoKC9eWzAxXVswLTldezd9JC8pICE9PSAtMSkge1xuXHRcdFx0X3RoaXMubWlkZGxlRGlnaXRzID0gZGF0YS5zdWJzdHJpbmcoMSwgZGF0YS5sZW5ndGggLSAxKTtcblx0XHRcdF90aGlzLnVwY0EgPSBleHBhbmRUb1VQQ0EoX3RoaXMubWlkZGxlRGlnaXRzLCBkYXRhWzBdKTtcblxuXHRcdFx0aWYgKF90aGlzLnVwY0FbX3RoaXMudXBjQS5sZW5ndGggLSAxXSA9PT0gZGF0YVtkYXRhLmxlbmd0aCAtIDFdKSB7XG5cdFx0XHRcdF90aGlzLmlzVmFsaWQgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gY2hlY2tzdW0gbWlzbWF0Y2hcblx0XHRcdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzKTtcblx0XHR9XG5cblx0XHRfdGhpcy5kaXNwbGF5VmFsdWUgPSBvcHRpb25zLmRpc3BsYXlWYWx1ZTtcblxuXHRcdC8vIE1ha2Ugc3VyZSB0aGUgZm9udCBpcyBub3QgYmlnZ2VyIHRoYW4gdGhlIHNwYWNlIGJldHdlZW4gdGhlIGd1YXJkIGJhcnNcblx0XHRpZiAob3B0aW9ucy5mb250U2l6ZSA+IG9wdGlvbnMud2lkdGggKiAxMCkge1xuXHRcdFx0X3RoaXMuZm9udFNpemUgPSBvcHRpb25zLndpZHRoICogMTA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF90aGlzLmZvbnRTaXplID0gb3B0aW9ucy5mb250U2l6ZTtcblx0XHR9XG5cblx0XHQvLyBNYWtlIHRoZSBndWFyZCBiYXJzIGdvIGRvd24gaGFsZiB0aGUgd2F5IG9mIHRoZSB0ZXh0XG5cdFx0X3RoaXMuZ3VhcmRIZWlnaHQgPSBvcHRpb25zLmhlaWdodCArIF90aGlzLmZvbnRTaXplIC8gMiArIG9wdGlvbnMudGV4dE1hcmdpbjtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoVVBDRSwgW3tcblx0XHRrZXk6ICd2YWxpZCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHZhbGlkKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuaXNWYWxpZDtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdlbmNvZGUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBlbmNvZGUoKSB7XG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLmZsYXQpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZmxhdEVuY29kaW5nKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5ndWFyZGVkRW5jb2RpbmcoKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdmbGF0RW5jb2RpbmcnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmbGF0RW5jb2RpbmcoKSB7XG5cdFx0XHR2YXIgcmVzdWx0ID0gXCJcIjtcblxuXHRcdFx0cmVzdWx0ICs9IFwiMTAxXCI7XG5cdFx0XHRyZXN1bHQgKz0gdGhpcy5lbmNvZGVNaWRkbGVEaWdpdHMoKTtcblx0XHRcdHJlc3VsdCArPSBcIjAxMDEwMVwiO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhOiByZXN1bHQsXG5cdFx0XHRcdHRleHQ6IHRoaXMudGV4dFxuXHRcdFx0fTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdndWFyZGVkRW5jb2RpbmcnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBndWFyZGVkRW5jb2RpbmcoKSB7XG5cdFx0XHR2YXIgcmVzdWx0ID0gW107XG5cblx0XHRcdC8vIEFkZCB0aGUgVVBDLUEgbnVtYmVyIHN5c3RlbSBkaWdpdCBiZW5lYXRoIHRoZSBxdWlldCB6b25lXG5cdFx0XHRpZiAodGhpcy5kaXNwbGF5VmFsdWUpIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goe1xuXHRcdFx0XHRcdGRhdGE6IFwiMDAwMDAwMDBcIixcblx0XHRcdFx0XHR0ZXh0OiB0aGlzLnRleHRbMF0sXG5cdFx0XHRcdFx0b3B0aW9uczogeyB0ZXh0QWxpZ246IFwibGVmdFwiLCBmb250U2l6ZTogdGhpcy5mb250U2l6ZSB9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgdGhlIGd1YXJkIGJhcnNcblx0XHRcdHJlc3VsdC5wdXNoKHtcblx0XHRcdFx0ZGF0YTogXCIxMDFcIixcblx0XHRcdFx0b3B0aW9uczogeyBoZWlnaHQ6IHRoaXMuZ3VhcmRIZWlnaHQgfVxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEFkZCB0aGUgNiBVUEMtRSBkaWdpdHNcblx0XHRcdHJlc3VsdC5wdXNoKHtcblx0XHRcdFx0ZGF0YTogdGhpcy5lbmNvZGVNaWRkbGVEaWdpdHMoKSxcblx0XHRcdFx0dGV4dDogdGhpcy50ZXh0LnN1YnN0cmluZygxLCA3KSxcblx0XHRcdFx0b3B0aW9uczogeyBmb250U2l6ZTogdGhpcy5mb250U2l6ZSB9XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQWRkIHRoZSBlbmQgYml0c1xuXHRcdFx0cmVzdWx0LnB1c2goe1xuXHRcdFx0XHRkYXRhOiBcIjAxMDEwMVwiLFxuXHRcdFx0XHRvcHRpb25zOiB7IGhlaWdodDogdGhpcy5ndWFyZEhlaWdodCB9XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQWRkIHRoZSBVUEMtQSBjaGVjayBkaWdpdCBiZW5lYXRoIHRoZSBxdWlldCB6b25lXG5cdFx0XHRpZiAodGhpcy5kaXNwbGF5VmFsdWUpIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goe1xuXHRcdFx0XHRcdGRhdGE6IFwiMDAwMDAwMDBcIixcblx0XHRcdFx0XHR0ZXh0OiB0aGlzLnRleHRbN10sXG5cdFx0XHRcdFx0b3B0aW9uczogeyB0ZXh0QWxpZ246IFwicmlnaHRcIiwgZm9udFNpemU6IHRoaXMuZm9udFNpemUgfVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdlbmNvZGVNaWRkbGVEaWdpdHMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBlbmNvZGVNaWRkbGVEaWdpdHMoKSB7XG5cdFx0XHR2YXIgbnVtYmVyU3lzdGVtID0gdGhpcy51cGNBWzBdO1xuXHRcdFx0dmFyIGNoZWNrRGlnaXQgPSB0aGlzLnVwY0FbdGhpcy51cGNBLmxlbmd0aCAtIDFdO1xuXHRcdFx0dmFyIHBhcml0eSA9IFBBUklUSUVTW3BhcnNlSW50KGNoZWNrRGlnaXQpXVtwYXJzZUludChudW1iZXJTeXN0ZW0pXTtcblx0XHRcdHJldHVybiAoMCwgX2VuY29kZXIyLmRlZmF1bHQpKHRoaXMubWlkZGxlRGlnaXRzLCBwYXJpdHkpO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBVUENFO1xufShfQmFyY29kZTMuZGVmYXVsdCk7XG5cbmZ1bmN0aW9uIGV4cGFuZFRvVVBDQShtaWRkbGVEaWdpdHMsIG51bWJlclN5c3RlbSkge1xuXHR2YXIgbGFzdFVwY0UgPSBwYXJzZUludChtaWRkbGVEaWdpdHNbbWlkZGxlRGlnaXRzLmxlbmd0aCAtIDFdKTtcblx0dmFyIGV4cGFuc2lvbiA9IEVYUEFOU0lPTlNbbGFzdFVwY0VdO1xuXG5cdHZhciByZXN1bHQgPSBcIlwiO1xuXHR2YXIgZGlnaXRJbmRleCA9IDA7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZXhwYW5zaW9uLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGMgPSBleHBhbnNpb25baV07XG5cdFx0aWYgKGMgPT09ICdYJykge1xuXHRcdFx0cmVzdWx0ICs9IG1pZGRsZURpZ2l0c1tkaWdpdEluZGV4KytdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHQgKz0gYztcblx0XHR9XG5cdH1cblxuXHRyZXN1bHQgPSAnJyArIG51bWJlclN5c3RlbSArIHJlc3VsdDtcblx0cmV0dXJuICcnICsgcmVzdWx0ICsgKDAsIF9VUEMuY2hlY2tzdW0pKHJlc3VsdCk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFVQQ0U7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuLy8gU3RhbmRhcmQgc3RhcnQgZW5kIGFuZCBtaWRkbGUgYml0c1xudmFyIFNJREVfQklOID0gZXhwb3J0cy5TSURFX0JJTiA9ICcxMDEnO1xudmFyIE1JRERMRV9CSU4gPSBleHBvcnRzLk1JRERMRV9CSU4gPSAnMDEwMTAnO1xuXG52YXIgQklOQVJJRVMgPSBleHBvcnRzLkJJTkFSSUVTID0ge1xuXHQnTCc6IFsvLyBUaGUgTCAobGVmdCkgdHlwZSBvZiBlbmNvZGluZ1xuXHQnMDAwMTEwMScsICcwMDExMDAxJywgJzAwMTAwMTEnLCAnMDExMTEwMScsICcwMTAwMDExJywgJzAxMTAwMDEnLCAnMDEwMTExMScsICcwMTExMDExJywgJzAxMTAxMTEnLCAnMDAwMTAxMSddLFxuXHQnRyc6IFsvLyBUaGUgRyB0eXBlIG9mIGVuY29kaW5nXG5cdCcwMTAwMTExJywgJzAxMTAwMTEnLCAnMDAxMTAxMScsICcwMTAwMDAxJywgJzAwMTExMDEnLCAnMDExMTAwMScsICcwMDAwMTAxJywgJzAwMTAwMDEnLCAnMDAwMTAwMScsICcwMDEwMTExJ10sXG5cdCdSJzogWy8vIFRoZSBSIChyaWdodCkgdHlwZSBvZiBlbmNvZGluZ1xuXHQnMTExMDAxMCcsICcxMTAwMTEwJywgJzExMDExMDAnLCAnMTAwMDAxMCcsICcxMDExMTAwJywgJzEwMDExMTAnLCAnMTAxMDAwMCcsICcxMDAwMTAwJywgJzEwMDEwMDAnLCAnMTExMDEwMCddLFxuXHQnTyc6IFsvLyBUaGUgTyAob2RkKSBlbmNvZGluZyBmb3IgVVBDLUVcblx0JzAwMDExMDEnLCAnMDAxMTAwMScsICcwMDEwMDExJywgJzAxMTExMDEnLCAnMDEwMDAxMScsICcwMTEwMDAxJywgJzAxMDExMTEnLCAnMDExMTAxMScsICcwMTEwMTExJywgJzAwMDEwMTEnXSxcblx0J0UnOiBbLy8gVGhlIEUgKGV2ZW4pIGVuY29kaW5nIGZvciBVUEMtRVxuXHQnMDEwMDExMScsICcwMTEwMDExJywgJzAwMTEwMTEnLCAnMDEwMDAwMScsICcwMDExMTAxJywgJzAxMTEwMDEnLCAnMDAwMDEwMScsICcwMDEwMDAxJywgJzAwMDEwMDEnLCAnMDAxMDExMSddXG59O1xuXG4vLyBEZWZpbmUgdGhlIEVBTi0yIHN0cnVjdHVyZVxudmFyIEVBTjJfU1RSVUNUVVJFID0gZXhwb3J0cy5FQU4yX1NUUlVDVFVSRSA9IFsnTEwnLCAnTEcnLCAnR0wnLCAnR0cnXTtcblxuLy8gRGVmaW5lIHRoZSBFQU4tNSBzdHJ1Y3R1cmVcbnZhciBFQU41X1NUUlVDVFVSRSA9IGV4cG9ydHMuRUFONV9TVFJVQ1RVUkUgPSBbJ0dHTExMJywgJ0dMR0xMJywgJ0dMTEdMJywgJ0dMTExHJywgJ0xHR0xMJywgJ0xMR0dMJywgJ0xMTEdHJywgJ0xHTEdMJywgJ0xHTExHJywgJ0xMR0xHJ107XG5cbi8vIERlZmluZSB0aGUgRUFOLTEzIHN0cnVjdHVyZVxudmFyIEVBTjEzX1NUUlVDVFVSRSA9IGV4cG9ydHMuRUFOMTNfU1RSVUNUVVJFID0gWydMTExMTEwnLCAnTExHTEdHJywgJ0xMR0dMRycsICdMTEdHR0wnLCAnTEdMTEdHJywgJ0xHR0xMRycsICdMR0dHTEwnLCAnTEdMR0xHJywgJ0xHTEdHTCcsICdMR0dMR0wnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcblxuLy8gRW5jb2RlIGRhdGEgc3RyaW5nXG52YXIgZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKGRhdGEsIHN0cnVjdHVyZSwgc2VwYXJhdG9yKSB7XG5cdHZhciBlbmNvZGVkID0gZGF0YS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uICh2YWwsIGlkeCkge1xuXHRcdHJldHVybiBfY29uc3RhbnRzLkJJTkFSSUVTW3N0cnVjdHVyZVtpZHhdXTtcblx0fSkubWFwKGZ1bmN0aW9uICh2YWwsIGlkeCkge1xuXHRcdHJldHVybiB2YWwgPyB2YWxbZGF0YVtpZHhdXSA6ICcnO1xuXHR9KTtcblxuXHRpZiAoc2VwYXJhdG9yKSB7XG5cdFx0dmFyIGxhc3QgPSBkYXRhLmxlbmd0aCAtIDE7XG5cdFx0ZW5jb2RlZCA9IGVuY29kZWQubWFwKGZ1bmN0aW9uICh2YWwsIGlkeCkge1xuXHRcdFx0cmV0dXJuIGlkeCA8IGxhc3QgPyB2YWwgKyBzZXBhcmF0b3IgOiB2YWw7XG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gZW5jb2RlZC5qb2luKCcnKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGVuY29kZTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlVQQ0UgPSBleHBvcnRzLlVQQyA9IGV4cG9ydHMuRUFOMiA9IGV4cG9ydHMuRUFONSA9IGV4cG9ydHMuRUFOOCA9IGV4cG9ydHMuRUFOMTMgPSB1bmRlZmluZWQ7XG5cbnZhciBfRUFOID0gcmVxdWlyZSgnLi9FQU4xMy5qcycpO1xuXG52YXIgX0VBTjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FQU4pO1xuXG52YXIgX0VBTjMgPSByZXF1aXJlKCcuL0VBTjguanMnKTtcblxudmFyIF9FQU40ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRUFOMyk7XG5cbnZhciBfRUFONSA9IHJlcXVpcmUoJy4vRUFONS5qcycpO1xuXG52YXIgX0VBTjYgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FQU41KTtcblxudmFyIF9FQU43ID0gcmVxdWlyZSgnLi9FQU4yLmpzJyk7XG5cbnZhciBfRUFOOCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0VBTjcpO1xuXG52YXIgX1VQQyA9IHJlcXVpcmUoJy4vVVBDLmpzJyk7XG5cbnZhciBfVVBDMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1VQQyk7XG5cbnZhciBfVVBDRSA9IHJlcXVpcmUoJy4vVVBDRS5qcycpO1xuXG52YXIgX1VQQ0UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVVBDRSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuRUFOMTMgPSBfRUFOMi5kZWZhdWx0O1xuZXhwb3J0cy5FQU44ID0gX0VBTjQuZGVmYXVsdDtcbmV4cG9ydHMuRUFONSA9IF9FQU42LmRlZmF1bHQ7XG5leHBvcnRzLkVBTjIgPSBfRUFOOC5kZWZhdWx0O1xuZXhwb3J0cy5VUEMgPSBfVVBDMi5kZWZhdWx0O1xuZXhwb3J0cy5VUENFID0gX1VQQ0UyLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkdlbmVyaWNCYXJjb2RlID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX0JhcmNvZGUyID0gcmVxdWlyZShcIi4uL0JhcmNvZGUuanNcIik7XG5cbnZhciBfQmFyY29kZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CYXJjb2RlMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIEdlbmVyaWNCYXJjb2RlID0gZnVuY3Rpb24gKF9CYXJjb2RlKSB7XG5cdF9pbmhlcml0cyhHZW5lcmljQmFyY29kZSwgX0JhcmNvZGUpO1xuXG5cdGZ1bmN0aW9uIEdlbmVyaWNCYXJjb2RlKGRhdGEsIG9wdGlvbnMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgR2VuZXJpY0JhcmNvZGUpO1xuXG5cdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChHZW5lcmljQmFyY29kZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEdlbmVyaWNCYXJjb2RlKSkuY2FsbCh0aGlzLCBkYXRhLCBvcHRpb25zKSk7IC8vIFNldHMgdGhpcy5kYXRhIGFuZCB0aGlzLnRleHRcblx0fVxuXG5cdC8vIFJldHVybiB0aGUgY29ycmVzcG9uZGluZyBiaW5hcnkgbnVtYmVycyBmb3IgdGhlIGRhdGEgcHJvdmlkZWRcblxuXG5cdF9jcmVhdGVDbGFzcyhHZW5lcmljQmFyY29kZSwgW3tcblx0XHRrZXk6IFwiZW5jb2RlXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGVuY29kZSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IFwiMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDFcIixcblx0XHRcdFx0dGV4dDogdGhpcy50ZXh0XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdC8vIFJlc3R1cm4gdHJ1ZS9mYWxzZSBpZiB0aGUgc3RyaW5nIHByb3ZpZGVkIGlzIHZhbGlkIGZvciB0aGlzIGVuY29kZXJcblxuXHR9LCB7XG5cdFx0a2V5OiBcInZhbGlkXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHZhbGlkKCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIEdlbmVyaWNCYXJjb2RlO1xufShfQmFyY29kZTMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuR2VuZXJpY0JhcmNvZGUgPSBHZW5lcmljQmFyY29kZTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcblxudmFyIF9CYXJjb2RlMiA9IHJlcXVpcmUoJy4uL0JhcmNvZGUnKTtcblxudmFyIF9CYXJjb2RlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0JhcmNvZGUyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgSVRGID0gZnVuY3Rpb24gKF9CYXJjb2RlKSB7XG5cdF9pbmhlcml0cyhJVEYsIF9CYXJjb2RlKTtcblxuXHRmdW5jdGlvbiBJVEYoKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIElURik7XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKElURi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKElURikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKElURiwgW3tcblx0XHRrZXk6ICd2YWxpZCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHZhbGlkKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGF0YS5zZWFyY2goL14oWzAtOV17Mn0pKyQvKSAhPT0gLTE7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZW5jb2RlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZW5jb2RlKCkge1xuXHRcdFx0dmFyIF90aGlzMiA9IHRoaXM7XG5cblx0XHRcdC8vIENhbGN1bGF0ZSBhbGwgdGhlIGRpZ2l0IHBhaXJzXG5cdFx0XHR2YXIgZW5jb2RlZCA9IHRoaXMuZGF0YS5tYXRjaCgvLnsyfS9nKS5tYXAoZnVuY3Rpb24gKHBhaXIpIHtcblx0XHRcdFx0cmV0dXJuIF90aGlzMi5lbmNvZGVQYWlyKHBhaXIpO1xuXHRcdFx0fSkuam9pbignJyk7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IF9jb25zdGFudHMuU1RBUlRfQklOICsgZW5jb2RlZCArIF9jb25zdGFudHMuRU5EX0JJTixcblx0XHRcdFx0dGV4dDogdGhpcy50ZXh0XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdC8vIENhbGN1bGF0ZSB0aGUgZGF0YSBvZiBhIG51bWJlciBwYWlyXG5cblx0fSwge1xuXHRcdGtleTogJ2VuY29kZVBhaXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBlbmNvZGVQYWlyKHBhaXIpIHtcblx0XHRcdHZhciBzZWNvbmQgPSBfY29uc3RhbnRzLkJJTkFSSUVTW3BhaXJbMV1dO1xuXG5cdFx0XHRyZXR1cm4gX2NvbnN0YW50cy5CSU5BUklFU1twYWlyWzBdXS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChmaXJzdCwgaWR4KSB7XG5cdFx0XHRcdHJldHVybiAoZmlyc3QgPT09ICcxJyA/ICcxMTEnIDogJzEnKSArIChzZWNvbmRbaWR4XSA9PT0gJzEnID8gJzAwMCcgOiAnMCcpO1xuXHRcdFx0fSkuam9pbignJyk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIElURjtcbn0oX0JhcmNvZGUzLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBJVEY7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX0lURjIgPSByZXF1aXJlKCcuL0lURicpO1xuXG52YXIgX0lURjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JVEYyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vLyBDYWxjdWxhdGUgdGhlIGNoZWNrc3VtIGRpZ2l0XG52YXIgY2hlY2tzdW0gPSBmdW5jdGlvbiBjaGVja3N1bShkYXRhKSB7XG5cdHZhciByZXMgPSBkYXRhLnN1YnN0cigwLCAxMykuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAobnVtKSB7XG5cdFx0cmV0dXJuIHBhcnNlSW50KG51bSwgMTApO1xuXHR9KS5yZWR1Y2UoZnVuY3Rpb24gKHN1bSwgbiwgaWR4KSB7XG5cdFx0cmV0dXJuIHN1bSArIG4gKiAoMyAtIGlkeCAlIDIgKiAyKTtcblx0fSwgMCk7XG5cblx0cmV0dXJuIE1hdGguY2VpbChyZXMgLyAxMCkgKiAxMCAtIHJlcztcbn07XG5cbnZhciBJVEYxNCA9IGZ1bmN0aW9uIChfSVRGKSB7XG5cdF9pbmhlcml0cyhJVEYxNCwgX0lURik7XG5cblx0ZnVuY3Rpb24gSVRGMTQoZGF0YSwgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJVEYxNCk7XG5cblx0XHQvLyBBZGQgY2hlY2tzdW0gaWYgaXQgZG9lcyBub3QgZXhpc3Rcblx0XHRpZiAoZGF0YS5zZWFyY2goL15bMC05XXsxM30kLykgIT09IC0xKSB7XG5cdFx0XHRkYXRhICs9IGNoZWNrc3VtKGRhdGEpO1xuXHRcdH1cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKElURjE0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoSVRGMTQpKS5jYWxsKHRoaXMsIGRhdGEsIG9wdGlvbnMpKTtcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhJVEYxNCwgW3tcblx0XHRrZXk6ICd2YWxpZCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHZhbGlkKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGF0YS5zZWFyY2goL15bMC05XXsxNH0kLykgIT09IC0xICYmICt0aGlzLmRhdGFbMTNdID09PSBjaGVja3N1bSh0aGlzLmRhdGEpO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBJVEYxNDtcbn0oX0lURjMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IElURjE0OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbnZhciBTVEFSVF9CSU4gPSBleHBvcnRzLlNUQVJUX0JJTiA9ICcxMDEwJztcbnZhciBFTkRfQklOID0gZXhwb3J0cy5FTkRfQklOID0gJzExMTAxJztcblxudmFyIEJJTkFSSUVTID0gZXhwb3J0cy5CSU5BUklFUyA9IFsnMDAxMTAnLCAnMTAwMDEnLCAnMDEwMDEnLCAnMTEwMDAnLCAnMDAxMDEnLCAnMTAxMDAnLCAnMDExMDAnLCAnMDAwMTEnLCAnMTAwMTAnLCAnMDEwMTAnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLklURjE0ID0gZXhwb3J0cy5JVEYgPSB1bmRlZmluZWQ7XG5cbnZhciBfSVRGID0gcmVxdWlyZSgnLi9JVEYnKTtcblxudmFyIF9JVEYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSVRGKTtcblxudmFyIF9JVEYzID0gcmVxdWlyZSgnLi9JVEYxNCcpO1xuXG52YXIgX0lURjQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JVEYzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5JVEYgPSBfSVRGMi5kZWZhdWx0O1xuZXhwb3J0cy5JVEYxNCA9IF9JVEY0LmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfQmFyY29kZTIgPSByZXF1aXJlKFwiLi4vQmFyY29kZS5qc1wiKTtcblxudmFyIF9CYXJjb2RlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0JhcmNvZGUyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvLyBFbmNvZGluZyBkb2N1bWVudGF0aW9uXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9NU0lfQmFyY29kZSNDaGFyYWN0ZXJfc2V0X2FuZF9iaW5hcnlfbG9va3VwXG5cbnZhciBNU0kgPSBmdW5jdGlvbiAoX0JhcmNvZGUpIHtcblx0X2luaGVyaXRzKE1TSSwgX0JhcmNvZGUpO1xuXG5cdGZ1bmN0aW9uIE1TSShkYXRhLCBvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1TSSk7XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE1TSS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE1TSSkpLmNhbGwodGhpcywgZGF0YSwgb3B0aW9ucykpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKE1TSSwgW3tcblx0XHRrZXk6IFwiZW5jb2RlXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGVuY29kZSgpIHtcblx0XHRcdC8vIFN0YXJ0IGJpdHNcblx0XHRcdHZhciByZXQgPSBcIjExMFwiO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHQvLyBDb252ZXJ0IHRoZSBjaGFyYWN0ZXIgdG8gYmluYXJ5IChhbHdheXMgNCBiaW5hcnkgZGlnaXRzKVxuXHRcdFx0XHR2YXIgZGlnaXQgPSBwYXJzZUludCh0aGlzLmRhdGFbaV0pO1xuXHRcdFx0XHR2YXIgYmluID0gZGlnaXQudG9TdHJpbmcoMik7XG5cdFx0XHRcdGJpbiA9IGFkZFplcm9lcyhiaW4sIDQgLSBiaW4ubGVuZ3RoKTtcblxuXHRcdFx0XHQvLyBBZGQgMTAwIGZvciBldmVyeSB6ZXJvIGFuZCAxMTAgZm9yIGV2ZXJ5IDFcblx0XHRcdFx0Zm9yICh2YXIgYiA9IDA7IGIgPCBiaW4ubGVuZ3RoOyBiKyspIHtcblx0XHRcdFx0XHRyZXQgKz0gYmluW2JdID09IFwiMFwiID8gXCIxMDBcIiA6IFwiMTEwXCI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gRW5kIGJpdHNcblx0XHRcdHJldCArPSBcIjEwMDFcIjtcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YTogcmV0LFxuXHRcdFx0XHR0ZXh0OiB0aGlzLnRleHRcblx0XHRcdH07XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcInZhbGlkXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHZhbGlkKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGF0YS5zZWFyY2goL15bMC05XSskLykgIT09IC0xO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBNU0k7XG59KF9CYXJjb2RlMy5kZWZhdWx0KTtcblxuZnVuY3Rpb24gYWRkWmVyb2VzKG51bWJlciwgbikge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IG47IGkrKykge1xuXHRcdG51bWJlciA9IFwiMFwiICsgbnVtYmVyO1xuXHR9XG5cdHJldHVybiBudW1iZXI7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1TSTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfTVNJMiA9IHJlcXVpcmUoJy4vTVNJLmpzJyk7XG5cbnZhciBfTVNJMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01TSTIpO1xuXG52YXIgX2NoZWNrc3VtcyA9IHJlcXVpcmUoJy4vY2hlY2tzdW1zLmpzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIE1TSTEwID0gZnVuY3Rpb24gKF9NU0kpIHtcblx0X2luaGVyaXRzKE1TSTEwLCBfTVNJKTtcblxuXHRmdW5jdGlvbiBNU0kxMChkYXRhLCBvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1TSTEwKTtcblxuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTVNJMTAuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihNU0kxMCkpLmNhbGwodGhpcywgZGF0YSArICgwLCBfY2hlY2tzdW1zLm1vZDEwKShkYXRhKSwgb3B0aW9ucykpO1xuXHR9XG5cblx0cmV0dXJuIE1TSTEwO1xufShfTVNJMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTVNJMTA7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX01TSTIgPSByZXF1aXJlKCcuL01TSS5qcycpO1xuXG52YXIgX01TSTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NU0kyKTtcblxudmFyIF9jaGVja3N1bXMgPSByZXF1aXJlKCcuL2NoZWNrc3Vtcy5qcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBNU0kxMDEwID0gZnVuY3Rpb24gKF9NU0kpIHtcblx0X2luaGVyaXRzKE1TSTEwMTAsIF9NU0kpO1xuXG5cdGZ1bmN0aW9uIE1TSTEwMTAoZGF0YSwgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNU0kxMDEwKTtcblxuXHRcdGRhdGEgKz0gKDAsIF9jaGVja3N1bXMubW9kMTApKGRhdGEpO1xuXHRcdGRhdGEgKz0gKDAsIF9jaGVja3N1bXMubW9kMTApKGRhdGEpO1xuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTVNJMTAxMC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE1TSTEwMTApKS5jYWxsKHRoaXMsIGRhdGEsIG9wdGlvbnMpKTtcblx0fVxuXG5cdHJldHVybiBNU0kxMDEwO1xufShfTVNJMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTVNJMTAxMDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfTVNJMiA9IHJlcXVpcmUoJy4vTVNJLmpzJyk7XG5cbnZhciBfTVNJMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01TSTIpO1xuXG52YXIgX2NoZWNrc3VtcyA9IHJlcXVpcmUoJy4vY2hlY2tzdW1zLmpzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIE1TSTExID0gZnVuY3Rpb24gKF9NU0kpIHtcblx0X2luaGVyaXRzKE1TSTExLCBfTVNJKTtcblxuXHRmdW5jdGlvbiBNU0kxMShkYXRhLCBvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1TSTExKTtcblxuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTVNJMTEuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihNU0kxMSkpLmNhbGwodGhpcywgZGF0YSArICgwLCBfY2hlY2tzdW1zLm1vZDExKShkYXRhKSwgb3B0aW9ucykpO1xuXHR9XG5cblx0cmV0dXJuIE1TSTExO1xufShfTVNJMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTVNJMTE7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX01TSTIgPSByZXF1aXJlKCcuL01TSS5qcycpO1xuXG52YXIgX01TSTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NU0kyKTtcblxudmFyIF9jaGVja3N1bXMgPSByZXF1aXJlKCcuL2NoZWNrc3Vtcy5qcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBNU0kxMTEwID0gZnVuY3Rpb24gKF9NU0kpIHtcblx0X2luaGVyaXRzKE1TSTExMTAsIF9NU0kpO1xuXG5cdGZ1bmN0aW9uIE1TSTExMTAoZGF0YSwgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNU0kxMTEwKTtcblxuXHRcdGRhdGEgKz0gKDAsIF9jaGVja3N1bXMubW9kMTEpKGRhdGEpO1xuXHRcdGRhdGEgKz0gKDAsIF9jaGVja3N1bXMubW9kMTApKGRhdGEpO1xuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTVNJMTExMC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE1TSTExMTApKS5jYWxsKHRoaXMsIGRhdGEsIG9wdGlvbnMpKTtcblx0fVxuXG5cdHJldHVybiBNU0kxMTEwO1xufShfTVNJMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTVNJMTExMDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubW9kMTAgPSBtb2QxMDtcbmV4cG9ydHMubW9kMTEgPSBtb2QxMTtcbmZ1bmN0aW9uIG1vZDEwKG51bWJlcikge1xuXHR2YXIgc3VtID0gMDtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXIubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgbiA9IHBhcnNlSW50KG51bWJlcltpXSk7XG5cdFx0aWYgKChpICsgbnVtYmVyLmxlbmd0aCkgJSAyID09PSAwKSB7XG5cdFx0XHRzdW0gKz0gbjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3VtICs9IG4gKiAyICUgMTAgKyBNYXRoLmZsb29yKG4gKiAyIC8gMTApO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gKDEwIC0gc3VtICUgMTApICUgMTA7XG59XG5cbmZ1bmN0aW9uIG1vZDExKG51bWJlcikge1xuXHR2YXIgc3VtID0gMDtcblx0dmFyIHdlaWdodHMgPSBbMiwgMywgNCwgNSwgNiwgN107XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIG4gPSBwYXJzZUludChudW1iZXJbbnVtYmVyLmxlbmd0aCAtIDEgLSBpXSk7XG5cdFx0c3VtICs9IHdlaWdodHNbaSAlIHdlaWdodHMubGVuZ3RoXSAqIG47XG5cdH1cblx0cmV0dXJuICgxMSAtIHN1bSAlIDExKSAlIDExO1xufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuTVNJMTExMCA9IGV4cG9ydHMuTVNJMTAxMCA9IGV4cG9ydHMuTVNJMTEgPSBleHBvcnRzLk1TSTEwID0gZXhwb3J0cy5NU0kgPSB1bmRlZmluZWQ7XG5cbnZhciBfTVNJID0gcmVxdWlyZSgnLi9NU0kuanMnKTtcblxudmFyIF9NU0kyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTVNJKTtcblxudmFyIF9NU0kzID0gcmVxdWlyZSgnLi9NU0kxMC5qcycpO1xuXG52YXIgX01TSTQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NU0kzKTtcblxudmFyIF9NU0k1ID0gcmVxdWlyZSgnLi9NU0kxMS5qcycpO1xuXG52YXIgX01TSTYgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NU0k1KTtcblxudmFyIF9NU0k3ID0gcmVxdWlyZSgnLi9NU0kxMDEwLmpzJyk7XG5cbnZhciBfTVNJOCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01TSTcpO1xuXG52YXIgX01TSTkgPSByZXF1aXJlKCcuL01TSTExMTAuanMnKTtcblxudmFyIF9NU0kxMCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01TSTkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLk1TSSA9IF9NU0kyLmRlZmF1bHQ7XG5leHBvcnRzLk1TSTEwID0gX01TSTQuZGVmYXVsdDtcbmV4cG9ydHMuTVNJMTEgPSBfTVNJNi5kZWZhdWx0O1xuZXhwb3J0cy5NU0kxMDEwID0gX01TSTguZGVmYXVsdDtcbmV4cG9ydHMuTVNJMTExMCA9IF9NU0kxMC5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jb2RhYmFyID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX0JhcmNvZGUyID0gcmVxdWlyZShcIi4uL0JhcmNvZGUuanNcIik7XG5cbnZhciBfQmFyY29kZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CYXJjb2RlMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH0gLy8gRW5jb2Rpbmcgc3BlY2lmaWNhdGlvbjpcbi8vIGh0dHA6Ly93d3cuYmFyY29kZWlzbGFuZC5jb20vY29kYWJhci5waHRtbFxuXG52YXIgY29kYWJhciA9IGZ1bmN0aW9uIChfQmFyY29kZSkge1xuXHRfaW5oZXJpdHMoY29kYWJhciwgX0JhcmNvZGUpO1xuXG5cdGZ1bmN0aW9uIGNvZGFiYXIoZGF0YSwgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBjb2RhYmFyKTtcblxuXHRcdGlmIChkYXRhLnNlYXJjaCgvXlswLTlcXC1cXCRcXDpcXC5cXCtcXC9dKyQvKSA9PT0gMCkge1xuXHRcdFx0ZGF0YSA9IFwiQVwiICsgZGF0YSArIFwiQVwiO1xuXHRcdH1cblxuXHRcdHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChjb2RhYmFyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoY29kYWJhcikpLmNhbGwodGhpcywgZGF0YS50b1VwcGVyQ2FzZSgpLCBvcHRpb25zKSk7XG5cblx0XHRfdGhpcy50ZXh0ID0gX3RoaXMub3B0aW9ucy50ZXh0IHx8IF90aGlzLnRleHQucmVwbGFjZSgvW0EtRF0vZywgJycpO1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhjb2RhYmFyLCBbe1xuXHRcdGtleTogXCJ2YWxpZFwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB2YWxpZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmRhdGEuc2VhcmNoKC9eW0EtRF1bMC05XFwtXFwkXFw6XFwuXFwrXFwvXStbQS1EXSQvKSAhPT0gLTE7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcImVuY29kZVwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBlbmNvZGUoKSB7XG5cdFx0XHR2YXIgcmVzdWx0ID0gW107XG5cdFx0XHR2YXIgZW5jb2RpbmdzID0gdGhpcy5nZXRFbmNvZGluZ3MoKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKGVuY29kaW5nc1t0aGlzLmRhdGEuY2hhckF0KGkpXSk7XG5cdFx0XHRcdC8vIGZvciBhbGwgY2hhcmFjdGVycyBleGNlcHQgdGhlIGxhc3QsIGFwcGVuZCBhIG5hcnJvdy1zcGFjZSAoXCIwXCIpXG5cdFx0XHRcdGlmIChpICE9PSB0aGlzLmRhdGEubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKFwiMFwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dGV4dDogdGhpcy50ZXh0LFxuXHRcdFx0XHRkYXRhOiByZXN1bHQuam9pbignJylcblx0XHRcdH07XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcImdldEVuY29kaW5nc1wiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRFbmNvZGluZ3MoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcIjBcIjogXCIxMDEwMTAwMTFcIixcblx0XHRcdFx0XCIxXCI6IFwiMTAxMDExMDAxXCIsXG5cdFx0XHRcdFwiMlwiOiBcIjEwMTAwMTAxMVwiLFxuXHRcdFx0XHRcIjNcIjogXCIxMTAwMTAxMDFcIixcblx0XHRcdFx0XCI0XCI6IFwiMTAxMTAxMDAxXCIsXG5cdFx0XHRcdFwiNVwiOiBcIjExMDEwMTAwMVwiLFxuXHRcdFx0XHRcIjZcIjogXCIxMDAxMDEwMTFcIixcblx0XHRcdFx0XCI3XCI6IFwiMTAwMTAxMTAxXCIsXG5cdFx0XHRcdFwiOFwiOiBcIjEwMDExMDEwMVwiLFxuXHRcdFx0XHRcIjlcIjogXCIxMTAxMDAxMDFcIixcblx0XHRcdFx0XCItXCI6IFwiMTAxMDAxMTAxXCIsXG5cdFx0XHRcdFwiJFwiOiBcIjEwMTEwMDEwMVwiLFxuXHRcdFx0XHRcIjpcIjogXCIxMTAxMDExMDExXCIsXG5cdFx0XHRcdFwiL1wiOiBcIjExMDExMDEwMTFcIixcblx0XHRcdFx0XCIuXCI6IFwiMTEwMTEwMTEwMVwiLFxuXHRcdFx0XHRcIitcIjogXCIxMDExMDExMDExXCIsXG5cdFx0XHRcdFwiQVwiOiBcIjEwMTEwMDEwMDFcIixcblx0XHRcdFx0XCJCXCI6IFwiMTAwMTAwMTAxMVwiLFxuXHRcdFx0XHRcIkNcIjogXCIxMDEwMDEwMDExXCIsXG5cdFx0XHRcdFwiRFwiOiBcIjEwMTAwMTEwMDFcIlxuXHRcdFx0fTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gY29kYWJhcjtcbn0oX0JhcmNvZGUzLmRlZmF1bHQpO1xuXG5leHBvcnRzLmNvZGFiYXIgPSBjb2RhYmFyOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9DT0RFID0gcmVxdWlyZSgnLi9DT0RFMzkvJyk7XG5cbnZhciBfQ09ERTIgPSByZXF1aXJlKCcuL0NPREUxMjgvJyk7XG5cbnZhciBfRUFOX1VQQyA9IHJlcXVpcmUoJy4vRUFOX1VQQy8nKTtcblxudmFyIF9JVEYgPSByZXF1aXJlKCcuL0lURi8nKTtcblxudmFyIF9NU0kgPSByZXF1aXJlKCcuL01TSS8nKTtcblxudmFyIF9waGFybWFjb2RlID0gcmVxdWlyZSgnLi9waGFybWFjb2RlLycpO1xuXG52YXIgX2NvZGFiYXIgPSByZXF1aXJlKCcuL2NvZGFiYXInKTtcblxudmFyIF9HZW5lcmljQmFyY29kZSA9IHJlcXVpcmUoJy4vR2VuZXJpY0JhcmNvZGUvJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcblx0Q09ERTM5OiBfQ09ERS5DT0RFMzksXG5cdENPREUxMjg6IF9DT0RFMi5DT0RFMTI4LCBDT0RFMTI4QTogX0NPREUyLkNPREUxMjhBLCBDT0RFMTI4QjogX0NPREUyLkNPREUxMjhCLCBDT0RFMTI4QzogX0NPREUyLkNPREUxMjhDLFxuXHRFQU4xMzogX0VBTl9VUEMuRUFOMTMsIEVBTjg6IF9FQU5fVVBDLkVBTjgsIEVBTjU6IF9FQU5fVVBDLkVBTjUsIEVBTjI6IF9FQU5fVVBDLkVBTjIsIFVQQzogX0VBTl9VUEMuVVBDLCBVUENFOiBfRUFOX1VQQy5VUENFLFxuXHRJVEYxNDogX0lURi5JVEYxNCxcblx0SVRGOiBfSVRGLklURixcblx0TVNJOiBfTVNJLk1TSSwgTVNJMTA6IF9NU0kuTVNJMTAsIE1TSTExOiBfTVNJLk1TSTExLCBNU0kxMDEwOiBfTVNJLk1TSTEwMTAsIE1TSTExMTA6IF9NU0kuTVNJMTExMCxcblx0cGhhcm1hY29kZTogX3BoYXJtYWNvZGUucGhhcm1hY29kZSxcblx0Y29kYWJhcjogX2NvZGFiYXIuY29kYWJhcixcblx0R2VuZXJpY0JhcmNvZGU6IF9HZW5lcmljQmFyY29kZS5HZW5lcmljQmFyY29kZVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucGhhcm1hY29kZSA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9CYXJjb2RlMiA9IHJlcXVpcmUoXCIuLi9CYXJjb2RlLmpzXCIpO1xuXG52YXIgX0JhcmNvZGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQmFyY29kZTIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9IC8vIEVuY29kaW5nIGRvY3VtZW50YXRpb25cbi8vIGh0dHA6Ly93d3cuZ29tYXJvLmNoL2Z0cHJvb3QvTGFldHVzX1BIQVJNQS1DT0RFLnBkZlxuXG52YXIgcGhhcm1hY29kZSA9IGZ1bmN0aW9uIChfQmFyY29kZSkge1xuXHRfaW5oZXJpdHMocGhhcm1hY29kZSwgX0JhcmNvZGUpO1xuXG5cdGZ1bmN0aW9uIHBoYXJtYWNvZGUoZGF0YSwgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBwaGFybWFjb2RlKTtcblxuXHRcdHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChwaGFybWFjb2RlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YocGhhcm1hY29kZSkpLmNhbGwodGhpcywgZGF0YSwgb3B0aW9ucykpO1xuXG5cdFx0X3RoaXMubnVtYmVyID0gcGFyc2VJbnQoZGF0YSwgMTApO1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhwaGFybWFjb2RlLCBbe1xuXHRcdGtleTogXCJlbmNvZGVcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZW5jb2RlKCkge1xuXHRcdFx0dmFyIHogPSB0aGlzLm51bWJlcjtcblx0XHRcdHZhciByZXN1bHQgPSBcIlwiO1xuXG5cdFx0XHQvLyBodHRwOi8vaS5pbWd1ci5jb20vUk1tNFVESi5wbmdcblx0XHRcdC8vIChzb3VyY2U6IGh0dHA6Ly93d3cuZ29tYXJvLmNoL2Z0cHJvb3QvTGFldHVzX1BIQVJNQS1DT0RFLnBkZiwgcGFnZTogMzQpXG5cdFx0XHR3aGlsZSAoIWlzTmFOKHopICYmIHogIT0gMCkge1xuXHRcdFx0XHRpZiAoeiAlIDIgPT09IDApIHtcblx0XHRcdFx0XHQvLyBFdmVuXG5cdFx0XHRcdFx0cmVzdWx0ID0gXCIxMTEwMFwiICsgcmVzdWx0O1xuXHRcdFx0XHRcdHogPSAoeiAtIDIpIC8gMjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBPZGRcblx0XHRcdFx0XHRyZXN1bHQgPSBcIjEwMFwiICsgcmVzdWx0O1xuXHRcdFx0XHRcdHogPSAoeiAtIDEpIC8gMjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZW1vdmUgdGhlIHR3byBsYXN0IHplcm9lc1xuXHRcdFx0cmVzdWx0ID0gcmVzdWx0LnNsaWNlKDAsIC0yKTtcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YTogcmVzdWx0LFxuXHRcdFx0XHR0ZXh0OiB0aGlzLnRleHRcblx0XHRcdH07XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcInZhbGlkXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHZhbGlkKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMubnVtYmVyID49IDMgJiYgdGhpcy5udW1iZXIgPD0gMTMxMDcwO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBwaGFybWFjb2RlO1xufShfQmFyY29kZTMuZGVmYXVsdCk7XG5cbmV4cG9ydHMucGhhcm1hY29kZSA9IHBoYXJtYWNvZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qZXNsaW50IG5vLWNvbnNvbGU6IDAgKi9cblxudmFyIEVycm9ySGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcblx0ZnVuY3Rpb24gRXJyb3JIYW5kbGVyKGFwaSkge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFcnJvckhhbmRsZXIpO1xuXG5cdFx0dGhpcy5hcGkgPSBhcGk7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoRXJyb3JIYW5kbGVyLCBbe1xuXHRcdGtleTogXCJoYW5kbGVDYXRjaFwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVDYXRjaChlKSB7XG5cdFx0XHQvLyBJZiBiYWJlbCBzdXBwb3J0ZWQgZXh0ZW5kaW5nIG9mIEVycm9yIGluIGEgY29ycmVjdCB3YXkgaW5zdGFuY2VvZiB3b3VsZCBiZSB1c2VkIGhlcmVcblx0XHRcdGlmIChlLm5hbWUgPT09IFwiSW52YWxpZElucHV0RXhjZXB0aW9uXCIpIHtcblx0XHRcdFx0aWYgKHRoaXMuYXBpLl9vcHRpb25zLnZhbGlkICE9PSB0aGlzLmFwaS5fZGVmYXVsdHMudmFsaWQpIHtcblx0XHRcdFx0XHR0aGlzLmFwaS5fb3B0aW9ucy52YWxpZChmYWxzZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhyb3cgZS5tZXNzYWdlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyBlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmFwaS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7fTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwid3JhcEJhcmNvZGVDYWxsXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHdyYXBCYXJjb2RlQ2FsbChmdW5jKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR2YXIgcmVzdWx0ID0gZnVuYy5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG5cdFx0XHRcdHRoaXMuYXBpLl9vcHRpb25zLnZhbGlkKHRydWUpO1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHR0aGlzLmhhbmRsZUNhdGNoKGUpO1xuXG5cdFx0XHRcdHJldHVybiB0aGlzLmFwaTtcblx0XHRcdH1cblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gRXJyb3JIYW5kbGVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBFcnJvckhhbmRsZXI7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBJbnZhbGlkSW5wdXRFeGNlcHRpb24gPSBmdW5jdGlvbiAoX0Vycm9yKSB7XG5cdF9pbmhlcml0cyhJbnZhbGlkSW5wdXRFeGNlcHRpb24sIF9FcnJvcik7XG5cblx0ZnVuY3Rpb24gSW52YWxpZElucHV0RXhjZXB0aW9uKHN5bWJvbG9neSwgaW5wdXQpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW52YWxpZElucHV0RXhjZXB0aW9uKTtcblxuXHRcdHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChJbnZhbGlkSW5wdXRFeGNlcHRpb24uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihJbnZhbGlkSW5wdXRFeGNlcHRpb24pKS5jYWxsKHRoaXMpKTtcblxuXHRcdF90aGlzLm5hbWUgPSBcIkludmFsaWRJbnB1dEV4Y2VwdGlvblwiO1xuXG5cdFx0X3RoaXMuc3ltYm9sb2d5ID0gc3ltYm9sb2d5O1xuXHRcdF90aGlzLmlucHV0ID0gaW5wdXQ7XG5cblx0XHRfdGhpcy5tZXNzYWdlID0gJ1wiJyArIF90aGlzLmlucHV0ICsgJ1wiIGlzIG5vdCBhIHZhbGlkIGlucHV0IGZvciAnICsgX3RoaXMuc3ltYm9sb2d5O1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdHJldHVybiBJbnZhbGlkSW5wdXRFeGNlcHRpb247XG59KEVycm9yKTtcblxudmFyIEludmFsaWRFbGVtZW50RXhjZXB0aW9uID0gZnVuY3Rpb24gKF9FcnJvcjIpIHtcblx0X2luaGVyaXRzKEludmFsaWRFbGVtZW50RXhjZXB0aW9uLCBfRXJyb3IyKTtcblxuXHRmdW5jdGlvbiBJbnZhbGlkRWxlbWVudEV4Y2VwdGlvbigpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW52YWxpZEVsZW1lbnRFeGNlcHRpb24pO1xuXG5cdFx0dmFyIF90aGlzMiA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChJbnZhbGlkRWxlbWVudEV4Y2VwdGlvbi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEludmFsaWRFbGVtZW50RXhjZXB0aW9uKSkuY2FsbCh0aGlzKSk7XG5cblx0XHRfdGhpczIubmFtZSA9IFwiSW52YWxpZEVsZW1lbnRFeGNlcHRpb25cIjtcblx0XHRfdGhpczIubWVzc2FnZSA9IFwiTm90IHN1cHBvcnRlZCB0eXBlIHRvIHJlbmRlciBvblwiO1xuXHRcdHJldHVybiBfdGhpczI7XG5cdH1cblxuXHRyZXR1cm4gSW52YWxpZEVsZW1lbnRFeGNlcHRpb247XG59KEVycm9yKTtcblxudmFyIE5vRWxlbWVudEV4Y2VwdGlvbiA9IGZ1bmN0aW9uIChfRXJyb3IzKSB7XG5cdF9pbmhlcml0cyhOb0VsZW1lbnRFeGNlcHRpb24sIF9FcnJvcjMpO1xuXG5cdGZ1bmN0aW9uIE5vRWxlbWVudEV4Y2VwdGlvbigpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm9FbGVtZW50RXhjZXB0aW9uKTtcblxuXHRcdHZhciBfdGhpczMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTm9FbGVtZW50RXhjZXB0aW9uLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTm9FbGVtZW50RXhjZXB0aW9uKSkuY2FsbCh0aGlzKSk7XG5cblx0XHRfdGhpczMubmFtZSA9IFwiTm9FbGVtZW50RXhjZXB0aW9uXCI7XG5cdFx0X3RoaXMzLm1lc3NhZ2UgPSBcIk5vIGVsZW1lbnQgdG8gcmVuZGVyIG9uLlwiO1xuXHRcdHJldHVybiBfdGhpczM7XG5cdH1cblxuXHRyZXR1cm4gTm9FbGVtZW50RXhjZXB0aW9uO1xufShFcnJvcik7XG5cbmV4cG9ydHMuSW52YWxpZElucHV0RXhjZXB0aW9uID0gSW52YWxpZElucHV0RXhjZXB0aW9uO1xuZXhwb3J0cy5JbnZhbGlkRWxlbWVudEV4Y2VwdGlvbiA9IEludmFsaWRFbGVtZW50RXhjZXB0aW9uO1xuZXhwb3J0cy5Ob0VsZW1lbnRFeGNlcHRpb24gPSBOb0VsZW1lbnRFeGNlcHRpb247IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmaXhPcHRpb25zO1xuXG5cbmZ1bmN0aW9uIGZpeE9wdGlvbnMob3B0aW9ucykge1xuXHQvLyBGaXggdGhlIG1hcmdpbnNcblx0b3B0aW9ucy5tYXJnaW5Ub3AgPSBvcHRpb25zLm1hcmdpblRvcCB8fCBvcHRpb25zLm1hcmdpbjtcblx0b3B0aW9ucy5tYXJnaW5Cb3R0b20gPSBvcHRpb25zLm1hcmdpbkJvdHRvbSB8fCBvcHRpb25zLm1hcmdpbjtcblx0b3B0aW9ucy5tYXJnaW5SaWdodCA9IG9wdGlvbnMubWFyZ2luUmlnaHQgfHwgb3B0aW9ucy5tYXJnaW47XG5cdG9wdGlvbnMubWFyZ2luTGVmdCA9IG9wdGlvbnMubWFyZ2luTGVmdCB8fCBvcHRpb25zLm1hcmdpbjtcblxuXHRyZXR1cm4gb3B0aW9ucztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9vcHRpb25zRnJvbVN0cmluZ3MgPSByZXF1aXJlKFwiLi9vcHRpb25zRnJvbVN0cmluZ3MuanNcIik7XG5cbnZhciBfb3B0aW9uc0Zyb21TdHJpbmdzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29wdGlvbnNGcm9tU3RyaW5ncyk7XG5cbnZhciBfZGVmYXVsdHMgPSByZXF1aXJlKFwiLi4vb3B0aW9ucy9kZWZhdWx0cy5qc1wiKTtcblxudmFyIF9kZWZhdWx0czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZhdWx0cyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldE9wdGlvbnNGcm9tRWxlbWVudChlbGVtZW50KSB7XG5cdHZhciBvcHRpb25zID0ge307XG5cdGZvciAodmFyIHByb3BlcnR5IGluIF9kZWZhdWx0czIuZGVmYXVsdCkge1xuXHRcdGlmIChfZGVmYXVsdHMyLmRlZmF1bHQuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG5cdFx0XHQvLyBqc2JhcmNvZGUtKlxuXHRcdFx0aWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwianNiYXJjb2RlLVwiICsgcHJvcGVydHkudG9Mb3dlckNhc2UoKSkpIHtcblx0XHRcdFx0b3B0aW9uc1twcm9wZXJ0eV0gPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImpzYmFyY29kZS1cIiArIHByb3BlcnR5LnRvTG93ZXJDYXNlKCkpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBkYXRhLSpcblx0XHRcdGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShcImRhdGEtXCIgKyBwcm9wZXJ0eS50b0xvd2VyQ2FzZSgpKSkge1xuXHRcdFx0XHRvcHRpb25zW3Byb3BlcnR5XSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1cIiArIHByb3BlcnR5LnRvTG93ZXJDYXNlKCkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG9wdGlvbnNbXCJ2YWx1ZVwiXSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwianNiYXJjb2RlLXZhbHVlXCIpIHx8IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiKTtcblxuXHQvLyBTaW5jZSBhbGwgYXRyaWJ1dGVzIGFyZSBzdHJpbmcgdGhleSBuZWVkIHRvIGJlIGNvbnZlcnRlZCB0byBpbnRlZ2Vyc1xuXHRvcHRpb25zID0gKDAsIF9vcHRpb25zRnJvbVN0cmluZ3MyLmRlZmF1bHQpKG9wdGlvbnMpO1xuXG5cdHJldHVybiBvcHRpb25zO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBnZXRPcHRpb25zRnJvbUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgLyogZ2xvYmFsIEhUTUxJbWFnZUVsZW1lbnQgKi9cbi8qIGdsb2JhbCBIVE1MQ2FudmFzRWxlbWVudCAqL1xuLyogZ2xvYmFsIFNWR0VsZW1lbnQgKi9cblxudmFyIF9nZXRPcHRpb25zRnJvbUVsZW1lbnQgPSByZXF1aXJlKFwiLi9nZXRPcHRpb25zRnJvbUVsZW1lbnQuanNcIik7XG5cbnZhciBfZ2V0T3B0aW9uc0Zyb21FbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldE9wdGlvbnNGcm9tRWxlbWVudCk7XG5cbnZhciBfcmVuZGVyZXJzID0gcmVxdWlyZShcIi4uL3JlbmRlcmVyc1wiKTtcblxudmFyIF9yZW5kZXJlcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVuZGVyZXJzKTtcblxudmFyIF9leGNlcHRpb25zID0gcmVxdWlyZShcIi4uL2V4Y2VwdGlvbnMvZXhjZXB0aW9ucy5qc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gVGFrZXMgYW4gZWxlbWVudCBhbmQgcmV0dXJucyBhbiBvYmplY3Qgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCBob3dcbi8vIGl0IHNob3VsZCBiZSByZW5kZXJlZFxuLy8gVGhpcyBjb3VsZCBhbHNvIHJldHVybiBhbiBhcnJheSB3aXRoIHRoZXNlIG9iamVjdHNcbi8vIHtcbi8vICAgZWxlbWVudDogVGhlIGVsZW1lbnQgdGhhdCB0aGUgcmVuZGVyZXIgc2hvdWxkIGRyYXcgb25cbi8vICAgcmVuZGVyZXI6IFRoZSBuYW1lIG9mIHRoZSByZW5kZXJlclxuLy8gICBhZnRlclJlbmRlciAob3B0aW9uYWwpOiBJZiBzb21ldGhpbmcgaGFzIHRvIGRvbmUgYWZ0ZXIgdGhlIHJlbmRlcmVyXG4vLyAgICAgY29tcGxldGVkLCBjYWxscyBhZnRlclJlbmRlciAoZnVuY3Rpb24pXG4vLyAgIG9wdGlvbnMgKG9wdGlvbmFsKTogT3B0aW9ucyB0aGF0IGNhbiBiZSBkZWZpbmVkIGluIHRoZSBlbGVtZW50XG4vLyB9XG5cbmZ1bmN0aW9uIGdldFJlbmRlclByb3BlcnRpZXMoZWxlbWVudCkge1xuXHQvLyBJZiB0aGUgZWxlbWVudCBpcyBhIHN0cmluZywgcXVlcnkgc2VsZWN0IGNhbGwgYWdhaW5cblx0aWYgKHR5cGVvZiBlbGVtZW50ID09PSBcInN0cmluZ1wiKSB7XG5cdFx0cmV0dXJuIHF1ZXJ5U2VsZWN0ZWRSZW5kZXJQcm9wZXJ0aWVzKGVsZW1lbnQpO1xuXHR9XG5cdC8vIElmIGVsZW1lbnQgaXMgYXJyYXkuIFJlY3Vyc2l2bHkgY2FsbCB3aXRoIGV2ZXJ5IG9iamVjdCBpbiB0aGUgYXJyYXlcblx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShlbGVtZW50KSkge1xuXHRcdFx0dmFyIHJldHVybkFycmF5ID0gW107XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaChnZXRSZW5kZXJQcm9wZXJ0aWVzKGVsZW1lbnRbaV0pKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXR1cm5BcnJheTtcblx0XHR9XG5cdFx0Ly8gSWYgZWxlbWVudCwgcmVuZGVyIG9uIGNhbnZhcyBhbmQgc2V0IHRoZSB1cmkgYXMgc3JjXG5cdFx0ZWxzZSBpZiAodHlwZW9mIEhUTUxDYW52YXNFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBlbGVtZW50IGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xuXHRcdFx0XHRyZXR1cm4gbmV3Q2FudmFzUmVuZGVyUHJvcGVydGllcyhlbGVtZW50KTtcblx0XHRcdH1cblx0XHRcdC8vIElmIFNWR1xuXHRcdFx0ZWxzZSBpZiAoZWxlbWVudCAmJiBlbGVtZW50Lm5vZGVOYW1lICYmIGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3N2ZycgfHwgdHlwZW9mIFNWR0VsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdGVsZW1lbnQ6IGVsZW1lbnQsXG5cdFx0XHRcdFx0XHRvcHRpb25zOiAoMCwgX2dldE9wdGlvbnNGcm9tRWxlbWVudDIuZGVmYXVsdCkoZWxlbWVudCksXG5cdFx0XHRcdFx0XHRyZW5kZXJlcjogX3JlbmRlcmVyczIuZGVmYXVsdC5TVkdSZW5kZXJlclxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gSWYgY2FudmFzIChpbiBicm93c2VyKVxuXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgSFRNTENhbnZhc0VsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0ZWxlbWVudDogZWxlbWVudCxcblx0XHRcdFx0XHRcdFx0b3B0aW9uczogKDAsIF9nZXRPcHRpb25zRnJvbUVsZW1lbnQyLmRlZmF1bHQpKGVsZW1lbnQpLFxuXHRcdFx0XHRcdFx0XHRyZW5kZXJlcjogX3JlbmRlcmVyczIuZGVmYXVsdC5DYW52YXNSZW5kZXJlclxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gSWYgY2FudmFzIChpbiBub2RlKVxuXHRcdFx0XHRcdGVsc2UgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5nZXRDb250ZXh0KSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdFx0ZWxlbWVudDogZWxlbWVudCxcblx0XHRcdFx0XHRcdFx0XHRyZW5kZXJlcjogX3JlbmRlcmVyczIuZGVmYXVsdC5DYW52YXNSZW5kZXJlclxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChlbGVtZW50ICYmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGVsZW1lbnQpKSA9PT0gJ29iamVjdCcgJiYgIWVsZW1lbnQubm9kZU5hbWUpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRlbGVtZW50OiBlbGVtZW50LFxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcmVyOiBfcmVuZGVyZXJzMi5kZWZhdWx0Lk9iamVjdFJlbmRlcmVyXG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgX2V4Y2VwdGlvbnMuSW52YWxpZEVsZW1lbnRFeGNlcHRpb24oKTtcblx0XHRcdFx0XHRcdH1cbn1cblxuZnVuY3Rpb24gcXVlcnlTZWxlY3RlZFJlbmRlclByb3BlcnRpZXMoc3RyaW5nKSB7XG5cdHZhciBzZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc3RyaW5nKTtcblx0aWYgKHNlbGVjdG9yLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIHJldHVybkFycmF5ID0gW107XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3Rvci5sZW5ndGg7IGkrKykge1xuXHRcdFx0cmV0dXJuQXJyYXkucHVzaChnZXRSZW5kZXJQcm9wZXJ0aWVzKHNlbGVjdG9yW2ldKSk7XG5cdFx0fVxuXHRcdHJldHVybiByZXR1cm5BcnJheTtcblx0fVxufVxuXG5mdW5jdGlvbiBuZXdDYW52YXNSZW5kZXJQcm9wZXJ0aWVzKGltZ0VsZW1lbnQpIHtcblx0dmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXHRyZXR1cm4ge1xuXHRcdGVsZW1lbnQ6IGNhbnZhcyxcblx0XHRvcHRpb25zOiAoMCwgX2dldE9wdGlvbnNGcm9tRWxlbWVudDIuZGVmYXVsdCkoaW1nRWxlbWVudCksXG5cdFx0cmVuZGVyZXI6IF9yZW5kZXJlcnMyLmRlZmF1bHQuQ2FudmFzUmVuZGVyZXIsXG5cdFx0YWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uIGFmdGVyUmVuZGVyKCkge1xuXHRcdFx0aW1nRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgY2FudmFzLnRvRGF0YVVSTCgpKTtcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGdldFJlbmRlclByb3BlcnRpZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBsaW5lYXJpemVFbmNvZGluZ3M7XG5cbi8vIEVuY29kaW5ncyBjYW4gYmUgbmVzdGxlZCBsaWtlIFtbMS0xLCAxLTJdLCAyLCBbMy0xLCAzLTJdXG4vLyBDb252ZXJ0IHRvIFsxLTEsIDEtMiwgMiwgMy0xLCAzLTJdXG5cbmZ1bmN0aW9uIGxpbmVhcml6ZUVuY29kaW5ncyhlbmNvZGluZ3MpIHtcblx0dmFyIGxpbmVhckVuY29kaW5ncyA9IFtdO1xuXHRmdW5jdGlvbiBuZXh0TGV2ZWwoZW5jb2RlZCkge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KGVuY29kZWQpKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGVuY29kZWQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bmV4dExldmVsKGVuY29kZWRbaV0pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbmNvZGVkLnRleHQgPSBlbmNvZGVkLnRleHQgfHwgXCJcIjtcblx0XHRcdGVuY29kZWQuZGF0YSA9IGVuY29kZWQuZGF0YSB8fCBcIlwiO1xuXHRcdFx0bGluZWFyRW5jb2RpbmdzLnB1c2goZW5jb2RlZCk7XG5cdFx0fVxuXHR9XG5cdG5leHRMZXZlbChlbmNvZGluZ3MpO1xuXG5cdHJldHVybiBsaW5lYXJFbmNvZGluZ3M7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvbGQsIHJlcGxhY2VPYmopIHtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBvbGQsIHJlcGxhY2VPYmopO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IG9wdGlvbnNGcm9tU3RyaW5ncztcblxuLy8gQ29udmVydCBzdHJpbmcgdG8gaW50ZWdlcnMvYm9vbGVhbnMgd2hlcmUgaXQgc2hvdWxkIGJlXG5cbmZ1bmN0aW9uIG9wdGlvbnNGcm9tU3RyaW5ncyhvcHRpb25zKSB7XG5cdHZhciBpbnRPcHRpb25zID0gW1wid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJ0ZXh0TWFyZ2luXCIsIFwiZm9udFNpemVcIiwgXCJtYXJnaW5cIiwgXCJtYXJnaW5Ub3BcIiwgXCJtYXJnaW5Cb3R0b21cIiwgXCJtYXJnaW5MZWZ0XCIsIFwibWFyZ2luUmlnaHRcIl07XG5cblx0Zm9yICh2YXIgaW50T3B0aW9uIGluIGludE9wdGlvbnMpIHtcblx0XHRpZiAoaW50T3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShpbnRPcHRpb24pKSB7XG5cdFx0XHRpbnRPcHRpb24gPSBpbnRPcHRpb25zW2ludE9wdGlvbl07XG5cdFx0XHRpZiAodHlwZW9mIG9wdGlvbnNbaW50T3B0aW9uXSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRvcHRpb25zW2ludE9wdGlvbl0gPSBwYXJzZUludChvcHRpb25zW2ludE9wdGlvbl0sIDEwKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAodHlwZW9mIG9wdGlvbnNbXCJkaXNwbGF5VmFsdWVcIl0gPT09IFwic3RyaW5nXCIpIHtcblx0XHRvcHRpb25zW1wiZGlzcGxheVZhbHVlXCJdID0gb3B0aW9uc1tcImRpc3BsYXlWYWx1ZVwiXSAhPSBcImZhbHNlXCI7XG5cdH1cblxuXHRyZXR1cm4gb3B0aW9ucztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbnZhciBkZWZhdWx0cyA9IHtcblx0d2lkdGg6IDIsXG5cdGhlaWdodDogMTAwLFxuXHRmb3JtYXQ6IFwiYXV0b1wiLFxuXHRkaXNwbGF5VmFsdWU6IHRydWUsXG5cdGZvbnRPcHRpb25zOiBcIlwiLFxuXHRmb250OiBcIm1vbm9zcGFjZVwiLFxuXHR0ZXh0OiB1bmRlZmluZWQsXG5cdHRleHRBbGlnbjogXCJjZW50ZXJcIixcblx0dGV4dFBvc2l0aW9uOiBcImJvdHRvbVwiLFxuXHR0ZXh0TWFyZ2luOiAyLFxuXHRmb250U2l6ZTogMjAsXG5cdGJhY2tncm91bmQ6IFwiI2ZmZmZmZlwiLFxuXHRsaW5lQ29sb3I6IFwiIzAwMDAwMFwiLFxuXHRtYXJnaW46IDEwLFxuXHRtYXJnaW5Ub3A6IHVuZGVmaW5lZCxcblx0bWFyZ2luQm90dG9tOiB1bmRlZmluZWQsXG5cdG1hcmdpbkxlZnQ6IHVuZGVmaW5lZCxcblx0bWFyZ2luUmlnaHQ6IHVuZGVmaW5lZCxcblx0dmFsaWQ6IGZ1bmN0aW9uIHZhbGlkKCkge31cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmF1bHRzOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX21lcmdlID0gcmVxdWlyZShcIi4uL2hlbHAvbWVyZ2UuanNcIik7XG5cbnZhciBfbWVyZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWVyZ2UpO1xuXG52YXIgX3NoYXJlZCA9IHJlcXVpcmUoXCIuL3NoYXJlZC5qc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIENhbnZhc1JlbmRlcmVyID0gZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiBDYW52YXNSZW5kZXJlcihjYW52YXMsIGVuY29kaW5ncywgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDYW52YXNSZW5kZXJlcik7XG5cblx0XHR0aGlzLmNhbnZhcyA9IGNhbnZhcztcblx0XHR0aGlzLmVuY29kaW5ncyA9IGVuY29kaW5ncztcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKENhbnZhc1JlbmRlcmVyLCBbe1xuXHRcdGtleTogXCJyZW5kZXJcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0Ly8gQWJvcnQgaWYgdGhlIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBIVE1MNSBjYW52YXNcblx0XHRcdGlmICghdGhpcy5jYW52YXMuZ2V0Q29udGV4dCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RoZSBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgY2FudmFzLicpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnByZXBhcmVDYW52YXMoKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5lbmNvZGluZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIGVuY29kaW5nT3B0aW9ucyA9ICgwLCBfbWVyZ2UyLmRlZmF1bHQpKHRoaXMub3B0aW9ucywgdGhpcy5lbmNvZGluZ3NbaV0ub3B0aW9ucyk7XG5cblx0XHRcdFx0dGhpcy5kcmF3Q2FudmFzQmFyY29kZShlbmNvZGluZ09wdGlvbnMsIHRoaXMuZW5jb2RpbmdzW2ldKTtcblx0XHRcdFx0dGhpcy5kcmF3Q2FudmFzVGV4dChlbmNvZGluZ09wdGlvbnMsIHRoaXMuZW5jb2RpbmdzW2ldKTtcblxuXHRcdFx0XHR0aGlzLm1vdmVDYW52YXNEcmF3aW5nKHRoaXMuZW5jb2RpbmdzW2ldKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5yZXN0b3JlQ2FudmFzKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcInByZXBhcmVDYW52YXNcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gcHJlcGFyZUNhbnZhcygpIHtcblx0XHRcdC8vIEdldCB0aGUgY2FudmFzIGNvbnRleHRcblx0XHRcdHZhciBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cblx0XHRcdGN0eC5zYXZlKCk7XG5cblx0XHRcdCgwLCBfc2hhcmVkLmNhbGN1bGF0ZUVuY29kaW5nQXR0cmlidXRlcykodGhpcy5lbmNvZGluZ3MsIHRoaXMub3B0aW9ucywgY3R4KTtcblx0XHRcdHZhciB0b3RhbFdpZHRoID0gKDAsIF9zaGFyZWQuZ2V0VG90YWxXaWR0aE9mRW5jb2RpbmdzKSh0aGlzLmVuY29kaW5ncyk7XG5cdFx0XHR2YXIgbWF4SGVpZ2h0ID0gKDAsIF9zaGFyZWQuZ2V0TWF4aW11bUhlaWdodE9mRW5jb2RpbmdzKSh0aGlzLmVuY29kaW5ncyk7XG5cblx0XHRcdHRoaXMuY2FudmFzLndpZHRoID0gdG90YWxXaWR0aCArIHRoaXMub3B0aW9ucy5tYXJnaW5MZWZ0ICsgdGhpcy5vcHRpb25zLm1hcmdpblJpZ2h0O1xuXG5cdFx0XHR0aGlzLmNhbnZhcy5oZWlnaHQgPSBtYXhIZWlnaHQ7XG5cblx0XHRcdC8vIFBhaW50IHRoZSBjYW52YXNcblx0XHRcdGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLmJhY2tncm91bmQpIHtcblx0XHRcdFx0Y3R4LmZpbGxTdHlsZSA9IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kO1xuXHRcdFx0XHRjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cdFx0XHR9XG5cblx0XHRcdGN0eC50cmFuc2xhdGUodGhpcy5vcHRpb25zLm1hcmdpbkxlZnQsIDApO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJkcmF3Q2FudmFzQmFyY29kZVwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBkcmF3Q2FudmFzQmFyY29kZShvcHRpb25zLCBlbmNvZGluZykge1xuXHRcdFx0Ly8gR2V0IHRoZSBjYW52YXMgY29udGV4dFxuXHRcdFx0dmFyIGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuXHRcdFx0dmFyIGJpbmFyeSA9IGVuY29kaW5nLmRhdGE7XG5cblx0XHRcdC8vIENyZWF0ZXMgdGhlIGJhcmNvZGUgb3V0IG9mIHRoZSBlbmNvZGVkIGJpbmFyeVxuXHRcdFx0dmFyIHlGcm9tO1xuXHRcdFx0aWYgKG9wdGlvbnMudGV4dFBvc2l0aW9uID09IFwidG9wXCIpIHtcblx0XHRcdFx0eUZyb20gPSBvcHRpb25zLm1hcmdpblRvcCArIG9wdGlvbnMuZm9udFNpemUgKyBvcHRpb25zLnRleHRNYXJnaW47XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR5RnJvbSA9IG9wdGlvbnMubWFyZ2luVG9wO1xuXHRcdFx0fVxuXG5cdFx0XHRjdHguZmlsbFN0eWxlID0gb3B0aW9ucy5saW5lQ29sb3I7XG5cblx0XHRcdGZvciAodmFyIGIgPSAwOyBiIDwgYmluYXJ5Lmxlbmd0aDsgYisrKSB7XG5cdFx0XHRcdHZhciB4ID0gYiAqIG9wdGlvbnMud2lkdGggKyBlbmNvZGluZy5iYXJjb2RlUGFkZGluZztcblxuXHRcdFx0XHRpZiAoYmluYXJ5W2JdID09PSBcIjFcIikge1xuXHRcdFx0XHRcdGN0eC5maWxsUmVjdCh4LCB5RnJvbSwgb3B0aW9ucy53aWR0aCwgb3B0aW9ucy5oZWlnaHQpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGJpbmFyeVtiXSkge1xuXHRcdFx0XHRcdGN0eC5maWxsUmVjdCh4LCB5RnJvbSwgb3B0aW9ucy53aWR0aCwgb3B0aW9ucy5oZWlnaHQgKiBiaW5hcnlbYl0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcImRyYXdDYW52YXNUZXh0XCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGRyYXdDYW52YXNUZXh0KG9wdGlvbnMsIGVuY29kaW5nKSB7XG5cdFx0XHQvLyBHZXQgdGhlIGNhbnZhcyBjb250ZXh0XG5cdFx0XHR2YXIgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5cdFx0XHR2YXIgZm9udCA9IG9wdGlvbnMuZm9udE9wdGlvbnMgKyBcIiBcIiArIG9wdGlvbnMuZm9udFNpemUgKyBcInB4IFwiICsgb3B0aW9ucy5mb250O1xuXG5cdFx0XHQvLyBEcmF3IHRoZSB0ZXh0IGlmIGRpc3BsYXlWYWx1ZSBpcyBzZXRcblx0XHRcdGlmIChvcHRpb25zLmRpc3BsYXlWYWx1ZSkge1xuXHRcdFx0XHR2YXIgeCwgeTtcblxuXHRcdFx0XHRpZiAob3B0aW9ucy50ZXh0UG9zaXRpb24gPT0gXCJ0b3BcIikge1xuXHRcdFx0XHRcdHkgPSBvcHRpb25zLm1hcmdpblRvcCArIG9wdGlvbnMuZm9udFNpemUgLSBvcHRpb25zLnRleHRNYXJnaW47XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0eSA9IG9wdGlvbnMuaGVpZ2h0ICsgb3B0aW9ucy50ZXh0TWFyZ2luICsgb3B0aW9ucy5tYXJnaW5Ub3AgKyBvcHRpb25zLmZvbnRTaXplO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y3R4LmZvbnQgPSBmb250O1xuXG5cdFx0XHRcdC8vIERyYXcgdGhlIHRleHQgaW4gdGhlIGNvcnJlY3QgWCBkZXBlbmRpbmcgb24gdGhlIHRleHRBbGlnbiBvcHRpb25cblx0XHRcdFx0aWYgKG9wdGlvbnMudGV4dEFsaWduID09IFwibGVmdFwiIHx8IGVuY29kaW5nLmJhcmNvZGVQYWRkaW5nID4gMCkge1xuXHRcdFx0XHRcdHggPSAwO1xuXHRcdFx0XHRcdGN0eC50ZXh0QWxpZ24gPSAnbGVmdCc7XG5cdFx0XHRcdH0gZWxzZSBpZiAob3B0aW9ucy50ZXh0QWxpZ24gPT0gXCJyaWdodFwiKSB7XG5cdFx0XHRcdFx0eCA9IGVuY29kaW5nLndpZHRoIC0gMTtcblx0XHRcdFx0XHRjdHgudGV4dEFsaWduID0gJ3JpZ2h0Jztcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBJbiBhbGwgb3RoZXIgY2FzZXMsIGNlbnRlciB0aGUgdGV4dFxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdHggPSBlbmNvZGluZy53aWR0aCAvIDI7XG5cdFx0XHRcdFx0XHRjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdGN0eC5maWxsVGV4dChlbmNvZGluZy50ZXh0LCB4LCB5KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwibW92ZUNhbnZhc0RyYXdpbmdcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gbW92ZUNhbnZhc0RyYXdpbmcoZW5jb2RpbmcpIHtcblx0XHRcdHZhciBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cblx0XHRcdGN0eC50cmFuc2xhdGUoZW5jb2Rpbmcud2lkdGgsIDApO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJyZXN0b3JlQ2FudmFzXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlc3RvcmVDYW52YXMoKSB7XG5cdFx0XHQvLyBHZXQgdGhlIGNhbnZhcyBjb250ZXh0XG5cdFx0XHR2YXIgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5cdFx0XHRjdHgucmVzdG9yZSgpO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBDYW52YXNSZW5kZXJlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ2FudmFzUmVuZGVyZXI7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NhbnZhcyA9IHJlcXVpcmUoJy4vY2FudmFzLmpzJyk7XG5cbnZhciBfY2FudmFzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhbnZhcyk7XG5cbnZhciBfc3ZnID0gcmVxdWlyZSgnLi9zdmcuanMnKTtcblxudmFyIF9zdmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnKTtcblxudmFyIF9vYmplY3QgPSByZXF1aXJlKCcuL29iamVjdC5qcycpO1xuXG52YXIgX29iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7IENhbnZhc1JlbmRlcmVyOiBfY2FudmFzMi5kZWZhdWx0LCBTVkdSZW5kZXJlcjogX3N2ZzIuZGVmYXVsdCwgT2JqZWN0UmVuZGVyZXI6IF9vYmplY3QyLmRlZmF1bHQgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIE9iamVjdFJlbmRlcmVyID0gZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiBPYmplY3RSZW5kZXJlcihvYmplY3QsIGVuY29kaW5ncywgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBPYmplY3RSZW5kZXJlcik7XG5cblx0XHR0aGlzLm9iamVjdCA9IG9iamVjdDtcblx0XHR0aGlzLmVuY29kaW5ncyA9IGVuY29kaW5ncztcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKE9iamVjdFJlbmRlcmVyLCBbe1xuXHRcdGtleTogXCJyZW5kZXJcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0dGhpcy5vYmplY3QuZW5jb2RpbmdzID0gdGhpcy5lbmNvZGluZ3M7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIE9iamVjdFJlbmRlcmVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBPYmplY3RSZW5kZXJlcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0VG90YWxXaWR0aE9mRW5jb2RpbmdzID0gZXhwb3J0cy5jYWxjdWxhdGVFbmNvZGluZ0F0dHJpYnV0ZXMgPSBleHBvcnRzLmdldEJhcmNvZGVQYWRkaW5nID0gZXhwb3J0cy5nZXRFbmNvZGluZ0hlaWdodCA9IGV4cG9ydHMuZ2V0TWF4aW11bUhlaWdodE9mRW5jb2RpbmdzID0gdW5kZWZpbmVkO1xuXG52YXIgX21lcmdlID0gcmVxdWlyZShcIi4uL2hlbHAvbWVyZ2UuanNcIik7XG5cbnZhciBfbWVyZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWVyZ2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRFbmNvZGluZ0hlaWdodChlbmNvZGluZywgb3B0aW9ucykge1xuXHRyZXR1cm4gb3B0aW9ucy5oZWlnaHQgKyAob3B0aW9ucy5kaXNwbGF5VmFsdWUgJiYgZW5jb2RpbmcudGV4dC5sZW5ndGggPiAwID8gb3B0aW9ucy5mb250U2l6ZSArIG9wdGlvbnMudGV4dE1hcmdpbiA6IDApICsgb3B0aW9ucy5tYXJnaW5Ub3AgKyBvcHRpb25zLm1hcmdpbkJvdHRvbTtcbn1cblxuZnVuY3Rpb24gZ2V0QmFyY29kZVBhZGRpbmcodGV4dFdpZHRoLCBiYXJjb2RlV2lkdGgsIG9wdGlvbnMpIHtcblx0aWYgKG9wdGlvbnMuZGlzcGxheVZhbHVlICYmIGJhcmNvZGVXaWR0aCA8IHRleHRXaWR0aCkge1xuXHRcdGlmIChvcHRpb25zLnRleHRBbGlnbiA9PSBcImNlbnRlclwiKSB7XG5cdFx0XHRyZXR1cm4gTWF0aC5mbG9vcigodGV4dFdpZHRoIC0gYmFyY29kZVdpZHRoKSAvIDIpO1xuXHRcdH0gZWxzZSBpZiAob3B0aW9ucy50ZXh0QWxpZ24gPT0gXCJsZWZ0XCIpIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH0gZWxzZSBpZiAob3B0aW9ucy50ZXh0QWxpZ24gPT0gXCJyaWdodFwiKSB7XG5cdFx0XHRyZXR1cm4gTWF0aC5mbG9vcih0ZXh0V2lkdGggLSBiYXJjb2RlV2lkdGgpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gMDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlRW5jb2RpbmdBdHRyaWJ1dGVzKGVuY29kaW5ncywgYmFyY29kZU9wdGlvbnMsIGNvbnRleHQpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbmNvZGluZ3MubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZW5jb2RpbmcgPSBlbmNvZGluZ3NbaV07XG5cdFx0dmFyIG9wdGlvbnMgPSAoMCwgX21lcmdlMi5kZWZhdWx0KShiYXJjb2RlT3B0aW9ucywgZW5jb2Rpbmcub3B0aW9ucyk7XG5cblx0XHQvLyBDYWxjdWxhdGUgdGhlIHdpZHRoIG9mIHRoZSBlbmNvZGluZ1xuXHRcdHZhciB0ZXh0V2lkdGg7XG5cdFx0aWYgKG9wdGlvbnMuZGlzcGxheVZhbHVlKSB7XG5cdFx0XHR0ZXh0V2lkdGggPSBtZXNzdXJlVGV4dChlbmNvZGluZy50ZXh0LCBvcHRpb25zLCBjb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGV4dFdpZHRoID0gMDtcblx0XHR9XG5cblx0XHR2YXIgYmFyY29kZVdpZHRoID0gZW5jb2RpbmcuZGF0YS5sZW5ndGggKiBvcHRpb25zLndpZHRoO1xuXHRcdGVuY29kaW5nLndpZHRoID0gTWF0aC5jZWlsKE1hdGgubWF4KHRleHRXaWR0aCwgYmFyY29kZVdpZHRoKSk7XG5cblx0XHRlbmNvZGluZy5oZWlnaHQgPSBnZXRFbmNvZGluZ0hlaWdodChlbmNvZGluZywgb3B0aW9ucyk7XG5cblx0XHRlbmNvZGluZy5iYXJjb2RlUGFkZGluZyA9IGdldEJhcmNvZGVQYWRkaW5nKHRleHRXaWR0aCwgYmFyY29kZVdpZHRoLCBvcHRpb25zKTtcblx0fVxufVxuXG5mdW5jdGlvbiBnZXRUb3RhbFdpZHRoT2ZFbmNvZGluZ3MoZW5jb2RpbmdzKSB7XG5cdHZhciB0b3RhbFdpZHRoID0gMDtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbmNvZGluZ3MubGVuZ3RoOyBpKyspIHtcblx0XHR0b3RhbFdpZHRoICs9IGVuY29kaW5nc1tpXS53aWR0aDtcblx0fVxuXHRyZXR1cm4gdG90YWxXaWR0aDtcbn1cblxuZnVuY3Rpb24gZ2V0TWF4aW11bUhlaWdodE9mRW5jb2RpbmdzKGVuY29kaW5ncykge1xuXHR2YXIgbWF4SGVpZ2h0ID0gMDtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbmNvZGluZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAoZW5jb2RpbmdzW2ldLmhlaWdodCA+IG1heEhlaWdodCkge1xuXHRcdFx0bWF4SGVpZ2h0ID0gZW5jb2RpbmdzW2ldLmhlaWdodDtcblx0XHR9XG5cdH1cblx0cmV0dXJuIG1heEhlaWdodDtcbn1cblxuZnVuY3Rpb24gbWVzc3VyZVRleHQoc3RyaW5nLCBvcHRpb25zLCBjb250ZXh0KSB7XG5cdHZhciBjdHg7XG5cblx0aWYgKGNvbnRleHQpIHtcblx0XHRjdHggPSBjb250ZXh0O1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdGN0eCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIElmIHRoZSB0ZXh0IGNhbm5vdCBiZSBtZXNzdXJlZCB3ZSB3aWxsIHJldHVybiAwLlxuXHRcdC8vIFRoaXMgd2lsbCBtYWtlIHNvbWUgYmFyY29kZSB3aXRoIGJpZyB0ZXh0IHJlbmRlciBpbmNvcnJlY3RseVxuXHRcdHJldHVybiAwO1xuXHR9XG5cdGN0eC5mb250ID0gb3B0aW9ucy5mb250T3B0aW9ucyArIFwiIFwiICsgb3B0aW9ucy5mb250U2l6ZSArIFwicHggXCIgKyBvcHRpb25zLmZvbnQ7XG5cblx0Ly8gQ2FsY3VsYXRlIHRoZSB3aWR0aCBvZiB0aGUgZW5jb2Rpbmdcblx0dmFyIG1lYXN1cmVUZXh0UmVzdWx0ID0gY3R4Lm1lYXN1cmVUZXh0KHN0cmluZyk7XG5cdGlmICghbWVhc3VyZVRleHRSZXN1bHQpIHtcblx0XHQvLyBTb21lIGltcGxlbWVudGF0aW9ucyBkb24ndCBpbXBsZW1lbnQgbWVhc3VyZVRleHQgYW5kIHJldHVybiB1bmRlZmluZWQuXG5cdFx0Ly8gSWYgdGhlIHRleHQgY2Fubm90IGJlIG1lYXN1cmVkIHdlIHdpbGwgcmV0dXJuIDAuXG5cdFx0Ly8gVGhpcyB3aWxsIG1ha2Ugc29tZSBiYXJjb2RlIHdpdGggYmlnIHRleHQgcmVuZGVyIGluY29ycmVjdGx5XG5cdFx0cmV0dXJuIDA7XG5cdH1cblx0dmFyIHNpemUgPSBtZWFzdXJlVGV4dFJlc3VsdC53aWR0aDtcblx0cmV0dXJuIHNpemU7XG59XG5cbmV4cG9ydHMuZ2V0TWF4aW11bUhlaWdodE9mRW5jb2RpbmdzID0gZ2V0TWF4aW11bUhlaWdodE9mRW5jb2RpbmdzO1xuZXhwb3J0cy5nZXRFbmNvZGluZ0hlaWdodCA9IGdldEVuY29kaW5nSGVpZ2h0O1xuZXhwb3J0cy5nZXRCYXJjb2RlUGFkZGluZyA9IGdldEJhcmNvZGVQYWRkaW5nO1xuZXhwb3J0cy5jYWxjdWxhdGVFbmNvZGluZ0F0dHJpYnV0ZXMgPSBjYWxjdWxhdGVFbmNvZGluZ0F0dHJpYnV0ZXM7XG5leHBvcnRzLmdldFRvdGFsV2lkdGhPZkVuY29kaW5ncyA9IGdldFRvdGFsV2lkdGhPZkVuY29kaW5nczsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9tZXJnZSA9IHJlcXVpcmUoXCIuLi9oZWxwL21lcmdlLmpzXCIpO1xuXG52YXIgX21lcmdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21lcmdlKTtcblxudmFyIF9zaGFyZWQgPSByZXF1aXJlKFwiLi9zaGFyZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBzdmducyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcblxudmFyIFNWR1JlbmRlcmVyID0gZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiBTVkdSZW5kZXJlcihzdmcsIGVuY29kaW5ncywgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTVkdSZW5kZXJlcik7XG5cblx0XHR0aGlzLnN2ZyA9IHN2Zztcblx0XHR0aGlzLmVuY29kaW5ncyA9IGVuY29kaW5ncztcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdHRoaXMuZG9jdW1lbnQgPSBvcHRpb25zLnhtbERvY3VtZW50IHx8IGRvY3VtZW50O1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKFNWR1JlbmRlcmVyLCBbe1xuXHRcdGtleTogXCJyZW5kZXJcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0dmFyIGN1cnJlbnRYID0gdGhpcy5vcHRpb25zLm1hcmdpbkxlZnQ7XG5cblx0XHRcdHRoaXMucHJlcGFyZVNWRygpO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmVuY29kaW5ncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgZW5jb2RpbmcgPSB0aGlzLmVuY29kaW5nc1tpXTtcblx0XHRcdFx0dmFyIGVuY29kaW5nT3B0aW9ucyA9ICgwLCBfbWVyZ2UyLmRlZmF1bHQpKHRoaXMub3B0aW9ucywgZW5jb2Rpbmcub3B0aW9ucyk7XG5cblx0XHRcdFx0dmFyIGdyb3VwID0gdGhpcy5jcmVhdGVHcm91cChjdXJyZW50WCwgZW5jb2RpbmdPcHRpb25zLm1hcmdpblRvcCwgdGhpcy5zdmcpO1xuXG5cdFx0XHRcdHRoaXMuc2V0R3JvdXBPcHRpb25zKGdyb3VwLCBlbmNvZGluZ09wdGlvbnMpO1xuXG5cdFx0XHRcdHRoaXMuZHJhd1N2Z0JhcmNvZGUoZ3JvdXAsIGVuY29kaW5nT3B0aW9ucywgZW5jb2RpbmcpO1xuXHRcdFx0XHR0aGlzLmRyYXdTVkdUZXh0KGdyb3VwLCBlbmNvZGluZ09wdGlvbnMsIGVuY29kaW5nKTtcblxuXHRcdFx0XHRjdXJyZW50WCArPSBlbmNvZGluZy53aWR0aDtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwicHJlcGFyZVNWR1wiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBwcmVwYXJlU1ZHKCkge1xuXHRcdFx0Ly8gQ2xlYXIgdGhlIFNWR1xuXHRcdFx0d2hpbGUgKHRoaXMuc3ZnLmZpcnN0Q2hpbGQpIHtcblx0XHRcdFx0dGhpcy5zdmcucmVtb3ZlQ2hpbGQodGhpcy5zdmcuZmlyc3RDaGlsZCk7XG5cdFx0XHR9XG5cblx0XHRcdCgwLCBfc2hhcmVkLmNhbGN1bGF0ZUVuY29kaW5nQXR0cmlidXRlcykodGhpcy5lbmNvZGluZ3MsIHRoaXMub3B0aW9ucyk7XG5cdFx0XHR2YXIgdG90YWxXaWR0aCA9ICgwLCBfc2hhcmVkLmdldFRvdGFsV2lkdGhPZkVuY29kaW5ncykodGhpcy5lbmNvZGluZ3MpO1xuXHRcdFx0dmFyIG1heEhlaWdodCA9ICgwLCBfc2hhcmVkLmdldE1heGltdW1IZWlnaHRPZkVuY29kaW5ncykodGhpcy5lbmNvZGluZ3MpO1xuXG5cdFx0XHR2YXIgd2lkdGggPSB0b3RhbFdpZHRoICsgdGhpcy5vcHRpb25zLm1hcmdpbkxlZnQgKyB0aGlzLm9wdGlvbnMubWFyZ2luUmlnaHQ7XG5cdFx0XHR0aGlzLnNldFN2Z0F0dHJpYnV0ZXMod2lkdGgsIG1heEhlaWdodCk7XG5cblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuYmFja2dyb3VuZCkge1xuXHRcdFx0XHR0aGlzLmRyYXdSZWN0KDAsIDAsIHdpZHRoLCBtYXhIZWlnaHQsIHRoaXMuc3ZnKS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImZpbGw6XCIgKyB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZCArIFwiO1wiKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwiZHJhd1N2Z0JhcmNvZGVcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZHJhd1N2Z0JhcmNvZGUocGFyZW50LCBvcHRpb25zLCBlbmNvZGluZykge1xuXHRcdFx0dmFyIGJpbmFyeSA9IGVuY29kaW5nLmRhdGE7XG5cblx0XHRcdC8vIENyZWF0ZXMgdGhlIGJhcmNvZGUgb3V0IG9mIHRoZSBlbmNvZGVkIGJpbmFyeVxuXHRcdFx0dmFyIHlGcm9tO1xuXHRcdFx0aWYgKG9wdGlvbnMudGV4dFBvc2l0aW9uID09IFwidG9wXCIpIHtcblx0XHRcdFx0eUZyb20gPSBvcHRpb25zLmZvbnRTaXplICsgb3B0aW9ucy50ZXh0TWFyZ2luO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0eUZyb20gPSAwO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgYmFyV2lkdGggPSAwO1xuXHRcdFx0dmFyIHggPSAwO1xuXHRcdFx0Zm9yICh2YXIgYiA9IDA7IGIgPCBiaW5hcnkubGVuZ3RoOyBiKyspIHtcblx0XHRcdFx0eCA9IGIgKiBvcHRpb25zLndpZHRoICsgZW5jb2RpbmcuYmFyY29kZVBhZGRpbmc7XG5cblx0XHRcdFx0aWYgKGJpbmFyeVtiXSA9PT0gXCIxXCIpIHtcblx0XHRcdFx0XHRiYXJXaWR0aCsrO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGJhcldpZHRoID4gMCkge1xuXHRcdFx0XHRcdHRoaXMuZHJhd1JlY3QoeCAtIG9wdGlvbnMud2lkdGggKiBiYXJXaWR0aCwgeUZyb20sIG9wdGlvbnMud2lkdGggKiBiYXJXaWR0aCwgb3B0aW9ucy5oZWlnaHQsIHBhcmVudCk7XG5cdFx0XHRcdFx0YmFyV2lkdGggPSAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIExhc3QgZHJhdyBpcyBuZWVkZWQgc2luY2UgdGhlIGJhcmNvZGUgZW5kcyB3aXRoIDFcblx0XHRcdGlmIChiYXJXaWR0aCA+IDApIHtcblx0XHRcdFx0dGhpcy5kcmF3UmVjdCh4IC0gb3B0aW9ucy53aWR0aCAqIChiYXJXaWR0aCAtIDEpLCB5RnJvbSwgb3B0aW9ucy53aWR0aCAqIGJhcldpZHRoLCBvcHRpb25zLmhlaWdodCwgcGFyZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwiZHJhd1NWR1RleHRcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZHJhd1NWR1RleHQocGFyZW50LCBvcHRpb25zLCBlbmNvZGluZykge1xuXHRcdFx0dmFyIHRleHRFbGVtID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnbnMsICd0ZXh0Jyk7XG5cblx0XHRcdC8vIERyYXcgdGhlIHRleHQgaWYgZGlzcGxheVZhbHVlIGlzIHNldFxuXHRcdFx0aWYgKG9wdGlvbnMuZGlzcGxheVZhbHVlKSB7XG5cdFx0XHRcdHZhciB4LCB5O1xuXG5cdFx0XHRcdHRleHRFbGVtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZm9udDpcIiArIG9wdGlvbnMuZm9udE9wdGlvbnMgKyBcIiBcIiArIG9wdGlvbnMuZm9udFNpemUgKyBcInB4IFwiICsgb3B0aW9ucy5mb250KTtcblxuXHRcdFx0XHRpZiAob3B0aW9ucy50ZXh0UG9zaXRpb24gPT0gXCJ0b3BcIikge1xuXHRcdFx0XHRcdHkgPSBvcHRpb25zLmZvbnRTaXplIC0gb3B0aW9ucy50ZXh0TWFyZ2luO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHkgPSBvcHRpb25zLmhlaWdodCArIG9wdGlvbnMudGV4dE1hcmdpbiArIG9wdGlvbnMuZm9udFNpemU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBEcmF3IHRoZSB0ZXh0IGluIHRoZSBjb3JyZWN0IFggZGVwZW5kaW5nIG9uIHRoZSB0ZXh0QWxpZ24gb3B0aW9uXG5cdFx0XHRcdGlmIChvcHRpb25zLnRleHRBbGlnbiA9PSBcImxlZnRcIiB8fCBlbmNvZGluZy5iYXJjb2RlUGFkZGluZyA+IDApIHtcblx0XHRcdFx0XHR4ID0gMDtcblx0XHRcdFx0XHR0ZXh0RWxlbS5zZXRBdHRyaWJ1dGUoXCJ0ZXh0LWFuY2hvclwiLCBcInN0YXJ0XCIpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG9wdGlvbnMudGV4dEFsaWduID09IFwicmlnaHRcIikge1xuXHRcdFx0XHRcdHggPSBlbmNvZGluZy53aWR0aCAtIDE7XG5cdFx0XHRcdFx0dGV4dEVsZW0uc2V0QXR0cmlidXRlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gSW4gYWxsIG90aGVyIGNhc2VzLCBjZW50ZXIgdGhlIHRleHRcblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHR4ID0gZW5jb2Rpbmcud2lkdGggLyAyO1xuXHRcdFx0XHRcdFx0dGV4dEVsZW0uc2V0QXR0cmlidXRlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdHRleHRFbGVtLnNldEF0dHJpYnV0ZShcInhcIiwgeCk7XG5cdFx0XHRcdHRleHRFbGVtLnNldEF0dHJpYnV0ZShcInlcIiwgeSk7XG5cblx0XHRcdFx0dGV4dEVsZW0uYXBwZW5kQ2hpbGQodGhpcy5kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlbmNvZGluZy50ZXh0KSk7XG5cblx0XHRcdFx0cGFyZW50LmFwcGVuZENoaWxkKHRleHRFbGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwic2V0U3ZnQXR0cmlidXRlc1wiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBzZXRTdmdBdHRyaWJ1dGVzKHdpZHRoLCBoZWlnaHQpIHtcblx0XHRcdHZhciBzdmcgPSB0aGlzLnN2Zztcblx0XHRcdHN2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCB3aWR0aCArIFwicHhcIik7XG5cdFx0XHRzdmcuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGhlaWdodCArIFwicHhcIik7XG5cdFx0XHRzdmcuc2V0QXR0cmlidXRlKFwieFwiLCBcIjBweFwiKTtcblx0XHRcdHN2Zy5zZXRBdHRyaWJ1dGUoXCJ5XCIsIFwiMHB4XCIpO1xuXHRcdFx0c3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgXCIgKyB3aWR0aCArIFwiIFwiICsgaGVpZ2h0KTtcblxuXHRcdFx0c3ZnLnNldEF0dHJpYnV0ZShcInhtbG5zXCIsIHN2Z25zKTtcblx0XHRcdHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2ZXJzaW9uXCIsIFwiMS4xXCIpO1xuXG5cdFx0XHRzdmcuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApXCIpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJjcmVhdGVHcm91cFwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVHcm91cCh4LCB5LCBwYXJlbnQpIHtcblx0XHRcdHZhciBncm91cCA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z25zLCAnZycpO1xuXHRcdFx0Z3JvdXAuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgeCArIFwiLCBcIiArIHkgKyBcIilcIik7XG5cblx0XHRcdHBhcmVudC5hcHBlbmRDaGlsZChncm91cCk7XG5cblx0XHRcdHJldHVybiBncm91cDtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwic2V0R3JvdXBPcHRpb25zXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHNldEdyb3VwT3B0aW9ucyhncm91cCwgb3B0aW9ucykge1xuXHRcdFx0Z3JvdXAuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJmaWxsOlwiICsgb3B0aW9ucy5saW5lQ29sb3IgKyBcIjtcIik7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcImRyYXdSZWN0XCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGRyYXdSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQsIHBhcmVudCkge1xuXHRcdFx0dmFyIHJlY3QgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmducywgJ3JlY3QnKTtcblxuXHRcdFx0cmVjdC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIHgpO1xuXHRcdFx0cmVjdC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIHkpO1xuXHRcdFx0cmVjdC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCB3aWR0aCk7XG5cdFx0XHRyZWN0LnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBoZWlnaHQpO1xuXG5cdFx0XHRwYXJlbnQuYXBwZW5kQ2hpbGQocmVjdCk7XG5cblx0XHRcdHJldHVybiByZWN0O1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBTVkdSZW5kZXJlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU1ZHUmVuZGVyZXI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxudmFyIGdldFJhbmRvbVZhbHVlcztcbnZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLiBBbHNvLFxuICAgIC8vIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byAobXNDcnlwdG8pIG9uIElFMTEuXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSB8fCB0eXBlb2YgbXNDcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxudmFyIGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSkpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyKSB7XG4gIHZhciBvZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICB2YXIgdXVpZCA9IChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCBzdHJpbmdpZnkgZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gc3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Db250ZW50L0NvbnRlbnRcIjtcbmltcG9ydCB7IGFwcGx5SW5pdGlhbFN0YXRlIH0gZnJvbSBcIi4vcGFnZS1sb2dpYy91aS91aS1pbml0aWFsLXN0YXRlXCI7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoQ29udGVudCgpKTtcblxuYXBwbHlJbml0aWFsU3RhdGUoKTtcblxuLy8gZGVidWdnaW5nXG5jb25zdCBkZWJ1Z2dpbmcgPSB0cnVlO1xuaWYgKGRlYnVnZ2luZykge1xuICAvL1xufVxuIl0sIm5hbWVzIjpbIkRpdiIsIkltZyIsIlN2ZyIsImNvcHlCYXJjb2RlIiwiaGFuZGxlQ2xpY2siLCJCYXJjb2RlIiwicGFyZW50RWxlbWVudCIsImlubmVyVGV4dCIsImNsYXNzTmFtZSIsIm9uY2xpY2siLCJpZCIsImRlYm91bmNlIiwic2V0SW5wdXRWYWx1ZSIsIkxhYmVsIiwiSW5wdXQiLCJTZWxlY3QiLCJPcHRpb24iLCJ2NCIsInV1aWR2NCIsImdlbmVyYXRlQmFyY29kZSIsImdldEJhcmNvZGVQcmltYXJ5Q29sb3JJbnB1dCIsImdldEJhcmNvZGVQcmltYXJ5Q29sb3JQcmVzZXQiLCJnZXRCYXJjb2RlU2Vjb25kYXJ5Q29sb3JJbnB1dCIsImdldEJhcmNvZGVTZWNvbmRhcnlDb2xvclByZXNldCIsImJhcmNvZGVDb25maWciLCJoYW5kbGVQcmltYXJ5Q29sb3JJbnB1dCIsInByZXNldCIsInNlbGVjdGVkIiwiaGFuZGxlU2Vjb25kYXJ5Q29sb3JJbnB1dCIsImhhbmRsZVByaW1hcnlDb2xvclByZXNldCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVNlY29uZGFyeUNvbG9yUHJlc2V0IiwiYmFyY29kZVByaW1hcnlDb2xvcklucHV0SWQiLCJiYXJjb2RlU2Vjb25kYXJ5Q29sb3JJbnB1dElkIiwicHJlc2V0T3B0aW9ucyIsIm5hbWUiLCJCYXJjb2RlUHJpbWFyeUNvbG9ySW5wdXQiLCJpbm5lckhUTUwiLCJmb3IiLCJ0eXBlIiwicHJpbWFyeUNvbG9yIiwic3RhcnRpbmciLCJvbmlucHV0IiwibWFwIiwibyIsInVuZGVmaW5lZCIsIkJhcmNvZGVTZWNvbmRhcnlDb2xvcklucHV0Iiwic2Vjb25kYXJ5Q29sb3IiLCJoYW5kbGVJbnB1dCIsImlzQ2hlY2tlZCIsImNoZWNrZWQiLCJjb25zb2xlIiwibG9nIiwiY29weU1lc3NhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJjbGlja1RvQ29weUlkIiwiQmFyY29kZUVuYWJsZUNsaWNrVG9Db3B5IiwiYmFyY29kZUZvbnREaXNwbGF5SW5wdXRJZCIsIkJhcmNvZGVGb250RGlzcGxheUlucHV0IiwiZm9udERpc3BsYXkiLCJiYXJjb2RlRm9udFNpemVJbnB1dElkIiwiQmFyY29kZUZvbnRTaXplSW5wdXQiLCJtaW4iLCJmb250U2l6ZSIsIm1heCIsInN0ZXAiLCJGb3JtIiwiQmFyY29kZVRleHRJbnB1dCIsIkJhcmNvZGVXaWR0aElucHV0IiwiQmFyY29kZUhlaWdodElucHV0IiwiQmFyY29kZUZvcm0iLCJHZW5lcmF0ZUJ1dHRvbiIsIkJhcmNvZGVHZW5lcmF0b3IiLCJTcGFuIiwiYmFyY29kZUhlaWdodElucHV0SWQiLCJiYXJjb2RlSGVpZ2h0RGlzcGxheUlkIiwiaGVpZ2h0IiwiaGFuZGxlQ2hhbmdlIiwiYmFyY29kZVRleHRJbnB1dElkIiwidGV4dElucHV0IiwiYmFyY29kZVdpZHRoSW5wdXRJZCIsIm9wdGlvbnMiLCJnZXRJbnB1dFZhbHVlIiwiQnV0dG9uIiwiZ2V0QmFyY29kZVRleHRJbnB1dCIsIndpZHRoIiwibWFyZ2luIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiSnNCYXJjb2RlIiwidXBkYXRlQ29weU1lc3NhZ2UiLCJjb250ZW50IiwiZ2V0QmFyY29kZVdpZHRoSW5wdXQiLCJnZXRCYXJjb2RlSGVpZ2h0SW5wdXQiLCJnZXRCYXJjb2RlRm9udFNpemVJbnB1dCIsImRpc3BsYXlWYWx1ZSIsImdldEJhcmNvZGVGb250RGlzcGxheUlucHV0IiwibGluZUNvbG9yIiwiYmFja2dyb3VuZCIsImZvbnQiLCJtYXJnaW5Cb3R0b20iLCJzcmMiLCJiYXJjb2RlIiwiZGF0YSIsImZldGNoIiwiYmxvYiIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlIiwiQ2xpcGJvYXJkSXRlbSIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29weUJhcmNvZGVNZXNzYWdlIiwibWVzc2FnZSIsInNldFRpbWVvdXQiLCJFbGVtZW50IiwiSGVhZGVyIiwiRHluYW1pY0Zvb3RlciIsIk1haW5TZWN0aW9uIiwiQ29udGVudCIsIkEiLCJJY29uIiwiZ2l0aHViSW5mbyIsImR5bmFtaWNZZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiQ29weXJpZ2h0Q29udGFpbmVyIiwiaHJlZiIsInJlcG9OYW1lIiwiRm9vdGVyIiwiQXR0cmlidXRpb25zQ29udGFpbmVyIiwiVE9QQ29udGFpbmVyIiwiRXhwYW5kYWJsZVBhbmVsIiwiTm9uRXhwYW5kYWJsZVBhbmVsIiwiSWNvbnNFeHBsYW5hdGlvbiIsImNvbnRhaW5lciIsInRpdGxlIiwiY2hpbGRyZW4iLCJvdXRlckhUTUwiLCJwYXJlbnRDb250YWluZXIiLCJoMSIsIm90aGVyQ2xhc3NlcyIsImhlYWRlciIsImdlbmVyYXRlVGVzdENvbnRlbnRBcnIiLCJNYWluIiwibWFpbiIsIkV4cGFuZGFibGVQYW5lbFRpdGxlIiwiRXhwYW5kYWJsZVBhbmVsQ29udGVudCIsInByb3BzIiwiY29tcG9uZW50SWQiLCJwYW5lbCIsInRvZ2dsZUV4cGFuc2lvbiIsImV4cGFuc2lvbkNvbnRlbnQiLCJ0b2dnbGVFeHBhbnNpb25CdXR0b24iLCJ0b2dnbGUiLCJpY29uQ2xhc3MiLCJpY29uIiwiZ2V0QWxsQ2Fyb3VzZWxTbGlkZXMiLCJjaGlsZE5vZGVzIiwiZ2V0QWxsQ2Fyb3VzZWxTbGlkZUlkcyIsImVsZW0iLCJnZXRBbGxDYXJvdXNlbE5hdkJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2V0Q3VycmVudFNsaWRlSW5kZXgiLCJhbGxTbGlkZUlkcyIsImN1cnJlbnRTbGlkZUlkIiwiY3VycmVudFNsaWRlSW5kZXgiLCJpbmRleE9mIiwiZ2V0UHJldmlvdXNTbGlkZUluZGV4IiwicHJldmlvdXNTbGlkZUluZGV4IiwiY29ycmVjdGVkSW5kZXgiLCJsZW5ndGgiLCJnZXROZXh0U2xpZGVJbmRleCIsIm5leHRTbGlkZUluZGV4IiwiZ290b1NwZWNpZmljU2xpZGUiLCJhbGxOYXZCdXR0b25zIiwic2VsZWN0ZWROYXZCdXR0b24iLCJzZWxlY3RlZFNsaWRlIiwiYWxsU2xpZGVzIiwiZm9yRWFjaCIsInNsaWRlIiwiY2xpY2tDYXJvdXNlbE5hdiIsImNsaWNrQ2Fyb3VzZWxSaWdodCIsInJlcGxhY2UiLCJjbGlja0Nhcm91c2VsTGVmdCIsImNsaWNrQ2Fyb3VzZWxQbGF5IiwiaGFuZGxlQXV0b0FkdmFuY2UiLCJwbGF5QnV0dG9uIiwicGF1c2VCdXR0b24iLCJjbGlja0Nhcm91c2VsUGF1c2UiLCJpbnRlcnZhbCIsIm1vZGUiLCJwbGF5aW5nIiwid2luZG93Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwidHlwZVN0ciIsInByb3BzT2JqIiwiY2hpbGRBcnIiLCJhcmd1bWVudHMiLCJzZXRBdHRyaWJ1dGVQcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInByb3BlcnR5IiwicHVzaCIsIk9iamVjdCIsImFzc2lnbiIsImNyZWF0ZUVsZW1lbnQiLCJBcnJheSIsImlzQXJyYXkiLCJjaGlsZCIsImFwcGVuZENoaWxkIiwic2V0QXR0cmlidXRlIiwiQXJ0aWNsZSIsIkIiLCJCb2R5IiwiQnIiLCJEYXRhbGlzdCIsIkZpZWxkc2V0IiwiSDEiLCJIMiIsIkgzIiwiSHIiLCJJIiwiTGVnZW5kIiwiTGkiLCJPbCIsIlAiLCJTdHJvbmciLCJUZXh0YXJlYSIsIlVsIiwiYXBwbHlXaW5kb3dMaXN0ZW5lcnMiLCJhcHBseUluaXRpYWxTdGF0ZSIsInVwZGF0ZUJhcmNvZGVXaWR0aERpc3BsYXkiLCJicmVha1BvaW50cyIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJvbnJlc2l6ZSIsIm9ubG9hZCIsInRydW5jYXRlQW5kQWRkRWxsaXBzZSIsInN0cmluZyIsIm51bUNoYXJzVG9LZWVwIiwic2xpY2UiLCJ0cmltRW5kIiwiZm4iLCJ0aW1lb3V0IiwiY29udGV4dCIsImFyZ3MiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFwcGx5IiwiY2FwaXRhbGl6ZSIsInRvVXBwZXJDYXNlIiwidG9Mb3dlckNhc2UiLCJudW1DaGlsZHJlbiIsImZpbGwiLCJnZXRSYW5kb21JbnQiLCJNYXRoIiwiY2VpbCIsImZsb29yIiwicmFuZG9tIiwiaW5wdXRFbGVtZW50IiwiYm9keSIsImRlYnVnZ2luZyJdLCJzb3VyY2VSb290IjoiIn0=