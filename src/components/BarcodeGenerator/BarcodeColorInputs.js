// COMPONENT IMPORTS
import { debounce, setInputValue } from "../../utils";
import { Div, Label, Input, Select, Option } from "../_elements/Elements";

import { v4 as uuidv4 } from "uuid";
import {
  generateBarcode,
  getBarcodePrimaryColorInput,
  getBarcodeSecondaryColorInput,
} from "./logic";
import { barcodeConfig } from "./config";
// LOGIC IMPORTS
//

// COMPONENT METHODS
function handleColorInput(e) {
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
    { innerText: ``, className: `` },
    // add child elements to the array below
    [
      Label({
        innerText: `Primary color: `,
        for: barcodePrimaryColorInputId,
      }),
      Input({
        type: "color",
        id: barcodePrimaryColorInputId,
        value: barcodeConfig.primaryColor.starting,
        oninput() {
          handleColorInput();
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
    { innerText: ``, className: `` },
    // add child elements to the array below
    [
      Label({
        innerText: `Secondary color: `,
        for: barcodeSecondaryColorInputId,
      }),
      Input({
        type: "color",
        id: barcodeSecondaryColorInputId,
        value: barcodeConfig.secondaryColor.starting,
        oninput() {
          handleColorInput();
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
          ]
        ),
      ]),
    ]
  );
  return parentElement;
};
