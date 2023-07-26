import { ApiService } from "./apiService";

export class DataService {
  static #apiUrl = "http://localhost:3001/api/unknown-merchants";
  static endpoint = "unknown-merchants";

  static async getUnknownMerchantsData() {
    let unknownMerchants = [];
    try {
      let res = await ApiService.get({ endpoint: this.endpoint });
      ({ unknownMerchants } = res);
      return unknownMerchants;
    } catch (error) {
      console.log(error);
    }
  }
}
