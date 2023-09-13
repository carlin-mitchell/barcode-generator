// COMPONENT IMPORTS
import { Div, Img } from "../_elements/Elements";
import { copyBarcode } from "./logic";

// LOGIC IMPORTS
//

// COMPONENT METHODS
function handleClick() {
  copyBarcode();
}

const Barcode = () => {
  //

  const parentElement = Div(
    {
      innerText: ``,
      className: `barcode-container`,
      onclick() {
        handleClick();
      },
    },
    // add child elements to the array below
    [Img({ id: "barcode" })]
  );
  return parentElement;
};

export default Barcode;
