class State {
  constructor() {
    if (State.instance) {
      return State.instance;
    }
    this.favorites = [];
    this.interested = [];
    this.going = [];
    State.instance = this;
  }

  favorite(event) {
    if (!this.favorites.includes(event)) {
      this.favorites.push(event);
    }
  }

  interested(event) {
    if (!this.interested.includes(event)) {
      this.interested.push(event);
    }
  }

  going(event) {
    if (!this.going.includes(event)) {
      this.going.push(event);
    }
  }
}

const state = new State();
export default state;
