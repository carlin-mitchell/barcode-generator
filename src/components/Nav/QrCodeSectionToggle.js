import { v4 as uuidv4 } from "uuid";

// COMPONENT IMPORTS
import { Button } from "../_elements/Elements";
import { toglgeQrCodeSection } from "./logic";

// LOGIC IMPORTS
//

// COMPONENT METHODS
function handleClick() {
  toglgeQrCodeSection();
}

export const qrCodeToggleId = uuidv4();
export function getQrCodeToggle() {
  return document.getElementById(qrCodeToggleId);
}

const Component = () => {
  //

  const parentElement = Button(
    {
      id: qrCodeToggleId,
      innerText: `Qr Code`,
      className: ``,
      onclick() {
        handleClick();
      },
    },
    // add child elements to the array below
    []
  );
  return parentElement;
};

export default Component;
