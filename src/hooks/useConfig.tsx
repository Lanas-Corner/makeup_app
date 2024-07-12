import { useEffect, useState } from "react";
import { fetchCards } from "../api";

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

const LS_KEY: string = "makeup_kit";

const useConfig = () => {
  const [likedCards, setLikedCards] = useState<Card[]>([]);
  const [cards, setCards] = useState<Card[]>([]);
  const [products, setProducts] = useState<string[]>([]);
  const [shownCards, setShownCards] = useState<Card[]>([]);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  function updateLikedCards(cards: Card[]) {
    setLikedCards(cards);
    localStorage.setItem(LS_KEY, JSON.stringify(cards));
  }

  function addCard(newCard: Card) {
    const cards = likedCards.concat(newCard);
    updateLikedCards(cards);
  }
  function removeCard(removedCard: Card) {
    const new_cards = shownCards.filter((card) => card.id !== removedCard.id);
    setShownCards(new_cards);
  }

  function removeLikedCard(removedCard: Card) {
    const cards = likedCards.filter((card) => card.id !== removedCard.id);
    updateLikedCards(cards);
  }

  function isLiked(card: Card) {
    const isLiked = [];
    likedCards.map(
      (likedCard) => likedCard.id === card.id && isLiked.push(card)
    );
    return isLiked.length > 0;
  }

  async function getCards(brand: string, product: string) {
    const res = await fetchCards(brand, product);
    if (res) {
      const fetchedCards = res.data.map((card: ServerCard) => {
        return {
          id: card.id,
          brand: card.brand,
          name: card.name,
          image_link: card.image_link,
          product: card.product_type,
        };
      });
      setCards(fetchedCards);
      const newProducts: string[] = [];
      fetchedCards.map((card: Card) =>
        newProducts.includes(card.product)
          ? null
          : newProducts.push(card.product)
      );
      setProducts(newProducts);
      setIsDisabled(false);
      setIsError(false);
      setShownCards(fetchedCards);
    }
  }
  function showCards(product: string) {
    const res = cards.filter((card) => card.product === product);
    setShownCards(res);
  }

  function disable() {
    setIsDisabled(true);
  }

  useEffect(() => {
    const localCards = localStorage.getItem(LS_KEY);
    setLikedCards(localCards ? JSON.parse(localCards) : []);
  }, []);

  return {
    cards,
    likedCards,
    products,
    shownCards,
    getCards,
    showCards,
    setShownCards,
    addCard,
    removeCard,
    removeLikedCard,
    disable,
    isLiked,
    isDisabled,
    isError,
  };
};

export default useConfig;
