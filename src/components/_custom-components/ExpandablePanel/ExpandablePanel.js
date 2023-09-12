// COMPONENT IMPORTS
import { A } from "../../_elements/Elements";

import ExpandablePanelTitle from "./ExpandablePanelTitle";
import ExpandablePanelContent from "./ExpandablePanelContent";

import { v4 as uuidv4 } from "uuid";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const ExpandablePanel = (props) => {
  const componentId = uuidv4();
  const { title, children } = props;

  const panel = A(
    { className: `expandable-panel` },
    // add child elements to the array below
    [
      ExpandablePanelTitle({ title, componentId }),
      ExpandablePanelContent({ children, componentId }),
    ]
  );
  return panel;
};

export default ExpandablePanel;
