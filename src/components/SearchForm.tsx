import { useState } from "react";
import { Form, Select, Button, Card, Badge, Modal, List, Image } from "antd";
import { LikeOutlined, LikeFilled, DeleteOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";
import FormItem from "antd/lib/form/FormItem";
import logo from "../images/makeupkit.jpg";
import { observer } from "mobx-react-lite";
import ItemCard from "./ItemCard";
import { nanoid } from "nanoid";
import Placeholder from "../images/placeholder.jpg";
import store, { Card as infoCard } from "../Store";

const SearchForm = observer(() => {
  const [form] = Form.useForm();
  const { Option } = Select;
  const { Meta } = Card;
  const [brand, setBrand] = useState("");
  const [product, setProduct] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [showLiked, setShowLiked] = useState(false);

  let productList = store.products.map((card: string) => {
    return (
      <Option value={card} key={nanoid()} className="option">
        {card}
      </Option>
    );
  });

  return (
    <>
      <div className="container_search">
        <div className="container_kit" onClick={() => setShowLiked(true)}>
          <Badge count={store.likedCards.length} color="#4f3720">
            <Card
              hoverable
              cover={
                <img
                  alt="makeup_kit"
                  src={logo}
                  style={{
                    maxHeight: "100px",
                    maxWidth: "70px",
                    margin: "7px auto",
                    paddingTop: "5px",
                  }}
                />
              }
              style={{
                width: "145px",
                backgroundColor: "transparent",
              }}
              size="small"
              bordered={false}
            >
              <Meta
                description={
                  store.likedCards.length === 0
                    ? "makeup kit is empty"
                    : "show makeup kit"
                }
                style={{
                  textAlign: "center",
                  color: "#542e11",
                  fontSize: "12px",
                }}
              />
            </Card>
          </Badge>
        </div>
        <div className="container_searchform">
          <div className="container_text">
            <p>search makeup products by brand name and product type</p>
          </div>
          <div className="container_form">
            <Form
              name="basic"
              className="form"
              form={form}
              layout="inline"
              size="middle"
              onValuesChange={(val, all) => {
                if (val.brand) {
                  form.setFieldsValue({
                    ["product"]: "select a product type",
                  });
                }
              }}
            >
              <FormItem name="brand" style={{ padding: "10px 15px" }}>
                <Select
                  showSearch
                  placeholder="select brand"
                  optionFilterProp="children"
                  onChange={(val) => {
                    setBrand(val);
                    setProduct("");
                    store.disable();
                    store.getCards(val);
                  }}
                  disabled={isFetching || store.isDisabled}
                  style={{
                    width: "200px",
                    textAlign: "center",
                    border: "0.5px solid #4F3720",
                  }}
                >
                  <Option value="almay" className="option">
                    almay
                  </Option>
                  <Option value="alva" className="option">
                    alva
                  </Option>
                  <Option value="anna sui" className="option">
                    anna sui
                  </Option>
                  <Option value="annabelle" className="option">
                    annabelle
                  </Option>
                  <Option value="benefit" className="option">
                    benefit
                  </Option>
                  <Option value="boosh" className="option">
                    boosh
                  </Option>
                  <Option value="burt's bees" className="option">
                    burt's bees
                  </Option>
                  <Option value="butter london" className="option">
                    butter london
                  </Option>
                  <Option value="c'est moi" className="option">
                    c'est moi
                  </Option>
                  <Option value="cargo cosmetics" className="option">
                    cargo cosmetics
                  </Option>
                  <Option value="china glaze" className="option">
                    china glaze
                  </Option>
                  <Option value="clinique" className="option">
                    clinique
                  </Option>
                  <Option value="coastal classic creation" className="option">
                    coastal classic creation
                  </Option>
                  <Option value="colourpop" className="option">
                    colourpop
                  </Option>
                  <Option value="covergirl" className="option">
                    covergirl
                  </Option>
                  <Option value="dalish" className="option">
                    dalish
                  </Option>
                  <Option value="deciem" className="option">
                    deciem
                  </Option>
                  <Option value="dior" className="option">
                    dior
                  </Option>
                  <Option value="dr. hauschka" className="option">
                    dr. hauschka
                  </Option>
                  <Option value="e.l.f." className="option">
                    e.l.f.
                  </Option>
                  <Option value="essie" className="option">
                    essie
                  </Option>
                  <Option value="fenty" className="option">
                    fenty
                  </Option>
                  <Option value="glossier" className="option">
                    glossier
                  </Option>
                  <Option value="green people" className="option">
                    green people
                  </Option>
                  <Option value="iman" className="option">
                    iman
                  </Option>
                  <Option value="l'oreal" className="option">
                    l'oreal
                  </Option>
                  <Option value="lotus cosmetics usa" className="option">
                    lotus cosmetics usa
                  </Option>
                  <Option value="maia's mineral galaxy" className="option">
                    maia's mineral galaxy
                  </Option>
                  <Option value="marcelle" className="option">
                    marcelle
                  </Option>
                  <Option value="marienatie" className="option">
                    marienatie
                  </Option>
                  <Option value="milani" className="option">
                    milani
                  </Option>
                  <Option value="mineral fusion" className="option">
                    mineral fusion
                  </Option>
                  <Option value="misa" className="option">
                    misa
                  </Option>
                  <Option value="mistura" className="option">
                    mistura
                  </Option>
                  <Option value="moov" className="option">
                    moov
                  </Option>
                  <Option value="nudus" className="option">
                    nuduse
                  </Option>
                  <Option value="nyx" className="option">
                    nyx
                  </Option>
                  <Option value="orly" className="option">
                    orly
                  </Option>
                  <Option value="pacifica" className="option">
                    pacifica
                  </Option>
                  <Option value="penny lane organics" className="option">
                    penny lane organics
                  </Option>
                  <Option value="physicians formula" className="option">
                    physicians formula
                  </Option>
                  <Option value="piggy paint" className="option">
                    piggy paint
                  </Option>
                  <Option value="pure anada" className="option">
                    pure anada
                  </Option>
                  <Option value="rejuva minerals" className="option">
                    rejuva minerals
                  </Option>
                  <Option value="maybelline" className="option">
                    revlon
                  </Option>
                  <Option value="sally b's skin yummies" className="option">
                    sally b's skin yummies
                  </Option>
                  <Option value="sante" className="option">
                    sante
                  </Option>
                  <Option value="sinful colours" className="option">
                    sinful colours
                  </Option>
                  <Option value="smashbox" className="option">
                    smashbox
                  </Option>
                  <Option value="stila" className="option">
                    stila
                  </Option>
                  <Option value="suncoat" className="option">
                    suncoat
                  </Option>
                  <Option value="w3llpeople" className="option">
                    w3llpeople
                  </Option>
                  <Option value="wet n wild" className="option">
                    wet n wild
                  </Option>
                  <Option value="zorah" className="option">
                    zorah
                  </Option>
                  <Option value="zorah biocosmetiques" className="option">
                    zorah biocosmetiques
                  </Option>
                </Select>
              </FormItem>
              <FormItem name="product" style={{ padding: "10px 15px" }}>
                <Select
                  showSearch
                  placeholder="select a product type"
                  optionFilterProp="children"
                  onChange={(val) => {
                    setProduct(val);
                  }}
                  disabled={store.isDisabled}
                  style={{
                    width: "200px",
                    textAlign: "center",
                    border: "0.5px solid #4F3720",
                  }}
                >
                  {productList}
                </Select>
              </FormItem>
              <FormItem style={{ padding: "10px 15px" }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<SearchOutlined />}
                  disabled={
                    brand === "" ||
                    product === "" ||
                    isFetching ||
                    store.isDisabled
                      ? true
                      : false
                  }
                  onClick={async () => {
                    setIsFetching(true);
                    store.showCards(product);
                    setIsFetching(false);
                  }}
                  style={
                    store.isDisabled || brand === "" || product === ""
                      ? { backgroundColor: "white" }
                      : {
                          backgroundColor: "#4f3720",
                          border: "0.5px solid #4f3720",
                          fontFamily: "QuicksandVariableFont_wght",
                          letterSpacing: "0.5px",
                        }
                  }
                >
                  search
                </Button>
              </FormItem>
            </Form>
          </div>
          {store.isError ? (
            <p className="text">"Connection error occured."</p>
          ) : (
            <></>
          )}
        </div>
      </div>
      <ItemCard />
      <Modal
        visible={showLiked}
        afterClose={() => setShowLiked(false)}
        footer={null}
        closable={false}
        centered={true}
        width="875px"
      >
        <div className="modal_container">
          <p className="container_text">Your favourite makeup products</p>
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
          <Button
            onClick={() => setShowLiked(false)}
            style={{
              backgroundColor: "#4f3720",
              border: "0.5px solid #4f3720",
              color: "white",
              width: "150px",
              marginTop: "30px",
              fontFamily: "QuicksandVariableFont_wght",
              letterSpacing: "1px",
              fontWeight: "bold",
            }}
          >
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
});

export default SearchForm;
