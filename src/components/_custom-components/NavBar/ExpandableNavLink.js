// COMPONENT IMPORTS
import Element from "../Element";
import NavLink from "./NavLink";
import Icon from "../base-elements/Icon";
// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const ExpandableNavLink = (props) => {
  const subLinkObjects = props.subLinkObjects ? props.subLinkObjects : [];

  const icon = Icon("icon-github-cat ml-half");

  const a = (innerText, href, className) =>
    Element(
      "a",
      {
        innerText,
        href,
        className: `${className ? className : ""}`,
      },
      innerText.toLowerCase() === "github repo" ? [icon] : []
    );

  const topLink = Element(
    "a",
    {
      innerText: props.innerText,
      className:
        "top-link pt-1 pr-2 pb-1 pl-1 bg-transparent text-white border-none text-uppercase cursor-pointer ",
    },
    []
  );

  const linkClasses = "bg-primary-light-1 bg-hover-primary-dark-2";
  const dropDownContent = Element(
    "div",
    { className: "dropdown-content" },
    //children
    [...subLinkObjects.map((obj) => a(obj.innerText, obj.href, linkClasses))]
  );

  const expandableNavLink = Element(
    "div",
    {
      className:
        "dropdown" +
        " " +
        "bg-primary-light-1 text-uppercase bg-hover-primary-dark-2 cursor-pointer mr-1",
    },
    //children
    [topLink, dropDownContent]
  );

  return expandableNavLink;
};

export default ExpandableNavLink;
