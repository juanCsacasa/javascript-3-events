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
  let interested = localState.getState('interested');
  
  if (!going.some(element => element.id === selectedEventGoing.id)) {
    if (interested.some(element => element.id === selectedEventGoing.id)) {
      interested = interested.filter(element => element.id !==  selectedEventGoing.id);
      localState.setState('interested', interested);
    }
    going.push(selectedEventGoing);
    localState.setState( 'going', going);
  }

};

const handleInterestedButtonClick = event => {
  const eventId = event.target.id;
  const interested = localState.getState('interested');
  const selectedEventInterested = findEventById(eventId); 
  const going = localState.getState('going');

  if ((!interested.some(element => element.id === selectedEventInterested.id)) && (!going.some(element => element.id === selectedEventInterested.id))) {
    interested.push(selectedEventInterested);
    localState.setState( 'interested', interested);
  }else{
    if (interested.some(element => element.id === selectedEventInterested.id)) {
      console.log('Este evento ya existe en la lista de interesados');
    }
    if (going.some(element => element.id === selectedEventInterested.id)) {
      console.log('Este evento ya existe en la lista de eventos a los que planeas asistir');
    }
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
const calendarContainer = document.getElementById("calendar");
if (calendarContainer) {
  calendarContainer.style.display = "none";
  eventContainer.style.display = "grid";
}
  eventContainer.innerHTML = " ";
  const eventElements = events.map((event) => createEventElement(event));
  eventElements.forEach((eventElement) => {
    eventContainer.appendChild(eventElement);
  });
}

function renderEvents(category) {
    const events = localState.getState(category);
    displayEvents(events);
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
