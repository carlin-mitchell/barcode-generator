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

export const darkColorPickerId = uuidv4();
export function getQrDarkColorInput() {
  return document.getElementById(darkColorPickerId);
}

export const darkOpacityPickerId = uuidv4();
export function getQrDarkOpacityPicker() {
  return document.getElementById(darkOpacityPickerId);
}

const QrDarkColorInput = () => {
  const { darkColor, darkOpacity } = config.inputs;
  const parentElement = Div(
    { innerText: ``, className: `form-row-2` },
    // add child elements to the array below
    [
      Div({ className: `vertical-stack` }, [
        Label({ for: darkColorPickerId, innerText: darkColor.labelText }),
        Input({
          id: darkColorPickerId,
          type: "color",
          value: darkColor.startingValue,
          oninput() {
            handleInput();
          },
        }),
      ]),

      Div({ className: "vertical-stack" }, [
        Label({ for: darkOpacityPickerId, innerText: darkOpacity.lableText }),
        Input({
          id: darkOpacityPickerId,
          type: "number",
          min: darkOpacity.min,
          max: darkOpacity.max,
          value: darkOpacity.startIngValue,
          step: darkOpacity.step,
          oninput() {
            handleInput();
          },
        }),
      ]),
    ]
  );
  return parentElement;
};

export default QrDarkColorInput;
