import { Drawer as DrawerEl, List, Image } from "antd";
import { DeleteOutlined, CloseOutlined } from "@ant-design/icons";
import { Card as infoCard } from "../hooks/useConfig";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Drawer = ({
  showLiked,
  setShowLiked,
}: {
  showLiked: boolean;
  setShowLiked: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { likedCards, removeLikedCard } = useContext(AppContext);
  return (
    <DrawerEl
      open={showLiked}
      onClose={() => setShowLiked(false)}
      footer={null}
      closable={true}
      title="Your makeup kit"
      placement="left"
      closeIcon={<></>}
      extra={<CloseOutlined key="close" onClick={() => setShowLiked(false)} />}
    >
      <List
        itemLayout="horizontal"
        locale={{ emptyText: "Empty" }}
        dataSource={likedCards}
        size="small"
        renderItem={(card: infoCard) => (
          <List.Item
            actions={[
              <DeleteOutlined
                key="delete"
                onClick={() => {
                  removeLikedCard(card);
                }}
                style={{ color: "#4f3720", fontSize: "14px" }}
              />,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Image
                  src={card.image_link}
                  alt={card.name}
                  width={60}
                  height={60}
                />
              }
              title={card.product_type}
              description={card.name}
            />
          </List.Item>
        )}
      />
    </DrawerEl>
  );
};

export default Drawer;
