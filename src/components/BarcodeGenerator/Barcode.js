// COMPONENT IMPORTS
import { Div, Img } from "../_elements/Elements";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const Barcode = () => {
  //

  const parentElement = Div(
    { innerText: ``, className: `barcode-container` },
    // add child elements to the array below
    [Img({ id: "barcode" })]
  );
  return parentElement;
};

export default Barcode;
