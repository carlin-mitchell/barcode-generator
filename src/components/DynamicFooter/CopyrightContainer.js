// COMPONENT IMPORTS
import { A, Div } from "../_elements/Elements";
import Icon from "../_custom-components/Icon";

// LOGIC IMPORTS
import { githubInfo } from "../../page-logic/data/data-page-config";

// COMPONENT METHODS
// function someMethod() {
//   //
// }

// TEMPLATE VARIABLES
const dynamicYear = new Date().getFullYear();

const CopyrightContainer = () => {
  const parentElement = Div(
    { className: `copyright-container` },
    // add child elements to the array below
    [
      Div({
        className: "copyright-info display-i-b",
        innerText: `© Carlin Mitchell ${dynamicYear}`,
      }),
      A({ href: `https://github.com/carlin-mitchell/${githubInfo.repoName}` }, [
        Icon("icon-github-cat"),
      ]),
    ]
  );
  return parentElement;
};

export default CopyrightContainer;
