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

export const lightColorPickerId = uuidv4();
export function getQrLightColorInput() {
  return document.getElementById(lightColorPickerId);
}

export const lightOpacityPickerId = uuidv4();
export function getQrLightOpacityInput() {
  return document.getElementById(lightOpacityPickerId);
}

const QrLightColorInput = () => {
  const { lightColor, lightOpacity } = config.inputs;

  const parentElement = Div(
    { innerText: ``, className: `form-row-2` },
    // add child elements to the array below
    [
      //color
      Div({ className: `vertical-stack` }, [
        Label({ for: lightColorPickerId, innerText: lightColor.labelText }),
        Input({
          id: lightColorPickerId,
          type: "color",
          value: lightColor.startingValue,
          oninput() {
            handleInput();
          },
        }),
      ]),
      //opacity
      Div({ className: `vertical-stack` }, [
        Label({ for: lightOpacityPickerId, innerText: lightOpacity.lableText }),
        Input({
          id: lightOpacityPickerId,
          type: "number",
          min: lightOpacity.min,
          max: lightOpacity.max,
          value: lightOpacity.startIngValue,
          step: lightOpacity.step,
          oninput() {
            handleInput();
          },
        }),
      ]),
    ]
  );
  return parentElement;
};

export default QrLightColorInput;
