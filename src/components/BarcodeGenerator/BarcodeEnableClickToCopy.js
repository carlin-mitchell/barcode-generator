// COMPONENT IMPORTS
import { Div, Label, Input } from "../_elements/Elements";
import { v4 as uuidv4 } from "uuid";
// LOGIC IMPORTS
//

// COMPONENT METHODS
function handleInput(e) {
  const isChecked = e.target.checked;
  console.log(isChecked);
  const copyMessage = document.querySelector(".copy-message-container");
  console.log(copyMessage);

  isChecked
    ? copyMessage.classList.remove("display-none")
    : copyMessage.classList.add("display-none");
}

export const clickToCopyId = uuidv4();
const BarcodeEnableClickToCopy = () => {
  //

  const parentElement = Div(
    { innerText: ``, className: `barcode-enable-click-to-copy` },
    // add child elements to the array below
    [
      Label({ for: clickToCopyId, innerText: `Enable click to copy` }),
      Input({
        id: clickToCopyId,
        type: "checkbox",
        checked: true,
        oninput(e) {
          handleInput(e);
        },
      }),
      Div({
        className: "small-font",
        innerText: "(Feature only works in Google Chrome)",
      }),
    ]
  );
  return parentElement;
};

export default BarcodeEnableClickToCopy;
