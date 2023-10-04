// COMPONENT IMPORTS
import { Div, Input, Label } from "../_elements/Elements";
import { v4 as uuidv4 } from "uuid";
import { generateQr, getQrTextInput } from "./logic";
import { getInputValue } from "../../utils";
import { config } from "./config";

// LOGIC IMPORTS
//

// COMPONENT METHODS
function handleInput() {
  generateQr();
}

export const componentId = uuidv4();
export const qrTextInputId = `qr-text-input-${componentId}`;

const QrGenerateTextInput = () => {
  //
  const parentElement = Div(
    { innerText: ``, className: `` },
    // add child elements to the array below
    [
      Label({ for: qrTextInputId, innerText: config.inputs.text.labelText }),
      Input({
        type: "text",
        id: qrTextInputId,
        oninput() {
          handleInput();
        },
        value: config.inputs.text.startingValue,
      }),
    ]
  );
  return parentElement;
};

export default QrGenerateTextInput;
