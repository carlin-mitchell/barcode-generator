// COMPONENT IMPORTS
import { getInputValue } from "../../utils";
import { Div, Form } from "../_elements/Elements";
import QrGenerateButton from "./QrCodeButton";
import QrDarkColorInput from "./QrCodeDarkColorPicker";
import QrLightColorInput from "./QrCodeLightColorPicker";
import QrGenerateTextInput from "./QrCodeTextInput";
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
  const parentElement = Div(
    { innerText: ``, className: `` },
    // add child elements to the array below
    [
      Form(
        {
          id: "qr-generate-form",
          onsubmit(e) {
            handleSubmit(e);
          },
        },
        [
          QrGenerateTextInput(),
          qrScaleInput(),
          QrLightColorInput(),
          QrDarkColorInput(),
        ]
      ),
    ]
  );
  return parentElement;
};

export default QrGenerateForm;
