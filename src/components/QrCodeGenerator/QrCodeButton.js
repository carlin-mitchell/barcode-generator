// COMPONENT IMPORTS
import { Div, Button } from "../_elements/Elements";
// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const QrGenerateButton = () => {
    //

    const parentElement = Div(
        { innerText: ``, className: `` },
        // add child elements to the array below
        [Button({ id: "qr-generate-button", innerText: "Generate" })]
    );
    return parentElement;
};

export default QrGenerateButton;
