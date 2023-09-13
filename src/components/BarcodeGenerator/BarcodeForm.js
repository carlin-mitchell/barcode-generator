// COMPONENT IMPORTS
import { Form, Div } from "../_elements/Elements";

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
      className: `barcode-form`,
    },
    // add child elements to the array below
    [
      Div({ className: "form-row-2" }, [
        BarcodeTextInput(),
        BarcodeFontDisplayInput(),
      ]),
      Div({ className: "form-row-3" }, [
        BarcodeWidthInput(),
        BarcodeHeightInput(),
        BarcodeFontSizeInput(),
      ]),
      Div({ className: "form-row-2" }, [
        BarcodePrimaryColorInput(),
        BarcodeSecondaryColorInput(),
      ]),
    ]
  );
  return parentElement;
};

export default BarcodeForm;
