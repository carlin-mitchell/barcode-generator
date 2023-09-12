import { applyWindowListeners } from "./ui-window";
import { clickCarouselPlay } from "../../components/_custom-components/ImageCarousel/ui/carousel-ui";

export function applyInitialState() {
  applyWindowListeners();
  clickCarouselPlay();
}
