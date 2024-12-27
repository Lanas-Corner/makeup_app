import { nanoid } from "nanoid";
import MakeupBag from "../images/makeupbag.jpg";
import { AppContext } from "../context/AppContext";
import React, { useContext } from "react";
import { normalizeSuggestion, parseQuery } from "../utils";

const SearchOverlay = ({
  suggestions,
  setIsOverlayVisible,
}: {
  suggestions: string[];
  setIsOverlayVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { getCards } = useContext(AppContext);

  const handleSelect = (val: string) => {
    const query = parseQuery(val);
    getCards(query);
    setIsOverlayVisible(false);
  };

  console.log("Visible");
  return (
    <div className="fixed top-16 w-full bg-white z-10 p-4 pl-12 flex">
      <div className="p-1 mr-12">
        <img src={MakeupBag} alt="makeup bag" width={130} />
      </div>
      <div>
        <div className="mb-4 border-b w-60 border-black">
          <p className="font-medium uppercase ">Search suggestions</p>
        </div>
        {suggestions.map((item) => (
          <p
            key={nanoid()}
            className="cursor-pointer hover:bg-slate-200"
            onClick={() => {
              handleSelect(item);
            }}
          >
            {normalizeSuggestion(item)}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SearchOverlay;
