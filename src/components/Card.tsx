import { Card as CardType } from "../hooks/useConfig";
import Rating from "./Rating";

const Card = ({ card }: { card: CardType }) => {
  return (
    <div className="flex flex-col box-border bg-white gap-3 px-4 py-9 items-center ">
      <div className="flex flex-wrap gap-2 justify-end ml-auto">
        {card.tag_list.length > 0 &&
          card.tag_list.map((tag, i) => (
            <div key={i} className="px-2 py-1 bg-slate-200 rounded-2xl">
              <p>{tag}</p>
            </div>
          ))}
      </div>
      <img src={card.image_link} alt="product" width={200} />
      <p className="text-lg font-medium capitalize">{card.brand}</p>
      <p>{card.product_type}</p>
      <Rating rating={card.rating} />
    </div>
  );
};

export default Card;
