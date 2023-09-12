// COMPONENT IMPORTS
import { Form } from "../_elements/Elements";
import GenerateButton from "./GenerateButton";
import BarcodeTextInput from "./BarcodeTextInput";
import { getInputValue } from "../../utils";
import {
  getBarcodeTextInput,
  generateBarcode,
  getBarcodeWidthInput,
} from "./logic";
import BarcodeWidthInput from "./BarcodeWIdthInput";

// LOGIC IMPORTS
//

// COMPONENT METHODS
function handleSubmit(e) {
  e.preventDefault();
  const width = getInputValue(getBarcodeWidthInput());

  generateBarcode({ width });
}

const BarcodeForm = () => {
  //

  const parentElement = Form(
    {
      innerText: ``,
      className: ``,
      onsubmit(e) {
        handleSubmit(e);
      },
    },
    // add child elements to the array below
    [BarcodeTextInput({ value: "Hello World" }), BarcodeWidthInput()]
  );
  return parentElement;
};

export default BarcodeForm;
