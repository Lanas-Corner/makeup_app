import ShoppingBag from "../images/shoppingbag.png";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useMediaQuery } from "../hooks/useMediaQuery";

const MakeupKitBadge = ({
  handleDrawerOpen,
}: {
  handleDrawerOpen: () => void;
}) => {
  const { likedCards } = useContext(AppContext);
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <div className="relative cursor-pointer" onClick={handleDrawerOpen}>
      <img
        src={ShoppingBag}
        alt="shopping bag"
        width={!isMobile ? 30 : 50}
        height={!isMobile ? 30 : 50}
      />
      <p className="absolute -top-3 -right-5 font-medium bg-black text-white py-[2px] px-2 rounded-full text-s">
        {likedCards.length}
      </p>
    </div>
  );
};

export default MakeupKitBadge;
