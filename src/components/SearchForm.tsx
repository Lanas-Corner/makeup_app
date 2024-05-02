import { useContext } from "react";
import { Flex } from "antd";
import { AppContext } from "../context/AppContext";
import MakeupBag from "../images/makeupbag.jpg";
import { productList } from "../const/productList";
import ItemCard from "./ItemCard";

const SearchForm = () => {
  const { cards } = useContext(AppContext);

  const products = productList.map(() => <ItemCard />);

  return (
    <Flex justify="flex-start" style={{ height: "calc(100vh - 120px)" }}>
      <img src={MakeupBag} width={"35%"} alt="bag" />
      {cards.length > 0 ? products : <></>}
    </Flex>
  );
};

export default SearchForm;
