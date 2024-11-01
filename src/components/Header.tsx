import MakeupKitBadge from "./MakeupKitBadge";
import SearchField from "./SearchField";

const Header = ({
  setShowLiked,
}: {
  setShowLiked: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex justify-center items-center p-3 gap-5">
      <h1 className="uppercase text-xl font-medium font-mono">Demo</h1>
      <div className="grow bg-black rounded-3xl p-2">
        <h1 className="text-white text-base font-semibold uppercase text-center">
          Create your makeup kit!
        </h1>
      </div>
      <SearchField />
      <MakeupKitBadge setShowLiked={setShowLiked} />
    </div>
  );
};

export default Header;
