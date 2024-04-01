import { Typography, Flex } from "antd";
import { HeaderTitleStyle } from "../style/styles";
import MakeupKitBadge from "./MakeupKitBadge";
const { Title } = Typography;
const Header = ({
  setShowLiked,
}: {
  setShowLiked: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Flex align="center">
      <MakeupKitBadge setShowLiked={setShowLiked} />
      <Title style={HeaderTitleStyle}>Create your makeup kit!</Title>
    </Flex>
  );
};

export default Header;
