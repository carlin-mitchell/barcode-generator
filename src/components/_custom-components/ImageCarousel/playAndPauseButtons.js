import { Button } from "../../_elements/Elements";
import Icon from "../Icon";
import { clickCarouselPlay, clickCarouselPause } from "./ui/carousel-ui";

export const PlayButton = Button(
  {
    className: "play-button visible",
    onclick() {
      clickCarouselPlay();
    },
  },
  [Icon("icon-triangle rotate-90 font-sm text-gray-dark-4")]
);

export const PauseButton = Button(
  {
    className: "pause-button",
    onclick() {
      clickCarouselPause();
    },
  },
  [Icon("icon-pause font-sm text-gray-dark-4")]
);
