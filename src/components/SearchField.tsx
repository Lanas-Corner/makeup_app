import { Select } from "antd";
import { brandNames } from "../const/brandList";
import { nanoid } from "nanoid";
import { productTypes } from "../const/productTypes";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const { Option } = Select;

const SearchField = () => {
  const { getCards } = useContext(AppContext);

  const handleSelect = (val: string) => {
    const arr = val.split("_");
    if (arr[1] === "brand") {
      getCards(arr[0], "");
    } else if (arr[1] === "product") {
      getCards("", arr[0]);
    }
  };

  return (
    <Select
      style={{ width: "180px" }}
      placeholder="Search"
      showSearch
      onSelect={handleSelect}
    >
      {brandNames.map((brand: string) => (
        <Option
          key={nanoid()}
          value={brand + "_brand"}
          className={"brand"}
          label={brand}
        >
          {brand}
        </Option>
      ))}
      {productTypes.map((product: string) => (
        <Option
          key={nanoid()}
          value={product + "_product"}
          className={"product"}
          label={product}
        >
          {product}
        </Option>
      ))}
    </Select>
  );
};

export default SearchField;
