import React from 'react';
import { useState } from 'react';

type RatingStarsProps = {
  ratingStars: string[];
}
function RatingForm({ratingStars}: RatingStarsProps):JSX.Element {
  const [rating, setRating] = useState<number | null>(null);

  const getFormRating = (currentRatingStars: string[]) => {
    const content = [];
    for (let i = currentRatingStars.length; i > 0; i--) {
      content.push(
        <React.Fragment key={i}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value={i}
            id = {`${i}-stars`}
            type="radio"
            onChange={() => setRating(i)}
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
    <React.Fragment>
      {getFormRating(ratingStars)}
    </React.Fragment>
  );}

export default RatingForm;
