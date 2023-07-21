class state {
constructor () {
    if (!state.instance) {
      state.instance = this
    }
    return state.instance
  }

  getState = (key) => {
    const storedState = localStorage.getItem(key);
    return storedState ? JSON.parse(storedState) : null;
  };
  
  setState = (key, value) => {
    localStorage.setItem(key , JSON.stringify(value));
  };
}

export  { state };
