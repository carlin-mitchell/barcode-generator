// COMPONENT IMPORTS
import { generateTestContentArr } from "../../utils";
import BarcodeGenerator from "../BarcodeGenerator/BarcodeGenerator";
import { Main, Div } from "../_elements/Elements";

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
    [BarcodeGenerator()]
  );
  return main;
};

export default MainSection;
