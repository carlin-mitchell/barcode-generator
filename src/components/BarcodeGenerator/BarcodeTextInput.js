// COMPONENT IMPORTS
import { Div, Input } from "../_elements/Elements";
import { v4 as uuidv4 } from "uuid";
import { generateBarcode } from "./logic";

// LOGIC IMPORTS
//

// COMPONENT METHODS
function handleChange() {
  generateBarcode();
}
export const barcodeTextInputId = uuidv4();

const BarcodeTextInput = (props) => {
  const { value } = props;

  const parentElement = Div(
    {
      innerText: ``,
      className: ``,
    },
    // add child elements to the array below
    [
      Input({
        id: `${barcodeTextInputId}`,
        value,
        oninput() {
          handleChange();
        },
      }),
    ]
  );
  return parentElement;
};

export default BarcodeTextInput;
