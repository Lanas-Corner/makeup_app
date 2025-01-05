import { useState } from "react";
import { Card } from "../hooks/useConfig";
import Placeholder from "../images/placeholder.jpg";
import Rating from "./Rating";
import TagList from "./TagList";
import ColorList from "./ColorList";
import Image from "./Image";

const CardView = ({
  card,
  setActiveCard,
}: {
  card: Card;
  setActiveCard: React.Dispatch<React.SetStateAction<Card | null>>;
}) => {
  const [imageSrc, setImageSrc] = useState(card.image_link);
  function handleImageError() {
    setImageSrc(Placeholder);
  }
  return (
    <div className="flex flex-col items-start p-6 bg-gray-100 px-14 py-12 rounded-2xl">
      <button
        onClick={() => setActiveCard(null)}
        className="p-4 mb-8 font-medium text-xl"
      >
        Back
      </button>
      <div className="flex gap-14 justify-center items-center">
        <div className="flex flex-col gap-2 items-center bg-white py-8 px-12 rounded-3xl shrink-0 h-auto">
          <Image imageSrc={card.image_link} isSmall={false} />
          <ColorList colorList={card.product_colors} />
        </div>
        <div className="flex flex-col p-4 gap-5 w-1/2">
          {card.rating && (
            <div className="mt-5">
              <Rating rating={card.rating} />
            </div>
          )}
          <p className="text-3xl font-medium">{card.name}</p>
          <p className="uppercase">
            {card.brand}, {card.product_type}
          </p>
          <TagList tagList={card.tag_list} />
          <div className="border-gray-300 border-t-[1px] pt-4">
            <p>{card.description}</p>
            <p>blabla</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardView;
