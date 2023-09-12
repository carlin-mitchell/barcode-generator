import { getBarcodeHeightDisplay, getBarcodeWidthDisplay } from "./logic";

export function updateBarcodeWidthDisplay(value) {
  const barcodeWidthDisplay = getBarcodeWidthDisplay();
  barcodeWidthDisplay.innerText = value;
}

export function updateBarcodeHeightDisplay(value) {
  const barcodeWidthDisplay = getBarcodeHeightDisplay();
  barcodeWidthDisplay.innerText = value;
}
