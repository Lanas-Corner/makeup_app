import { Breadcrumb, Flex, Button } from "antd";
import ItemCard from "../components/ItemCard";

const ProductView = ({
  searchParameter,
  setSearchParameter,
}: {
  searchParameter: string;
  setSearchParameter: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Flex vertical>
      <Breadcrumb>
        <Breadcrumb.Item onClick={() => setSearchParameter("")}>
          <Button type="text">Home</Button>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{searchParameter}</Breadcrumb.Item>
      </Breadcrumb>
      <ItemCard />
    </Flex>
  );
};

export default ProductView;
