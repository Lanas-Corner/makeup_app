import "./App.css";
import { Layout } from "antd";
import SearchForm from "./components/SearchForm";
import { Typography } from "antd";
import AppContextProvider from "./context/AppContext";
import AntdConfig from "./style/Config";
import { HeaderTitleStyle, LayoutStyle, ContentStyle } from "./style/styles";

const { Title } = Typography;
const { Header, Content } = Layout;

function App() {
  return (
    <AppContextProvider>
      <AntdConfig>
        <Layout style={LayoutStyle}>
          <Header>
            <Title style={HeaderTitleStyle}>Create your makeup kit!</Title>
          </Header>
          <Content style={ContentStyle}>
            <SearchForm />
          </Content>
        </Layout>
      </AntdConfig>
    </AppContextProvider>
  );
}

export default App;
