// COMPONENT IMPORTS
import { Ul } from "../../_elements/Elements";
import CarouselSlide from "./CarouselSlide";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const CarouselTrack = (imageData) => {
  const parentElement = Ul(
    {
      id: ``,
      className: `carousel-track`,
    },
    // children
    [
      ...imageData.map((obj, index) =>
        CarouselSlide(obj.src, obj.uuid, obj.isActive ? true : false)
      ),
    ]
  );
  return parentElement;
};

export default CarouselTrack;
