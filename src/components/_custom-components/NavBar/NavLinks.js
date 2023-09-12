// COMPONENT IMPORTS
import Element from "../Element";
import NavLink from "./NavLink";
import ExpandableNavLink from "./ExpandableNavLink";

// LOGIC IMPORTS
import { navLinkElementInfo } from "../../managers/dataManagers/navLinkData";

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const NavLinks = (isMobileMenu) => {
  isMobileMenu = isMobileMenu ? true : false;
  const navLinks = Element(
    "ul",
    {
      className: `container nav-links`,
    },
    // children
    navLinkElementInfo.map((obj) =>
      obj.subLinkObjects && !isMobileMenu
        ? ExpandableNavLink(obj)
        : NavLink(obj)
    )
  );
  return navLinks;
};

export default NavLinks;
