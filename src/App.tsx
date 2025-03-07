import AppContextProvider from './context/AppContext';
import Drawer from './components/Drawer';
import { useCallback, useState } from 'react';
import Header from './components/Header';
import SearchOverlay from './components/SearchOverlay';
import ProductList from './components/ProductList';

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

  return (
    <AppContextProvider>
      <div className="relative mx-auto box-border flex min-h-screen w-full max-w-screen-2xl flex-col px-3">
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
            setSuggestions={setSuggestions}
            setStartsWithNum={setStartsWithNum}
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
