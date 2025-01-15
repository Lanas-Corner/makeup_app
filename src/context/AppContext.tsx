import React, { ReactNode } from "react";
import useConfig, {
  SearchStatusType,
  SearchType,
  FiltersType,
  emptyFilters,
} from "../hooks/useConfig";
import { Card } from "../hooks/useConfig";

export type AppContextType = {
  searchedValue: string;
  searchedItemType: SearchType;
  fetchRandomBrandCards: () => void;
  cards: Card[];
  likedCards: Card[];
  getCards: (
    query: string | undefined,
    searchValue: string,
    searchTypeValue: SearchType
  ) => void;
  addCard: (card: Card) => void;
  removeLikedCard: (card: Card) => void;
  searchStatus: SearchStatusType;
  activeCard: Card | null;
  setActiveCard: React.Dispatch<React.SetStateAction<Card | null>>;
  availableFilterOptions: FiltersType;
  applyFilter: (name: string, filterType: SearchType) => void;
  appliedFilters: FiltersType;
  filteredCards: Card[];
  removeFilter: (name: string, filterType: SearchType) => void;
};
export const AppContext = React.createContext<AppContextType>({
  searchedValue: "",
  searchedItemType: SearchType.Brand,
  fetchRandomBrandCards: () => {},
  cards: [],
  likedCards: [],
  getCards: () => {},
  addCard: () => {},
  removeLikedCard: () => {},
  searchStatus: SearchStatusType.Loading,
  activeCard: null,
  setActiveCard: () => {},
  availableFilterOptions: emptyFilters,
  applyFilter: () => {},
  appliedFilters: emptyFilters,
  filteredCards: [],
  removeFilter: () => {},
});

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const {
    searchedValue,
    searchedItemType,
    fetchRandomBrandCards,
    cards,
    likedCards,
    getCards,
    addCard,
    removeLikedCard,
    searchStatus,
    activeCard,
    setActiveCard,
    availableFilterOptions,
    applyFilter,
    appliedFilters,
    filteredCards,
    removeFilter,
  } = useConfig();
  return (
    <AppContext.Provider
      value={{
        searchedValue,
        searchedItemType,
        fetchRandomBrandCards,
        cards,
        likedCards,
        getCards,
        addCard,
        removeLikedCard,
        searchStatus,
        activeCard,
        setActiveCard,
        availableFilterOptions,
        applyFilter,
        appliedFilters,
        filteredCards,
        removeFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
