// COMPONENT IMPORTS
import { Div } from "../../_elements/Elements";
import Icon from "../Icon";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const CustomIconsDisplay = () => {
  const parentElement = Div(
    { innerText: ``, className: `custom-icons-display` },
    // add child elements to the array below
    [
      Icon("icon-hamburger-menu"),
      Icon("icon-pause"),
      Icon("icon-pencil"),
      Icon("icon-plus-sign"),
      Icon("icon-plus-sign rotate-45"),
      Icon("icon-trash"),
      Icon("icon-triangle"),
      Icon("icon-triangle rotate-180"),
      Icon("icon-triangle-short rotate-90"),
      Icon("icon-triangle-short"),
      Icon("icon-up-arrow"),
      Icon("icon-up-arrow rotate-180"),
      Icon("icon-up-arrow-short"),
      Icon("icon-up-arrow-short rotate-270"),
      Icon("icon-up-down"),
      Icon("icon-up-down rotate-90"),
    ]
  );
  return parentElement;
};

export default CustomIconsDisplay;
