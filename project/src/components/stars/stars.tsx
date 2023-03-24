import { calcRating } from '../../utils';
type StarsProps = {
  rating: number;
}

function Stars({rating}:StarsProps):JSX.Element {
  return (
    <>
      <span style={{ width: calcRating(rating) }} />
      <span className="visually-hidden">Rating</span>
    </>

  );
}

export default Stars;
