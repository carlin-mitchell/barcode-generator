import { Div } from "../../_elements/Elements";
import CarouselNavIndicator from "./CarouselNavIndicator";
import CarouselPlayPauseContainer from "./CarouselPlayPauseContainer";

// LOGIC IMPORTS

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const CarouselNav = (imageData) => {
  const parentElement = Div(
    {
      id: ``,
      className: `carousel-nav pt-1`,
    },
    // children
    [
      CarouselPlayPauseContainer(),
      // Nav indicators
      ...imageData.map((obj, index) =>
        CarouselNavIndicator({
          imageId: obj.uuid,
          startsActive: obj.isActive ? true : false,
        })
      ),
    ]
  );
  return parentElement;
};

export default CarouselNav;
