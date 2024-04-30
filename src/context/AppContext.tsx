import React, { ReactNode } from "react";
import useConfig from "../hooks/useConfig";
import { Card } from "../hooks/useConfig";

export type AppContextType = {
  cards: Card[];
  likedCards: Card[];
  products: string[];
  shownCards: Card[];
  getCards: (brand: string, product: string) => void;
  showCards: (product: string) => void;
  setShownCards: React.Dispatch<React.SetStateAction<Card[]>>;
  addCard: (card: Card) => void;
  removeCard: (card: Card) => void;
  removeLikedCard: (card: Card) => void;
  disable: () => void;
  isLiked: (card: Card) => boolean;
  isDisabled: boolean;
  isError: boolean;
};
export const AppContext = React.createContext<AppContextType>({
  cards: [],
  likedCards: [],
  products: [],
  shownCards: [],
  getCards: () => {},
  showCards: () => {},
  setShownCards: () => {},
  addCard: () => {},
  removeCard: () => {},
  removeLikedCard: () => {},
  disable: () => {},
  isLiked: () => {
    return false;
  },
  isDisabled: false,
  isError: false,
});

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const {
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
  } = useConfig();
  return (
    <AppContext.Provider
      value={{
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
