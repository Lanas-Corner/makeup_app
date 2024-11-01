import { Badge } from "antd";
import ShoppingBag from "../images/shoppingbag.png";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MakeupKitBadge = ({
  setShowLiked,
}: {
  setShowLiked: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { likedCards } = useContext(AppContext);
  return (
    <Badge
      count={likedCards.length}
      color="#908863"
      title="Makeup kit"
      style={{ color: "#0C0D09", boxShadow: "0 0 0 1px #0C0D09" }}
    >
      <img
        src={ShoppingBag}
        onClick={() => setShowLiked(true)}
        alt="shopping bag"
        width={30}
        height={30}
      />
    </Badge>
  );
};

export default MakeupKitBadge;
