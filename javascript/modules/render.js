export function createEventElement(event) {
    const eventElement = document.createElement('div');
    eventElement.classList.add('event');
  
    const imageElement = document.createElement('img');
    imageElement.src = event.image;
    eventElement.appendChild(imageElement);
  
    const titleElement = document.createElement('div');
    titleElement.classList.add('event-title');
    titleElement.textContent = event.title;
    eventElement.appendChild(titleElement);
  
    const dateElement = document.createElement('div');
    dateElement.classList.add('event-info');
    const date = new Date(event.date);
    const formattedDate = `${date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}, ${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`;
    dateElement.textContent = formattedDate;
    eventElement.appendChild(dateElement);
  
    const locationElement = document.createElement('div');
    locationElement.classList.add('event-info');
    locationElement.textContent = `${event.location.place} • ${event.location.city}, ${event.location.state}`;
    eventElement.appendChild(locationElement);
  
    const priceElement = document.createElement('div');
    priceElement.classList.add('event-price');
    priceElement.textContent = event.price === 0 ? 'Free' : `$${event.price.toFixed(2)}`;
    eventElement.appendChild(priceElement);
  
    return eventElement;
  }
  