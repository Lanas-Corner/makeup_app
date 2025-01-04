import { useState } from "react";
import { Card as CardType } from "../hooks/useConfig";
import Rating from "./Rating";
import Placeholder from "../images/placeholder.jpg";

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
      <div className="flex flex-wrap gap-2 justify-end ml-auto mb-auto">
        {card.tag_list.length > 0 &&
          card.tag_list.map((tag, i) => (
            <div key={i} className="px-2 py-1 bg-slate-200 rounded-2xl">
              <p>{tag}</p>
            </div>
          ))}
      </div>
      <img
        src={imageSrc}
        alt="product"
        width={200}
        onError={handleImageError}
      />
      <p className="text-lg font-medium capitalize">{card.id}</p>
      <p>{card.product_type}</p>
      <p>{card.name}</p>
      {/* <p>{card.image_link}</p> */}
      {card.rating ? (
        <Rating rating={card.rating} />
      ) : (
        <p className="text-gray-400 text-sm">no rating</p>
      )}
    </div>
  );
};

export default Card;
