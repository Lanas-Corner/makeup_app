import axios from "axios";
import { makeAutoObservable } from "mobx";
import { nanoid } from "nanoid";

const baseURL = "https://makeup-api.herokuapp.com/api/v1/products.json";

export interface Card {
  id: string;
  brand: string;
  name: string;
  image_link: string;
  isLiked: boolean;
  product: string;
}

interface ServerCard {
  id: string;
  brand: string;
  name: string;
  image_link: string;
  isLiked: boolean;
  product_type: string;
}

class Store {
  cards: Card[] = [];
  likedCards: Card[] = [];
  brand = "";
  products: string[] = [];
  isDisabled = false;
  shownCards: Card[] = [];
  isError = false;

  constructor() {
    makeAutoObservable(this);
  }

  getCards(brand: string) {
    this.cards = [];
    this.brand = brand;
    this.products = [];
    this.shownCards = [];
    let res: any;
    if (this.brand !== "") {
      axios
        .get(baseURL + `?brand=${brand}`)
        .then((res) => {
          let arr: Card[] = [];
          this.cards = res.data.map((card: ServerCard) => {
            return {
              id: nanoid(),
              brand: card.brand,
              name: card.name,
              image_link: card.image_link,
              isLiked: false,
              product: card.product_type,
            };
          });
          this.cards.map((card: Card) => {
            if (!this.products.includes(card.product)) {
              this.products.push(card.product);
            }
          });
          this.isDisabled = false;
          this.isError = false;
        })
        .catch(() => {
          this.isError = true;
        });
    }
    return this.cards;
  }

  showCards(product: string) {
    this.shownCards = this.cards.filter((card) => card.product === product);
  }

  disable() {
    this.isDisabled = true;
  }

  toLike(id: string) {
    this.cards = this.cards.map((card) =>
      card.id === id ? { ...card, isLiked: true } : card
    );
    this.shownCards = this.shownCards.map((card) =>
      card.id === id ? { ...card, isLiked: true } : card
    );
    const likedCard = this.cards.filter((card) => card.id === id);
    this.likedCards.push(likedCard[0]);
  }

  toUnlike(id: string) {
    this.cards = this.cards.map((card) =>
      card.id === id ? { ...card, isLiked: false } : card
    );
    this.shownCards = this.shownCards.map((card) =>
      card.id === id ? { ...card, isLiked: false } : card
    );
    this.likedCards = this.likedCards.filter((card) => card.id !== id);
  }

  removeCard(id: string) {
    this.cards = this.cards.filter((card) => card.id !== id);
    this.shownCards = this.shownCards.filter((card) => card.id !== id);
    this.likedCards = this.likedCards.filter((card) => card.id !== id);
  }
}

const store = new Store();
export default store;
