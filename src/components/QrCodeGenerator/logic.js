import QRCode from "qrcode";
import { qrTextInputId } from "./QrCodeTextInput";
import { getInputValue, setInputValue } from "../../utils";

export async function generateQr() {
  const qrTextInput = getQrTextInput();
  let content = getInputValue(qrTextInput);
  if (!content) {
    content = "<NONE>";
  }

  try {
    const code = await QRCode.toCanvas(getQrCodeCanvas(), content);
    console.log(code);
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
