// COMPONENT IMPORTS
import { Div, Input, Label, Span } from "../_elements/Elements";

import { v4 as uuidv4 } from "uuid";

// LOGIC IMPORTS
//

// COMPONENT METHODS

export const barcodeWidthInputId = uuidv4();
export const barcodeWidthLabelSpanId = `label-span-${barcodeWidthInputId}`;

function handleInput() {
  //
}

const BarcodeWidthInput = () => {
  //

  const parentElement = Div({}, [
    Label({
      innerHTML: `Width: ${Span({ id: barcodeWidthLabelSpanId }).outerHTML}`,
    }),
    Input(
      {
        id: barcodeWidthInputId,
        type: "range",
        innerText: ``,
        className: ``,
        min: 1,
        max: 10,
        step: 1,
        value: 1,
      },
      // add child elements to the array below
      []
    ),
  ]);
  return parentElement;
};

export default BarcodeWidthInput;
