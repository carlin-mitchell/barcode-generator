// COMPONENT IMPORTS
import { Div, Input, Label } from "../_elements/Elements";

import { v4 as uuidv4 } from "uuid";

import { debounce } from "../../utils";
import { generateBarcode } from "./logic";
import { barcodeConfig } from "./config";

// LOGIC IMPORTS
//

// COMPONENT METHODS

export const barcodeFontSizeInputId = uuidv4();

function handleInput() {
  debounce(generateBarcode());
}

const BarcodeFontSizeInput = () => {
  //

  const parentElement = Div({}, [
    Label({
      innerHTML: `Font size: `,
    }),
    Input(
      {
        id: barcodeFontSizeInputId,
        type: "number",
        innerText: ``,
        className: ``,
        min: barcodeConfig.fontSize.min,
        max: barcodeConfig.fontSize.max,
        step: barcodeConfig.fontSize.step,
        value: barcodeConfig.fontSize.starting,
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

export default BarcodeFontSizeInput;
