import "./App.css";
import AppContextProvider from "./context/AppContext";
import Drawer from "./components/Drawer";
import { useState } from "react";
import Header from "./components/Header";
import SearchOverlay from "./components/SearchOverlay";
import ProductList from "./components/ProductList";

function App() {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showLiked, setShowLiked] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  return (
    <AppContextProvider>
      <div className="max-w-screen-2xl mx-auto">
        <Header
          setSuggestions={setSuggestions}
          setShowLiked={setShowLiked}
          setIsOverlayVisible={setIsOverlayVisible}
        />
        <ProductList />
        {isOverlayVisible && <SearchOverlay suggestions={suggestions} />}
        <Drawer showLiked={showLiked} setShowLiked={setShowLiked} />
      </div>
    </AppContextProvider>
  );
}

export default App;
