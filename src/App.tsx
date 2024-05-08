import "./App.css";
import { Layout } from "antd";
import AppContextProvider from "./context/AppContext";
import AntdConfig from "./style/Config";
import { LayoutStyle, ContentStyle } from "./style/styles";
import Drawer from "./components/Drawer";
import { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import MainView from "./views/MainView";
import ProductView from "./views/ProductView";

const { Header: HeaderElement, Content } = Layout;

function App() {
  const [showLiked, setShowLiked] = useState(false);
  const [searchParameter, setSearchParameter] = useState("");

  return (
    <AppContextProvider>
      <AntdConfig>
        <Layout style={LayoutStyle}>
          <HeaderElement>
            <Header setShowLiked={setShowLiked} />
          </HeaderElement>
          <Content style={ContentStyle}>
            <Menu setSearchParameter={setSearchParameter} />
            {searchParameter === "" ? (
              <MainView />
            ) : (
              <ProductView
                searchParameter={searchParameter}
                setSearchParameter={setSearchParameter}
              />
            )}
          </Content>
          <Drawer showLiked={showLiked} setShowLiked={setShowLiked} />
        </Layout>
      </AntdConfig>
    </AppContextProvider>
  );
}

export default App;
