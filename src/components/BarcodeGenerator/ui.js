import {
  getBarcodeHeightDisplay,
  getBarcodeWidthDisplay,
  getCopyBarcodeMessage,
} from "./logic";

export function updateBarcodeWidthDisplay(value) {
  const barcodeWidthDisplay = getBarcodeWidthDisplay();
  barcodeWidthDisplay.innerText = value;
}

export function updateBarcodeHeightDisplay(value) {
  const barcodeWidthDisplay = getBarcodeHeightDisplay();
  barcodeWidthDisplay.innerText = value;
}

export function updateCopyMessage(message) {
  const copyMessage = getCopyBarcodeMessage();
  copyMessage.innerText = message;
  setTimeout(() => {
    copyMessage.innerText = "copy to clipboard";
  }, 1500);
}
