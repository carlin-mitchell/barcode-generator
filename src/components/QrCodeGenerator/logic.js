import QRCode from "qrcode";
import { qrTextInputId } from "./QrCodeTextInput";

export async function generateQr(content) {
    try {
        const code = await QRCode.toDataURL(content);
        console.log(code);
    } catch (err) {
        console.error(err);
    }
}



// INPUT
export function getQrTextInput() {
    return document.getElementById(qrTextInputId)
}