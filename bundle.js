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
    innerText: `Primary color: `,
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
    innerText: `Secondary color: `,
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
      margin: 5,
      left: 0,
      right: 0,
      top: 0,
      bottom: 5
    }
  },
  textInput: {
    starting: "Enter barcode message"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ042QjtBQUNzQjtBQUNrQjtBQUVyRXVCLFFBQVEsQ0FBQ3VOLElBQUksQ0FBQ3RELFdBQVcsQ0FBQzNGLHVFQUFPLENBQUMsQ0FBQyxDQUFDO0FBRXBDZ0gsa0ZBQWlCLENBQUMsQ0FBQzs7QUFFbkI7QUFDQSxNQUFNa0MsU0FBUyxHQUFHLElBQUk7QUFDdEIsSUFBSUEsU0FBUyxFQUFFO0VBQ2I7QUFBQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9CYXJjb2RlR2VuZXJhdG9yL0JhcmNvZGUuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9CYXJjb2RlR2VuZXJhdG9yL0JhcmNvZGVDb2xvcklucHV0cy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0JhcmNvZGVHZW5lcmF0b3IvQmFyY29kZUVuYWJsZUNsaWNrVG9Db3B5LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQmFyY29kZUdlbmVyYXRvci9CYXJjb2RlRm9udERpc3BsYXlJbnB1dC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0JhcmNvZGVHZW5lcmF0b3IvQmFyY29kZUZvbnRTaXplSW5wdXQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9CYXJjb2RlR2VuZXJhdG9yL0JhcmNvZGVGb3JtLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQmFyY29kZUdlbmVyYXRvci9CYXJjb2RlR2VuZXJhdG9yLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQmFyY29kZUdlbmVyYXRvci9CYXJjb2RlSGVpZ2h0SW5wdXQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9CYXJjb2RlR2VuZXJhdG9yL0JhcmNvZGVUZXh0SW5wdXQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9CYXJjb2RlR2VuZXJhdG9yL0JhcmNvZGVXSWR0aElucHV0LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQmFyY29kZUdlbmVyYXRvci9HZW5lcmF0ZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0JhcmNvZGVHZW5lcmF0b3IvY29uZmlnLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQmFyY29kZUdlbmVyYXRvci9sb2dpYy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0JhcmNvZGVHZW5lcmF0b3IvdWkuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9Db250ZW50L0NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9EeW5hbWljRm9vdGVyL0NvcHlyaWdodENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0R5bmFtaWNGb290ZXIvRHluYW1pY0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0R5bmFtaWNGb290ZXIvU2l0ZUF0dHJpYnV0aW9ucy9BdHRyaWJ1dGlvbnNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9EeW5hbWljRm9vdGVyL1NpdGVBdHRyaWJ1dGlvbnMvSWNvbnNFeHBsYW5hdGlvbi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0R5bmFtaWNGb290ZXIvVE9QTGlua0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9NYWluU2VjdGlvbi9NYWluU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9FeHBhbmRhYmxlUGFuZWwvRXhwYW5kYWJsZVBhbmVsLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0V4cGFuZGFibGVQYW5lbC9FeHBhbmRhYmxlUGFuZWxDb250ZW50LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0V4cGFuZGFibGVQYW5lbC9FeHBhbmRhYmxlUGFuZWxUaXRsZS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9FeHBhbmRhYmxlUGFuZWwvTm9uRXhwYW5kYWJsZVBhbmVsLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0ljb24uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvSW1hZ2VDYXJvdXNlbC91aS9jYXJvdXNlbC11aS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19lbGVtZW50cy9FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9wYWdlLWxvZ2ljL2RhdGEvZGF0YS1wYWdlLWNvbmZpZy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9wYWdlLWxvZ2ljL3VpL3VpLWluaXRpYWwtc3RhdGUuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvcGFnZS1sb2dpYy91aS91aS13aW5kb3cuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9Kc0JhcmNvZGUuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9CYXJjb2RlLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvQ09ERTEyOC9DT0RFMTI4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvQ09ERTEyOC9DT0RFMTI4QS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL0NPREUxMjgvQ09ERTEyOEIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9DT0RFMTI4L0NPREUxMjhDLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvQ09ERTEyOC9DT0RFMTI4X0FVVE8uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9DT0RFMTI4L2F1dG8uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9DT0RFMTI4L2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL0NPREUxMjgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9DT0RFMzkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9FQU5fVVBDL0VBTi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL0VBTl9VUEMvRUFOMTMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9FQU5fVVBDL0VBTjIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9FQU5fVVBDL0VBTjUuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9FQU5fVVBDL0VBTjguanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9FQU5fVVBDL1VQQy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL0VBTl9VUEMvVVBDRS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL0VBTl9VUEMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvRUFOX1VQQy9lbmNvZGVyLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvRUFOX1VQQy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL0dlbmVyaWNCYXJjb2RlL2luZGV4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvSVRGL0lURi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL0lURi9JVEYxNC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL0lURi9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9JVEYvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9NU0kvTVNJLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvTVNJL01TSTEwLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvTVNJL01TSTEwMTAuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9NU0kvTVNJMTEuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9NU0kvTVNJMTExMC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2JhcmNvZGVzL01TSS9jaGVja3N1bXMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9NU0kvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9jb2RhYmFyL2luZGV4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vYmFyY29kZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9iYXJjb2Rlcy9waGFybWFjb2RlL2luZGV4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vZXhjZXB0aW9ucy9FcnJvckhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9leGNlcHRpb25zL2V4Y2VwdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9oZWxwL2ZpeE9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9oZWxwL2dldE9wdGlvbnNGcm9tRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2hlbHAvZ2V0UmVuZGVyUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2hlbHAvbGluZWFyaXplRW5jb2RpbmdzLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vaGVscC9tZXJnZS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL2hlbHAvb3B0aW9uc0Zyb21TdHJpbmdzLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vb3B0aW9ucy9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL3JlbmRlcmVycy9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9yZW5kZXJlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvanNiYXJjb2RlL2Jpbi9yZW5kZXJlcnMvb2JqZWN0LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2pzYmFyY29kZS9iaW4vcmVuZGVyZXJzL3NoYXJlZC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9qc2JhcmNvZGUvYmluL3JlbmRlcmVycy9zdmcuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYsIEltZyB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCB7IGNvcHlCYXJjb2RlIH0gZnJvbSBcIi4vbG9naWNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbmZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICBjb3B5QmFyY29kZSgpO1xufVxuXG5jb25zdCBCYXJjb2RlID0gKCkgPT4ge1xuICAvL1xuXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAge1xuICAgICAgaW5uZXJUZXh0OiBgYCxcbiAgICAgIGNsYXNzTmFtZTogYGJhcmNvZGUtY29udGFpbmVyYCxcbiAgICB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBEaXYoXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiY29weS1tZXNzYWdlLWNvbnRhaW5lclwiLFxuICAgICAgICAgIG9uY2xpY2soKSB7XG4gICAgICAgICAgICBoYW5kbGVDbGljaygpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtEaXYoeyBpbm5lclRleHQ6IFwiY29weSB0byBjbGlwYm9hcmRcIiB9KV1cbiAgICAgICksXG4gICAgICBJbWcoeyBpZDogXCJiYXJjb2RlXCIsIGNsYXNzTmFtZTogXCJiYXJjb2RlLWltYWdlXCIgfSksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhcmNvZGU7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgZGVib3VuY2UsIHNldElucHV0VmFsdWUgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IERpdiwgTGFiZWwsIElucHV0LCBTZWxlY3QsIE9wdGlvbiB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCB7XG4gIGdlbmVyYXRlQmFyY29kZSxcbiAgZ2V0QmFyY29kZVByaW1hcnlDb2xvcklucHV0LFxuICBnZXRCYXJjb2RlUHJpbWFyeUNvbG9yUHJlc2V0LFxuICBnZXRCYXJjb2RlU2Vjb25kYXJ5Q29sb3JJbnB1dCxcbiAgZ2V0QmFyY29kZVNlY29uZGFyeUNvbG9yUHJlc2V0LFxufSBmcm9tIFwiLi9sb2dpY1wiO1xuaW1wb3J0IHsgYmFyY29kZUNvbmZpZyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcblxuZnVuY3Rpb24gaGFuZGxlUHJpbWFyeUNvbG9ySW5wdXQoKSB7XG4gIGNvbnN0IHByZXNldCA9IGdldEJhcmNvZGVQcmltYXJ5Q29sb3JQcmVzZXQoKTtcbiAgcHJlc2V0LnNlbGVjdGVkID0gdHJ1ZTtcbiAgZGVib3VuY2UoZ2VuZXJhdGVCYXJjb2RlKCkpO1xufVxuZnVuY3Rpb24gaGFuZGxlU2Vjb25kYXJ5Q29sb3JJbnB1dCgpIHtcbiAgY29uc3QgcHJlc2V0ID0gZ2V0QmFyY29kZVNlY29uZGFyeUNvbG9yUHJlc2V0KCk7XG4gIHByZXNldC5zZWxlY3RlZCA9IHRydWU7XG4gIGRlYm91bmNlKGdlbmVyYXRlQmFyY29kZSgpKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUHJpbWFyeUNvbG9yUHJlc2V0KGUpIHtcbiAgc2V0SW5wdXRWYWx1ZShnZXRCYXJjb2RlUHJpbWFyeUNvbG9ySW5wdXQoKSwgZS50YXJnZXQudmFsdWUpO1xuICBkZWJvdW5jZShnZW5lcmF0ZUJhcmNvZGUoKSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVNlY29uZGFyeUNvbG9yUHJlc2V0KGUpIHtcbiAgc2V0SW5wdXRWYWx1ZShnZXRCYXJjb2RlU2Vjb25kYXJ5Q29sb3JJbnB1dCgpLCBlLnRhcmdldC52YWx1ZSk7XG4gIGRlYm91bmNlKGdlbmVyYXRlQmFyY29kZSgpKTtcbn1cblxuZXhwb3J0IGNvbnN0IGJhcmNvZGVQcmltYXJ5Q29sb3JJbnB1dElkID0gdXVpZHY0KCk7XG5leHBvcnQgY29uc3QgYmFyY29kZVNlY29uZGFyeUNvbG9ySW5wdXRJZCA9IHV1aWR2NDtcblxuY29uc3QgcHJlc2V0T3B0aW9ucyA9IFtcbiAgeyBuYW1lOiBcIlVNTiBHb2xkXCIsIHZhbHVlOiBcIiNGRkNDMzNcIiB9LFxuICB7IG5hbWU6IFwiVU1OIE1hcm9vblwiLCB2YWx1ZTogXCIjN0EwMDE5XCIgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBCYXJjb2RlUHJpbWFyeUNvbG9ySW5wdXQgPSAoKSA9PiB7XG4gIC8vXG5cbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdihcbiAgICB7IGlubmVyVGV4dDogYGAsIGNsYXNzTmFtZTogYHZlcnRpY2FsLXN0YWNrYCB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBMYWJlbCh7XG4gICAgICAgIGlubmVyVGV4dDogYFByaW1hcnkgY29sb3I6IGAsXG4gICAgICAgIGZvcjogYmFyY29kZVByaW1hcnlDb2xvcklucHV0SWQsXG4gICAgICB9KSxcbiAgICAgIElucHV0KHtcbiAgICAgICAgdHlwZTogXCJjb2xvclwiLFxuICAgICAgICBpZDogYmFyY29kZVByaW1hcnlDb2xvcklucHV0SWQsXG4gICAgICAgIHZhbHVlOiBiYXJjb2RlQ29uZmlnLnByaW1hcnlDb2xvci5zdGFydGluZyxcbiAgICAgICAgb25pbnB1dCgpIHtcbiAgICAgICAgICBoYW5kbGVQcmltYXJ5Q29sb3JJbnB1dCgpO1xuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBEaXYoe30sIFtcbiAgICAgICAgU2VsZWN0KFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG9uaW5wdXQoZSkge1xuICAgICAgICAgICAgICBoYW5kbGVQcmltYXJ5Q29sb3JQcmVzZXQoZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgT3B0aW9uKHtcbiAgICAgICAgICAgICAgaW5uZXJUZXh0OiBcIkRlZmF1bHRcIixcbiAgICAgICAgICAgICAgdmFsdWU6IGJhcmNvZGVDb25maWcucHJpbWFyeUNvbG9yLnN0YXJ0aW5nLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAuLi5wcmVzZXRPcHRpb25zLm1hcCgobykgPT5cbiAgICAgICAgICAgICAgT3B0aW9uKHsgaW5uZXJUZXh0OiBvLm5hbWUsIHZhbHVlOiBvLnZhbHVlIH0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgT3B0aW9uKHtcbiAgICAgICAgICAgICAgaW5uZXJUZXh0OiBcIkN1c3RvbVwiLFxuICAgICAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBpZDogYGN1c3RvbS1wcmVzZXQtJHtiYXJjb2RlUHJpbWFyeUNvbG9ySW5wdXRJZH1gLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBjb25zdCBCYXJjb2RlU2Vjb25kYXJ5Q29sb3JJbnB1dCA9ICgpID0+IHtcbiAgLy9cblxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRGl2KFxuICAgIHsgaW5uZXJUZXh0OiBgYCwgY2xhc3NOYW1lOiBgdmVydGljYWwtc3RhY2tgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIExhYmVsKHtcbiAgICAgICAgaW5uZXJUZXh0OiBgU2Vjb25kYXJ5IGNvbG9yOiBgLFxuICAgICAgICBmb3I6IGJhcmNvZGVTZWNvbmRhcnlDb2xvcklucHV0SWQsXG4gICAgICB9KSxcbiAgICAgIElucHV0KHtcbiAgICAgICAgdHlwZTogXCJjb2xvclwiLFxuICAgICAgICBpZDogYmFyY29kZVNlY29uZGFyeUNvbG9ySW5wdXRJZCxcbiAgICAgICAgdmFsdWU6IGJhcmNvZGVDb25maWcuc2Vjb25kYXJ5Q29sb3Iuc3RhcnRpbmcsXG4gICAgICAgIG9uaW5wdXQoKSB7XG4gICAgICAgICAgaGFuZGxlU2Vjb25kYXJ5Q29sb3JJbnB1dCgpO1xuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBEaXYoe30sIFtcbiAgICAgICAgU2VsZWN0KFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG9uaW5wdXQoZSkge1xuICAgICAgICAgICAgICBoYW5kbGVTZWNvbmRhcnlDb2xvclByZXNldChlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBPcHRpb24oe1xuICAgICAgICAgICAgICBpbm5lclRleHQ6IFwiRGVmYXVsdFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogYmFyY29kZUNvbmZpZy5zZWNvbmRhcnlDb2xvci5zdGFydGluZyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgLi4ucHJlc2V0T3B0aW9ucy5tYXAoKG8pID0+XG4gICAgICAgICAgICAgIE9wdGlvbih7IGlubmVyVGV4dDogby5uYW1lLCB2YWx1ZTogby52YWx1ZSB9KVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIE9wdGlvbih7XG4gICAgICAgICAgICAgIGlubmVyVGV4dDogXCJDdXN0b21cIixcbiAgICAgICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgaWQ6IGBjdXN0b20tcHJlc2V0LSR7YmFyY29kZVNlY29uZGFyeUNvbG9ySW5wdXRJZH1gLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRGl2LCBMYWJlbCwgSW5wdXQgfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbmZ1bmN0aW9uIGhhbmRsZUlucHV0KGUpIHtcbiAgY29uc3QgaXNDaGVja2VkID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgY29uc29sZS5sb2coaXNDaGVja2VkKTtcbiAgY29uc3QgY29weU1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvcHktbWVzc2FnZS1jb250YWluZXJcIik7XG4gIGNvbnNvbGUubG9nKGNvcHlNZXNzYWdlKTtcblxuICBpc0NoZWNrZWRcbiAgICA/IGNvcHlNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5LW5vbmVcIilcbiAgICA6IGNvcHlNZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LW5vbmVcIik7XG59XG5cbmV4cG9ydCBjb25zdCBjbGlja1RvQ29weUlkID0gdXVpZHY0KCk7XG5jb25zdCBCYXJjb2RlRW5hYmxlQ2xpY2tUb0NvcHkgPSAoKSA9PiB7XG4gIC8vXG5cbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdihcbiAgICB7IGlubmVyVGV4dDogYGAsIGNsYXNzTmFtZTogYGJhcmNvZGUtZW5hYmxlLWNsaWNrLXRvLWNvcHlgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIExhYmVsKHsgZm9yOiBjbGlja1RvQ29weUlkLCBpbm5lclRleHQ6IGBFbmFibGUgY2xpY2sgdG8gY29weWAgfSksXG4gICAgICBJbnB1dCh7XG4gICAgICAgIGlkOiBjbGlja1RvQ29weUlkLFxuICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgIGNoZWNrZWQ6IHRydWUsXG4gICAgICAgIG9uaW5wdXQoZSkge1xuICAgICAgICAgIGhhbmRsZUlucHV0KGUpO1xuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBEaXYoe1xuICAgICAgICBjbGFzc05hbWU6IFwic21hbGwtZm9udFwiLFxuICAgICAgICBpbm5lclRleHQ6IFwiKEZlYXR1cmUgb25seSB3b3JrcyBpbiBHb29nbGUgQ2hyb21lKVwiLFxuICAgICAgfSksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhcmNvZGVFbmFibGVDbGlja1RvQ29weTtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYsIElucHV0LCBMYWJlbCB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IGdlbmVyYXRlQmFyY29kZSB9IGZyb20gXCIuL2xvZ2ljXCI7XG5pbXBvcnQgeyBiYXJjb2RlQ29uZmlnIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG5cbmV4cG9ydCBjb25zdCBiYXJjb2RlRm9udERpc3BsYXlJbnB1dElkID0gdXVpZHY0KCk7XG5cbmZ1bmN0aW9uIGhhbmRsZUlucHV0KCkge1xuICBkZWJvdW5jZShnZW5lcmF0ZUJhcmNvZGUoKSk7XG59XG5cbmNvbnN0IEJhcmNvZGVGb250RGlzcGxheUlucHV0ID0gKCkgPT4ge1xuICAvL1xuXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoe30sIFtcbiAgICBMYWJlbCh7XG4gICAgICBmb3I6IGJhcmNvZGVGb250RGlzcGxheUlucHV0SWQsXG4gICAgICBpbm5lckhUTUw6IGBTaG93IHRleHQ6IGAsXG4gICAgfSksXG4gICAgSW5wdXQoXG4gICAgICB7XG4gICAgICAgIGlkOiBiYXJjb2RlRm9udERpc3BsYXlJbnB1dElkLFxuICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgIGlubmVyVGV4dDogYGAsXG4gICAgICAgIGNsYXNzTmFtZTogYGAsXG5cbiAgICAgICAgY2hlY2tlZDogYmFyY29kZUNvbmZpZy5mb250RGlzcGxheS5zdGFydGluZyxcbiAgICAgICAgb25pbnB1dCgpIHtcbiAgICAgICAgICBoYW5kbGVJbnB1dCgpO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICAgIFtdXG4gICAgKSxcbiAgXSk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFyY29kZUZvbnREaXNwbGF5SW5wdXQ7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRGl2LCBJbnB1dCwgTGFiZWwgfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZUJhcmNvZGUgfSBmcm9tIFwiLi9sb2dpY1wiO1xuaW1wb3J0IHsgYmFyY29kZUNvbmZpZyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuXG5leHBvcnQgY29uc3QgYmFyY29kZUZvbnRTaXplSW5wdXRJZCA9IHV1aWR2NCgpO1xuXG5mdW5jdGlvbiBoYW5kbGVJbnB1dCgpIHtcbiAgZGVib3VuY2UoZ2VuZXJhdGVCYXJjb2RlKCkpO1xufVxuXG5jb25zdCBCYXJjb2RlRm9udFNpemVJbnB1dCA9ICgpID0+IHtcbiAgLy9cblxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRGl2KHsgY2xhc3NOYW1lOiBgdmVydGljYWwtc3RhY2tgIH0sIFtcbiAgICBMYWJlbCh7XG4gICAgICBmb3I6IGJhcmNvZGVGb250U2l6ZUlucHV0SWQsXG4gICAgICBpbm5lckhUTUw6IGBGb250IHNpemU6IGAsXG4gICAgfSksXG4gICAgSW5wdXQoXG4gICAgICB7XG4gICAgICAgIGlkOiBiYXJjb2RlRm9udFNpemVJbnB1dElkLFxuICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICBpbm5lclRleHQ6IGBgLFxuICAgICAgICBjbGFzc05hbWU6IGBgLFxuICAgICAgICBtaW46IGJhcmNvZGVDb25maWcuZm9udFNpemUubWluLFxuICAgICAgICBtYXg6IGJhcmNvZGVDb25maWcuZm9udFNpemUubWF4LFxuICAgICAgICBzdGVwOiBiYXJjb2RlQ29uZmlnLmZvbnRTaXplLnN0ZXAsXG4gICAgICAgIHZhbHVlOiBiYXJjb2RlQ29uZmlnLmZvbnRTaXplLnN0YXJ0aW5nLFxuICAgICAgICBvbmlucHV0KCkge1xuICAgICAgICAgIGhhbmRsZUlucHV0KCk7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgICAgW11cbiAgICApLFxuICBdKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXJjb2RlRm9udFNpemVJbnB1dDtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBGb3JtLCBEaXYgfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbmltcG9ydCBCYXJjb2RlVGV4dElucHV0IGZyb20gXCIuL0JhcmNvZGVUZXh0SW5wdXRcIjtcbmltcG9ydCBCYXJjb2RlV2lkdGhJbnB1dCBmcm9tIFwiLi9CYXJjb2RlV0lkdGhJbnB1dFwiO1xuaW1wb3J0IEJhcmNvZGVIZWlnaHRJbnB1dCBmcm9tIFwiLi9CYXJjb2RlSGVpZ2h0SW5wdXRcIjtcbmltcG9ydCBCYXJjb2RlRm9udFNpemVJbnB1dCBmcm9tIFwiLi9CYXJjb2RlRm9udFNpemVJbnB1dFwiO1xuaW1wb3J0IEJhcmNvZGVGb250RGlzcGxheUlucHV0IGZyb20gXCIuL0JhcmNvZGVGb250RGlzcGxheUlucHV0XCI7XG5pbXBvcnQge1xuICBCYXJjb2RlUHJpbWFyeUNvbG9ySW5wdXQsXG4gIEJhcmNvZGVTZWNvbmRhcnlDb2xvcklucHV0LFxufSBmcm9tIFwiLi9CYXJjb2RlQ29sb3JJbnB1dHNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcblxuY29uc3QgQmFyY29kZUZvcm0gPSAoKSA9PiB7XG4gIC8vXG5cbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IEZvcm0oXG4gICAge1xuICAgICAgaW5uZXJUZXh0OiBgYCxcbiAgICAgIGNsYXNzTmFtZTogYGJhcmNvZGUtZm9ybSBgLFxuICAgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIERpdih7IGNsYXNzTmFtZTogXCJmb3JtLXJvdy0yLWF1dG9cIiB9LCBbXG4gICAgICAgIEJhcmNvZGVUZXh0SW5wdXQoKSxcbiAgICAgICAgQmFyY29kZUZvbnREaXNwbGF5SW5wdXQoKSxcbiAgICAgIF0pLFxuICAgICAgRGl2KHsgY2xhc3NOYW1lOiBcImZvcm0tcm93LTNcIiB9LCBbXG4gICAgICAgIEJhcmNvZGVXaWR0aElucHV0KCksXG4gICAgICAgIEJhcmNvZGVIZWlnaHRJbnB1dCgpLFxuICAgICAgICBCYXJjb2RlRm9udFNpemVJbnB1dCgpLFxuICAgICAgXSksXG4gICAgICBEaXYoeyBjbGFzc05hbWU6IFwiZm9ybS1yb3ctMlwiIH0sIFtcbiAgICAgICAgQmFyY29kZVByaW1hcnlDb2xvcklucHV0KCksXG4gICAgICAgIEJhcmNvZGVTZWNvbmRhcnlDb2xvcklucHV0KCksXG4gICAgICBdKSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFyY29kZUZvcm07XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRGl2IH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IEJhcmNvZGUgZnJvbSBcIi4vQmFyY29kZVwiO1xuaW1wb3J0IEJhcmNvZGVFbmFibGVDbGlja1RvQ29weSBmcm9tIFwiLi9CYXJjb2RlRW5hYmxlQ2xpY2tUb0NvcHlcIjtcbmltcG9ydCBCYXJjb2RlRm9ybSBmcm9tIFwiLi9CYXJjb2RlRm9ybVwiO1xuXG5pbXBvcnQgR2VuZXJhdGVCdXR0b24gZnJvbSBcIi4vR2VuZXJhdGVCdXR0b25cIjtcbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBCYXJjb2RlR2VuZXJhdG9yID0gKCkgPT4ge1xuICAvL1xuXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAgeyBpbm5lclRleHQ6IGBgLCBjbGFzc05hbWU6IGBiYXJjb2RlLWdlbmVyYXRvcmAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgQmFyY29kZUZvcm0oKSxcbiAgICAgIERpdih7IGNsYXNzTmFtZTogXCJiYXJjb2RlLXNlY3Rpb25cIiB9LCBbXG4gICAgICAgIEJhcmNvZGUoKSxcbiAgICAgICAgRGl2KHt9LCBbQmFyY29kZUVuYWJsZUNsaWNrVG9Db3B5KCldKSxcbiAgICAgIF0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXJjb2RlR2VuZXJhdG9yO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IERpdiwgSW5wdXQsIExhYmVsLCBTcGFuIH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVCYXJjb2RlIH0gZnJvbSBcIi4vbG9naWNcIjtcbmltcG9ydCB7IGJhcmNvZGVDb25maWcgfSBmcm9tIFwiLi9jb25maWdcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcblxuZXhwb3J0IGNvbnN0IGJhcmNvZGVIZWlnaHRJbnB1dElkID0gdXVpZHY0KCk7XG5leHBvcnQgY29uc3QgYmFyY29kZUhlaWdodERpc3BsYXlJZCA9IGBiYXJjb2RlLWhlaWdodC1kaXNwbGF5LSR7YmFyY29kZUhlaWdodElucHV0SWR9YDtcblxuZnVuY3Rpb24gaGFuZGxlSW5wdXQoKSB7XG4gIGRlYm91bmNlKGdlbmVyYXRlQmFyY29kZSgpKTtcbn1cblxuY29uc3QgQmFyY29kZUhlaWdodElucHV0ID0gKCkgPT4ge1xuICAvL1xuXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoeyBjbGFzc05hbWU6IGB2ZXJ0aWNhbC1zdGFja2AgfSwgW1xuICAgIExhYmVsKHtcbiAgICAgIGZvcjogYmFyY29kZUhlaWdodElucHV0SWQsXG4gICAgICBpbm5lckhUTUw6IGBIZWlnaHQ6IGAsXG4gICAgfSksXG4gICAgSW5wdXQoXG4gICAgICB7XG4gICAgICAgIGlkOiBiYXJjb2RlSGVpZ2h0SW5wdXRJZCxcbiAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgaW5uZXJUZXh0OiBgYCxcbiAgICAgICAgY2xhc3NOYW1lOiBgYCxcbiAgICAgICAgbWluOiBiYXJjb2RlQ29uZmlnLmhlaWdodC5taW4sXG4gICAgICAgIG1heDogYmFyY29kZUNvbmZpZy5oZWlnaHQubWF4LFxuICAgICAgICBzdGVwOiBiYXJjb2RlQ29uZmlnLmhlaWdodC5zdGVwLFxuICAgICAgICB2YWx1ZTogYmFyY29kZUNvbmZpZy5oZWlnaHQuc3RhcnRpbmcsXG4gICAgICAgIG9uaW5wdXQoKSB7XG4gICAgICAgICAgaGFuZGxlSW5wdXQoKTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgICBbXVxuICAgICksXG4gIF0pO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhcmNvZGVIZWlnaHRJbnB1dDtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYsIElucHV0IH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCB7IGdlbmVyYXRlQmFyY29kZSB9IGZyb20gXCIuL2xvZ2ljXCI7XG5pbXBvcnQgeyBiYXJjb2RlQ29uZmlnIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG5mdW5jdGlvbiBoYW5kbGVDaGFuZ2UoKSB7XG4gIGdlbmVyYXRlQmFyY29kZSgpO1xufVxuZXhwb3J0IGNvbnN0IGJhcmNvZGVUZXh0SW5wdXRJZCA9IHV1aWR2NCgpO1xuXG5jb25zdCBCYXJjb2RlVGV4dElucHV0ID0gKCkgPT4ge1xuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRGl2KFxuICAgIHtcbiAgICAgIGlubmVyVGV4dDogYGAsXG4gICAgICBjbGFzc05hbWU6IGBgLFxuICAgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIElucHV0KHtcbiAgICAgICAgaWQ6IGAke2JhcmNvZGVUZXh0SW5wdXRJZH1gLFxuICAgICAgICB2YWx1ZTogYmFyY29kZUNvbmZpZy50ZXh0SW5wdXQuc3RhcnRpbmcsXG4gICAgICAgIG9uaW5wdXQoKSB7XG4gICAgICAgICAgaGFuZGxlQ2hhbmdlKCk7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFyY29kZVRleHRJbnB1dDtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYsIExhYmVsLCBPcHRpb24sIFNlbGVjdCB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IGdlbmVyYXRlQmFyY29kZSB9IGZyb20gXCIuL2xvZ2ljXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG5cbmV4cG9ydCBjb25zdCBiYXJjb2RlV2lkdGhJbnB1dElkID0gdXVpZHY0KCk7XG5cbmZ1bmN0aW9uIGhhbmRsZUlucHV0KCkge1xuICBkZWJvdW5jZShnZW5lcmF0ZUJhcmNvZGUoKSk7XG59XG5cbmNvbnN0IG9wdGlvbnMgPSBbXG4gIHsgbmFtZTogXCJOb3JtYWxcIiwgdmFsdWU6IDEgfSxcbiAgeyBuYW1lOiBcIldpZGVcIiwgdmFsdWU6IDIgfSxcbl07XG5cbmNvbnN0IEJhcmNvZGVXaWR0aElucHV0ID0gKCkgPT4ge1xuICAvL1xuXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoeyBjbGFzc05hbWU6IGB2ZXJ0aWNhbC1zdGFja2AgfSwgW1xuICAgIExhYmVsKHtcbiAgICAgIGZvcjogYmFyY29kZVdpZHRoSW5wdXRJZCxcbiAgICAgIGlubmVySFRNTDogYFdpZHRoOiBgLFxuICAgIH0pLFxuICAgIFNlbGVjdChcbiAgICAgIHtcbiAgICAgICAgaWQ6IGJhcmNvZGVXaWR0aElucHV0SWQsXG4gICAgICAgIG9uaW5wdXQoKSB7XG4gICAgICAgICAgaGFuZGxlSW5wdXQoKTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBbLi4ub3B0aW9ucy5tYXAoKG8pID0+IE9wdGlvbih7IGlubmVyVGV4dDogby5uYW1lLCB2YWx1ZTogby52YWx1ZSB9KSldXG4gICAgKSxcbiAgXSk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFyY29kZVdpZHRoSW5wdXQ7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgZ2V0SW5wdXRWYWx1ZSB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IHsgYmFyY29kZVRleHRJbnB1dElkIH0gZnJvbSBcIi4vQmFyY29kZVRleHRJbnB1dFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVCYXJjb2RlLCBnZXRCYXJjb2RlVGV4dElucHV0IH0gZnJvbSBcIi4vbG9naWNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcblxuY29uc3QgR2VuZXJhdGVCdXR0b24gPSAoKSA9PiB7XG4gIC8vXG5cbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IEJ1dHRvbihcbiAgICB7XG4gICAgICBpbm5lclRleHQ6IGBHZW5lcmF0ZWAsXG4gICAgICBjbGFzc05hbWU6IGBgLFxuICAgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2VuZXJhdGVCdXR0b247XG4iLCJleHBvcnQgY29uc3QgYmFyY29kZUNvbmZpZyA9IHtcbiAgd2lkdGg6IHtcbiAgICBzdGFydGluZzogMSxcbiAgICBtaW46IDEsXG4gICAgbWF4OiAxMCxcbiAgICBzdGVwOiAwLjEsXG4gIH0sXG4gIGhlaWdodDoge1xuICAgIHN0YXJ0aW5nOiA1MCxcbiAgICBtaW46IDEwLFxuICAgIG1heDogMjUwLFxuICAgIHN0ZXA6IDIsXG4gIH0sXG4gIGZvbnRTaXplOiB7XG4gICAgc3RhcnRpbmc6IDE0LFxuICAgIG1pbjogNSxcbiAgICBtYXg6IDEwMCxcbiAgICBzdGVwOiAxLFxuICB9LFxuICBmb250RGlzcGxheToge1xuICAgIHN0YXJ0aW5nOiB0cnVlLFxuICB9LFxuICBtYXJnaW46IHtcbiAgICBzdGFydGluZzoge1xuICAgICAgbWFyZ2luOiA1LFxuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgdG9wOiAwLFxuICAgICAgYm90dG9tOiA1LFxuICAgIH0sXG4gIH0sXG4gIHRleHRJbnB1dDoge1xuICAgIHN0YXJ0aW5nOiBcIkVudGVyIGJhcmNvZGUgbWVzc2FnZVwiLFxuICB9LFxuICBzZWNvbmRhcnlDb2xvcjoge1xuICAgIHN0YXJ0aW5nOiBcIiMwMDAwMDBcIixcbiAgfSxcbiAgcHJpbWFyeUNvbG9yOiB7XG4gICAgc3RhcnRpbmc6IFwiI2ZmZmZmZlwiLFxuICB9LFxufTtcbiIsImltcG9ydCBKc0JhcmNvZGUgZnJvbSBcImpzYmFyY29kZVwiO1xuXG5pbXBvcnQgeyBiYXJjb2RlVGV4dElucHV0SWQgfSBmcm9tIFwiLi9CYXJjb2RlVGV4dElucHV0XCI7XG5pbXBvcnQgeyBiYXJjb2RlV2lkdGhJbnB1dElkIH0gZnJvbSBcIi4vQmFyY29kZVdJZHRoSW5wdXRcIjtcbmltcG9ydCB7IGdldElucHV0VmFsdWUgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IGJhcmNvZGVIZWlnaHRJbnB1dElkIH0gZnJvbSBcIi4vQmFyY29kZUhlaWdodElucHV0XCI7XG5pbXBvcnQgeyBiYXJjb2RlRm9udFNpemVJbnB1dElkIH0gZnJvbSBcIi4vQmFyY29kZUZvbnRTaXplSW5wdXRcIjtcbmltcG9ydCB7IGJhcmNvZGVGb250RGlzcGxheUlucHV0SWQgfSBmcm9tIFwiLi9CYXJjb2RlRm9udERpc3BsYXlJbnB1dFwiO1xuXG5pbXBvcnQgeyBiYXJjb2RlQ29uZmlnIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgeyB1cGRhdGVDb3B5TWVzc2FnZSB9IGZyb20gXCIuL3VpXCI7XG5pbXBvcnQge1xuICBiYXJjb2RlUHJpbWFyeUNvbG9ySW5wdXRJZCxcbiAgYmFyY29kZVNlY29uZGFyeUNvbG9ySW5wdXRJZCxcbn0gZnJvbSBcIi4vQmFyY29kZUNvbG9ySW5wdXRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUJhcmNvZGUob3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyA/IG9wdGlvbnMgOiB7fTtcbiAgY29uc3QgY29udGVudCA9IGdldElucHV0VmFsdWUoZ2V0QmFyY29kZVRleHRJbnB1dCgpKVxuICAgID8gZ2V0SW5wdXRWYWx1ZShnZXRCYXJjb2RlVGV4dElucHV0KCkpXG4gICAgOiBcIjxOT05FPlwiO1xuXG4gIGNvbnN0IHdpZHRoID0gZ2V0SW5wdXRWYWx1ZShnZXRCYXJjb2RlV2lkdGhJbnB1dCgpKTtcbiAgY29uc3QgaGVpZ2h0ID0gZ2V0SW5wdXRWYWx1ZShnZXRCYXJjb2RlSGVpZ2h0SW5wdXQoKSk7XG4gIGNvbnN0IGZvbnRTaXplID0gZ2V0SW5wdXRWYWx1ZShnZXRCYXJjb2RlRm9udFNpemVJbnB1dCgpKTtcbiAgY29uc3QgZGlzcGxheVZhbHVlID0gZ2V0QmFyY29kZUZvbnREaXNwbGF5SW5wdXQoKS5jaGVja2VkO1xuICBjb25zdCB7IGJvdHRvbSwgbWFyZ2luIH0gPSBiYXJjb2RlQ29uZmlnLm1hcmdpbi5zdGFydGluZztcbiAgY29uc3QgbGluZUNvbG9yID0gZ2V0SW5wdXRWYWx1ZShnZXRCYXJjb2RlU2Vjb25kYXJ5Q29sb3JJbnB1dCgpKTtcbiAgY29uc3QgYmFja2dyb3VuZCA9IGdldElucHV0VmFsdWUoZ2V0QmFyY29kZVByaW1hcnlDb2xvcklucHV0KCkpO1xuXG4gIEpzQmFyY29kZShcIiNiYXJjb2RlXCIsIGNvbnRlbnQsIHtcbiAgICAuLi5vcHRpb25zLFxuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBmb250U2l6ZSxcbiAgICBkaXNwbGF5VmFsdWUsXG4gICAgbWFyZ2luLFxuICAgIG1hcmdpbkJvdHRvbTogZGlzcGxheVZhbHVlID8gYm90dG9tIDogMCxcbiAgICBsaW5lQ29sb3IsXG4gICAgYmFja2dyb3VuZCxcbiAgfSk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29weUJhcmNvZGUoc3JjKSB7XG4gIGNvbnN0IGJhcmNvZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhcmNvZGVcIik7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChiYXJjb2RlLnNyYyk7XG4gIGNvbnN0IGJsb2IgPSBhd2FpdCBkYXRhLmJsb2IoKTtcbiAgdHJ5IHtcbiAgICBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlKFtuZXcgQ2xpcGJvYXJkSXRlbSh7IFwiaW1hZ2UvcG5nXCI6IGJsb2IgfSldKTtcbiAgICB1cGRhdGVDb3B5TWVzc2FnZShcImNvcGllZCFcIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB1cGRhdGVDb3B5TWVzc2FnZShcInRoZXJlIHdhcyBhbiBpc3N1ZSwgdHJ5IGFnYWluLlwiKTtcbiAgfVxufVxuXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyBURVhUIElOUFVUICMjIyMjIyMjIyMjIyMjIyMjXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmFyY29kZVRleHRJbnB1dCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJhcmNvZGVUZXh0SW5wdXRJZCk7XG59XG5cbi8vICMjIyMjIyMjIyMjIyMjIyMjIFdJRFRIIElOUFVUICMjIyMjIyMjIyMjIyMjIyNcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJhcmNvZGVXaWR0aElucHV0KCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYmFyY29kZVdpZHRoSW5wdXRJZCk7XG59XG5cbi8vICMjIyMjIyMjIyMjIyMjIyMjIEhFSUdIVCBJTlBVVCAjIyMjIyMjIyMjIyMjIyMjXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmFyY29kZUhlaWdodElucHV0KCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYmFyY29kZUhlaWdodElucHV0SWQpO1xufVxuXG4vLyAjIyMjIyMjIyMjIyMjIyMjIEZPTlQgU0laRSBJTlBVVCAjIyMjIyMjIyMjIyMjIyNcbmV4cG9ydCBmdW5jdGlvbiBnZXRCYXJjb2RlRm9udFNpemVJbnB1dCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJhcmNvZGVGb250U2l6ZUlucHV0SWQpO1xufVxuXG4vLyAjIyMjIyMjIyMjIyMjIyBGT05UIERJU1BMQVkgSU5QVVQgIyMjIyMjIyMjIyMjI1xuZXhwb3J0IGZ1bmN0aW9uIGdldEJhcmNvZGVGb250RGlzcGxheUlucHV0KCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYmFyY29kZUZvbnREaXNwbGF5SW5wdXRJZCk7XG59XG5cbi8vICMjIyMjIyMjIyMjIyMgQ09QWSBCQVJDT0RFIE1FU1NBR0UgIyMjIyMjIyMjIyMjXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29weUJhcmNvZGVNZXNzYWdlKCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3B5LW1lc3NhZ2UtY29udGFpbmVyID4gZGl2XCIpO1xufVxuXG4vLyAjIyMjIyMjIyMjIyMjICBTRUNPTkRBUlkgQ09MT1IgSU5QVVQgIyMjIyMjIyMjIyNcbmV4cG9ydCBmdW5jdGlvbiBnZXRCYXJjb2RlUHJpbWFyeUNvbG9ySW5wdXQoKSB7XG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChiYXJjb2RlUHJpbWFyeUNvbG9ySW5wdXRJZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCYXJjb2RlUHJpbWFyeUNvbG9yUHJlc2V0KCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGN1c3RvbS1wcmVzZXQtJHtiYXJjb2RlUHJpbWFyeUNvbG9ySW5wdXRJZH1gKTtcbn1cblxuLy8gIyMjIyMjIyMjIyMjIyMjIyBQUklNQVJZIENPTE9SIElOUFVUICMjIyMjIyMjIyMjIyMjXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmFyY29kZVNlY29uZGFyeUNvbG9ySW5wdXQoKSB7XG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChiYXJjb2RlU2Vjb25kYXJ5Q29sb3JJbnB1dElkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJhcmNvZGVTZWNvbmRhcnlDb2xvclByZXNldCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIGBjdXN0b20tcHJlc2V0LSR7YmFyY29kZVNlY29uZGFyeUNvbG9ySW5wdXRJZH1gXG4gICk7XG59XG4iLCJpbXBvcnQgeyBnZXRDb3B5QmFyY29kZU1lc3NhZ2UgfSBmcm9tIFwiLi9sb2dpY1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ29weU1lc3NhZ2UobWVzc2FnZSkge1xuICBjb25zdCBjb3B5TWVzc2FnZSA9IGdldENvcHlCYXJjb2RlTWVzc2FnZSgpO1xuICBjb3B5TWVzc2FnZS5pbm5lclRleHQgPSBtZXNzYWdlO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb3B5TWVzc2FnZS5pbm5lclRleHQgPSBcImNvcHkgdG8gY2xpcGJvYXJkXCI7XG4gIH0sIDE1MDApO1xufVxuIiwiaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL0hlYWRlci9IZWFkZXJcIjtcbmltcG9ydCBEeW5hbWljRm9vdGVyIGZyb20gXCIuLi9EeW5hbWljRm9vdGVyL0R5bmFtaWNGb290ZXJcIjtcbmltcG9ydCBNYWluU2VjdGlvbiBmcm9tIFwiLi4vTWFpblNlY3Rpb24vTWFpblNlY3Rpb25cIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IENvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBFbGVtZW50KFwiZGl2XCIsIHsgaWQ6IFwiY29udGVudFwiIH0sIFtcbiAgICBIZWFkZXIoKSxcbiAgICBNYWluU2VjdGlvbigpLFxuICAgIER5bmFtaWNGb290ZXIoKSxcbiAgXSk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEEsIERpdiB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9fY3VzdG9tLWNvbXBvbmVudHMvSWNvblwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG5pbXBvcnQgeyBnaXRodWJJbmZvIH0gZnJvbSBcIi4uLy4uL3BhZ2UtbG9naWMvZGF0YS9kYXRhLXBhZ2UtY29uZmlnXCI7XG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG4vLyBURU1QTEFURSBWQVJJQUJMRVNcbmNvbnN0IGR5bmFtaWNZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuXG5jb25zdCBDb3B5cmlnaHRDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAgeyBjbGFzc05hbWU6IGBjb3B5cmlnaHQtY29udGFpbmVyYCB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBEaXYoe1xuICAgICAgICBjbGFzc05hbWU6IFwiY29weXJpZ2h0LWluZm8gZGlzcGxheS1pLWJcIixcbiAgICAgICAgaW5uZXJUZXh0OiBgwqkgQ2FybGluIE1pdGNoZWxsICR7ZHluYW1pY1llYXJ9YCxcbiAgICAgIH0pLFxuICAgICAgQSh7IGhyZWY6IGBodHRwczovL2dpdGh1Yi5jb20vY2FybGluLW1pdGNoZWxsLyR7Z2l0aHViSW5mby5yZXBvTmFtZX1gIH0sIFtcbiAgICAgICAgSWNvbihcImljb24tZ2l0aHViLWNhdFwiKSxcbiAgICAgIF0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3B5cmlnaHRDb250YWluZXI7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IENvcHlyaWdodENvbnRhaW5lciBmcm9tIFwiLi9Db3B5cmlnaHRDb250YWluZXJcIjtcbmltcG9ydCBBdHRyaWJ1dGlvbnNDb250YWluZXIgZnJvbSBcIi4vU2l0ZUF0dHJpYnV0aW9ucy9BdHRyaWJ1dGlvbnNDb250YWluZXJcIjtcbmltcG9ydCBUT1BDb250YWluZXIgZnJvbSBcIi4vVE9QTGlua0NvbnRhaW5lclwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgRHluYW1pY0Zvb3RlciA9ICgpID0+IHtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBcbiAgRm9vdGVyKFxuICAgIHsgXG4gICAgICBpZDogYGZvb3RlcmAsIFxuICAgICAgY2xhc3NOYW1lOiBgYmctZ3JheS1kYXJrLTMgdGV4dC13aGl0ZWAgXG4gICAgfSxcbiAgICBbXG4gICAgIENvcHlyaWdodENvbnRhaW5lcigpLCBcblxuICAgICBBdHRyaWJ1dGlvbnNDb250YWluZXIoKVxuICAgIF1cbiAgKTtcblxuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNGb290ZXI7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi8uLi9fY3VzdG9tLWNvbXBvbmVudHMvSWNvblwiO1xuXG5pbXBvcnQgRXhwYW5kYWJsZVBhbmVsIGZyb20gXCIuLi8uLi9fY3VzdG9tLWNvbXBvbmVudHMvRXhwYW5kYWJsZVBhbmVsL0V4cGFuZGFibGVQYW5lbFwiO1xuaW1wb3J0IE5vbkV4cGFuZGFibGVQYW5lbCBmcm9tIFwiLi4vLi4vX2N1c3RvbS1jb21wb25lbnRzL0V4cGFuZGFibGVQYW5lbC9Ob25FeHBhbmRhYmxlUGFuZWxcIjtcblxuaW1wb3J0IEljb25zRXhwbGFuYXRpb24gZnJvbSBcIi4vSWNvbnNFeHBsYW5hdGlvblwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgQXR0cmlidXRpb25zQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgeyBjbGFzc05hbWU6IGBhdHRyaWJ1dGlvbnMtY29udGFpbmVyYCB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBFeHBhbmRhYmxlUGFuZWwoe1xuICAgICAgICB0aXRsZTogXCJTaXRlIEF0dHJpYnV0aW9uc1wiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIEV4cGFuZGFibGVQYW5lbCh7XG4gICAgICAgICAgICB0aXRsZTogXCJJY29uc1wiLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgTm9uRXhwYW5kYWJsZVBhbmVsKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJHaXRodWJcIixcbiAgICAgICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9sb2dvc1wiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbSWNvbihcImljb24tZ2l0aHViLWNhdFwiKV0sXG4gICAgICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgICAgIEV4cGFuZGFibGVQYW5lbCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQWxsIG90aGVyIEljb25zXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtJY29uc0V4cGxhbmF0aW9uKCldLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdHRyaWJ1dGlvbnNDb250YWluZXI7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRGl2LCBBIH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgSWNvbnNFeHBsYW5hdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdihcbiAgICB7IGNsYXNzTmFtZTogYGljb25zLWV4cGxhbmF0aW9uYCwgaW5uZXJIVE1MOiBgYCB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBEaXYoe1xuICAgICAgICBpbm5lckhUTUw6IGBBbGwgb3RoZXIgaWNvbnMgd2VyZSBjcmVhdGVkIGJ5IG1lIHVzaW5nICR7XG4gICAgICAgICAgQSh7XG4gICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vaW5rc2NhcGUub3JnL1wiLFxuICAgICAgICAgICAgaW5uZXJUZXh0OiBcIklua3NjYXBlXCIsXG4gICAgICAgICAgfSkub3V0ZXJIVE1MXG4gICAgICAgIH0gYW5kIGNvbnZlcnRpbmcgdGhlbSB0byBhIGZvbnQgd2l0aCAke1xuICAgICAgICAgIEEoe1xuICAgICAgICAgICAgaHJlZjogXCJodHRwczovL2ljb21vb24uaW8vXCIsXG4gICAgICAgICAgICBpbm5lclRleHQ6IFwiSWNvTW9vblwiLFxuICAgICAgICAgIH0pLm91dGVySFRNTFxuICAgICAgICB9YCxcbiAgICAgIH0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJY29uc0V4cGxhbmF0aW9uO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEEsIERpdiB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IFRPUENvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgcGFyZW50Q29udGFpbmVyID0gRGl2KFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogYHRvcC1jb250YWluZXJgLFxuICAgICAgaW5uZXJUZXh0OiBcIkluc3BpcmVkIEJ5OlwiLFxuICAgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIEEoe1xuICAgICAgICBocmVmOiBcImh0dHBzOi8vd3d3LnRoZW9kaW5wcm9qZWN0LmNvbS9cIixcbiAgICAgICAgY2xhc3NOYW1lOiBcInRvcC1saW5rXCIsXG4gICAgICAgIGlubmVyVGV4dDogXCJUaGUgT2RpbiBQcm9qZWN0XCIsXG4gICAgICB9KSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYXJlbnRDb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUT1BDb250YWluZXI7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaDEgPSBFbGVtZW50KFwiaDFcIiwgeyBpbm5lclRleHQ6IFwiQmFyY29kZSBHZW5lcmF0b3JcIiB9KTtcblxuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcImJnLWdyYXktZGFyay0zIHRleHQtd2hpdGUgcC0yXCI7XG4gIGNvbnN0IGhlYWRlciA9IEVsZW1lbnQoXG4gICAgXCJoZWFkZXJcIixcbiAgICB7XG4gICAgICBpZDogXCJoZWFkZXJcIixcbiAgICAgIGNsYXNzTmFtZTogXCJoZWFkZXJcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzLFxuICAgIH0sXG4gICAgW2gxXVxuICApO1xuICByZXR1cm4gaGVhZGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IGdlbmVyYXRlVGVzdENvbnRlbnRBcnIgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCBCYXJjb2RlR2VuZXJhdG9yIGZyb20gXCIuLi9CYXJjb2RlR2VuZXJhdG9yL0JhcmNvZGVHZW5lcmF0b3JcIjtcbmltcG9ydCB7IE1haW4sIERpdiB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IE1haW5TZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcIlwiO1xuICBjb25zdCBtYWluID0gTWFpbihcbiAgICB7XG4gICAgICBpZDogXCJtYWluLXNlY3Rpb25cIixcbiAgICAgIGNsYXNzTmFtZTogXCJcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzLFxuICAgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtCYXJjb2RlR2VuZXJhdG9yKCldXG4gICk7XG4gIHJldHVybiBtYWluO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpblNlY3Rpb247XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgQSB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuaW1wb3J0IEV4cGFuZGFibGVQYW5lbFRpdGxlIGZyb20gXCIuL0V4cGFuZGFibGVQYW5lbFRpdGxlXCI7XG5pbXBvcnQgRXhwYW5kYWJsZVBhbmVsQ29udGVudCBmcm9tIFwiLi9FeHBhbmRhYmxlUGFuZWxDb250ZW50XCI7XG5cbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBFeHBhbmRhYmxlUGFuZWwgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgY29tcG9uZW50SWQgPSB1dWlkdjQoKTtcbiAgY29uc3QgeyB0aXRsZSwgY2hpbGRyZW4gfSA9IHByb3BzO1xuXG4gIGNvbnN0IHBhbmVsID0gQShcbiAgICB7IGNsYXNzTmFtZTogYGV4cGFuZGFibGUtcGFuZWxgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIEV4cGFuZGFibGVQYW5lbFRpdGxlKHsgdGl0bGUsIGNvbXBvbmVudElkIH0pLFxuICAgICAgRXhwYW5kYWJsZVBhbmVsQ29udGVudCh7IGNoaWxkcmVuLCBjb21wb25lbnRJZCB9KSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYW5lbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGFuZGFibGVQYW5lbDtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IHsgRGl2IH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgRXhwYW5kYWJsZVBhbmVsQ29udGVudCA9IChwcm9wcykgPT4ge1xuICBsZXQgeyBjaGlsZHJlbiwgY29tcG9uZW50SWQgfSA9IHByb3BzO1xuICBjaGlsZHJlbiA9IGNoaWxkcmVuID8gY2hpbGRyZW4gOiBbXTtcblxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRGl2KFxuICAgIHtcbiAgICAgIGlkOiBgZXhwYW5kYWJsZS1jb250ZW50LSR7Y29tcG9uZW50SWR9YCxcbiAgICAgIGNsYXNzTmFtZTogYGV4cGFuZGFibGUtcGFuZWwtY29udGVudGAsXG4gICAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW0Rpdih7IGNsYXNzTmFtZTogXCJjb250ZW50XCIgfSwgWy4uLmNoaWxkcmVuXSldXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kYWJsZVBhbmVsQ29udGVudDtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBFbGVtZW50LCBCdXR0b24sIERpdiB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG5mdW5jdGlvbiB0b2dnbGVFeHBhbnNpb24oY29tcG9uZW50SWQpIHtcbiAgY29uc3QgZXhwYW5zaW9uQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIGBleHBhbmRhYmxlLWNvbnRlbnQtJHtjb21wb25lbnRJZH1gXG4gICk7XG4gIGNvbnN0IHRvZ2dsZUV4cGFuc2lvbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIGBleHBhbmRhYmxlLWNvbnRlbnQtYnV0dG9uLSR7Y29tcG9uZW50SWR9YFxuICApO1xuICBleHBhbnNpb25Db250ZW50LmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRlZFwiKTtcbiAgdG9nZ2xlRXhwYW5zaW9uQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRlZFwiKTtcbn1cblxuY29uc3QgRXhwYW5kYWJsZVBhbmVsVGl0bGUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB0aXRsZSwgY29tcG9uZW50SWQgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgeyBjbGFzc05hbWU6IGBleHBhbmRhYmxlLXBhbmVsLXRpdGxlYCB9LFxuICAgIFtcbiAgICAgIERpdih7XG4gICAgICAgIGNsYXNzTmFtZTogXCJkaXNwbGF5LWktYlwiLFxuICAgICAgICBpbm5lclRleHQ6IHRpdGxlLFxuICAgICAgICBvbmNsaWNrKCkge1xuICAgICAgICAgIHRvZ2dsZUV4cGFuc2lvbihjb21wb25lbnRJZCk7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIEJ1dHRvbihcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBgZXhwYW5kYWJsZS1jb250ZW50LWJ1dHRvbi0ke2NvbXBvbmVudElkfWAsXG4gICAgICAgICAgb25jbGljaygpIHtcbiAgICAgICAgICAgIHRvZ2dsZUV4cGFuc2lvbihjb21wb25lbnRJZCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW0ljb24oXCJpY29uLXVwLWRvd25cIildXG4gICAgICApLFxuICAgIF1cbiAgKTtcblxuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGFuZGFibGVQYW5lbFRpdGxlO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEEgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBOb25FeHBhbmRhYmxlUGFuZWwgPSAocHJvcHMpID0+IHtcbiAgbGV0IHsgdGl0bGUsIGhyZWYsIGNoaWxkcmVuIH0gPSBwcm9wcztcbiAgY2hpbGRyZW4gPSBjaGlsZHJlbiA/IGNoaWxkcmVuIDogW107XG5cbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcblxuICBjb25zdCBwYW5lbCA9IEEoXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiBgJHtvdGhlckNsYXNzZXN9IG5vbi1leHBhbmRhYmxlLXBhbmVsICR7XG4gICAgICAgIGhyZWYgPyBcImlzLWxpbmtcIiA6IFwiXCJcbiAgICAgIH1gLFxuICAgICAgaW5uZXJUZXh0OiB0aXRsZSxcbiAgICB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbLi4uY2hpbGRyZW5dXG4gICk7XG4gIGlmIChocmVmKSB7XG4gICAgcGFuZWwuaHJlZiA9IGhyZWY7XG4gIH1cbiAgcmV0dXJuIHBhbmVsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTm9uRXhwYW5kYWJsZVBhbmVsO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBJY29uID0gKGljb25DbGFzcykgPT4ge1xuICBjb25zdCBpY29uID0gRWxlbWVudChcImlcIiwgeyBjbGFzc05hbWU6IGBpY29uICR7aWNvbkNsYXNzfSBkaXNwbGF5LWktYmAgfSk7XG4gIHJldHVybiBpY29uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcbiIsIi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIFVUSUxJVElFUyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cbmZ1bmN0aW9uIGdldEFsbENhcm91c2VsU2xpZGVzKCkge1xuICByZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwtdHJhY2tcIikuY2hpbGROb2Rlc107XG59XG5cbmZ1bmN0aW9uIGdldEFsbENhcm91c2VsU2xpZGVJZHMoKSB7XG4gIHJldHVybiBnZXRBbGxDYXJvdXNlbFNsaWRlcygpLm1hcCgoZWxlbSkgPT4gZWxlbS5pZCk7XG59XG5cbmZ1bmN0aW9uIGdldEFsbENhcm91c2VsTmF2QnV0dG9ucygpIHtcbiAgcmV0dXJuIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcm91c2VsLWluZGljYXRvclwiKV07XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRTbGlkZUluZGV4KCkge1xuICBjb25zdCBhbGxTbGlkZUlkcyA9IGdldEFsbENhcm91c2VsU2xpZGVJZHMoKTtcbiAgY29uc3QgY3VycmVudFNsaWRlSWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsLXNsaWRlLmFjdGl2ZVwiKS5pZDtcbiAgY29uc3QgY3VycmVudFNsaWRlSW5kZXggPSBhbGxTbGlkZUlkcy5pbmRleE9mKGN1cnJlbnRTbGlkZUlkKTtcblxuICByZXR1cm4gY3VycmVudFNsaWRlSW5kZXg7XG59XG5cbmZ1bmN0aW9uIGdldFByZXZpb3VzU2xpZGVJbmRleCgpIHtcbiAgbGV0IHByZXZpb3VzU2xpZGVJbmRleCA9IGdldEN1cnJlbnRTbGlkZUluZGV4KCkgLSAxO1xuXG4gIC8vIGlmIHRoZSBjYWxjdWxhdGVkIGluZGV4IGlzIG91dHNpZGUgdGhlIGxpc3QsIHNldCBpdCB0byB0aGUgaW5kZXggb2YgdGhlIGxhc3QgaXRlbSBpbiB0aGUgbGlzdFxuICBjb25zdCBjb3JyZWN0ZWRJbmRleCA9XG4gICAgcHJldmlvdXNTbGlkZUluZGV4IDwgMFxuICAgICAgPyBnZXRBbGxDYXJvdXNlbFNsaWRlSWRzKCkubGVuZ3RoIC0gMVxuICAgICAgOiBwcmV2aW91c1NsaWRlSW5kZXg7XG5cbiAgcmV0dXJuIGNvcnJlY3RlZEluZGV4O1xufVxuXG5mdW5jdGlvbiBnZXROZXh0U2xpZGVJbmRleCgpIHtcbiAgbGV0IG5leHRTbGlkZUluZGV4ID0gZ2V0Q3VycmVudFNsaWRlSW5kZXgoKSArIDE7XG5cbiAgLy8gaWYgdGhlIGNhbGN1bGF0ZWQgaW5kZXggaXMgb3V0c2lkZSB0aGUgbGlzdCwgc2V0IGl0IHRvIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgbGlzdFxuICBjb25zdCBjb3JyZWN0ZWRJbmRleCA9XG4gICAgbmV4dFNsaWRlSW5kZXggPiBnZXRBbGxDYXJvdXNlbFNsaWRlSWRzKCkubGVuZ3RoIC0gMSA/IDAgOiBuZXh0U2xpZGVJbmRleDtcblxuICByZXR1cm4gY29ycmVjdGVkSW5kZXg7XG59XG5cbi8vIG1vdmUgdG8gdGhlIHNlbGVjdGVkIHNsaWRlXG5leHBvcnQgZnVuY3Rpb24gZ290b1NwZWNpZmljU2xpZGUoaWQpIHtcbiAgY29uc3QgYWxsTmF2QnV0dG9ucyA9IGdldEFsbENhcm91c2VsTmF2QnV0dG9ucygpO1xuICBjb25zdCBzZWxlY3RlZE5hdkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjYXJvdXNlbC1uYXYtJHtpZH1gKTtcbiAgY29uc3Qgc2VsZWN0ZWRTbGlkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjYXJvdXNlbC1zbGlkZS0ke2lkfWApO1xuICBjb25zdCBhbGxTbGlkZXMgPSBnZXRBbGxDYXJvdXNlbFNsaWRlcygpO1xuXG4gIGFsbFNsaWRlcy5mb3JFYWNoKChzbGlkZSkgPT4gc2xpZGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG4gIHNlbGVjdGVkU2xpZGUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICBhbGxOYXZCdXR0b25zLmZvckVhY2goKHNsaWRlKSA9PiBzbGlkZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgc2VsZWN0ZWROYXZCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBFVkVOVCBIQU5ETEVSUyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4vLyBtb3ZlIHRvIHRoZSBzZWxlY3RlZCBzbGlkZSB3aGVuIGNsaWNraW5nIG9uIHRoZSBhc3NvY2lhdGVkIG5hdiBidXR0b25cbmV4cG9ydCBmdW5jdGlvbiBjbGlja0Nhcm91c2VsTmF2KGlkKSB7XG4gIGdvdG9TcGVjaWZpY1NsaWRlKGlkKTtcbn1cblxuLy8gbW92ZSByaWdodCB3aGVuIGNsaWNraW5nIG9uIHRoZSByaWdodCBidXR0b25cbmV4cG9ydCBmdW5jdGlvbiBjbGlja0Nhcm91c2VsUmlnaHQoKSB7XG4gIGNvbnN0IGlkID0gZ2V0QWxsQ2Fyb3VzZWxTbGlkZUlkcygpW2dldE5leHRTbGlkZUluZGV4KCldLnJlcGxhY2UoXG4gICAgXCJjYXJvdXNlbC1zbGlkZS1cIixcbiAgICBcIlwiXG4gICk7XG4gIGdvdG9TcGVjaWZpY1NsaWRlKGlkKTtcbn1cblxuLy8gbW92ZSBsZWZ0IHdoZW4gY2xpY2tpbmcgb24gdGhlIHJpZ2h0IGJ1dHRvblxuZXhwb3J0IGZ1bmN0aW9uIGNsaWNrQ2Fyb3VzZWxMZWZ0KCkge1xuICBjb25zdCBpZCA9IGdldEFsbENhcm91c2VsU2xpZGVJZHMoKVtnZXRQcmV2aW91c1NsaWRlSW5kZXgoKV0ucmVwbGFjZShcbiAgICBcImNhcm91c2VsLXNsaWRlLVwiLFxuICAgIFwiXCJcbiAgKTtcbiAgZ290b1NwZWNpZmljU2xpZGUoaWQpO1xufVxuXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgQVVUTyBQUk9HUkVTU0lPTiAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbmV4cG9ydCBmdW5jdGlvbiBjbGlja0Nhcm91c2VsUGxheSgpIHtcbiAgaGFuZGxlQXV0b0FkdmFuY2UoXCJwbGF5XCIpO1xuICBjb25zdCBwbGF5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbCAucGxheS1idXR0b25cIik7XG4gIHBsYXlCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XG5cbiAgY29uc3QgcGF1c2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsIC5wYXVzZS1idXR0b25cIik7XG4gIHBhdXNlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xpY2tDYXJvdXNlbFBhdXNlKCkge1xuICBoYW5kbGVBdXRvQWR2YW5jZShcInBhdXNlXCIpO1xuICBjb25zdCBwbGF5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbCAucGxheS1idXR0b25cIik7XG4gIHBsYXlCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XG5cbiAgY29uc3QgcGF1c2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsIC5wYXVzZS1idXR0b25cIik7XG4gIHBhdXNlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xufVxuXG5sZXQgaW50ZXJ2YWw7XG4vKipcbiAqIEEgZnVuY3Rpb24gdG8gY3JlYXRlIG9yIGNhbmNlbCB0aGUgYXV0byBhZHZhbmNlIHRpbWVyXG4gKiB5b3Ugd2lsbCBuZWV0IHRvIGRlY2xhcmUgaW50ZXJ2YWwgKGxldCBpbnRlcnZhbCkgYmVmb3JlXG4gKiB0aGlzIGZ1bmN0aW9uIHRvIGFsbG93IHRoZSBpbnRlcnZhbCB0byBiZSBjcmVhdGVkIC8gcmVmZW5lbmNlZFxuICogQHBhcmFtIHtzdHJpbmd9IG1vZGUgYSBzdHJpbmcgY29udGFpbmluZyAncGxheScgb3IgJ3BhdXNlJyB0byBpbmRpY2F0ZSB0aGUgbW9kZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQXV0b0FkdmFuY2UobW9kZSkge1xuICBjb25zdCBwbGF5aW5nID0gbW9kZSA9PT0gXCJwbGF5XCIgPyB0cnVlIDogZmFsc2U7XG4gIGlmIChwbGF5aW5nKSB7XG4gICAgLy8gc3RhcnQgYW4gaW50ZXJ2YWwgdGltZXIgYW5kIGNhcHR1cmUgaXRzIHJlZmVyZW5jZVxuICAgIGludGVydmFsID0gd2luZG93LnNldEludGVydmFsKGNsaWNrQ2Fyb3VzZWxSaWdodCwgNTAwMCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gY2FuY2VsIHRoZSByZWZlcmVuY2UgeW91IGNhcHR1cmVkXG4gICAgd2luZG93LmNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9XG59XG4iLCIvKipcbiAqIFRoaXMgRnVuY3Rpb24gYWxsb3dzIHlvdSB0byBjcmVhdGUgYSBkb20gZWxlbWVudCB3aXRoIGl0cyBpbml0aWFsIGF0dHJpYnV0ZXMgYW5kIGNoaWxkIGVsZW1lbnRzIGRlZmluZWQgYnkgYSBwYXNzZWQtaW4gb2JqZWN0IGFuZCBhcnJheSBvZiBjaGlsZCBlbGVtZW50c1xuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVTdHIgdGhlIHRhZyBuYW1lIG9mIHRoZSBlbGVtZW50IHRvIGJlIHJldHVybmVkIHlvdSB3b3VsZCB1c2UgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgpXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNPYmogKG9wdGlvbmFsKSBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgaW5pdGlhbCBwcm9wZXJ0aWVzL2F0dHJpYnV0ZXMgeW91IHdhbnQgdGhlIGVsZW1lbnQgdG8gaGF2ZVxuICogQHBhcmFtIHthcnJheX0gY2hpbGRBcnIgKG9wdGlvbmFsKSBhbiBvZiBlbGVtZW50IG9iamVjdHMgdG8gYmUgYXBwZW5kZWQgYXMgY2hpbGRyZW4gdG8gdGhpcyBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gdGhlIGEgcmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IGNyZWF0ZWQgaW4gbWVtb3J5XG4gKi9cbmV4cG9ydCBjb25zdCBFbGVtZW50ID0gKHR5cGVTdHIsIHByb3BzT2JqLCBjaGlsZEFyciA9IG51bGwpID0+IHtcbiAgLy8gU29tZSBhdHRyaWJ1dGVzIGNhbiBvbmx5IGJlIHNldCB1c2luZyB0aGUgRWxlbWVudC5zZXRBdHRyaWJ1dGUoKSBtZXRob2QuXG4gIC8vIElmIGl0IGlzIGluIHRoZSBwcm9wc09iaiBPYmplY3QuYXNzaWduIHdpbGwgZmFpbC4gV2UnbGwgcmVtb3ZlIGl0IGZyb20gdGhlXG4gIC8vIHByb3BzIG9iamVjdCBoZXJlIGFuZCBhc3NpZ24gdGhlbSB0byB0aGUgcGFyZW50IGVsZW1lbnQgYmVmb3JlIGl0IGlzIHJldHVybmVkLlxuICAvLyBUaGVzZSBhdHRyaWJ1dGVzIHNob3VsZCBiZSBhZGRlZCB0byB0aGUgc2V0QXR0cmlidXRlUHJvcGVydGllcyBsaXN0IGZvciBwcm9jZXNzaW5nLlxuICBsZXQgc2V0QXR0cmlidXRlUHJvcGVydGllcyA9IFtcImxpc3RcIl07XG4gIGxldCBwcm9wZXJ0aWVzID0gW107XG4gIHNldEF0dHJpYnV0ZVByb3BlcnRpZXMuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICBpZiAocHJvcGVydHkgaW4gcHJvcHNPYmopIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNPYmpbcHJvcGVydHldO1xuICAgICAgcHJvcGVydGllcy5wdXNoKHsgbmFtZTogcHJvcGVydHksIHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgIGRlbGV0ZSBwcm9wc09ialtwcm9wZXJ0eV07XG4gICAgfVxuICB9KTtcblxuICAvLyBDcmVhdGUgYW4gZWxlbWVudCBiYXNlZCBvbiB0aGUgdHlwZSBzdHJpbmcgcHJvdmlkZWRcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IE9iamVjdC5hc3NpZ24oXG4gICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlU3RyKSxcbiAgICBwcm9wc09ialxuICApO1xuXG4gIC8vIEFkZCBwYXNzZWQgaW4gY2hpbGQgdG8gYXJyYXkgaWYgaXQgaXMgbm90IGFscmVhZHlcbiAgaWYgKGNoaWxkQXJyICYmICFBcnJheS5pc0FycmF5KGNoaWxkQXJyKSkge1xuICAgIGNoaWxkQXJyID0gW2NoaWxkQXJyXTtcbiAgfVxuXG4gIC8vIEFwcGVuZCBjaGlsZHJlbiB0byB0aGUgZWxlbWVudFxuICBpZiAoY2hpbGRBcnIpIHtcbiAgICBjaGlsZEFyci5mb3JFYWNoKChjaGlsZCkgPT4gcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCkpO1xuICB9XG5cbiAgLy8gQXBwbHkgcHJvcGVydGllcyB3aXRoIHNldEF0dHJpYnV0ZSBpZiBuZWVkZWRcbiAgaWYgKHByb3BlcnRpZXMubGVuZ3RoKSB7XG4gICAgcHJvcGVydGllcy5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgcGFyZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcGVydHkubmFtZSwgcHJvcGVydHkudmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG4vLyAgQ09NTU9OIEVMRU1FTlRTXG5leHBvcnQgY29uc3QgQSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJhXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEFydGljbGUgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiYXJ0aWNsZVwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBCID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImJcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgQm9keSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJib2R5XCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJidXR0b25cIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgQnIgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiYnJcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgRGl2ID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImRpdlwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBEYXRhbGlzdCA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJkYXRhbGlzdFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBGaWVsZHNldCA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJmaWVsZHNldFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBGb290ZXIgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiZm9vdGVyXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEZvcm0gPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiZm9ybVwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBIMSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJoMVwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBIMiA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJoMlwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBIMyA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJoM1wiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaGVhZGVyXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEhyID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImhyXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEkgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaVwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBJbWcgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaW1nXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IElucHV0ID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImlucHV0XCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IExhYmVsID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImxhYmVsXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IExlZ2VuZCA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJsZWdlbmRcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgTGkgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwibGlcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgTWFpbiA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJtYWluXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IE9sID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcIm9sXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IE9wdGlvbiA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJvcHRpb25cIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgUCA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJwXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IFNlbGVjdCA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJzZWxlY3RcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgU3Ryb25nID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcInN0cm9uZ1wiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBTcGFuID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcInNwYW5cIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgVGV4dGFyZWEgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwidGV4dGFyZWFcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgVWwgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwidWxcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuIiwiZXhwb3J0IGNvbnN0IGdpdGh1YkluZm8gPSB7XG4gIHJlcG9OYW1lOiBcImJhcmNvZGUtZ2VuZXJhdG9yXCIsXG59O1xuIiwiaW1wb3J0IHsgYXBwbHlXaW5kb3dMaXN0ZW5lcnMgfSBmcm9tIFwiLi91aS13aW5kb3dcIjtcbmltcG9ydCB7IGNsaWNrQ2Fyb3VzZWxQbGF5IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0ltYWdlQ2Fyb3VzZWwvdWkvY2Fyb3VzZWwtdWlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5SW5pdGlhbFN0YXRlKCkge1xuICBhcHBseVdpbmRvd0xpc3RlbmVycygpO1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbFwiKSkge1xuICAgIGNsaWNrQ2Fyb3VzZWxQbGF5KCk7XG4gIH1cbn1cbiIsImltcG9ydCBKc0JhcmNvZGUgZnJvbSBcImpzYmFyY29kZVwiO1xuXG5pbXBvcnQgeyBkZWJvdW5jZSwgZ2V0SW5wdXRWYWx1ZSB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHtcbiAgZ2VuZXJhdGVCYXJjb2RlLFxuICBnZXRCYXJjb2RlV2lkdGhJbnB1dCxcbiAgZ2V0QmFyY29kZUhlaWdodElucHV0LFxufSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CYXJjb2RlR2VuZXJhdG9yL2xvZ2ljXCI7XG5pbXBvcnQgeyB1cGRhdGVCYXJjb2RlV2lkdGhEaXNwbGF5IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQmFyY29kZUdlbmVyYXRvci91aVwiO1xuXG5jb25zdCBicmVha1BvaW50cyA9IHtcbiAgeHM6IDAsXG4gIHNtOiA0ODAsXG4gIG1kOiA3MjAsXG4gIGxnOiA5NjAsXG4gIHhsOiAxMjAwLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5V2luZG93TGlzdGVuZXJzKCkge1xuICB3aW5kb3cub25yZXNpemUgPSBkZWJvdW5jZShmdW5jdGlvbiAoZSkge1xuICAgIC8vXG4gIH0pO1xuICB3aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIC8vIHVwZGF0ZUJhcmNvZGVXaWR0aERpc3BsYXkoZ2V0SW5wdXRWYWx1ZShnZXRCYXJjb2RlV2lkdGhJbnB1dCgpKSk7XG4gICAgZ2VuZXJhdGVCYXJjb2RlKCk7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuZXhwb3J0IGNvbnN0IHRydW5jYXRlQW5kQWRkRWxsaXBzZSA9IChzdHJpbmcsIG51bUNoYXJzVG9LZWVwKSA9PiB7XG4gIHJldHVybiBzdHJpbmcuc2xpY2UoMCwgbnVtQ2hhcnNUb0tlZXApLnRyaW1FbmQoKSArIFwiLi4uXCI7XG59O1xuXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSBmdW5jdGlvbiAoZm4pIHtcbiAgLy8gc2V0dXAgYSB0aW1lclxuICBsZXQgdGltZW91dDtcblxuICAvLyByZXR1cm4gYSBmdW5jdGlvbiB0byBydW4gZGVib3VuY2VkXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgLy9zZXR1cCBhcmdzXG5cbiAgICBsZXQgY29udGV4dCA9IHRoaXM7XG4gICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAvLyBpZiB0aGVyZSBpcyBhIHRpbWVyIGNhbmNlbCBpdFxuICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGltZW91dCk7XG4gICAgfVxuXG4gICAgLy8gc2V0dXAgdGhlIG5ldyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKVxuICAgIHRpbWVvdXQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH0pO1xuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gIGlmIChzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcbiAgfVxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUZXN0Q29udGVudEFycihudW1DaGlsZHJlbikge1xuICByZXR1cm4gQXJyYXkobnVtQ2hpbGRyZW4pXG4gICAgLmZpbGwoMClcbiAgICAubWFwKChlbGVtKSA9PlxuICAgICAgRWxlbWVudChcInBcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiZGlzcGxheS1iIG1iLTFcIixcbiAgICAgICAgaW5uZXJUZXh0OlxuICAgICAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRG9sb3IsIHVsbGFtIGFkLCBtYXhpbWUgZW5pbSBzZXF1aSBzdW50IHF1byBmYWNpbGlzIGlsbG8gZXZlbmlldCBsYXVkYW50aXVtIHF1YWUgcmVwZWxsZW5kdXMgZG9sb3J1bSBvbW5pcyBtaW5pbWEgZHVjaW11cyBhcmNoaXRlY3RvISBCZWF0YWUsIHZlbCBhc3N1bWVuZGEuXCIsXG4gICAgICB9KVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTsgLy8gVGhlIG1heGltdW0gaXMgZXhjbHVzaXZlIGFuZCB0aGUgbWluaW11bSBpcyBpbmNsdXNpdmVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldElucHV0VmFsdWUoaW5wdXRFbGVtZW50KSB7XG4gIHJldHVybiBpbnB1dEVsZW1lbnQudmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRJbnB1dFZhbHVlKGlucHV0RWxlbWVudCwgdmFsdWUpIHtcbiAgaW5wdXRFbGVtZW50LnZhbHVlID0gdmFsdWU7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfYmFyY29kZXMgPSByZXF1aXJlKCcuL2JhcmNvZGVzLycpO1xuXG52YXIgX2JhcmNvZGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JhcmNvZGVzKTtcblxudmFyIF9tZXJnZSA9IHJlcXVpcmUoJy4vaGVscC9tZXJnZS5qcycpO1xuXG52YXIgX21lcmdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21lcmdlKTtcblxudmFyIF9saW5lYXJpemVFbmNvZGluZ3MgPSByZXF1aXJlKCcuL2hlbHAvbGluZWFyaXplRW5jb2RpbmdzLmpzJyk7XG5cbnZhciBfbGluZWFyaXplRW5jb2RpbmdzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpbmVhcml6ZUVuY29kaW5ncyk7XG5cbnZhciBfZml4T3B0aW9ucyA9IHJlcXVpcmUoJy4vaGVscC9maXhPcHRpb25zLmpzJyk7XG5cbnZhciBfZml4T3B0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9maXhPcHRpb25zKTtcblxudmFyIF9nZXRSZW5kZXJQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi9oZWxwL2dldFJlbmRlclByb3BlcnRpZXMuanMnKTtcblxudmFyIF9nZXRSZW5kZXJQcm9wZXJ0aWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFJlbmRlclByb3BlcnRpZXMpO1xuXG52YXIgX29wdGlvbnNGcm9tU3RyaW5ncyA9IHJlcXVpcmUoJy4vaGVscC9vcHRpb25zRnJvbVN0cmluZ3MuanMnKTtcblxudmFyIF9vcHRpb25zRnJvbVN0cmluZ3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb3B0aW9uc0Zyb21TdHJpbmdzKTtcblxudmFyIF9FcnJvckhhbmRsZXIgPSByZXF1aXJlKCcuL2V4Y2VwdGlvbnMvRXJyb3JIYW5kbGVyLmpzJyk7XG5cbnZhciBfRXJyb3JIYW5kbGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Vycm9ySGFuZGxlcik7XG5cbnZhciBfZXhjZXB0aW9ucyA9IHJlcXVpcmUoJy4vZXhjZXB0aW9ucy9leGNlcHRpb25zLmpzJyk7XG5cbnZhciBfZGVmYXVsdHMgPSByZXF1aXJlKCcuL29wdGlvbnMvZGVmYXVsdHMuanMnKTtcblxudmFyIF9kZWZhdWx0czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZhdWx0cyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIFRoZSBwcm90eXBlIG9mIHRoZSBvYmplY3QgcmV0dXJuZWQgZnJvbSB0aGUgSnNCYXJjb2RlKCkgY2FsbFxuXG5cbi8vIEhlbHAgZnVuY3Rpb25zXG52YXIgQVBJID0gZnVuY3Rpb24gQVBJKCkge307XG5cbi8vIFRoZSBmaXJzdCBjYWxsIG9mIHRoZSBsaWJyYXJ5IEFQSVxuLy8gV2lsbCByZXR1cm4gYW4gb2JqZWN0IHdpdGggYWxsIGJhcmNvZGVzIGNhbGxzIGFuZCB0aGUgZGF0YSB0aGF0IGlzIHVzZWRcbi8vIGJ5IHRoZSByZW5kZXJlcnNcblxuXG4vLyBEZWZhdWx0IHZhbHVlc1xuXG5cbi8vIEV4Y2VwdGlvbnNcbi8vIEltcG9ydCBhbGwgdGhlIGJhcmNvZGVzXG52YXIgSnNCYXJjb2RlID0gZnVuY3Rpb24gSnNCYXJjb2RlKGVsZW1lbnQsIHRleHQsIG9wdGlvbnMpIHtcblx0dmFyIGFwaSA9IG5ldyBBUEkoKTtcblxuXHRpZiAodHlwZW9mIGVsZW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHR0aHJvdyBFcnJvcihcIk5vIGVsZW1lbnQgdG8gcmVuZGVyIG9uIHdhcyBwcm92aWRlZC5cIik7XG5cdH1cblxuXHQvLyBWYXJpYWJsZXMgdGhhdCB3aWxsIGJlIHBhc2VkIHRocm91Z2ggdGhlIEFQSSBjYWxsc1xuXHRhcGkuX3JlbmRlclByb3BlcnRpZXMgPSAoMCwgX2dldFJlbmRlclByb3BlcnRpZXMyLmRlZmF1bHQpKGVsZW1lbnQpO1xuXHRhcGkuX2VuY29kaW5ncyA9IFtdO1xuXHRhcGkuX29wdGlvbnMgPSBfZGVmYXVsdHMyLmRlZmF1bHQ7XG5cdGFwaS5fZXJyb3JIYW5kbGVyID0gbmV3IF9FcnJvckhhbmRsZXIyLmRlZmF1bHQoYXBpKTtcblxuXHQvLyBJZiB0ZXh0IGlzIHNldCwgdXNlIHRoZSBzaW1wbGUgc3ludGF4IChyZW5kZXIgdGhlIGJhcmNvZGUgZGlyZWN0bHkpXG5cdGlmICh0eXBlb2YgdGV4dCAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdFx0aWYgKCFvcHRpb25zLmZvcm1hdCkge1xuXHRcdFx0b3B0aW9ucy5mb3JtYXQgPSBhdXRvU2VsZWN0QmFyY29kZSgpO1xuXHRcdH1cblxuXHRcdGFwaS5vcHRpb25zKG9wdGlvbnMpW29wdGlvbnMuZm9ybWF0XSh0ZXh0LCBvcHRpb25zKS5yZW5kZXIoKTtcblx0fVxuXG5cdHJldHVybiBhcGk7XG59O1xuXG4vLyBUbyBtYWtlIHRlc3RzIHdvcmsgVE9ETzogcmVtb3ZlXG5Kc0JhcmNvZGUuZ2V0TW9kdWxlID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0cmV0dXJuIF9iYXJjb2RlczIuZGVmYXVsdFtuYW1lXTtcbn07XG5cbi8vIFJlZ2lzdGVyIGFsbCBiYXJjb2Rlc1xuZm9yICh2YXIgbmFtZSBpbiBfYmFyY29kZXMyLmRlZmF1bHQpIHtcblx0aWYgKF9iYXJjb2RlczIuZGVmYXVsdC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuXHRcdC8vIFNlY3VyaXR5IGNoZWNrIGlmIHRoZSBwcm9wZXJ5IGlzIGEgcHJvdG90eXBlIHByb3BlcnR5XG5cdFx0cmVnaXN0ZXJCYXJjb2RlKF9iYXJjb2RlczIuZGVmYXVsdCwgbmFtZSk7XG5cdH1cbn1cbmZ1bmN0aW9uIHJlZ2lzdGVyQmFyY29kZShiYXJjb2RlcywgbmFtZSkge1xuXHRBUEkucHJvdG90eXBlW25hbWVdID0gQVBJLnByb3RvdHlwZVtuYW1lLnRvVXBwZXJDYXNlKCldID0gQVBJLnByb3RvdHlwZVtuYW1lLnRvTG93ZXJDYXNlKCldID0gZnVuY3Rpb24gKHRleHQsIG9wdGlvbnMpIHtcblx0XHR2YXIgYXBpID0gdGhpcztcblx0XHRyZXR1cm4gYXBpLl9lcnJvckhhbmRsZXIud3JhcEJhcmNvZGVDYWxsKGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIEVuc3VyZSB0ZXh0IGlzIG9wdGlvbnMudGV4dFxuXHRcdFx0b3B0aW9ucy50ZXh0ID0gdHlwZW9mIG9wdGlvbnMudGV4dCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiAnJyArIG9wdGlvbnMudGV4dDtcblxuXHRcdFx0dmFyIG5ld09wdGlvbnMgPSAoMCwgX21lcmdlMi5kZWZhdWx0KShhcGkuX29wdGlvbnMsIG9wdGlvbnMpO1xuXHRcdFx0bmV3T3B0aW9ucyA9ICgwLCBfb3B0aW9uc0Zyb21TdHJpbmdzMi5kZWZhdWx0KShuZXdPcHRpb25zKTtcblx0XHRcdHZhciBFbmNvZGVyID0gYmFyY29kZXNbbmFtZV07XG5cdFx0XHR2YXIgZW5jb2RlZCA9IGVuY29kZSh0ZXh0LCBFbmNvZGVyLCBuZXdPcHRpb25zKTtcblx0XHRcdGFwaS5fZW5jb2RpbmdzLnB1c2goZW5jb2RlZCk7XG5cblx0XHRcdHJldHVybiBhcGk7XG5cdFx0fSk7XG5cdH07XG59XG5cbi8vIGVuY29kZSgpIGhhbmRsZXMgdGhlIEVuY29kZXIgY2FsbCBhbmQgYnVpbGRzIHRoZSBiaW5hcnkgc3RyaW5nIHRvIGJlIHJlbmRlcmVkXG5mdW5jdGlvbiBlbmNvZGUodGV4dCwgRW5jb2Rlciwgb3B0aW9ucykge1xuXHQvLyBFbnN1cmUgdGhhdCB0ZXh0IGlzIGEgc3RyaW5nXG5cdHRleHQgPSBcIlwiICsgdGV4dDtcblxuXHR2YXIgZW5jb2RlciA9IG5ldyBFbmNvZGVyKHRleHQsIG9wdGlvbnMpO1xuXG5cdC8vIElmIHRoZSBpbnB1dCBpcyBub3QgdmFsaWQgZm9yIHRoZSBlbmNvZGVyLCB0aHJvdyBlcnJvci5cblx0Ly8gSWYgdGhlIHZhbGlkIGNhbGxiYWNrIG9wdGlvbiBpcyBzZXQsIGNhbGwgaXQgaW5zdGVhZCBvZiB0aHJvd2luZyBlcnJvclxuXHRpZiAoIWVuY29kZXIudmFsaWQoKSkge1xuXHRcdHRocm93IG5ldyBfZXhjZXB0aW9ucy5JbnZhbGlkSW5wdXRFeGNlcHRpb24oZW5jb2Rlci5jb25zdHJ1Y3Rvci5uYW1lLCB0ZXh0KTtcblx0fVxuXG5cdC8vIE1ha2UgYSByZXF1ZXN0IGZvciB0aGUgYmluYXJ5IGRhdGEgKGFuZCBvdGhlciBpbmZyb21hdGlvbikgdGhhdCBzaG91bGQgYmUgcmVuZGVyZWRcblx0dmFyIGVuY29kZWQgPSBlbmNvZGVyLmVuY29kZSgpO1xuXG5cdC8vIEVuY29kaW5ncyBjYW4gYmUgbmVzdGxlZCBsaWtlIFtbMS0xLCAxLTJdLCAyLCBbMy0xLCAzLTJdXG5cdC8vIENvbnZlcnQgdG8gWzEtMSwgMS0yLCAyLCAzLTEsIDMtMl1cblx0ZW5jb2RlZCA9ICgwLCBfbGluZWFyaXplRW5jb2RpbmdzMi5kZWZhdWx0KShlbmNvZGVkKTtcblxuXHQvLyBNZXJnZVxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGVuY29kZWQubGVuZ3RoOyBpKyspIHtcblx0XHRlbmNvZGVkW2ldLm9wdGlvbnMgPSAoMCwgX21lcmdlMi5kZWZhdWx0KShvcHRpb25zLCBlbmNvZGVkW2ldLm9wdGlvbnMpO1xuXHR9XG5cblx0cmV0dXJuIGVuY29kZWQ7XG59XG5cbmZ1bmN0aW9uIGF1dG9TZWxlY3RCYXJjb2RlKCkge1xuXHQvLyBJZiBDT0RFMTI4IGV4aXN0cy4gVXNlIGl0XG5cdGlmIChfYmFyY29kZXMyLmRlZmF1bHRbXCJDT0RFMTI4XCJdKSB7XG5cdFx0cmV0dXJuIFwiQ09ERTEyOFwiO1xuXHR9XG5cblx0Ly8gRWxzZSwgdGFrZSB0aGUgZmlyc3QgKHByb2JhYmx5IG9ubHkpIGJhcmNvZGVcblx0cmV0dXJuIE9iamVjdC5rZXlzKF9iYXJjb2RlczIuZGVmYXVsdClbMF07XG59XG5cbi8vIFNldHMgZ2xvYmFsIGVuY29kZXIgb3B0aW9uc1xuLy8gQWRkZWQgdG8gdGhlIGFwaSBieSB0aGUgSnNCYXJjb2RlIGZ1bmN0aW9uXG5BUEkucHJvdG90eXBlLm9wdGlvbnMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXHR0aGlzLl9vcHRpb25zID0gKDAsIF9tZXJnZTIuZGVmYXVsdCkodGhpcy5fb3B0aW9ucywgb3B0aW9ucyk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLy8gV2lsbCBjcmVhdGUgYSBibGFuayBzcGFjZSAodXN1YWxseSBpbiBiZXR3ZWVuIGJhcmNvZGVzKVxuQVBJLnByb3RvdHlwZS5ibGFuayA9IGZ1bmN0aW9uIChzaXplKSB7XG5cdHZhciB6ZXJvZXMgPSBuZXcgQXJyYXkoc2l6ZSArIDEpLmpvaW4oXCIwXCIpO1xuXHR0aGlzLl9lbmNvZGluZ3MucHVzaCh7IGRhdGE6IHplcm9lcyB9KTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vLyBJbml0aWFsaXplIEpzQmFyY29kZSBvbiBhbGwgSFRNTCBlbGVtZW50cyBkZWZpbmVkLlxuQVBJLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuXHQvLyBTaG91bGQgZG8gbm90aGluZyBpZiBubyBlbGVtZW50cyB3aGVyZSBmb3VuZFxuXHRpZiAoIXRoaXMuX3JlbmRlclByb3BlcnRpZXMpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBNYWtlIHN1cmUgcmVuZGVyUHJvcGVyaWVzIGlzIGFuIGFycmF5XG5cdGlmICghQXJyYXkuaXNBcnJheSh0aGlzLl9yZW5kZXJQcm9wZXJ0aWVzKSkge1xuXHRcdHRoaXMuX3JlbmRlclByb3BlcnRpZXMgPSBbdGhpcy5fcmVuZGVyUHJvcGVydGllc107XG5cdH1cblxuXHR2YXIgcmVuZGVyUHJvcGVydHk7XG5cdGZvciAodmFyIGkgaW4gdGhpcy5fcmVuZGVyUHJvcGVydGllcykge1xuXHRcdHJlbmRlclByb3BlcnR5ID0gdGhpcy5fcmVuZGVyUHJvcGVydGllc1tpXTtcblx0XHR2YXIgb3B0aW9ucyA9ICgwLCBfbWVyZ2UyLmRlZmF1bHQpKHRoaXMuX29wdGlvbnMsIHJlbmRlclByb3BlcnR5Lm9wdGlvbnMpO1xuXG5cdFx0aWYgKG9wdGlvbnMuZm9ybWF0ID09IFwiYXV0b1wiKSB7XG5cdFx0XHRvcHRpb25zLmZvcm1hdCA9IGF1dG9TZWxlY3RCYXJjb2RlKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fZXJyb3JIYW5kbGVyLndyYXBCYXJjb2RlQ2FsbChmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgdGV4dCA9IG9wdGlvbnMudmFsdWU7XG5cdFx0XHR2YXIgRW5jb2RlciA9IF9iYXJjb2RlczIuZGVmYXVsdFtvcHRpb25zLmZvcm1hdC50b1VwcGVyQ2FzZSgpXTtcblx0XHRcdHZhciBlbmNvZGVkID0gZW5jb2RlKHRleHQsIEVuY29kZXIsIG9wdGlvbnMpO1xuXG5cdFx0XHRyZW5kZXIocmVuZGVyUHJvcGVydHksIGVuY29kZWQsIG9wdGlvbnMpO1xuXHRcdH0pO1xuXHR9XG59O1xuXG4vLyBUaGUgcmVuZGVyIEFQSSBjYWxsLiBDYWxscyB0aGUgcmVhbCByZW5kZXIgZnVuY3Rpb24uXG5BUEkucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKCF0aGlzLl9yZW5kZXJQcm9wZXJ0aWVzKSB7XG5cdFx0dGhyb3cgbmV3IF9leGNlcHRpb25zLk5vRWxlbWVudEV4Y2VwdGlvbigpO1xuXHR9XG5cblx0aWYgKEFycmF5LmlzQXJyYXkodGhpcy5fcmVuZGVyUHJvcGVydGllcykpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3JlbmRlclByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJlbmRlcih0aGlzLl9yZW5kZXJQcm9wZXJ0aWVzW2ldLCB0aGlzLl9lbmNvZGluZ3MsIHRoaXMuX29wdGlvbnMpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZW5kZXIodGhpcy5fcmVuZGVyUHJvcGVydGllcywgdGhpcy5fZW5jb2RpbmdzLCB0aGlzLl9vcHRpb25zKTtcblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuQVBJLnByb3RvdHlwZS5fZGVmYXVsdHMgPSBfZGVmYXVsdHMyLmRlZmF1bHQ7XG5cbi8vIFByZXBhcmVzIHRoZSBlbmNvZGluZ3MgYW5kIGNhbGxzIHRoZSByZW5kZXJlclxuZnVuY3Rpb24gcmVuZGVyKHJlbmRlclByb3BlcnRpZXMsIGVuY29kaW5ncywgb3B0aW9ucykge1xuXHRlbmNvZGluZ3MgPSAoMCwgX2xpbmVhcml6ZUVuY29kaW5nczIuZGVmYXVsdCkoZW5jb2RpbmdzKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGVuY29kaW5ncy5sZW5ndGg7IGkrKykge1xuXHRcdGVuY29kaW5nc1tpXS5vcHRpb25zID0gKDAsIF9tZXJnZTIuZGVmYXVsdCkob3B0aW9ucywgZW5jb2RpbmdzW2ldLm9wdGlvbnMpO1xuXHRcdCgwLCBfZml4T3B0aW9uczIuZGVmYXVsdCkoZW5jb2RpbmdzW2ldLm9wdGlvbnMpO1xuXHR9XG5cblx0KDAsIF9maXhPcHRpb25zMi5kZWZhdWx0KShvcHRpb25zKTtcblxuXHR2YXIgUmVuZGVyZXIgPSByZW5kZXJQcm9wZXJ0aWVzLnJlbmRlcmVyO1xuXHR2YXIgcmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIocmVuZGVyUHJvcGVydGllcy5lbGVtZW50LCBlbmNvZGluZ3MsIG9wdGlvbnMpO1xuXHRyZW5kZXJlci5yZW5kZXIoKTtcblxuXHRpZiAocmVuZGVyUHJvcGVydGllcy5hZnRlclJlbmRlcikge1xuXHRcdHJlbmRlclByb3BlcnRpZXMuYWZ0ZXJSZW5kZXIoKTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdG8gYnJvd3NlclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0d2luZG93LkpzQmFyY29kZSA9IEpzQmFyY29kZTtcbn1cblxuLy8gRXhwb3J0IHRvIGpRdWVyeVxuLypnbG9iYWwgalF1ZXJ5ICovXG5pZiAodHlwZW9mIGpRdWVyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0alF1ZXJ5LmZuLkpzQmFyY29kZSA9IGZ1bmN0aW9uIChjb250ZW50LCBvcHRpb25zKSB7XG5cdFx0dmFyIGVsZW1lbnRBcnJheSA9IFtdO1xuXHRcdGpRdWVyeSh0aGlzKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdGVsZW1lbnRBcnJheS5wdXNoKHRoaXMpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBKc0JhcmNvZGUoZWxlbWVudEFycmF5LCBjb250ZW50LCBvcHRpb25zKTtcblx0fTtcbn1cblxuLy8gRXhwb3J0IHRvIGNvbW1vbkpTXG5tb2R1bGUuZXhwb3J0cyA9IEpzQmFyY29kZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEJhcmNvZGUgPSBmdW5jdGlvbiBCYXJjb2RlKGRhdGEsIG9wdGlvbnMpIHtcblx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJhcmNvZGUpO1xuXG5cdHRoaXMuZGF0YSA9IGRhdGE7XG5cdHRoaXMudGV4dCA9IG9wdGlvbnMudGV4dCB8fCBkYXRhO1xuXHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQmFyY29kZTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfQmFyY29kZTIgPSByZXF1aXJlKCcuLi9CYXJjb2RlLmpzJyk7XG5cbnZhciBfQmFyY29kZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CYXJjb2RlMik7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vLyBUaGlzIGlzIHRoZSBtYXN0ZXIgY2xhc3MsXG4vLyBpdCBkb2VzIHJlcXVpcmUgdGhlIHN0YXJ0IGNvZGUgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIHN0cmluZ1xudmFyIENPREUxMjggPSBmdW5jdGlvbiAoX0JhcmNvZGUpIHtcblx0X2luaGVyaXRzKENPREUxMjgsIF9CYXJjb2RlKTtcblxuXHRmdW5jdGlvbiBDT0RFMTI4KGRhdGEsIG9wdGlvbnMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ09ERTEyOCk7XG5cblx0XHQvLyBHZXQgYXJyYXkgb2YgYXNjaWkgY29kZXMgZnJvbSBkYXRhXG5cdFx0dmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENPREUxMjguX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDT0RFMTI4KSkuY2FsbCh0aGlzLCBkYXRhLnN1YnN0cmluZygxKSwgb3B0aW9ucykpO1xuXG5cdFx0X3RoaXMuYnl0ZXMgPSBkYXRhLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKGNoYXIpIHtcblx0XHRcdHJldHVybiBjaGFyLmNoYXJDb2RlQXQoMCk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIF90aGlzO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKENPREUxMjgsIFt7XG5cdFx0a2V5OiAndmFsaWQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB2YWxpZCgpIHtcblx0XHRcdC8vIEFTQ0lJIHZhbHVlIHJhbmdlcyAwLTEyNywgMjAwLTIxMVxuXHRcdFx0cmV0dXJuICgvXltcXHgwMC1cXHg3RlxceEM4LVxceEQzXSskLy50ZXN0KHRoaXMuZGF0YSlcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gVGhlIHB1YmxpYyBlbmNvZGluZyBmdW5jdGlvblxuXG5cdH0sIHtcblx0XHRrZXk6ICdlbmNvZGUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBlbmNvZGUoKSB7XG5cdFx0XHR2YXIgYnl0ZXMgPSB0aGlzLmJ5dGVzO1xuXHRcdFx0Ly8gUmVtb3ZlIHRoZSBzdGFydCBjb2RlIGZyb20gdGhlIGJ5dGVzIGFuZCBzZXQgaXRzIGluZGV4XG5cdFx0XHR2YXIgc3RhcnRJbmRleCA9IGJ5dGVzLnNoaWZ0KCkgLSAxMDU7XG5cdFx0XHQvLyBHZXQgc3RhcnQgc2V0IGJ5IGluZGV4XG5cdFx0XHR2YXIgc3RhcnRTZXQgPSBfY29uc3RhbnRzLlNFVF9CWV9DT0RFW3N0YXJ0SW5kZXhdO1xuXG5cdFx0XHRpZiAoc3RhcnRTZXQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIGVuY29kaW5nIGRvZXMgbm90IHN0YXJ0IHdpdGggYSBzdGFydCBjaGFyYWN0ZXIuJyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLnNob3VsZEVuY29kZUFzRWFuMTI4KCkgPT09IHRydWUpIHtcblx0XHRcdFx0Ynl0ZXMudW5zaGlmdChfY29uc3RhbnRzLkZOQzEpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdGFydCBlbmNvZGUgd2l0aCB0aGUgcmlnaHQgdHlwZVxuXHRcdFx0dmFyIGVuY29kaW5nUmVzdWx0ID0gQ09ERTEyOC5uZXh0KGJ5dGVzLCAxLCBzdGFydFNldCk7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHRleHQ6IHRoaXMudGV4dCA9PT0gdGhpcy5kYXRhID8gdGhpcy50ZXh0LnJlcGxhY2UoL1teXFx4MjAtXFx4N0VdL2csICcnKSA6IHRoaXMudGV4dCxcblx0XHRcdFx0ZGF0YTpcblx0XHRcdFx0Ly8gQWRkIHRoZSBzdGFydCBiaXRzXG5cdFx0XHRcdENPREUxMjguZ2V0QmFyKHN0YXJ0SW5kZXgpICtcblx0XHRcdFx0Ly8gQWRkIHRoZSBlbmNvZGVkIGJpdHNcblx0XHRcdFx0ZW5jb2RpbmdSZXN1bHQucmVzdWx0ICtcblx0XHRcdFx0Ly8gQWRkIHRoZSBjaGVja3N1bVxuXHRcdFx0XHRDT0RFMTI4LmdldEJhcigoZW5jb2RpbmdSZXN1bHQuY2hlY2tzdW0gKyBzdGFydEluZGV4KSAlIF9jb25zdGFudHMuTU9EVUxPKSArXG5cdFx0XHRcdC8vIEFkZCB0aGUgZW5kIGJpdHNcblx0XHRcdFx0Q09ERTEyOC5nZXRCYXIoX2NvbnN0YW50cy5TVE9QKVxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHQvLyBHUzEtMTI4L0VBTi0xMjhcblxuXHR9LCB7XG5cdFx0a2V5OiAnc2hvdWxkRW5jb2RlQXNFYW4xMjgnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBzaG91bGRFbmNvZGVBc0VhbjEyOCgpIHtcblx0XHRcdHZhciBpc0VBTjEyOCA9IHRoaXMub3B0aW9ucy5lYW4xMjggfHwgZmFsc2U7XG5cdFx0XHRpZiAodHlwZW9mIGlzRUFOMTI4ID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRpc0VBTjEyOCA9IGlzRUFOMTI4LnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJztcblx0XHRcdH1cblx0XHRcdHJldHVybiBpc0VBTjEyODtcblx0XHR9XG5cblx0XHQvLyBHZXQgYSBiYXIgc3ltYm9sIGJ5IGluZGV4XG5cblx0fV0sIFt7XG5cdFx0a2V5OiAnZ2V0QmFyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0QmFyKGluZGV4KSB7XG5cdFx0XHRyZXR1cm4gX2NvbnN0YW50cy5CQVJTW2luZGV4XSA/IF9jb25zdGFudHMuQkFSU1tpbmRleF0udG9TdHJpbmcoKSA6ICcnO1xuXHRcdH1cblxuXHRcdC8vIENvcnJlY3QgYW4gaW5kZXggYnkgYSBzZXQgYW5kIHNoaWZ0IGl0IGZyb20gdGhlIGJ5dGVzIGFycmF5XG5cblx0fSwge1xuXHRcdGtleTogJ2NvcnJlY3RJbmRleCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvcnJlY3RJbmRleChieXRlcywgc2V0KSB7XG5cdFx0XHRpZiAoc2V0ID09PSBfY29uc3RhbnRzLlNFVF9BKSB7XG5cdFx0XHRcdHZhciBjaGFyQ29kZSA9IGJ5dGVzLnNoaWZ0KCk7XG5cdFx0XHRcdHJldHVybiBjaGFyQ29kZSA8IDMyID8gY2hhckNvZGUgKyA2NCA6IGNoYXJDb2RlIC0gMzI7XG5cdFx0XHR9IGVsc2UgaWYgKHNldCA9PT0gX2NvbnN0YW50cy5TRVRfQikge1xuXHRcdFx0XHRyZXR1cm4gYnl0ZXMuc2hpZnQoKSAtIDMyO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIChieXRlcy5zaGlmdCgpIC0gNDgpICogMTAgKyBieXRlcy5zaGlmdCgpIC0gNDg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnbmV4dCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIG5leHQoYnl0ZXMsIHBvcywgc2V0KSB7XG5cdFx0XHRpZiAoIWJ5dGVzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4geyByZXN1bHQ6ICcnLCBjaGVja3N1bTogMCB9O1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbmV4dENvZGUgPSB2b2lkIDAsXG5cdFx0XHQgICAgaW5kZXggPSB2b2lkIDA7XG5cblx0XHRcdC8vIFNwZWNpYWwgY2hhcmFjdGVyc1xuXHRcdFx0aWYgKGJ5dGVzWzBdID49IDIwMCkge1xuXHRcdFx0XHRpbmRleCA9IGJ5dGVzLnNoaWZ0KCkgLSAxMDU7XG5cdFx0XHRcdHZhciBuZXh0U2V0ID0gX2NvbnN0YW50cy5TV0FQW2luZGV4XTtcblxuXHRcdFx0XHQvLyBTd2FwIHRvIG90aGVyIHNldFxuXHRcdFx0XHRpZiAobmV4dFNldCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0bmV4dENvZGUgPSBDT0RFMTI4Lm5leHQoYnl0ZXMsIHBvcyArIDEsIG5leHRTZXQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIENvbnRpbnVlIG9uIGN1cnJlbnQgc2V0IGJ1dCBlbmNvZGUgYSBzcGVjaWFsIGNoYXJhY3RlclxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdC8vIFNoaWZ0XG5cdFx0XHRcdFx0XHRpZiAoKHNldCA9PT0gX2NvbnN0YW50cy5TRVRfQSB8fCBzZXQgPT09IF9jb25zdGFudHMuU0VUX0IpICYmIGluZGV4ID09PSBfY29uc3RhbnRzLlNISUZUKSB7XG5cdFx0XHRcdFx0XHRcdC8vIENvbnZlcnQgdGhlIG5leHQgY2hhcmFjdGVyIHNvIHRoYXQgaXMgZW5jb2RlZCBjb3JyZWN0bHlcblx0XHRcdFx0XHRcdFx0Ynl0ZXNbMF0gPSBzZXQgPT09IF9jb25zdGFudHMuU0VUX0EgPyBieXRlc1swXSA+IDk1ID8gYnl0ZXNbMF0gLSA5NiA6IGJ5dGVzWzBdIDogYnl0ZXNbMF0gPCAzMiA/IGJ5dGVzWzBdICsgOTYgOiBieXRlc1swXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG5leHRDb2RlID0gQ09ERTEyOC5uZXh0KGJ5dGVzLCBwb3MgKyAxLCBzZXQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIENvbnRpbnVlIGVuY29kaW5nXG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRpbmRleCA9IENPREUxMjguY29ycmVjdEluZGV4KGJ5dGVzLCBzZXQpO1xuXHRcdFx0XHRcdG5leHRDb2RlID0gQ09ERTEyOC5uZXh0KGJ5dGVzLCBwb3MgKyAxLCBzZXQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdC8vIEdldCB0aGUgY29ycmVjdCBiaW5hcnkgZW5jb2RpbmcgYW5kIGNhbGN1bGF0ZSB0aGUgd2VpZ2h0XG5cdFx0XHR2YXIgZW5jID0gQ09ERTEyOC5nZXRCYXIoaW5kZXgpO1xuXHRcdFx0dmFyIHdlaWdodCA9IGluZGV4ICogcG9zO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRyZXN1bHQ6IGVuYyArIG5leHRDb2RlLnJlc3VsdCxcblx0XHRcdFx0Y2hlY2tzdW06IHdlaWdodCArIG5leHRDb2RlLmNoZWNrc3VtXG5cdFx0XHR9O1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBDT0RFMTI4O1xufShfQmFyY29kZTMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENPREUxMjg7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX0NPREUyID0gcmVxdWlyZSgnLi9DT0RFMTI4LmpzJyk7XG5cbnZhciBfQ09ERTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DT0RFMik7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ09ERTEyOEEgPSBmdW5jdGlvbiAoX0NPREUpIHtcblx0X2luaGVyaXRzKENPREUxMjhBLCBfQ09ERSk7XG5cblx0ZnVuY3Rpb24gQ09ERTEyOEEoc3RyaW5nLCBvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIENPREUxMjhBKTtcblxuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ09ERTEyOEEuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDT0RFMTI4QSkpLmNhbGwodGhpcywgX2NvbnN0YW50cy5BX1NUQVJUX0NIQVIgKyBzdHJpbmcsIG9wdGlvbnMpKTtcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhDT0RFMTI4QSwgW3tcblx0XHRrZXk6ICd2YWxpZCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHZhbGlkKCkge1xuXHRcdFx0cmV0dXJuIG5ldyBSZWdFeHAoJ14nICsgX2NvbnN0YW50cy5BX0NIQVJTICsgJyskJykudGVzdCh0aGlzLmRhdGEpO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBDT0RFMTI4QTtcbn0oX0NPREUzLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDT0RFMTI4QTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfQ09ERTIgPSByZXF1aXJlKCcuL0NPREUxMjguanMnKTtcblxudmFyIF9DT0RFMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NPREUyKTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDT0RFMTI4QiA9IGZ1bmN0aW9uIChfQ09ERSkge1xuXHRfaW5oZXJpdHMoQ09ERTEyOEIsIF9DT0RFKTtcblxuXHRmdW5jdGlvbiBDT0RFMTI4QihzdHJpbmcsIG9wdGlvbnMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ09ERTEyOEIpO1xuXG5cdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDT0RFMTI4Qi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENPREUxMjhCKSkuY2FsbCh0aGlzLCBfY29uc3RhbnRzLkJfU1RBUlRfQ0hBUiArIHN0cmluZywgb3B0aW9ucykpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKENPREUxMjhCLCBbe1xuXHRcdGtleTogJ3ZhbGlkJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gdmFsaWQoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFJlZ0V4cCgnXicgKyBfY29uc3RhbnRzLkJfQ0hBUlMgKyAnKyQnKS50ZXN0KHRoaXMuZGF0YSk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIENPREUxMjhCO1xufShfQ09ERTMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENPREUxMjhCOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9DT0RFMiA9IHJlcXVpcmUoJy4vQ09ERTEyOC5qcycpO1xuXG52YXIgX0NPREUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ09ERTIpO1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENPREUxMjhDID0gZnVuY3Rpb24gKF9DT0RFKSB7XG5cdF9pbmhlcml0cyhDT0RFMTI4QywgX0NPREUpO1xuXG5cdGZ1bmN0aW9uIENPREUxMjhDKHN0cmluZywgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDT0RFMTI4Qyk7XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENPREUxMjhDLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ09ERTEyOEMpKS5jYWxsKHRoaXMsIF9jb25zdGFudHMuQ19TVEFSVF9DSEFSICsgc3RyaW5nLCBvcHRpb25zKSk7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoQ09ERTEyOEMsIFt7XG5cdFx0a2V5OiAndmFsaWQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB2YWxpZCgpIHtcblx0XHRcdHJldHVybiBuZXcgUmVnRXhwKCdeJyArIF9jb25zdGFudHMuQ19DSEFSUyArICcrJCcpLnRlc3QodGhpcy5kYXRhKTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gQ09ERTEyOEM7XG59KF9DT0RFMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ09ERTEyOEM7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0NPREUyID0gcmVxdWlyZSgnLi9DT0RFMTI4Jyk7XG5cbnZhciBfQ09ERTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DT0RFMik7XG5cbnZhciBfYXV0byA9IHJlcXVpcmUoJy4vYXV0bycpO1xuXG52YXIgX2F1dG8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXV0byk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENPREUxMjhBVVRPID0gZnVuY3Rpb24gKF9DT0RFKSB7XG5cdF9pbmhlcml0cyhDT0RFMTI4QVVUTywgX0NPREUpO1xuXG5cdGZ1bmN0aW9uIENPREUxMjhBVVRPKGRhdGEsIG9wdGlvbnMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ09ERTEyOEFVVE8pO1xuXG5cdFx0Ly8gQVNDSUkgdmFsdWUgcmFuZ2VzIDAtMTI3LCAyMDAtMjExXG5cdFx0aWYgKC9eW1xceDAwLVxceDdGXFx4QzgtXFx4RDNdKyQvLnRlc3QoZGF0YSkpIHtcblx0XHRcdHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDT0RFMTI4QVVUTy5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENPREUxMjhBVVRPKSkuY2FsbCh0aGlzLCAoMCwgX2F1dG8yLmRlZmF1bHQpKGRhdGEpLCBvcHRpb25zKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDT0RFMTI4QVVUTy5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENPREUxMjhBVVRPKSkuY2FsbCh0aGlzLCBkYXRhLCBvcHRpb25zKSk7XG5cdFx0fVxuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcyk7XG5cdH1cblxuXHRyZXR1cm4gQ09ERTEyOEFVVE87XG59KF9DT0RFMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ09ERTEyOEFVVE87IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbi8vIE1hdGNoIFNldCBmdW5jdGlvbnNcbnZhciBtYXRjaFNldEFMZW5ndGggPSBmdW5jdGlvbiBtYXRjaFNldEFMZW5ndGgoc3RyaW5nKSB7XG5cdHJldHVybiBzdHJpbmcubWF0Y2gobmV3IFJlZ0V4cCgnXicgKyBfY29uc3RhbnRzLkFfQ0hBUlMgKyAnKicpKVswXS5sZW5ndGg7XG59O1xudmFyIG1hdGNoU2V0Qkxlbmd0aCA9IGZ1bmN0aW9uIG1hdGNoU2V0Qkxlbmd0aChzdHJpbmcpIHtcblx0cmV0dXJuIHN0cmluZy5tYXRjaChuZXcgUmVnRXhwKCdeJyArIF9jb25zdGFudHMuQl9DSEFSUyArICcqJykpWzBdLmxlbmd0aDtcbn07XG52YXIgbWF0Y2hTZXRDID0gZnVuY3Rpb24gbWF0Y2hTZXRDKHN0cmluZykge1xuXHRyZXR1cm4gc3RyaW5nLm1hdGNoKG5ldyBSZWdFeHAoJ14nICsgX2NvbnN0YW50cy5DX0NIQVJTICsgJyonKSlbMF07XG59O1xuXG4vLyBDT0RFMTI4QSBvciBDT0RFMTI4QlxuZnVuY3Rpb24gYXV0b1NlbGVjdEZyb21BQihzdHJpbmcsIGlzQSkge1xuXHR2YXIgcmFuZ2VzID0gaXNBID8gX2NvbnN0YW50cy5BX0NIQVJTIDogX2NvbnN0YW50cy5CX0NIQVJTO1xuXHR2YXIgdW50aWxDID0gc3RyaW5nLm1hdGNoKG5ldyBSZWdFeHAoJ14oJyArIHJhbmdlcyArICcrPykoKFswLTldezJ9KXsyLH0pKFteMC05XXwkKScpKTtcblxuXHRpZiAodW50aWxDKSB7XG5cdFx0cmV0dXJuIHVudGlsQ1sxXSArIFN0cmluZy5mcm9tQ2hhckNvZGUoMjA0KSArIGF1dG9TZWxlY3RGcm9tQyhzdHJpbmcuc3Vic3RyaW5nKHVudGlsQ1sxXS5sZW5ndGgpKTtcblx0fVxuXG5cdHZhciBjaGFycyA9IHN0cmluZy5tYXRjaChuZXcgUmVnRXhwKCdeJyArIHJhbmdlcyArICcrJykpWzBdO1xuXG5cdGlmIChjaGFycy5sZW5ndGggPT09IHN0cmluZy5sZW5ndGgpIHtcblx0XHRyZXR1cm4gc3RyaW5nO1xuXHR9XG5cblx0cmV0dXJuIGNoYXJzICsgU3RyaW5nLmZyb21DaGFyQ29kZShpc0EgPyAyMDUgOiAyMDYpICsgYXV0b1NlbGVjdEZyb21BQihzdHJpbmcuc3Vic3RyaW5nKGNoYXJzLmxlbmd0aCksICFpc0EpO1xufVxuXG4vLyBDT0RFMTI4Q1xuZnVuY3Rpb24gYXV0b1NlbGVjdEZyb21DKHN0cmluZykge1xuXHR2YXIgY01hdGNoID0gbWF0Y2hTZXRDKHN0cmluZyk7XG5cdHZhciBsZW5ndGggPSBjTWF0Y2gubGVuZ3RoO1xuXG5cdGlmIChsZW5ndGggPT09IHN0cmluZy5sZW5ndGgpIHtcblx0XHRyZXR1cm4gc3RyaW5nO1xuXHR9XG5cblx0c3RyaW5nID0gc3RyaW5nLnN1YnN0cmluZyhsZW5ndGgpO1xuXG5cdC8vIFNlbGVjdCBBL0IgZGVwZW5kaW5nIG9uIHRoZSBsb25nZXN0IG1hdGNoXG5cdHZhciBpc0EgPSBtYXRjaFNldEFMZW5ndGgoc3RyaW5nKSA+PSBtYXRjaFNldEJMZW5ndGgoc3RyaW5nKTtcblx0cmV0dXJuIGNNYXRjaCArIFN0cmluZy5mcm9tQ2hhckNvZGUoaXNBID8gMjA2IDogMjA1KSArIGF1dG9TZWxlY3RGcm9tQUIoc3RyaW5nLCBpc0EpO1xufVxuXG4vLyBEZXRlY3QgQ29kZSBTZXQgKEEsIEIgb3IgQykgYW5kIGZvcm1hdCB0aGUgc3RyaW5nXG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0dmFyIG5ld1N0cmluZyA9IHZvaWQgMDtcblx0dmFyIGNMZW5ndGggPSBtYXRjaFNldEMoc3RyaW5nKS5sZW5ndGg7XG5cblx0Ly8gU2VsZWN0IDEyOEMgaWYgdGhlIHN0cmluZyBzdGFydCB3aXRoIGVub3VnaCBkaWdpdHNcblx0aWYgKGNMZW5ndGggPj0gMikge1xuXHRcdG5ld1N0cmluZyA9IF9jb25zdGFudHMuQ19TVEFSVF9DSEFSICsgYXV0b1NlbGVjdEZyb21DKHN0cmluZyk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gU2VsZWN0IEEvQiBkZXBlbmRpbmcgb24gdGhlIGxvbmdlc3QgbWF0Y2hcblx0XHR2YXIgaXNBID0gbWF0Y2hTZXRBTGVuZ3RoKHN0cmluZykgPiBtYXRjaFNldEJMZW5ndGgoc3RyaW5nKTtcblx0XHRuZXdTdHJpbmcgPSAoaXNBID8gX2NvbnN0YW50cy5BX1NUQVJUX0NIQVIgOiBfY29uc3RhbnRzLkJfU1RBUlRfQ0hBUikgKyBhdXRvU2VsZWN0RnJvbUFCKHN0cmluZywgaXNBKTtcblx0fVxuXG5cdHJldHVybiBuZXdTdHJpbmcucmVwbGFjZSgvW1xceENEXFx4Q0VdKFteXSlbXFx4Q0RcXHhDRV0vLCAvLyBBbnkgc2VxdWVuY2UgYmV0d2VlbiAyMDUgYW5kIDIwNiBjaGFyYWN0ZXJzXG5cdGZ1bmN0aW9uIChtYXRjaCwgY2hhcikge1xuXHRcdHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDIwMykgKyBjaGFyO1xuXHR9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfU0VUX0JZX0NPREU7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbi8vIGNvbnN0YW50cyBmb3IgaW50ZXJuYWwgdXNhZ2VcbnZhciBTRVRfQSA9IGV4cG9ydHMuU0VUX0EgPSAwO1xudmFyIFNFVF9CID0gZXhwb3J0cy5TRVRfQiA9IDE7XG52YXIgU0VUX0MgPSBleHBvcnRzLlNFVF9DID0gMjtcblxuLy8gU3BlY2lhbCBjaGFyYWN0ZXJzXG52YXIgU0hJRlQgPSBleHBvcnRzLlNISUZUID0gOTg7XG52YXIgU1RBUlRfQSA9IGV4cG9ydHMuU1RBUlRfQSA9IDEwMztcbnZhciBTVEFSVF9CID0gZXhwb3J0cy5TVEFSVF9CID0gMTA0O1xudmFyIFNUQVJUX0MgPSBleHBvcnRzLlNUQVJUX0MgPSAxMDU7XG52YXIgTU9EVUxPID0gZXhwb3J0cy5NT0RVTE8gPSAxMDM7XG52YXIgU1RPUCA9IGV4cG9ydHMuU1RPUCA9IDEwNjtcbnZhciBGTkMxID0gZXhwb3J0cy5GTkMxID0gMjA3O1xuXG4vLyBHZXQgc2V0IGJ5IHN0YXJ0IGNvZGVcbnZhciBTRVRfQllfQ09ERSA9IGV4cG9ydHMuU0VUX0JZX0NPREUgPSAoX1NFVF9CWV9DT0RFID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfU0VUX0JZX0NPREUsIFNUQVJUX0EsIFNFVF9BKSwgX2RlZmluZVByb3BlcnR5KF9TRVRfQllfQ09ERSwgU1RBUlRfQiwgU0VUX0IpLCBfZGVmaW5lUHJvcGVydHkoX1NFVF9CWV9DT0RFLCBTVEFSVF9DLCBTRVRfQyksIF9TRVRfQllfQ09ERSk7XG5cbi8vIEdldCBuZXh0IHNldCBieSBjb2RlXG52YXIgU1dBUCA9IGV4cG9ydHMuU1dBUCA9IHtcblx0MTAxOiBTRVRfQSxcblx0MTAwOiBTRVRfQixcblx0OTk6IFNFVF9DXG59O1xuXG52YXIgQV9TVEFSVF9DSEFSID0gZXhwb3J0cy5BX1NUQVJUX0NIQVIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDIwOCk7IC8vIFNUQVJUX0EgKyAxMDVcbnZhciBCX1NUQVJUX0NIQVIgPSBleHBvcnRzLkJfU1RBUlRfQ0hBUiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMjA5KTsgLy8gU1RBUlRfQiArIDEwNVxudmFyIENfU1RBUlRfQ0hBUiA9IGV4cG9ydHMuQ19TVEFSVF9DSEFSID0gU3RyaW5nLmZyb21DaGFyQ29kZSgyMTApOyAvLyBTVEFSVF9DICsgMTA1XG5cbi8vIDEyOEEgKENvZGUgU2V0IEEpXG4vLyBBU0NJSSBjaGFyYWN0ZXJzIDAwIHRvIDk1ICgw4oCTOSwgQeKAk1ogYW5kIGNvbnRyb2wgY29kZXMpLCBzcGVjaWFsIGNoYXJhY3RlcnMsIGFuZCBGTkMgMeKAkzRcbnZhciBBX0NIQVJTID0gZXhwb3J0cy5BX0NIQVJTID0gXCJbXFx4MDAtXFx4NUZcXHhDOC1cXHhDRl1cIjtcblxuLy8gMTI4QiAoQ29kZSBTZXQgQilcbi8vIEFTQ0lJIGNoYXJhY3RlcnMgMzIgdG8gMTI3ICgw4oCTOSwgQeKAk1osIGHigJN6KSwgc3BlY2lhbCBjaGFyYWN0ZXJzLCBhbmQgRk5DIDHigJM0XG52YXIgQl9DSEFSUyA9IGV4cG9ydHMuQl9DSEFSUyA9IFwiW1xceDIwLVxceDdGXFx4QzgtXFx4Q0ZdXCI7XG5cbi8vIDEyOEMgKENvZGUgU2V0IEMpXG4vLyAwMOKAkzk5IChlbmNvZGVzIHR3byBkaWdpdHMgd2l0aCBhIHNpbmdsZSBjb2RlIHBvaW50KSBhbmQgRk5DMVxudmFyIENfQ0hBUlMgPSBleHBvcnRzLkNfQ0hBUlMgPSBcIihcXHhDRipbMC05XXsyfVxceENGKilcIjtcblxuLy8gQ09ERTEyOCBpbmNsdWRlcyAxMDcgc3ltYm9sczpcbi8vIDEwMyBkYXRhIHN5bWJvbHMsIDMgc3RhcnQgc3ltYm9scyAoQSwgQiBhbmQgQyksIGFuZCAxIHN0b3Agc3ltYm9sICh0aGUgbGFzdCBvbmUpXG4vLyBFYWNoIHN5bWJvbCBjb25zaXN0IG9mIHRocmVlIGJsYWNrIGJhcnMgKDEpIGFuZCB0aHJlZSB3aGl0ZSBzcGFjZXMgKDApLlxudmFyIEJBUlMgPSBleHBvcnRzLkJBUlMgPSBbMTEwMTEwMDExMDAsIDExMDAxMTAxMTAwLCAxMTAwMTEwMDExMCwgMTAwMTAwMTEwMDAsIDEwMDEwMDAxMTAwLCAxMDAwMTAwMTEwMCwgMTAwMTEwMDEwMDAsIDEwMDExMDAwMTAwLCAxMDAwMTEwMDEwMCwgMTEwMDEwMDEwMDAsIDExMDAxMDAwMTAwLCAxMTAwMDEwMDEwMCwgMTAxMTAwMTExMDAsIDEwMDExMDExMTAwLCAxMDAxMTAwMTExMCwgMTAxMTEwMDExMDAsIDEwMDExMTAxMTAwLCAxMDAxMTEwMDExMCwgMTEwMDExMTAwMTAsIDExMDAxMDExMTAwLCAxMTAwMTAwMTExMCwgMTEwMTExMDAxMDAsIDExMDAxMTEwMTAwLCAxMTEwMTEwMTExMCwgMTExMDEwMDExMDAsIDExMTAwMTAxMTAwLCAxMTEwMDEwMDExMCwgMTExMDExMDAxMDAsIDExMTAwMTEwMTAwLCAxMTEwMDExMDAxMCwgMTEwMTEwMTEwMDAsIDExMDExMDAwMTEwLCAxMTAwMDExMDExMCwgMTAxMDAwMTEwMDAsIDEwMDAxMDExMDAwLCAxMDAwMTAwMDExMCwgMTAxMTAwMDEwMDAsIDEwMDAxMTAxMDAwLCAxMDAwMTEwMDAxMCwgMTEwMTAwMDEwMDAsIDExMDAwMTAxMDAwLCAxMTAwMDEwMDAxMCwgMTAxMTAxMTEwMDAsIDEwMTEwMDAxMTEwLCAxMDAwMTEwMTExMCwgMTAxMTEwMTEwMDAsIDEwMTExMDAwMTEwLCAxMDAwMTExMDExMCwgMTExMDExMTAxMTAsIDExMDEwMDAxMTEwLCAxMTAwMDEwMTExMCwgMTEwMTExMDEwMDAsIDExMDExMTAwMDEwLCAxMTAxMTEwMTExMCwgMTExMDEwMTEwMDAsIDExMTAxMDAwMTEwLCAxMTEwMDAxMDExMCwgMTExMDExMDEwMDAsIDExMTAxMTAwMDEwLCAxMTEwMDAxMTAxMCwgMTExMDExMTEwMTAsIDExMDAxMDAwMDEwLCAxMTExMDAwMTAxMCwgMTAxMDAxMTAwMDAsIDEwMTAwMDAxMTAwLCAxMDAxMDExMDAwMCwgMTAwMTAwMDAxMTAsIDEwMDAwMTAxMTAwLCAxMDAwMDEwMDExMCwgMTAxMTAwMTAwMDAsIDEwMTEwMDAwMTAwLCAxMDAxMTAxMDAwMCwgMTAwMTEwMDAwMTAsIDEwMDAwMTEwMTAwLCAxMDAwMDExMDAxMCwgMTEwMDAwMTAwMTAsIDExMDAxMDEwMDAwLCAxMTExMDExMTAxMCwgMTEwMDAwMTAxMDAsIDEwMDAxMTExMDEwLCAxMDEwMDExMTEwMCwgMTAwMTAxMTExMDAsIDEwMDEwMDExMTEwLCAxMDExMTEwMDEwMCwgMTAwMTExMTAxMDAsIDEwMDExMTEwMDEwLCAxMTExMDEwMDEwMCwgMTExMTAwMTAxMDAsIDExMTEwMDEwMDEwLCAxMTAxMTAxMTExMCwgMTEwMTExMTAxMTAsIDExMTEwMTEwMTEwLCAxMDEwMTExMTAwMCwgMTAxMDAwMTExMTAsIDEwMDAxMDExMTEwLCAxMDExMTEwMTAwMCwgMTAxMTExMDAwMTAsIDExMTEwMTAxMDAwLCAxMTExMDEwMDAxMCwgMTAxMTEwMTExMTAsIDEwMTExMTAxMTEwLCAxMTEwMTAxMTExMCwgMTExMTAxMDExMTAsIDExMDEwMDAwMTAwLCAxMTAxMDAxMDAwMCwgMTEwMTAwMTExMDAsIDExMDAwMTExMDEwMTFdOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuQ09ERTEyOEMgPSBleHBvcnRzLkNPREUxMjhCID0gZXhwb3J0cy5DT0RFMTI4QSA9IGV4cG9ydHMuQ09ERTEyOCA9IHVuZGVmaW5lZDtcblxudmFyIF9DT0RFMTI4X0FVVE8gPSByZXF1aXJlKCcuL0NPREUxMjhfQVVUTy5qcycpO1xuXG52YXIgX0NPREUxMjhfQVVUTzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DT0RFMTI4X0FVVE8pO1xuXG52YXIgX0NPREUxMjhBID0gcmVxdWlyZSgnLi9DT0RFMTI4QS5qcycpO1xuXG52YXIgX0NPREUxMjhBMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NPREUxMjhBKTtcblxudmFyIF9DT0RFMTI4QiA9IHJlcXVpcmUoJy4vQ09ERTEyOEIuanMnKTtcblxudmFyIF9DT0RFMTI4QjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DT0RFMTI4Qik7XG5cbnZhciBfQ09ERTEyOEMgPSByZXF1aXJlKCcuL0NPREUxMjhDLmpzJyk7XG5cbnZhciBfQ09ERTEyOEMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ09ERTEyOEMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLkNPREUxMjggPSBfQ09ERTEyOF9BVVRPMi5kZWZhdWx0O1xuZXhwb3J0cy5DT0RFMTI4QSA9IF9DT0RFMTI4QTIuZGVmYXVsdDtcbmV4cG9ydHMuQ09ERTEyOEIgPSBfQ09ERTEyOEIyLmRlZmF1bHQ7XG5leHBvcnRzLkNPREUxMjhDID0gX0NPREUxMjhDMi5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5DT0RFMzkgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfQmFyY29kZTIgPSByZXF1aXJlKFwiLi4vQmFyY29kZS5qc1wiKTtcblxudmFyIF9CYXJjb2RlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0JhcmNvZGUyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvLyBFbmNvZGluZyBkb2N1bWVudGF0aW9uOlxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29kZV8zOSNFbmNvZGluZ1xuXG52YXIgQ09ERTM5ID0gZnVuY3Rpb24gKF9CYXJjb2RlKSB7XG5cdF9pbmhlcml0cyhDT0RFMzksIF9CYXJjb2RlKTtcblxuXHRmdW5jdGlvbiBDT0RFMzkoZGF0YSwgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDT0RFMzkpO1xuXG5cdFx0ZGF0YSA9IGRhdGEudG9VcHBlckNhc2UoKTtcblxuXHRcdC8vIENhbGN1bGF0ZSBtb2Q0MyBjaGVja3N1bSBpZiBlbmFibGVkXG5cdFx0aWYgKG9wdGlvbnMubW9kNDMpIHtcblx0XHRcdGRhdGEgKz0gZ2V0Q2hhcmFjdGVyKG1vZDQzY2hlY2tzdW0oZGF0YSkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ09ERTM5Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ09ERTM5KSkuY2FsbCh0aGlzLCBkYXRhLCBvcHRpb25zKSk7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoQ09ERTM5LCBbe1xuXHRcdGtleTogXCJlbmNvZGVcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZW5jb2RlKCkge1xuXHRcdFx0Ly8gRmlyc3QgY2hhcmFjdGVyIGlzIGFsd2F5cyBhICpcblx0XHRcdHZhciByZXN1bHQgPSBnZXRFbmNvZGluZyhcIipcIik7XG5cblx0XHRcdC8vIFRha2UgZXZlcnkgY2hhcmFjdGVyIGFuZCBhZGQgdGhlIGJpbmFyeSByZXByZXNlbnRhdGlvbiB0byB0aGUgcmVzdWx0XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRyZXN1bHQgKz0gZ2V0RW5jb2RpbmcodGhpcy5kYXRhW2ldKSArIFwiMFwiO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBMYXN0IGNoYXJhY3RlciBpcyBhbHdheXMgYSAqXG5cdFx0XHRyZXN1bHQgKz0gZ2V0RW5jb2RpbmcoXCIqXCIpO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhOiByZXN1bHQsXG5cdFx0XHRcdHRleHQ6IHRoaXMudGV4dFxuXHRcdFx0fTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwidmFsaWRcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gdmFsaWQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kYXRhLnNlYXJjaCgvXlswLTlBLVpcXC1cXC5cXCBcXCRcXC9cXCtcXCVdKyQvKSAhPT0gLTE7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIENPREUzOTtcbn0oX0JhcmNvZGUzLmRlZmF1bHQpO1xuXG4vLyBBbGwgY2hhcmFjdGVycy4gVGhlIHBvc2l0aW9uIGluIHRoZSBhcnJheSBpcyB0aGUgKGNoZWNrc3VtKSB2YWx1ZVxuXG5cbnZhciBjaGFyYWN0ZXJzID0gW1wiMFwiLCBcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIiwgXCJLXCIsIFwiTFwiLCBcIk1cIiwgXCJOXCIsIFwiT1wiLCBcIlBcIiwgXCJRXCIsIFwiUlwiLCBcIlNcIiwgXCJUXCIsIFwiVVwiLCBcIlZcIiwgXCJXXCIsIFwiWFwiLCBcIllcIiwgXCJaXCIsIFwiLVwiLCBcIi5cIiwgXCIgXCIsIFwiJFwiLCBcIi9cIiwgXCIrXCIsIFwiJVwiLCBcIipcIl07XG5cbi8vIFRoZSBkZWNpbWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBjaGFyYWN0ZXJzLCBpcyBjb252ZXJ0ZWQgdG8gdGhlXG4vLyBjb3JyZXNwb25kaW5nIGJpbmFyeSB3aXRoIHRoZSBnZXRFbmNvZGluZyBmdW5jdGlvblxudmFyIGVuY29kaW5ncyA9IFsyMDk1NywgMjk3ODMsIDIzNjM5LCAzMDQ4NSwgMjA5NTEsIDI5ODEzLCAyMzY2OSwgMjA4NTUsIDI5Nzg5LCAyMzY0NSwgMjk5NzUsIDIzODMxLCAzMDUzMywgMjIyOTUsIDMwMTQ5LCAyNDAwNSwgMjE2MjMsIDI5OTgxLCAyMzgzNywgMjIzMDEsIDMwMDIzLCAyMzg3OSwgMzA1NDUsIDIyMzQzLCAzMDE2MSwgMjQwMTcsIDIxOTU5LCAzMDA2NSwgMjM5MjEsIDIyMzg1LCAyOTAxNSwgMTgyNjMsIDI5MTQxLCAxNzg3OSwgMjkwNDUsIDE4MjkzLCAxNzc4MywgMjkwMjEsIDE4MjY5LCAxNzQ3NywgMTc0ODksIDE3NjgxLCAyMDc1MywgMzU3NzBdO1xuXG4vLyBHZXQgdGhlIGJpbmFyeSByZXByZXNlbnRhdGlvbiBvZiBhIGNoYXJhY3RlciBieSBjb252ZXJ0aW5nIHRoZSBlbmNvZGluZ3Ncbi8vIGZyb20gZGVjaW1hbCB0byBiaW5hcnlcbmZ1bmN0aW9uIGdldEVuY29kaW5nKGNoYXJhY3Rlcikge1xuXHRyZXR1cm4gZ2V0QmluYXJ5KGNoYXJhY3RlclZhbHVlKGNoYXJhY3RlcikpO1xufVxuXG5mdW5jdGlvbiBnZXRCaW5hcnkoY2hhcmFjdGVyVmFsdWUpIHtcblx0cmV0dXJuIGVuY29kaW5nc1tjaGFyYWN0ZXJWYWx1ZV0udG9TdHJpbmcoMik7XG59XG5cbmZ1bmN0aW9uIGdldENoYXJhY3RlcihjaGFyYWN0ZXJWYWx1ZSkge1xuXHRyZXR1cm4gY2hhcmFjdGVyc1tjaGFyYWN0ZXJWYWx1ZV07XG59XG5cbmZ1bmN0aW9uIGNoYXJhY3RlclZhbHVlKGNoYXJhY3Rlcikge1xuXHRyZXR1cm4gY2hhcmFjdGVycy5pbmRleE9mKGNoYXJhY3Rlcik7XG59XG5cbmZ1bmN0aW9uIG1vZDQzY2hlY2tzdW0oZGF0YSkge1xuXHR2YXIgY2hlY2tzdW0gPSAwO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRjaGVja3N1bSArPSBjaGFyYWN0ZXJWYWx1ZShkYXRhW2ldKTtcblx0fVxuXG5cdGNoZWNrc3VtID0gY2hlY2tzdW0gJSA0Mztcblx0cmV0dXJuIGNoZWNrc3VtO1xufVxuXG5leHBvcnRzLkNPREUzOSA9IENPREUzOTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcblxudmFyIF9lbmNvZGVyID0gcmVxdWlyZSgnLi9lbmNvZGVyJyk7XG5cbnZhciBfZW5jb2RlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9lbmNvZGVyKTtcblxudmFyIF9CYXJjb2RlMiA9IHJlcXVpcmUoJy4uL0JhcmNvZGUnKTtcblxudmFyIF9CYXJjb2RlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0JhcmNvZGUyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vLyBCYXNlIGNsYXNzIGZvciBFQU44ICYgRUFOMTNcbnZhciBFQU4gPSBmdW5jdGlvbiAoX0JhcmNvZGUpIHtcblx0X2luaGVyaXRzKEVBTiwgX0JhcmNvZGUpO1xuXG5cdGZ1bmN0aW9uIEVBTihkYXRhLCBvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIEVBTik7XG5cblx0XHQvLyBNYWtlIHN1cmUgdGhlIGZvbnQgaXMgbm90IGJpZ2dlciB0aGFuIHRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBndWFyZCBiYXJzXG5cdFx0dmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEVBTi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEVBTikpLmNhbGwodGhpcywgZGF0YSwgb3B0aW9ucykpO1xuXG5cdFx0X3RoaXMuZm9udFNpemUgPSAhb3B0aW9ucy5mbGF0ICYmIG9wdGlvbnMuZm9udFNpemUgPiBvcHRpb25zLndpZHRoICogMTAgPyBvcHRpb25zLndpZHRoICogMTAgOiBvcHRpb25zLmZvbnRTaXplO1xuXG5cdFx0Ly8gTWFrZSB0aGUgZ3VhcmQgYmFycyBnbyBkb3duIGhhbGYgdGhlIHdheSBvZiB0aGUgdGV4dFxuXHRcdF90aGlzLmd1YXJkSGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgKyBfdGhpcy5mb250U2l6ZSAvIDIgKyBvcHRpb25zLnRleHRNYXJnaW47XG5cdFx0cmV0dXJuIF90aGlzO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKEVBTiwgW3tcblx0XHRrZXk6ICdlbmNvZGUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBlbmNvZGUoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25zLmZsYXQgPyB0aGlzLmVuY29kZUZsYXQoKSA6IHRoaXMuZW5jb2RlR3VhcmRlZCgpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2xlZnRUZXh0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gbGVmdFRleHQoZnJvbSwgdG8pIHtcblx0XHRcdHJldHVybiB0aGlzLnRleHQuc3Vic3RyKGZyb20sIHRvKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdsZWZ0RW5jb2RlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gbGVmdEVuY29kZShkYXRhLCBzdHJ1Y3R1cmUpIHtcblx0XHRcdHJldHVybiAoMCwgX2VuY29kZXIyLmRlZmF1bHQpKGRhdGEsIHN0cnVjdHVyZSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmlnaHRUZXh0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmlnaHRUZXh0KGZyb20sIHRvKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50ZXh0LnN1YnN0cihmcm9tLCB0byk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmlnaHRFbmNvZGUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByaWdodEVuY29kZShkYXRhLCBzdHJ1Y3R1cmUpIHtcblx0XHRcdHJldHVybiAoMCwgX2VuY29kZXIyLmRlZmF1bHQpKGRhdGEsIHN0cnVjdHVyZSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZW5jb2RlR3VhcmRlZCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGVuY29kZUd1YXJkZWQoKSB7XG5cdFx0XHR2YXIgdGV4dE9wdGlvbnMgPSB7IGZvbnRTaXplOiB0aGlzLmZvbnRTaXplIH07XG5cdFx0XHR2YXIgZ3VhcmRPcHRpb25zID0geyBoZWlnaHQ6IHRoaXMuZ3VhcmRIZWlnaHQgfTtcblxuXHRcdFx0cmV0dXJuIFt7IGRhdGE6IF9jb25zdGFudHMuU0lERV9CSU4sIG9wdGlvbnM6IGd1YXJkT3B0aW9ucyB9LCB7IGRhdGE6IHRoaXMubGVmdEVuY29kZSgpLCB0ZXh0OiB0aGlzLmxlZnRUZXh0KCksIG9wdGlvbnM6IHRleHRPcHRpb25zIH0sIHsgZGF0YTogX2NvbnN0YW50cy5NSURETEVfQklOLCBvcHRpb25zOiBndWFyZE9wdGlvbnMgfSwgeyBkYXRhOiB0aGlzLnJpZ2h0RW5jb2RlKCksIHRleHQ6IHRoaXMucmlnaHRUZXh0KCksIG9wdGlvbnM6IHRleHRPcHRpb25zIH0sIHsgZGF0YTogX2NvbnN0YW50cy5TSURFX0JJTiwgb3B0aW9uczogZ3VhcmRPcHRpb25zIH1dO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2VuY29kZUZsYXQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBlbmNvZGVGbGF0KCkge1xuXHRcdFx0dmFyIGRhdGEgPSBbX2NvbnN0YW50cy5TSURFX0JJTiwgdGhpcy5sZWZ0RW5jb2RlKCksIF9jb25zdGFudHMuTUlERExFX0JJTiwgdGhpcy5yaWdodEVuY29kZSgpLCBfY29uc3RhbnRzLlNJREVfQklOXTtcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YTogZGF0YS5qb2luKCcnKSxcblx0XHRcdFx0dGV4dDogdGhpcy50ZXh0XG5cdFx0XHR9O1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBFQU47XG59KF9CYXJjb2RlMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRUFOOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQob2JqZWN0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpOyB9IH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9O1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbnZhciBfRUFOMiA9IHJlcXVpcmUoJy4vRUFOJyk7XG5cbnZhciBfRUFOMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0VBTjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9IC8vIEVuY29kaW5nIGRvY3VtZW50YXRpb246XG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JbnRlcm5hdGlvbmFsX0FydGljbGVfTnVtYmVyXyhFQU4pI0JpbmFyeV9lbmNvZGluZ19vZl9kYXRhX2RpZ2l0c19pbnRvX0VBTi0xM19iYXJjb2RlXG5cbi8vIENhbGN1bGF0ZSB0aGUgY2hlY2tzdW0gZGlnaXRcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0ludGVybmF0aW9uYWxfQXJ0aWNsZV9OdW1iZXJfKEVBTikjQ2FsY3VsYXRpb25fb2ZfY2hlY2tzdW1fZGlnaXRcbnZhciBjaGVja3N1bSA9IGZ1bmN0aW9uIGNoZWNrc3VtKG51bWJlcikge1xuXHR2YXIgcmVzID0gbnVtYmVyLnN1YnN0cigwLCAxMikuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdHJldHVybiArbjtcblx0fSkucmVkdWNlKGZ1bmN0aW9uIChzdW0sIGEsIGlkeCkge1xuXHRcdHJldHVybiBpZHggJSAyID8gc3VtICsgYSAqIDMgOiBzdW0gKyBhO1xuXHR9LCAwKTtcblxuXHRyZXR1cm4gKDEwIC0gcmVzICUgMTApICUgMTA7XG59O1xuXG52YXIgRUFOMTMgPSBmdW5jdGlvbiAoX0VBTikge1xuXHRfaW5oZXJpdHMoRUFOMTMsIF9FQU4pO1xuXG5cdGZ1bmN0aW9uIEVBTjEzKGRhdGEsIG9wdGlvbnMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgRUFOMTMpO1xuXG5cdFx0Ly8gQWRkIGNoZWNrc3VtIGlmIGl0IGRvZXMgbm90IGV4aXN0XG5cdFx0aWYgKGRhdGEuc2VhcmNoKC9eWzAtOV17MTJ9JC8pICE9PSAtMSkge1xuXHRcdFx0ZGF0YSArPSBjaGVja3N1bShkYXRhKTtcblx0XHR9XG5cblx0XHQvLyBBZGRzIGEgbGFzdCBjaGFyYWN0ZXIgdG8gdGhlIGVuZCBvZiB0aGUgYmFyY29kZVxuXHRcdHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChFQU4xMy5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEVBTjEzKSkuY2FsbCh0aGlzLCBkYXRhLCBvcHRpb25zKSk7XG5cblx0XHRfdGhpcy5sYXN0Q2hhciA9IG9wdGlvbnMubGFzdENoYXI7XG5cdFx0cmV0dXJuIF90aGlzO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKEVBTjEzLCBbe1xuXHRcdGtleTogJ3ZhbGlkJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gdmFsaWQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kYXRhLnNlYXJjaCgvXlswLTldezEzfSQvKSAhPT0gLTEgJiYgK3RoaXMuZGF0YVsxMl0gPT09IGNoZWNrc3VtKHRoaXMuZGF0YSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnbGVmdFRleHQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBsZWZ0VGV4dCgpIHtcblx0XHRcdHJldHVybiBfZ2V0KEVBTjEzLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEVBTjEzLnByb3RvdHlwZSksICdsZWZ0VGV4dCcsIHRoaXMpLmNhbGwodGhpcywgMSwgNik7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnbGVmdEVuY29kZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGxlZnRFbmNvZGUoKSB7XG5cdFx0XHR2YXIgZGF0YSA9IHRoaXMuZGF0YS5zdWJzdHIoMSwgNik7XG5cdFx0XHR2YXIgc3RydWN0dXJlID0gX2NvbnN0YW50cy5FQU4xM19TVFJVQ1RVUkVbdGhpcy5kYXRhWzBdXTtcblx0XHRcdHJldHVybiBfZ2V0KEVBTjEzLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEVBTjEzLnByb3RvdHlwZSksICdsZWZ0RW5jb2RlJywgdGhpcykuY2FsbCh0aGlzLCBkYXRhLCBzdHJ1Y3R1cmUpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JpZ2h0VGV4dCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJpZ2h0VGV4dCgpIHtcblx0XHRcdHJldHVybiBfZ2V0KEVBTjEzLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEVBTjEzLnByb3RvdHlwZSksICdyaWdodFRleHQnLCB0aGlzKS5jYWxsKHRoaXMsIDcsIDYpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JpZ2h0RW5jb2RlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmlnaHRFbmNvZGUoKSB7XG5cdFx0XHR2YXIgZGF0YSA9IHRoaXMuZGF0YS5zdWJzdHIoNywgNik7XG5cdFx0XHRyZXR1cm4gX2dldChFQU4xMy5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihFQU4xMy5wcm90b3R5cGUpLCAncmlnaHRFbmNvZGUnLCB0aGlzKS5jYWxsKHRoaXMsIGRhdGEsICdSUlJSUlInKTtcblx0XHR9XG5cblx0XHQvLyBUaGUgXCJzdGFuZGFyZFwiIHdheSBvZiBwcmludGluZyBFQU4xMyBiYXJjb2RlcyB3aXRoIGd1YXJkIGJhcnNcblxuXHR9LCB7XG5cdFx0a2V5OiAnZW5jb2RlR3VhcmRlZCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGVuY29kZUd1YXJkZWQoKSB7XG5cdFx0XHR2YXIgZGF0YSA9IF9nZXQoRUFOMTMucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRUFOMTMucHJvdG90eXBlKSwgJ2VuY29kZUd1YXJkZWQnLCB0aGlzKS5jYWxsKHRoaXMpO1xuXG5cdFx0XHQvLyBFeHRlbmQgZGF0YSB3aXRoIGxlZnQgZGlnaXQgJiBsYXN0IGNoYXJhY3RlclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5kaXNwbGF5VmFsdWUpIHtcblx0XHRcdFx0ZGF0YS51bnNoaWZ0KHtcblx0XHRcdFx0XHRkYXRhOiAnMDAwMDAwMDAwMDAwJyxcblx0XHRcdFx0XHR0ZXh0OiB0aGlzLnRleHQuc3Vic3RyKDAsIDEpLFxuXHRcdFx0XHRcdG9wdGlvbnM6IHsgdGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiB0aGlzLmZvbnRTaXplIH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5sYXN0Q2hhcikge1xuXHRcdFx0XHRcdGRhdGEucHVzaCh7XG5cdFx0XHRcdFx0XHRkYXRhOiAnMDAnXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0ZGF0YS5wdXNoKHtcblx0XHRcdFx0XHRcdGRhdGE6ICcwMDAwMCcsXG5cdFx0XHRcdFx0XHR0ZXh0OiB0aGlzLm9wdGlvbnMubGFzdENoYXIsXG5cdFx0XHRcdFx0XHRvcHRpb25zOiB7IGZvbnRTaXplOiB0aGlzLmZvbnRTaXplIH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZGF0YTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gRUFOMTM7XG59KF9FQU4zLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBFQU4xMzsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcblxudmFyIF9lbmNvZGVyID0gcmVxdWlyZSgnLi9lbmNvZGVyJyk7XG5cbnZhciBfZW5jb2RlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9lbmNvZGVyKTtcblxudmFyIF9CYXJjb2RlMiA9IHJlcXVpcmUoJy4uL0JhcmNvZGUnKTtcblxudmFyIF9CYXJjb2RlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0JhcmNvZGUyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvLyBFbmNvZGluZyBkb2N1bWVudGF0aW9uOlxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRUFOXzIjRW5jb2RpbmdcblxudmFyIEVBTjIgPSBmdW5jdGlvbiAoX0JhcmNvZGUpIHtcblx0X2luaGVyaXRzKEVBTjIsIF9CYXJjb2RlKTtcblxuXHRmdW5jdGlvbiBFQU4yKGRhdGEsIG9wdGlvbnMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgRUFOMik7XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEVBTjIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihFQU4yKSkuY2FsbCh0aGlzLCBkYXRhLCBvcHRpb25zKSk7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoRUFOMiwgW3tcblx0XHRrZXk6ICd2YWxpZCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHZhbGlkKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGF0YS5zZWFyY2goL15bMC05XXsyfSQvKSAhPT0gLTE7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZW5jb2RlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZW5jb2RlKCkge1xuXHRcdFx0Ly8gQ2hvb3NlIHRoZSBzdHJ1Y3R1cmUgYmFzZWQgb24gdGhlIG51bWJlciBtb2QgNFxuXHRcdFx0dmFyIHN0cnVjdHVyZSA9IF9jb25zdGFudHMuRUFOMl9TVFJVQ1RVUkVbcGFyc2VJbnQodGhpcy5kYXRhKSAlIDRdO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Ly8gU3RhcnQgYml0cyArIEVuY29kZSB0aGUgdHdvIGRpZ2l0cyB3aXRoIDAxIGluIGJldHdlZW5cblx0XHRcdFx0ZGF0YTogJzEwMTEnICsgKDAsIF9lbmNvZGVyMi5kZWZhdWx0KSh0aGlzLmRhdGEsIHN0cnVjdHVyZSwgJzAxJyksXG5cdFx0XHRcdHRleHQ6IHRoaXMudGV4dFxuXHRcdFx0fTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gRUFOMjtcbn0oX0JhcmNvZGUzLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBFQU4yOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG52YXIgX2VuY29kZXIgPSByZXF1aXJlKCcuL2VuY29kZXInKTtcblxudmFyIF9lbmNvZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2VuY29kZXIpO1xuXG52YXIgX0JhcmNvZGUyID0gcmVxdWlyZSgnLi4vQmFyY29kZScpO1xuXG52YXIgX0JhcmNvZGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQmFyY29kZTIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9IC8vIEVuY29kaW5nIGRvY3VtZW50YXRpb246XG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9FQU5fNSNFbmNvZGluZ1xuXG52YXIgY2hlY2tzdW0gPSBmdW5jdGlvbiBjaGVja3N1bShkYXRhKSB7XG5cdHZhciByZXN1bHQgPSBkYXRhLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRyZXR1cm4gK247XG5cdH0pLnJlZHVjZShmdW5jdGlvbiAoc3VtLCBhLCBpZHgpIHtcblx0XHRyZXR1cm4gaWR4ICUgMiA/IHN1bSArIGEgKiA5IDogc3VtICsgYSAqIDM7XG5cdH0sIDApO1xuXHRyZXR1cm4gcmVzdWx0ICUgMTA7XG59O1xuXG52YXIgRUFONSA9IGZ1bmN0aW9uIChfQmFyY29kZSkge1xuXHRfaW5oZXJpdHMoRUFONSwgX0JhcmNvZGUpO1xuXG5cdGZ1bmN0aW9uIEVBTjUoZGF0YSwgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFQU41KTtcblxuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRUFONS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEVBTjUpKS5jYWxsKHRoaXMsIGRhdGEsIG9wdGlvbnMpKTtcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhFQU41LCBbe1xuXHRcdGtleTogJ3ZhbGlkJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gdmFsaWQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kYXRhLnNlYXJjaCgvXlswLTldezV9JC8pICE9PSAtMTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdlbmNvZGUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBlbmNvZGUoKSB7XG5cdFx0XHR2YXIgc3RydWN0dXJlID0gX2NvbnN0YW50cy5FQU41X1NUUlVDVFVSRVtjaGVja3N1bSh0aGlzLmRhdGEpXTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6ICcxMDExJyArICgwLCBfZW5jb2RlcjIuZGVmYXVsdCkodGhpcy5kYXRhLCBzdHJ1Y3R1cmUsICcwMScpLFxuXHRcdFx0XHR0ZXh0OiB0aGlzLnRleHRcblx0XHRcdH07XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIEVBTjU7XG59KF9CYXJjb2RlMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRUFONTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyByZXR1cm4gZ2V0KHBhcmVudCwgcHJvcGVydHksIHJlY2VpdmVyKTsgfSB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfTtcblxudmFyIF9FQU4yID0gcmVxdWlyZSgnLi9FQU4nKTtcblxudmFyIF9FQU4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRUFOMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH0gLy8gRW5jb2RpbmcgZG9jdW1lbnRhdGlvbjpcbi8vIGh0dHA6Ly93d3cuYmFyY29kZWlzbGFuZC5jb20vZWFuOC5waHRtbFxuXG4vLyBDYWxjdWxhdGUgdGhlIGNoZWNrc3VtIGRpZ2l0XG52YXIgY2hlY2tzdW0gPSBmdW5jdGlvbiBjaGVja3N1bShudW1iZXIpIHtcblx0dmFyIHJlcyA9IG51bWJlci5zdWJzdHIoMCwgNykuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdHJldHVybiArbjtcblx0fSkucmVkdWNlKGZ1bmN0aW9uIChzdW0sIGEsIGlkeCkge1xuXHRcdHJldHVybiBpZHggJSAyID8gc3VtICsgYSA6IHN1bSArIGEgKiAzO1xuXHR9LCAwKTtcblxuXHRyZXR1cm4gKDEwIC0gcmVzICUgMTApICUgMTA7XG59O1xuXG52YXIgRUFOOCA9IGZ1bmN0aW9uIChfRUFOKSB7XG5cdF9pbmhlcml0cyhFQU44LCBfRUFOKTtcblxuXHRmdW5jdGlvbiBFQU44KGRhdGEsIG9wdGlvbnMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgRUFOOCk7XG5cblx0XHQvLyBBZGQgY2hlY2tzdW0gaWYgaXQgZG9lcyBub3QgZXhpc3Rcblx0XHRpZiAoZGF0YS5zZWFyY2goL15bMC05XXs3fSQvKSAhPT0gLTEpIHtcblx0XHRcdGRhdGEgKz0gY2hlY2tzdW0oZGF0YSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChFQU44Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRUFOOCkpLmNhbGwodGhpcywgZGF0YSwgb3B0aW9ucykpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKEVBTjgsIFt7XG5cdFx0a2V5OiAndmFsaWQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB2YWxpZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmRhdGEuc2VhcmNoKC9eWzAtOV17OH0kLykgIT09IC0xICYmICt0aGlzLmRhdGFbN10gPT09IGNoZWNrc3VtKHRoaXMuZGF0YSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnbGVmdFRleHQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBsZWZ0VGV4dCgpIHtcblx0XHRcdHJldHVybiBfZ2V0KEVBTjgucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRUFOOC5wcm90b3R5cGUpLCAnbGVmdFRleHQnLCB0aGlzKS5jYWxsKHRoaXMsIDAsIDQpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2xlZnRFbmNvZGUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBsZWZ0RW5jb2RlKCkge1xuXHRcdFx0dmFyIGRhdGEgPSB0aGlzLmRhdGEuc3Vic3RyKDAsIDQpO1xuXHRcdFx0cmV0dXJuIF9nZXQoRUFOOC5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihFQU44LnByb3RvdHlwZSksICdsZWZ0RW5jb2RlJywgdGhpcykuY2FsbCh0aGlzLCBkYXRhLCAnTExMTCcpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JpZ2h0VGV4dCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJpZ2h0VGV4dCgpIHtcblx0XHRcdHJldHVybiBfZ2V0KEVBTjgucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRUFOOC5wcm90b3R5cGUpLCAncmlnaHRUZXh0JywgdGhpcykuY2FsbCh0aGlzLCA0LCA0KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyaWdodEVuY29kZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJpZ2h0RW5jb2RlKCkge1xuXHRcdFx0dmFyIGRhdGEgPSB0aGlzLmRhdGEuc3Vic3RyKDQsIDQpO1xuXHRcdFx0cmV0dXJuIF9nZXQoRUFOOC5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihFQU44LnByb3RvdHlwZSksICdyaWdodEVuY29kZScsIHRoaXMpLmNhbGwodGhpcywgZGF0YSwgJ1JSUlInKTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gRUFOODtcbn0oX0VBTjMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEVBTjg7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmV4cG9ydHMuY2hlY2tzdW0gPSBjaGVja3N1bTtcblxudmFyIF9lbmNvZGVyID0gcmVxdWlyZShcIi4vZW5jb2RlclwiKTtcblxudmFyIF9lbmNvZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2VuY29kZXIpO1xuXG52YXIgX0JhcmNvZGUyID0gcmVxdWlyZShcIi4uL0JhcmNvZGUuanNcIik7XG5cbnZhciBfQmFyY29kZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CYXJjb2RlMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH0gLy8gRW5jb2RpbmcgZG9jdW1lbnRhdGlvbjpcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VuaXZlcnNhbF9Qcm9kdWN0X0NvZGUjRW5jb2RpbmdcblxudmFyIFVQQyA9IGZ1bmN0aW9uIChfQmFyY29kZSkge1xuXHRfaW5oZXJpdHMoVVBDLCBfQmFyY29kZSk7XG5cblx0ZnVuY3Rpb24gVVBDKGRhdGEsIG9wdGlvbnMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgVVBDKTtcblxuXHRcdC8vIEFkZCBjaGVja3N1bSBpZiBpdCBkb2VzIG5vdCBleGlzdFxuXHRcdGlmIChkYXRhLnNlYXJjaCgvXlswLTldezExfSQvKSAhPT0gLTEpIHtcblx0XHRcdGRhdGEgKz0gY2hlY2tzdW0oZGF0YSk7XG5cdFx0fVxuXG5cdFx0dmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFVQQy5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFVQQykpLmNhbGwodGhpcywgZGF0YSwgb3B0aW9ucykpO1xuXG5cdFx0X3RoaXMuZGlzcGxheVZhbHVlID0gb3B0aW9ucy5kaXNwbGF5VmFsdWU7XG5cblx0XHQvLyBNYWtlIHN1cmUgdGhlIGZvbnQgaXMgbm90IGJpZ2dlciB0aGFuIHRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBndWFyZCBiYXJzXG5cdFx0aWYgKG9wdGlvbnMuZm9udFNpemUgPiBvcHRpb25zLndpZHRoICogMTApIHtcblx0XHRcdF90aGlzLmZvbnRTaXplID0gb3B0aW9ucy53aWR0aCAqIDEwO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfdGhpcy5mb250U2l6ZSA9IG9wdGlvbnMuZm9udFNpemU7XG5cdFx0fVxuXG5cdFx0Ly8gTWFrZSB0aGUgZ3VhcmQgYmFycyBnbyBkb3duIGhhbGYgdGhlIHdheSBvZiB0aGUgdGV4dFxuXHRcdF90aGlzLmd1YXJkSGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgKyBfdGhpcy5mb250U2l6ZSAvIDIgKyBvcHRpb25zLnRleHRNYXJnaW47XG5cdFx0cmV0dXJuIF90aGlzO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKFVQQywgW3tcblx0XHRrZXk6IFwidmFsaWRcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gdmFsaWQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kYXRhLnNlYXJjaCgvXlswLTldezEyfSQvKSAhPT0gLTEgJiYgdGhpcy5kYXRhWzExXSA9PSBjaGVja3N1bSh0aGlzLmRhdGEpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJlbmNvZGVcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZW5jb2RlKCkge1xuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5mbGF0KSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmZsYXRFbmNvZGluZygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ3VhcmRlZEVuY29kaW5nKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcImZsYXRFbmNvZGluZ1wiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmbGF0RW5jb2RpbmcoKSB7XG5cdFx0XHR2YXIgcmVzdWx0ID0gXCJcIjtcblxuXHRcdFx0cmVzdWx0ICs9IFwiMTAxXCI7XG5cdFx0XHRyZXN1bHQgKz0gKDAsIF9lbmNvZGVyMi5kZWZhdWx0KSh0aGlzLmRhdGEuc3Vic3RyKDAsIDYpLCBcIkxMTExMTFwiKTtcblx0XHRcdHJlc3VsdCArPSBcIjAxMDEwXCI7XG5cdFx0XHRyZXN1bHQgKz0gKDAsIF9lbmNvZGVyMi5kZWZhdWx0KSh0aGlzLmRhdGEuc3Vic3RyKDYsIDYpLCBcIlJSUlJSUlwiKTtcblx0XHRcdHJlc3VsdCArPSBcIjEwMVwiO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhOiByZXN1bHQsXG5cdFx0XHRcdHRleHQ6IHRoaXMudGV4dFxuXHRcdFx0fTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwiZ3VhcmRlZEVuY29kaW5nXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGd1YXJkZWRFbmNvZGluZygpIHtcblx0XHRcdHZhciByZXN1bHQgPSBbXTtcblxuXHRcdFx0Ly8gQWRkIHRoZSBmaXJzdCBkaWdpdFxuXHRcdFx0aWYgKHRoaXMuZGlzcGxheVZhbHVlKSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKHtcblx0XHRcdFx0XHRkYXRhOiBcIjAwMDAwMDAwXCIsXG5cdFx0XHRcdFx0dGV4dDogdGhpcy50ZXh0LnN1YnN0cigwLCAxKSxcblx0XHRcdFx0XHRvcHRpb25zOiB7IHRleHRBbGlnbjogXCJsZWZ0XCIsIGZvbnRTaXplOiB0aGlzLmZvbnRTaXplIH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkZCB0aGUgZ3VhcmQgYmFyc1xuXHRcdFx0cmVzdWx0LnB1c2goe1xuXHRcdFx0XHRkYXRhOiBcIjEwMVwiICsgKDAsIF9lbmNvZGVyMi5kZWZhdWx0KSh0aGlzLmRhdGFbMF0sIFwiTFwiKSxcblx0XHRcdFx0b3B0aW9uczogeyBoZWlnaHQ6IHRoaXMuZ3VhcmRIZWlnaHQgfVxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEFkZCB0aGUgbGVmdCBzaWRlXG5cdFx0XHRyZXN1bHQucHVzaCh7XG5cdFx0XHRcdGRhdGE6ICgwLCBfZW5jb2RlcjIuZGVmYXVsdCkodGhpcy5kYXRhLnN1YnN0cigxLCA1KSwgXCJMTExMTFwiKSxcblx0XHRcdFx0dGV4dDogdGhpcy50ZXh0LnN1YnN0cigxLCA1KSxcblx0XHRcdFx0b3B0aW9uczogeyBmb250U2l6ZTogdGhpcy5mb250U2l6ZSB9XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQWRkIHRoZSBtaWRkbGUgYml0c1xuXHRcdFx0cmVzdWx0LnB1c2goe1xuXHRcdFx0XHRkYXRhOiBcIjAxMDEwXCIsXG5cdFx0XHRcdG9wdGlvbnM6IHsgaGVpZ2h0OiB0aGlzLmd1YXJkSGVpZ2h0IH1cblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBBZGQgdGhlIHJpZ2h0IHNpZGVcblx0XHRcdHJlc3VsdC5wdXNoKHtcblx0XHRcdFx0ZGF0YTogKDAsIF9lbmNvZGVyMi5kZWZhdWx0KSh0aGlzLmRhdGEuc3Vic3RyKDYsIDUpLCBcIlJSUlJSXCIpLFxuXHRcdFx0XHR0ZXh0OiB0aGlzLnRleHQuc3Vic3RyKDYsIDUpLFxuXHRcdFx0XHRvcHRpb25zOiB7IGZvbnRTaXplOiB0aGlzLmZvbnRTaXplIH1cblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBBZGQgdGhlIGVuZCBiaXRzXG5cdFx0XHRyZXN1bHQucHVzaCh7XG5cdFx0XHRcdGRhdGE6ICgwLCBfZW5jb2RlcjIuZGVmYXVsdCkodGhpcy5kYXRhWzExXSwgXCJSXCIpICsgXCIxMDFcIixcblx0XHRcdFx0b3B0aW9uczogeyBoZWlnaHQ6IHRoaXMuZ3VhcmRIZWlnaHQgfVxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEFkZCB0aGUgbGFzdCBkaWdpdFxuXHRcdFx0aWYgKHRoaXMuZGlzcGxheVZhbHVlKSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKHtcblx0XHRcdFx0XHRkYXRhOiBcIjAwMDAwMDAwXCIsXG5cdFx0XHRcdFx0dGV4dDogdGhpcy50ZXh0LnN1YnN0cigxMSwgMSksXG5cdFx0XHRcdFx0b3B0aW9uczogeyB0ZXh0QWxpZ246IFwicmlnaHRcIiwgZm9udFNpemU6IHRoaXMuZm9udFNpemUgfVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gVVBDO1xufShfQmFyY29kZTMuZGVmYXVsdCk7XG5cbi8vIENhbHVsYXRlIHRoZSBjaGVja3N1bSBkaWdpdFxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSW50ZXJuYXRpb25hbF9BcnRpY2xlX051bWJlcl8oRUFOKSNDYWxjdWxhdGlvbl9vZl9jaGVja3N1bV9kaWdpdFxuXG5cbmZ1bmN0aW9uIGNoZWNrc3VtKG51bWJlcikge1xuXHR2YXIgcmVzdWx0ID0gMDtcblxuXHR2YXIgaTtcblx0Zm9yIChpID0gMTsgaSA8IDExOyBpICs9IDIpIHtcblx0XHRyZXN1bHQgKz0gcGFyc2VJbnQobnVtYmVyW2ldKTtcblx0fVxuXHRmb3IgKGkgPSAwOyBpIDwgMTE7IGkgKz0gMikge1xuXHRcdHJlc3VsdCArPSBwYXJzZUludChudW1iZXJbaV0pICogMztcblx0fVxuXG5cdHJldHVybiAoMTAgLSByZXN1bHQgJSAxMCkgJSAxMDtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gVVBDOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9lbmNvZGVyID0gcmVxdWlyZSgnLi9lbmNvZGVyJyk7XG5cbnZhciBfZW5jb2RlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9lbmNvZGVyKTtcblxudmFyIF9CYXJjb2RlMiA9IHJlcXVpcmUoJy4uL0JhcmNvZGUuanMnKTtcblxudmFyIF9CYXJjb2RlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0JhcmNvZGUyKTtcblxudmFyIF9VUEMgPSByZXF1aXJlKCcuL1VQQy5qcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9IC8vIEVuY29kaW5nIGRvY3VtZW50YXRpb246XG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Vbml2ZXJzYWxfUHJvZHVjdF9Db2RlI0VuY29kaW5nXG4vL1xuLy8gVVBDLUUgZG9jdW1lbnRhdGlvbjpcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VuaXZlcnNhbF9Qcm9kdWN0X0NvZGUjVVBDLUVcblxudmFyIEVYUEFOU0lPTlMgPSBbXCJYWDAwMDAwWFhYXCIsIFwiWFgxMDAwMFhYWFwiLCBcIlhYMjAwMDBYWFhcIiwgXCJYWFgwMDAwMFhYXCIsIFwiWFhYWDAwMDAwWFwiLCBcIlhYWFhYMDAwMDVcIiwgXCJYWFhYWDAwMDA2XCIsIFwiWFhYWFgwMDAwN1wiLCBcIlhYWFhYMDAwMDhcIiwgXCJYWFhYWDAwMDA5XCJdO1xuXG52YXIgUEFSSVRJRVMgPSBbW1wiRUVFT09PXCIsIFwiT09PRUVFXCJdLCBbXCJFRU9FT09cIiwgXCJPT0VPRUVcIl0sIFtcIkVFT09FT1wiLCBcIk9PRUVPRVwiXSwgW1wiRUVPT09FXCIsIFwiT09FRUVPXCJdLCBbXCJFT0VFT09cIiwgXCJPRU9PRUVcIl0sIFtcIkVPT0VFT1wiLCBcIk9FRU9PRVwiXSwgW1wiRU9PT0VFXCIsIFwiT0VFRU9PXCJdLCBbXCJFT0VPRU9cIiwgXCJPRU9FT0VcIl0sIFtcIkVPRU9PRVwiLCBcIk9FT0VFT1wiXSwgW1wiRU9PRU9FXCIsIFwiT0VFT0VPXCJdXTtcblxudmFyIFVQQ0UgPSBmdW5jdGlvbiAoX0JhcmNvZGUpIHtcblx0X2luaGVyaXRzKFVQQ0UsIF9CYXJjb2RlKTtcblxuXHRmdW5jdGlvbiBVUENFKGRhdGEsIG9wdGlvbnMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgVVBDRSk7XG5cblx0XHR2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoVVBDRS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFVQQ0UpKS5jYWxsKHRoaXMsIGRhdGEsIG9wdGlvbnMpKTtcblx0XHQvLyBDb2RlIG1heSBiZSA2IG9yIDggZGlnaXRzO1xuXHRcdC8vIEEgNyBkaWdpdCBjb2RlIGlzIGFtYmlndW91cyBhcyB0byB3aGV0aGVyIHRoZSBleHRyYSBkaWdpdFxuXHRcdC8vIGlzIGEgVVBDLUEgY2hlY2sgb3IgbnVtYmVyIHN5c3RlbSBkaWdpdC5cblxuXG5cdFx0X3RoaXMuaXNWYWxpZCA9IGZhbHNlO1xuXHRcdGlmIChkYXRhLnNlYXJjaCgvXlswLTldezZ9JC8pICE9PSAtMSkge1xuXHRcdFx0X3RoaXMubWlkZGxlRGlnaXRzID0gZGF0YTtcblx0XHRcdF90aGlzLnVwY0EgPSBleHBhbmRUb1VQQ0EoZGF0YSwgXCIwXCIpO1xuXHRcdFx0X3RoaXMudGV4dCA9IG9wdGlvbnMudGV4dCB8fCAnJyArIF90aGlzLnVwY0FbMF0gKyBkYXRhICsgX3RoaXMudXBjQVtfdGhpcy51cGNBLmxlbmd0aCAtIDFdO1xuXHRcdFx0X3RoaXMuaXNWYWxpZCA9IHRydWU7XG5cdFx0fSBlbHNlIGlmIChkYXRhLnNlYXJjaCgvXlswMV1bMC05XXs3fSQvKSAhPT0gLTEpIHtcblx0XHRcdF90aGlzLm1pZGRsZURpZ2l0cyA9IGRhdGEuc3Vic3RyaW5nKDEsIGRhdGEubGVuZ3RoIC0gMSk7XG5cdFx0XHRfdGhpcy51cGNBID0gZXhwYW5kVG9VUENBKF90aGlzLm1pZGRsZURpZ2l0cywgZGF0YVswXSk7XG5cblx0XHRcdGlmIChfdGhpcy51cGNBW190aGlzLnVwY0EubGVuZ3RoIC0gMV0gPT09IGRhdGFbZGF0YS5sZW5ndGggLSAxXSkge1xuXHRcdFx0XHRfdGhpcy5pc1ZhbGlkID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIGNoZWNrc3VtIG1pc21hdGNoXG5cdFx0XHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcyk7XG5cdFx0fVxuXG5cdFx0X3RoaXMuZGlzcGxheVZhbHVlID0gb3B0aW9ucy5kaXNwbGF5VmFsdWU7XG5cblx0XHQvLyBNYWtlIHN1cmUgdGhlIGZvbnQgaXMgbm90IGJpZ2dlciB0aGFuIHRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBndWFyZCBiYXJzXG5cdFx0aWYgKG9wdGlvbnMuZm9udFNpemUgPiBvcHRpb25zLndpZHRoICogMTApIHtcblx0XHRcdF90aGlzLmZvbnRTaXplID0gb3B0aW9ucy53aWR0aCAqIDEwO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfdGhpcy5mb250U2l6ZSA9IG9wdGlvbnMuZm9udFNpemU7XG5cdFx0fVxuXG5cdFx0Ly8gTWFrZSB0aGUgZ3VhcmQgYmFycyBnbyBkb3duIGhhbGYgdGhlIHdheSBvZiB0aGUgdGV4dFxuXHRcdF90aGlzLmd1YXJkSGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgKyBfdGhpcy5mb250U2l6ZSAvIDIgKyBvcHRpb25zLnRleHRNYXJnaW47XG5cdFx0cmV0dXJuIF90aGlzO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKFVQQ0UsIFt7XG5cdFx0a2V5OiAndmFsaWQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB2YWxpZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmlzVmFsaWQ7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZW5jb2RlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZW5jb2RlKCkge1xuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5mbGF0KSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmZsYXRFbmNvZGluZygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ3VhcmRlZEVuY29kaW5nKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZmxhdEVuY29kaW5nJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZmxhdEVuY29kaW5nKCkge1xuXHRcdFx0dmFyIHJlc3VsdCA9IFwiXCI7XG5cblx0XHRcdHJlc3VsdCArPSBcIjEwMVwiO1xuXHRcdFx0cmVzdWx0ICs9IHRoaXMuZW5jb2RlTWlkZGxlRGlnaXRzKCk7XG5cdFx0XHRyZXN1bHQgKz0gXCIwMTAxMDFcIjtcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YTogcmVzdWx0LFxuXHRcdFx0XHR0ZXh0OiB0aGlzLnRleHRcblx0XHRcdH07XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZ3VhcmRlZEVuY29kaW5nJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ3VhcmRlZEVuY29kaW5nKCkge1xuXHRcdFx0dmFyIHJlc3VsdCA9IFtdO1xuXG5cdFx0XHQvLyBBZGQgdGhlIFVQQy1BIG51bWJlciBzeXN0ZW0gZGlnaXQgYmVuZWF0aCB0aGUgcXVpZXQgem9uZVxuXHRcdFx0aWYgKHRoaXMuZGlzcGxheVZhbHVlKSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKHtcblx0XHRcdFx0XHRkYXRhOiBcIjAwMDAwMDAwXCIsXG5cdFx0XHRcdFx0dGV4dDogdGhpcy50ZXh0WzBdLFxuXHRcdFx0XHRcdG9wdGlvbnM6IHsgdGV4dEFsaWduOiBcImxlZnRcIiwgZm9udFNpemU6IHRoaXMuZm9udFNpemUgfVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWRkIHRoZSBndWFyZCBiYXJzXG5cdFx0XHRyZXN1bHQucHVzaCh7XG5cdFx0XHRcdGRhdGE6IFwiMTAxXCIsXG5cdFx0XHRcdG9wdGlvbnM6IHsgaGVpZ2h0OiB0aGlzLmd1YXJkSGVpZ2h0IH1cblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBBZGQgdGhlIDYgVVBDLUUgZGlnaXRzXG5cdFx0XHRyZXN1bHQucHVzaCh7XG5cdFx0XHRcdGRhdGE6IHRoaXMuZW5jb2RlTWlkZGxlRGlnaXRzKCksXG5cdFx0XHRcdHRleHQ6IHRoaXMudGV4dC5zdWJzdHJpbmcoMSwgNyksXG5cdFx0XHRcdG9wdGlvbnM6IHsgZm9udFNpemU6IHRoaXMuZm9udFNpemUgfVxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEFkZCB0aGUgZW5kIGJpdHNcblx0XHRcdHJlc3VsdC5wdXNoKHtcblx0XHRcdFx0ZGF0YTogXCIwMTAxMDFcIixcblx0XHRcdFx0b3B0aW9uczogeyBoZWlnaHQ6IHRoaXMuZ3VhcmRIZWlnaHQgfVxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEFkZCB0aGUgVVBDLUEgY2hlY2sgZGlnaXQgYmVuZWF0aCB0aGUgcXVpZXQgem9uZVxuXHRcdFx0aWYgKHRoaXMuZGlzcGxheVZhbHVlKSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKHtcblx0XHRcdFx0XHRkYXRhOiBcIjAwMDAwMDAwXCIsXG5cdFx0XHRcdFx0dGV4dDogdGhpcy50ZXh0WzddLFxuXHRcdFx0XHRcdG9wdGlvbnM6IHsgdGV4dEFsaWduOiBcInJpZ2h0XCIsIGZvbnRTaXplOiB0aGlzLmZvbnRTaXplIH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZW5jb2RlTWlkZGxlRGlnaXRzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZW5jb2RlTWlkZGxlRGlnaXRzKCkge1xuXHRcdFx0dmFyIG51bWJlclN5c3RlbSA9IHRoaXMudXBjQVswXTtcblx0XHRcdHZhciBjaGVja0RpZ2l0ID0gdGhpcy51cGNBW3RoaXMudXBjQS5sZW5ndGggLSAxXTtcblx0XHRcdHZhciBwYXJpdHkgPSBQQVJJVElFU1twYXJzZUludChjaGVja0RpZ2l0KV1bcGFyc2VJbnQobnVtYmVyU3lzdGVtKV07XG5cdFx0XHRyZXR1cm4gKDAsIF9lbmNvZGVyMi5kZWZhdWx0KSh0aGlzLm1pZGRsZURpZ2l0cywgcGFyaXR5KTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gVVBDRTtcbn0oX0JhcmNvZGUzLmRlZmF1bHQpO1xuXG5mdW5jdGlvbiBleHBhbmRUb1VQQ0EobWlkZGxlRGlnaXRzLCBudW1iZXJTeXN0ZW0pIHtcblx0dmFyIGxhc3RVcGNFID0gcGFyc2VJbnQobWlkZGxlRGlnaXRzW21pZGRsZURpZ2l0cy5sZW5ndGggLSAxXSk7XG5cdHZhciBleHBhbnNpb24gPSBFWFBBTlNJT05TW2xhc3RVcGNFXTtcblxuXHR2YXIgcmVzdWx0ID0gXCJcIjtcblx0dmFyIGRpZ2l0SW5kZXggPSAwO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGV4cGFuc2lvbi5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBjID0gZXhwYW5zaW9uW2ldO1xuXHRcdGlmIChjID09PSAnWCcpIHtcblx0XHRcdHJlc3VsdCArPSBtaWRkbGVEaWdpdHNbZGlnaXRJbmRleCsrXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0ICs9IGM7XG5cdFx0fVxuXHR9XG5cblx0cmVzdWx0ID0gJycgKyBudW1iZXJTeXN0ZW0gKyByZXN1bHQ7XG5cdHJldHVybiAnJyArIHJlc3VsdCArICgwLCBfVVBDLmNoZWNrc3VtKShyZXN1bHQpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBVUENFOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbi8vIFN0YW5kYXJkIHN0YXJ0IGVuZCBhbmQgbWlkZGxlIGJpdHNcbnZhciBTSURFX0JJTiA9IGV4cG9ydHMuU0lERV9CSU4gPSAnMTAxJztcbnZhciBNSURETEVfQklOID0gZXhwb3J0cy5NSURETEVfQklOID0gJzAxMDEwJztcblxudmFyIEJJTkFSSUVTID0gZXhwb3J0cy5CSU5BUklFUyA9IHtcblx0J0wnOiBbLy8gVGhlIEwgKGxlZnQpIHR5cGUgb2YgZW5jb2Rpbmdcblx0JzAwMDExMDEnLCAnMDAxMTAwMScsICcwMDEwMDExJywgJzAxMTExMDEnLCAnMDEwMDAxMScsICcwMTEwMDAxJywgJzAxMDExMTEnLCAnMDExMTAxMScsICcwMTEwMTExJywgJzAwMDEwMTEnXSxcblx0J0cnOiBbLy8gVGhlIEcgdHlwZSBvZiBlbmNvZGluZ1xuXHQnMDEwMDExMScsICcwMTEwMDExJywgJzAwMTEwMTEnLCAnMDEwMDAwMScsICcwMDExMTAxJywgJzAxMTEwMDEnLCAnMDAwMDEwMScsICcwMDEwMDAxJywgJzAwMDEwMDEnLCAnMDAxMDExMSddLFxuXHQnUic6IFsvLyBUaGUgUiAocmlnaHQpIHR5cGUgb2YgZW5jb2Rpbmdcblx0JzExMTAwMTAnLCAnMTEwMDExMCcsICcxMTAxMTAwJywgJzEwMDAwMTAnLCAnMTAxMTEwMCcsICcxMDAxMTEwJywgJzEwMTAwMDAnLCAnMTAwMDEwMCcsICcxMDAxMDAwJywgJzExMTAxMDAnXSxcblx0J08nOiBbLy8gVGhlIE8gKG9kZCkgZW5jb2RpbmcgZm9yIFVQQy1FXG5cdCcwMDAxMTAxJywgJzAwMTEwMDEnLCAnMDAxMDAxMScsICcwMTExMTAxJywgJzAxMDAwMTEnLCAnMDExMDAwMScsICcwMTAxMTExJywgJzAxMTEwMTEnLCAnMDExMDExMScsICcwMDAxMDExJ10sXG5cdCdFJzogWy8vIFRoZSBFIChldmVuKSBlbmNvZGluZyBmb3IgVVBDLUVcblx0JzAxMDAxMTEnLCAnMDExMDAxMScsICcwMDExMDExJywgJzAxMDAwMDEnLCAnMDAxMTEwMScsICcwMTExMDAxJywgJzAwMDAxMDEnLCAnMDAxMDAwMScsICcwMDAxMDAxJywgJzAwMTAxMTEnXVxufTtcblxuLy8gRGVmaW5lIHRoZSBFQU4tMiBzdHJ1Y3R1cmVcbnZhciBFQU4yX1NUUlVDVFVSRSA9IGV4cG9ydHMuRUFOMl9TVFJVQ1RVUkUgPSBbJ0xMJywgJ0xHJywgJ0dMJywgJ0dHJ107XG5cbi8vIERlZmluZSB0aGUgRUFOLTUgc3RydWN0dXJlXG52YXIgRUFONV9TVFJVQ1RVUkUgPSBleHBvcnRzLkVBTjVfU1RSVUNUVVJFID0gWydHR0xMTCcsICdHTEdMTCcsICdHTExHTCcsICdHTExMRycsICdMR0dMTCcsICdMTEdHTCcsICdMTExHRycsICdMR0xHTCcsICdMR0xMRycsICdMTEdMRyddO1xuXG4vLyBEZWZpbmUgdGhlIEVBTi0xMyBzdHJ1Y3R1cmVcbnZhciBFQU4xM19TVFJVQ1RVUkUgPSBleHBvcnRzLkVBTjEzX1NUUlVDVFVSRSA9IFsnTExMTExMJywgJ0xMR0xHRycsICdMTEdHTEcnLCAnTExHR0dMJywgJ0xHTExHRycsICdMR0dMTEcnLCAnTEdHR0xMJywgJ0xHTEdMRycsICdMR0xHR0wnLCAnTEdHTEdMJ107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbi8vIEVuY29kZSBkYXRhIHN0cmluZ1xudmFyIGVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZShkYXRhLCBzdHJ1Y3R1cmUsIHNlcGFyYXRvcikge1xuXHR2YXIgZW5jb2RlZCA9IGRhdGEuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAodmFsLCBpZHgpIHtcblx0XHRyZXR1cm4gX2NvbnN0YW50cy5CSU5BUklFU1tzdHJ1Y3R1cmVbaWR4XV07XG5cdH0pLm1hcChmdW5jdGlvbiAodmFsLCBpZHgpIHtcblx0XHRyZXR1cm4gdmFsID8gdmFsW2RhdGFbaWR4XV0gOiAnJztcblx0fSk7XG5cblx0aWYgKHNlcGFyYXRvcikge1xuXHRcdHZhciBsYXN0ID0gZGF0YS5sZW5ndGggLSAxO1xuXHRcdGVuY29kZWQgPSBlbmNvZGVkLm1hcChmdW5jdGlvbiAodmFsLCBpZHgpIHtcblx0XHRcdHJldHVybiBpZHggPCBsYXN0ID8gdmFsICsgc2VwYXJhdG9yIDogdmFsO1xuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIGVuY29kZWQuam9pbignJyk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBlbmNvZGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5VUENFID0gZXhwb3J0cy5VUEMgPSBleHBvcnRzLkVBTjIgPSBleHBvcnRzLkVBTjUgPSBleHBvcnRzLkVBTjggPSBleHBvcnRzLkVBTjEzID0gdW5kZWZpbmVkO1xuXG52YXIgX0VBTiA9IHJlcXVpcmUoJy4vRUFOMTMuanMnKTtcblxudmFyIF9FQU4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRUFOKTtcblxudmFyIF9FQU4zID0gcmVxdWlyZSgnLi9FQU44LmpzJyk7XG5cbnZhciBfRUFONCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0VBTjMpO1xuXG52YXIgX0VBTjUgPSByZXF1aXJlKCcuL0VBTjUuanMnKTtcblxudmFyIF9FQU42ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRUFONSk7XG5cbnZhciBfRUFONyA9IHJlcXVpcmUoJy4vRUFOMi5qcycpO1xuXG52YXIgX0VBTjggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FQU43KTtcblxudmFyIF9VUEMgPSByZXF1aXJlKCcuL1VQQy5qcycpO1xuXG52YXIgX1VQQzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VUEMpO1xuXG52YXIgX1VQQ0UgPSByZXF1aXJlKCcuL1VQQ0UuanMnKTtcblxudmFyIF9VUENFMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1VQQ0UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLkVBTjEzID0gX0VBTjIuZGVmYXVsdDtcbmV4cG9ydHMuRUFOOCA9IF9FQU40LmRlZmF1bHQ7XG5leHBvcnRzLkVBTjUgPSBfRUFONi5kZWZhdWx0O1xuZXhwb3J0cy5FQU4yID0gX0VBTjguZGVmYXVsdDtcbmV4cG9ydHMuVVBDID0gX1VQQzIuZGVmYXVsdDtcbmV4cG9ydHMuVVBDRSA9IF9VUENFMi5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5HZW5lcmljQmFyY29kZSA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9CYXJjb2RlMiA9IHJlcXVpcmUoXCIuLi9CYXJjb2RlLmpzXCIpO1xuXG52YXIgX0JhcmNvZGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQmFyY29kZTIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBHZW5lcmljQmFyY29kZSA9IGZ1bmN0aW9uIChfQmFyY29kZSkge1xuXHRfaW5oZXJpdHMoR2VuZXJpY0JhcmNvZGUsIF9CYXJjb2RlKTtcblxuXHRmdW5jdGlvbiBHZW5lcmljQmFyY29kZShkYXRhLCBvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdlbmVyaWNCYXJjb2RlKTtcblxuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoR2VuZXJpY0JhcmNvZGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihHZW5lcmljQmFyY29kZSkpLmNhbGwodGhpcywgZGF0YSwgb3B0aW9ucykpOyAvLyBTZXRzIHRoaXMuZGF0YSBhbmQgdGhpcy50ZXh0XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIGNvcnJlc3BvbmRpbmcgYmluYXJ5IG51bWJlcnMgZm9yIHRoZSBkYXRhIHByb3ZpZGVkXG5cblxuXHRfY3JlYXRlQ2xhc3MoR2VuZXJpY0JhcmNvZGUsIFt7XG5cdFx0a2V5OiBcImVuY29kZVwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBlbmNvZGUoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhOiBcIjEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxXCIsXG5cdFx0XHRcdHRleHQ6IHRoaXMudGV4dFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHQvLyBSZXN0dXJuIHRydWUvZmFsc2UgaWYgdGhlIHN0cmluZyBwcm92aWRlZCBpcyB2YWxpZCBmb3IgdGhpcyBlbmNvZGVyXG5cblx0fSwge1xuXHRcdGtleTogXCJ2YWxpZFwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB2YWxpZCgpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBHZW5lcmljQmFyY29kZTtcbn0oX0JhcmNvZGUzLmRlZmF1bHQpO1xuXG5leHBvcnRzLkdlbmVyaWNCYXJjb2RlID0gR2VuZXJpY0JhcmNvZGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbnZhciBfQmFyY29kZTIgPSByZXF1aXJlKCcuLi9CYXJjb2RlJyk7XG5cbnZhciBfQmFyY29kZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CYXJjb2RlMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIElURiA9IGZ1bmN0aW9uIChfQmFyY29kZSkge1xuXHRfaW5oZXJpdHMoSVRGLCBfQmFyY29kZSk7XG5cblx0ZnVuY3Rpb24gSVRGKCkge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJVEYpO1xuXG5cdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChJVEYuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihJVEYpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhJVEYsIFt7XG5cdFx0a2V5OiAndmFsaWQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB2YWxpZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmRhdGEuc2VhcmNoKC9eKFswLTldezJ9KSskLykgIT09IC0xO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2VuY29kZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGVuY29kZSgpIHtcblx0XHRcdHZhciBfdGhpczIgPSB0aGlzO1xuXG5cdFx0XHQvLyBDYWxjdWxhdGUgYWxsIHRoZSBkaWdpdCBwYWlyc1xuXHRcdFx0dmFyIGVuY29kZWQgPSB0aGlzLmRhdGEubWF0Y2goLy57Mn0vZykubWFwKGZ1bmN0aW9uIChwYWlyKSB7XG5cdFx0XHRcdHJldHVybiBfdGhpczIuZW5jb2RlUGFpcihwYWlyKTtcblx0XHRcdH0pLmpvaW4oJycpO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhOiBfY29uc3RhbnRzLlNUQVJUX0JJTiArIGVuY29kZWQgKyBfY29uc3RhbnRzLkVORF9CSU4sXG5cdFx0XHRcdHRleHQ6IHRoaXMudGV4dFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHQvLyBDYWxjdWxhdGUgdGhlIGRhdGEgb2YgYSBudW1iZXIgcGFpclxuXG5cdH0sIHtcblx0XHRrZXk6ICdlbmNvZGVQYWlyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZW5jb2RlUGFpcihwYWlyKSB7XG5cdFx0XHR2YXIgc2Vjb25kID0gX2NvbnN0YW50cy5CSU5BUklFU1twYWlyWzFdXTtcblxuXHRcdFx0cmV0dXJuIF9jb25zdGFudHMuQklOQVJJRVNbcGFpclswXV0uc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoZmlyc3QsIGlkeCkge1xuXHRcdFx0XHRyZXR1cm4gKGZpcnN0ID09PSAnMScgPyAnMTExJyA6ICcxJykgKyAoc2Vjb25kW2lkeF0gPT09ICcxJyA/ICcwMDAnIDogJzAnKTtcblx0XHRcdH0pLmpvaW4oJycpO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBJVEY7XG59KF9CYXJjb2RlMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSVRGOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9JVEYyID0gcmVxdWlyZSgnLi9JVEYnKTtcblxudmFyIF9JVEYzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSVRGMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLy8gQ2FsY3VsYXRlIHRoZSBjaGVja3N1bSBkaWdpdFxudmFyIGNoZWNrc3VtID0gZnVuY3Rpb24gY2hlY2tzdW0oZGF0YSkge1xuXHR2YXIgcmVzID0gZGF0YS5zdWJzdHIoMCwgMTMpLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKG51bSkge1xuXHRcdHJldHVybiBwYXJzZUludChudW0sIDEwKTtcblx0fSkucmVkdWNlKGZ1bmN0aW9uIChzdW0sIG4sIGlkeCkge1xuXHRcdHJldHVybiBzdW0gKyBuICogKDMgLSBpZHggJSAyICogMik7XG5cdH0sIDApO1xuXG5cdHJldHVybiBNYXRoLmNlaWwocmVzIC8gMTApICogMTAgLSByZXM7XG59O1xuXG52YXIgSVRGMTQgPSBmdW5jdGlvbiAoX0lURikge1xuXHRfaW5oZXJpdHMoSVRGMTQsIF9JVEYpO1xuXG5cdGZ1bmN0aW9uIElURjE0KGRhdGEsIG9wdGlvbnMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgSVRGMTQpO1xuXG5cdFx0Ly8gQWRkIGNoZWNrc3VtIGlmIGl0IGRvZXMgbm90IGV4aXN0XG5cdFx0aWYgKGRhdGEuc2VhcmNoKC9eWzAtOV17MTN9JC8pICE9PSAtMSkge1xuXHRcdFx0ZGF0YSArPSBjaGVja3N1bShkYXRhKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChJVEYxNC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKElURjE0KSkuY2FsbCh0aGlzLCBkYXRhLCBvcHRpb25zKSk7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoSVRGMTQsIFt7XG5cdFx0a2V5OiAndmFsaWQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB2YWxpZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmRhdGEuc2VhcmNoKC9eWzAtOV17MTR9JC8pICE9PSAtMSAmJiArdGhpcy5kYXRhWzEzXSA9PT0gY2hlY2tzdW0odGhpcy5kYXRhKTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gSVRGMTQ7XG59KF9JVEYzLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBJVEYxNDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG52YXIgU1RBUlRfQklOID0gZXhwb3J0cy5TVEFSVF9CSU4gPSAnMTAxMCc7XG52YXIgRU5EX0JJTiA9IGV4cG9ydHMuRU5EX0JJTiA9ICcxMTEwMSc7XG5cbnZhciBCSU5BUklFUyA9IGV4cG9ydHMuQklOQVJJRVMgPSBbJzAwMTEwJywgJzEwMDAxJywgJzAxMDAxJywgJzExMDAwJywgJzAwMTAxJywgJzEwMTAwJywgJzAxMTAwJywgJzAwMDExJywgJzEwMDEwJywgJzAxMDEwJ107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5JVEYxNCA9IGV4cG9ydHMuSVRGID0gdW5kZWZpbmVkO1xuXG52YXIgX0lURiA9IHJlcXVpcmUoJy4vSVRGJyk7XG5cbnZhciBfSVRGMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0lURik7XG5cbnZhciBfSVRGMyA9IHJlcXVpcmUoJy4vSVRGMTQnKTtcblxudmFyIF9JVEY0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSVRGMyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuSVRGID0gX0lURjIuZGVmYXVsdDtcbmV4cG9ydHMuSVRGMTQgPSBfSVRGNC5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX0JhcmNvZGUyID0gcmVxdWlyZShcIi4uL0JhcmNvZGUuanNcIik7XG5cbnZhciBfQmFyY29kZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CYXJjb2RlMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH0gLy8gRW5jb2RpbmcgZG9jdW1lbnRhdGlvblxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTVNJX0JhcmNvZGUjQ2hhcmFjdGVyX3NldF9hbmRfYmluYXJ5X2xvb2t1cFxuXG52YXIgTVNJID0gZnVuY3Rpb24gKF9CYXJjb2RlKSB7XG5cdF9pbmhlcml0cyhNU0ksIF9CYXJjb2RlKTtcblxuXHRmdW5jdGlvbiBNU0koZGF0YSwgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNU0kpO1xuXG5cdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChNU0kuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihNU0kpKS5jYWxsKHRoaXMsIGRhdGEsIG9wdGlvbnMpKTtcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhNU0ksIFt7XG5cdFx0a2V5OiBcImVuY29kZVwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBlbmNvZGUoKSB7XG5cdFx0XHQvLyBTdGFydCBiaXRzXG5cdFx0XHR2YXIgcmV0ID0gXCIxMTBcIjtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Ly8gQ29udmVydCB0aGUgY2hhcmFjdGVyIHRvIGJpbmFyeSAoYWx3YXlzIDQgYmluYXJ5IGRpZ2l0cylcblx0XHRcdFx0dmFyIGRpZ2l0ID0gcGFyc2VJbnQodGhpcy5kYXRhW2ldKTtcblx0XHRcdFx0dmFyIGJpbiA9IGRpZ2l0LnRvU3RyaW5nKDIpO1xuXHRcdFx0XHRiaW4gPSBhZGRaZXJvZXMoYmluLCA0IC0gYmluLmxlbmd0aCk7XG5cblx0XHRcdFx0Ly8gQWRkIDEwMCBmb3IgZXZlcnkgemVybyBhbmQgMTEwIGZvciBldmVyeSAxXG5cdFx0XHRcdGZvciAodmFyIGIgPSAwOyBiIDwgYmluLmxlbmd0aDsgYisrKSB7XG5cdFx0XHRcdFx0cmV0ICs9IGJpbltiXSA9PSBcIjBcIiA/IFwiMTAwXCIgOiBcIjExMFwiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEVuZCBiaXRzXG5cdFx0XHRyZXQgKz0gXCIxMDAxXCI7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IHJldCxcblx0XHRcdFx0dGV4dDogdGhpcy50ZXh0XG5cdFx0XHR9O1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJ2YWxpZFwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB2YWxpZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmRhdGEuc2VhcmNoKC9eWzAtOV0rJC8pICE9PSAtMTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gTVNJO1xufShfQmFyY29kZTMuZGVmYXVsdCk7XG5cbmZ1bmN0aW9uIGFkZFplcm9lcyhudW1iZXIsIG4pIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIHtcblx0XHRudW1iZXIgPSBcIjBcIiArIG51bWJlcjtcblx0fVxuXHRyZXR1cm4gbnVtYmVyO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBNU0k7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX01TSTIgPSByZXF1aXJlKCcuL01TSS5qcycpO1xuXG52YXIgX01TSTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NU0kyKTtcblxudmFyIF9jaGVja3N1bXMgPSByZXF1aXJlKCcuL2NoZWNrc3Vtcy5qcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBNU0kxMCA9IGZ1bmN0aW9uIChfTVNJKSB7XG5cdF9pbmhlcml0cyhNU0kxMCwgX01TSSk7XG5cblx0ZnVuY3Rpb24gTVNJMTAoZGF0YSwgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNU0kxMCk7XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE1TSTEwLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTVNJMTApKS5jYWxsKHRoaXMsIGRhdGEgKyAoMCwgX2NoZWNrc3Vtcy5tb2QxMCkoZGF0YSksIG9wdGlvbnMpKTtcblx0fVxuXG5cdHJldHVybiBNU0kxMDtcbn0oX01TSTMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1TSTEwOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9NU0kyID0gcmVxdWlyZSgnLi9NU0kuanMnKTtcblxudmFyIF9NU0kzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTVNJMik7XG5cbnZhciBfY2hlY2tzdW1zID0gcmVxdWlyZSgnLi9jaGVja3N1bXMuanMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgTVNJMTAxMCA9IGZ1bmN0aW9uIChfTVNJKSB7XG5cdF9pbmhlcml0cyhNU0kxMDEwLCBfTVNJKTtcblxuXHRmdW5jdGlvbiBNU0kxMDEwKGRhdGEsIG9wdGlvbnMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgTVNJMTAxMCk7XG5cblx0XHRkYXRhICs9ICgwLCBfY2hlY2tzdW1zLm1vZDEwKShkYXRhKTtcblx0XHRkYXRhICs9ICgwLCBfY2hlY2tzdW1zLm1vZDEwKShkYXRhKTtcblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE1TSTEwMTAuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihNU0kxMDEwKSkuY2FsbCh0aGlzLCBkYXRhLCBvcHRpb25zKSk7XG5cdH1cblxuXHRyZXR1cm4gTVNJMTAxMDtcbn0oX01TSTMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1TSTEwMTA7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX01TSTIgPSByZXF1aXJlKCcuL01TSS5qcycpO1xuXG52YXIgX01TSTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NU0kyKTtcblxudmFyIF9jaGVja3N1bXMgPSByZXF1aXJlKCcuL2NoZWNrc3Vtcy5qcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBNU0kxMSA9IGZ1bmN0aW9uIChfTVNJKSB7XG5cdF9pbmhlcml0cyhNU0kxMSwgX01TSSk7XG5cblx0ZnVuY3Rpb24gTVNJMTEoZGF0YSwgb3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNU0kxMSk7XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE1TSTExLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTVNJMTEpKS5jYWxsKHRoaXMsIGRhdGEgKyAoMCwgX2NoZWNrc3Vtcy5tb2QxMSkoZGF0YSksIG9wdGlvbnMpKTtcblx0fVxuXG5cdHJldHVybiBNU0kxMTtcbn0oX01TSTMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1TSTExOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9NU0kyID0gcmVxdWlyZSgnLi9NU0kuanMnKTtcblxudmFyIF9NU0kzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTVNJMik7XG5cbnZhciBfY2hlY2tzdW1zID0gcmVxdWlyZSgnLi9jaGVja3N1bXMuanMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgTVNJMTExMCA9IGZ1bmN0aW9uIChfTVNJKSB7XG5cdF9pbmhlcml0cyhNU0kxMTEwLCBfTVNJKTtcblxuXHRmdW5jdGlvbiBNU0kxMTEwKGRhdGEsIG9wdGlvbnMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgTVNJMTExMCk7XG5cblx0XHRkYXRhICs9ICgwLCBfY2hlY2tzdW1zLm1vZDExKShkYXRhKTtcblx0XHRkYXRhICs9ICgwLCBfY2hlY2tzdW1zLm1vZDEwKShkYXRhKTtcblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE1TSTExMTAuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihNU0kxMTEwKSkuY2FsbCh0aGlzLCBkYXRhLCBvcHRpb25zKSk7XG5cdH1cblxuXHRyZXR1cm4gTVNJMTExMDtcbn0oX01TSTMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1TSTExMTA7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1vZDEwID0gbW9kMTA7XG5leHBvcnRzLm1vZDExID0gbW9kMTE7XG5mdW5jdGlvbiBtb2QxMChudW1iZXIpIHtcblx0dmFyIHN1bSA9IDA7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIG4gPSBwYXJzZUludChudW1iZXJbaV0pO1xuXHRcdGlmICgoaSArIG51bWJlci5sZW5ndGgpICUgMiA9PT0gMCkge1xuXHRcdFx0c3VtICs9IG47XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN1bSArPSBuICogMiAlIDEwICsgTWF0aC5mbG9vcihuICogMiAvIDEwKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuICgxMCAtIHN1bSAlIDEwKSAlIDEwO1xufVxuXG5mdW5jdGlvbiBtb2QxMShudW1iZXIpIHtcblx0dmFyIHN1bSA9IDA7XG5cdHZhciB3ZWlnaHRzID0gWzIsIDMsIDQsIDUsIDYsIDddO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlci5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBuID0gcGFyc2VJbnQobnVtYmVyW251bWJlci5sZW5ndGggLSAxIC0gaV0pO1xuXHRcdHN1bSArPSB3ZWlnaHRzW2kgJSB3ZWlnaHRzLmxlbmd0aF0gKiBuO1xuXHR9XG5cdHJldHVybiAoMTEgLSBzdW0gJSAxMSkgJSAxMTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLk1TSTExMTAgPSBleHBvcnRzLk1TSTEwMTAgPSBleHBvcnRzLk1TSTExID0gZXhwb3J0cy5NU0kxMCA9IGV4cG9ydHMuTVNJID0gdW5kZWZpbmVkO1xuXG52YXIgX01TSSA9IHJlcXVpcmUoJy4vTVNJLmpzJyk7XG5cbnZhciBfTVNJMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01TSSk7XG5cbnZhciBfTVNJMyA9IHJlcXVpcmUoJy4vTVNJMTAuanMnKTtcblxudmFyIF9NU0k0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTVNJMyk7XG5cbnZhciBfTVNJNSA9IHJlcXVpcmUoJy4vTVNJMTEuanMnKTtcblxudmFyIF9NU0k2ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTVNJNSk7XG5cbnZhciBfTVNJNyA9IHJlcXVpcmUoJy4vTVNJMTAxMC5qcycpO1xuXG52YXIgX01TSTggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NU0k3KTtcblxudmFyIF9NU0k5ID0gcmVxdWlyZSgnLi9NU0kxMTEwLmpzJyk7XG5cbnZhciBfTVNJMTAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NU0k5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5NU0kgPSBfTVNJMi5kZWZhdWx0O1xuZXhwb3J0cy5NU0kxMCA9IF9NU0k0LmRlZmF1bHQ7XG5leHBvcnRzLk1TSTExID0gX01TSTYuZGVmYXVsdDtcbmV4cG9ydHMuTVNJMTAxMCA9IF9NU0k4LmRlZmF1bHQ7XG5leHBvcnRzLk1TSTExMTAgPSBfTVNJMTAuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY29kYWJhciA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9CYXJjb2RlMiA9IHJlcXVpcmUoXCIuLi9CYXJjb2RlLmpzXCIpO1xuXG52YXIgX0JhcmNvZGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQmFyY29kZTIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9IC8vIEVuY29kaW5nIHNwZWNpZmljYXRpb246XG4vLyBodHRwOi8vd3d3LmJhcmNvZGVpc2xhbmQuY29tL2NvZGFiYXIucGh0bWxcblxudmFyIGNvZGFiYXIgPSBmdW5jdGlvbiAoX0JhcmNvZGUpIHtcblx0X2luaGVyaXRzKGNvZGFiYXIsIF9CYXJjb2RlKTtcblxuXHRmdW5jdGlvbiBjb2RhYmFyKGRhdGEsIG9wdGlvbnMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgY29kYWJhcik7XG5cblx0XHRpZiAoZGF0YS5zZWFyY2goL15bMC05XFwtXFwkXFw6XFwuXFwrXFwvXSskLykgPT09IDApIHtcblx0XHRcdGRhdGEgPSBcIkFcIiArIGRhdGEgKyBcIkFcIjtcblx0XHR9XG5cblx0XHR2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoY29kYWJhci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKGNvZGFiYXIpKS5jYWxsKHRoaXMsIGRhdGEudG9VcHBlckNhc2UoKSwgb3B0aW9ucykpO1xuXG5cdFx0X3RoaXMudGV4dCA9IF90aGlzLm9wdGlvbnMudGV4dCB8fCBfdGhpcy50ZXh0LnJlcGxhY2UoL1tBLURdL2csICcnKTtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoY29kYWJhciwgW3tcblx0XHRrZXk6IFwidmFsaWRcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gdmFsaWQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kYXRhLnNlYXJjaCgvXltBLURdWzAtOVxcLVxcJFxcOlxcLlxcK1xcL10rW0EtRF0kLykgIT09IC0xO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJlbmNvZGVcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZW5jb2RlKCkge1xuXHRcdFx0dmFyIHJlc3VsdCA9IFtdO1xuXHRcdFx0dmFyIGVuY29kaW5ncyA9IHRoaXMuZ2V0RW5jb2RpbmdzKCk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRyZXN1bHQucHVzaChlbmNvZGluZ3NbdGhpcy5kYXRhLmNoYXJBdChpKV0pO1xuXHRcdFx0XHQvLyBmb3IgYWxsIGNoYXJhY3RlcnMgZXhjZXB0IHRoZSBsYXN0LCBhcHBlbmQgYSBuYXJyb3ctc3BhY2UgKFwiMFwiKVxuXHRcdFx0XHRpZiAoaSAhPT0gdGhpcy5kYXRhLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0XHRyZXN1bHQucHVzaChcIjBcIik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHRleHQ6IHRoaXMudGV4dCxcblx0XHRcdFx0ZGF0YTogcmVzdWx0LmpvaW4oJycpXG5cdFx0XHR9O1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJnZXRFbmNvZGluZ3NcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0RW5jb2RpbmdzKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XCIwXCI6IFwiMTAxMDEwMDExXCIsXG5cdFx0XHRcdFwiMVwiOiBcIjEwMTAxMTAwMVwiLFxuXHRcdFx0XHRcIjJcIjogXCIxMDEwMDEwMTFcIixcblx0XHRcdFx0XCIzXCI6IFwiMTEwMDEwMTAxXCIsXG5cdFx0XHRcdFwiNFwiOiBcIjEwMTEwMTAwMVwiLFxuXHRcdFx0XHRcIjVcIjogXCIxMTAxMDEwMDFcIixcblx0XHRcdFx0XCI2XCI6IFwiMTAwMTAxMDExXCIsXG5cdFx0XHRcdFwiN1wiOiBcIjEwMDEwMTEwMVwiLFxuXHRcdFx0XHRcIjhcIjogXCIxMDAxMTAxMDFcIixcblx0XHRcdFx0XCI5XCI6IFwiMTEwMTAwMTAxXCIsXG5cdFx0XHRcdFwiLVwiOiBcIjEwMTAwMTEwMVwiLFxuXHRcdFx0XHRcIiRcIjogXCIxMDExMDAxMDFcIixcblx0XHRcdFx0XCI6XCI6IFwiMTEwMTAxMTAxMVwiLFxuXHRcdFx0XHRcIi9cIjogXCIxMTAxMTAxMDExXCIsXG5cdFx0XHRcdFwiLlwiOiBcIjExMDExMDExMDFcIixcblx0XHRcdFx0XCIrXCI6IFwiMTAxMTAxMTAxMVwiLFxuXHRcdFx0XHRcIkFcIjogXCIxMDExMDAxMDAxXCIsXG5cdFx0XHRcdFwiQlwiOiBcIjEwMDEwMDEwMTFcIixcblx0XHRcdFx0XCJDXCI6IFwiMTAxMDAxMDAxMVwiLFxuXHRcdFx0XHRcIkRcIjogXCIxMDEwMDExMDAxXCJcblx0XHRcdH07XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIGNvZGFiYXI7XG59KF9CYXJjb2RlMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5jb2RhYmFyID0gY29kYWJhcjsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfQ09ERSA9IHJlcXVpcmUoJy4vQ09ERTM5LycpO1xuXG52YXIgX0NPREUyID0gcmVxdWlyZSgnLi9DT0RFMTI4LycpO1xuXG52YXIgX0VBTl9VUEMgPSByZXF1aXJlKCcuL0VBTl9VUEMvJyk7XG5cbnZhciBfSVRGID0gcmVxdWlyZSgnLi9JVEYvJyk7XG5cbnZhciBfTVNJID0gcmVxdWlyZSgnLi9NU0kvJyk7XG5cbnZhciBfcGhhcm1hY29kZSA9IHJlcXVpcmUoJy4vcGhhcm1hY29kZS8nKTtcblxudmFyIF9jb2RhYmFyID0gcmVxdWlyZSgnLi9jb2RhYmFyJyk7XG5cbnZhciBfR2VuZXJpY0JhcmNvZGUgPSByZXF1aXJlKCcuL0dlbmVyaWNCYXJjb2RlLycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG5cdENPREUzOTogX0NPREUuQ09ERTM5LFxuXHRDT0RFMTI4OiBfQ09ERTIuQ09ERTEyOCwgQ09ERTEyOEE6IF9DT0RFMi5DT0RFMTI4QSwgQ09ERTEyOEI6IF9DT0RFMi5DT0RFMTI4QiwgQ09ERTEyOEM6IF9DT0RFMi5DT0RFMTI4Qyxcblx0RUFOMTM6IF9FQU5fVVBDLkVBTjEzLCBFQU44OiBfRUFOX1VQQy5FQU44LCBFQU41OiBfRUFOX1VQQy5FQU41LCBFQU4yOiBfRUFOX1VQQy5FQU4yLCBVUEM6IF9FQU5fVVBDLlVQQywgVVBDRTogX0VBTl9VUEMuVVBDRSxcblx0SVRGMTQ6IF9JVEYuSVRGMTQsXG5cdElURjogX0lURi5JVEYsXG5cdE1TSTogX01TSS5NU0ksIE1TSTEwOiBfTVNJLk1TSTEwLCBNU0kxMTogX01TSS5NU0kxMSwgTVNJMTAxMDogX01TSS5NU0kxMDEwLCBNU0kxMTEwOiBfTVNJLk1TSTExMTAsXG5cdHBoYXJtYWNvZGU6IF9waGFybWFjb2RlLnBoYXJtYWNvZGUsXG5cdGNvZGFiYXI6IF9jb2RhYmFyLmNvZGFiYXIsXG5cdEdlbmVyaWNCYXJjb2RlOiBfR2VuZXJpY0JhcmNvZGUuR2VuZXJpY0JhcmNvZGVcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnBoYXJtYWNvZGUgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfQmFyY29kZTIgPSByZXF1aXJlKFwiLi4vQmFyY29kZS5qc1wiKTtcblxudmFyIF9CYXJjb2RlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0JhcmNvZGUyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvLyBFbmNvZGluZyBkb2N1bWVudGF0aW9uXG4vLyBodHRwOi8vd3d3LmdvbWFyby5jaC9mdHByb290L0xhZXR1c19QSEFSTUEtQ09ERS5wZGZcblxudmFyIHBoYXJtYWNvZGUgPSBmdW5jdGlvbiAoX0JhcmNvZGUpIHtcblx0X2luaGVyaXRzKHBoYXJtYWNvZGUsIF9CYXJjb2RlKTtcblxuXHRmdW5jdGlvbiBwaGFybWFjb2RlKGRhdGEsIG9wdGlvbnMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgcGhhcm1hY29kZSk7XG5cblx0XHR2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAocGhhcm1hY29kZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHBoYXJtYWNvZGUpKS5jYWxsKHRoaXMsIGRhdGEsIG9wdGlvbnMpKTtcblxuXHRcdF90aGlzLm51bWJlciA9IHBhcnNlSW50KGRhdGEsIDEwKTtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MocGhhcm1hY29kZSwgW3tcblx0XHRrZXk6IFwiZW5jb2RlXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGVuY29kZSgpIHtcblx0XHRcdHZhciB6ID0gdGhpcy5udW1iZXI7XG5cdFx0XHR2YXIgcmVzdWx0ID0gXCJcIjtcblxuXHRcdFx0Ly8gaHR0cDovL2kuaW1ndXIuY29tL1JNbTRVREoucG5nXG5cdFx0XHQvLyAoc291cmNlOiBodHRwOi8vd3d3LmdvbWFyby5jaC9mdHByb290L0xhZXR1c19QSEFSTUEtQ09ERS5wZGYsIHBhZ2U6IDM0KVxuXHRcdFx0d2hpbGUgKCFpc05hTih6KSAmJiB6ICE9IDApIHtcblx0XHRcdFx0aWYgKHogJSAyID09PSAwKSB7XG5cdFx0XHRcdFx0Ly8gRXZlblxuXHRcdFx0XHRcdHJlc3VsdCA9IFwiMTExMDBcIiArIHJlc3VsdDtcblx0XHRcdFx0XHR6ID0gKHogLSAyKSAvIDI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gT2RkXG5cdFx0XHRcdFx0cmVzdWx0ID0gXCIxMDBcIiArIHJlc3VsdDtcblx0XHRcdFx0XHR6ID0gKHogLSAxKSAvIDI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVtb3ZlIHRoZSB0d28gbGFzdCB6ZXJvZXNcblx0XHRcdHJlc3VsdCA9IHJlc3VsdC5zbGljZSgwLCAtMik7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IHJlc3VsdCxcblx0XHRcdFx0dGV4dDogdGhpcy50ZXh0XG5cdFx0XHR9O1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJ2YWxpZFwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB2YWxpZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLm51bWJlciA+PSAzICYmIHRoaXMubnVtYmVyIDw9IDEzMTA3MDtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gcGhhcm1hY29kZTtcbn0oX0JhcmNvZGUzLmRlZmF1bHQpO1xuXG5leHBvcnRzLnBoYXJtYWNvZGUgPSBwaGFybWFjb2RlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKmVzbGludCBuby1jb25zb2xlOiAwICovXG5cbnZhciBFcnJvckhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIEVycm9ySGFuZGxlcihhcGkpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXJyb3JIYW5kbGVyKTtcblxuXHRcdHRoaXMuYXBpID0gYXBpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKEVycm9ySGFuZGxlciwgW3tcblx0XHRrZXk6IFwiaGFuZGxlQ2F0Y2hcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlQ2F0Y2goZSkge1xuXHRcdFx0Ly8gSWYgYmFiZWwgc3VwcG9ydGVkIGV4dGVuZGluZyBvZiBFcnJvciBpbiBhIGNvcnJlY3Qgd2F5IGluc3RhbmNlb2Ygd291bGQgYmUgdXNlZCBoZXJlXG5cdFx0XHRpZiAoZS5uYW1lID09PSBcIkludmFsaWRJbnB1dEV4Y2VwdGlvblwiKSB7XG5cdFx0XHRcdGlmICh0aGlzLmFwaS5fb3B0aW9ucy52YWxpZCAhPT0gdGhpcy5hcGkuX2RlZmF1bHRzLnZhbGlkKSB7XG5cdFx0XHRcdFx0dGhpcy5hcGkuX29wdGlvbnMudmFsaWQoZmFsc2UpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRocm93IGUubWVzc2FnZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgZTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5hcGkucmVuZGVyID0gZnVuY3Rpb24gKCkge307XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcIndyYXBCYXJjb2RlQ2FsbFwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB3cmFwQmFyY29kZUNhbGwoZnVuYykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuXHRcdFx0XHR0aGlzLmFwaS5fb3B0aW9ucy52YWxpZCh0cnVlKTtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0dGhpcy5oYW5kbGVDYXRjaChlKTtcblxuXHRcdFx0XHRyZXR1cm4gdGhpcy5hcGk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIEVycm9ySGFuZGxlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRXJyb3JIYW5kbGVyOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgSW52YWxpZElucHV0RXhjZXB0aW9uID0gZnVuY3Rpb24gKF9FcnJvcikge1xuXHRfaW5oZXJpdHMoSW52YWxpZElucHV0RXhjZXB0aW9uLCBfRXJyb3IpO1xuXG5cdGZ1bmN0aW9uIEludmFsaWRJbnB1dEV4Y2VwdGlvbihzeW1ib2xvZ3ksIGlucHV0KSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIEludmFsaWRJbnB1dEV4Y2VwdGlvbik7XG5cblx0XHR2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoSW52YWxpZElucHV0RXhjZXB0aW9uLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoSW52YWxpZElucHV0RXhjZXB0aW9uKSkuY2FsbCh0aGlzKSk7XG5cblx0XHRfdGhpcy5uYW1lID0gXCJJbnZhbGlkSW5wdXRFeGNlcHRpb25cIjtcblxuXHRcdF90aGlzLnN5bWJvbG9neSA9IHN5bWJvbG9neTtcblx0XHRfdGhpcy5pbnB1dCA9IGlucHV0O1xuXG5cdFx0X3RoaXMubWVzc2FnZSA9ICdcIicgKyBfdGhpcy5pbnB1dCArICdcIiBpcyBub3QgYSB2YWxpZCBpbnB1dCBmb3IgJyArIF90aGlzLnN5bWJvbG9neTtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRyZXR1cm4gSW52YWxpZElucHV0RXhjZXB0aW9uO1xufShFcnJvcik7XG5cbnZhciBJbnZhbGlkRWxlbWVudEV4Y2VwdGlvbiA9IGZ1bmN0aW9uIChfRXJyb3IyKSB7XG5cdF9pbmhlcml0cyhJbnZhbGlkRWxlbWVudEV4Y2VwdGlvbiwgX0Vycm9yMik7XG5cblx0ZnVuY3Rpb24gSW52YWxpZEVsZW1lbnRFeGNlcHRpb24oKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIEludmFsaWRFbGVtZW50RXhjZXB0aW9uKTtcblxuXHRcdHZhciBfdGhpczIgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoSW52YWxpZEVsZW1lbnRFeGNlcHRpb24uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihJbnZhbGlkRWxlbWVudEV4Y2VwdGlvbikpLmNhbGwodGhpcykpO1xuXG5cdFx0X3RoaXMyLm5hbWUgPSBcIkludmFsaWRFbGVtZW50RXhjZXB0aW9uXCI7XG5cdFx0X3RoaXMyLm1lc3NhZ2UgPSBcIk5vdCBzdXBwb3J0ZWQgdHlwZSB0byByZW5kZXIgb25cIjtcblx0XHRyZXR1cm4gX3RoaXMyO1xuXHR9XG5cblx0cmV0dXJuIEludmFsaWRFbGVtZW50RXhjZXB0aW9uO1xufShFcnJvcik7XG5cbnZhciBOb0VsZW1lbnRFeGNlcHRpb24gPSBmdW5jdGlvbiAoX0Vycm9yMykge1xuXHRfaW5oZXJpdHMoTm9FbGVtZW50RXhjZXB0aW9uLCBfRXJyb3IzKTtcblxuXHRmdW5jdGlvbiBOb0VsZW1lbnRFeGNlcHRpb24oKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vRWxlbWVudEV4Y2VwdGlvbik7XG5cblx0XHR2YXIgX3RoaXMzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE5vRWxlbWVudEV4Y2VwdGlvbi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE5vRWxlbWVudEV4Y2VwdGlvbikpLmNhbGwodGhpcykpO1xuXG5cdFx0X3RoaXMzLm5hbWUgPSBcIk5vRWxlbWVudEV4Y2VwdGlvblwiO1xuXHRcdF90aGlzMy5tZXNzYWdlID0gXCJObyBlbGVtZW50IHRvIHJlbmRlciBvbi5cIjtcblx0XHRyZXR1cm4gX3RoaXMzO1xuXHR9XG5cblx0cmV0dXJuIE5vRWxlbWVudEV4Y2VwdGlvbjtcbn0oRXJyb3IpO1xuXG5leHBvcnRzLkludmFsaWRJbnB1dEV4Y2VwdGlvbiA9IEludmFsaWRJbnB1dEV4Y2VwdGlvbjtcbmV4cG9ydHMuSW52YWxpZEVsZW1lbnRFeGNlcHRpb24gPSBJbnZhbGlkRWxlbWVudEV4Y2VwdGlvbjtcbmV4cG9ydHMuTm9FbGVtZW50RXhjZXB0aW9uID0gTm9FbGVtZW50RXhjZXB0aW9uOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZml4T3B0aW9ucztcblxuXG5mdW5jdGlvbiBmaXhPcHRpb25zKG9wdGlvbnMpIHtcblx0Ly8gRml4IHRoZSBtYXJnaW5zXG5cdG9wdGlvbnMubWFyZ2luVG9wID0gb3B0aW9ucy5tYXJnaW5Ub3AgfHwgb3B0aW9ucy5tYXJnaW47XG5cdG9wdGlvbnMubWFyZ2luQm90dG9tID0gb3B0aW9ucy5tYXJnaW5Cb3R0b20gfHwgb3B0aW9ucy5tYXJnaW47XG5cdG9wdGlvbnMubWFyZ2luUmlnaHQgPSBvcHRpb25zLm1hcmdpblJpZ2h0IHx8IG9wdGlvbnMubWFyZ2luO1xuXHRvcHRpb25zLm1hcmdpbkxlZnQgPSBvcHRpb25zLm1hcmdpbkxlZnQgfHwgb3B0aW9ucy5tYXJnaW47XG5cblx0cmV0dXJuIG9wdGlvbnM7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfb3B0aW9uc0Zyb21TdHJpbmdzID0gcmVxdWlyZShcIi4vb3B0aW9uc0Zyb21TdHJpbmdzLmpzXCIpO1xuXG52YXIgX29wdGlvbnNGcm9tU3RyaW5nczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vcHRpb25zRnJvbVN0cmluZ3MpO1xuXG52YXIgX2RlZmF1bHRzID0gcmVxdWlyZShcIi4uL29wdGlvbnMvZGVmYXVsdHMuanNcIik7XG5cbnZhciBfZGVmYXVsdHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmYXVsdHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRPcHRpb25zRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuXHR2YXIgb3B0aW9ucyA9IHt9O1xuXHRmb3IgKHZhciBwcm9wZXJ0eSBpbiBfZGVmYXVsdHMyLmRlZmF1bHQpIHtcblx0XHRpZiAoX2RlZmF1bHRzMi5kZWZhdWx0Lmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuXHRcdFx0Ly8ganNiYXJjb2RlLSpcblx0XHRcdGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShcImpzYmFyY29kZS1cIiArIHByb3BlcnR5LnRvTG93ZXJDYXNlKCkpKSB7XG5cdFx0XHRcdG9wdGlvbnNbcHJvcGVydHldID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJqc2JhcmNvZGUtXCIgKyBwcm9wZXJ0eS50b0xvd2VyQ2FzZSgpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gZGF0YS0qXG5cdFx0XHRpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJkYXRhLVwiICsgcHJvcGVydHkudG9Mb3dlckNhc2UoKSkpIHtcblx0XHRcdFx0b3B0aW9uc1twcm9wZXJ0eV0gPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtXCIgKyBwcm9wZXJ0eS50b0xvd2VyQ2FzZSgpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRvcHRpb25zW1widmFsdWVcIl0gPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImpzYmFyY29kZS12YWx1ZVwiKSB8fCBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIik7XG5cblx0Ly8gU2luY2UgYWxsIGF0cmlidXRlcyBhcmUgc3RyaW5nIHRoZXkgbmVlZCB0byBiZSBjb252ZXJ0ZWQgdG8gaW50ZWdlcnNcblx0b3B0aW9ucyA9ICgwLCBfb3B0aW9uc0Zyb21TdHJpbmdzMi5kZWZhdWx0KShvcHRpb25zKTtcblxuXHRyZXR1cm4gb3B0aW9ucztcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0T3B0aW9uc0Zyb21FbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IC8qIGdsb2JhbCBIVE1MSW1hZ2VFbGVtZW50ICovXG4vKiBnbG9iYWwgSFRNTENhbnZhc0VsZW1lbnQgKi9cbi8qIGdsb2JhbCBTVkdFbGVtZW50ICovXG5cbnZhciBfZ2V0T3B0aW9uc0Zyb21FbGVtZW50ID0gcmVxdWlyZShcIi4vZ2V0T3B0aW9uc0Zyb21FbGVtZW50LmpzXCIpO1xuXG52YXIgX2dldE9wdGlvbnNGcm9tRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRPcHRpb25zRnJvbUVsZW1lbnQpO1xuXG52YXIgX3JlbmRlcmVycyA9IHJlcXVpcmUoXCIuLi9yZW5kZXJlcnNcIik7XG5cbnZhciBfcmVuZGVyZXJzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlbmRlcmVycyk7XG5cbnZhciBfZXhjZXB0aW9ucyA9IHJlcXVpcmUoXCIuLi9leGNlcHRpb25zL2V4Y2VwdGlvbnMuanNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIFRha2VzIGFuIGVsZW1lbnQgYW5kIHJldHVybnMgYW4gb2JqZWN0IHdpdGggaW5mb3JtYXRpb24gYWJvdXQgaG93XG4vLyBpdCBzaG91bGQgYmUgcmVuZGVyZWRcbi8vIFRoaXMgY291bGQgYWxzbyByZXR1cm4gYW4gYXJyYXkgd2l0aCB0aGVzZSBvYmplY3RzXG4vLyB7XG4vLyAgIGVsZW1lbnQ6IFRoZSBlbGVtZW50IHRoYXQgdGhlIHJlbmRlcmVyIHNob3VsZCBkcmF3IG9uXG4vLyAgIHJlbmRlcmVyOiBUaGUgbmFtZSBvZiB0aGUgcmVuZGVyZXJcbi8vICAgYWZ0ZXJSZW5kZXIgKG9wdGlvbmFsKTogSWYgc29tZXRoaW5nIGhhcyB0byBkb25lIGFmdGVyIHRoZSByZW5kZXJlclxuLy8gICAgIGNvbXBsZXRlZCwgY2FsbHMgYWZ0ZXJSZW5kZXIgKGZ1bmN0aW9uKVxuLy8gICBvcHRpb25zIChvcHRpb25hbCk6IE9wdGlvbnMgdGhhdCBjYW4gYmUgZGVmaW5lZCBpbiB0aGUgZWxlbWVudFxuLy8gfVxuXG5mdW5jdGlvbiBnZXRSZW5kZXJQcm9wZXJ0aWVzKGVsZW1lbnQpIHtcblx0Ly8gSWYgdGhlIGVsZW1lbnQgaXMgYSBzdHJpbmcsIHF1ZXJ5IHNlbGVjdCBjYWxsIGFnYWluXG5cdGlmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJzdHJpbmdcIikge1xuXHRcdHJldHVybiBxdWVyeVNlbGVjdGVkUmVuZGVyUHJvcGVydGllcyhlbGVtZW50KTtcblx0fVxuXHQvLyBJZiBlbGVtZW50IGlzIGFycmF5LiBSZWN1cnNpdmx5IGNhbGwgd2l0aCBldmVyeSBvYmplY3QgaW4gdGhlIGFycmF5XG5cdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZWxlbWVudCkpIHtcblx0XHRcdHZhciByZXR1cm5BcnJheSA9IFtdO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHJldHVybkFycmF5LnB1c2goZ2V0UmVuZGVyUHJvcGVydGllcyhlbGVtZW50W2ldKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmV0dXJuQXJyYXk7XG5cdFx0fVxuXHRcdC8vIElmIGVsZW1lbnQsIHJlbmRlciBvbiBjYW52YXMgYW5kIHNldCB0aGUgdXJpIGFzIHNyY1xuXHRcdGVsc2UgaWYgKHR5cGVvZiBIVE1MQ2FudmFzRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcblx0XHRcdFx0cmV0dXJuIG5ld0NhbnZhc1JlbmRlclByb3BlcnRpZXMoZWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0XHQvLyBJZiBTVkdcblx0XHRcdGVsc2UgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlTmFtZSAmJiBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzdmcnIHx8IHR5cGVvZiBTVkdFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBlbGVtZW50IGluc3RhbmNlb2YgU1ZHRWxlbWVudCkge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRlbGVtZW50OiBlbGVtZW50LFxuXHRcdFx0XHRcdFx0b3B0aW9uczogKDAsIF9nZXRPcHRpb25zRnJvbUVsZW1lbnQyLmRlZmF1bHQpKGVsZW1lbnQpLFxuXHRcdFx0XHRcdFx0cmVuZGVyZXI6IF9yZW5kZXJlcnMyLmRlZmF1bHQuU1ZHUmVuZGVyZXJcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIElmIGNhbnZhcyAoaW4gYnJvd3Nlcilcblx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIEhUTUxDYW52YXNFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBlbGVtZW50IGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHtcblx0XHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQ6IGVsZW1lbnQsXG5cdFx0XHRcdFx0XHRcdG9wdGlvbnM6ICgwLCBfZ2V0T3B0aW9uc0Zyb21FbGVtZW50Mi5kZWZhdWx0KShlbGVtZW50KSxcblx0XHRcdFx0XHRcdFx0cmVuZGVyZXI6IF9yZW5kZXJlcnMyLmRlZmF1bHQuQ2FudmFzUmVuZGVyZXJcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIElmIGNhbnZhcyAoaW4gbm9kZSlcblx0XHRcdFx0XHRlbHNlIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuZ2V0Q29udGV4dCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQ6IGVsZW1lbnQsXG5cdFx0XHRcdFx0XHRcdFx0cmVuZGVyZXI6IF9yZW5kZXJlcnMyLmRlZmF1bHQuQ2FudmFzUmVuZGVyZXJcblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoZWxlbWVudCAmJiAodHlwZW9mIGVsZW1lbnQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihlbGVtZW50KSkgPT09ICdvYmplY3QnICYmICFlbGVtZW50Lm5vZGVOYW1lKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdFx0ZWxlbWVudDogZWxlbWVudCxcblx0XHRcdFx0XHRcdFx0XHRyZW5kZXJlcjogX3JlbmRlcmVyczIuZGVmYXVsdC5PYmplY3RSZW5kZXJlclxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IF9leGNlcHRpb25zLkludmFsaWRFbGVtZW50RXhjZXB0aW9uKCk7XG5cdFx0XHRcdFx0XHR9XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5U2VsZWN0ZWRSZW5kZXJQcm9wZXJ0aWVzKHN0cmluZykge1xuXHR2YXIgc2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHN0cmluZyk7XG5cdGlmIChzZWxlY3Rvci5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHR9IGVsc2Uge1xuXHRcdHZhciByZXR1cm5BcnJheSA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0b3IubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJldHVybkFycmF5LnB1c2goZ2V0UmVuZGVyUHJvcGVydGllcyhzZWxlY3RvcltpXSkpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmV0dXJuQXJyYXk7XG5cdH1cbn1cblxuZnVuY3Rpb24gbmV3Q2FudmFzUmVuZGVyUHJvcGVydGllcyhpbWdFbGVtZW50KSB7XG5cdHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0cmV0dXJuIHtcblx0XHRlbGVtZW50OiBjYW52YXMsXG5cdFx0b3B0aW9uczogKDAsIF9nZXRPcHRpb25zRnJvbUVsZW1lbnQyLmRlZmF1bHQpKGltZ0VsZW1lbnQpLFxuXHRcdHJlbmRlcmVyOiBfcmVuZGVyZXJzMi5kZWZhdWx0LkNhbnZhc1JlbmRlcmVyLFxuXHRcdGFmdGVyUmVuZGVyOiBmdW5jdGlvbiBhZnRlclJlbmRlcigpIHtcblx0XHRcdGltZ0VsZW1lbnQuc2V0QXR0cmlidXRlKFwic3JjXCIsIGNhbnZhcy50b0RhdGFVUkwoKSk7XG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBnZXRSZW5kZXJQcm9wZXJ0aWVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gbGluZWFyaXplRW5jb2RpbmdzO1xuXG4vLyBFbmNvZGluZ3MgY2FuIGJlIG5lc3RsZWQgbGlrZSBbWzEtMSwgMS0yXSwgMiwgWzMtMSwgMy0yXVxuLy8gQ29udmVydCB0byBbMS0xLCAxLTIsIDIsIDMtMSwgMy0yXVxuXG5mdW5jdGlvbiBsaW5lYXJpemVFbmNvZGluZ3MoZW5jb2RpbmdzKSB7XG5cdHZhciBsaW5lYXJFbmNvZGluZ3MgPSBbXTtcblx0ZnVuY3Rpb24gbmV4dExldmVsKGVuY29kZWQpIHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShlbmNvZGVkKSkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbmNvZGVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdG5leHRMZXZlbChlbmNvZGVkW2ldKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0ZW5jb2RlZC50ZXh0ID0gZW5jb2RlZC50ZXh0IHx8IFwiXCI7XG5cdFx0XHRlbmNvZGVkLmRhdGEgPSBlbmNvZGVkLmRhdGEgfHwgXCJcIjtcblx0XHRcdGxpbmVhckVuY29kaW5ncy5wdXNoKGVuY29kZWQpO1xuXHRcdH1cblx0fVxuXHRuZXh0TGV2ZWwoZW5jb2RpbmdzKTtcblxuXHRyZXR1cm4gbGluZWFyRW5jb2RpbmdzO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob2xkLCByZXBsYWNlT2JqKSB7XG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgb2xkLCByZXBsYWNlT2JqKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBvcHRpb25zRnJvbVN0cmluZ3M7XG5cbi8vIENvbnZlcnQgc3RyaW5nIHRvIGludGVnZXJzL2Jvb2xlYW5zIHdoZXJlIGl0IHNob3VsZCBiZVxuXG5mdW5jdGlvbiBvcHRpb25zRnJvbVN0cmluZ3Mob3B0aW9ucykge1xuXHR2YXIgaW50T3B0aW9ucyA9IFtcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwidGV4dE1hcmdpblwiLCBcImZvbnRTaXplXCIsIFwibWFyZ2luXCIsIFwibWFyZ2luVG9wXCIsIFwibWFyZ2luQm90dG9tXCIsIFwibWFyZ2luTGVmdFwiLCBcIm1hcmdpblJpZ2h0XCJdO1xuXG5cdGZvciAodmFyIGludE9wdGlvbiBpbiBpbnRPcHRpb25zKSB7XG5cdFx0aWYgKGludE9wdGlvbnMuaGFzT3duUHJvcGVydHkoaW50T3B0aW9uKSkge1xuXHRcdFx0aW50T3B0aW9uID0gaW50T3B0aW9uc1tpbnRPcHRpb25dO1xuXHRcdFx0aWYgKHR5cGVvZiBvcHRpb25zW2ludE9wdGlvbl0gPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0b3B0aW9uc1tpbnRPcHRpb25dID0gcGFyc2VJbnQob3B0aW9uc1tpbnRPcHRpb25dLCAxMCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKHR5cGVvZiBvcHRpb25zW1wiZGlzcGxheVZhbHVlXCJdID09PSBcInN0cmluZ1wiKSB7XG5cdFx0b3B0aW9uc1tcImRpc3BsYXlWYWx1ZVwiXSA9IG9wdGlvbnNbXCJkaXNwbGF5VmFsdWVcIl0gIT0gXCJmYWxzZVwiO1xuXHR9XG5cblx0cmV0dXJuIG9wdGlvbnM7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG52YXIgZGVmYXVsdHMgPSB7XG5cdHdpZHRoOiAyLFxuXHRoZWlnaHQ6IDEwMCxcblx0Zm9ybWF0OiBcImF1dG9cIixcblx0ZGlzcGxheVZhbHVlOiB0cnVlLFxuXHRmb250T3B0aW9uczogXCJcIixcblx0Zm9udDogXCJtb25vc3BhY2VcIixcblx0dGV4dDogdW5kZWZpbmVkLFxuXHR0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG5cdHRleHRQb3NpdGlvbjogXCJib3R0b21cIixcblx0dGV4dE1hcmdpbjogMixcblx0Zm9udFNpemU6IDIwLFxuXHRiYWNrZ3JvdW5kOiBcIiNmZmZmZmZcIixcblx0bGluZUNvbG9yOiBcIiMwMDAwMDBcIixcblx0bWFyZ2luOiAxMCxcblx0bWFyZ2luVG9wOiB1bmRlZmluZWQsXG5cdG1hcmdpbkJvdHRvbTogdW5kZWZpbmVkLFxuXHRtYXJnaW5MZWZ0OiB1bmRlZmluZWQsXG5cdG1hcmdpblJpZ2h0OiB1bmRlZmluZWQsXG5cdHZhbGlkOiBmdW5jdGlvbiB2YWxpZCgpIHt9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBkZWZhdWx0czsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9tZXJnZSA9IHJlcXVpcmUoXCIuLi9oZWxwL21lcmdlLmpzXCIpO1xuXG52YXIgX21lcmdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21lcmdlKTtcblxudmFyIF9zaGFyZWQgPSByZXF1aXJlKFwiLi9zaGFyZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBDYW52YXNSZW5kZXJlciA9IGZ1bmN0aW9uICgpIHtcblx0ZnVuY3Rpb24gQ2FudmFzUmVuZGVyZXIoY2FudmFzLCBlbmNvZGluZ3MsIG9wdGlvbnMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2FudmFzUmVuZGVyZXIpO1xuXG5cdFx0dGhpcy5jYW52YXMgPSBjYW52YXM7XG5cdFx0dGhpcy5lbmNvZGluZ3MgPSBlbmNvZGluZ3M7XG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhDYW52YXNSZW5kZXJlciwgW3tcblx0XHRrZXk6IFwicmVuZGVyXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdC8vIEFib3J0IGlmIHRoZSBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgSFRNTDUgY2FudmFzXG5cdFx0XHRpZiAoIXRoaXMuY2FudmFzLmdldENvbnRleHQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdUaGUgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGNhbnZhcy4nKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5wcmVwYXJlQ2FudmFzKCk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZW5jb2RpbmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBlbmNvZGluZ09wdGlvbnMgPSAoMCwgX21lcmdlMi5kZWZhdWx0KSh0aGlzLm9wdGlvbnMsIHRoaXMuZW5jb2RpbmdzW2ldLm9wdGlvbnMpO1xuXG5cdFx0XHRcdHRoaXMuZHJhd0NhbnZhc0JhcmNvZGUoZW5jb2RpbmdPcHRpb25zLCB0aGlzLmVuY29kaW5nc1tpXSk7XG5cdFx0XHRcdHRoaXMuZHJhd0NhbnZhc1RleHQoZW5jb2RpbmdPcHRpb25zLCB0aGlzLmVuY29kaW5nc1tpXSk7XG5cblx0XHRcdFx0dGhpcy5tb3ZlQ2FudmFzRHJhd2luZyh0aGlzLmVuY29kaW5nc1tpXSk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMucmVzdG9yZUNhbnZhcygpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJwcmVwYXJlQ2FudmFzXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHByZXBhcmVDYW52YXMoKSB7XG5cdFx0XHQvLyBHZXQgdGhlIGNhbnZhcyBjb250ZXh0XG5cdFx0XHR2YXIgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5cdFx0XHRjdHguc2F2ZSgpO1xuXG5cdFx0XHQoMCwgX3NoYXJlZC5jYWxjdWxhdGVFbmNvZGluZ0F0dHJpYnV0ZXMpKHRoaXMuZW5jb2RpbmdzLCB0aGlzLm9wdGlvbnMsIGN0eCk7XG5cdFx0XHR2YXIgdG90YWxXaWR0aCA9ICgwLCBfc2hhcmVkLmdldFRvdGFsV2lkdGhPZkVuY29kaW5ncykodGhpcy5lbmNvZGluZ3MpO1xuXHRcdFx0dmFyIG1heEhlaWdodCA9ICgwLCBfc2hhcmVkLmdldE1heGltdW1IZWlnaHRPZkVuY29kaW5ncykodGhpcy5lbmNvZGluZ3MpO1xuXG5cdFx0XHR0aGlzLmNhbnZhcy53aWR0aCA9IHRvdGFsV2lkdGggKyB0aGlzLm9wdGlvbnMubWFyZ2luTGVmdCArIHRoaXMub3B0aW9ucy5tYXJnaW5SaWdodDtcblxuXHRcdFx0dGhpcy5jYW52YXMuaGVpZ2h0ID0gbWF4SGVpZ2h0O1xuXG5cdFx0XHQvLyBQYWludCB0aGUgY2FudmFzXG5cdFx0XHRjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kKSB7XG5cdFx0XHRcdGN0eC5maWxsU3R5bGUgPSB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZDtcblx0XHRcdFx0Y3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRjdHgudHJhbnNsYXRlKHRoaXMub3B0aW9ucy5tYXJnaW5MZWZ0LCAwKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwiZHJhd0NhbnZhc0JhcmNvZGVcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZHJhd0NhbnZhc0JhcmNvZGUob3B0aW9ucywgZW5jb2RpbmcpIHtcblx0XHRcdC8vIEdldCB0aGUgY2FudmFzIGNvbnRleHRcblx0XHRcdHZhciBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cblx0XHRcdHZhciBiaW5hcnkgPSBlbmNvZGluZy5kYXRhO1xuXG5cdFx0XHQvLyBDcmVhdGVzIHRoZSBiYXJjb2RlIG91dCBvZiB0aGUgZW5jb2RlZCBiaW5hcnlcblx0XHRcdHZhciB5RnJvbTtcblx0XHRcdGlmIChvcHRpb25zLnRleHRQb3NpdGlvbiA9PSBcInRvcFwiKSB7XG5cdFx0XHRcdHlGcm9tID0gb3B0aW9ucy5tYXJnaW5Ub3AgKyBvcHRpb25zLmZvbnRTaXplICsgb3B0aW9ucy50ZXh0TWFyZ2luO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0eUZyb20gPSBvcHRpb25zLm1hcmdpblRvcDtcblx0XHRcdH1cblxuXHRcdFx0Y3R4LmZpbGxTdHlsZSA9IG9wdGlvbnMubGluZUNvbG9yO1xuXG5cdFx0XHRmb3IgKHZhciBiID0gMDsgYiA8IGJpbmFyeS5sZW5ndGg7IGIrKykge1xuXHRcdFx0XHR2YXIgeCA9IGIgKiBvcHRpb25zLndpZHRoICsgZW5jb2RpbmcuYmFyY29kZVBhZGRpbmc7XG5cblx0XHRcdFx0aWYgKGJpbmFyeVtiXSA9PT0gXCIxXCIpIHtcblx0XHRcdFx0XHRjdHguZmlsbFJlY3QoeCwgeUZyb20sIG9wdGlvbnMud2lkdGgsIG9wdGlvbnMuaGVpZ2h0KTtcblx0XHRcdFx0fSBlbHNlIGlmIChiaW5hcnlbYl0pIHtcblx0XHRcdFx0XHRjdHguZmlsbFJlY3QoeCwgeUZyb20sIG9wdGlvbnMud2lkdGgsIG9wdGlvbnMuaGVpZ2h0ICogYmluYXJ5W2JdKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJkcmF3Q2FudmFzVGV4dFwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBkcmF3Q2FudmFzVGV4dChvcHRpb25zLCBlbmNvZGluZykge1xuXHRcdFx0Ly8gR2V0IHRoZSBjYW52YXMgY29udGV4dFxuXHRcdFx0dmFyIGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuXHRcdFx0dmFyIGZvbnQgPSBvcHRpb25zLmZvbnRPcHRpb25zICsgXCIgXCIgKyBvcHRpb25zLmZvbnRTaXplICsgXCJweCBcIiArIG9wdGlvbnMuZm9udDtcblxuXHRcdFx0Ly8gRHJhdyB0aGUgdGV4dCBpZiBkaXNwbGF5VmFsdWUgaXMgc2V0XG5cdFx0XHRpZiAob3B0aW9ucy5kaXNwbGF5VmFsdWUpIHtcblx0XHRcdFx0dmFyIHgsIHk7XG5cblx0XHRcdFx0aWYgKG9wdGlvbnMudGV4dFBvc2l0aW9uID09IFwidG9wXCIpIHtcblx0XHRcdFx0XHR5ID0gb3B0aW9ucy5tYXJnaW5Ub3AgKyBvcHRpb25zLmZvbnRTaXplIC0gb3B0aW9ucy50ZXh0TWFyZ2luO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHkgPSBvcHRpb25zLmhlaWdodCArIG9wdGlvbnMudGV4dE1hcmdpbiArIG9wdGlvbnMubWFyZ2luVG9wICsgb3B0aW9ucy5mb250U2l6ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGN0eC5mb250ID0gZm9udDtcblxuXHRcdFx0XHQvLyBEcmF3IHRoZSB0ZXh0IGluIHRoZSBjb3JyZWN0IFggZGVwZW5kaW5nIG9uIHRoZSB0ZXh0QWxpZ24gb3B0aW9uXG5cdFx0XHRcdGlmIChvcHRpb25zLnRleHRBbGlnbiA9PSBcImxlZnRcIiB8fCBlbmNvZGluZy5iYXJjb2RlUGFkZGluZyA+IDApIHtcblx0XHRcdFx0XHR4ID0gMDtcblx0XHRcdFx0XHRjdHgudGV4dEFsaWduID0gJ2xlZnQnO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG9wdGlvbnMudGV4dEFsaWduID09IFwicmlnaHRcIikge1xuXHRcdFx0XHRcdHggPSBlbmNvZGluZy53aWR0aCAtIDE7XG5cdFx0XHRcdFx0Y3R4LnRleHRBbGlnbiA9ICdyaWdodCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gSW4gYWxsIG90aGVyIGNhc2VzLCBjZW50ZXIgdGhlIHRleHRcblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHR4ID0gZW5jb2Rpbmcud2lkdGggLyAyO1xuXHRcdFx0XHRcdFx0Y3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRjdHguZmlsbFRleHQoZW5jb2RpbmcudGV4dCwgeCwgeSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcIm1vdmVDYW52YXNEcmF3aW5nXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIG1vdmVDYW52YXNEcmF3aW5nKGVuY29kaW5nKSB7XG5cdFx0XHR2YXIgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5cdFx0XHRjdHgudHJhbnNsYXRlKGVuY29kaW5nLndpZHRoLCAwKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwicmVzdG9yZUNhbnZhc1wiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZXN0b3JlQ2FudmFzKCkge1xuXHRcdFx0Ly8gR2V0IHRoZSBjYW52YXMgY29udGV4dFxuXHRcdFx0dmFyIGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuXHRcdFx0Y3R4LnJlc3RvcmUoKTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gQ2FudmFzUmVuZGVyZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENhbnZhc1JlbmRlcmVyOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jYW52YXMgPSByZXF1aXJlKCcuL2NhbnZhcy5qcycpO1xuXG52YXIgX2NhbnZhczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jYW52YXMpO1xuXG52YXIgX3N2ZyA9IHJlcXVpcmUoJy4vc3ZnLmpzJyk7XG5cbnZhciBfc3ZnMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2Zyk7XG5cbnZhciBfb2JqZWN0ID0gcmVxdWlyZSgnLi9vYmplY3QuanMnKTtcblxudmFyIF9vYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0geyBDYW52YXNSZW5kZXJlcjogX2NhbnZhczIuZGVmYXVsdCwgU1ZHUmVuZGVyZXI6IF9zdmcyLmRlZmF1bHQsIE9iamVjdFJlbmRlcmVyOiBfb2JqZWN0Mi5kZWZhdWx0IH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBPYmplY3RSZW5kZXJlciA9IGZ1bmN0aW9uICgpIHtcblx0ZnVuY3Rpb24gT2JqZWN0UmVuZGVyZXIob2JqZWN0LCBlbmNvZGluZ3MsIG9wdGlvbnMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgT2JqZWN0UmVuZGVyZXIpO1xuXG5cdFx0dGhpcy5vYmplY3QgPSBvYmplY3Q7XG5cdFx0dGhpcy5lbmNvZGluZ3MgPSBlbmNvZGluZ3M7XG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhPYmplY3RSZW5kZXJlciwgW3tcblx0XHRrZXk6IFwicmVuZGVyXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHRoaXMub2JqZWN0LmVuY29kaW5ncyA9IHRoaXMuZW5jb2RpbmdzO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBPYmplY3RSZW5kZXJlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gT2JqZWN0UmVuZGVyZXI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldFRvdGFsV2lkdGhPZkVuY29kaW5ncyA9IGV4cG9ydHMuY2FsY3VsYXRlRW5jb2RpbmdBdHRyaWJ1dGVzID0gZXhwb3J0cy5nZXRCYXJjb2RlUGFkZGluZyA9IGV4cG9ydHMuZ2V0RW5jb2RpbmdIZWlnaHQgPSBleHBvcnRzLmdldE1heGltdW1IZWlnaHRPZkVuY29kaW5ncyA9IHVuZGVmaW5lZDtcblxudmFyIF9tZXJnZSA9IHJlcXVpcmUoXCIuLi9oZWxwL21lcmdlLmpzXCIpO1xuXG52YXIgX21lcmdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21lcmdlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0RW5jb2RpbmdIZWlnaHQoZW5jb2RpbmcsIG9wdGlvbnMpIHtcblx0cmV0dXJuIG9wdGlvbnMuaGVpZ2h0ICsgKG9wdGlvbnMuZGlzcGxheVZhbHVlICYmIGVuY29kaW5nLnRleHQubGVuZ3RoID4gMCA/IG9wdGlvbnMuZm9udFNpemUgKyBvcHRpb25zLnRleHRNYXJnaW4gOiAwKSArIG9wdGlvbnMubWFyZ2luVG9wICsgb3B0aW9ucy5tYXJnaW5Cb3R0b207XG59XG5cbmZ1bmN0aW9uIGdldEJhcmNvZGVQYWRkaW5nKHRleHRXaWR0aCwgYmFyY29kZVdpZHRoLCBvcHRpb25zKSB7XG5cdGlmIChvcHRpb25zLmRpc3BsYXlWYWx1ZSAmJiBiYXJjb2RlV2lkdGggPCB0ZXh0V2lkdGgpIHtcblx0XHRpZiAob3B0aW9ucy50ZXh0QWxpZ24gPT0gXCJjZW50ZXJcIikge1xuXHRcdFx0cmV0dXJuIE1hdGguZmxvb3IoKHRleHRXaWR0aCAtIGJhcmNvZGVXaWR0aCkgLyAyKTtcblx0XHR9IGVsc2UgaWYgKG9wdGlvbnMudGV4dEFsaWduID09IFwibGVmdFwiKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9IGVsc2UgaWYgKG9wdGlvbnMudGV4dEFsaWduID09IFwicmlnaHRcIikge1xuXHRcdFx0cmV0dXJuIE1hdGguZmxvb3IodGV4dFdpZHRoIC0gYmFyY29kZVdpZHRoKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIDA7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUVuY29kaW5nQXR0cmlidXRlcyhlbmNvZGluZ3MsIGJhcmNvZGVPcHRpb25zLCBjb250ZXh0KSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZW5jb2RpbmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGVuY29kaW5nID0gZW5jb2RpbmdzW2ldO1xuXHRcdHZhciBvcHRpb25zID0gKDAsIF9tZXJnZTIuZGVmYXVsdCkoYmFyY29kZU9wdGlvbnMsIGVuY29kaW5nLm9wdGlvbnMpO1xuXG5cdFx0Ly8gQ2FsY3VsYXRlIHRoZSB3aWR0aCBvZiB0aGUgZW5jb2Rpbmdcblx0XHR2YXIgdGV4dFdpZHRoO1xuXHRcdGlmIChvcHRpb25zLmRpc3BsYXlWYWx1ZSkge1xuXHRcdFx0dGV4dFdpZHRoID0gbWVzc3VyZVRleHQoZW5jb2RpbmcudGV4dCwgb3B0aW9ucywgY29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRleHRXaWR0aCA9IDA7XG5cdFx0fVxuXG5cdFx0dmFyIGJhcmNvZGVXaWR0aCA9IGVuY29kaW5nLmRhdGEubGVuZ3RoICogb3B0aW9ucy53aWR0aDtcblx0XHRlbmNvZGluZy53aWR0aCA9IE1hdGguY2VpbChNYXRoLm1heCh0ZXh0V2lkdGgsIGJhcmNvZGVXaWR0aCkpO1xuXG5cdFx0ZW5jb2RpbmcuaGVpZ2h0ID0gZ2V0RW5jb2RpbmdIZWlnaHQoZW5jb2RpbmcsIG9wdGlvbnMpO1xuXG5cdFx0ZW5jb2RpbmcuYmFyY29kZVBhZGRpbmcgPSBnZXRCYXJjb2RlUGFkZGluZyh0ZXh0V2lkdGgsIGJhcmNvZGVXaWR0aCwgb3B0aW9ucyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0VG90YWxXaWR0aE9mRW5jb2RpbmdzKGVuY29kaW5ncykge1xuXHR2YXIgdG90YWxXaWR0aCA9IDA7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZW5jb2RpbmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dG90YWxXaWR0aCArPSBlbmNvZGluZ3NbaV0ud2lkdGg7XG5cdH1cblx0cmV0dXJuIHRvdGFsV2lkdGg7XG59XG5cbmZ1bmN0aW9uIGdldE1heGltdW1IZWlnaHRPZkVuY29kaW5ncyhlbmNvZGluZ3MpIHtcblx0dmFyIG1heEhlaWdodCA9IDA7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZW5jb2RpbmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKGVuY29kaW5nc1tpXS5oZWlnaHQgPiBtYXhIZWlnaHQpIHtcblx0XHRcdG1heEhlaWdodCA9IGVuY29kaW5nc1tpXS5oZWlnaHQ7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBtYXhIZWlnaHQ7XG59XG5cbmZ1bmN0aW9uIG1lc3N1cmVUZXh0KHN0cmluZywgb3B0aW9ucywgY29udGV4dCkge1xuXHR2YXIgY3R4O1xuXG5cdGlmIChjb250ZXh0KSB7XG5cdFx0Y3R4ID0gY29udGV4dDtcblx0fSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRjdHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLmdldENvbnRleHQoXCIyZFwiKTtcblx0fSBlbHNlIHtcblx0XHQvLyBJZiB0aGUgdGV4dCBjYW5ub3QgYmUgbWVzc3VyZWQgd2Ugd2lsbCByZXR1cm4gMC5cblx0XHQvLyBUaGlzIHdpbGwgbWFrZSBzb21lIGJhcmNvZGUgd2l0aCBiaWcgdGV4dCByZW5kZXIgaW5jb3JyZWN0bHlcblx0XHRyZXR1cm4gMDtcblx0fVxuXHRjdHguZm9udCA9IG9wdGlvbnMuZm9udE9wdGlvbnMgKyBcIiBcIiArIG9wdGlvbnMuZm9udFNpemUgKyBcInB4IFwiICsgb3B0aW9ucy5mb250O1xuXG5cdC8vIENhbGN1bGF0ZSB0aGUgd2lkdGggb2YgdGhlIGVuY29kaW5nXG5cdHZhciBtZWFzdXJlVGV4dFJlc3VsdCA9IGN0eC5tZWFzdXJlVGV4dChzdHJpbmcpO1xuXHRpZiAoIW1lYXN1cmVUZXh0UmVzdWx0KSB7XG5cdFx0Ly8gU29tZSBpbXBsZW1lbnRhdGlvbnMgZG9uJ3QgaW1wbGVtZW50IG1lYXN1cmVUZXh0IGFuZCByZXR1cm4gdW5kZWZpbmVkLlxuXHRcdC8vIElmIHRoZSB0ZXh0IGNhbm5vdCBiZSBtZWFzdXJlZCB3ZSB3aWxsIHJldHVybiAwLlxuXHRcdC8vIFRoaXMgd2lsbCBtYWtlIHNvbWUgYmFyY29kZSB3aXRoIGJpZyB0ZXh0IHJlbmRlciBpbmNvcnJlY3RseVxuXHRcdHJldHVybiAwO1xuXHR9XG5cdHZhciBzaXplID0gbWVhc3VyZVRleHRSZXN1bHQud2lkdGg7XG5cdHJldHVybiBzaXplO1xufVxuXG5leHBvcnRzLmdldE1heGltdW1IZWlnaHRPZkVuY29kaW5ncyA9IGdldE1heGltdW1IZWlnaHRPZkVuY29kaW5ncztcbmV4cG9ydHMuZ2V0RW5jb2RpbmdIZWlnaHQgPSBnZXRFbmNvZGluZ0hlaWdodDtcbmV4cG9ydHMuZ2V0QmFyY29kZVBhZGRpbmcgPSBnZXRCYXJjb2RlUGFkZGluZztcbmV4cG9ydHMuY2FsY3VsYXRlRW5jb2RpbmdBdHRyaWJ1dGVzID0gY2FsY3VsYXRlRW5jb2RpbmdBdHRyaWJ1dGVzO1xuZXhwb3J0cy5nZXRUb3RhbFdpZHRoT2ZFbmNvZGluZ3MgPSBnZXRUb3RhbFdpZHRoT2ZFbmNvZGluZ3M7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfbWVyZ2UgPSByZXF1aXJlKFwiLi4vaGVscC9tZXJnZS5qc1wiKTtcblxudmFyIF9tZXJnZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tZXJnZSk7XG5cbnZhciBfc2hhcmVkID0gcmVxdWlyZShcIi4vc2hhcmVkLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgc3ZnbnMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG5cbnZhciBTVkdSZW5kZXJlciA9IGZ1bmN0aW9uICgpIHtcblx0ZnVuY3Rpb24gU1ZHUmVuZGVyZXIoc3ZnLCBlbmNvZGluZ3MsIG9wdGlvbnMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgU1ZHUmVuZGVyZXIpO1xuXG5cdFx0dGhpcy5zdmcgPSBzdmc7XG5cdFx0dGhpcy5lbmNvZGluZ3MgPSBlbmNvZGluZ3M7XG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0XHR0aGlzLmRvY3VtZW50ID0gb3B0aW9ucy54bWxEb2N1bWVudCB8fCBkb2N1bWVudDtcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhTVkdSZW5kZXJlciwgW3tcblx0XHRrZXk6IFwicmVuZGVyXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHZhciBjdXJyZW50WCA9IHRoaXMub3B0aW9ucy5tYXJnaW5MZWZ0O1xuXG5cdFx0XHR0aGlzLnByZXBhcmVTVkcoKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5lbmNvZGluZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIGVuY29kaW5nID0gdGhpcy5lbmNvZGluZ3NbaV07XG5cdFx0XHRcdHZhciBlbmNvZGluZ09wdGlvbnMgPSAoMCwgX21lcmdlMi5kZWZhdWx0KSh0aGlzLm9wdGlvbnMsIGVuY29kaW5nLm9wdGlvbnMpO1xuXG5cdFx0XHRcdHZhciBncm91cCA9IHRoaXMuY3JlYXRlR3JvdXAoY3VycmVudFgsIGVuY29kaW5nT3B0aW9ucy5tYXJnaW5Ub3AsIHRoaXMuc3ZnKTtcblxuXHRcdFx0XHR0aGlzLnNldEdyb3VwT3B0aW9ucyhncm91cCwgZW5jb2RpbmdPcHRpb25zKTtcblxuXHRcdFx0XHR0aGlzLmRyYXdTdmdCYXJjb2RlKGdyb3VwLCBlbmNvZGluZ09wdGlvbnMsIGVuY29kaW5nKTtcblx0XHRcdFx0dGhpcy5kcmF3U1ZHVGV4dChncm91cCwgZW5jb2RpbmdPcHRpb25zLCBlbmNvZGluZyk7XG5cblx0XHRcdFx0Y3VycmVudFggKz0gZW5jb2Rpbmcud2lkdGg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcInByZXBhcmVTVkdcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gcHJlcGFyZVNWRygpIHtcblx0XHRcdC8vIENsZWFyIHRoZSBTVkdcblx0XHRcdHdoaWxlICh0aGlzLnN2Zy5maXJzdENoaWxkKSB7XG5cdFx0XHRcdHRoaXMuc3ZnLnJlbW92ZUNoaWxkKHRoaXMuc3ZnLmZpcnN0Q2hpbGQpO1xuXHRcdFx0fVxuXG5cdFx0XHQoMCwgX3NoYXJlZC5jYWxjdWxhdGVFbmNvZGluZ0F0dHJpYnV0ZXMpKHRoaXMuZW5jb2RpbmdzLCB0aGlzLm9wdGlvbnMpO1xuXHRcdFx0dmFyIHRvdGFsV2lkdGggPSAoMCwgX3NoYXJlZC5nZXRUb3RhbFdpZHRoT2ZFbmNvZGluZ3MpKHRoaXMuZW5jb2RpbmdzKTtcblx0XHRcdHZhciBtYXhIZWlnaHQgPSAoMCwgX3NoYXJlZC5nZXRNYXhpbXVtSGVpZ2h0T2ZFbmNvZGluZ3MpKHRoaXMuZW5jb2RpbmdzKTtcblxuXHRcdFx0dmFyIHdpZHRoID0gdG90YWxXaWR0aCArIHRoaXMub3B0aW9ucy5tYXJnaW5MZWZ0ICsgdGhpcy5vcHRpb25zLm1hcmdpblJpZ2h0O1xuXHRcdFx0dGhpcy5zZXRTdmdBdHRyaWJ1dGVzKHdpZHRoLCBtYXhIZWlnaHQpO1xuXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLmJhY2tncm91bmQpIHtcblx0XHRcdFx0dGhpcy5kcmF3UmVjdCgwLCAwLCB3aWR0aCwgbWF4SGVpZ2h0LCB0aGlzLnN2Zykuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJmaWxsOlwiICsgdGhpcy5vcHRpb25zLmJhY2tncm91bmQgKyBcIjtcIik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcImRyYXdTdmdCYXJjb2RlXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGRyYXdTdmdCYXJjb2RlKHBhcmVudCwgb3B0aW9ucywgZW5jb2RpbmcpIHtcblx0XHRcdHZhciBiaW5hcnkgPSBlbmNvZGluZy5kYXRhO1xuXG5cdFx0XHQvLyBDcmVhdGVzIHRoZSBiYXJjb2RlIG91dCBvZiB0aGUgZW5jb2RlZCBiaW5hcnlcblx0XHRcdHZhciB5RnJvbTtcblx0XHRcdGlmIChvcHRpb25zLnRleHRQb3NpdGlvbiA9PSBcInRvcFwiKSB7XG5cdFx0XHRcdHlGcm9tID0gb3B0aW9ucy5mb250U2l6ZSArIG9wdGlvbnMudGV4dE1hcmdpbjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHlGcm9tID0gMDtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGJhcldpZHRoID0gMDtcblx0XHRcdHZhciB4ID0gMDtcblx0XHRcdGZvciAodmFyIGIgPSAwOyBiIDwgYmluYXJ5Lmxlbmd0aDsgYisrKSB7XG5cdFx0XHRcdHggPSBiICogb3B0aW9ucy53aWR0aCArIGVuY29kaW5nLmJhcmNvZGVQYWRkaW5nO1xuXG5cdFx0XHRcdGlmIChiaW5hcnlbYl0gPT09IFwiMVwiKSB7XG5cdFx0XHRcdFx0YmFyV2lkdGgrKztcblx0XHRcdFx0fSBlbHNlIGlmIChiYXJXaWR0aCA+IDApIHtcblx0XHRcdFx0XHR0aGlzLmRyYXdSZWN0KHggLSBvcHRpb25zLndpZHRoICogYmFyV2lkdGgsIHlGcm9tLCBvcHRpb25zLndpZHRoICogYmFyV2lkdGgsIG9wdGlvbnMuaGVpZ2h0LCBwYXJlbnQpO1xuXHRcdFx0XHRcdGJhcldpZHRoID0gMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBMYXN0IGRyYXcgaXMgbmVlZGVkIHNpbmNlIHRoZSBiYXJjb2RlIGVuZHMgd2l0aCAxXG5cdFx0XHRpZiAoYmFyV2lkdGggPiAwKSB7XG5cdFx0XHRcdHRoaXMuZHJhd1JlY3QoeCAtIG9wdGlvbnMud2lkdGggKiAoYmFyV2lkdGggLSAxKSwgeUZyb20sIG9wdGlvbnMud2lkdGggKiBiYXJXaWR0aCwgb3B0aW9ucy5oZWlnaHQsIHBhcmVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcImRyYXdTVkdUZXh0XCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGRyYXdTVkdUZXh0KHBhcmVudCwgb3B0aW9ucywgZW5jb2RpbmcpIHtcblx0XHRcdHZhciB0ZXh0RWxlbSA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z25zLCAndGV4dCcpO1xuXG5cdFx0XHQvLyBEcmF3IHRoZSB0ZXh0IGlmIGRpc3BsYXlWYWx1ZSBpcyBzZXRcblx0XHRcdGlmIChvcHRpb25zLmRpc3BsYXlWYWx1ZSkge1xuXHRcdFx0XHR2YXIgeCwgeTtcblxuXHRcdFx0XHR0ZXh0RWxlbS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImZvbnQ6XCIgKyBvcHRpb25zLmZvbnRPcHRpb25zICsgXCIgXCIgKyBvcHRpb25zLmZvbnRTaXplICsgXCJweCBcIiArIG9wdGlvbnMuZm9udCk7XG5cblx0XHRcdFx0aWYgKG9wdGlvbnMudGV4dFBvc2l0aW9uID09IFwidG9wXCIpIHtcblx0XHRcdFx0XHR5ID0gb3B0aW9ucy5mb250U2l6ZSAtIG9wdGlvbnMudGV4dE1hcmdpbjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR5ID0gb3B0aW9ucy5oZWlnaHQgKyBvcHRpb25zLnRleHRNYXJnaW4gKyBvcHRpb25zLmZvbnRTaXplO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gRHJhdyB0aGUgdGV4dCBpbiB0aGUgY29ycmVjdCBYIGRlcGVuZGluZyBvbiB0aGUgdGV4dEFsaWduIG9wdGlvblxuXHRcdFx0XHRpZiAob3B0aW9ucy50ZXh0QWxpZ24gPT0gXCJsZWZ0XCIgfHwgZW5jb2RpbmcuYmFyY29kZVBhZGRpbmcgPiAwKSB7XG5cdFx0XHRcdFx0eCA9IDA7XG5cdFx0XHRcdFx0dGV4dEVsZW0uc2V0QXR0cmlidXRlKFwidGV4dC1hbmNob3JcIiwgXCJzdGFydFwiKTtcblx0XHRcdFx0fSBlbHNlIGlmIChvcHRpb25zLnRleHRBbGlnbiA9PSBcInJpZ2h0XCIpIHtcblx0XHRcdFx0XHR4ID0gZW5jb2Rpbmcud2lkdGggLSAxO1xuXHRcdFx0XHRcdHRleHRFbGVtLnNldEF0dHJpYnV0ZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEluIGFsbCBvdGhlciBjYXNlcywgY2VudGVyIHRoZSB0ZXh0XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0eCA9IGVuY29kaW5nLndpZHRoIC8gMjtcblx0XHRcdFx0XHRcdHRleHRFbGVtLnNldEF0dHJpYnV0ZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR0ZXh0RWxlbS5zZXRBdHRyaWJ1dGUoXCJ4XCIsIHgpO1xuXHRcdFx0XHR0ZXh0RWxlbS5zZXRBdHRyaWJ1dGUoXCJ5XCIsIHkpO1xuXG5cdFx0XHRcdHRleHRFbGVtLmFwcGVuZENoaWxkKHRoaXMuZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZW5jb2RpbmcudGV4dCkpO1xuXG5cdFx0XHRcdHBhcmVudC5hcHBlbmRDaGlsZCh0ZXh0RWxlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcInNldFN2Z0F0dHJpYnV0ZXNcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gc2V0U3ZnQXR0cmlidXRlcyh3aWR0aCwgaGVpZ2h0KSB7XG5cdFx0XHR2YXIgc3ZnID0gdGhpcy5zdmc7XG5cdFx0XHRzdmcuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgd2lkdGggKyBcInB4XCIpO1xuXHRcdFx0c3ZnLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBoZWlnaHQgKyBcInB4XCIpO1xuXHRcdFx0c3ZnLnNldEF0dHJpYnV0ZShcInhcIiwgXCIwcHhcIik7XG5cdFx0XHRzdmcuc2V0QXR0cmlidXRlKFwieVwiLCBcIjBweFwiKTtcblx0XHRcdHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIFwiICsgd2lkdGggKyBcIiBcIiArIGhlaWdodCk7XG5cblx0XHRcdHN2Zy5zZXRBdHRyaWJ1dGUoXCJ4bWxuc1wiLCBzdmducyk7XG5cdFx0XHRzdmcuc2V0QXR0cmlidXRlKFwidmVyc2lvblwiLCBcIjEuMVwiKTtcblxuXHRcdFx0c3ZnLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKVwiKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwiY3JlYXRlR3JvdXBcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gY3JlYXRlR3JvdXAoeCwgeSwgcGFyZW50KSB7XG5cdFx0XHR2YXIgZ3JvdXAgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmducywgJ2cnKTtcblx0XHRcdGdyb3VwLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHggKyBcIiwgXCIgKyB5ICsgXCIpXCIpO1xuXG5cdFx0XHRwYXJlbnQuYXBwZW5kQ2hpbGQoZ3JvdXApO1xuXG5cdFx0XHRyZXR1cm4gZ3JvdXA7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcInNldEdyb3VwT3B0aW9uc1wiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBzZXRHcm91cE9wdGlvbnMoZ3JvdXAsIG9wdGlvbnMpIHtcblx0XHRcdGdyb3VwLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZmlsbDpcIiArIG9wdGlvbnMubGluZUNvbG9yICsgXCI7XCIpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJkcmF3UmVjdFwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBkcmF3UmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBwYXJlbnQpIHtcblx0XHRcdHZhciByZWN0ID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnbnMsICdyZWN0Jyk7XG5cblx0XHRcdHJlY3Quc2V0QXR0cmlidXRlKFwieFwiLCB4KTtcblx0XHRcdHJlY3Quc2V0QXR0cmlidXRlKFwieVwiLCB5KTtcblx0XHRcdHJlY3Quc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgd2lkdGgpO1xuXHRcdFx0cmVjdC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgaGVpZ2h0KTtcblxuXHRcdFx0cGFyZW50LmFwcGVuZENoaWxkKHJlY3QpO1xuXG5cdFx0XHRyZXR1cm4gcmVjdDtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gU1ZHUmVuZGVyZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFNWR1JlbmRlcmVyOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbnZhciBnZXRSYW5kb21WYWx1ZXM7XG52YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi4gQWxzbyxcbiAgICAvLyBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gKG1zQ3J5cHRvKSBvbiBJRTExLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykgfHwgdHlwZW9mIG1zQ3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbnZhciBieXRlVG9IZXggPSBbXTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFycikge1xuICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgdmFyIHV1aWQgPSAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBDb250ZW50IGZyb20gXCIuL2NvbXBvbmVudHMvQ29udGVudC9Db250ZW50XCI7XG5pbXBvcnQgeyBhcHBseUluaXRpYWxTdGF0ZSB9IGZyb20gXCIuL3BhZ2UtbG9naWMvdWkvdWktaW5pdGlhbC1zdGF0ZVwiO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKENvbnRlbnQoKSk7XG5cbmFwcGx5SW5pdGlhbFN0YXRlKCk7XG5cbi8vIGRlYnVnZ2luZ1xuY29uc3QgZGVidWdnaW5nID0gdHJ1ZTtcbmlmIChkZWJ1Z2dpbmcpIHtcbiAgLy9cbn1cbiJdLCJuYW1lcyI6WyJEaXYiLCJJbWciLCJjb3B5QmFyY29kZSIsImhhbmRsZUNsaWNrIiwiQmFyY29kZSIsInBhcmVudEVsZW1lbnQiLCJpbm5lclRleHQiLCJjbGFzc05hbWUiLCJvbmNsaWNrIiwiaWQiLCJkZWJvdW5jZSIsInNldElucHV0VmFsdWUiLCJMYWJlbCIsIklucHV0IiwiU2VsZWN0IiwiT3B0aW9uIiwidjQiLCJ1dWlkdjQiLCJnZW5lcmF0ZUJhcmNvZGUiLCJnZXRCYXJjb2RlUHJpbWFyeUNvbG9ySW5wdXQiLCJnZXRCYXJjb2RlUHJpbWFyeUNvbG9yUHJlc2V0IiwiZ2V0QmFyY29kZVNlY29uZGFyeUNvbG9ySW5wdXQiLCJnZXRCYXJjb2RlU2Vjb25kYXJ5Q29sb3JQcmVzZXQiLCJiYXJjb2RlQ29uZmlnIiwiaGFuZGxlUHJpbWFyeUNvbG9ySW5wdXQiLCJwcmVzZXQiLCJzZWxlY3RlZCIsImhhbmRsZVNlY29uZGFyeUNvbG9ySW5wdXQiLCJoYW5kbGVQcmltYXJ5Q29sb3JQcmVzZXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTZWNvbmRhcnlDb2xvclByZXNldCIsImJhcmNvZGVQcmltYXJ5Q29sb3JJbnB1dElkIiwiYmFyY29kZVNlY29uZGFyeUNvbG9ySW5wdXRJZCIsInByZXNldE9wdGlvbnMiLCJuYW1lIiwiQmFyY29kZVByaW1hcnlDb2xvcklucHV0IiwiZm9yIiwidHlwZSIsInByaW1hcnlDb2xvciIsInN0YXJ0aW5nIiwib25pbnB1dCIsIm1hcCIsIm8iLCJ1bmRlZmluZWQiLCJCYXJjb2RlU2Vjb25kYXJ5Q29sb3JJbnB1dCIsInNlY29uZGFyeUNvbG9yIiwiaGFuZGxlSW5wdXQiLCJpc0NoZWNrZWQiLCJjaGVja2VkIiwiY29uc29sZSIsImxvZyIsImNvcHlNZXNzYWdlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiY2xpY2tUb0NvcHlJZCIsIkJhcmNvZGVFbmFibGVDbGlja1RvQ29weSIsImJhcmNvZGVGb250RGlzcGxheUlucHV0SWQiLCJCYXJjb2RlRm9udERpc3BsYXlJbnB1dCIsImlubmVySFRNTCIsImZvbnREaXNwbGF5IiwiYmFyY29kZUZvbnRTaXplSW5wdXRJZCIsIkJhcmNvZGVGb250U2l6ZUlucHV0IiwibWluIiwiZm9udFNpemUiLCJtYXgiLCJzdGVwIiwiRm9ybSIsIkJhcmNvZGVUZXh0SW5wdXQiLCJCYXJjb2RlV2lkdGhJbnB1dCIsIkJhcmNvZGVIZWlnaHRJbnB1dCIsIkJhcmNvZGVGb3JtIiwiR2VuZXJhdGVCdXR0b24iLCJCYXJjb2RlR2VuZXJhdG9yIiwiU3BhbiIsImJhcmNvZGVIZWlnaHRJbnB1dElkIiwiYmFyY29kZUhlaWdodERpc3BsYXlJZCIsImhlaWdodCIsImhhbmRsZUNoYW5nZSIsImJhcmNvZGVUZXh0SW5wdXRJZCIsInRleHRJbnB1dCIsImJhcmNvZGVXaWR0aElucHV0SWQiLCJvcHRpb25zIiwiZ2V0SW5wdXRWYWx1ZSIsIkJ1dHRvbiIsImdldEJhcmNvZGVUZXh0SW5wdXQiLCJ3aWR0aCIsIm1hcmdpbiIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsIkpzQmFyY29kZSIsInVwZGF0ZUNvcHlNZXNzYWdlIiwiY29udGVudCIsImdldEJhcmNvZGVXaWR0aElucHV0IiwiZ2V0QmFyY29kZUhlaWdodElucHV0IiwiZ2V0QmFyY29kZUZvbnRTaXplSW5wdXQiLCJkaXNwbGF5VmFsdWUiLCJnZXRCYXJjb2RlRm9udERpc3BsYXlJbnB1dCIsImxpbmVDb2xvciIsImJhY2tncm91bmQiLCJtYXJnaW5Cb3R0b20iLCJzcmMiLCJiYXJjb2RlIiwiZGF0YSIsImZldGNoIiwiYmxvYiIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlIiwiQ2xpcGJvYXJkSXRlbSIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29weUJhcmNvZGVNZXNzYWdlIiwibWVzc2FnZSIsInNldFRpbWVvdXQiLCJFbGVtZW50IiwiSGVhZGVyIiwiRHluYW1pY0Zvb3RlciIsIk1haW5TZWN0aW9uIiwiQ29udGVudCIsIkEiLCJJY29uIiwiZ2l0aHViSW5mbyIsImR5bmFtaWNZZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiQ29weXJpZ2h0Q29udGFpbmVyIiwiaHJlZiIsInJlcG9OYW1lIiwiRm9vdGVyIiwiQXR0cmlidXRpb25zQ29udGFpbmVyIiwiVE9QQ29udGFpbmVyIiwiRXhwYW5kYWJsZVBhbmVsIiwiTm9uRXhwYW5kYWJsZVBhbmVsIiwiSWNvbnNFeHBsYW5hdGlvbiIsImNvbnRhaW5lciIsInRpdGxlIiwiY2hpbGRyZW4iLCJvdXRlckhUTUwiLCJwYXJlbnRDb250YWluZXIiLCJoMSIsIm90aGVyQ2xhc3NlcyIsImhlYWRlciIsImdlbmVyYXRlVGVzdENvbnRlbnRBcnIiLCJNYWluIiwibWFpbiIsIkV4cGFuZGFibGVQYW5lbFRpdGxlIiwiRXhwYW5kYWJsZVBhbmVsQ29udGVudCIsInByb3BzIiwiY29tcG9uZW50SWQiLCJwYW5lbCIsInRvZ2dsZUV4cGFuc2lvbiIsImV4cGFuc2lvbkNvbnRlbnQiLCJ0b2dnbGVFeHBhbnNpb25CdXR0b24iLCJ0b2dnbGUiLCJpY29uQ2xhc3MiLCJpY29uIiwiZ2V0QWxsQ2Fyb3VzZWxTbGlkZXMiLCJjaGlsZE5vZGVzIiwiZ2V0QWxsQ2Fyb3VzZWxTbGlkZUlkcyIsImVsZW0iLCJnZXRBbGxDYXJvdXNlbE5hdkJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2V0Q3VycmVudFNsaWRlSW5kZXgiLCJhbGxTbGlkZUlkcyIsImN1cnJlbnRTbGlkZUlkIiwiY3VycmVudFNsaWRlSW5kZXgiLCJpbmRleE9mIiwiZ2V0UHJldmlvdXNTbGlkZUluZGV4IiwicHJldmlvdXNTbGlkZUluZGV4IiwiY29ycmVjdGVkSW5kZXgiLCJsZW5ndGgiLCJnZXROZXh0U2xpZGVJbmRleCIsIm5leHRTbGlkZUluZGV4IiwiZ290b1NwZWNpZmljU2xpZGUiLCJhbGxOYXZCdXR0b25zIiwic2VsZWN0ZWROYXZCdXR0b24iLCJzZWxlY3RlZFNsaWRlIiwiYWxsU2xpZGVzIiwiZm9yRWFjaCIsInNsaWRlIiwiY2xpY2tDYXJvdXNlbE5hdiIsImNsaWNrQ2Fyb3VzZWxSaWdodCIsInJlcGxhY2UiLCJjbGlja0Nhcm91c2VsTGVmdCIsImNsaWNrQ2Fyb3VzZWxQbGF5IiwiaGFuZGxlQXV0b0FkdmFuY2UiLCJwbGF5QnV0dG9uIiwicGF1c2VCdXR0b24iLCJjbGlja0Nhcm91c2VsUGF1c2UiLCJpbnRlcnZhbCIsIm1vZGUiLCJwbGF5aW5nIiwid2luZG93Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwidHlwZVN0ciIsInByb3BzT2JqIiwiY2hpbGRBcnIiLCJhcmd1bWVudHMiLCJzZXRBdHRyaWJ1dGVQcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInByb3BlcnR5IiwicHVzaCIsIk9iamVjdCIsImFzc2lnbiIsImNyZWF0ZUVsZW1lbnQiLCJBcnJheSIsImlzQXJyYXkiLCJjaGlsZCIsImFwcGVuZENoaWxkIiwic2V0QXR0cmlidXRlIiwiQXJ0aWNsZSIsIkIiLCJCb2R5IiwiQnIiLCJEYXRhbGlzdCIsIkZpZWxkc2V0IiwiSDEiLCJIMiIsIkgzIiwiSHIiLCJJIiwiTGVnZW5kIiwiTGkiLCJPbCIsIlAiLCJTdHJvbmciLCJUZXh0YXJlYSIsIlVsIiwiYXBwbHlXaW5kb3dMaXN0ZW5lcnMiLCJhcHBseUluaXRpYWxTdGF0ZSIsInVwZGF0ZUJhcmNvZGVXaWR0aERpc3BsYXkiLCJicmVha1BvaW50cyIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJvbnJlc2l6ZSIsIm9ubG9hZCIsInRydW5jYXRlQW5kQWRkRWxsaXBzZSIsInN0cmluZyIsIm51bUNoYXJzVG9LZWVwIiwic2xpY2UiLCJ0cmltRW5kIiwiZm4iLCJ0aW1lb3V0IiwiY29udGV4dCIsImFyZ3MiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFwcGx5IiwiY2FwaXRhbGl6ZSIsInRvVXBwZXJDYXNlIiwidG9Mb3dlckNhc2UiLCJudW1DaGlsZHJlbiIsImZpbGwiLCJnZXRSYW5kb21JbnQiLCJNYXRoIiwiY2VpbCIsImZsb29yIiwicmFuZG9tIiwiaW5wdXRFbGVtZW50IiwiYm9keSIsImRlYnVnZ2luZyJdLCJzb3VyY2VSb290IjoiIn0=