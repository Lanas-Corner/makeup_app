import { Flex } from "antd";
import { Col, Row } from "antd";
import React from "react";
import { detailedProductTypes } from "../const/detailedProductTypes";
import { nanoid } from "nanoid";
import Dropdown from "./Dropdown";

const Menu = ({
  setSearchParameter,
}: {
  setSearchParameter: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const dropdownList = Object.entries(detailedProductTypes).map(
    ([key, value]) => {
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
            groupName={key}
            group={value}
            setSearchParameter={setSearchParameter}
          />
        </Col>
      );
    }
  );

  return (
    <Flex
      justify="center"
      style={{ background: "#a18e88", height: "40px" }}
      align="center"
    >
      <Row gutter={16} style={{ height: "100%" }} align={"middle"}>
        {dropdownList}
      </Row>
    </Flex>
  );
};

export default Menu;
