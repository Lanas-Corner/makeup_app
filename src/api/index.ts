import axios from "axios";

// const baseURL = "https://makeup-api.herokuapp.com/api/v1/products.json";
const baseURL = "http://localhost:4000";

export async function fetchCards(brand: string, product: string) {
  let URL = baseURL;
  if (brand !== "") {
    URL += `?brand=${brand}&`;
  }
  if (product !== "") {
    URL += `?product_type=${product}&`;
  }
  return axios
    .get(URL)
    .then((res) => res)
    .catch((err) => {
      throw new Error(err);
    });
}
