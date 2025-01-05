import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";
import CardView from "./CardView";

const ProductList = () => {
  const { cards, activeCard, setActiveCard } = useContext(AppContext);
  return (
    <div className="grow bg-gray-100 my-8 rounded-2xl">
      {activeCard ? (
        <CardView card={activeCard} setActiveCard={setActiveCard} />
      ) : cards.length > 0 ? (
        <div className="grid grid-cols-4 gap-7 px-14 py-12 box-border">
          {cards.map((card, i) => (
            <Card card={card} setActiveCard={setActiveCard} key={i} />
          ))}
        </div>
      ) : (
        <Spinner size={56} />
      )}
    </div>
  );
};

export default ProductList;
