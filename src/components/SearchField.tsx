import React, { useState } from "react";
import SearchIcon from "../images/search.png";
import { parameters } from "../const/parameters";

const SearchField = ({
  setIsOverlayVisible,
  setSuggestions,
  setStartsWithNum,
}: {
  setIsOverlayVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setSuggestions: React.Dispatch<React.SetStateAction<string[]>>;
  setStartsWithNum: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [value, setValue] = useState<string>("");

  function findSuggestions(value: string): string[] {
    const options: string[] = parameters.filter((param) =>
      param.startsWith(value)
    );
    return options;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setStartsWithNum(e.target.value.length);
    if (e.target.value && e.target.value.length > 1) {
      const newOptions = findSuggestions(e.target.value);
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
