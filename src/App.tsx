import "./App.css";
import AppContextProvider from "./context/AppContext";
import Drawer from "./components/Drawer";
import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import SearchOverlay from "./components/SearchOverlay";
import ProductList from "./components/ProductList";

function App() {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [startsWithNum, setStartsWithNum] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  function handleDrawerOpen() {
    if (!isDrawerOpen) {
      setIsDrawerOpen(true);
    }
  }

  const handleDrawerClose = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  function handleOverlayClose() {
    setIsOverlayVisible(false);
    setActiveIndex(-1);
  }

  console.log(isDrawerOpen);

  return (
    <AppContextProvider>
      <div className="flex flex-col relative max-w-screen-2xl min-h-screen w-full mx-auto px-3 box-border">
        <Header
          setSuggestions={setSuggestions}
          handleDrawerOpen={handleDrawerOpen}
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
        <Drawer
          isDrawerOpen={isDrawerOpen}
          handleDrawerClose={handleDrawerClose}
        />
      </div>
    </AppContextProvider>
  );
}

export default App;
