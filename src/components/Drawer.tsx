import { Drawer as DrawerEl, List, Image } from "antd";
import { DeleteOutlined, CloseOutlined } from "@ant-design/icons";
import store, { Card as infoCard } from "../Store";
import { observer } from "mobx-react-lite";

const Drawer = ({
  showLiked,
  setShowLiked,
}: {
  showLiked: boolean;
  setShowLiked: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <DrawerEl
      open={showLiked}
      onClose={() => setShowLiked(false)}
      footer={null}
      closable={true}
      title="Your makeup kit"
      placement="left"
      closeIcon={null}
      extra={<CloseOutlined key="close" onClick={() => setShowLiked(false)} />}
    >
      <List
        itemLayout="horizontal"
        locale={{ emptyText: "Empty" }}
        dataSource={store.likedCards}
        size="small"
        renderItem={(card: infoCard) => (
          <List.Item
            actions={[
              <DeleteOutlined
                key="delete"
                onClick={() => {
                  store.removeCard(card.id);
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
              title={card.product}
              description={card.name}
            />
          </List.Item>
        )}
      />
    </DrawerEl>
  );
};

export default observer(Drawer);
