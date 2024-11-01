import "./App.css";
import AppContextProvider from "./context/AppContext";
import Drawer from "./components/Drawer";
import { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import MainView from "./views/MainView";
import ProductView from "./views/ProductView";

function App() {
  const [showLiked, setShowLiked] = useState(false);
  const [searchParameter, setSearchParameter] = useState("");

  return (
    <AppContextProvider>
      <Header setShowLiked={setShowLiked} />
      <Menu setSearchParameter={setSearchParameter} />
      {searchParameter === "" ? (
        <MainView />
      ) : (
        <ProductView
          searchParameter={searchParameter}
          setSearchParameter={setSearchParameter}
        />
      )}

      <Drawer showLiked={showLiked} setShowLiked={setShowLiked} />
    </AppContextProvider>
  );
}

export default App;
