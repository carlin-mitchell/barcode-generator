// COMPONENT IMPORTS
import { getInputValue } from "../../utils";
import { Div, Form } from "../_elements/Elements";
import QrGenerateButton from "./QrCodeButton";
import QrDarkColorInput from "./QrCodeDarkColorPicker";
import QrLightColorInput from "./QrCodeLightColorPicker";
import QrGenerateTextInput from "./QrCodeTextInput";
import qrMarginInput from "./QrMarginInput";
import qrScaleInput from "./QrScaleInput";
import { generateQr, getQrTextInput } from "./logic";

// LOGIC IMPORTS
//

// COMPONENT METHODS
function handleSubmit(e) {
  e.preventDefault();
  const content = getInputValue(getQrTextInput());

  generateQr(content);
}

const QrGenerateForm = () => {
  //
  const parentElement = Form(
    {
      id: "qr-generate-form",
      onsubmit(e) {
        handleSubmit(e);
      },
    },
    [
      QrGenerateTextInput(),
      Div({ className: "form-row-2 " }, [qrScaleInput(), qrMarginInput()]),
      Div({ className: `` }, [QrLightColorInput()]),
      Div({ className: `` }, [QrDarkColorInput()]),
    ]
  );

  return parentElement;
};

export default QrGenerateForm;
