import { nanoid } from "nanoid";
import MakeupBag from "../images/makeupbag.jpg";
import { AppContext } from "../context/AppContext";
import React, { useContext, useState } from "react";
import { normalizeSuggestion, parseQuery } from "../utils";
import { useMediaQuery } from "../hooks/useMediaQuery";
import SearchField from "./SearchField";
import SearchIcon from "../images/search.png";

const SearchOverlay = ({
  suggestions,
  setIsOverlayVisible,
  startsWithNum,
  activeIndex,
  setActiveIndex,
  setSuggestions,
  setStartsWithNum,
}: {
  suggestions: string[];
  setIsOverlayVisible: React.Dispatch<React.SetStateAction<boolean>>;
  startsWithNum: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  setSuggestions: React.Dispatch<React.SetStateAction<string[]>>;
  setStartsWithNum: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [value, setValue] = useState("");
  const { getCards } = useContext(AppContext);
  const isMobile = useMediaQuery("(max-width: 640px)");

  const handleSelect = (val: string) => {
    console.log(val);
    const res = parseQuery(val);
    getCards(res.query, res.searchValue, res.searchValueType);
    setActiveIndex(-1);
    setIsOverlayVisible(false);
  };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value.toLowerCase();
  //   setValue(value);
  //   setStartsWithNum(value.length);
  //   if (value && value.length > 1) {
  //     const newOptions = findSuggestions(value);
  //     if (newOptions.length > 0) {
  //       setSuggestions(newOptions);
  //       setIsOverlayVisible(true);
  //     } else {
  //       handleOverlayClose();
  //     }
  //   } else {
  //     handleOverlayClose();
  //   }
  // };

  return (
    <div className="absolute top-16 w-full z-10 p-14 pl-12 flex bg-white rounded-2xl max-sm:top-24 max-sm:flex-col max-sm:gap-5">
      {isMobile && (
        <SearchField
          setIsOverlayVisible={setIsOverlayVisible}
          handleOverlayClose={() => setIsOverlayVisible(false)}
          setSuggestions={setSuggestions}
          setStartsWithNum={setStartsWithNum}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          suggestions={suggestions}
        />
      )}
      <div className="p-1 mr-12">
        <img src={MakeupBag} alt="makeup bag" width={130} />
      </div>
      <div>
        <div className="mb-4 border-b w-60 border-black">
          <p className="font-medium uppercase ">Search suggestions</p>
        </div>
        {suggestions.map((item, i) => (
          <p
            key={nanoid()}
            className={
              "px-3 py-1 rounded-2xl cursor-pointer hover:bg-slate-100 " +
              (i === activeIndex && "bg-slate-100")
            }
            onClick={() => {
              handleSelect(item);
            }}
          >
            {normalizeSuggestion(item)
              .split("")
              .map((char, i) =>
                i < startsWithNum ? (
                  <span className="font-semibold" key={i}>
                    {char}
                  </span>
                ) : (
                  char
                )
              )}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SearchOverlay;
