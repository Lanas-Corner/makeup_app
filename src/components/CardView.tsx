import { useState } from "react";
import { Card } from "../hooks/useConfig";
import Placeholder from "../images/placeholder.jpg";
import Rating from "./Rating";

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
    <div className="flex flex-col items-start p-6 bg-gray-100 px-14 py-20 rounded-2xl">
      <button
        onClick={() => setActiveCard(null)}
        className="p-4 mb-8 font-medium text-xl"
      >
        Back
      </button>
      <div className="flex gap-14">
        <div className="bg-white p-8 rounded-3xl shrink-0">
          <img src={card.image_link} alt="card" width={300} />
        </div>
        <div className="flex flex-col p-4 gap-5">
          <p className="text-3xl font-medium">{card.name}</p>
          <p>{card.brand}</p>
          <p>{card.product_type}</p>
          <p>{card.description}</p>
        </div>
      </div>
      <div className="mt-5">
        <Rating rating={card.rating} />
      </div>
    </div>
  );
};

export default CardView;
