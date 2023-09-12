import JsBarcode from "jsbarcode";

import { barcodeTextInputId } from "./BarcodeTextInput";
import {
  barcodeWidthInputId,
  barcodeWidthLabelSpanId,
} from "./BarcodeWIdthInput";

export function generateBarcode(content, options) {
  content = content ? content : "";
  options = options ? options : {};

  JsBarcode("#barcode", content, options);
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
