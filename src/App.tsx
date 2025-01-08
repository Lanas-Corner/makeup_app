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
  const [activeIndex, setActiveIndex] = useState(-1);

  function handleOverlayClose() {
    setIsOverlayVisible(false);
    setActiveIndex(-1);
  }

  return (
    <AppContextProvider>
      <div className="flex flex-col relative max-w-screen-2xl min-h-screen w-full mx-auto px-3 box-border">
        <Header
          setSuggestions={setSuggestions}
          setShowLiked={setShowLiked}
          setIsOverlayVisible={setIsOverlayVisible}
          handleOverlayClose={handleOverlayClose}
          setStartsWithNum={setStartsWithNum}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          suggestions={suggestions}
        />
        <ProductList />
        {isOverlayVisible && (
          <SearchOverlay
            suggestions={suggestions}
            setIsOverlayVisible={setIsOverlayVisible}
            startsWithNum={startsWithNum}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        )}
        <Drawer showLiked={showLiked} setShowLiked={setShowLiked} />
      </div>
    </AppContextProvider>
  );
}

export default App;
