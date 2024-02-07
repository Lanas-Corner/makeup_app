import { Drawer as DrawerEl, List, Image, Card } from "antd";
import {
  LikeOutlined,
  LikeFilled,
  DeleteOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import store, { Card as infoCard } from "../Store";
import Placeholder from "../images/placeholder.jpg";

const Drawer = ({
  showLiked,
  setShowLiked,
}: {
  showLiked: boolean;
  setShowLiked: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { Meta } = Card;
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
      <div className="modal_container">
        <List
          grid={{
            gutter: 16,
          }}
          style={{ margin: "auto" }}
          itemLayout="horizontal"
          locale={{ emptyText: "your makeup kit is empty" }}
          dataSource={store.likedCards}
          pagination={{
            defaultPageSize: 4,
            position: "top",
            hideOnSinglePage: true,
            size: "small",
            style: {
              marginBottom: "5px",
            },
          }}
          size="small"
          renderItem={(card: infoCard) => (
            <List.Item>
              <Card
                className="card_item"
                key={card.id}
                style={{
                  width: 150,
                  height: 250,
                  textAlign: "center",
                  color: "#4f3720",
                  border: "0.3px solid rgb(79, 55, 32, 0.3)",
                }}
                cover={
                  <Image
                    height="75px"
                    width="80px"
                    alt="product"
                    src={card.image_link}
                    style={{ margin: "1px auto" }}
                    placeholder={
                      <Image
                        preview={false}
                        src={Placeholder}
                        height="75px"
                        width="80px"
                        alt="placeholder"
                      />
                    }
                  />
                }
                actions={[
                  !card.isLiked ? (
                    <LikeOutlined
                      key="notLiked"
                      onClick={() => {
                        store.toLike(card.id);
                      }}
                      style={{
                        color: "#4f3720",
                        fontSize: "14px",
                      }}
                    />
                  ) : (
                    <LikeFilled
                      key="isLiked"
                      style={{ color: "#4f3720", fontSize: "14px" }}
                      onClick={() => {
                        store.toUnlike(card.id);
                      }}
                    />
                  ),
                  <DeleteOutlined
                    key="delete"
                    onClick={() => {
                      store.removeCard(card.id);
                    }}
                    style={{ color: "#4f3720", fontSize: "14px" }}
                  />,
                ]}
                hoverable
              >
                <Meta
                  description={card.name}
                  style={{
                    height: 80,
                    fontSize: "12px",
                  }}
                />
              </Card>
            </List.Item>
          )}
        />
      </div>
    </DrawerEl>
  );
};

export default Drawer;
