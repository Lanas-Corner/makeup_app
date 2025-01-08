import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Image from "./Image";

const Drawer = ({ isOpen }: { isOpen: boolean }) => {
  const { likedCards, removeLikedCard } = useContext(AppContext);

  return (
    <div className="fixed t-0 left-0 h-screen w-screen bg-black bg-opacity-50 z-10">
      <div className="fixed h-full overflow-scroll top-0 right-0 w-1/3 bg-white flex flex-col px-8 py-12 z-20 rounded-l-xl">
        <div className="mb-6 border-gray-300 border-b-[1px] p-4 ">
          <p className="text-2xl uppercase">Your makeup kit</p>
        </div>
        <div className="flex flex-col gap-4 divide-y-2">
          {likedCards.map((card) => (
            <div key={card.id} className="flex gap-5 pt-3">
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
