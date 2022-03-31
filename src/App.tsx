import "./App.css";
import { Layout } from "antd";
import ItemCard from "./ItemCard";
import SearchForm from "./SearchForm";

function App() {
  const { Header, Content, Sider } = Layout;

  return (
    <Layout className="layout">
      <Header className="header">
        <p className="header_text">Create your makeup kit!</p>
      </Header>
      <Layout>
        <Sider className="sider">
          <SearchForm />
        </Sider>
        <Content className="content">
          <ItemCard />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
