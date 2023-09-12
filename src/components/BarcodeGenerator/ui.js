import { getBarcodeWidthSpan } from "./logic";

export function updateBarcodeWidthDisplay(value) {
  const barcodeWidthDisplay = getBarcodeWidthSpan();
  barcodeWidthDisplay.innerText = value;
}
