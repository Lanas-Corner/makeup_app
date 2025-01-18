import { useEffect, useMemo, useState } from "react";
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

interface FilterType {
  name: string;
  count: number;
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
export type FiltersType = Record<SearchType, string[]>;

export const emptyFilters: FiltersType = {
  product: [],
  brand: [],
  tag: [],
};
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
  const [availableFilterOptions, setAvailableFilterOptions] =
    useState<FiltersType>(emptyFilters);
  const [appliedFilters, setAppliedFilters] =
    useState<FiltersType>(emptyFilters);
  const [filteredCards, setFilteredCards] = useState<Card[]>([]);

  function updateLikedCards(cards: Card[]) {
    setLikedCards(cards);
    localStorage.setItem(LS_KEY, JSON.stringify(cards));
  }

  function addCard(newCard: Card) {
    if (!likedCards.includes(newCard)) {
      const cards = likedCards.concat(newCard);
      updateLikedCards(cards);
    }
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

  function incrementCount(optionsArray: FilterType[], name: string) {
    let filterIndex = optionsArray.findIndex((val) => val.name === name);
    if (filterIndex === -1) {
      optionsArray.push({ name, count: 1 });
    } else {
      optionsArray[filterIndex].count += 1;
    }
  }

  const updateAvailableFilterOptions = (
    cards: Card[],
    searchedItemType: SearchType
  ) => {
    let availableBrands: FilterType[] = [];
    let availableProducts: FilterType[] = [];
    let availableTags: FilterType[] = [];

    cards.forEach((card) => {
      switch (searchedItemType) {
        case SearchType.Brand:
          if (card.product_type) {
            incrementCount(availableProducts, card.product_type);
          }
          break;
        case SearchType.Product:
          if (card.brand) {
            incrementCount(availableBrands, card.brand);
          }
          break;
        default:
          if (card.brand) {
            incrementCount(availableBrands, card.brand);
          }
          if (card.product_type) {
            incrementCount(availableProducts, card.product_type);
          }
          break;
      }

      card.tag_list?.forEach((tag) => {
        if (tag) {
          incrementCount(availableTags, tag);
        }
      });
    });

    setAvailableFilterOptions(() => {
      let brand: string[] = availableBrands
        .filter((val) => val.count < cards.length)
        .map((filter) => filter.name);
      let product: string[] = availableProducts
        .filter((val) => val.count < cards.length)
        .map((filter) => filter.name);
      let tag: string[] = availableTags
        .filter((val) => val.count < cards.length)
        .map((filter) => filter.name);
      return { brand, product, tag };
    });
  };

  async function fetchRandomBrandCards() {
    try {
      setSearchStatus(SearchStatusType.Loading);
      resetFilter();
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

        setCards(fetchedCards);
        if (fetchedCards.length > 1) {
          updateAvailableFilterOptions(fetchedCards, SearchType.Brand);
        }
      }
    } catch (err) {
      setSearchStatus(SearchStatusType.Error);
    }
  }

  function resetFilter() {
    setAvailableFilterOptions(emptyFilters);
    setAppliedFilters(emptyFilters);
    setFilteredCards([]);
  }

  async function getCards(
    query: string | undefined,
    searchValue: string,
    searchTypeValue: SearchType
  ) {
    try {
      setSearchedValue(searchValue);
      setCards([]);
      resetFilter();
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
        if (cards.length > 1) {
          updateAvailableFilterOptions(fetchedCards, searchTypeValue);
        }
        setSearchStatus(SearchStatusType.Loaded);
      }
    } catch (err) {
      setSearchStatus(SearchStatusType.Error);
    }
  }

  function filterCards(filters: FiltersType) {
    let filteredCards: Card[] = cards;
    if (filters.brand.length > 0) {
      filteredCards = filteredCards.filter((card) =>
        filters.brand.includes(card.brand)
      );
    }
    if (filters.product.length > 0) {
      filteredCards = filteredCards.filter((card) =>
        filters.product.includes(card.product_type)
      );
    }
    if (filters.tag.length > 0) {
      filteredCards = filteredCards.filter((card) =>
        filters.tag.some((tag) => card.tag_list.includes(tag))
      );
    }
    setFilteredCards(filteredCards);
    updateAvailableFilterOptions(filteredCards, searchedItemType);
  }

  function applyFilter(name: string, filterType: SearchType) {
    let newFilters: FiltersType = {
      ...appliedFilters,
      [filterType]: [...appliedFilters[filterType], name],
    };
    setAppliedFilters(newFilters);
    filterCards(newFilters);
  }

  function removeFilter(name: string, filterType: SearchType) {
    let newFilters: FiltersType = {
      ...appliedFilters,
      [filterType]: appliedFilters[filterType].filter((val) => val !== name),
    };
    setAppliedFilters(newFilters);
    filterCards(newFilters);
  }

  useEffect(() => {
    fetchRandomBrandCards();
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
    availableFilterOptions,
    applyFilter,
    appliedFilters,
    filteredCards,
    removeFilter,
    fetchRandomBrandCards,
  };
};

export default useConfig;
