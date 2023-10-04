import { getQrCopyMessage } from "./QrCodeGenerator";

export function updateCopyMessage(message) {
  const messageElem = getQrCopyMessage();
  messageElem.innerText = message;
  messageElem.classList.toggle("hidden");
  setTimeout(() => {
    messageElem.classList.toggle("hidden");
  }, 1500);
}
