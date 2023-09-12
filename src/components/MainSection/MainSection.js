// COMPONENT IMPORTS
import { generateTestContentArr } from "../../utils";
import CustomIconsDisplay from "../_custom-components/CustomIconsDisplay/CustomIconsDisplay";
import ImageCarousel from "../_custom-components/ImageCarousel/ImageCarousel";
import ValidatedForm from "../_custom-components/ValidatedForm/ValidatedForm";
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
    [
      Div({ className: "icons-row" }, [CustomIconsDisplay()]),
      Div({ className: "carousel-row" }, [ImageCarousel()]),
      Div({ className: "form-row" }, [ValidatedForm()]),
    ]
  );
  return main;
};

export default MainSection;
