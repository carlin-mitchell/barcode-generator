import { v4 as uuidv4 } from "uuid";

// COMPONENT IMPORTS
import { Div, Canvas } from "../_elements/Elements";
import QrLightColorInput from "./QrCodeLightColorPicker";

import QrGenerateForm from "./QrGenerateForm";
// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

export const qrCodeSectionId = uuidv4();
export function getQrCodeSection() {
  return document.getElementById(qrCodeSectionId);
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
    [QrGenerateForm(), Canvas({ id: "qrcode" })]
  );
  return parentElement;
};

export default QrCodeGenerator;
