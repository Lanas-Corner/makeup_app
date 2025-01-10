import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "../context/AppContext";
import Image from "./Image";
import Close from "../images/close.png";

const Drawer = ({
  handleDrawerClose,
  isDrawerOpen,
}: {
  isDrawerOpen: boolean;
  handleDrawerClose: () => void;
}) => {
  const { likedCards, removeLikedCard } = useContext(AppContext);
  let drawerRef = useRef<null | HTMLDivElement>(null);

  const handleClickOutside = React.useCallback(
    (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        console.log("clicked outside");
        handleDrawerClose();
      }
    },
    [handleDrawerClose]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div
      className={
        !isDrawerOpen
          ? "hidden"
          : "fixed t-0 left-0 h-screen w-screen bg-black bg-opacity-50 z-10 "
      }
    >
      <div
        className="fixed h-full overflow-scroll top-0 right-0 w-1/3 bg-white flex flex-col px-8 py-12 z-20 rounded-l-xl"
        ref={drawerRef}
        // onClick={handleClickInside}
      >
        <div className="flex mb-6 border-gray-300 border-b-[1px] p-4 justify-between">
          <p className="text-2xl uppercase">Your makeup kit</p>
          <div className="cursor-pointer" onClick={handleDrawerClose}>
            <Image imageSrc={Close} width={30} height={30} />
          </div>
        </div>
        <div className="flex flex-col gap-4 divide-y-2">
          {likedCards.map((card, i) => (
            <div key={i} className="flex gap-5 pt-3">
              <div className="shrink-0">
                <Image imageSrc={card.image_link} width={150} height={150} />
              </div>
              <div className="flex flex-col gap-3 justify-start">
                <p className="text-md font-medium">{card.name}</p>
                <p>{card.product_type}</p>
                <p>{card.brand}</p>
              </div>
              <div className="ml-auto">
                <button
                  className="hover:font-medium"
                  onClick={() => removeLikedCard(card)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
