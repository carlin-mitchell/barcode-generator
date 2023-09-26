// COMPONENT IMPORTS
import { Div, Input } from "../_elements/Elements";
import { v4 as uuidv4 } from "uuid"

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

export const componentId = uuidv4();
export const qrTextInputId = `qr-text-input-${componentId}`

const QrGenerateTextInput = () => {
    //
    const parentElement = Div(
        { innerText: ``, className: `` },
        // add child elements to the array below
        [Input({ type: "text", id: qrTextInputId })]
    );
    return parentElement;
};

export default QrGenerateTextInput;
