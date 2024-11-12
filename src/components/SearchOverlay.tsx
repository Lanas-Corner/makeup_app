import { nanoid } from "nanoid";
import MakeupBag from "../images/makeupbag.jpg";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const SearchOverlay = ({ suggestions }: { suggestions: string[] }) => {
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
    <div className="fixed w-full bg-white z-10 p-4 pl-12 flex">
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
            onClick={() => handleSelect(item)}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SearchOverlay;
