// COMPONENT IMPORTS
import { Form } from "../_elements/Elements";
import GenerateButton from "./GenerateButton";
import BarcodeTextInput from "./BarcodeTextInput";
import { getInputValue } from "../../utils";
import { generateBarcode, getBarcodeWidthInput } from "./logic";
import BarcodeWidthInput from "./BarcodeWIdthInput";
import BarcodeHeightInput from "./BarcodeHeightInput";
import BarcodeFontSizeInput from "./BarcodeFontSizeInput";

// LOGIC IMPORTS
//

// COMPONENT METHODS

const BarcodeForm = () => {
  //

  const parentElement = Form(
    {
      innerText: ``,
      className: ``,
    },
    // add child elements to the array below
    [
      BarcodeTextInput({ value: "Hello World" }),
      BarcodeWidthInput(),
      BarcodeHeightInput(),
      BarcodeFontSizeInput(),
    ]
  );
  return parentElement;
};

export default BarcodeForm;
