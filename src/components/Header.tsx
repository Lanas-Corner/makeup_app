import MakeupKitBadge from "./MakeupKitBadge";
import SearchField from "./SearchField";

const Header = ({
  setSuggestions,
  setShowLiked,
  setIsOverlayVisible,
}: {
  setSuggestions: React.Dispatch<React.SetStateAction<string[]>>;
  setShowLiked: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOverlayVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex justify-center items-center p-3 gap-5">
      <h1 className="uppercase text-xl font-medium font-mono">Demo</h1>
      <div className="grow bg-black rounded-3xl p-2">
        <h1 className="text-white text-base font-semibold uppercase text-center">
          Create your makeup kit!
        </h1>
      </div>
      <SearchField
        setIsOverlayVisible={setIsOverlayVisible}
        setSuggestions={setSuggestions}
      />
      <MakeupKitBadge setShowLiked={setShowLiked} />
    </div>
  );
};

export default Header;
