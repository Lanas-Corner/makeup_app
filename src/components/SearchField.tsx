import React, { useState, useContext } from "react";
import SearchIcon from "../images/search.png";
import { AppContext } from "../context/AppContext";
import { parameters } from "../const/parameters";
import { normalizeSuggestion, parseQuery } from "../utils";

const SearchField = ({
  setIsOverlayVisible,
  handleOverlayClose,
  setSuggestions,
  setStartsWithNum,
  activeIndex,
  setActiveIndex,
  suggestions,
}: {
  setIsOverlayVisible: React.Dispatch<React.SetStateAction<boolean>>;
  handleOverlayClose: () => void;
  setSuggestions: React.Dispatch<React.SetStateAction<string[]>>;
  setStartsWithNum: React.Dispatch<React.SetStateAction<number>>;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  suggestions: string[];
}) => {
  const [value, setValue] = useState<string>("");
  const { getCards } = useContext(AppContext);

  function findSuggestions(value: string): string[] {
    const options: string[] = parameters.filter((param) =>
      param.startsWith(value)
    );
    return options;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setValue(value);
    setStartsWithNum(value.length);
    if (value && value.length > 1) {
      const newOptions = findSuggestions(value);
      if (newOptions.length > 0) {
        setSuggestions(newOptions);
        setIsOverlayVisible(true);
      } else {
        handleOverlayClose();
      }
    } else {
      handleOverlayClose();
    }
  };

  const handleSelect = (val: string) => {
    const res = parseQuery(val);
    getCards(res.query, res.searchValue, res.searchValueType);
    handleOverlayClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown": {
        setActiveIndex((i) => (i + 1) % suggestions.length);
        e.preventDefault();
        break;
      }
      case "ArrowUp": {
        setActiveIndex((i) => (i < 0 ? suggestions.length - 1 : i - 1));
        e.preventDefault();
        break;
      }
      case "Enter": {
        if (activeIndex > -1 && activeIndex < suggestions.length) {
          setValue(normalizeSuggestion(suggestions[activeIndex]));
          handleSelect(suggestions[activeIndex]);
          break;
        } else {
          handleSelect(value);
          break;
        }
      }

      case "Escape": {
        handleOverlayClose();
        break;
      }
      default:
        break;
    }
  };

  return (
    <div
      className="flex relative bg-gray-200 p-2 gap-1 rounded-3xl focus-within:outline"
      onKeyDown={handleKeyDown}
    >
      <img src={SearchIcon} width={22} height={20} alt="search" />
      <input
        placeholder="SEARCH"
        className="bg-inherit text-sm focus:outline-none"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchField;
