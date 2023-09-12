// COMPONENT IMPORTS
import { Element } from "../../_elements/Elements";
import { Div } from "../../_elements/Elements";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const ExpandablePanelContent = (props) => {
  let { children, componentId } = props;
  children = children ? children : [];

  const parentElement = Div(
    {
      id: `expandable-content-${componentId}`,
      className: `expandable-panel-content`,
    },
    // add child elements to the array below
    [Div({ className: "content" }, [...children])]
  );
  return parentElement;
};

export default ExpandablePanelContent;
