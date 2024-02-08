import "./App.css";
import { Layout } from "antd";
import SearchForm from "./components/SearchForm";
import { ConfigProvider } from "antd";
import AppContextProvider from "./context/AppContext";

function App() {
  const { Header, Content } = Layout;

  return (
    <AppContextProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#4f3720",
            controlOutlineWidth: 0,
          },
          components: {
            List: {
              descriptionFontSize: 12,
            },
          },
        }}
      >
        <Layout className="layout">
          <Header className="header">
            <p className="header_text">Create your makeup kit!</p>
          </Header>
          <Content className="content">
            <SearchForm />
          </Content>
        </Layout>
      </ConfigProvider>
    </AppContextProvider>
  );
}

export default App;
