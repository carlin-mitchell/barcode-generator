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
import { barcodeFontDisplayInputId } from "./BarcodeFontDisplayInput";

import { barcodeConfig } from "./config";
import { updateCopyMessage } from "./ui";

export function generateBarcode(options) {
  options = options ? options : {};
  const content = getInputValue(getBarcodeTextInput())
    ? getInputValue(getBarcodeTextInput())
    : "<NONE>";

  const width = getInputValue(getBarcodeWidthInput());
  const height = getInputValue(getBarcodeHeightInput());
  const fontSize = getInputValue(getBarcodeFontSizeInput());
  const displayValue = getBarcodeFontDisplayInput().checked;
  const margin = barcodeConfig.margin.starting;
  JsBarcode("#barcode", content, {
    ...options,
    width,
    height,
    fontSize,
    displayValue,
    margin,
  });
}
export async function copyBarcode(src) {
  const barcode = document.querySelector("#barcode");
  const data = await fetch(barcode.src);
  const blob = await data.blob();
  try {
    await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
    updateCopyMessage("copied!");
  } catch (e) {
    updateCopyMessage("there was an issue, try again");
  }
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

// ############## FONT DISPLAY INPUT #############
export function getBarcodeFontDisplayInput() {
  return document.getElementById(barcodeFontDisplayInputId);
}

// ############# COPY BARCODE MESSAGE ############
export function getCopyBarcodeMessage() {
  return document.querySelector(".copy-message-container > div");
}
