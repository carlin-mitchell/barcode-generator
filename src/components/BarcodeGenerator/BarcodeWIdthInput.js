// COMPONENT IMPORTS
import { Div, Input, Label, Span } from "../_elements/Elements";

import { v4 as uuidv4 } from "uuid";
import { updateBarcodeWidthDisplay } from "./ui";
import { debounce, getInputValue } from "../../utils";
import { generateBarcode, getBarcodeWidthInput } from "./logic";

import { barcodeConfig } from "./config";

// LOGIC IMPORTS
//

// COMPONENT METHODS

export const barcodeWidthInputId = uuidv4();
export const barcodeWidthDisplayId = `barcode-width-display-${barcodeWidthInputId}`;

function handleInput() {
  const width = getInputValue(getBarcodeWidthInput());
  updateBarcodeWidthDisplay(width);
  debounce(generateBarcode());
}

const BarcodeWidthInput = () => {
  //

  const parentElement = Div({}, [
    Label({
      innerHTML: `Width: ${Span({ id: barcodeWidthDisplayId }).outerHTML}`,
    }),
    Input(
      {
        id: barcodeWidthInputId,
        type: "range",
        innerText: ``,
        className: ``,
        min: barcodeConfig.width.min,
        max: barcodeConfig.width.max,
        step: barcodeConfig.width.step,
        value: barcodeConfig.width.starting,
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

export default BarcodeWidthInput;
