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
  const [startsWithNum, setStartsWithNum] = useState<number>(0);

  return (
    <AppContextProvider>
      <div className="relative max-w-screen-2xl w-full mx-auto">
        <Header
          setSuggestions={setSuggestions}
          setShowLiked={setShowLiked}
          setIsOverlayVisible={setIsOverlayVisible}
          setStartsWithNum={setStartsWithNum}
        />
        <ProductList />
        {isOverlayVisible && (
          <SearchOverlay
            suggestions={suggestions}
            setIsOverlayVisible={setIsOverlayVisible}
            startsWithNum={startsWithNum}
          />
        )}
        <Drawer showLiked={showLiked} setShowLiked={setShowLiked} />
      </div>
    </AppContextProvider>
  );
}

export default App;
