import React, { ReactNode } from "react";
import useConfig from "../hooks/useConfig";
import { Card } from "../hooks/useConfig";

export type AppContextType = {
  cards: Card[];
  likedCards: Card[];
  getCards: (query: string) => void;
  addCard: (card: Card) => void;
  removeLikedCard: (card: Card) => void;
  isError: boolean;
  activeCard: Card | null;
  setActiveCard: React.Dispatch<React.SetStateAction<Card | null>>;
};
export const AppContext = React.createContext<AppContextType>({
  cards: [],
  likedCards: [],
  getCards: () => {},
  addCard: () => {},
  removeLikedCard: () => {},
  isError: false,
  activeCard: null,
  setActiveCard: () => {},
});

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const {
    cards,
    likedCards,
    getCards,
    addCard,
    removeLikedCard,
    isError,
    activeCard,
    setActiveCard,
  } = useConfig();
  return (
    <AppContext.Provider
      value={{
        cards,
        likedCards,
        getCards,
        addCard,
        removeLikedCard,
        isError,
        activeCard,
        setActiveCard,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
