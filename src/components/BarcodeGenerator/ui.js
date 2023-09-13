import { getCopyBarcodeMessage } from "./logic";

export function updateCopyMessage(message) {
  const copyMessage = getCopyBarcodeMessage();
  copyMessage.innerText = message;
  setTimeout(() => {
    copyMessage.innerText = "copy to clipboard";
  }, 1500);
}
