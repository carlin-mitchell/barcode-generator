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
export function getQrLightColorInput() {
  return document.getElementById(componentId);
}

const QrLightColorInput = () => {
  const { startingValue, labelText } = config.inputs.lightColor;

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

export default QrLightColorInput;
