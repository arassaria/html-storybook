import "./menubtns.css";
import { createElement } from "../../utils/elements.js";

export function createButtonElement(button) {
  const buttonElement = createElement("button", {
    className: "menubtn",
    children: [
      createElement("img", {
        src: button.imgSrc,
        alt: button.title,
      }),
      createElement("div", {
        innerText: button.name ? button.name : "",
      }),
    ],
  });
  return buttonElement;
}
