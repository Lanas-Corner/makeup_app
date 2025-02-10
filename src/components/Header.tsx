import { useMediaQuery } from '../hooks/useMediaQuery';
import MakeupKitBadge from './MakeupKitBadge';
import SearchField from './SearchField';
import SearchIcon from '../images/search.png';

const Header = ({
  setSuggestions,
  handleDrawerOpen,
  setIsOverlayVisible,
  handleOverlayClose,
  setStartsWithNum,
  activeIndex,
  setActiveIndex,
  suggestions,
}: {
  setSuggestions: React.Dispatch<React.SetStateAction<string[]>>;
  handleDrawerOpen: () => void;
  setIsOverlayVisible: React.Dispatch<React.SetStateAction<boolean>>;
  handleOverlayClose: () => void;
  setStartsWithNum: React.Dispatch<React.SetStateAction<number>>;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  suggestions: string[];
}) => {
  const isMobile = useMediaQuery('(max-width: 640px)');
  function handleOverlayOpen() {
    setIsOverlayVisible(true);
  }
  return (
    <div className="flex items-center justify-center gap-5 p-3 max-sm:mt-6">
      <h1 className="font-mono text-xl font-medium uppercase max-sm:hidden">
        Demo
      </h1>
      <div className="grow rounded-3xl bg-black p-2 max-sm:p-4">
        <h1 className="text-center text-base font-semibold uppercase text-white max-sm:text-xl">
          Create your makeup kit!
        </h1>
      </div>
      {isMobile ? (
        <div onClick={handleOverlayOpen}>
          <img src={SearchIcon} width={50} height={50} alt="search" />
        </div>
      ) : (
        <SearchField
          setIsOverlayVisible={setIsOverlayVisible}
          handleOverlayClose={handleOverlayClose}
          setSuggestions={setSuggestions}
          setStartsWithNum={setStartsWithNum}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          suggestions={suggestions}
        />
      )}
      <MakeupKitBadge handleDrawerOpen={handleDrawerOpen} />
    </div>
  );
};

export default Header;
