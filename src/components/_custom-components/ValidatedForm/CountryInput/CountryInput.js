// COMPONENT IMPORTS
import {
  Div,
  Label,
  Span,
  Datalist,
  Option,
  Select,
} from "../../../_elements/Elements";
import { v4 as uuidv4 } from "uuid";
import { countries } from "./countriesList";
import { handleCountryInput } from "./country-input-validation";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }
const componentUuid = uuidv4();
export const countryInputId = `email-input-${componentUuid}`;

const CountryInput = () => {
  const otherClasses = "";
  const parentElement = Div(
    { className: "form-control" + " " + otherClasses },
    // add child elements to the array below
    [
      Label({
        for: `${countryInputId}`,
        innerHTML: `What country are you from? ${
          Span({
            className: "required-marker",
            innerText: "*",
          }).outerHTML
        }`,
      }),

      Select(
        {
          className: "country-input",
          required: true,
          oninput() {
            handleCountryInput();
          },
        },
        [
          Option(),
          ...countries.map((country) => Option({ innerText: country })),
        ]
      ),

      Div({ className: "error" }),
      Datalist({ id: "countries" }, [
        ...countries.map((country) => Option({ innerText: country })),
      ]),
    ]
  );
  return parentElement;
};

export default CountryInput;
