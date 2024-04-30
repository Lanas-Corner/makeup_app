import { useContext } from "react";
import { Flex } from "antd";
import { AppContext } from "../context/AppContext";
import MakeupBag from "../images/makeupbag.jpg";

const SearchForm = () => {
  const { isError } = useContext(AppContext);

  return (
    <Flex justify="flex-start">
      <img src={MakeupBag} width={"30%"} />
      {isError ? <p className="text">"Connection error occured."</p> : <></>}
    </Flex>
  );
};

export default SearchForm;
