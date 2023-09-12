// COMPONENT IMPORTS
import { Div, Input, Label, Span } from "../_elements/Elements";

import { v4 as uuidv4 } from "uuid";

import { debounce } from "../../utils";
import { generateBarcode } from "./logic";
import { barcodeConfig } from "./config";

// LOGIC IMPORTS
//

// COMPONENT METHODS

export const barcodeHeightInputId = uuidv4();
export const barcodeHeightDisplayId = `barcode-height-display-${barcodeHeightInputId}`;

function handleInput() {
  debounce(generateBarcode());
}

const BarcodeHeightInput = () => {
  //

  const parentElement = Div({}, [
    Label({
      innerHTML: `Height: `,
    }),
    Input(
      {
        id: barcodeHeightInputId,
        type: "number",
        innerText: ``,
        className: ``,
        min: barcodeConfig.height.min,
        max: barcodeConfig.height.max,
        step: barcodeConfig.height.step,
        value: barcodeConfig.height.starting,
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

export default BarcodeHeightInput;
