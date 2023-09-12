import JsBarcode from "jsbarcode";

import { barcodeTextInputId } from "./BarcodeTextInput";
import {
  barcodeWidthInputId,
  barcodeWidthDisplayId,
} from "./BarcodeWIdthInput";
import { getInputValue } from "../../utils";
import {
  barcodeHeightDisplayId,
  barcodeHeightInputId,
} from "./BarcodeHeightInput";
import { barcodeFontSizeInputId } from "./BarcodeFontSizeInput";

export function generateBarcode(options) {
  options = options ? options : {};
  const content = getInputValue(getBarcodeTextInput())
    ? getInputValue(getBarcodeTextInput())
    : "<NONE>";

  const width = getInputValue(getBarcodeWidthInput());
  const height = getInputValue(getBarcodeHeightInput());
  const fontSize = getInputValue(getBarcodeFontSizeInput());
  JsBarcode("#barcode", content, {
    ...options,
    width,
    height,
    fontSize,
  });
}
// ################# TEXT INPUT #################
export function getBarcodeTextInput() {
  return document.getElementById(barcodeTextInputId);
}

// ################# WIDTH INPUT ################

export function getBarcodeWidthInput() {
  return document.getElementById(barcodeWidthInputId);
}
export function getBarcodeWidthDisplay() {
  return document.getElementById(barcodeWidthDisplayId);
}

// ################# HEIGHT INPUT ################
export function getBarcodeHeightInput() {
  return document.getElementById(barcodeHeightInputId);
}
export function getBarcodeHeightDisplay() {
  return document.getElementById(barcodeHeightDisplayId);
}

// ################ FONT SIZE INPUT ###############
export function getBarcodeFontSizeInput() {
  return document.getElementById(barcodeFontSizeInputId);
}
export function getBarcodeFontSizeDisplay() {
  return document.getElementById(barcodeFontSizeInputId);
}
