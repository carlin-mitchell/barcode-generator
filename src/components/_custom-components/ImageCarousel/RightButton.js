import { Button } from "../../_elements/Elements";
import Icon from "../Icon";
import { clickCarouselRight } from "./ui/carousel-ui";
// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const RightCarouselButton = (sharedClasses) => {
  const button = Button(
    {
      id: ``,
      className: `carousel-button right ` + sharedClasses,
      onclick() {
        clickCarouselRight();
      },
    },
    // children
    [Icon("icon-up-arrow-short rotate-90")]
  );
  return button;
};

export default RightCarouselButton;
