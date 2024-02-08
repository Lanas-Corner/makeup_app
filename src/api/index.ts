import axios from "axios";

const baseURL = "https://makeup-api.herokuapp.com/api/v1/products.json";

export async function fetchCards(brand: string) {
  if (brand !== "") {
    return axios
      .get(baseURL + `?brand=${brand}`)
      .then((res) => res)
      .catch((err) => {
        throw new Error(err);
      });
  }
  return;
}
