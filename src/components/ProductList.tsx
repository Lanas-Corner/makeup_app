import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";
import CardView from "./CardView";
import { SearchStatusType, SearchType } from "../hooks/useConfig";
import { normalizeName } from "../utils";
import Image from "./Image";
import Refresh from "../images/refresh.png";

const ProductList = () => {
  const {
    fetchRandomBrandCards,
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

  return (
    <div className="grow my-1 rounded-2xl">
      {activeCard ? (
        <CardView card={activeCard} setActiveCard={setActiveCard} />
      ) : (
        <div className="px-14 py-5">
          {searchStatus === SearchStatusType.Error ? (
            <p className="font-medium text-xl my-5">Error</p>
          ) : searchStatus === SearchStatusType.NotFound ? (
            <p className="font-medium text-xl my-5">
              No results for ${searchedValue.toUpperCase()}
            </p>
          ) : (
            <div className="relative">
              <div className="flex gap-4">
                <button onClick={() => fetchRandomBrandCards()}>
                  <Image imageSrc={Refresh} width={30} height={30} />
                </button>
                <p className="font-medium text-xl my-5">
                  {`${
                    filteredCards.length > 0
                      ? filteredCards.length
                      : cards.length
                  } Results for ${searchedValue.toUpperCase()} ${searchedItemType}`}
                </p>
              </div>

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
                          onClick={() =>
                            removeFilter(option, key as SearchType)
                          }
                        >
                          x
                        </button>
                      </div>
                    ));
                  })}{" "}
                  {(availableFilterOptions.brand.length > 0 ||
                    availableFilterOptions.product.length > 0 ||
                    availableFilterOptions.tag.length > 0) &&
                    Object.entries(availableFilterOptions).map(
                      ([key, val], i) => {
                        return val.map((option: string, i: number) => (
                          <button
                            key={i}
                            className="px-5 py-1 rounded-3xl capitalize bg-orange-100"
                            onClick={() =>
                              applyFilter(option, key as SearchType)
                            }
                          >
                            {normalizeName(option)}
                          </button>
                        ));
                      }
                    )}
                </div>
              }

              {
                <div className="grid lg:grid-cols-4 gap-7 box-border md:grid-cols-3 sm:grid-cols-2">
                  {filteredCards && filteredCards.length > 0
                    ? filteredCards.map((card, i) => {
                        return (
                          <Card
                            card={card}
                            setActiveCard={setActiveCard}
                            key={i}
                          />
                        );
                      })
                    : cards.map((card, i) => (
                        <Card
                          card={card}
                          setActiveCard={setActiveCard}
                          key={i}
                        />
                      ))}
                </div>
              }
              {searchStatus === SearchStatusType.Loading && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-20 z-10 flex justify-center items-center">
                  <Spinner size={54} />
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductList;
