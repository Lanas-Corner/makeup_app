import "./App.css";
import { Layout } from "antd";
import AppContextProvider from "./context/AppContext";
import AntdConfig from "./style/Config";
import { LayoutStyle, ContentStyle } from "./style/styles";
import Drawer from "./components/Drawer";
import { useContext, useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import MainView from "./views/MainView";
import { AppContext } from "./context/AppContext";
import ProductView from "./views/ProductView";

const { Header: HeaderElement, Content } = Layout;

function App() {
  const [showLiked, setShowLiked] = useState(false);
  const { shownCards, setShownCards } = useContext(AppContext);
  return (
    <AppContextProvider>
      <AntdConfig>
        <Layout style={LayoutStyle}>
          <HeaderElement>
            <Header setShowLiked={setShowLiked} />
          </HeaderElement>
          <Content style={ContentStyle}>
            <Menu />
            {shownCards.length === 0 ? <MainView /> : <ProductView />}
          </Content>
          <Drawer showLiked={showLiked} setShowLiked={setShowLiked} />
        </Layout>
      </AntdConfig>
    </AppContextProvider>
  );
}

export default App;
