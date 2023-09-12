// COMPONENT IMPORTS
import { Button } from "../../_elements/Elements";
import { clickCarouselNav } from "./ui/carousel-ui";
// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const CarouselNavIndicator = (props) => {
  const { imageId, startsActive } = props;
  const parentElement = Button(
    {
      id: `carousel-nav-${imageId}`,
      className: `carousel-indicator display-i-b bg-gray-light-6 ${
        startsActive ? "active" : ""
      }`,
      onclick: function () {
        clickCarouselNav(imageId);
      },
    },
    // add child elements to the array below
    []
  );
  return parentElement;
};

export default CarouselNavIndicator;
