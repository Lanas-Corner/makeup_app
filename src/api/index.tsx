import axios from "axios";

const baseURL = "https://makeup-api.herokuapp.com/api/v1/products.json";

export async function fetchCards(query?: string) {
  let URL = baseURL;
  if (query) {
    URL += query;
  }
  return axios
    .get(URL)
    .then((res) => res)
    .catch((err) => {
      throw new Error(err);
    });
}
