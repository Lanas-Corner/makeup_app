import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";
import CardView from "./CardView";

const ProductList = () => {
  const { cards, activeCard, setActiveCard } = useContext(AppContext);
  return activeCard ? (
    <CardView card={activeCard} setActiveCard={setActiveCard} />
  ) : cards.length > 0 ? (
    <div className="grid grid-cols-4 gap-7 bg-gray-100 px-14 py-20 rounded-2xl">
      {cards.map((card, i) => (
        <Card card={card} setActiveCard={setActiveCard} key={i} />
      ))}
    </div>
  ) : (
    <Spinner size={56} />
  );
  // );
};

export default ProductList;
