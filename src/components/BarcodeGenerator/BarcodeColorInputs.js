// COMPONENT IMPORTS
import { debounce, setInputValue } from "../../utils";
import { Div, Label, Input, Select, Option } from "../_elements/Elements";

import { v4 as uuidv4 } from "uuid";
import {
  generateBarcode,
  getBarcodePrimaryColorInput,
  getBarcodePrimaryColorPreset,
  getBarcodeSecondaryColorInput,
  getBarcodeSecondaryColorPreset,
} from "./logic";
import { barcodeConfig } from "./config";
// LOGIC IMPORTS
//

// COMPONENT METHODS

function handlePrimaryColorInput() {
  const preset = getBarcodePrimaryColorPreset();
  preset.selected = true;
  debounce(generateBarcode());
}
function handleSecondaryColorInput() {
  const preset = getBarcodeSecondaryColorPreset();
  preset.selected = true;
  debounce(generateBarcode());
}

function handlePrimaryColorPreset(e) {
  setInputValue(getBarcodePrimaryColorInput(), e.target.value);
  debounce(generateBarcode());
}

function handleSecondaryColorPreset(e) {
  setInputValue(getBarcodeSecondaryColorInput(), e.target.value);
  debounce(generateBarcode());
}

export const barcodePrimaryColorInputId = uuidv4();
export const barcodeSecondaryColorInputId = uuidv4;

const presetOptions = [
  { name: "UMN Gold", value: "#FFCC33" },
  { name: "UMN Maroon", value: "#7A0019" },
];

export const BarcodePrimaryColorInput = () => {
  //

  const parentElement = Div(
    { innerText: ``, className: `vertical-stack` },
    // add child elements to the array below
    [
      Label({
        innerHTML: `Primary color <em>(must be lighter)</em>: `,
        for: barcodePrimaryColorInputId,
      }),
      Input({
        type: "color",
        id: barcodePrimaryColorInputId,
        value: barcodeConfig.primaryColor.starting,
        oninput() {
          handlePrimaryColorInput();
        },
      }),
      Div({}, [
        Select(
          {
            oninput(e) {
              handlePrimaryColorPreset(e);
            },
          },
          [
            Option({
              innerText: "Default",
              value: barcodeConfig.primaryColor.starting,
            }),
            ...presetOptions.map((o) =>
              Option({ innerText: o.name, value: o.value })
            ),
            Option({
              innerText: "Custom",
              value: undefined,
              id: `custom-preset-${barcodePrimaryColorInputId}`,
            }),
          ]
        ),
      ]),
    ]
  );
  return parentElement;
};

export const BarcodeSecondaryColorInput = () => {
  //

  const parentElement = Div(
    { innerText: ``, className: `vertical-stack` },
    // add child elements to the array below
    [
      Label({
        innerHTML: `Secondary color <em>(must be darker)</em>: `,
        for: barcodeSecondaryColorInputId,
      }),
      Input({
        type: "color",
        id: barcodeSecondaryColorInputId,
        value: barcodeConfig.secondaryColor.starting,
        oninput() {
          handleSecondaryColorInput();
        },
      }),
      Div({}, [
        Select(
          {
            oninput(e) {
              handleSecondaryColorPreset(e);
            },
          },
          [
            Option({
              innerText: "Default",
              value: barcodeConfig.secondaryColor.starting,
            }),
            ...presetOptions.map((o) =>
              Option({ innerText: o.name, value: o.value })
            ),
            Option({
              innerText: "Custom",
              value: undefined,
              id: `custom-preset-${barcodeSecondaryColorInputId}`,
            }),
          ]
        ),
      ]),
    ]
  );
  return parentElement;
};
