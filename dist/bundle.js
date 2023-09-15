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
    font: "Open Sans",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztVQ052QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNONkI7QUFDc0I7QUFDa0I7QUFFckV3QixRQUFRLENBQUN1TixJQUFJLENBQUN0RCxXQUFXLENBQUMzRix1RUFBTyxDQUFDLENBQUMsQ0FBQztBQUVwQ2dILGtGQUFpQixDQUFDLENBQUM7O0FBRW5CO0FBQ0EsTUFBTWtDLFNBQVMsR0FBRyxJQUFJO0FBQ3RCLElBQUlBLFNBQVMsRUFBRTtFQUNiO0FBQUEsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQmFyY29kZUdlbmVyYXRvci9CYXJjb2RlLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQmFyY29kZUdlbmVyYXRvci9CYXJjb2RlQ29sb3JJbnB1dHMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9CYXJjb2RlR2VuZXJhdG9yL0JhcmNvZGVFbmFibGVDbGlja1RvQ29weS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0JhcmNvZGVHZW5lcmF0b3IvQmFyY29kZUZvbnREaXNwbGF5SW5wdXQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9CYXJjb2RlR2VuZXJhdG9yL0JhcmNvZGVGb250U2l6ZUlucHV0LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQmFyY29kZUdlbmVyYXRvci9CYXJjb2RlRm9ybS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0JhcmNvZGVHZW5lcmF0b3IvQmFyY29kZUdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0JhcmNvZGVHZW5lcmF0b3IvQmFyY29kZUhlaWdodElucHV0LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQmFyY29kZUdlbmVyYXRvci9CYXJjb2RlVGV4dElucHV0LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQmFyY29kZUdlbmVyYXRvci9CYXJjb2RlV0lkdGhJbnB1dC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0JhcmNvZGVHZW5lcmF0b3IvR2VuZXJhdGVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9CYXJjb2RlR2VuZXJhdG9yL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0JhcmNvZGVHZW5lcmF0b3IvbG9naWMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9CYXJjb2RlR2VuZXJhdG9yL3VpLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQ29udGVudC9Db250ZW50LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRHluYW1pY0Zvb3Rlci9Db3B5cmlnaHRDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9EeW5hbWljRm9vdGVyL0R5bmFtaWNGb290ZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9EeW5hbWljRm9vdGVyL1NpdGVBdHRyaWJ1dGlvbnMvQXR0cmlidXRpb25zQ29udGFpbmVyLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRHluYW1pY0Zvb3Rlci9TaXRlQXR0cmlidXRpb25zL0ljb25zRXhwbGFuYXRpb24uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9EeW5hbWljRm9vdGVyL1RPUExpbmtDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvTWFpblNlY3Rpb24vTWFpblNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvRXhwYW5kYWJsZVBhbmVsL0V4cGFuZGFibGVQYW5lbC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9FeHBhbmRhYmxlUGFuZWwvRXhwYW5kYWJsZVBhbmVsQ29udGVudC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9FeHBhbmRhYmxlUGFuZWwvRXhwYW5kYWJsZVBhbmVsVGl0bGUuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvRXhwYW5kYWJsZVBhbmVsL05vbkV4cGFuZGFibGVQYW5lbC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9JY29uLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0ltYWdlQ2Fyb3VzZWwvdWkvY2Fyb3VzZWwtdWkuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fZWxlbWVudHMvRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvcGFnZS1sb2dpYy9kYXRhL2RhdGEtcGFnZS1jb25maWcuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvcGFnZS1sb2dpYy91aS91aS1pbml0aWFsLXN0YXRlLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL3BhZ2UtbG9naWMvdWkvdWktd2luZG93LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vSnNCYXJjb2RlLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvQmFyY29kZS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL0NPREUxMjgvQ09ERTEyOC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL0NPREUxMjgvQ09ERTEyOEEuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9DT0RFMTI4L0NPREUxMjhCLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvQ09ERTEyOC9DT0RFMTI4Qy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL0NPREUxMjgvQ09ERTEyOF9BVVRPLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvQ09ERTEyOC9hdXRvLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvQ09ERTEyOC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9DT0RFMTI4L2luZGV4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvQ09ERTM5L2luZGV4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvRUFOX1VQQy9FQU4uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9FQU5fVVBDL0VBTjEzLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvRUFOX1VQQy9FQU4yLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvRUFOX1VQQy9FQU41LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvRUFOX1VQQy9FQU44LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvRUFOX1VQQy9VUEMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9FQU5fVVBDL1VQQ0UuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9FQU5fVVBDL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL0VBTl9VUEMvZW5jb2Rlci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL0VBTl9VUEMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9HZW5lcmljQmFyY29kZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL0lURi9JVEYuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9JVEYvSVRGMTQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9JVEYvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvSVRGL2luZGV4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvTVNJL01TSS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL01TSS9NU0kxMC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL01TSS9NU0kxMDEwLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvTVNJL01TSTExLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvTVNJL01TSTExMTAuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9NU0kvY2hlY2tzdW1zLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvTVNJL2luZGV4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvY29kYWJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL2luZGV4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvcGhhcm1hY29kZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2V4Y2VwdGlvbnMvRXJyb3JIYW5kbGVyLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vZXhjZXB0aW9ucy9leGNlcHRpb25zLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vaGVscC9maXhPcHRpb25zLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vaGVscC9nZXRPcHRpb25zRnJvbUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9oZWxwL2dldFJlbmRlclByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9oZWxwL2xpbmVhcml6ZUVuY29kaW5ncy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2hlbHAvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9oZWxwL29wdGlvbnNGcm9tU3RyaW5ncy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL29wdGlvbnMvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9yZW5kZXJlcnMvY2FudmFzLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vcmVuZGVyZXJzL2luZGV4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vcmVuZGVyZXJzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL3JlbmRlcmVycy9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9yZW5kZXJlcnMvc3ZnLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRGl2LCBJbWcsIFN2ZyB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCB7IGNvcHlCYXJjb2RlIH0gZnJvbSBcIi4vbG9naWNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbmZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICBjb3B5QmFyY29kZSgpO1xufVxuXG5jb25zdCBCYXJjb2RlID0gKCkgPT4ge1xuICAvL1xuXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAge1xuICAgICAgaW5uZXJUZXh0OiBgYCxcbiAgICAgIGNsYXNzTmFtZTogYGJhcmNvZGUtY29udGFpbmVyYCxcbiAgICB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBEaXYoXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiY29weS1tZXNzYWdlLWNvbnRhaW5lclwiLFxuICAgICAgICAgIG9uY2xpY2soKSB7XG4gICAgICAgICAgICBoYW5kbGVDbGljaygpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtEaXYoeyBpbm5lclRleHQ6IFwiY29weSB0byBjbGlwYm9hcmRcIiB9KV1cbiAgICAgICksXG4gICAgICBJbWcoeyBpZDogXCJiYXJjb2RlXCIsIGNsYXNzTmFtZTogXCJiYXJjb2RlLWltYWdlXCIgfSksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhcmNvZGU7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgZGVib3VuY2UsIHNldElucHV0VmFsdWUgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IERpdiwgTGFiZWwsIElucHV0LCBTZWxlY3QsIE9wdGlvbiB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCB7XG4gIGdlbmVyYXRlQmFyY29kZSxcbiAgZ2V0QmFyY29kZVByaW1hcnlDb2xvcklucHV0LFxuICBnZXRCYXJjb2RlUHJpbWFyeUNvbG9yUHJlc2V0LFxuICBnZXRCYXJjb2RlU2Vjb25kYXJ5Q29sb3JJbnB1dCxcbiAgZ2V0QmFyY29kZVNlY29uZGFyeUNvbG9yUHJlc2V0LFxufSBmcm9tIFwiLi9sb2dpY1wiO1xuaW1wb3J0IHsgYmFyY29kZUNvbmZpZyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcblxuZnVuY3Rpb24gaGFuZGxlUHJpbWFyeUNvbG9ySW5wdXQoKSB7XG4gIGNvbnN0IHByZXNldCA9IGdldEJhcmNvZGVQcmltYXJ5Q29sb3JQcmVzZXQoKTtcbiAgcHJlc2V0LnNlbGVjdGVkID0gdHJ1ZTtcbiAgZGVib3VuY2UoZ2VuZXJhdGVCYXJjb2RlKCkpO1xufVxuZnVuY3Rpb24gaGFuZGxlU2Vjb25kYXJ5Q29sb3JJbnB1dCgpIHtcbiAgY29uc3QgcHJlc2V0ID0gZ2V0QmFyY29kZVNlY29uZGFyeUNvbG9yUHJlc2V0KCk7XG4gIHByZXNldC5zZWxlY3RlZCA9IHRydWU7XG4gIGRlYm91bmNlKGdlbmVyYXRlQmFyY29kZSgpKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUHJpbWFyeUNvbG9yUHJlc2V0KGUpIHtcbiAgc2V0SW5wdXRWYWx1ZShnZXRCYXJjb2RlUHJpbWFyeUNvbG9ySW5wdXQoKSwgZS50YXJnZXQudmFsdWUpO1xuICBkZWJvdW5jZShnZW5lcmF0ZUJhcmNvZGUoKSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVNlY29uZGFyeUNvbG9yUHJlc2V0KGUpIHtcbiAgc2V0SW5wdXRWYWx1ZShnZXRCYXJjb2RlU2Vjb25kYXJ5Q29sb3JJbnB1dCgpLCBlLnRhcmdldC52YWx1ZSk7XG4gIGRlYm91bmNlKGdlbmVyYXRlQmFyY29kZSgpKTtcbn1cblxuZXhwb3J0IGNvbnN0IGJhcmNvZGVQcmltYXJ5Q29sb3JJbnB1dElkID0gdXVpZHY0KCk7XG5leHBvcnQgY29uc3QgYmFyY29kZVNlY29uZGFyeUNvbG9ySW5wdXRJZCA9IHV1aWR2NDtcblxuY29uc3QgcHJlc2V0T3B0aW9ucyA9IFtcbiAgeyBuYW1lOiBcIlVNTiBHb2xkXCIsIHZhbHVlOiBcIiNGRkNDMzNcIiB9LFxuICB7IG5hbWU6IFwiVU1OIE1hcm9vblwiLCB2YWx1ZTogXCIjN0EwMDE5XCIgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBCYXJjb2RlUHJpbWFyeUNvbG9ySW5wdXQgPSAoKSA9PiB7XG4gIC8vXG5cbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdihcbiAgICB7IGlubmVyVGV4dDogYGAsIGNsYXNzTmFtZTogYHZlcnRpY2FsLXN0YWNrYCB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBMYWJlbCh7XG4gICAgICAgIGlubmVySFRNTDogYFByaW1hcnkgY29sb3IgPGVtPihtdXN0IGJlIGxpZ2h0ZXIpPC9lbT46IGAsXG4gICAgICAgIGZvcjogYmFyY29kZVByaW1hcnlDb2xvcklucHV0SWQsXG4gICAgICB9KSxcbiAgICAgIElucHV0KHtcbiAgICAgICAgdHlwZTogXCJjb2xvclwiLFxuICAgICAgICBpZDogYmFyY29kZVByaW1hcnlDb2xvcklucHV0SWQsXG4gICAgICAgIHZhbHVlOiBiYXJjb2RlQ29uZmlnLnByaW1hcnlDb2xvci5zdGFydGluZyxcbiAgICAgICAgb25pbnB1dCgpIHtcbiAgICAgICAgICBoYW5kbGVQcmltYXJ5Q29sb3JJbnB1dCgpO1xuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBEaXYoe30sIFtcbiAgICAgICAgU2VsZWN0KFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG9uaW5wdXQoZSkge1xuICAgICAgICAgICAgICBoYW5kbGVQcmltYXJ5Q29sb3JQcmVzZXQoZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgT3B0aW9uKHtcbiAgICAgICAgICAgICAgaW5uZXJUZXh0OiBcIkRlZmF1bHRcIixcbiAgICAgICAgICAgICAgdmFsdWU6IGJhcmNvZGVDb25maWcucHJpbWFyeUNvbG9yLnN0YXJ0aW5nLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAuLi5wcmVzZXRPcHRpb25zLm1hcCgobykgPT5cbiAgICAgICAgICAgICAgT3B0aW9uKHsgaW5uZXJUZXh0OiBvLm5hbWUsIHZhbHVlOiBvLnZhbHVlIH0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgT3B0aW9uKHtcbiAgICAgICAgICAgICAgaW5uZXJUZXh0OiBcIkN1c3RvbVwiLFxuICAgICAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBpZDogYGN1c3RvbS1wcmVzZXQtJHtiYXJjb2RlUHJpbWFyeUNvbG9ySW5wdXRJZH1gLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBjb25zdCBCYXJjb2RlU2Vjb25kYXJ5Q29sb3JJbnB1dCA9ICgpID0+IHtcbiAgLy9cblxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRGl2KFxuICAgIHsgaW5uZXJUZXh0OiBgYCwgY2xhc3NOYW1lOiBgdmVydGljYWwtc3RhY2tgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIExhYmVsKHtcbiAgICAgICAgaW5uZXJIVE1MOiBgU2Vjb25kYXJ5IGNvbG9yIDxlbT4obXVzdCBiZSBkYXJrZXIpPC9lbT46IGAsXG4gICAgICAgIGZvcjogYmFyY29kZVNlY29uZGFyeUNvbG9ySW5wdXRJZCxcbiAgICAgIH0pLFxuICAgICAgSW5wdXQoe1xuICAgICAgICB0eXBlOiBcImNvbG9yXCIsXG4gICAgICAgIGlkOiBiYXJjb2RlU2Vjb25kYXJ5Q29sb3JJbnB1dElkLFxuICAgICAgICB2YWx1ZTogYmFyY29kZUNvbmZpZy5zZWNvbmRhcnlDb2xvci5zdGFydGluZyxcbiAgICAgICAgb25pbnB1dCgpIHtcbiAgICAgICAgICBoYW5kbGVTZWNvbmRhcnlDb2xvcklucHV0KCk7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIERpdih7fSwgW1xuICAgICAgICBTZWxlY3QoXG4gICAgICAgICAge1xuICAgICAgICAgICAgb25pbnB1dChlKSB7XG4gICAgICAgICAgICAgIGhhbmRsZVNlY29uZGFyeUNvbG9yUHJlc2V0KGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIE9wdGlvbih7XG4gICAgICAgICAgICAgIGlubmVyVGV4dDogXCJEZWZhdWx0XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBiYXJjb2RlQ29uZmlnLnNlY29uZGFyeUNvbG9yLnN0YXJ0aW5nLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAuLi5wcmVzZXRPcHRpb25zLm1hcCgobykgPT5cbiAgICAgICAgICAgICAgT3B0aW9uKHsgaW5uZXJUZXh0OiBvLm5hbWUsIHZhbHVlOiBvLnZhbHVlIH0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgT3B0aW9uKHtcbiAgICAgICAgICAgICAgaW5uZXJUZXh0OiBcIkN1c3RvbVwiLFxuICAgICAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBpZDogYGN1c3RvbS1wcmVzZXQtJHtiYXJjb2RlU2Vjb25kYXJ5Q29sb3JJbnB1dElkfWAsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICBdKSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYsIExhYmVsLCBJbnB1dCB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuZnVuY3Rpb24gaGFuZGxlSW5wdXQoZSkge1xuICBjb25zdCBpc0NoZWNrZWQgPSBlLnRhcmdldC5jaGVja2VkO1xuICBjb25zb2xlLmxvZyhpc0NoZWNrZWQpO1xuICBjb25zdCBjb3B5TWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29weS1tZXNzYWdlLWNvbnRhaW5lclwiKTtcbiAgY29uc29sZS5sb2coY29weU1lc3NhZ2UpO1xuXG4gIGlzQ2hlY2tlZFxuICAgID8gY29weU1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXktbm9uZVwiKVxuICAgIDogY29weU1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktbm9uZVwiKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNsaWNrVG9Db3B5SWQgPSB1dWlkdjQoKTtcbmNvbnN0IEJhcmNvZGVFbmFibGVDbGlja1RvQ29weSA9ICgpID0+IHtcbiAgLy9cblxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRGl2KFxuICAgIHsgaW5uZXJUZXh0OiBgYCwgY2xhc3NOYW1lOiBgYmFyY29kZS1lbmFibGUtY2xpY2stdG8tY29weWAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgTGFiZWwoeyBmb3I6IGNsaWNrVG9Db3B5SWQsIGlubmVyVGV4dDogYEVuYWJsZSBjbGljayB0byBjb3B5YCB9KSxcbiAgICAgIElucHV0KHtcbiAgICAgICAgaWQ6IGNsaWNrVG9Db3B5SWQsXG4gICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICAgICAgb25pbnB1dChlKSB7XG4gICAgICAgICAgaGFuZGxlSW5wdXQoZSk7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIERpdih7XG4gICAgICAgIGNsYXNzTmFtZTogXCJzbWFsbC1mb250XCIsXG4gICAgICAgIGlubmVyVGV4dDogXCIoRmVhdHVyZSBvbmx5IHdvcmtzIGluIEdvb2dsZSBDaHJvbWUpXCIsXG4gICAgICB9KSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFyY29kZUVuYWJsZUNsaWNrVG9Db3B5O1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IERpdiwgSW5wdXQsIExhYmVsIH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVCYXJjb2RlIH0gZnJvbSBcIi4vbG9naWNcIjtcbmltcG9ydCB7IGJhcmNvZGVDb25maWcgfSBmcm9tIFwiLi9jb25maWdcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcblxuZXhwb3J0IGNvbnN0IGJhcmNvZGVGb250RGlzcGxheUlucHV0SWQgPSB1dWlkdjQoKTtcblxuZnVuY3Rpb24gaGFuZGxlSW5wdXQoKSB7XG4gIGRlYm91bmNlKGdlbmVyYXRlQmFyY29kZSgpKTtcbn1cblxuY29uc3QgQmFyY29kZUZvbnREaXNwbGF5SW5wdXQgPSAoKSA9PiB7XG4gIC8vXG5cbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdih7fSwgW1xuICAgIExhYmVsKHtcbiAgICAgIGZvcjogYmFyY29kZUZvbnREaXNwbGF5SW5wdXRJZCxcbiAgICAgIGlubmVySFRNTDogYFNob3cgdGV4dDogYCxcbiAgICB9KSxcbiAgICBJbnB1dChcbiAgICAgIHtcbiAgICAgICAgaWQ6IGJhcmNvZGVGb250RGlzcGxheUlucHV0SWQsXG4gICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgaW5uZXJUZXh0OiBgYCxcbiAgICAgICAgY2xhc3NOYW1lOiBgYCxcblxuICAgICAgICBjaGVja2VkOiBiYXJjb2RlQ29uZmlnLmZvbnREaXNwbGF5LnN0YXJ0aW5nLFxuICAgICAgICBvbmlucHV0KCkge1xuICAgICAgICAgIGhhbmRsZUlucHV0KCk7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgICAgW11cbiAgICApLFxuICBdKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXJjb2RlRm9udERpc3BsYXlJbnB1dDtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYsIElucHV0LCBMYWJlbCB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IGdlbmVyYXRlQmFyY29kZSB9IGZyb20gXCIuL2xvZ2ljXCI7XG5pbXBvcnQgeyBiYXJjb2RlQ29uZmlnIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG5cbmV4cG9ydCBjb25zdCBiYXJjb2RlRm9udFNpemVJbnB1dElkID0gdXVpZHY0KCk7XG5cbmZ1bmN0aW9uIGhhbmRsZUlucHV0KCkge1xuICBkZWJvdW5jZShnZW5lcmF0ZUJhcmNvZGUoKSk7XG59XG5cbmNvbnN0IEJhcmNvZGVGb250U2l6ZUlucHV0ID0gKCkgPT4ge1xuICAvL1xuXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoeyBjbGFzc05hbWU6IGB2ZXJ0aWNhbC1zdGFja2AgfSwgW1xuICAgIExhYmVsKHtcbiAgICAgIGZvcjogYmFyY29kZUZvbnRTaXplSW5wdXRJZCxcbiAgICAgIGlubmVySFRNTDogYEZvbnQgc2l6ZTogYCxcbiAgICB9KSxcbiAgICBJbnB1dChcbiAgICAgIHtcbiAgICAgICAgaWQ6IGJhcmNvZGVGb250U2l6ZUlucHV0SWQsXG4gICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgIGlubmVyVGV4dDogYGAsXG4gICAgICAgIGNsYXNzTmFtZTogYGAsXG4gICAgICAgIG1pbjogYmFyY29kZUNvbmZpZy5mb250U2l6ZS5taW4sXG4gICAgICAgIG1heDogYmFyY29kZUNvbmZpZy5mb250U2l6ZS5tYXgsXG4gICAgICAgIHN0ZXA6IGJhcmNvZGVDb25maWcuZm9udFNpemUuc3RlcCxcbiAgICAgICAgdmFsdWU6IGJhcmNvZGVDb25maWcuZm9udFNpemUuc3RhcnRpbmcsXG4gICAgICAgIG9uaW5wdXQoKSB7XG4gICAgICAgICAgaGFuZGxlSW5wdXQoKTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgICBbXVxuICAgICksXG4gIF0pO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhcmNvZGVGb250U2l6ZUlucHV0O1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEZvcm0sIERpdiB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuaW1wb3J0IEJhcmNvZGVUZXh0SW5wdXQgZnJvbSBcIi4vQmFyY29kZVRleHRJbnB1dFwiO1xuaW1wb3J0IEJhcmNvZGVXaWR0aElucHV0IGZyb20gXCIuL0JhcmNvZGVXSWR0aElucHV0XCI7XG5pbXBvcnQgQmFyY29kZUhlaWdodElucHV0IGZyb20gXCIuL0JhcmNvZGVIZWlnaHRJbnB1dFwiO1xuaW1wb3J0IEJhcmNvZGVGb250U2l6ZUlucHV0IGZyb20gXCIuL0JhcmNvZGVGb250U2l6ZUlucHV0XCI7XG5pbXBvcnQgQmFyY29kZUZvbnREaXNwbGF5SW5wdXQgZnJvbSBcIi4vQmFyY29kZUZvbnREaXNwbGF5SW5wdXRcIjtcbmltcG9ydCB7XG4gIEJhcmNvZGVQcmltYXJ5Q29sb3JJbnB1dCxcbiAgQmFyY29kZVNlY29uZGFyeUNvbG9ySW5wdXQsXG59IGZyb20gXCIuL0JhcmNvZGVDb2xvcklucHV0c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuXG5jb25zdCBCYXJjb2RlRm9ybSA9ICgpID0+IHtcbiAgLy9cblxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRm9ybShcbiAgICB7XG4gICAgICBpbm5lclRleHQ6IGBgLFxuICAgICAgY2xhc3NOYW1lOiBgYmFyY29kZS1mb3JtIGAsXG4gICAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgRGl2KHsgY2xhc3NOYW1lOiBcImZvcm0tcm93LTItYXV0b1wiIH0sIFtcbiAgICAgICAgQmFyY29kZVRleHRJbnB1dCgpLFxuICAgICAgICBCYXJjb2RlRm9udERpc3BsYXlJbnB1dCgpLFxuICAgICAgXSksXG4gICAgICBEaXYoeyBjbGFzc05hbWU6IFwiZm9ybS1yb3ctM1wiIH0sIFtcbiAgICAgICAgQmFyY29kZVdpZHRoSW5wdXQoKSxcbiAgICAgICAgQmFyY29kZUhlaWdodElucHV0KCksXG4gICAgICAgIEJhcmNvZGVGb250U2l6ZUlucHV0KCksXG4gICAgICBdKSxcbiAgICAgIERpdih7IGNsYXNzTmFtZTogXCJmb3JtLXJvdy0yXCIgfSwgW1xuICAgICAgICBCYXJjb2RlUHJpbWFyeUNvbG9ySW5wdXQoKSxcbiAgICAgICAgQmFyY29kZVNlY29uZGFyeUNvbG9ySW5wdXQoKSxcbiAgICAgIF0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXJjb2RlRm9ybTtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYgfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgQmFyY29kZSBmcm9tIFwiLi9CYXJjb2RlXCI7XG5pbXBvcnQgQmFyY29kZUVuYWJsZUNsaWNrVG9Db3B5IGZyb20gXCIuL0JhcmNvZGVFbmFibGVDbGlja1RvQ29weVwiO1xuaW1wb3J0IEJhcmNvZGVGb3JtIGZyb20gXCIuL0JhcmNvZGVGb3JtXCI7XG5cbmltcG9ydCBHZW5lcmF0ZUJ1dHRvbiBmcm9tIFwiLi9HZW5lcmF0ZUJ1dHRvblwiO1xuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEJhcmNvZGVHZW5lcmF0b3IgPSAoKSA9PiB7XG4gIC8vXG5cbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdihcbiAgICB7IGlubmVyVGV4dDogYGAsIGNsYXNzTmFtZTogYGJhcmNvZGUtZ2VuZXJhdG9yYCB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBCYXJjb2RlRm9ybSgpLFxuICAgICAgRGl2KHsgY2xhc3NOYW1lOiBcImJhcmNvZGUtc2VjdGlvblwiIH0sIFtcbiAgICAgICAgQmFyY29kZSgpLFxuICAgICAgICBEaXYoe30sIFtCYXJjb2RlRW5hYmxlQ2xpY2tUb0NvcHkoKV0pLFxuICAgICAgXSksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhcmNvZGVHZW5lcmF0b3I7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRGl2LCBJbnB1dCwgTGFiZWwsIFNwYW4gfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZUJhcmNvZGUgfSBmcm9tIFwiLi9sb2dpY1wiO1xuaW1wb3J0IHsgYmFyY29kZUNvbmZpZyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuXG5leHBvcnQgY29uc3QgYmFyY29kZUhlaWdodElucHV0SWQgPSB1dWlkdjQoKTtcbmV4cG9ydCBjb25zdCBiYXJjb2RlSGVpZ2h0RGlzcGxheUlkID0gYGJhcmNvZGUtaGVpZ2h0LWRpc3BsYXktJHtiYXJjb2RlSGVpZ2h0SW5wdXRJZH1gO1xuXG5mdW5jdGlvbiBoYW5kbGVJbnB1dCgpIHtcbiAgZGVib3VuY2UoZ2VuZXJhdGVCYXJjb2RlKCkpO1xufVxuXG5jb25zdCBCYXJjb2RlSGVpZ2h0SW5wdXQgPSAoKSA9PiB7XG4gIC8vXG5cbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdih7IGNsYXNzTmFtZTogYHZlcnRpY2FsLXN0YWNrYCB9LCBbXG4gICAgTGFiZWwoe1xuICAgICAgZm9yOiBiYXJjb2RlSGVpZ2h0SW5wdXRJZCxcbiAgICAgIGlubmVySFRNTDogYEhlaWdodDogYCxcbiAgICB9KSxcbiAgICBJbnB1dChcbiAgICAgIHtcbiAgICAgICAgaWQ6IGJhcmNvZGVIZWlnaHRJbnB1dElkLFxuICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICBpbm5lclRleHQ6IGBgLFxuICAgICAgICBjbGFzc05hbWU6IGBgLFxuICAgICAgICBtaW46IGJhcmNvZGVDb25maWcuaGVpZ2h0Lm1pbixcbiAgICAgICAgbWF4OiBiYXJjb2RlQ29uZmlnLmhlaWdodC5tYXgsXG4gICAgICAgIHN0ZXA6IGJhcmNvZGVDb25maWcuaGVpZ2h0LnN0ZXAsXG4gICAgICAgIHZhbHVlOiBiYXJjb2RlQ29uZmlnLmhlaWdodC5zdGFydGluZyxcbiAgICAgICAgb25pbnB1dCgpIHtcbiAgICAgICAgICBoYW5kbGVJbnB1dCgpO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICAgIFtdXG4gICAgKSxcbiAgXSk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFyY29kZUhlaWdodElucHV0O1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IERpdiwgSW5wdXQgfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVCYXJjb2RlIH0gZnJvbSBcIi4vbG9naWNcIjtcbmltcG9ydCB7IGJhcmNvZGVDb25maWcgfSBmcm9tIFwiLi9jb25maWdcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbmZ1bmN0aW9uIGhhbmRsZUNoYW5nZSgpIHtcbiAgZ2VuZXJhdGVCYXJjb2RlKCk7XG59XG5leHBvcnQgY29uc3QgYmFyY29kZVRleHRJbnB1dElkID0gdXVpZHY0KCk7XG5cbmNvbnN0IEJhcmNvZGVUZXh0SW5wdXQgPSAoKSA9PiB7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAge1xuICAgICAgaW5uZXJUZXh0OiBgYCxcbiAgICAgIGNsYXNzTmFtZTogYGAsXG4gICAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgSW5wdXQoe1xuICAgICAgICBpZDogYCR7YmFyY29kZVRleHRJbnB1dElkfWAsXG4gICAgICAgIHZhbHVlOiBiYXJjb2RlQ29uZmlnLnRleHRJbnB1dC5zdGFydGluZyxcbiAgICAgICAgb25pbnB1dCgpIHtcbiAgICAgICAgICBoYW5kbGVDaGFuZ2UoKTtcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXJjb2RlVGV4dElucHV0O1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IERpdiwgTGFiZWwsIE9wdGlvbiwgU2VsZWN0IH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVCYXJjb2RlIH0gZnJvbSBcIi4vbG9naWNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcblxuZXhwb3J0IGNvbnN0IGJhcmNvZGVXaWR0aElucHV0SWQgPSB1dWlkdjQoKTtcblxuZnVuY3Rpb24gaGFuZGxlSW5wdXQoKSB7XG4gIGRlYm91bmNlKGdlbmVyYXRlQmFyY29kZSgpKTtcbn1cblxuY29uc3Qgb3B0aW9ucyA9IFtcbiAgeyBuYW1lOiBcIk5vcm1hbFwiLCB2YWx1ZTogMSB9LFxuICB7IG5hbWU6IFwiV2lkZVwiLCB2YWx1ZTogMiB9LFxuXTtcblxuY29uc3QgQmFyY29kZVdpZHRoSW5wdXQgPSAoKSA9PiB7XG4gIC8vXG5cbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdih7IGNsYXNzTmFtZTogYHZlcnRpY2FsLXN0YWNrYCB9LCBbXG4gICAgTGFiZWwoe1xuICAgICAgZm9yOiBiYXJjb2RlV2lkdGhJbnB1dElkLFxuICAgICAgaW5uZXJIVE1MOiBgV2lkdGg6IGAsXG4gICAgfSksXG4gICAgU2VsZWN0KFxuICAgICAge1xuICAgICAgICBpZDogYmFyY29kZVdpZHRoSW5wdXRJZCxcbiAgICAgICAgb25pbnB1dCgpIHtcbiAgICAgICAgICBoYW5kbGVJbnB1dCgpO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFsuLi5vcHRpb25zLm1hcCgobykgPT4gT3B0aW9uKHsgaW5uZXJUZXh0OiBvLm5hbWUsIHZhbHVlOiBvLnZhbHVlIH0pKV1cbiAgICApLFxuICBdKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXJjb2RlV2lkdGhJbnB1dDtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBnZXRJbnB1dFZhbHVlIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgeyBiYXJjb2RlVGV4dElucHV0SWQgfSBmcm9tIFwiLi9CYXJjb2RlVGV4dElucHV0XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZUJhcmNvZGUsIGdldEJhcmNvZGVUZXh0SW5wdXQgfSBmcm9tIFwiLi9sb2dpY1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuXG5jb25zdCBHZW5lcmF0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgLy9cblxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gQnV0dG9uKFxuICAgIHtcbiAgICAgIGlubmVyVGV4dDogYEdlbmVyYXRlYCxcbiAgICAgIGNsYXNzTmFtZTogYGAsXG4gICAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW11cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHZW5lcmF0ZUJ1dHRvbjtcbiIsImV4cG9ydCBjb25zdCBiYXJjb2RlQ29uZmlnID0ge1xuICB3aWR0aDoge1xuICAgIHN0YXJ0aW5nOiAxLFxuICAgIG1pbjogMSxcbiAgICBtYXg6IDEwLFxuICAgIHN0ZXA6IDAuMSxcbiAgfSxcbiAgaGVpZ2h0OiB7XG4gICAgc3RhcnRpbmc6IDUwLFxuICAgIG1pbjogMTAsXG4gICAgbWF4OiAyNTAsXG4gICAgc3RlcDogMixcbiAgfSxcbiAgZm9udFNpemU6IHtcbiAgICBzdGFydGluZzogMTQsXG4gICAgbWluOiA1LFxuICAgIG1heDogMTAwLFxuICAgIHN0ZXA6IDEsXG4gIH0sXG4gIGZvbnREaXNwbGF5OiB7XG4gICAgc3RhcnRpbmc6IHRydWUsXG4gIH0sXG4gIG1hcmdpbjoge1xuICAgIHN0YXJ0aW5nOiB7XG4gICAgICBtYXJnaW46IDgsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgfSxcbiAgfSxcbiAgdGV4dElucHV0OiB7XG4gICAgc3RhcnRpbmc6IFwiVGhpcyBpcyBvbmx5IGEgdGVzdFwiLFxuICB9LFxuICBzZWNvbmRhcnlDb2xvcjoge1xuICAgIHN0YXJ0aW5nOiBcIiMwMDAwMDBcIixcbiAgfSxcbiAgcHJpbWFyeUNvbG9yOiB7XG4gICAgc3RhcnRpbmc6IFwiI2ZmZmZmZlwiLFxuICB9LFxufTtcbiIsImltcG9ydCBKc0JhcmNvZGUgZnJvbSBcImpzYmFyY29kZVwiO1xuXG5pbXBvcnQgeyBiYXJjb2RlVGV4dElucHV0SWQgfSBmcm9tIFwiLi9CYXJjb2RlVGV4dElucHV0XCI7XG5pbXBvcnQgeyBiYXJjb2RlV2lkdGhJbnB1dElkIH0gZnJvbSBcIi4vQmFyY29kZVdJZHRoSW5wdXRcIjtcbmltcG9ydCB7IGdldElucHV0VmFsdWUgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IGJhcmNvZGVIZWlnaHRJbnB1dElkIH0gZnJvbSBcIi4vQmFyY29kZUhlaWdodElucHV0XCI7XG5pbXBvcnQgeyBiYXJjb2RlRm9udFNpemVJbnB1dElkIH0gZnJvbSBcIi4vQmFyY29kZUZvbnRTaXplSW5wdXRcIjtcbmltcG9ydCB7IGJhcmNvZGVGb250RGlzcGxheUlucHV0SWQgfSBmcm9tIFwiLi9CYXJjb2RlRm9udERpc3BsYXlJbnB1dFwiO1xuXG5pbXBvcnQgeyBiYXJjb2RlQ29uZmlnIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgeyB1cGRhdGVDb3B5TWVzc2FnZSB9IGZyb20gXCIuL3VpXCI7XG5pbXBvcnQge1xuICBiYXJjb2RlUHJpbWFyeUNvbG9ySW5wdXRJZCxcbiAgYmFyY29kZVNlY29uZGFyeUNvbG9ySW5wdXRJZCxcbn0gZnJvbSBcIi4vQmFyY29kZUNvbG9ySW5wdXRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUJhcmNvZGUob3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyA/IG9wdGlvbnMgOiB7fTtcbiAgY29uc3QgY29udGVudCA9IGdldElucHV0VmFsdWUoZ2V0QmFyY29kZVRleHRJbnB1dCgpKVxuICAgID8gZ2V0SW5wdXRWYWx1ZShnZXRCYXJjb2RlVGV4dElucHV0KCkpXG4gICAgOiBcIjxOT05FPlwiO1xuXG4gIGNvbnN0IHdpZHRoID0gZ2V0SW5wdXRWYWx1ZShnZXRCYXJjb2RlV2lkdGhJbnB1dCgpKTtcbiAgY29uc3QgaGVpZ2h0ID0gZ2V0SW5wdXRWYWx1ZShnZXRCYXJjb2RlSGVpZ2h0SW5wdXQoKSk7XG4gIGNvbnN0IGZvbnRTaXplID0gZ2V0SW5wdXRWYWx1ZShnZXRCYXJjb2RlRm9udFNpemVJbnB1dCgpKTtcbiAgY29uc3QgZGlzcGxheVZhbHVlID0gZ2V0QmFyY29kZUZvbnREaXNwbGF5SW5wdXQoKS5jaGVja2VkO1xuICBjb25zdCB7IGJvdHRvbSwgbWFyZ2luIH0gPSBiYXJjb2RlQ29uZmlnLm1hcmdpbi5zdGFydGluZztcbiAgY29uc3QgbGluZUNvbG9yID0gZ2V0SW5wdXRWYWx1ZShnZXRCYXJjb2RlU2Vjb25kYXJ5Q29sb3JJbnB1dCgpKTtcbiAgY29uc3QgYmFja2dyb3VuZCA9IGdldElucHV0VmFsdWUoZ2V0QmFyY29kZVByaW1hcnlDb2xvcklucHV0KCkpO1xuXG4gIEpzQmFyY29kZShcIiNiYXJjb2RlXCIsIGNvbnRlbnQsIHtcbiAgICAuLi5vcHRpb25zLFxuICAgIGZvbnQ6IFwiT3BlbiBTYW5zXCIsXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGZvbnRTaXplLFxuICAgIGRpc3BsYXlWYWx1ZSxcbiAgICBtYXJnaW4sXG4gICAgbWFyZ2luQm90dG9tOiBkaXNwbGF5VmFsdWUgPyBib3R0b20gOiAwLFxuICAgIGxpbmVDb2xvcixcbiAgICBiYWNrZ3JvdW5kLFxuICB9KTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb3B5QmFyY29kZShzcmMpIHtcbiAgY29uc3QgYmFyY29kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFyY29kZVwiKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKGJhcmNvZGUuc3JjKTtcbiAgY29uc3QgYmxvYiA9IGF3YWl0IGRhdGEuYmxvYigpO1xuICB0cnkge1xuICAgIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGUoW25ldyBDbGlwYm9hcmRJdGVtKHsgXCJpbWFnZS9wbmdcIjogYmxvYiB9KV0pO1xuICAgIHVwZGF0ZUNvcHlNZXNzYWdlKFwiY29waWVkIVwiKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHVwZGF0ZUNvcHlNZXNzYWdlKFwidGhlcmUgd2FzIGFuIGlzc3VlLCB0cnkgYWdhaW4uXCIpO1xuICB9XG59XG5cbi8vICMjIyMjIyMjIyMjIyMjIyMjIFRFWFQgSU5QVVQgIyMjIyMjIyMjIyMjIyMjIyNcbmV4cG9ydCBmdW5jdGlvbiBnZXRCYXJjb2RlVGV4dElucHV0KCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYmFyY29kZVRleHRJbnB1dElkKTtcbn1cblxuLy8gIyMjIyMjIyMjIyMjIyMjIyMgV0lEVEggSU5QVVQgIyMjIyMjIyMjIyMjIyMjI1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmFyY29kZVdpZHRoSW5wdXQoKSB7XG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChiYXJjb2RlV2lkdGhJbnB1dElkKTtcbn1cblxuLy8gIyMjIyMjIyMjIyMjIyMjIyMgSEVJR0hUIElOUFVUICMjIyMjIyMjIyMjIyMjIyNcbmV4cG9ydCBmdW5jdGlvbiBnZXRCYXJjb2RlSGVpZ2h0SW5wdXQoKSB7XG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChiYXJjb2RlSGVpZ2h0SW5wdXRJZCk7XG59XG5cbi8vICMjIyMjIyMjIyMjIyMjIyMgRk9OVCBTSVpFIElOUFVUICMjIyMjIyMjIyMjIyMjI1xuZXhwb3J0IGZ1bmN0aW9uIGdldEJhcmNvZGVGb250U2l6ZUlucHV0KCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYmFyY29kZUZvbnRTaXplSW5wdXRJZCk7XG59XG5cbi8vICMjIyMjIyMjIyMjIyMjIEZPTlQgRElTUExBWSBJTlBVVCAjIyMjIyMjIyMjIyMjXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmFyY29kZUZvbnREaXNwbGF5SW5wdXQoKSB7XG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChiYXJjb2RlRm9udERpc3BsYXlJbnB1dElkKTtcbn1cblxuLy8gIyMjIyMjIyMjIyMjIyBDT1BZIEJBUkNPREUgTUVTU0FHRSAjIyMjIyMjIyMjIyNcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb3B5QmFyY29kZU1lc3NhZ2UoKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvcHktbWVzc2FnZS1jb250YWluZXIgPiBkaXZcIik7XG59XG5cbi8vICMjIyMjIyMjIyMjIyMgIFNFQ09OREFSWSBDT0xPUiBJTlBVVCAjIyMjIyMjIyMjI1xuZXhwb3J0IGZ1bmN0aW9uIGdldEJhcmNvZGVQcmltYXJ5Q29sb3JJbnB1dCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJhcmNvZGVQcmltYXJ5Q29sb3JJbnB1dElkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJhcmNvZGVQcmltYXJ5Q29sb3JQcmVzZXQoKSB7XG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY3VzdG9tLXByZXNldC0ke2JhcmNvZGVQcmltYXJ5Q29sb3JJbnB1dElkfWApO1xufVxuXG4vLyAjIyMjIyMjIyMjIyMjIyMjIFBSSU1BUlkgQ09MT1IgSU5QVVQgIyMjIyMjIyMjIyMjIyNcbmV4cG9ydCBmdW5jdGlvbiBnZXRCYXJjb2RlU2Vjb25kYXJ5Q29sb3JJbnB1dCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJhcmNvZGVTZWNvbmRhcnlDb2xvcklucHV0SWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmFyY29kZVNlY29uZGFyeUNvbG9yUHJlc2V0KCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgYGN1c3RvbS1wcmVzZXQtJHtiYXJjb2RlU2Vjb25kYXJ5Q29sb3JJbnB1dElkfWBcbiAgKTtcbn1cbiIsImltcG9ydCB7IGdldENvcHlCYXJjb2RlTWVzc2FnZSB9IGZyb20gXCIuL2xvZ2ljXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDb3B5TWVzc2FnZShtZXNzYWdlKSB7XG4gIGNvbnN0IGNvcHlNZXNzYWdlID0gZ2V0Q29weUJhcmNvZGVNZXNzYWdlKCk7XG4gIGNvcHlNZXNzYWdlLmlubmVyVGV4dCA9IG1lc3NhZ2U7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNvcHlNZXNzYWdlLmlubmVyVGV4dCA9IFwiY29weSB0byBjbGlwYm9hcmRcIjtcbiAgfSwgMTUwMCk7XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vSGVhZGVyL0hlYWRlclwiO1xuaW1wb3J0IER5bmFtaWNGb290ZXIgZnJvbSBcIi4uL0R5bmFtaWNGb290ZXIvRHluYW1pY0Zvb3RlclwiO1xuaW1wb3J0IE1haW5TZWN0aW9uIGZyb20gXCIuLi9NYWluU2VjdGlvbi9NYWluU2VjdGlvblwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IEVsZW1lbnQoXCJkaXZcIiwgeyBpZDogXCJjb250ZW50XCIgfSwgW1xuICAgIEhlYWRlcigpLFxuICAgIE1haW5TZWN0aW9uKCksXG4gICAgRHluYW1pY0Zvb3RlcigpLFxuICBdKTtcblxuICByZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgQSwgRGl2IH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL19jdXN0b20tY29tcG9uZW50cy9JY29uXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbmltcG9ydCB7IGdpdGh1YkluZm8gfSBmcm9tIFwiLi4vLi4vcGFnZS1sb2dpYy9kYXRhL2RhdGEtcGFnZS1jb25maWdcIjtcblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbi8vIFRFTVBMQVRFIFZBUklBQkxFU1xuY29uc3QgZHluYW1pY1llYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG5cbmNvbnN0IENvcHlyaWdodENvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdihcbiAgICB7IGNsYXNzTmFtZTogYGNvcHlyaWdodC1jb250YWluZXJgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIERpdih7XG4gICAgICAgIGNsYXNzTmFtZTogXCJjb3B5cmlnaHQtaW5mbyBkaXNwbGF5LWktYlwiLFxuICAgICAgICBpbm5lclRleHQ6IGDCqSBDYXJsaW4gTWl0Y2hlbGwgJHtkeW5hbWljWWVhcn1gLFxuICAgICAgfSksXG4gICAgICBBKHsgaHJlZjogYGh0dHBzOi8vZ2l0aHViLmNvbS9jYXJsaW4tbWl0Y2hlbGwvJHtnaXRodWJJbmZvLnJlcG9OYW1lfWAgfSwgW1xuICAgICAgICBJY29uKFwiaWNvbi1naXRodWItY2F0XCIpLFxuICAgICAgXSksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvcHlyaWdodENvbnRhaW5lcjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgQ29weXJpZ2h0Q29udGFpbmVyIGZyb20gXCIuL0NvcHlyaWdodENvbnRhaW5lclwiO1xuaW1wb3J0IEF0dHJpYnV0aW9uc0NvbnRhaW5lciBmcm9tIFwiLi9TaXRlQXR0cmlidXRpb25zL0F0dHJpYnV0aW9uc0NvbnRhaW5lclwiO1xuaW1wb3J0IFRPUENvbnRhaW5lciBmcm9tIFwiLi9UT1BMaW5rQ29udGFpbmVyXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBEeW5hbWljRm9vdGVyID0gKCkgPT4ge1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IFxuICBGb290ZXIoXG4gICAgeyBcbiAgICAgIGlkOiBgZm9vdGVyYCwgXG4gICAgICBjbGFzc05hbWU6IGBiZy1ncmF5LWRhcmstMyB0ZXh0LXdoaXRlYCBcbiAgICB9LFxuICAgIFtcbiAgICAgQ29weXJpZ2h0Q29udGFpbmVyKCksIFxuXG4gICAgIEF0dHJpYnV0aW9uc0NvbnRhaW5lcigpXG4gICAgXVxuICApO1xuXG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY0Zvb3RlcjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uLy4uL19jdXN0b20tY29tcG9uZW50cy9JY29uXCI7XG5cbmltcG9ydCBFeHBhbmRhYmxlUGFuZWwgZnJvbSBcIi4uLy4uL19jdXN0b20tY29tcG9uZW50cy9FeHBhbmRhYmxlUGFuZWwvRXhwYW5kYWJsZVBhbmVsXCI7XG5pbXBvcnQgTm9uRXhwYW5kYWJsZVBhbmVsIGZyb20gXCIuLi8uLi9fY3VzdG9tLWNvbXBvbmVudHMvRXhwYW5kYWJsZVBhbmVsL05vbkV4cGFuZGFibGVQYW5lbFwiO1xuXG5pbXBvcnQgSWNvbnNFeHBsYW5hdGlvbiBmcm9tIFwiLi9JY29uc0V4cGxhbmF0aW9uXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBBdHRyaWJ1dGlvbnNDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IEVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICB7IGNsYXNzTmFtZTogYGF0dHJpYnV0aW9ucy1jb250YWluZXJgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIEV4cGFuZGFibGVQYW5lbCh7XG4gICAgICAgIHRpdGxlOiBcIlNpdGUgQXR0cmlidXRpb25zXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgRXhwYW5kYWJsZVBhbmVsKHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkljb25zXCIsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICBOb25FeHBhbmRhYmxlUGFuZWwoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkdpdGh1YlwiLFxuICAgICAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2xvZ29zXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtJY29uKFwiaWNvbi1naXRodWItY2F0XCIpXSxcbiAgICAgICAgICAgICAgfSksXG5cbiAgICAgICAgICAgICAgRXhwYW5kYWJsZVBhbmVsKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBbGwgb3RoZXIgSWNvbnNcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW0ljb25zRXhwbGFuYXRpb24oKV0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF0dHJpYnV0aW9uc0NvbnRhaW5lcjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYsIEEgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBJY29uc0V4cGxhbmF0aW9uID0gKCkgPT4ge1xuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRGl2KFxuICAgIHsgY2xhc3NOYW1lOiBgaWNvbnMtZXhwbGFuYXRpb25gLCBpbm5lckhUTUw6IGBgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIERpdih7XG4gICAgICAgIGlubmVySFRNTDogYEFsbCBvdGhlciBpY29ucyB3ZXJlIGNyZWF0ZWQgYnkgbWUgdXNpbmcgJHtcbiAgICAgICAgICBBKHtcbiAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9pbmtzY2FwZS5vcmcvXCIsXG4gICAgICAgICAgICBpbm5lclRleHQ6IFwiSW5rc2NhcGVcIixcbiAgICAgICAgICB9KS5vdXRlckhUTUxcbiAgICAgICAgfSBhbmQgY29udmVydGluZyB0aGVtIHRvIGEgZm9udCB3aXRoICR7XG4gICAgICAgICAgQSh7XG4gICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vaWNvbW9vbi5pby9cIixcbiAgICAgICAgICAgIGlubmVyVGV4dDogXCJJY29Nb29uXCIsXG4gICAgICAgICAgfSkub3V0ZXJIVE1MXG4gICAgICAgIH1gLFxuICAgICAgfSksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb25zRXhwbGFuYXRpb247XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgQSwgRGl2IH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgVE9QQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBwYXJlbnRDb250YWluZXIgPSBEaXYoXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiBgdG9wLWNvbnRhaW5lcmAsXG4gICAgICBpbm5lclRleHQ6IFwiSW5zcGlyZWQgQnk6XCIsXG4gICAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgQSh7XG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cudGhlb2RpbnByb2plY3QuY29tL1wiLFxuICAgICAgICBjbGFzc05hbWU6IFwidG9wLWxpbmtcIixcbiAgICAgICAgaW5uZXJUZXh0OiBcIlRoZSBPZGluIFByb2plY3RcIixcbiAgICAgIH0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudENvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRPUENvbnRhaW5lcjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoMSA9IEVsZW1lbnQoXCJoMVwiLCB7IGlubmVyVGV4dDogXCJCYXJjb2RlIEdlbmVyYXRvclwiIH0pO1xuXG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiYmctZ3JheS1kYXJrLTMgdGV4dC13aGl0ZSBwLTJcIjtcbiAgY29uc3QgaGVhZGVyID0gRWxlbWVudChcbiAgICBcImhlYWRlclwiLFxuICAgIHtcbiAgICAgIGlkOiBcImhlYWRlclwiLFxuICAgICAgY2xhc3NOYW1lOiBcImhlYWRlclwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMsXG4gICAgfSxcbiAgICBbaDFdXG4gICk7XG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgZ2VuZXJhdGVUZXN0Q29udGVudEFyciB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IEJhcmNvZGVHZW5lcmF0b3IgZnJvbSBcIi4uL0JhcmNvZGVHZW5lcmF0b3IvQmFyY29kZUdlbmVyYXRvclwiO1xuaW1wb3J0IHsgTWFpbiwgRGl2IH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgTWFpblNlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IG1haW4gPSBNYWluKFxuICAgIHtcbiAgICAgIGlkOiBcIm1haW4tc2VjdGlvblwiLFxuICAgICAgY2xhc3NOYW1lOiBcIlwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMsXG4gICAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW0JhcmNvZGVHZW5lcmF0b3IoKV1cbiAgKTtcbiAgcmV0dXJuIG1haW47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluU2VjdGlvbjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBBIH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG5pbXBvcnQgRXhwYW5kYWJsZVBhbmVsVGl0bGUgZnJvbSBcIi4vRXhwYW5kYWJsZVBhbmVsVGl0bGVcIjtcbmltcG9ydCBFeHBhbmRhYmxlUGFuZWxDb250ZW50IGZyb20gXCIuL0V4cGFuZGFibGVQYW5lbENvbnRlbnRcIjtcblxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEV4cGFuZGFibGVQYW5lbCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBjb21wb25lbnRJZCA9IHV1aWR2NCgpO1xuICBjb25zdCB7IHRpdGxlLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG5cbiAgY29uc3QgcGFuZWwgPSBBKFxuICAgIHsgY2xhc3NOYW1lOiBgZXhwYW5kYWJsZS1wYW5lbGAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgRXhwYW5kYWJsZVBhbmVsVGl0bGUoeyB0aXRsZSwgY29tcG9uZW50SWQgfSksXG4gICAgICBFeHBhbmRhYmxlUGFuZWxDb250ZW50KHsgY2hpbGRyZW4sIGNvbXBvbmVudElkIH0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhbmVsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kYWJsZVBhbmVsO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgeyBEaXYgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBFeHBhbmRhYmxlUGFuZWxDb250ZW50ID0gKHByb3BzKSA9PiB7XG4gIGxldCB7IGNoaWxkcmVuLCBjb21wb25lbnRJZCB9ID0gcHJvcHM7XG4gIGNoaWxkcmVuID0gY2hpbGRyZW4gPyBjaGlsZHJlbiA6IFtdO1xuXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAge1xuICAgICAgaWQ6IGBleHBhbmRhYmxlLWNvbnRlbnQtJHtjb21wb25lbnRJZH1gLFxuICAgICAgY2xhc3NOYW1lOiBgZXhwYW5kYWJsZS1wYW5lbC1jb250ZW50YCxcbiAgICB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbRGl2KHsgY2xhc3NOYW1lOiBcImNvbnRlbnRcIiB9LCBbLi4uY2hpbGRyZW5dKV1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeHBhbmRhYmxlUGFuZWxDb250ZW50O1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEVsZW1lbnQsIEJ1dHRvbiwgRGl2IH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb25cIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbmZ1bmN0aW9uIHRvZ2dsZUV4cGFuc2lvbihjb21wb25lbnRJZCkge1xuICBjb25zdCBleHBhbnNpb25Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgYGV4cGFuZGFibGUtY29udGVudC0ke2NvbXBvbmVudElkfWBcbiAgKTtcbiAgY29uc3QgdG9nZ2xlRXhwYW5zaW9uQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgYGV4cGFuZGFibGUtY29udGVudC1idXR0b24tJHtjb21wb25lbnRJZH1gXG4gICk7XG4gIGV4cGFuc2lvbkNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZShcImV4cGFuZGVkXCIpO1xuICB0b2dnbGVFeHBhbnNpb25CdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImV4cGFuZGVkXCIpO1xufVxuXG5jb25zdCBFeHBhbmRhYmxlUGFuZWxUaXRsZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHRpdGxlLCBjb21wb25lbnRJZCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IEVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICB7IGNsYXNzTmFtZTogYGV4cGFuZGFibGUtcGFuZWwtdGl0bGVgIH0sXG4gICAgW1xuICAgICAgRGl2KHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImRpc3BsYXktaS1iXCIsXG4gICAgICAgIGlubmVyVGV4dDogdGl0bGUsXG4gICAgICAgIG9uY2xpY2soKSB7XG4gICAgICAgICAgdG9nZ2xlRXhwYW5zaW9uKGNvbXBvbmVudElkKTtcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgQnV0dG9uKFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IGBleHBhbmRhYmxlLWNvbnRlbnQtYnV0dG9uLSR7Y29tcG9uZW50SWR9YCxcbiAgICAgICAgICBvbmNsaWNrKCkge1xuICAgICAgICAgICAgdG9nZ2xlRXhwYW5zaW9uKGNvbXBvbmVudElkKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbSWNvbihcImljb24tdXAtZG93blwiKV1cbiAgICAgICksXG4gICAgXVxuICApO1xuXG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kYWJsZVBhbmVsVGl0bGU7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgQSB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IE5vbkV4cGFuZGFibGVQYW5lbCA9IChwcm9wcykgPT4ge1xuICBsZXQgeyB0aXRsZSwgaHJlZiwgY2hpbGRyZW4gfSA9IHByb3BzO1xuICBjaGlsZHJlbiA9IGNoaWxkcmVuID8gY2hpbGRyZW4gOiBbXTtcblxuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcIlwiO1xuXG4gIGNvbnN0IHBhbmVsID0gQShcbiAgICB7XG4gICAgICBjbGFzc05hbWU6IGAke290aGVyQ2xhc3Nlc30gbm9uLWV4cGFuZGFibGUtcGFuZWwgJHtcbiAgICAgICAgaHJlZiA/IFwiaXMtbGlua1wiIDogXCJcIlxuICAgICAgfWAsXG4gICAgICBpbm5lclRleHQ6IHRpdGxlLFxuICAgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFsuLi5jaGlsZHJlbl1cbiAgKTtcbiAgaWYgKGhyZWYpIHtcbiAgICBwYW5lbC5ocmVmID0gaHJlZjtcbiAgfVxuICByZXR1cm4gcGFuZWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb25FeHBhbmRhYmxlUGFuZWw7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEljb24gPSAoaWNvbkNsYXNzKSA9PiB7XG4gIGNvbnN0IGljb24gPSBFbGVtZW50KFwiaVwiLCB7IGNsYXNzTmFtZTogYGljb24gJHtpY29uQ2xhc3N9IGRpc3BsYXktaS1iYCB9KTtcbiAgcmV0dXJuIGljb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJY29uO1xuIiwiLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgVVRJTElUSUVTICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuZnVuY3Rpb24gZ2V0QWxsQ2Fyb3VzZWxTbGlkZXMoKSB7XG4gIHJldHVybiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbC10cmFja1wiKS5jaGlsZE5vZGVzXTtcbn1cblxuZnVuY3Rpb24gZ2V0QWxsQ2Fyb3VzZWxTbGlkZUlkcygpIHtcbiAgcmV0dXJuIGdldEFsbENhcm91c2VsU2xpZGVzKCkubWFwKChlbGVtKSA9PiBlbGVtLmlkKTtcbn1cblxuZnVuY3Rpb24gZ2V0QWxsQ2Fyb3VzZWxOYXZCdXR0b25zKCkge1xuICByZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2Fyb3VzZWwtaW5kaWNhdG9yXCIpXTtcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudFNsaWRlSW5kZXgoKSB7XG4gIGNvbnN0IGFsbFNsaWRlSWRzID0gZ2V0QWxsQ2Fyb3VzZWxTbGlkZUlkcygpO1xuICBjb25zdCBjdXJyZW50U2xpZGVJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwtc2xpZGUuYWN0aXZlXCIpLmlkO1xuICBjb25zdCBjdXJyZW50U2xpZGVJbmRleCA9IGFsbFNsaWRlSWRzLmluZGV4T2YoY3VycmVudFNsaWRlSWQpO1xuXG4gIHJldHVybiBjdXJyZW50U2xpZGVJbmRleDtcbn1cblxuZnVuY3Rpb24gZ2V0UHJldmlvdXNTbGlkZUluZGV4KCkge1xuICBsZXQgcHJldmlvdXNTbGlkZUluZGV4ID0gZ2V0Q3VycmVudFNsaWRlSW5kZXgoKSAtIDE7XG5cbiAgLy8gaWYgdGhlIGNhbGN1bGF0ZWQgaW5kZXggaXMgb3V0c2lkZSB0aGUgbGlzdCwgc2V0IGl0IHRvIHRoZSBpbmRleCBvZiB0aGUgbGFzdCBpdGVtIGluIHRoZSBsaXN0XG4gIGNvbnN0IGNvcnJlY3RlZEluZGV4ID1cbiAgICBwcmV2aW91c1NsaWRlSW5kZXggPCAwXG4gICAgICA/IGdldEFsbENhcm91c2VsU2xpZGVJZHMoKS5sZW5ndGggLSAxXG4gICAgICA6IHByZXZpb3VzU2xpZGVJbmRleDtcblxuICByZXR1cm4gY29ycmVjdGVkSW5kZXg7XG59XG5cbmZ1bmN0aW9uIGdldE5leHRTbGlkZUluZGV4KCkge1xuICBsZXQgbmV4dFNsaWRlSW5kZXggPSBnZXRDdXJyZW50U2xpZGVJbmRleCgpICsgMTtcblxuICAvLyBpZiB0aGUgY2FsY3VsYXRlZCBpbmRleCBpcyBvdXRzaWRlIHRoZSBsaXN0LCBzZXQgaXQgdG8gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBsaXN0XG4gIGNvbnN0IGNvcnJlY3RlZEluZGV4ID1cbiAgICBuZXh0U2xpZGVJbmRleCA+IGdldEFsbENhcm91c2VsU2xpZGVJZHMoKS5sZW5ndGggLSAxID8gMCA6IG5leHRTbGlkZUluZGV4O1xuXG4gIHJldHVybiBjb3JyZWN0ZWRJbmRleDtcbn1cblxuLy8gbW92ZSB0byB0aGUgc2VsZWN0ZWQgc2xpZGVcbmV4cG9ydCBmdW5jdGlvbiBnb3RvU3BlY2lmaWNTbGlkZShpZCkge1xuICBjb25zdCBhbGxOYXZCdXR0b25zID0gZ2V0QWxsQ2Fyb3VzZWxOYXZCdXR0b25zKCk7XG4gIGNvbnN0IHNlbGVjdGVkTmF2QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNhcm91c2VsLW5hdi0ke2lkfWApO1xuICBjb25zdCBzZWxlY3RlZFNsaWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNhcm91c2VsLXNsaWRlLSR7aWR9YCk7XG4gIGNvbnN0IGFsbFNsaWRlcyA9IGdldEFsbENhcm91c2VsU2xpZGVzKCk7XG5cbiAgYWxsU2xpZGVzLmZvckVhY2goKHNsaWRlKSA9PiBzbGlkZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgc2VsZWN0ZWRTbGlkZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXG4gIGFsbE5hdkJ1dHRvbnMuZm9yRWFjaCgoc2xpZGUpID0+IHNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuICBzZWxlY3RlZE5hdkJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIEVWRU5UIEhBTkRMRVJTICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbi8vIG1vdmUgdG8gdGhlIHNlbGVjdGVkIHNsaWRlIHdoZW4gY2xpY2tpbmcgb24gdGhlIGFzc29jaWF0ZWQgbmF2IGJ1dHRvblxuZXhwb3J0IGZ1bmN0aW9uIGNsaWNrQ2Fyb3VzZWxOYXYoaWQpIHtcbiAgZ290b1NwZWNpZmljU2xpZGUoaWQpO1xufVxuXG4vLyBtb3ZlIHJpZ2h0IHdoZW4gY2xpY2tpbmcgb24gdGhlIHJpZ2h0IGJ1dHRvblxuZXhwb3J0IGZ1bmN0aW9uIGNsaWNrQ2Fyb3VzZWxSaWdodCgpIHtcbiAgY29uc3QgaWQgPSBnZXRBbGxDYXJvdXNlbFNsaWRlSWRzKClbZ2V0TmV4dFNsaWRlSW5kZXgoKV0ucmVwbGFjZShcbiAgICBcImNhcm91c2VsLXNsaWRlLVwiLFxuICAgIFwiXCJcbiAgKTtcbiAgZ290b1NwZWNpZmljU2xpZGUoaWQpO1xufVxuXG4vLyBtb3ZlIGxlZnQgd2hlbiBjbGlja2luZyBvbiB0aGUgcmlnaHQgYnV0dG9uXG5leHBvcnQgZnVuY3Rpb24gY2xpY2tDYXJvdXNlbExlZnQoKSB7XG4gIGNvbnN0IGlkID0gZ2V0QWxsQ2Fyb3VzZWxTbGlkZUlkcygpW2dldFByZXZpb3VzU2xpZGVJbmRleCgpXS5yZXBsYWNlKFxuICAgIFwiY2Fyb3VzZWwtc2xpZGUtXCIsXG4gICAgXCJcIlxuICApO1xuICBnb3RvU3BlY2lmaWNTbGlkZShpZCk7XG59XG5cbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBBVVRPIFBST0dSRVNTSU9OICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuZXhwb3J0IGZ1bmN0aW9uIGNsaWNrQ2Fyb3VzZWxQbGF5KCkge1xuICBoYW5kbGVBdXRvQWR2YW5jZShcInBsYXlcIik7XG4gIGNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsIC5wbGF5LWJ1dHRvblwiKTtcbiAgcGxheUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcblxuICBjb25zdCBwYXVzZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwgLnBhdXNlLWJ1dHRvblwiKTtcbiAgcGF1c2VCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGlja0Nhcm91c2VsUGF1c2UoKSB7XG4gIGhhbmRsZUF1dG9BZHZhbmNlKFwicGF1c2VcIik7XG4gIGNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsIC5wbGF5LWJ1dHRvblwiKTtcbiAgcGxheUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcblxuICBjb25zdCBwYXVzZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwgLnBhdXNlLWJ1dHRvblwiKTtcbiAgcGF1c2VCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XG59XG5cbmxldCBpbnRlcnZhbDtcbi8qKlxuICogQSBmdW5jdGlvbiB0byBjcmVhdGUgb3IgY2FuY2VsIHRoZSBhdXRvIGFkdmFuY2UgdGltZXJcbiAqIHlvdSB3aWxsIG5lZXQgdG8gZGVjbGFyZSBpbnRlcnZhbCAobGV0IGludGVydmFsKSBiZWZvcmVcbiAqIHRoaXMgZnVuY3Rpb24gdG8gYWxsb3cgdGhlIGludGVydmFsIHRvIGJlIGNyZWF0ZWQgLyByZWZlbmVuY2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbW9kZSBhIHN0cmluZyBjb250YWluaW5nICdwbGF5JyBvciAncGF1c2UnIHRvIGluZGljYXRlIHRoZSBtb2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVBdXRvQWR2YW5jZShtb2RlKSB7XG4gIGNvbnN0IHBsYXlpbmcgPSBtb2RlID09PSBcInBsYXlcIiA/IHRydWUgOiBmYWxzZTtcbiAgaWYgKHBsYXlpbmcpIHtcbiAgICAvLyBzdGFydCBhbiBpbnRlcnZhbCB0aW1lciBhbmQgY2FwdHVyZSBpdHMgcmVmZXJlbmNlXG4gICAgaW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoY2xpY2tDYXJvdXNlbFJpZ2h0LCA1MDAwKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBjYW5jZWwgdGhlIHJlZmVyZW5jZSB5b3UgY2FwdHVyZWRcbiAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH1cbn1cbiIsIi8qKlxuICogVGhpcyBGdW5jdGlvbiBhbGxvd3MgeW91IHRvIGNyZWF0ZSBhIGRvbSBlbGVtZW50IHdpdGggaXRzIGluaXRpYWwgYXR0cmlidXRlcyBhbmQgY2hpbGQgZWxlbWVudHMgZGVmaW5lZCBieSBhIHBhc3NlZC1pbiBvYmplY3QgYW5kIGFycmF5IG9mIGNoaWxkIGVsZW1lbnRzXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVN0ciB0aGUgdGFnIG5hbWUgb2YgdGhlIGVsZW1lbnQgdG8gYmUgcmV0dXJuZWQgeW91IHdvdWxkIHVzZSBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KClcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc09iaiAob3B0aW9uYWwpIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBpbml0aWFsIHByb3BlcnRpZXMvYXR0cmlidXRlcyB5b3Ugd2FudCB0aGUgZWxlbWVudCB0byBoYXZlXG4gKiBAcGFyYW0ge2FycmF5fSBjaGlsZEFyciAob3B0aW9uYWwpIGFuIG9mIGVsZW1lbnQgb2JqZWN0cyB0byBiZSBhcHBlbmRlZCBhcyBjaGlsZHJlbiB0byB0aGlzIGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSB0aGUgYSByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgY3JlYXRlZCBpbiBtZW1vcnlcbiAqL1xuZXhwb3J0IGNvbnN0IEVsZW1lbnQgPSAodHlwZVN0ciwgcHJvcHNPYmosIGNoaWxkQXJyID0gbnVsbCkgPT4ge1xuICAvLyBTb21lIGF0dHJpYnV0ZXMgY2FuIG9ubHkgYmUgc2V0IHVzaW5nIHRoZSBFbGVtZW50LnNldEF0dHJpYnV0ZSgpIG1ldGhvZC5cbiAgLy8gSWYgaXQgaXMgaW4gdGhlIHByb3BzT2JqIE9iamVjdC5hc3NpZ24gd2lsbCBmYWlsLiBXZSdsbCByZW1vdmUgaXQgZnJvbSB0aGVcbiAgLy8gcHJvcHMgb2JqZWN0IGhlcmUgYW5kIGFzc2lnbiB0aGVtIHRvIHRoZSBwYXJlbnQgZWxlbWVudCBiZWZvcmUgaXQgaXMgcmV0dXJuZWQuXG4gIC8vIFRoZXNlIGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBzZXRBdHRyaWJ1dGVQcm9wZXJ0aWVzIGxpc3QgZm9yIHByb2Nlc3NpbmcuXG4gIGxldCBzZXRBdHRyaWJ1dGVQcm9wZXJ0aWVzID0gW1wibGlzdFwiXTtcbiAgbGV0IHByb3BlcnRpZXMgPSBbXTtcbiAgc2V0QXR0cmlidXRlUHJvcGVydGllcy5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgIGlmIChwcm9wZXJ0eSBpbiBwcm9wc09iaikge1xuICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc09ialtwcm9wZXJ0eV07XG4gICAgICBwcm9wZXJ0aWVzLnB1c2goeyBuYW1lOiBwcm9wZXJ0eSwgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgZGVsZXRlIHByb3BzT2JqW3Byb3BlcnR5XTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIENyZWF0ZSBhbiBlbGVtZW50IGJhc2VkIG9uIHRoZSB0eXBlIHN0cmluZyBwcm92aWRlZFxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gT2JqZWN0LmFzc2lnbihcbiAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGVTdHIpLFxuICAgIHByb3BzT2JqXG4gICk7XG5cbiAgLy8gQWRkIHBhc3NlZCBpbiBjaGlsZCB0byBhcnJheSBpZiBpdCBpcyBub3QgYWxyZWFkeVxuICBpZiAoY2hpbGRBcnIgJiYgIUFycmF5LmlzQXJyYXkoY2hpbGRBcnIpKSB7XG4gICAgY2hpbGRBcnIgPSBbY2hpbGRBcnJdO1xuICB9XG5cbiAgLy8gQXBwZW5kIGNoaWxkcmVuIHRvIHRoZSBlbGVtZW50XG4gIGlmIChjaGlsZEFycikge1xuICAgIGNoaWxkQXJyLmZvckVhY2goKGNoaWxkKSA9PiBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XG4gIH1cblxuICAvLyBBcHBseSBwcm9wZXJ0aWVzIHdpdGggc2V0QXR0cmlidXRlIGlmIG5lZWRlZFxuICBpZiAocHJvcGVydGllcy5sZW5ndGgpIHtcbiAgICBwcm9wZXJ0aWVzLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgICBwYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZShwcm9wZXJ0eS5uYW1lLCBwcm9wZXJ0eS52YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbi8vICBDT01NT04gRUxFTUVOVFNcbmV4cG9ydCBjb25zdCBBID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImFcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgQXJ0aWNsZSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJhcnRpY2xlXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEIgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiYlwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBCb2R5ID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImJvZHlcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImJ1dHRvblwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBCciA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJiclwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBEaXYgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiZGl2XCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IERhdGFsaXN0ID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImRhdGFsaXN0XCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEZpZWxkc2V0ID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImZpZWxkc2V0XCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJmb290ZXJcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgRm9ybSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJmb3JtXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEgxID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImgxXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEgyID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImgyXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEgzID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImgzXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJoZWFkZXJcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSHIgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaHJcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJpXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEltZyA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJpbWdcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSW5wdXQgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaW5wdXRcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgTGFiZWwgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwibGFiZWxcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgTGVnZW5kID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImxlZ2VuZFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBMaSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJsaVwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBNYWluID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcIm1haW5cIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgT2wgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwib2xcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgT3B0aW9uID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcIm9wdGlvblwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBQID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcInBcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgU2VsZWN0ID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcInNlbGVjdFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBTdHJvbmcgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwic3Ryb25nXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IFNwYW4gPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwic3BhblwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBTdmcgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwic3ZnXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IFRleHRhcmVhID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcInRleHRhcmVhXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IFVsID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcInVsXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcbiIsImV4cG9ydCBjb25zdCBnaXRodWJJbmZvID0ge1xuICByZXBvTmFtZTogXCJiYXJjb2RlLWdlbmVyYXRvclwiLFxufTtcbiIsImltcG9ydCB7IGFwcGx5V2luZG93TGlzdGVuZXJzIH0gZnJvbSBcIi4vdWktd2luZG93XCI7XG5pbXBvcnQgeyBjbGlja0Nhcm91c2VsUGxheSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9JbWFnZUNhcm91c2VsL3VpL2Nhcm91c2VsLXVpXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUluaXRpYWxTdGF0ZSgpIHtcbiAgYXBwbHlXaW5kb3dMaXN0ZW5lcnMoKTtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWxcIikpIHtcbiAgICBjbGlja0Nhcm91c2VsUGxheSgpO1xuICB9XG59XG4iLCJpbXBvcnQgSnNCYXJjb2RlIGZyb20gXCJqc2JhcmNvZGVcIjtcblxuaW1wb3J0IHsgZGVib3VuY2UsIGdldElucHV0VmFsdWUgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7XG4gIGdlbmVyYXRlQmFyY29kZSxcbiAgZ2V0QmFyY29kZVdpZHRoSW5wdXQsXG4gIGdldEJhcmNvZGVIZWlnaHRJbnB1dCxcbn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQmFyY29kZUdlbmVyYXRvci9sb2dpY1wiO1xuaW1wb3J0IHsgdXBkYXRlQmFyY29kZVdpZHRoRGlzcGxheSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0JhcmNvZGVHZW5lcmF0b3IvdWlcIjtcblxuY29uc3QgYnJlYWtQb2ludHMgPSB7XG4gIHhzOiAwLFxuICBzbTogNDgwLFxuICBtZDogNzIwLFxuICBsZzogOTYwLFxuICB4bDogMTIwMCxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVdpbmRvd0xpc3RlbmVycygpIHtcbiAgd2luZG93Lm9ucmVzaXplID0gZGVib3VuY2UoZnVuY3Rpb24gKGUpIHtcbiAgICAvL1xuICB9KTtcbiAgd2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAvLyB1cGRhdGVCYXJjb2RlV2lkdGhEaXNwbGF5KGdldElucHV0VmFsdWUoZ2V0QmFyY29kZVdpZHRoSW5wdXQoKSkpO1xuICAgIGdlbmVyYXRlQmFyY29kZSgpO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCB0cnVuY2F0ZUFuZEFkZEVsbGlwc2UgPSAoc3RyaW5nLCBudW1DaGFyc1RvS2VlcCkgPT4ge1xuICByZXR1cm4gc3RyaW5nLnNsaWNlKDAsIG51bUNoYXJzVG9LZWVwKS50cmltRW5kKCkgKyBcIi4uLlwiO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gZnVuY3Rpb24gKGZuKSB7XG4gIC8vIHNldHVwIGEgdGltZXJcbiAgbGV0IHRpbWVvdXQ7XG5cbiAgLy8gcmV0dXJuIGEgZnVuY3Rpb24gdG8gcnVuIGRlYm91bmNlZFxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIC8vc2V0dXAgYXJnc1xuXG4gICAgbGV0IGNvbnRleHQgPSB0aGlzO1xuICAgIGxldCBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgLy8gaWYgdGhlcmUgaXMgYSB0aW1lciBjYW5jZWwgaXRcbiAgICBpZiAodGltZW91dCkge1xuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRpbWVvdXQpO1xuICAgIH1cblxuICAgIC8vIHNldHVwIHRoZSBuZXcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKClcbiAgICB0aW1lb3V0ID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9KTtcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICBpZiAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZ1swXS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG4gIH1cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVGVzdENvbnRlbnRBcnIobnVtQ2hpbGRyZW4pIHtcbiAgcmV0dXJuIEFycmF5KG51bUNoaWxkcmVuKVxuICAgIC5maWxsKDApXG4gICAgLm1hcCgoZWxlbSkgPT5cbiAgICAgIEVsZW1lbnQoXCJwXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImRpc3BsYXktYiBtYi0xXCIsXG4gICAgICAgIGlubmVyVGV4dDpcbiAgICAgICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIERvbG9yLCB1bGxhbSBhZCwgbWF4aW1lIGVuaW0gc2VxdWkgc3VudCBxdW8gZmFjaWxpcyBpbGxvIGV2ZW5pZXQgbGF1ZGFudGl1bSBxdWFlIHJlcGVsbGVuZHVzIGRvbG9ydW0gb21uaXMgbWluaW1hIGR1Y2ltdXMgYXJjaGl0ZWN0byEgQmVhdGFlLCB2ZWwgYXNzdW1lbmRhLlwiLFxuICAgICAgfSlcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7IC8vIFRoZSBtYXhpbXVtIGlzIGV4Y2x1c2l2ZSBhbmQgdGhlIG1pbmltdW0gaXMgaW5jbHVzaXZlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbnB1dFZhbHVlKGlucHV0RWxlbWVudCkge1xuICByZXR1cm4gaW5wdXRFbGVtZW50LnZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0SW5wdXRWYWx1ZShpbnB1dEVsZW1lbnQsIHZhbHVlKSB7XG4gIGlucHV0RWxlbWVudC52YWx1ZSA9IHZhbHVlO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2JhcmNvZGVzID0gcmVxdWlyZSgnLi9iYXJjb2Rlcy8nKTtcblxudmFyIF9iYXJjb2RlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iYXJjb2Rlcyk7XG5cbnZhciBfbWVyZ2UgPSByZXF1aXJlKCcuL2hlbHAvbWVyZ2UuanMnKTtcblxudmFyIF9tZXJnZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tZXJnZSk7XG5cbnZhciBfbGluZWFyaXplRW5jb2RpbmdzID0gcmVxdWlyZSgnLi9oZWxwL2xpbmVhcml6ZUVuY29kaW5ncy5qcycpO1xuXG52YXIgX2xpbmVhcml6ZUVuY29kaW5nczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lYXJpemVFbmNvZGluZ3MpO1xuXG52YXIgX2ZpeE9wdGlvbnMgPSByZXF1aXJlKCcuL2hlbHAvZml4T3B0aW9ucy5qcycpO1xuXG52YXIgX2ZpeE9wdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZml4T3B0aW9ucyk7XG5cbnZhciBfZ2V0UmVuZGVyUHJvcGVydGllcyA9IHJlcXVpcmUoJy4vaGVscC9nZXRSZW5kZXJQcm9wZXJ0aWVzLmpzJyk7XG5cbnZhciBfZ2V0UmVuZGVyUHJvcGVydGllczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRSZW5kZXJQcm9wZXJ0aWVzKTtcblxudmFyIF9vcHRpb25zRnJvbVN0cmluZ3MgPSByZXF1aXJlKCcuL2hlbHAvb3B0aW9uc0Zyb21TdHJpbmdzLmpzJyk7XG5cbnZhciBfb3B0aW9uc0Zyb21TdHJpbmdzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29wdGlvbnNGcm9tU3RyaW5ncyk7XG5cbnZhciBfRXJyb3JIYW5kbGVyID0gcmVxdWlyZSgnLi9leGNlcHRpb25zL0Vycm9ySGFuZGxlci5qcycpO1xuXG52YXIgX0Vycm9ySGFuZGxlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FcnJvckhhbmRsZXIpO1xuXG52YXIgX2V4Y2VwdGlvbnMgPSByZXF1aXJlKCcuL2V4Y2VwdGlvbnMvZXhjZXB0aW9ucy5qcycpO1xuXG52YXIgX2RlZmF1bHRzID0gcmVxdWlyZSgnLi9vcHRpb25zL2RlZmF1bHRzLmpzJyk7XG5cbnZhciBfZGVmYXVsdHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmYXVsdHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBUaGUgcHJvdHlwZSBvZiB0aGUgb2JqZWN0IHJldHVybmVkIGZyb20gdGhlIEpzQmFyY29kZSgpIGNhbGxcblxuXG4vLyBIZWxwIGZ1bmN0aW9uc1xudmFyIEFQSSA9IGZ1bmN0aW9uIEFQSSgpIHt9O1xuXG4vLyBUaGUgZmlyc3QgY2FsbCBvZiB0aGUgbGlicmFyeSBBUElcbi8vIFdpbGwgcmV0dXJuIGFuIG9iamVjdCB3aXRoIGFsbCBiYXJjb2RlcyBjYWxscyBhbmQgdGhlIGRhdGEgdGhhdCBpcyB1c2VkXG4vLyBieSB0aGUgcmVuZGVyZXJzXG5cblxuLy8gRGVmYXVsdCB2YWx1ZXNcblxuXG4vLyBFeGNlcHRpb25zXG4vLyBJbXBvcnQgYWxsIHRoZSBiYXJjb2Rlc1xudmFyIEpzQmFyY29kZSA9IGZ1bmN0aW9uIEpzQmFyY29kZShlbGVtZW50LCB0ZXh0LCBvcHRpb25zKSB7XG5cdHZhciBhcGkgPSBuZXcgQVBJKCk7XG5cblx0aWYgKHR5cGVvZiBlbGVtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0dGhyb3cgRXJyb3IoXCJObyBlbGVtZW50IHRvIHJlbmRlciBvbiB3YXMgcHJvdmlkZWQuXCIpO1xuXHR9XG5cblx0Ly8gVmFyaWFibGVzIHRoYXQgd2lsbCBiZSBwYXNlZCB0aHJvdWdoIHRoZSBBUEkgY2FsbHNcblx0YXBpLl9yZW5kZXJQcm9wZXJ0aWVzID0gKDAsIF9nZXRSZW5kZXJQcm9wZXJ0aWVzMi5kZWZhdWx0KShlbGVtZW50KTtcblx0YXBpLl9lbmNvZGluZ3MgPSBbXTtcblx0YXBpLl9vcHRpb25zID0gX2RlZmF1bHRzMi5kZWZhdWx0O1xuXHRhcGkuX2Vycm9ySGFuZGxlciA9IG5ldyBfRXJyb3JIYW5kbGVyMi5kZWZhdWx0KGFwaSk7XG5cblx0Ly8gSWYgdGV4dCBpcyBzZXQsIHVzZSB0aGUgc2ltcGxlIHN5bnRheCAocmVuZGVyIHRoZSBiYXJjb2RlIGRpcmVjdGx5KVxuXHRpZiAodHlwZW9mIHRleHQgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRcdGlmICghb3B0aW9ucy5mb3JtYXQpIHtcblx0XHRcdG9wdGlvbnMuZm9ybWF0ID0gYXV0b1NlbGVjdEJhcmNvZGUoKTtcblx0XHR9XG5cblx0XHRhcGkub3B0aW9ucyhvcHRpb25zKVtvcHRpb25zLmZvcm1hdF0odGV4dCwgb3B0aW9ucykucmVuZGVyKCk7XG5cdH1cblxuXHRyZXR1cm4gYXBpO1xufTtcblxuLy8gVG8gbWFrZSB0ZXN0cyB3b3JrIFRPRE86IHJlbW92ZVxuSnNCYXJjb2RlLmdldE1vZHVsZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdHJldHVybiBfYmFyY29kZXMyLmRlZmF1bHRbbmFtZV07XG59O1xuXG4vLyBSZWdpc3RlciBhbGwgYmFyY29kZXNcbmZvciAodmFyIG5hbWUgaW4gX2JhcmNvZGVzMi5kZWZhdWx0KSB7XG5cdGlmIChfYmFyY29kZXMyLmRlZmF1bHQuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcblx0XHQvLyBTZWN1cml0eSBjaGVjayBpZiB0aGUgcHJvcGVyeSBpcyBhIHByb3RvdHlwZSBwcm9wZXJ0eVxuXHRcdHJlZ2lzdGVyQmFyY29kZShfYmFyY29kZXMyLmRlZmF1bHQsIG5hbWUpO1xuXHR9XG59XG5mdW5jdGlvbiByZWdpc3RlckJhcmNvZGUoYmFyY29kZXMsIG5hbWUpIHtcblx0QVBJLnByb3RvdHlwZVtuYW1lXSA9IEFQSS5wcm90b3R5cGVbbmFtZS50b1VwcGVyQ2FzZSgpXSA9IEFQSS5wcm90b3R5cGVbbmFtZS50b0xvd2VyQ2FzZSgpXSA9IGZ1bmN0aW9uICh0ZXh0LCBvcHRpb25zKSB7XG5cdFx0dmFyIGFwaSA9IHRoaXM7XG5cdFx0cmV0dXJuIGFwaS5fZXJyb3JIYW5kbGVyLndyYXBCYXJjb2RlQ2FsbChmdW5jdGlvbiAoKSB7XG5cdFx0XHQvLyBFbnN1cmUgdGV4dCBpcyBvcHRpb25zLnRleHRcblx0XHRcdG9wdGlvbnMudGV4dCA9IHR5cGVvZiBvcHRpb25zLnRleHQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogJycgKyBvcHRpb25zLnRleHQ7XG5cblx0XHRcdHZhciBuZXdPcHRpb25zID0gKDAsIF9tZXJnZTIuZGVmYXVsdCkoYXBpLl9vcHRpb25zLCBvcHRpb25zKTtcblx0XHRcdG5ld09wdGlvbnMgPSAoMCwgX29wdGlvbnNGcm9tU3RyaW5nczIuZGVmYXVsdCkobmV3T3B0aW9ucyk7XG5cdFx0XHR2YXIgRW5jb2RlciA9IGJhcmNvZGVzW25hbWVdO1xuXHRcdFx0dmFyIGVuY29kZWQgPSBlbmNvZGUodGV4dCwgRW5jb2RlciwgbmV3T3B0aW9ucyk7XG5cdFx0XHRhcGkuX2VuY29kaW5ncy5wdXNoKGVuY29kZWQpO1xuXG5cdFx0XHRyZXR1cm4gYXBpO1xuXHRcdH0pO1xuXHR9O1xufVxuXG4vLyBlbmNvZGUoKSBoYW5kbGVzIHRoZSBFbmNvZGVyIGNhbGwgYW5kIGJ1aWxkcyB0aGUgYmluYXJ5IHN0cmluZyB0byBiZSByZW5kZXJlZFxuZnVuY3Rpb24gZW5jb2RlKHRleHQsIEVuY29kZXIsIG9wdGlvbnMpIHtcblx0Ly8gRW5zdXJlIHRoYXQgdGV4dCBpcyBhIHN0cmluZ1xuXHR0ZXh0ID0gXCJcIiArIHRleHQ7XG5cblx0dmFyIGVuY29kZXIgPSBuZXcgRW5jb2Rlcih0ZXh0LCBvcHRpb25zKTtcblxuXHQvLyBJZiB0aGUgaW5wdXQgaXMgbm90IHZhbGlkIGZvciB0aGUgZW5jb2RlciwgdGhyb3cgZXJyb3IuXG5cdC8vIElmIHRoZSB2YWxpZCBjYWxsYmFjayBvcHRpb24gaXMgc2V0LCBjYWxsIGl0IGluc3RlYWQgb2YgdGhyb3dpbmcgZXJyb3Jcblx0aWYgKCFlbmNvZGVyLnZhbGlkKCkpIHtcblx0XHR0aHJvdyBuZXcgX2V4Y2VwdGlvbnMuSW52YWxpZElucHV0RXhjZXB0aW9uKGVuY29kZXIuY29uc3RydWN0b3IubmFtZSwgdGV4dCk7XG5cdH1cblxuXHQvLyBNYWtlIGEgcmVxdWVzdCBmb3IgdGhlIGJpbmFyeSBkYXRhIChhbmQgb3RoZXIgaW5mcm9tYXRpb24pIHRoYXQgc2hvdWxkIGJlIHJlbmRlcmVkXG5cdHZhciBlbmNvZGVkID0gZW5jb2Rlci5lbmNvZGUoKTtcblxuXHQvLyBFbmNvZGluZ3MgY2FuIGJlIG5lc3RsZWQgbGlrZSBbWzEtMSwgMS0yXSwgMiwgWzMtMSwgMy0yXVxuXHQvLyBDb252ZXJ0IHRvIFsxLTEsIDEtMiwgMiwgMy0xLCAzLTJdXG5cdGVuY29kZWQgPSAoMCwgX2xpbmVhcml6ZUVuY29kaW5nczIuZGVmYXVsdCkoZW5jb2RlZCk7XG5cblx0Ly8gTWVyZ2Vcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbmNvZGVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0ZW5jb2RlZFtpXS5vcHRpb25zID0gKDAsIF9tZXJnZTIuZGVmYXVsdCkob3B0aW9ucywgZW5jb2RlZFtpXS5vcHRpb25zKTtcblx0fVxuXG5cdHJldHVybiBlbmNvZGVkO1xufVxuXG5mdW5jdGlvbiBhdXRvU2VsZWN0QmFyY29kZSgpIHtcblx0Ly8gSWYgQ09ERTEyOCBleGlzdHMuIFVzZSBpdFxuXHRpZiAoX2JhcmNvZGVzMi5kZWZhdWx0W1wiQ09ERTEyOFwiXSkge1xuXHRcdHJldHVybiBcIkNPREUxMjhcIjtcblx0fVxuXG5cdC8vIEVsc2UsIHRha2UgdGhlIGZpcnN0IChwcm9iYWJseSBvbmx5KSBiYXJjb2RlXG5cdHJldHVybiBPYmplY3Qua2V5cyhfYmFyY29kZXMyLmRlZmF1bHQpWzBdO1xufVxuXG4vLyBTZXRzIGdsb2JhbCBlbmNvZGVyIG9wdGlvbnNcbi8vIEFkZGVkIHRvIHRoZSBhcGkgYnkgdGhlIEpzQmFyY29kZSBmdW5jdGlvblxuQVBJLnByb3RvdHlwZS5vcHRpb25zID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0dGhpcy5fb3B0aW9ucyA9ICgwLCBfbWVyZ2UyLmRlZmF1bHQpKHRoaXMuX29wdGlvbnMsIG9wdGlvbnMpO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8vIFdpbGwgY3JlYXRlIGEgYmxhbmsgc3BhY2UgKHVzdWFsbHkgaW4gYmV0d2VlbiBiYXJjb2RlcylcbkFQSS5wcm90b3R5cGUuYmxhbmsgPSBmdW5jdGlvbiAoc2l6ZSkge1xuXHR2YXIgemVyb2VzID0gbmV3IEFycmF5KHNpemUgKyAxKS5qb2luKFwiMFwiKTtcblx0dGhpcy5fZW5jb2RpbmdzLnB1c2goeyBkYXRhOiB6ZXJvZXMgfSk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLy8gSW5pdGlhbGl6ZSBKc0JhcmNvZGUgb24gYWxsIEhUTUwgZWxlbWVudHMgZGVmaW5lZC5cbkFQSS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcblx0Ly8gU2hvdWxkIGRvIG5vdGhpbmcgaWYgbm8gZWxlbWVudHMgd2hlcmUgZm91bmRcblx0aWYgKCF0aGlzLl9yZW5kZXJQcm9wZXJ0aWVzKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gTWFrZSBzdXJlIHJlbmRlclByb3BlcmllcyBpcyBhbiBhcnJheVxuXHRpZiAoIUFycmF5LmlzQXJyYXkodGhpcy5fcmVuZGVyUHJvcGVydGllcykpIHtcblx0XHR0aGlzLl9yZW5kZXJQcm9wZXJ0aWVzID0gW3RoaXMuX3JlbmRlclByb3BlcnRpZXNdO1xuXHR9XG5cblx0dmFyIHJlbmRlclByb3BlcnR5O1xuXHRmb3IgKHZhciBpIGluIHRoaXMuX3JlbmRlclByb3BlcnRpZXMpIHtcblx0XHRyZW5kZXJQcm9wZXJ0eSA9IHRoaXMuX3JlbmRlclByb3BlcnRpZXNbaV07XG5cdFx0dmFyIG9wdGlvbnMgPSAoMCwgX21lcmdlMi5kZWZhdWx0KSh0aGlzLl9vcHRpb25zLCByZW5kZXJQcm9wZXJ0eS5vcHRpb25zKTtcblxuXHRcdGlmIChvcHRpb25zLmZvcm1hdCA9PSBcImF1dG9cIikge1xuXHRcdFx0b3B0aW9ucy5mb3JtYXQgPSBhdXRvU2VsZWN0QmFyY29kZSgpO1xuXHRcdH1cblxuXHRcdHRoaXMuX2Vycm9ySGFuZGxlci53cmFwQmFyY29kZUNhbGwoZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIHRleHQgPSBvcHRpb25zLnZhbHVlO1xuXHRcdFx0dmFyIEVuY29kZXIgPSBfYmFyY29kZXMyLmRlZmF1bHRbb3B0aW9ucy5mb3JtYXQudG9VcHBlckNhc2UoKV07XG5cdFx0XHR2YXIgZW5jb2RlZCA9IGVuY29kZSh0ZXh0LCBFbmNvZGVyLCBvcHRpb25zKTtcblxuXHRcdFx0cmVuZGVyKHJlbmRlclByb3BlcnR5LCBlbmNvZGVkLCBvcHRpb25zKTtcblx0XHR9KTtcblx0fVxufTtcblxuLy8gVGhlIHJlbmRlciBBUEkgY2FsbC4gQ2FsbHMgdGhlIHJlYWwgcmVuZGVyIGZ1bmN0aW9uLlxuQVBJLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICghdGhpcy5fcmVuZGVyUHJvcGVydGllcykge1xuXHRcdHRocm93IG5ldyBfZXhjZXB0aW9ucy5Ob0VsZW1lbnRFeGNlcHRpb24oKTtcblx0fVxuXG5cdGlmIChBcnJheS5pc0FycmF5KHRoaXMuX3JlbmRlclByb3BlcnRpZXMpKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9yZW5kZXJQcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRyZW5kZXIodGhpcy5fcmVuZGVyUHJvcGVydGllc1tpXSwgdGhpcy5fZW5jb2RpbmdzLCB0aGlzLl9vcHRpb25zKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVuZGVyKHRoaXMuX3JlbmRlclByb3BlcnRpZXMsIHRoaXMuX2VuY29kaW5ncywgdGhpcy5fb3B0aW9ucyk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbkFQSS5wcm90b3R5cGUuX2RlZmF1bHRzID0gX2RlZmF1bHRzMi5kZWZhdWx0O1xuXG4vLyBQcmVwYXJlcyB0aGUgZW5jb2RpbmdzIGFuZCBjYWxscyB0aGUgcmVuZGVyZXJcbmZ1bmN0aW9uIHJlbmRlcihyZW5kZXJQcm9wZXJ0aWVzLCBlbmNvZGluZ3MsIG9wdGlvbnMpIHtcblx0ZW5jb2RpbmdzID0gKDAsIF9saW5lYXJpemVFbmNvZGluZ3MyLmRlZmF1bHQpKGVuY29kaW5ncyk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbmNvZGluZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRlbmNvZGluZ3NbaV0ub3B0aW9ucyA9ICgwLCBfbWVyZ2UyLmRlZmF1bHQpKG9wdGlvbnMsIGVuY29kaW5nc1tpXS5vcHRpb25zKTtcblx0XHQoMCwgX2ZpeE9wdGlvbnMyLmRlZmF1bHQpKGVuY29kaW5nc1tpXS5vcHRpb25zKTtcblx0fVxuXG5cdCgwLCBfZml4T3B0aW9uczIuZGVmYXVsdCkob3B0aW9ucyk7XG5cblx0dmFyIFJlbmRlcmVyID0gcmVuZGVyUHJvcGVydGllcy5yZW5kZXJlcjtcblx0dmFyIHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHJlbmRlclByb3BlcnRpZXMuZWxlbWVudCwgZW5jb2RpbmdzLCBvcHRpb25zKTtcblx0cmVuZGVyZXIucmVuZGVyKCk7XG5cblx0aWYgKHJlbmRlclByb3BlcnRpZXMuYWZ0ZXJSZW5kZXIpIHtcblx0XHRyZW5kZXJQcm9wZXJ0aWVzLmFmdGVyUmVuZGVyKCk7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRvIGJyb3dzZXJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdHdpbmRvdy5Kc0JhcmNvZGUgPSBKc0JhcmNvZGU7XG59XG5cbi8vIEV4cG9ydCB0byBqUXVlcnlcbi8qZ2xvYmFsIGpRdWVyeSAqL1xuaWYgKHR5cGVvZiBqUXVlcnkgIT09ICd1bmRlZmluZWQnKSB7XG5cdGpRdWVyeS5mbi5Kc0JhcmNvZGUgPSBmdW5jdGlvbiAoY29udGVudCwgb3B0aW9ucykge1xuXHRcdHZhciBlbGVtZW50QXJyYXkgPSBbXTtcblx0XHRqUXVlcnkodGhpcykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRlbGVtZW50QXJyYXkucHVzaCh0aGlzKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gSnNCYXJjb2RlKGVsZW1lbnRBcnJheSwgY29udGVudCwgb3B0aW9ucyk7XG5cdH07XG59XG5cbi8vIEV4cG9ydCB0byBjb21tb25KU1xubW9kdWxlLmV4cG9ydHMgPSBKc0JhcmNvZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBCYXJjb2RlID0gZnVuY3Rpb24gQmFyY29kZShkYXRhLCBvcHRpb25zKSB7XG5cdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCYXJjb2RlKTtcblxuXHR0aGlzLmRhdGEgPSBkYXRhO1xuXHR0aGlzLnRleHQgPSBvcHRpb25zLnRleHQgfHwgZGF0YTtcblx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEJhcmNvZGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX0JhcmNvZGUyID0gcmVxdWlyZSgnLi4vQmFyY29kZS5qcycpO1xuXG52YXIgX0JhcmNvZGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQmFyY29kZTIpO1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLy8gVGhpcyBpcyB0aGUgbWFzdGVyIGNsYXNzLFxuLy8gaXQgZG9lcyByZXF1aXJlIHRoZSBzdGFydCBjb2RlIHRvIGJlIGluY2x1ZGVkIGluIHRoZSBzdHJpbmdcbnZhciBDT0RFMTI4ID0gZnVuY3Rpb24gKF9CYXJjb2RlKSB7XG5cdF9pbmhlcml0cyhDT0RFMTI4LCBfQmFyY29kZSk7XG5cblx0ZnVuY3Rpb24gQ09ERTEyOChkYXRhLCBvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIENPREUxMjgpO1xuXG5cdFx0Ly8gR2V0IGFycmF5IG9mIGFzY2lpIGNvZGVzIGZyb20gZGF0YVxuXHRcdHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDT0RFMTI4Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ09ERTEyOCkpLmNhbGwodGhpcywgZGF0YS5zdWJzdHJpbmcoMSksIG9wdGlvbnMpKTtcblxuXHRcdF90aGlzLmJ5dGVzID0gZGF0YS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChjaGFyKSB7XG5cdFx0XHRyZXR1cm4gY2hhci5jaGFyQ29kZUF0KDApO1xuXHRcdH0pO1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhDT0RFMTI4LCBbe1xuXHRcdGtleTogJ3ZhbGlkJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gdmFsaWQoKSB7XG5cdFx0XHQvLyBBU0NJSSB2YWx1ZSByYW5nZXMgMC0xMjcsIDIwMC0yMTFcblx0XHRcdHJldHVybiAoL15bXFx4MDAtXFx4N0ZcXHhDOC1cXHhEM10rJC8udGVzdCh0aGlzLmRhdGEpXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIFRoZSBwdWJsaWMgZW5jb2RpbmcgZnVuY3Rpb25cblxuXHR9LCB7XG5cdFx0a2V5OiAnZW5jb2RlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZW5jb2RlKCkge1xuXHRcdFx0dmFyIGJ5dGVzID0gdGhpcy5ieXRlcztcblx0XHRcdC8vIFJlbW92ZSB0aGUgc3RhcnQgY29kZSBmcm9tIHRoZSBieXRlcyBhbmQgc2V0IGl0cyBpbmRleFxuXHRcdFx0dmFyIHN0YXJ0SW5kZXggPSBieXRlcy5zaGlmdCgpIC0gMTA1O1xuXHRcdFx0Ly8gR2V0IHN0YXJ0IHNldCBieSBpbmRleFxuXHRcdFx0dmFyIHN0YXJ0U2V0ID0gX2NvbnN0YW50cy5TRVRfQllfQ09ERVtzdGFydEluZGV4XTtcblxuXHRcdFx0aWYgKHN0YXJ0U2V0ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSBlbmNvZGluZyBkb2VzIG5vdCBzdGFydCB3aXRoIGEgc3RhcnQgY2hhcmFjdGVyLicpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5zaG91bGRFbmNvZGVBc0VhbjEyOCgpID09PSB0cnVlKSB7XG5cdFx0XHRcdGJ5dGVzLnVuc2hpZnQoX2NvbnN0YW50cy5GTkMxKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU3RhcnQgZW5jb2RlIHdpdGggdGhlIHJpZ2h0IHR5cGVcblx0XHRcdHZhciBlbmNvZGluZ1Jlc3VsdCA9IENPREUxMjgubmV4dChieXRlcywgMSwgc3RhcnRTZXQpO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR0ZXh0OiB0aGlzLnRleHQgPT09IHRoaXMuZGF0YSA/IHRoaXMudGV4dC5yZXBsYWNlKC9bXlxceDIwLVxceDdFXS9nLCAnJykgOiB0aGlzLnRleHQsXG5cdFx0XHRcdGRhdGE6XG5cdFx0XHRcdC8vIEFkZCB0aGUgc3RhcnQgYml0c1xuXHRcdFx0XHRDT0RFMTI4LmdldEJhcihzdGFydEluZGV4KSArXG5cdFx0XHRcdC8vIEFkZCB0aGUgZW5jb2RlZCBiaXRzXG5cdFx0XHRcdGVuY29kaW5nUmVzdWx0LnJlc3VsdCArXG5cdFx0XHRcdC8vIEFkZCB0aGUgY2hlY2tzdW1cblx0XHRcdFx0Q09ERTEyOC5nZXRCYXIoKGVuY29kaW5nUmVzdWx0LmNoZWNrc3VtICsgc3RhcnRJbmRleCkgJSBfY29uc3RhbnRzLk1PRFVMTykgK1xuXHRcdFx0XHQvLyBBZGQgdGhlIGVuZCBiaXRzXG5cdFx0XHRcdENPREUxMjguZ2V0QmFyKF9jb25zdGFudHMuU1RPUClcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gR1MxLTEyOC9FQU4tMTI4XG5cblx0fSwge1xuXHRcdGtleTogJ3Nob3VsZEVuY29kZUFzRWFuMTI4Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gc2hvdWxkRW5jb2RlQXNFYW4xMjgoKSB7XG5cdFx0XHR2YXIgaXNFQU4xMjggPSB0aGlzLm9wdGlvbnMuZWFuMTI4IHx8IGZhbHNlO1xuXHRcdFx0aWYgKHR5cGVvZiBpc0VBTjEyOCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0aXNFQU4xMjggPSBpc0VBTjEyOC50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZSc7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gaXNFQU4xMjg7XG5cdFx0fVxuXG5cdFx0Ly8gR2V0IGEgYmFyIHN5bWJvbCBieSBpbmRleFxuXG5cdH1dLCBbe1xuXHRcdGtleTogJ2dldEJhcicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldEJhcihpbmRleCkge1xuXHRcdFx0cmV0dXJuIF9jb25zdGFudHMuQkFSU1tpbmRleF0gPyBfY29uc3RhbnRzLkJBUlNbaW5kZXhdLnRvU3RyaW5nKCkgOiAnJztcblx0XHR9XG5cblx0XHQvLyBDb3JyZWN0IGFuIGluZGV4IGJ5IGEgc2V0IGFuZCBzaGlmdCBpdCBmcm9tIHRoZSBieXRlcyBhcnJheVxuXG5cdH0sIHtcblx0XHRrZXk6ICdjb3JyZWN0SW5kZXgnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb3JyZWN0SW5kZXgoYnl0ZXMsIHNldCkge1xuXHRcdFx0aWYgKHNldCA9PT0gX2NvbnN0YW50cy5TRVRfQSkge1xuXHRcdFx0XHR2YXIgY2hhckNvZGUgPSBieXRlcy5zaGlmdCgpO1xuXHRcdFx0XHRyZXR1cm4gY2hhckNvZGUgPCAzMiA/IGNoYXJDb2RlICsgNjQgOiBjaGFyQ29kZSAtIDMyO1xuXHRcdFx0fSBlbHNlIGlmIChzZXQgPT09IF9jb25zdGFudHMuU0VUX0IpIHtcblx0XHRcdFx0cmV0dXJuIGJ5dGVzLnNoaWZ0KCkgLSAzMjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiAoYnl0ZXMuc2hpZnQoKSAtIDQ4KSAqIDEwICsgYnl0ZXMuc2hpZnQoKSAtIDQ4O1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ25leHQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBuZXh0KGJ5dGVzLCBwb3MsIHNldCkge1xuXHRcdFx0aWYgKCFieXRlcy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIHsgcmVzdWx0OiAnJywgY2hlY2tzdW06IDAgfTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIG5leHRDb2RlID0gdm9pZCAwLFxuXHRcdFx0ICAgIGluZGV4ID0gdm9pZCAwO1xuXG5cdFx0XHQvLyBTcGVjaWFsIGNoYXJhY3RlcnNcblx0XHRcdGlmIChieXRlc1swXSA+PSAyMDApIHtcblx0XHRcdFx0aW5kZXggPSBieXRlcy5zaGlmdCgpIC0gMTA1O1xuXHRcdFx0XHR2YXIgbmV4dFNldCA9IF9jb25zdGFudHMuU1dBUFtpbmRleF07XG5cblx0XHRcdFx0Ly8gU3dhcCB0byBvdGhlciBzZXRcblx0XHRcdFx0aWYgKG5leHRTZXQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdG5leHRDb2RlID0gQ09ERTEyOC5uZXh0KGJ5dGVzLCBwb3MgKyAxLCBuZXh0U2V0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBDb250aW51ZSBvbiBjdXJyZW50IHNldCBidXQgZW5jb2RlIGEgc3BlY2lhbCBjaGFyYWN0ZXJcblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyBTaGlmdFxuXHRcdFx0XHRcdFx0aWYgKChzZXQgPT09IF9jb25zdGFudHMuU0VUX0EgfHwgc2V0ID09PSBfY29uc3RhbnRzLlNFVF9CKSAmJiBpbmRleCA9PT0gX2NvbnN0YW50cy5TSElGVCkge1xuXHRcdFx0XHRcdFx0XHQvLyBDb252ZXJ0IHRoZSBuZXh0IGNoYXJhY3RlciBzbyB0aGF0IGlzIGVuY29kZWQgY29ycmVjdGx5XG5cdFx0XHRcdFx0XHRcdGJ5dGVzWzBdID0gc2V0ID09PSBfY29uc3RhbnRzLlNFVF9BID8gYnl0ZXNbMF0gPiA5NSA/IGJ5dGVzWzBdIC0gOTYgOiBieXRlc1swXSA6IGJ5dGVzWzBdIDwgMzIgPyBieXRlc1swXSArIDk2IDogYnl0ZXNbMF07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRuZXh0Q29kZSA9IENPREUxMjgubmV4dChieXRlcywgcG9zICsgMSwgc2V0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBDb250aW51ZSBlbmNvZGluZ1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0aW5kZXggPSBDT0RFMTI4LmNvcnJlY3RJbmRleChieXRlcywgc2V0KTtcblx0XHRcdFx0XHRuZXh0Q29kZSA9IENPREUxMjgubmV4dChieXRlcywgcG9zICsgMSwgc2V0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHQvLyBHZXQgdGhlIGNvcnJlY3QgYmluYXJ5IGVuY29kaW5nIGFuZCBjYWxjdWxhdGUgdGhlIHdlaWdodFxuXHRcdFx0dmFyIGVuYyA9IENPREUxMjguZ2V0QmFyKGluZGV4KTtcblx0XHRcdHZhciB3ZWlnaHQgPSBpbmRleCAqIHBvcztcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0cmVzdWx0OiBlbmMgKyBuZXh0Q29kZS5yZXN1bHQsXG5cdFx0XHRcdGNoZWNrc3VtOiB3ZWlnaHQgKyBuZXh0Q29kZS5jaGVja3N1bVxuXHRcdFx0fTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gQ09ERTEyODtcbn0oX0JhcmNvZGUzLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDT0RFMTI4OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9DT0RFMiA9IHJlcXVpcmUoJy4vQ09ERTEyOC5qcycpO1xuXG52YXIgX0NPREUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ09ERTIpO1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENPREUxMjhBID0gZnVuY3Rpb24gKF9DT0RFKSB7XG5cdF9pbmhlcml0cyhDT0RFMTI4QSwgX0NPREUpO1xuXG5cdGZ1bmN0aW9uIENPREUxMjhBKHN0cmluZywgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDT0RFMTI4QSk7XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENPREUxMjhBLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ09ERTEyOEEpKS5jYWxsKHRoaXMsIF9jb25zdGFudHMuQV9TVEFSVF9DSEFSICsgc3RyaW5nLCBvcHRpb25zKSk7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoQ09ERTEyOEEsIFt7XG5cdFx0a2V5OiAndmFsaWQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB2YWxpZCgpIHtcblx0XHRcdHJldHVybiBuZXcgUmVnRXhwKCdeJyArIF9jb25zdGFudHMuQV9DSEFSUyArICcrJCcpLnRlc3QodGhpcy5kYXRhKTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gQ09ERTEyOEE7XG59KF9DT0RFMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ09ERTEyOEE7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX0NPREUyID0gcmVxdWlyZSgnLi9DT0RFMTI4LmpzJyk7XG5cbnZhciBfQ09ERTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DT0RFMik7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ09ERTEyOEIgPSBmdW5jdGlvbiAoX0NPREUpIHtcblx0X2luaGVyaXRzKENPREUxMjhCLCBfQ09ERSk7XG5cblx0ZnVuY3Rpb24gQ09ERTEyOEIoc3RyaW5nLCBvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIENPREUxMjhCKTtcblxuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ09ERTEyOEIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDT0RFMTI4QikpLmNhbGwodGhpcywgX2NvbnN0YW50cy5CX1NUQVJUX0NIQVIgKyBzdHJpbmcsIG9wdGlvbnMpKTtcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhDT0RFMTI4QiwgW3tcblx0XHRrZXk6ICd2YWxpZCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHZhbGlkKCkge1xuXHRcdFx0cmV0dXJuIG5ldyBSZWdFeHAoJ14nICsgX2NvbnN0YW50cy5CX0NIQVJTICsgJyskJykudGVzdCh0aGlzLmRhdGEpO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBDT0RFMTI4Qjtcbn0oX0NPREUzLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDT0RFMTI4QjsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfQ09ERTIgPSByZXF1aXJlKCcuL0NPREUxMjguanMnKTtcblxudmFyIF9DT0RFMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NPREUyKTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDT0RFMTI4QyA9IGZ1bmN0aW9uIChfQ09ERSkge1xuXHRfaW5oZXJpdHMoQ09ERTEyOEMsIF9DT0RFKTtcblxuXHRmdW5jdGlvbiBDT0RFMTI4QyhzdHJpbmcsIG9wdGlvbnMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ09ERTEyOEMpO1xuXG5cdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDT0RFMTI4Qy5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENPREUxMjhDKSkuY2FsbCh0aGlzLCBfY29uc3RhbnRzLkNfU1RBUlRfQ0hBUiArIHN0cmluZywgb3B0aW9ucykpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKENPREUxMjhDLCBbe1xuXHRcdGtleTogJ3ZhbGlkJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gdmFsaWQoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFJlZ0V4cCgnXicgKyBfY29uc3RhbnRzLkNfQ0hBUlMgKyAnKyQnKS50ZXN0KHRoaXMuZGF0YSk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIENPREUxMjhDO1xufShfQ09ERTMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENPREUxMjhDOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9DT0RFMiA9IHJlcXVpcmUoJy4vQ09ERTEyOCcpO1xuXG52YXIgX0NPREUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ09ERTIpO1xuXG52YXIgX2F1dG8gPSByZXF1aXJlKCcuL2F1dG8nKTtcblxudmFyIF9hdXRvMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F1dG8pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDT0RFMTI4QVVUTyA9IGZ1bmN0aW9uIChfQ09ERSkge1xuXHRfaW5oZXJpdHMoQ09ERTEyOEFVVE8sIF9DT0RFKTtcblxuXHRmdW5jdGlvbiBDT0RFMTI4QVVUTyhkYXRhLCBvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIENPREUxMjhBVVRPKTtcblxuXHRcdC8vIEFTQ0lJIHZhbHVlIHJhbmdlcyAwLTEyNywgMjAwLTIxMVxuXHRcdGlmICgvXltcXHgwMC1cXHg3RlxceEM4LVxceEQzXSskLy50ZXN0KGRhdGEpKSB7XG5cdFx0XHR2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ09ERTEyOEFVVE8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDT0RFMTI4QVVUTykpLmNhbGwodGhpcywgKDAsIF9hdXRvMi5kZWZhdWx0KShkYXRhKSwgb3B0aW9ucykpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ09ERTEyOEFVVE8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDT0RFMTI4QVVUTykpLmNhbGwodGhpcywgZGF0YSwgb3B0aW9ucykpO1xuXHRcdH1cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMpO1xuXHR9XG5cblx0cmV0dXJuIENPREUxMjhBVVRPO1xufShfQ09ERTMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENPREUxMjhBVVRPOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG4vLyBNYXRjaCBTZXQgZnVuY3Rpb25zXG52YXIgbWF0Y2hTZXRBTGVuZ3RoID0gZnVuY3Rpb24gbWF0Y2hTZXRBTGVuZ3RoKHN0cmluZykge1xuXHRyZXR1cm4gc3RyaW5nLm1hdGNoKG5ldyBSZWdFeHAoJ14nICsgX2NvbnN0YW50cy5BX0NIQVJTICsgJyonKSlbMF0ubGVuZ3RoO1xufTtcbnZhciBtYXRjaFNldEJMZW5ndGggPSBmdW5jdGlvbiBtYXRjaFNldEJMZW5ndGgoc3RyaW5nKSB7XG5cdHJldHVybiBzdHJpbmcubWF0Y2gobmV3IFJlZ0V4cCgnXicgKyBfY29uc3RhbnRzLkJfQ0hBUlMgKyAnKicpKVswXS5sZW5ndGg7XG59O1xudmFyIG1hdGNoU2V0QyA9IGZ1bmN0aW9uIG1hdGNoU2V0QyhzdHJpbmcpIHtcblx0cmV0dXJuIHN0cmluZy5tYXRjaChuZXcgUmVnRXhwKCdeJyArIF9jb25zdGFudHMuQ19DSEFSUyArICcqJykpWzBdO1xufTtcblxuLy8gQ09ERTEyOEEgb3IgQ09ERTEyOEJcbmZ1bmN0aW9uIGF1dG9TZWxlY3RGcm9tQUIoc3RyaW5nLCBpc0EpIHtcblx0dmFyIHJhbmdlcyA9IGlzQSA/IF9jb25zdGFudHMuQV9DSEFSUyA6IF9jb25zdGFudHMuQl9DSEFSUztcblx0dmFyIHVudGlsQyA9IHN0cmluZy5tYXRjaChuZXcgUmVnRXhwKCdeKCcgKyByYW5nZXMgKyAnKz8pKChbMC05XXsyfSl7Mix9KShbXjAtOV18JCknKSk7XG5cblx0aWYgKHVudGlsQykge1xuXHRcdHJldHVybiB1bnRpbENbMV0gKyBTdHJpbmcuZnJvbUNoYXJDb2RlKDIwNCkgKyBhdXRvU2VsZWN0RnJvbUMoc3RyaW5nLnN1YnN0cmluZyh1bnRpbENbMV0ubGVuZ3RoKSk7XG5cdH1cblxuXHR2YXIgY2hhcnMgPSBzdHJpbmcubWF0Y2gobmV3IFJlZ0V4cCgnXicgKyByYW5nZXMgKyAnKycpKVswXTtcblxuXHRpZiAoY2hhcnMubGVuZ3RoID09PSBzdHJpbmcubGVuZ3RoKSB7XG5cdFx0cmV0dXJuIHN0cmluZztcblx0fVxuXG5cdHJldHVybiBjaGFycyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaXNBID8gMjA1IDogMjA2KSArIGF1dG9TZWxlY3RGcm9tQUIoc3RyaW5nLnN1YnN0cmluZyhjaGFycy5sZW5ndGgpLCAhaXNBKTtcbn1cblxuLy8gQ09ERTEyOENcbmZ1bmN0aW9uIGF1dG9TZWxlY3RGcm9tQyhzdHJpbmcpIHtcblx0dmFyIGNNYXRjaCA9IG1hdGNoU2V0QyhzdHJpbmcpO1xuXHR2YXIgbGVuZ3RoID0gY01hdGNoLmxlbmd0aDtcblxuXHRpZiAobGVuZ3RoID09PSBzdHJpbmcubGVuZ3RoKSB7XG5cdFx0cmV0dXJuIHN0cmluZztcblx0fVxuXG5cdHN0cmluZyA9IHN0cmluZy5zdWJzdHJpbmcobGVuZ3RoKTtcblxuXHQvLyBTZWxlY3QgQS9CIGRlcGVuZGluZyBvbiB0aGUgbG9uZ2VzdCBtYXRjaFxuXHR2YXIgaXNBID0gbWF0Y2hTZXRBTGVuZ3RoKHN0cmluZykgPj0gbWF0Y2hTZXRCTGVuZ3RoKHN0cmluZyk7XG5cdHJldHVybiBjTWF0Y2ggKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGlzQSA/IDIwNiA6IDIwNSkgKyBhdXRvU2VsZWN0RnJvbUFCKHN0cmluZywgaXNBKTtcbn1cblxuLy8gRGV0ZWN0IENvZGUgU2V0IChBLCBCIG9yIEMpIGFuZCBmb3JtYXQgdGhlIHN0cmluZ1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdHZhciBuZXdTdHJpbmcgPSB2b2lkIDA7XG5cdHZhciBjTGVuZ3RoID0gbWF0Y2hTZXRDKHN0cmluZykubGVuZ3RoO1xuXG5cdC8vIFNlbGVjdCAxMjhDIGlmIHRoZSBzdHJpbmcgc3RhcnQgd2l0aCBlbm91Z2ggZGlnaXRzXG5cdGlmIChjTGVuZ3RoID49IDIpIHtcblx0XHRuZXdTdHJpbmcgPSBfY29uc3RhbnRzLkNfU1RBUlRfQ0hBUiArIGF1dG9TZWxlY3RGcm9tQyhzdHJpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIFNlbGVjdCBBL0IgZGVwZW5kaW5nIG9uIHRoZSBsb25nZXN0IG1hdGNoXG5cdFx0dmFyIGlzQSA9IG1hdGNoU2V0QUxlbmd0aChzdHJpbmcpID4gbWF0Y2hTZXRCTGVuZ3RoKHN0cmluZyk7XG5cdFx0bmV3U3RyaW5nID0gKGlzQSA/IF9jb25zdGFudHMuQV9TVEFSVF9DSEFSIDogX2NvbnN0YW50cy5CX1NUQVJUX0NIQVIpICsgYXV0b1NlbGVjdEZyb21BQihzdHJpbmcsIGlzQSk7XG5cdH1cblxuXHRyZXR1cm4gbmV3U3RyaW5nLnJlcGxhY2UoL1tcXHhDRFxceENFXShbXl0pW1xceENEXFx4Q0VdLywgLy8gQW55IHNlcXVlbmNlIGJldHdlZW4gMjA1IGFuZCAyMDYgY2hhcmFjdGVyc1xuXHRmdW5jdGlvbiAobWF0Y2gsIGNoYXIpIHtcblx0XHRyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgyMDMpICsgY2hhcjtcblx0fSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1NFVF9CWV9DT0RFO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG4vLyBjb25zdGFudHMgZm9yIGludGVybmFsIHVzYWdlXG52YXIgU0VUX0EgPSBleHBvcnRzLlNFVF9BID0gMDtcbnZhciBTRVRfQiA9IGV4cG9ydHMuU0VUX0IgPSAxO1xudmFyIFNFVF9DID0gZXhwb3J0cy5TRVRfQyA9IDI7XG5cbi8vIFNwZWNpYWwgY2hhcmFjdGVyc1xudmFyIFNISUZUID0gZXhwb3J0cy5TSElGVCA9IDk4O1xudmFyIFNUQVJUX0EgPSBleHBvcnRzLlNUQVJUX0EgPSAxMDM7XG52YXIgU1RBUlRfQiA9IGV4cG9ydHMuU1RBUlRfQiA9IDEwNDtcbnZhciBTVEFSVF9DID0gZXhwb3J0cy5TVEFSVF9DID0gMTA1O1xudmFyIE1PRFVMTyA9IGV4cG9ydHMuTU9EVUxPID0gMTAzO1xudmFyIFNUT1AgPSBleHBvcnRzLlNUT1AgPSAxMDY7XG52YXIgRk5DMSA9IGV4cG9ydHMuRk5DMSA9IDIwNztcblxuLy8gR2V0IHNldCBieSBzdGFydCBjb2RlXG52YXIgU0VUX0JZX0NPREUgPSBleHBvcnRzLlNFVF9CWV9DT0RFID0gKF9TRVRfQllfQ09ERSA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX1NFVF9CWV9DT0RFLCBTVEFSVF9BLCBTRVRfQSksIF9kZWZpbmVQcm9wZXJ0eShfU0VUX0JZX0NPREUsIFNUQVJUX0IsIFNFVF9CKSwgX2RlZmluZVByb3BlcnR5KF9TRVRfQllfQ09ERSwgU1RBUlRfQywgU0VUX0MpLCBfU0VUX0JZX0NPREUpO1xuXG4vLyBHZXQgbmV4dCBzZXQgYnkgY29kZVxudmFyIFNXQVAgPSBleHBvcnRzLlNXQVAgPSB7XG5cdDEwMTogU0VUX0EsXG5cdDEwMDogU0VUX0IsXG5cdDk5OiBTRVRfQ1xufTtcblxudmFyIEFfU1RBUlRfQ0hBUiA9IGV4cG9ydHMuQV9TVEFSVF9DSEFSID0gU3RyaW5nLmZyb21DaGFyQ29kZSgyMDgpOyAvLyBTVEFSVF9BICsgMTA1XG52YXIgQl9TVEFSVF9DSEFSID0gZXhwb3J0cy5CX1NUQVJUX0NIQVIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDIwOSk7IC8vIFNUQVJUX0IgKyAxMDVcbnZhciBDX1NUQVJUX0NIQVIgPSBleHBvcnRzLkNfU1RBUlRfQ0hBUiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMjEwKTsgLy8gU1RBUlRfQyArIDEwNVxuXG4vLyAxMjhBIChDb2RlIFNldCBBKVxuLy8gQVNDSUkgY2hhcmFjdGVycyAwMCB0byA5NSAoMOKAkzksIEHigJNaIGFuZCBjb250cm9sIGNvZGVzKSwgc3BlY2lhbCBjaGFyYWN0ZXJzLCBhbmQgRk5DIDHigJM0XG52YXIgQV9DSEFSUyA9IGV4cG9ydHMuQV9DSEFSUyA9IFwiW1xceDAwLVxceDVGXFx4QzgtXFx4Q0ZdXCI7XG5cbi8vIDEyOEIgKENvZGUgU2V0IEIpXG4vLyBBU0NJSSBjaGFyYWN0ZXJzIDMyIHRvIDEyNyAoMOKAkzksIEHigJNaLCBh4oCTeiksIHNwZWNpYWwgY2hhcmFjdGVycywgYW5kIEZOQyAx4oCTNFxudmFyIEJfQ0hBUlMgPSBleHBvcnRzLkJfQ0hBUlMgPSBcIltcXHgyMC1cXHg3RlxceEM4LVxceENGXVwiO1xuXG4vLyAxMjhDIChDb2RlIFNldCBDKVxuLy8gMDDigJM5OSAoZW5jb2RlcyB0d28gZGlnaXRzIHdpdGggYSBzaW5nbGUgY29kZSBwb2ludCkgYW5kIEZOQzFcbnZhciBDX0NIQVJTID0gZXhwb3J0cy5DX0NIQVJTID0gXCIoXFx4Q0YqWzAtOV17Mn1cXHhDRiopXCI7XG5cbi8vIENPREUxMjggaW5jbHVkZXMgMTA3IHN5bWJvbHM6XG4vLyAxMDMgZGF0YSBzeW1ib2xzLCAzIHN0YXJ0IHN5bWJvbHMgKEEsIEIgYW5kIEMpLCBhbmQgMSBzdG9wIHN5bWJvbCAodGhlIGxhc3Qgb25lKVxuLy8gRWFjaCBzeW1ib2wgY29uc2lzdCBvZiB0aHJlZSBibGFjayBiYXJzICgxKSBhbmQgdGhyZWUgd2hpdGUgc3BhY2VzICgwKS5cbnZhciBCQVJTID0gZXhwb3J0cy5CQVJTID0gWzExMDExMDAxMTAwLCAxMTAwMTEwMTEwMCwgMTEwMDExMDAxMTAsIDEwMDEwMDExMDAwLCAxMDAxMDAwMTEwMCwgMTAwMDEwMDExMDAsIDEwMDExMDAxMDAwLCAxMDAxMTAwMDEwMCwgMTAwMDExMDAxMDAsIDExMDAxMDAxMDAwLCAxMTAwMTAwMDEwMCwgMTEwMDAxMDAxMDAsIDEwMTEwMDExMTAwLCAxMDAxMTAxMTEwMCwgMTAwMTEwMDExMTAsIDEwMTExMDAxMTAwLCAxMDAxMTEwMTEwMCwgMTAwMTExMDAxMTAsIDExMDAxMTEwMDEwLCAxMTAwMTAxMTEwMCwgMTEwMDEwMDExMTAsIDExMDExMTAwMTAwLCAxMTAwMTExMDEwMCwgMTExMDExMDExMTAsIDExMTAxMDAxMTAwLCAxMTEwMDEwMTEwMCwgMTExMDAxMDAxMTAsIDExMTAxMTAwMTAwLCAxMTEwMDExMDEwMCwgMTExMDAxMTAwMTAsIDExMDExMDExMDAwLCAxMTAxMTAwMDExMCwgMTEwMDAxMTAxMTAsIDEwMTAwMDExMDAwLCAxMDAwMTAxMTAwMCwgMTAwMDEwMDAxMTAsIDEwMTEwMDAxMDAwLCAxMDAwMTEwMTAwMCwgMTAwMDExMDAwMTAsIDExMDEwMDAxMDAwLCAxMTAwMDEwMTAwMCwgMTEwMDAxMDAwMTAsIDEwMTEwMTExMDAwLCAxMDExMDAwMTExMCwgMTAwMDExMDExMTAsIDEwMTExMDExMDAwLCAxMDExMTAwMDExMCwgMTAwMDExMTAxMTAsIDExMTAxMTEwMTEwLCAxMTAxMDAwMTExMCwgMTEwMDAxMDExMTAsIDExMDExMTAxMDAwLCAxMTAxMTEwMDAxMCwgMTEwMTExMDExMTAsIDExMTAxMDExMDAwLCAxMTEwMTAwMDExMCwgMTExMDAwMTAxMTAsIDExMTAxMTAxMDAwLCAxMTEwMTEwMDAxMCwgMTExMDAwMTEwMTAsIDExMTAxMTExMDEwLCAxMTAwMTAwMDAxMCwgMTExMTAwMDEwMTAsIDEwMTAwMTEwMDAwLCAxMDEwMDAwMTEwMCwgMTAwMTAxMTAwMDAsIDEwMDEwMDAwMTEwLCAxMDAwMDEwMTEwMCwgMTAwMDAxMDAxMTAsIDEwMTEwMDEwMDAwLCAxMDExMDAwMDEwMCwgMTAwMTEwMTAwMDAsIDEwMDExMDAwMDEwLCAxMDAwMDExMDEwMCwgMTAwMDAxMTAwMTAsIDExMDAwMDEwMDEwLCAxMTAwMTAxMDAwMCwgMTExMTAxMTEwMTAsIDExMDAwMDEwMTAwLCAxMDAwMTExMTAxMCwgMTAxMDAxMTExMDAsIDEwMDEwMTExMTAwLCAxMDAxMDAxMTExMCwgMTAxMTExMDAxMDAsIDEwMDExMTEwMTAwLCAxMDAxMTExMDAxMCwgMTExMTAxMDAxMDAsIDExMTEwMDEwMTAwLCAxMTExMDAxMDAxMCwgMTEwMTEwMTExMTAsIDExMDExMTEwMTEwLCAxMTExMDExMDExMCwgMTAxMDExMTEwMDAsIDEwMTAwMDExMTEwLCAxMDAwMTAxMTExMCwgMTAxMTExMDEwMDAsIDEwMTExMTAwMDEwLCAxMTExMDEwMTAwMCwgMTExMTAxMDAwMTAsIDEwMTExMDExMTEwLCAxMDExMTEwMTExMCwgMTExMDEwMTExMTAsIDExMTEwMTAxMTEwLCAxMTAxMDAwMDEwMCwgMTEwMTAwMTAwMDAsIDExMDEwMDExMTAwLCAxMTAwMDExMTAxMDExXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkNPREUxMjhDID0gZXhwb3J0cy5DT0RFMTI4QiA9IGV4cG9ydHMuQ09ERTEyOEEgPSBleHBvcnRzLkNPREUxMjggPSB1bmRlZmluZWQ7XG5cbnZhciBfQ09ERTEyOF9BVVRPID0gcmVxdWlyZSgnLi9DT0RFMTI4X0FVVE8uanMnKTtcblxudmFyIF9DT0RFMTI4X0FVVE8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ09ERTEyOF9BVVRPKTtcblxudmFyIF9DT0RFMTI4QSA9IHJlcXVpcmUoJy4vQ09ERTEyOEEuanMnKTtcblxudmFyIF9DT0RFMTI4QTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DT0RFMTI4QSk7XG5cbnZhciBfQ09ERTEyOEIgPSByZXF1aXJlKCcuL0NPREUxMjhCLmpzJyk7XG5cbnZhciBfQ09ERTEyOEIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ09ERTEyOEIpO1xuXG52YXIgX0NPREUxMjhDID0gcmVxdWlyZSgnLi9DT0RFMTI4Qy5qcycpO1xuXG52YXIgX0NPREUxMjhDMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NPREUxMjhDKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5DT0RFMTI4ID0gX0NPREUxMjhfQVVUTzIuZGVmYXVsdDtcbmV4cG9ydHMuQ09ERTEyOEEgPSBfQ09ERTEyOEEyLmRlZmF1bHQ7XG5leHBvcnRzLkNPREUxMjhCID0gX0NPREUxMjhCMi5kZWZhdWx0O1xuZXhwb3J0cy5DT0RFMTI4QyA9IF9DT0RFMTI4QzIuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuQ09ERTM5ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX0JhcmNvZGUyID0gcmVxdWlyZShcIi4uL0JhcmNvZGUuanNcIik7XG5cbnZhciBfQmFyY29kZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CYXJjb2RlMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH0gLy8gRW5jb2RpbmcgZG9jdW1lbnRhdGlvbjpcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvZGVfMzkjRW5jb2RpbmdcblxudmFyIENPREUzOSA9IGZ1bmN0aW9uIChfQmFyY29kZSkge1xuXHRfaW5oZXJpdHMoQ09ERTM5LCBfQmFyY29kZSk7XG5cblx0ZnVuY3Rpb24gQ09ERTM5KGRhdGEsIG9wdGlvbnMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ09ERTM5KTtcblxuXHRcdGRhdGEgPSBkYXRhLnRvVXBwZXJDYXNlKCk7XG5cblx0XHQvLyBDYWxjdWxhdGUgbW9kNDMgY2hlY2tzdW0gaWYgZW5hYmxlZFxuXHRcdGlmIChvcHRpb25zLm1vZDQzKSB7XG5cdFx0XHRkYXRhICs9IGdldENoYXJhY3Rlcihtb2Q0M2NoZWNrc3VtKGRhdGEpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENPREUzOS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENPREUzOSkpLmNhbGwodGhpcywgZGF0YSwgb3B0aW9ucykpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKENPREUzOSwgW3tcblx0XHRrZXk6IFwiZW5jb2RlXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGVuY29kZSgpIHtcblx0XHRcdC8vIEZpcnN0IGNoYXJhY3RlciBpcyBhbHdheXMgYSAqXG5cdFx0XHR2YXIgcmVzdWx0ID0gZ2V0RW5jb2RpbmcoXCIqXCIpO1xuXG5cdFx0XHQvLyBUYWtlIGV2ZXJ5IGNoYXJhY3RlciBhbmQgYWRkIHRoZSBiaW5hcnkgcmVwcmVzZW50YXRpb24gdG8gdGhlIHJlc3VsdFxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0cmVzdWx0ICs9IGdldEVuY29kaW5nKHRoaXMuZGF0YVtpXSkgKyBcIjBcIjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTGFzdCBjaGFyYWN0ZXIgaXMgYWx3YXlzIGEgKlxuXHRcdFx0cmVzdWx0ICs9IGdldEVuY29kaW5nKFwiKlwiKTtcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YTogcmVzdWx0LFxuXHRcdFx0XHR0ZXh0OiB0aGlzLnRleHRcblx0XHRcdH07XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcInZhbGlkXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHZhbGlkKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGF0YS5zZWFyY2goL15bMC05QS1aXFwtXFwuXFwgXFwkXFwvXFwrXFwlXSskLykgIT09IC0xO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBDT0RFMzk7XG59KF9CYXJjb2RlMy5kZWZhdWx0KTtcblxuLy8gQWxsIGNoYXJhY3RlcnMuIFRoZSBwb3NpdGlvbiBpbiB0aGUgYXJyYXkgaXMgdGhlIChjaGVja3N1bSkgdmFsdWVcblxuXG52YXIgY2hhcmFjdGVycyA9IFtcIjBcIiwgXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiLCBcIklcIiwgXCJKXCIsIFwiS1wiLCBcIkxcIiwgXCJNXCIsIFwiTlwiLCBcIk9cIiwgXCJQXCIsIFwiUVwiLCBcIlJcIiwgXCJTXCIsIFwiVFwiLCBcIlVcIiwgXCJWXCIsIFwiV1wiLCBcIlhcIiwgXCJZXCIsIFwiWlwiLCBcIi1cIiwgXCIuXCIsIFwiIFwiLCBcIiRcIiwgXCIvXCIsIFwiK1wiLCBcIiVcIiwgXCIqXCJdO1xuXG4vLyBUaGUgZGVjaW1hbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgY2hhcmFjdGVycywgaXMgY29udmVydGVkIHRvIHRoZVxuLy8gY29ycmVzcG9uZGluZyBiaW5hcnkgd2l0aCB0aGUgZ2V0RW5jb2RpbmcgZnVuY3Rpb25cbnZhciBlbmNvZGluZ3MgPSBbMjA5NTcsIDI5NzgzLCAyMzYzOSwgMzA0ODUsIDIwOTUxLCAyOTgxMywgMjM2NjksIDIwODU1LCAyOTc4OSwgMjM2NDUsIDI5OTc1LCAyMzgzMSwgMzA1MzMsIDIyMjk1LCAzMDE0OSwgMjQwMDUsIDIxNjIzLCAyOTk4MSwgMjM4MzcsIDIyMzAxLCAzMDAyMywgMjM4NzksIDMwNTQ1LCAyMjM0MywgMzAxNjEsIDI0MDE3LCAyMTk1OSwgMzAwNjUsIDIzOTIxLCAyMjM4NSwgMjkwMTUsIDE4MjYzLCAyOTE0MSwgMTc4NzksIDI5MDQ1LCAxODI5MywgMTc3ODMsIDI5MDIxLCAxODI2OSwgMTc0NzcsIDE3NDg5LCAxNzY4MSwgMjA3NTMsIDM1NzcwXTtcblxuLy8gR2V0IHRoZSBiaW5hcnkgcmVwcmVzZW50YXRpb24gb2YgYSBjaGFyYWN0ZXIgYnkgY29udmVydGluZyB0aGUgZW5jb2RpbmdzXG4vLyBmcm9tIGRlY2ltYWwgdG8gYmluYXJ5XG5mdW5jdGlvbiBnZXRFbmNvZGluZyhjaGFyYWN0ZXIpIHtcblx0cmV0dXJuIGdldEJpbmFyeShjaGFyYWN0ZXJWYWx1ZShjaGFyYWN0ZXIpKTtcbn1cblxuZnVuY3Rpb24gZ2V0QmluYXJ5KGNoYXJhY3RlclZhbHVlKSB7XG5cdHJldHVybiBlbmNvZGluZ3NbY2hhcmFjdGVyVmFsdWVdLnRvU3RyaW5nKDIpO1xufVxuXG5mdW5jdGlvbiBnZXRDaGFyYWN0ZXIoY2hhcmFjdGVyVmFsdWUpIHtcblx0cmV0dXJuIGNoYXJhY3RlcnNbY2hhcmFjdGVyVmFsdWVdO1xufVxuXG5mdW5jdGlvbiBjaGFyYWN0ZXJWYWx1ZShjaGFyYWN0ZXIpIHtcblx0cmV0dXJuIGNoYXJhY3RlcnMuaW5kZXhPZihjaGFyYWN0ZXIpO1xufVxuXG5mdW5jdGlvbiBtb2Q0M2NoZWNrc3VtKGRhdGEpIHtcblx0dmFyIGNoZWNrc3VtID0gMDtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2hlY2tzdW0gKz0gY2hhcmFjdGVyVmFsdWUoZGF0YVtpXSk7XG5cdH1cblxuXHRjaGVja3N1bSA9IGNoZWNrc3VtICUgNDM7XG5cdHJldHVybiBjaGVja3N1bTtcbn1cblxuZXhwb3J0cy5DT0RFMzkgPSBDT0RFMzk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbnZhciBfZW5jb2RlciA9IHJlcXVpcmUoJy4vZW5jb2RlcicpO1xuXG52YXIgX2VuY29kZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZW5jb2Rlcik7XG5cbnZhciBfQmFyY29kZTIgPSByZXF1aXJlKCcuLi9CYXJjb2RlJyk7XG5cbnZhciBfQmFyY29kZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CYXJjb2RlMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLy8gQmFzZSBjbGFzcyBmb3IgRUFOOCAmIEVBTjEzXG52YXIgRUFOID0gZnVuY3Rpb24gKF9CYXJjb2RlKSB7XG5cdF9pbmhlcml0cyhFQU4sIF9CYXJjb2RlKTtcblxuXHRmdW5jdGlvbiBFQU4oZGF0YSwgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFQU4pO1xuXG5cdFx0Ly8gTWFrZSBzdXJlIHRoZSBmb250IGlzIG5vdCBiaWdnZXIgdGhhbiB0aGUgc3BhY2UgYmV0d2VlbiB0aGUgZ3VhcmQgYmFyc1xuXHRcdHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChFQU4uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihFQU4pKS5jYWxsKHRoaXMsIGRhdGEsIG9wdGlvbnMpKTtcblxuXHRcdF90aGlzLmZvbnRTaXplID0gIW9wdGlvbnMuZmxhdCAmJiBvcHRpb25zLmZvbnRTaXplID4gb3B0aW9ucy53aWR0aCAqIDEwID8gb3B0aW9ucy53aWR0aCAqIDEwIDogb3B0aW9ucy5mb250U2l6ZTtcblxuXHRcdC8vIE1ha2UgdGhlIGd1YXJkIGJhcnMgZ28gZG93biBoYWxmIHRoZSB3YXkgb2YgdGhlIHRleHRcblx0XHRfdGhpcy5ndWFyZEhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0ICsgX3RoaXMuZm9udFNpemUgLyAyICsgb3B0aW9ucy50ZXh0TWFyZ2luO1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhFQU4sIFt7XG5cdFx0a2V5OiAnZW5jb2RlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZW5jb2RlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMub3B0aW9ucy5mbGF0ID8gdGhpcy5lbmNvZGVGbGF0KCkgOiB0aGlzLmVuY29kZUd1YXJkZWQoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdsZWZ0VGV4dCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGxlZnRUZXh0KGZyb20sIHRvKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50ZXh0LnN1YnN0cihmcm9tLCB0byk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnbGVmdEVuY29kZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGxlZnRFbmNvZGUoZGF0YSwgc3RydWN0dXJlKSB7XG5cdFx0XHRyZXR1cm4gKDAsIF9lbmNvZGVyMi5kZWZhdWx0KShkYXRhLCBzdHJ1Y3R1cmUpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JpZ2h0VGV4dCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJpZ2h0VGV4dChmcm9tLCB0bykge1xuXHRcdFx0cmV0dXJuIHRoaXMudGV4dC5zdWJzdHIoZnJvbSwgdG8pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JpZ2h0RW5jb2RlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmlnaHRFbmNvZGUoZGF0YSwgc3RydWN0dXJlKSB7XG5cdFx0XHRyZXR1cm4gKDAsIF9lbmNvZGVyMi5kZWZhdWx0KShkYXRhLCBzdHJ1Y3R1cmUpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2VuY29kZUd1YXJkZWQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBlbmNvZGVHdWFyZGVkKCkge1xuXHRcdFx0dmFyIHRleHRPcHRpb25zID0geyBmb250U2l6ZTogdGhpcy5mb250U2l6ZSB9O1xuXHRcdFx0dmFyIGd1YXJkT3B0aW9ucyA9IHsgaGVpZ2h0OiB0aGlzLmd1YXJkSGVpZ2h0IH07XG5cblx0XHRcdHJldHVybiBbeyBkYXRhOiBfY29uc3RhbnRzLlNJREVfQklOLCBvcHRpb25zOiBndWFyZE9wdGlvbnMgfSwgeyBkYXRhOiB0aGlzLmxlZnRFbmNvZGUoKSwgdGV4dDogdGhpcy5sZWZ0VGV4dCgpLCBvcHRpb25zOiB0ZXh0T3B0aW9ucyB9LCB7IGRhdGE6IF9jb25zdGFudHMuTUlERExFX0JJTiwgb3B0aW9uczogZ3VhcmRPcHRpb25zIH0sIHsgZGF0YTogdGhpcy5yaWdodEVuY29kZSgpLCB0ZXh0OiB0aGlzLnJpZ2h0VGV4dCgpLCBvcHRpb25zOiB0ZXh0T3B0aW9ucyB9LCB7IGRhdGE6IF9jb25zdGFudHMuU0lERV9CSU4sIG9wdGlvbnM6IGd1YXJkT3B0aW9ucyB9XTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdlbmNvZGVGbGF0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZW5jb2RlRmxhdCgpIHtcblx0XHRcdHZhciBkYXRhID0gW19jb25zdGFudHMuU0lERV9CSU4sIHRoaXMubGVmdEVuY29kZSgpLCBfY29uc3RhbnRzLk1JRERMRV9CSU4sIHRoaXMucmlnaHRFbmNvZGUoKSwgX2NvbnN0YW50cy5TSURFX0JJTl07XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IGRhdGEuam9pbignJyksXG5cdFx0XHRcdHRleHQ6IHRoaXMudGV4dFxuXHRcdFx0fTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gRUFOO1xufShfQmFyY29kZTMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEVBTjsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyByZXR1cm4gZ2V0KHBhcmVudCwgcHJvcGVydHksIHJlY2VpdmVyKTsgfSB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG52YXIgX0VBTjIgPSByZXF1aXJlKCcuL0VBTicpO1xuXG52YXIgX0VBTjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FQU4yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvLyBFbmNvZGluZyBkb2N1bWVudGF0aW9uOlxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSW50ZXJuYXRpb25hbF9BcnRpY2xlX051bWJlcl8oRUFOKSNCaW5hcnlfZW5jb2Rpbmdfb2ZfZGF0YV9kaWdpdHNfaW50b19FQU4tMTNfYmFyY29kZVxuXG4vLyBDYWxjdWxhdGUgdGhlIGNoZWNrc3VtIGRpZ2l0XG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JbnRlcm5hdGlvbmFsX0FydGljbGVfTnVtYmVyXyhFQU4pI0NhbGN1bGF0aW9uX29mX2NoZWNrc3VtX2RpZ2l0XG52YXIgY2hlY2tzdW0gPSBmdW5jdGlvbiBjaGVja3N1bShudW1iZXIpIHtcblx0dmFyIHJlcyA9IG51bWJlci5zdWJzdHIoMCwgMTIpLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRyZXR1cm4gK247XG5cdH0pLnJlZHVjZShmdW5jdGlvbiAoc3VtLCBhLCBpZHgpIHtcblx0XHRyZXR1cm4gaWR4ICUgMiA/IHN1bSArIGEgKiAzIDogc3VtICsgYTtcblx0fSwgMCk7XG5cblx0cmV0dXJuICgxMCAtIHJlcyAlIDEwKSAlIDEwO1xufTtcblxudmFyIEVBTjEzID0gZnVuY3Rpb24gKF9FQU4pIHtcblx0X2luaGVyaXRzKEVBTjEzLCBfRUFOKTtcblxuXHRmdW5jdGlvbiBFQU4xMyhkYXRhLCBvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIEVBTjEzKTtcblxuXHRcdC8vIEFkZCBjaGVja3N1bSBpZiBpdCBkb2VzIG5vdCBleGlzdFxuXHRcdGlmIChkYXRhLnNlYXJjaCgvXlswLTldezEyfSQvKSAhPT0gLTEpIHtcblx0XHRcdGRhdGEgKz0gY2hlY2tzdW0oZGF0YSk7XG5cdFx0fVxuXG5cdFx0Ly8gQWRkcyBhIGxhc3QgY2hhcmFjdGVyIHRvIHRoZSBlbmQgb2YgdGhlIGJhcmNvZGVcblx0XHR2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRUFOMTMuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihFQU4xMykpLmNhbGwodGhpcywgZGF0YSwgb3B0aW9ucykpO1xuXG5cdFx0X3RoaXMubGFzdENoYXIgPSBvcHRpb25zLmxhc3RDaGFyO1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhFQU4xMywgW3tcblx0XHRrZXk6ICd2YWxpZCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHZhbGlkKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGF0YS5zZWFyY2goL15bMC05XXsxM30kLykgIT09IC0xICYmICt0aGlzLmRhdGFbMTJdID09PSBjaGVja3N1bSh0aGlzLmRhdGEpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2xlZnRUZXh0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gbGVmdFRleHQoKSB7XG5cdFx0XHRyZXR1cm4gX2dldChFQU4xMy5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihFQU4xMy5wcm90b3R5cGUpLCAnbGVmdFRleHQnLCB0aGlzKS5jYWxsKHRoaXMsIDEsIDYpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2xlZnRFbmNvZGUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBsZWZ0RW5jb2RlKCkge1xuXHRcdFx0dmFyIGRhdGEgPSB0aGlzLmRhdGEuc3Vic3RyKDEsIDYpO1xuXHRcdFx0dmFyIHN0cnVjdHVyZSA9IF9jb25zdGFudHMuRUFOMTNfU1RSVUNUVVJFW3RoaXMuZGF0YVswXV07XG5cdFx0XHRyZXR1cm4gX2dldChFQU4xMy5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihFQU4xMy5wcm90b3R5cGUpLCAnbGVmdEVuY29kZScsIHRoaXMpLmNhbGwodGhpcywgZGF0YSwgc3RydWN0dXJlKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyaWdodFRleHQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByaWdodFRleHQoKSB7XG5cdFx0XHRyZXR1cm4gX2dldChFQU4xMy5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihFQU4xMy5wcm90b3R5cGUpLCAncmlnaHRUZXh0JywgdGhpcykuY2FsbCh0aGlzLCA3LCA2KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyaWdodEVuY29kZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJpZ2h0RW5jb2RlKCkge1xuXHRcdFx0dmFyIGRhdGEgPSB0aGlzLmRhdGEuc3Vic3RyKDcsIDYpO1xuXHRcdFx0cmV0dXJuIF9nZXQoRUFOMTMucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRUFOMTMucHJvdG90eXBlKSwgJ3JpZ2h0RW5jb2RlJywgdGhpcykuY2FsbCh0aGlzLCBkYXRhLCAnUlJSUlJSJyk7XG5cdFx0fVxuXG5cdFx0Ly8gVGhlIFwic3RhbmRhcmRcIiB3YXkgb2YgcHJpbnRpbmcgRUFOMTMgYmFyY29kZXMgd2l0aCBndWFyZCBiYXJzXG5cblx0fSwge1xuXHRcdGtleTogJ2VuY29kZUd1YXJkZWQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBlbmNvZGVHdWFyZGVkKCkge1xuXHRcdFx0dmFyIGRhdGEgPSBfZ2V0KEVBTjEzLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEVBTjEzLnByb3RvdHlwZSksICdlbmNvZGVHdWFyZGVkJywgdGhpcykuY2FsbCh0aGlzKTtcblxuXHRcdFx0Ly8gRXh0ZW5kIGRhdGEgd2l0aCBsZWZ0IGRpZ2l0ICYgbGFzdCBjaGFyYWN0ZXJcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuZGlzcGxheVZhbHVlKSB7XG5cdFx0XHRcdGRhdGEudW5zaGlmdCh7XG5cdFx0XHRcdFx0ZGF0YTogJzAwMDAwMDAwMDAwMCcsXG5cdFx0XHRcdFx0dGV4dDogdGhpcy50ZXh0LnN1YnN0cigwLCAxKSxcblx0XHRcdFx0XHRvcHRpb25zOiB7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogdGhpcy5mb250U2l6ZSB9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMubGFzdENoYXIpIHtcblx0XHRcdFx0XHRkYXRhLnB1c2goe1xuXHRcdFx0XHRcdFx0ZGF0YTogJzAwJ1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGRhdGEucHVzaCh7XG5cdFx0XHRcdFx0XHRkYXRhOiAnMDAwMDAnLFxuXHRcdFx0XHRcdFx0dGV4dDogdGhpcy5vcHRpb25zLmxhc3RDaGFyLFxuXHRcdFx0XHRcdFx0b3B0aW9uczogeyBmb250U2l6ZTogdGhpcy5mb250U2l6ZSB9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIEVBTjEzO1xufShfRUFOMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRUFOMTM7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbnZhciBfZW5jb2RlciA9IHJlcXVpcmUoJy4vZW5jb2RlcicpO1xuXG52YXIgX2VuY29kZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZW5jb2Rlcik7XG5cbnZhciBfQmFyY29kZTIgPSByZXF1aXJlKCcuLi9CYXJjb2RlJyk7XG5cbnZhciBfQmFyY29kZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CYXJjb2RlMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH0gLy8gRW5jb2RpbmcgZG9jdW1lbnRhdGlvbjpcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0VBTl8yI0VuY29kaW5nXG5cbnZhciBFQU4yID0gZnVuY3Rpb24gKF9CYXJjb2RlKSB7XG5cdF9pbmhlcml0cyhFQU4yLCBfQmFyY29kZSk7XG5cblx0ZnVuY3Rpb24gRUFOMihkYXRhLCBvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIEVBTjIpO1xuXG5cdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChFQU4yLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRUFOMikpLmNhbGwodGhpcywgZGF0YSwgb3B0aW9ucykpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKEVBTjIsIFt7XG5cdFx0a2V5OiAndmFsaWQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB2YWxpZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmRhdGEuc2VhcmNoKC9eWzAtOV17Mn0kLykgIT09IC0xO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2VuY29kZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGVuY29kZSgpIHtcblx0XHRcdC8vIENob29zZSB0aGUgc3RydWN0dXJlIGJhc2VkIG9uIHRoZSBudW1iZXIgbW9kIDRcblx0XHRcdHZhciBzdHJ1Y3R1cmUgPSBfY29uc3RhbnRzLkVBTjJfU1RSVUNUVVJFW3BhcnNlSW50KHRoaXMuZGF0YSkgJSA0XTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC8vIFN0YXJ0IGJpdHMgKyBFbmNvZGUgdGhlIHR3byBkaWdpdHMgd2l0aCAwMSBpbiBiZXR3ZWVuXG5cdFx0XHRcdGRhdGE6ICcxMDExJyArICgwLCBfZW5jb2RlcjIuZGVmYXVsdCkodGhpcy5kYXRhLCBzdHJ1Y3R1cmUsICcwMScpLFxuXHRcdFx0XHR0ZXh0OiB0aGlzLnRleHRcblx0XHRcdH07XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIEVBTjI7XG59KF9CYXJjb2RlMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRUFOMjsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcblxudmFyIF9lbmNvZGVyID0gcmVxdWlyZSgnLi9lbmNvZGVyJyk7XG5cbnZhciBfZW5jb2RlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9lbmNvZGVyKTtcblxudmFyIF9CYXJjb2RlMiA9IHJlcXVpcmUoJy4uL0JhcmNvZGUnKTtcblxudmFyIF9CYXJjb2RlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0JhcmNvZGUyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvLyBFbmNvZGluZyBkb2N1bWVudGF0aW9uOlxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRUFOXzUjRW5jb2RpbmdcblxudmFyIGNoZWNrc3VtID0gZnVuY3Rpb24gY2hlY2tzdW0oZGF0YSkge1xuXHR2YXIgcmVzdWx0ID0gZGF0YS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0cmV0dXJuICtuO1xuXHR9KS5yZWR1Y2UoZnVuY3Rpb24gKHN1bSwgYSwgaWR4KSB7XG5cdFx0cmV0dXJuIGlkeCAlIDIgPyBzdW0gKyBhICogOSA6IHN1bSArIGEgKiAzO1xuXHR9LCAwKTtcblx0cmV0dXJuIHJlc3VsdCAlIDEwO1xufTtcblxudmFyIEVBTjUgPSBmdW5jdGlvbiAoX0JhcmNvZGUpIHtcblx0X2luaGVyaXRzKEVBTjUsIF9CYXJjb2RlKTtcblxuXHRmdW5jdGlvbiBFQU41KGRhdGEsIG9wdGlvbnMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgRUFONSk7XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEVBTjUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihFQU41KSkuY2FsbCh0aGlzLCBkYXRhLCBvcHRpb25zKSk7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoRUFONSwgW3tcblx0XHRrZXk6ICd2YWxpZCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHZhbGlkKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGF0YS5zZWFyY2goL15bMC05XXs1fSQvKSAhPT0gLTE7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZW5jb2RlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZW5jb2RlKCkge1xuXHRcdFx0dmFyIHN0cnVjdHVyZSA9IF9jb25zdGFudHMuRUFONV9TVFJVQ1RVUkVbY2hlY2tzdW0odGhpcy5kYXRhKV07XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhOiAnMTAxMScgKyAoMCwgX2VuY29kZXIyLmRlZmF1bHQpKHRoaXMuZGF0YSwgc3RydWN0dXJlLCAnMDEnKSxcblx0XHRcdFx0dGV4dDogdGhpcy50ZXh0XG5cdFx0XHR9O1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBFQU41O1xufShfQmFyY29kZTMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEVBTjU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikgeyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7IH0gfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH07XG5cbnZhciBfRUFOMiA9IHJlcXVpcmUoJy4vRUFOJyk7XG5cbnZhciBfRUFOMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0VBTjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9IC8vIEVuY29kaW5nIGRvY3VtZW50YXRpb246XG4vLyBodHRwOi8vd3d3LmJhcmNvZGVpc2xhbmQuY29tL2VhbjgucGh0bWxcblxuLy8gQ2FsY3VsYXRlIHRoZSBjaGVja3N1bSBkaWdpdFxudmFyIGNoZWNrc3VtID0gZnVuY3Rpb24gY2hlY2tzdW0obnVtYmVyKSB7XG5cdHZhciByZXMgPSBudW1iZXIuc3Vic3RyKDAsIDcpLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRyZXR1cm4gK247XG5cdH0pLnJlZHVjZShmdW5jdGlvbiAoc3VtLCBhLCBpZHgpIHtcblx0XHRyZXR1cm4gaWR4ICUgMiA/IHN1bSArIGEgOiBzdW0gKyBhICogMztcblx0fSwgMCk7XG5cblx0cmV0dXJuICgxMCAtIHJlcyAlIDEwKSAlIDEwO1xufTtcblxudmFyIEVBTjggPSBmdW5jdGlvbiAoX0VBTikge1xuXHRfaW5oZXJpdHMoRUFOOCwgX0VBTik7XG5cblx0ZnVuY3Rpb24gRUFOOChkYXRhLCBvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIEVBTjgpO1xuXG5cdFx0Ly8gQWRkIGNoZWNrc3VtIGlmIGl0IGRvZXMgbm90IGV4aXN0XG5cdFx0aWYgKGRhdGEuc2VhcmNoKC9eWzAtOV17N30kLykgIT09IC0xKSB7XG5cdFx0XHRkYXRhICs9IGNoZWNrc3VtKGRhdGEpO1xuXHRcdH1cblxuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRUFOOC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEVBTjgpKS5jYWxsKHRoaXMsIGRhdGEsIG9wdGlvbnMpKTtcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhFQU44LCBbe1xuXHRcdGtleTogJ3ZhbGlkJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gdmFsaWQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kYXRhLnNlYXJjaCgvXlswLTldezh9JC8pICE9PSAtMSAmJiArdGhpcy5kYXRhWzddID09PSBjaGVja3N1bSh0aGlzLmRhdGEpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2xlZnRUZXh0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gbGVmdFRleHQoKSB7XG5cdFx0XHRyZXR1cm4gX2dldChFQU44LnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEVBTjgucHJvdG90eXBlKSwgJ2xlZnRUZXh0JywgdGhpcykuY2FsbCh0aGlzLCAwLCA0KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdsZWZ0RW5jb2RlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gbGVmdEVuY29kZSgpIHtcblx0XHRcdHZhciBkYXRhID0gdGhpcy5kYXRhLnN1YnN0cigwLCA0KTtcblx0XHRcdHJldHVybiBfZ2V0KEVBTjgucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRUFOOC5wcm90b3R5cGUpLCAnbGVmdEVuY29kZScsIHRoaXMpLmNhbGwodGhpcywgZGF0YSwgJ0xMTEwnKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyaWdodFRleHQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByaWdodFRleHQoKSB7XG5cdFx0XHRyZXR1cm4gX2dldChFQU44LnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEVBTjgucHJvdG90eXBlKSwgJ3JpZ2h0VGV4dCcsIHRoaXMpLmNhbGwodGhpcywgNCwgNCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmlnaHRFbmNvZGUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByaWdodEVuY29kZSgpIHtcblx0XHRcdHZhciBkYXRhID0gdGhpcy5kYXRhLnN1YnN0cig0LCA0KTtcblx0XHRcdHJldHVybiBfZ2V0KEVBTjgucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRUFOOC5wcm90b3R5cGUpLCAncmlnaHRFbmNvZGUnLCB0aGlzKS5jYWxsKHRoaXMsIGRhdGEsICdSUlJSJyk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIEVBTjg7XG59KF9FQU4zLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBFQU44OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5leHBvcnRzLmNoZWNrc3VtID0gY2hlY2tzdW07XG5cbnZhciBfZW5jb2RlciA9IHJlcXVpcmUoXCIuL2VuY29kZXJcIik7XG5cbnZhciBfZW5jb2RlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9lbmNvZGVyKTtcblxudmFyIF9CYXJjb2RlMiA9IHJlcXVpcmUoXCIuLi9CYXJjb2RlLmpzXCIpO1xuXG52YXIgX0JhcmNvZGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQmFyY29kZTIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9IC8vIEVuY29kaW5nIGRvY3VtZW50YXRpb246XG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Vbml2ZXJzYWxfUHJvZHVjdF9Db2RlI0VuY29kaW5nXG5cbnZhciBVUEMgPSBmdW5jdGlvbiAoX0JhcmNvZGUpIHtcblx0X2luaGVyaXRzKFVQQywgX0JhcmNvZGUpO1xuXG5cdGZ1bmN0aW9uIFVQQyhkYXRhLCBvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFVQQyk7XG5cblx0XHQvLyBBZGQgY2hlY2tzdW0gaWYgaXQgZG9lcyBub3QgZXhpc3Rcblx0XHRpZiAoZGF0YS5zZWFyY2goL15bMC05XXsxMX0kLykgIT09IC0xKSB7XG5cdFx0XHRkYXRhICs9IGNoZWNrc3VtKGRhdGEpO1xuXHRcdH1cblxuXHRcdHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChVUEMuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihVUEMpKS5jYWxsKHRoaXMsIGRhdGEsIG9wdGlvbnMpKTtcblxuXHRcdF90aGlzLmRpc3BsYXlWYWx1ZSA9IG9wdGlvbnMuZGlzcGxheVZhbHVlO1xuXG5cdFx0Ly8gTWFrZSBzdXJlIHRoZSBmb250IGlzIG5vdCBiaWdnZXIgdGhhbiB0aGUgc3BhY2UgYmV0d2VlbiB0aGUgZ3VhcmQgYmFyc1xuXHRcdGlmIChvcHRpb25zLmZvbnRTaXplID4gb3B0aW9ucy53aWR0aCAqIDEwKSB7XG5cdFx0XHRfdGhpcy5mb250U2l6ZSA9IG9wdGlvbnMud2lkdGggKiAxMDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X3RoaXMuZm9udFNpemUgPSBvcHRpb25zLmZvbnRTaXplO1xuXHRcdH1cblxuXHRcdC8vIE1ha2UgdGhlIGd1YXJkIGJhcnMgZ28gZG93biBoYWxmIHRoZSB3YXkgb2YgdGhlIHRleHRcblx0XHRfdGhpcy5ndWFyZEhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0ICsgX3RoaXMuZm9udFNpemUgLyAyICsgb3B0aW9ucy50ZXh0TWFyZ2luO1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhVUEMsIFt7XG5cdFx0a2V5OiBcInZhbGlkXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHZhbGlkKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGF0YS5zZWFyY2goL15bMC05XXsxMn0kLykgIT09IC0xICYmIHRoaXMuZGF0YVsxMV0gPT0gY2hlY2tzdW0odGhpcy5kYXRhKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwiZW5jb2RlXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGVuY29kZSgpIHtcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuZmxhdCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5mbGF0RW5jb2RpbmcoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmd1YXJkZWRFbmNvZGluZygpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJmbGF0RW5jb2RpbmdcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZmxhdEVuY29kaW5nKCkge1xuXHRcdFx0dmFyIHJlc3VsdCA9IFwiXCI7XG5cblx0XHRcdHJlc3VsdCArPSBcIjEwMVwiO1xuXHRcdFx0cmVzdWx0ICs9ICgwLCBfZW5jb2RlcjIuZGVmYXVsdCkodGhpcy5kYXRhLnN1YnN0cigwLCA2KSwgXCJMTExMTExcIik7XG5cdFx0XHRyZXN1bHQgKz0gXCIwMTAxMFwiO1xuXHRcdFx0cmVzdWx0ICs9ICgwLCBfZW5jb2RlcjIuZGVmYXVsdCkodGhpcy5kYXRhLnN1YnN0cig2LCA2KSwgXCJSUlJSUlJcIik7XG5cdFx0XHRyZXN1bHQgKz0gXCIxMDFcIjtcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YTogcmVzdWx0LFxuXHRcdFx0XHR0ZXh0OiB0aGlzLnRleHRcblx0XHRcdH07XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcImd1YXJkZWRFbmNvZGluZ1wiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBndWFyZGVkRW5jb2RpbmcoKSB7XG5cdFx0XHR2YXIgcmVzdWx0ID0gW107XG5cblx0XHRcdC8vIEFkZCB0aGUgZmlyc3QgZGlnaXRcblx0XHRcdGlmICh0aGlzLmRpc3BsYXlWYWx1ZSkge1xuXHRcdFx0XHRyZXN1bHQucHVzaCh7XG5cdFx0XHRcdFx0ZGF0YTogXCIwMDAwMDAwMFwiLFxuXHRcdFx0XHRcdHRleHQ6IHRoaXMudGV4dC5zdWJzdHIoMCwgMSksXG5cdFx0XHRcdFx0b3B0aW9uczogeyB0ZXh0QWxpZ246IFwibGVmdFwiLCBmb250U2l6ZTogdGhpcy5mb250U2l6ZSB9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgdGhlIGd1YXJkIGJhcnNcblx0XHRcdHJlc3VsdC5wdXNoKHtcblx0XHRcdFx0ZGF0YTogXCIxMDFcIiArICgwLCBfZW5jb2RlcjIuZGVmYXVsdCkodGhpcy5kYXRhWzBdLCBcIkxcIiksXG5cdFx0XHRcdG9wdGlvbnM6IHsgaGVpZ2h0OiB0aGlzLmd1YXJkSGVpZ2h0IH1cblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBBZGQgdGhlIGxlZnQgc2lkZVxuXHRcdFx0cmVzdWx0LnB1c2goe1xuXHRcdFx0XHRkYXRhOiAoMCwgX2VuY29kZXIyLmRlZmF1bHQpKHRoaXMuZGF0YS5zdWJzdHIoMSwgNSksIFwiTExMTExcIiksXG5cdFx0XHRcdHRleHQ6IHRoaXMudGV4dC5zdWJzdHIoMSwgNSksXG5cdFx0XHRcdG9wdGlvbnM6IHsgZm9udFNpemU6IHRoaXMuZm9udFNpemUgfVxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEFkZCB0aGUgbWlkZGxlIGJpdHNcblx0XHRcdHJlc3VsdC5wdXNoKHtcblx0XHRcdFx0ZGF0YTogXCIwMTAxMFwiLFxuXHRcdFx0XHRvcHRpb25zOiB7IGhlaWdodDogdGhpcy5ndWFyZEhlaWdodCB9XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQWRkIHRoZSByaWdodCBzaWRlXG5cdFx0XHRyZXN1bHQucHVzaCh7XG5cdFx0XHRcdGRhdGE6ICgwLCBfZW5jb2RlcjIuZGVmYXVsdCkodGhpcy5kYXRhLnN1YnN0cig2LCA1KSwgXCJSUlJSUlwiKSxcblx0XHRcdFx0dGV4dDogdGhpcy50ZXh0LnN1YnN0cig2LCA1KSxcblx0XHRcdFx0b3B0aW9uczogeyBmb250U2l6ZTogdGhpcy5mb250U2l6ZSB9XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQWRkIHRoZSBlbmQgYml0c1xuXHRcdFx0cmVzdWx0LnB1c2goe1xuXHRcdFx0XHRkYXRhOiAoMCwgX2VuY29kZXIyLmRlZmF1bHQpKHRoaXMuZGF0YVsxMV0sIFwiUlwiKSArIFwiMTAxXCIsXG5cdFx0XHRcdG9wdGlvbnM6IHsgaGVpZ2h0OiB0aGlzLmd1YXJkSGVpZ2h0IH1cblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBBZGQgdGhlIGxhc3QgZGlnaXRcblx0XHRcdGlmICh0aGlzLmRpc3BsYXlWYWx1ZSkge1xuXHRcdFx0XHRyZXN1bHQucHVzaCh7XG5cdFx0XHRcdFx0ZGF0YTogXCIwMDAwMDAwMFwiLFxuXHRcdFx0XHRcdHRleHQ6IHRoaXMudGV4dC5zdWJzdHIoMTEsIDEpLFxuXHRcdFx0XHRcdG9wdGlvbnM6IHsgdGV4dEFsaWduOiBcInJpZ2h0XCIsIGZvbnRTaXplOiB0aGlzLmZvbnRTaXplIH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIFVQQztcbn0oX0JhcmNvZGUzLmRlZmF1bHQpO1xuXG4vLyBDYWx1bGF0ZSB0aGUgY2hlY2tzdW0gZGlnaXRcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0ludGVybmF0aW9uYWxfQXJ0aWNsZV9OdW1iZXJfKEVBTikjQ2FsY3VsYXRpb25fb2ZfY2hlY2tzdW1fZGlnaXRcblxuXG5mdW5jdGlvbiBjaGVja3N1bShudW1iZXIpIHtcblx0dmFyIHJlc3VsdCA9IDA7XG5cblx0dmFyIGk7XG5cdGZvciAoaSA9IDE7IGkgPCAxMTsgaSArPSAyKSB7XG5cdFx0cmVzdWx0ICs9IHBhcnNlSW50KG51bWJlcltpXSk7XG5cdH1cblx0Zm9yIChpID0gMDsgaSA8IDExOyBpICs9IDIpIHtcblx0XHRyZXN1bHQgKz0gcGFyc2VJbnQobnVtYmVyW2ldKSAqIDM7XG5cdH1cblxuXHRyZXR1cm4gKDEwIC0gcmVzdWx0ICUgMTApICUgMTA7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFVQQzsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZW5jb2RlciA9IHJlcXVpcmUoJy4vZW5jb2RlcicpO1xuXG52YXIgX2VuY29kZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZW5jb2Rlcik7XG5cbnZhciBfQmFyY29kZTIgPSByZXF1aXJlKCcuLi9CYXJjb2RlLmpzJyk7XG5cbnZhciBfQmFyY29kZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CYXJjb2RlMik7XG5cbnZhciBfVVBDID0gcmVxdWlyZSgnLi9VUEMuanMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvLyBFbmNvZGluZyBkb2N1bWVudGF0aW9uOlxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW5pdmVyc2FsX1Byb2R1Y3RfQ29kZSNFbmNvZGluZ1xuLy9cbi8vIFVQQy1FIGRvY3VtZW50YXRpb246XG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Vbml2ZXJzYWxfUHJvZHVjdF9Db2RlI1VQQy1FXG5cbnZhciBFWFBBTlNJT05TID0gW1wiWFgwMDAwMFhYWFwiLCBcIlhYMTAwMDBYWFhcIiwgXCJYWDIwMDAwWFhYXCIsIFwiWFhYMDAwMDBYWFwiLCBcIlhYWFgwMDAwMFhcIiwgXCJYWFhYWDAwMDA1XCIsIFwiWFhYWFgwMDAwNlwiLCBcIlhYWFhYMDAwMDdcIiwgXCJYWFhYWDAwMDA4XCIsIFwiWFhYWFgwMDAwOVwiXTtcblxudmFyIFBBUklUSUVTID0gW1tcIkVFRU9PT1wiLCBcIk9PT0VFRVwiXSwgW1wiRUVPRU9PXCIsIFwiT09FT0VFXCJdLCBbXCJFRU9PRU9cIiwgXCJPT0VFT0VcIl0sIFtcIkVFT09PRVwiLCBcIk9PRUVFT1wiXSwgW1wiRU9FRU9PXCIsIFwiT0VPT0VFXCJdLCBbXCJFT09FRU9cIiwgXCJPRUVPT0VcIl0sIFtcIkVPT09FRVwiLCBcIk9FRUVPT1wiXSwgW1wiRU9FT0VPXCIsIFwiT0VPRU9FXCJdLCBbXCJFT0VPT0VcIiwgXCJPRU9FRU9cIl0sIFtcIkVPT0VPRVwiLCBcIk9FRU9FT1wiXV07XG5cbnZhciBVUENFID0gZnVuY3Rpb24gKF9CYXJjb2RlKSB7XG5cdF9pbmhlcml0cyhVUENFLCBfQmFyY29kZSk7XG5cblx0ZnVuY3Rpb24gVVBDRShkYXRhLCBvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFVQQ0UpO1xuXG5cdFx0dmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFVQQ0UuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihVUENFKSkuY2FsbCh0aGlzLCBkYXRhLCBvcHRpb25zKSk7XG5cdFx0Ly8gQ29kZSBtYXkgYmUgNiBvciA4IGRpZ2l0cztcblx0XHQvLyBBIDcgZGlnaXQgY29kZSBpcyBhbWJpZ3VvdXMgYXMgdG8gd2hldGhlciB0aGUgZXh0cmEgZGlnaXRcblx0XHQvLyBpcyBhIFVQQy1BIGNoZWNrIG9yIG51bWJlciBzeXN0ZW0gZGlnaXQuXG5cblxuXHRcdF90aGlzLmlzVmFsaWQgPSBmYWxzZTtcblx0XHRpZiAoZGF0YS5zZWFyY2goL15bMC05XXs2fSQvKSAhPT0gLTEpIHtcblx0XHRcdF90aGlzLm1pZGRsZURpZ2l0cyA9IGRhdGE7XG5cdFx0XHRfdGhpcy51cGNBID0gZXhwYW5kVG9VUENBKGRhdGEsIFwiMFwiKTtcblx0XHRcdF90aGlzLnRleHQgPSBvcHRpb25zLnRleHQgfHwgJycgKyBfdGhpcy51cGNBWzBdICsgZGF0YSArIF90aGlzLnVwY0FbX3RoaXMudXBjQS5sZW5ndGggLSAxXTtcblx0XHRcdF90aGlzLmlzVmFsaWQgPSB0cnVlO1xuXHRcdH0gZWxzZSBpZiAoZGF0YS5zZWFyY2goL15bMDFdWzAtOV17N30kLykgIT09IC0xKSB7XG5cdFx0XHRfdGhpcy5taWRkbGVEaWdpdHMgPSBkYXRhLnN1YnN0cmluZygxLCBkYXRhLmxlbmd0aCAtIDEpO1xuXHRcdFx0X3RoaXMudXBjQSA9IGV4cGFuZFRvVVBDQShfdGhpcy5taWRkbGVEaWdpdHMsIGRhdGFbMF0pO1xuXG5cdFx0XHRpZiAoX3RoaXMudXBjQVtfdGhpcy51cGNBLmxlbmd0aCAtIDFdID09PSBkYXRhW2RhdGEubGVuZ3RoIC0gMV0pIHtcblx0XHRcdFx0X3RoaXMuaXNWYWxpZCA9IHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBjaGVja3N1bSBtaXNtYXRjaFxuXHRcdFx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMpO1xuXHRcdH1cblxuXHRcdF90aGlzLmRpc3BsYXlWYWx1ZSA9IG9wdGlvbnMuZGlzcGxheVZhbHVlO1xuXG5cdFx0Ly8gTWFrZSBzdXJlIHRoZSBmb250IGlzIG5vdCBiaWdnZXIgdGhhbiB0aGUgc3BhY2UgYmV0d2VlbiB0aGUgZ3VhcmQgYmFyc1xuXHRcdGlmIChvcHRpb25zLmZvbnRTaXplID4gb3B0aW9ucy53aWR0aCAqIDEwKSB7XG5cdFx0XHRfdGhpcy5mb250U2l6ZSA9IG9wdGlvbnMud2lkdGggKiAxMDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X3RoaXMuZm9udFNpemUgPSBvcHRpb25zLmZvbnRTaXplO1xuXHRcdH1cblxuXHRcdC8vIE1ha2UgdGhlIGd1YXJkIGJhcnMgZ28gZG93biBoYWxmIHRoZSB3YXkgb2YgdGhlIHRleHRcblx0XHRfdGhpcy5ndWFyZEhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0ICsgX3RoaXMuZm9udFNpemUgLyAyICsgb3B0aW9ucy50ZXh0TWFyZ2luO1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhVUENFLCBbe1xuXHRcdGtleTogJ3ZhbGlkJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gdmFsaWQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5pc1ZhbGlkO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2VuY29kZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGVuY29kZSgpIHtcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuZmxhdCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5mbGF0RW5jb2RpbmcoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmd1YXJkZWRFbmNvZGluZygpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2ZsYXRFbmNvZGluZycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZsYXRFbmNvZGluZygpIHtcblx0XHRcdHZhciByZXN1bHQgPSBcIlwiO1xuXG5cdFx0XHRyZXN1bHQgKz0gXCIxMDFcIjtcblx0XHRcdHJlc3VsdCArPSB0aGlzLmVuY29kZU1pZGRsZURpZ2l0cygpO1xuXHRcdFx0cmVzdWx0ICs9IFwiMDEwMTAxXCI7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IHJlc3VsdCxcblx0XHRcdFx0dGV4dDogdGhpcy50ZXh0XG5cdFx0XHR9O1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2d1YXJkZWRFbmNvZGluZycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGd1YXJkZWRFbmNvZGluZygpIHtcblx0XHRcdHZhciByZXN1bHQgPSBbXTtcblxuXHRcdFx0Ly8gQWRkIHRoZSBVUEMtQSBudW1iZXIgc3lzdGVtIGRpZ2l0IGJlbmVhdGggdGhlIHF1aWV0IHpvbmVcblx0XHRcdGlmICh0aGlzLmRpc3BsYXlWYWx1ZSkge1xuXHRcdFx0XHRyZXN1bHQucHVzaCh7XG5cdFx0XHRcdFx0ZGF0YTogXCIwMDAwMDAwMFwiLFxuXHRcdFx0XHRcdHRleHQ6IHRoaXMudGV4dFswXSxcblx0XHRcdFx0XHRvcHRpb25zOiB7IHRleHRBbGlnbjogXCJsZWZ0XCIsIGZvbnRTaXplOiB0aGlzLmZvbnRTaXplIH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkZCB0aGUgZ3VhcmQgYmFyc1xuXHRcdFx0cmVzdWx0LnB1c2goe1xuXHRcdFx0XHRkYXRhOiBcIjEwMVwiLFxuXHRcdFx0XHRvcHRpb25zOiB7IGhlaWdodDogdGhpcy5ndWFyZEhlaWdodCB9XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQWRkIHRoZSA2IFVQQy1FIGRpZ2l0c1xuXHRcdFx0cmVzdWx0LnB1c2goe1xuXHRcdFx0XHRkYXRhOiB0aGlzLmVuY29kZU1pZGRsZURpZ2l0cygpLFxuXHRcdFx0XHR0ZXh0OiB0aGlzLnRleHQuc3Vic3RyaW5nKDEsIDcpLFxuXHRcdFx0XHRvcHRpb25zOiB7IGZvbnRTaXplOiB0aGlzLmZvbnRTaXplIH1cblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBBZGQgdGhlIGVuZCBiaXRzXG5cdFx0XHRyZXN1bHQucHVzaCh7XG5cdFx0XHRcdGRhdGE6IFwiMDEwMTAxXCIsXG5cdFx0XHRcdG9wdGlvbnM6IHsgaGVpZ2h0OiB0aGlzLmd1YXJkSGVpZ2h0IH1cblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBBZGQgdGhlIFVQQy1BIGNoZWNrIGRpZ2l0IGJlbmVhdGggdGhlIHF1aWV0IHpvbmVcblx0XHRcdGlmICh0aGlzLmRpc3BsYXlWYWx1ZSkge1xuXHRcdFx0XHRyZXN1bHQucHVzaCh7XG5cdFx0XHRcdFx0ZGF0YTogXCIwMDAwMDAwMFwiLFxuXHRcdFx0XHRcdHRleHQ6IHRoaXMudGV4dFs3XSxcblx0XHRcdFx0XHRvcHRpb25zOiB7IHRleHRBbGlnbjogXCJyaWdodFwiLCBmb250U2l6ZTogdGhpcy5mb250U2l6ZSB9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2VuY29kZU1pZGRsZURpZ2l0cycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGVuY29kZU1pZGRsZURpZ2l0cygpIHtcblx0XHRcdHZhciBudW1iZXJTeXN0ZW0gPSB0aGlzLnVwY0FbMF07XG5cdFx0XHR2YXIgY2hlY2tEaWdpdCA9IHRoaXMudXBjQVt0aGlzLnVwY0EubGVuZ3RoIC0gMV07XG5cdFx0XHR2YXIgcGFyaXR5ID0gUEFSSVRJRVNbcGFyc2VJbnQoY2hlY2tEaWdpdCldW3BhcnNlSW50KG51bWJlclN5c3RlbSldO1xuXHRcdFx0cmV0dXJuICgwLCBfZW5jb2RlcjIuZGVmYXVsdCkodGhpcy5taWRkbGVEaWdpdHMsIHBhcml0eSk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIFVQQ0U7XG59KF9CYXJjb2RlMy5kZWZhdWx0KTtcblxuZnVuY3Rpb24gZXhwYW5kVG9VUENBKG1pZGRsZURpZ2l0cywgbnVtYmVyU3lzdGVtKSB7XG5cdHZhciBsYXN0VXBjRSA9IHBhcnNlSW50KG1pZGRsZURpZ2l0c1ttaWRkbGVEaWdpdHMubGVuZ3RoIC0gMV0pO1xuXHR2YXIgZXhwYW5zaW9uID0gRVhQQU5TSU9OU1tsYXN0VXBjRV07XG5cblx0dmFyIHJlc3VsdCA9IFwiXCI7XG5cdHZhciBkaWdpdEluZGV4ID0gMDtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBleHBhbnNpb24ubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgYyA9IGV4cGFuc2lvbltpXTtcblx0XHRpZiAoYyA9PT0gJ1gnKSB7XG5cdFx0XHRyZXN1bHQgKz0gbWlkZGxlRGlnaXRzW2RpZ2l0SW5kZXgrK107XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdCArPSBjO1xuXHRcdH1cblx0fVxuXG5cdHJlc3VsdCA9ICcnICsgbnVtYmVyU3lzdGVtICsgcmVzdWx0O1xuXHRyZXR1cm4gJycgKyByZXN1bHQgKyAoMCwgX1VQQy5jaGVja3N1bSkocmVzdWx0KTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gVVBDRTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG4vLyBTdGFuZGFyZCBzdGFydCBlbmQgYW5kIG1pZGRsZSBiaXRzXG52YXIgU0lERV9CSU4gPSBleHBvcnRzLlNJREVfQklOID0gJzEwMSc7XG52YXIgTUlERExFX0JJTiA9IGV4cG9ydHMuTUlERExFX0JJTiA9ICcwMTAxMCc7XG5cbnZhciBCSU5BUklFUyA9IGV4cG9ydHMuQklOQVJJRVMgPSB7XG5cdCdMJzogWy8vIFRoZSBMIChsZWZ0KSB0eXBlIG9mIGVuY29kaW5nXG5cdCcwMDAxMTAxJywgJzAwMTEwMDEnLCAnMDAxMDAxMScsICcwMTExMTAxJywgJzAxMDAwMTEnLCAnMDExMDAwMScsICcwMTAxMTExJywgJzAxMTEwMTEnLCAnMDExMDExMScsICcwMDAxMDExJ10sXG5cdCdHJzogWy8vIFRoZSBHIHR5cGUgb2YgZW5jb2Rpbmdcblx0JzAxMDAxMTEnLCAnMDExMDAxMScsICcwMDExMDExJywgJzAxMDAwMDEnLCAnMDAxMTEwMScsICcwMTExMDAxJywgJzAwMDAxMDEnLCAnMDAxMDAwMScsICcwMDAxMDAxJywgJzAwMTAxMTEnXSxcblx0J1InOiBbLy8gVGhlIFIgKHJpZ2h0KSB0eXBlIG9mIGVuY29kaW5nXG5cdCcxMTEwMDEwJywgJzExMDAxMTAnLCAnMTEwMTEwMCcsICcxMDAwMDEwJywgJzEwMTExMDAnLCAnMTAwMTExMCcsICcxMDEwMDAwJywgJzEwMDAxMDAnLCAnMTAwMTAwMCcsICcxMTEwMTAwJ10sXG5cdCdPJzogWy8vIFRoZSBPIChvZGQpIGVuY29kaW5nIGZvciBVUEMtRVxuXHQnMDAwMTEwMScsICcwMDExMDAxJywgJzAwMTAwMTEnLCAnMDExMTEwMScsICcwMTAwMDExJywgJzAxMTAwMDEnLCAnMDEwMTExMScsICcwMTExMDExJywgJzAxMTAxMTEnLCAnMDAwMTAxMSddLFxuXHQnRSc6IFsvLyBUaGUgRSAoZXZlbikgZW5jb2RpbmcgZm9yIFVQQy1FXG5cdCcwMTAwMTExJywgJzAxMTAwMTEnLCAnMDAxMTAxMScsICcwMTAwMDAxJywgJzAwMTExMDEnLCAnMDExMTAwMScsICcwMDAwMTAxJywgJzAwMTAwMDEnLCAnMDAwMTAwMScsICcwMDEwMTExJ11cbn07XG5cbi8vIERlZmluZSB0aGUgRUFOLTIgc3RydWN0dXJlXG52YXIgRUFOMl9TVFJVQ1RVUkUgPSBleHBvcnRzLkVBTjJfU1RSVUNUVVJFID0gWydMTCcsICdMRycsICdHTCcsICdHRyddO1xuXG4vLyBEZWZpbmUgdGhlIEVBTi01IHN0cnVjdHVyZVxudmFyIEVBTjVfU1RSVUNUVVJFID0gZXhwb3J0cy5FQU41X1NUUlVDVFVSRSA9IFsnR0dMTEwnLCAnR0xHTEwnLCAnR0xMR0wnLCAnR0xMTEcnLCAnTEdHTEwnLCAnTExHR0wnLCAnTExMR0cnLCAnTEdMR0wnLCAnTEdMTEcnLCAnTExHTEcnXTtcblxuLy8gRGVmaW5lIHRoZSBFQU4tMTMgc3RydWN0dXJlXG52YXIgRUFOMTNfU1RSVUNUVVJFID0gZXhwb3J0cy5FQU4xM19TVFJVQ1RVUkUgPSBbJ0xMTExMTCcsICdMTEdMR0cnLCAnTExHR0xHJywgJ0xMR0dHTCcsICdMR0xMR0cnLCAnTEdHTExHJywgJ0xHR0dMTCcsICdMR0xHTEcnLCAnTEdMR0dMJywgJ0xHR0xHTCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG4vLyBFbmNvZGUgZGF0YSBzdHJpbmdcbnZhciBlbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGUoZGF0YSwgc3RydWN0dXJlLCBzZXBhcmF0b3IpIHtcblx0dmFyIGVuY29kZWQgPSBkYXRhLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKHZhbCwgaWR4KSB7XG5cdFx0cmV0dXJuIF9jb25zdGFudHMuQklOQVJJRVNbc3RydWN0dXJlW2lkeF1dO1xuXHR9KS5tYXAoZnVuY3Rpb24gKHZhbCwgaWR4KSB7XG5cdFx0cmV0dXJuIHZhbCA/IHZhbFtkYXRhW2lkeF1dIDogJyc7XG5cdH0pO1xuXG5cdGlmIChzZXBhcmF0b3IpIHtcblx0XHR2YXIgbGFzdCA9IGRhdGEubGVuZ3RoIC0gMTtcblx0XHRlbmNvZGVkID0gZW5jb2RlZC5tYXAoZnVuY3Rpb24gKHZhbCwgaWR4KSB7XG5cdFx0XHRyZXR1cm4gaWR4IDwgbGFzdCA/IHZhbCArIHNlcGFyYXRvciA6IHZhbDtcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiBlbmNvZGVkLmpvaW4oJycpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZW5jb2RlOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVVBDRSA9IGV4cG9ydHMuVVBDID0gZXhwb3J0cy5FQU4yID0gZXhwb3J0cy5FQU41ID0gZXhwb3J0cy5FQU44ID0gZXhwb3J0cy5FQU4xMyA9IHVuZGVmaW5lZDtcblxudmFyIF9FQU4gPSByZXF1aXJlKCcuL0VBTjEzLmpzJyk7XG5cbnZhciBfRUFOMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0VBTik7XG5cbnZhciBfRUFOMyA9IHJlcXVpcmUoJy4vRUFOOC5qcycpO1xuXG52YXIgX0VBTjQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FQU4zKTtcblxudmFyIF9FQU41ID0gcmVxdWlyZSgnLi9FQU41LmpzJyk7XG5cbnZhciBfRUFONiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0VBTjUpO1xuXG52YXIgX0VBTjcgPSByZXF1aXJlKCcuL0VBTjIuanMnKTtcblxudmFyIF9FQU44ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRUFONyk7XG5cbnZhciBfVVBDID0gcmVxdWlyZSgnLi9VUEMuanMnKTtcblxudmFyIF9VUEMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVVBDKTtcblxudmFyIF9VUENFID0gcmVxdWlyZSgnLi9VUENFLmpzJyk7XG5cbnZhciBfVVBDRTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VUENFKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5FQU4xMyA9IF9FQU4yLmRlZmF1bHQ7XG5leHBvcnRzLkVBTjggPSBfRUFONC5kZWZhdWx0O1xuZXhwb3J0cy5FQU41ID0gX0VBTjYuZGVmYXVsdDtcbmV4cG9ydHMuRUFOMiA9IF9FQU44LmRlZmF1bHQ7XG5leHBvcnRzLlVQQyA9IF9VUEMyLmRlZmF1bHQ7XG5leHBvcnRzLlVQQ0UgPSBfVVBDRTIuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuR2VuZXJpY0JhcmNvZGUgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfQmFyY29kZTIgPSByZXF1aXJlKFwiLi4vQmFyY29kZS5qc1wiKTtcblxudmFyIF9CYXJjb2RlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0JhcmNvZGUyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgR2VuZXJpY0JhcmNvZGUgPSBmdW5jdGlvbiAoX0JhcmNvZGUpIHtcblx0X2luaGVyaXRzKEdlbmVyaWNCYXJjb2RlLCBfQmFyY29kZSk7XG5cblx0ZnVuY3Rpb24gR2VuZXJpY0JhcmNvZGUoZGF0YSwgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHZW5lcmljQmFyY29kZSk7XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEdlbmVyaWNCYXJjb2RlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoR2VuZXJpY0JhcmNvZGUpKS5jYWxsKHRoaXMsIGRhdGEsIG9wdGlvbnMpKTsgLy8gU2V0cyB0aGlzLmRhdGEgYW5kIHRoaXMudGV4dFxuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBjb3JyZXNwb25kaW5nIGJpbmFyeSBudW1iZXJzIGZvciB0aGUgZGF0YSBwcm92aWRlZFxuXG5cblx0X2NyZWF0ZUNsYXNzKEdlbmVyaWNCYXJjb2RlLCBbe1xuXHRcdGtleTogXCJlbmNvZGVcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZW5jb2RlKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YTogXCIxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMVwiLFxuXHRcdFx0XHR0ZXh0OiB0aGlzLnRleHRcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gUmVzdHVybiB0cnVlL2ZhbHNlIGlmIHRoZSBzdHJpbmcgcHJvdmlkZWQgaXMgdmFsaWQgZm9yIHRoaXMgZW5jb2RlclxuXG5cdH0sIHtcblx0XHRrZXk6IFwidmFsaWRcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gdmFsaWQoKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gR2VuZXJpY0JhcmNvZGU7XG59KF9CYXJjb2RlMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5HZW5lcmljQmFyY29kZSA9IEdlbmVyaWNCYXJjb2RlOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG52YXIgX0JhcmNvZGUyID0gcmVxdWlyZSgnLi4vQmFyY29kZScpO1xuXG52YXIgX0JhcmNvZGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQmFyY29kZTIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBJVEYgPSBmdW5jdGlvbiAoX0JhcmNvZGUpIHtcblx0X2luaGVyaXRzKElURiwgX0JhcmNvZGUpO1xuXG5cdGZ1bmN0aW9uIElURigpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgSVRGKTtcblxuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoSVRGLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoSVRGKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoSVRGLCBbe1xuXHRcdGtleTogJ3ZhbGlkJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gdmFsaWQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kYXRhLnNlYXJjaCgvXihbMC05XXsyfSkrJC8pICE9PSAtMTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdlbmNvZGUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBlbmNvZGUoKSB7XG5cdFx0XHR2YXIgX3RoaXMyID0gdGhpcztcblxuXHRcdFx0Ly8gQ2FsY3VsYXRlIGFsbCB0aGUgZGlnaXQgcGFpcnNcblx0XHRcdHZhciBlbmNvZGVkID0gdGhpcy5kYXRhLm1hdGNoKC8uezJ9L2cpLm1hcChmdW5jdGlvbiAocGFpcikge1xuXHRcdFx0XHRyZXR1cm4gX3RoaXMyLmVuY29kZVBhaXIocGFpcik7XG5cdFx0XHR9KS5qb2luKCcnKTtcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YTogX2NvbnN0YW50cy5TVEFSVF9CSU4gKyBlbmNvZGVkICsgX2NvbnN0YW50cy5FTkRfQklOLFxuXHRcdFx0XHR0ZXh0OiB0aGlzLnRleHRcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gQ2FsY3VsYXRlIHRoZSBkYXRhIG9mIGEgbnVtYmVyIHBhaXJcblxuXHR9LCB7XG5cdFx0a2V5OiAnZW5jb2RlUGFpcicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGVuY29kZVBhaXIocGFpcikge1xuXHRcdFx0dmFyIHNlY29uZCA9IF9jb25zdGFudHMuQklOQVJJRVNbcGFpclsxXV07XG5cblx0XHRcdHJldHVybiBfY29uc3RhbnRzLkJJTkFSSUVTW3BhaXJbMF1dLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKGZpcnN0LCBpZHgpIHtcblx0XHRcdFx0cmV0dXJuIChmaXJzdCA9PT0gJzEnID8gJzExMScgOiAnMScpICsgKHNlY29uZFtpZHhdID09PSAnMScgPyAnMDAwJyA6ICcwJyk7XG5cdFx0XHR9KS5qb2luKCcnKTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gSVRGO1xufShfQmFyY29kZTMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IElURjsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfSVRGMiA9IHJlcXVpcmUoJy4vSVRGJyk7XG5cbnZhciBfSVRGMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0lURjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8vIENhbGN1bGF0ZSB0aGUgY2hlY2tzdW0gZGlnaXRcbnZhciBjaGVja3N1bSA9IGZ1bmN0aW9uIGNoZWNrc3VtKGRhdGEpIHtcblx0dmFyIHJlcyA9IGRhdGEuc3Vic3RyKDAsIDEzKS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChudW0pIHtcblx0XHRyZXR1cm4gcGFyc2VJbnQobnVtLCAxMCk7XG5cdH0pLnJlZHVjZShmdW5jdGlvbiAoc3VtLCBuLCBpZHgpIHtcblx0XHRyZXR1cm4gc3VtICsgbiAqICgzIC0gaWR4ICUgMiAqIDIpO1xuXHR9LCAwKTtcblxuXHRyZXR1cm4gTWF0aC5jZWlsKHJlcyAvIDEwKSAqIDEwIC0gcmVzO1xufTtcblxudmFyIElURjE0ID0gZnVuY3Rpb24gKF9JVEYpIHtcblx0X2luaGVyaXRzKElURjE0LCBfSVRGKTtcblxuXHRmdW5jdGlvbiBJVEYxNChkYXRhLCBvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIElURjE0KTtcblxuXHRcdC8vIEFkZCBjaGVja3N1bSBpZiBpdCBkb2VzIG5vdCBleGlzdFxuXHRcdGlmIChkYXRhLnNlYXJjaCgvXlswLTldezEzfSQvKSAhPT0gLTEpIHtcblx0XHRcdGRhdGEgKz0gY2hlY2tzdW0oZGF0YSk7XG5cdFx0fVxuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoSVRGMTQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihJVEYxNCkpLmNhbGwodGhpcywgZGF0YSwgb3B0aW9ucykpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKElURjE0LCBbe1xuXHRcdGtleTogJ3ZhbGlkJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gdmFsaWQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kYXRhLnNlYXJjaCgvXlswLTldezE0fSQvKSAhPT0gLTEgJiYgK3RoaXMuZGF0YVsxM10gPT09IGNoZWNrc3VtKHRoaXMuZGF0YSk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIElURjE0O1xufShfSVRGMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSVRGMTQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xudmFyIFNUQVJUX0JJTiA9IGV4cG9ydHMuU1RBUlRfQklOID0gJzEwMTAnO1xudmFyIEVORF9CSU4gPSBleHBvcnRzLkVORF9CSU4gPSAnMTExMDEnO1xuXG52YXIgQklOQVJJRVMgPSBleHBvcnRzLkJJTkFSSUVTID0gWycwMDExMCcsICcxMDAwMScsICcwMTAwMScsICcxMTAwMCcsICcwMDEwMScsICcxMDEwMCcsICcwMTEwMCcsICcwMDAxMScsICcxMDAxMCcsICcwMTAxMCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuSVRGMTQgPSBleHBvcnRzLklURiA9IHVuZGVmaW5lZDtcblxudmFyIF9JVEYgPSByZXF1aXJlKCcuL0lURicpO1xuXG52YXIgX0lURjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JVEYpO1xuXG52YXIgX0lURjMgPSByZXF1aXJlKCcuL0lURjE0Jyk7XG5cbnZhciBfSVRGNCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0lURjMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLklURiA9IF9JVEYyLmRlZmF1bHQ7XG5leHBvcnRzLklURjE0ID0gX0lURjQuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9CYXJjb2RlMiA9IHJlcXVpcmUoXCIuLi9CYXJjb2RlLmpzXCIpO1xuXG52YXIgX0JhcmNvZGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQmFyY29kZTIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9IC8vIEVuY29kaW5nIGRvY3VtZW50YXRpb25cbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL01TSV9CYXJjb2RlI0NoYXJhY3Rlcl9zZXRfYW5kX2JpbmFyeV9sb29rdXBcblxudmFyIE1TSSA9IGZ1bmN0aW9uIChfQmFyY29kZSkge1xuXHRfaW5oZXJpdHMoTVNJLCBfQmFyY29kZSk7XG5cblx0ZnVuY3Rpb24gTVNJKGRhdGEsIG9wdGlvbnMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgTVNJKTtcblxuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTVNJLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTVNJKSkuY2FsbCh0aGlzLCBkYXRhLCBvcHRpb25zKSk7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoTVNJLCBbe1xuXHRcdGtleTogXCJlbmNvZGVcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZW5jb2RlKCkge1xuXHRcdFx0Ly8gU3RhcnQgYml0c1xuXHRcdFx0dmFyIHJldCA9IFwiMTEwXCI7XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdC8vIENvbnZlcnQgdGhlIGNoYXJhY3RlciB0byBiaW5hcnkgKGFsd2F5cyA0IGJpbmFyeSBkaWdpdHMpXG5cdFx0XHRcdHZhciBkaWdpdCA9IHBhcnNlSW50KHRoaXMuZGF0YVtpXSk7XG5cdFx0XHRcdHZhciBiaW4gPSBkaWdpdC50b1N0cmluZygyKTtcblx0XHRcdFx0YmluID0gYWRkWmVyb2VzKGJpbiwgNCAtIGJpbi5sZW5ndGgpO1xuXG5cdFx0XHRcdC8vIEFkZCAxMDAgZm9yIGV2ZXJ5IHplcm8gYW5kIDExMCBmb3IgZXZlcnkgMVxuXHRcdFx0XHRmb3IgKHZhciBiID0gMDsgYiA8IGJpbi5sZW5ndGg7IGIrKykge1xuXHRcdFx0XHRcdHJldCArPSBiaW5bYl0gPT0gXCIwXCIgPyBcIjEwMFwiIDogXCIxMTBcIjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBFbmQgYml0c1xuXHRcdFx0cmV0ICs9IFwiMTAwMVwiO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhOiByZXQsXG5cdFx0XHRcdHRleHQ6IHRoaXMudGV4dFxuXHRcdFx0fTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwidmFsaWRcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gdmFsaWQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kYXRhLnNlYXJjaCgvXlswLTldKyQvKSAhPT0gLTE7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIE1TSTtcbn0oX0JhcmNvZGUzLmRlZmF1bHQpO1xuXG5mdW5jdGlvbiBhZGRaZXJvZXMobnVtYmVyLCBuKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSB7XG5cdFx0bnVtYmVyID0gXCIwXCIgKyBudW1iZXI7XG5cdH1cblx0cmV0dXJuIG51bWJlcjtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gTVNJOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9NU0kyID0gcmVxdWlyZSgnLi9NU0kuanMnKTtcblxudmFyIF9NU0kzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTVNJMik7XG5cbnZhciBfY2hlY2tzdW1zID0gcmVxdWlyZSgnLi9jaGVja3N1bXMuanMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgTVNJMTAgPSBmdW5jdGlvbiAoX01TSSkge1xuXHRfaW5oZXJpdHMoTVNJMTAsIF9NU0kpO1xuXG5cdGZ1bmN0aW9uIE1TSTEwKGRhdGEsIG9wdGlvbnMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgTVNJMTApO1xuXG5cdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChNU0kxMC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE1TSTEwKSkuY2FsbCh0aGlzLCBkYXRhICsgKDAsIF9jaGVja3N1bXMubW9kMTApKGRhdGEpLCBvcHRpb25zKSk7XG5cdH1cblxuXHRyZXR1cm4gTVNJMTA7XG59KF9NU0kzLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNU0kxMDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfTVNJMiA9IHJlcXVpcmUoJy4vTVNJLmpzJyk7XG5cbnZhciBfTVNJMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01TSTIpO1xuXG52YXIgX2NoZWNrc3VtcyA9IHJlcXVpcmUoJy4vY2hlY2tzdW1zLmpzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIE1TSTEwMTAgPSBmdW5jdGlvbiAoX01TSSkge1xuXHRfaW5oZXJpdHMoTVNJMTAxMCwgX01TSSk7XG5cblx0ZnVuY3Rpb24gTVNJMTAxMChkYXRhLCBvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1TSTEwMTApO1xuXG5cdFx0ZGF0YSArPSAoMCwgX2NoZWNrc3Vtcy5tb2QxMCkoZGF0YSk7XG5cdFx0ZGF0YSArPSAoMCwgX2NoZWNrc3Vtcy5tb2QxMCkoZGF0YSk7XG5cdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChNU0kxMDEwLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTVNJMTAxMCkpLmNhbGwodGhpcywgZGF0YSwgb3B0aW9ucykpO1xuXHR9XG5cblx0cmV0dXJuIE1TSTEwMTA7XG59KF9NU0kzLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNU0kxMDEwOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9NU0kyID0gcmVxdWlyZSgnLi9NU0kuanMnKTtcblxudmFyIF9NU0kzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTVNJMik7XG5cbnZhciBfY2hlY2tzdW1zID0gcmVxdWlyZSgnLi9jaGVja3N1bXMuanMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgTVNJMTEgPSBmdW5jdGlvbiAoX01TSSkge1xuXHRfaW5oZXJpdHMoTVNJMTEsIF9NU0kpO1xuXG5cdGZ1bmN0aW9uIE1TSTExKGRhdGEsIG9wdGlvbnMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgTVNJMTEpO1xuXG5cdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChNU0kxMS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE1TSTExKSkuY2FsbCh0aGlzLCBkYXRhICsgKDAsIF9jaGVja3N1bXMubW9kMTEpKGRhdGEpLCBvcHRpb25zKSk7XG5cdH1cblxuXHRyZXR1cm4gTVNJMTE7XG59KF9NU0kzLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNU0kxMTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfTVNJMiA9IHJlcXVpcmUoJy4vTVNJLmpzJyk7XG5cbnZhciBfTVNJMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01TSTIpO1xuXG52YXIgX2NoZWNrc3VtcyA9IHJlcXVpcmUoJy4vY2hlY2tzdW1zLmpzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIE1TSTExMTAgPSBmdW5jdGlvbiAoX01TSSkge1xuXHRfaW5oZXJpdHMoTVNJMTExMCwgX01TSSk7XG5cblx0ZnVuY3Rpb24gTVNJMTExMChkYXRhLCBvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1TSTExMTApO1xuXG5cdFx0ZGF0YSArPSAoMCwgX2NoZWNrc3Vtcy5tb2QxMSkoZGF0YSk7XG5cdFx0ZGF0YSArPSAoMCwgX2NoZWNrc3Vtcy5tb2QxMCkoZGF0YSk7XG5cdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChNU0kxMTEwLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTVNJMTExMCkpLmNhbGwodGhpcywgZGF0YSwgb3B0aW9ucykpO1xuXHR9XG5cblx0cmV0dXJuIE1TSTExMTA7XG59KF9NU0kzLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNU0kxMTEwOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tb2QxMCA9IG1vZDEwO1xuZXhwb3J0cy5tb2QxMSA9IG1vZDExO1xuZnVuY3Rpb24gbW9kMTAobnVtYmVyKSB7XG5cdHZhciBzdW0gPSAwO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlci5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBuID0gcGFyc2VJbnQobnVtYmVyW2ldKTtcblx0XHRpZiAoKGkgKyBudW1iZXIubGVuZ3RoKSAlIDIgPT09IDApIHtcblx0XHRcdHN1bSArPSBuO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdW0gKz0gbiAqIDIgJSAxMCArIE1hdGguZmxvb3IobiAqIDIgLyAxMCk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiAoMTAgLSBzdW0gJSAxMCkgJSAxMDtcbn1cblxuZnVuY3Rpb24gbW9kMTEobnVtYmVyKSB7XG5cdHZhciBzdW0gPSAwO1xuXHR2YXIgd2VpZ2h0cyA9IFsyLCAzLCA0LCA1LCA2LCA3XTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXIubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgbiA9IHBhcnNlSW50KG51bWJlcltudW1iZXIubGVuZ3RoIC0gMSAtIGldKTtcblx0XHRzdW0gKz0gd2VpZ2h0c1tpICUgd2VpZ2h0cy5sZW5ndGhdICogbjtcblx0fVxuXHRyZXR1cm4gKDExIC0gc3VtICUgMTEpICUgMTE7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5NU0kxMTEwID0gZXhwb3J0cy5NU0kxMDEwID0gZXhwb3J0cy5NU0kxMSA9IGV4cG9ydHMuTVNJMTAgPSBleHBvcnRzLk1TSSA9IHVuZGVmaW5lZDtcblxudmFyIF9NU0kgPSByZXF1aXJlKCcuL01TSS5qcycpO1xuXG52YXIgX01TSTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NU0kpO1xuXG52YXIgX01TSTMgPSByZXF1aXJlKCcuL01TSTEwLmpzJyk7XG5cbnZhciBfTVNJNCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01TSTMpO1xuXG52YXIgX01TSTUgPSByZXF1aXJlKCcuL01TSTExLmpzJyk7XG5cbnZhciBfTVNJNiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01TSTUpO1xuXG52YXIgX01TSTcgPSByZXF1aXJlKCcuL01TSTEwMTAuanMnKTtcblxudmFyIF9NU0k4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTVNJNyk7XG5cbnZhciBfTVNJOSA9IHJlcXVpcmUoJy4vTVNJMTExMC5qcycpO1xuXG52YXIgX01TSTEwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTVNJOSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuTVNJID0gX01TSTIuZGVmYXVsdDtcbmV4cG9ydHMuTVNJMTAgPSBfTVNJNC5kZWZhdWx0O1xuZXhwb3J0cy5NU0kxMSA9IF9NU0k2LmRlZmF1bHQ7XG5leHBvcnRzLk1TSTEwMTAgPSBfTVNJOC5kZWZhdWx0O1xuZXhwb3J0cy5NU0kxMTEwID0gX01TSTEwLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNvZGFiYXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfQmFyY29kZTIgPSByZXF1aXJlKFwiLi4vQmFyY29kZS5qc1wiKTtcblxudmFyIF9CYXJjb2RlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0JhcmNvZGUyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvLyBFbmNvZGluZyBzcGVjaWZpY2F0aW9uOlxuLy8gaHR0cDovL3d3dy5iYXJjb2RlaXNsYW5kLmNvbS9jb2RhYmFyLnBodG1sXG5cbnZhciBjb2RhYmFyID0gZnVuY3Rpb24gKF9CYXJjb2RlKSB7XG5cdF9pbmhlcml0cyhjb2RhYmFyLCBfQmFyY29kZSk7XG5cblx0ZnVuY3Rpb24gY29kYWJhcihkYXRhLCBvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIGNvZGFiYXIpO1xuXG5cdFx0aWYgKGRhdGEuc2VhcmNoKC9eWzAtOVxcLVxcJFxcOlxcLlxcK1xcL10rJC8pID09PSAwKSB7XG5cdFx0XHRkYXRhID0gXCJBXCIgKyBkYXRhICsgXCJBXCI7XG5cdFx0fVxuXG5cdFx0dmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKGNvZGFiYXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihjb2RhYmFyKSkuY2FsbCh0aGlzLCBkYXRhLnRvVXBwZXJDYXNlKCksIG9wdGlvbnMpKTtcblxuXHRcdF90aGlzLnRleHQgPSBfdGhpcy5vcHRpb25zLnRleHQgfHwgX3RoaXMudGV4dC5yZXBsYWNlKC9bQS1EXS9nLCAnJyk7XG5cdFx0cmV0dXJuIF90aGlzO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKGNvZGFiYXIsIFt7XG5cdFx0a2V5OiBcInZhbGlkXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHZhbGlkKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGF0YS5zZWFyY2goL15bQS1EXVswLTlcXC1cXCRcXDpcXC5cXCtcXC9dK1tBLURdJC8pICE9PSAtMTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwiZW5jb2RlXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGVuY29kZSgpIHtcblx0XHRcdHZhciByZXN1bHQgPSBbXTtcblx0XHRcdHZhciBlbmNvZGluZ3MgPSB0aGlzLmdldEVuY29kaW5ncygpO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goZW5jb2RpbmdzW3RoaXMuZGF0YS5jaGFyQXQoaSldKTtcblx0XHRcdFx0Ly8gZm9yIGFsbCBjaGFyYWN0ZXJzIGV4Y2VwdCB0aGUgbGFzdCwgYXBwZW5kIGEgbmFycm93LXNwYWNlIChcIjBcIilcblx0XHRcdFx0aWYgKGkgIT09IHRoaXMuZGF0YS5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0cmVzdWx0LnB1c2goXCIwXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR0ZXh0OiB0aGlzLnRleHQsXG5cdFx0XHRcdGRhdGE6IHJlc3VsdC5qb2luKCcnKVxuXHRcdFx0fTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwiZ2V0RW5jb2RpbmdzXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldEVuY29kaW5ncygpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFwiMFwiOiBcIjEwMTAxMDAxMVwiLFxuXHRcdFx0XHRcIjFcIjogXCIxMDEwMTEwMDFcIixcblx0XHRcdFx0XCIyXCI6IFwiMTAxMDAxMDExXCIsXG5cdFx0XHRcdFwiM1wiOiBcIjExMDAxMDEwMVwiLFxuXHRcdFx0XHRcIjRcIjogXCIxMDExMDEwMDFcIixcblx0XHRcdFx0XCI1XCI6IFwiMTEwMTAxMDAxXCIsXG5cdFx0XHRcdFwiNlwiOiBcIjEwMDEwMTAxMVwiLFxuXHRcdFx0XHRcIjdcIjogXCIxMDAxMDExMDFcIixcblx0XHRcdFx0XCI4XCI6IFwiMTAwMTEwMTAxXCIsXG5cdFx0XHRcdFwiOVwiOiBcIjExMDEwMDEwMVwiLFxuXHRcdFx0XHRcIi1cIjogXCIxMDEwMDExMDFcIixcblx0XHRcdFx0XCIkXCI6IFwiMTAxMTAwMTAxXCIsXG5cdFx0XHRcdFwiOlwiOiBcIjExMDEwMTEwMTFcIixcblx0XHRcdFx0XCIvXCI6IFwiMTEwMTEwMTAxMVwiLFxuXHRcdFx0XHRcIi5cIjogXCIxMTAxMTAxMTAxXCIsXG5cdFx0XHRcdFwiK1wiOiBcIjEwMTEwMTEwMTFcIixcblx0XHRcdFx0XCJBXCI6IFwiMTAxMTAwMTAwMVwiLFxuXHRcdFx0XHRcIkJcIjogXCIxMDAxMDAxMDExXCIsXG5cdFx0XHRcdFwiQ1wiOiBcIjEwMTAwMTAwMTFcIixcblx0XHRcdFx0XCJEXCI6IFwiMTAxMDAxMTAwMVwiXG5cdFx0XHR9O1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBjb2RhYmFyO1xufShfQmFyY29kZTMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuY29kYWJhciA9IGNvZGFiYXI7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0NPREUgPSByZXF1aXJlKCcuL0NPREUzOS8nKTtcblxudmFyIF9DT0RFMiA9IHJlcXVpcmUoJy4vQ09ERTEyOC8nKTtcblxudmFyIF9FQU5fVVBDID0gcmVxdWlyZSgnLi9FQU5fVVBDLycpO1xuXG52YXIgX0lURiA9IHJlcXVpcmUoJy4vSVRGLycpO1xuXG52YXIgX01TSSA9IHJlcXVpcmUoJy4vTVNJLycpO1xuXG52YXIgX3BoYXJtYWNvZGUgPSByZXF1aXJlKCcuL3BoYXJtYWNvZGUvJyk7XG5cbnZhciBfY29kYWJhciA9IHJlcXVpcmUoJy4vY29kYWJhcicpO1xuXG52YXIgX0dlbmVyaWNCYXJjb2RlID0gcmVxdWlyZSgnLi9HZW5lcmljQmFyY29kZS8nKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuXHRDT0RFMzk6IF9DT0RFLkNPREUzOSxcblx0Q09ERTEyODogX0NPREUyLkNPREUxMjgsIENPREUxMjhBOiBfQ09ERTIuQ09ERTEyOEEsIENPREUxMjhCOiBfQ09ERTIuQ09ERTEyOEIsIENPREUxMjhDOiBfQ09ERTIuQ09ERTEyOEMsXG5cdEVBTjEzOiBfRUFOX1VQQy5FQU4xMywgRUFOODogX0VBTl9VUEMuRUFOOCwgRUFONTogX0VBTl9VUEMuRUFONSwgRUFOMjogX0VBTl9VUEMuRUFOMiwgVVBDOiBfRUFOX1VQQy5VUEMsIFVQQ0U6IF9FQU5fVVBDLlVQQ0UsXG5cdElURjE0OiBfSVRGLklURjE0LFxuXHRJVEY6IF9JVEYuSVRGLFxuXHRNU0k6IF9NU0kuTVNJLCBNU0kxMDogX01TSS5NU0kxMCwgTVNJMTE6IF9NU0kuTVNJMTEsIE1TSTEwMTA6IF9NU0kuTVNJMTAxMCwgTVNJMTExMDogX01TSS5NU0kxMTEwLFxuXHRwaGFybWFjb2RlOiBfcGhhcm1hY29kZS5waGFybWFjb2RlLFxuXHRjb2RhYmFyOiBfY29kYWJhci5jb2RhYmFyLFxuXHRHZW5lcmljQmFyY29kZTogX0dlbmVyaWNCYXJjb2RlLkdlbmVyaWNCYXJjb2RlXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5waGFybWFjb2RlID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX0JhcmNvZGUyID0gcmVxdWlyZShcIi4uL0JhcmNvZGUuanNcIik7XG5cbnZhciBfQmFyY29kZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CYXJjb2RlMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH0gLy8gRW5jb2RpbmcgZG9jdW1lbnRhdGlvblxuLy8gaHR0cDovL3d3dy5nb21hcm8uY2gvZnRwcm9vdC9MYWV0dXNfUEhBUk1BLUNPREUucGRmXG5cbnZhciBwaGFybWFjb2RlID0gZnVuY3Rpb24gKF9CYXJjb2RlKSB7XG5cdF9pbmhlcml0cyhwaGFybWFjb2RlLCBfQmFyY29kZSk7XG5cblx0ZnVuY3Rpb24gcGhhcm1hY29kZShkYXRhLCBvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIHBoYXJtYWNvZGUpO1xuXG5cdFx0dmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKHBoYXJtYWNvZGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihwaGFybWFjb2RlKSkuY2FsbCh0aGlzLCBkYXRhLCBvcHRpb25zKSk7XG5cblx0XHRfdGhpcy5udW1iZXIgPSBwYXJzZUludChkYXRhLCAxMCk7XG5cdFx0cmV0dXJuIF90aGlzO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKHBoYXJtYWNvZGUsIFt7XG5cdFx0a2V5OiBcImVuY29kZVwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBlbmNvZGUoKSB7XG5cdFx0XHR2YXIgeiA9IHRoaXMubnVtYmVyO1xuXHRcdFx0dmFyIHJlc3VsdCA9IFwiXCI7XG5cblx0XHRcdC8vIGh0dHA6Ly9pLmltZ3VyLmNvbS9STW00VURKLnBuZ1xuXHRcdFx0Ly8gKHNvdXJjZTogaHR0cDovL3d3dy5nb21hcm8uY2gvZnRwcm9vdC9MYWV0dXNfUEhBUk1BLUNPREUucGRmLCBwYWdlOiAzNClcblx0XHRcdHdoaWxlICghaXNOYU4oeikgJiYgeiAhPSAwKSB7XG5cdFx0XHRcdGlmICh6ICUgMiA9PT0gMCkge1xuXHRcdFx0XHRcdC8vIEV2ZW5cblx0XHRcdFx0XHRyZXN1bHQgPSBcIjExMTAwXCIgKyByZXN1bHQ7XG5cdFx0XHRcdFx0eiA9ICh6IC0gMikgLyAyO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIE9kZFxuXHRcdFx0XHRcdHJlc3VsdCA9IFwiMTAwXCIgKyByZXN1bHQ7XG5cdFx0XHRcdFx0eiA9ICh6IC0gMSkgLyAyO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJlbW92ZSB0aGUgdHdvIGxhc3QgemVyb2VzXG5cdFx0XHRyZXN1bHQgPSByZXN1bHQuc2xpY2UoMCwgLTIpO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhOiByZXN1bHQsXG5cdFx0XHRcdHRleHQ6IHRoaXMudGV4dFxuXHRcdFx0fTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwidmFsaWRcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gdmFsaWQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5udW1iZXIgPj0gMyAmJiB0aGlzLm51bWJlciA8PSAxMzEwNzA7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIHBoYXJtYWNvZGU7XG59KF9CYXJjb2RlMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5waGFybWFjb2RlID0gcGhhcm1hY29kZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyplc2xpbnQgbm8tY29uc29sZTogMCAqL1xuXG52YXIgRXJyb3JIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiBFcnJvckhhbmRsZXIoYXBpKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIEVycm9ySGFuZGxlcik7XG5cblx0XHR0aGlzLmFwaSA9IGFwaTtcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhFcnJvckhhbmRsZXIsIFt7XG5cdFx0a2V5OiBcImhhbmRsZUNhdGNoXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUNhdGNoKGUpIHtcblx0XHRcdC8vIElmIGJhYmVsIHN1cHBvcnRlZCBleHRlbmRpbmcgb2YgRXJyb3IgaW4gYSBjb3JyZWN0IHdheSBpbnN0YW5jZW9mIHdvdWxkIGJlIHVzZWQgaGVyZVxuXHRcdFx0aWYgKGUubmFtZSA9PT0gXCJJbnZhbGlkSW5wdXRFeGNlcHRpb25cIikge1xuXHRcdFx0XHRpZiAodGhpcy5hcGkuX29wdGlvbnMudmFsaWQgIT09IHRoaXMuYXBpLl9kZWZhdWx0cy52YWxpZCkge1xuXHRcdFx0XHRcdHRoaXMuYXBpLl9vcHRpb25zLnZhbGlkKGZhbHNlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aHJvdyBlLm1lc3NhZ2U7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IGU7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuYXBpLnJlbmRlciA9IGZ1bmN0aW9uICgpIHt9O1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJ3cmFwQmFyY29kZUNhbGxcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gd3JhcEJhcmNvZGVDYWxsKGZ1bmMpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhciByZXN1bHQgPSBmdW5jLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcblx0XHRcdFx0dGhpcy5hcGkuX29wdGlvbnMudmFsaWQodHJ1ZSk7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdHRoaXMuaGFuZGxlQ2F0Y2goZSk7XG5cblx0XHRcdFx0cmV0dXJuIHRoaXMuYXBpO1xuXHRcdFx0fVxuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBFcnJvckhhbmRsZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEVycm9ySGFuZGxlcjsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIEludmFsaWRJbnB1dEV4Y2VwdGlvbiA9IGZ1bmN0aW9uIChfRXJyb3IpIHtcblx0X2luaGVyaXRzKEludmFsaWRJbnB1dEV4Y2VwdGlvbiwgX0Vycm9yKTtcblxuXHRmdW5jdGlvbiBJbnZhbGlkSW5wdXRFeGNlcHRpb24oc3ltYm9sb2d5LCBpbnB1dCkge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnZhbGlkSW5wdXRFeGNlcHRpb24pO1xuXG5cdFx0dmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEludmFsaWRJbnB1dEV4Y2VwdGlvbi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEludmFsaWRJbnB1dEV4Y2VwdGlvbikpLmNhbGwodGhpcykpO1xuXG5cdFx0X3RoaXMubmFtZSA9IFwiSW52YWxpZElucHV0RXhjZXB0aW9uXCI7XG5cblx0XHRfdGhpcy5zeW1ib2xvZ3kgPSBzeW1ib2xvZ3k7XG5cdFx0X3RoaXMuaW5wdXQgPSBpbnB1dDtcblxuXHRcdF90aGlzLm1lc3NhZ2UgPSAnXCInICsgX3RoaXMuaW5wdXQgKyAnXCIgaXMgbm90IGEgdmFsaWQgaW5wdXQgZm9yICcgKyBfdGhpcy5zeW1ib2xvZ3k7XG5cdFx0cmV0dXJuIF90aGlzO1xuXHR9XG5cblx0cmV0dXJuIEludmFsaWRJbnB1dEV4Y2VwdGlvbjtcbn0oRXJyb3IpO1xuXG52YXIgSW52YWxpZEVsZW1lbnRFeGNlcHRpb24gPSBmdW5jdGlvbiAoX0Vycm9yMikge1xuXHRfaW5oZXJpdHMoSW52YWxpZEVsZW1lbnRFeGNlcHRpb24sIF9FcnJvcjIpO1xuXG5cdGZ1bmN0aW9uIEludmFsaWRFbGVtZW50RXhjZXB0aW9uKCkge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnZhbGlkRWxlbWVudEV4Y2VwdGlvbik7XG5cblx0XHR2YXIgX3RoaXMyID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEludmFsaWRFbGVtZW50RXhjZXB0aW9uLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoSW52YWxpZEVsZW1lbnRFeGNlcHRpb24pKS5jYWxsKHRoaXMpKTtcblxuXHRcdF90aGlzMi5uYW1lID0gXCJJbnZhbGlkRWxlbWVudEV4Y2VwdGlvblwiO1xuXHRcdF90aGlzMi5tZXNzYWdlID0gXCJOb3Qgc3VwcG9ydGVkIHR5cGUgdG8gcmVuZGVyIG9uXCI7XG5cdFx0cmV0dXJuIF90aGlzMjtcblx0fVxuXG5cdHJldHVybiBJbnZhbGlkRWxlbWVudEV4Y2VwdGlvbjtcbn0oRXJyb3IpO1xuXG52YXIgTm9FbGVtZW50RXhjZXB0aW9uID0gZnVuY3Rpb24gKF9FcnJvcjMpIHtcblx0X2luaGVyaXRzKE5vRWxlbWVudEV4Y2VwdGlvbiwgX0Vycm9yMyk7XG5cblx0ZnVuY3Rpb24gTm9FbGVtZW50RXhjZXB0aW9uKCkge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb0VsZW1lbnRFeGNlcHRpb24pO1xuXG5cdFx0dmFyIF90aGlzMyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChOb0VsZW1lbnRFeGNlcHRpb24uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihOb0VsZW1lbnRFeGNlcHRpb24pKS5jYWxsKHRoaXMpKTtcblxuXHRcdF90aGlzMy5uYW1lID0gXCJOb0VsZW1lbnRFeGNlcHRpb25cIjtcblx0XHRfdGhpczMubWVzc2FnZSA9IFwiTm8gZWxlbWVudCB0byByZW5kZXIgb24uXCI7XG5cdFx0cmV0dXJuIF90aGlzMztcblx0fVxuXG5cdHJldHVybiBOb0VsZW1lbnRFeGNlcHRpb247XG59KEVycm9yKTtcblxuZXhwb3J0cy5JbnZhbGlkSW5wdXRFeGNlcHRpb24gPSBJbnZhbGlkSW5wdXRFeGNlcHRpb247XG5leHBvcnRzLkludmFsaWRFbGVtZW50RXhjZXB0aW9uID0gSW52YWxpZEVsZW1lbnRFeGNlcHRpb247XG5leHBvcnRzLk5vRWxlbWVudEV4Y2VwdGlvbiA9IE5vRWxlbWVudEV4Y2VwdGlvbjsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGZpeE9wdGlvbnM7XG5cblxuZnVuY3Rpb24gZml4T3B0aW9ucyhvcHRpb25zKSB7XG5cdC8vIEZpeCB0aGUgbWFyZ2luc1xuXHRvcHRpb25zLm1hcmdpblRvcCA9IG9wdGlvbnMubWFyZ2luVG9wIHx8IG9wdGlvbnMubWFyZ2luO1xuXHRvcHRpb25zLm1hcmdpbkJvdHRvbSA9IG9wdGlvbnMubWFyZ2luQm90dG9tIHx8IG9wdGlvbnMubWFyZ2luO1xuXHRvcHRpb25zLm1hcmdpblJpZ2h0ID0gb3B0aW9ucy5tYXJnaW5SaWdodCB8fCBvcHRpb25zLm1hcmdpbjtcblx0b3B0aW9ucy5tYXJnaW5MZWZ0ID0gb3B0aW9ucy5tYXJnaW5MZWZ0IHx8IG9wdGlvbnMubWFyZ2luO1xuXG5cdHJldHVybiBvcHRpb25zO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX29wdGlvbnNGcm9tU3RyaW5ncyA9IHJlcXVpcmUoXCIuL29wdGlvbnNGcm9tU3RyaW5ncy5qc1wiKTtcblxudmFyIF9vcHRpb25zRnJvbVN0cmluZ3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb3B0aW9uc0Zyb21TdHJpbmdzKTtcblxudmFyIF9kZWZhdWx0cyA9IHJlcXVpcmUoXCIuLi9vcHRpb25zL2RlZmF1bHRzLmpzXCIpO1xuXG52YXIgX2RlZmF1bHRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmF1bHRzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0T3B0aW9uc0Zyb21FbGVtZW50KGVsZW1lbnQpIHtcblx0dmFyIG9wdGlvbnMgPSB7fTtcblx0Zm9yICh2YXIgcHJvcGVydHkgaW4gX2RlZmF1bHRzMi5kZWZhdWx0KSB7XG5cdFx0aWYgKF9kZWZhdWx0czIuZGVmYXVsdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcblx0XHRcdC8vIGpzYmFyY29kZS0qXG5cdFx0XHRpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJqc2JhcmNvZGUtXCIgKyBwcm9wZXJ0eS50b0xvd2VyQ2FzZSgpKSkge1xuXHRcdFx0XHRvcHRpb25zW3Byb3BlcnR5XSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwianNiYXJjb2RlLVwiICsgcHJvcGVydHkudG9Mb3dlckNhc2UoKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGRhdGEtKlxuXHRcdFx0aWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwiZGF0YS1cIiArIHByb3BlcnR5LnRvTG93ZXJDYXNlKCkpKSB7XG5cdFx0XHRcdG9wdGlvbnNbcHJvcGVydHldID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLVwiICsgcHJvcGVydHkudG9Mb3dlckNhc2UoKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0b3B0aW9uc1tcInZhbHVlXCJdID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJqc2JhcmNvZGUtdmFsdWVcIikgfHwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIpO1xuXG5cdC8vIFNpbmNlIGFsbCBhdHJpYnV0ZXMgYXJlIHN0cmluZyB0aGV5IG5lZWQgdG8gYmUgY29udmVydGVkIHRvIGludGVnZXJzXG5cdG9wdGlvbnMgPSAoMCwgX29wdGlvbnNGcm9tU3RyaW5nczIuZGVmYXVsdCkob3B0aW9ucyk7XG5cblx0cmV0dXJuIG9wdGlvbnM7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGdldE9wdGlvbnNGcm9tRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyAvKiBnbG9iYWwgSFRNTEltYWdlRWxlbWVudCAqL1xuLyogZ2xvYmFsIEhUTUxDYW52YXNFbGVtZW50ICovXG4vKiBnbG9iYWwgU1ZHRWxlbWVudCAqL1xuXG52YXIgX2dldE9wdGlvbnNGcm9tRWxlbWVudCA9IHJlcXVpcmUoXCIuL2dldE9wdGlvbnNGcm9tRWxlbWVudC5qc1wiKTtcblxudmFyIF9nZXRPcHRpb25zRnJvbUVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0T3B0aW9uc0Zyb21FbGVtZW50KTtcblxudmFyIF9yZW5kZXJlcnMgPSByZXF1aXJlKFwiLi4vcmVuZGVyZXJzXCIpO1xuXG52YXIgX3JlbmRlcmVyczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZW5kZXJlcnMpO1xuXG52YXIgX2V4Y2VwdGlvbnMgPSByZXF1aXJlKFwiLi4vZXhjZXB0aW9ucy9leGNlcHRpb25zLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBUYWtlcyBhbiBlbGVtZW50IGFuZCByZXR1cm5zIGFuIG9iamVjdCB3aXRoIGluZm9ybWF0aW9uIGFib3V0IGhvd1xuLy8gaXQgc2hvdWxkIGJlIHJlbmRlcmVkXG4vLyBUaGlzIGNvdWxkIGFsc28gcmV0dXJuIGFuIGFycmF5IHdpdGggdGhlc2Ugb2JqZWN0c1xuLy8ge1xuLy8gICBlbGVtZW50OiBUaGUgZWxlbWVudCB0aGF0IHRoZSByZW5kZXJlciBzaG91bGQgZHJhdyBvblxuLy8gICByZW5kZXJlcjogVGhlIG5hbWUgb2YgdGhlIHJlbmRlcmVyXG4vLyAgIGFmdGVyUmVuZGVyIChvcHRpb25hbCk6IElmIHNvbWV0aGluZyBoYXMgdG8gZG9uZSBhZnRlciB0aGUgcmVuZGVyZXJcbi8vICAgICBjb21wbGV0ZWQsIGNhbGxzIGFmdGVyUmVuZGVyIChmdW5jdGlvbilcbi8vICAgb3B0aW9ucyAob3B0aW9uYWwpOiBPcHRpb25zIHRoYXQgY2FuIGJlIGRlZmluZWQgaW4gdGhlIGVsZW1lbnRcbi8vIH1cblxuZnVuY3Rpb24gZ2V0UmVuZGVyUHJvcGVydGllcyhlbGVtZW50KSB7XG5cdC8vIElmIHRoZSBlbGVtZW50IGlzIGEgc3RyaW5nLCBxdWVyeSBzZWxlY3QgY2FsbCBhZ2FpblxuXHRpZiAodHlwZW9mIGVsZW1lbnQgPT09IFwic3RyaW5nXCIpIHtcblx0XHRyZXR1cm4gcXVlcnlTZWxlY3RlZFJlbmRlclByb3BlcnRpZXMoZWxlbWVudCk7XG5cdH1cblx0Ly8gSWYgZWxlbWVudCBpcyBhcnJheS4gUmVjdXJzaXZseSBjYWxsIHdpdGggZXZlcnkgb2JqZWN0IGluIHRoZSBhcnJheVxuXHRlbHNlIGlmIChBcnJheS5pc0FycmF5KGVsZW1lbnQpKSB7XG5cdFx0XHR2YXIgcmV0dXJuQXJyYXkgPSBbXTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRyZXR1cm5BcnJheS5wdXNoKGdldFJlbmRlclByb3BlcnRpZXMoZWxlbWVudFtpXSkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJldHVybkFycmF5O1xuXHRcdH1cblx0XHQvLyBJZiBlbGVtZW50LCByZW5kZXIgb24gY2FudmFzIGFuZCBzZXQgdGhlIHVyaSBhcyBzcmNcblx0XHRlbHNlIGlmICh0eXBlb2YgSFRNTENhbnZhc0VsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XG5cdFx0XHRcdHJldHVybiBuZXdDYW52YXNSZW5kZXJQcm9wZXJ0aWVzKGVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gSWYgU1ZHXG5cdFx0XHRlbHNlIGlmIChlbGVtZW50ICYmIGVsZW1lbnQubm9kZU5hbWUgJiYgZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc3ZnJyB8fCB0eXBlb2YgU1ZHRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZWxlbWVudCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpIHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0ZWxlbWVudDogZWxlbWVudCxcblx0XHRcdFx0XHRcdG9wdGlvbnM6ICgwLCBfZ2V0T3B0aW9uc0Zyb21FbGVtZW50Mi5kZWZhdWx0KShlbGVtZW50KSxcblx0XHRcdFx0XHRcdHJlbmRlcmVyOiBfcmVuZGVyZXJzMi5kZWZhdWx0LlNWR1JlbmRlcmVyXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBJZiBjYW52YXMgKGluIGJyb3dzZXIpXG5cdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBIVE1MQ2FudmFzRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRlbGVtZW50OiBlbGVtZW50LFxuXHRcdFx0XHRcdFx0XHRvcHRpb25zOiAoMCwgX2dldE9wdGlvbnNGcm9tRWxlbWVudDIuZGVmYXVsdCkoZWxlbWVudCksXG5cdFx0XHRcdFx0XHRcdHJlbmRlcmVyOiBfcmVuZGVyZXJzMi5kZWZhdWx0LkNhbnZhc1JlbmRlcmVyXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBJZiBjYW52YXMgKGluIG5vZGUpXG5cdFx0XHRcdFx0ZWxzZSBpZiAoZWxlbWVudCAmJiBlbGVtZW50LmdldENvbnRleHQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRlbGVtZW50OiBlbGVtZW50LFxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcmVyOiBfcmVuZGVyZXJzMi5kZWZhdWx0LkNhbnZhc1JlbmRlcmVyXG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGVsZW1lbnQgJiYgKHR5cGVvZiBlbGVtZW50ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoZWxlbWVudCkpID09PSAnb2JqZWN0JyAmJiAhZWxlbWVudC5ub2RlTmFtZSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQ6IGVsZW1lbnQsXG5cdFx0XHRcdFx0XHRcdFx0cmVuZGVyZXI6IF9yZW5kZXJlcnMyLmRlZmF1bHQuT2JqZWN0UmVuZGVyZXJcblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRocm93IG5ldyBfZXhjZXB0aW9ucy5JbnZhbGlkRWxlbWVudEV4Y2VwdGlvbigpO1xuXHRcdFx0XHRcdFx0fVxufVxuXG5mdW5jdGlvbiBxdWVyeVNlbGVjdGVkUmVuZGVyUHJvcGVydGllcyhzdHJpbmcpIHtcblx0dmFyIHNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzdHJpbmcpO1xuXHRpZiAoc2VsZWN0b3IubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0fSBlbHNlIHtcblx0XHR2YXIgcmV0dXJuQXJyYXkgPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdG9yLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRyZXR1cm5BcnJheS5wdXNoKGdldFJlbmRlclByb3BlcnRpZXMoc2VsZWN0b3JbaV0pKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJldHVybkFycmF5O1xuXHR9XG59XG5cbmZ1bmN0aW9uIG5ld0NhbnZhc1JlbmRlclByb3BlcnRpZXMoaW1nRWxlbWVudCkge1xuXHR2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdHJldHVybiB7XG5cdFx0ZWxlbWVudDogY2FudmFzLFxuXHRcdG9wdGlvbnM6ICgwLCBfZ2V0T3B0aW9uc0Zyb21FbGVtZW50Mi5kZWZhdWx0KShpbWdFbGVtZW50KSxcblx0XHRyZW5kZXJlcjogX3JlbmRlcmVyczIuZGVmYXVsdC5DYW52YXNSZW5kZXJlcixcblx0XHRhZnRlclJlbmRlcjogZnVuY3Rpb24gYWZ0ZXJSZW5kZXIoKSB7XG5cdFx0XHRpbWdFbGVtZW50LnNldEF0dHJpYnV0ZShcInNyY1wiLCBjYW52YXMudG9EYXRhVVJMKCkpO1xuXHRcdH1cblx0fTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0UmVuZGVyUHJvcGVydGllczsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGxpbmVhcml6ZUVuY29kaW5ncztcblxuLy8gRW5jb2RpbmdzIGNhbiBiZSBuZXN0bGVkIGxpa2UgW1sxLTEsIDEtMl0sIDIsIFszLTEsIDMtMl1cbi8vIENvbnZlcnQgdG8gWzEtMSwgMS0yLCAyLCAzLTEsIDMtMl1cblxuZnVuY3Rpb24gbGluZWFyaXplRW5jb2RpbmdzKGVuY29kaW5ncykge1xuXHR2YXIgbGluZWFyRW5jb2RpbmdzID0gW107XG5cdGZ1bmN0aW9uIG5leHRMZXZlbChlbmNvZGVkKSB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoZW5jb2RlZCkpIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZW5jb2RlZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRuZXh0TGV2ZWwoZW5jb2RlZFtpXSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVuY29kZWQudGV4dCA9IGVuY29kZWQudGV4dCB8fCBcIlwiO1xuXHRcdFx0ZW5jb2RlZC5kYXRhID0gZW5jb2RlZC5kYXRhIHx8IFwiXCI7XG5cdFx0XHRsaW5lYXJFbmNvZGluZ3MucHVzaChlbmNvZGVkKTtcblx0XHR9XG5cdH1cblx0bmV4dExldmVsKGVuY29kaW5ncyk7XG5cblx0cmV0dXJuIGxpbmVhckVuY29kaW5ncztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9sZCwgcmVwbGFjZU9iaikge1xuICByZXR1cm4gX2V4dGVuZHMoe30sIG9sZCwgcmVwbGFjZU9iaik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gb3B0aW9uc0Zyb21TdHJpbmdzO1xuXG4vLyBDb252ZXJ0IHN0cmluZyB0byBpbnRlZ2Vycy9ib29sZWFucyB3aGVyZSBpdCBzaG91bGQgYmVcblxuZnVuY3Rpb24gb3B0aW9uc0Zyb21TdHJpbmdzKG9wdGlvbnMpIHtcblx0dmFyIGludE9wdGlvbnMgPSBbXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcInRleHRNYXJnaW5cIiwgXCJmb250U2l6ZVwiLCBcIm1hcmdpblwiLCBcIm1hcmdpblRvcFwiLCBcIm1hcmdpbkJvdHRvbVwiLCBcIm1hcmdpbkxlZnRcIiwgXCJtYXJnaW5SaWdodFwiXTtcblxuXHRmb3IgKHZhciBpbnRPcHRpb24gaW4gaW50T3B0aW9ucykge1xuXHRcdGlmIChpbnRPcHRpb25zLmhhc093blByb3BlcnR5KGludE9wdGlvbikpIHtcblx0XHRcdGludE9wdGlvbiA9IGludE9wdGlvbnNbaW50T3B0aW9uXTtcblx0XHRcdGlmICh0eXBlb2Ygb3B0aW9uc1tpbnRPcHRpb25dID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdG9wdGlvbnNbaW50T3B0aW9uXSA9IHBhcnNlSW50KG9wdGlvbnNbaW50T3B0aW9uXSwgMTApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmICh0eXBlb2Ygb3B0aW9uc1tcImRpc3BsYXlWYWx1ZVwiXSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdG9wdGlvbnNbXCJkaXNwbGF5VmFsdWVcIl0gPSBvcHRpb25zW1wiZGlzcGxheVZhbHVlXCJdICE9IFwiZmFsc2VcIjtcblx0fVxuXG5cdHJldHVybiBvcHRpb25zO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xudmFyIGRlZmF1bHRzID0ge1xuXHR3aWR0aDogMixcblx0aGVpZ2h0OiAxMDAsXG5cdGZvcm1hdDogXCJhdXRvXCIsXG5cdGRpc3BsYXlWYWx1ZTogdHJ1ZSxcblx0Zm9udE9wdGlvbnM6IFwiXCIsXG5cdGZvbnQ6IFwibW9ub3NwYWNlXCIsXG5cdHRleHQ6IHVuZGVmaW5lZCxcblx0dGV4dEFsaWduOiBcImNlbnRlclwiLFxuXHR0ZXh0UG9zaXRpb246IFwiYm90dG9tXCIsXG5cdHRleHRNYXJnaW46IDIsXG5cdGZvbnRTaXplOiAyMCxcblx0YmFja2dyb3VuZDogXCIjZmZmZmZmXCIsXG5cdGxpbmVDb2xvcjogXCIjMDAwMDAwXCIsXG5cdG1hcmdpbjogMTAsXG5cdG1hcmdpblRvcDogdW5kZWZpbmVkLFxuXHRtYXJnaW5Cb3R0b206IHVuZGVmaW5lZCxcblx0bWFyZ2luTGVmdDogdW5kZWZpbmVkLFxuXHRtYXJnaW5SaWdodDogdW5kZWZpbmVkLFxuXHR2YWxpZDogZnVuY3Rpb24gdmFsaWQoKSB7fVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZGVmYXVsdHM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfbWVyZ2UgPSByZXF1aXJlKFwiLi4vaGVscC9tZXJnZS5qc1wiKTtcblxudmFyIF9tZXJnZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tZXJnZSk7XG5cbnZhciBfc2hhcmVkID0gcmVxdWlyZShcIi4vc2hhcmVkLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQ2FudmFzUmVuZGVyZXIgPSBmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIENhbnZhc1JlbmRlcmVyKGNhbnZhcywgZW5jb2RpbmdzLCBvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIENhbnZhc1JlbmRlcmVyKTtcblxuXHRcdHRoaXMuY2FudmFzID0gY2FudmFzO1xuXHRcdHRoaXMuZW5jb2RpbmdzID0gZW5jb2RpbmdzO1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoQ2FudmFzUmVuZGVyZXIsIFt7XG5cdFx0a2V5OiBcInJlbmRlclwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0XHQvLyBBYm9ydCBpZiB0aGUgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IEhUTUw1IGNhbnZhc1xuXHRcdFx0aWYgKCF0aGlzLmNhbnZhcy5nZXRDb250ZXh0KSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVGhlIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBjYW52YXMuJyk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMucHJlcGFyZUNhbnZhcygpO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmVuY29kaW5ncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgZW5jb2RpbmdPcHRpb25zID0gKDAsIF9tZXJnZTIuZGVmYXVsdCkodGhpcy5vcHRpb25zLCB0aGlzLmVuY29kaW5nc1tpXS5vcHRpb25zKTtcblxuXHRcdFx0XHR0aGlzLmRyYXdDYW52YXNCYXJjb2RlKGVuY29kaW5nT3B0aW9ucywgdGhpcy5lbmNvZGluZ3NbaV0pO1xuXHRcdFx0XHR0aGlzLmRyYXdDYW52YXNUZXh0KGVuY29kaW5nT3B0aW9ucywgdGhpcy5lbmNvZGluZ3NbaV0pO1xuXG5cdFx0XHRcdHRoaXMubW92ZUNhbnZhc0RyYXdpbmcodGhpcy5lbmNvZGluZ3NbaV0pO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnJlc3RvcmVDYW52YXMoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwicHJlcGFyZUNhbnZhc1wiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBwcmVwYXJlQ2FudmFzKCkge1xuXHRcdFx0Ly8gR2V0IHRoZSBjYW52YXMgY29udGV4dFxuXHRcdFx0dmFyIGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuXHRcdFx0Y3R4LnNhdmUoKTtcblxuXHRcdFx0KDAsIF9zaGFyZWQuY2FsY3VsYXRlRW5jb2RpbmdBdHRyaWJ1dGVzKSh0aGlzLmVuY29kaW5ncywgdGhpcy5vcHRpb25zLCBjdHgpO1xuXHRcdFx0dmFyIHRvdGFsV2lkdGggPSAoMCwgX3NoYXJlZC5nZXRUb3RhbFdpZHRoT2ZFbmNvZGluZ3MpKHRoaXMuZW5jb2RpbmdzKTtcblx0XHRcdHZhciBtYXhIZWlnaHQgPSAoMCwgX3NoYXJlZC5nZXRNYXhpbXVtSGVpZ2h0T2ZFbmNvZGluZ3MpKHRoaXMuZW5jb2RpbmdzKTtcblxuXHRcdFx0dGhpcy5jYW52YXMud2lkdGggPSB0b3RhbFdpZHRoICsgdGhpcy5vcHRpb25zLm1hcmdpbkxlZnQgKyB0aGlzLm9wdGlvbnMubWFyZ2luUmlnaHQ7XG5cblx0XHRcdHRoaXMuY2FudmFzLmhlaWdodCA9IG1heEhlaWdodDtcblxuXHRcdFx0Ly8gUGFpbnQgdGhlIGNhbnZhc1xuXHRcdFx0Y3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuYmFja2dyb3VuZCkge1xuXHRcdFx0XHRjdHguZmlsbFN0eWxlID0gdGhpcy5vcHRpb25zLmJhY2tncm91bmQ7XG5cdFx0XHRcdGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblx0XHRcdH1cblxuXHRcdFx0Y3R4LnRyYW5zbGF0ZSh0aGlzLm9wdGlvbnMubWFyZ2luTGVmdCwgMCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcImRyYXdDYW52YXNCYXJjb2RlXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGRyYXdDYW52YXNCYXJjb2RlKG9wdGlvbnMsIGVuY29kaW5nKSB7XG5cdFx0XHQvLyBHZXQgdGhlIGNhbnZhcyBjb250ZXh0XG5cdFx0XHR2YXIgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5cdFx0XHR2YXIgYmluYXJ5ID0gZW5jb2RpbmcuZGF0YTtcblxuXHRcdFx0Ly8gQ3JlYXRlcyB0aGUgYmFyY29kZSBvdXQgb2YgdGhlIGVuY29kZWQgYmluYXJ5XG5cdFx0XHR2YXIgeUZyb207XG5cdFx0XHRpZiAob3B0aW9ucy50ZXh0UG9zaXRpb24gPT0gXCJ0b3BcIikge1xuXHRcdFx0XHR5RnJvbSA9IG9wdGlvbnMubWFyZ2luVG9wICsgb3B0aW9ucy5mb250U2l6ZSArIG9wdGlvbnMudGV4dE1hcmdpbjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHlGcm9tID0gb3B0aW9ucy5tYXJnaW5Ub3A7XG5cdFx0XHR9XG5cblx0XHRcdGN0eC5maWxsU3R5bGUgPSBvcHRpb25zLmxpbmVDb2xvcjtcblxuXHRcdFx0Zm9yICh2YXIgYiA9IDA7IGIgPCBiaW5hcnkubGVuZ3RoOyBiKyspIHtcblx0XHRcdFx0dmFyIHggPSBiICogb3B0aW9ucy53aWR0aCArIGVuY29kaW5nLmJhcmNvZGVQYWRkaW5nO1xuXG5cdFx0XHRcdGlmIChiaW5hcnlbYl0gPT09IFwiMVwiKSB7XG5cdFx0XHRcdFx0Y3R4LmZpbGxSZWN0KHgsIHlGcm9tLCBvcHRpb25zLndpZHRoLCBvcHRpb25zLmhlaWdodCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoYmluYXJ5W2JdKSB7XG5cdFx0XHRcdFx0Y3R4LmZpbGxSZWN0KHgsIHlGcm9tLCBvcHRpb25zLndpZHRoLCBvcHRpb25zLmhlaWdodCAqIGJpbmFyeVtiXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwiZHJhd0NhbnZhc1RleHRcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZHJhd0NhbnZhc1RleHQob3B0aW9ucywgZW5jb2RpbmcpIHtcblx0XHRcdC8vIEdldCB0aGUgY2FudmFzIGNvbnRleHRcblx0XHRcdHZhciBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cblx0XHRcdHZhciBmb250ID0gb3B0aW9ucy5mb250T3B0aW9ucyArIFwiIFwiICsgb3B0aW9ucy5mb250U2l6ZSArIFwicHggXCIgKyBvcHRpb25zLmZvbnQ7XG5cblx0XHRcdC8vIERyYXcgdGhlIHRleHQgaWYgZGlzcGxheVZhbHVlIGlzIHNldFxuXHRcdFx0aWYgKG9wdGlvbnMuZGlzcGxheVZhbHVlKSB7XG5cdFx0XHRcdHZhciB4LCB5O1xuXG5cdFx0XHRcdGlmIChvcHRpb25zLnRleHRQb3NpdGlvbiA9PSBcInRvcFwiKSB7XG5cdFx0XHRcdFx0eSA9IG9wdGlvbnMubWFyZ2luVG9wICsgb3B0aW9ucy5mb250U2l6ZSAtIG9wdGlvbnMudGV4dE1hcmdpbjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR5ID0gb3B0aW9ucy5oZWlnaHQgKyBvcHRpb25zLnRleHRNYXJnaW4gKyBvcHRpb25zLm1hcmdpblRvcCArIG9wdGlvbnMuZm9udFNpemU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjdHguZm9udCA9IGZvbnQ7XG5cblx0XHRcdFx0Ly8gRHJhdyB0aGUgdGV4dCBpbiB0aGUgY29ycmVjdCBYIGRlcGVuZGluZyBvbiB0aGUgdGV4dEFsaWduIG9wdGlvblxuXHRcdFx0XHRpZiAob3B0aW9ucy50ZXh0QWxpZ24gPT0gXCJsZWZ0XCIgfHwgZW5jb2RpbmcuYmFyY29kZVBhZGRpbmcgPiAwKSB7XG5cdFx0XHRcdFx0eCA9IDA7XG5cdFx0XHRcdFx0Y3R4LnRleHRBbGlnbiA9ICdsZWZ0Jztcblx0XHRcdFx0fSBlbHNlIGlmIChvcHRpb25zLnRleHRBbGlnbiA9PSBcInJpZ2h0XCIpIHtcblx0XHRcdFx0XHR4ID0gZW5jb2Rpbmcud2lkdGggLSAxO1xuXHRcdFx0XHRcdGN0eC50ZXh0QWxpZ24gPSAncmlnaHQnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEluIGFsbCBvdGhlciBjYXNlcywgY2VudGVyIHRoZSB0ZXh0XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0eCA9IGVuY29kaW5nLndpZHRoIC8gMjtcblx0XHRcdFx0XHRcdGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0Y3R4LmZpbGxUZXh0KGVuY29kaW5nLnRleHQsIHgsIHkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJtb3ZlQ2FudmFzRHJhd2luZ1wiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBtb3ZlQ2FudmFzRHJhd2luZyhlbmNvZGluZykge1xuXHRcdFx0dmFyIGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuXHRcdFx0Y3R4LnRyYW5zbGF0ZShlbmNvZGluZy53aWR0aCwgMCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcInJlc3RvcmVDYW52YXNcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVzdG9yZUNhbnZhcygpIHtcblx0XHRcdC8vIEdldCB0aGUgY2FudmFzIGNvbnRleHRcblx0XHRcdHZhciBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cblx0XHRcdGN0eC5yZXN0b3JlKCk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIENhbnZhc1JlbmRlcmVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDYW52YXNSZW5kZXJlcjsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY2FudmFzID0gcmVxdWlyZSgnLi9jYW52YXMuanMnKTtcblxudmFyIF9jYW52YXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2FudmFzKTtcblxudmFyIF9zdmcgPSByZXF1aXJlKCcuL3N2Zy5qcycpO1xuXG52YXIgX3N2ZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmcpO1xuXG52YXIgX29iamVjdCA9IHJlcXVpcmUoJy4vb2JqZWN0LmpzJyk7XG5cbnZhciBfb2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHsgQ2FudmFzUmVuZGVyZXI6IF9jYW52YXMyLmRlZmF1bHQsIFNWR1JlbmRlcmVyOiBfc3ZnMi5kZWZhdWx0LCBPYmplY3RSZW5kZXJlcjogX29iamVjdDIuZGVmYXVsdCB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgT2JqZWN0UmVuZGVyZXIgPSBmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIE9iamVjdFJlbmRlcmVyKG9iamVjdCwgZW5jb2RpbmdzLCBvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIE9iamVjdFJlbmRlcmVyKTtcblxuXHRcdHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuXHRcdHRoaXMuZW5jb2RpbmdzID0gZW5jb2RpbmdzO1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoT2JqZWN0UmVuZGVyZXIsIFt7XG5cdFx0a2V5OiBcInJlbmRlclwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0XHR0aGlzLm9iamVjdC5lbmNvZGluZ3MgPSB0aGlzLmVuY29kaW5ncztcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gT2JqZWN0UmVuZGVyZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE9iamVjdFJlbmRlcmVyOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRUb3RhbFdpZHRoT2ZFbmNvZGluZ3MgPSBleHBvcnRzLmNhbGN1bGF0ZUVuY29kaW5nQXR0cmlidXRlcyA9IGV4cG9ydHMuZ2V0QmFyY29kZVBhZGRpbmcgPSBleHBvcnRzLmdldEVuY29kaW5nSGVpZ2h0ID0gZXhwb3J0cy5nZXRNYXhpbXVtSGVpZ2h0T2ZFbmNvZGluZ3MgPSB1bmRlZmluZWQ7XG5cbnZhciBfbWVyZ2UgPSByZXF1aXJlKFwiLi4vaGVscC9tZXJnZS5qc1wiKTtcblxudmFyIF9tZXJnZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tZXJnZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldEVuY29kaW5nSGVpZ2h0KGVuY29kaW5nLCBvcHRpb25zKSB7XG5cdHJldHVybiBvcHRpb25zLmhlaWdodCArIChvcHRpb25zLmRpc3BsYXlWYWx1ZSAmJiBlbmNvZGluZy50ZXh0Lmxlbmd0aCA+IDAgPyBvcHRpb25zLmZvbnRTaXplICsgb3B0aW9ucy50ZXh0TWFyZ2luIDogMCkgKyBvcHRpb25zLm1hcmdpblRvcCArIG9wdGlvbnMubWFyZ2luQm90dG9tO1xufVxuXG5mdW5jdGlvbiBnZXRCYXJjb2RlUGFkZGluZyh0ZXh0V2lkdGgsIGJhcmNvZGVXaWR0aCwgb3B0aW9ucykge1xuXHRpZiAob3B0aW9ucy5kaXNwbGF5VmFsdWUgJiYgYmFyY29kZVdpZHRoIDwgdGV4dFdpZHRoKSB7XG5cdFx0aWYgKG9wdGlvbnMudGV4dEFsaWduID09IFwiY2VudGVyXCIpIHtcblx0XHRcdHJldHVybiBNYXRoLmZsb29yKCh0ZXh0V2lkdGggLSBiYXJjb2RlV2lkdGgpIC8gMik7XG5cdFx0fSBlbHNlIGlmIChvcHRpb25zLnRleHRBbGlnbiA9PSBcImxlZnRcIikge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fSBlbHNlIGlmIChvcHRpb25zLnRleHRBbGlnbiA9PSBcInJpZ2h0XCIpIHtcblx0XHRcdHJldHVybiBNYXRoLmZsb29yKHRleHRXaWR0aCAtIGJhcmNvZGVXaWR0aCk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiAwO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVFbmNvZGluZ0F0dHJpYnV0ZXMoZW5jb2RpbmdzLCBiYXJjb2RlT3B0aW9ucywgY29udGV4dCkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGVuY29kaW5ncy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBlbmNvZGluZyA9IGVuY29kaW5nc1tpXTtcblx0XHR2YXIgb3B0aW9ucyA9ICgwLCBfbWVyZ2UyLmRlZmF1bHQpKGJhcmNvZGVPcHRpb25zLCBlbmNvZGluZy5vcHRpb25zKTtcblxuXHRcdC8vIENhbGN1bGF0ZSB0aGUgd2lkdGggb2YgdGhlIGVuY29kaW5nXG5cdFx0dmFyIHRleHRXaWR0aDtcblx0XHRpZiAob3B0aW9ucy5kaXNwbGF5VmFsdWUpIHtcblx0XHRcdHRleHRXaWR0aCA9IG1lc3N1cmVUZXh0KGVuY29kaW5nLnRleHQsIG9wdGlvbnMsIGNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0ZXh0V2lkdGggPSAwO1xuXHRcdH1cblxuXHRcdHZhciBiYXJjb2RlV2lkdGggPSBlbmNvZGluZy5kYXRhLmxlbmd0aCAqIG9wdGlvbnMud2lkdGg7XG5cdFx0ZW5jb2Rpbmcud2lkdGggPSBNYXRoLmNlaWwoTWF0aC5tYXgodGV4dFdpZHRoLCBiYXJjb2RlV2lkdGgpKTtcblxuXHRcdGVuY29kaW5nLmhlaWdodCA9IGdldEVuY29kaW5nSGVpZ2h0KGVuY29kaW5nLCBvcHRpb25zKTtcblxuXHRcdGVuY29kaW5nLmJhcmNvZGVQYWRkaW5nID0gZ2V0QmFyY29kZVBhZGRpbmcodGV4dFdpZHRoLCBiYXJjb2RlV2lkdGgsIG9wdGlvbnMpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdldFRvdGFsV2lkdGhPZkVuY29kaW5ncyhlbmNvZGluZ3MpIHtcblx0dmFyIHRvdGFsV2lkdGggPSAwO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGVuY29kaW5ncy5sZW5ndGg7IGkrKykge1xuXHRcdHRvdGFsV2lkdGggKz0gZW5jb2RpbmdzW2ldLndpZHRoO1xuXHR9XG5cdHJldHVybiB0b3RhbFdpZHRoO1xufVxuXG5mdW5jdGlvbiBnZXRNYXhpbXVtSGVpZ2h0T2ZFbmNvZGluZ3MoZW5jb2RpbmdzKSB7XG5cdHZhciBtYXhIZWlnaHQgPSAwO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGVuY29kaW5ncy5sZW5ndGg7IGkrKykge1xuXHRcdGlmIChlbmNvZGluZ3NbaV0uaGVpZ2h0ID4gbWF4SGVpZ2h0KSB7XG5cdFx0XHRtYXhIZWlnaHQgPSBlbmNvZGluZ3NbaV0uaGVpZ2h0O1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbWF4SGVpZ2h0O1xufVxuXG5mdW5jdGlvbiBtZXNzdXJlVGV4dChzdHJpbmcsIG9wdGlvbnMsIGNvbnRleHQpIHtcblx0dmFyIGN0eDtcblxuXHRpZiAoY29udGV4dCkge1xuXHRcdGN0eCA9IGNvbnRleHQ7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0Y3R4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKS5nZXRDb250ZXh0KFwiMmRcIik7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gSWYgdGhlIHRleHQgY2Fubm90IGJlIG1lc3N1cmVkIHdlIHdpbGwgcmV0dXJuIDAuXG5cdFx0Ly8gVGhpcyB3aWxsIG1ha2Ugc29tZSBiYXJjb2RlIHdpdGggYmlnIHRleHQgcmVuZGVyIGluY29ycmVjdGx5XG5cdFx0cmV0dXJuIDA7XG5cdH1cblx0Y3R4LmZvbnQgPSBvcHRpb25zLmZvbnRPcHRpb25zICsgXCIgXCIgKyBvcHRpb25zLmZvbnRTaXplICsgXCJweCBcIiArIG9wdGlvbnMuZm9udDtcblxuXHQvLyBDYWxjdWxhdGUgdGhlIHdpZHRoIG9mIHRoZSBlbmNvZGluZ1xuXHR2YXIgbWVhc3VyZVRleHRSZXN1bHQgPSBjdHgubWVhc3VyZVRleHQoc3RyaW5nKTtcblx0aWYgKCFtZWFzdXJlVGV4dFJlc3VsdCkge1xuXHRcdC8vIFNvbWUgaW1wbGVtZW50YXRpb25zIGRvbid0IGltcGxlbWVudCBtZWFzdXJlVGV4dCBhbmQgcmV0dXJuIHVuZGVmaW5lZC5cblx0XHQvLyBJZiB0aGUgdGV4dCBjYW5ub3QgYmUgbWVhc3VyZWQgd2Ugd2lsbCByZXR1cm4gMC5cblx0XHQvLyBUaGlzIHdpbGwgbWFrZSBzb21lIGJhcmNvZGUgd2l0aCBiaWcgdGV4dCByZW5kZXIgaW5jb3JyZWN0bHlcblx0XHRyZXR1cm4gMDtcblx0fVxuXHR2YXIgc2l6ZSA9IG1lYXN1cmVUZXh0UmVzdWx0LndpZHRoO1xuXHRyZXR1cm4gc2l6ZTtcbn1cblxuZXhwb3J0cy5nZXRNYXhpbXVtSGVpZ2h0T2ZFbmNvZGluZ3MgPSBnZXRNYXhpbXVtSGVpZ2h0T2ZFbmNvZGluZ3M7XG5leHBvcnRzLmdldEVuY29kaW5nSGVpZ2h0ID0gZ2V0RW5jb2RpbmdIZWlnaHQ7XG5leHBvcnRzLmdldEJhcmNvZGVQYWRkaW5nID0gZ2V0QmFyY29kZVBhZGRpbmc7XG5leHBvcnRzLmNhbGN1bGF0ZUVuY29kaW5nQXR0cmlidXRlcyA9IGNhbGN1bGF0ZUVuY29kaW5nQXR0cmlidXRlcztcbmV4cG9ydHMuZ2V0VG90YWxXaWR0aE9mRW5jb2RpbmdzID0gZ2V0VG90YWxXaWR0aE9mRW5jb2RpbmdzOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX21lcmdlID0gcmVxdWlyZShcIi4uL2hlbHAvbWVyZ2UuanNcIik7XG5cbnZhciBfbWVyZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWVyZ2UpO1xuXG52YXIgX3NoYXJlZCA9IHJlcXVpcmUoXCIuL3NoYXJlZC5qc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIHN2Z25zID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuXG52YXIgU1ZHUmVuZGVyZXIgPSBmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIFNWR1JlbmRlcmVyKHN2ZywgZW5jb2RpbmdzLCBvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNWR1JlbmRlcmVyKTtcblxuXHRcdHRoaXMuc3ZnID0gc3ZnO1xuXHRcdHRoaXMuZW5jb2RpbmdzID0gZW5jb2RpbmdzO1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0dGhpcy5kb2N1bWVudCA9IG9wdGlvbnMueG1sRG9jdW1lbnQgfHwgZG9jdW1lbnQ7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoU1ZHUmVuZGVyZXIsIFt7XG5cdFx0a2V5OiBcInJlbmRlclwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0XHR2YXIgY3VycmVudFggPSB0aGlzLm9wdGlvbnMubWFyZ2luTGVmdDtcblxuXHRcdFx0dGhpcy5wcmVwYXJlU1ZHKCk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZW5jb2RpbmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBlbmNvZGluZyA9IHRoaXMuZW5jb2RpbmdzW2ldO1xuXHRcdFx0XHR2YXIgZW5jb2RpbmdPcHRpb25zID0gKDAsIF9tZXJnZTIuZGVmYXVsdCkodGhpcy5vcHRpb25zLCBlbmNvZGluZy5vcHRpb25zKTtcblxuXHRcdFx0XHR2YXIgZ3JvdXAgPSB0aGlzLmNyZWF0ZUdyb3VwKGN1cnJlbnRYLCBlbmNvZGluZ09wdGlvbnMubWFyZ2luVG9wLCB0aGlzLnN2Zyk7XG5cblx0XHRcdFx0dGhpcy5zZXRHcm91cE9wdGlvbnMoZ3JvdXAsIGVuY29kaW5nT3B0aW9ucyk7XG5cblx0XHRcdFx0dGhpcy5kcmF3U3ZnQmFyY29kZShncm91cCwgZW5jb2RpbmdPcHRpb25zLCBlbmNvZGluZyk7XG5cdFx0XHRcdHRoaXMuZHJhd1NWR1RleHQoZ3JvdXAsIGVuY29kaW5nT3B0aW9ucywgZW5jb2RpbmcpO1xuXG5cdFx0XHRcdGN1cnJlbnRYICs9IGVuY29kaW5nLndpZHRoO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJwcmVwYXJlU1ZHXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHByZXBhcmVTVkcoKSB7XG5cdFx0XHQvLyBDbGVhciB0aGUgU1ZHXG5cdFx0XHR3aGlsZSAodGhpcy5zdmcuZmlyc3RDaGlsZCkge1xuXHRcdFx0XHR0aGlzLnN2Zy5yZW1vdmVDaGlsZCh0aGlzLnN2Zy5maXJzdENoaWxkKTtcblx0XHRcdH1cblxuXHRcdFx0KDAsIF9zaGFyZWQuY2FsY3VsYXRlRW5jb2RpbmdBdHRyaWJ1dGVzKSh0aGlzLmVuY29kaW5ncywgdGhpcy5vcHRpb25zKTtcblx0XHRcdHZhciB0b3RhbFdpZHRoID0gKDAsIF9zaGFyZWQuZ2V0VG90YWxXaWR0aE9mRW5jb2RpbmdzKSh0aGlzLmVuY29kaW5ncyk7XG5cdFx0XHR2YXIgbWF4SGVpZ2h0ID0gKDAsIF9zaGFyZWQuZ2V0TWF4aW11bUhlaWdodE9mRW5jb2RpbmdzKSh0aGlzLmVuY29kaW5ncyk7XG5cblx0XHRcdHZhciB3aWR0aCA9IHRvdGFsV2lkdGggKyB0aGlzLm9wdGlvbnMubWFyZ2luTGVmdCArIHRoaXMub3B0aW9ucy5tYXJnaW5SaWdodDtcblx0XHRcdHRoaXMuc2V0U3ZnQXR0cmlidXRlcyh3aWR0aCwgbWF4SGVpZ2h0KTtcblxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kKSB7XG5cdFx0XHRcdHRoaXMuZHJhd1JlY3QoMCwgMCwgd2lkdGgsIG1heEhlaWdodCwgdGhpcy5zdmcpLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZmlsbDpcIiArIHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kICsgXCI7XCIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJkcmF3U3ZnQmFyY29kZVwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBkcmF3U3ZnQmFyY29kZShwYXJlbnQsIG9wdGlvbnMsIGVuY29kaW5nKSB7XG5cdFx0XHR2YXIgYmluYXJ5ID0gZW5jb2RpbmcuZGF0YTtcblxuXHRcdFx0Ly8gQ3JlYXRlcyB0aGUgYmFyY29kZSBvdXQgb2YgdGhlIGVuY29kZWQgYmluYXJ5XG5cdFx0XHR2YXIgeUZyb207XG5cdFx0XHRpZiAob3B0aW9ucy50ZXh0UG9zaXRpb24gPT0gXCJ0b3BcIikge1xuXHRcdFx0XHR5RnJvbSA9IG9wdGlvbnMuZm9udFNpemUgKyBvcHRpb25zLnRleHRNYXJnaW47XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR5RnJvbSA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBiYXJXaWR0aCA9IDA7XG5cdFx0XHR2YXIgeCA9IDA7XG5cdFx0XHRmb3IgKHZhciBiID0gMDsgYiA8IGJpbmFyeS5sZW5ndGg7IGIrKykge1xuXHRcdFx0XHR4ID0gYiAqIG9wdGlvbnMud2lkdGggKyBlbmNvZGluZy5iYXJjb2RlUGFkZGluZztcblxuXHRcdFx0XHRpZiAoYmluYXJ5W2JdID09PSBcIjFcIikge1xuXHRcdFx0XHRcdGJhcldpZHRoKys7XG5cdFx0XHRcdH0gZWxzZSBpZiAoYmFyV2lkdGggPiAwKSB7XG5cdFx0XHRcdFx0dGhpcy5kcmF3UmVjdCh4IC0gb3B0aW9ucy53aWR0aCAqIGJhcldpZHRoLCB5RnJvbSwgb3B0aW9ucy53aWR0aCAqIGJhcldpZHRoLCBvcHRpb25zLmhlaWdodCwgcGFyZW50KTtcblx0XHRcdFx0XHRiYXJXaWR0aCA9IDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gTGFzdCBkcmF3IGlzIG5lZWRlZCBzaW5jZSB0aGUgYmFyY29kZSBlbmRzIHdpdGggMVxuXHRcdFx0aWYgKGJhcldpZHRoID4gMCkge1xuXHRcdFx0XHR0aGlzLmRyYXdSZWN0KHggLSBvcHRpb25zLndpZHRoICogKGJhcldpZHRoIC0gMSksIHlGcm9tLCBvcHRpb25zLndpZHRoICogYmFyV2lkdGgsIG9wdGlvbnMuaGVpZ2h0LCBwYXJlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJkcmF3U1ZHVGV4dFwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBkcmF3U1ZHVGV4dChwYXJlbnQsIG9wdGlvbnMsIGVuY29kaW5nKSB7XG5cdFx0XHR2YXIgdGV4dEVsZW0gPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmducywgJ3RleHQnKTtcblxuXHRcdFx0Ly8gRHJhdyB0aGUgdGV4dCBpZiBkaXNwbGF5VmFsdWUgaXMgc2V0XG5cdFx0XHRpZiAob3B0aW9ucy5kaXNwbGF5VmFsdWUpIHtcblx0XHRcdFx0dmFyIHgsIHk7XG5cblx0XHRcdFx0dGV4dEVsZW0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJmb250OlwiICsgb3B0aW9ucy5mb250T3B0aW9ucyArIFwiIFwiICsgb3B0aW9ucy5mb250U2l6ZSArIFwicHggXCIgKyBvcHRpb25zLmZvbnQpO1xuXG5cdFx0XHRcdGlmIChvcHRpb25zLnRleHRQb3NpdGlvbiA9PSBcInRvcFwiKSB7XG5cdFx0XHRcdFx0eSA9IG9wdGlvbnMuZm9udFNpemUgLSBvcHRpb25zLnRleHRNYXJnaW47XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0eSA9IG9wdGlvbnMuaGVpZ2h0ICsgb3B0aW9ucy50ZXh0TWFyZ2luICsgb3B0aW9ucy5mb250U2l6ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIERyYXcgdGhlIHRleHQgaW4gdGhlIGNvcnJlY3QgWCBkZXBlbmRpbmcgb24gdGhlIHRleHRBbGlnbiBvcHRpb25cblx0XHRcdFx0aWYgKG9wdGlvbnMudGV4dEFsaWduID09IFwibGVmdFwiIHx8IGVuY29kaW5nLmJhcmNvZGVQYWRkaW5nID4gMCkge1xuXHRcdFx0XHRcdHggPSAwO1xuXHRcdFx0XHRcdHRleHRFbGVtLnNldEF0dHJpYnV0ZShcInRleHQtYW5jaG9yXCIsIFwic3RhcnRcIik7XG5cdFx0XHRcdH0gZWxzZSBpZiAob3B0aW9ucy50ZXh0QWxpZ24gPT0gXCJyaWdodFwiKSB7XG5cdFx0XHRcdFx0eCA9IGVuY29kaW5nLndpZHRoIC0gMTtcblx0XHRcdFx0XHR0ZXh0RWxlbS5zZXRBdHRyaWJ1dGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBJbiBhbGwgb3RoZXIgY2FzZXMsIGNlbnRlciB0aGUgdGV4dFxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdHggPSBlbmNvZGluZy53aWR0aCAvIDI7XG5cdFx0XHRcdFx0XHR0ZXh0RWxlbS5zZXRBdHRyaWJ1dGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0dGV4dEVsZW0uc2V0QXR0cmlidXRlKFwieFwiLCB4KTtcblx0XHRcdFx0dGV4dEVsZW0uc2V0QXR0cmlidXRlKFwieVwiLCB5KTtcblxuXHRcdFx0XHR0ZXh0RWxlbS5hcHBlbmRDaGlsZCh0aGlzLmRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGVuY29kaW5nLnRleHQpKTtcblxuXHRcdFx0XHRwYXJlbnQuYXBwZW5kQ2hpbGQodGV4dEVsZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJzZXRTdmdBdHRyaWJ1dGVzXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHNldFN2Z0F0dHJpYnV0ZXMod2lkdGgsIGhlaWdodCkge1xuXHRcdFx0dmFyIHN2ZyA9IHRoaXMuc3ZnO1xuXHRcdFx0c3ZnLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHdpZHRoICsgXCJweFwiKTtcblx0XHRcdHN2Zy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgaGVpZ2h0ICsgXCJweFwiKTtcblx0XHRcdHN2Zy5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFwiMHB4XCIpO1xuXHRcdFx0c3ZnLnNldEF0dHJpYnV0ZShcInlcIiwgXCIwcHhcIik7XG5cdFx0XHRzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCBcIiArIHdpZHRoICsgXCIgXCIgKyBoZWlnaHQpO1xuXG5cdFx0XHRzdmcuc2V0QXR0cmlidXRlKFwieG1sbnNcIiwgc3ZnbnMpO1xuXHRcdFx0c3ZnLnNldEF0dHJpYnV0ZShcInZlcnNpb25cIiwgXCIxLjFcIik7XG5cblx0XHRcdHN2Zy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMClcIik7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcImNyZWF0ZUdyb3VwXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUdyb3VwKHgsIHksIHBhcmVudCkge1xuXHRcdFx0dmFyIGdyb3VwID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnbnMsICdnJyk7XG5cdFx0XHRncm91cC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsIFwiICsgeSArIFwiKVwiKTtcblxuXHRcdFx0cGFyZW50LmFwcGVuZENoaWxkKGdyb3VwKTtcblxuXHRcdFx0cmV0dXJuIGdyb3VwO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJzZXRHcm91cE9wdGlvbnNcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gc2V0R3JvdXBPcHRpb25zKGdyb3VwLCBvcHRpb25zKSB7XG5cdFx0XHRncm91cC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImZpbGw6XCIgKyBvcHRpb25zLmxpbmVDb2xvciArIFwiO1wiKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwiZHJhd1JlY3RcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZHJhd1JlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCwgcGFyZW50KSB7XG5cdFx0XHR2YXIgcmVjdCA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z25zLCAncmVjdCcpO1xuXG5cdFx0XHRyZWN0LnNldEF0dHJpYnV0ZShcInhcIiwgeCk7XG5cdFx0XHRyZWN0LnNldEF0dHJpYnV0ZShcInlcIiwgeSk7XG5cdFx0XHRyZWN0LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHdpZHRoKTtcblx0XHRcdHJlY3Quc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGhlaWdodCk7XG5cblx0XHRcdHBhcmVudC5hcHBlbmRDaGlsZChyZWN0KTtcblxuXHRcdFx0cmV0dXJuIHJlY3Q7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIFNWR1JlbmRlcmVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBTVkdSZW5kZXJlcjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG52YXIgZ2V0UmFuZG9tVmFsdWVzO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uIEFsc28sXG4gICAgLy8gZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIChtc0NyeXB0bykgb24gSUUxMS5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pIHx8IHR5cGVvZiBtc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG52YXIgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKSk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIpIHtcbiAgdmFyIG9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHZhciB1dWlkID0gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgQ29udGVudCBmcm9tIFwiLi9jb21wb25lbnRzL0NvbnRlbnQvQ29udGVudFwiO1xuaW1wb3J0IHsgYXBwbHlJbml0aWFsU3RhdGUgfSBmcm9tIFwiLi9wYWdlLWxvZ2ljL3VpL3VpLWluaXRpYWwtc3RhdGVcIjtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChDb250ZW50KCkpO1xuXG5hcHBseUluaXRpYWxTdGF0ZSgpO1xuXG4vLyBkZWJ1Z2dpbmdcbmNvbnN0IGRlYnVnZ2luZyA9IHRydWU7XG5pZiAoZGVidWdnaW5nKSB7XG4gIC8vXG59XG4iXSwibmFtZXMiOlsiRGl2IiwiSW1nIiwiU3ZnIiwiY29weUJhcmNvZGUiLCJoYW5kbGVDbGljayIsIkJhcmNvZGUiLCJwYXJlbnRFbGVtZW50IiwiaW5uZXJUZXh0IiwiY2xhc3NOYW1lIiwib25jbGljayIsImlkIiwiZGVib3VuY2UiLCJzZXRJbnB1dFZhbHVlIiwiTGFiZWwiLCJJbnB1dCIsIlNlbGVjdCIsIk9wdGlvbiIsInY0IiwidXVpZHY0IiwiZ2VuZXJhdGVCYXJjb2RlIiwiZ2V0QmFyY29kZVByaW1hcnlDb2xvcklucHV0IiwiZ2V0QmFyY29kZVByaW1hcnlDb2xvclByZXNldCIsImdldEJhcmNvZGVTZWNvbmRhcnlDb2xvcklucHV0IiwiZ2V0QmFyY29kZVNlY29uZGFyeUNvbG9yUHJlc2V0IiwiYmFyY29kZUNvbmZpZyIsImhhbmRsZVByaW1hcnlDb2xvcklucHV0IiwicHJlc2V0Iiwic2VsZWN0ZWQiLCJoYW5kbGVTZWNvbmRhcnlDb2xvcklucHV0IiwiaGFuZGxlUHJpbWFyeUNvbG9yUHJlc2V0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU2Vjb25kYXJ5Q29sb3JQcmVzZXQiLCJiYXJjb2RlUHJpbWFyeUNvbG9ySW5wdXRJZCIsImJhcmNvZGVTZWNvbmRhcnlDb2xvcklucHV0SWQiLCJwcmVzZXRPcHRpb25zIiwibmFtZSIsIkJhcmNvZGVQcmltYXJ5Q29sb3JJbnB1dCIsImlubmVySFRNTCIsImZvciIsInR5cGUiLCJwcmltYXJ5Q29sb3IiLCJzdGFydGluZyIsIm9uaW5wdXQiLCJtYXAiLCJvIiwidW5kZWZpbmVkIiwiQmFyY29kZVNlY29uZGFyeUNvbG9ySW5wdXQiLCJzZWNvbmRhcnlDb2xvciIsImhhbmRsZUlucHV0IiwiaXNDaGVja2VkIiwiY2hlY2tlZCIsImNvbnNvbGUiLCJsb2ciLCJjb3B5TWVzc2FnZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImNsaWNrVG9Db3B5SWQiLCJCYXJjb2RlRW5hYmxlQ2xpY2tUb0NvcHkiLCJiYXJjb2RlRm9udERpc3BsYXlJbnB1dElkIiwiQmFyY29kZUZvbnREaXNwbGF5SW5wdXQiLCJmb250RGlzcGxheSIsImJhcmNvZGVGb250U2l6ZUlucHV0SWQiLCJCYXJjb2RlRm9udFNpemVJbnB1dCIsIm1pbiIsImZvbnRTaXplIiwibWF4Iiwic3RlcCIsIkZvcm0iLCJCYXJjb2RlVGV4dElucHV0IiwiQmFyY29kZVdpZHRoSW5wdXQiLCJCYXJjb2RlSGVpZ2h0SW5wdXQiLCJCYXJjb2RlRm9ybSIsIkdlbmVyYXRlQnV0dG9uIiwiQmFyY29kZUdlbmVyYXRvciIsIlNwYW4iLCJiYXJjb2RlSGVpZ2h0SW5wdXRJZCIsImJhcmNvZGVIZWlnaHREaXNwbGF5SWQiLCJoZWlnaHQiLCJoYW5kbGVDaGFuZ2UiLCJiYXJjb2RlVGV4dElucHV0SWQiLCJ0ZXh0SW5wdXQiLCJiYXJjb2RlV2lkdGhJbnB1dElkIiwib3B0aW9ucyIsImdldElucHV0VmFsdWUiLCJCdXR0b24iLCJnZXRCYXJjb2RlVGV4dElucHV0Iiwid2lkdGgiLCJtYXJnaW4iLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJKc0JhcmNvZGUiLCJ1cGRhdGVDb3B5TWVzc2FnZSIsImNvbnRlbnQiLCJnZXRCYXJjb2RlV2lkdGhJbnB1dCIsImdldEJhcmNvZGVIZWlnaHRJbnB1dCIsImdldEJhcmNvZGVGb250U2l6ZUlucHV0IiwiZGlzcGxheVZhbHVlIiwiZ2V0QmFyY29kZUZvbnREaXNwbGF5SW5wdXQiLCJsaW5lQ29sb3IiLCJiYWNrZ3JvdW5kIiwiZm9udCIsIm1hcmdpbkJvdHRvbSIsInNyYyIsImJhcmNvZGUiLCJkYXRhIiwiZmV0Y2giLCJibG9iIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGUiLCJDbGlwYm9hcmRJdGVtIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb3B5QmFyY29kZU1lc3NhZ2UiLCJtZXNzYWdlIiwic2V0VGltZW91dCIsIkVsZW1lbnQiLCJIZWFkZXIiLCJEeW5hbWljRm9vdGVyIiwiTWFpblNlY3Rpb24iLCJDb250ZW50IiwiQSIsIkljb24iLCJnaXRodWJJbmZvIiwiZHluYW1pY1llYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJDb3B5cmlnaHRDb250YWluZXIiLCJocmVmIiwicmVwb05hbWUiLCJGb290ZXIiLCJBdHRyaWJ1dGlvbnNDb250YWluZXIiLCJUT1BDb250YWluZXIiLCJFeHBhbmRhYmxlUGFuZWwiLCJOb25FeHBhbmRhYmxlUGFuZWwiLCJJY29uc0V4cGxhbmF0aW9uIiwiY29udGFpbmVyIiwidGl0bGUiLCJjaGlsZHJlbiIsIm91dGVySFRNTCIsInBhcmVudENvbnRhaW5lciIsImgxIiwib3RoZXJDbGFzc2VzIiwiaGVhZGVyIiwiZ2VuZXJhdGVUZXN0Q29udGVudEFyciIsIk1haW4iLCJtYWluIiwiRXhwYW5kYWJsZVBhbmVsVGl0bGUiLCJFeHBhbmRhYmxlUGFuZWxDb250ZW50IiwicHJvcHMiLCJjb21wb25lbnRJZCIsInBhbmVsIiwidG9nZ2xlRXhwYW5zaW9uIiwiZXhwYW5zaW9uQ29udGVudCIsInRvZ2dsZUV4cGFuc2lvbkJ1dHRvbiIsInRvZ2dsZSIsImljb25DbGFzcyIsImljb24iLCJnZXRBbGxDYXJvdXNlbFNsaWRlcyIsImNoaWxkTm9kZXMiLCJnZXRBbGxDYXJvdXNlbFNsaWRlSWRzIiwiZWxlbSIsImdldEFsbENhcm91c2VsTmF2QnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnZXRDdXJyZW50U2xpZGVJbmRleCIsImFsbFNsaWRlSWRzIiwiY3VycmVudFNsaWRlSWQiLCJjdXJyZW50U2xpZGVJbmRleCIsImluZGV4T2YiLCJnZXRQcmV2aW91c1NsaWRlSW5kZXgiLCJwcmV2aW91c1NsaWRlSW5kZXgiLCJjb3JyZWN0ZWRJbmRleCIsImxlbmd0aCIsImdldE5leHRTbGlkZUluZGV4IiwibmV4dFNsaWRlSW5kZXgiLCJnb3RvU3BlY2lmaWNTbGlkZSIsImFsbE5hdkJ1dHRvbnMiLCJzZWxlY3RlZE5hdkJ1dHRvbiIsInNlbGVjdGVkU2xpZGUiLCJhbGxTbGlkZXMiLCJmb3JFYWNoIiwic2xpZGUiLCJjbGlja0Nhcm91c2VsTmF2IiwiY2xpY2tDYXJvdXNlbFJpZ2h0IiwicmVwbGFjZSIsImNsaWNrQ2Fyb3VzZWxMZWZ0IiwiY2xpY2tDYXJvdXNlbFBsYXkiLCJoYW5kbGVBdXRvQWR2YW5jZSIsInBsYXlCdXR0b24iLCJwYXVzZUJ1dHRvbiIsImNsaWNrQ2Fyb3VzZWxQYXVzZSIsImludGVydmFsIiwibW9kZSIsInBsYXlpbmciLCJ3aW5kb3ciLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJ0eXBlU3RyIiwicHJvcHNPYmoiLCJjaGlsZEFyciIsImFyZ3VtZW50cyIsInNldEF0dHJpYnV0ZVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwicHJvcGVydHkiLCJwdXNoIiwiT2JqZWN0IiwiYXNzaWduIiwiY3JlYXRlRWxlbWVudCIsIkFycmF5IiwiaXNBcnJheSIsImNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJzZXRBdHRyaWJ1dGUiLCJBcnRpY2xlIiwiQiIsIkJvZHkiLCJCciIsIkRhdGFsaXN0IiwiRmllbGRzZXQiLCJIMSIsIkgyIiwiSDMiLCJIciIsIkkiLCJMZWdlbmQiLCJMaSIsIk9sIiwiUCIsIlN0cm9uZyIsIlRleHRhcmVhIiwiVWwiLCJhcHBseVdpbmRvd0xpc3RlbmVycyIsImFwcGx5SW5pdGlhbFN0YXRlIiwidXBkYXRlQmFyY29kZVdpZHRoRGlzcGxheSIsImJyZWFrUG9pbnRzIiwieHMiLCJzbSIsIm1kIiwibGciLCJ4bCIsIm9ucmVzaXplIiwib25sb2FkIiwidHJ1bmNhdGVBbmRBZGRFbGxpcHNlIiwic3RyaW5nIiwibnVtQ2hhcnNUb0tlZXAiLCJzbGljZSIsInRyaW1FbmQiLCJmbiIsInRpbWVvdXQiLCJjb250ZXh0IiwiYXJncyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYXBwbHkiLCJjYXBpdGFsaXplIiwidG9VcHBlckNhc2UiLCJ0b0xvd2VyQ2FzZSIsIm51bUNoaWxkcmVuIiwiZmlsbCIsImdldFJhbmRvbUludCIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJyYW5kb20iLCJpbnB1dEVsZW1lbnQiLCJib2R5IiwiZGVidWdnaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==