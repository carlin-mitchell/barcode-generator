// COMPONENT IMPORTS
import { Div, Input } from "../_elements/Elements";
import Barcode from "./Barcode";
import BarcodeTextInput, { barcodeTextInputId } from "./BarcodeTextInput";
import BarcodeForm from "./BarcodeForm";

import GenerateButton from "./GenerateButton";
// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const BarcodeGenerator = () => {
  //

  const parentElement = Div(
    { innerText: ``, className: `` },
    // add child elements to the array below
    [BarcodeForm(), Barcode()]
  );
  return parentElement;
};

export default BarcodeGenerator;
