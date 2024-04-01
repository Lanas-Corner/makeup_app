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
    <Badge count={likedCards.length} color="#4f3720">
      <CarryOutOutlined
        style={{ fontSize: "30px" }}
        onClick={() => setShowLiked(true)}
      />
    </Badge>
  );
};

export default MakeupKitBadge;
