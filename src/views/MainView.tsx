import { Flex, List, Typography } from "antd";
import MakeupBag from "../images/makeupbag.jpg";
import { articleText, articleTitle, tips } from "../const/makeupKitTips";

const { Title, Text } = Typography;

const TitleStyle: React.CSSProperties = {
  color: "#3f3724ff",
  fontSize: "24px",
  fontWeight: 500,
};

const MainView = () => {
  return (
    <Flex justify="flex-start" style={{ height: "calc(100vh - 120px)" }}></Flex>
  );
};

export default MainView;
