/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  }, [(0,_CopyrightContainer__WEBPACK_IMPORTED_MODULE_1__["default"])(), (0,_TOPLinkContainer__WEBPACK_IMPORTED_MODULE_3__["default"])(), (0,_SiteAttributions_AttributionsContainer__WEBPACK_IMPORTED_MODULE_2__["default"])()]);
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
    innerText: "This is the header"
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
/* harmony import */ var _custom_components_CustomIconsDisplay_CustomIconsDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_custom-components/CustomIconsDisplay/CustomIconsDisplay */ "./src/components/_custom-components/CustomIconsDisplay/CustomIconsDisplay.js");
/* harmony import */ var _custom_components_ImageCarousel_ImageCarousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_custom-components/ImageCarousel/ImageCarousel */ "./src/components/_custom-components/ImageCarousel/ImageCarousel.js");
/* harmony import */ var _custom_components_ValidatedForm_ValidatedForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_custom-components/ValidatedForm/ValidatedForm */ "./src/components/_custom-components/ValidatedForm/ValidatedForm.js");
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
// COMPONENT IMPORTS






// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const MainSection = () => {
  const otherClasses = "";
  const main = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_4__.Main)({
    id: "main-section",
    className: "" + " " + otherClasses
  },
  // add child elements to the array below
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_4__.Div)({
    className: "icons-row"
  }, [(0,_custom_components_CustomIconsDisplay_CustomIconsDisplay__WEBPACK_IMPORTED_MODULE_1__["default"])()]), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_4__.Div)({
    className: "carousel-row"
  }, [(0,_custom_components_ImageCarousel_ImageCarousel__WEBPACK_IMPORTED_MODULE_2__["default"])()]), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_4__.Div)({
    className: "form-row"
  }, [(0,_custom_components_ValidatedForm_ValidatedForm__WEBPACK_IMPORTED_MODULE_3__["default"])()])]);
  return main;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainSection);

/***/ }),

/***/ "./src/components/_custom-components/CustomIconsDisplay/CustomIconsDisplay.js":
/*!************************************************************************************!*\
  !*** ./src/components/_custom-components/CustomIconsDisplay/CustomIconsDisplay.js ***!
  \************************************************************************************/
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
// function someMethod() {
//   //
// }

const CustomIconsDisplay = () => {
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    innerText: ``,
    className: `custom-icons-display`
  },
  // add child elements to the array below
  [(0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-hamburger-menu"), (0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-pause"), (0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-pencil"), (0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-plus-sign"), (0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-plus-sign rotate-45"), (0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-trash"), (0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-triangle"), (0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-triangle rotate-180"), (0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-triangle-short rotate-90"), (0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-triangle-short"), (0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-up-arrow"), (0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-up-arrow rotate-180"), (0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-up-arrow-short"), (0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-up-arrow-short rotate-270"), (0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-up-down"), (0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-up-down rotate-90")]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomIconsDisplay);

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

/***/ "./src/components/_custom-components/ImageCarousel/CarouselNav.js":
/*!************************************************************************!*\
  !*** ./src/components/_custom-components/ImageCarousel/CarouselNav.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _CarouselNavIndicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarouselNavIndicator */ "./src/components/_custom-components/ImageCarousel/CarouselNavIndicator.js");
/* harmony import */ var _CarouselPlayPauseContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CarouselPlayPauseContainer */ "./src/components/_custom-components/ImageCarousel/CarouselPlayPauseContainer.js");




// LOGIC IMPORTS

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const CarouselNav = imageData => {
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    id: ``,
    className: `carousel-nav pt-1`
  },
  // children
  [(0,_CarouselPlayPauseContainer__WEBPACK_IMPORTED_MODULE_2__["default"])(),
  // Nav indicators
  ...imageData.map((obj, index) => (0,_CarouselNavIndicator__WEBPACK_IMPORTED_MODULE_1__["default"])({
    imageId: obj.uuid,
    startsActive: obj.isActive ? true : false
  }))]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselNav);

/***/ }),

/***/ "./src/components/_custom-components/ImageCarousel/CarouselNavIndicator.js":
/*!*********************************************************************************!*\
  !*** ./src/components/_custom-components/ImageCarousel/CarouselNavIndicator.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _ui_carousel_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/carousel-ui */ "./src/components/_custom-components/ImageCarousel/ui/carousel-ui.js");
// COMPONENT IMPORTS


// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const CarouselNavIndicator = props => {
  const {
    imageId,
    startsActive
  } = props;
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Button)({
    id: `carousel-nav-${imageId}`,
    className: `carousel-indicator display-i-b bg-gray-light-6 ${startsActive ? "active" : ""}`,
    onclick: function () {
      (0,_ui_carousel_ui__WEBPACK_IMPORTED_MODULE_1__.clickCarouselNav)(imageId);
    }
  },
  // add child elements to the array below
  []);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselNavIndicator);

/***/ }),

/***/ "./src/components/_custom-components/ImageCarousel/CarouselPlayPauseContainer.js":
/*!***************************************************************************************!*\
  !*** ./src/components/_custom-components/ImageCarousel/CarouselPlayPauseContainer.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _playAndPauseButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playAndPauseButtons */ "./src/components/_custom-components/ImageCarousel/playAndPauseButtons.js");
// COMPONENT IMPORTS


// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const CarouselPlayPauseContainer = () => {
  //

  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "carousel-play-pause-container"
  },
  // childern
  [_playAndPauseButtons__WEBPACK_IMPORTED_MODULE_1__.PauseButton, _playAndPauseButtons__WEBPACK_IMPORTED_MODULE_1__.PlayButton]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselPlayPauseContainer);

/***/ }),

/***/ "./src/components/_custom-components/ImageCarousel/CarouselSlide.js":
/*!**************************************************************************!*\
  !*** ./src/components/_custom-components/ImageCarousel/CarouselSlide.js ***!
  \**************************************************************************/
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

const CarouselSlide = (imageSource, id, startsActive) => {
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    id: `carousel-slide-` + id,
    className: `carousel-slide ${startsActive ? "active" : ""}`
  },
  // children
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Img)({
    src: imageSource,
    className: "carousel-image"
  })]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselSlide);

/***/ }),

/***/ "./src/components/_custom-components/ImageCarousel/CarouselTrack.js":
/*!**************************************************************************!*\
  !*** ./src/components/_custom-components/ImageCarousel/CarouselTrack.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _CarouselSlide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarouselSlide */ "./src/components/_custom-components/ImageCarousel/CarouselSlide.js");
// COMPONENT IMPORTS



// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const CarouselTrack = imageData => {
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Ul)({
    id: ``,
    className: `carousel-track`
  },
  // children
  [...imageData.map((obj, index) => (0,_CarouselSlide__WEBPACK_IMPORTED_MODULE_1__["default"])(obj.src, obj.uuid, obj.isActive ? true : false))]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselTrack);

/***/ }),

/***/ "./src/components/_custom-components/ImageCarousel/CarouselTrackContainer.js":
/*!***********************************************************************************!*\
  !*** ./src/components/_custom-components/ImageCarousel/CarouselTrackContainer.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _CarouselTrack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarouselTrack */ "./src/components/_custom-components/ImageCarousel/CarouselTrack.js");
// COMPONENT IMPORTS



// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const CarouselTrackContainer = imageData => {
  const container = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    id: ``,
    className: `carousel-track-container`
  },
  // children
  [(0,_CarouselTrack__WEBPACK_IMPORTED_MODULE_1__["default"])(imageData)]);
  return container;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselTrackContainer);

/***/ }),

/***/ "./src/components/_custom-components/ImageCarousel/ImageCarousel.js":
/*!**************************************************************************!*\
  !*** ./src/components/_custom-components/ImageCarousel/ImageCarousel.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _LeftButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeftButton */ "./src/components/_custom-components/ImageCarousel/LeftButton.js");
/* harmony import */ var _RightButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RightButton */ "./src/components/_custom-components/ImageCarousel/RightButton.js");
/* harmony import */ var _CarouselTrackContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CarouselTrackContainer */ "./src/components/_custom-components/ImageCarousel/CarouselTrackContainer.js");
/* harmony import */ var _CarouselNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CarouselNav */ "./src/components/_custom-components/ImageCarousel/CarouselNav.js");
/* harmony import */ var _data_imageLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/imageLoader */ "./src/components/_custom-components/ImageCarousel/data/imageLoader.js");
// COMPONENT IMPORTS








// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const ImageCarousel = () => {
  const carousel = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    id: ``,
    className: `carousel pt-1 pb-1`
  },
  // children
  [(0,_LeftButton__WEBPACK_IMPORTED_MODULE_1__["default"])(), (0,_CarouselTrackContainer__WEBPACK_IMPORTED_MODULE_3__["default"])(_data_imageLoader__WEBPACK_IMPORTED_MODULE_5__.imageData), (0,_RightButton__WEBPACK_IMPORTED_MODULE_2__["default"])(), (0,_CarouselNav__WEBPACK_IMPORTED_MODULE_4__["default"])(_data_imageLoader__WEBPACK_IMPORTED_MODULE_5__.imageData)]);
  return carousel;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageCarousel);

/***/ }),

/***/ "./src/components/_custom-components/ImageCarousel/LeftButton.js":
/*!***********************************************************************!*\
  !*** ./src/components/_custom-components/ImageCarousel/LeftButton.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icon */ "./src/components/_custom-components/Icon.js");
/* harmony import */ var _ui_carousel_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/carousel-ui */ "./src/components/_custom-components/ImageCarousel/ui/carousel-ui.js");
// COMPONENT IMPORTS



// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const LeftCarouselButton = sharedClasses => {
  const button = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Button)({
    id: ``,
    className: `carousel-button left ` + sharedClasses,
    onclick() {
      (0,_ui_carousel_ui__WEBPACK_IMPORTED_MODULE_2__.clickCarouselLeft)();
    }
  },
  // children
  [(0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-up-arrow-short rotate-270 ")]);
  return button;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeftCarouselButton);

/***/ }),

/***/ "./src/components/_custom-components/ImageCarousel/RightButton.js":
/*!************************************************************************!*\
  !*** ./src/components/_custom-components/ImageCarousel/RightButton.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icon */ "./src/components/_custom-components/Icon.js");
/* harmony import */ var _ui_carousel_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/carousel-ui */ "./src/components/_custom-components/ImageCarousel/ui/carousel-ui.js");



// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const RightCarouselButton = sharedClasses => {
  const button = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Button)({
    id: ``,
    className: `carousel-button right ` + sharedClasses,
    onclick() {
      (0,_ui_carousel_ui__WEBPACK_IMPORTED_MODULE_2__.clickCarouselRight)();
    }
  },
  // children
  [(0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-up-arrow-short rotate-90")]);
  return button;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RightCarouselButton);

/***/ }),

/***/ "./src/components/_custom-components/ImageCarousel/data/imageLoader.js":
/*!*****************************************************************************!*\
  !*** ./src/components/_custom-components/ImageCarousel/data/imageLoader.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   imageData: () => (/* binding */ imageData)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils */ "./src/utils.js");



// Image source info
function getPicsumId(min, max, exclusions) {
  let randInt = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(min, max);
  while (true) {
    if (exclusions.includes(randInt)) {
      randInt = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(min, max);
    } else {
      return randInt;
    }
  }
}
function getRandomImageSrc(width, height) {
  return `https://picsum.photos/id/${getPicsumId(1, 100, [97])}/${width}/${height}`;
}
const numImages = 7;
const imageWidth = 500;
const imageHeight = 300;

// add isActive: true to the slide you want to start as active
const imageSources = [{
  src: getRandomImageSrc(imageWidth, imageHeight),
  isActive: true
}, ...Array(numImages).fill(null).map(e => {
  return {
    src: getRandomImageSrc(imageWidth, imageHeight)
  };
})];
const imageData = imageSources.map(obj => ({
  ...obj,
  uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])()
}));

/***/ }),

/***/ "./src/components/_custom-components/ImageCarousel/playAndPauseButtons.js":
/*!********************************************************************************!*\
  !*** ./src/components/_custom-components/ImageCarousel/playAndPauseButtons.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PauseButton: () => (/* binding */ PauseButton),
/* harmony export */   PlayButton: () => (/* binding */ PlayButton)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icon */ "./src/components/_custom-components/Icon.js");
/* harmony import */ var _ui_carousel_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/carousel-ui */ "./src/components/_custom-components/ImageCarousel/ui/carousel-ui.js");



const PlayButton = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Button)({
  className: "play-button visible",
  onclick() {
    (0,_ui_carousel_ui__WEBPACK_IMPORTED_MODULE_2__.clickCarouselPlay)();
  }
}, [(0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-triangle rotate-90 font-sm text-gray-dark-4")]);
const PauseButton = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Button)({
  className: "pause-button",
  onclick() {
    (0,_ui_carousel_ui__WEBPACK_IMPORTED_MODULE_2__.clickCarouselPause)();
  }
}, [(0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-pause font-sm text-gray-dark-4")]);

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

/***/ "./src/components/_custom-components/ValidatedForm/CountryInput/CountryInput.js":
/*!**************************************************************************************!*\
  !*** ./src/components/_custom-components/ValidatedForm/CountryInput/CountryInput.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   countryInputId: () => (/* binding */ countryInputId),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _countriesList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countriesList */ "./src/components/_custom-components/ValidatedForm/CountryInput/countriesList.js");
/* harmony import */ var _country_input_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country-input-validation */ "./src/components/_custom-components/ValidatedForm/CountryInput/country-input-validation.js");
// COMPONENT IMPORTS





// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }
const componentUuid = (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])();
const countryInputId = `email-input-${componentUuid}`;
const CountryInput = () => {
  const otherClasses = "";
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "form-control" + " " + otherClasses
  },
  // add child elements to the array below
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Label)({
    for: `${countryInputId}`,
    innerHTML: `What country are you from? ${(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Span)({
      className: "required-marker",
      innerText: "*"
    }).outerHTML}`
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Select)({
    className: "country-input",
    required: true,
    oninput() {
      (0,_country_input_validation__WEBPACK_IMPORTED_MODULE_2__.handleCountryInput)();
    }
  }, [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Option)(), ..._countriesList__WEBPACK_IMPORTED_MODULE_1__.countries.map(country => (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Option)({
    innerText: country
  }))]), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "error"
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Datalist)({
    id: "countries"
  }, [..._countriesList__WEBPACK_IMPORTED_MODULE_1__.countries.map(country => (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Option)({
    innerText: country
  }))])]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountryInput);

/***/ }),

/***/ "./src/components/_custom-components/ValidatedForm/CountryInput/countriesList.js":
/*!***************************************************************************************!*\
  !*** ./src/components/_custom-components/ValidatedForm/CountryInput/countriesList.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   countries: () => (/* binding */ countries)
/* harmony export */ });
const countries = ["Afghanistan", "Albanien", "Algeriet", "Angola", "Antigua och Barbuda", "Argentina", "Australien", "Azerbajdzjan", "Österrike", "Östtimor", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belgien", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnien och Hercegovina", "Botswana", "Brasilien", "Brunei Darussalam", "Bulgarien", "Burkina Faso", "Burundi", "Centralafrikanska Republiken", "Chile", "Colombia", "Costa Rica", "Cypern", "Danmark", "Demokratiska Republiken Kongo", "Dominikanska Republiken", "Ecuador", "Egypten", "El Salvador", "Elfenbenskusten", "Estland", "Etiopien", "Färöarna", "Förenade Arabemiraten", "Filippinerna", "Finland", "Frankrike", "Gabon", "Georgien", "Ghana", "Gibraltar", "Grönland", "Grekland", "Grenada", "Guatemala", "Honduras", "Hong Kong", "Indien", "Indonesien", "Irak", "Iran", "Irland", "Island", "Israel", "Italien", "Jamaica", "Japan", "Jemen", "Jersey", "Jordanien", "Kambodja", "Kanada", "Kazakstan", "Kenya", "Kina", "Kiribati", "Kroatien", "Kuba", "Kuwait", "Laos", "Lettland", "Libanon", "Libyen", "Litauen", "Luxemburg", "Madagaskar", "Makedonien", "Malawi", "Malaysia", "Maldiverna", "Mali", "Malta", "Marocko", "Mauritius", "Mexiko", "Mocambique", "Monaco", "Mongoliet", "Myanmar", "Namibia", "Nederländerna", "Nederländska Antillerna", "Nepal", "Nicaragua", "Niger", "Nigeria", "Norge", "Nya Zeeland", "Oman", "Pakistan", "Panama", "Paraguay", "Peru", "Polen", "Portugal", "Puerto Rico", "Qatar", "Rumänien", "Rwanda", "Ryssland", "Saint Lucia", "Saint Vincent och Grenadinerna", "Samoa", "San Marino", "Sao Tome och Principe", "Saudiarabien", "Schweiz", "Senegal", "Serbien och Montenegro", "Seychellerna", "Sierra Leone", "Singapore", "Slovakien", "Slovenien", "Somalia", "Spanien", "Sri Lanka", "Sudan", "Surinam", "Sverige", "Swaziland", "Sydafrika", "Sydkorea", "Syrien", "Taiwan", "Tanzania", "Thailand", "Tjeckien", "Trinidad och Tobago", "Tunisien", "Turkiet", "Tyskland", "Uganda", "Ukraina", "Ungern", "Uruguay", "USA", "Uzbekistan", "Venezuela", "Vietnam", "Vitryssland", "Zambia", "Zimbabwe"];

/***/ }),

/***/ "./src/components/_custom-components/ValidatedForm/CountryInput/country-input-validation.js":
/*!**************************************************************************************************!*\
  !*** ./src/components/_custom-components/ValidatedForm/CountryInput/country-input-validation.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   countryIsValid: () => (/* binding */ countryIsValid),
/* harmony export */   getCountryInput: () => (/* binding */ getCountryInput),
/* harmony export */   getCountryInputError: () => (/* binding */ getCountryInputError),
/* harmony export */   handleCountryInput: () => (/* binding */ handleCountryInput),
/* harmony export */   showCountryError: () => (/* binding */ showCountryError)
/* harmony export */ });
/* harmony import */ var _form_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form-validation */ "./src/components/_custom-components/ValidatedForm/form-validation.js");

