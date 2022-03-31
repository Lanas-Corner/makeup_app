import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Card, List, Avatar } from "antd";
import { LikeOutlined, LikeFilled, DeleteOutlined } from "@ant-design/icons";
import store, { Card as infoCard } from "./Store";

const ItemCard = observer(() => {
  const { Meta } = Card;
  const [showLiked, setShowLiked] = useState(false);

  return (
    <>
      <div className="container_menu">
        <p color="#1c5c34" onClick={() => setShowLiked(!showLiked)}>
          {showLiked ? "Select makeup products" : "Show my makeup kit"}
        </p>
      </div>
      <div className="container_list">
        <List
          grid={{ gutter: 1, column: 4 }}
          itemLayout="horizontal"
          size="small"
          locale={{ emptyText: "No makeup products found" }}
          dataSource={showLiked ? store.likedCards : store.cards}
          pagination={{
            pageSize: 4,
            position: "top",
            hideOnSinglePage: true,
          }}
          renderItem={(card: infoCard) => (
            <List.Item>
              <Card
                className="card_item"
                key={card.id}
                style={{ width: 200, height: 370 }}
                cover={<img height="200" alt="product" src={card.image_link} />}
                actions={[
                  !card.isLiked ? (
                    <LikeOutlined
                      key="notLiked"
                      onClick={() => {
                        store.toLike(card.id);
                      }}
                    />
                  ) : (
                    <LikeFilled
                      key="isLiked"
                      style={{ color: "red" }}
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
                  />,
                ]}
                hoverable
              >
                <Meta
                  title={card.brand}
                  description={card.name}
                  style={{ height: 100 }}
                />
              </Card>
            </List.Item>
          )}
        />
      </div>
    </>
  );
});

export default ItemCard;
