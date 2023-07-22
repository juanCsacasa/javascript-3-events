import { buttonsEvents } from "../config/buttons.js";
import { handleCategoryChange, renderEvents } from "../modules/render.js";
import { state } from "../patterns/state.js";


buttonsEvents();

const localState = new state();

if (localState.getState('favorites') === null) {
  localState.setState('favorites', [])
  localState.setState('interested', [])
  localState.setState('going', [])
}

document.querySelectorAll('.nav-buttons').forEach(button => {
  button.addEventListener('click', handleCategoryChange(button.dataset.category));
});

renderEvents('music');

