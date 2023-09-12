// ########################## UTILITIES #########################

function getAllCarouselSlides() {
  return [...document.querySelector(".carousel-track").childNodes];
}

function getAllCarouselSlideIds() {
  return getAllCarouselSlides().map((elem) => elem.id);
}

function getAllCarouselNavButtons() {
  return [...document.querySelectorAll(".carousel-indicator")];
}

function getCurrentSlideIndex() {
  const allSlideIds = getAllCarouselSlideIds();
  const currentSlideId = document.querySelector(".carousel-slide.active").id;
  const currentSlideIndex = allSlideIds.indexOf(currentSlideId);

  return currentSlideIndex;
}

function getPreviousSlideIndex() {
  let previousSlideIndex = getCurrentSlideIndex() - 1;

  // if the calculated index is outside the list, set it to the index of the last item in the list
  const correctedIndex =
    previousSlideIndex < 0
      ? getAllCarouselSlideIds().length - 1
      : previousSlideIndex;

  return correctedIndex;
}

function getNextSlideIndex() {
  let nextSlideIndex = getCurrentSlideIndex() + 1;

  // if the calculated index is outside the list, set it to the index of the first item in the list
  const correctedIndex =
    nextSlideIndex > getAllCarouselSlideIds().length - 1 ? 0 : nextSlideIndex;

  return correctedIndex;
}

// move to the selected slide
export function gotoSpecificSlide(id) {
  const allNavButtons = getAllCarouselNavButtons();
  const selectedNavButton = document.getElementById(`carousel-nav-${id}`);
  const selectedSlide = document.getElementById(`carousel-slide-${id}`);
  const allSlides = getAllCarouselSlides();

  allSlides.forEach((slide) => slide.classList.remove("active"));
  selectedSlide.classList.add("active");

  allNavButtons.forEach((slide) => slide.classList.remove("active"));
  selectedNavButton.classList.add("active");
}

// ######################### EVENT HANDLERS #########################
// move to the selected slide when clicking on the associated nav button
export function clickCarouselNav(id) {
  gotoSpecificSlide(id);
}

// move right when clicking on the right button
export function clickCarouselRight() {
  const id = getAllCarouselSlideIds()[getNextSlideIndex()].replace(
    "carousel-slide-",
    ""
  );
  gotoSpecificSlide(id);
}

// move left when clicking on the right button
export function clickCarouselLeft() {
  const id = getAllCarouselSlideIds()[getPreviousSlideIndex()].replace(
    "carousel-slide-",
    ""
  );
  gotoSpecificSlide(id);
}

// ######################## AUTO PROGRESSION ########################
export function clickCarouselPlay() {
  handleAutoAdvance("play");
  const playButton = document.querySelector(".carousel .play-button");
  playButton.classList.toggle("visible");

  const pauseButton = document.querySelector(".carousel .pause-button");
  pauseButton.classList.toggle("visible");
}

export function clickCarouselPause() {
  handleAutoAdvance("pause");
  const playButton = document.querySelector(".carousel .play-button");
  playButton.classList.toggle("visible");

  const pauseButton = document.querySelector(".carousel .pause-button");
  pauseButton.classList.toggle("visible");
}

let interval;
/**
 * A function to create or cancel the auto advance timer
 * you will neet to declare interval (let interval) before
 * this function to allow the interval to be created / refenenced
 * @param {string} mode a string containing 'play' or 'pause' to indicate the mode
 */
export function handleAutoAdvance(mode) {
  const playing = mode === "play" ? true : false;
  if (playing) {
    // start an interval timer and capture its reference
    interval = window.setInterval(clickCarouselRight, 5000);
  } else {
    // cancel the reference you captured
    window.clearInterval(interval);
  }
}
