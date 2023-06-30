async function fetchData(category) {
  const url = `https://knassbani2.execute-api.us-east-2.amazonaws.com/events/${category}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function getEventById(eventId) {
  try {
    // Realizar una solicitud al API para obtener los detalles del evento por su ID
    const response = await fetch(`https://api.example.com/events/${eventId}`);
    const event = await response.json();
    
    return event;
  } catch (error) {
    throw new Error('Error al obtener los detalles del evento');
  }
}

export {fetchData, getEventById}