// COMPONENT IMPORTS
import { Div, Canvas } from "../_elements/Elements"

import QrGenerateForm from "./QrGenerateForm";
// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const QrCodeGenerator = () => {
    //

    const parentElement = Div(
        { innerText: ``, className: `` },
        // add child elements to the array below
        [QrGenerateForm(), Canvas({ id: "qrcode" })]
    );
    return parentElement;
};

export default QrCodeGenerator;
