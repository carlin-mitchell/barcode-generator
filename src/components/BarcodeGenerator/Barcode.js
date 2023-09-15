// COMPONENT IMPORTS
import { Div, Img, Svg } from "../_elements/Elements";
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
    },
    // add child elements to the array below
    [
      Div(
        {
          className: "copy-message-container",
          onclick() {
            handleClick();
          },
        },
        [Div({ innerText: "copy to clipboard" })]
      ),
      Img({ id: "barcode", className: "barcode-image" }),
    ]
  );
  return parentElement;
};

export default Barcode;
