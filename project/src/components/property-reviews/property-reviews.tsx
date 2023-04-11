import { Review } from '../../types/review';
import ReviewsForm from '../reviews-form/reviews-form';
import Stars from '../stars/stars';

type PropertyReviewsProps = {
  reviews: Review[];
}

function PropertyReviews({reviews}: PropertyReviewsProps): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews && reviews.map((review) => (
          <li className="reviews__item" key={review.id}>
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img
                  className="reviews__avatar user__avatar"
                  src={review.user.avatarUrl}
                  width={54}
                  height={54}
                  alt="Reviews avatar"
                />
              </div>
              <span className="reviews__user-name">{review.user.name}</span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <Stars rating={review.rating}/>
                </div>
              </div>
              <p className="reviews__text">
                {review.comment}
              </p>
              <time className="reviews__time" dateTime={review.date}>
                {new Date(review.date).toLocaleString('ru-RU', {month: 'long', year: 'numeric'})}
              </time>
            </div>
          </li>
        ))}
      </ul>
      {/* <ReviewsForm /> */}
    </section>
  );
}

export default PropertyReviews;
