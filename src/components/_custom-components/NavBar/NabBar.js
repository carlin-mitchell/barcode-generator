// COMPONENT IMPORTS
import Element from "../Element";
import NavLinks from "./NavLinks";
import MenuContainer from "./MenuButton";
import MobileMenu from "./MobileMenu";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const NavBar = () => {
  const siteHeader = Element("h2", {
    className: "text-lg",
    innerText: "Navbar.com",
  });

  const tagline = Element("p", {
    className: ``,
    innerText: "I made this myself",
  });

  const Container = (classString, children) =>
    Element(
      "div",
      { className: `${classString} container` },
      // container children
      [...children]
    );

  const nav = Element(
    "nav",
    {
      className: `container bg-primary flex-column navbar`,
    },
    // nav children
    [
      Container("p-1 flex-wrap", [siteHeader, tagline]),
      Container("nav-links", [NavLinks()]),
      Container("", [MenuContainer()]),
    ]
  );

  const navWrapper = Element(
    "div",
    { className: `nav-wrapper text-white` },
    // children
    [nav, MobileMenu()]
  );

  return navWrapper;
};

export default NavBar;
