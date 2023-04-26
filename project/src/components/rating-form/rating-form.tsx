import React from 'react';
import { RATING_STARS } from '../../const';

type RatingStarsProps = {
  handleInputChange:(evt: React.ChangeEvent<HTMLInputElement>) => void;
  rating: string | null;
}
function RatingForm({ handleInputChange, rating}: RatingStarsProps):JSX.Element {
  const getFormRating = () => {
    const content = [];
    for (let i = RATING_STARS.length - 1; i > 0; i--) {
      content.push(
        <React.Fragment key={i}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value={i}
            id = {`${i}-stars`}
            type="radio"
            onChange={handleInputChange}
            checked={Number(rating) === i}
          />
          <label
            htmlFor={`${i}-stars`}
            className="reviews__rating-label form__rating-label"
            title={RATING_STARS[i]}
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
      {getFormRating()}
    </React.Fragment>
  );}

export default RatingForm;
