import { useContext, useState } from "react";
import { Form, Select } from "antd";
import FormItem from "antd/lib/form/FormItem";
import { nanoid } from "nanoid";
import { AppContext } from "../context/AppContext";
import { brandNames } from "../const/brandList";

const SearchForm = () => {
  const [form] = Form.useForm();
  const { Option } = Select;
  const [brand, setBrand] = useState("");
  const [product, setProduct] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const {
    products,
    getCards,
    showCards,
    setShownCards,
    disable,
    isDisabled,
    isError,
  } = useContext(AppContext);

  let productList = products.map((card: string) => {
    return (
      <Option value={card} key={nanoid()} className="option">
        {card}
      </Option>
    );
  });

  return (
    <div className="container_search">
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
                value={brand}
                showSearch
                placeholder="select brand"
                optionFilterProp="children"
                onChange={(val) => {
                  setShownCards([]);
                  setBrand(val);
                  setProduct("");
                  disable();
                  getCards(val);
                }}
                disabled={isFetching || isDisabled}
                style={{
                  width: "200px",
                  textAlign: "center",
                }}
              >
                {brandNames.map((brand) => (
                  <Option value={brand} className="option" key={brand}>
                    {brand}
                  </Option>
                ))}
              </Select>
            </FormItem>
            <FormItem name="product" style={{ padding: "10px 15px" }}>
              <Select
                value={product}
                showSearch
                placeholder="select a product type"
                optionFilterProp="children"
                onChange={(val) => {
                  setProduct(product);
                  setIsFetching(true);
                  showCards(val);
                  setIsFetching(false);
                }}
                disabled={isDisabled}
                style={{
                  width: "200px",
                  textAlign: "center",
                }}
              >
                {productList}
              </Select>
            </FormItem>
          </Form>
        </div>
        {isError ? <p className="text">"Connection error occured."</p> : <></>}
      </div>
    </div>
  );
};

export default SearchForm;
