// COMPONENT IMPORTS
import { Element, Button, Div } from "../../_elements/Elements";
import Icon from "../Icon";

// LOGIC IMPORTS
//

// COMPONENT METHODS
function toggleExpansion(componentId) {
  const expansionContent = document.getElementById(
    `expandable-content-${componentId}`
  );
  const toggleExpansionButton = document.getElementById(
    `expandable-content-button-${componentId}`
  );
  expansionContent.classList.toggle("expanded");
  toggleExpansionButton.classList.toggle("expanded");
}

const ExpandablePanelTitle = (props) => {
  const { title, componentId } = props;

  const parentElement = Element(
    "div",
    { className: `expandable-panel-title` },
    [
      Div({
        className: "display-i-b",
        innerText: title,
        onclick() {
          toggleExpansion(componentId);
        },
      }),
      Button(
        {
          id: `expandable-content-button-${componentId}`,
          onclick() {
            toggleExpansion(componentId);
          },
        },
        [Icon("icon-up-down")]
      ),
    ]
  );

  return parentElement;
};

export default ExpandablePanelTitle;
