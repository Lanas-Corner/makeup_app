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
    <Flex justify="flex-start" style={{ height: "calc(100vh - 120px)" }}>
      <img src={MakeupBag} height={630} alt="bag" />
      <Flex justify="center" style={{ margin: "0 auto" }}>
        {/* <List
          header={
            <Flex vertical>
              <Title style={TitleStyle}>{articleTitle}</Title>
              <Text>{articleText}</Text>
            </Flex>
          }
          dataSource={tips}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={<div>{index + 1}</div>}
                title={item.title}
                description={item.description}
              ></List.Item.Meta>
            </List.Item>
          )}
        /> */}
      </Flex>
    </Flex>
  );
};

export default MainView;
