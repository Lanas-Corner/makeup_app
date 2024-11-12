import "./App.css";
import AppContextProvider from "./context/AppContext";
import Drawer from "./components/Drawer";
import { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import MainView from "./views/MainView";
import ProductView from "./views/ProductView";
import SearchOverlay from "./components/SearchOverlay";

function App() {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showLiked, setShowLiked] = useState(false);
  const [searchParameter, setSearchParameter] = useState("");
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  return (
    <AppContextProvider>
      <div className="max-w-screen-2xl mx-auto">
        <Header
          setSuggestions={setSuggestions}
          setShowLiked={setShowLiked}
          setIsOverlayVisible={setIsOverlayVisible}
        />
        {isOverlayVisible && <SearchOverlay suggestions={suggestions} />}
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
      </div>
    </AppContextProvider>
  );
}

export default App;
