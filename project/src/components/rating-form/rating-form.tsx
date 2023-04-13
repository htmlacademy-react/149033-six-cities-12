import React from 'react';

type RatingStarsProps = {
  ratingStars: string[];
  handleInputChange:(evt: React.ChangeEvent<HTMLInputElement>) => void;
  rating: string | null;
}
function RatingForm({ratingStars, handleInputChange, rating}: RatingStarsProps):JSX.Element {
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
            onChange={handleInputChange}
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
