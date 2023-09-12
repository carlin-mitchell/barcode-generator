// COMPONENT IMPORTS
import Element from "../Element";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const NavLink = (props) => {
  const { innerText } = props;
  const { href } = props;
  const a = (innerText, href, className) =>
    Element("a", { innerText, href, className: `` });

  const navLink = Element(
    "div",
    {
      id: ``,
      className: `bg-primary-light-1 p-1 text-uppercase bg-hover-primary-dark-2 cursor-pointer mr-1`,
    },
    // children
    [a(innerText, href)]
  );
  return navLink;
};

export default NavLink;