function getCountryInput() {
  return document.querySelector(".assignment .country-input");
}
function getCountryInputError() {
  return document.querySelector(".assignment .country-input + .error");
}
function countryIsValid() {
  return getCountryInput().validity.valid;
}
function handleCountryInput() {
  const country = getCountryInput();
  const error = getCountryInputError();
  if (country.validity.valid) {
    (0,_form_validation__WEBPACK_IMPORTED_MODULE_0__.clearError)(error);
  }
}
function showCountryError() {
  const error = getCountryInputError();
  let errorMessage = "Please select an option from the list.";
  error.innerText = errorMessage;
  error.className = "error active";
}

/***/ }),

/***/ "./src/components/_custom-components/ValidatedForm/EmailInput/EmailInput.js":
/*!**********************************************************************************!*\
  !*** ./src/components/_custom-components/ValidatedForm/EmailInput/EmailInput.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   emailInputId: () => (/* binding */ emailInputId)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _email_input_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-input-validation */ "./src/components/_custom-components/ValidatedForm/EmailInput/email-input-validation.js");
// COMPONENT IMPORTS



// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }
const componentUuid = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
const emailInputId = `email-input-${componentUuid}`;
const EmailInput = () => {
  const otherClasses = "";
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "form-control" + " " + otherClasses
  },
  // add child elements to the array below
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Label)({
    for: `${emailInputId}`,
    innerHTML: `Please enter an email address ${(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Span)({
      className: "required-marker",
      innerText: "*"
    }).outerHTML}`
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Input)({
    id: `${emailInputId}`,
    type: "email",
    required: true,
    oninput() {
      (0,_email_input_validation__WEBPACK_IMPORTED_MODULE_1__.handleEmailInput)();
    }
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "error"
  })]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailInput);

/***/ }),

/***/ "./src/components/_custom-components/ValidatedForm/EmailInput/email-input-validation.js":
/*!**********************************************************************************************!*\
  !*** ./src/components/_custom-components/ValidatedForm/EmailInput/email-input-validation.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emailIsValid: () => (/* binding */ emailIsValid),
/* harmony export */   getEmailInput: () => (/* binding */ getEmailInput),
/* harmony export */   getEmailInputError: () => (/* binding */ getEmailInputError),
/* harmony export */   handleEmailInput: () => (/* binding */ handleEmailInput),
/* harmony export */   showEmailError: () => (/* binding */ showEmailError)
/* harmony export */ });
/* harmony import */ var _form_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form-validation */ "./src/components/_custom-components/ValidatedForm/form-validation.js");
/* harmony import */ var _EmailInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailInput */ "./src/components/_custom-components/ValidatedForm/EmailInput/EmailInput.js");


function getEmailInput() {
  return document.getElementById(_EmailInput__WEBPACK_IMPORTED_MODULE_1__.emailInputId);
}
function getEmailInputError() {
  return document.querySelector(`#${_EmailInput__WEBPACK_IMPORTED_MODULE_1__.emailInputId} + .error`);
}
function emailIsValid() {
  return getEmailInput().validity.valid;
}
function handleEmailInput() {
  if (emailIsValid()) {
    (0,_form_validation__WEBPACK_IMPORTED_MODULE_0__.clearError)(getEmailInputError());
  } else {
    showEmailError();
  }
}
function showEmailError() {
  const email = getEmailInput();
  const error = getEmailInputError();
  let errorMessage = "Please enter a valid email address.";
  if (email.validity.valueMissing) {
    errorMessage = "You must enter an email address to continue.";
  }
  error.innerText = errorMessage;
  error.className = "error active";
}

/***/ }),

/***/ "./src/components/_custom-components/ValidatedForm/Input/ZipCodeInput.js":
/*!*******************************************************************************!*\
  !*** ./src/components/_custom-components/ValidatedForm/Input/ZipCodeInput.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   zipCodeInputId: () => (/* binding */ zipCodeInputId)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _zip_code_input_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zip-code-input-validation */ "./src/components/_custom-components/ValidatedForm/Input/zip-code-input-validation.js");
// COMPONENT IMPORTS



// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }
const componentUuid = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
const zipCodeInputId = `zip-code-input-${componentUuid}`;
const ZipCodeInput = () => {
  const otherClasses = "";
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "form-control" + " " + otherClasses
  },
  // add child elements to the array below
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Label)({
    for: `${zipCodeInputId}`,
    innerHTML: `Please enter your zip code ${(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Span)({
      className: "required-marker",
      innerText: "*"
    }).outerHTML}`
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Input)({
    type: "text",
    required: true,
    pattern: "^[0-9]{5}(?:-[0-9]{4})?$",
    id: `${zipCodeInputId}`,
    oninput() {
      (0,_zip_code_input_validation__WEBPACK_IMPORTED_MODULE_1__.handleZipCodeInput)();
    }
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "error"
  })]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ZipCodeInput);

/***/ }),

/***/ "./src/components/_custom-components/ValidatedForm/Input/zip-code-input-validation.js":
/*!********************************************************************************************!*\
  !*** ./src/components/_custom-components/ValidatedForm/Input/zip-code-input-validation.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getZipCodeInput: () => (/* binding */ getZipCodeInput),
/* harmony export */   getZipCodeInputError: () => (/* binding */ getZipCodeInputError),
/* harmony export */   handleZipCodeInput: () => (/* binding */ handleZipCodeInput),
/* harmony export */   showZipCodeError: () => (/* binding */ showZipCodeError),
/* harmony export */   zipCodeIsValid: () => (/* binding */ zipCodeIsValid)
/* harmony export */ });
/* harmony import */ var _form_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form-validation */ "./src/components/_custom-components/ValidatedForm/form-validation.js");
/* harmony import */ var _ZipCodeInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ZipCodeInput */ "./src/components/_custom-components/ValidatedForm/Input/ZipCodeInput.js");


function getZipCodeInput() {
  return document.getElementById(_ZipCodeInput__WEBPACK_IMPORTED_MODULE_1__.zipCodeInputId);
}
function getZipCodeInputError() {
  return document.querySelector(`#${_ZipCodeInput__WEBPACK_IMPORTED_MODULE_1__.zipCodeInputId} + .error`);
}
function zipCodeIsValid() {
  return getZipCodeInput().validity.valid;
}
function handleZipCodeInput() {
  if (zipCodeIsValid()) {
    (0,_form_validation__WEBPACK_IMPORTED_MODULE_0__.clearError)(getZipCodeInputError());
  } else {
    showZipCodeError();
  }
}
function showZipCodeError() {
  const zipCode = getZipCodeInput();
  const error = getZipCodeInputError();
  let errorMessage = "Enter a valid zip code format. (55555 or 55555-4444)";
  if (zipCode.validity.valueMissing) {
    errorMessage = "You must enter a valid zip code to continue.";
  } else {}
  error.innerText = errorMessage;
  error.className = "error active";
}

/***/ }),

/***/ "./src/components/_custom-components/ValidatedForm/PasswordInputs/ConfirmPasswordInput.js":
/*!************************************************************************************************!*\
  !*** ./src/components/_custom-components/ValidatedForm/PasswordInputs/ConfirmPasswordInput.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   confirmPasswordInputId: () => (/* binding */ confirmPasswordInputId),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _passwords_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./passwords-validation */ "./src/components/_custom-components/ValidatedForm/PasswordInputs/passwords-validation.js");
// COMPONENT IMPORTS




// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }
const componentUuid = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
const confirmPasswordInputId = `confirm-password-input-${componentUuid}`;
const ConfirmPasswordInput = () => {
  const otherClasses = "";
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "form-control" + " " + otherClasses
  },
  // add child elements to the array below
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Label)({
    for: `${confirmPasswordInputId}`,
    innerHTML: `Confirm password ${(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Span)({
      className: "required-marker",
      innerText: "*"
    }).outerHTML}`
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Input)({
    id: `${confirmPasswordInputId}`,
    type: "password",
    required: true,
    oninput() {
      (0,_passwords_validation__WEBPACK_IMPORTED_MODULE_1__.handleConfirmPasswordInput)();
    }
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "error"
  })]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmPasswordInput);

/***/ }),

/***/ "./src/components/_custom-components/ValidatedForm/PasswordInputs/PasswordInput.js":
/*!*****************************************************************************************!*\
  !*** ./src/components/_custom-components/ValidatedForm/PasswordInputs/PasswordInput.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   passwordInputId: () => (/* binding */ passwordInputId)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _passwords_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./passwords-validation */ "./src/components/_custom-components/ValidatedForm/PasswordInputs/passwords-validation.js");
// COMPONENT IMPORTS




// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }
const componentUuid = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
const passwordInputId = `password-input-${componentUuid}`;
const PasswordInput = () => {
  const otherClasses = "";
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "form-control" + " " + otherClasses
  },
  // add child elements to the array below
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Label)({
    for: `${passwordInputId}`,
    innerHTML: `Create your password ${(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Span)({
      className: "required-marker",
      innerText: "*"
    }).outerHTML}`
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Input)({
    id: `${passwordInputId}`,
    type: "password",
    required: true,
    pattern: _passwords_validation__WEBPACK_IMPORTED_MODULE_1__.passwordRegexString,
    oninput() {
      (0,_passwords_validation__WEBPACK_IMPORTED_MODULE_1__.handlePasswordInput)();
    }
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "error"
  })]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordInput);

/***/ }),

/***/ "./src/components/_custom-components/ValidatedForm/PasswordInputs/passwords-validation.js":
/*!************************************************************************************************!*\
  !*** ./src/components/_custom-components/ValidatedForm/PasswordInputs/passwords-validation.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   confirmPasswordIsValid: () => (/* binding */ confirmPasswordIsValid),
/* harmony export */   getConfirmPasswordInput: () => (/* binding */ getConfirmPasswordInput),
/* harmony export */   getConfirmPasswordInputError: () => (/* binding */ getConfirmPasswordInputError),
/* harmony export */   getConfirmPasswordInputValue: () => (/* binding */ getConfirmPasswordInputValue),
/* harmony export */   getPasswordInput: () => (/* binding */ getPasswordInput),
/* harmony export */   getPasswordInputError: () => (/* binding */ getPasswordInputError),
/* harmony export */   getPasswordInputValue: () => (/* binding */ getPasswordInputValue),
/* harmony export */   handleConfirmPasswordInput: () => (/* binding */ handleConfirmPasswordInput),
/* harmony export */   handlePasswordInput: () => (/* binding */ handlePasswordInput),
/* harmony export */   passwordIsValid: () => (/* binding */ passwordIsValid),
/* harmony export */   passwordRegexString: () => (/* binding */ passwordRegexString),
/* harmony export */   showConfirmPasswordError: () => (/* binding */ showConfirmPasswordError),
/* harmony export */   showPasswordError: () => (/* binding */ showPasswordError)
/* harmony export */ });
/* harmony import */ var _form_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form-validation */ "./src/components/_custom-components/ValidatedForm/form-validation.js");
/* harmony import */ var _ConfirmPasswordInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfirmPasswordInput */ "./src/components/_custom-components/ValidatedForm/PasswordInputs/ConfirmPasswordInput.js");
/* harmony import */ var _PasswordInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PasswordInput */ "./src/components/_custom-components/ValidatedForm/PasswordInputs/PasswordInput.js");



const passwordRegexString = "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{12,}$";
const passwordRegex = new RegExp(passwordRegexString);

// ########################### PASSWORD INPUT ##############################
function getPasswordInput() {
  return document.getElementById(_PasswordInput__WEBPACK_IMPORTED_MODULE_2__.passwordInputId);
}
function getPasswordInputError() {
  return document.querySelector(`#${_PasswordInput__WEBPACK_IMPORTED_MODULE_2__.passwordInputId} + .error`);
}
function passwordIsValid() {
  return getPasswordInput().validity.valid;
}
function getPasswordInputValue() {
  return getPasswordInput().value;
}
function handlePasswordInput() {
  if (passwordIsValid()) {
    (0,_form_validation__WEBPACK_IMPORTED_MODULE_0__.clearError)(getPasswordInputError());
  } else {
    showPasswordError();
  }
}
function showPasswordError() {
  const password = getPasswordInput();
  const error = getPasswordInputError();
  let errorMessage = "Valid passwords are at lease 12 characters long and contain at lease one uppercase letter and one lowercase letter.";
  if (password.validity.valueMissing) {
    errorMessage = "You must enter a password to continue.";
  }
  error.innerText = errorMessage;
  error.className = "error active";
}

// ######################## CONFIRM PASSWORD INPUT ###########################
function getConfirmPasswordInput() {
  return document.getElementById(_ConfirmPasswordInput__WEBPACK_IMPORTED_MODULE_1__.confirmPasswordInputId);
}
function getConfirmPasswordInputError() {
  return document.querySelector(`#${_ConfirmPasswordInput__WEBPACK_IMPORTED_MODULE_1__.confirmPasswordInputId} + .error`);
}
function getConfirmPasswordInputValue() {
  return getConfirmPasswordInput().value;
}
function confirmPasswordIsValid() {
  return getConfirmPasswordInput().validity.valid;
}
function handleConfirmPasswordInput() {
  const input = getConfirmPasswordInput();
  if (getPasswordInputValue() === getConfirmPasswordInputValue()) {
    input.setCustomValidity("");
  } else {
    input.setCustomValidity("invalid");
  }
  if (input.validity.valid) {
    (0,_form_validation__WEBPACK_IMPORTED_MODULE_0__.clearError)(getConfirmPasswordInputError());
  } else {
    showConfirmPasswordError();
  }
}
function showConfirmPasswordError() {
  const password = getConfirmPasswordInput();
  const error = getConfirmPasswordInputError();
  let errorMessage = "Passwords do not match.";
  if (password.validity.valueMissing) {
    errorMessage = "You must confirm your password to continue.";
  }
  error.innerText = errorMessage;
  error.className = "error active";
}

/***/ }),

/***/ "./src/components/_custom-components/ValidatedForm/SubmitButton.js":
/*!*************************************************************************!*\
  !*** ./src/components/_custom-components/ValidatedForm/SubmitButton.js ***!
  \*************************************************************************/
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

const SubmitButton = () => {
  const otherClasses = "";
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Button)({
    className: "" + " " + otherClasses,
    innerText: "Submit"
  },
  // add child elements to the array below
  []);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubmitButton);

/***/ }),

/***/ "./src/components/_custom-components/ValidatedForm/ValidatedForm.js":
/*!**************************************************************************!*\
  !*** ./src/components/_custom-components/ValidatedForm/ValidatedForm.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   formId: () => (/* binding */ formId)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _form_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-validation */ "./src/components/_custom-components/ValidatedForm/form-validation.js");
/* harmony import */ var _Input_ZipCodeInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input/ZipCodeInput */ "./src/components/_custom-components/ValidatedForm/Input/ZipCodeInput.js");
/* harmony import */ var _CountryInput_CountryInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CountryInput/CountryInput */ "./src/components/_custom-components/ValidatedForm/CountryInput/CountryInput.js");
/* harmony import */ var _EmailInput_EmailInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EmailInput/EmailInput */ "./src/components/_custom-components/ValidatedForm/EmailInput/EmailInput.js");
/* harmony import */ var _SubmitButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SubmitButton */ "./src/components/_custom-components/ValidatedForm/SubmitButton.js");
/* harmony import */ var _PasswordInputs_PasswordInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PasswordInputs/PasswordInput */ "./src/components/_custom-components/ValidatedForm/PasswordInputs/PasswordInput.js");
/* harmony import */ var _PasswordInputs_ConfirmPasswordInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PasswordInputs/ConfirmPasswordInput */ "./src/components/_custom-components/ValidatedForm/PasswordInputs/ConfirmPasswordInput.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
// COMPONENT IMPORTS









// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }
const componentUuid = (0,uuid__WEBPACK_IMPORTED_MODULE_8__["default"])();
const formId = `form-${componentUuid}`;
const ValidatedForm = () => {
  const otherClasses = "";
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "assignment" + " " + otherClasses
  },
  // add child elements to the array below
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Form)({
    id: formId,
    noValidate: true,
    onsubmit(event) {
      (0,_form_validation__WEBPACK_IMPORTED_MODULE_1__.handleFormSubmit)(event);
    }
  }, [(0,_EmailInput_EmailInput__WEBPACK_IMPORTED_MODULE_4__["default"])(), (0,_CountryInput_CountryInput__WEBPACK_IMPORTED_MODULE_3__["default"])(), (0,_Input_ZipCodeInput__WEBPACK_IMPORTED_MODULE_2__["default"])(), (0,_PasswordInputs_PasswordInput__WEBPACK_IMPORTED_MODULE_6__["default"])(), (0,_PasswordInputs_ConfirmPasswordInput__WEBPACK_IMPORTED_MODULE_7__["default"])(), (0,_SubmitButton__WEBPACK_IMPORTED_MODULE_5__["default"])(), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    innerHTML: `${(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Span)({
      className: "required-marker",
      innerText: "*"
    }).outerHTML} indicates a required field`
  })])]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidatedForm);

/***/ }),

/***/ "./src/components/_custom-components/ValidatedForm/form-validation.js":
/*!****************************************************************************!*\
  !*** ./src/components/_custom-components/ValidatedForm/form-validation.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearError: () => (/* binding */ clearError),
/* harmony export */   handleFormSubmit: () => (/* binding */ handleFormSubmit)
/* harmony export */ });
/* harmony import */ var _CountryInput_country_input_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CountryInput/country-input-validation */ "./src/components/_custom-components/ValidatedForm/CountryInput/country-input-validation.js");
/* harmony import */ var _EmailInput_email_input_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailInput/email-input-validation */ "./src/components/_custom-components/ValidatedForm/EmailInput/email-input-validation.js");
/* harmony import */ var _Input_zip_code_input_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input/zip-code-input-validation */ "./src/components/_custom-components/ValidatedForm/Input/zip-code-input-validation.js");
/* harmony import */ var _PasswordInputs_passwords_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PasswordInputs/passwords-validation */ "./src/components/_custom-components/ValidatedForm/PasswordInputs/passwords-validation.js");




