import { Breadcrumb, Flex, Button } from "antd";
import ItemCard from "../components/ItemCard";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { nanoid } from "nanoid";

const ProductView = ({
  searchParameter,
  setSearchParameter,
}: {
  searchParameter: string;
  setSearchParameter: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { getCards } = useContext(AppContext);

  useEffect(() => {
    if (searchParameter) {
      getCards("", searchParameter);
    }
  }, [searchParameter]);

  return (
    <Flex vertical style={{ margin: "30px" }}>
      <Breadcrumb
        items={[
          {
            key: "1",
            title: <Button type="text">Home</Button>,
            onClick: () => setSearchParameter(""),
          },
          {
            key: "2",
            title: (
              <Button type="text" disabled>
                {searchParameter}
              </Button>
            ),
          },
        ]}
      />
      <ItemCard />
    </Flex>
  );
};

export default ProductView;
