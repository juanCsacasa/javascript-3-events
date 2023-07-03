import { buttonsEvents } from "./config/buttons.js";
import { handleButtonClick } from "./modules/ids.js";
import { renderEvents } from "./modules/render.js";

buttonsEvents();

document.querySelectorAll(".nav-buttons").forEach(button => {
    button.addEventListener("click", handleButtonClick);
  });

renderEvents('music');