function getForm() {}
function allInputsValid(form) {
  const inputs = [...document.querySelectorAll("input"), ...document.querySelectorAll("select")];
  for (let i = 0; i < inputs.length; i++) {
    const inputValidity = inputs[i].validity.valid;
    if (!inputValidity) {
      return false;
    }
  }
  return true;
}
function handleFormSubmit(event) {
  if (allInputsValid()) {
    event.preventDefault();
    console.log("SUBMITTED!");
    return;
  } else {
    event.preventDefault();
    if (!(0,_EmailInput_email_input_validation__WEBPACK_IMPORTED_MODULE_1__.emailIsValid)()) {
      (0,_EmailInput_email_input_validation__WEBPACK_IMPORTED_MODULE_1__.showEmailError)();
    }
    if (!(0,_CountryInput_country_input_validation__WEBPACK_IMPORTED_MODULE_0__.countryIsValid)()) {
      (0,_CountryInput_country_input_validation__WEBPACK_IMPORTED_MODULE_0__.showCountryError)();
    }
    if (!(0,_Input_zip_code_input_validation__WEBPACK_IMPORTED_MODULE_2__.zipCodeIsValid)()) {
      (0,_Input_zip_code_input_validation__WEBPACK_IMPORTED_MODULE_2__.showZipCodeError)();
    }
    if (!(0,_PasswordInputs_passwords_validation__WEBPACK_IMPORTED_MODULE_3__.passwordIsValid)()) {
      (0,_PasswordInputs_passwords_validation__WEBPACK_IMPORTED_MODULE_3__.showPasswordError)();
    }
    if (!(0,_PasswordInputs_passwords_validation__WEBPACK_IMPORTED_MODULE_3__.confirmPasswordIsValid)()) {
      (0,_PasswordInputs_passwords_validation__WEBPACK_IMPORTED_MODULE_3__.showConfirmPasswordError)();
    }
  }
}
function clearError(errorElement) {
  errorElement.innerText = "";
  errorElement.className = "error";
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
  repoName: "boilerplate-webpack"
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
  (0,_components_custom_components_ImageCarousel_ui_carousel_ui__WEBPACK_IMPORTED_MODULE_1__.clickCarouselPlay)();
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

const breakPoints = {
  xs: 0,
  sm: 480,
  md: 720,
  lg: 960,
  xl: 1200
};
function applyWindowListeners() {
  window.onresize = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.debounce)(function (e) {
    //
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7QUFFbEUsTUFBTThOLEVBQUUsR0FBR0EsQ0FBQzdNLEtBQUssRUFBRWpCLFFBQVEsS0FDaEM1QixPQUFPLENBQUMsSUFBSSxFQUFFNkMsS0FBSyxHQUFHO0VBQUUsR0FBR0E7QUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVqQixRQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFbEUsTUFBTTNCLE1BQU0sR0FBR0EsQ0FBQzRDLEtBQUssRUFBRWpCLFFBQVEsS0FDcEM1QixPQUFPLENBQUMsUUFBUSxFQUFFNkMsS0FBSyxHQUFHO0VBQUUsR0FBR0E7QUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVqQixRQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFdEUsTUFBTStOLEVBQUUsR0FBR0EsQ0FBQzlNLEtBQUssRUFBRWpCLFFBQVEsS0FDaEM1QixPQUFPLENBQUMsSUFBSSxFQUFFNkMsS0FBSyxHQUFHO0VBQUUsR0FBR0E7QUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVqQixRQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFbEUsTUFBTWdPLENBQUMsR0FBR0EsQ0FBQy9NLEtBQUssRUFBRWpCLFFBQVEsS0FDL0I1QixPQUFPLENBQUMsR0FBRyxFQUFFNkMsS0FBSyxHQUFHO0VBQUUsR0FBR0E7QUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVqQixRQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFakUsTUFBTTZDLEdBQUcsR0FBR0EsQ0FBQzVCLEtBQUssRUFBRWpCLFFBQVEsS0FDakM1QixPQUFPLENBQUMsS0FBSyxFQUFFNkMsS0FBSyxHQUFHO0VBQUUsR0FBR0E7QUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVqQixRQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFbkUsTUFB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RUEsaUVBQWUsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0FDdkJjOztBQUUvQjtBQUNBLHFDQUFxQyxpREFBSztBQUMxQzs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7VUNOdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjZCO0FBQ3NCO0FBQ2tCO0FBRXJFdEMsUUFBUSxDQUFDOE8sSUFBSSxDQUFDaEQsV0FBVyxDQUFDN08sdUVBQU8sQ0FBQyxDQUFDLENBQUM7QUFFcENnUSxrRkFBaUIsQ0FBQyxDQUFDOztBQUVuQjtBQUNBLE1BQU04QixTQUFTLEdBQUcsSUFBSTtBQUN0QixJQUFJQSxTQUFTLEVBQUU7RUFDYjtBQUFBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0NvbnRlbnQvQ29udGVudC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0R5bmFtaWNGb290ZXIvQ29weXJpZ2h0Q29udGFpbmVyLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRHluYW1pY0Zvb3Rlci9EeW5hbWljRm9vdGVyLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRHluYW1pY0Zvb3Rlci9TaXRlQXR0cmlidXRpb25zL0F0dHJpYnV0aW9uc0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0R5bmFtaWNGb290ZXIvU2l0ZUF0dHJpYnV0aW9ucy9JY29uc0V4cGxhbmF0aW9uLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRHluYW1pY0Zvb3Rlci9UT1BMaW5rQ29udGFpbmVyLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL01haW5TZWN0aW9uL01haW5TZWN0aW9uLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0N1c3RvbUljb25zRGlzcGxheS9DdXN0b21JY29uc0Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvRXhwYW5kYWJsZVBhbmVsL0V4cGFuZGFibGVQYW5lbC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9FeHBhbmRhYmxlUGFuZWwvRXhwYW5kYWJsZVBhbmVsQ29udGVudC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9FeHBhbmRhYmxlUGFuZWwvRXhwYW5kYWJsZVBhbmVsVGl0bGUuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvRXhwYW5kYWJsZVBhbmVsL05vbkV4cGFuZGFibGVQYW5lbC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9JY29uLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0ltYWdlQ2Fyb3VzZWwvQ2Fyb3VzZWxOYXYuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvSW1hZ2VDYXJvdXNlbC9DYXJvdXNlbE5hdkluZGljYXRvci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9JbWFnZUNhcm91c2VsL0Nhcm91c2VsUGxheVBhdXNlQ29udGFpbmVyLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0ltYWdlQ2Fyb3VzZWwvQ2Fyb3VzZWxTbGlkZS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9JbWFnZUNhcm91c2VsL0Nhcm91c2VsVHJhY2suanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvSW1hZ2VDYXJvdXNlbC9DYXJvdXNlbFRyYWNrQ29udGFpbmVyLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0ltYWdlQ2Fyb3VzZWwvSW1hZ2VDYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9JbWFnZUNhcm91c2VsL0xlZnRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvSW1hZ2VDYXJvdXNlbC9SaWdodEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9JbWFnZUNhcm91c2VsL2RhdGEvaW1hZ2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvSW1hZ2VDYXJvdXNlbC9wbGF5QW5kUGF1c2VCdXR0b25zLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0ltYWdlQ2Fyb3VzZWwvdWkvY2Fyb3VzZWwtdWkuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvVmFsaWRhdGVkRm9ybS9Db3VudHJ5SW5wdXQvQ291bnRyeUlucHV0LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL1ZhbGlkYXRlZEZvcm0vQ291bnRyeUlucHV0L2NvdW50cmllc0xpc3QuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvVmFsaWRhdGVkRm9ybS9Db3VudHJ5SW5wdXQvY291bnRyeS1pbnB1dC12YWxpZGF0aW9uLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL1ZhbGlkYXRlZEZvcm0vRW1haWxJbnB1dC9FbWFpbElucHV0LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL1ZhbGlkYXRlZEZvcm0vRW1haWxJbnB1dC9lbWFpbC1pbnB1dC12YWxpZGF0aW9uLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL1ZhbGlkYXRlZEZvcm0vSW5wdXQvWmlwQ29kZUlucHV0LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL1ZhbGlkYXRlZEZvcm0vSW5wdXQvemlwLWNvZGUtaW5wdXQtdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9WYWxpZGF0ZWRGb3JtL1Bhc3N3b3JkSW5wdXRzL0NvbmZpcm1QYXNzd29yZElucHV0LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL1ZhbGlkYXRlZEZvcm0vUGFzc3dvcmRJbnB1dHMvUGFzc3dvcmRJbnB1dC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9WYWxpZGF0ZWRGb3JtL1Bhc3N3b3JkSW5wdXRzL3Bhc3N3b3Jkcy12YWxpZGF0aW9uLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL1ZhbGlkYXRlZEZvcm0vU3VibWl0QnV0dG9uLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL1ZhbGlkYXRlZEZvcm0vVmFsaWRhdGVkRm9ybS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9WYWxpZGF0ZWRGb3JtL2Zvcm0tdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19lbGVtZW50cy9FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9wYWdlLWxvZ2ljL2RhdGEvZGF0YS1wYWdlLWNvbmZpZy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9wYWdlLWxvZ2ljL3VpL3VpLWluaXRpYWwtc3RhdGUuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvcGFnZS1sb2dpYy91aS91aS13aW5kb3cuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9IZWFkZXIvSGVhZGVyXCI7XG5pbXBvcnQgRHluYW1pY0Zvb3RlciBmcm9tIFwiLi4vRHluYW1pY0Zvb3Rlci9EeW5hbWljRm9vdGVyXCI7XG5pbXBvcnQgTWFpblNlY3Rpb24gZnJvbSBcIi4uL01haW5TZWN0aW9uL01haW5TZWN0aW9uXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBDb250ZW50ID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gRWxlbWVudChcImRpdlwiLCB7IGlkOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgSGVhZGVyKCksXG4gICAgTWFpblNlY3Rpb24oKSxcbiAgICBEeW5hbWljRm9vdGVyKCksXG4gIF0pO1xuXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudDtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBBLCBEaXYgfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vX2N1c3RvbS1jb21wb25lbnRzL0ljb25cIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuaW1wb3J0IHsgZ2l0aHViSW5mbyB9IGZyb20gXCIuLi8uLi9wYWdlLWxvZ2ljL2RhdGEvZGF0YS1wYWdlLWNvbmZpZ1wiO1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuLy8gVEVNUExBVEUgVkFSSUFCTEVTXG5jb25zdCBkeW5hbWljWWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcblxuY29uc3QgQ29weXJpZ2h0Q29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRGl2KFxuICAgIHsgY2xhc3NOYW1lOiBgY29weXJpZ2h0LWNvbnRhaW5lcmAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgRGl2KHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImNvcHlyaWdodC1pbmZvIGRpc3BsYXktaS1iXCIsXG4gICAgICAgIGlubmVyVGV4dDogYMKpIENhcmxpbiBNaXRjaGVsbCAke2R5bmFtaWNZZWFyfWAsXG4gICAgICB9KSxcbiAgICAgIEEoeyBocmVmOiBgaHR0cHM6Ly9naXRodWIuY29tL2Nhcmxpbi1taXRjaGVsbC8ke2dpdGh1YkluZm8ucmVwb05hbWV9YCB9LCBbXG4gICAgICAgIEljb24oXCJpY29uLWdpdGh1Yi1jYXRcIiksXG4gICAgICBdKSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29weXJpZ2h0Q29udGFpbmVyO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBDb3B5cmlnaHRDb250YWluZXIgZnJvbSBcIi4vQ29weXJpZ2h0Q29udGFpbmVyXCI7XG5pbXBvcnQgQXR0cmlidXRpb25zQ29udGFpbmVyIGZyb20gXCIuL1NpdGVBdHRyaWJ1dGlvbnMvQXR0cmlidXRpb25zQ29udGFpbmVyXCI7XG5pbXBvcnQgVE9QQ29udGFpbmVyIGZyb20gXCIuL1RPUExpbmtDb250YWluZXJcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IER5bmFtaWNGb290ZXIgPSAoKSA9PiB7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gXG4gIEZvb3RlcihcbiAgICB7IFxuICAgICAgaWQ6IGBmb290ZXJgLCBcbiAgICAgIGNsYXNzTmFtZTogYGJnLWdyYXktZGFyay0zIHRleHQtd2hpdGVgIFxuICAgIH0sXG4gICAgW1xuICAgICBDb3B5cmlnaHRDb250YWluZXIoKSwgXG4gICAgIFRPUENvbnRhaW5lcigpLCBcbiAgICAgQXR0cmlidXRpb25zQ29udGFpbmVyKClcbiAgICBdXG4gICk7XG5cbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljRm9vdGVyO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vLi4vX2N1c3RvbS1jb21wb25lbnRzL0ljb25cIjtcblxuaW1wb3J0IEV4cGFuZGFibGVQYW5lbCBmcm9tIFwiLi4vLi4vX2N1c3RvbS1jb21wb25lbnRzL0V4cGFuZGFibGVQYW5lbC9FeHBhbmRhYmxlUGFuZWxcIjtcbmltcG9ydCBOb25FeHBhbmRhYmxlUGFuZWwgZnJvbSBcIi4uLy4uL19jdXN0b20tY29tcG9uZW50cy9FeHBhbmRhYmxlUGFuZWwvTm9uRXhwYW5kYWJsZVBhbmVsXCI7XG5cbmltcG9ydCBJY29uc0V4cGxhbmF0aW9uIGZyb20gXCIuL0ljb25zRXhwbGFuYXRpb25cIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEF0dHJpYnV0aW9uc0NvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIHsgY2xhc3NOYW1lOiBgYXR0cmlidXRpb25zLWNvbnRhaW5lcmAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgRXhwYW5kYWJsZVBhbmVsKHtcbiAgICAgICAgdGl0bGU6IFwiU2l0ZSBBdHRyaWJ1dGlvbnNcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBFeHBhbmRhYmxlUGFuZWwoe1xuICAgICAgICAgICAgdGl0bGU6IFwiSWNvbnNcIixcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIE5vbkV4cGFuZGFibGVQYW5lbCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiR2l0aHViXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vbG9nb3NcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW0ljb24oXCJpY29uLWdpdGh1Yi1jYXRcIildLFxuICAgICAgICAgICAgICB9KSxcblxuICAgICAgICAgICAgICBFeHBhbmRhYmxlUGFuZWwoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFsbCBvdGhlciBJY29uc1wiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbSWNvbnNFeHBsYW5hdGlvbigpXSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgXVxuICApO1xuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXR0cmlidXRpb25zQ29udGFpbmVyO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IERpdiwgQSB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEljb25zRXhwbGFuYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAgeyBjbGFzc05hbWU6IGBpY29ucy1leHBsYW5hdGlvbmAsIGlubmVySFRNTDogYGAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgRGl2KHtcbiAgICAgICAgaW5uZXJIVE1MOiBgQWxsIG90aGVyIGljb25zIHdlcmUgY3JlYXRlZCBieSBtZSB1c2luZyAke1xuICAgICAgICAgIEEoe1xuICAgICAgICAgICAgaHJlZjogXCJodHRwczovL2lua3NjYXBlLm9yZy9cIixcbiAgICAgICAgICAgIGlubmVyVGV4dDogXCJJbmtzY2FwZVwiLFxuICAgICAgICAgIH0pLm91dGVySFRNTFxuICAgICAgICB9IGFuZCBjb252ZXJ0aW5nIHRoZW0gdG8gYSBmb250IHdpdGggJHtcbiAgICAgICAgICBBKHtcbiAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9pY29tb29uLmlvL1wiLFxuICAgICAgICAgICAgaW5uZXJUZXh0OiBcIkljb01vb25cIixcbiAgICAgICAgICB9KS5vdXRlckhUTUxcbiAgICAgICAgfWAsXG4gICAgICB9KSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbnNFeHBsYW5hdGlvbjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBBLCBEaXYgfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBUT1BDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHBhcmVudENvbnRhaW5lciA9IERpdihcbiAgICB7XG4gICAgICBjbGFzc05hbWU6IGB0b3AtY29udGFpbmVyYCxcbiAgICAgIGlubmVyVGV4dDogXCJJbnNwaXJlZCBCeTpcIixcbiAgICB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBBKHtcbiAgICAgICAgaHJlZjogXCJodHRwczovL3d3dy50aGVvZGlucHJvamVjdC5jb20vXCIsXG4gICAgICAgIGNsYXNzTmFtZTogXCJ0b3AtbGlua1wiLFxuICAgICAgICBpbm5lclRleHQ6IFwiVGhlIE9kaW4gUHJvamVjdFwiLFxuICAgICAgfSksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFyZW50Q29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVE9QQ29udGFpbmVyO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGgxID0gRWxlbWVudChcImgxXCIsIHsgaW5uZXJUZXh0OiBcIlRoaXMgaXMgdGhlIGhlYWRlclwiIH0pO1xuXG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiYmctZ3JheS1kYXJrLTMgdGV4dC13aGl0ZSBwLTJcIjtcbiAgY29uc3QgaGVhZGVyID0gRWxlbWVudChcbiAgICBcImhlYWRlclwiLFxuICAgIHtcbiAgICAgIGlkOiBcImhlYWRlclwiLFxuICAgICAgY2xhc3NOYW1lOiBcImhlYWRlclwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMsXG4gICAgfSxcbiAgICBbaDFdXG4gICk7XG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgZ2VuZXJhdGVUZXN0Q29udGVudEFyciB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IEN1c3RvbUljb25zRGlzcGxheSBmcm9tIFwiLi4vX2N1c3RvbS1jb21wb25lbnRzL0N1c3RvbUljb25zRGlzcGxheS9DdXN0b21JY29uc0Rpc3BsYXlcIjtcbmltcG9ydCBJbWFnZUNhcm91c2VsIGZyb20gXCIuLi9fY3VzdG9tLWNvbXBvbmVudHMvSW1hZ2VDYXJvdXNlbC9JbWFnZUNhcm91c2VsXCI7XG5pbXBvcnQgVmFsaWRhdGVkRm9ybSBmcm9tIFwiLi4vX2N1c3RvbS1jb21wb25lbnRzL1ZhbGlkYXRlZEZvcm0vVmFsaWRhdGVkRm9ybVwiO1xuaW1wb3J0IHsgTWFpbiwgRGl2IH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgTWFpblNlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IG1haW4gPSBNYWluKFxuICAgIHtcbiAgICAgIGlkOiBcIm1haW4tc2VjdGlvblwiLFxuICAgICAgY2xhc3NOYW1lOiBcIlwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMsXG4gICAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgRGl2KHsgY2xhc3NOYW1lOiBcImljb25zLXJvd1wiIH0sIFtDdXN0b21JY29uc0Rpc3BsYXkoKV0pLFxuICAgICAgRGl2KHsgY2xhc3NOYW1lOiBcImNhcm91c2VsLXJvd1wiIH0sIFtJbWFnZUNhcm91c2VsKCldKSxcbiAgICAgIERpdih7IGNsYXNzTmFtZTogXCJmb3JtLXJvd1wiIH0sIFtWYWxpZGF0ZWRGb3JtKCldKSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBtYWluO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpblNlY3Rpb247XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRGl2IH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb25cIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEN1c3RvbUljb25zRGlzcGxheSA9ICgpID0+IHtcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdihcbiAgICB7IGlubmVyVGV4dDogYGAsIGNsYXNzTmFtZTogYGN1c3RvbS1pY29ucy1kaXNwbGF5YCB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBJY29uKFwiaWNvbi1oYW1idXJnZXItbWVudVwiKSxcbiAgICAgIEljb24oXCJpY29uLXBhdXNlXCIpLFxuICAgICAgSWNvbihcImljb24tcGVuY2lsXCIpLFxuICAgICAgSWNvbihcImljb24tcGx1cy1zaWduXCIpLFxuICAgICAgSWNvbihcImljb24tcGx1cy1zaWduIHJvdGF0ZS00NVwiKSxcbiAgICAgIEljb24oXCJpY29uLXRyYXNoXCIpLFxuICAgICAgSWNvbihcImljb24tdHJpYW5nbGVcIiksXG4gICAgICBJY29uKFwiaWNvbi10cmlhbmdsZSByb3RhdGUtMTgwXCIpLFxuICAgICAgSWNvbihcImljb24tdHJpYW5nbGUtc2hvcnQgcm90YXRlLTkwXCIpLFxuICAgICAgSWNvbihcImljb24tdHJpYW5nbGUtc2hvcnRcIiksXG4gICAgICBJY29uKFwiaWNvbi11cC1hcnJvd1wiKSxcbiAgICAgIEljb24oXCJpY29uLXVwLWFycm93IHJvdGF0ZS0xODBcIiksXG4gICAgICBJY29uKFwiaWNvbi11cC1hcnJvdy1zaG9ydFwiKSxcbiAgICAgIEljb24oXCJpY29uLXVwLWFycm93LXNob3J0IHJvdGF0ZS0yNzBcIiksXG4gICAgICBJY29uKFwiaWNvbi11cC1kb3duXCIpLFxuICAgICAgSWNvbihcImljb24tdXAtZG93biByb3RhdGUtOTBcIiksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUljb25zRGlzcGxheTtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBBIH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG5pbXBvcnQgRXhwYW5kYWJsZVBhbmVsVGl0bGUgZnJvbSBcIi4vRXhwYW5kYWJsZVBhbmVsVGl0bGVcIjtcbmltcG9ydCBFeHBhbmRhYmxlUGFuZWxDb250ZW50IGZyb20gXCIuL0V4cGFuZGFibGVQYW5lbENvbnRlbnRcIjtcblxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEV4cGFuZGFibGVQYW5lbCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBjb21wb25lbnRJZCA9IHV1aWR2NCgpO1xuICBjb25zdCB7IHRpdGxlLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG5cbiAgY29uc3QgcGFuZWwgPSBBKFxuICAgIHsgY2xhc3NOYW1lOiBgZXhwYW5kYWJsZS1wYW5lbGAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgRXhwYW5kYWJsZVBhbmVsVGl0bGUoeyB0aXRsZSwgY29tcG9uZW50SWQgfSksXG4gICAgICBFeHBhbmRhYmxlUGFuZWxDb250ZW50KHsgY2hpbGRyZW4sIGNvbXBvbmVudElkIH0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhbmVsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kYWJsZVBhbmVsO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgeyBEaXYgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBFeHBhbmRhYmxlUGFuZWxDb250ZW50ID0gKHByb3BzKSA9PiB7XG4gIGxldCB7IGNoaWxkcmVuLCBjb21wb25lbnRJZCB9ID0gcHJvcHM7XG4gIGNoaWxkcmVuID0gY2hpbGRyZW4gPyBjaGlsZHJlbiA6IFtdO1xuXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAge1xuICAgICAgaWQ6IGBleHBhbmRhYmxlLWNvbnRlbnQtJHtjb21wb25lbnRJZH1gLFxuICAgICAgY2xhc3NOYW1lOiBgZXhwYW5kYWJsZS1wYW5lbC1jb250ZW50YCxcbiAgICB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbRGl2KHsgY2xhc3NOYW1lOiBcImNvbnRlbnRcIiB9LCBbLi4uY2hpbGRyZW5dKV1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeHBhbmRhYmxlUGFuZWxDb250ZW50O1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEVsZW1lbnQsIEJ1dHRvbiwgRGl2IH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb25cIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbmZ1bmN0aW9uIHRvZ2dsZUV4cGFuc2lvbihjb21wb25lbnRJZCkge1xuICBjb25zdCBleHBhbnNpb25Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgYGV4cGFuZGFibGUtY29udGVudC0ke2NvbXBvbmVudElkfWBcbiAgKTtcbiAgY29uc3QgdG9nZ2xlRXhwYW5zaW9uQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgYGV4cGFuZGFibGUtY29udGVudC1idXR0b24tJHtjb21wb25lbnRJZH1gXG4gICk7XG4gIGV4cGFuc2lvbkNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZShcImV4cGFuZGVkXCIpO1xuICB0b2dnbGVFeHBhbnNpb25CdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImV4cGFuZGVkXCIpO1xufVxuXG5jb25zdCBFeHBhbmRhYmxlUGFuZWxUaXRsZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHRpdGxlLCBjb21wb25lbnRJZCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IEVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICB7IGNsYXNzTmFtZTogYGV4cGFuZGFibGUtcGFuZWwtdGl0bGVgIH0sXG4gICAgW1xuICAgICAgRGl2KHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImRpc3BsYXktaS1iXCIsXG4gICAgICAgIGlubmVyVGV4dDogdGl0bGUsXG4gICAgICAgIG9uY2xpY2soKSB7XG4gICAgICAgICAgdG9nZ2xlRXhwYW5zaW9uKGNvbXBvbmVudElkKTtcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgQnV0dG9uKFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IGBleHBhbmRhYmxlLWNvbnRlbnQtYnV0dG9uLSR7Y29tcG9uZW50SWR9YCxcbiAgICAgICAgICBvbmNsaWNrKCkge1xuICAgICAgICAgICAgdG9nZ2xlRXhwYW5zaW9uKGNvbXBvbmVudElkKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbSWNvbihcImljb24tdXAtZG93blwiKV1cbiAgICAgICksXG4gICAgXVxuICApO1xuXG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kYWJsZVBhbmVsVGl0bGU7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgQSB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IE5vbkV4cGFuZGFibGVQYW5lbCA9IChwcm9wcykgPT4ge1xuICBsZXQgeyB0aXRsZSwgaHJlZiwgY2hpbGRyZW4gfSA9IHByb3BzO1xuICBjaGlsZHJlbiA9IGNoaWxkcmVuID8gY2hpbGRyZW4gOiBbXTtcblxuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcIlwiO1xuXG4gIGNvbnN0IHBhbmVsID0gQShcbiAgICB7XG4gICAgICBjbGFzc05hbWU6IGAke290aGVyQ2xhc3Nlc30gbm9uLWV4cGFuZGFibGUtcGFuZWwgJHtcbiAgICAgICAgaHJlZiA/IFwiaXMtbGlua1wiIDogXCJcIlxuICAgICAgfWAsXG4gICAgICBpbm5lclRleHQ6IHRpdGxlLFxuICAgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFsuLi5jaGlsZHJlbl1cbiAgKTtcbiAgaWYgKGhyZWYpIHtcbiAgICBwYW5lbC5ocmVmID0gaHJlZjtcbiAgfVxuICByZXR1cm4gcGFuZWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb25FeHBhbmRhYmxlUGFuZWw7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEljb24gPSAoaWNvbkNsYXNzKSA9PiB7XG4gIGNvbnN0IGljb24gPSBFbGVtZW50KFwiaVwiLCB7IGNsYXNzTmFtZTogYGljb24gJHtpY29uQ2xhc3N9IGRpc3BsYXktaS1iYCB9KTtcbiAgcmV0dXJuIGljb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJY29uO1xuIiwiaW1wb3J0IHsgRGl2IH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IENhcm91c2VsTmF2SW5kaWNhdG9yIGZyb20gXCIuL0Nhcm91c2VsTmF2SW5kaWNhdG9yXCI7XG5pbXBvcnQgQ2Fyb3VzZWxQbGF5UGF1c2VDb250YWluZXIgZnJvbSBcIi4vQ2Fyb3VzZWxQbGF5UGF1c2VDb250YWluZXJcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgQ2Fyb3VzZWxOYXYgPSAoaW1hZ2VEYXRhKSA9PiB7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAge1xuICAgICAgaWQ6IGBgLFxuICAgICAgY2xhc3NOYW1lOiBgY2Fyb3VzZWwtbmF2IHB0LTFgLFxuICAgIH0sXG4gICAgLy8gY2hpbGRyZW5cbiAgICBbXG4gICAgICBDYXJvdXNlbFBsYXlQYXVzZUNvbnRhaW5lcigpLFxuICAgICAgLy8gTmF2IGluZGljYXRvcnNcbiAgICAgIC4uLmltYWdlRGF0YS5tYXAoKG9iaiwgaW5kZXgpID0+XG4gICAgICAgIENhcm91c2VsTmF2SW5kaWNhdG9yKHtcbiAgICAgICAgICBpbWFnZUlkOiBvYmoudXVpZCxcbiAgICAgICAgICBzdGFydHNBY3RpdmU6IG9iai5pc0FjdGl2ZSA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsTmF2O1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCB7IGNsaWNrQ2Fyb3VzZWxOYXYgfSBmcm9tIFwiLi91aS9jYXJvdXNlbC11aVwiO1xuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IENhcm91c2VsTmF2SW5kaWNhdG9yID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaW1hZ2VJZCwgc3RhcnRzQWN0aXZlIH0gPSBwcm9wcztcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IEJ1dHRvbihcbiAgICB7XG4gICAgICBpZDogYGNhcm91c2VsLW5hdi0ke2ltYWdlSWR9YCxcbiAgICAgIGNsYXNzTmFtZTogYGNhcm91c2VsLWluZGljYXRvciBkaXNwbGF5LWktYiBiZy1ncmF5LWxpZ2h0LTYgJHtcbiAgICAgICAgc3RhcnRzQWN0aXZlID8gXCJhY3RpdmVcIiA6IFwiXCJcbiAgICAgIH1gLFxuICAgICAgb25jbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGlja0Nhcm91c2VsTmF2KGltYWdlSWQpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsTmF2SW5kaWNhdG9yO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IERpdiB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCB7IFBsYXlCdXR0b24sIFBhdXNlQnV0dG9uIH0gZnJvbSBcIi4vcGxheUFuZFBhdXNlQnV0dG9uc1wiO1xuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IENhcm91c2VsUGxheVBhdXNlQ29udGFpbmVyID0gKCkgPT4ge1xuICAvL1xuXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiBcImNhcm91c2VsLXBsYXktcGF1c2UtY29udGFpbmVyXCIsXG4gICAgfSxcbiAgICAvLyBjaGlsZGVyblxuICAgIFtQYXVzZUJ1dHRvbiwgUGxheUJ1dHRvbl1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFBsYXlQYXVzZUNvbnRhaW5lcjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYsIEltZyB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IENhcm91c2VsU2xpZGUgPSAoaW1hZ2VTb3VyY2UsIGlkLCBzdGFydHNBY3RpdmUpID0+IHtcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdihcbiAgICB7XG4gICAgICBpZDogYGNhcm91c2VsLXNsaWRlLWAgKyBpZCxcbiAgICAgIGNsYXNzTmFtZTogYGNhcm91c2VsLXNsaWRlICR7c3RhcnRzQWN0aXZlID8gXCJhY3RpdmVcIiA6IFwiXCJ9YCxcbiAgICB9LFxuICAgIC8vIGNoaWxkcmVuXG4gICAgW1xuICAgICAgSW1nKHtcbiAgICAgICAgc3JjOiBpbWFnZVNvdXJjZSxcbiAgICAgICAgY2xhc3NOYW1lOiBcImNhcm91c2VsLWltYWdlXCIsXG4gICAgICB9KSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxTbGlkZTtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBVbCB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBDYXJvdXNlbFNsaWRlIGZyb20gXCIuL0Nhcm91c2VsU2xpZGVcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IENhcm91c2VsVHJhY2sgPSAoaW1hZ2VEYXRhKSA9PiB7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBVbChcbiAgICB7XG4gICAgICBpZDogYGAsXG4gICAgICBjbGFzc05hbWU6IGBjYXJvdXNlbC10cmFja2AsXG4gICAgfSxcbiAgICAvLyBjaGlsZHJlblxuICAgIFtcbiAgICAgIC4uLmltYWdlRGF0YS5tYXAoKG9iaiwgaW5kZXgpID0+XG4gICAgICAgIENhcm91c2VsU2xpZGUob2JqLnNyYywgb2JqLnV1aWQsIG9iai5pc0FjdGl2ZSA/IHRydWUgOiBmYWxzZSlcbiAgICAgICksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsVHJhY2s7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRGl2IH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IENhcm91c2VsVHJhY2sgZnJvbSBcIi4vQ2Fyb3VzZWxUcmFja1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgQ2Fyb3VzZWxUcmFja0NvbnRhaW5lciA9IChpbWFnZURhdGEpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gRGl2KFxuICAgIHtcbiAgICAgIGlkOiBgYCxcbiAgICAgIGNsYXNzTmFtZTogYGNhcm91c2VsLXRyYWNrLWNvbnRhaW5lcmAsXG4gICAgfSxcbiAgICAvLyBjaGlsZHJlblxuICAgIFtDYXJvdXNlbFRyYWNrKGltYWdlRGF0YSldXG4gICk7XG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFRyYWNrQ29udGFpbmVyO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IERpdiB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBMZWZ0Q2Fyb3VzZWxCdXR0b24gZnJvbSBcIi4vTGVmdEJ1dHRvblwiO1xuaW1wb3J0IFJpZ2h0Q2Fyb3VzZWxCdXR0b24gZnJvbSBcIi4vUmlnaHRCdXR0b25cIjtcbmltcG9ydCBDYXJvdXNlbFRyYWNrQ29udGFpbmVyIGZyb20gXCIuL0Nhcm91c2VsVHJhY2tDb250YWluZXJcIjtcbmltcG9ydCBDYXJvdXNlbE5hdiBmcm9tIFwiLi9DYXJvdXNlbE5hdlwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuaW1wb3J0IHsgaW1hZ2VEYXRhIH0gZnJvbSBcIi4vZGF0YS9pbWFnZUxvYWRlclwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgSW1hZ2VDYXJvdXNlbCA9ICgpID0+IHtcbiAgY29uc3QgY2Fyb3VzZWwgPSBEaXYoXG4gICAge1xuICAgICAgaWQ6IGBgLFxuICAgICAgY2xhc3NOYW1lOiBgY2Fyb3VzZWwgcHQtMSBwYi0xYCxcbiAgICB9LFxuICAgIC8vIGNoaWxkcmVuXG4gICAgW1xuICAgICAgTGVmdENhcm91c2VsQnV0dG9uKCksXG4gICAgICBDYXJvdXNlbFRyYWNrQ29udGFpbmVyKGltYWdlRGF0YSksXG4gICAgICBSaWdodENhcm91c2VsQnV0dG9uKCksXG4gICAgICBDYXJvdXNlbE5hdihpbWFnZURhdGEpLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIGNhcm91c2VsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDYXJvdXNlbDtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvblwiO1xuaW1wb3J0IHsgY2xpY2tDYXJvdXNlbExlZnQgfSBmcm9tIFwiLi91aS9jYXJvdXNlbC11aVwiO1xuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IExlZnRDYXJvdXNlbEJ1dHRvbiA9IChzaGFyZWRDbGFzc2VzKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IEJ1dHRvbihcbiAgICB7XG4gICAgICBpZDogYGAsXG4gICAgICBjbGFzc05hbWU6IGBjYXJvdXNlbC1idXR0b24gbGVmdCBgICsgc2hhcmVkQ2xhc3NlcyxcbiAgICAgIG9uY2xpY2soKSB7XG4gICAgICAgIGNsaWNrQ2Fyb3VzZWxMZWZ0KCk7XG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gY2hpbGRyZW5cbiAgICBbSWNvbihcImljb24tdXAtYXJyb3ctc2hvcnQgcm90YXRlLTI3MCBcIildXG4gICk7XG4gIHJldHVybiBidXR0b247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMZWZ0Q2Fyb3VzZWxCdXR0b247XG4iLCJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvblwiO1xuaW1wb3J0IHsgY2xpY2tDYXJvdXNlbFJpZ2h0IH0gZnJvbSBcIi4vdWkvY2Fyb3VzZWwtdWlcIjtcbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBSaWdodENhcm91c2VsQnV0dG9uID0gKHNoYXJlZENsYXNzZXMpID0+IHtcbiAgY29uc3QgYnV0dG9uID0gQnV0dG9uKFxuICAgIHtcbiAgICAgIGlkOiBgYCxcbiAgICAgIGNsYXNzTmFtZTogYGNhcm91c2VsLWJ1dHRvbiByaWdodCBgICsgc2hhcmVkQ2xhc3NlcyxcbiAgICAgIG9uY2xpY2soKSB7XG4gICAgICAgIGNsaWNrQ2Fyb3VzZWxSaWdodCgpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIGNoaWxkcmVuXG4gICAgW0ljb24oXCJpY29uLXVwLWFycm93LXNob3J0IHJvdGF0ZS05MFwiKV1cbiAgKTtcbiAgcmV0dXJuIGJ1dHRvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJpZ2h0Q2Fyb3VzZWxCdXR0b247XG4iLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHsgZ2V0UmFuZG9tSW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWxzXCI7XG5cbi8vIEltYWdlIHNvdXJjZSBpbmZvXG5mdW5jdGlvbiBnZXRQaWNzdW1JZChtaW4sIG1heCwgZXhjbHVzaW9ucykge1xuICBsZXQgcmFuZEludCA9IGdldFJhbmRvbUludChtaW4sIG1heCk7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgaWYgKGV4Y2x1c2lvbnMuaW5jbHVkZXMocmFuZEludCkpIHtcbiAgICAgIHJhbmRJbnQgPSBnZXRSYW5kb21JbnQobWluLCBtYXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmFuZEludDtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tSW1hZ2VTcmMod2lkdGgsIGhlaWdodCkge1xuICByZXR1cm4gYGh0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC8ke2dldFBpY3N1bUlkKDEsIDEwMCwgW1xuICAgIDk3LFxuICBdKX0vJHt3aWR0aH0vJHtoZWlnaHR9YDtcbn1cblxuY29uc3QgbnVtSW1hZ2VzID0gNztcbmNvbnN0IGltYWdlV2lkdGggPSA1MDA7XG5jb25zdCBpbWFnZUhlaWdodCA9IDMwMDtcblxuLy8gYWRkIGlzQWN0aXZlOiB0cnVlIHRvIHRoZSBzbGlkZSB5b3Ugd2FudCB0byBzdGFydCBhcyBhY3RpdmVcbmNvbnN0IGltYWdlU291cmNlcyA9IFtcbiAgeyBzcmM6IGdldFJhbmRvbUltYWdlU3JjKGltYWdlV2lkdGgsIGltYWdlSGVpZ2h0KSwgaXNBY3RpdmU6IHRydWUgfSxcbiAgLi4uQXJyYXkobnVtSW1hZ2VzKVxuICAgIC5maWxsKG51bGwpXG4gICAgLm1hcCgoZSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3JjOiBnZXRSYW5kb21JbWFnZVNyYyhpbWFnZVdpZHRoLCBpbWFnZUhlaWdodCksXG4gICAgICB9O1xuICAgIH0pLFxuXTtcblxuZXhwb3J0IGNvbnN0IGltYWdlRGF0YSA9IGltYWdlU291cmNlcy5tYXAoKG9iaikgPT4gKHtcbiAgLi4ub2JqLFxuICB1dWlkOiB1dWlkdjQoKSxcbn0pKTtcbiIsImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uXCI7XG5pbXBvcnQgeyBjbGlja0Nhcm91c2VsUGxheSwgY2xpY2tDYXJvdXNlbFBhdXNlIH0gZnJvbSBcIi4vdWkvY2Fyb3VzZWwtdWlcIjtcblxuZXhwb3J0IGNvbnN0IFBsYXlCdXR0b24gPSBCdXR0b24oXG4gIHtcbiAgICBjbGFzc05hbWU6IFwicGxheS1idXR0b24gdmlzaWJsZVwiLFxuICAgIG9uY2xpY2soKSB7XG4gICAgICBjbGlja0Nhcm91c2VsUGxheSgpO1xuICAgIH0sXG4gIH0sXG4gIFtJY29uKFwiaWNvbi10cmlhbmdsZSByb3RhdGUtOTAgZm9udC1zbSB0ZXh0LWdyYXktZGFyay00XCIpXVxuKTtcblxuZXhwb3J0IGNvbnN0IFBhdXNlQnV0dG9uID0gQnV0dG9uKFxuICB7XG4gICAgY2xhc3NOYW1lOiBcInBhdXNlLWJ1dHRvblwiLFxuICAgIG9uY2xpY2soKSB7XG4gICAgICBjbGlja0Nhcm91c2VsUGF1c2UoKTtcbiAgICB9LFxuICB9LFxuICBbSWNvbihcImljb24tcGF1c2UgZm9udC1zbSB0ZXh0LWdyYXktZGFyay00XCIpXVxuKTtcbiIsIi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIFVUSUxJVElFUyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cbmZ1bmN0aW9uIGdldEFsbENhcm91c2VsU2xpZGVzKCkge1xuICByZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwtdHJhY2tcIikuY2hpbGROb2Rlc107XG59XG5cbmZ1bmN0aW9uIGdldEFsbENhcm91c2VsU2xpZGVJZHMoKSB7XG4gIHJldHVybiBnZXRBbGxDYXJvdXNlbFNsaWRlcygpLm1hcCgoZWxlbSkgPT4gZWxlbS5pZCk7XG59XG5cbmZ1bmN0aW9uIGdldEFsbENhcm91c2VsTmF2QnV0dG9ucygpIHtcbiAgcmV0dXJuIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcm91c2VsLWluZGljYXRvclwiKV07XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRTbGlkZUluZGV4KCkge1xuICBjb25zdCBhbGxTbGlkZUlkcyA9IGdldEFsbENhcm91c2VsU2xpZGVJZHMoKTtcbiAgY29uc3QgY3VycmVudFNsaWRlSWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsLXNsaWRlLmFjdGl2ZVwiKS5pZDtcbiAgY29uc3QgY3VycmVudFNsaWRlSW5kZXggPSBhbGxTbGlkZUlkcy5pbmRleE9mKGN1cnJlbnRTbGlkZUlkKTtcblxuICByZXR1cm4gY3VycmVudFNsaWRlSW5kZXg7XG59XG5cbmZ1bmN0aW9uIGdldFByZXZpb3VzU2xpZGVJbmRleCgpIHtcbiAgbGV0IHByZXZpb3VzU2xpZGVJbmRleCA9IGdldEN1cnJlbnRTbGlkZUluZGV4KCkgLSAxO1xuXG4gIC8vIGlmIHRoZSBjYWxjdWxhdGVkIGluZGV4IGlzIG91dHNpZGUgdGhlIGxpc3QsIHNldCBpdCB0byB0aGUgaW5kZXggb2YgdGhlIGxhc3QgaXRlbSBpbiB0aGUgbGlzdFxuICBjb25zdCBjb3JyZWN0ZWRJbmRleCA9XG4gICAgcHJldmlvdXNTbGlkZUluZGV4IDwgMFxuICAgICAgPyBnZXRBbGxDYXJvdXNlbFNsaWRlSWRzKCkubGVuZ3RoIC0gMVxuICAgICAgOiBwcmV2aW91c1NsaWRlSW5kZXg7XG5cbiAgcmV0dXJuIGNvcnJlY3RlZEluZGV4O1xufVxuXG5mdW5jdGlvbiBnZXROZXh0U2xpZGVJbmRleCgpIHtcbiAgbGV0IG5leHRTbGlkZUluZGV4ID0gZ2V0Q3VycmVudFNsaWRlSW5kZXgoKSArIDE7XG5cbiAgLy8gaWYgdGhlIGNhbGN1bGF0ZWQgaW5kZXggaXMgb3V0c2lkZSB0aGUgbGlzdCwgc2V0IGl0IHRvIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgbGlzdFxuICBjb25zdCBjb3JyZWN0ZWRJbmRleCA9XG4gICAgbmV4dFNsaWRlSW5kZXggPiBnZXRBbGxDYXJvdXNlbFNsaWRlSWRzKCkubGVuZ3RoIC0gMSA/IDAgOiBuZXh0U2xpZGVJbmRleDtcblxuICByZXR1cm4gY29ycmVjdGVkSW5kZXg7XG59XG5cbi8vIG1vdmUgdG8gdGhlIHNlbGVjdGVkIHNsaWRlXG5leHBvcnQgZnVuY3Rpb24gZ290b1NwZWNpZmljU2xpZGUoaWQpIHtcbiAgY29uc3QgYWxsTmF2QnV0dG9ucyA9IGdldEFsbENhcm91c2VsTmF2QnV0dG9ucygpO1xuICBjb25zdCBzZWxlY3RlZE5hdkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjYXJvdXNlbC1uYXYtJHtpZH1gKTtcbiAgY29uc3Qgc2VsZWN0ZWRTbGlkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjYXJvdXNlbC1zbGlkZS0ke2lkfWApO1xuICBjb25zdCBhbGxTbGlkZXMgPSBnZXRBbGxDYXJvdXNlbFNsaWRlcygpO1xuXG4gIGFsbFNsaWRlcy5mb3JFYWNoKChzbGlkZSkgPT4gc2xpZGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG4gIHNlbGVjdGVkU2xpZGUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICBhbGxOYXZCdXR0b25zLmZvckVhY2goKHNsaWRlKSA9PiBzbGlkZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgc2VsZWN0ZWROYXZCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBFVkVOVCBIQU5ETEVSUyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4vLyBtb3ZlIHRvIHRoZSBzZWxlY3RlZCBzbGlkZSB3aGVuIGNsaWNraW5nIG9uIHRoZSBhc3NvY2lhdGVkIG5hdiBidXR0b25cbmV4cG9ydCBmdW5jdGlvbiBjbGlja0Nhcm91c2VsTmF2KGlkKSB7XG4gIGdvdG9TcGVjaWZpY1NsaWRlKGlkKTtcbn1cblxuLy8gbW92ZSByaWdodCB3aGVuIGNsaWNraW5nIG9uIHRoZSByaWdodCBidXR0b25cbmV4cG9ydCBmdW5jdGlvbiBjbGlja0Nhcm91c2VsUmlnaHQoKSB7XG4gIGNvbnN0IGlkID0gZ2V0QWxsQ2Fyb3VzZWxTbGlkZUlkcygpW2dldE5leHRTbGlkZUluZGV4KCldLnJlcGxhY2UoXG4gICAgXCJjYXJvdXNlbC1zbGlkZS1cIixcbiAgICBcIlwiXG4gICk7XG4gIGdvdG9TcGVjaWZpY1NsaWRlKGlkKTtcbn1cblxuLy8gbW92ZSBsZWZ0IHdoZW4gY2xpY2tpbmcgb24gdGhlIHJpZ2h0IGJ1dHRvblxuZXhwb3J0IGZ1bmN0aW9uIGNsaWNrQ2Fyb3VzZWxMZWZ0KCkge1xuICBjb25zdCBpZCA9IGdldEFsbENhcm91c2VsU2xpZGVJZHMoKVtnZXRQcmV2aW91c1NsaWRlSW5kZXgoKV0ucmVwbGFjZShcbiAgICBcImNhcm91c2VsLXNsaWRlLVwiLFxuICAgIFwiXCJcbiAgKTtcbiAgZ290b1NwZWNpZmljU2xpZGUoaWQpO1xufVxuXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgQVVUTyBQUk9HUkVTU0lPTiAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbmV4cG9ydCBmdW5jdGlvbiBjbGlja0Nhcm91c2VsUGxheSgpIHtcbiAgaGFuZGxlQXV0b0FkdmFuY2UoXCJwbGF5XCIpO1xuICBjb25zdCBwbGF5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbCAucGxheS1idXR0b25cIik7XG4gIHBsYXlCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XG5cbiAgY29uc3QgcGF1c2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsIC5wYXVzZS1idXR0b25cIik7XG4gIHBhdXNlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xpY2tDYXJvdXNlbFBhdXNlKCkge1xuICBoYW5kbGVBdXRvQWR2YW5jZShcInBhdXNlXCIpO1xuICBjb25zdCBwbGF5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbCAucGxheS1idXR0b25cIik7XG4gIHBsYXlCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XG5cbiAgY29uc3QgcGF1c2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsIC5wYXVzZS1idXR0b25cIik7XG4gIHBhdXNlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xufVxuXG5sZXQgaW50ZXJ2YWw7XG4vKipcbiAqIEEgZnVuY3Rpb24gdG8gY3JlYXRlIG9yIGNhbmNlbCB0aGUgYXV0byBhZHZhbmNlIHRpbWVyXG4gKiB5b3Ugd2lsbCBuZWV0IHRvIGRlY2xhcmUgaW50ZXJ2YWwgKGxldCBpbnRlcnZhbCkgYmVmb3JlXG4gKiB0aGlzIGZ1bmN0aW9uIHRvIGFsbG93IHRoZSBpbnRlcnZhbCB0byBiZSBjcmVhdGVkIC8gcmVmZW5lbmNlZFxuICogQHBhcmFtIHtzdHJpbmd9IG1vZGUgYSBzdHJpbmcgY29udGFpbmluZyAncGxheScgb3IgJ3BhdXNlJyB0byBpbmRpY2F0ZSB0aGUgbW9kZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQXV0b0FkdmFuY2UobW9kZSkge1xuICBjb25zdCBwbGF5aW5nID0gbW9kZSA9PT0gXCJwbGF5XCIgPyB0cnVlIDogZmFsc2U7XG4gIGlmIChwbGF5aW5nKSB7XG4gICAgLy8gc3RhcnQgYW4gaW50ZXJ2YWwgdGltZXIgYW5kIGNhcHR1cmUgaXRzIHJlZmVyZW5jZVxuICAgIGludGVydmFsID0gd2luZG93LnNldEludGVydmFsKGNsaWNrQ2Fyb3VzZWxSaWdodCwgNTAwMCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gY2FuY2VsIHRoZSByZWZlcmVuY2UgeW91IGNhcHR1cmVkXG4gICAgd2luZG93LmNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9XG59XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHtcbiAgRGl2LFxuICBMYWJlbCxcbiAgU3BhbixcbiAgRGF0YWxpc3QsXG4gIE9wdGlvbixcbiAgU2VsZWN0LFxufSBmcm9tIFwiLi4vLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHsgY291bnRyaWVzIH0gZnJvbSBcIi4vY291bnRyaWVzTGlzdFwiO1xuaW1wb3J0IHsgaGFuZGxlQ291bnRyeUlucHV0IH0gZnJvbSBcIi4vY291bnRyeS1pbnB1dC12YWxpZGF0aW9uXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuY29uc3QgY29tcG9uZW50VXVpZCA9IHV1aWR2NCgpO1xuZXhwb3J0IGNvbnN0IGNvdW50cnlJbnB1dElkID0gYGVtYWlsLWlucHV0LSR7Y29tcG9uZW50VXVpZH1gO1xuXG5jb25zdCBDb3VudHJ5SW5wdXQgPSAoKSA9PiB7XG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAgeyBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcyB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBMYWJlbCh7XG4gICAgICAgIGZvcjogYCR7Y291bnRyeUlucHV0SWR9YCxcbiAgICAgICAgaW5uZXJIVE1MOiBgV2hhdCBjb3VudHJ5IGFyZSB5b3UgZnJvbT8gJHtcbiAgICAgICAgICBTcGFuKHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJyZXF1aXJlZC1tYXJrZXJcIixcbiAgICAgICAgICAgIGlubmVyVGV4dDogXCIqXCIsXG4gICAgICAgICAgfSkub3V0ZXJIVE1MXG4gICAgICAgIH1gLFxuICAgICAgfSksXG5cbiAgICAgIFNlbGVjdChcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJjb3VudHJ5LWlucHV0XCIsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgb25pbnB1dCgpIHtcbiAgICAgICAgICAgIGhhbmRsZUNvdW50cnlJbnB1dCgpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBPcHRpb24oKSxcbiAgICAgICAgICAuLi5jb3VudHJpZXMubWFwKChjb3VudHJ5KSA9PiBPcHRpb24oeyBpbm5lclRleHQ6IGNvdW50cnkgfSkpLFxuICAgICAgICBdXG4gICAgICApLFxuXG4gICAgICBEaXYoeyBjbGFzc05hbWU6IFwiZXJyb3JcIiB9KSxcbiAgICAgIERhdGFsaXN0KHsgaWQ6IFwiY291bnRyaWVzXCIgfSwgW1xuICAgICAgICAuLi5jb3VudHJpZXMubWFwKChjb3VudHJ5KSA9PiBPcHRpb24oeyBpbm5lclRleHQ6IGNvdW50cnkgfSkpLFxuICAgICAgXSksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50cnlJbnB1dDtcbiIsImV4cG9ydCBjb25zdCBjb3VudHJpZXMgPSBbXG4gIFwiQWZnaGFuaXN0YW5cIixcbiAgXCJBbGJhbmllblwiLFxuICBcIkFsZ2VyaWV0XCIsXG4gIFwiQW5nb2xhXCIsXG4gIFwiQW50aWd1YSBvY2ggQmFyYnVkYVwiLFxuICBcIkFyZ2VudGluYVwiLFxuICBcIkF1c3RyYWxpZW5cIixcbiAgXCJBemVyYmFqZHpqYW5cIixcbiAgXCLDlnN0ZXJyaWtlXCIsXG4gIFwiw5ZzdHRpbW9yXCIsXG4gIFwiQmFoYW1hc1wiLFxuICBcIkJhaHJhaW5cIixcbiAgXCJCYW5nbGFkZXNoXCIsXG4gIFwiQmFyYmFkb3NcIixcbiAgXCJCZWxnaWVuXCIsXG4gIFwiQmVuaW5cIixcbiAgXCJCZXJtdWRhXCIsXG4gIFwiQmh1dGFuXCIsXG4gIFwiQm9saXZpYVwiLFxuICBcIkJvc25pZW4gb2NoIEhlcmNlZ292aW5hXCIsXG4gIFwiQm90c3dhbmFcIixcbiAgXCJCcmFzaWxpZW5cIixcbiAgXCJCcnVuZWkgRGFydXNzYWxhbVwiLFxuICBcIkJ1bGdhcmllblwiLFxuICBcIkJ1cmtpbmEgRmFzb1wiLFxuICBcIkJ1cnVuZGlcIixcbiAgXCJDZW50cmFsYWZyaWthbnNrYSBSZXB1Ymxpa2VuXCIsXG4gIFwiQ2hpbGVcIixcbiAgXCJDb2xvbWJpYVwiLFxuICBcIkNvc3RhIFJpY2FcIixcbiAgXCJDeXBlcm5cIixcbiAgXCJEYW5tYXJrXCIsXG4gIFwiRGVtb2tyYXRpc2thIFJlcHVibGlrZW4gS29uZ29cIixcbiAgXCJEb21pbmlrYW5za2EgUmVwdWJsaWtlblwiLFxuICBcIkVjdWFkb3JcIixcbiAgXCJFZ3lwdGVuXCIsXG4gIFwiRWwgU2FsdmFkb3JcIixcbiAgXCJFbGZlbmJlbnNrdXN0ZW5cIixcbiAgXCJFc3RsYW5kXCIsXG4gIFwiRXRpb3BpZW5cIixcbiAgXCJGw6Ryw7Zhcm5hXCIsXG4gIFwiRsO2cmVuYWRlIEFyYWJlbWlyYXRlblwiLFxuICBcIkZpbGlwcGluZXJuYVwiLFxuICBcIkZpbmxhbmRcIixcbiAgXCJGcmFua3Jpa2VcIixcbiAgXCJHYWJvblwiLFxuICBcIkdlb3JnaWVuXCIsXG4gIFwiR2hhbmFcIixcbiAgXCJHaWJyYWx0YXJcIixcbiAgXCJHcsO2bmxhbmRcIixcbiAgXCJHcmVrbGFuZFwiLFxuICBcIkdyZW5hZGFcIixcbiAgXCJHdWF0ZW1hbGFcIixcbiAgXCJIb25kdXJhc1wiLFxuICBcIkhvbmcgS29uZ1wiLFxuICBcIkluZGllblwiLFxuICBcIkluZG9uZXNpZW5cIixcbiAgXCJJcmFrXCIsXG4gIFwiSXJhblwiLFxuICBcIklybGFuZFwiLFxuICBcIklzbGFuZFwiLFxuICBcIklzcmFlbFwiLFxuICBcIkl0YWxpZW5cIixcbiAgXCJKYW1haWNhXCIsXG4gIFwiSmFwYW5cIixcbiAgXCJKZW1lblwiLFxuICBcIkplcnNleVwiLFxuICBcIkpvcmRhbmllblwiLFxuICBcIkthbWJvZGphXCIsXG4gIFwiS2FuYWRhXCIsXG4gIFwiS2F6YWtzdGFuXCIsXG4gIFwiS2VueWFcIixcbiAgXCJLaW5hXCIsXG4gIFwiS2lyaWJhdGlcIixcbiAgXCJLcm9hdGllblwiLFxuICBcIkt1YmFcIixcbiAgXCJLdXdhaXRcIixcbiAgXCJMYW9zXCIsXG4gIFwiTGV0dGxhbmRcIixcbiAgXCJMaWJhbm9uXCIsXG4gIFwiTGlieWVuXCIsXG4gIFwiTGl0YXVlblwiLFxuICBcIkx1eGVtYnVyZ1wiLFxuICBcIk1hZGFnYXNrYXJcIixcbiAgXCJNYWtlZG9uaWVuXCIsXG4gIFwiTWFsYXdpXCIsXG4gIFwiTWFsYXlzaWFcIixcbiAgXCJNYWxkaXZlcm5hXCIsXG4gIFwiTWFsaVwiLFxuICBcIk1hbHRhXCIsXG4gIFwiTWFyb2Nrb1wiLFxuICBcIk1hdXJpdGl1c1wiLFxuICBcIk1leGlrb1wiLFxuICBcIk1vY2FtYmlxdWVcIixcbiAgXCJNb25hY29cIixcbiAgXCJNb25nb2xpZXRcIixcbiAgXCJNeWFubWFyXCIsXG4gIFwiTmFtaWJpYVwiLFxuICBcIk5lZGVybMOkbmRlcm5hXCIsXG4gIFwiTmVkZXJsw6RuZHNrYSBBbnRpbGxlcm5hXCIsXG4gIFwiTmVwYWxcIixcbiAgXCJOaWNhcmFndWFcIixcbiAgXCJOaWdlclwiLFxuICBcIk5pZ2VyaWFcIixcbiAgXCJOb3JnZVwiLFxuICBcIk55YSBaZWVsYW5kXCIsXG4gIFwiT21hblwiLFxuICBcIlBha2lzdGFuXCIsXG4gIFwiUGFuYW1hXCIsXG4gIFwiUGFyYWd1YXlcIixcbiAgXCJQZXJ1XCIsXG4gIFwiUG9sZW5cIixcbiAgXCJQb3J0dWdhbFwiLFxuICBcIlB1ZXJ0byBSaWNvXCIsXG4gIFwiUWF0YXJcIixcbiAgXCJSdW3DpG5pZW5cIixcbiAgXCJSd2FuZGFcIixcbiAgXCJSeXNzbGFuZFwiLFxuICBcIlNhaW50IEx1Y2lhXCIsXG4gIFwiU2FpbnQgVmluY2VudCBvY2ggR3JlbmFkaW5lcm5hXCIsXG4gIFwiU2Ftb2FcIixcbiAgXCJTYW4gTWFyaW5vXCIsXG4gIFwiU2FvIFRvbWUgb2NoIFByaW5jaXBlXCIsXG4gIFwiU2F1ZGlhcmFiaWVuXCIsXG4gIFwiU2Nod2VpelwiLFxuICBcIlNlbmVnYWxcIixcbiAgXCJTZXJiaWVuIG9jaCBNb250ZW5lZ3JvXCIsXG4gIFwiU2V5Y2hlbGxlcm5hXCIsXG4gIFwiU2llcnJhIExlb25lXCIsXG4gIFwiU2luZ2Fwb3JlXCIsXG4gIFwiU2xvdmFraWVuXCIsXG4gIFwiU2xvdmVuaWVuXCIsXG4gIFwiU29tYWxpYVwiLFxuICBcIlNwYW5pZW5cIixcbiAgXCJTcmkgTGFua2FcIixcbiAgXCJTdWRhblwiLFxuICBcIlN1cmluYW1cIixcbiAgXCJTdmVyaWdlXCIsXG4gIFwiU3dhemlsYW5kXCIsXG4gIFwiU3lkYWZyaWthXCIsXG4gIFwiU3lka29yZWFcIixcbiAgXCJTeXJpZW5cIixcbiAgXCJUYWl3YW5cIixcbiAgXCJUYW56YW5pYVwiLFxuICBcIlRoYWlsYW5kXCIsXG4gIFwiVGplY2tpZW5cIixcbiAgXCJUcmluaWRhZCBvY2ggVG9iYWdvXCIsXG4gIFwiVHVuaXNpZW5cIixcbiAgXCJUdXJraWV0XCIsXG4gIFwiVHlza2xhbmRcIixcbiAgXCJVZ2FuZGFcIixcbiAgXCJVa3JhaW5hXCIsXG4gIFwiVW5nZXJuXCIsXG4gIFwiVXJ1Z3VheVwiLFxuICBcIlVTQVwiLFxuICBcIlV6YmVraXN0YW5cIixcbiAgXCJWZW5lenVlbGFcIixcbiAgXCJWaWV0bmFtXCIsXG4gIFwiVml0cnlzc2xhbmRcIixcbiAgXCJaYW1iaWFcIixcbiAgXCJaaW1iYWJ3ZVwiLFxuXTtcbiIsImltcG9ydCB7IGNsZWFyRXJyb3IgfSBmcm9tIFwiLi4vZm9ybS12YWxpZGF0aW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb3VudHJ5SW5wdXQoKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFzc2lnbm1lbnQgLmNvdW50cnktaW5wdXRcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb3VudHJ5SW5wdXRFcnJvcigpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXNzaWdubWVudCAuY291bnRyeS1pbnB1dCArIC5lcnJvclwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50cnlJc1ZhbGlkKCkge1xuICByZXR1cm4gZ2V0Q291bnRyeUlucHV0KCkudmFsaWRpdHkudmFsaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDb3VudHJ5SW5wdXQoKSB7XG4gIGNvbnN0IGNvdW50cnkgPSBnZXRDb3VudHJ5SW5wdXQoKTtcbiAgY29uc3QgZXJyb3IgPSBnZXRDb3VudHJ5SW5wdXRFcnJvcigpO1xuXG4gIGlmIChjb3VudHJ5LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgY2xlYXJFcnJvcihlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dDb3VudHJ5RXJyb3IoKSB7XG4gIGNvbnN0IGVycm9yID0gZ2V0Q291bnRyeUlucHV0RXJyb3IoKTtcbiAgbGV0IGVycm9yTWVzc2FnZSA9IFwiUGxlYXNlIHNlbGVjdCBhbiBvcHRpb24gZnJvbSB0aGUgbGlzdC5cIjtcbiAgZXJyb3IuaW5uZXJUZXh0ID0gZXJyb3JNZXNzYWdlO1xuICBlcnJvci5jbGFzc05hbWUgPSBcImVycm9yIGFjdGl2ZVwiO1xufVxuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IERpdiwgSW5wdXQsIExhYmVsLCBTcGFuIH0gZnJvbSBcIi4uLy4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCB7IGhhbmRsZUVtYWlsSW5wdXQgfSBmcm9tIFwiLi9lbWFpbC1pbnB1dC12YWxpZGF0aW9uXCI7XG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cbmNvbnN0IGNvbXBvbmVudFV1aWQgPSB1dWlkdjQoKTtcbmV4cG9ydCBjb25zdCBlbWFpbElucHV0SWQgPSBgZW1haWwtaW5wdXQtJHtjb21wb25lbnRVdWlkfWA7XG5cbmNvbnN0IEVtYWlsSW5wdXQgPSAoKSA9PiB7XG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAgeyBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcyB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBMYWJlbCh7XG4gICAgICAgIGZvcjogYCR7ZW1haWxJbnB1dElkfWAsXG4gICAgICAgIGlubmVySFRNTDogYFBsZWFzZSBlbnRlciBhbiBlbWFpbCBhZGRyZXNzICR7XG4gICAgICAgICAgU3Bhbih7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwicmVxdWlyZWQtbWFya2VyXCIsXG4gICAgICAgICAgICBpbm5lclRleHQ6IFwiKlwiLFxuICAgICAgICAgIH0pLm91dGVySFRNTFxuICAgICAgICB9YCxcbiAgICAgIH0pLFxuICAgICAgSW5wdXQoe1xuICAgICAgICBpZDogYCR7ZW1haWxJbnB1dElkfWAsXG4gICAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIG9uaW5wdXQoKSB7XG4gICAgICAgICAgaGFuZGxlRW1haWxJbnB1dCgpO1xuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBEaXYoeyBjbGFzc05hbWU6IFwiZXJyb3JcIiB9KSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRW1haWxJbnB1dDtcbiIsImltcG9ydCB7IGNsZWFyRXJyb3IgfSBmcm9tIFwiLi4vZm9ybS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBlbWFpbElucHV0SWQgfSBmcm9tIFwiLi9FbWFpbElucHV0XCI7XG5leHBvcnQgZnVuY3Rpb24gZ2V0RW1haWxJbnB1dCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVtYWlsSW5wdXRJZCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RW1haWxJbnB1dEVycm9yKCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZW1haWxJbnB1dElkfSArIC5lcnJvcmApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW1haWxJc1ZhbGlkKCkge1xuICByZXR1cm4gZ2V0RW1haWxJbnB1dCgpLnZhbGlkaXR5LnZhbGlkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRW1haWxJbnB1dCgpIHtcbiAgaWYgKGVtYWlsSXNWYWxpZCgpKSB7XG4gICAgY2xlYXJFcnJvcihnZXRFbWFpbElucHV0RXJyb3IoKSk7XG4gIH0gZWxzZSB7XG4gICAgc2hvd0VtYWlsRXJyb3IoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0VtYWlsRXJyb3IoKSB7XG4gIGNvbnN0IGVtYWlsID0gZ2V0RW1haWxJbnB1dCgpO1xuICBjb25zdCBlcnJvciA9IGdldEVtYWlsSW5wdXRFcnJvcigpO1xuICBsZXQgZXJyb3JNZXNzYWdlID0gXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLlwiO1xuXG4gIGlmIChlbWFpbC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICBlcnJvck1lc3NhZ2UgPSBcIllvdSBtdXN0IGVudGVyIGFuIGVtYWlsIGFkZHJlc3MgdG8gY29udGludWUuXCI7XG4gIH1cblxuICBlcnJvci5pbm5lclRleHQgPSBlcnJvck1lc3NhZ2U7XG4gIGVycm9yLmNsYXNzTmFtZSA9IFwiZXJyb3IgYWN0aXZlXCI7XG59XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRGl2LCBMYWJlbCwgSW5wdXQsIFNwYW4gfSBmcm9tIFwiLi4vLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHsgaGFuZGxlWmlwQ29kZUlucHV0IH0gZnJvbSBcIi4vemlwLWNvZGUtaW5wdXQtdmFsaWRhdGlvblwiO1xuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5jb25zdCBjb21wb25lbnRVdWlkID0gdXVpZHY0KCk7XG5leHBvcnQgY29uc3QgemlwQ29kZUlucHV0SWQgPSBgemlwLWNvZGUtaW5wdXQtJHtjb21wb25lbnRVdWlkfWA7XG5jb25zdCBaaXBDb2RlSW5wdXQgPSAoKSA9PiB7XG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAgeyBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcyB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBMYWJlbCh7XG4gICAgICAgIGZvcjogYCR7emlwQ29kZUlucHV0SWR9YCxcbiAgICAgICAgaW5uZXJIVE1MOiBgUGxlYXNlIGVudGVyIHlvdXIgemlwIGNvZGUgJHtcbiAgICAgICAgICBTcGFuKHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJyZXF1aXJlZC1tYXJrZXJcIixcbiAgICAgICAgICAgIGlubmVyVGV4dDogXCIqXCIsXG4gICAgICAgICAgfSkub3V0ZXJIVE1MXG4gICAgICAgIH1gLFxuICAgICAgfSksXG4gICAgICBJbnB1dCh7XG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgcGF0dGVybjogXCJeWzAtOV17NX0oPzotWzAtOV17NH0pPyRcIixcbiAgICAgICAgaWQ6IGAke3ppcENvZGVJbnB1dElkfWAsXG4gICAgICAgIG9uaW5wdXQoKSB7XG4gICAgICAgICAgaGFuZGxlWmlwQ29kZUlucHV0KCk7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIERpdih7IGNsYXNzTmFtZTogXCJlcnJvclwiIH0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBaaXBDb2RlSW5wdXQ7XG4iLCJpbXBvcnQgeyBjbGVhckVycm9yIH0gZnJvbSBcIi4uL2Zvcm0tdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgemlwQ29kZUlucHV0SWQgfSBmcm9tIFwiLi9aaXBDb2RlSW5wdXRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFppcENvZGVJbnB1dCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHppcENvZGVJbnB1dElkKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRaaXBDb2RlSW5wdXRFcnJvcigpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3ppcENvZGVJbnB1dElkfSArIC5lcnJvcmApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gemlwQ29kZUlzVmFsaWQoKSB7XG4gIHJldHVybiBnZXRaaXBDb2RlSW5wdXQoKS52YWxpZGl0eS52YWxpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVppcENvZGVJbnB1dCgpIHtcbiAgaWYgKHppcENvZGVJc1ZhbGlkKCkpIHtcbiAgICBjbGVhckVycm9yKGdldFppcENvZGVJbnB1dEVycm9yKCkpO1xuICB9IGVsc2Uge1xuICAgIHNob3daaXBDb2RlRXJyb3IoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1ppcENvZGVFcnJvcigpIHtcbiAgY29uc3QgemlwQ29kZSA9IGdldFppcENvZGVJbnB1dCgpO1xuICBjb25zdCBlcnJvciA9IGdldFppcENvZGVJbnB1dEVycm9yKCk7XG4gIGxldCBlcnJvck1lc3NhZ2UgPSBcIkVudGVyIGEgdmFsaWQgemlwIGNvZGUgZm9ybWF0LiAoNTU1NTUgb3IgNTU1NTUtNDQ0NClcIjtcblxuICBpZiAoemlwQ29kZS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICBlcnJvck1lc3NhZ2UgPSBcIllvdSBtdXN0IGVudGVyIGEgdmFsaWQgemlwIGNvZGUgdG8gY29udGludWUuXCI7XG4gIH0gZWxzZSB7XG4gIH1cblxuICBlcnJvci5pbm5lclRleHQgPSBlcnJvck1lc3NhZ2U7XG4gIGVycm9yLmNsYXNzTmFtZSA9IFwiZXJyb3IgYWN0aXZlXCI7XG59XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRGl2LCBJbnB1dCwgTGFiZWwsIFNwYW4gfSBmcm9tIFwiLi4vLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHsgaGFuZGxlQ29uZmlybVBhc3N3b3JkSW5wdXQgfSBmcm9tIFwiLi9wYXNzd29yZHMtdmFsaWRhdGlvblwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cbmNvbnN0IGNvbXBvbmVudFV1aWQgPSB1dWlkdjQoKTtcbmV4cG9ydCBjb25zdCBjb25maXJtUGFzc3dvcmRJbnB1dElkID0gYGNvbmZpcm0tcGFzc3dvcmQtaW5wdXQtJHtjb21wb25lbnRVdWlkfWA7XG5cbmNvbnN0IENvbmZpcm1QYXNzd29yZElucHV0ID0gKCkgPT4ge1xuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcIlwiO1xuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRGl2KFxuICAgIHsgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgTGFiZWwoe1xuICAgICAgICBmb3I6IGAke2NvbmZpcm1QYXNzd29yZElucHV0SWR9YCxcbiAgICAgICAgaW5uZXJIVE1MOiBgQ29uZmlybSBwYXNzd29yZCAke1xuICAgICAgICAgIFNwYW4oe1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBcInJlcXVpcmVkLW1hcmtlclwiLFxuICAgICAgICAgICAgaW5uZXJUZXh0OiBcIipcIixcbiAgICAgICAgICB9KS5vdXRlckhUTUxcbiAgICAgICAgfWAsXG4gICAgICB9KSxcbiAgICAgIElucHV0KHtcbiAgICAgICAgaWQ6IGAke2NvbmZpcm1QYXNzd29yZElucHV0SWR9YCxcbiAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgb25pbnB1dCgpIHtcbiAgICAgICAgICBoYW5kbGVDb25maXJtUGFzc3dvcmRJbnB1dCgpO1xuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBEaXYoeyBjbGFzc05hbWU6IFwiZXJyb3JcIiB9KSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlybVBhc3N3b3JkSW5wdXQ7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRGl2LCBJbnB1dCwgTGFiZWwsIFNwYW4gfSBmcm9tIFwiLi4vLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHtcbiAgaGFuZGxlUGFzc3dvcmRJbnB1dCxcbiAgcGFzc3dvcmRSZWdleFN0cmluZyxcbn0gZnJvbSBcIi4vcGFzc3dvcmRzLXZhbGlkYXRpb25cIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5jb25zdCBjb21wb25lbnRVdWlkID0gdXVpZHY0KCk7XG5leHBvcnQgY29uc3QgcGFzc3dvcmRJbnB1dElkID0gYHBhc3N3b3JkLWlucHV0LSR7Y29tcG9uZW50VXVpZH1gO1xuXG5jb25zdCBQYXNzd29yZElucHV0ID0gKCkgPT4ge1xuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcIlwiO1xuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRGl2KFxuICAgIHsgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgTGFiZWwoe1xuICAgICAgICBmb3I6IGAke3Bhc3N3b3JkSW5wdXRJZH1gLFxuICAgICAgICBpbm5lckhUTUw6IGBDcmVhdGUgeW91ciBwYXNzd29yZCAke1xuICAgICAgICAgIFNwYW4oe1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBcInJlcXVpcmVkLW1hcmtlclwiLFxuICAgICAgICAgICAgaW5uZXJUZXh0OiBcIipcIixcbiAgICAgICAgICB9KS5vdXRlckhUTUxcbiAgICAgICAgfWAsXG4gICAgICB9KSxcbiAgICAgIElucHV0KHtcbiAgICAgICAgaWQ6IGAke3Bhc3N3b3JkSW5wdXRJZH1gLFxuICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBwYXR0ZXJuOiBwYXNzd29yZFJlZ2V4U3RyaW5nLFxuICAgICAgICBvbmlucHV0KCkge1xuICAgICAgICAgIGhhbmRsZVBhc3N3b3JkSW5wdXQoKTtcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgRGl2KHsgY2xhc3NOYW1lOiBcImVycm9yXCIgfSksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhc3N3b3JkSW5wdXQ7XG4iLCJpbXBvcnQgeyBjbGVhckVycm9yIH0gZnJvbSBcIi4uL2Zvcm0tdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgY29uZmlybVBhc3N3b3JkSW5wdXRJZCB9IGZyb20gXCIuL0NvbmZpcm1QYXNzd29yZElucHV0XCI7XG5pbXBvcnQgeyBwYXNzd29yZElucHV0SWQgfSBmcm9tIFwiLi9QYXNzd29yZElucHV0XCI7XG5cbmV4cG9ydCBjb25zdCBwYXNzd29yZFJlZ2V4U3RyaW5nID1cbiAgXCJeKD89LipkKSg/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlthLXpBLVpdKS57MTIsfSRcIjtcblxuY29uc3QgcGFzc3dvcmRSZWdleCA9IG5ldyBSZWdFeHAocGFzc3dvcmRSZWdleFN0cmluZyk7XG5cbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBQQVNTV09SRCBJTlBVVCAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXNzd29yZElucHV0KCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFzc3dvcmRJbnB1dElkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhc3N3b3JkSW5wdXRFcnJvcigpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Bhc3N3b3JkSW5wdXRJZH0gKyAuZXJyb3JgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhc3N3b3JkSXNWYWxpZCgpIHtcbiAgcmV0dXJuIGdldFBhc3N3b3JkSW5wdXQoKS52YWxpZGl0eS52YWxpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhc3N3b3JkSW5wdXRWYWx1ZSgpIHtcbiAgcmV0dXJuIGdldFBhc3N3b3JkSW5wdXQoKS52YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVBhc3N3b3JkSW5wdXQoKSB7XG4gIGlmIChwYXNzd29yZElzVmFsaWQoKSkge1xuICAgIGNsZWFyRXJyb3IoZ2V0UGFzc3dvcmRJbnB1dEVycm9yKCkpO1xuICB9IGVsc2Uge1xuICAgIHNob3dQYXNzd29yZEVycm9yKCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dQYXNzd29yZEVycm9yKCkge1xuICBjb25zdCBwYXNzd29yZCA9IGdldFBhc3N3b3JkSW5wdXQoKTtcbiAgY29uc3QgZXJyb3IgPSBnZXRQYXNzd29yZElucHV0RXJyb3IoKTtcbiAgbGV0IGVycm9yTWVzc2FnZSA9XG4gICAgXCJWYWxpZCBwYXNzd29yZHMgYXJlIGF0IGxlYXNlIDEyIGNoYXJhY3RlcnMgbG9uZyBhbmQgY29udGFpbiBhdCBsZWFzZSBvbmUgdXBwZXJjYXNlIGxldHRlciBhbmQgb25lIGxvd2VyY2FzZSBsZXR0ZXIuXCI7XG5cbiAgaWYgKHBhc3N3b3JkLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIGVycm9yTWVzc2FnZSA9IFwiWW91IG11c3QgZW50ZXIgYSBwYXNzd29yZCB0byBjb250aW51ZS5cIjtcbiAgfVxuXG4gIGVycm9yLmlubmVyVGV4dCA9IGVycm9yTWVzc2FnZTtcbiAgZXJyb3IuY2xhc3NOYW1lID0gXCJlcnJvciBhY3RpdmVcIjtcbn1cblxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIENPTkZJUk0gUEFTU1dPUkQgSU5QVVQgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29uZmlybVBhc3N3b3JkSW5wdXQoKSB7XG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maXJtUGFzc3dvcmRJbnB1dElkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbmZpcm1QYXNzd29yZElucHV0RXJyb3IoKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjb25maXJtUGFzc3dvcmRJbnB1dElkfSArIC5lcnJvcmApO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbmZpcm1QYXNzd29yZElucHV0VmFsdWUoKSB7XG4gIHJldHVybiBnZXRDb25maXJtUGFzc3dvcmRJbnB1dCgpLnZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlybVBhc3N3b3JkSXNWYWxpZCgpIHtcbiAgcmV0dXJuIGdldENvbmZpcm1QYXNzd29yZElucHV0KCkudmFsaWRpdHkudmFsaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDb25maXJtUGFzc3dvcmRJbnB1dCgpIHtcbiAgY29uc3QgaW5wdXQgPSBnZXRDb25maXJtUGFzc3dvcmRJbnB1dCgpO1xuICBpZiAoZ2V0UGFzc3dvcmRJbnB1dFZhbHVlKCkgPT09IGdldENvbmZpcm1QYXNzd29yZElucHV0VmFsdWUoKSkge1xuICAgIGlucHV0LnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuICB9IGVsc2Uge1xuICAgIGlucHV0LnNldEN1c3RvbVZhbGlkaXR5KFwiaW52YWxpZFwiKTtcbiAgfVxuXG4gIGlmIChpbnB1dC52YWxpZGl0eS52YWxpZCkge1xuICAgIGNsZWFyRXJyb3IoZ2V0Q29uZmlybVBhc3N3b3JkSW5wdXRFcnJvcigpKTtcbiAgfSBlbHNlIHtcbiAgICBzaG93Q29uZmlybVBhc3N3b3JkRXJyb3IoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0NvbmZpcm1QYXNzd29yZEVycm9yKCkge1xuICBjb25zdCBwYXNzd29yZCA9IGdldENvbmZpcm1QYXNzd29yZElucHV0KCk7XG4gIGNvbnN0IGVycm9yID0gZ2V0Q29uZmlybVBhc3N3b3JkSW5wdXRFcnJvcigpO1xuICBsZXQgZXJyb3JNZXNzYWdlID0gXCJQYXNzd29yZHMgZG8gbm90IG1hdGNoLlwiO1xuXG4gIGlmIChwYXNzd29yZC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICBlcnJvck1lc3NhZ2UgPSBcIllvdSBtdXN0IGNvbmZpcm0geW91ciBwYXNzd29yZCB0byBjb250aW51ZS5cIjtcbiAgfVxuXG4gIGVycm9yLmlubmVyVGV4dCA9IGVycm9yTWVzc2FnZTtcbiAgZXJyb3IuY2xhc3NOYW1lID0gXCJlcnJvciBhY3RpdmVcIjtcbn1cbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgU3VibWl0QnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcIlwiO1xuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gQnV0dG9uKFxuICAgIHsgY2xhc3NOYW1lOiBcIlwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMsIGlubmVyVGV4dDogXCJTdWJtaXRcIiB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN1Ym1pdEJ1dHRvbjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYsIEZvcm0sIFNwYW4gfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgeyBoYW5kbGVGb3JtU3VibWl0IH0gZnJvbSBcIi4vZm9ybS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgWmlwQ29kZUlucHV0IGZyb20gXCIuL0lucHV0L1ppcENvZGVJbnB1dFwiO1xuaW1wb3J0IENvdW50cnlJbnB1dCBmcm9tIFwiLi9Db3VudHJ5SW5wdXQvQ291bnRyeUlucHV0XCI7XG5pbXBvcnQgRW1haWxJbnB1dCBmcm9tIFwiLi9FbWFpbElucHV0L0VtYWlsSW5wdXRcIjtcbmltcG9ydCBTdWJtaXRCdXR0b24gZnJvbSBcIi4vU3VibWl0QnV0dG9uXCI7XG5pbXBvcnQgUGFzc3dvcmRJbnB1dCBmcm9tIFwiLi9QYXNzd29yZElucHV0cy9QYXNzd29yZElucHV0XCI7XG5pbXBvcnQgQ29uZmlybVBhc3N3b3JkSW5wdXQgZnJvbSBcIi4vUGFzc3dvcmRJbnB1dHMvQ29uZmlybVBhc3N3b3JkSW5wdXRcIjtcblxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuY29uc3QgY29tcG9uZW50VXVpZCA9IHV1aWR2NCgpO1xuZXhwb3J0IGNvbnN0IGZvcm1JZCA9IGBmb3JtLSR7Y29tcG9uZW50VXVpZH1gO1xuXG5jb25zdCBWYWxpZGF0ZWRGb3JtID0gKCkgPT4ge1xuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcIlwiO1xuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRGl2KFxuICAgIHsgY2xhc3NOYW1lOiBcImFzc2lnbm1lbnRcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIEZvcm0oXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogZm9ybUlkLFxuICAgICAgICAgIG5vVmFsaWRhdGU6IHRydWUsXG4gICAgICAgICAgb25zdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgICAgIGhhbmRsZUZvcm1TdWJtaXQoZXZlbnQpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBFbWFpbElucHV0KCksXG4gICAgICAgICAgQ291bnRyeUlucHV0KCksXG4gICAgICAgICAgWmlwQ29kZUlucHV0KCksXG4gICAgICAgICAgUGFzc3dvcmRJbnB1dCgpLFxuICAgICAgICAgIENvbmZpcm1QYXNzd29yZElucHV0KCksXG4gICAgICAgICAgU3VibWl0QnV0dG9uKCksXG4gICAgICAgICAgRGl2KHtcbiAgICAgICAgICAgIGlubmVySFRNTDogYCR7XG4gICAgICAgICAgICAgIFNwYW4oeyBjbGFzc05hbWU6IFwicmVxdWlyZWQtbWFya2VyXCIsIGlubmVyVGV4dDogXCIqXCIgfSkub3V0ZXJIVE1MXG4gICAgICAgICAgICB9IGluZGljYXRlcyBhIHJlcXVpcmVkIGZpZWxkYCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdGVkRm9ybTtcbiIsImltcG9ydCB7XG4gIHNob3dDb3VudHJ5RXJyb3IsXG4gIGNvdW50cnlJc1ZhbGlkLFxufSBmcm9tIFwiLi9Db3VudHJ5SW5wdXQvY291bnRyeS1pbnB1dC12YWxpZGF0aW9uXCI7XG5cbmltcG9ydCB7XG4gIHNob3dFbWFpbEVycm9yLFxuICBlbWFpbElzVmFsaWQsXG59IGZyb20gXCIuL0VtYWlsSW5wdXQvZW1haWwtaW5wdXQtdmFsaWRhdGlvblwiO1xuXG5pbXBvcnQge1xuICBzaG93WmlwQ29kZUVycm9yLFxuICB6aXBDb2RlSXNWYWxpZCxcbn0gZnJvbSBcIi4vSW5wdXQvemlwLWNvZGUtaW5wdXQtdmFsaWRhdGlvblwiO1xuaW1wb3J0IHtcbiAgY29uZmlybVBhc3N3b3JkSXNWYWxpZCxcbiAgcGFzc3dvcmRJc1ZhbGlkLFxuICBzaG93Q29uZmlybVBhc3N3b3JkRXJyb3IsXG4gIHNob3dQYXNzd29yZEVycm9yLFxufSBmcm9tIFwiLi9QYXNzd29yZElucHV0cy9wYXNzd29yZHMtdmFsaWRhdGlvblwiO1xuXG5mdW5jdGlvbiBnZXRGb3JtKCkge31cblxuZnVuY3Rpb24gYWxsSW5wdXRzVmFsaWQoZm9ybSkge1xuICBjb25zdCBpbnB1dHMgPSBbXG4gICAgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpLFxuICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWxlY3RcIiksXG4gIF07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBpbnB1dFZhbGlkaXR5ID0gaW5wdXRzW2ldLnZhbGlkaXR5LnZhbGlkO1xuICAgIGlmICghaW5wdXRWYWxpZGl0eSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUZvcm1TdWJtaXQoZXZlbnQpIHtcbiAgaWYgKGFsbElucHV0c1ZhbGlkKCkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKFwiU1VCTUlUVEVEIVwiKTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIWVtYWlsSXNWYWxpZCgpKSB7XG4gICAgICBzaG93RW1haWxFcnJvcigpO1xuICAgIH1cbiAgICBpZiAoIWNvdW50cnlJc1ZhbGlkKCkpIHtcbiAgICAgIHNob3dDb3VudHJ5RXJyb3IoKTtcbiAgICB9XG4gICAgaWYgKCF6aXBDb2RlSXNWYWxpZCgpKSB7XG4gICAgICBzaG93WmlwQ29kZUVycm9yKCk7XG4gICAgfVxuICAgIGlmICghcGFzc3dvcmRJc1ZhbGlkKCkpIHtcbiAgICAgIHNob3dQYXNzd29yZEVycm9yKCk7XG4gICAgfVxuXG4gICAgaWYgKCFjb25maXJtUGFzc3dvcmRJc1ZhbGlkKCkpIHtcbiAgICAgIHNob3dDb25maXJtUGFzc3dvcmRFcnJvcigpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJFcnJvcihlcnJvckVsZW1lbnQpIHtcbiAgZXJyb3JFbGVtZW50LmlubmVyVGV4dCA9IFwiXCI7XG4gIGVycm9yRWxlbWVudC5jbGFzc05hbWUgPSBcImVycm9yXCI7XG59XG4iLCIvKipcbiAqIFRoaXMgRnVuY3Rpb24gYWxsb3dzIHlvdSB0byBjcmVhdGUgYSBkb20gZWxlbWVudCB3aXRoIGl0cyBpbml0aWFsIGF0dHJpYnV0ZXMgYW5kIGNoaWxkIGVsZW1lbnRzIGRlZmluZWQgYnkgYSBwYXNzZWQtaW4gb2JqZWN0IGFuZCBhcnJheSBvZiBjaGlsZCBlbGVtZW50c1xuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVTdHIgdGhlIHRhZyBuYW1lIG9mIHRoZSBlbGVtZW50IHRvIGJlIHJldHVybmVkIHlvdSB3b3VsZCB1c2UgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgpXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNPYmogKG9wdGlvbmFsKSBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgaW5pdGlhbCBwcm9wZXJ0aWVzL2F0dHJpYnV0ZXMgeW91IHdhbnQgdGhlIGVsZW1lbnQgdG8gaGF2ZVxuICogQHBhcmFtIHthcnJheX0gY2hpbGRBcnIgKG9wdGlvbmFsKSBhbiBvZiBlbGVtZW50IG9iamVjdHMgdG8gYmUgYXBwZW5kZWQgYXMgY2hpbGRyZW4gdG8gdGhpcyBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gdGhlIGEgcmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IGNyZWF0ZWQgaW4gbWVtb3J5XG4gKi9cbmV4cG9ydCBjb25zdCBFbGVtZW50ID0gKHR5cGVTdHIsIHByb3BzT2JqLCBjaGlsZEFyciA9IG51bGwpID0+IHtcbiAgLy8gU29tZSBhdHRyaWJ1dGVzIGNhbiBvbmx5IGJlIHNldCB1c2luZyB0aGUgRWxlbWVudC5zZXRBdHRyaWJ1dGUoKSBtZXRob2QuXG4gIC8vIElmIGl0IGlzIGluIHRoZSBwcm9wc09iaiBPYmplY3QuYXNzaWduIHdpbGwgZmFpbC4gV2UnbGwgcmVtb3ZlIGl0IGZyb20gdGhlXG4gIC8vIHByb3BzIG9iamVjdCBoZXJlIGFuZCBhc3NpZ24gdGhlbSB0byB0aGUgcGFyZW50IGVsZW1lbnQgYmVmb3JlIGl0IGlzIHJldHVybmVkLlxuICAvLyBUaGVzZSBhdHRyaWJ1dGVzIHNob3VsZCBiZSBhZGRlZCB0byB0aGUgc2V0QXR0cmlidXRlUHJvcGVydGllcyBsaXN0IGZvciBwcm9jZXNzaW5nLlxuICBsZXQgc2V0QXR0cmlidXRlUHJvcGVydGllcyA9IFtcImxpc3RcIl07XG4gIGxldCBwcm9wZXJ0aWVzID0gW107XG4gIHNldEF0dHJpYnV0ZVByb3BlcnRpZXMuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICBpZiAocHJvcGVydHkgaW4gcHJvcHNPYmopIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNPYmpbcHJvcGVydHldO1xuICAgICAgcHJvcGVydGllcy5wdXNoKHsgbmFtZTogcHJvcGVydHksIHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgIGRlbGV0ZSBwcm9wc09ialtwcm9wZXJ0eV07XG4gICAgfVxuICB9KTtcblxuICAvLyBDcmVhdGUgYW4gZWxlbWVudCBiYXNlZCBvbiB0aGUgdHlwZSBzdHJpbmcgcHJvdmlkZWRcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IE9iamVjdC5hc3NpZ24oXG4gICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlU3RyKSxcbiAgICBwcm9wc09ialxuICApO1xuXG4gIC8vIEFkZCBwYXNzZWQgaW4gY2hpbGQgdG8gYXJyYXkgaWYgaXQgaXMgbm90IGFscmVhZHlcbiAgaWYgKGNoaWxkQXJyICYmICFBcnJheS5pc0FycmF5KGNoaWxkQXJyKSkge1xuICAgIGNoaWxkQXJyID0gW2NoaWxkQXJyXTtcbiAgfVxuXG4gIC8vIEFwcGVuZCBjaGlsZHJlbiB0byB0aGUgZWxlbWVudFxuICBpZiAoY2hpbGRBcnIpIHtcbiAgICBjaGlsZEFyci5mb3JFYWNoKChjaGlsZCkgPT4gcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCkpO1xuICB9XG5cbiAgLy8gQXBwbHkgcHJvcGVydGllcyB3aXRoIHNldEF0dHJpYnV0ZSBpZiBuZWVkZWRcbiAgaWYgKHByb3BlcnRpZXMubGVuZ3RoKSB7XG4gICAgcHJvcGVydGllcy5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgcGFyZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcGVydHkubmFtZSwgcHJvcGVydHkudmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG4vLyAgQ09NTU9OIEVMRU1FTlRTXG5leHBvcnQgY29uc3QgQSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJhXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEFydGljbGUgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiYXJ0aWNsZVwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBCID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImJcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgQm9keSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJib2R5XCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJidXR0b25cIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgQnIgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiYnJcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgRGl2ID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImRpdlwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBEYXRhbGlzdCA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJkYXRhbGlzdFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBGaWVsZHNldCA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJmaWVsZHNldFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBGb290ZXIgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiZm9vdGVyXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEZvcm0gPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiZm9ybVwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBIMSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJoMVwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBIMiA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJoMlwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBIMyA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJoM1wiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaGVhZGVyXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEhyID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImhyXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEkgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaVwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBJbWcgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaW1nXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IElucHV0ID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImlucHV0XCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IExhYmVsID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImxhYmVsXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IExlZ2VuZCA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJsZWdlbmRcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgTGkgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwibGlcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgTWFpbiA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJtYWluXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IE9sID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcIm9sXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IE9wdGlvbiA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJvcHRpb25cIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgUCA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJwXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IFNlbGVjdCA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJzZWxlY3RcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgU3Ryb25nID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcInN0cm9uZ1wiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBTcGFuID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcInNwYW5cIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgVGV4dGFyZWEgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwidGV4dGFyZWFcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgVWwgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwidWxcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuIiwiZXhwb3J0IGNvbnN0IGdpdGh1YkluZm8gPSB7XG4gIHJlcG9OYW1lOiBcImJvaWxlcnBsYXRlLXdlYnBhY2tcIixcbn07XG4iLCJpbXBvcnQgeyBhcHBseVdpbmRvd0xpc3RlbmVycyB9IGZyb20gXCIuL3VpLXdpbmRvd1wiO1xuaW1wb3J0IHsgY2xpY2tDYXJvdXNlbFBsYXkgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvSW1hZ2VDYXJvdXNlbC91aS9jYXJvdXNlbC11aVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlJbml0aWFsU3RhdGUoKSB7XG4gIGFwcGx5V2luZG93TGlzdGVuZXJzKCk7XG4gIGNsaWNrQ2Fyb3VzZWxQbGF5KCk7XG59XG4iLCJpbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuXG5jb25zdCBicmVha1BvaW50cyA9IHtcbiAgeHM6IDAsXG4gIHNtOiA0ODAsXG4gIG1kOiA3MjAsXG4gIGxnOiA5NjAsXG4gIHhsOiAxMjAwLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5V2luZG93TGlzdGVuZXJzKCkge1xuICB3aW5kb3cub25yZXNpemUgPSBkZWJvdW5jZShmdW5jdGlvbiAoZSkge1xuICAgIC8vXG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCB0cnVuY2F0ZUFuZEFkZEVsbGlwc2UgPSAoc3RyaW5nLCBudW1DaGFyc1RvS2VlcCkgPT4ge1xuICByZXR1cm4gc3RyaW5nLnNsaWNlKDAsIG51bUNoYXJzVG9LZWVwKS50cmltRW5kKCkgKyBcIi4uLlwiO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gZnVuY3Rpb24gKGZuKSB7XG4gIC8vIHNldHVwIGEgdGltZXJcbiAgbGV0IHRpbWVvdXQ7XG5cbiAgLy8gcmV0dXJuIGEgZnVuY3Rpb24gdG8gcnVuIGRlYm91bmNlZFxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIC8vc2V0dXAgYXJnc1xuXG4gICAgbGV0IGNvbnRleHQgPSB0aGlzO1xuICAgIGxldCBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgLy8gaWYgdGhlcmUgaXMgYSB0aW1lciBjYW5jZWwgaXRcbiAgICBpZiAodGltZW91dCkge1xuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRpbWVvdXQpO1xuICAgIH1cblxuICAgIC8vIHNldHVwIHRoZSBuZXcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKClcbiAgICB0aW1lb3V0ID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9KTtcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICBpZiAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZ1swXS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG4gIH1cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVGVzdENvbnRlbnRBcnIobnVtQ2hpbGRyZW4pIHtcbiAgcmV0dXJuIEFycmF5KG51bUNoaWxkcmVuKVxuICAgIC5maWxsKDApXG4gICAgLm1hcCgoZWxlbSkgPT5cbiAgICAgIEVsZW1lbnQoXCJwXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImRpc3BsYXktYiBtYi0xXCIsXG4gICAgICAgIGlubmVyVGV4dDpcbiAgICAgICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIERvbG9yLCB1bGxhbSBhZCwgbWF4aW1lIGVuaW0gc2VxdWkgc3VudCBxdW8gZmFjaWxpcyBpbGxvIGV2ZW5pZXQgbGF1ZGFudGl1bSBxdWFlIHJlcGVsbGVuZHVzIGRvbG9ydW0gb21uaXMgbWluaW1hIGR1Y2ltdXMgYXJjaGl0ZWN0byEgQmVhdGFlLCB2ZWwgYXNzdW1lbmRhLlwiLFxuICAgICAgfSlcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7IC8vIFRoZSBtYXhpbXVtIGlzIGV4Y2x1c2l2ZSBhbmQgdGhlIG1pbmltdW0gaXMgaW5jbHVzaXZlXG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG52YXIgZ2V0UmFuZG9tVmFsdWVzO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uIEFsc28sXG4gICAgLy8gZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIChtc0NyeXB0bykgb24gSUUxMS5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pIHx8IHR5cGVvZiBtc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG52YXIgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKSk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIpIHtcbiAgdmFyIG9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHZhciB1dWlkID0gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Db250ZW50L0NvbnRlbnRcIjtcbmltcG9ydCB7IGFwcGx5SW5pdGlhbFN0YXRlIH0gZnJvbSBcIi4vcGFnZS1sb2dpYy91aS91aS1pbml0aWFsLXN0YXRlXCI7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoQ29udGVudCgpKTtcblxuYXBwbHlJbml0aWFsU3RhdGUoKTtcblxuLy8gZGVidWdnaW5nXG5jb25zdCBkZWJ1Z2dpbmcgPSB0cnVlO1xuaWYgKGRlYnVnZ2luZykge1xuICAvL1xufVxuIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJIZWFkZXIiLCJEeW5hbWljRm9vdGVyIiwiTWFpblNlY3Rpb24iLCJDb250ZW50IiwiY29udGVudCIsImlkIiwiQSIsIkRpdiIsIkljb24iLCJnaXRodWJJbmZvIiwiZHluYW1pY1llYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJDb3B5cmlnaHRDb250YWluZXIiLCJwYXJlbnRFbGVtZW50IiwiY2xhc3NOYW1lIiwiaW5uZXJUZXh0IiwiaHJlZiIsInJlcG9OYW1lIiwiRm9vdGVyIiwiQXR0cmlidXRpb25zQ29udGFpbmVyIiwiVE9QQ29udGFpbmVyIiwiRXhwYW5kYWJsZVBhbmVsIiwiTm9uRXhwYW5kYWJsZVBhbmVsIiwiSWNvbnNFeHBsYW5hdGlvbiIsImNvbnRhaW5lciIsInRpdGxlIiwiY2hpbGRyZW4iLCJpbm5lckhUTUwiLCJvdXRlckhUTUwiLCJwYXJlbnRDb250YWluZXIiLCJoMSIsIm90aGVyQ2xhc3NlcyIsImhlYWRlciIsImdlbmVyYXRlVGVzdENvbnRlbnRBcnIiLCJDdXN0b21JY29uc0Rpc3BsYXkiLCJJbWFnZUNhcm91c2VsIiwiVmFsaWRhdGVkRm9ybSIsIk1haW4iLCJtYWluIiwiRXhwYW5kYWJsZVBhbmVsVGl0bGUiLCJFeHBhbmRhYmxlUGFuZWxDb250ZW50IiwidjQiLCJ1dWlkdjQiLCJwcm9wcyIsImNvbXBvbmVudElkIiwicGFuZWwiLCJCdXR0b24iLCJ0b2dnbGVFeHBhbnNpb24iLCJleHBhbnNpb25Db250ZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRvZ2dsZUV4cGFuc2lvbkJ1dHRvbiIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIm9uY2xpY2siLCJpY29uQ2xhc3MiLCJpY29uIiwiQ2Fyb3VzZWxOYXZJbmRpY2F0b3IiLCJDYXJvdXNlbFBsYXlQYXVzZUNvbnRhaW5lciIsIkNhcm91c2VsTmF2IiwiaW1hZ2VEYXRhIiwibWFwIiwib2JqIiwiaW5kZXgiLCJpbWFnZUlkIiwidXVpZCIsInN0YXJ0c0FjdGl2ZSIsImlzQWN0aXZlIiwiY2xpY2tDYXJvdXNlbE5hdiIsIlBsYXlCdXR0b24iLCJQYXVzZUJ1dHRvbiIsIkltZyIsIkNhcm91c2VsU2xpZGUiLCJpbWFnZVNvdXJjZSIsInNyYyIsIlVsIiwiQ2Fyb3VzZWxUcmFjayIsIkNhcm91c2VsVHJhY2tDb250YWluZXIiLCJMZWZ0Q2Fyb3VzZWxCdXR0b24iLCJSaWdodENhcm91c2VsQnV0dG9uIiwiY2Fyb3VzZWwiLCJjbGlja0Nhcm91c2VsTGVmdCIsInNoYXJlZENsYXNzZXMiLCJidXR0b24iLCJjbGlja0Nhcm91c2VsUmlnaHQiLCJnZXRSYW5kb21JbnQiLCJnZXRQaWNzdW1JZCIsIm1pbiIsIm1heCIsImV4Y2x1c2lvbnMiLCJyYW5kSW50IiwiaW5jbHVkZXMiLCJnZXRSYW5kb21JbWFnZVNyYyIsIndpZHRoIiwiaGVpZ2h0IiwibnVtSW1hZ2VzIiwiaW1hZ2VXaWR0aCIsImltYWdlSGVpZ2h0IiwiaW1hZ2VTb3VyY2VzIiwiQXJyYXkiLCJmaWxsIiwiZSIsImNsaWNrQ2Fyb3VzZWxQbGF5IiwiY2xpY2tDYXJvdXNlbFBhdXNlIiwiZ2V0QWxsQ2Fyb3VzZWxTbGlkZXMiLCJxdWVyeVNlbGVjdG9yIiwiY2hpbGROb2RlcyIsImdldEFsbENhcm91c2VsU2xpZGVJZHMiLCJlbGVtIiwiZ2V0QWxsQ2Fyb3VzZWxOYXZCdXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsImdldEN1cnJlbnRTbGlkZUluZGV4IiwiYWxsU2xpZGVJZHMiLCJjdXJyZW50U2xpZGVJZCIsImN1cnJlbnRTbGlkZUluZGV4IiwiaW5kZXhPZiIsImdldFByZXZpb3VzU2xpZGVJbmRleCIsInByZXZpb3VzU2xpZGVJbmRleCIsImNvcnJlY3RlZEluZGV4IiwibGVuZ3RoIiwiZ2V0TmV4dFNsaWRlSW5kZXgiLCJuZXh0U2xpZGVJbmRleCIsImdvdG9TcGVjaWZpY1NsaWRlIiwiYWxsTmF2QnV0dG9ucyIsInNlbGVjdGVkTmF2QnV0dG9uIiwic2VsZWN0ZWRTbGlkZSIsImFsbFNsaWRlcyIsImZvckVhY2giLCJzbGlkZSIsInJlbW92ZSIsImFkZCIsInJlcGxhY2UiLCJoYW5kbGVBdXRvQWR2YW5jZSIsInBsYXlCdXR0b24iLCJwYXVzZUJ1dHRvbiIsImludGVydmFsIiwibW9kZSIsInBsYXlpbmciLCJ3aW5kb3ciLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJMYWJlbCIsIlNwYW4iLCJEYXRhbGlzdCIsIk9wdGlvbiIsIlNlbGVjdCIsImNvdW50cmllcyIsImhhbmRsZUNvdW50cnlJbnB1dCIsImNvbXBvbmVudFV1aWQiLCJjb3VudHJ5SW5wdXRJZCIsIkNvdW50cnlJbnB1dCIsImZvciIsInJlcXVpcmVkIiwib25pbnB1dCIsImNvdW50cnkiLCJjbGVhckVycm9yIiwiZ2V0Q291bnRyeUlucHV0IiwiZ2V0Q291bnRyeUlucHV0RXJyb3IiLCJjb3VudHJ5SXNWYWxpZCIsInZhbGlkaXR5IiwidmFsaWQiLCJlcnJvciIsInNob3dDb3VudHJ5RXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJJbnB1dCIsImhhbmRsZUVtYWlsSW5wdXQiLCJlbWFpbElucHV0SWQiLCJFbWFpbElucHV0IiwidHlwZSIsImdldEVtYWlsSW5wdXQiLCJnZXRFbWFpbElucHV0RXJyb3IiLCJlbWFpbElzVmFsaWQiLCJzaG93RW1haWxFcnJvciIsImVtYWlsIiwidmFsdWVNaXNzaW5nIiwiaGFuZGxlWmlwQ29kZUlucHV0IiwiemlwQ29kZUlucHV0SWQiLCJaaXBDb2RlSW5wdXQiLCJwYXR0ZXJuIiwiZ2V0WmlwQ29kZUlucHV0IiwiZ2V0WmlwQ29kZUlucHV0RXJyb3IiLCJ6aXBDb2RlSXNWYWxpZCIsInNob3daaXBDb2RlRXJyb3IiLCJ6aXBDb2RlIiwiaGFuZGxlQ29uZmlybVBhc3N3b3JkSW5wdXQiLCJjb25maXJtUGFzc3dvcmRJbnB1dElkIiwiQ29uZmlybVBhc3N3b3JkSW5wdXQiLCJoYW5kbGVQYXNzd29yZElucHV0IiwicGFzc3dvcmRSZWdleFN0cmluZyIsInBhc3N3b3JkSW5wdXRJZCIsIlBhc3N3b3JkSW5wdXQiLCJwYXNzd29yZFJlZ2V4IiwiUmVnRXhwIiwiZ2V0UGFzc3dvcmRJbnB1dCIsImdldFBhc3N3b3JkSW5wdXRFcnJvciIsInBhc3N3b3JkSXNWYWxpZCIsImdldFBhc3N3b3JkSW5wdXRWYWx1ZSIsInZhbHVlIiwic2hvd1Bhc3N3b3JkRXJyb3IiLCJwYXNzd29yZCIsImdldENvbmZpcm1QYXNzd29yZElucHV0IiwiZ2V0Q29uZmlybVBhc3N3b3JkSW5wdXRFcnJvciIsImdldENvbmZpcm1QYXNzd29yZElucHV0VmFsdWUiLCJjb25maXJtUGFzc3dvcmRJc1ZhbGlkIiwiaW5wdXQiLCJzZXRDdXN0b21WYWxpZGl0eSIsInNob3dDb25maXJtUGFzc3dvcmRFcnJvciIsIlN1Ym1pdEJ1dHRvbiIsIkZvcm0iLCJoYW5kbGVGb3JtU3VibWl0IiwiZm9ybUlkIiwibm9WYWxpZGF0ZSIsIm9uc3VibWl0IiwiZXZlbnQiLCJnZXRGb3JtIiwiYWxsSW5wdXRzVmFsaWQiLCJmb3JtIiwiaW5wdXRzIiwiaSIsImlucHV0VmFsaWRpdHkiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvckVsZW1lbnQiLCJ0eXBlU3RyIiwicHJvcHNPYmoiLCJjaGlsZEFyciIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsInNldEF0dHJpYnV0ZVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwicHJvcGVydHkiLCJwdXNoIiwibmFtZSIsIk9iamVjdCIsImFzc2lnbiIsImNyZWF0ZUVsZW1lbnQiLCJpc0FycmF5IiwiY2hpbGQiLCJhcHBlbmRDaGlsZCIsInNldEF0dHJpYnV0ZSIsIkFydGljbGUiLCJCIiwiQm9keSIsIkJyIiwiRmllbGRzZXQiLCJIMSIsIkgyIiwiSDMiLCJIciIsIkkiLCJMZWdlbmQiLCJMaSIsIk9sIiwiUCIsIlN0cm9uZyIsIlRleHRhcmVhIiwiYXBwbHlXaW5kb3dMaXN0ZW5lcnMiLCJhcHBseUluaXRpYWxTdGF0ZSIsImRlYm91bmNlIiwiYnJlYWtQb2ludHMiLCJ4cyIsInNtIiwibWQiLCJsZyIsInhsIiwib25yZXNpemUiLCJ0cnVuY2F0ZUFuZEFkZEVsbGlwc2UiLCJzdHJpbmciLCJudW1DaGFyc1RvS2VlcCIsInNsaWNlIiwidHJpbUVuZCIsImZuIiwidGltZW91dCIsImNvbnRleHQiLCJhcmdzIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhcHBseSIsImNhcGl0YWxpemUiLCJ0b1VwcGVyQ2FzZSIsInRvTG93ZXJDYXNlIiwibnVtQ2hpbGRyZW4iLCJNYXRoIiwiY2VpbCIsImZsb29yIiwicmFuZG9tIiwiYm9keSIsImRlYnVnZ2luZyJdLCJzb3VyY2VSb290IjoiIn0=