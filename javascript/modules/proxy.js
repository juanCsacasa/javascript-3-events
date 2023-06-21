import { fetchData } from "../api/api.js";

const eventCache = new Proxy({}, {
  get(target, category) {
    if (!target[category]) {
      target[category] = fetchData(category)
        .then(events => {
          target[category] = events;
          return events;
        })
        .catch(error => {
          console.error(error);
          throw new Error('Error al obtener los eventos');
        });
    }
    return target[category];
  }
});

export {eventCache}