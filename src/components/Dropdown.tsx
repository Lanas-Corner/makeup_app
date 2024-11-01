import {
  Dropdown as DropdownAntd,
  Flex,
  Typography,
  Divider,
  MenuProps,
} from "antd";
import { nanoid } from "nanoid";
import React, { CSSProperties } from "react";
import {
  ArticleType,
  ProductGroup,
  ProductType,
} from "../const/detailedProductTypes";

const { Text } = Typography;

const DropdownOverlayStyle: CSSProperties = {
  maxWidth: "1440px",
  width: "100%",
  left: 0,
  right: 0,
  top: 120,
  borderRadius: 0,
  color: "red",
};

const DropdownContainerStyle: CSSProperties = {
  maxWidth: "1440px",
  width: "100%",
  backgroundColor: "#a18e88",
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

const Dropdown = ({
  groupName,
  group,
  setSearchParameter,
}: {
  groupName: string;
  group: ProductGroup;
  setSearchParameter: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const menuItems: MenuProps["items"] = group.products.map(
    (product: ProductType) => ({
      key: product.key,
      label: <Text>{product.name}</Text>,
      onClick: () => setSearchParameter(product.name),
    })
  );
  return (
    <DropdownAntd
      menu={{ items: menuItems }}
      overlayStyle={DropdownOverlayStyle}
      dropdownRender={(menu) => (
        <Flex style={DropdownContainerStyle}>
          <Flex vertical>
            <Text style={TitleStyle}>{group.title}</Text>
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
          {group.articles.map((article: ArticleType) => (
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
          ))}
        </Flex>
      )}
    >
      <Text>{groupName}</Text>
    </DropdownAntd>
  );
};

export default Dropdown;
