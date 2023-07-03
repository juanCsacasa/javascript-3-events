import { eventCache } from "../patrons/proxy.js";
import { formatDate, formatLocation, formatPrice } from "../utils/format.js";
{}

const eventContainer = document.getElementById("event");

async function renderEvents(category) {
  try {
    const events = await eventCache[category];
    displayEvents(events);
  } catch (error) {
    console.error(error);
  }
}

function handleCategoryChange(category) {
  return function(event) {
    event.preventDefault();
    renderEvents(category);
  };
}

function displayEvents(events) {
  eventContainer.innerHTML = "";

  for (const event of events) {
    const eventElement = createEventElement(event);
    eventContainer.appendChild(eventElement);
  }
}

function createEventElement(event) {
  const eventElement = document.createElement('div');
  eventElement.classList.add('event');

  eventElement.innerHTML = `
    <img class="event-image" src="${event.image}">
    <h2 class="event-title">${event.title}</h2>
    <p class="event-date">${formatDate(event.date)}</p>
    <p class="event-location">${formatLocation(event.location)}</p>
    <p class="event-price">${formatPrice(event.price)}</p>
    <button class="interested-event" data-event-id="${event.id}">interested</button>
    <button class="going-event" data-event-id="${event.id}">going</button>
    <button class="love-event" data-event-id="${event.id}">love</button>
  `;

  // const interestedButton = eventElement.querySelector('.interested-event');
  // interestedButton.addEventListener('click', handleButtonClick);

  // const goingButton = eventElement.querySelector('.going-event');
  // goingButton.addEventListener('click', handleButtonClick);

  // const loveButton = eventElement.querySelector('.love-event');
  // loveButton.addEventListener('click', handleButtonClick);

  return eventElement;
}

function createEventElementAccount(event) {
  const eventElement = document.createElement("div");
  eventElement.classList.add("event");

  eventElement.innerHTML = `
    <img class="event-image" src="${event.image}">
    <h2 class="event-title">${event.title}</h2>
    <p class="event-date">${formatDate(event.date)}</p>
    <p class="event-location">${formatLocation(event.location)}</p>
    <p class="event-price">${formatPrice(event.price)}</p>
  `;

  return eventElement;
};

export { handleCategoryChange, renderEvents, createEventElement, createEventElementAccount};
