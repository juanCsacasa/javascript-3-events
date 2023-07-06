import { buttonsMyCount } from "./config/buttons.js";
import { showCalendar } from "./modules/calendar.js";
import { handleCategoryChange } from "./modules/render.js";

buttonsMyCount();

document.getElementById('calender-tab').addEventListener("click", showCalendar);

// localStorage.setItem("favorites-tab", '');
// localStorage.setItem("interested-tab", '');
// localStorage.setItem("going-tab", '');


// document.querySelectorAll('.nav-buttons').forEach(button => {
//     button.addEventListener('click', handleCategoryChange(button.dataset.id));
// });
