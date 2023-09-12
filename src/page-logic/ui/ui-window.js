import JsBarcode from "jsbarcode";

import { debounce, getInputValue } from "../../utils";
import {
  generateBarcode,
  getBarcodeTextInput,
  getBarcodeWidthSpan,
  getBarcodeWidthInput,
} from "../../components/BarcodeGenerator/logic";

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
    getBarcodeWidthSpan().innerText = getInputValue(getBarcodeWidthInput());
    generateBarcode(getInputValue(getBarcodeTextInput()), {
      width: getInputValue(getBarcodeWidthInput()),
    });
  };
}
