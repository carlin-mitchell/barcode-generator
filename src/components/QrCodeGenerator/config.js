export const config = {
  inputs: {
    text: {
      startingValue: "This is only a test",
    },
    scale: {
      min: 1,
      max: 20,
      labelText: "Scale",
      startingValue: 4,
    },
    lightColor: {
      labelText: "Light Color",
      startingValue: "#ffffff",
    },
    lightOpacity: {
      lableText: "Light Color Opacity",
      startIngValue: 1,
      min: 0,
      max: 1,
      step: 0.01,
    },
    darkColor: {
      labelText: "Dark Color",
      startingValue: "#000000",
    },
    darkOpacity: {
      lableText: "Dark Color Opacity",
      startIngValue: 1,
      min: 0,
      max: 1,
      step: 0.01,
    },
  },
};
