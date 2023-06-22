import { eventCache } from "./proxy.js";

const eventContainer = document.getElementById('event');

async function renderEvents(category) {
  try {
    const events = await eventCache[category];
    displayEvents(events);
  } catch (error) {
    console.error(error);
  }
}

function handleCategoryChange(category) {
  return function (event) {
    event.preventDefault();
    renderEvents(category);
  }
}

function displayEvents(events) {
  eventContainer.innerHTML = '';

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
  `;

  return eventElement;
}

function formatDate(date) {
  const options = { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  const formattedDate = new Date(date).toLocaleString('en-US', options);
  return formattedDate;
}

function formatLocation(location) {
  return `${location.address} • ${location.city}, ${location.state}`;
}

function formatPrice(price) {
  if (price === 0) {
    return 'Free';
  } else {
    return '$' + price.toFixed(2);
  }
}

export{handleCategoryChange, renderEvents}