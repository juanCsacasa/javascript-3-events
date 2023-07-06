function buttonsEvents() {
  const containerButtons = document.getElementById("buttons");
  containerButtons.innerHTML = `
  <button class="nav-buttons" data-category="music" >Music</button>
  <button class="nav-buttons" data-category="sports" >Sports</button>
  <button class="nav-buttons" data-category="business">Business</button>
  <button class="nav-buttons" data-category="food" >Food</button>
  <button class="nav-buttons" data-category="art" >Art</button>>`;
}

function buttonsMyCount() {
  const containerButtons = document.getElementById("buttons");
  containerButtons.innerHTML = `
  <button class="nav-buttons" id="favorites-tab"  data-category="favorites">Favorites</button>
  <button class="nav-buttons" id="interested-tab" data-category="interested" >Interested</button>
  <button class="nav-buttons" id="going-tab"      data-category="going">Going</button>
  <button class="nav-buttons" id="calender-tab" data-category="Calendar">Calendar</button>`;
}

export { buttonsEvents, buttonsMyCount};
