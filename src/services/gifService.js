export class GifService {
  static #gifs = null;
  static #url = 'https://api.giphy.com/v1/gifs/trending?api_key=ESOf7h07O6Qak5YK9Fc7oxGNXiXTvtq2&limit=25&rating=g';
  static #apiUrl = '/api';
  static #gifsUrl = '/api/data';
  static #requestSent = false;
  static async getGifs() {
    if (!!this.#gifs) return this.#gifs;
    try {
      if (!this.#requestSent) {
        this.#requestSent = true;
        let res = await fetch(this.#url);
        this.#gifs = await res.json();
        return this.#gifs;
      }
    } catch (error) {
      console.log(error);
    }
  }
  static async getHello() {
    try {
      let res = await fetch(this.#apiUrl);
      const resAsJson = await res.json();
      return resAsJson?.message;

    } catch (error) {
      console.log(error);
    }
  }
  static async getGifsData() {
    try {
      let res = await fetch(this.#gifsUrl);
      const resAsJson = await res.json();
      return resAsJson;

    } catch (error) {
      console.log(error);
    }
  }
}