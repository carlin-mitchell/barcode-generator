import { v4 as uuidv4 } from "uuid";

// COMPONENT IMPORTS
import { Button } from "../_elements/Elements";
import { toglgeBardodeSection } from "./logic";

// LOGIC IMPORTS
//

// COMPONENT METHODS
function handleClick() {
  toglgeBardodeSection();
}

export const barcodeToggleId = uuidv4();
export function getBarcodeToggle() {
  return document.getElementById(barcodeToggleId);
}

const Component = () => {
  //

  const parentElement = Button(
    {
      id: barcodeToggleId,
      innerText: `Barcode`,
      className: `active`,
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
