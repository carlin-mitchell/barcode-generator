// COMPONENT IMPORTS
import { Div } from "../_elements/Elements";
import Barcode from "./Barcode";
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
    { innerText: ``, className: `barcode-generator` },
    // add child elements to the array below
    [BarcodeForm(), Barcode()]
  );
  return parentElement;
};

export default BarcodeGenerator;
