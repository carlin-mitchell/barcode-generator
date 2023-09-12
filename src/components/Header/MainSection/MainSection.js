// COMPONENT IMPORTS
import { generateTestContentArr } from "../../utils";
import CustomIconsDisplay from "../_custom-components/CustomIconsDisplay/CustomIconsDisplay";
import { Main } from "../_elements/Elements";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const MainSection = () => {
  const otherClasses = "";
  const main = Main(
    {
      id: "main-section",
      className: "" + " " + otherClasses,
    },
    // add child elements to the array below
    [CustomIconsDisplay()]
  );
  return main;
};

export default MainSection;
