import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";
import CardView from "./CardView";
import { SearchStatusType } from "../hooks/useConfig";

const ProductList = () => {
  const {
    cards,
    activeCard,
    setActiveCard,
    searchStatus,
    searchedValue,
    searchedItemType,
  } = useContext(AppContext);
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
