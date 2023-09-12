// COMPONENT IMPORTS
import { Div } from "../../_elements/Elements";
import LeftCarouselButton from "./LeftButton";
import RightCarouselButton from "./RightButton";
import CarouselTrackContainer from "./CarouselTrackContainer";
import CarouselNav from "./CarouselNav";
import { v4 as uuidv4 } from "uuid";

import { imageData } from "./data/imageLoader";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const ImageCarousel = () => {
  const carousel = Div(
    {
      id: ``,
      className: `carousel pt-1 pb-1`,
    },
    // children
    [
      LeftCarouselButton(),
      CarouselTrackContainer(imageData),
      RightCarouselButton(),
      CarouselNav(imageData),
    ]
  );
  return carousel;
};

export default ImageCarousel;
