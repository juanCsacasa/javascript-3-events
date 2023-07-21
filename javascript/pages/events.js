import { buttonsMyCount } from "../config/buttons.js";
import { showCalendar } from "../modules/calendar.js";
import { renderEvents, handleCategoryChange} from "../modules/eventfavorites.js";

buttonsMyCount();

document.getElementById("calender-tab").addEventListener("click", showCalendar);
document.getElementById('favorites-tab').addEventListener('click', handleCategoryChange('favorites'));
document.getElementById('going-tab').addEventListener('click', handleCategoryChange('going'));
document.getElementById('interested-tab').addEventListener('click', handleCategoryChange('interested'));


renderEvents('favorites')