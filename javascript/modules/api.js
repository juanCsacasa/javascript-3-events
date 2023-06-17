function fetchEvents(categoria) {
  const apiUrl = `https://knassbani2.execute-api.us-east-2.amazonaws.com/events/${categoria}`;
  return fetch(apiUrl)
    .then(response => response.json())
    .then(data => data.events)
    .catch(error => {
      throw new Error('No se obtiene informacion');
    });
}
