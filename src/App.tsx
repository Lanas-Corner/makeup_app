import "./App.css";
import { Layout } from "antd";
import SearchForm from "./components/SearchForm";
import AppContextProvider from "./context/AppContext";
import AntdConfig from "./style/Config";
import { LayoutStyle, ContentStyle } from "./style/styles";
import ItemCard from "./components/ItemCard";
import Drawer from "./components/Drawer";
import { useState } from "react";
import Header from "./components/Header";

const { Header: HeaderElement, Content } = Layout;

function App() {
  const [showLiked, setShowLiked] = useState(false);
  return (
    <AppContextProvider>
      <AntdConfig>
        <Layout style={LayoutStyle}>
          <HeaderElement>
            <Header setShowLiked={setShowLiked} />
          </HeaderElement>
          <Content style={ContentStyle}>
            <SearchForm />
            <ItemCard />
          </Content>
          <Drawer showLiked={showLiked} setShowLiked={setShowLiked} />
        </Layout>
      </AntdConfig>
    </AppContextProvider>
  );
}

export default App;
