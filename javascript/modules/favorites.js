import { getData,updateData } from '../patrons/singleton.js';
import { renderEventCard } from './render.js';

const handleFavoriteButtonClick = (eventId) => {
  const { favorites } = getData();
  const updatedFavorites = [...favorites];

  if (updatedFavorites.includes(eventId)) {
    const index = updatedFavorites.indexOf(eventId);
    updatedFavorites.splice(index, 1);
  } else {
    updatedFavorites.push(eventId);
    console.log('Favorite event ID:', eventId);
  }

  updateData({ favorites: updatedFavorites });
};

const handleInterestedButtonClick = (eventId) => {
  const { interested, going } = getData();
  const updatedInterested = [...interested];
  const updatedGoing = [...going];

  if (updatedInterested.includes(eventId)) {
    const index = updatedInterested.indexOf(eventId);
    updatedInterested.splice(index, 1);
  } else {
    const goingIndex = updatedGoing.indexOf(eventId);
    if (goingIndex !== -1) {
      updatedGoing.splice(goingIndex, 1);
    }
    updatedInterested.push(eventId);
  }

  updateData({ interested: updatedInterested, going: updatedGoing });
};

const handleGoingButtonClick = (eventId) => {
  const { interested, going } = getData();
  const updatedInterested = [...interested];
  const updatedGoing = [...going];

  if (updatedGoing.includes(eventId)) {
    const index = updatedGoing.indexOf(eventId);
    updatedGoing.splice(index, 1);
  } else {
    const interestedIndex = updatedInterested.indexOf(eventId);
    if (interestedIndex !== -1) {
      updatedInterested.splice(interestedIndex, 1);
    }
    updatedGoing.push(eventId);
    console.log(eventId);
  }

  updateData({ interested: updatedInterested, going: updatedGoing });
};


function renderFavoritesTab() {
  const { favorites } = getData();
  const favoritesTabContent = document.getElementById('event');

  favoritesTabContent.innerHTML = '';

  if (favorites.length === 0) {
    favoritesTabContent.textContent = 'There are no events in your favorites';
  } else {
    favorites.forEach((eventId) => {
      const event = findEventById(eventId);
      renderEventCard(event, favoritesTabContent);
    });
  }
}

function renderInterestedTab() {
  const { interested } = getData();
  const interestedTabContent = document.getElementById('event');

  interestedTabContent.innerHTML = '';

  if (interested.length === 0) {
    interestedTabContent.textContent = 'There are no events in your interested list';
  } else {
    interested.forEach((eventId) => {
      const event = findEventById(eventId);
      renderEventCard(event, interestedTabContent);
    });
  }
}

function renderGoingTab() {
  const { going } = getData();
  const goingTabContent = document.getElementById('event');

  goingTabContent.innerHTML = '';

  if (going.length === 0) {
    goingTabContent.textContent = 'There are no events in your going list';
  } else {
    going.forEach((eventId) => {
      const event = findEventById(eventId);
      renderEventCard(event, goingTabContent);
    });
  }
}
export { handleFavoriteButtonClick, handleInterestedButtonClick, handleGoingButtonClick, renderFavoritesTab, renderInterestedTab, renderGoingTab};