// COMPONENT IMPORTS
import { Div, Input } from "../_elements/Elements";
import Barcode from "./Barcode";

import JsBarcode from "jsbarcode";
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
    [Input({ type: "text" }), Barcode()]
  );
  return parentElement;
};

export default BarcodeGenerator;
