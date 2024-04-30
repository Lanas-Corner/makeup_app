import { Badge } from "antd";
import { CarryOutOutlined } from "@ant-design/icons";
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
      <CarryOutOutlined
        style={{ fontSize: "30px", color: "#908863" }}
        onClick={() => setShowLiked(true)}
      />
    </Badge>
  );
};

export default MakeupKitBadge;
