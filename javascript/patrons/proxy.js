import { fetchData } from "../api/api.js";

const eventCache = new Proxy({}, {
  get(target, category) {
    if (!Reflect.has(target, category)) {
      const cachedEvents = localStorage.getItem(category);
      if (cachedEvents) {
        const events = JSON.parse(cachedEvents);
        Reflect.set(target, category, events);
        return events;
      } else {
        return fetchData(category)
          .then(events => {
            Reflect.set(target, category, events);
            localStorage.setItem(category, JSON.stringify(events));
            return events;
          })
          .catch(error => {
            console.error(error);
            throw new Error('Error al obtener los eventos');
          });
      }
    }
    return Reflect.get(target, category);
  }
});

export { eventCache };

