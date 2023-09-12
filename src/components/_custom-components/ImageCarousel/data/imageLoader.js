import { v4 as uuidv4 } from "uuid";
import { getRandomInt } from "../../../../utils";

// Image source info
function getPicsumId(min, max, exclusions) {
  let randInt = getRandomInt(min, max);
  while (true) {
    if (exclusions.includes(randInt)) {
      randInt = getRandomInt(min, max);
    } else {
      return randInt;
    }
  }
}

function getRandomImageSrc(width, height) {
  return `https://picsum.photos/id/${getPicsumId(1, 100, [
    97,
  ])}/${width}/${height}`;
}

const numImages = 7;
const imageWidth = 500;
const imageHeight = 300;

// add isActive: true to the slide you want to start as active
const imageSources = [
  { src: getRandomImageSrc(imageWidth, imageHeight), isActive: true },
  ...Array(numImages)
    .fill(null)
    .map((e) => {
      return {
        src: getRandomImageSrc(imageWidth, imageHeight),
      };
    }),
];

export const imageData = imageSources.map((obj) => ({
  ...obj,
  uuid: uuidv4(),
}));
