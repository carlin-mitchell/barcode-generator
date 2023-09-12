// COMPONENT IMPORTS
import { Div, Img } from "../_elements/Elements";
import { getBarcode } from "./ui";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }
setTimeout(getBarcode({ message: "Hello World!" }), 0);
const Barcode = () => {
  //

  const parentElement = Div(
    { innerText: ``, className: `` },
    // add child elements to the array below
    [Img({ id: "barcode" })]
  );
  return parentElement;
};

export default Barcode;
