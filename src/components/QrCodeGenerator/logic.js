import QRCode from "qrcode";
import { qrTextInputId } from "./QrCodeTextInput";
import { getInputValue, setInputValue } from "../../utils";
import { qrScaleInputId } from "./QrScaleInput";
import { getQrLightColorInput } from "./QrCodeLightColorPicker";
import { getQrDarkColorInput } from "./QrCodeDarkColorPicker";

export function generateQr() {
  const qrTextInput = getQrTextInput();
  let content = getInputValue(qrTextInput);
  if (!content) {
    content = "<NONE>";
  }
  const options = {
    scale: getInputValue(getQrScaleInput()),
    color: {
      light: getInputValue(getQrLightColorInput()),
      dark: getInputValue(getQrDarkColorInput()),
    },
    errorCorrectionLevel: "H",
  };
  try {
    QRCode.toCanvas(getQrCodeCanvas(), content, { ...options }, function (err) {
      if (err) throw err;
    });
  } catch (err) {
    console.error(err);
  }
}

// INPUT
export function getQrTextInput() {
  return document.getElementById(qrTextInputId);
}

export function getQrCodeCanvas() {
  return document.getElementById("qrcode");
}

export function getQrScaleInput() {
  return document.getElementById(qrScaleInputId);
}
