import { nanoid } from 'nanoid';
import React from 'react';
import { useState } from 'react';
import { RATING_STARS } from '../../const';

function ReviewsForm():JSX.Element {

  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');

  const handleTextAreaChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };
  const handleFieldChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setRating(evt.target.value);
  };
  const getFormRating = (currentRatingStars: string[]) => {
    const content = [];
    for (let i = currentRatingStars.length; i > 0; i--) {
      content.push(
        <React.Fragment key={nanoid()}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value={i}
            id = {`${i}-stars`}
            type="radio"
            onChange={handleFieldChange}
            checked={Number(rating) === i}
          />
          <label
            htmlFor={`${i}-stars`}
            className="reviews__rating-label form__rating-label"
            title={currentRatingStars[i]}
          >
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </React.Fragment>
      );
    }
    return content;
  };

  return (
    <form className="reviews__form form" action="#" method="post" data-reiting-reviews={rating}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {getFormRating(RATING_STARS)}
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
          Submit
        </button>
      </div>
    </form>
  );}

export default ReviewsForm;
