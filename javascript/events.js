import { buttonsMyCount } from "./config/buttons.js";
import { showCalendar } from "./modules/calendar.js";
import { renderFavoritesTab, renderGoingTab, renderInterestedTab } from "./modules/favorites.js";
// import { handleCategoryChange } from "./modules/render.js";

buttonsMyCount();

document.getElementById("calender-tab").addEventListener("click", showCalendar);

// localStorage.setItem("favorites-tab", '');
// localStorage.setItem("interested-tab", '');
// localStorage.setItem("going-tab", '');
// document.querySelectorAll('.nav-buttons').forEach(button => {
//     button.addEventListener('click', handleCategoryChange(button.dataset.id));
// });


document.getElementById('favorites-tab').addEventListener('click', renderFavoritesTab);
document.getElementById('interested-tab').addEventListener('click', renderInterestedTab);
document.getElementById('going-tab').addEventListener('click', renderGoingTab);