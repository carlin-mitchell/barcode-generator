// COMPONENT IMPORTS
import { Footer } from "../_elements/Elements";
import CopyrightContainer from "./CopyrightContainer";
import AttributionsContainer from "./SiteAttributions/AttributionsContainer";
import TOPContainer from "./TOPLinkContainer";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const DynamicFooter = () => {
  // prettier-ignore
  const parentElement = 
  Footer(
    { 
      id: `footer`, 
      className: `bg-gray-dark-3 text-white` 
    },
    [
     CopyrightContainer(), 
     TOPContainer(), 
     AttributionsContainer()
    ]
  );

  return parentElement;
};

export default DynamicFooter;
