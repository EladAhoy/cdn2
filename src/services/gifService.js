export class GifService {
  static #gifs = null;
  static async getGifs() {
    if (!!this.#gifs) return this.#gifs;
    let url = 'https://api.giphy.com/v1/gifs/trending?api_key=ESOf7h07O6Qak5YK9Fc7oxGNXiXTvtq2&limit=25&rating=g';
    try {
      let res = await fetch(url);
      this.#gifs = await res.json();
      return this.#gifs;
    } catch (error) {
      console.log(error);
    }
  }
}