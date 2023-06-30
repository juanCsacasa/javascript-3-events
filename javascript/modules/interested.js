import state from "../patrons/singleton.js";

function handleInterestedClick(event) {
  const eventId = event.target.dataset.eventId;
  const isInterested = state.interested.includes(eventId);

  if (isInterested) {
    state.interested = state.interested.filter(id => id !== eventId);
    event.target.textContent = "interested";
  } else {
    state.interested.push(eventId);
    event.target.textContent = "Remove Interested";
  }
}

export {handleInterestedClick}
