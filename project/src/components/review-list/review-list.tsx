import { Review } from '../../types/review';
import ReviewItem from '../review-item/review-item';

type ReviewListProps = {
  reviews: Review[] | null;
  children?: JSX.Element;
}

function ReviewList({reviews, children}: ReviewListProps): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews?.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews && reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </ul>
      {children}
    </section>
  );
}

export default ReviewList;
