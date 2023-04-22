import React, { FormEvent } from 'react';
import { useState } from 'react';
import { RATING_STARS } from '../../const';
import RatingForm from '../rating-form/rating-form';
import { OfferId } from '../../types/offers';
import { useAppDispatch } from '../../hooks';
import { sendReviewAction } from '../../store/offer-data/api-actions';
const LIMIT_CARACTERS = 50;
type ReviewsFormProps = {
  offerId: OfferId;
};

function ReviewsForm({offerId}: ReviewsFormProps):JSX.Element {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const resetForm = () => {
    setComment('');
    setRating('');
  };
  const handleTextAreaChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };
  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setRating(evt.target.value);
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (offerId && rating && comment) {
      setIsLoading(true);

      dispatch(sendReviewAction({
        id: offerId,
        rating: +rating,
        comment: comment,
      }));

      resetForm();
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <RatingForm ratingStars={RATING_STARS} handleInputChange={handleInputChange} rating={rating}/>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleTextAreaChange}
        value={comment}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">{LIMIT_CARACTERS} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={comment.length < LIMIT_CARACTERS || !isLoading }
        >
          {isLoading ? 'Submit' : 'Sending...'}
        </button>
      </div>
    </form>
  );}

export default ReviewsForm;
