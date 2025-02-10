import { MouseEventHandler, useContext, useState } from 'react';
import { Card as CardType } from '../hooks/useConfig';
import Rating from './Rating';
import Placeholder from '../images/placeholder.jpg';
import TagList from './TagList';
import Image from './Image';
import { AppContext } from '../context/AppContext';
import { normalizeName } from '../utils';

const Card = ({
  card,
  setActiveCard,
}: {
  card: CardType;
  setActiveCard: React.Dispatch<React.SetStateAction<CardType | null>>;
}) => {
  const [imageSrc, setImageSrc] = useState(card.image_link);
  const { likedCards, addCard } = useContext(AppContext);

  function handleAdd(e: React.MouseEvent) {
    e.stopPropagation();
    addCard(card);
  }
  return (
    <div
      className="box-border flex cursor-pointer flex-col items-center justify-end gap-3 rounded-3xl bg-white px-4 py-9"
      onClick={() => {
        setActiveCard(card);
      }}
    >
      <TagList tagList={card.tag_list} />
      <Image imageSrc={card.image_link} width={200} height={293} />
      <div className="line-clamp-2 min-h-14">
        <p className="text-center text-xl font-medium">{card.name}</p>
      </div>
      <p>{normalizeName(card.product_type)}</p>
      {card.rating ? (
        <Rating rating={card.rating} />
      ) : (
        <p className="text-sm text-gray-400">no rating</p>
      )}
      <button
        className="text-semibold mt-4 rounded-2xl bg-black px-12 py-3 text-white"
        onClick={handleAdd}
      >
        {likedCards.some((likedCard) => likedCard.id === card.id)
          ? 'Added'
          : 'Add'}
      </button>
    </div>
  );
};

export default Card;
