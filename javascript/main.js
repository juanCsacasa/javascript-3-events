import { renderEvents , handleCategoryChange } from "./modules/render.js";

document.getElementById('music').addEventListener('click', handleCategoryChange('music'));
document.getElementById('sports').addEventListener('click', handleCategoryChange('sports'));
document.getElementById('business').addEventListener('click', handleCategoryChange('business'));
document.getElementById('food').addEventListener('click', handleCategoryChange('food'));
document.getElementById('art').addEventListener('click', handleCategoryChange('art'));

renderEvents('music');
