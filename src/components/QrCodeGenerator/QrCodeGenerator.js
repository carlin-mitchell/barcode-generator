import { v4 as uuidv4 } from "uuid";

// COMPONENT IMPORTS
import { Div, Canvas } from "../_elements/Elements";
import QrLightColorInput from "./QrCodeLightColorPicker";

import QrGenerateForm from "./QrGenerateForm";
import { updateCopyMessage } from "./ui";
import { copyQrToClipboard } from "./logic";
// LOGIC IMPORTS
//

// COMPONENT METHODS
function handleQrClick() {
  copyQrToClipboard();
}

export const qrCodeSectionId = uuidv4();
export function getQrCodeSection() {
  return document.getElementById(qrCodeSectionId);
}

export const qrCopyMessage = uuidv4();
export function getQrCopyMessage() {
  return document.getElementById(qrCopyMessage);
}

const QrCodeGenerator = () => {
  //

  const parentElement = Div(
    {
      id: qrCodeSectionId,
      innerText: ``,
      className: `qr-section display-none`,
    },
    // add child elements to the array below
    [
      QrGenerateForm(),
      Div({ className: "qr-container" }, [
        Canvas({
          id: "qrcode",
          onclick() {
            handleQrClick();
          },
        }),
        Div({
          id: qrCopyMessage,
          className: `hidden`,
          innerText: "this text is hidden",
        }),
      ]),
    ]
  );
  return parentElement;
};

export default QrCodeGenerator;
