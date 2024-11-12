import { brandNames } from "../const/brandList";
import { productList } from "../const/productList";
import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import SearchIcon from "../images/search.png";

const items: string[] = [...brandNames, ...productList];

const SearchField = ({
  setIsOverlayVisible,
  setSuggestions,
}: {
  setIsOverlayVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setSuggestions: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const [value, setValue] = useState<string>();
  const { getCards } = useContext(AppContext);

  const handleSelect = (val: string) => {
    const arr = val.split("_");
    if (arr[1] === "brand") {
      getCards(arr[0], "");
    } else if (arr[1] === "product") {
      getCards("", arr[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (value && value.length > 1) {
      const newOptions = items.filter((item) =>
        item.includes(value.toLowerCase())
      );
      if (newOptions.length > 0) {
        setSuggestions(newOptions);
        setIsOverlayVisible(true);
      } else {
        setIsOverlayVisible(false);
      }
    } else {
      setIsOverlayVisible(false);
    }
  };

  return (
    <div className="flex relative bg-gray-200 p-2 gap-1 rounded-3xl">
      <img src={SearchIcon} width={22} height={20} alt="search" />
      <input
        placeholder="SEARCH"
        className="bg-inherit outline-none text-sm"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchField;
