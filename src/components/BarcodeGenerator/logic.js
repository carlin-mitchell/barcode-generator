import JsBarcode from "jsbarcode";

import { barcodeTextInputId } from "./BarcodeTextInput";
import { barcodeWidthInputId } from "./BarcodeWIdthInput";
import { getInputValue } from "../../utils";
import { barcodeHeightInputId } from "./BarcodeHeightInput";
import { barcodeFontSizeInputId } from "./BarcodeFontSizeInput";
import { barcodeFontDisplayInputId } from "./BarcodeFontDisplayInput";

import { barcodeConfig } from "./config";
import { updateCopyMessage } from "./ui";
import {
  barcodePrimaryColorInputId,
  barcodeSecondaryColorInputId,
} from "./BarcodeColorInputs";

export function generateBarcode(options) {
  options = options ? options : {};
  const content = getInputValue(getBarcodeTextInput())
    ? getInputValue(getBarcodeTextInput())
    : "<NONE>";

  const width = getInputValue(getBarcodeWidthInput());
  const height = getInputValue(getBarcodeHeightInput());
  const fontSize = getInputValue(getBarcodeFontSizeInput());
  const displayValue = getBarcodeFontDisplayInput().checked;
  const { bottom, margin } = barcodeConfig.margin.starting;
  const lineColor = getInputValue(getBarcodeSecondaryColorInput());
  const background = getInputValue(getBarcodePrimaryColorInput());

  JsBarcode("#barcode", content, {
    ...options,
    width,
    height,
    fontSize,
    displayValue,
    margin,
    marginBottom: displayValue ? bottom : 0,
    lineColor,
    background,
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

// ################# HEIGHT INPUT ################
export function getBarcodeHeightInput() {
  return document.getElementById(barcodeHeightInputId);
}

// ################ FONT SIZE INPUT ###############
export function getBarcodeFontSizeInput() {
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

// #############  SECONDARY COLOR INPUT ###########
export function getBarcodePrimaryColorInput() {
  return document.getElementById(barcodePrimaryColorInputId);
}

export function getBarcodePrimaryColorPreset() {
  return document.getElementById(`custom-preset-${barcodePrimaryColorInputId}`);
}

// ################ PRIMARY COLOR INPUT ##############
export function getBarcodeSecondaryColorInput() {
  return document.getElementById(barcodeSecondaryColorInputId);
}

export function getBarcodeSecondaryColorPreset() {
  return document.getElementById(
    `custom-preset-${barcodeSecondaryColorInputId}`
  );
}
