import {fetchEvents} from './api.js'; 

const proxy = new Proxy({},{
  get(target, category) {
    if (!target[category]) {
      target[category] = fetchEvents(category);
    }
    return target[category];
  }
});