import axios from "axios";
import { makeAutoObservable } from "mobx";
import { nanoid } from "nanoid";

const baseURL = "http://makeup-api.herokuapp.com/api/v1/products.json";

export interface Card {
  id: string;
  brand: string;
  name: string;
  image_link: string;
  isLiked: boolean;
}

class Store {
  cards: Card[] = [];
  likedCards: Card[] = [];
  brand = "";
  product = "";

  constructor() {
    makeAutoObservable(this);
  }

  async getCards(product: string, brand: string) {
    this.cards = [];
    this.brand = brand;
    this.product = product;
    let res: any;
    console.log("fetching");
    try {
      if (this.brand !== "" && this.product !== "") {
        res = await axios.get(
          baseURL + `?brand=${brand}&product_type=${product}`
        );
      } else if (this.brand !== "" && this.product === "") {
        res = await axios.get(baseURL + `?brand=${brand}`);
      } else if (this.product !== "" && this.brand === "") {
        res = await axios.get(baseURL + `?product_type=${product}`);
      }
      console.log(res);
      if (res.data.length > 0) {
        let arr: Card[] = [];
        res.data.map((card: Card) => {
          arr.push({
            id: nanoid(),
            brand: card.brand,
            name: card.name,
            image_link: card.image_link,
            isLiked: false,
          });
          this.cards = arr;
          return this.cards;
        });
      } else {
        return this.cards;
      }
    } catch (err) {
      return "Ошибка";
    }
  }
  toLike(id: string) {
    console.log(this.likedCards);
    this.cards = this.cards.map((card) =>
      card.id === id ? { ...card, isLiked: true } : card
    );
    const likedCard = this.cards.filter((card) => card.id === id);
    this.likedCards.push(likedCard[0]);
    console.log(this.likedCards);
  }

  toUnlike(id: string) {
    this.cards = this.cards.map((card) =>
      card.id === id ? { ...card, isLiked: false } : card
    );
    this.likedCards = this.likedCards.filter((card) => card.id !== id);
    console.log(this.likedCards);
  }

  removeCard(id: string) {
    this.cards = this.cards.filter((card) => card.id !== id);
    this.likedCards = this.likedCards.filter((card) => card.id !== id);
  }
}

const store = new Store();
export default store;
