// COMPONENT IMPORTS
import { A, Div } from "../_elements/Elements";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const TOPContainer = () => {
  const parentContainer = Div(
    {
      className: `top-container`,
      innerText: "Inspired By:",
    },
    // add child elements to the array below
    [
      A({
        href: "https://www.theodinproject.com/",
        className: "top-link",
        innerText: "The Odin Project",
      }),
    ]
  );
  return parentContainer;
};

export default TOPContainer;
