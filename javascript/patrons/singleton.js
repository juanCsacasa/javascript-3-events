let state = {
  favorites: [],
  interested: [],
  going: [],
};

function getState() {
  const storedState = localStorage.getItem("state");
  if (storedState) {
    return JSON.parse(storedState);
  }
  return { ...state };
}

function updateState(newState) {
  state = { ...state, ...newState };
  localStorage.setItem("state", JSON.stringify(state));
}

const singleton = {
  getState,
  updateState,
};

export { singleton };
