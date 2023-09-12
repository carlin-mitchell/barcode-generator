// COMPONENT IMPORTS
import { Element } from "../_elements/Elements";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const Icon = (iconClass) => {
  const icon = Element("i", { className: `icon ${iconClass} display-i-b` });
  return icon;
};

export default Icon;
