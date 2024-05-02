import { Divider, Dropdown, Flex, MenuProps, Space, Typography } from "antd";
import { Col, Row } from "antd";
import React, { CSSProperties } from "react";
import {
  ArticleType,
  ProductType,
  detailedProductTypes,
} from "../const/detailedProductTypes";
import { nanoid } from "nanoid";

const { Text } = Typography;

const DropdownOverlayStyle: CSSProperties = {
  width: "100vw",
  position: "fixed",
  backgroundColor: "#a18e88",
  right: 0,
  top: 120,
  borderRadius: 0,
  color: "red",
};

const DropdownContainerStyle: CSSProperties = {
  width: "100vw",
  position: "fixed",
  right: 0,
  backgroundColor: "#a18e88",
  borderRadius: 0,
  minHeight: "250px",
  justifyContent: "center",
  padding: "20px",
};

const menuStyle: CSSProperties = {
  boxShadow: "none",
  backgroundColor: "#a18e88",
  borderRadius: 0,
  padding: "0 30px",
};

const TitleStyle: CSSProperties = {
  fontSize: "14px",
  textTransform: "capitalize",
  fontWeight: 600,
  marginLeft: "30px",
};

const Menu = () => {
  const dropdown = Object.entries(detailedProductTypes).map(([key, value]) => {
    const menuItems: MenuProps["items"] = value.products.map(
      (product: ProductType) => ({
        key: product.key,
        label: <Text>{product.name}</Text>,
      })
    );

    const articles: JSX.Element[] = value.articles.map(
      (article: ArticleType) => (
        <Flex vertical key={nanoid()}>
          <img
            src={article.image}
            alt={article.title}
            width={250}
            style={{ marginBottom: 10 }}
          />
          <Text style={{ fontWeight: 600 }}>{article.title}</Text>
          <Text>{article.paragraph}</Text>
        </Flex>
      )
    );

    return (
      <Col
        key={nanoid()}
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <Dropdown
          menu={{ items: menuItems }}
          overlayStyle={DropdownOverlayStyle}
          dropdownRender={(menu) => (
            <Flex style={DropdownContainerStyle}>
              <Flex vertical>
                <Text style={TitleStyle}>{value.title}</Text>
                {React.cloneElement(menu as React.ReactElement, {
                  style: menuStyle,
                })}
              </Flex>
              <Divider
                type="vertical"
                style={{
                  height: "150px",
                  color: "#3f3724",
                  margin: "0 100px 0 10px ",
                }}
              />
              {articles}
            </Flex>
          )}
        >
          <Text>{key}</Text>
        </Dropdown>
      </Col>
    );
  });

  return (
    <Flex
      justify="center"
      style={{ background: "#a18e88", height: "40px" }}
      align="center"
    >
      <Row gutter={16} style={{ height: "100%" }} align={"middle"}>
        {dropdown}
      </Row>
    </Flex>
  );
};

export default React.memo(Menu);
