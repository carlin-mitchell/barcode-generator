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
  []);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTZDLEtBQUssR0FBRztFQUFFLEdBQUdBO0FBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFakIsUUFBUSxHQUFHLENBQUMsR0FBR0EsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRXRFLE1BQU1zTCxJQUFJLEdBQUdBLENBQUNySyxLQUFLLEVBQUVqQixRQUFRLEtBQ2xDNUIsT0FBTyxDQUFDLE1BQU0sRUFBRTZDLEtBQUssR0FBRztFQUFFLEdBQUdBO0FBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFakIsUUFBUSxHQUFHLENBQUMsR0FBR0EsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRXBFLE1BQU00TixFQUFFLEdBQUdBLENBQUMzTSxLQUFLLEVBQUVqQixRQUFRLEtBQ2hDNUIsT0FBTyxDQUFDLElBQUksRUFBRTZDLEtBQUssR0FBRztFQUFFLEdBQUdBO0FBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFakIsUUFBUSxHQUFHLENBQUMsR0FBR0EsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRWxFLE1BQU02TixFQUFFLEdBQUdBLENBQUM1TSxLQUFLLEVBQUVqQixRQUFRLEtBQ2hDNUIsT0FBTyxDQUFDLElBQUksRUFBRTZDLEtBQUssR0FBRztFQUFFLEdBQUdBO0FBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFakIsUUFBUSxHQUFHLENBQUMsR0FBR0EsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRWxFLE1BQU04TixFQUFFLEdBQUdBLENBQUM3TSxLQUFLLEVBQUVqQixRQUFRLEtBQ2hDNUIsT0FBTyxDQUFDLElBQUksRUFBRTZDLEtBQUssR0FBRztFQUFFLEdBQUdBO0FBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFakIsUUFBUSxHQUFHLENBQUMsR0FBR0EsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRWxFLE1BQU0zQixNQUFNLEdBQUdBLENBQUM0QyxLQUFLLEVBQUVqQixRQUFRLEtBQ3BDNUIsT0FBTyxDQUFDLFFBQVEsRUFBRTZDLEtBQUssR0FBRztF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QUMsRUFBRWpCLFFBQVEsR0FBRyxDQUFDLEdBQUdBLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUV0RSxNQUFNb08sQ0FBQyxHQUFHQSxDQUFDbk4sS0FBSyxFQUFFakIsUUFBUSxLQUMvQjVCLE9BQU8sQ0FBQyxHQUFHLEVBQUU2QyxLQUFLLEdBQUc7RUFBRSxHQUFHQTtBQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRWpCLFFBQVEsR0FBRyxDQUFDLEdBQUdBLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUVqRSxNQUFNdUgsTUFBTSxHQUFHQSxDQUFDdEcsS0FBSyxFQUFFakIsUUFBUSxLQUNwQzVCLE9BQU8sQ0FBQyxRQUFRLEVBQUU2QyxLQUFLLEdBQUc7RUFBRSxHQUFHQTtBQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRWpCLFFBQVEsR0FBRyxDQUFDLEdBQUdBLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUV0RSxNQUFNcU8sTUFBTSxHQUFHQSxDQUFDcE4sS0FBSyxFQUFFakIsUUFBUSxLQUNwQzVCLE9BQU8sQ0FBQyxRQUFRLEVBQUU2QyxLQUFLLEdBQUc7RUFBRSxHQUFHQTtBQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRWpCLFFBQVEsR0FBRyxDQUFDLEdBQUdBLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUV0RSxNQUFNb0gsSUFBSSxHQUFHQSxDQUFDbkcsS0FBSyxFQUFFakIsUUFBUSxLQUNsQzVCLE9BQU8sQ0FBQyxNQUFNLEVBQUU2QyxLQUFLLEdBQUc7RUFBRSxHQUFHQTtBQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRWpCLFFBQVEsR0FBRyxDQUFDLEdBQUdBLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUVwRSxNQUFNc08sUUFBUSxHQUFHQSxDQUFDck4sS0FBSyxFQUFFakIsUUFBUSxLQUN0QzVCLE9BQU8sQ0FBQyxVQUFVLEVBQUU2QyxLQUFLLEdBQUc7RUFBRSxHQUFHQTtBQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRWpCLFFBQVEs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Q0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ042QjtBQUNzQjtBQUNrQjtBQUVyRXRDLFFBQVEsQ0FBQzhPLElBQUksQ0FBQ2hELFdBQVcsQ0FBQzdPLHVFQUFPLENBQUMsQ0FBQyxDQUFDO0FBRXBDZ1Esa0ZBQWlCLENBQUMsQ0FBQzs7QUFFbkI7QUFDQSxNQUFNOEIsU0FBUyxHQUFHLElBQUk7QUFDdEIsSUFBSUEsU0FBUyxFQUFFO0VBQ2I7QUFBQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9Db250ZW50L0NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9EeW5hbWljRm9vdGVyL0NvcHlyaWdodENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0R5bmFtaWNGb290ZXIvRHluYW1pY0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0R5bmFtaWNGb290ZXIvU2l0ZUF0dHJpYnV0aW9ucy9BdHRyaWJ1dGlvbnNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9EeW5hbWljRm9vdGVyL1NpdGVBdHRyaWJ1dGlvbnMvSWNvbnNFeHBsYW5hdGlvbi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0R5bmFtaWNGb290ZXIvVE9QTGlua0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9NYWluU2VjdGlvbi9NYWluU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9DdXN0b21JY29uc0Rpc3BsYXkvQ3VzdG9tSWNvbnNEaXNwbGF5LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0V4cGFuZGFibGVQYW5lbC9FeHBhbmRhYmxlUGFuZWwuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvRXhwYW5kYWJsZVBhbmVsL0V4cGFuZGFibGVQYW5lbENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvRXhwYW5kYWJsZVBhbmVsL0V4cGFuZGFibGVQYW5lbFRpdGxlLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0V4cGFuZGFibGVQYW5lbC9Ob25FeHBhbmRhYmxlUGFuZWwuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvSWNvbi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9JbWFnZUNhcm91c2VsL0Nhcm91c2VsTmF2LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0ltYWdlQ2Fyb3VzZWwvQ2Fyb3VzZWxOYXZJbmRpY2F0b3IuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvSW1hZ2VDYXJvdXNlbC9DYXJvdXNlbFBsYXlQYXVzZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9JbWFnZUNhcm91c2VsL0Nhcm91c2VsU2xpZGUuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvSW1hZ2VDYXJvdXNlbC9DYXJvdXNlbFRyYWNrLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0ltYWdlQ2Fyb3VzZWwvQ2Fyb3VzZWxUcmFja0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9JbWFnZUNhcm91c2VsL0ltYWdlQ2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvSW1hZ2VDYXJvdXNlbC9MZWZ0QnV0dG9uLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0ltYWdlQ2Fyb3VzZWwvUmlnaHRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvSW1hZ2VDYXJvdXNlbC9kYXRhL2ltYWdlTG9hZGVyLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0ltYWdlQ2Fyb3VzZWwvcGxheUFuZFBhdXNlQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9JbWFnZUNhcm91c2VsL3VpL2Nhcm91c2VsLXVpLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL1ZhbGlkYXRlZEZvcm0vQ291bnRyeUlucHV0L0NvdW50cnlJbnB1dC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9WYWxpZGF0ZWRGb3JtL0NvdW50cnlJbnB1dC9jb3VudHJpZXNMaXN0LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL1ZhbGlkYXRlZEZvcm0vQ291bnRyeUlucHV0L2NvdW50cnktaW5wdXQtdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9WYWxpZGF0ZWRGb3JtL0VtYWlsSW5wdXQvRW1haWxJbnB1dC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9WYWxpZGF0ZWRGb3JtL0VtYWlsSW5wdXQvZW1haWwtaW5wdXQtdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9WYWxpZGF0ZWRGb3JtL0lucHV0L1ppcENvZGVJbnB1dC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9WYWxpZGF0ZWRGb3JtL0lucHV0L3ppcC1jb2RlLWlucHV0LXZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvVmFsaWRhdGVkRm9ybS9QYXNzd29yZElucHV0cy9Db25maXJtUGFzc3dvcmRJbnB1dC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9WYWxpZGF0ZWRGb3JtL1Bhc3N3b3JkSW5wdXRzL1Bhc3N3b3JkSW5wdXQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvVmFsaWRhdGVkRm9ybS9QYXNzd29yZElucHV0cy9wYXNzd29yZHMtdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9WYWxpZGF0ZWRGb3JtL1N1Ym1pdEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9WYWxpZGF0ZWRGb3JtL1ZhbGlkYXRlZEZvcm0uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvVmFsaWRhdGVkRm9ybS9mb3JtLXZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fZWxlbWVudHMvRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvcGFnZS1sb2dpYy9kYXRhL2RhdGEtcGFnZS1jb25maWcuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvcGFnZS1sb2dpYy91aS91aS1pbml0aWFsLXN0YXRlLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL3BhZ2UtbG9naWMvdWkvdWktd2luZG93LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vSGVhZGVyL0hlYWRlclwiO1xuaW1wb3J0IER5bmFtaWNGb290ZXIgZnJvbSBcIi4uL0R5bmFtaWNGb290ZXIvRHluYW1pY0Zvb3RlclwiO1xuaW1wb3J0IE1haW5TZWN0aW9uIGZyb20gXCIuLi9NYWluU2VjdGlvbi9NYWluU2VjdGlvblwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IEVsZW1lbnQoXCJkaXZcIiwgeyBpZDogXCJjb250ZW50XCIgfSwgW1xuICAgIEhlYWRlcigpLFxuICAgIE1haW5TZWN0aW9uKCksXG4gICAgRHluYW1pY0Zvb3RlcigpLFxuICBdKTtcblxuICByZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgQSwgRGl2IH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL19jdXN0b20tY29tcG9uZW50cy9JY29uXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbmltcG9ydCB7IGdpdGh1YkluZm8gfSBmcm9tIFwiLi4vLi4vcGFnZS1sb2dpYy9kYXRhL2RhdGEtcGFnZS1jb25maWdcIjtcblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbi8vIFRFTVBMQVRFIFZBUklBQkxFU1xuY29uc3QgZHluYW1pY1llYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG5cbmNvbnN0IENvcHlyaWdodENvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdihcbiAgICB7IGNsYXNzTmFtZTogYGNvcHlyaWdodC1jb250YWluZXJgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIERpdih7XG4gICAgICAgIGNsYXNzTmFtZTogXCJjb3B5cmlnaHQtaW5mbyBkaXNwbGF5LWktYlwiLFxuICAgICAgICBpbm5lclRleHQ6IGDCqSBDYXJsaW4gTWl0Y2hlbGwgJHtkeW5hbWljWWVhcn1gLFxuICAgICAgfSksXG4gICAgICBBKHsgaHJlZjogYGh0dHBzOi8vZ2l0aHViLmNvbS9jYXJsaW4tbWl0Y2hlbGwvJHtnaXRodWJJbmZvLnJlcG9OYW1lfWAgfSwgW1xuICAgICAgICBJY29uKFwiaWNvbi1naXRodWItY2F0XCIpLFxuICAgICAgXSksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvcHlyaWdodENvbnRhaW5lcjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgQ29weXJpZ2h0Q29udGFpbmVyIGZyb20gXCIuL0NvcHlyaWdodENvbnRhaW5lclwiO1xuaW1wb3J0IEF0dHJpYnV0aW9uc0NvbnRhaW5lciBmcm9tIFwiLi9TaXRlQXR0cmlidXRpb25zL0F0dHJpYnV0aW9uc0NvbnRhaW5lclwiO1xuaW1wb3J0IFRPUENvbnRhaW5lciBmcm9tIFwiLi9UT1BMaW5rQ29udGFpbmVyXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBEeW5hbWljRm9vdGVyID0gKCkgPT4ge1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IFxuICBGb290ZXIoXG4gICAgeyBcbiAgICAgIGlkOiBgZm9vdGVyYCwgXG4gICAgICBjbGFzc05hbWU6IGBiZy1ncmF5LWRhcmstMyB0ZXh0LXdoaXRlYCBcbiAgICB9LFxuICAgIFtcbiAgICAgQ29weXJpZ2h0Q29udGFpbmVyKCksIFxuXG4gICAgIEF0dHJpYnV0aW9uc0NvbnRhaW5lcigpXG4gICAgXVxuICApO1xuXG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY0Zvb3RlcjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uLy4uL19jdXN0b20tY29tcG9uZW50cy9JY29uXCI7XG5cbmltcG9ydCBFeHBhbmRhYmxlUGFuZWwgZnJvbSBcIi4uLy4uL19jdXN0b20tY29tcG9uZW50cy9FeHBhbmRhYmxlUGFuZWwvRXhwYW5kYWJsZVBhbmVsXCI7XG5pbXBvcnQgTm9uRXhwYW5kYWJsZVBhbmVsIGZyb20gXCIuLi8uLi9fY3VzdG9tLWNvbXBvbmVudHMvRXhwYW5kYWJsZVBhbmVsL05vbkV4cGFuZGFibGVQYW5lbFwiO1xuXG5pbXBvcnQgSWNvbnNFeHBsYW5hdGlvbiBmcm9tIFwiLi9JY29uc0V4cGxhbmF0aW9uXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBBdHRyaWJ1dGlvbnNDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IEVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICB7IGNsYXNzTmFtZTogYGF0dHJpYnV0aW9ucy1jb250YWluZXJgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIEV4cGFuZGFibGVQYW5lbCh7XG4gICAgICAgIHRpdGxlOiBcIlNpdGUgQXR0cmlidXRpb25zXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgRXhwYW5kYWJsZVBhbmVsKHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkljb25zXCIsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICBOb25FeHBhbmRhYmxlUGFuZWwoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkdpdGh1YlwiLFxuICAgICAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2xvZ29zXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtJY29uKFwiaWNvbi1naXRodWItY2F0XCIpXSxcbiAgICAgICAgICAgICAgfSksXG5cbiAgICAgICAgICAgICAgRXhwYW5kYWJsZVBhbmVsKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBbGwgb3RoZXIgSWNvbnNcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW0ljb25zRXhwbGFuYXRpb24oKV0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF0dHJpYnV0aW9uc0NvbnRhaW5lcjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYsIEEgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBJY29uc0V4cGxhbmF0aW9uID0gKCkgPT4ge1xuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRGl2KFxuICAgIHsgY2xhc3NOYW1lOiBgaWNvbnMtZXhwbGFuYXRpb25gLCBpbm5lckhUTUw6IGBgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIERpdih7XG4gICAgICAgIGlubmVySFRNTDogYEFsbCBvdGhlciBpY29ucyB3ZXJlIGNyZWF0ZWQgYnkgbWUgdXNpbmcgJHtcbiAgICAgICAgICBBKHtcbiAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9pbmtzY2FwZS5vcmcvXCIsXG4gICAgICAgICAgICBpbm5lclRleHQ6IFwiSW5rc2NhcGVcIixcbiAgICAgICAgICB9KS5vdXRlckhUTUxcbiAgICAgICAgfSBhbmQgY29udmVydGluZyB0aGVtIHRvIGEgZm9udCB3aXRoICR7XG4gICAgICAgICAgQSh7XG4gICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vaWNvbW9vbi5pby9cIixcbiAgICAgICAgICAgIGlubmVyVGV4dDogXCJJY29Nb29uXCIsXG4gICAgICAgICAgfSkub3V0ZXJIVE1MXG4gICAgICAgIH1gLFxuICAgICAgfSksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb25zRXhwbGFuYXRpb247XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgQSwgRGl2IH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgVE9QQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBwYXJlbnRDb250YWluZXIgPSBEaXYoXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiBgdG9wLWNvbnRhaW5lcmAsXG4gICAgICBpbm5lclRleHQ6IFwiSW5zcGlyZWQgQnk6XCIsXG4gICAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgQSh7XG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cudGhlb2RpbnByb2plY3QuY29tL1wiLFxuICAgICAgICBjbGFzc05hbWU6IFwidG9wLWxpbmtcIixcbiAgICAgICAgaW5uZXJUZXh0OiBcIlRoZSBPZGluIFByb2plY3RcIixcbiAgICAgIH0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudENvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRPUENvbnRhaW5lcjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoMSA9IEVsZW1lbnQoXCJoMVwiLCB7IGlubmVyVGV4dDogXCJCYXJjb2RlIEdlbmVyYXRvclwiIH0pO1xuXG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiYmctZ3JheS1kYXJrLTMgdGV4dC13aGl0ZSBwLTJcIjtcbiAgY29uc3QgaGVhZGVyID0gRWxlbWVudChcbiAgICBcImhlYWRlclwiLFxuICAgIHtcbiAgICAgIGlkOiBcImhlYWRlclwiLFxuICAgICAgY2xhc3NOYW1lOiBcImhlYWRlclwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMsXG4gICAgfSxcbiAgICBbaDFdXG4gICk7XG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgZ2VuZXJhdGVUZXN0Q29udGVudEFyciB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IEN1c3RvbUljb25zRGlzcGxheSBmcm9tIFwiLi4vX2N1c3RvbS1jb21wb25lbnRzL0N1c3RvbUljb25zRGlzcGxheS9DdXN0b21JY29uc0Rpc3BsYXlcIjtcbmltcG9ydCBJbWFnZUNhcm91c2VsIGZyb20gXCIuLi9fY3VzdG9tLWNvbXBvbmVudHMvSW1hZ2VDYXJvdXNlbC9JbWFnZUNhcm91c2VsXCI7XG5pbXBvcnQgVmFsaWRhdGVkRm9ybSBmcm9tIFwiLi4vX2N1c3RvbS1jb21wb25lbnRzL1ZhbGlkYXRlZEZvcm0vVmFsaWRhdGVkRm9ybVwiO1xuaW1wb3J0IHsgTWFpbiwgRGl2IH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgTWFpblNlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IG1haW4gPSBNYWluKFxuICAgIHtcbiAgICAgIGlkOiBcIm1haW4tc2VjdGlvblwiLFxuICAgICAgY2xhc3NOYW1lOiBcIlwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMsXG4gICAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW11cbiAgKTtcbiAgcmV0dXJuIG1haW47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluU2VjdGlvbjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvblwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgQ3VzdG9tSWNvbnNEaXNwbGF5ID0gKCkgPT4ge1xuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRGl2KFxuICAgIHsgaW5uZXJUZXh0OiBgYCwgY2xhc3NOYW1lOiBgY3VzdG9tLWljb25zLWRpc3BsYXlgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIEljb24oXCJpY29uLWhhbWJ1cmdlci1tZW51XCIpLFxuICAgICAgSWNvbihcImljb24tcGF1c2VcIiksXG4gICAgICBJY29uKFwiaWNvbi1wZW5jaWxcIiksXG4gICAgICBJY29uKFwiaWNvbi1wbHVzLXNpZ25cIiksXG4gICAgICBJY29uKFwiaWNvbi1wbHVzLXNpZ24gcm90YXRlLTQ1XCIpLFxuICAgICAgSWNvbihcImljb24tdHJhc2hcIiksXG4gICAgICBJY29uKFwiaWNvbi10cmlhbmdsZVwiKSxcbiAgICAgIEljb24oXCJpY29uLXRyaWFuZ2xlIHJvdGF0ZS0xODBcIiksXG4gICAgICBJY29uKFwiaWNvbi10cmlhbmdsZS1zaG9ydCByb3RhdGUtOTBcIiksXG4gICAgICBJY29uKFwiaWNvbi10cmlhbmdsZS1zaG9ydFwiKSxcbiAgICAgIEljb24oXCJpY29uLXVwLWFycm93XCIpLFxuICAgICAgSWNvbihcImljb24tdXAtYXJyb3cgcm90YXRlLTE4MFwiKSxcbiAgICAgIEljb24oXCJpY29uLXVwLWFycm93LXNob3J0XCIpLFxuICAgICAgSWNvbihcImljb24tdXAtYXJyb3ctc2hvcnQgcm90YXRlLTI3MFwiKSxcbiAgICAgIEljb24oXCJpY29uLXVwLWRvd25cIiksXG4gICAgICBJY29uKFwiaWNvbi11cC1kb3duIHJvdGF0ZS05MFwiKSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tSWNvbnNEaXNwbGF5O1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEEgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbmltcG9ydCBFeHBhbmRhYmxlUGFuZWxUaXRsZSBmcm9tIFwiLi9FeHBhbmRhYmxlUGFuZWxUaXRsZVwiO1xuaW1wb3J0IEV4cGFuZGFibGVQYW5lbENvbnRlbnQgZnJvbSBcIi4vRXhwYW5kYWJsZVBhbmVsQ29udGVudFwiO1xuXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgRXhwYW5kYWJsZVBhbmVsID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGNvbXBvbmVudElkID0gdXVpZHY0KCk7XG4gIGNvbnN0IHsgdGl0bGUsIGNoaWxkcmVuIH0gPSBwcm9wcztcblxuICBjb25zdCBwYW5lbCA9IEEoXG4gICAgeyBjbGFzc05hbWU6IGBleHBhbmRhYmxlLXBhbmVsYCB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBFeHBhbmRhYmxlUGFuZWxUaXRsZSh7IHRpdGxlLCBjb21wb25lbnRJZCB9KSxcbiAgICAgIEV4cGFuZGFibGVQYW5lbENvbnRlbnQoeyBjaGlsZHJlbiwgY29tcG9uZW50SWQgfSksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFuZWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeHBhbmRhYmxlUGFuZWw7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCB7IERpdiB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEV4cGFuZGFibGVQYW5lbENvbnRlbnQgPSAocHJvcHMpID0+IHtcbiAgbGV0IHsgY2hpbGRyZW4sIGNvbXBvbmVudElkIH0gPSBwcm9wcztcbiAgY2hpbGRyZW4gPSBjaGlsZHJlbiA/IGNoaWxkcmVuIDogW107XG5cbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdihcbiAgICB7XG4gICAgICBpZDogYGV4cGFuZGFibGUtY29udGVudC0ke2NvbXBvbmVudElkfWAsXG4gICAgICBjbGFzc05hbWU6IGBleHBhbmRhYmxlLXBhbmVsLWNvbnRlbnRgLFxuICAgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtEaXYoeyBjbGFzc05hbWU6IFwiY29udGVudFwiIH0sIFsuLi5jaGlsZHJlbl0pXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGFuZGFibGVQYW5lbENvbnRlbnQ7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRWxlbWVudCwgQnV0dG9uLCBEaXYgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvblwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuZnVuY3Rpb24gdG9nZ2xlRXhwYW5zaW9uKGNvbXBvbmVudElkKSB7XG4gIGNvbnN0IGV4cGFuc2lvbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBgZXhwYW5kYWJsZS1jb250ZW50LSR7Y29tcG9uZW50SWR9YFxuICApO1xuICBjb25zdCB0b2dnbGVFeHBhbnNpb25CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBgZXhwYW5kYWJsZS1jb250ZW50LWJ1dHRvbi0ke2NvbXBvbmVudElkfWBcbiAgKTtcbiAgZXhwYW5zaW9uQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKFwiZXhwYW5kZWRcIik7XG4gIHRvZ2dsZUV4cGFuc2lvbkJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiZXhwYW5kZWRcIik7XG59XG5cbmNvbnN0IEV4cGFuZGFibGVQYW5lbFRpdGxlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdGl0bGUsIGNvbXBvbmVudElkIH0gPSBwcm9wcztcblxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIHsgY2xhc3NOYW1lOiBgZXhwYW5kYWJsZS1wYW5lbC10aXRsZWAgfSxcbiAgICBbXG4gICAgICBEaXYoe1xuICAgICAgICBjbGFzc05hbWU6IFwiZGlzcGxheS1pLWJcIixcbiAgICAgICAgaW5uZXJUZXh0OiB0aXRsZSxcbiAgICAgICAgb25jbGljaygpIHtcbiAgICAgICAgICB0b2dnbGVFeHBhbnNpb24oY29tcG9uZW50SWQpO1xuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBCdXR0b24oXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogYGV4cGFuZGFibGUtY29udGVudC1idXR0b24tJHtjb21wb25lbnRJZH1gLFxuICAgICAgICAgIG9uY2xpY2soKSB7XG4gICAgICAgICAgICB0b2dnbGVFeHBhbnNpb24oY29tcG9uZW50SWQpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtJY29uKFwiaWNvbi11cC1kb3duXCIpXVxuICAgICAgKSxcbiAgICBdXG4gICk7XG5cbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeHBhbmRhYmxlUGFuZWxUaXRsZTtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBBIH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgTm9uRXhwYW5kYWJsZVBhbmVsID0gKHByb3BzKSA9PiB7XG4gIGxldCB7IHRpdGxlLCBocmVmLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG4gIGNoaWxkcmVuID0gY2hpbGRyZW4gPyBjaGlsZHJlbiA6IFtdO1xuXG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG5cbiAgY29uc3QgcGFuZWwgPSBBKFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogYCR7b3RoZXJDbGFzc2VzfSBub24tZXhwYW5kYWJsZS1wYW5lbCAke1xuICAgICAgICBocmVmID8gXCJpcy1saW5rXCIgOiBcIlwiXG4gICAgICB9YCxcbiAgICAgIGlubmVyVGV4dDogdGl0bGUsXG4gICAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgWy4uLmNoaWxkcmVuXVxuICApO1xuICBpZiAoaHJlZikge1xuICAgIHBhbmVsLmhyZWYgPSBocmVmO1xuICB9XG4gIHJldHVybiBwYW5lbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vbkV4cGFuZGFibGVQYW5lbDtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgSWNvbiA9IChpY29uQ2xhc3MpID0+IHtcbiAgY29uc3QgaWNvbiA9IEVsZW1lbnQoXCJpXCIsIHsgY2xhc3NOYW1lOiBgaWNvbiAke2ljb25DbGFzc30gZGlzcGxheS1pLWJgIH0pO1xuICByZXR1cm4gaWNvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb247XG4iLCJpbXBvcnQgeyBEaXYgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgQ2Fyb3VzZWxOYXZJbmRpY2F0b3IgZnJvbSBcIi4vQ2Fyb3VzZWxOYXZJbmRpY2F0b3JcIjtcbmltcG9ydCBDYXJvdXNlbFBsYXlQYXVzZUNvbnRhaW5lciBmcm9tIFwiLi9DYXJvdXNlbFBsYXlQYXVzZUNvbnRhaW5lclwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBDYXJvdXNlbE5hdiA9IChpbWFnZURhdGEpID0+IHtcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdihcbiAgICB7XG4gICAgICBpZDogYGAsXG4gICAgICBjbGFzc05hbWU6IGBjYXJvdXNlbC1uYXYgcHQtMWAsXG4gICAgfSxcbiAgICAvLyBjaGlsZHJlblxuICAgIFtcbiAgICAgIENhcm91c2VsUGxheVBhdXNlQ29udGFpbmVyKCksXG4gICAgICAvLyBOYXYgaW5kaWNhdG9yc1xuICAgICAgLi4uaW1hZ2VEYXRhLm1hcCgob2JqLCBpbmRleCkgPT5cbiAgICAgICAgQ2Fyb3VzZWxOYXZJbmRpY2F0b3Ioe1xuICAgICAgICAgIGltYWdlSWQ6IG9iai51dWlkLFxuICAgICAgICAgIHN0YXJ0c0FjdGl2ZTogb2JqLmlzQWN0aXZlID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICB9KVxuICAgICAgKSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxOYXY7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IHsgY2xpY2tDYXJvdXNlbE5hdiB9IGZyb20gXCIuL3VpL2Nhcm91c2VsLXVpXCI7XG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgQ2Fyb3VzZWxOYXZJbmRpY2F0b3IgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBpbWFnZUlkLCBzdGFydHNBY3RpdmUgfSA9IHByb3BzO1xuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gQnV0dG9uKFxuICAgIHtcbiAgICAgIGlkOiBgY2Fyb3VzZWwtbmF2LSR7aW1hZ2VJZH1gLFxuICAgICAgY2xhc3NOYW1lOiBgY2Fyb3VzZWwtaW5kaWNhdG9yIGRpc3BsYXktaS1iIGJnLWdyYXktbGlnaHQtNiAke1xuICAgICAgICBzdGFydHNBY3RpdmUgPyBcImFjdGl2ZVwiIDogXCJcIlxuICAgICAgfWAsXG4gICAgICBvbmNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsaWNrQ2Fyb3VzZWxOYXYoaW1hZ2VJZCk7XG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxOYXZJbmRpY2F0b3I7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRGl2IH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IHsgUGxheUJ1dHRvbiwgUGF1c2VCdXR0b24gfSBmcm9tIFwiLi9wbGF5QW5kUGF1c2VCdXR0b25zXCI7XG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgQ2Fyb3VzZWxQbGF5UGF1c2VDb250YWluZXIgPSAoKSA9PiB7XG4gIC8vXG5cbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdihcbiAgICB7XG4gICAgICBjbGFzc05hbWU6IFwiY2Fyb3VzZWwtcGxheS1wYXVzZS1jb250YWluZXJcIixcbiAgICB9LFxuICAgIC8vIGNoaWxkZXJuXG4gICAgW1BhdXNlQnV0dG9uLCBQbGF5QnV0dG9uXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsUGxheVBhdXNlQ29udGFpbmVyO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IERpdiwgSW1nIH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgQ2Fyb3VzZWxTbGlkZSA9IChpbWFnZVNvdXJjZSwgaWQsIHN0YXJ0c0FjdGl2ZSkgPT4ge1xuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRGl2KFxuICAgIHtcbiAgICAgIGlkOiBgY2Fyb3VzZWwtc2xpZGUtYCArIGlkLFxuICAgICAgY2xhc3NOYW1lOiBgY2Fyb3VzZWwtc2xpZGUgJHtzdGFydHNBY3RpdmUgPyBcImFjdGl2ZVwiIDogXCJcIn1gLFxuICAgIH0sXG4gICAgLy8gY2hpbGRyZW5cbiAgICBbXG4gICAgICBJbWcoe1xuICAgICAgICBzcmM6IGltYWdlU291cmNlLFxuICAgICAgICBjbGFzc05hbWU6IFwiY2Fyb3VzZWwtaW1hZ2VcIixcbiAgICAgIH0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFNsaWRlO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IFVsIH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IENhcm91c2VsU2xpZGUgZnJvbSBcIi4vQ2Fyb3VzZWxTbGlkZVwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgQ2Fyb3VzZWxUcmFjayA9IChpbWFnZURhdGEpID0+IHtcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IFVsKFxuICAgIHtcbiAgICAgIGlkOiBgYCxcbiAgICAgIGNsYXNzTmFtZTogYGNhcm91c2VsLXRyYWNrYCxcbiAgICB9LFxuICAgIC8vIGNoaWxkcmVuXG4gICAgW1xuICAgICAgLi4uaW1hZ2VEYXRhLm1hcCgob2JqLCBpbmRleCkgPT5cbiAgICAgICAgQ2Fyb3VzZWxTbGlkZShvYmouc3JjLCBvYmoudXVpZCwgb2JqLmlzQWN0aXZlID8gdHJ1ZSA6IGZhbHNlKVxuICAgICAgKSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxUcmFjaztcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgQ2Fyb3VzZWxUcmFjayBmcm9tIFwiLi9DYXJvdXNlbFRyYWNrXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBDYXJvdXNlbFRyYWNrQ29udGFpbmVyID0gKGltYWdlRGF0YSkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBEaXYoXG4gICAge1xuICAgICAgaWQ6IGBgLFxuICAgICAgY2xhc3NOYW1lOiBgY2Fyb3VzZWwtdHJhY2stY29udGFpbmVyYCxcbiAgICB9LFxuICAgIC8vIGNoaWxkcmVuXG4gICAgW0Nhcm91c2VsVHJhY2soaW1hZ2VEYXRhKV1cbiAgKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsVHJhY2tDb250YWluZXI7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRGl2IH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IExlZnRDYXJvdXNlbEJ1dHRvbiBmcm9tIFwiLi9MZWZ0QnV0dG9uXCI7XG5pbXBvcnQgUmlnaHRDYXJvdXNlbEJ1dHRvbiBmcm9tIFwiLi9SaWdodEJ1dHRvblwiO1xuaW1wb3J0IENhcm91c2VsVHJhY2tDb250YWluZXIgZnJvbSBcIi4vQ2Fyb3VzZWxUcmFja0NvbnRhaW5lclwiO1xuaW1wb3J0IENhcm91c2VsTmF2IGZyb20gXCIuL0Nhcm91c2VsTmF2XCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5pbXBvcnQgeyBpbWFnZURhdGEgfSBmcm9tIFwiLi9kYXRhL2ltYWdlTG9hZGVyXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBJbWFnZUNhcm91c2VsID0gKCkgPT4ge1xuICBjb25zdCBjYXJvdXNlbCA9IERpdihcbiAgICB7XG4gICAgICBpZDogYGAsXG4gICAgICBjbGFzc05hbWU6IGBjYXJvdXNlbCBwdC0xIHBiLTFgLFxuICAgIH0sXG4gICAgLy8gY2hpbGRyZW5cbiAgICBbXG4gICAgICBMZWZ0Q2Fyb3VzZWxCdXR0b24oKSxcbiAgICAgIENhcm91c2VsVHJhY2tDb250YWluZXIoaW1hZ2VEYXRhKSxcbiAgICAgIFJpZ2h0Q2Fyb3VzZWxCdXR0b24oKSxcbiAgICAgIENhcm91c2VsTmF2KGltYWdlRGF0YSksXG4gICAgXVxuICApO1xuICByZXR1cm4gY2Fyb3VzZWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNhcm91c2VsO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uXCI7XG5pbXBvcnQgeyBjbGlja0Nhcm91c2VsTGVmdCB9IGZyb20gXCIuL3VpL2Nhcm91c2VsLXVpXCI7XG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgTGVmdENhcm91c2VsQnV0dG9uID0gKHNoYXJlZENsYXNzZXMpID0+IHtcbiAgY29uc3QgYnV0dG9uID0gQnV0dG9uKFxuICAgIHtcbiAgICAgIGlkOiBgYCxcbiAgICAgIGNsYXNzTmFtZTogYGNhcm91c2VsLWJ1dHRvbiBsZWZ0IGAgKyBzaGFyZWRDbGFzc2VzLFxuICAgICAgb25jbGljaygpIHtcbiAgICAgICAgY2xpY2tDYXJvdXNlbExlZnQoKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBjaGlsZHJlblxuICAgIFtJY29uKFwiaWNvbi11cC1hcnJvdy1zaG9ydCByb3RhdGUtMjcwIFwiKV1cbiAgKTtcbiAgcmV0dXJuIGJ1dHRvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExlZnRDYXJvdXNlbEJ1dHRvbjtcbiIsImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uXCI7XG5pbXBvcnQgeyBjbGlja0Nhcm91c2VsUmlnaHQgfSBmcm9tIFwiLi91aS9jYXJvdXNlbC11aVwiO1xuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IFJpZ2h0Q2Fyb3VzZWxCdXR0b24gPSAoc2hhcmVkQ2xhc3NlcykgPT4ge1xuICBjb25zdCBidXR0b24gPSBCdXR0b24oXG4gICAge1xuICAgICAgaWQ6IGBgLFxuICAgICAgY2xhc3NOYW1lOiBgY2Fyb3VzZWwtYnV0dG9uIHJpZ2h0IGAgKyBzaGFyZWRDbGFzc2VzLFxuICAgICAgb25jbGljaygpIHtcbiAgICAgICAgY2xpY2tDYXJvdXNlbFJpZ2h0KCk7XG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gY2hpbGRyZW5cbiAgICBbSWNvbihcImljb24tdXAtYXJyb3ctc2hvcnQgcm90YXRlLTkwXCIpXVxuICApO1xuICByZXR1cm4gYnV0dG9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmlnaHRDYXJvdXNlbEJ1dHRvbjtcbiIsImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBnZXRSYW5kb21JbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbHNcIjtcblxuLy8gSW1hZ2Ugc291cmNlIGluZm9cbmZ1bmN0aW9uIGdldFBpY3N1bUlkKG1pbiwgbWF4LCBleGNsdXNpb25zKSB7XG4gIGxldCByYW5kSW50ID0gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KTtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpZiAoZXhjbHVzaW9ucy5pbmNsdWRlcyhyYW5kSW50KSkge1xuICAgICAgcmFuZEludCA9IGdldFJhbmRvbUludChtaW4sIG1heCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByYW5kSW50O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21JbWFnZVNyYyh3aWR0aCwgaGVpZ2h0KSB7XG4gIHJldHVybiBgaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLyR7Z2V0UGljc3VtSWQoMSwgMTAwLCBbXG4gICAgOTcsXG4gIF0pfS8ke3dpZHRofS8ke2hlaWdodH1gO1xufVxuXG5jb25zdCBudW1JbWFnZXMgPSA3O1xuY29uc3QgaW1hZ2VXaWR0aCA9IDUwMDtcbmNvbnN0IGltYWdlSGVpZ2h0ID0gMzAwO1xuXG4vLyBhZGQgaXNBY3RpdmU6IHRydWUgdG8gdGhlIHNsaWRlIHlvdSB3YW50IHRvIHN0YXJ0IGFzIGFjdGl2ZVxuY29uc3QgaW1hZ2VTb3VyY2VzID0gW1xuICB7IHNyYzogZ2V0UmFuZG9tSW1hZ2VTcmMoaW1hZ2VXaWR0aCwgaW1hZ2VIZWlnaHQpLCBpc0FjdGl2ZTogdHJ1ZSB9LFxuICAuLi5BcnJheShudW1JbWFnZXMpXG4gICAgLmZpbGwobnVsbClcbiAgICAubWFwKChlKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzcmM6IGdldFJhbmRvbUltYWdlU3JjKGltYWdlV2lkdGgsIGltYWdlSGVpZ2h0KSxcbiAgICAgIH07XG4gICAgfSksXG5dO1xuXG5leHBvcnQgY29uc3QgaW1hZ2VEYXRhID0gaW1hZ2VTb3VyY2VzLm1hcCgob2JqKSA9PiAoe1xuICAuLi5vYmosXG4gIHV1aWQ6IHV1aWR2NCgpLFxufSkpO1xuIiwiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb25cIjtcbmltcG9ydCB7IGNsaWNrQ2Fyb3VzZWxQbGF5LCBjbGlja0Nhcm91c2VsUGF1c2UgfSBmcm9tIFwiLi91aS9jYXJvdXNlbC11aVwiO1xuXG5leHBvcnQgY29uc3QgUGxheUJ1dHRvbiA9IEJ1dHRvbihcbiAge1xuICAgIGNsYXNzTmFtZTogXCJwbGF5LWJ1dHRvbiB2aXNpYmxlXCIsXG4gICAgb25jbGljaygpIHtcbiAgICAgIGNsaWNrQ2Fyb3VzZWxQbGF5KCk7XG4gICAgfSxcbiAgfSxcbiAgW0ljb24oXCJpY29uLXRyaWFuZ2xlIHJvdGF0ZS05MCBmb250LXNtIHRleHQtZ3JheS1kYXJrLTRcIildXG4pO1xuXG5leHBvcnQgY29uc3QgUGF1c2VCdXR0b24gPSBCdXR0b24oXG4gIHtcbiAgICBjbGFzc05hbWU6IFwicGF1c2UtYnV0dG9uXCIsXG4gICAgb25jbGljaygpIHtcbiAgICAgIGNsaWNrQ2Fyb3VzZWxQYXVzZSgpO1xuICAgIH0sXG4gIH0sXG4gIFtJY29uKFwiaWNvbi1wYXVzZSBmb250LXNtIHRleHQtZ3JheS1kYXJrLTRcIildXG4pO1xuIiwiLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgVVRJTElUSUVTICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuZnVuY3Rpb24gZ2V0QWxsQ2Fyb3VzZWxTbGlkZXMoKSB7XG4gIHJldHVybiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbC10cmFja1wiKS5jaGlsZE5vZGVzXTtcbn1cblxuZnVuY3Rpb24gZ2V0QWxsQ2Fyb3VzZWxTbGlkZUlkcygpIHtcbiAgcmV0dXJuIGdldEFsbENhcm91c2VsU2xpZGVzKCkubWFwKChlbGVtKSA9PiBlbGVtLmlkKTtcbn1cblxuZnVuY3Rpb24gZ2V0QWxsQ2Fyb3VzZWxOYXZCdXR0b25zKCkge1xuICByZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2Fyb3VzZWwtaW5kaWNhdG9yXCIpXTtcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudFNsaWRlSW5kZXgoKSB7XG4gIGNvbnN0IGFsbFNsaWRlSWRzID0gZ2V0QWxsQ2Fyb3VzZWxTbGlkZUlkcygpO1xuICBjb25zdCBjdXJyZW50U2xpZGVJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwtc2xpZGUuYWN0aXZlXCIpLmlkO1xuICBjb25zdCBjdXJyZW50U2xpZGVJbmRleCA9IGFsbFNsaWRlSWRzLmluZGV4T2YoY3VycmVudFNsaWRlSWQpO1xuXG4gIHJldHVybiBjdXJyZW50U2xpZGVJbmRleDtcbn1cblxuZnVuY3Rpb24gZ2V0UHJldmlvdXNTbGlkZUluZGV4KCkge1xuICBsZXQgcHJldmlvdXNTbGlkZUluZGV4ID0gZ2V0Q3VycmVudFNsaWRlSW5kZXgoKSAtIDE7XG5cbiAgLy8gaWYgdGhlIGNhbGN1bGF0ZWQgaW5kZXggaXMgb3V0c2lkZSB0aGUgbGlzdCwgc2V0IGl0IHRvIHRoZSBpbmRleCBvZiB0aGUgbGFzdCBpdGVtIGluIHRoZSBsaXN0XG4gIGNvbnN0IGNvcnJlY3RlZEluZGV4ID1cbiAgICBwcmV2aW91c1NsaWRlSW5kZXggPCAwXG4gICAgICA/IGdldEFsbENhcm91c2VsU2xpZGVJZHMoKS5sZW5ndGggLSAxXG4gICAgICA6IHByZXZpb3VzU2xpZGVJbmRleDtcblxuICByZXR1cm4gY29ycmVjdGVkSW5kZXg7XG59XG5cbmZ1bmN0aW9uIGdldE5leHRTbGlkZUluZGV4KCkge1xuICBsZXQgbmV4dFNsaWRlSW5kZXggPSBnZXRDdXJyZW50U2xpZGVJbmRleCgpICsgMTtcblxuICAvLyBpZiB0aGUgY2FsY3VsYXRlZCBpbmRleCBpcyBvdXRzaWRlIHRoZSBsaXN0LCBzZXQgaXQgdG8gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBsaXN0XG4gIGNvbnN0IGNvcnJlY3RlZEluZGV4ID1cbiAgICBuZXh0U2xpZGVJbmRleCA+IGdldEFsbENhcm91c2VsU2xpZGVJZHMoKS5sZW5ndGggLSAxID8gMCA6IG5leHRTbGlkZUluZGV4O1xuXG4gIHJldHVybiBjb3JyZWN0ZWRJbmRleDtcbn1cblxuLy8gbW92ZSB0byB0aGUgc2VsZWN0ZWQgc2xpZGVcbmV4cG9ydCBmdW5jdGlvbiBnb3RvU3BlY2lmaWNTbGlkZShpZCkge1xuICBjb25zdCBhbGxOYXZCdXR0b25zID0gZ2V0QWxsQ2Fyb3VzZWxOYXZCdXR0b25zKCk7XG4gIGNvbnN0IHNlbGVjdGVkTmF2QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNhcm91c2VsLW5hdi0ke2lkfWApO1xuICBjb25zdCBzZWxlY3RlZFNsaWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNhcm91c2VsLXNsaWRlLSR7aWR9YCk7XG4gIGNvbnN0IGFsbFNsaWRlcyA9IGdldEFsbENhcm91c2VsU2xpZGVzKCk7XG5cbiAgYWxsU2xpZGVzLmZvckVhY2goKHNsaWRlKSA9PiBzbGlkZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgc2VsZWN0ZWRTbGlkZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXG4gIGFsbE5hdkJ1dHRvbnMuZm9yRWFjaCgoc2xpZGUpID0+IHNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuICBzZWxlY3RlZE5hdkJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIEVWRU5UIEhBTkRMRVJTICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbi8vIG1vdmUgdG8gdGhlIHNlbGVjdGVkIHNsaWRlIHdoZW4gY2xpY2tpbmcgb24gdGhlIGFzc29jaWF0ZWQgbmF2IGJ1dHRvblxuZXhwb3J0IGZ1bmN0aW9uIGNsaWNrQ2Fyb3VzZWxOYXYoaWQpIHtcbiAgZ290b1NwZWNpZmljU2xpZGUoaWQpO1xufVxuXG4vLyBtb3ZlIHJpZ2h0IHdoZW4gY2xpY2tpbmcgb24gdGhlIHJpZ2h0IGJ1dHRvblxuZXhwb3J0IGZ1bmN0aW9uIGNsaWNrQ2Fyb3VzZWxSaWdodCgpIHtcbiAgY29uc3QgaWQgPSBnZXRBbGxDYXJvdXNlbFNsaWRlSWRzKClbZ2V0TmV4dFNsaWRlSW5kZXgoKV0ucmVwbGFjZShcbiAgICBcImNhcm91c2VsLXNsaWRlLVwiLFxuICAgIFwiXCJcbiAgKTtcbiAgZ290b1NwZWNpZmljU2xpZGUoaWQpO1xufVxuXG4vLyBtb3ZlIGxlZnQgd2hlbiBjbGlja2luZyBvbiB0aGUgcmlnaHQgYnV0dG9uXG5leHBvcnQgZnVuY3Rpb24gY2xpY2tDYXJvdXNlbExlZnQoKSB7XG4gIGNvbnN0IGlkID0gZ2V0QWxsQ2Fyb3VzZWxTbGlkZUlkcygpW2dldFByZXZpb3VzU2xpZGVJbmRleCgpXS5yZXBsYWNlKFxuICAgIFwiY2Fyb3VzZWwtc2xpZGUtXCIsXG4gICAgXCJcIlxuICApO1xuICBnb3RvU3BlY2lmaWNTbGlkZShpZCk7XG59XG5cbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBBVVRPIFBST0dSRVNTSU9OICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuZXhwb3J0IGZ1bmN0aW9uIGNsaWNrQ2Fyb3VzZWxQbGF5KCkge1xuICBoYW5kbGVBdXRvQWR2YW5jZShcInBsYXlcIik7XG4gIGNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsIC5wbGF5LWJ1dHRvblwiKTtcbiAgcGxheUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcblxuICBjb25zdCBwYXVzZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwgLnBhdXNlLWJ1dHRvblwiKTtcbiAgcGF1c2VCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGlja0Nhcm91c2VsUGF1c2UoKSB7XG4gIGhhbmRsZUF1dG9BZHZhbmNlKFwicGF1c2VcIik7XG4gIGNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsIC5wbGF5LWJ1dHRvblwiKTtcbiAgcGxheUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcblxuICBjb25zdCBwYXVzZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwgLnBhdXNlLWJ1dHRvblwiKTtcbiAgcGF1c2VCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XG59XG5cbmxldCBpbnRlcnZhbDtcbi8qKlxuICogQSBmdW5jdGlvbiB0byBjcmVhdGUgb3IgY2FuY2VsIHRoZSBhdXRvIGFkdmFuY2UgdGltZXJcbiAqIHlvdSB3aWxsIG5lZXQgdG8gZGVjbGFyZSBpbnRlcnZhbCAobGV0IGludGVydmFsKSBiZWZvcmVcbiAqIHRoaXMgZnVuY3Rpb24gdG8gYWxsb3cgdGhlIGludGVydmFsIHRvIGJlIGNyZWF0ZWQgLyByZWZlbmVuY2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbW9kZSBhIHN0cmluZyBjb250YWluaW5nICdwbGF5JyBvciAncGF1c2UnIHRvIGluZGljYXRlIHRoZSBtb2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVBdXRvQWR2YW5jZShtb2RlKSB7XG4gIGNvbnN0IHBsYXlpbmcgPSBtb2RlID09PSBcInBsYXlcIiA/IHRydWUgOiBmYWxzZTtcbiAgaWYgKHBsYXlpbmcpIHtcbiAgICAvLyBzdGFydCBhbiBpbnRlcnZhbCB0aW1lciBhbmQgY2FwdHVyZSBpdHMgcmVmZXJlbmNlXG4gICAgaW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoY2xpY2tDYXJvdXNlbFJpZ2h0LCA1MDAwKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBjYW5jZWwgdGhlIHJlZmVyZW5jZSB5b3UgY2FwdHVyZWRcbiAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH1cbn1cbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQge1xuICBEaXYsXG4gIExhYmVsLFxuICBTcGFuLFxuICBEYXRhbGlzdCxcbiAgT3B0aW9uLFxuICBTZWxlY3QsXG59IGZyb20gXCIuLi8uLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBjb3VudHJpZXMgfSBmcm9tIFwiLi9jb3VudHJpZXNMaXN0XCI7XG5pbXBvcnQgeyBoYW5kbGVDb3VudHJ5SW5wdXQgfSBmcm9tIFwiLi9jb3VudHJ5LWlucHV0LXZhbGlkYXRpb25cIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5jb25zdCBjb21wb25lbnRVdWlkID0gdXVpZHY0KCk7XG5leHBvcnQgY29uc3QgY291bnRyeUlucHV0SWQgPSBgZW1haWwtaW5wdXQtJHtjb21wb25lbnRVdWlkfWA7XG5cbmNvbnN0IENvdW50cnlJbnB1dCA9ICgpID0+IHtcbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdihcbiAgICB7IGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIExhYmVsKHtcbiAgICAgICAgZm9yOiBgJHtjb3VudHJ5SW5wdXRJZH1gLFxuICAgICAgICBpbm5lckhUTUw6IGBXaGF0IGNvdW50cnkgYXJlIHlvdSBmcm9tPyAke1xuICAgICAgICAgIFNwYW4oe1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBcInJlcXVpcmVkLW1hcmtlclwiLFxuICAgICAgICAgICAgaW5uZXJUZXh0OiBcIipcIixcbiAgICAgICAgICB9KS5vdXRlckhUTUxcbiAgICAgICAgfWAsXG4gICAgICB9KSxcblxuICAgICAgU2VsZWN0KFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcImNvdW50cnktaW5wdXRcIixcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICBvbmlucHV0KCkge1xuICAgICAgICAgICAgaGFuZGxlQ291bnRyeUlucHV0KCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIE9wdGlvbigpLFxuICAgICAgICAgIC4uLmNvdW50cmllcy5tYXAoKGNvdW50cnkpID0+IE9wdGlvbih7IGlubmVyVGV4dDogY291bnRyeSB9KSksXG4gICAgICAgIF1cbiAgICAgICksXG5cbiAgICAgIERpdih7IGNsYXNzTmFtZTogXCJlcnJvclwiIH0pLFxuICAgICAgRGF0YWxpc3QoeyBpZDogXCJjb3VudHJpZXNcIiB9LCBbXG4gICAgICAgIC4uLmNvdW50cmllcy5tYXAoKGNvdW50cnkpID0+IE9wdGlvbih7IGlubmVyVGV4dDogY291bnRyeSB9KSksXG4gICAgICBdKSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ291bnRyeUlucHV0O1xuIiwiZXhwb3J0IGNvbnN0IGNvdW50cmllcyA9IFtcbiAgXCJBZmdoYW5pc3RhblwiLFxuICBcIkFsYmFuaWVuXCIsXG4gIFwiQWxnZXJpZXRcIixcbiAgXCJBbmdvbGFcIixcbiAgXCJBbnRpZ3VhIG9jaCBCYXJidWRhXCIsXG4gIFwiQXJnZW50aW5hXCIsXG4gIFwiQXVzdHJhbGllblwiLFxuICBcIkF6ZXJiYWpkemphblwiLFxuICBcIsOWc3RlcnJpa2VcIixcbiAgXCLDlnN0dGltb3JcIixcbiAgXCJCYWhhbWFzXCIsXG4gIFwiQmFocmFpblwiLFxuICBcIkJhbmdsYWRlc2hcIixcbiAgXCJCYXJiYWRvc1wiLFxuICBcIkJlbGdpZW5cIixcbiAgXCJCZW5pblwiLFxuICBcIkJlcm11ZGFcIixcbiAgXCJCaHV0YW5cIixcbiAgXCJCb2xpdmlhXCIsXG4gIFwiQm9zbmllbiBvY2ggSGVyY2Vnb3ZpbmFcIixcbiAgXCJCb3Rzd2FuYVwiLFxuICBcIkJyYXNpbGllblwiLFxuICBcIkJydW5laSBEYXJ1c3NhbGFtXCIsXG4gIFwiQnVsZ2FyaWVuXCIsXG4gIFwiQnVya2luYSBGYXNvXCIsXG4gIFwiQnVydW5kaVwiLFxuICBcIkNlbnRyYWxhZnJpa2Fuc2thIFJlcHVibGlrZW5cIixcbiAgXCJDaGlsZVwiLFxuICBcIkNvbG9tYmlhXCIsXG4gIFwiQ29zdGEgUmljYVwiLFxuICBcIkN5cGVyblwiLFxuICBcIkRhbm1hcmtcIixcbiAgXCJEZW1va3JhdGlza2EgUmVwdWJsaWtlbiBLb25nb1wiLFxuICBcIkRvbWluaWthbnNrYSBSZXB1Ymxpa2VuXCIsXG4gIFwiRWN1YWRvclwiLFxuICBcIkVneXB0ZW5cIixcbiAgXCJFbCBTYWx2YWRvclwiLFxuICBcIkVsZmVuYmVuc2t1c3RlblwiLFxuICBcIkVzdGxhbmRcIixcbiAgXCJFdGlvcGllblwiLFxuICBcIkbDpHLDtmFybmFcIixcbiAgXCJGw7ZyZW5hZGUgQXJhYmVtaXJhdGVuXCIsXG4gIFwiRmlsaXBwaW5lcm5hXCIsXG4gIFwiRmlubGFuZFwiLFxuICBcIkZyYW5rcmlrZVwiLFxuICBcIkdhYm9uXCIsXG4gIFwiR2VvcmdpZW5cIixcbiAgXCJHaGFuYVwiLFxuICBcIkdpYnJhbHRhclwiLFxuICBcIkdyw7ZubGFuZFwiLFxuICBcIkdyZWtsYW5kXCIsXG4gIFwiR3JlbmFkYVwiLFxuICBcIkd1YXRlbWFsYVwiLFxuICBcIkhvbmR1cmFzXCIsXG4gIFwiSG9uZyBLb25nXCIsXG4gIFwiSW5kaWVuXCIsXG4gIFwiSW5kb25lc2llblwiLFxuICBcIklyYWtcIixcbiAgXCJJcmFuXCIsXG4gIFwiSXJsYW5kXCIsXG4gIFwiSXNsYW5kXCIsXG4gIFwiSXNyYWVsXCIsXG4gIFwiSXRhbGllblwiLFxuICBcIkphbWFpY2FcIixcbiAgXCJKYXBhblwiLFxuICBcIkplbWVuXCIsXG4gIFwiSmVyc2V5XCIsXG4gIFwiSm9yZGFuaWVuXCIsXG4gIFwiS2FtYm9kamFcIixcbiAgXCJLYW5hZGFcIixcbiAgXCJLYXpha3N0YW5cIixcbiAgXCJLZW55YVwiLFxuICBcIktpbmFcIixcbiAgXCJLaXJpYmF0aVwiLFxuICBcIktyb2F0aWVuXCIsXG4gIFwiS3ViYVwiLFxuICBcIkt1d2FpdFwiLFxuICBcIkxhb3NcIixcbiAgXCJMZXR0bGFuZFwiLFxuICBcIkxpYmFub25cIixcbiAgXCJMaWJ5ZW5cIixcbiAgXCJMaXRhdWVuXCIsXG4gIFwiTHV4ZW1idXJnXCIsXG4gIFwiTWFkYWdhc2thclwiLFxuICBcIk1ha2Vkb25pZW5cIixcbiAgXCJNYWxhd2lcIixcbiAgXCJNYWxheXNpYVwiLFxuICBcIk1hbGRpdmVybmFcIixcbiAgXCJNYWxpXCIsXG4gIFwiTWFsdGFcIixcbiAgXCJNYXJvY2tvXCIsXG4gIFwiTWF1cml0aXVzXCIsXG4gIFwiTWV4aWtvXCIsXG4gIFwiTW9jYW1iaXF1ZVwiLFxuICBcIk1vbmFjb1wiLFxuICBcIk1vbmdvbGlldFwiLFxuICBcIk15YW5tYXJcIixcbiAgXCJOYW1pYmlhXCIsXG4gIFwiTmVkZXJsw6RuZGVybmFcIixcbiAgXCJOZWRlcmzDpG5kc2thIEFudGlsbGVybmFcIixcbiAgXCJOZXBhbFwiLFxuICBcIk5pY2FyYWd1YVwiLFxuICBcIk5pZ2VyXCIsXG4gIFwiTmlnZXJpYVwiLFxuICBcIk5vcmdlXCIsXG4gIFwiTnlhIFplZWxhbmRcIixcbiAgXCJPbWFuXCIsXG4gIFwiUGFraXN0YW5cIixcbiAgXCJQYW5hbWFcIixcbiAgXCJQYXJhZ3VheVwiLFxuICBcIlBlcnVcIixcbiAgXCJQb2xlblwiLFxuICBcIlBvcnR1Z2FsXCIsXG4gIFwiUHVlcnRvIFJpY29cIixcbiAgXCJRYXRhclwiLFxuICBcIlJ1bcOkbmllblwiLFxuICBcIlJ3YW5kYVwiLFxuICBcIlJ5c3NsYW5kXCIsXG4gIFwiU2FpbnQgTHVjaWFcIixcbiAgXCJTYWludCBWaW5jZW50IG9jaCBHcmVuYWRpbmVybmFcIixcbiAgXCJTYW1vYVwiLFxuICBcIlNhbiBNYXJpbm9cIixcbiAgXCJTYW8gVG9tZSBvY2ggUHJpbmNpcGVcIixcbiAgXCJTYXVkaWFyYWJpZW5cIixcbiAgXCJTY2h3ZWl6XCIsXG4gIFwiU2VuZWdhbFwiLFxuICBcIlNlcmJpZW4gb2NoIE1vbnRlbmVncm9cIixcbiAgXCJTZXljaGVsbGVybmFcIixcbiAgXCJTaWVycmEgTGVvbmVcIixcbiAgXCJTaW5nYXBvcmVcIixcbiAgXCJTbG92YWtpZW5cIixcbiAgXCJTbG92ZW5pZW5cIixcbiAgXCJTb21hbGlhXCIsXG4gIFwiU3BhbmllblwiLFxuICBcIlNyaSBMYW5rYVwiLFxuICBcIlN1ZGFuXCIsXG4gIFwiU3VyaW5hbVwiLFxuICBcIlN2ZXJpZ2VcIixcbiAgXCJTd2F6aWxhbmRcIixcbiAgXCJTeWRhZnJpa2FcIixcbiAgXCJTeWRrb3JlYVwiLFxuICBcIlN5cmllblwiLFxuICBcIlRhaXdhblwiLFxuICBcIlRhbnphbmlhXCIsXG4gIFwiVGhhaWxhbmRcIixcbiAgXCJUamVja2llblwiLFxuICBcIlRyaW5pZGFkIG9jaCBUb2JhZ29cIixcbiAgXCJUdW5pc2llblwiLFxuICBcIlR1cmtpZXRcIixcbiAgXCJUeXNrbGFuZFwiLFxuICBcIlVnYW5kYVwiLFxuICBcIlVrcmFpbmFcIixcbiAgXCJVbmdlcm5cIixcbiAgXCJVcnVndWF5XCIsXG4gIFwiVVNBXCIsXG4gIFwiVXpiZWtpc3RhblwiLFxuICBcIlZlbmV6dWVsYVwiLFxuICBcIlZpZXRuYW1cIixcbiAgXCJWaXRyeXNzbGFuZFwiLFxuICBcIlphbWJpYVwiLFxuICBcIlppbWJhYndlXCIsXG5dO1xuIiwiaW1wb3J0IHsgY2xlYXJFcnJvciB9IGZyb20gXCIuLi9mb3JtLXZhbGlkYXRpb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvdW50cnlJbnB1dCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXNzaWdubWVudCAuY291bnRyeS1pbnB1dFwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvdW50cnlJbnB1dEVycm9yKCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hc3NpZ25tZW50IC5jb3VudHJ5LWlucHV0ICsgLmVycm9yXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY291bnRyeUlzVmFsaWQoKSB7XG4gIHJldHVybiBnZXRDb3VudHJ5SW5wdXQoKS52YWxpZGl0eS52YWxpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNvdW50cnlJbnB1dCgpIHtcbiAgY29uc3QgY291bnRyeSA9IGdldENvdW50cnlJbnB1dCgpO1xuICBjb25zdCBlcnJvciA9IGdldENvdW50cnlJbnB1dEVycm9yKCk7XG5cbiAgaWYgKGNvdW50cnkudmFsaWRpdHkudmFsaWQpIHtcbiAgICBjbGVhckVycm9yKGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0NvdW50cnlFcnJvcigpIHtcbiAgY29uc3QgZXJyb3IgPSBnZXRDb3VudHJ5SW5wdXRFcnJvcigpO1xuICBsZXQgZXJyb3JNZXNzYWdlID0gXCJQbGVhc2Ugc2VsZWN0IGFuIG9wdGlvbiBmcm9tIHRoZSBsaXN0LlwiO1xuICBlcnJvci5pbm5lclRleHQgPSBlcnJvck1lc3NhZ2U7XG4gIGVycm9yLmNsYXNzTmFtZSA9IFwiZXJyb3IgYWN0aXZlXCI7XG59XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRGl2LCBJbnB1dCwgTGFiZWwsIFNwYW4gfSBmcm9tIFwiLi4vLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHsgaGFuZGxlRW1haWxJbnB1dCB9IGZyb20gXCIuL2VtYWlsLWlucHV0LXZhbGlkYXRpb25cIjtcbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuY29uc3QgY29tcG9uZW50VXVpZCA9IHV1aWR2NCgpO1xuZXhwb3J0IGNvbnN0IGVtYWlsSW5wdXRJZCA9IGBlbWFpbC1pbnB1dC0ke2NvbXBvbmVudFV1aWR9YDtcblxuY29uc3QgRW1haWxJbnB1dCA9ICgpID0+IHtcbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdihcbiAgICB7IGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIExhYmVsKHtcbiAgICAgICAgZm9yOiBgJHtlbWFpbElucHV0SWR9YCxcbiAgICAgICAgaW5uZXJIVE1MOiBgUGxlYXNlIGVudGVyIGFuIGVtYWlsIGFkZHJlc3MgJHtcbiAgICAgICAgICBTcGFuKHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJyZXF1aXJlZC1tYXJrZXJcIixcbiAgICAgICAgICAgIGlubmVyVGV4dDogXCIqXCIsXG4gICAgICAgICAgfSkub3V0ZXJIVE1MXG4gICAgICAgIH1gLFxuICAgICAgfSksXG4gICAgICBJbnB1dCh7XG4gICAgICAgIGlkOiBgJHtlbWFpbElucHV0SWR9YCxcbiAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgb25pbnB1dCgpIHtcbiAgICAgICAgICBoYW5kbGVFbWFpbElucHV0KCk7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIERpdih7IGNsYXNzTmFtZTogXCJlcnJvclwiIH0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbWFpbElucHV0O1xuIiwiaW1wb3J0IHsgY2xlYXJFcnJvciB9IGZyb20gXCIuLi9mb3JtLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGVtYWlsSW5wdXRJZCB9IGZyb20gXCIuL0VtYWlsSW5wdXRcIjtcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbWFpbElucHV0KCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZW1haWxJbnB1dElkKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbWFpbElucHV0RXJyb3IoKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtlbWFpbElucHV0SWR9ICsgLmVycm9yYCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbWFpbElzVmFsaWQoKSB7XG4gIHJldHVybiBnZXRFbWFpbElucHV0KCkudmFsaWRpdHkudmFsaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVFbWFpbElucHV0KCkge1xuICBpZiAoZW1haWxJc1ZhbGlkKCkpIHtcbiAgICBjbGVhckVycm9yKGdldEVtYWlsSW5wdXRFcnJvcigpKTtcbiAgfSBlbHNlIHtcbiAgICBzaG93RW1haWxFcnJvcigpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93RW1haWxFcnJvcigpIHtcbiAgY29uc3QgZW1haWwgPSBnZXRFbWFpbElucHV0KCk7XG4gIGNvbnN0IGVycm9yID0gZ2V0RW1haWxJbnB1dEVycm9yKCk7XG4gIGxldCBlcnJvck1lc3NhZ2UgPSBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuXCI7XG5cbiAgaWYgKGVtYWlsLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIGVycm9yTWVzc2FnZSA9IFwiWW91IG11c3QgZW50ZXIgYW4gZW1haWwgYWRkcmVzcyB0byBjb250aW51ZS5cIjtcbiAgfVxuXG4gIGVycm9yLmlubmVyVGV4dCA9IGVycm9yTWVzc2FnZTtcbiAgZXJyb3IuY2xhc3NOYW1lID0gXCJlcnJvciBhY3RpdmVcIjtcbn1cbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYsIExhYmVsLCBJbnB1dCwgU3BhbiB9IGZyb20gXCIuLi8uLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBoYW5kbGVaaXBDb2RlSW5wdXQgfSBmcm9tIFwiLi96aXAtY29kZS1pbnB1dC12YWxpZGF0aW9uXCI7XG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cbmNvbnN0IGNvbXBvbmVudFV1aWQgPSB1dWlkdjQoKTtcbmV4cG9ydCBjb25zdCB6aXBDb2RlSW5wdXRJZCA9IGB6aXAtY29kZS1pbnB1dC0ke2NvbXBvbmVudFV1aWR9YDtcbmNvbnN0IFppcENvZGVJbnB1dCA9ICgpID0+IHtcbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdihcbiAgICB7IGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIExhYmVsKHtcbiAgICAgICAgZm9yOiBgJHt6aXBDb2RlSW5wdXRJZH1gLFxuICAgICAgICBpbm5lckhUTUw6IGBQbGVhc2UgZW50ZXIgeW91ciB6aXAgY29kZSAke1xuICAgICAgICAgIFNwYW4oe1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBcInJlcXVpcmVkLW1hcmtlclwiLFxuICAgICAgICAgICAgaW5uZXJUZXh0OiBcIipcIixcbiAgICAgICAgICB9KS5vdXRlckhUTUxcbiAgICAgICAgfWAsXG4gICAgICB9KSxcbiAgICAgIElucHV0KHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBwYXR0ZXJuOiBcIl5bMC05XXs1fSg/Oi1bMC05XXs0fSk/JFwiLFxuICAgICAgICBpZDogYCR7emlwQ29kZUlucHV0SWR9YCxcbiAgICAgICAgb25pbnB1dCgpIHtcbiAgICAgICAgICBoYW5kbGVaaXBDb2RlSW5wdXQoKTtcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgRGl2KHsgY2xhc3NOYW1lOiBcImVycm9yXCIgfSksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFppcENvZGVJbnB1dDtcbiIsImltcG9ydCB7IGNsZWFyRXJyb3IgfSBmcm9tIFwiLi4vZm9ybS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyB6aXBDb2RlSW5wdXRJZCB9IGZyb20gXCIuL1ppcENvZGVJbnB1dFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WmlwQ29kZUlucHV0KCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoemlwQ29kZUlucHV0SWQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFppcENvZGVJbnB1dEVycm9yKCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7emlwQ29kZUlucHV0SWR9ICsgLmVycm9yYCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB6aXBDb2RlSXNWYWxpZCgpIHtcbiAgcmV0dXJuIGdldFppcENvZGVJbnB1dCgpLnZhbGlkaXR5LnZhbGlkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlWmlwQ29kZUlucHV0KCkge1xuICBpZiAoemlwQ29kZUlzVmFsaWQoKSkge1xuICAgIGNsZWFyRXJyb3IoZ2V0WmlwQ29kZUlucHV0RXJyb3IoKSk7XG4gIH0gZWxzZSB7XG4gICAgc2hvd1ppcENvZGVFcnJvcigpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93WmlwQ29kZUVycm9yKCkge1xuICBjb25zdCB6aXBDb2RlID0gZ2V0WmlwQ29kZUlucHV0KCk7XG4gIGNvbnN0IGVycm9yID0gZ2V0WmlwQ29kZUlucHV0RXJyb3IoKTtcbiAgbGV0IGVycm9yTWVzc2FnZSA9IFwiRW50ZXIgYSB2YWxpZCB6aXAgY29kZSBmb3JtYXQuICg1NTU1NSBvciA1NTU1NS00NDQ0KVwiO1xuXG4gIGlmICh6aXBDb2RlLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIGVycm9yTWVzc2FnZSA9IFwiWW91IG11c3QgZW50ZXIgYSB2YWxpZCB6aXAgY29kZSB0byBjb250aW51ZS5cIjtcbiAgfSBlbHNlIHtcbiAgfVxuXG4gIGVycm9yLmlubmVyVGV4dCA9IGVycm9yTWVzc2FnZTtcbiAgZXJyb3IuY2xhc3NOYW1lID0gXCJlcnJvciBhY3RpdmVcIjtcbn1cbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYsIElucHV0LCBMYWJlbCwgU3BhbiB9IGZyb20gXCIuLi8uLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBoYW5kbGVDb25maXJtUGFzc3dvcmRJbnB1dCB9IGZyb20gXCIuL3Bhc3N3b3Jkcy12YWxpZGF0aW9uXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuY29uc3QgY29tcG9uZW50VXVpZCA9IHV1aWR2NCgpO1xuZXhwb3J0IGNvbnN0IGNvbmZpcm1QYXNzd29yZElucHV0SWQgPSBgY29uZmlybS1wYXNzd29yZC1pbnB1dC0ke2NvbXBvbmVudFV1aWR9YDtcblxuY29uc3QgQ29uZmlybVBhc3N3b3JkSW5wdXQgPSAoKSA9PiB7XG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAgeyBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcyB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBMYWJlbCh7XG4gICAgICAgIGZvcjogYCR7Y29uZmlybVBhc3N3b3JkSW5wdXRJZH1gLFxuICAgICAgICBpbm5lckhUTUw6IGBDb25maXJtIHBhc3N3b3JkICR7XG4gICAgICAgICAgU3Bhbih7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwicmVxdWlyZWQtbWFya2VyXCIsXG4gICAgICAgICAgICBpbm5lclRleHQ6IFwiKlwiLFxuICAgICAgICAgIH0pLm91dGVySFRNTFxuICAgICAgICB9YCxcbiAgICAgIH0pLFxuICAgICAgSW5wdXQoe1xuICAgICAgICBpZDogYCR7Y29uZmlybVBhc3N3b3JkSW5wdXRJZH1gLFxuICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBvbmlucHV0KCkge1xuICAgICAgICAgIGhhbmRsZUNvbmZpcm1QYXNzd29yZElucHV0KCk7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIERpdih7IGNsYXNzTmFtZTogXCJlcnJvclwiIH0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25maXJtUGFzc3dvcmRJbnB1dDtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYsIElucHV0LCBMYWJlbCwgU3BhbiB9IGZyb20gXCIuLi8uLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQge1xuICBoYW5kbGVQYXNzd29yZElucHV0LFxuICBwYXNzd29yZFJlZ2V4U3RyaW5nLFxufSBmcm9tIFwiLi9wYXNzd29yZHMtdmFsaWRhdGlvblwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cbmNvbnN0IGNvbXBvbmVudFV1aWQgPSB1dWlkdjQoKTtcbmV4cG9ydCBjb25zdCBwYXNzd29yZElucHV0SWQgPSBgcGFzc3dvcmQtaW5wdXQtJHtjb21wb25lbnRVdWlkfWA7XG5cbmNvbnN0IFBhc3N3b3JkSW5wdXQgPSAoKSA9PiB7XG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAgeyBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcyB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBMYWJlbCh7XG4gICAgICAgIGZvcjogYCR7cGFzc3dvcmRJbnB1dElkfWAsXG4gICAgICAgIGlubmVySFRNTDogYENyZWF0ZSB5b3VyIHBhc3N3b3JkICR7XG4gICAgICAgICAgU3Bhbih7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwicmVxdWlyZWQtbWFya2VyXCIsXG4gICAgICAgICAgICBpbm5lclRleHQ6IFwiKlwiLFxuICAgICAgICAgIH0pLm91dGVySFRNTFxuICAgICAgICB9YCxcbiAgICAgIH0pLFxuICAgICAgSW5wdXQoe1xuICAgICAgICBpZDogYCR7cGFzc3dvcmRJbnB1dElkfWAsXG4gICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIHBhdHRlcm46IHBhc3N3b3JkUmVnZXhTdHJpbmcsXG4gICAgICAgIG9uaW5wdXQoKSB7XG4gICAgICAgICAgaGFuZGxlUGFzc3dvcmRJbnB1dCgpO1xuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBEaXYoeyBjbGFzc05hbWU6IFwiZXJyb3JcIiB9KSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFzc3dvcmRJbnB1dDtcbiIsImltcG9ydCB7IGNsZWFyRXJyb3IgfSBmcm9tIFwiLi4vZm9ybS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBjb25maXJtUGFzc3dvcmRJbnB1dElkIH0gZnJvbSBcIi4vQ29uZmlybVBhc3N3b3JkSW5wdXRcIjtcbmltcG9ydCB7IHBhc3N3b3JkSW5wdXRJZCB9IGZyb20gXCIuL1Bhc3N3b3JkSW5wdXRcIjtcblxuZXhwb3J0IGNvbnN0IHBhc3N3b3JkUmVnZXhTdHJpbmcgPVxuICBcIl4oPz0uKmQpKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qW2EtekEtWl0pLnsxMix9JFwiO1xuXG5jb25zdCBwYXNzd29yZFJlZ2V4ID0gbmV3IFJlZ0V4cChwYXNzd29yZFJlZ2V4U3RyaW5nKTtcblxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIFBBU1NXT1JEIElOUFVUICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBhc3N3b3JkSW5wdXQoKSB7XG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXNzd29yZElucHV0SWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFzc3dvcmRJbnB1dEVycm9yKCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cGFzc3dvcmRJbnB1dElkfSArIC5lcnJvcmApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFzc3dvcmRJc1ZhbGlkKCkge1xuICByZXR1cm4gZ2V0UGFzc3dvcmRJbnB1dCgpLnZhbGlkaXR5LnZhbGlkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFzc3dvcmRJbnB1dFZhbHVlKCkge1xuICByZXR1cm4gZ2V0UGFzc3dvcmRJbnB1dCgpLnZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlUGFzc3dvcmRJbnB1dCgpIHtcbiAgaWYgKHBhc3N3b3JkSXNWYWxpZCgpKSB7XG4gICAgY2xlYXJFcnJvcihnZXRQYXNzd29yZElucHV0RXJyb3IoKSk7XG4gIH0gZWxzZSB7XG4gICAgc2hvd1Bhc3N3b3JkRXJyb3IoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Bhc3N3b3JkRXJyb3IoKSB7XG4gIGNvbnN0IHBhc3N3b3JkID0gZ2V0UGFzc3dvcmRJbnB1dCgpO1xuICBjb25zdCBlcnJvciA9IGdldFBhc3N3b3JkSW5wdXRFcnJvcigpO1xuICBsZXQgZXJyb3JNZXNzYWdlID1cbiAgICBcIlZhbGlkIHBhc3N3b3JkcyBhcmUgYXQgbGVhc2UgMTIgY2hhcmFjdGVycyBsb25nIGFuZCBjb250YWluIGF0IGxlYXNlIG9uZSB1cHBlcmNhc2UgbGV0dGVyIGFuZCBvbmUgbG93ZXJjYXNlIGxldHRlci5cIjtcblxuICBpZiAocGFzc3dvcmQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgZXJyb3JNZXNzYWdlID0gXCJZb3UgbXVzdCBlbnRlciBhIHBhc3N3b3JkIHRvIGNvbnRpbnVlLlwiO1xuICB9XG5cbiAgZXJyb3IuaW5uZXJUZXh0ID0gZXJyb3JNZXNzYWdlO1xuICBlcnJvci5jbGFzc05hbWUgPSBcImVycm9yIGFjdGl2ZVwiO1xufVxuXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgQ09ORklSTSBQQVNTV09SRCBJTlBVVCAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25maXJtUGFzc3dvcmRJbnB1dCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpcm1QYXNzd29yZElucHV0SWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29uZmlybVBhc3N3b3JkSW5wdXRFcnJvcigpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2NvbmZpcm1QYXNzd29yZElucHV0SWR9ICsgLmVycm9yYCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29uZmlybVBhc3N3b3JkSW5wdXRWYWx1ZSgpIHtcbiAgcmV0dXJuIGdldENvbmZpcm1QYXNzd29yZElucHV0KCkudmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maXJtUGFzc3dvcmRJc1ZhbGlkKCkge1xuICByZXR1cm4gZ2V0Q29uZmlybVBhc3N3b3JkSW5wdXQoKS52YWxpZGl0eS52YWxpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNvbmZpcm1QYXNzd29yZElucHV0KCkge1xuICBjb25zdCBpbnB1dCA9IGdldENvbmZpcm1QYXNzd29yZElucHV0KCk7XG4gIGlmIChnZXRQYXNzd29yZElucHV0VmFsdWUoKSA9PT0gZ2V0Q29uZmlybVBhc3N3b3JkSW5wdXRWYWx1ZSgpKSB7XG4gICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gIH0gZWxzZSB7XG4gICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJpbnZhbGlkXCIpO1xuICB9XG5cbiAgaWYgKGlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgY2xlYXJFcnJvcihnZXRDb25maXJtUGFzc3dvcmRJbnB1dEVycm9yKCkpO1xuICB9IGVsc2Uge1xuICAgIHNob3dDb25maXJtUGFzc3dvcmRFcnJvcigpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Q29uZmlybVBhc3N3b3JkRXJyb3IoKSB7XG4gIGNvbnN0IHBhc3N3b3JkID0gZ2V0Q29uZmlybVBhc3N3b3JkSW5wdXQoKTtcbiAgY29uc3QgZXJyb3IgPSBnZXRDb25maXJtUGFzc3dvcmRJbnB1dEVycm9yKCk7XG4gIGxldCBlcnJvck1lc3NhZ2UgPSBcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2guXCI7XG5cbiAgaWYgKHBhc3N3b3JkLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIGVycm9yTWVzc2FnZSA9IFwiWW91IG11c3QgY29uZmlybSB5b3VyIHBhc3N3b3JkIHRvIGNvbnRpbnVlLlwiO1xuICB9XG5cbiAgZXJyb3IuaW5uZXJUZXh0ID0gZXJyb3JNZXNzYWdlO1xuICBlcnJvci5jbGFzc05hbWUgPSBcImVycm9yIGFjdGl2ZVwiO1xufVxuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBTdWJtaXRCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBCdXR0b24oXG4gICAgeyBjbGFzc05hbWU6IFwiXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcywgaW5uZXJUZXh0OiBcIlN1Ym1pdFwiIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3VibWl0QnV0dG9uO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IERpdiwgRm9ybSwgU3BhbiB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCB7IGhhbmRsZUZvcm1TdWJtaXQgfSBmcm9tIFwiLi9mb3JtLXZhbGlkYXRpb25cIjtcbmltcG9ydCBaaXBDb2RlSW5wdXQgZnJvbSBcIi4vSW5wdXQvWmlwQ29kZUlucHV0XCI7XG5pbXBvcnQgQ291bnRyeUlucHV0IGZyb20gXCIuL0NvdW50cnlJbnB1dC9Db3VudHJ5SW5wdXRcIjtcbmltcG9ydCBFbWFpbElucHV0IGZyb20gXCIuL0VtYWlsSW5wdXQvRW1haWxJbnB1dFwiO1xuaW1wb3J0IFN1Ym1pdEJ1dHRvbiBmcm9tIFwiLi9TdWJtaXRCdXR0b25cIjtcbmltcG9ydCBQYXNzd29yZElucHV0IGZyb20gXCIuL1Bhc3N3b3JkSW5wdXRzL1Bhc3N3b3JkSW5wdXRcIjtcbmltcG9ydCBDb25maXJtUGFzc3dvcmRJbnB1dCBmcm9tIFwiLi9QYXNzd29yZElucHV0cy9Db25maXJtUGFzc3dvcmRJbnB1dFwiO1xuXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5jb25zdCBjb21wb25lbnRVdWlkID0gdXVpZHY0KCk7XG5leHBvcnQgY29uc3QgZm9ybUlkID0gYGZvcm0tJHtjb21wb25lbnRVdWlkfWA7XG5cbmNvbnN0IFZhbGlkYXRlZEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAgeyBjbGFzc05hbWU6IFwiYXNzaWdubWVudFwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgRm9ybShcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBmb3JtSWQsXG4gICAgICAgICAgbm9WYWxpZGF0ZTogdHJ1ZSxcbiAgICAgICAgICBvbnN1Ym1pdChldmVudCkge1xuICAgICAgICAgICAgaGFuZGxlRm9ybVN1Ym1pdChldmVudCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIEVtYWlsSW5wdXQoKSxcbiAgICAgICAgICBDb3VudHJ5SW5wdXQoKSxcbiAgICAgICAgICBaaXBDb2RlSW5wdXQoKSxcbiAgICAgICAgICBQYXNzd29yZElucHV0KCksXG4gICAgICAgICAgQ29uZmlybVBhc3N3b3JkSW5wdXQoKSxcbiAgICAgICAgICBTdWJtaXRCdXR0b24oKSxcbiAgICAgICAgICBEaXYoe1xuICAgICAgICAgICAgaW5uZXJIVE1MOiBgJHtcbiAgICAgICAgICAgICAgU3Bhbih7IGNsYXNzTmFtZTogXCJyZXF1aXJlZC1tYXJrZXJcIiwgaW5uZXJUZXh0OiBcIipcIiB9KS5vdXRlckhUTUxcbiAgICAgICAgICAgIH0gaW5kaWNhdGVzIGEgcmVxdWlyZWQgZmllbGRgLFxuICAgICAgICAgIH0pLFxuICAgICAgICBdXG4gICAgICApLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0ZWRGb3JtO1xuIiwiaW1wb3J0IHtcbiAgc2hvd0NvdW50cnlFcnJvcixcbiAgY291bnRyeUlzVmFsaWQsXG59IGZyb20gXCIuL0NvdW50cnlJbnB1dC9jb3VudHJ5LWlucHV0LXZhbGlkYXRpb25cIjtcblxuaW1wb3J0IHtcbiAgc2hvd0VtYWlsRXJyb3IsXG4gIGVtYWlsSXNWYWxpZCxcbn0gZnJvbSBcIi4vRW1haWxJbnB1dC9lbWFpbC1pbnB1dC12YWxpZGF0aW9uXCI7XG5cbmltcG9ydCB7XG4gIHNob3daaXBDb2RlRXJyb3IsXG4gIHppcENvZGVJc1ZhbGlkLFxufSBmcm9tIFwiLi9JbnB1dC96aXAtY29kZS1pbnB1dC12YWxpZGF0aW9uXCI7XG5pbXBvcnQge1xuICBjb25maXJtUGFzc3dvcmRJc1ZhbGlkLFxuICBwYXNzd29yZElzVmFsaWQsXG4gIHNob3dDb25maXJtUGFzc3dvcmRFcnJvcixcbiAgc2hvd1Bhc3N3b3JkRXJyb3IsXG59IGZyb20gXCIuL1Bhc3N3b3JkSW5wdXRzL3Bhc3N3b3Jkcy12YWxpZGF0aW9uXCI7XG5cbmZ1bmN0aW9uIGdldEZvcm0oKSB7fVxuXG5mdW5jdGlvbiBhbGxJbnB1dHNWYWxpZChmb3JtKSB7XG4gIGNvbnN0IGlucHV0cyA9IFtcbiAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIiksXG4gICAgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlbGVjdFwiKSxcbiAgXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGlucHV0VmFsaWRpdHkgPSBpbnB1dHNbaV0udmFsaWRpdHkudmFsaWQ7XG4gICAgaWYgKCFpbnB1dFZhbGlkaXR5KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRm9ybVN1Ym1pdChldmVudCkge1xuICBpZiAoYWxsSW5wdXRzVmFsaWQoKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coXCJTVUJNSVRURUQhXCIpO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghZW1haWxJc1ZhbGlkKCkpIHtcbiAgICAgIHNob3dFbWFpbEVycm9yKCk7XG4gICAgfVxuICAgIGlmICghY291bnRyeUlzVmFsaWQoKSkge1xuICAgICAgc2hvd0NvdW50cnlFcnJvcigpO1xuICAgIH1cbiAgICBpZiAoIXppcENvZGVJc1ZhbGlkKCkpIHtcbiAgICAgIHNob3daaXBDb2RlRXJyb3IoKTtcbiAgICB9XG4gICAgaWYgKCFwYXNzd29yZElzVmFsaWQoKSkge1xuICAgICAgc2hvd1Bhc3N3b3JkRXJyb3IoKTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbmZpcm1QYXNzd29yZElzVmFsaWQoKSkge1xuICAgICAgc2hvd0NvbmZpcm1QYXNzd29yZEVycm9yKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckVycm9yKGVycm9yRWxlbWVudCkge1xuICBlcnJvckVsZW1lbnQuaW5uZXJUZXh0ID0gXCJcIjtcbiAgZXJyb3JFbGVtZW50LmNsYXNzTmFtZSA9IFwiZXJyb3JcIjtcbn1cbiIsIi8qKlxuICogVGhpcyBGdW5jdGlvbiBhbGxvd3MgeW91IHRvIGNyZWF0ZSBhIGRvbSBlbGVtZW50IHdpdGggaXRzIGluaXRpYWwgYXR0cmlidXRlcyBhbmQgY2hpbGQgZWxlbWVudHMgZGVmaW5lZCBieSBhIHBhc3NlZC1pbiBvYmplY3QgYW5kIGFycmF5IG9mIGNoaWxkIGVsZW1lbnRzXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVN0ciB0aGUgdGFnIG5hbWUgb2YgdGhlIGVsZW1lbnQgdG8gYmUgcmV0dXJuZWQgeW91IHdvdWxkIHVzZSBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KClcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc09iaiAob3B0aW9uYWwpIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBpbml0aWFsIHByb3BlcnRpZXMvYXR0cmlidXRlcyB5b3Ugd2FudCB0aGUgZWxlbWVudCB0byBoYXZlXG4gKiBAcGFyYW0ge2FycmF5fSBjaGlsZEFyciAob3B0aW9uYWwpIGFuIG9mIGVsZW1lbnQgb2JqZWN0cyB0byBiZSBhcHBlbmRlZCBhcyBjaGlsZHJlbiB0byB0aGlzIGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSB0aGUgYSByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgY3JlYXRlZCBpbiBtZW1vcnlcbiAqL1xuZXhwb3J0IGNvbnN0IEVsZW1lbnQgPSAodHlwZVN0ciwgcHJvcHNPYmosIGNoaWxkQXJyID0gbnVsbCkgPT4ge1xuICAvLyBTb21lIGF0dHJpYnV0ZXMgY2FuIG9ubHkgYmUgc2V0IHVzaW5nIHRoZSBFbGVtZW50LnNldEF0dHJpYnV0ZSgpIG1ldGhvZC5cbiAgLy8gSWYgaXQgaXMgaW4gdGhlIHByb3BzT2JqIE9iamVjdC5hc3NpZ24gd2lsbCBmYWlsLiBXZSdsbCByZW1vdmUgaXQgZnJvbSB0aGVcbiAgLy8gcHJvcHMgb2JqZWN0IGhlcmUgYW5kIGFzc2lnbiB0aGVtIHRvIHRoZSBwYXJlbnQgZWxlbWVudCBiZWZvcmUgaXQgaXMgcmV0dXJuZWQuXG4gIC8vIFRoZXNlIGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBzZXRBdHRyaWJ1dGVQcm9wZXJ0aWVzIGxpc3QgZm9yIHByb2Nlc3NpbmcuXG4gIGxldCBzZXRBdHRyaWJ1dGVQcm9wZXJ0aWVzID0gW1wibGlzdFwiXTtcbiAgbGV0IHByb3BlcnRpZXMgPSBbXTtcbiAgc2V0QXR0cmlidXRlUHJvcGVydGllcy5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgIGlmIChwcm9wZXJ0eSBpbiBwcm9wc09iaikge1xuICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc09ialtwcm9wZXJ0eV07XG4gICAgICBwcm9wZXJ0aWVzLnB1c2goeyBuYW1lOiBwcm9wZXJ0eSwgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgZGVsZXRlIHByb3BzT2JqW3Byb3BlcnR5XTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIENyZWF0ZSBhbiBlbGVtZW50IGJhc2VkIG9uIHRoZSB0eXBlIHN0cmluZyBwcm92aWRlZFxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gT2JqZWN0LmFzc2lnbihcbiAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGVTdHIpLFxuICAgIHByb3BzT2JqXG4gICk7XG5cbiAgLy8gQWRkIHBhc3NlZCBpbiBjaGlsZCB0byBhcnJheSBpZiBpdCBpcyBub3QgYWxyZWFkeVxuICBpZiAoY2hpbGRBcnIgJiYgIUFycmF5LmlzQXJyYXkoY2hpbGRBcnIpKSB7XG4gICAgY2hpbGRBcnIgPSBbY2hpbGRBcnJdO1xuICB9XG5cbiAgLy8gQXBwZW5kIGNoaWxkcmVuIHRvIHRoZSBlbGVtZW50XG4gIGlmIChjaGlsZEFycikge1xuICAgIGNoaWxkQXJyLmZvckVhY2goKGNoaWxkKSA9PiBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XG4gIH1cblxuICAvLyBBcHBseSBwcm9wZXJ0aWVzIHdpdGggc2V0QXR0cmlidXRlIGlmIG5lZWRlZFxuICBpZiAocHJvcGVydGllcy5sZW5ndGgpIHtcbiAgICBwcm9wZXJ0aWVzLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgICBwYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZShwcm9wZXJ0eS5uYW1lLCBwcm9wZXJ0eS52YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbi8vICBDT01NT04gRUxFTUVOVFNcbmV4cG9ydCBjb25zdCBBID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImFcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgQXJ0aWNsZSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJhcnRpY2xlXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEIgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiYlwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBCb2R5ID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImJvZHlcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImJ1dHRvblwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBCciA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJiclwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBEaXYgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiZGl2XCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IERhdGFsaXN0ID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImRhdGFsaXN0XCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEZpZWxkc2V0ID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImZpZWxkc2V0XCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJmb290ZXJcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgRm9ybSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJmb3JtXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEgxID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImgxXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEgyID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImgyXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEgzID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImgzXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJoZWFkZXJcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSHIgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaHJcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJpXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEltZyA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJpbWdcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSW5wdXQgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaW5wdXRcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgTGFiZWwgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwibGFiZWxcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgTGVnZW5kID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImxlZ2VuZFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBMaSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJsaVwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBNYWluID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcIm1haW5cIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgT2wgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwib2xcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgT3B0aW9uID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcIm9wdGlvblwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBQID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcInBcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgU2VsZWN0ID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcInNlbGVjdFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBTdHJvbmcgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwic3Ryb25nXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IFNwYW4gPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwic3BhblwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBUZXh0YXJlYSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBVbCA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJ1bFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG4iLCJleHBvcnQgY29uc3QgZ2l0aHViSW5mbyA9IHtcbiAgcmVwb05hbWU6IFwiYmFyY29kZS1nZW5lcmF0b3JcIixcbn07XG4iLCJpbXBvcnQgeyBhcHBseVdpbmRvd0xpc3RlbmVycyB9IGZyb20gXCIuL3VpLXdpbmRvd1wiO1xuaW1wb3J0IHsgY2xpY2tDYXJvdXNlbFBsYXkgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvSW1hZ2VDYXJvdXNlbC91aS9jYXJvdXNlbC11aVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlJbml0aWFsU3RhdGUoKSB7XG4gIGFwcGx5V2luZG93TGlzdGVuZXJzKCk7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsXCIpKSB7XG4gICAgY2xpY2tDYXJvdXNlbFBsYXkoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcblxuY29uc3QgYnJlYWtQb2ludHMgPSB7XG4gIHhzOiAwLFxuICBzbTogNDgwLFxuICBtZDogNzIwLFxuICBsZzogOTYwLFxuICB4bDogMTIwMCxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVdpbmRvd0xpc3RlbmVycygpIHtcbiAgd2luZG93Lm9ucmVzaXplID0gZGVib3VuY2UoZnVuY3Rpb24gKGUpIHtcbiAgICAvL1xuICB9KTtcbn1cbiIsImltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG5leHBvcnQgY29uc3QgdHJ1bmNhdGVBbmRBZGRFbGxpcHNlID0gKHN0cmluZywgbnVtQ2hhcnNUb0tlZXApID0+IHtcbiAgcmV0dXJuIHN0cmluZy5zbGljZSgwLCBudW1DaGFyc1RvS2VlcCkudHJpbUVuZCgpICsgXCIuLi5cIjtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IGZ1bmN0aW9uIChmbikge1xuICAvLyBzZXR1cCBhIHRpbWVyXG4gIGxldCB0aW1lb3V0O1xuXG4gIC8vIHJldHVybiBhIGZ1bmN0aW9uIHRvIHJ1biBkZWJvdW5jZWRcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAvL3NldHVwIGFyZ3NcblxuICAgIGxldCBjb250ZXh0ID0gdGhpcztcbiAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcblxuICAgIC8vIGlmIHRoZXJlIGlzIGEgdGltZXIgY2FuY2VsIGl0XG4gICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aW1lb3V0KTtcbiAgICB9XG5cbiAgICAvLyBzZXR1cCB0aGUgbmV3IHJlcXVlc3RBbmltYXRpb25GcmFtZSgpXG4gICAgdGltZW91dCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfSk7XG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgaWYgKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmdbMF0udG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xuICB9XG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRlc3RDb250ZW50QXJyKG51bUNoaWxkcmVuKSB7XG4gIHJldHVybiBBcnJheShudW1DaGlsZHJlbilcbiAgICAuZmlsbCgwKVxuICAgIC5tYXAoKGVsZW0pID0+XG4gICAgICBFbGVtZW50KFwicFwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJkaXNwbGF5LWIgbWItMVwiLFxuICAgICAgICBpbm5lclRleHQ6XG4gICAgICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEb2xvciwgdWxsYW0gYWQsIG1heGltZSBlbmltIHNlcXVpIHN1bnQgcXVvIGZhY2lsaXMgaWxsbyBldmVuaWV0IGxhdWRhbnRpdW0gcXVhZSByZXBlbGxlbmR1cyBkb2xvcnVtIG9tbmlzIG1pbmltYSBkdWNpbXVzIGFyY2hpdGVjdG8hIEJlYXRhZSwgdmVsIGFzc3VtZW5kYS5cIixcbiAgICAgIH0pXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pOyAvLyBUaGUgbWF4aW11bSBpcyBleGNsdXNpdmUgYW5kIHRoZSBtaW5pbXVtIGlzIGluY2x1c2l2ZVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxudmFyIGdldFJhbmRvbVZhbHVlcztcbnZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLiBBbHNvLFxuICAgIC8vIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byAobXNDcnlwdG8pIG9uIElFMTEuXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSB8fCB0eXBlb2YgbXNDcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxudmFyIGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSkpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyKSB7XG4gIHZhciBvZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICB2YXIgdXVpZCA9IChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCBzdHJpbmdpZnkgZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gc3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBDb250ZW50IGZyb20gXCIuL2NvbXBvbmVudHMvQ29udGVudC9Db250ZW50XCI7XG5pbXBvcnQgeyBhcHBseUluaXRpYWxTdGF0ZSB9IGZyb20gXCIuL3BhZ2UtbG9naWMvdWkvdWktaW5pdGlhbC1zdGF0ZVwiO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKENvbnRlbnQoKSk7XG5cbmFwcGx5SW5pdGlhbFN0YXRlKCk7XG5cbi8vIGRlYnVnZ2luZ1xuY29uc3QgZGVidWdnaW5nID0gdHJ1ZTtcbmlmIChkZWJ1Z2dpbmcpIHtcbiAgLy9cbn1cbiJdLCJuYW1lcyI6WyJFbGVtZW50IiwiSGVhZGVyIiwiRHluYW1pY0Zvb3RlciIsIk1haW5TZWN0aW9uIiwiQ29udGVudCIsImNvbnRlbnQiLCJpZCIsIkEiLCJEaXYiLCJJY29uIiwiZ2l0aHViSW5mbyIsImR5bmFtaWNZZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiQ29weXJpZ2h0Q29udGFpbmVyIiwicGFyZW50RWxlbWVudCIsImNsYXNzTmFtZSIsImlubmVyVGV4dCIsImhyZWYiLCJyZXBvTmFtZSIsIkZvb3RlciIsIkF0dHJpYnV0aW9uc0NvbnRhaW5lciIsIlRPUENvbnRhaW5lciIsIkV4cGFuZGFibGVQYW5lbCIsIk5vbkV4cGFuZGFibGVQYW5lbCIsIkljb25zRXhwbGFuYXRpb24iLCJjb250YWluZXIiLCJ0aXRsZSIsImNoaWxkcmVuIiwiaW5uZXJIVE1MIiwib3V0ZXJIVE1MIiwicGFyZW50Q29udGFpbmVyIiwiaDEiLCJvdGhlckNsYXNzZXMiLCJoZWFkZXIiLCJnZW5lcmF0ZVRlc3RDb250ZW50QXJyIiwiQ3VzdG9tSWNvbnNEaXNwbGF5IiwiSW1hZ2VDYXJvdXNlbCIsIlZhbGlkYXRlZEZvcm0iLCJNYWluIiwibWFpbiIsIkV4cGFuZGFibGVQYW5lbFRpdGxlIiwiRXhwYW5kYWJsZVBhbmVsQ29udGVudCIsInY0IiwidXVpZHY0IiwicHJvcHMiLCJjb21wb25lbnRJZCIsInBhbmVsIiwiQnV0dG9uIiwidG9nZ2xlRXhwYW5zaW9uIiwiZXhwYW5zaW9uQ29udGVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b2dnbGVFeHBhbnNpb25CdXR0b24iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJvbmNsaWNrIiwiaWNvbkNsYXNzIiwiaWNvbiIsIkNhcm91c2VsTmF2SW5kaWNhdG9yIiwiQ2Fyb3VzZWxQbGF5UGF1c2VDb250YWluZXIiLCJDYXJvdXNlbE5hdiIsImltYWdlRGF0YSIsIm1hcCIsIm9iaiIsImluZGV4IiwiaW1hZ2VJZCIsInV1aWQiLCJzdGFydHNBY3RpdmUiLCJpc0FjdGl2ZSIsImNsaWNrQ2Fyb3VzZWxOYXYiLCJQbGF5QnV0dG9uIiwiUGF1c2VCdXR0b24iLCJJbWciLCJDYXJvdXNlbFNsaWRlIiwiaW1hZ2VTb3VyY2UiLCJzcmMiLCJVbCIsIkNhcm91c2VsVHJhY2siLCJDYXJvdXNlbFRyYWNrQ29udGFpbmVyIiwiTGVmdENhcm91c2VsQnV0dG9uIiwiUmlnaHRDYXJvdXNlbEJ1dHRvbiIsImNhcm91c2VsIiwiY2xpY2tDYXJvdXNlbExlZnQiLCJzaGFyZWRDbGFzc2VzIiwiYnV0dG9uIiwiY2xpY2tDYXJvdXNlbFJpZ2h0IiwiZ2V0UmFuZG9tSW50IiwiZ2V0UGljc3VtSWQiLCJtaW4iLCJtYXgiLCJleGNsdXNpb25zIiwicmFuZEludCIsImluY2x1ZGVzIiwiZ2V0UmFuZG9tSW1hZ2VTcmMiLCJ3aWR0aCIsImhlaWdodCIsIm51bUltYWdlcyIsImltYWdlV2lkdGgiLCJpbWFnZUhlaWdodCIsImltYWdlU291cmNlcyIsIkFycmF5IiwiZmlsbCIsImUiLCJjbGlja0Nhcm91c2VsUGxheSIsImNsaWNrQ2Fyb3VzZWxQYXVzZSIsImdldEFsbENhcm91c2VsU2xpZGVzIiwicXVlcnlTZWxlY3RvciIsImNoaWxkTm9kZXMiLCJnZXRBbGxDYXJvdXNlbFNsaWRlSWRzIiwiZWxlbSIsImdldEFsbENhcm91c2VsTmF2QnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnZXRDdXJyZW50U2xpZGVJbmRleCIsImFsbFNsaWRlSWRzIiwiY3VycmVudFNsaWRlSWQiLCJjdXJyZW50U2xpZGVJbmRleCIsImluZGV4T2YiLCJnZXRQcmV2aW91c1NsaWRlSW5kZXgiLCJwcmV2aW91c1NsaWRlSW5kZXgiLCJjb3JyZWN0ZWRJbmRleCIsImxlbmd0aCIsImdldE5leHRTbGlkZUluZGV4IiwibmV4dFNsaWRlSW5kZXgiLCJnb3RvU3BlY2lmaWNTbGlkZSIsImFsbE5hdkJ1dHRvbnMiLCJzZWxlY3RlZE5hdkJ1dHRvbiIsInNlbGVjdGVkU2xpZGUiLCJhbGxTbGlkZXMiLCJmb3JFYWNoIiwic2xpZGUiLCJyZW1vdmUiLCJhZGQiLCJyZXBsYWNlIiwiaGFuZGxlQXV0b0FkdmFuY2UiLCJwbGF5QnV0dG9uIiwicGF1c2VCdXR0b24iLCJpbnRlcnZhbCIsIm1vZGUiLCJwbGF5aW5nIiwid2luZG93Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiTGFiZWwiLCJTcGFuIiwiRGF0YWxpc3QiLCJPcHRpb24iLCJTZWxlY3QiLCJjb3VudHJpZXMiLCJoYW5kbGVDb3VudHJ5SW5wdXQiLCJjb21wb25lbnRVdWlkIiwiY291bnRyeUlucHV0SWQiLCJDb3VudHJ5SW5wdXQiLCJmb3IiLCJyZXF1aXJlZCIsIm9uaW5wdXQiLCJjb3VudHJ5IiwiY2xlYXJFcnJvciIsImdldENvdW50cnlJbnB1dCIsImdldENvdW50cnlJbnB1dEVycm9yIiwiY291bnRyeUlzVmFsaWQiLCJ2YWxpZGl0eSIsInZhbGlkIiwiZXJyb3IiLCJzaG93Q291bnRyeUVycm9yIiwiZXJyb3JNZXNzYWdlIiwiSW5wdXQiLCJoYW5kbGVFbWFpbElucHV0IiwiZW1haWxJbnB1dElkIiwiRW1haWxJbnB1dCIsInR5cGUiLCJnZXRFbWFpbElucHV0IiwiZ2V0RW1haWxJbnB1dEVycm9yIiwiZW1haWxJc1ZhbGlkIiwic2hvd0VtYWlsRXJyb3IiLCJlbWFpbCIsInZhbHVlTWlzc2luZyIsImhhbmRsZVppcENvZGVJbnB1dCIsInppcENvZGVJbnB1dElkIiwiWmlwQ29kZUlucHV0IiwicGF0dGVybiIsImdldFppcENvZGVJbnB1dCIsImdldFppcENvZGVJbnB1dEVycm9yIiwiemlwQ29kZUlzVmFsaWQiLCJzaG93WmlwQ29kZUVycm9yIiwiemlwQ29kZSIsImhhbmRsZUNvbmZpcm1QYXNzd29yZElucHV0IiwiY29uZmlybVBhc3N3b3JkSW5wdXRJZCIsIkNvbmZpcm1QYXNzd29yZElucHV0IiwiaGFuZGxlUGFzc3dvcmRJbnB1dCIsInBhc3N3b3JkUmVnZXhTdHJpbmciLCJwYXNzd29yZElucHV0SWQiLCJQYXNzd29yZElucHV0IiwicGFzc3dvcmRSZWdleCIsIlJlZ0V4cCIsImdldFBhc3N3b3JkSW5wdXQiLCJnZXRQYXNzd29yZElucHV0RXJyb3IiLCJwYXNzd29yZElzVmFsaWQiLCJnZXRQYXNzd29yZElucHV0VmFsdWUiLCJ2YWx1ZSIsInNob3dQYXNzd29yZEVycm9yIiwicGFzc3dvcmQiLCJnZXRDb25maXJtUGFzc3dvcmRJbnB1dCIsImdldENvbmZpcm1QYXNzd29yZElucHV0RXJyb3IiLCJnZXRDb25maXJtUGFzc3dvcmRJbnB1dFZhbHVlIiwiY29uZmlybVBhc3N3b3JkSXNWYWxpZCIsImlucHV0Iiwic2V0Q3VzdG9tVmFsaWRpdHkiLCJzaG93Q29uZmlybVBhc3N3b3JkRXJyb3IiLCJTdWJtaXRCdXR0b24iLCJGb3JtIiwiaGFuZGxlRm9ybVN1Ym1pdCIsImZvcm1JZCIsIm5vVmFsaWRhdGUiLCJvbnN1Ym1pdCIsImV2ZW50IiwiZ2V0Rm9ybSIsImFsbElucHV0c1ZhbGlkIiwiZm9ybSIsImlucHV0cyIsImkiLCJpbnB1dFZhbGlkaXR5IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3JFbGVtZW50IiwidHlwZVN0ciIsInByb3BzT2JqIiwiY2hpbGRBcnIiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJzZXRBdHRyaWJ1dGVQcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInByb3BlcnR5IiwicHVzaCIsIm5hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJjcmVhdGVFbGVtZW50IiwiaXNBcnJheSIsImNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJzZXRBdHRyaWJ1dGUiLCJBcnRpY2xlIiwiQiIsIkJvZHkiLCJCciIsIkZpZWxkc2V0IiwiSDEiLCJIMiIsIkgzIiwiSHIiLCJJIiwiTGVnZW5kIiwiTGkiLCJPbCIsIlAiLCJTdHJvbmciLCJUZXh0YXJlYSIsImFwcGx5V2luZG93TGlzdGVuZXJzIiwiYXBwbHlJbml0aWFsU3RhdGUiLCJkZWJvdW5jZSIsImJyZWFrUG9pbnRzIiwieHMiLCJzbSIsIm1kIiwibGciLCJ4bCIsIm9ucmVzaXplIiwidHJ1bmNhdGVBbmRBZGRFbGxpcHNlIiwic3RyaW5nIiwibnVtQ2hhcnNUb0tlZXAiLCJzbGljZSIsInRyaW1FbmQiLCJmbiIsInRpbWVvdXQiLCJjb250ZXh0IiwiYXJncyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYXBwbHkiLCJjYXBpdGFsaXplIiwidG9VcHBlckNhc2UiLCJ0b0xvd2VyQ2FzZSIsIm51bUNoaWxkcmVuIiwiTWF0aCIsImNlaWwiLCJmbG9vciIsInJhbmRvbSIsImJvZHkiLCJkZWJ1Z2dpbmciXSwic291cmNlUm9vdCI6IiJ9