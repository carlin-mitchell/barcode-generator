// COMPONENT IMPORTS
import { getInputValue } from "../../utils";
import { Button } from "../_elements/Elements";
import { barcodeTextInputId } from "./BarcodeTextInput";
import { generateBarcode, getBarcodeTextInput } from "./logic";

// LOGIC IMPORTS
//

// COMPONENT METHODS

const GenerateButton = () => {
  //

  const parentElement = Button(
    {
      innerText: `Generate`,
      className: ``,
    },
    // add child elements to the array below
    []
  );
  return parentElement;
};

export default GenerateButton;
