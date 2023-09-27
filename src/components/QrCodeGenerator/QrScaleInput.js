// COMPONENT IMPORTS
import { Div, Label, Option, Select } from "../_elements/Elements";

import { v4 as uuidv4 } from "uuid";

import { debounce } from "../../utils";
import { config } from "./config";
import { generateQr } from "./logic";

// LOGIC IMPORTS
//

// COMPONENT METHODS

export const qrScaleInputId = uuidv4();

function handleInput() {
  debounce(generateQr());
}

const options = Array(config.inputs.scale.max)
  .fill(null)
  .map((e, i) => i + 1);
const qrScaleInput = () => {
  //

  const parentElement = Div({ className: `vertical-stack` }, [
    Label({
      for: qrScaleInputId,
      innerHTML: `Scale `,
    }),
    Select(
      {
        id: qrScaleInputId,
        oninput() {
          handleInput();
        },
      },
      [
        ...options.map((o) =>
          Option({
            innerText: o,
            value: o,
            selected: o === config.inputs.scale.startingValue ? true : false,
          })
        ),
      ]
    ),
  ]);
  return parentElement;
};

export default qrScaleInput;
