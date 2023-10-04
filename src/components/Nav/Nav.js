import { v4 as uuidv4 } from "uuid";

// COMPONENT IMPORTS
import { Nav, Div } from "../_elements/Elements";

import BarcodeSectionToggle from "./BarcodeSectionToggle";
import QrCodeSectionToggle from "./QrCodeSectionToggle";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

export const navId = uuidv4();

const Component = () => {
  //

  const parentElement = Nav(
    { innerText: ``, className: `` },
    // add child elements to the array below
    [
      Div({ innerText: "Generate a: " }),
      BarcodeSectionToggle(),
      QrCodeSectionToggle(),
    ]
  );
  return parentElement;
};

export default Component;
