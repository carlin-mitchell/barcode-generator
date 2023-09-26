// COMPONENT IMPORTS
import { generateTestContentArr } from "../../utils";
import BarcodeGenerator from "../BarcodeGenerator/BarcodeGenerator";
import { Main, Div } from "../_elements/Elements";
import QrCodeGenerator from "../QrCodeGenerator/QrCodeGenerator";

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
    [BarcodeGenerator(), QrCodeGenerator()]
  );
  return main;
};

export default MainSection;
