import { useMediaQuery } from "../hooks/useMediaQuery";
import MakeupKitBadge from "./MakeupKitBadge";
import SearchField from "./SearchField";
import SearchIcon from "../images/search.png";

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
  const isMobile = useMediaQuery("(max-width: 640px)");
  function handleOverlayOpen() {
    setIsOverlayVisible(true);
  }
  return (
    <div className="flex justify-center items-center p-3 gap-5 max-sm:mt-6">
      <h1 className="uppercase text-xl font-medium font-mono max-sm:hidden">
        Demo
      </h1>
      <div className="grow bg-black rounded-3xl p-2 max-sm:p-4">
        <h1 className="text-white text-base font-semibold uppercase text-center max-sm:text-xl">
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
