import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ProductList = () => {
  const { cards } = useContext(AppContext);
  return <div>{JSON.stringify(cards)}</div>;
};

export default ProductList;
