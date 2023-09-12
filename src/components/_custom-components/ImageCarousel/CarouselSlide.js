// COMPONENT IMPORTS
import { Div, Img } from "../../_elements/Elements";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const CarouselSlide = (imageSource, id, startsActive) => {
  const parentElement = Div(
    {
      id: `carousel-slide-` + id,
      className: `carousel-slide ${startsActive ? "active" : ""}`,
    },
    // children
    [
      Img({
        src: imageSource,
        className: "carousel-image",
      }),
    ]
  );
  return parentElement;
};

export default CarouselSlide;
