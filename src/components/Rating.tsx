import starFilled from '../images/starRateFilled.svg';
import starEmpty from '../images/starRateNotFilled.svg';

const Rating = ({ rating }: { rating: number }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex">
      {stars.map((star, i) =>
        star < rating ? (
          <img src={starFilled} key={i} alt="filled" width={20} />
        ) : (
          <img src={starEmpty} key={i} alt="empty" width={20} />
        ),
      )}
    </div>
  );
};

export default Rating;
