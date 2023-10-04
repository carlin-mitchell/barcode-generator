import { getBarcodeSection } from "../BarcodeGenerator/BarcodeGenerator";
import { getQrCodeSection } from "../QrCodeGenerator/QrCodeGenerator";
import { getBarcodeToggle } from "./BarcodeSectionToggle";
import { getQrCodeToggle } from "./QrCodeSectionToggle";

export function toglgeBardodeSection() {
  getBarcodeSection().classList.remove("display-none");
  getBarcodeToggle().classList.add("active");

  getQrCodeSection().classList.add("display-none");
  getQrCodeToggle().classList.remove("active");
}

export function toglgeQrCodeSection() {
  getQrCodeSection().classList.remove("display-none");
  getQrCodeToggle().classList.add("active");

  getBarcodeSection().classList.add("display-none");
  getBarcodeToggle().classList.remove("active");
}
