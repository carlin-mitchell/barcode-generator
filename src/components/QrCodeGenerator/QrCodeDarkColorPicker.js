import { v4 as uuidv4 } from "uuid";

// COMPONENT IMPORTS
import { Div, Label, Input } from "../_elements/Elements";
import { config } from "./config";
import { debounce } from "../../utils";
import { generateQr } from "./logic";

// LOGIC IMPORTS
//

// COMPONENT METHODS
function handleInput() {
  debounce(generateQr());
}

export const componentId = uuidv4();
export function getQrDarkColorInput() {
  return document.getElementById(componentId);
}

const QrDarkColorInput = () => {
  const { labelText, startingValue } = config.inputs.darkColor;

  const parentElement = Div(
    { innerText: ``, className: `` },
    // add child elements to the array below
    [
      Label({ for: componentId, innerText: labelText }),
      Input({
        id: componentId,
        type: "color",
        value: startingValue,
        oninput() {
          handleInput();
        },
      }),
    ]
  );
  return parentElement;
};

export default QrDarkColorInput;
