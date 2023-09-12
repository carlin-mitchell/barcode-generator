import JsBarcode from "jsbarcode";

import { barcodeTextInputId } from "./BarcodeTextInput";
import {
  barcodeWidthInputId,
  barcodeWidthLabelSpanId,
} from "./BarcodeWIdthInput";
import { getInputValue } from "../../utils";

export function generateBarcode(options) {
  options = options ? options : {};
  const content = getInputValue(getBarcodeTextInput())
    ? getInputValue(getBarcodeTextInput())
    : "<NONE>";

  const width = getInputValue(getBarcodeWidthInput());
  JsBarcode("#barcode", content, { ...options, width });
}

export function getBarcodeTextInput() {
  return document.getElementById(barcodeTextInputId);
}

export function getBarcodeWidthSpan() {
  return document.getElementById(barcodeWidthLabelSpanId);
}

export function getBarcodeWidthInput() {
  return document.getElementById(barcodeWidthInputId);
}
