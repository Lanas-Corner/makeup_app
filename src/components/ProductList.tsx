import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";

const ProductList = () => {
  const { cards } = useContext(AppContext);
  return (
    <div className="grid grid-cols-4 gap-7 bg-gray-100 px-14 py-20 cursor-pointer rounded-2xl">
      {cards.length > 0 ? (
        cards.map((card, i) => <Card card={card} key={i} />)
      ) : (
        <Spinner size={56} />
      )}
    </div>
  );
};

export default ProductList;
