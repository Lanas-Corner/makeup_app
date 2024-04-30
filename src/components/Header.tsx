import { Typography, Flex } from "antd";
import { HeaderTitleStyle } from "../style/styles";
import MakeupKitBadge from "./MakeupKitBadge";
import SearchField from "./SearchField";

const { Title } = Typography;

const Header = ({
  setShowLiked,
}: {
  setShowLiked: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Flex align="center" style={{ height: "100%" }}>
      <MakeupKitBadge setShowLiked={setShowLiked} />
      <Title style={HeaderTitleStyle}>Create your makeup kit!</Title>
      <SearchField />
    </Flex>
  );
};

export default Header;
