import { useState } from "react";
import { Form, Select, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import store from "./Store";
import FormItem from "antd/lib/form/FormItem";

function SearchForm() {
  const [form] = Form.useForm();
  const { Option } = Select;
  const [brand, setBrand] = useState("");
  const [product, setProduct] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [showNoResult, setShowNoResult] = useState(false);
  const [showError, setShowError] = useState(false);

  return (
    <div className="container_search">
      <div className="container_text">
        <p className="text">
          Search makeup products by brand name and product type
        </p>
      </div>
      <div className="container_form">
        <Form
          name="basic"
          className="form"
          form={form}
          layout="vertical"
          style={{ backgroundColor: "#f5d742" }}
        >
          <FormItem name="product" style={{ color: "#1c5c34", width: "100%" }}>
            <Select
              showSearch
              placeholder="Select a product type"
              optionFilterProp="children"
              style={{ width: "180px", color: "#1c5c34" }}
              onChange={(val) => {
                setProduct(val);
              }}
              disabled={isFetching}
            >
              <Option value=""> </Option>
              <Option value="blush">blush</Option>
              <Option value="bronzer">bronzer</Option>
              <Option value="eyebrow">eyebrow</Option>
              <Option value="eyeliner">eyeliner</Option>
              <Option value="eyeshadow">eyeshadow</Option>
              <Option value="foundation">foundation</Option>
              <Option value="lip_liner">lip liner</Option>
              <Option value="lipstick">lipstick</Option>
              <Option value="mascara">mascara</Option>
              <Option value="nail polish">nail polish</Option>
            </Select>
          </FormItem>
          <FormItem name="brand">
            <Select
              showSearch
              placeholder="Select brand"
              optionFilterProp="children"
              style={{ width: "180px" }}
              onChange={(val) => {
                setBrand(val);
              }}
              disabled={isFetching}
            >
              <Option value=""> </Option>
              <Option value="almay">almay</Option>
              <Option value="alva">alva</Option>
              <Option value="anna sui">anna sui</Option>
              <Option value="annabelle">annabelle</Option>
              <Option value="benefit">benefit</Option>
              <Option value="boosh">boosh</Option>
              <Option value="burt's bees">burt's bees</Option>
              <Option value="butter london">butter london</Option>
              <Option value="c'est moi">c'est moi</Option>
              <Option value="cargo cosmetics">cargo cosmetics</Option>
              <Option value="china glaze">china glaze</Option>
              <Option value="clinique">clinique</Option>
              <Option value="coastal classic creation">
                coastal classic creation
              </Option>
              <Option value="colourpop">colourpop</Option>
              <Option value="covergirl">covergirl</Option>
              <Option value="dalish">dalish</Option>
              <Option value="deciem">deciem</Option>
              <Option value="dior">dior</Option>
              <Option value="dr. hauschka">dr. hauschka</Option>
              <Option value="e.l.f.">e.l.f.</Option>
              <Option value="essie">essie</Option>
              <Option value="fenty">fenty</Option>
              <Option value="glossier">glossier</Option>
              <Option value="green people">green people</Option>
              <Option value="iman">iman</Option>
              <Option value="l'oreal">l'oreal</Option>
              <Option value="lotus cosmetics usa">lotus cosmetics usa</Option>
              <Option value="maia's mineral galaxy">
                maia's mineral galaxy
              </Option>
              <Option value="marcelle">marcelle</Option>
              <Option value="marienatie">marienatie</Option>
              <Option value="milani">milani</Option>
              <Option value="mineral fusion">mineral fusion</Option>
              <Option value="misa">misa</Option>
              <Option value="mistura">mistura</Option>
              <Option value="moov">moov</Option>
              <Option value="nudus">nuduse</Option>
              <Option value="nyx">nyx</Option>
              <Option value="orly">orly</Option>
              <Option value="pacifica">pacifica</Option>
              <Option value="penny lane organics">penny lane organics</Option>
              <Option value="physicians formula">physicians formula</Option>
              <Option value="piggy paint">piggy paint</Option>
              <Option value="pure anada">pure anada</Option>
              <Option value="rejuva minerals">rejuva minerals</Option>
              <Option value="maybelline">revlon</Option>
              <Option value="sally b's skin yummies">
                sally b's skin yummies
              </Option>
              <Option value="sante">sante</Option>
              <Option value="sinful colours">sinful colours</Option>
              <Option value="smashbox">smashbox</Option>
              <Option value="stila">stila</Option>
              <Option value="suncoat">suncoat</Option>
              <Option value="w3llpeople">w3llpeople</Option>
              <Option value="wet n wild">wet n wild</Option>
              <Option value="zorah">zorah</Option>
              <Option value="zorah biocosmetiques">zorah biocosmetiques</Option>
            </Select>
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              style={
                brand === "" && product === ""
                  ? {
                      background: "#FCEC9F",
                      border: "0.5px solid #1c5c34",
                      width: "100%",
                    }
                  : {
                      background: "#7cb45c",
                      border: "0.5px solid #FCEC9F",
                      width: "100%",
                    }
              }
              htmlType="submit"
              icon={<SearchOutlined />}
              disabled={
                (brand === "" && product === "") || isFetching ? true : false
              }
              onClick={async () => {
                setIsFetching(true);
                setShowNoResult(false);
                setShowError(false);
                const res = await store.getCards(product, brand);
                setIsFetching(false);
                if (res === "Ошибка") {
                  setShowError(true);
                } else if (store.cards.length === 0) {
                  setShowNoResult(true);
                }
              }}
            >
              Search
            </Button>
          </FormItem>
        </Form>
      </div>
      <div className="container_text">
        <p className="text">
          {showNoResult ? "No such products found. Try another option." : ""}
        </p>
      </div>
      <div className="container_text">
        <p className="text">{showError ? "Connection error occured." : ""}</p>
      </div>
    </div>
  );
}

export default SearchForm;
