// COMPONENT IMPORTS
import Element from "../Element";
import Icon from "../base-elements/Icon";
// LOGIC IMPORTS

import ui from "../../managers/uiManager/uiManager";

// COMPONENT METHODS
function someMethod() {
  ui.toggleMobileMenu();
}

const MenuContainer = () => {
  const menuIcon = Icon("icon-hamburger-menu text-white font-lg");
  const menuButton = Element(
    "button",
    {
      className: `menu-button m-1 btn bg-transparent border-none`,
      onclick: someMethod,
    },
    //   children
    [menuIcon]
  );

  const container = Element(
    "div",
    {
      className: `container`,
    },
    // children
    [menuButton]
  );
  return container;
};

export default MenuContainer;
