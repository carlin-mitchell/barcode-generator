import QRCode from "qrcode";
import { qrTextInputId } from "./QrCodeTextInput";
import { convertAlphaChanelToHex, getInputValue } from "../../utils";
import { qrScaleInputId } from "./QrScaleInput";
import {
  getQrLightColorInput,
  getQrLightOpacityInput,
} from "./QrCodeLightColorPicker";
import {
  getQrDarkColorInput,
  getQrDarkOpacityPicker,
} from "./QrCodeDarkColorPicker";
import { getQrMarginInput } from "./QrMarginInput";
import { updateCopyMessage } from "./ui";

export function generateQr() {
  const qrTextInput = getQrTextInput();
  let content = getInputValue(qrTextInput);
  if (!content) {
    content = "<NONE>";
  }
  const options = {
    scale: getInputValue(getQrScaleInput()),
    color: {
      light:
        getInputValue(getQrLightColorInput()) +
        convertAlphaChanelToHex(getInputValue(getQrLightOpacityInput())),
      dark:
        getInputValue(getQrDarkColorInput()) +
        convertAlphaChanelToHex(getInputValue(getQrDarkOpacityPicker())),
    },
    errorCorrectionLevel: "H",
    margin: getInputValue(getQrMarginInput()),
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

export async function copyQrToClipboard() {
  const qrCode = document.getElementById("qrcode");
  console.log(qrCode);
  // const data = await fetch(qrCode.src);
  try {
    qrCode.toBlob((blob) =>
      navigator.clipboard.write([new ClipboardItem({ "image/png": blob })])
    );
    updateCopyMessage("copied!");
  } catch (e) {
    updateCopyMessage(
      "There was an issue, try agian. (this feature only works in google chrome)"
    );
    console.log(e);
  }
}
