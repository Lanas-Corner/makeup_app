import { HeaderTitleStyle } from "../style/styles";
import MakeupKitBadge from "./MakeupKitBadge";
import SearchField from "./SearchField";

const Header = ({
  setShowLiked,
}: {
  setShowLiked: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <h1 style={HeaderTitleStyle}>Create your makeup kit!</h1>
      <SearchField />
      <MakeupKitBadge setShowLiked={setShowLiked} />
    </div>
  );
};

export default Header;
