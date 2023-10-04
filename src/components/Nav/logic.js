import { getBarcodeSection } from "../BarcodeGenerator/BarcodeGenerator";
import { getQrCodeSection } from "../QrCodeGenerator/QrCodeGenerator";

export function toglgeBardodeSection() {
  getBarcodeSection().classList.remove("display-none");
  getQrCodeSection().classList.add("display-none");
}

export function toglgeQrCodeSection() {
  getQrCodeSection().classList.remove("display-none");
  getBarcodeSection().classList.add("display-none");
}
