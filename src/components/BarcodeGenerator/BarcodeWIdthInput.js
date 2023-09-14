// COMPONENT IMPORTS
import { Div, Label, Option, Select } from "../_elements/Elements";

import { v4 as uuidv4 } from "uuid";

import { debounce } from "../../utils";
import { generateBarcode } from "./logic";

// LOGIC IMPORTS
//

// COMPONENT METHODS

export const barcodeWidthInputId = uuidv4();

function handleInput() {
  debounce(generateBarcode());
}

const options = [
  { name: "Normal", value: 1 },
  { name: "Wide", value: 2 },
];

const BarcodeWidthInput = () => {
  //

  const parentElement = Div({ className: `vertical-stack` }, [
    Label({
      for: barcodeWidthInputId,
      innerHTML: `Width: `,
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
  ]);
  return parentElement;
};

export default BarcodeWidthInput;
