import { useContext, useEffect, useRef } from 'react';
import { AppContext } from '../context/AppContext';
import Image from './Image';
import Close from '../images/close.png';

const Drawer = ({
  handleDrawerClose,
  isDrawerOpen,
}: {
  isDrawerOpen: boolean;
  handleDrawerClose: () => void;
}) => {
  const { likedCards, removeLikedCard } = useContext(AppContext);
  let drawerRef = useRef<null | HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
      handleDrawerClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={
        !isDrawerOpen
          ? 'invisible'
          : 't-0 visible fixed left-0 z-10 h-screen w-screen bg-black bg-opacity-50 transition-all duration-300'
      }
    >
      <div
        className={`fixed right-0 z-20 flex h-full w-1/3 flex-col overflow-y-auto rounded-l-xl bg-white px-8 py-12 transition-transform duration-300 ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
        ref={drawerRef}
      >
        <div className="mb-6 flex justify-between border-b-[1px] border-gray-300 p-4">
          <p className="text-2xl uppercase">Your makeup kit</p>
          <div className="cursor-pointer" onClick={handleDrawerClose}>
            <Image imageSrc={Close} width={30} height={30} />
          </div>
        </div>
        <div className="flex flex-col gap-4 divide-y-2">
          {likedCards.map((card, i) => (
            <div key={i} className="flex gap-5 pt-3">
              <div className="shrink-0">
                <Image imageSrc={card.image_link} width={150} height={150} />
              </div>
              <div className="flex flex-col justify-start gap-3">
                <p className="text-md font-medium">{card.name}</p>
                <p>{card.product_type}</p>
                <p>{card.brand}</p>
              </div>
              <div className="ml-auto">
                <button
                  className="hover:font-medium"
                  onClick={() => removeLikedCard(card)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
