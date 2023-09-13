// COMPONENT IMPORTS
import { Div, Input, Label, Span, Option, Select } from "../_elements/Elements";

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
  debounce(generateBarcode());
}

const options = [
  { name: "normal", value: 1 },
  { name: "wide", value: 2 },
];

const BarcodeWidthInput = () => {
  //

  const parentElement = Div({}, [
    Label({
      innerHTML: `Width: ${Span({ for: barcodeWidthDisplayId }).outerHTML}`,
    }),
    Select(
      {
        id: barcodeWidthInputId,
        oninput() {
          handleInput();
        },
      },
      [...options.map((o) => Option({ innerText: o.name, value: o.value }))]
    ),
    // Input(
    //   {
    //     id: barcodeWidthInputId,
    //     type: "range",
    //     innerText: ``,
    //     className: ``,
    //     min: barcodeConfig.width.min,
    //     max: barcodeConfig.width.max,
    //     step: barcodeConfig.width.step,
    //     value: barcodeConfig.width.starting,
    //     oninput() {
    //       handleInput();
    //     },
    //   },
    //   // add child elements to the array below
    //   []
    // ),
  ]);
  return parentElement;
};

export default BarcodeWidthInput;
