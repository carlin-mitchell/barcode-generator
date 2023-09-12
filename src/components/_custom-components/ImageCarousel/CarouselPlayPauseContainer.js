// COMPONENT IMPORTS
import { Div } from "../../_elements/Elements";
import { PlayButton, PauseButton } from "./playAndPauseButtons";
// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const CarouselPlayPauseContainer = () => {
  //

  const parentElement = Div(
    {
      className: "carousel-play-pause-container",
    },
    // childern
    [PauseButton, PlayButton]
  );
  return parentElement;
};

export default CarouselPlayPauseContainer;
