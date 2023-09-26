import QRCode from "qrcode";
import { qrTextInputId } from "./QrCodeTextInput";

export async function generateQr(content) {
    try {
        const code = await QRCode.toCanvas(document.getElementById("qrcode"), content);
        console.log(code);
    } catch (err) {
        console.error(err);
    }
}



// INPUT
export function getQrTextInput() {
    return document.getElementById(qrTextInputId)
}