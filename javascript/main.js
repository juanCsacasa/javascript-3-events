import { buttonsEvents } from "./config/buttons.js";
import { handleButtonClick } from "./modules/ids.js";
import { handleCategoryChange, renderEvents } from "./modules/render.js";


buttonsEvents();

document.querySelectorAll('.nav-buttons').forEach(button => {
  button.addEventListener('click', handleCategoryChange(button.dataset.category));
});

document.querySelectorAll(".nav-buttons").forEach(button => {
  button.addEventListener("click", handleButtonClick);
});

renderEvents('music');

