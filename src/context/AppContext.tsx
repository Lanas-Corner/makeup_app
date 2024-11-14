import React, { ReactNode } from "react";
import useConfig from "../hooks/useConfig";
import { Card } from "../hooks/useConfig";

export type AppContextType = {
  cards: Card[];
  likedCards: Card[];
  getCards: (brand: string, product: string) => void;
  addCard: (card: Card) => void;
  removeLikedCard: (card: Card) => void;
  isError: boolean;
};
export const AppContext = React.createContext<AppContextType>({
  cards: [],
  likedCards: [],
  getCards: () => {},
  addCard: () => {},
  removeLikedCard: () => {},
  isError: false,
});

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const { cards, likedCards, getCards, addCard, removeLikedCard, isError } =
    useConfig();
  return (
    <AppContext.Provider
      value={{
        cards,
        likedCards,
        getCards,
        addCard,
        removeLikedCard,
        isError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
