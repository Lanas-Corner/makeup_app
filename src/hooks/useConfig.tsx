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

export enum SearchType {
  Product = "product",
  Brand = "brand",
  Tag = "tag",
}

export enum SearchStatusType {
  Loading,
  Loaded,
  NotFound,
  Error,
}

const LS_KEY: string = "makeup_kit";

const useConfig = () => {
  const [searchedValue, setSearchedValue] = useState("");
  const [searchedItemType, setSearchedItemType] = useState<SearchType>(
    SearchType.Brand
  );
  const [likedCards, setLikedCards] = useState<Card[]>([]);
  const [cards, setCards] = useState<Card[]>([]);
  const [searchStatus, setSearchStatus] = useState<SearchStatusType>(
    SearchStatusType.Loading
  );
  const [activeCard, setActiveCard] = useState<Card | null>(null);

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
      setSearchedValue(brand);
      setSearchedItemType(SearchType.Brand);
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
        setSearchStatus(SearchStatusType.Loaded);
        setSearchedItemType(SearchType.Brand);
        return fetchedCards;
      }
    } catch (err) {
      setSearchStatus(SearchStatusType.Error);
    }
  }

  async function getCards(
    query: string | undefined,
    searchValue: string,
    searchTypeValue: SearchType
  ) {
    try {
      setSearchedValue(searchValue);
      setCards([]);
      setSearchStatus(SearchStatusType.Loading);
      setSearchedItemType(searchTypeValue);
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
        setSearchStatus(SearchStatusType.Loaded);
      }
    } catch (err) {
      setSearchStatus(SearchStatusType.Error);
    }
  }

  useEffect(() => {
    fetchRandomBrandCards().then((newCards?: Card[]) => {
      if (newCards) {
        setCards(newCards);
      }
    });

    const localCards = localStorage.getItem(LS_KEY);
    setLikedCards(localCards ? JSON.parse(localCards) : []);
  }, []);

  return {
    searchedValue,
    cards,
    likedCards,
    getCards,
    addCard,
    removeLikedCard,
    searchStatus,
    activeCard,
    setActiveCard,
    searchedItemType,
  };
};

export default useConfig;
