import { state } from "../patterns/state.js";
import { createEventElement } from "./render.js";

const localState = new state();

function handleFavoriteButtonClick ( event){
  const eventId = event.target.id;
  const favorites = localState.getState('favorites');
  const selectedEventFavorite = findEventById(eventId);
  if (!favorites.some(element => element.id === selectedEventFavorite.id)) {
    favorites.push(selectedEventFavorite);
    localState.setState( 'favorites', favorites );
  }
};

const handleGoingButtonClick = event => {
  const eventId = event.target.id;
  const going = localState.getState('going');
  const selectedEventGoing = findEventById(eventId); 
  if (!going.some(element => element.id === selectedEventGoing.id)) {
    going.push(selectedEventGoing);
    localState.setState( 'going', going);
  }
};

const handleInterestedButtonClick = event => {
  const eventId = event.target.id;
  const interested = localState.getState('interested');
  const selectedEventInterested = findEventById(eventId); 
  if (!interested.some(element => element.id === selectedEventInterested.id)) {
    interested.push(selectedEventInterested);
    localState.setState( 'interested', interested);
  }
};

function findEventById(eventId) {
  const keys = ["music", "sports", "business", "food", "art"];
  for (const key of keys) {
    const storedEvents = localStorage.getItem(key);
    const events = storedEvents ? JSON.parse(storedEvents) : [];
    const event = events.find(event => event.id === eventId);
    if (event) {
      return event;
    }
  }
  return null; // Si no se encuentra el evento, devolvemos null
}


function displayEvents(events) {
const eventContainer = document.getElementById("event");
  eventContainer.innerHTML = " ";
  const eventElements = events.map((event) => createEventElement(event));
  eventElements.forEach((eventElement) => {
    eventContainer.appendChild(eventElement);
  });
}

function renderEvents(category) {
    const events = localState.getState(category);
    displayEvents(events);
    console.log("hola");
}

const handleCategoryChange = (category) => (event) => {
  event.preventDefault();
  renderEvents(category);
};


export {
  handleFavoriteButtonClick,
  handleGoingButtonClick,
  handleInterestedButtonClick,
  renderEvents,
  handleCategoryChange
};
