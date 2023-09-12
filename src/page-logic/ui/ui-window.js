import JsBarcode from "jsbarcode";

import { debounce, getInputValue } from "../../utils";
import {
  generateBarcode,
  getBarcodeWidthInput,
  getBarcodeHeightInput,
} from "../../components/BarcodeGenerator/logic";
import { updateBarcodeWidthDisplay } from "../../components/BarcodeGenerator/ui";

const breakPoints = {
  xs: 0,
  sm: 480,
  md: 720,
  lg: 960,
  xl: 1200,
};

export function applyWindowListeners() {
  window.onresize = debounce(function (e) {
    //
  });
  window.onload = () => {
    updateBarcodeWidthDisplay(getInputValue(getBarcodeWidthInput()));
    generateBarcode();
  };
}
