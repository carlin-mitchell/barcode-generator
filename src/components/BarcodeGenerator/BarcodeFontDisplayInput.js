// COMPONENT IMPORTS
import { Div, Input, Label } from "../_elements/Elements";

import { v4 as uuidv4 } from "uuid";

import { debounce } from "../../utils";
import { generateBarcode } from "./logic";
import { barcodeConfig } from "./config";

// LOGIC IMPORTS
//

// COMPONENT METHODS

export const barcodeFontDisplayInputId = uuidv4();

function handleInput() {
  debounce(generateBarcode());
}

const BarcodeFontDisplayInput = () => {
  //

  const parentElement = Div({}, [
    Label({
      innerHTML: `Show font: `,
    }),
    Input(
      {
        id: barcodeFontDisplayInputId,
        type: "checkbox",
        innerText: ``,
        className: ``,

        checked: barcodeConfig.fontDisplay.starting,
        oninput() {
          handleInput();
        },
      },
      // add child elements to the array below
      []
    ),
  ]);
  return parentElement;
};

export default BarcodeFontDisplayInput;
