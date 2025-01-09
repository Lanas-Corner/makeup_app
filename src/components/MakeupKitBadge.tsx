import ShoppingBag from "../images/shoppingbag.png";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MakeupKitBadge = ({
  setIsDrawerOpen,
}: {
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { likedCards } = useContext(AppContext);
  return (
    <div
      className="relative cursor-pointer"
      onClick={() => setIsDrawerOpen(true)}
    >
      <img src={ShoppingBag} alt="shopping bag" width={30} height={30} />
      <p className="absolute -top-3 -right-5 font-medium bg-black text-white py-[2px] px-2 rounded-full text-s">
        {likedCards.length}
      </p>
    </div>
  );
};

export default MakeupKitBadge;
