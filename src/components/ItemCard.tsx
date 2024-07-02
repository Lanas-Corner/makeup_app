import { Card, List, Image } from "antd";
import { LikeOutlined, LikeFilled, DeleteOutlined } from "@ant-design/icons";
import Placeholder from "../images/placeholder.jpg";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Card as infoCard } from "../hooks/useConfig";

const ItemCard = () => {
  const { shownCards, addCard, removeCard, removeLikedCard, isLiked } =
    useContext(AppContext);

  return shownCards.length > 0 ? (
    <div style={{ maxHeight: "80vh", overflow: "scroll" }}>
      <List
        grid={{
          column: 3,
        }}
        locale={{ emptyText: "No products found" }}
        dataSource={shownCards}
        renderItem={(card: infoCard) => (
          <List.Item>
            <Card
              className="card_item"
              key={card.id}
              style={{
                textAlign: "center",
                color: "#4f3720",
                border: "0.3px solid rgb(79, 55, 32, 0.3)",
                margin: "0px",
              }}
              cover={
                <Image
                  alt="product"
                  src={card.image_link || Placeholder}
                  style={{ margin: "1px auto" }}
                  loading="eager"
                  height="255px"
                  // width="80px"
                  placeholder={
                    <Image
                      preview={false}
                      src={Placeholder}
                      height="255px"
                      // width="380px"
                      alt="placeholder"
                    />
                  }
                />
              }
              actions={[
                !isLiked(card) ? (
                  <LikeOutlined
                    key="notLiked"
                    onClick={() => {
                      addCard(card);
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
                      removeLikedCard(card);
                    }}
                  />
                ),
                <DeleteOutlined
                  key="delete"
                  onClick={() => {
                    removeCard(card);
                  }}
                  style={{ color: "#4f3720", fontSize: "14px" }}
                />,
              ]}
              hoverable
            >
              <List.Item.Meta
                description={card.name}
                style={{ height: 80, fontSize: "14px", paddingTop: "auto" }}
              />
            </Card>
          </List.Item>
        )}
      />
    </div>
  ) : null;
};

export default ItemCard;
