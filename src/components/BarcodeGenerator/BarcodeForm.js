// COMPONENT IMPORTS
import { Form } from "../_elements/Elements";

import BarcodeTextInput from "./BarcodeTextInput";
import BarcodeWidthInput from "./BarcodeWIdthInput";
import BarcodeHeightInput from "./BarcodeHeightInput";
import BarcodeFontSizeInput from "./BarcodeFontSizeInput";
import BarcodeFontDisplayInput from "./BarcodeFontDisplayInput";
import {
  BarcodePrimaryColorInput,
  BarcodeSecondaryColorInput,
} from "./BarcodeColorInputs";

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
      BarcodeTextInput(),
      BarcodeWidthInput(),
      BarcodeHeightInput(),
      BarcodeFontSizeInput(),
      BarcodeFontDisplayInput(),
      BarcodePrimaryColorInput(),
      BarcodeSecondaryColorInput(),
    ]
  );
  return parentElement;
};

export default BarcodeForm;
