import { observer } from "mobx-react-lite";
import { Card, List, Image } from "antd";
import { LikeOutlined, LikeFilled, DeleteOutlined } from "@ant-design/icons";
import store, { Card as infoCard } from "./Store";
import Placeholder from "./placeholder.jpg";

const ItemCard = observer(() => {
  const { Meta } = Card;

  return (
    <div className="container_list">
      <List
        grid={{
          gutter: 16,
        }}
        itemLayout="horizontal"
        locale={{ emptyText: "No products found" }}
        dataSource={store.shownCards}
        pagination={{
          defaultPageSize: 6,
          position: "top",
          hideOnSinglePage: true,
          size: "small",
          style: {
            marginBottom: "5px",
          },
        }}
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
                margin: "0px",
              }}
              bodyStyle={{
                backgroundColor: "rgb(216, 205, 208, 0.2)",
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
                style={{ height: 80, fontSize: "12px", paddingTop: "auto" }}
              />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
});

export default ItemCard;
