import { useEffect, useState } from "react";
import { fetchCards } from "../api";
import { getRandomBrand } from "../utils";

export interface ProductColor {
  hex_value: string;
  colour_name: string;
}

export interface Card {
  id: string;
  brand: string;
  name: string;
  image_link: string;
  description: string;
  rating: number;
  category: string;
  product_type: string;
  tag_list: string[];
  product_colors: ProductColor[];
}

const LS_KEY: string = "makeup_kit";

const useConfig = () => {
  const [likedCards, setLikedCards] = useState<Card[]>([]);
  const [cards, setCards] = useState<Card[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  function updateLikedCards(cards: Card[]) {
    setLikedCards(cards);
    localStorage.setItem(LS_KEY, JSON.stringify(cards));
  }

  function addCard(newCard: Card) {
    const cards = likedCards.concat(newCard);
    updateLikedCards(cards);
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

  async function fetchRandomBrandCards() {
    try {
      const brand = getRandomBrand();
      const res = await fetchCards("?brand=" + brand);
      if (res) {
        const fetchedCards: Card[] = res.data.map((card: Card) => {
          return {
            id: card.id,
            brand: card.brand,
            name: card.name,
            image_link: card.image_link,
            description: card.description,
            rating: card.rating,
            category: card.category,
            product_type: card.product_type,
            tag_list: card.tag_list,
            product_colors: card.product_colors,
          };
        });
        setIsError(false);
        return fetchedCards;
      }
    } catch (err) {
      setIsError(true);
    }
  }

  async function getCards(query?: string) {
    try {
      const res = await fetchCards(query);
      if (res) {
        const fetchedCards: Card[] = res.data.map((card: Card) => {
          return {
            id: card.id,
            brand: card.brand,
            name: card.name,
            image_link: card.image_link,
            description: card.description,
            rating: card.rating,
            category: card.category,
            product_type: card.product_type,
            tag_list: card.tag_list,
            product_colors: card.product_colors,
          };
        });
        setCards(fetchedCards);
        setIsError(false);
      }
    } catch (err) {
      setIsError(true);
    }
  }

  useEffect(() => {
    fetchRandomBrandCards().then((newCards) => {
      setCards(newCards);
    });

    const localCards = localStorage.getItem(LS_KEY);
    setLikedCards(localCards ? JSON.parse(localCards) : []);
  }, []);

  return {
    cards,
    likedCards,
    getCards,
    addCard,
    removeLikedCard,
    isError,
  };
};

export default useConfig;
