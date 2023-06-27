const state = {
  constructor(){
    this.favorites = [];
    this.interested = [];
    this.going = [];
  },

  addfavo(event){
    if (!this.favorites.includes(event)) {
      this.favorites.push(event);
    }
  },

  interested(event){

  },

  going(event){

  }

};