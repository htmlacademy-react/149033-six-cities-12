import { Review } from '../../types/review';
import Stars from '../stars/stars';

type ReviewItemProps = {
  review: Review;
}

function ReviewItem({review}: ReviewItemProps): JSX.Element {
  const {user, rating, date, comment} = review;
  const {name, avatarUrl} = user;
  return (
    <li className="reviews__item" data-testid="review-item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <Stars rating={rating}/>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>
          {new Date(date).toLocaleString('en-US', {month: 'long', year: 'numeric'})}
        </time>
      </div>
    </li>
  );
}

export default ReviewItem;
