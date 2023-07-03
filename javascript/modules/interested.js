import { singleton } from "../patrons/singleton.js";
import { createEventElementAccount, createEventElement } from "./render.js";


// Obtener el evento por su ID
function getEventById(eventId) {
  const categories = Object.keys(eventCache);
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    const events = eventCache[category];
    const foundEvent = events.find(event => event.id === eventId);
    if (foundEvent) {
      return foundEvent;
    }
  }
  return null;
}

  function handleButtonInterested(event) {
    const eventId = event.target.getAttribute("data-event-id");
    localStorage.setItem("eventId", eventId);
    console.log(eventId);

    const savedEventId = localStorage.getItem("eventId");
    let eventIds = [];
    if (savedEventId) {
      eventIds.push(savedEventId);
    }
    singleton.updateState({ interestedEvents: eventIds });
    console.log("Array de IDs:", eventIds);
    console.log("ID recuperado del localStorage:", savedEventId);
  }



export { handleButtonInterested };