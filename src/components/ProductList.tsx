import { Key, useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";
import CardView from "./CardView";
import { SearchStatusType } from "../hooks/useConfig";
import { normalizeName, normalizeSuggestion } from "../utils";

const ProductList = () => {
  const {
    cards,
    activeCard,
    setActiveCard,
    searchStatus,
    searchedValue,
    searchedItemType,
    availableFilterOptions,
  } = useContext(AppContext);
  console.log(availableFilterOptions);
  return (
    <div className="grow bg-gray-100 my-8 rounded-2xl">
      {searchStatus === SearchStatusType.Loading ? (
        <Spinner size={56} />
      ) : searchStatus === SearchStatusType.Error ? (
        <p>Error</p>
      ) : searchStatus === SearchStatusType.NotFound ? (
        <p>No results</p>
      ) : activeCard ? (
        <CardView card={activeCard} setActiveCard={setActiveCard} />
      ) : (
        <div className="px-14 py-12">
          <p className="font-medium text-xl mb-5">
            {cards.length} Results for "{searchedValue.toUpperCase()}"{" "}
            {searchedItemType}
          </p>
          <div className="flex flex-wrap gap-5 mb-6">
            {Object.entries(availableFilterOptions).map(([key, val], i) => {
              return val.map((option: string, i: number) => (
                <button
                  key={i}
                  className="bg-white px-5 py-1 rounded-3xl capitalize"
                >
                  {normalizeName(option)}
                </button>
              ));
            })}
          </div>
          <div className="grid grid-cols-4 gap-7 box-border">
            {cards.map((card, i) => (
              <Card card={card} setActiveCard={setActiveCard} key={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
