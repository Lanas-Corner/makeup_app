import { useContext, useState, useRef, useEffect } from "react";
import { Card } from "../hooks/useConfig";
import Placeholder from "../images/placeholder.jpg";
import Rating from "./Rating";
import TagList from "./TagList";
import ColorList from "./ColorList";
import Image from "./Image";
import { AppContext } from "../context/AppContext";

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
  function handleImageError() {
    setImageSrc(Placeholder);
  }

  useEffect(() => {
    if (descriptionRef.current) {
      const { scrollHeight, clientHeight } = descriptionRef.current;
      setIsDescriptionOverflowing(scrollHeight > clientHeight);
    }
  }, []);

  return (
    <div className="flex flex-col items-start p-6 bg-gray-100 px-14 py-12 rounded-2xl">
      <button
        onClick={() => setActiveCard(null)}
        className="p-4 mb-8 font-medium text-xl"
      >
        Back
      </button>
      <div className="flex gap-14 justify-center items-start">
        <div className="flex flex-col gap-2 items-center bg-white py-8 px-12 rounded-3xl shrink-0 h-auto">
          <Image imageSrc={card.image_link} width={300} height={350} />
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
            {card.brand && <span>{card.brand}</span>}
            {card.brand && card.product_type && ", "}
            {card.product_type && <span>{card.product_type}</span>}
          </p>
          <TagList tagList={card.tag_list} />
          <button
            className="ml-auto mt-4 px-12 py-3 bg-black rounded-2xl text-white text-semibold w-1/3"
            onClick={handleAdd}
          >
            {likedCards.some((likedCard) => likedCard.id === card.id)
              ? "Added"
              : "Add"}
          </button>
          <div
            className={
              "border-gray-300 border-t-[1px] pt-4 " +
              (!showDescription && "line-clamp-6")
            }
            ref={descriptionRef}
          >
            <p>{card.description}</p>
          </div>
          {isDescriptionOverflowing && (
            <button
              className="font-medium ml-auto"
              onClick={() => setShowDescription(!showDescription)}
            >
              {showDescription ? "show less" : "show more"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardView;
