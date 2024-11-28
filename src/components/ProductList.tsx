import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const ProductList = () => {
  const { cards } = useContext(AppContext);
  return (
    <div>
      {cards.length > 0 ? JSON.stringify(cards) : <Spinner size={56} />}
    </div>
  );
};

export default ProductList;
