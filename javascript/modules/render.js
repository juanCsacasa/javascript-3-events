import { eventCache } from "../patterns/cache.js";
import { formatDate, formatLocation, formatPrice } from "../utils/format.js";
import { handleFavoriteButtonClick, handleGoingButtonClick, handleInterestedButtonClick} from "./eventfavorites.js";


const eventContainer = document.getElementById("event");

function displayEvents(events) {
  eventContainer.innerHTML = "";
  const eventElements = events.map((event) => createEventElement(event));
  eventElements.forEach((eventElement) => {
    eventContainer.appendChild(eventElement);
  });
}

async function renderEvents(category) {
  try {
    const events = await eventCache[category];
    displayEvents(events);
  } catch (error) {
    console.error(error);
  }
}

const handleCategoryChange = (category) => (event) => {
  event.preventDefault();
  renderEvents(category);
};

function createEventElement(event) {
  const eventElement = document.createElement('div');
  eventElement.classList.add('event');

  eventElement.innerHTML = `
    <img class="event-image" src="${event.image}">
    <h2 class="event-title">${event.title}</h2>
    <p class="event-date">${formatDate(event.date)}</p>
    <p class="event-location">${formatLocation(event.location)}</p>
    <p class="event-price">${formatPrice(event.price)}</p>
    <button class="interested-event" id="${event.id}">interested</button>
    <button class="going-event" id="${event.id}">going</button>
    <button class="love-event" id="${event.id}">love</button>
  `;

  const loveButton = eventElement.querySelector('.love-event');
  loveButton.addEventListener('click', handleFavoriteButtonClick);

  const interestedButton = eventElement.querySelector('.interested-event');
  interestedButton.addEventListener('click', handleInterestedButtonClick);

  const goingButton = eventElement.querySelector('.going-event');
  goingButton.addEventListener('click', handleGoingButtonClick);

  return eventElement;
}

export { handleCategoryChange, renderEvents, createEventElement};
