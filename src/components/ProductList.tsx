import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import Card from './Card';
import CardView from './CardView';
import { SearchStatusType, SearchType } from '../hooks/useConfig';
import { normalizeName } from '../utils';
import Image from './Image';
import Refresh from '../images/refresh.png';

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
    <div className="my-1 grow rounded-2xl">
      {activeCard ? (
        <CardView card={activeCard} setActiveCard={setActiveCard} />
      ) : (
        <div className="px-14 py-5">
          {searchStatus === SearchStatusType.Error ? (
            <p className="my-5 text-xl font-medium">Error</p>
          ) : searchStatus === SearchStatusType.NotFound ? (
            <p className="my-5 text-xl font-medium">
              No results for ${searchedValue.toUpperCase()}
            </p>
          ) : (
            <div className="relative">
              <div className="flex gap-4">
                <button onClick={() => fetchRandomBrandCards()}>
                  <Image imageSrc={Refresh} width={30} height={30} />
                </button>
                <p className="my-5 text-xl font-medium">
                  {`${
                    filteredCards.length > 0
                      ? filteredCards.length
                      : cards.length
                  } Results for ${searchedValue.toUpperCase()} ${searchedItemType}`}
                </p>
              </div>

              {
                <div className="mb-6 flex flex-wrap gap-5">
                  {Object.entries(appliedFilters).map(([key, val], i) => {
                    return val.map((option: string, i: number) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 rounded-3xl bg-orange-300 px-7 py-1 font-medium capitalize"
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
                  })}{' '}
                  {(availableFilterOptions.brand.length > 0 ||
                    availableFilterOptions.product.length > 0 ||
                    availableFilterOptions.tag.length > 0) &&
                    Object.entries(availableFilterOptions).map(
                      ([key, val], i) => {
                        return val.map((option: string, i: number) => (
                          <button
                            key={i}
                            className="rounded-3xl bg-orange-100 px-5 py-1 capitalize"
                            onClick={() =>
                              applyFilter(option, key as SearchType)
                            }
                          >
                            {normalizeName(option)}
                          </button>
                        ));
                      },
                    )}
                </div>
              }

              {
                <div className="box-border grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
                <div className="fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-black bg-opacity-20">
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
