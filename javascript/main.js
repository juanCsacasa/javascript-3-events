import { buttonsEvents } from "./config/buttons.js";
import { renderEvents , handleCategoryChange } from "./modules/render.js";
import { handleInterestedClick } from "./modules/interested.js";

buttonsEvents();

const categoryButtons = document.querySelectorAll('.nav-buttons');
categoryButtons.forEach(button => {
  button.addEventListener('click', handleCategoryChange(button.dataset.category));
});


const interestedButton = document.querySelector('.interested-event');
interestedButton.addEventListener('click', handleInterestedClick);

renderEvents('music');
