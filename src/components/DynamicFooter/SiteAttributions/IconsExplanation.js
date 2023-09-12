// COMPONENT IMPORTS
import { Div, A } from "../../_elements/Elements";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const IconsExplanation = () => {
  const parentElement = Div(
    { className: `icons-explanation`, innerHTML: `` },
    // add child elements to the array below
    [
      Div({
        innerHTML: `All other icons were created by me using ${
          A({
            href: "https://inkscape.org/",
            innerText: "Inkscape",
          }).outerHTML
        } and converting them to a font with ${
          A({
            href: "https://icomoon.io/",
            innerText: "IcoMoon",
          }).outerHTML
        }`,
      }),
    ]
  );
  return parentElement;
};

export default IconsExplanation;
