import { MouseEventHandler, useContext, useState } from "react";
import { Card as CardType } from "../hooks/useConfig";
import Rating from "./Rating";
import Placeholder from "../images/placeholder.jpg";
import TagList from "./TagList";
import Image from "./Image";
import { AppContext } from "../context/AppContext";
import { normalizeName } from "../utils";

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
      className="flex flex-col justify-end box-border bg-white gap-3 px-4 py-9 items-center rounded-3xl cursor-pointer"
      onClick={() => {
        setActiveCard(card);
      }}
    >
      <TagList tagList={card.tag_list} />
      <Image imageSrc={card.image_link} width={200} height={293} />
      <div className="min-h-14 line-clamp-2">
        <p className="font-medium text-xl text-center">{card.name}</p>
      </div>
      <p>{normalizeName(card.product_type)}</p>
      {card.rating ? (
        <Rating rating={card.rating} />
      ) : (
        <p className="text-gray-400 text-sm">no rating</p>
      )}
      <button
        className="mt-4 px-12 py-3 bg-black rounded-2xl text-white text-semibold"
        onClick={handleAdd}
      >
        {likedCards.some((likedCard) => likedCard.id === card.id)
          ? "Added"
          : "Add"}
      </button>
    </div>
  );
};

export default Card;
