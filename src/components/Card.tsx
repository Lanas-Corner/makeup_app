import { useState } from "react";
import { Card as CardType } from "../hooks/useConfig";
import Rating from "./Rating";
import Placeholder from "../images/placeholder.jpg";
import TagList from "./TagList";
import Image from "./Image";

const Card = ({
  card,
  setActiveCard,
}: {
  card: CardType;
  setActiveCard: React.Dispatch<React.SetStateAction<CardType | null>>;
}) => {
  const [imageSrc, setImageSrc] = useState(card.image_link);

  function handleImageError() {
    setImageSrc(Placeholder);
  }
  return (
    <div
      className="flex flex-col justify-end box-border bg-white gap-3 px-4 py-9 items-center rounded-3xl cursor-pointer"
      onClick={() => {
        console.log(card.id);
        setActiveCard(card);
      }}
    >
      <TagList tagList={card.tag_list} />
      <Image imageSrc={card.image_link} isSmall />
      <div className="min-h-14 line-clamp-2">
        <p className="font-medium text-xl text-center">{card.name}</p>
      </div>
      <p>{card.product_type}</p>
      {card.rating ? (
        <Rating rating={card.rating} />
      ) : (
        <p className="text-gray-400 text-sm">no rating</p>
      )}
    </div>
  );
};

export default Card;
