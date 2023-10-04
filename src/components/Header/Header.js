// COMPONENT IMPORTS
import { Element, Div } from "../_elements/Elements";
import Nav from "../Nav/Nav";
// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const Header = () => {
  const h1 = Element("h1", { innerText: "(Bar/Qr)code Generator" });

  const otherClasses = "bg-gray-dark-3 text-white p-2";
  const header = Element(
    "header",
    {
      id: "header",
      className: "header" + " " + otherClasses,
    },
    [h1, Div({ className: `nav-container` }, [Nav()])]
  );
  return header;
};

export default Header;
