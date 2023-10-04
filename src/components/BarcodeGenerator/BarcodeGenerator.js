// COMPONENT IMPORTS
import { Div } from "../_elements/Elements";
import Barcode from "./Barcode";
import BarcodeEnableClickToCopy from "./BarcodeEnableClickToCopy";
import BarcodeForm from "./BarcodeForm";

import { v4 as uuidv4 } from "uuid";

import GenerateButton from "./GenerateButton";
// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

export const barcodeSectionId = uuidv4();
export function getBarcodeSection() {
  return document.getElementById(barcodeSectionId);
}

const BarcodeGenerator = () => {
  //

  const parentElement = Div(
    { id: barcodeSectionId, innerText: ``, className: `barcode-generator` },
    // add child elements to the array below
    [
      BarcodeForm(),
      Div({ className: "barcode-section" }, [
        Barcode(),
        Div({}, [BarcodeEnableClickToCopy()]),
      ]),
    ]
  );
  return parentElement;
};

export default BarcodeGenerator;
