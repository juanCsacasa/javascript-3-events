import { fetchData } from "../api/api.js";

const eventCache = new Proxy({}, {
  get(target, category) {
    if (!Reflect.has(target, category)) {
      return fetchData(category)
        .then(events => {
          Reflect.set(target, category, events);
          return events;
        })
        .catch(error => {
          console.error(error);
          throw new Error('Error al obtener los eventos');
        });
    }
    return Reflect.get(target, category);
  }
});

export {eventCache}