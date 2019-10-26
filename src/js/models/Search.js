import axios from 'axios';


export default class Search {
  constructor(query) {
    this.query = query;
  }
  async getResults() {
  // const proxy = 'http://cors-anywhere.herokuapp.com/';
  // const key = 'b473781907df4c4c3cf77f3e881d6429';
  try {
    const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
    this.result = res.data.recipes;
    //console.log(this.result);
  } catch (error) {
    alert(error);
  }
}
}

