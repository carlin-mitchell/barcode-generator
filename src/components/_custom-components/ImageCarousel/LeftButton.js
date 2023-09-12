// COMPONENT IMPORTS
import { Button } from "../../_elements/Elements";
import Icon from "../Icon";
import { clickCarouselLeft } from "./ui/carousel-ui";
// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const LeftCarouselButton = (sharedClasses) => {
  const button = Button(
    {
      id: ``,
      className: `carousel-button left ` + sharedClasses,
      onclick() {
        clickCarouselLeft();
      },
    },
    // children
    [Icon("icon-up-arrow-short rotate-270 ")]
  );
  return button;
};

export default LeftCarouselButton;
