// COMPONENT IMPORTS
import { Div, Label, Option, Select, Input } from "../_elements/Elements";

import { v4 as uuidv4 } from "uuid";

import { debounce } from "../../utils";
import { config } from "./config";
import { generateQr } from "./logic";

// LOGIC IMPORTS
//

// COMPONENT METHODS

export const qrMarginInputId = uuidv4();
export function getQrMarginInput() {
  return document.getElementById(qrMarginInputId);
}

function handleInput() {
  debounce(generateQr());
}

const qrMarginInput = () => {
  const { startingValue, labelText, min, max, step } = config.inputs.margin;

  const parentElement = Div({}, [
    Label({
      for: qrMarginInputId,
      innerHTML: labelText,
    }),
    Input({
      id: qrMarginInputId,
      type: "number",
      min,
      max,
      step,
      value: startingValue,
      oninput() {
        handleInput();
      },
    }),
  ]);
  return parentElement;
};

export default qrMarginInput;
