import { buttonsEvents } from "./config/buttons.js";
import { renderEvents , handleCategoryChange } from "./modules/render.js";

buttonsEvents();

const categoryButtons = document.querySelectorAll('.nav-buttons');
categoryButtons.forEach(button => {
  button.addEventListener('click', handleCategoryChange(button.dataset.category));
});


renderEvents('music');
