import { Review } from '../../types/review';
import { sortReviews } from '../../utils/utils';
import ReviewItem from '../review-item/review-item';
const LIMIT_REVIEWS = 10;
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
        {reviews && sortReviews(reviews).slice(0,LIMIT_REVIEWS).map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </ul>
      {children}
    </section>
  );
}

export default ReviewList;
