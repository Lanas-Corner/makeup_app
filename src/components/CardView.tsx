import { useContext, useState, useRef, useEffect } from 'react';
import { Card } from '../hooks/useConfig';
import Rating from './Rating';
import TagList from './TagList';
import ColorList from './ColorList';
import Image from './Image';
import { AppContext } from '../context/AppContext';

const CardView = ({
  card,
  setActiveCard,
}: {
  card: Card;
  setActiveCard: React.Dispatch<React.SetStateAction<Card | null>>;
}) => {
  const [imageSrc, setImageSrc] = useState(card.image_link);
  const [showDescription, setShowDescription] = useState(false);
  const [isDescriptionOverflowing, setIsDescriptionOverflowing] =
    useState(false);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const { likedCards, addCard } = useContext(AppContext);

  function handleAdd(e: React.MouseEvent) {
    e.stopPropagation();
    addCard(card);
  }

  useEffect(() => {
    if (descriptionRef.current) {
      const { scrollHeight, clientHeight } = descriptionRef.current;
      setIsDescriptionOverflowing(scrollHeight > clientHeight);
    }
  }, []);

  return (
    <div className="flex flex-col items-start rounded-2xl p-6 px-14 py-12">
      <button
        onClick={() => setActiveCard(null)}
        className="mb-8 p-4 text-xl font-medium"
      >
        Back
      </button>
      <div className="flex items-start justify-center gap-14">
        <div className="flex h-auto shrink-0 flex-col items-center gap-2 rounded-3xl bg-white px-12 py-8">
          <Image imageSrc={card.image_link} width={300} height={350} />
          <ColorList colorList={card.product_colors} />
        </div>
        <div className="flex w-1/2 flex-col gap-5 p-4">
          {card.rating && (
            <div className="mt-5">
              <Rating rating={card.rating} />
            </div>
          )}
          <p className="text-3xl font-medium">{card.name}</p>
          <p className="uppercase">
            {card.brand && <span>{card.brand}</span>}
            {card.brand && card.product_type && ', '}
            {card.product_type && <span>{card.product_type}</span>}
          </p>
          <TagList tagList={card.tag_list} />
          <button
            className="text-semibold ml-auto mt-4 w-1/3 rounded-2xl bg-black px-12 py-3 text-white"
            onClick={handleAdd}
          >
            {likedCards.some((likedCard) => likedCard.id === card.id)
              ? 'Added'
              : 'Add'}
          </button>
          <div
            className={
              'border-t-[1px] border-gray-300 pt-4 ' +
              (!showDescription && 'line-clamp-6')
            }
            ref={descriptionRef}
          >
            <p>{card.description}</p>
          </div>
          {isDescriptionOverflowing && (
            <button
              className="ml-auto font-medium"
              onClick={() => setShowDescription(!showDescription)}
            >
              {showDescription ? 'show less' : 'show more'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardView;
