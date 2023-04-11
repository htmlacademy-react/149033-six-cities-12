import React, { FormEvent } from 'react';
import { useState } from 'react';
import { RATING_STARS } from '../../const';
import RatingForm from '../rating-form/rating-form';
import { OfferId } from '../../types/offers';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setReviewFormBlocked } from '../../store/action';
import { sendReviewAction } from '../../store/api-actions';

type ReviewsFormProps = {
  offerId: OfferId;
};

function ReviewsForm({offerId}: ReviewsFormProps):JSX.Element {
  const dispatch = useAppDispatch();
  const isReviewFormBlocked = useAppSelector((state) => state.isReviewFormBlocked);

  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');

  const handleTextAreaChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };
  const handleInputChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRating(evt.target.value);
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (offerId && rating && comment) {
      dispatch(setReviewFormBlocked(true));

      dispatch(sendReviewAction({
        id: offerId,
        rating: +rating,
        comment: comment,
      }));

      setComment('');
      setRating('');
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <RatingForm ratingStars={RATING_STARS} handleInputChange={handleInputChange} />
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
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          {!isReviewFormBlocked ? 'Submit' : 'Sending...'}
        </button>
      </div>
    </form>
  );}

export default ReviewsForm;
