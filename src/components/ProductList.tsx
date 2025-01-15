import { Key, useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";
import CardView from "./CardView";
import { SearchStatusType, SearchType } from "../hooks/useConfig";
import { normalizeName } from "../utils";

const ProductList = () => {
  const {
    cards,
    activeCard,
    setActiveCard,
    searchStatus,
    searchedValue,
    searchedItemType,
    availableFilterOptions,
    applyFilter,
    appliedFilters,
    filteredCards,
    removeFilter,
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
            {filteredCards.length > 0 ? filteredCards.length : cards.length}{" "}
            Results for "{searchedValue.toUpperCase()}" {searchedItemType}
          </p>
          {
            <div className="flex flex-wrap gap-5 mb-6">
              {Object.entries(appliedFilters).map(([key, val], i) => {
                return val.map((option: string, i: number) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-orange-300 px-7 py-1 rounded-3xl capitalize font-medium"
                  >
                    {normalizeName(option)}
                    <button
                      onClick={() => removeFilter(option, key as SearchType)}
                    >
                      x
                    </button>
                  </div>
                ));
              })}{" "}
              {(availableFilterOptions.brand.length > 0 ||
                availableFilterOptions.product.length > 0 ||
                availableFilterOptions.tag.length > 0) &&
                Object.entries(availableFilterOptions).map(([key, val], i) => {
                  return val.map((option: string, i: number) => (
                    <button
                      key={i}
                      className="px-5 py-1 rounded-3xl capitalize bg-orange-100"
                      onClick={() => applyFilter(option, key as SearchType)}
                    >
                      {normalizeName(option)}
                    </button>
                  ));
                })}
            </div>
          }
          <div className="grid grid-cols-4 gap-7 box-border">
            {filteredCards && filteredCards.length > 0
              ? filteredCards.map((card, i) => {
                  return (
                    <Card card={card} setActiveCard={setActiveCard} key={i} />
                  );
                })
              : cards.map((card, i) => (
                  <Card card={card} setActiveCard={setActiveCard} key={i} />
                ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
