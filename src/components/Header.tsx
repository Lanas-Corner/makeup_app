import MakeupKitBadge from "./MakeupKitBadge";
import SearchField from "./SearchField";

const Header = ({
  setShowLiked,
}: {
  setShowLiked: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex">
      <h1>Create your makeup kit!</h1>
      <SearchField />
      <MakeupKitBadge setShowLiked={setShowLiked} />
    </div>
  );
};

export default Header;
